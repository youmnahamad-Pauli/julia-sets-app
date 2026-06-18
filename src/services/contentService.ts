// ─────────────────────────────────────────────────────────────────────────────
// Julia Sets — Content Service
// Fetches fun facts from GitHub and caches in AsyncStorage.
// Called once on app start (syncContentInBackground).
// Falls back to bundled defaults if network is unavailable.
// ─────────────────────────────────────────────────────────────────────────────

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FUN_FACTS as LOCAL_FUN_FACTS } from '../data/funFacts';

// ── GitHub raw content base URL ───────────────────────────────────────────────
const GITHUB_BASE =
  'https://raw.githubusercontent.com/youmnahamad-Pauli/juliasets-content/main';

// ── AsyncStorage keys ─────────────────────────────────────────────────────────
const KEYS = {
  FACTS_EN:        'julia_content_facts_en',
  FACTS_AR:        'julia_content_facts_ar',
  LAST_SYNCED:     'julia_content_last_synced',
  CACHED_VERSION:  'julia_content_version',
};

// ── How often to re-fetch (7 days in ms) ─────────────────────────────────────
const SYNC_INTERVAL_MS = 7 * 24 * 60 * 60 * 1000;

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface FunFact {
  id: string;
  week: number;
  text: string;
  tag: string;
  grades: number[];
}

export interface ContentManifest {
  version: string;
  updated_at: string;
  files: {
    facts_en: string;
    facts_ar: string;
  };
  facts: {
    total: number;
    frequency: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Bundled fallback facts (subset — used when offline and no cache exists yet)
// ─────────────────────────────────────────────────────────────────────────────

const FALLBACK_FACTS_EN: FunFact[] = [
  {
    id: 'w001', week: 1,
    text: "Zero is the only number that can't be represented in Roman numerals. The Romans had no symbol for nothing!",
    tag: 'number_sense', grades: [1,2,3,4,5,6,7,8],
  },
  {
    id: 'w014', week: 14,
    text: "The Arabic numeral system (0–9) that we use today was actually invented in India over 1,500 years ago!",
    tag: 'history', grades: [1,2,3,4,5,6,7,8],
  },
  {
    id: 'w017', week: 17,
    text: "The equals sign (=) was invented in 1557. Robert Recorde chose two parallel lines because 'no two things can be more equal'.",
    tag: 'history', grades: [1,2,3,4,5,6,7,8],
  },
  {
    id: 'w020', week: 20,
    text: "Burj Khalifa in Dubai is 828 metres tall. Rounded to the nearest 100, that's about 800 metres.",
    tag: 'rounding', grades: [3,4,5,6,7,8],
  },
  {
    id: 'w052', week: 52,
    text: "Maths is the only language shared by all people in the world. 2 + 2 = 4 in every country, every culture, and every century.",
    tag: 'history', grades: [1,2,3,4,5,6,7,8],
  },
];

const FALLBACK_FACTS_AR: FunFact[] = [
  {
    id: 'w001', week: 1,
    text: 'الصفر هو الرقم الوحيد الذي لا يمكن تمثيله بالأرقام الرومانية. لم يكن لدى الرومان رمز للعدم!',
    tag: 'number_sense', grades: [1,2,3,4,5,6,7,8],
  },
  {
    id: 'w014', week: 14,
    text: 'نظام الأرقام العربية (0-9) الذي نستخدمه اليوم اخترعه علماء الهند منذ أكثر من 1500 عام!',
    tag: 'history', grades: [1,2,3,4,5,6,7,8],
  },
  {
    id: 'w017', week: 17,
    text: 'اخترع علامة المساواة (=) عالم الرياضيات روبرت ريكورد عام 1557. اختار خطين متوازيين لأنه قال: لا يوجد شيئان أكثر تساوياً منهما!',
    tag: 'history', grades: [1,2,3,4,5,6,7,8],
  },
  {
    id: 'w020', week: 20,
    text: 'برج خليفة في دبي ارتفاعه 828 متراً. لو قرّبنا هذا العدد لأقرب مئة، لقلنا إنه حوالي 800 متر.',
    tag: 'rounding', grades: [3,4,5,6,7,8],
  },
  {
    id: 'w052', week: 52,
    text: 'الرياضيات هي اللغة الوحيدة المشتركة بين جميع البشر. 2 + 2 = 4 في كل بلد، وفي كل ثقافة، وفي كل عصر.',
    tag: 'history', grades: [1,2,3,4,5,6,7,8],
  },
];

// Rich English fallback built from the full local funFacts.ts (65 facts), so
// the home splash is varied even when the GitHub feed hasn't synced. The GitHub
// content (when available) still overrides this via the cache.
const RICH_FALLBACK_EN: FunFact[] = LOCAL_FUN_FACTS.map((f) => ({
  id: `local-${f.id}`,
  week: 0,
  text: f.fact,
  tag: f.category.toLowerCase().replace(/\s+/g, '_'),
  grades: [1, 2, 3, 4, 5, 6, 7, 8],
}));

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return res.json() as Promise<T>;
}

function shouldSync(lastSynced: string | null): boolean {
  if (!lastSynced) return true;
  return Date.now() - parseInt(lastSynced, 10) > SYNC_INTERVAL_MS;
}

// ─────────────────────────────────────────────────────────────────────────────
// Core sync — call this ONCE on app launch (fire and forget)
// ─────────────────────────────────────────────────────────────────────────────

export async function syncContentInBackground(): Promise<void> {
  try {
    const lastSynced = await AsyncStorage.getItem(KEYS.LAST_SYNCED);
    if (!shouldSync(lastSynced)) return; // still fresh, skip network call

    // Fetch manifest first to get file paths
    const manifest = await fetchJSON<ContentManifest>(`${GITHUB_BASE}/manifest.json`);

    // Fetch both fact files in parallel
    const [factsEn, factsAr] = await Promise.all([
      fetchJSON<FunFact[]>(`${GITHUB_BASE}/${manifest.files.facts_en}`),
      fetchJSON<FunFact[]>(`${GITHUB_BASE}/${manifest.files.facts_ar}`),
    ]);

    // Persist to cache
    await Promise.all([
      AsyncStorage.setItem(KEYS.FACTS_EN,       JSON.stringify(factsEn)),
      AsyncStorage.setItem(KEYS.FACTS_AR,       JSON.stringify(factsAr)),
      AsyncStorage.setItem(KEYS.LAST_SYNCED,    String(Date.now())),
      AsyncStorage.setItem(KEYS.CACHED_VERSION, manifest.version),
    ]);

    console.log(`[ContentService] Synced ${factsEn.length} facts (v${manifest.version})`);
  } catch (err) {
    // Silently fall back to cache or bundled defaults — never crash the app
    console.warn('[ContentService] Sync failed, using cached/bundled content:', err);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Fact retrieval — used by HomeScreen / fun fact display
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns all cached fun facts for the given language.
 * Falls back to bundled defaults if cache is empty.
 */
export async function getFunFacts(language: 'en' | 'ar'): Promise<FunFact[]> {
  try {
    const key = language === 'ar' ? KEYS.FACTS_AR : KEYS.FACTS_EN;
    const raw = await AsyncStorage.getItem(key);
    if (raw) {
      const parsed: FunFact[] = JSON.parse(raw);
      if (parsed.length > 0) return parsed;
    }
  } catch (err) {
    console.warn('[ContentService] Cache read error:', err);
  }
  // Fallback to bundled
  return language === 'ar' ? FALLBACK_FACTS_AR : RICH_FALLBACK_EN;
}

/**
 * Returns a single fun fact for the given index and grade.
 * Filters by grade so younger students don't see Grade 8 topics.
 * Falls back to any fact if no grade match found.
 */
export async function getFunFactForIndex(
  index: number,
  grade: number,
  language: 'en' | 'ar',
): Promise<FunFact> {
  const all = await getFunFacts(language);

  // Filter to facts appropriate for this grade
  const gradeFiltered = all.filter(f => f.grades.includes(grade));
  const pool = gradeFiltered.length > 0 ? gradeFiltered : all;

  // Wrap the index within the pool
  return pool[index % pool.length];
}

/**
 * Returns the total number of cached facts (for advancing the index).
 */
export async function getFunFactCount(language: 'en' | 'ar'): Promise<number> {
  const facts = await getFunFacts(language);
  return facts.length;
}
