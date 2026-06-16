import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// ─────────────────────────────────────────────────────────────────────────────
// StepDiagram v3 — fully dynamic, category-driven, no hardcoded numbers
// All 17 learn bank categories covered
// ─────────────────────────────────────────────────────────────────────────────

export type DiagramPhase = 'intro' | 'mid' | 'result';

export function phaseFor(stepIdx: number, total: number): DiagramPhase {
  if (stepIdx === 0) return 'intro';
  if (stepIdx >= total - 1) return 'result';
  return 'mid';
}

interface Props {
  question: string;
  answer: number;
  category: string;
  method: 'vedic' | 'decompose' | 'visualize';
  phase: DiagramPhase;
  color: string;
}

const SW = Dimensions.get('window').width - 64;

// ── Colour palette ─────────────────────────────────────────────────────────
const BG    = '#F3EFF8';
const AMBER = '#F0A832';
const CORAL = '#E8563A';
const GREEN = '#22C55E';
const LAV   = '#B591C7';
const DARK  = '#1A1A1A';
const WHITE = '#FFFFFF';
const BLUE  = '#3B82F6';
const PINK  = '#E8A8C0';

// ── Helpers ────────────────────────────────────────────────────────────────
function parseQuestion(q: string): { a: number; b: number; op: string } | null {
  const clean = q.replace(/,/g, '');
  const m = clean.match(/(-?\d+(?:\.\d+)?)\s*([+\-×÷\/*])\s*(-?\d+(?:\.\d+)?)/);
  if (!m) return null;
  return { a: parseFloat(m[1]), op: m[2], b: parseFloat(m[3]) };
}

function parseFraction(q: string): { num: number; den: number } | null {
  const m = q.match(/(\d+)\s*\/\s*(\d+)/);
  if (!m) return null;
  return { num: parseInt(m[1]), den: parseInt(m[2]) };
}

// ── Shared UI atoms ────────────────────────────────────────────────────────
function Pill({ label, bg }: { label: string; bg: string }) {
  return (
    <View style={[d.pill, { backgroundColor: bg }]}>
      <Text style={d.pillTxt}>{label}</Text>
    </View>
  );
}

function Chip({ n, bg = AMBER, size = 44, textSize = 20 }: { n: number | string; bg?: string; size?: number; textSize?: number }) {
  return (
    <View style={[d.chip, { width: size, height: size, borderRadius: size * 0.28, backgroundColor: bg }]}>
      <Text style={[d.chipTxt, { fontSize: textSize }]}>{n}</Text>
    </View>
  );
}

function ResultRow({ text }: { text: string }) {
  return (
    <View style={d.resultRow}>
      <Text style={d.resultEq}>{text}</Text>
    </View>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DIAGRAM COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

// ── 1. Number Line (addition, subtraction, count on/back) ──────────────────
function NumberLineDiagram({ a, b, op, color, phase }: {
  a: number; b: number; op: string; color: string; phase: DiagramPhase;
}) {
  const isAdd = op === '+';
  const start = isAdd ? a : Math.min(a, b);
  const end   = isAdd ? a + b : Math.max(a, b);
  const jump  = Math.abs(b);
  const result = isAdd ? a + b : a - b;

  const range = end - start || 1;
  const tickCount = Math.min(7, range + 1);
  const step = range / (tickCount - 1);
  const ticks = Array.from({ length: tickCount }, (_, i) => +(start + i * step).toFixed(1));

  const startPct = ((a - start) / range) * 100;
  const endPct = ((end - start) / range) * 100;

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={isAdd ? `Start at ${a}, jump +${b}` : `Start at ${a}, move −${jump}`} bg={color} />
      <View style={{ marginTop: 24, marginHorizontal: 4, width: SW - 28 }}>
        <View style={{ height: 32, position: 'relative', marginBottom: 2 }}>
          <View style={[d.arc, {
            left: `${Math.min(startPct, endPct)}%` as any,
            width: `${Math.abs(endPct - startPct)}%` as any,
            borderColor: CORAL,
          }]} />
          <View style={[d.arcLabel, { left: `${(startPct + endPct) / 2 - 8}%` as any }]}>
            <Text style={{ fontSize: 11, fontWeight: '800', color: CORAL }}>
              {isAdd ? `+${b}` : `−${jump}`}
            </Text>
          </View>
        </View>
        <View style={[d.track, { backgroundColor: AMBER }]} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
          {ticks.map((v, i) => {
            const isStart = v === a;
            const isEnd = v === end;
            return (
              <View key={i} style={{ alignItems: 'center' }}>
                <View style={[d.tick, { backgroundColor: isStart ? CORAL : isEnd ? GREEN : DARK }]} />
                <Text style={[d.tickLabel, {
                  color: isStart ? CORAL : isEnd ? GREEN : DARK,
                  fontWeight: (isStart || isEnd) ? '800' : '600',
                }]}>{v}</Text>
              </View>
            );
          })}
        </View>
      </View>
      {phase === 'result' && <ResultRow text={`${a} ${op} ${b} = ${result}`} />}
    </View>
  );
}

// ── 2. Signed Number Line (integers & negatives) ───────────────────────────
function SignedNumberLine({ a, b, op, color, phase }: {
  a: number; b: number; op: string; color: string; phase: DiagramPhase;
}) {
  const result = op === '+' ? a + b : a - b;
  const allVals = [0, a, result];
  const minV = Math.min(...allVals) - 1;
  const maxV = Math.max(...allVals) + 1;
  const range = maxV - minV || 1;

  const tickCount = Math.min(9, range + 1);
  const step = range / (tickCount - 1);
  const ticks = Array.from({ length: tickCount }, (_, i) => Math.round(minV + i * step));

  const pctOf = (v: number) => ((v - minV) / range) * 100;
  const zeroPct = pctOf(0);
  const startPct = pctOf(a);
  const endPct = pctOf(result);

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`${a} ${op} ${b}`} bg={color} />
      <View style={{ marginTop: 24, marginHorizontal: 4, width: SW - 28 }}>
        <View style={{ height: 32, position: 'relative', marginBottom: 2 }}>
          <View style={[d.arc, {
            left: `${Math.min(startPct, endPct)}%` as any,
            width: `${Math.abs(endPct - startPct)}%` as any,
            borderColor: result >= a ? GREEN : CORAL,
          }]} />
        </View>
        <View style={{ position: 'relative', height: 10, backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: 5 }}>
          <View style={[d.track, { backgroundColor: AMBER, position: 'absolute', left: 0, right: 0 }]} />
          {/* Zero marker */}
          <View style={[d.zeroMark, { left: `${zeroPct}%` as any }]} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
          {ticks.map((v, i) => (
            <View key={i} style={{ alignItems: 'center' }}>
              <View style={[d.tick, { backgroundColor: v === 0 ? DARK : v === a ? CORAL : v === result ? GREEN : 'rgba(0,0,0,0.3)' }]} />
              <Text style={[d.tickLabel, { color: v === 0 ? DARK : v === a ? CORAL : v === result ? GREEN : 'rgba(0,0,0,0.5)', fontWeight: v === 0 || v === a || v === result ? '800' : '500' }]}>{v}</Text>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 }}>
          <Text style={{ fontSize: 10, color: 'rgba(0,0,0,0.4)', fontWeight: '700' }}>← negative</Text>
          <Text style={{ fontSize: 10, color: 'rgba(0,0,0,0.4)', fontWeight: '700' }}>positive →</Text>
        </View>
      </View>
      {phase === 'result' && <ResultRow text={`${a} ${op} ${b} = ${result}`} />}
    </View>
  );
}

// ── 3. Column Decompose (addition) ─────────────────────────────────────────
function DecomposeAddDiagram({ a, b, color, phase }: {
  a: number; b: number; color: string; phase: DiagramPhase;
}) {
  const places = (n: number) => {
    const s = String(Math.abs(Math.round(n)));
    return s.split('').reverse().map((digit, i) => ({
      digit: Number(digit),
      label: ['ones', 'tens', 'hundreds', 'thousands', 'ten-thousands'][i] ?? `10^${i}`,
    })).reverse();
  };
  const aParts = places(a);
  const bParts = places(b);

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label="Break apart to add" bg={color} />
      <View style={d.decompRow}>
        {aParts.map((p, i) => (
          <View key={i} style={d.decompCol}>
            <Chip n={p.digit} bg={AMBER} />
            <Text style={d.decompLabel}>{p.label}</Text>
          </View>
        ))}
        <Text style={d.decompOp}>+</Text>
        {bParts.map((p, i) => (
          <View key={i} style={d.decompCol}>
            <Chip n={p.digit} bg={color} />
            <Text style={d.decompLabel}>{p.label}</Text>
          </View>
        ))}
      </View>
      {phase !== 'intro' && <ResultRow text={`${a} + ${b} = ${a + b}`} />}
    </View>
  );
}

// ── 4. Grouping Dots (division) ────────────────────────────────────────────
function GroupingDiagram({ dividend, divisor, color, phase }: {
  dividend: number; divisor: number; color: string; phase: DiagramPhase;
}) {
  const perGroup = dividend / divisor;
  const displayGroups = Math.min(divisor, 6);
  const displayPer = Math.min(Math.round(perGroup), 6);

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`${dividend} ÷ ${divisor} = ${divisor} groups of ${perGroup}`} bg={color} />
      <View style={d.groupsRow}>
        {Array.from({ length: displayGroups }).map((_, gi) => (
          <View key={gi} style={d.groupBox}>
            <View style={d.dotsGrid}>
              {Array.from({ length: displayPer }).map((_, di) => (
                <View key={di} style={[d.dot, { backgroundColor: gi === 0 ? CORAL : AMBER }]} />
              ))}
            </View>
            <Text style={d.groupLabel}>{perGroup}</Text>
          </View>
        ))}
        {displayGroups < divisor && (
          <Text style={[d.groupLabel, { alignSelf: 'center', fontSize: 22 }]}>…</Text>
        )}
      </View>
      {phase === 'result' && <ResultRow text={`${dividend} ÷ ${divisor} = ${perGroup}`} />}
    </View>
  );
}

// ── 5. Area Model (multiplication, decompose/visualize) ────────────────────
function AreaModelDiagram({ a, b, color, phase }: {
  a: number; b: number; color: string; phase: DiagramPhase;
}) {
  const splitNum = (n: number) => {
    const abs = Math.abs(Math.round(n));
    if (abs >= 10000) { const h = Math.floor(abs / 10000) * 10000; return [h, abs - h].filter(v => v > 0); }
    if (abs >= 1000)  { const h = Math.floor(abs / 1000) * 1000;   return [h, abs - h].filter(v => v > 0); }
    if (abs >= 100)   { const h = Math.floor(abs / 100) * 100;     return [h, abs - h].filter(v => v > 0); }
    if (abs >= 10)    { const h = Math.floor(abs / 10) * 10;       return [h, abs - h].filter(v => v > 0); }
    return [abs];
  };
  const aParts = splitNum(a);
  const bParts = splitNum(b);
  const cells = aParts.flatMap(ap => bParts.map(bp => ({ ap, bp, val: ap * bp })));
  const result = a * b;

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`${a.toLocaleString()} × ${b.toLocaleString()} — area model`} bg={color} />
      <View style={d.gridWrap}>
        {cells.map((c, i) => (
          <View key={i} style={[d.gridCell, { backgroundColor: i % 2 === 0 ? color : AMBER }]}>
            <Text style={d.gridSmall}>{c.ap.toLocaleString()}×{c.bp.toLocaleString()}</Text>
            <Text style={d.gridVal}>{c.val.toLocaleString()}</Text>
          </View>
        ))}
      </View>
      {phase === 'result' && (
        <ResultRow text={`${a.toLocaleString()} × ${b.toLocaleString()} = ${result.toLocaleString()}`} />
      )}
    </View>
  );
}

// ── 6. Vedic Steps (multiplication, division) ──────────────────────────────
function VedicDiagram({ a, b, color, phase }: {
  a: number; b: number; color: string; phase: DiagramPhase;
}) {
  const a2d = Math.abs(a) % 100;
  const b2d = Math.abs(b) % 100;
  const a1 = Math.floor(a2d / 10), a2 = a2d % 10;
  const b1 = Math.floor(b2d / 10), b2 = b2d % 10;
  const cross = a1 * b2 + a2 * b1;
  const result = a * b;

  if (phase === 'intro') {
    return (
      <View style={[d.box, { backgroundColor: BG }]}>
        <Pill label={`Step 1 — units: ${a2} × ${b2}`} bg={color} />
        <View style={d.vedicRow}>
          <Chip n={a1} bg={AMBER} /><Chip n={a2} bg={AMBER} />
          <Text style={d.vedicX}>×</Text>
          <Chip n={b1} bg={color} /><Chip n={b2} bg={color} />
        </View>
        <ResultRow text={`Units: ${a2} × ${b2} = ${a2 * b2}`} />
      </View>
    );
  }
  if (phase === 'mid') {
    return (
      <View style={[d.box, { backgroundColor: BG }]}>
        <Pill label={`Step 2 — cross: ${a1}×${b2} + ${a2}×${b1}`} bg={color} />
        <View style={d.vedicRow}>
          <Chip n={a1} bg={AMBER} /><Chip n={a2} bg={AMBER} />
          <Text style={d.vedicX}>×</Text>
          <Chip n={b1} bg={color} /><Chip n={b2} bg={color} />
        </View>
        <ResultRow text={`Tens: ${a1}×${b2} + ${a2}×${b1} = ${cross}`} />
      </View>
    );
  }
  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`${a.toLocaleString()} × ${b.toLocaleString()}`} bg={color} />
      <ResultRow text={`${a.toLocaleString()} × ${b.toLocaleString()} = ${result.toLocaleString()}`} />
    </View>
  );
}

// ── 7. Skip Counting ───────────────────────────────────────────────────────
function SkipCountingDiagram({ skip, color }: { skip: number; color: string }) {
  const steps = 7;
  const values = Array.from({ length: steps }, (_, i) => i * skip);
  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`Count by ${skip}s`} bg={color} />
      <View style={d.skipRow}>
        {values.map((v, i) => (
          <Chip key={i} n={v} bg={i % 2 === 0 ? color : AMBER} size={40} textSize={15} />
        ))}
        <View style={[d.chip, { width: 40, height: 40, borderRadius: 11, backgroundColor: 'rgba(0,0,0,0.1)' }]}>
          <Text style={[d.chipTxt, { fontSize: 18, color: DARK }]}>…</Text>
        </View>
      </View>
      <View style={d.skipArrows}>
        {Array.from({ length: steps - 1 }).map((_, i) => (
          <Text key={i} style={[d.skipArrow, { color }]}>+{skip}</Text>
        ))}
      </View>
    </View>
  );
}

// ── 8. Double & Half ───────────────────────────────────────────────────────
function DoubleHalfDiagram({ a, color }: { a: number; color: string }) {
  const doubled = a * 2;
  const halved = a % 2 === 0 ? a / 2 : (a / 2).toFixed(1);
  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <View style={d.dhRow}>
        <View style={d.dhSide}>
          <Pill label="× 2 (Double)" bg={AMBER} />
          <View style={d.dhNum}><Text style={d.dhNumTxt}>{a}</Text></View>
          <Text style={[d.dhArrow, { color: AMBER }]}>↓</Text>
          <View style={[d.dhNum, { backgroundColor: AMBER }]}>
            <Text style={[d.dhNumTxt, { color: WHITE }]}>{doubled}</Text>
          </View>
        </View>
        <View style={[d.dhDivider]} />
        <View style={d.dhSide}>
          <Pill label="÷ 2 (Half)" bg={color} />
          <View style={d.dhNum}><Text style={d.dhNumTxt}>{a}</Text></View>
          <Text style={[d.dhArrow, { color }]}>↓</Text>
          <View style={[d.dhNum, { backgroundColor: color }]}>
            <Text style={[d.dhNumTxt, { color: WHITE }]}>{halved}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// ── 9. Odd & Even dots ─────────────────────────────────────────────────────
function OddEvenDiagram({ n, color }: { n: number; color: string }) {
  const isEven = n % 2 === 0;
  const display = Math.min(n, 10);
  const pairs = Math.floor(display / 2);
  const leftover = display % 2;

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`Is ${n} odd or even?`} bg={color} />
      <View style={d.pairsRow}>
        {Array.from({ length: pairs }).map((_, i) => (
          <View key={i} style={d.pairCol}>
            <View style={[d.dot, { backgroundColor: AMBER, width: 18, height: 18, borderRadius: 9 }]} />
            <View style={[d.dot, { backgroundColor: AMBER, width: 18, height: 18, borderRadius: 9 }]} />
          </View>
        ))}
        {leftover > 0 && (
          <View style={d.pairCol}>
            <View style={[d.dot, { backgroundColor: CORAL, width: 18, height: 18, borderRadius: 9 }]} />
            <View style={[d.dot, { backgroundColor: 'transparent', borderWidth: 2, borderColor: CORAL, width: 18, height: 18, borderRadius: 9 }]} />
          </View>
        )}
      </View>
      <View style={d.oddEvenLabel}>
        <Text style={[d.oddEvenBadge, { backgroundColor: isEven ? GREEN : CORAL }]}>
          {n} is {isEven ? 'EVEN ✓' : 'ODD'}
        </Text>
        {!isEven && <Text style={{ fontSize: 12, color: CORAL, fontWeight: '700', marginTop: 4 }}>↑ 1 dot left over</Text>}
      </View>
    </View>
  );
}

// ── 10. Fraction Bar ───────────────────────────────────────────────────────
function FractionBarDiagram({ num, den, color, phase }: {
  num: number; den: number; color: string; phase: DiagramPhase;
}) {
  const total = Math.min(den, 12);
  const filled = Math.min(num, total);

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`${filled} out of ${total} equal parts`} bg={color} />
      <View style={d.fractionTrack}>
        {Array.from({ length: total }).map((_, i) => (
          <View key={i} style={[d.fractionSeg, {
            backgroundColor: i < filled ? color : 'rgba(0,0,0,0.08)',
            borderRightWidth: i < total - 1 ? 1.5 : 0,
            borderColor: WHITE,
          }]} />
        ))}
      </View>
      <Text style={d.fracLabel}>{filled}/{total}</Text>
      {phase === 'result' && <ResultRow text={`${filled}/${total} of the whole`} />}
    </View>
  );
}

// ── 11. Dual Fraction Bars (compare & order) ───────────────────────────────
function DualFractionDiagram({ question, color, phase }: {
  question: string; color: string; phase: DiagramPhase;
}) {
  // Parse equivalence like "1/2 = ?/8"
  const fracs = [...question.matchAll(/(\d+)\s*\/\s*(\d+)/g)].map(m => ({
    num: parseInt(m[1]), den: parseInt(m[2]),
  }));
  if (fracs.length < 1) return null;

  const f1 = fracs[0];
  const f2 = fracs[1] ?? { num: 0, den: f1.den * 2 }; // fallback

  const lcm = f1.den * f2.den / gcd(f1.den, f2.den);
  const scale = Math.min(lcm, 12);

  const seg1 = scale / f1.den;
  const seg2 = f2.den > 0 ? scale / f2.den : 1;
  const fill1 = Math.round(f1.num * seg1);
  const fill2 = f2.num > 0 ? Math.round(f2.num * seg2) : fill1; // equivalent amount

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label="Compare the fractions" bg={color} />
      <View style={{ width: '100%', gap: 10, marginTop: 10 }}>
        <View>
          <Text style={d.fracRowLabel}>{f1.num}/{f1.den}</Text>
          <View style={d.fractionTrack}>
            {Array.from({ length: scale }).map((_, i) => (
              <View key={i} style={[d.fractionSeg, {
                backgroundColor: i < fill1 ? color : 'rgba(0,0,0,0.08)',
                borderRightWidth: i % seg1 === seg1 - 1 && i < scale - 1 ? 3 : (i < scale - 1 ? 1 : 0),
                borderColor: i % seg1 === seg1 - 1 ? DARK : WHITE,
              }]} />
            ))}
          </View>
        </View>
        <View>
          <Text style={d.fracRowLabel}>{f2.den > 0 ? `${f2.num > 0 ? f2.num : '?'}/${f2.den}` : '?'}</Text>
          <View style={d.fractionTrack}>
            {Array.from({ length: scale }).map((_, i) => (
              <View key={i} style={[d.fractionSeg, {
                backgroundColor: i < fill2 ? AMBER : 'rgba(0,0,0,0.08)',
                borderRightWidth: i % seg2 === seg2 - 1 && i < scale - 1 ? 3 : (i < scale - 1 ? 1 : 0),
                borderColor: i % seg2 === seg2 - 1 ? DARK : WHITE,
              }]} />
            ))}
          </View>
        </View>
      </View>
      {phase === 'result' && (
        <ResultRow text={`${f1.num}/${f1.den} = ${fill2}/${f2.den > 0 ? f2.den : scale}`} />
      )}
    </View>
  );
}

function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }

// ── 12. Percentage Bar ─────────────────────────────────────────────────────
function PercentageDiagram({ question, a, b, color, phase }: {
  question: string; a: number; b: number; color: string; phase: DiagramPhase;
}) {
  // Try to find "X% of Y" pattern
  const m = question.match(/(\d+(?:\.\d+)?)\s*%\s*of\s*(\d+(?:\.\d+)?)/i);
  const pct   = m ? parseFloat(m[1]) : (a <= 100 ? a : b);
  const whole = m ? parseFloat(m[2]) : (a <= 100 ? b : a);
  const result = (pct / 100) * whole;
  const filled = Math.min(Math.max(pct, 0), 100);

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`${pct}% of ${whole}`} bg={color} />
      <View style={d.pctTrack}>
        <View style={[d.pctFill, { width: `${filled}%` as any, backgroundColor: color }]} />
        <View style={[d.pctMark, { left: `${filled}%` as any }]} />
      </View>
      <View style={d.pctLabels}>
        <Text style={d.pctLabel}>0</Text>
        <Text style={[d.pctLabel, { color }]}>{whole * 0.5}</Text>
        <Text style={d.pctLabel}>{whole}</Text>
      </View>
      <View style={d.pctPercentRow}>
        <Text style={d.pctPercent}>0%</Text>
        <Text style={[d.pctPercent, { color }]}>{pct}% ↑</Text>
        <Text style={d.pctPercent}>100%</Text>
      </View>
      {phase === 'result' && whole > 0 && (
        <ResultRow text={`${pct}% of ${whole} = ${result % 1 === 0 ? result : result.toFixed(2)}`} />
      )}
    </View>
  );
}

// ── 13. Rounding Ruler ─────────────────────────────────────────────────────
function RoundingDiagram({ a, color, phase }: { a: number; color: string; phase: DiagramPhase }) {
  const abs = Math.abs(a);
  const to = abs >= 1000 ? 100 : abs >= 100 ? 10 : 10;
  const lower = Math.floor(abs / to) * to;
  const upper = lower + to;
  const rounded = abs - lower < upper - abs ? lower : upper;
  const pct = ((abs - lower) / to) * 100;

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`Round ${abs} to nearest ${to}`} bg={color} />
      <View style={{ width: '100%', marginTop: 16, paddingHorizontal: 8 }}>
        <View style={{ position: 'relative', marginBottom: 4 }}>
          <View style={[d.track, { backgroundColor: AMBER }]} />
          <View style={[d.roundMarker, { left: `${pct}%` as any, backgroundColor: color }]} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={[d.roundAnchor]}>{lower}</Text>
            <Text style={d.roundHint}>round down</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={[d.roundAnchor, { color }]}>{abs}</Text>
            <Text style={[d.roundHint, { color }]}>← here</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={d.roundAnchor}>{upper}</Text>
            <Text style={d.roundHint}>round up</Text>
          </View>
        </View>
      </View>
      {phase === 'result' && (
        <ResultRow text={`${abs} rounds to ${rounded}`} />
      )}
    </View>
  );
}

// ── 14. Factor Rainbow ─────────────────────────────────────────────────────
function FactorRainbow({ n, color, phase }: { n: number; color: string; phase: DiagramPhase }) {
  const factors: number[] = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { factors.push(i); if (i !== n / i) factors.push(n / i); }
  }
  factors.sort((a, b) => a - b);
  const pairs = Math.floor(factors.length / 2);
  const colors = [CORAL, AMBER, color, LAV, BLUE, PINK];

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`Factors of ${n}`} bg={color} />
      <View style={d.rainbowRow}>
        {factors.map((f, i) => (
          <View key={i} style={[d.rainbowChip, { backgroundColor: colors[Math.min(Math.min(i, factors.length - 1 - i), colors.length - 1)] }]}>
            <Text style={d.rainbowTxt}>{f}</Text>
          </View>
        ))}
      </View>
      {phase !== 'intro' && (
        <View style={{ marginTop: 10 }}>
          {Array.from({ length: Math.min(pairs, 3) }).map((_, i) => (
            <Text key={i} style={d.factorPair}>
              {factors[i]} × {factors[factors.length - 1 - i]} = {n}
            </Text>
          ))}
        </View>
      )}
      {phase === 'result' && (
        <ResultRow text={`${n} has ${factors.length} factors`} />
      )}
    </View>
  );
}

// ── 15. Ratio Tape ─────────────────────────────────────────────────────────
function RatioTapeDiagram({ question, color, phase }: {
  question: string; color: string; phase: DiagramPhase;
}) {
  // Parse ratio like "2:3" and known quantity
  const ratioM = question.match(/(\d+)\s*:\s*(\d+)/);
  const numM = question.match(/(\d+(?:\.\d+)?)\s*(boys|girls|red|blue|yellow|green|parts?|marbles?|ml|km|kg)/i);
  if (!ratioM) return null;

  const r1 = parseInt(ratioM[1]);
  const r2 = parseInt(ratioM[2]);
  const total = r1 + r2;
  const known = numM ? parseFloat(numM[1]) : r1;
  const unit = known / r1;
  const other = unit * r2;

  const seg1 = r1;
  const seg2 = r2;

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`Ratio ${r1}:${r2}`} bg={color} />
      <View style={{ width: '100%', marginTop: 12, gap: 8 }}>
        <View>
          <Text style={d.fracRowLabel}>Part A ({known})</Text>
          <View style={{ flexDirection: 'row', height: 32, borderRadius: 6, overflow: 'hidden' }}>
            {Array.from({ length: seg1 }).map((_, i) => (
              <View key={i} style={{ flex: 1, backgroundColor: color, borderRightWidth: i < seg1 - 1 ? 1 : 0, borderColor: WHITE, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 11, fontWeight: '800', color: WHITE }}>{unit}</Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={d.fracRowLabel}>Part B (?)</Text>
          <View style={{ flexDirection: 'row', height: 32, borderRadius: 6, overflow: 'hidden' }}>
            {Array.from({ length: seg2 }).map((_, i) => (
              <View key={i} style={{ flex: 1, backgroundColor: AMBER, borderRightWidth: i < seg2 - 1 ? 1 : 0, borderColor: WHITE, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 11, fontWeight: '800', color: WHITE }}>{unit}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      {phase === 'result' && (
        <ResultRow text={`Part B = ${r2} × ${unit} = ${other}`} />
      )}
    </View>
  );
}

// ── 16. Decimal Place Value ─────────────────────────────────────────────────
function DecimalDiagram({ a, b, op, color, phase }: {
  a: number; b: number; op: string; color: string; phase: DiagramPhase;
}) {
  const result = op === '+' ? +(a + b).toFixed(4) :
                 op === '-' ? +(a - b).toFixed(4) :
                 op === '×' ? +(a * b).toFixed(4) :
                              +(a / b).toFixed(4);

  const renderDecNum = (n: number, bg: string) => {
    const str = n.toFixed(Math.max(
      (String(a).split('.')[1] || '').length,
      (String(b).split('.')[1] || '').length,
    ));
    const [intPart, decPart] = str.split('.');
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <View style={[d.decBox, { backgroundColor: bg }]}>
          <Text style={d.decLabel}>whole</Text>
          <Text style={d.decNum}>{intPart}</Text>
        </View>
        <Text style={d.decDot}>.</Text>
        {(decPart || '').split('').map((digit, i) => (
          <View key={i} style={[d.decBox, { backgroundColor: bg, opacity: 0.7 + i * 0.15 }]}>
            <Text style={d.decLabel}>{['tenths','hundredths','thousandths'][i] ?? `10^-${i+1}`}</Text>
            <Text style={d.decNum}>{digit}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={[d.box, { backgroundColor: BG }]}>
      <Pill label={`${a} ${op} ${b}`} bg={color} />
      <View style={{ gap: 8, marginTop: 12, alignItems: 'center' }}>
        {renderDecNum(a, color)}
        <Text style={{ fontWeight: '800', fontSize: 18, color: DARK }}>{op}</Text>
        {renderDecNum(b, AMBER)}
      </View>
      {phase === 'result' && (
        <ResultRow text={`${a} ${op} ${b} = ${result}`} />
      )}
    </View>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROUTER
// ─────────────────────────────────────────────────────────────────────────────
export default function StepDiagram({ question, answer, category, method, phase, color }: Props) {
  const cat = category.toLowerCase();
  const parsed = parseQuestion(question);

  // ── Categories with no useful diagram ────────────────────────────────────
  if (['algebra', 'powers & roots', 'scientific notation'].some(k => cat.includes(k))) return null;

  // ── Multiplication ────────────────────────────────────────────────────────
  if (cat.includes('multiplication')) {
    if (!parsed) return null;
    if (method === 'vedic') return <VedicDiagram a={parsed.a} b={parsed.b} color={color} phase={phase} />;
    return <AreaModelDiagram a={parsed.a} b={parsed.b} color={color} phase={phase} />;
  }

  // ── Division ─────────────────────────────────────────────────────────────
  if (cat.includes('division')) {
    if (!parsed) return null;
    const dividend = parsed.op === '÷' || parsed.op === '/' ? parsed.a : Math.max(parsed.a, parsed.b);
    const divisor  = parsed.op === '÷' || parsed.op === '/' ? parsed.b : Math.min(parsed.a, parsed.b);
    if (method === 'vedic') return <VedicDiagram a={parsed.a} b={parsed.b} color={color} phase={phase} />;
    if (divisor > 0 && Number.isInteger(dividend / divisor))
      return <GroupingDiagram dividend={dividend} divisor={divisor} color={color} phase={phase} />;
    return null;
  }

  // ── Addition ─────────────────────────────────────────────────────────────
  if (cat.includes('addition')) {
    if (!parsed) return null;
    if (method === 'vedic') return <VedicDiagram a={parsed.a} b={parsed.b} color={color} phase={phase} />;
    if (method === 'decompose') return <DecomposeAddDiagram a={parsed.a} b={parsed.b} color={color} phase={phase} />;
    return <NumberLineDiagram a={parsed.a} b={parsed.b} op="+" color={color} phase={phase} />;
  }

  // ── Subtraction ───────────────────────────────────────────────────────────
  if (cat.includes('subtraction')) {
    if (!parsed) return null;
    if (method === 'vedic') return <VedicDiagram a={parsed.a} b={parsed.b} color={color} phase={phase} />;
    if (method === 'decompose') return <DecomposeAddDiagram a={parsed.a} b={Math.abs(parsed.b)} color={color} phase={phase} />;
    return <NumberLineDiagram a={parsed.a} b={Math.abs(parsed.b)} op="-" color={color} phase={phase} />;
  }

  // ── Integers & Negatives ──────────────────────────────────────────────────
  if (cat.includes('integer')) {
    if (!parsed) return null;
    return <SignedNumberLine a={parsed.a} b={parsed.b} op={parsed.op} color={color} phase={phase} />;
  }

  // ── Skip Counting ─────────────────────────────────────────────────────────
  if (cat.includes('skip')) {
    // Extract skip amount from sequence like "2, 4, 6, 8, __"
    const nums = question.match(/\d+/g)?.map(Number) ?? [];
    const skip = nums.length >= 2 ? nums[1] - nums[0] : parsed?.a ?? 2;
    return <SkipCountingDiagram skip={skip} color={color} />;
  }

  // ── Count On & Back ───────────────────────────────────────────────────────
  if (cat.includes('count')) {
    if (!parsed) return null;
    return <NumberLineDiagram a={parsed.a} b={parsed.b} op="+" color={color} phase={phase} />;
  }

  // ── Double & Half ─────────────────────────────────────────────────────────
  if (cat.includes('double') || cat.includes('half')) {
    const n = parsed?.a ?? answer / 2;
    return <DoubleHalfDiagram a={n} color={color} />;
  }

  // ── Odd & Even ────────────────────────────────────────────────────────────
  if (cat.includes('odd') || cat.includes('even')) {
    return <OddEvenDiagram n={answer} color={color} />;
  }

  // ── Fractions of a Whole ──────────────────────────────────────────────────
  if (cat === 'fractions of a whole') {
    const frac = parseFraction(question);
    if (frac) return <FractionBarDiagram num={frac.num} den={frac.den} color={color} phase={phase} />;
    return null;
  }

  // ── Fractions: Compare & Order ─────────────────────────────────────────────
  if (cat.includes('fraction')) {
    return <DualFractionDiagram question={question} color={color} phase={phase} />;
  }

  // ── Decimals ──────────────────────────────────────────────────────────────
  if (cat.includes('decimal')) {
    if (!parsed) return null;
    return <DecimalDiagram a={parsed.a} b={parsed.b} op={parsed.op} color={color} phase={phase} />;
  }

  // ── Percentages (basic & advanced) ────────────────────────────────────────
  if (cat.includes('percent')) {
    if (!parsed) return null;
    return <PercentageDiagram question={question} a={parsed.a} b={parsed.b} color={color} phase={phase} />;
  }

  // ── Rounding & Estimation ─────────────────────────────────────────────────
  if (cat.includes('round') || cat.includes('estimat')) {
    if (!parsed) return null;
    return <RoundingDiagram a={parsed.a} color={color} phase={phase} />;
  }

  // ── Factors & Multiples ────────────────────────────────────────────────────
  if (cat.includes('factor') || cat.includes('multiple')) {
    const nums = question.match(/\d+/g)?.map(Number) ?? [];
    const n = nums.find(v => v > 1) ?? answer;
    return <FactorRainbow n={n} color={color} phase={phase} />;
  }

  // ── Ratio & Proportion ─────────────────────────────────────────────────────
  if (cat.includes('ratio') || cat.includes('proportion')) {
    return <RatioTapeDiagram question={question} color={color} phase={phase} />;
  }

  // ── Word Problems: route by operator ─────────────────────────────────────
  if (cat.includes('word')) {
    if (!parsed) return null;
    const { a, b, op } = parsed;
    if (op === '×' || op === '*') return <AreaModelDiagram a={a} b={b} color={color} phase={phase} />;
    if (op === '÷' || op === '/') {
      if (b > 0 && Number.isInteger(a / b))
        return <GroupingDiagram dividend={a} divisor={b} color={color} phase={phase} />;
    }
    if (op === '+') return <NumberLineDiagram a={a} b={b} op="+" color={color} phase={phase} />;
    if (op === '-') return <NumberLineDiagram a={a} b={Math.abs(b)} op="-" color={color} phase={phase} />;
    return <AreaModelDiagram a={a} b={b} color={color} phase={phase} />;
  }

  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────
const d = StyleSheet.create({
  box: { borderRadius: 14, padding: 14, marginTop: 14, marginBottom: 6, alignItems: 'center', width: SW },
  chip: { alignItems: 'center', justifyContent: 'center', margin: 3 },
  chipTxt: { fontWeight: '800', color: WHITE },
  pill: { borderRadius: 999, paddingHorizontal: 12, paddingVertical: 5, marginBottom: 10 },
  pillTxt: { fontWeight: '800', fontSize: 12, color: WHITE },
  resultRow: { marginTop: 12, alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.08)', paddingTop: 10, width: '100%' },
  resultEq: { fontWeight: '800', fontSize: 16, color: DARK, textAlign: 'center' },

  // Number line
  track: { height: 10, borderRadius: 5, backgroundColor: AMBER, width: '100%' },
  arc: { position: 'absolute', height: 28, borderWidth: 2.5, borderRadius: 28, borderBottomWidth: 0, top: 0 },
  arcLabel: { position: 'absolute', top: 1 },
  tick: { width: 2, height: 10, marginBottom: 4 },
  tickLabel: { fontSize: 11 },

  // Signed number line
  zeroMark: { position: 'absolute', width: 3, height: 18, backgroundColor: DARK, top: -4, borderRadius: 2 },

  // Decompose
  decompRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10, gap: 4 },
  decompCol: { alignItems: 'center' },
  decompLabel: { fontSize: 9, fontWeight: '700', color: DARK, marginTop: 2 },
  decompOp: { fontSize: 20, fontWeight: '800', color: DARK, marginHorizontal: 6, alignSelf: 'center' },

  // Grouping
  groupsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 10 },
  groupBox: { alignItems: 'center', backgroundColor: WHITE, borderRadius: 10, padding: 8, borderWidth: 1, borderColor: 'rgba(0,0,0,0.08)' },
  dotsGrid: { flexDirection: 'row', flexWrap: 'wrap', width: 52, gap: 4 },
  dot: { width: 14, height: 14, borderRadius: 7 },
  groupLabel: { fontSize: 12, fontWeight: '800', color: DARK, marginTop: 4 },

  // Grid
  gridWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, justifyContent: 'center', marginTop: 10 },
  gridCell: { minWidth: 72, padding: 10, borderRadius: 10, alignItems: 'center' },
  gridSmall: { fontSize: 10, fontWeight: '700', color: WHITE, opacity: 0.85 },
  gridVal: { fontSize: 17, fontWeight: '800', color: WHITE, marginTop: 2 },

  // Vedic
  vedicRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 10 },
  vedicX: { fontSize: 20, fontWeight: '800', color: DARK, marginHorizontal: 4 },

  // Skip
  skipRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 6, marginTop: 10 },
  skipArrows: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 4 },
  skipArrow: { fontSize: 10, fontWeight: '800' },

  // Double & Half
  dhRow: { flexDirection: 'row', width: '100%', marginTop: 10, gap: 8 },
  dhSide: { flex: 1, alignItems: 'center', gap: 8 },
  dhDivider: { width: 1, backgroundColor: 'rgba(0,0,0,0.1)' },
  dhNum: { width: 68, height: 40, backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  dhNumTxt: { fontWeight: '800', fontSize: 18, color: DARK },
  dhArrow: { fontSize: 24, fontWeight: '800' },

  // Odd/Even
  pairsRow: { flexDirection: 'row', gap: 10, marginTop: 12, flexWrap: 'wrap', justifyContent: 'center' },
  pairCol: { gap: 6, alignItems: 'center' },
  oddEvenLabel: { alignItems: 'center', marginTop: 12 },
  oddEvenBadge: { paddingHorizontal: 16, paddingVertical: 6, borderRadius: 999, fontWeight: '800', fontSize: 14, color: WHITE, overflow: 'hidden' },

  // Fraction
  fractionTrack: { flexDirection: 'row', height: 34, width: '100%', borderRadius: 8, overflow: 'hidden', marginTop: 8 },
  fractionSeg: { flex: 1, height: '100%' },
  fracLabel: { fontWeight: '800', fontSize: 20, color: DARK, marginTop: 8 },
  fracRowLabel: { fontWeight: '700', fontSize: 13, color: DARK, marginBottom: 4 },

  // Percentage
  pctTrack: { width: '100%', height: 28, backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: 14, overflow: 'visible', marginTop: 10, position: 'relative' },
  pctFill: { height: '100%', borderRadius: 14 },
  pctMark: { position: 'absolute', width: 4, height: 36, backgroundColor: DARK, top: -4, borderRadius: 2 },
  pctLabels: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 6 },
  pctLabel: { fontSize: 12, fontWeight: '700', color: DARK },
  pctPercentRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 2 },
  pctPercent: { fontSize: 11, fontWeight: '600', color: 'rgba(0,0,0,0.5)' },

  // Rounding
  roundMarker: { position: 'absolute', width: 18, height: 18, borderRadius: 9, top: -4, marginLeft: -9 },
  roundAnchor: { fontWeight: '800', fontSize: 16, color: DARK },
  roundHint: { fontSize: 10, fontWeight: '600', color: 'rgba(0,0,0,0.45)' },

  // Factor rainbow
  rainbowRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, justifyContent: 'center', marginTop: 10 },
  rainbowChip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  rainbowTxt: { fontWeight: '800', fontSize: 15, color: WHITE },
  factorPair: { fontWeight: '700', fontSize: 13, color: DARK, textAlign: 'center', marginTop: 4 },

  // Decimal
  decBox: { alignItems: 'center', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 8, minWidth: 44 },
  decLabel: { fontSize: 9, fontWeight: '700', color: WHITE, opacity: 0.85 },
  decNum: { fontSize: 20, fontWeight: '800', color: WHITE },
  decDot: { fontSize: 28, fontWeight: '800', color: DARK },
});
