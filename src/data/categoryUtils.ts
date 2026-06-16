import { Problem } from './problems';

export type PracticeCategory = 'addition' | 'subtraction' | 'multiplication' | 'division' | 'other';

const MULTIPLICATION_KEYWORDS = [
  'times', 'multiply', 'multiplication', 'partition', 'partitioning',
  'doubling', 'near double', 'grid method', 'long mult',
];

const DIVISION_KEYWORDS = [
  'division', 'halving', 'chunking', 'short div', 'bus stop',
  'sharing', 'reverse mult',
];

const ADDITION_KEYWORDS = [
  'addition', 'number bond', 'counting on', 'bridging', 'near double add',
  'column add',
];

const SUBTRACTION_KEYWORDS = [
  'subtraction', 'counting back', 'difference', 'decomposition',
  'taking away',
];

function matchesKeywords(str: string, keywords: string[]): boolean {
  const lower = str.toLowerCase();
  return keywords.some(kw => lower.includes(kw));
}

export function getCategory(operation: string, question: string): PracticeCategory {
  const op = operation.toLowerCase();
  const q = question.toLowerCase();

  if (matchesKeywords(op, MULTIPLICATION_KEYWORDS) || op.includes('×') || op.includes('*')) {
    return 'multiplication';
  }

  if (matchesKeywords(op, DIVISION_KEYWORDS) || op.includes('÷') || op.includes('/')) {
    return 'division';
  }

  if (matchesKeywords(op, ADDITION_KEYWORDS)) {
    if (q.includes('+') || matchesKeywords(op, ['compensation'])) {
      return 'addition';
    }
  }

  if (matchesKeywords(op, SUBTRACTION_KEYWORDS)) {
    if (q.includes('-') || q.includes('−') || matchesKeywords(op, ['compensation'])) {
      return 'subtraction';
    }
    if (matchesKeywords(op, ['compensation'])) {
      if (q.includes('+')) return 'addition';
      return 'subtraction';
    }
    return 'subtraction';
  }

  if (op.includes('addition') || q.includes('+')) return 'addition';
  if (op.includes('subtraction') || q.includes('−') || q.includes(' - ')) return 'subtraction';
  if (op.includes('multiplication') || q.includes('×')) return 'multiplication';
  if (op.includes('division') || q.includes('÷')) return 'division';

  return 'other';
}

export function countForCategory(problems: Problem[], category: PracticeCategory): number {
  if (category === 'other') {
    return problems.filter(p => getCategory(p.operation, p.question) === 'other').length;
  }
  return problems.filter(p => getCategory(p.operation, p.question) === category).length;
}

export function filterByCategory(problems: Problem[], category: PracticeCategory): Problem[] {
  if (category === 'other') return problems;
  return problems.filter(p => getCategory(p.operation, p.question) === category);
}

export function pickDailyProblems(
  allProblems: Problem[],
  masteryRecords: Record<string, { level: string; topic: string }>,
  solvedIds: string[],
  count: number = 5
): Problem[] {
  const today = new Date();
  const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  const recentSolvedIds = new Set(solvedIds.slice(-30));

  const unseenProblems = allProblems.filter(p => !recentSolvedIds.has(p.id));

  function seededRandom(seed: number): () => number {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 0xffffffff;
    };
  }

  const rng = seededRandom(dateSeed);

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const byTopic: Record<string, Problem[]> = {};
  for (const p of unseenProblems) {
    if (!byTopic[p.topic]) byTopic[p.topic] = [];
    byTopic[p.topic].push(p);
  }

  const topics = Object.keys(byTopic);
  const selected: Problem[] = [];

  const masteredTopics = topics.filter(t => masteryRecords[t]?.level === 'mastered');
  const secureTopics = topics.filter(t => masteryRecords[t]?.level === 'secure');
  const developingTopics = topics.filter(t => masteryRecords[t]?.level === 'developing');
  const newTopics = topics.filter(t => !masteryRecords[t] || masteryRecords[t].level === 'not_started');

  const currentLevelTopics = secureTopics.length > 0 ? secureTopics : developingTopics;
  const stretchTopics = masteredTopics.length > 0 ? masteredTopics : [...secureTopics, ...developingTopics];

  let added = 0;

  for (const topic of shuffle(currentLevelTopics)) {
    if (added >= 2) break;
    const pool = shuffle(byTopic[topic] ?? []);
    if (pool[0]) { selected.push(pool[0]); added++; }
  }

  for (const topic of shuffle(stretchTopics)) {
    if (added >= 4) break;
    const pool = shuffle(byTopic[topic] ?? []).filter(p => p.difficulty === 'hard');
    if (pool[0]) { selected.push(pool[0]); added++; }
  }

  for (const topic of shuffle(newTopics)) {
    if (selected.length >= count) break;
    const pool = shuffle(byTopic[topic] ?? []).filter(p => p.difficulty === 'easy');
    if (pool[0]) { selected.push(pool[0]); break; }
  }

  if (selected.length < count) {
    const all = shuffle(unseenProblems);
    for (const p of all) {
      if (selected.length >= count) break;
      if (!selected.find(s => s.id === p.id)) selected.push(p);
    }
  }

  return selected.slice(0, count);
}
