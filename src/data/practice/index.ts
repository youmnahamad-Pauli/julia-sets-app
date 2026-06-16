// ============================================================
// Julia Sets — Practice Bank Index
// Grades are added here as their banks are generated & verified.
// Grades without an entry show "Coming soon" in the Practice tab.
// Types are widened here (category: string) so every grade's
// bank — each with its own category literals — fits one union.
// ============================================================

import { grade1PracticeBank } from './grade1_practice';
import { grade2PracticeBank } from './grade2_practice';
import { grade3PracticeBank } from './grade3_practice';
import { grade4PracticeBank } from './grade4_practice';
import { grade5PracticeBank } from './grade5_practice';
import { grade6PracticeBank } from './grade6_practice';
import { grade7PracticeBank } from './grade7_practice';
import { grade8PracticeBank } from './grade8_practice';

export interface PracticeLearnStep {
  step: number;
  title_en: string;
  title_ar: string;
  explanation_en: string;
  explanation_ar: string;
}

export interface PracticeLearnMethod {
  steps: PracticeLearnStep[];
  hint_en: string;
  hint_ar: string;
  result_en: string;
  result_ar: string;
}

export interface LightPracticeProblem {
  id: string;
  grade: number;
  bank: 'common';
  category: string;
  level: 'Easy' | 'Medium' | 'Hard';
  question_en: string;
  question_ar: string;
  answer: number;
  learn_ref: string;
}

export interface FullPracticeProblem {
  id: string;
  grade: number;
  bank: 'specific';
  category: string;
  level: 'Easy' | 'Medium' | 'Hard';
  question_en: string;
  question_ar: string;
  answer: number;
  methods: {
    vedic: PracticeLearnMethod;
    decompose: PracticeLearnMethod;
    visualize: PracticeLearnMethod;
  };
  meta: { fun_fact_tag: string };
}

export type PracticeProblem = LightPracticeProblem | FullPracticeProblem;

export const PRACTICE_BANK_BY_GRADE: Record<number, PracticeProblem[]> = {
  1: grade1PracticeBank,
  2: grade2PracticeBank,
  3: grade3PracticeBank,
  4: grade4PracticeBank,
  5: grade5PracticeBank,
  6: grade6PracticeBank,
  7: grade7PracticeBank,
  8: grade8PracticeBank,
};

export function hasPracticeBank(grade: number): boolean {
  return (PRACTICE_BANK_BY_GRADE[grade]?.length ?? 0) > 0;
}

/** Unique category names for a grade, in the order they appear */
export function getPracticeCategories(grade: number): string[] {
  const bank = PRACTICE_BANK_BY_GRADE[grade] ?? [];
  return Array.from(new Set(bank.map(p => p.category)));
}

/** Problems for one category (optionally one level) within a grade */
export function getPracticeProblems(
  grade: number,
  category: string,
  level?: 'Easy' | 'Medium' | 'Hard',
): PracticeProblem[] {
  return (PRACTICE_BANK_BY_GRADE[grade] ?? []).filter(
    p => p.category === category && (!level || p.level === level)
  );
}

export function isFullProblem(p: PracticeProblem): p is FullPracticeProblem {
  return p.bank === 'specific';
}

export function isLightProblem(p: PracticeProblem): p is LightPracticeProblem {
  return p.bank === 'common';
}
