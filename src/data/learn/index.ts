// ============================================================
// Julia Sets — Learn Bank Index
// Combines all 8 grade learn banks into one lookup
// ============================================================

import { grade1LearnBank } from './grade1';
import { grade2LearnBank } from './grade2';
import { grade3LearnBank } from './grade3';
import { grade4LearnBank } from './grade4';
import { grade5LearnBank } from './grade5';
import { grade6LearnBank } from './grade6';
import { grade7LearnBank } from './grade7';
import { grade8LearnBank } from './grade8';

// Re-export the shared types from one source file
export type { LearnProblem, LearnMethod, LearnStep, LearnMeta } from './grade1';

import type { LearnProblem } from './grade1';

export const LEARN_BANK_BY_GRADE: Record<number, LearnProblem[]> = {
  1: grade1LearnBank,
  2: grade2LearnBank,
  3: grade3LearnBank,
  4: grade4LearnBank,
  5: grade5LearnBank,
  6: grade6LearnBank,
  7: grade7LearnBank,
  8: grade8LearnBank,
};

/** All learn problems across every grade (504 total) */
export const ALL_LEARN_PROBLEMS: LearnProblem[] = Object.values(LEARN_BANK_BY_GRADE).flat();

/** Unique category names for a grade, in the order they appear */
export function getCategoriesForGrade(grade: number): string[] {
  const bank = LEARN_BANK_BY_GRADE[grade] ?? [];
  return Array.from(new Set(bank.map(p => p.category)));
}

/** Problems for one category within a grade */
export function getProblemsByCategory(grade: number, category: string): LearnProblem[] {
  return (LEARN_BANK_BY_GRADE[grade] ?? []).filter(p => p.category === category);
}
