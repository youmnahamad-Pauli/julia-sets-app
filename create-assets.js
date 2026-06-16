/**
 * Creates minimal valid PNG placeholder files for all Expo asset slots.
 * Each PNG is a 1×1 pixel image in aubergine (#3D1B3F).
 * Run once with: node create-assets.js
 */
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// ── CRC-32 (PNG standard polynomial) ────────────────────────────────────────
const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  crcTable[i] = c;
}
function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

// ── PNG chunk builder ────────────────────────────────────────────────────────
function chunk(type, data) {
  const t   = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const cBuf= Buffer.alloc(4); cBuf.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, cBuf]);
}

// ── Build a W×H RGB PNG filled with (r,g,b) ─────────────────────────────────
function makePNG(w, h, r, g, b) {
  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 2;  // colour type: RGB truecolour
  // bytes 10-12 = 0 (deflate / no filter / no interlace)

  // Raw scanlines: each row has 1 filter byte (0 = None) + W*3 pixel bytes
  const raw = Buffer.alloc(h * (1 + w * 3));
  for (let y = 0; y < h; y++) {
    raw[y * (1 + w * 3)] = 0; // filter byte
    for (let x = 0; x < w; x++) {
      const off = y * (1 + w * 3) + 1 + x * 3;
      raw[off] = r; raw[off + 1] = g; raw[off + 2] = b;
    }
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]), // PNG sig
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ── Write all required asset files ──────────────────────────────────────────
const assetsDir = path.join(__dirname, 'assets');
fs.mkdirSync(assetsDir, { recursive: true });

// Aubergine (#3D1B3F) placeholder — big enough for Expo to accept
const files = {
  'icon.png':          makePNG(1024, 1024, 0x3D, 0x1B, 0x3F),
  'splash-icon.png':   makePNG(1284, 1284, 0x3D, 0x1B, 0x3F),
  'splash.png':        makePNG(1284, 1284, 0x3D, 0x1B, 0x3F),
  'adaptive-icon.png': makePNG(1024, 1024, 0x3D, 0x1B, 0x3F),
  'favicon.png':       makePNG(48,   48,   0x3D, 0x1B, 0x3F),
};

for (const [name, buf] of Object.entries(files)) {
  const dest = path.join(assetsDir, name);
  fs.writeFileSync(dest, buf);
  console.log(`✓ ${dest}  (${buf.length} bytes)`);
}

console.log('\nAll asset placeholders created.');
