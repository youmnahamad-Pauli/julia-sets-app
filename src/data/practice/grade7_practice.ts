// ============================================================
// Julia Sets — Grade 7 Practice Bank
// Auto-generated — do not edit by hand
// 400 problems:
//   Common (light schema): Addition 50 + Subtraction 50 +
//                          Multiplication 50 + Division 50 = 200
//   Specific (full schema): Algebra 70 +
//                           Percentages Advanced 70 +
//                           Word Problems 60 = 200
// Steps shown only after 2 consecutive mistakes.
// Common bank uses learn_ref to link to grade7 learn bank steps.
// ============================================================

export interface LearnStep {
  step: number;
  title_en: string;
  title_ar: string;
  explanation_en: string;
  explanation_ar: string;
}

export interface LearnMethod {
  steps: LearnStep[];
  hint_en: string;
  hint_ar: string;
  result_en: string;
  result_ar: string;
}

export interface PracticeMeta {
  fun_fact_tag: string;
}

export interface LightPracticeProblem {
  id: string;
  grade: number;
  bank: 'common';
  category: 'Addition' | 'Subtraction' | 'Multiplication' | 'Division';
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
  category: 'Algebra' | 'Percentages Advanced' | 'Word Problem';
  level: 'Easy' | 'Medium' | 'Hard';
  question_en: string;
  question_ar: string;
  answer: number;
  methods: {
    vedic: LearnMethod;
    decompose: LearnMethod;
    visualize: LearnMethod;
  };
  meta: PracticeMeta;
}

export type PracticeProblem = LightPracticeProblem | FullPracticeProblem;

export const grade7PracticeBank: PracticeProblem[] = 
[
  {
    "id": "g7-practice-add-easy-001",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −12,500 + 37,600 = ?",
    "question_ar": "احسب: −12,500 + 37,600 = ؟",
    "answer": 25100,
    "learn_ref": "g7-common-add-easy-001"
  },
  {
    "id": "g7-practice-add-easy-002",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −45,000 + (−23,000) = ?",
    "question_ar": "احسب: −45,000 + (−23,000) = ؟",
    "answer": -68000,
    "learn_ref": "g7-common-add-easy-002"
  },
  {
    "id": "g7-practice-add-easy-003",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: 38,600 + 47,400 = ?",
    "question_ar": "احسب: 38,600 + 47,400 = ؟",
    "answer": 86000,
    "learn_ref": "g7-common-add-easy-003"
  },
  {
    "id": "g7-practice-add-easy-004",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −18,000 + 54,000 = ?",
    "question_ar": "احسب: −18,000 + 54,000 = ؟",
    "answer": 36000,
    "learn_ref": "g7-common-add-easy-001"
  },
  {
    "id": "g7-practice-add-easy-005",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: 72,500 + (−29,500) = ?",
    "question_ar": "احسب: 72,500 + (−29,500) = ؟",
    "answer": 43000,
    "learn_ref": "g7-common-add-easy-002"
  },
  {
    "id": "g7-practice-add-easy-006",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −63,200 + (−14,800) = ?",
    "question_ar": "احسب: −63,200 + (−14,800) = ؟",
    "answer": -78000,
    "learn_ref": "g7-common-add-easy-003"
  },
  {
    "id": "g7-practice-add-easy-007",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: 85,000 + (−35,000) = ?",
    "question_ar": "احسب: 85,000 + (−35,000) = ؟",
    "answer": 50000,
    "learn_ref": "g7-common-add-easy-001"
  },
  {
    "id": "g7-practice-add-easy-008",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −7,400 + 22,400 = ?",
    "question_ar": "احسب: −7,400 + 22,400 = ؟",
    "answer": 15000,
    "learn_ref": "g7-common-add-easy-002"
  },
  {
    "id": "g7-practice-add-easy-009",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: 44,300 + 55,700 = ?",
    "question_ar": "احسب: 44,300 + 55,700 = ؟",
    "answer": 100000,
    "learn_ref": "g7-common-add-easy-003"
  },
  {
    "id": "g7-practice-add-easy-010",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −99,000 + 49,000 = ?",
    "question_ar": "احسب: −99,000 + 49,000 = ؟",
    "answer": -50000,
    "learn_ref": "g7-common-add-easy-001"
  },
  {
    "id": "g7-practice-add-easy-011",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: 31,800 + (−11,800) = ?",
    "question_ar": "احسب: 31,800 + (−11,800) = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-add-easy-002"
  },
  {
    "id": "g7-practice-add-easy-012",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −56,000 + 21,000 = ?",
    "question_ar": "احسب: −56,000 + 21,000 = ؟",
    "answer": -35000,
    "learn_ref": "g7-common-add-easy-003"
  },
  {
    "id": "g7-practice-add-easy-013",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: 27,600 + 42,400 = ?",
    "question_ar": "احسب: 27,600 + 42,400 = ؟",
    "answer": 70000,
    "learn_ref": "g7-common-add-easy-001"
  },
  {
    "id": "g7-practice-add-easy-014",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −33,500 + (−16,500) = ?",
    "question_ar": "احسب: −33,500 + (−16,500) = ؟",
    "answer": -50000,
    "learn_ref": "g7-common-add-easy-002"
  },
  {
    "id": "g7-practice-add-easy-015",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: 68,000 + (−48,000) = ?",
    "question_ar": "احسب: 68,000 + (−48,000) = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-add-easy-003"
  },
  {
    "id": "g7-practice-add-easy-016",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: −10,200 + 35,200 = ?",
    "question_ar": "احسب: −10,200 + 35,200 = ؟",
    "answer": 25000,
    "learn_ref": "g7-common-add-easy-001"
  },
  {
    "id": "g7-practice-add-easy-017",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "Calculate: 91,400 + (−41,400) = ?",
    "question_ar": "احسب: 91,400 + (−41,400) = ؟",
    "answer": 50000,
    "learn_ref": "g7-common-add-easy-002"
  },
  {
    "id": "g7-practice-add-medium-001",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −3,400 + 7,800 + (−2,100) = ?",
    "question_ar": "احسب: −3,400 + 7,800 + (−2,100) = ؟",
    "answer": 2300,
    "learn_ref": "g7-common-add-medium-001"
  },
  {
    "id": "g7-practice-add-medium-002",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: 5,200 + (−8,900) + (−700) = ?",
    "question_ar": "احسب: 5,200 + (−8,900) + (−700) = ؟",
    "answer": -4400,
    "learn_ref": "g7-common-add-medium-002"
  },
  {
    "id": "g7-practice-add-medium-003",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −6,500 + 13,000 + (−5,000) = ?",
    "question_ar": "احسب: −6,500 + 13,000 + (−5,000) = ؟",
    "answer": 1500,
    "learn_ref": "g7-common-add-medium-003"
  },
  {
    "id": "g7-practice-add-medium-004",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: 8,300 + (−4,100) + (−3,200) + 2,000 = ?",
    "question_ar": "احسب: 8,300 + (−4,100) + (−3,200) + 2,000 = ؟",
    "answer": 3000,
    "learn_ref": "g7-common-add-medium-001"
  },
  {
    "id": "g7-practice-add-medium-005",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −15,000 + 9,500 + 7,500 = ?",
    "question_ar": "احسب: −15,000 + 9,500 + 7,500 = ؟",
    "answer": 2000,
    "learn_ref": "g7-common-add-medium-002"
  },
  {
    "id": "g7-practice-add-medium-006",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: 11,400 + (−6,200) + (−7,000) = ?",
    "question_ar": "احسب: 11,400 + (−6,200) + (−7,000) = ؟",
    "answer": -1800,
    "learn_ref": "g7-common-add-medium-003"
  },
  {
    "id": "g7-practice-add-medium-007",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −4,800 + 13,700 + (−5,500) = ?",
    "question_ar": "احسب: −4,800 + 13,700 + (−5,500) = ؟",
    "answer": 3400,
    "learn_ref": "g7-common-add-medium-001"
  },
  {
    "id": "g7-practice-add-medium-008",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: 7,600 + (−3,300) + (−7,000) = ?",
    "question_ar": "احسب: 7,600 + (−3,300) + (−7,000) = ؟",
    "answer": -2700,
    "learn_ref": "g7-common-add-medium-002"
  },
  {
    "id": "g7-practice-add-medium-009",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −20,000 + 8,400 + 7,500 = ?",
    "question_ar": "احسب: −20,000 + 8,400 + 7,500 = ؟",
    "answer": -4100,
    "learn_ref": "g7-common-add-medium-003"
  },
  {
    "id": "g7-practice-add-medium-010",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: 9,100 + (−5,600) + 2,700 = ?",
    "question_ar": "احسب: 9,100 + (−5,600) + 2,700 = ؟",
    "answer": 6200,
    "learn_ref": "g7-common-add-medium-001"
  },
  {
    "id": "g7-practice-add-medium-011",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −12,300 + 5,800 + 2,700 = ?",
    "question_ar": "احسب: −12,300 + 5,800 + 2,700 = ؟",
    "answer": -3800,
    "learn_ref": "g7-common-add-medium-002"
  },
  {
    "id": "g7-practice-add-medium-012",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: 14,500 + (−7,200) + (−4,300) + 2,000 = ?",
    "question_ar": "احسب: 14,500 + (−7,200) + (−4,300) + 2,000 = ؟",
    "answer": 5000,
    "learn_ref": "g7-common-add-medium-003"
  },
  {
    "id": "g7-practice-add-medium-013",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −9,000 + 4,200 + (−1,200) + 4,200 = ?",
    "question_ar": "احسب: −9,000 + 4,200 + (−1,200) + 4,200 = ؟",
    "answer": -1800,
    "learn_ref": "g7-common-add-medium-001"
  },
  {
    "id": "g7-practice-add-medium-014",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: 6,700 + (−2,400) + (−9,100) = ?",
    "question_ar": "احسب: 6,700 + (−2,400) + (−9,100) = ؟",
    "answer": -4800,
    "learn_ref": "g7-common-add-medium-002"
  },
  {
    "id": "g7-practice-add-medium-015",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −25,000 + 14,000 + 14,500 = ?",
    "question_ar": "احسب: −25,000 + 14,000 + 14,500 = ؟",
    "answer": 3500,
    "learn_ref": "g7-common-add-medium-003"
  },
  {
    "id": "g7-practice-add-medium-016",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: 18,000 + (−9,500) + (−11,100) = ?",
    "question_ar": "احسب: 18,000 + (−9,500) + (−11,100) = ؟",
    "answer": -2600,
    "learn_ref": "g7-common-add-medium-001"
  },
  {
    "id": "g7-practice-add-medium-017",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "Calculate: −5,700 + 3,200 + (−1,000) + 5,000 = ?",
    "question_ar": "احسب: −5,700 + 3,200 + (−1,000) + 5,000 = ؟",
    "answer": 1500,
    "learn_ref": "g7-common-add-medium-002"
  },
  {
    "id": "g7-practice-add-hard-001",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: 124.75 + 38.25 = ?",
    "question_ar": "احسب: 124.75 + 38.25 = ؟",
    "answer": 163,
    "learn_ref": "g7-common-add-hard-001"
  },
  {
    "id": "g7-practice-add-hard-002",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: 67.4 + 32.6 + (−50) = ?",
    "question_ar": "احسب: 67.4 + 32.6 + (−50) = ؟",
    "answer": 50,
    "learn_ref": "g7-common-add-hard-002"
  },
  {
    "id": "g7-practice-add-hard-003",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: −318.25 + 118.25 + 75 = ?",
    "question_ar": "احسب: −318.25 + 118.25 + 75 = ؟",
    "answer": -125,
    "learn_ref": "g7-common-add-hard-003"
  },
  {
    "id": "g7-practice-add-hard-004",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: 450.6 + (−150.6) + (−375) = ?",
    "question_ar": "احسب: 450.6 + (−150.6) + (−375) = ؟",
    "answer": -75,
    "learn_ref": "g7-common-add-hard-001"
  },
  {
    "id": "g7-practice-add-hard-005",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: −75.5 + 25.5 + (−60) + 210 = ?",
    "question_ar": "احسب: −75.5 + 25.5 + (−60) + 210 = ؟",
    "answer": 100,
    "learn_ref": "g7-common-add-hard-002"
  },
  {
    "id": "g7-practice-add-hard-006",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: 88.8 + 11.2 + (−100) + 250 = ?",
    "question_ar": "احسب: 88.8 + 11.2 + (−100) + 250 = ؟",
    "answer": 250,
    "learn_ref": "g7-common-add-hard-003"
  },
  {
    "id": "g7-practice-add-hard-007",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: −500.75 + 200.75 + 125 = ?",
    "question_ar": "احسب: −500.75 + 200.75 + 125 = ؟",
    "answer": -175,
    "learn_ref": "g7-common-add-hard-001"
  },
  {
    "id": "g7-practice-add-hard-008",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: 136.5 + (−36.5) + 100 = ?",
    "question_ar": "احسب: 136.5 + (−36.5) + 100 = ؟",
    "answer": 200,
    "learn_ref": "g7-common-add-hard-002"
  },
  {
    "id": "g7-practice-add-hard-009",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: −44.4 + 144.4 + (−250) = ?",
    "question_ar": "احسب: −44.4 + 144.4 + (−250) = ؟",
    "answer": -150,
    "learn_ref": "g7-common-add-hard-003"
  },
  {
    "id": "g7-practice-add-hard-010",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: 275.25 + (−75.25) + (−125) = ?",
    "question_ar": "احسب: 275.25 + (−75.25) + (−125) = ؟",
    "answer": 75,
    "learn_ref": "g7-common-add-hard-001"
  },
  {
    "id": "g7-practice-add-hard-011",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: −620.5 + 220.5 + 200 = ?",
    "question_ar": "احسب: −620.5 + 220.5 + 200 = ؟",
    "answer": -200,
    "learn_ref": "g7-common-add-hard-002"
  },
  {
    "id": "g7-practice-add-hard-012",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: 55.75 + 44.25 + 75 = ?",
    "question_ar": "احسب: 55.75 + 44.25 + 75 = ؟",
    "answer": 175,
    "learn_ref": "g7-common-add-hard-003"
  },
  {
    "id": "g7-practice-add-hard-013",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: −180.6 + 80.6 + (−50) + 100 = ?",
    "question_ar": "احسب: −180.6 + 80.6 + (−50) + 100 = ؟",
    "answer": -50,
    "learn_ref": "g7-common-add-hard-001"
  },
  {
    "id": "g7-practice-add-hard-014",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: 312.5 + (−112.5) + 100 = ?",
    "question_ar": "احسب: 312.5 + (−112.5) + 100 = ؟",
    "answer": 300,
    "learn_ref": "g7-common-add-hard-002"
  },
  {
    "id": "g7-practice-add-hard-015",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: −99.9 + 199.9 + (−125) = ?",
    "question_ar": "احسب: −99.9 + 199.9 + (−125) = ؟",
    "answer": -25,
    "learn_ref": "g7-common-add-hard-003"
  },
  {
    "id": "g7-practice-add-hard-016",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "Calculate: −250.4 + 150.4 + 180 = ?",
    "question_ar": "احسب: −250.4 + 150.4 + 180 = ؟",
    "answer": 80,
    "learn_ref": "g7-common-add-hard-001"
  },
  {
    "id": "g7-practice-sub-easy-001",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 15,000 − (−8,500) = ?",
    "question_ar": "احسب: 15,000 − (−8,500) = ؟",
    "answer": 23500,
    "learn_ref": "g7-common-sub-easy-001"
  },
  {
    "id": "g7-practice-sub-easy-002",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −6,200 − 3,400 = ?",
    "question_ar": "احسب: −6,200 − 3,400 = ؟",
    "answer": -9600,
    "learn_ref": "g7-common-sub-easy-002"
  },
  {
    "id": "g7-practice-sub-easy-003",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −4,500 − (−11,000) = ?",
    "question_ar": "احسب: −4,500 − (−11,000) = ؟",
    "answer": 6500,
    "learn_ref": "g7-common-sub-easy-003"
  },
  {
    "id": "g7-practice-sub-easy-004",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 20,000 − (−5,000) = ?",
    "question_ar": "احسب: 20,000 − (−5,000) = ؟",
    "answer": 25000,
    "learn_ref": "g7-common-sub-easy-001"
  },
  {
    "id": "g7-practice-sub-easy-005",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −8,300 − 4,700 = ?",
    "question_ar": "احسب: −8,300 − 4,700 = ؟",
    "answer": -13000,
    "learn_ref": "g7-common-sub-easy-002"
  },
  {
    "id": "g7-practice-sub-easy-006",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −3,000 − (−9,000) = ?",
    "question_ar": "احسب: −3,000 − (−9,000) = ؟",
    "answer": 6000,
    "learn_ref": "g7-common-sub-easy-003"
  },
  {
    "id": "g7-practice-sub-easy-007",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 12,500 − (−7,500) = ?",
    "question_ar": "احسب: 12,500 − (−7,500) = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-sub-easy-001"
  },
  {
    "id": "g7-practice-sub-easy-008",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −11,400 − 6,600 = ?",
    "question_ar": "احسب: −11,400 − 6,600 = ؟",
    "answer": -18000,
    "learn_ref": "g7-common-sub-easy-002"
  },
  {
    "id": "g7-practice-sub-easy-009",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −2,800 − (−14,800) = ?",
    "question_ar": "احسب: −2,800 − (−14,800) = ؟",
    "answer": 12000,
    "learn_ref": "g7-common-sub-easy-003"
  },
  {
    "id": "g7-practice-sub-easy-010",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 18,000 − (−2,000) = ?",
    "question_ar": "احسب: 18,000 − (−2,000) = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-sub-easy-001"
  },
  {
    "id": "g7-practice-sub-easy-011",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −7,500 − 4,500 = ?",
    "question_ar": "احسب: −7,500 − 4,500 = ؟",
    "answer": -12000,
    "learn_ref": "g7-common-sub-easy-002"
  },
  {
    "id": "g7-practice-sub-easy-012",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −9,600 − (−16,400) = ?",
    "question_ar": "احسب: −9,600 − (−16,400) = ؟",
    "answer": 6800,
    "learn_ref": "g7-common-sub-easy-003"
  },
  {
    "id": "g7-practice-sub-easy-013",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 25,000 − (−5,000) = ?",
    "question_ar": "احسب: 25,000 − (−5,000) = ؟",
    "answer": 30000,
    "learn_ref": "g7-common-sub-easy-001"
  },
  {
    "id": "g7-practice-sub-easy-014",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −13,000 − 7,000 = ?",
    "question_ar": "احسب: −13,000 − 7,000 = ؟",
    "answer": -20000,
    "learn_ref": "g7-common-sub-easy-002"
  },
  {
    "id": "g7-practice-sub-easy-015",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −5,200 − (−12,200) = ?",
    "question_ar": "احسب: −5,200 − (−12,200) = ؟",
    "answer": 7000,
    "learn_ref": "g7-common-sub-easy-003"
  },
  {
    "id": "g7-practice-sub-easy-016",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 30,000 − (−10,000) = ?",
    "question_ar": "احسب: 30,000 − (−10,000) = ؟",
    "answer": 40000,
    "learn_ref": "g7-common-sub-easy-001"
  },
  {
    "id": "g7-practice-sub-easy-017",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: −15,000 − 5,000 = ?",
    "question_ar": "احسب: −15,000 − 5,000 = ؟",
    "answer": -20000,
    "learn_ref": "g7-common-sub-easy-002"
  },
  {
    "id": "g7-practice-sub-medium-001",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 45,000 − 18,600 − 12,400 = ?",
    "question_ar": "احسب: 45,000 − 18,600 − 12,400 = ؟",
    "answer": 14000,
    "learn_ref": "g7-common-sub-medium-001"
  },
  {
    "id": "g7-practice-sub-medium-002",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 30,000 − (−5,500) − 14,500 = ?",
    "question_ar": "احسب: 30,000 − (−5,500) − 14,500 = ؟",
    "answer": 21000,
    "learn_ref": "g7-common-sub-medium-002"
  },
  {
    "id": "g7-practice-sub-medium-003",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: −10,000 − 4,000 − (−24,000) = ?",
    "question_ar": "احسب: −10,000 − 4,000 − (−24,000) = ؟",
    "answer": 10000,
    "learn_ref": "g7-common-sub-medium-003"
  },
  {
    "id": "g7-practice-sub-medium-004",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 60,000 − 25,000 − 15,000 = ?",
    "question_ar": "احسب: 60,000 − 25,000 − 15,000 = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-sub-medium-001"
  },
  {
    "id": "g7-practice-sub-medium-005",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 50,000 − (−8,000) − 28,000 = ?",
    "question_ar": "احسب: 50,000 − (−8,000) − 28,000 = ؟",
    "answer": 30000,
    "learn_ref": "g7-common-sub-medium-002"
  },
  {
    "id": "g7-practice-sub-medium-006",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: −5,000 − 12,000 − (−27,000) = ?",
    "question_ar": "احسب: −5,000 − 12,000 − (−27,000) = ؟",
    "answer": 10000,
    "learn_ref": "g7-common-sub-medium-003"
  },
  {
    "id": "g7-practice-sub-medium-007",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 80,000 − 33,000 − 22,000 = ?",
    "question_ar": "احسب: 80,000 − 33,000 − 22,000 = ؟",
    "answer": 25000,
    "learn_ref": "g7-common-sub-medium-001"
  },
  {
    "id": "g7-practice-sub-medium-008",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 40,000 − (−6,000) − 26,000 = ?",
    "question_ar": "احسب: 40,000 − (−6,000) − 26,000 = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-sub-medium-002"
  },
  {
    "id": "g7-practice-sub-medium-009",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: −8,000 − 7,000 − (−35,000) = ?",
    "question_ar": "احسب: −8,000 − 7,000 − (−35,000) = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-sub-medium-003"
  },
  {
    "id": "g7-practice-sub-medium-010",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 75,000 − 40,000 − 20,000 = ?",
    "question_ar": "احسب: 75,000 − 40,000 − 20,000 = ؟",
    "answer": 15000,
    "learn_ref": "g7-common-sub-medium-001"
  },
  {
    "id": "g7-practice-sub-medium-011",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 55,000 − (−4,500) − 34,500 = ?",
    "question_ar": "احسب: 55,000 − (−4,500) − 34,500 = ؟",
    "answer": 25000,
    "learn_ref": "g7-common-sub-medium-002"
  },
  {
    "id": "g7-practice-sub-medium-012",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: −12,000 − 3,000 − (−40,000) = ?",
    "question_ar": "احسب: −12,000 − 3,000 − (−40,000) = ؟",
    "answer": 25000,
    "learn_ref": "g7-common-sub-medium-003"
  },
  {
    "id": "g7-practice-sub-medium-013",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 90,000 − 45,000 − 25,000 = ?",
    "question_ar": "احسب: 90,000 − 45,000 − 25,000 = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-sub-medium-001"
  },
  {
    "id": "g7-practice-sub-medium-014",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 35,000 − (−9,000) − 19,000 = ?",
    "question_ar": "احسب: 35,000 − (−9,000) − 19,000 = ؟",
    "answer": 25000,
    "learn_ref": "g7-common-sub-medium-002"
  },
  {
    "id": "g7-practice-sub-medium-015",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: −6,000 − 14,000 − (−50,000) = ?",
    "question_ar": "احسب: −6,000 − 14,000 − (−50,000) = ؟",
    "answer": 30000,
    "learn_ref": "g7-common-sub-medium-003"
  },
  {
    "id": "g7-practice-sub-medium-016",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 100,000 − 58,000 − 22,000 = ?",
    "question_ar": "احسب: 100,000 − 58,000 − 22,000 = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-sub-medium-001"
  },
  {
    "id": "g7-practice-sub-medium-017",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 48,000 − (−7,000) − 30,000 = ?",
    "question_ar": "احسب: 48,000 − (−7,000) − 30,000 = ؟",
    "answer": 25000,
    "learn_ref": "g7-common-sub-medium-002"
  },
  {
    "id": "g7-practice-sub-hard-001",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 250.375 − 125.375 = ?",
    "question_ar": "احسب: 250.375 − 125.375 = ؟",
    "answer": 125,
    "learn_ref": "g7-common-sub-hard-001"
  },
  {
    "id": "g7-practice-sub-hard-002",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 1,000.6 − 437.6 − (−62) = ?",
    "question_ar": "احسب: 1,000.6 − 437.6 − (−62) = ؟",
    "answer": 625,
    "learn_ref": "g7-common-sub-hard-002"
  },
  {
    "id": "g7-practice-sub-hard-003",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 500.75 − 200.75 = ?",
    "question_ar": "احسب: 500.75 − 200.75 = ؟",
    "answer": 300,
    "learn_ref": "g7-common-sub-hard-003"
  },
  {
    "id": "g7-practice-sub-hard-004",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 750.25 − (−249.75) = ?",
    "question_ar": "احسب: 750.25 − (−249.75) = ؟",
    "answer": 1000,
    "learn_ref": "g7-common-sub-hard-001"
  },
  {
    "id": "g7-practice-sub-hard-005",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 300.5 − 150.5 − (−100) = ?",
    "question_ar": "احسب: 300.5 − 150.5 − (−100) = ؟",
    "answer": 250,
    "learn_ref": "g7-common-sub-hard-002"
  },
  {
    "id": "g7-practice-sub-hard-006",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 1,200.8 − 700.8 = ?",
    "question_ar": "احسب: 1,200.8 − 700.8 = ؟",
    "answer": 500,
    "learn_ref": "g7-common-sub-hard-003"
  },
  {
    "id": "g7-practice-sub-hard-007",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 875.125 − 375.125 = ?",
    "question_ar": "احسب: 875.125 − 375.125 = ؟",
    "answer": 500,
    "learn_ref": "g7-common-sub-hard-001"
  },
  {
    "id": "g7-practice-sub-hard-008",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 600.4 − (−299.6) = ?",
    "question_ar": "احسب: 600.4 − (−299.6) = ؟",
    "answer": 900,
    "learn_ref": "g7-common-sub-hard-002"
  },
  {
    "id": "g7-practice-sub-hard-009",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 450.625 − 200.625 − (−50) = ?",
    "question_ar": "احسب: 450.625 − 200.625 − (−50) = ؟",
    "answer": 300,
    "learn_ref": "g7-common-sub-hard-003"
  },
  {
    "id": "g7-practice-sub-hard-010",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 2,000.3 − 1,200.3 = ?",
    "question_ar": "احسب: 2,000.3 − 1,200.3 = ؟",
    "answer": 800,
    "learn_ref": "g7-common-sub-hard-001"
  },
  {
    "id": "g7-practice-sub-hard-011",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 125.875 − (−374.125) = ?",
    "question_ar": "احسب: 125.875 − (−374.125) = ؟",
    "answer": 500,
    "learn_ref": "g7-common-sub-hard-002"
  },
  {
    "id": "g7-practice-sub-hard-012",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 900.6 − 400.6 − (−200) = ?",
    "question_ar": "احسب: 900.6 − 400.6 − (−200) = ؟",
    "answer": 700,
    "learn_ref": "g7-common-sub-hard-003"
  },
  {
    "id": "g7-practice-sub-hard-013",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 1,500.25 − 750.25 = ?",
    "question_ar": "احسب: 1,500.25 − 750.25 = ؟",
    "answer": 750,
    "learn_ref": "g7-common-sub-hard-001"
  },
  {
    "id": "g7-practice-sub-hard-014",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 650.5 − (−149.5) = ?",
    "question_ar": "احسب: 650.5 − (−149.5) = ؟",
    "answer": 800,
    "learn_ref": "g7-common-sub-hard-002"
  },
  {
    "id": "g7-practice-sub-hard-015",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 800.75 − 300.75 − (−125) = ?",
    "question_ar": "احسب: 800.75 − 300.75 − (−125) = ؟",
    "answer": 625,
    "learn_ref": "g7-common-sub-hard-003"
  },
  {
    "id": "g7-practice-sub-hard-016",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 3,000.125 − 1,500.125 = ?",
    "question_ar": "احسب: 3,000.125 − 1,500.125 = ؟",
    "answer": 1500,
    "learn_ref": "g7-common-sub-hard-001"
  },
  {
    "id": "g7-practice-mul-easy-001",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 1,250 × 8 = ?",
    "question_ar": "احسب: 1,250 × 8 = ؟",
    "answer": 10000,
    "learn_ref": "g7-common-mul-easy-001"
  },
  {
    "id": "g7-practice-mul-easy-002",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 3,400 × 20 = ?",
    "question_ar": "احسب: 3,400 × 20 = ؟",
    "answer": 68000,
    "learn_ref": "g7-common-mul-easy-002"
  },
  {
    "id": "g7-practice-mul-easy-003",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 2,500 × 40 = ?",
    "question_ar": "احسب: 2,500 × 40 = ؟",
    "answer": 100000,
    "learn_ref": "g7-common-mul-easy-003"
  },
  {
    "id": "g7-practice-mul-easy-004",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 1,125 × 6 = ?",
    "question_ar": "احسب: 1,125 × 6 = ؟",
    "answer": 6750,
    "learn_ref": "g7-common-mul-easy-001"
  },
  {
    "id": "g7-practice-mul-easy-005",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 4,200 × 5 = ?",
    "question_ar": "احسب: 4,200 × 5 = ؟",
    "answer": 21000,
    "learn_ref": "g7-common-mul-easy-002"
  },
  {
    "id": "g7-practice-mul-easy-006",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 3,600 × 9 = ?",
    "question_ar": "احسب: 3,600 × 9 = ؟",
    "answer": 32400,
    "learn_ref": "g7-common-mul-easy-003"
  },
  {
    "id": "g7-practice-mul-easy-007",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 2,750 × 4 = ?",
    "question_ar": "احسب: 2,750 × 4 = ؟",
    "answer": 11000,
    "learn_ref": "g7-common-mul-easy-001"
  },
  {
    "id": "g7-practice-mul-easy-008",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 1,800 × 7 = ?",
    "question_ar": "احسب: 1,800 × 7 = ؟",
    "answer": 12600,
    "learn_ref": "g7-common-mul-easy-002"
  },
  {
    "id": "g7-practice-mul-easy-009",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 5,000 × 3 = ?",
    "question_ar": "احسب: 5,000 × 3 = ؟",
    "answer": 15000,
    "learn_ref": "g7-common-mul-easy-003"
  },
  {
    "id": "g7-practice-mul-easy-010",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 6,250 × 8 = ?",
    "question_ar": "احسب: 6,250 × 8 = ؟",
    "answer": 50000,
    "learn_ref": "g7-common-mul-easy-001"
  },
  {
    "id": "g7-practice-mul-easy-011",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 1,500 × 30 = ?",
    "question_ar": "احسب: 1,500 × 30 = ؟",
    "answer": 45000,
    "learn_ref": "g7-common-mul-easy-002"
  },
  {
    "id": "g7-practice-mul-easy-012",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 2,200 × 20 = ?",
    "question_ar": "احسب: 2,200 × 20 = ؟",
    "answer": 44000,
    "learn_ref": "g7-common-mul-easy-003"
  },
  {
    "id": "g7-practice-mul-easy-013",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 4,800 × 4 = ?",
    "question_ar": "احسب: 4,800 × 4 = ؟",
    "answer": 19200,
    "learn_ref": "g7-common-mul-easy-001"
  },
  {
    "id": "g7-practice-mul-easy-014",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 3,150 × 6 = ?",
    "question_ar": "احسب: 3,150 × 6 = ؟",
    "answer": 18900,
    "learn_ref": "g7-common-mul-easy-002"
  },
  {
    "id": "g7-practice-mul-easy-015",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 7,000 × 5 = ?",
    "question_ar": "احسب: 7,000 × 5 = ؟",
    "answer": 35000,
    "learn_ref": "g7-common-mul-easy-003"
  },
  {
    "id": "g7-practice-mul-easy-016",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 2,400 × 50 = ?",
    "question_ar": "احسب: 2,400 × 50 = ؟",
    "answer": 120000,
    "learn_ref": "g7-common-mul-easy-001"
  },
  {
    "id": "g7-practice-mul-easy-017",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 1,050 × 9 = ?",
    "question_ar": "احسب: 1,050 × 9 = ؟",
    "answer": 9450,
    "learn_ref": "g7-common-mul-easy-002"
  },
  {
    "id": "g7-practice-mul-medium-001",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 1,234 × 12 = ?",
    "question_ar": "احسب: 1,234 × 12 = ؟",
    "answer": 14808,
    "learn_ref": "g7-common-mul-medium-001"
  },
  {
    "id": "g7-practice-mul-medium-002",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 2,345 × 15 = ?",
    "question_ar": "احسب: 2,345 × 15 = ؟",
    "answer": 35175,
    "learn_ref": "g7-common-mul-medium-002"
  },
  {
    "id": "g7-practice-mul-medium-003",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 3,125 × 16 = ?",
    "question_ar": "احسب: 3,125 × 16 = ؟",
    "answer": 50000,
    "learn_ref": "g7-common-mul-medium-003"
  },
  {
    "id": "g7-practice-mul-medium-004",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 1,450 × 14 = ?",
    "question_ar": "احسب: 1,450 × 14 = ؟",
    "answer": 20300,
    "learn_ref": "g7-common-mul-medium-001"
  },
  {
    "id": "g7-practice-mul-medium-005",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 2,600 × 13 = ?",
    "question_ar": "احسب: 2,600 × 13 = ؟",
    "answer": 33800,
    "learn_ref": "g7-common-mul-medium-002"
  },
  {
    "id": "g7-practice-mul-medium-006",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 3,200 × 11 = ?",
    "question_ar": "احسب: 3,200 × 11 = ؟",
    "answer": 35200,
    "learn_ref": "g7-common-mul-medium-003"
  },
  {
    "id": "g7-practice-mul-medium-007",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 1,875 × 12 = ?",
    "question_ar": "احسب: 1,875 × 12 = ؟",
    "answer": 22500,
    "learn_ref": "g7-common-mul-medium-001"
  },
  {
    "id": "g7-practice-mul-medium-008",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 4,100 × 15 = ?",
    "question_ar": "احسب: 4,100 × 15 = ؟",
    "answer": 61500,
    "learn_ref": "g7-common-mul-medium-002"
  },
  {
    "id": "g7-practice-mul-medium-009",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 2,750 × 16 = ?",
    "question_ar": "احسب: 2,750 × 16 = ؟",
    "answer": 44000,
    "learn_ref": "g7-common-mul-medium-003"
  },
  {
    "id": "g7-practice-mul-medium-010",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 1,320 × 18 = ?",
    "question_ar": "احسب: 1,320 × 18 = ؟",
    "answer": 23760,
    "learn_ref": "g7-common-mul-medium-001"
  },
  {
    "id": "g7-practice-mul-medium-011",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 3,050 × 13 = ?",
    "question_ar": "احسب: 3,050 × 13 = ؟",
    "answer": 39650,
    "learn_ref": "g7-common-mul-medium-002"
  },
  {
    "id": "g7-practice-mul-medium-012",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 2,480 × 17 = ?",
    "question_ar": "احسب: 2,480 × 17 = ؟",
    "answer": 42160,
    "learn_ref": "g7-common-mul-medium-003"
  },
  {
    "id": "g7-practice-mul-medium-013",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 1,600 × 19 = ?",
    "question_ar": "احسب: 1,600 × 19 = ؟",
    "answer": 30400,
    "learn_ref": "g7-common-mul-medium-001"
  },
  {
    "id": "g7-practice-mul-medium-014",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 4,250 × 14 = ?",
    "question_ar": "احسب: 4,250 × 14 = ؟",
    "answer": 59500,
    "learn_ref": "g7-common-mul-medium-002"
  },
  {
    "id": "g7-practice-mul-medium-015",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 3,300 × 12 = ?",
    "question_ar": "احسب: 3,300 × 12 = ؟",
    "answer": 39600,
    "learn_ref": "g7-common-mul-medium-003"
  },
  {
    "id": "g7-practice-mul-medium-016",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 2,150 × 20 = ?",
    "question_ar": "احسب: 2,150 × 20 = ؟",
    "answer": 43000,
    "learn_ref": "g7-common-mul-medium-001"
  },
  {
    "id": "g7-practice-mul-medium-017",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 1,780 × 11 = ?",
    "question_ar": "احسب: 1,780 × 11 = ؟",
    "answer": 19580,
    "learn_ref": "g7-common-mul-medium-002"
  },
  {
    "id": "g7-practice-mul-hard-001",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−234) × 17 = ?",
    "question_ar": "احسب: (−234) × 17 = ؟",
    "answer": -3978,
    "learn_ref": "g7-common-mul-hard-001"
  },
  {
    "id": "g7-practice-mul-hard-002",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−425) × 32 = ?",
    "question_ar": "احسب: (−425) × 32 = ؟",
    "answer": -13600,
    "learn_ref": "g7-common-mul-hard-002"
  },
  {
    "id": "g7-practice-mul-hard-003",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: 12.5 × 240 = ?",
    "question_ar": "احسب: 12.5 × 240 = ؟",
    "answer": 3000,
    "learn_ref": "g7-common-mul-hard-003"
  },
  {
    "id": "g7-practice-mul-hard-004",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−1,250) × 16 = ?",
    "question_ar": "احسب: (−1,250) × 16 = ؟",
    "answer": -20000,
    "learn_ref": "g7-common-mul-hard-001"
  },
  {
    "id": "g7-practice-mul-hard-005",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: 37.5 × 400 = ?",
    "question_ar": "احسب: 37.5 × 400 = ؟",
    "answer": 15000,
    "learn_ref": "g7-common-mul-hard-002"
  },
  {
    "id": "g7-practice-mul-hard-006",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−3,600) × 15 = ?",
    "question_ar": "احسب: (−3,600) × 15 = ؟",
    "answer": -54000,
    "learn_ref": "g7-common-mul-hard-003"
  },
  {
    "id": "g7-practice-mul-hard-007",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: 125 × 480 = ?",
    "question_ar": "احسب: 125 × 480 = ؟",
    "answer": 60000,
    "learn_ref": "g7-common-mul-hard-001"
  },
  {
    "id": "g7-practice-mul-hard-008",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: 62.5 × 320 = ?",
    "question_ar": "احسب: 62.5 × 320 = ؟",
    "answer": 20000,
    "learn_ref": "g7-common-mul-hard-002"
  },
  {
    "id": "g7-practice-mul-hard-009",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−2,450) × 18 = ?",
    "question_ar": "احسب: (−2,450) × 18 = ؟",
    "answer": -44100,
    "learn_ref": "g7-common-mul-hard-003"
  },
  {
    "id": "g7-practice-mul-hard-010",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−1,875) × 12 = ?",
    "question_ar": "احسب: (−1,875) × 12 = ؟",
    "answer": -22500,
    "learn_ref": "g7-common-mul-hard-001"
  },
  {
    "id": "g7-practice-mul-hard-011",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−560) × 25 = ?",
    "question_ar": "احسب: (−560) × 25 = ؟",
    "answer": -14000,
    "learn_ref": "g7-common-mul-hard-002"
  },
  {
    "id": "g7-practice-mul-hard-012",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: 87.5 × 160 = ?",
    "question_ar": "احسب: 87.5 × 160 = ؟",
    "answer": 14000,
    "learn_ref": "g7-common-mul-hard-003"
  },
  {
    "id": "g7-practice-mul-hard-013",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−3,200) × 11 = ?",
    "question_ar": "احسب: (−3,200) × 11 = ؟",
    "answer": -35200,
    "learn_ref": "g7-common-mul-hard-001"
  },
  {
    "id": "g7-practice-mul-hard-014",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−4,500) × 14 = ?",
    "question_ar": "احسب: (−4,500) × 14 = ؟",
    "answer": -63000,
    "learn_ref": "g7-common-mul-hard-002"
  },
  {
    "id": "g7-practice-mul-hard-015",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−1,050) × 19 = ?",
    "question_ar": "احسب: (−1,050) × 19 = ؟",
    "answer": -19950,
    "learn_ref": "g7-common-mul-hard-003"
  },
  {
    "id": "g7-practice-mul-hard-016",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: (−2,800) × 20 = ?",
    "question_ar": "احسب: (−2,800) × 20 = ؟",
    "answer": -56000,
    "learn_ref": "g7-common-mul-hard-001"
  },
  {
    "id": "g7-practice-div-easy-001",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 45,000 ÷ 25 = ?",
    "question_ar": "احسب: 45,000 ÷ 25 = ؟",
    "answer": 1800,
    "learn_ref": "g7-common-div-easy-001"
  },
  {
    "id": "g7-practice-div-easy-002",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 36,400 ÷ 14 = ?",
    "question_ar": "احسب: 36,400 ÷ 14 = ؟",
    "answer": 2600,
    "learn_ref": "g7-common-div-easy-002"
  },
  {
    "id": "g7-practice-div-easy-003",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 84,000 ÷ 35 = ?",
    "question_ar": "احسب: 84,000 ÷ 35 = ؟",
    "answer": 2400,
    "learn_ref": "g7-common-div-easy-003"
  },
  {
    "id": "g7-practice-div-easy-004",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 60,000 ÷ 40 = ?",
    "question_ar": "احسب: 60,000 ÷ 40 = ؟",
    "answer": 1500,
    "learn_ref": "g7-common-div-easy-001"
  },
  {
    "id": "g7-practice-div-easy-005",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 48,000 ÷ 15 = ?",
    "question_ar": "احسب: 48,000 ÷ 15 = ؟",
    "answer": 3200,
    "learn_ref": "g7-common-div-easy-002"
  },
  {
    "id": "g7-practice-div-easy-006",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 28,000 ÷ 16 = ?",
    "question_ar": "احسب: 28,000 ÷ 16 = ؟",
    "answer": 1750,
    "learn_ref": "g7-common-div-easy-003"
  },
  {
    "id": "g7-practice-div-easy-007",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 42,000 ÷ 12 = ?",
    "question_ar": "احسب: 42,000 ÷ 12 = ؟",
    "answer": 3500,
    "learn_ref": "g7-common-div-easy-001"
  },
  {
    "id": "g7-practice-div-easy-008",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 72,000 ÷ 45 = ?",
    "question_ar": "احسب: 72,000 ÷ 45 = ؟",
    "answer": 1600,
    "learn_ref": "g7-common-div-easy-002"
  },
  {
    "id": "g7-practice-div-easy-009",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 67,200 ÷ 24 = ?",
    "question_ar": "احسب: 67,200 ÷ 24 = ؟",
    "answer": 2800,
    "learn_ref": "g7-common-div-easy-003"
  },
  {
    "id": "g7-practice-div-easy-010",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 70,000 ÷ 50 = ?",
    "question_ar": "احسب: 70,000 ÷ 50 = ؟",
    "answer": 1400,
    "learn_ref": "g7-common-div-easy-001"
  },
  {
    "id": "g7-practice-div-easy-011",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 50,400 ÷ 28 = ?",
    "question_ar": "احسب: 50,400 ÷ 28 = ؟",
    "answer": 1800,
    "learn_ref": "g7-common-div-easy-002"
  },
  {
    "id": "g7-practice-div-easy-012",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 52,800 ÷ 48 = ?",
    "question_ar": "احسب: 52,800 ÷ 48 = ؟",
    "answer": 1100,
    "learn_ref": "g7-common-div-easy-003"
  },
  {
    "id": "g7-practice-div-easy-013",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 51,000 ÷ 20 = ?",
    "question_ar": "احسب: 51,000 ÷ 20 = ؟",
    "answer": 2550,
    "learn_ref": "g7-common-div-easy-001"
  },
  {
    "id": "g7-practice-div-easy-014",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 39,000 ÷ 20 = ?",
    "question_ar": "احسب: 39,000 ÷ 20 = ؟",
    "answer": 1950,
    "learn_ref": "g7-common-div-easy-002"
  },
  {
    "id": "g7-practice-div-easy-015",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 44,000 ÷ 16 = ?",
    "question_ar": "احسب: 44,000 ÷ 16 = ؟",
    "answer": 2750,
    "learn_ref": "g7-common-div-easy-003"
  },
  {
    "id": "g7-practice-div-easy-016",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 54,000 ÷ 40 = ?",
    "question_ar": "احسب: 54,000 ÷ 40 = ؟",
    "answer": 1350,
    "learn_ref": "g7-common-div-easy-001"
  },
  {
    "id": "g7-practice-div-easy-017",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 55,200 ÷ 24 = ?",
    "question_ar": "احسب: 55,200 ÷ 24 = ؟",
    "answer": 2300,
    "learn_ref": "g7-common-div-easy-002"
  },
  {
    "id": "g7-practice-div-medium-001",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−48,600) ÷ 12 = ?",
    "question_ar": "احسب: (−48,600) ÷ 12 = ؟",
    "answer": -4050,
    "learn_ref": "g7-common-div-medium-001"
  },
  {
    "id": "g7-practice-div-medium-002",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 56,784 ÷ 16 = ?",
    "question_ar": "احسب: 56,784 ÷ 16 = ؟",
    "answer": 3549,
    "learn_ref": "g7-common-div-medium-002"
  },
  {
    "id": "g7-practice-div-medium-003",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−90,000) ÷ 25 = ?",
    "question_ar": "احسب: (−90,000) ÷ 25 = ؟",
    "answer": -3600,
    "learn_ref": "g7-common-div-medium-003"
  },
  {
    "id": "g7-practice-div-medium-004",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 58,800 ÷ 14 = ?",
    "question_ar": "احسب: 58,800 ÷ 14 = ؟",
    "answer": 4200,
    "learn_ref": "g7-common-div-medium-001"
  },
  {
    "id": "g7-practice-div-medium-005",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−81,000) ÷ 15 = ?",
    "question_ar": "احسب: (−81,000) ÷ 15 = ؟",
    "answer": -5400,
    "learn_ref": "g7-common-div-medium-002"
  },
  {
    "id": "g7-practice-div-medium-006",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 120,000 ÷ 32 = ?",
    "question_ar": "احسب: 120,000 ÷ 32 = ؟",
    "answer": 3750,
    "learn_ref": "g7-common-div-medium-003"
  },
  {
    "id": "g7-practice-div-medium-007",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−97,200) ÷ 36 = ?",
    "question_ar": "احسب: (−97,200) ÷ 36 = ؟",
    "answer": -2700,
    "learn_ref": "g7-common-div-medium-001"
  },
  {
    "id": "g7-practice-div-medium-008",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 216,000 ÷ 48 = ?",
    "question_ar": "احسب: 216,000 ÷ 48 = ؟",
    "answer": 4500,
    "learn_ref": "g7-common-div-medium-002"
  },
  {
    "id": "g7-practice-div-medium-009",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−230,400) ÷ 72 = ?",
    "question_ar": "احسب: (−230,400) ÷ 72 = ؟",
    "answer": -3200,
    "learn_ref": "g7-common-div-medium-003"
  },
  {
    "id": "g7-practice-div-medium-010",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 268,800 ÷ 96 = ?",
    "question_ar": "احسب: 268,800 ÷ 96 = ؟",
    "answer": 2800,
    "learn_ref": "g7-common-div-medium-001"
  },
  {
    "id": "g7-practice-div-medium-011",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−480,000) ÷ 100 = ?",
    "question_ar": "احسب: (−480,000) ÷ 100 = ؟",
    "answer": -4800,
    "learn_ref": "g7-common-div-medium-002"
  },
  {
    "id": "g7-practice-div-medium-012",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 432,000 ÷ 120 = ?",
    "question_ar": "احسب: 432,000 ÷ 120 = ؟",
    "answer": 3600,
    "learn_ref": "g7-common-div-medium-003"
  },
  {
    "id": "g7-practice-div-medium-013",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−360,000) ÷ 144 = ?",
    "question_ar": "احسب: (−360,000) ÷ 144 = ؟",
    "answer": -2500,
    "learn_ref": "g7-common-div-medium-001"
  },
  {
    "id": "g7-practice-div-medium-014",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 102,000 ÷ 24 = ?",
    "question_ar": "احسب: 102,000 ÷ 24 = ؟",
    "answer": 4250,
    "learn_ref": "g7-common-div-medium-002"
  },
  {
    "id": "g7-practice-div-medium-015",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−151,200) ÷ 48 = ?",
    "question_ar": "احسب: (−151,200) ÷ 48 = ؟",
    "answer": -3150,
    "learn_ref": "g7-common-div-medium-003"
  },
  {
    "id": "g7-practice-div-medium-016",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 66,000 ÷ 25 = ?",
    "question_ar": "احسب: 66,000 ÷ 25 = ؟",
    "answer": 2640,
    "learn_ref": "g7-common-div-medium-001"
  },
  {
    "id": "g7-practice-div-medium-017",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: (−180,000) ÷ 96 = ?",
    "question_ar": "احسب: (−180,000) ÷ 96 = ؟",
    "answer": -1875,
    "learn_ref": "g7-common-div-medium-002"
  },
  {
    "id": "g7-practice-div-hard-001",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 118,800 ÷ 144 = ?",
    "question_ar": "احسب: 118,800 ÷ 144 = ؟",
    "answer": 825,
    "learn_ref": "g7-common-div-hard-001"
  },
  {
    "id": "g7-practice-div-hard-002",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 239,616 ÷ 312 = ?",
    "question_ar": "احسب: 239,616 ÷ 312 = ؟",
    "answer": 768,
    "learn_ref": "g7-common-div-hard-002"
  },
  {
    "id": "g7-practice-div-hard-003",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 113,400 ÷ 120 = ?",
    "question_ar": "احسب: 113,400 ÷ 120 = ؟",
    "answer": 945,
    "learn_ref": "g7-common-div-hard-003"
  },
  {
    "id": "g7-practice-div-hard-004",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 126,000 ÷ 168 = ?",
    "question_ar": "احسب: 126,000 ÷ 168 = ؟",
    "answer": 750,
    "learn_ref": "g7-common-div-hard-001"
  },
  {
    "id": "g7-practice-div-hard-005",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 151,200 ÷ 175 = ?",
    "question_ar": "احسب: 151,200 ÷ 175 = ؟",
    "answer": 864,
    "learn_ref": "g7-common-div-hard-002"
  },
  {
    "id": "g7-practice-div-hard-006",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 196,000 ÷ 200 = ?",
    "question_ar": "احسب: 196,000 ÷ 200 = ؟",
    "answer": 980,
    "learn_ref": "g7-common-div-hard-003"
  },
  {
    "id": "g7-practice-div-hard-007",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 163,296 ÷ 216 = ?",
    "question_ar": "احسب: 163,296 ÷ 216 = ؟",
    "answer": 756,
    "learn_ref": "g7-common-div-hard-001"
  },
  {
    "id": "g7-practice-div-hard-008",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 198,000 ÷ 225 = ?",
    "question_ar": "احسب: 198,000 ÷ 225 = ؟",
    "answer": 880,
    "learn_ref": "g7-common-div-hard-002"
  },
  {
    "id": "g7-practice-div-hard-009",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 181,440 ÷ 252 = ?",
    "question_ar": "احسب: 181,440 ÷ 252 = ؟",
    "answer": 720,
    "learn_ref": "g7-common-div-hard-003"
  },
  {
    "id": "g7-practice-div-hard-010",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 187,200 ÷ 288 = ?",
    "question_ar": "احسب: 187,200 ÷ 288 = ؟",
    "answer": 650,
    "learn_ref": "g7-common-div-hard-001"
  },
  {
    "id": "g7-practice-div-hard-011",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 201,600 ÷ 240 = ?",
    "question_ar": "احسب: 201,600 ÷ 240 = ؟",
    "answer": 840,
    "learn_ref": "g7-common-div-hard-002"
  },
  {
    "id": "g7-practice-div-hard-012",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 177,408 ÷ 192 = ?",
    "question_ar": "احسب: 177,408 ÷ 192 = ؟",
    "answer": 924,
    "learn_ref": "g7-common-div-hard-003"
  },
  {
    "id": "g7-practice-div-hard-013",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 205,920 ÷ 264 = ?",
    "question_ar": "احسب: 205,920 ÷ 264 = ؟",
    "answer": 780,
    "learn_ref": "g7-common-div-hard-001"
  },
  {
    "id": "g7-practice-div-hard-014",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 211,680 ÷ 315 = ?",
    "question_ar": "احسب: 211,680 ÷ 315 = ؟",
    "answer": 672,
    "learn_ref": "g7-common-div-hard-002"
  },
  {
    "id": "g7-practice-div-hard-015",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 189,000 ÷ 210 = ?",
    "question_ar": "احسب: 189,000 ÷ 210 = ؟",
    "answer": 900,
    "learn_ref": "g7-common-div-hard-003"
  },
  {
    "id": "g7-practice-div-hard-016",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 149,760 ÷ 180 = ?",
    "question_ar": "احسب: 149,760 ÷ 180 = ؟",
    "answer": 832,
    "learn_ref": "g7-common-div-hard-001"
  },
  {
    "id": "g7-practice-alg-easy-001",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x + 7 = 15",
    "question_ar": "حل من أجل x: x + 7 = 15 ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x + 7 = 15. We need to isolate x by removing the 7 from the left side.",
            "explanation_ar": "لدينا x + 7 = 15. نحتاج إلى عزل x بإزالة 7 من الطرف الأيسر."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 7 from both sides: x + 7 − 7 = 15 − 7.",
            "explanation_ar": "اطرح 7 من كلا الطرفين: x + 7 − 7 = 15 − 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 15 − 7 = 8.",
            "explanation_ar": "x = 15 − 7 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 8 + 7 = 15. ✓ So x = 8.",
            "explanation_ar": "تحقق: 8 + 7 = 15. ✓ إذن x = 8."
          }
        ],
        "hint_en": "What do you subtract from 15 to get x?",
        "hint_ar": "ماذا تطرح من 15 لتحصل على x؟",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x + 7 = 15 has two parts: the unknown x and the constant 7.",
            "explanation_ar": "المعادلة x + 7 = 15 لها جزآن: المجهول x والثابت 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move 7 to the right side: x = 15 − 7.",
            "explanation_ar": "انقل 7 إلى الطرف الأيمن: x = 15 − 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 15 − 7 = 8. So x = 8.",
            "explanation_ar": "احسب: 15 − 7 = 8. إذن x = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 8 + 7 = 15. ✓ x = 8.",
            "explanation_ar": "عوّض: 8 + 7 = 15. ✓ x = 8."
          }
        ],
        "hint_en": "Move the 7 to the other side of the equation.",
        "hint_ar": "انقل 7 إلى الطرف الآخر من المعادلة.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a balance scale: x + 7 on the left, 15 on the right — both sides equal.",
            "explanation_ar": "تخيّل ميزاناً: x + 7 على اليسار، 15 على اليمين — كلا الجانبين متساويان."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 7 from both sides to keep balance: left becomes x, right becomes 15 − 7 = 8.",
            "explanation_ar": "أزل 7 من كلا الجانبين للحفاظ على التوازن: يصبح اليسار x، ويصبح اليمين 15 − 7 = 8."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The scale now shows x = 8.",
            "explanation_ar": "يُظهر الميزان الآن x = 8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 8. Check: 8 + 7 = 15. ✓",
            "explanation_ar": "x = 8. تحقق: 8 + 7 = 15. ✓"
          }
        ],
        "hint_en": "Picture a balance scale — remove 7 from both sides.",
        "hint_ar": "تخيّل ميزاناً — أزل 7 من كلا الجانبين.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-002",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x − 5 = 9",
    "question_ar": "حل من أجل x: x − 5 = 9 ؟",
    "answer": 14,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x − 5 = 9. We need to isolate x by removing the −5 from the left side.",
            "explanation_ar": "لدينا x − 5 = 9. نحتاج إلى عزل x بإزالة −5 من الطرف الأيسر."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 5 to both sides: x − 5 + 5 = 9 + 5.",
            "explanation_ar": "أضف 5 إلى كلا الطرفين: x − 5 + 5 = 9 + 5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 9 + 5 = 14.",
            "explanation_ar": "x = 9 + 5 = 14."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 14 − 5 = 9. ✓ So x = 14.",
            "explanation_ar": "تحقق: 14 − 5 = 9. ✓ إذن x = 14."
          }
        ],
        "hint_en": "Add 5 to both sides to find x.",
        "hint_ar": "أضف 5 إلى كلا الطرفين لإيجاد x.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x − 5 = 9 has two parts: the unknown x and the constant 5 being subtracted.",
            "explanation_ar": "المعادلة x − 5 = 9 لها جزآن: المجهول x والثابت 5 المطروح."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move −5 to the right side as +5: x = 9 + 5.",
            "explanation_ar": "انقل −5 إلى الطرف الأيمن بوصفه +5: x = 9 + 5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 9 + 5 = 14. So x = 14.",
            "explanation_ar": "احسب: 9 + 5 = 14. إذن x = 14."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 14 − 5 = 9. ✓ x = 14.",
            "explanation_ar": "عوّض: 14 − 5 = 9. ✓ x = 14."
          }
        ],
        "hint_en": "Move the −5 to the right side as +5.",
        "hint_ar": "انقل −5 إلى الطرف الأيمن بوصفه +5.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a balance scale: x − 5 on the left, 9 on the right — both sides equal.",
            "explanation_ar": "تخيّل ميزاناً: x − 5 على اليسار، 9 على اليمين — كلا الجانبين متساويان."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 5 to both sides to keep balance: left becomes x, right becomes 9 + 5 = 14.",
            "explanation_ar": "أضف 5 إلى كلا الجانبين للحفاظ على التوازن: يصبح اليسار x، ويصبح اليمين 9 + 5 = 14."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The scale now shows x = 14.",
            "explanation_ar": "يُظهر الميزان الآن x = 14."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 14. Check: 14 − 5 = 9. ✓",
            "explanation_ar": "x = 14. تحقق: 14 − 5 = 9. ✓"
          }
        ],
        "hint_en": "Picture a balance scale — add 5 to both sides.",
        "hint_ar": "تخيّل ميزاناً — أضف 5 إلى كلا الجانبين.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-003",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: 6x = 42",
    "question_ar": "حل من أجل x: 6x = 42 ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 6x = 42. x is multiplied by 6, so we divide to isolate x.",
            "explanation_ar": "لدينا 6x = 42. x مضروب في 6، لذا نقسم لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 6: 6x ÷ 6 = 42 ÷ 6.",
            "explanation_ar": "اقسم كلا الطرفين على 6: 6x ÷ 6 = 42 ÷ 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 42 ÷ 6 = 7.",
            "explanation_ar": "x = 42 ÷ 6 = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 6 × 7 = 42. ✓ So x = 7.",
            "explanation_ar": "تحقق: 6 × 7 = 42. ✓ إذن x = 7."
          }
        ],
        "hint_en": "Divide 42 by 6 to find x.",
        "hint_ar": "اقسم 42 على 6 لإيجاد x.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation 6x = 42 means 6 groups of x equal 42.",
            "explanation_ar": "المعادلة 6x = 42 تعني أن 6 مجموعات من x تساوي 42."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the multiplication by dividing: x = 42 ÷ 6.",
            "explanation_ar": "تراجع عن الضرب بالقسمة: x = 42 ÷ 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 42 ÷ 6 = 7. So x = 7.",
            "explanation_ar": "احسب: 42 ÷ 6 = 7. إذن x = 7."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 6 × 7 = 42. ✓ x = 7.",
            "explanation_ar": "عوّض: 6 × 7 = 42. ✓ x = 7."
          }
        ],
        "hint_en": "How many groups of 6 make 42?",
        "hint_ar": "كم مجموعة من 6 تصنع 42؟",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 6 equal bags containing x items each, totalling 42 items.",
            "explanation_ar": "تخيّل 6 أكياس متساوية تحتوي كل منها على x عنصراً، مجموعها 42 عنصراً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Share 42 items equally among 6 bags: 42 ÷ 6 = 7 items per bag.",
            "explanation_ar": "وزّع 42 عنصراً بالتساوي على 6 أكياس: 42 ÷ 6 = 7 عناصر في كل كيس."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each bag holds 7 items, so x = 7.",
            "explanation_ar": "كل كيس يحتوي على 7 عناصر، إذن x = 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 7. Check: 6 × 7 = 42. ✓",
            "explanation_ar": "x = 7. تحقق: 6 × 7 = 42. ✓"
          }
        ],
        "hint_en": "Picture 6 equal bags — how many in each if the total is 42?",
        "hint_ar": "تخيّل 6 أكياس متساوية — كم في كل كيس إذا كان المجموع 42؟",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-004",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x/4 = 5",
    "question_ar": "حل من أجل x: x/4 = 5 ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x/4 = 5. x is divided by 4, so we multiply to isolate x.",
            "explanation_ar": "لدينا x/4 = 5. x مقسوم على 4، لذا نضرب لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 4: (x/4) × 4 = 5 × 4.",
            "explanation_ar": "اضرب كلا الطرفين في 4: (x/4) × 4 = 5 × 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 5 × 4 = 20.",
            "explanation_ar": "x = 5 × 4 = 20."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 20/4 = 5. ✓ So x = 20.",
            "explanation_ar": "تحقق: 20/4 = 5. ✓ إذن x = 20."
          }
        ],
        "hint_en": "Multiply 5 by 4 to find x.",
        "hint_ar": "اضرب 5 في 4 لإيجاد x.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x/4 = 5 means x split into 4 equal parts gives 5.",
            "explanation_ar": "المعادلة x/4 = 5 تعني أن x مقسوماً على 4 أجزاء متساوية يعطي 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the division by multiplying: x = 5 × 4.",
            "explanation_ar": "تراجع عن القسمة بالضرب: x = 5 × 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 5 × 4 = 20. So x = 20.",
            "explanation_ar": "احسب: 5 × 4 = 20. إذن x = 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 20/4 = 5. ✓ x = 20.",
            "explanation_ar": "عوّض: 20/4 = 5. ✓ x = 20."
          }
        ],
        "hint_en": "If one part equals 5, what does the whole (4 parts) equal?",
        "hint_ar": "إذا كان جزء واحد يساوي 5، فماذا يساوي الكل (4 أجزاء)؟",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a ribbon cut into 4 equal pieces, and each piece is 5 cm long.",
            "explanation_ar": "تخيّل شريطاً مقطوعاً إلى 4 قطع متساوية، كل قطعة طولها 5 سم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "To find the full ribbon length, multiply: 4 × 5 = 20.",
            "explanation_ar": "لإيجاد الطول الكامل للشريط، اضرب: 4 × 5 = 20."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The full ribbon is 20 cm, so x = 20.",
            "explanation_ar": "الشريط الكامل طوله 20 سم، إذن x = 20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 20. Check: 20/4 = 5. ✓",
            "explanation_ar": "x = 20. تحقق: 20/4 = 5. ✓"
          }
        ],
        "hint_en": "If each of the 4 pieces is 5, how long is the whole ribbon?",
        "hint_ar": "إذا كانت كل قطعة من القطع الأربع تساوي 5، فما طول الشريط كله؟",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-005",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x + 3 = 12",
    "question_ar": "حل من أجل x: x + 3 = 12 ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x + 3 = 12. We need to remove the 3 from the left side to isolate x.",
            "explanation_ar": "لدينا x + 3 = 12. نحتاج إلى إزالة 3 من الطرف الأيسر لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 3 from both sides: x + 3 − 3 = 12 − 3.",
            "explanation_ar": "اطرح 3 من كلا الطرفين: x + 3 − 3 = 12 − 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 12 − 3 = 9.",
            "explanation_ar": "x = 12 − 3 = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 9 + 3 = 12. ✓ So x = 9.",
            "explanation_ar": "تحقق: 9 + 3 = 12. ✓ إذن x = 9."
          }
        ],
        "hint_en": "Subtract 3 from 12 to find x.",
        "hint_ar": "اطرح 3 من 12 لإيجاد x.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x + 3 = 12 has two parts: the unknown x and the constant 3.",
            "explanation_ar": "المعادلة x + 3 = 12 لها جزآن: المجهول x والثابت 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move 3 to the right side: x = 12 − 3.",
            "explanation_ar": "انقل 3 إلى الطرف الأيمن: x = 12 − 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 12 − 3 = 9. So x = 9.",
            "explanation_ar": "احسب: 12 − 3 = 9. إذن x = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 9 + 3 = 12. ✓ x = 9.",
            "explanation_ar": "عوّض: 9 + 3 = 12. ✓ x = 9."
          }
        ],
        "hint_en": "Move the 3 to the right side of the equation.",
        "hint_ar": "انقل 3 إلى الطرف الأيمن من المعادلة.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a balance scale: x + 3 on the left, 12 on the right — both sides equal.",
            "explanation_ar": "تخيّل ميزاناً: x + 3 على اليسار، 12 على اليمين — كلا الجانبين متساويان."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 3 from both sides: left becomes x, right becomes 12 − 3 = 9.",
            "explanation_ar": "أزل 3 من كلا الجانبين: يصبح اليسار x، ويصبح اليمين 12 − 3 = 9."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The scale now shows x = 9.",
            "explanation_ar": "يُظهر الميزان الآن x = 9."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 9. Check: 9 + 3 = 12. ✓",
            "explanation_ar": "x = 9. تحقق: 9 + 3 = 12. ✓"
          }
        ],
        "hint_en": "Picture a balance — remove 3 from both sides.",
        "hint_ar": "تخيّل ميزاناً — أزل 3 من كلا الجانبين.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-006",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x − 8 = 6",
    "question_ar": "حل من أجل x: x − 8 = 6 ؟",
    "answer": 14,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x − 8 = 6. We need to add 8 to both sides to isolate x.",
            "explanation_ar": "لدينا x − 8 = 6. نحتاج إلى إضافة 8 إلى كلا الطرفين لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 8 to both sides: x − 8 + 8 = 6 + 8.",
            "explanation_ar": "أضف 8 إلى كلا الطرفين: x − 8 + 8 = 6 + 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 6 + 8 = 14.",
            "explanation_ar": "x = 6 + 8 = 14."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 14 − 8 = 6. ✓ So x = 14.",
            "explanation_ar": "تحقق: 14 − 8 = 6. ✓ إذن x = 14."
          }
        ],
        "hint_en": "Add 8 to 6 to find x.",
        "hint_ar": "أضف 8 إلى 6 لإيجاد x.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x − 8 = 6 has two parts: the unknown x and the constant 8 subtracted.",
            "explanation_ar": "المعادلة x − 8 = 6 لها جزآن: المجهول x والثابت 8 المطروح."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move −8 to the right side as +8: x = 6 + 8.",
            "explanation_ar": "انقل −8 إلى الطرف الأيمن بوصفه +8: x = 6 + 8."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 6 + 8 = 14. So x = 14.",
            "explanation_ar": "احسب: 6 + 8 = 14. إذن x = 14."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 14 − 8 = 6. ✓ x = 14.",
            "explanation_ar": "عوّض: 14 − 8 = 6. ✓ x = 14."
          }
        ],
        "hint_en": "What number minus 8 gives 6?",
        "hint_ar": "ما الرقم الذي إذا طرحنا منه 8 يعطي 6؟",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine you had x coins, spent 8, and now have 6 left.",
            "explanation_ar": "تخيّل أنك كنت تملك x قطعة نقدية، أنفقت 8، وبقي لديك 6."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "To find the original amount, add back the 8 spent: 6 + 8 = 14.",
            "explanation_ar": "لإيجاد المبلغ الأصلي، أضف 8 التي أُنفقت: 6 + 8 = 14."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "You started with 14 coins, so x = 14.",
            "explanation_ar": "كنت تملك 14 قطعة نقدية في البداية، إذن x = 14."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 14. Check: 14 − 8 = 6. ✓",
            "explanation_ar": "x = 14. تحقق: 14 − 8 = 6. ✓"
          }
        ],
        "hint_en": "You had x coins, spent 8, and 6 remain — how many did you start with?",
        "hint_ar": "كنت تملك x قطعة، أنفقت 8، وبقي 6 — كم كنت تملك في البداية؟",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-007",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: 3x = 18",
    "question_ar": "حل من أجل x: 3x = 18 ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 3x = 18. x is multiplied by 3, so we divide both sides by 3.",
            "explanation_ar": "لدينا 3x = 18. x مضروب في 3، لذا نقسم كلا الطرفين على 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 3: 3x ÷ 3 = 18 ÷ 3.",
            "explanation_ar": "اقسم كلا الطرفين على 3: 3x ÷ 3 = 18 ÷ 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 18 ÷ 3 = 6.",
            "explanation_ar": "x = 18 ÷ 3 = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 3 × 6 = 18. ✓ So x = 6.",
            "explanation_ar": "تحقق: 3 × 6 = 18. ✓ إذن x = 6."
          }
        ],
        "hint_en": "Divide 18 by 3 to find x.",
        "hint_ar": "اقسم 18 على 3 لإيجاد x.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation 3x = 18 means 3 equal groups totalling 18.",
            "explanation_ar": "المعادلة 3x = 18 تعني 3 مجموعات متساوية مجموعها 18."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the multiplication: x = 18 ÷ 3.",
            "explanation_ar": "تراجع عن الضرب: x = 18 ÷ 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 18 ÷ 3 = 6. So x = 6.",
            "explanation_ar": "احسب: 18 ÷ 3 = 6. إذن x = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 3 × 6 = 18. ✓ x = 6.",
            "explanation_ar": "عوّض: 3 × 6 = 18. ✓ x = 6."
          }
        ],
        "hint_en": "Split 18 into 3 equal groups.",
        "hint_ar": "قسّم 18 إلى 3 مجموعات متساوية.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 3 boxes, each holding x apples, and the total is 18 apples.",
            "explanation_ar": "تخيّل 3 صناديق، كل منها يحتوي على x تفاحة، والمجموع 18 تفاحة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Distribute 18 apples equally among 3 boxes: 18 ÷ 3 = 6 per box.",
            "explanation_ar": "وزّع 18 تفاحة بالتساوي على 3 صناديق: 18 ÷ 3 = 6 في كل صندوق."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box has 6 apples, so x = 6.",
            "explanation_ar": "كل صندوق يحتوي على 6 تفاحات، إذن x = 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 6. Check: 3 × 6 = 18. ✓",
            "explanation_ar": "x = 6. تحقق: 3 × 6 = 18. ✓"
          }
        ],
        "hint_en": "3 boxes with x apples each total 18 — how many per box?",
        "hint_ar": "3 صناديق بكل منها x تفاحة مجموعها 18 — كم في كل صندوق؟",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-008",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x/3 = 4",
    "question_ar": "حل من أجل x: x/3 = 4 ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x/3 = 4. x is divided by 3, so we multiply both sides by 3.",
            "explanation_ar": "لدينا x/3 = 4. x مقسوم على 3، لذا نضرب كلا الطرفين في 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 3: (x/3) × 3 = 4 × 3.",
            "explanation_ar": "اضرب كلا الطرفين في 3: (x/3) × 3 = 4 × 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 4 × 3 = 12.",
            "explanation_ar": "x = 4 × 3 = 12."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 12/3 = 4. ✓ So x = 12.",
            "explanation_ar": "تحقق: 12/3 = 4. ✓ إذن x = 12."
          }
        ],
        "hint_en": "Multiply 4 by 3 to find x.",
        "hint_ar": "اضرب 4 في 3 لإيجاد x.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x/3 = 4 means one-third of x equals 4.",
            "explanation_ar": "المعادلة x/3 = 4 تعني أن ثلث x يساوي 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the division: x = 4 × 3.",
            "explanation_ar": "تراجع عن القسمة: x = 4 × 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 4 × 3 = 12. So x = 12.",
            "explanation_ar": "احسب: 4 × 3 = 12. إذن x = 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 12/3 = 4. ✓ x = 12.",
            "explanation_ar": "عوّض: 12/3 = 4. ✓ x = 12."
          }
        ],
        "hint_en": "If one-third of x is 4, what is the whole x?",
        "hint_ar": "إذا كان ثلث x يساوي 4، فما هو x كاملاً؟",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a bar of chocolate divided into 3 equal sections; each section has 4 pieces.",
            "explanation_ar": "تخيّل لوحة شوكولاتة مقسّمة إلى 3 أقسام متساوية؛ كل قسم يحتوي على 4 قطع."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Total pieces = 3 sections × 4 pieces = 12.",
            "explanation_ar": "إجمالي القطع = 3 أقسام × 4 قطع = 12."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The whole bar has 12 pieces, so x = 12.",
            "explanation_ar": "اللوحة كاملة تحتوي على 12 قطعة، إذن x = 12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 12. Check: 12/3 = 4. ✓",
            "explanation_ar": "x = 12. تحقق: 12/3 = 4. ✓"
          }
        ],
        "hint_en": "3 equal sections of x, each with 4 — find the total.",
        "hint_ar": "3 أقسام متساوية من x، كل منها 4 — أوجد المجموع.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-009",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x + 11 = 20",
    "question_ar": "حل من أجل x: x + 11 = 20 ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x + 11 = 20. We need to subtract 11 from both sides to isolate x.",
            "explanation_ar": "لدينا x + 11 = 20. نحتاج إلى طرح 11 من كلا الطرفين لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 11 from both sides: x + 11 − 11 = 20 − 11.",
            "explanation_ar": "اطرح 11 من كلا الطرفين: x + 11 − 11 = 20 − 11."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 20 − 11 = 9.",
            "explanation_ar": "x = 20 − 11 = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 9 + 11 = 20. ✓ So x = 9.",
            "explanation_ar": "تحقق: 9 + 11 = 20. ✓ إذن x = 9."
          }
        ],
        "hint_en": "Subtract 11 from 20 to find x.",
        "hint_ar": "اطرح 11 من 20 لإيجاد x.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x + 11 = 20 has two parts: the unknown x and the constant 11.",
            "explanation_ar": "المعادلة x + 11 = 20 لها جزآن: المجهول x والثابت 11."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move 11 to the right side: x = 20 − 11.",
            "explanation_ar": "انقل 11 إلى الطرف الأيمن: x = 20 − 11."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 20 − 11 = 9. So x = 9.",
            "explanation_ar": "احسب: 20 − 11 = 9. إذن x = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 9 + 11 = 20. ✓ x = 9.",
            "explanation_ar": "عوّض: 9 + 11 = 20. ✓ x = 9."
          }
        ],
        "hint_en": "Move 11 to the right side of the equation.",
        "hint_ar": "انقل 11 إلى الطرف الأيمن من المعادلة.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a jar with x marbles; you add 11 more to get 20 total.",
            "explanation_ar": "تخيّل جرةً تحتوي على x كرة رخامية؛ تضيف 11 أخرى لتحصل على 20 في المجموع."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove the 11 added marbles: 20 − 11 = 9 original marbles.",
            "explanation_ar": "أزل الكرات الـ 11 المضافة: 20 − 11 = 9 كرات أصلية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The jar originally had 9 marbles, so x = 9.",
            "explanation_ar": "كانت الجرة تحتوي أصلاً على 9 كرات، إذن x = 9."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 9. Check: 9 + 11 = 20. ✓",
            "explanation_ar": "x = 9. تحقق: 9 + 11 = 20. ✓"
          }
        ],
        "hint_en": "You started with x marbles, added 11, and got 20 — what was x?",
        "hint_ar": "بدأت بـ x كرة، أضفت 11، وحصلت على 20 — ما قيمة x؟",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-010",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: 5x = 35",
    "question_ar": "حل من أجل x: 5x = 35 ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 5x = 35. x is multiplied by 5, so we divide both sides by 5.",
            "explanation_ar": "لدينا 5x = 35. x مضروب في 5، لذا نقسم كلا الطرفين على 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 5: 5x ÷ 5 = 35 ÷ 5.",
            "explanation_ar": "اقسم كلا الطرفين على 5: 5x ÷ 5 = 35 ÷ 5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 35 ÷ 5 = 7.",
            "explanation_ar": "x = 35 ÷ 5 = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 5 × 7 = 35. ✓ So x = 7.",
            "explanation_ar": "تحقق: 5 × 7 = 35. ✓ إذن x = 7."
          }
        ],
        "hint_en": "Divide 35 by 5 to find x.",
        "hint_ar": "اقسم 35 على 5 لإيجاد x.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation 5x = 35 means 5 identical groups totalling 35.",
            "explanation_ar": "المعادلة 5x = 35 تعني 5 مجموعات متطابقة مجموعها 35."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the multiplication: x = 35 ÷ 5.",
            "explanation_ar": "تراجع عن الضرب: x = 35 ÷ 5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 35 ÷ 5 = 7. So x = 7.",
            "explanation_ar": "احسب: 35 ÷ 5 = 7. إذن x = 7."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 5 × 7 = 35. ✓ x = 7.",
            "explanation_ar": "عوّض: 5 × 7 = 35. ✓ x = 7."
          }
        ],
        "hint_en": "How many groups of 5 fit into 35?",
        "hint_ar": "كم مجموعة من 5 تتسع في 35؟",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 5 equal rows of seats in a theatre, with x seats per row and 35 seats total.",
            "explanation_ar": "تخيّل 5 صفوف متساوية من المقاعد في مسرح، بكل صف x مقعداً والمجموع 35 مقعداً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide the 35 seats among 5 rows: 35 ÷ 5 = 7 per row.",
            "explanation_ar": "قسّم 35 مقعداً على 5 صفوف: 35 ÷ 5 = 7 لكل صف."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each row has 7 seats, so x = 7.",
            "explanation_ar": "كل صف يحتوي على 7 مقاعد، إذن x = 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 7. Check: 5 × 7 = 35. ✓",
            "explanation_ar": "x = 7. تحقق: 5 × 7 = 35. ✓"
          }
        ],
        "hint_en": "5 rows with x seats each total 35 — how many per row?",
        "hint_ar": "5 صفوف بكل منها x مقعداً مجموعها 35 — كم في كل صف؟",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-011",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x/5 = 3",
    "question_ar": "حل من أجل x: x/5 = 3 ؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x/5 = 3. x is divided by 5, so we multiply both sides by 5.",
            "explanation_ar": "لدينا x/5 = 3. x مقسوم على 5، لذا نضرب كلا الطرفين في 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 5: (x/5) × 5 = 3 × 5.",
            "explanation_ar": "اضرب كلا الطرفين في 5: (x/5) × 5 = 3 × 5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 3 × 5 = 15.",
            "explanation_ar": "x = 3 × 5 = 15."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 15/5 = 3. ✓ So x = 15.",
            "explanation_ar": "تحقق: 15/5 = 3. ✓ إذن x = 15."
          }
        ],
        "hint_en": "Multiply 3 by 5 to find x.",
        "hint_ar": "اضرب 3 في 5 لإيجاد x.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x/5 = 3 means one-fifth of x equals 3.",
            "explanation_ar": "المعادلة x/5 = 3 تعني أن خُمس x يساوي 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the division by multiplying: x = 3 × 5.",
            "explanation_ar": "تراجع عن القسمة بالضرب: x = 3 × 5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 3 × 5 = 15. So x = 15.",
            "explanation_ar": "احسب: 3 × 5 = 15. إذن x = 15."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 15/5 = 3. ✓ x = 15.",
            "explanation_ar": "عوّض: 15/5 = 3. ✓ x = 15."
          }
        ],
        "hint_en": "If one-fifth of x is 3, what is x?",
        "hint_ar": "إذا كان خُمس x يساوي 3، فما هو x؟",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a pizza cut into 5 equal slices; each slice feeds 3 people.",
            "explanation_ar": "تخيّل بيتزا مقطّعة إلى 5 شرائح متساوية؛ كل شريحة تُطعم 3 أشخاص."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Total people = 5 slices × 3 people = 15.",
            "explanation_ar": "إجمالي الأشخاص = 5 شرائح × 3 أشخاص = 15."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The pizza feeds 15 people total, so x = 15.",
            "explanation_ar": "البيتزا تُطعم 15 شخصاً في المجموع، إذن x = 15."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 15. Check: 15/5 = 3. ✓",
            "explanation_ar": "x = 15. تحقق: 15/5 = 3. ✓"
          }
        ],
        "hint_en": "5 slices each feeding 3 — how many total?",
        "hint_ar": "5 شرائح كل منها تُطعم 3 — كم المجموع؟",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-012",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x − 4 = 13",
    "question_ar": "حل من أجل x: x − 4 = 13 ؟",
    "answer": 17,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x − 4 = 13. We need to add 4 to both sides to isolate x.",
            "explanation_ar": "لدينا x − 4 = 13. نحتاج إلى إضافة 4 إلى كلا الطرفين لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 4 to both sides: x − 4 + 4 = 13 + 4.",
            "explanation_ar": "أضف 4 إلى كلا الطرفين: x − 4 + 4 = 13 + 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 13 + 4 = 17.",
            "explanation_ar": "x = 13 + 4 = 17."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 17 − 4 = 13. ✓ So x = 17.",
            "explanation_ar": "تحقق: 17 − 4 = 13. ✓ إذن x = 17."
          }
        ],
        "hint_en": "Add 4 to 13 to find x.",
        "hint_ar": "أضف 4 إلى 13 لإيجاد x.",
        "result_en": "The answer is 17",
        "result_ar": "الجواب هو 17"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x − 4 = 13 has the unknown x with 4 subtracted from it.",
            "explanation_ar": "المعادلة x − 4 = 13 تحتوي على المجهول x مطروحاً منه 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move −4 to the right side as +4: x = 13 + 4.",
            "explanation_ar": "انقل −4 إلى الطرف الأيمن بوصفه +4: x = 13 + 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 13 + 4 = 17. So x = 17.",
            "explanation_ar": "احسب: 13 + 4 = 17. إذن x = 17."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 17 − 4 = 13. ✓ x = 17.",
            "explanation_ar": "عوّض: 17 − 4 = 13. ✓ x = 17."
          }
        ],
        "hint_en": "What plus 4 equals 17?",
        "hint_ar": "ما الذي مع 4 يساوي 17؟",
        "result_en": "The answer is 17",
        "result_ar": "الجواب هو 17"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "You have x books on a shelf; after removing 4, there are 13 left.",
            "explanation_ar": "لديك x كتاباً على رف؛ بعد إزالة 4، بقي 13 كتاباً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Put the 4 books back: 13 + 4 = 17 original books.",
            "explanation_ar": "أعد الكتب الـ 4: 13 + 4 = 17 كتاباً أصلياً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The shelf originally had 17 books, so x = 17.",
            "explanation_ar": "كان الرف يحتوي أصلاً على 17 كتاباً، إذن x = 17."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 17. Check: 17 − 4 = 13. ✓",
            "explanation_ar": "x = 17. تحقق: 17 − 4 = 13. ✓"
          }
        ],
        "hint_en": "You removed 4 books, leaving 13 — how many were there originally?",
        "hint_ar": "أزلت 4 كتب، وبقي 13 — كم كان في البداية؟",
        "result_en": "The answer is 17",
        "result_ar": "الجواب هو 17"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-013",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: 4x = 16",
    "question_ar": "حل من أجل x: 4x = 16 ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 4x = 16. x is multiplied by 4, so we divide both sides by 4.",
            "explanation_ar": "لدينا 4x = 16. x مضروب في 4، لذا نقسم كلا الطرفين على 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 4: 4x ÷ 4 = 16 ÷ 4.",
            "explanation_ar": "اقسم كلا الطرفين على 4: 4x ÷ 4 = 16 ÷ 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 16 ÷ 4 = 4.",
            "explanation_ar": "x = 16 ÷ 4 = 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 4 × 4 = 16. ✓ So x = 4.",
            "explanation_ar": "تحقق: 4 × 4 = 16. ✓ إذن x = 4."
          }
        ],
        "hint_en": "Divide 16 by 4 to find x.",
        "hint_ar": "اقسم 16 على 4 لإيجاد x.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation 4x = 16 means 4 equal groups totalling 16.",
            "explanation_ar": "المعادلة 4x = 16 تعني 4 مجموعات متساوية مجموعها 16."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the multiplication: x = 16 ÷ 4.",
            "explanation_ar": "تراجع عن الضرب: x = 16 ÷ 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 16 ÷ 4 = 4. So x = 4.",
            "explanation_ar": "احسب: 16 ÷ 4 = 4. إذن x = 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 4 × 4 = 16. ✓ x = 4.",
            "explanation_ar": "عوّض: 4 × 4 = 16. ✓ x = 4."
          }
        ],
        "hint_en": "Divide 16 equally among 4 groups.",
        "hint_ar": "قسّم 16 بالتساوي على 4 مجموعات.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 4 friends sharing 16 stickers equally among themselves.",
            "explanation_ar": "تخيّل 4 أصدقاء يتقاسمون 16 ملصقاً بالتساوي بينهم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each friend gets 16 ÷ 4 = 4 stickers.",
            "explanation_ar": "كل صديق يحصل على 16 ÷ 4 = 4 ملصقات."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each friend receives 4 stickers, so x = 4.",
            "explanation_ar": "كل صديق يحصل على 4 ملصقات، إذن x = 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 4. Check: 4 × 4 = 16. ✓",
            "explanation_ar": "x = 4. تحقق: 4 × 4 = 16. ✓"
          }
        ],
        "hint_en": "4 friends share 16 stickers equally — how many each?",
        "hint_ar": "4 أصدقاء يتقاسمون 16 ملصقاً بالتساوي — كم لكل واحد؟",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-014",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x + 6 = 14",
    "question_ar": "حل من أجل x: x + 6 = 14 ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x + 6 = 14. We need to subtract 6 from both sides to isolate x.",
            "explanation_ar": "لدينا x + 6 = 14. نحتاج إلى طرح 6 من كلا الطرفين لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 6 from both sides: x + 6 − 6 = 14 − 6.",
            "explanation_ar": "اطرح 6 من كلا الطرفين: x + 6 − 6 = 14 − 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 14 − 6 = 8.",
            "explanation_ar": "x = 14 − 6 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 8 + 6 = 14. ✓ So x = 8.",
            "explanation_ar": "تحقق: 8 + 6 = 14. ✓ إذن x = 8."
          }
        ],
        "hint_en": "Subtract 6 from 14 to find x.",
        "hint_ar": "اطرح 6 من 14 لإيجاد x.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x + 6 = 14 has two parts: the unknown x and the constant 6.",
            "explanation_ar": "المعادلة x + 6 = 14 لها جزآن: المجهول x والثابت 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move 6 to the right side: x = 14 − 6.",
            "explanation_ar": "انقل 6 إلى الطرف الأيمن: x = 14 − 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 14 − 6 = 8. So x = 8.",
            "explanation_ar": "احسب: 14 − 6 = 8. إذن x = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 8 + 6 = 14. ✓ x = 8.",
            "explanation_ar": "عوّض: 8 + 6 = 14. ✓ x = 8."
          }
        ],
        "hint_en": "Move 6 to the right side of the equation.",
        "hint_ar": "انقل 6 إلى الطرف الأيمن من المعادلة.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a basket with x oranges; you add 6 more to reach 14 total.",
            "explanation_ar": "تخيّل سلة بها x برتقالة؛ تضيف 6 أخرى لتصل إلى 14 في المجموع."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove the 6 added oranges: 14 − 6 = 8 original oranges.",
            "explanation_ar": "أزل البرتقالات الـ 6 المضافة: 14 − 6 = 8 برتقالات أصلية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The basket originally had 8 oranges, so x = 8.",
            "explanation_ar": "كانت السلة تحتوي أصلاً على 8 برتقالات، إذن x = 8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 8. Check: 8 + 6 = 14. ✓",
            "explanation_ar": "x = 8. تحقق: 8 + 6 = 14. ✓"
          }
        ],
        "hint_en": "Start with x oranges, add 6, get 14 — what was x?",
        "hint_ar": "ابدأ بـ x برتقالة، أضف 6، واحصل على 14 — ما قيمة x؟",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-015",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x/2 = 9",
    "question_ar": "حل من أجل x: x/2 = 9 ؟",
    "answer": 18,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x/2 = 9. x is divided by 2, so we multiply both sides by 2.",
            "explanation_ar": "لدينا x/2 = 9. x مقسوم على 2، لذا نضرب كلا الطرفين في 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 2: (x/2) × 2 = 9 × 2.",
            "explanation_ar": "اضرب كلا الطرفين في 2: (x/2) × 2 = 9 × 2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 9 × 2 = 18.",
            "explanation_ar": "x = 9 × 2 = 18."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 18/2 = 9. ✓ So x = 18.",
            "explanation_ar": "تحقق: 18/2 = 9. ✓ إذن x = 18."
          }
        ],
        "hint_en": "Multiply 9 by 2 to find x.",
        "hint_ar": "اضرب 9 في 2 لإيجاد x.",
        "result_en": "The answer is 18",
        "result_ar": "الجواب هو 18"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x/2 = 9 means half of x equals 9.",
            "explanation_ar": "المعادلة x/2 = 9 تعني أن نصف x يساوي 9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the division: x = 9 × 2.",
            "explanation_ar": "تراجع عن القسمة: x = 9 × 2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 9 × 2 = 18. So x = 18.",
            "explanation_ar": "احسب: 9 × 2 = 18. إذن x = 18."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 18/2 = 9. ✓ x = 18.",
            "explanation_ar": "عوّض: 18/2 = 9. ✓ x = 18."
          }
        ],
        "hint_en": "If half of x is 9, then x is double that.",
        "hint_ar": "إذا كان نصف x يساوي 9، إذن x يساوي ضعف ذلك.",
        "result_en": "The answer is 18",
        "result_ar": "الجواب هو 18"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine folding a rope in half; each half measures 9 cm.",
            "explanation_ar": "تخيّل طيّ حبل إلى نصفين؛ كل نصف طوله 9 سم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Unfold the rope to get the full length: 9 × 2 = 18 cm.",
            "explanation_ar": "افرد الحبل للحصول على الطول الكامل: 9 × 2 = 18 سم."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The full rope is 18 cm, so x = 18.",
            "explanation_ar": "الحبل الكامل طوله 18 سم، إذن x = 18."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 18. Check: 18/2 = 9. ✓",
            "explanation_ar": "x = 18. تحقق: 18/2 = 9. ✓"
          }
        ],
        "hint_en": "Each half of the rope is 9 cm — what is the full length?",
        "hint_ar": "كل نصف من الحبل طوله 9 سم — ما الطول الكامل؟",
        "result_en": "The answer is 18",
        "result_ar": "الجواب هو 18"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-016",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x − 6 = 11",
    "question_ar": "حل من أجل x: x − 6 = 11 ؟",
    "answer": 17,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x − 6 = 11. We need to add 6 to both sides to isolate x.",
            "explanation_ar": "لدينا x − 6 = 11. نحتاج إلى إضافة 6 إلى كلا الطرفين لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 6 to both sides: x − 6 + 6 = 11 + 6.",
            "explanation_ar": "أضف 6 إلى كلا الطرفين: x − 6 + 6 = 11 + 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 11 + 6 = 17.",
            "explanation_ar": "x = 11 + 6 = 17."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 17 − 6 = 11. ✓ So x = 17.",
            "explanation_ar": "تحقق: 17 − 6 = 11. ✓ إذن x = 17."
          }
        ],
        "hint_en": "Add 6 to 11 to find x.",
        "hint_ar": "أضف 6 إلى 11 لإيجاد x.",
        "result_en": "The answer is 17",
        "result_ar": "الجواب هو 17"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x − 6 = 11 has the unknown x with 6 subtracted.",
            "explanation_ar": "المعادلة x − 6 = 11 تحتوي على المجهول x مطروحاً منه 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move −6 to the right side as +6: x = 11 + 6.",
            "explanation_ar": "انقل −6 إلى الطرف الأيمن بوصفه +6: x = 11 + 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 11 + 6 = 17. So x = 17.",
            "explanation_ar": "احسب: 11 + 6 = 17. إذن x = 17."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 17 − 6 = 11. ✓ x = 17.",
            "explanation_ar": "عوّض: 17 − 6 = 11. ✓ x = 17."
          }
        ],
        "hint_en": "What number minus 6 equals 11?",
        "hint_ar": "ما الرقم الذي إذا طرحنا منه 6 يساوي 11؟",
        "result_en": "The answer is 17",
        "result_ar": "الجواب هو 17"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "You had x stamps; you used 6, and now 11 remain.",
            "explanation_ar": "كان لديك x طابعاً؛ استخدمت 6، والآن تبقى 11."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add back the 6 used stamps: 11 + 6 = 17 original stamps.",
            "explanation_ar": "أضف الطوابع الـ 6 المستخدمة: 11 + 6 = 17 طابعاً أصلياً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "You originally had 17 stamps, so x = 17.",
            "explanation_ar": "كان لديك أصلاً 17 طابعاً، إذن x = 17."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 17. Check: 17 − 6 = 11. ✓",
            "explanation_ar": "x = 17. تحقق: 17 − 6 = 11. ✓"
          }
        ],
        "hint_en": "You used 6 stamps and have 11 left — how many did you start with?",
        "hint_ar": "استخدمت 6 طوابع وبقي لديك 11 — كم كان لديك في البداية؟",
        "result_en": "The answer is 17",
        "result_ar": "الجواب هو 17"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-017",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: 7x = 56",
    "question_ar": "حل من أجل x: 7x = 56 ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 7x = 56. x is multiplied by 7, so we divide both sides by 7.",
            "explanation_ar": "لدينا 7x = 56. x مضروب في 7، لذا نقسم كلا الطرفين على 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 7: 7x ÷ 7 = 56 ÷ 7.",
            "explanation_ar": "اقسم كلا الطرفين على 7: 7x ÷ 7 = 56 ÷ 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 56 ÷ 7 = 8.",
            "explanation_ar": "x = 56 ÷ 7 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 7 × 8 = 56. ✓ So x = 8.",
            "explanation_ar": "تحقق: 7 × 8 = 56. ✓ إذن x = 8."
          }
        ],
        "hint_en": "Divide 56 by 7 to find x.",
        "hint_ar": "اقسم 56 على 7 لإيجاد x.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation 7x = 56 means 7 equal groups totalling 56.",
            "explanation_ar": "المعادلة 7x = 56 تعني 7 مجموعات متساوية مجموعها 56."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the multiplication: x = 56 ÷ 7.",
            "explanation_ar": "تراجع عن الضرب: x = 56 ÷ 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 56 ÷ 7 = 8. So x = 8.",
            "explanation_ar": "احسب: 56 ÷ 7 = 8. إذن x = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 7 × 8 = 56. ✓ x = 8.",
            "explanation_ar": "عوّض: 7 × 8 = 56. ✓ x = 8."
          }
        ],
        "hint_en": "How many sevens are in 56?",
        "hint_ar": "كم مرة يتكرر الرقم 7 في 56؟",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a weekly schedule: 7 days with x tasks each, totalling 56 tasks.",
            "explanation_ar": "تخيّل جدولاً أسبوعياً: 7 أيام بكل يوم x مهمة، والمجموع 56 مهمة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide 56 tasks by 7 days: 56 ÷ 7 = 8 tasks per day.",
            "explanation_ar": "قسّم 56 مهمة على 7 أيام: 56 ÷ 7 = 8 مهام في اليوم."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each day has 8 tasks, so x = 8.",
            "explanation_ar": "كل يوم يحتوي على 8 مهام، إذن x = 8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 8. Check: 7 × 8 = 56. ✓",
            "explanation_ar": "x = 8. تحقق: 7 × 8 = 56. ✓"
          }
        ],
        "hint_en": "7 days with x tasks each total 56 — how many per day?",
        "hint_ar": "7 أيام بكل منها x مهمة مجموعها 56 — كم في كل يوم؟",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-018",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x + 9 = 18",
    "question_ar": "حل من أجل x: x + 9 = 18 ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x + 9 = 18. We subtract 9 from both sides to isolate x.",
            "explanation_ar": "لدينا x + 9 = 18. نطرح 9 من كلا الطرفين لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 9 from both sides: x + 9 − 9 = 18 − 9.",
            "explanation_ar": "اطرح 9 من كلا الطرفين: x + 9 − 9 = 18 − 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 18 − 9 = 9.",
            "explanation_ar": "x = 18 − 9 = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 9 + 9 = 18. ✓ So x = 9.",
            "explanation_ar": "تحقق: 9 + 9 = 18. ✓ إذن x = 9."
          }
        ],
        "hint_en": "Subtract 9 from 18 to find x.",
        "hint_ar": "اطرح 9 من 18 لإيجاد x.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x + 9 = 18 has two parts: the unknown x and the constant 9.",
            "explanation_ar": "المعادلة x + 9 = 18 لها جزآن: المجهول x والثابت 9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move 9 to the right side: x = 18 − 9.",
            "explanation_ar": "انقل 9 إلى الطرف الأيمن: x = 18 − 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 18 − 9 = 9. So x = 9.",
            "explanation_ar": "احسب: 18 − 9 = 9. إذن x = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 9 + 9 = 18. ✓ x = 9.",
            "explanation_ar": "عوّض: 9 + 9 = 18. ✓ x = 9."
          }
        ],
        "hint_en": "18 minus 9 gives you x.",
        "hint_ar": "18 ناقص 9 يعطيك x.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a number line: you land on 18 after jumping 9 steps from x.",
            "explanation_ar": "تخيّل خطاً عددياً: تصل إلى 18 بعد القفز 9 خطوات من x."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Walk 9 steps back from 18: 18 − 9 = 9.",
            "explanation_ar": "امشِ 9 خطوات للخلف من 18: 18 − 9 = 9."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "You started at position 9 on the number line, so x = 9.",
            "explanation_ar": "بدأت من الموضع 9 على الخط العددي، إذن x = 9."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 9. Check: 9 + 9 = 18. ✓",
            "explanation_ar": "x = 9. تحقق: 9 + 9 = 18. ✓"
          }
        ],
        "hint_en": "Jump 9 steps back from 18 on a number line.",
        "hint_ar": "اقفز 9 خطوات للخلف من 18 على الخط العددي.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-019",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x/6 = 2",
    "question_ar": "حل من أجل x: x/6 = 2 ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x/6 = 2. x is divided by 6, so we multiply both sides by 6.",
            "explanation_ar": "لدينا x/6 = 2. x مقسوم على 6، لذا نضرب كلا الطرفين في 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 6: (x/6) × 6 = 2 × 6.",
            "explanation_ar": "اضرب كلا الطرفين في 6: (x/6) × 6 = 2 × 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 2 × 6 = 12.",
            "explanation_ar": "x = 2 × 6 = 12."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 12/6 = 2. ✓ So x = 12.",
            "explanation_ar": "تحقق: 12/6 = 2. ✓ إذن x = 12."
          }
        ],
        "hint_en": "Multiply 2 by 6 to find x.",
        "hint_ar": "اضرب 2 في 6 لإيجاد x.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x/6 = 2 means one-sixth of x equals 2.",
            "explanation_ar": "المعادلة x/6 = 2 تعني أن سُدس x يساوي 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the division: x = 2 × 6.",
            "explanation_ar": "تراجع عن القسمة: x = 2 × 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 2 × 6 = 12. So x = 12.",
            "explanation_ar": "احسب: 2 × 6 = 12. إذن x = 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 12/6 = 2. ✓ x = 12.",
            "explanation_ar": "عوّض: 12/6 = 2. ✓ x = 12."
          }
        ],
        "hint_en": "One-sixth of x is 2 — find the whole x.",
        "hint_ar": "سُدس x يساوي 2 — أوجد x كاملاً.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine dividing x eggs into 6 equal cartons; each carton holds 2 eggs.",
            "explanation_ar": "تخيّل تقسيم x بيضة على 6 علب متساوية؛ كل علبة تحتوي على 2 بيضتين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Total eggs = 6 cartons × 2 eggs = 12.",
            "explanation_ar": "إجمالي البيض = 6 علب × 2 بيضتان = 12."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "There are 12 eggs total, so x = 12.",
            "explanation_ar": "يوجد 12 بيضة في المجموع، إذن x = 12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 12. Check: 12/6 = 2. ✓",
            "explanation_ar": "x = 12. تحقق: 12/6 = 2. ✓"
          }
        ],
        "hint_en": "6 cartons each holding 2 eggs — how many eggs total?",
        "hint_ar": "6 علب كل منها تحتوي على 2 بيضتين — كم بيضة في المجموع؟",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-020",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: 9x = 63",
    "question_ar": "حل من أجل x: 9x = 63 ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 9x = 63. x is multiplied by 9, so we divide both sides by 9.",
            "explanation_ar": "لدينا 9x = 63. x مضروب في 9، لذا نقسم كلا الطرفين على 9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 9: 9x ÷ 9 = 63 ÷ 9.",
            "explanation_ar": "اقسم كلا الطرفين على 9: 9x ÷ 9 = 63 ÷ 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 63 ÷ 9 = 7.",
            "explanation_ar": "x = 63 ÷ 9 = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 9 × 7 = 63. ✓ So x = 7.",
            "explanation_ar": "تحقق: 9 × 7 = 63. ✓ إذن x = 7."
          }
        ],
        "hint_en": "Divide 63 by 9 to find x.",
        "hint_ar": "اقسم 63 على 9 لإيجاد x.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation 9x = 63 means 9 equal groups totalling 63.",
            "explanation_ar": "المعادلة 9x = 63 تعني 9 مجموعات متساوية مجموعها 63."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the multiplication: x = 63 ÷ 9.",
            "explanation_ar": "تراجع عن الضرب: x = 63 ÷ 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 63 ÷ 9 = 7. So x = 7.",
            "explanation_ar": "احسب: 63 ÷ 9 = 7. إذن x = 7."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 9 × 7 = 63. ✓ x = 7.",
            "explanation_ar": "عوّض: 9 × 7 = 63. ✓ x = 7."
          }
        ],
        "hint_en": "How many nines are in 63?",
        "hint_ar": "كم مرة يتكرر الرقم 9 في 63؟",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a 9-player football team where each player scores x points; total is 63.",
            "explanation_ar": "تخيّل فريق كرة قدم من 9 لاعبين يسجل كل لاعب x نقطة؛ المجموع 63."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide 63 points among 9 players: 63 ÷ 9 = 7 points each.",
            "explanation_ar": "قسّم 63 نقطة على 9 لاعبين: 63 ÷ 9 = 7 نقاط لكل لاعب."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each player scored 7 points, so x = 7.",
            "explanation_ar": "كل لاعب سجّل 7 نقاط، إذن x = 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 7. Check: 9 × 7 = 63. ✓",
            "explanation_ar": "x = 7. تحقق: 9 × 7 = 63. ✓"
          }
        ],
        "hint_en": "9 players each score x points for a total of 63 — how many each?",
        "hint_ar": "9 لاعبين يسجل كل منهم x نقطة والمجموع 63 — كم لكل لاعب؟",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-021",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x + 4 = 19",
    "question_ar": "حل من أجل x: x + 4 = 19 ؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x + 4 = 19. We subtract 4 from both sides to isolate x.",
            "explanation_ar": "لدينا x + 4 = 19. نطرح 4 من كلا الطرفين لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 4 from both sides: x + 4 − 4 = 19 − 4.",
            "explanation_ar": "اطرح 4 من كلا الطرفين: x + 4 − 4 = 19 − 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 19 − 4 = 15.",
            "explanation_ar": "x = 19 − 4 = 15."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 15 + 4 = 19. ✓ So x = 15.",
            "explanation_ar": "تحقق: 15 + 4 = 19. ✓ إذن x = 15."
          }
        ],
        "hint_en": "Subtract 4 from 19 to find x.",
        "hint_ar": "اطرح 4 من 19 لإيجاد x.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x + 4 = 19 has two parts: the unknown x and the constant 4.",
            "explanation_ar": "المعادلة x + 4 = 19 لها جزآن: المجهول x والثابت 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move 4 to the right side: x = 19 − 4.",
            "explanation_ar": "انقل 4 إلى الطرف الأيمن: x = 19 − 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 19 − 4 = 15. So x = 15.",
            "explanation_ar": "احسب: 19 − 4 = 15. إذن x = 15."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 15 + 4 = 19. ✓ x = 15.",
            "explanation_ar": "عوّض: 15 + 4 = 19. ✓ x = 15."
          }
        ],
        "hint_en": "Remove the 4 from the left side.",
        "hint_ar": "أزل الـ 4 من الطرف الأيسر.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "You have x stickers; a friend gives you 4 more and you now have 19 total.",
            "explanation_ar": "لديك x ملصقاً؛ يعطيك صديق 4 أخرى ولديك الآن 19 في المجموع."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Take away the 4 gifted stickers: 19 − 4 = 15 original stickers.",
            "explanation_ar": "أزل الـ 4 ملصقات الهدية: 19 − 4 = 15 ملصقاً أصلياً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "You originally had 15 stickers, so x = 15.",
            "explanation_ar": "كان لديك أصلاً 15 ملصقاً، إذن x = 15."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 15. Check: 15 + 4 = 19. ✓",
            "explanation_ar": "x = 15. تحقق: 15 + 4 = 19. ✓"
          }
        ],
        "hint_en": "After getting 4 more stickers you have 19 — how many did you start with?",
        "hint_ar": "بعد الحصول على 4 ملصقات أصبح لديك 19 — كم كان لديك في البداية؟",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-022",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x − 7 = 8",
    "question_ar": "حل من أجل x: x − 7 = 8 ؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x − 7 = 8. We add 7 to both sides to isolate x.",
            "explanation_ar": "لدينا x − 7 = 8. نضيف 7 إلى كلا الطرفين لعزل x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 7 to both sides: x − 7 + 7 = 8 + 7.",
            "explanation_ar": "أضف 7 إلى كلا الطرفين: x − 7 + 7 = 8 + 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 8 + 7 = 15.",
            "explanation_ar": "x = 8 + 7 = 15."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 15 − 7 = 8. ✓ So x = 15.",
            "explanation_ar": "تحقق: 15 − 7 = 8. ✓ إذن x = 15."
          }
        ],
        "hint_en": "Add 7 to 8 to find x.",
        "hint_ar": "أضف 7 إلى 8 لإيجاد x.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x − 7 = 8 has the unknown x with 7 subtracted from it.",
            "explanation_ar": "المعادلة x − 7 = 8 تحتوي على المجهول x مطروحاً منه 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move −7 to the right side as +7: x = 8 + 7.",
            "explanation_ar": "انقل −7 إلى الطرف الأيمن بوصفه +7: x = 8 + 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 8 + 7 = 15. So x = 15.",
            "explanation_ar": "احسب: 8 + 7 = 15. إذن x = 15."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 15 − 7 = 8. ✓ x = 15.",
            "explanation_ar": "عوّض: 15 − 7 = 8. ✓ x = 15."
          }
        ],
        "hint_en": "What number minus 7 gives 8?",
        "hint_ar": "ما الرقم الذي إذا طرحنا منه 7 يعطي 8؟",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "You had x candies; you ate 7 and now have 8 left.",
            "explanation_ar": "كان لديك x حلوى؛ أكلت 7 والآن تبقى لديك 8."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add back the 7 eaten candies: 8 + 7 = 15 original candies.",
            "explanation_ar": "أضف الحلوى الـ 7 المأكولة: 8 + 7 = 15 حلوى أصلية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "You originally had 15 candies, so x = 15.",
            "explanation_ar": "كان لديك أصلاً 15 حلوى، إذن x = 15."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 15. Check: 15 − 7 = 8. ✓",
            "explanation_ar": "x = 15. تحقق: 15 − 7 = 8. ✓"
          }
        ],
        "hint_en": "You ate 7 candies and have 8 left — how many did you start with?",
        "hint_ar": "أكلت 7 حلويات وبقي لديك 8 — كم كان لديك في البداية؟",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-023",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: 8x = 72",
    "question_ar": "حل من أجل x: 8x = 72 ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 8x = 72. x is multiplied by 8, so we divide both sides by 8.",
            "explanation_ar": "لدينا 8x = 72. x مضروب في 8، لذا نقسم كلا الطرفين على 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 8: 8x ÷ 8 = 72 ÷ 8.",
            "explanation_ar": "اقسم كلا الطرفين على 8: 8x ÷ 8 = 72 ÷ 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 72 ÷ 8 = 9.",
            "explanation_ar": "x = 72 ÷ 8 = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 8 × 9 = 72. ✓ So x = 9.",
            "explanation_ar": "تحقق: 8 × 9 = 72. ✓ إذن x = 9."
          }
        ],
        "hint_en": "Divide 72 by 8 to find x.",
        "hint_ar": "اقسم 72 على 8 لإيجاد x.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation 8x = 72 means 8 equal groups totalling 72.",
            "explanation_ar": "المعادلة 8x = 72 تعني 8 مجموعات متساوية مجموعها 72."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the multiplication: x = 72 ÷ 8.",
            "explanation_ar": "تراجع عن الضرب: x = 72 ÷ 8."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 72 ÷ 8 = 9. So x = 9.",
            "explanation_ar": "احسب: 72 ÷ 8 = 9. إذن x = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 8 × 9 = 72. ✓ x = 9.",
            "explanation_ar": "عوّض: 8 × 9 = 72. ✓ x = 9."
          }
        ],
        "hint_en": "Split 72 into 8 equal groups.",
        "hint_ar": "قسّم 72 إلى 8 مجموعات متساوية.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 8 students each reading x pages of a book; together they read 72 pages.",
            "explanation_ar": "تخيّل 8 طلاب يقرأ كل منهم x صفحة من كتاب؛ معاً قرأوا 72 صفحة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide 72 pages among 8 students: 72 ÷ 8 = 9 pages each.",
            "explanation_ar": "قسّم 72 صفحة على 8 طلاب: 72 ÷ 8 = 9 صفحات لكل طالب."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each student reads 9 pages, so x = 9.",
            "explanation_ar": "كل طالب يقرأ 9 صفحات، إذن x = 9."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 9. Check: 8 × 9 = 72. ✓",
            "explanation_ar": "x = 9. تحقق: 8 × 9 = 72. ✓"
          }
        ],
        "hint_en": "8 students read x pages each for a total of 72 — how many pages each?",
        "hint_ar": "8 طلاب يقرأ كل منهم x صفحة والمجموع 72 — كم صفحة لكل طالب؟",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-easy-024",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "Solve for x: x/7 = 2",
    "question_ar": "حل من أجل x: x/7 = 2 ؟",
    "answer": 14,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have x/7 = 2. x is divided by 7, so we multiply both sides by 7.",
            "explanation_ar": "لدينا x/7 = 2. x مقسوم على 7، لذا نضرب كلا الطرفين في 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 7: (x/7) × 7 = 2 × 7.",
            "explanation_ar": "اضرب كلا الطرفين في 7: (x/7) × 7 = 2 × 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 2 × 7 = 14.",
            "explanation_ar": "x = 2 × 7 = 14."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 14/7 = 2. ✓ So x = 14.",
            "explanation_ar": "تحقق: 14/7 = 2. ✓ إذن x = 14."
          }
        ],
        "hint_en": "Multiply 2 by 7 to find x.",
        "hint_ar": "اضرب 2 في 7 لإيجاد x.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation x/7 = 2 means one-seventh of x equals 2.",
            "explanation_ar": "المعادلة x/7 = 2 تعني أن سُبع x يساوي 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the division: x = 2 × 7.",
            "explanation_ar": "تراجع عن القسمة: x = 2 × 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Calculate: 2 × 7 = 14. So x = 14.",
            "explanation_ar": "احسب: 2 × 7 = 14. إذن x = 14."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 14/7 = 2. ✓ x = 14.",
            "explanation_ar": "عوّض: 14/7 = 2. ✓ x = 14."
          }
        ],
        "hint_en": "One-seventh of x is 2 — find the whole x.",
        "hint_ar": "سُبع x يساوي 2 — أوجد x كاملاً.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine sharing x cookies equally among 7 friends; each friend gets 2 cookies.",
            "explanation_ar": "تخيّل توزيع x كعكة بالتساوي على 7 أصدقاء؛ كل صديق يحصل على 2 كعكتين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Total cookies = 7 friends × 2 cookies = 14.",
            "explanation_ar": "إجمالي الكعكات = 7 أصدقاء × 2 كعكتان = 14."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "There are 14 cookies total, so x = 14.",
            "explanation_ar": "يوجد 14 كعكة في المجموع، إذن x = 14."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "x = 14. Check: 14/7 = 2. ✓",
            "explanation_ar": "x = 14. تحقق: 14/7 = 2. ✓"
          }
        ],
        "hint_en": "7 friends each get 2 cookies from x total — how many cookies total?",
        "hint_ar": "7 أصدقاء يحصل كل منهم على 2 كعكتين من x في المجموع — كم كعكة في المجموع؟",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-001",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 2x + 5 = 17",
    "question_ar": "حل من أجل x: 2x + 5 = 17 ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify the equation: 2x + 5 = 17. The coefficient of x is 2 and the constant on the left is 5.",
            "explanation_ar": "Identify the equation: 2x + 5 = 17. The coefficient of x is 2 and the constant on the left is 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 5 from both sides: 2x + 5 − 5 = 17 − 5, giving 2x = 12.",
            "explanation_ar": "Subtract 5 from both sides: 2x + 5 − 5 = 17 − 5, giving 2x = 12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 2: 2x ÷ 2 = 12 ÷ 2, giving x = 6.",
            "explanation_ar": "Divide both sides by 2: 2x ÷ 2 = 12 ÷ 2, giving x = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 2(6) + 5 = 12 + 5 = 17. ✓ The equation balances.",
            "explanation_ar": "Verify: 2(6) + 5 = 12 + 5 = 17. ✓ The equation balances."
          }
        ],
        "hint_en": "First remove the constant 5 by subtracting, then divide by 2.",
        "hint_ar": "أولاً أزل الثابت 5 بالطرح، ثم اقسم على 2.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Decompose the problem: we need 2x to equal 17 − 5 = 12.",
            "explanation_ar": "Decompose the problem: we need 2x to equal 17 − 5 = 12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "So 2x = 12. Think: what number times 2 gives 12?",
            "explanation_ar": "So 2x = 12. Think: what number times 2 gives 12?"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "12 ÷ 2 = 6, so x = 6.",
            "explanation_ar": "12 ÷ 2 = 6, so x = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2(6) = 12, and 12 + 5 = 17. ✓",
            "explanation_ar": "Check: 2(6) = 12, and 12 + 5 = 17. ✓"
          }
        ],
        "hint_en": "Ask yourself: what must 2x equal so that adding 5 gives 17?",
        "hint_ar": "اسأل نفسك: ماذا يجب أن يساوي 2x حتى يعطي مجموعه مع 5 الرقم 17؟",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a balance scale. Left side: two x-blocks and a block labeled 5. Right side: a block labeled 17.",
            "explanation_ar": "Draw a balance scale. Left side: two x-blocks and a block labeled 5. Right side: a block labeled 17."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove the '5' block from the left; to keep balance, remove 5 from the right: right side becomes 12.",
            "explanation_ar": "Remove the '5' block from the left; to keep balance, remove 5 from the right: right side becomes 12."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two equal x-blocks weigh 12 total, so each x-block weighs 12 ÷ 2 = 6.",
            "explanation_ar": "Two equal x-blocks weigh 12 total, so each x-block weighs 12 ÷ 2 = 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Replace x with 6: 2(6) + 5 = 17. The scale balances. ✓",
            "explanation_ar": "Replace x with 6: 2(6) + 5 = 17. The scale balances. ✓"
          }
        ],
        "hint_en": "Visualize removing the constant weight first, then split equally.",
        "hint_ar": "تخيل إزالة الثقل الثابت أولاً، ثم قسّم بالتساوي.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-002",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 3x − 8 = 13",
    "question_ar": "حل من أجل x: 3x − 8 = 13 ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify the equation: 3x − 8 = 13. The coefficient of x is 3 and the constant subtracted is 8.",
            "explanation_ar": "Identify the equation: 3x − 8 = 13. The coefficient of x is 3 and the constant subtracted is 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 8 to both sides: 3x − 8 + 8 = 13 + 8, giving 3x = 21.",
            "explanation_ar": "Add 8 to both sides: 3x − 8 + 8 = 13 + 8, giving 3x = 21."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 3: 3x ÷ 3 = 21 ÷ 3, giving x = 7.",
            "explanation_ar": "Divide both sides by 3: 3x ÷ 3 = 21 ÷ 3, giving x = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 3(7) − 8 = 21 − 8 = 13. ✓",
            "explanation_ar": "Verify: 3(7) − 8 = 21 − 8 = 13. ✓"
          }
        ],
        "hint_en": "Add 8 to both sides first to isolate the term 3x.",
        "hint_ar": "أضف 8 إلى كلا الطرفين أولاً لعزل الحد 3x.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite: 3x = 13 + 8 (move the −8 to the right by adding 8).",
            "explanation_ar": "Rewrite: 3x = 13 + 8 (move the −8 to the right by adding 8)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "So 3x = 21.",
            "explanation_ar": "So 3x = 21."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide: x = 21 ÷ 3 = 7.",
            "explanation_ar": "Divide: x = 21 ÷ 3 = 7."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3(7) − 8 = 21 − 8 = 13. ✓",
            "explanation_ar": "Check: 3(7) − 8 = 21 − 8 = 13. ✓"
          }
        ],
        "hint_en": "Move −8 to the right side by adding 8; then divide by 3.",
        "hint_ar": "انقل −8 إلى الجانب الأيمن بإضافة 8؛ ثم اقسم على 3.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance scale: left has three x-blocks minus a 8-block, right has 17-block. Wait — right is 13.",
            "explanation_ar": "Balance scale: left has three x-blocks minus a 8-block, right has 17-block. Wait — right is 13."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add an 8-block to both sides: left becomes three x-blocks, right becomes 13 + 8 = 21.",
            "explanation_ar": "Add an 8-block to both sides: left becomes three x-blocks, right becomes 13 + 8 = 21."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Split 21 equally among three x-blocks: each block = 21 ÷ 3 = 7.",
            "explanation_ar": "Split 21 equally among three x-blocks: each block = 21 ÷ 3 = 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Substitute: 3(7) − 8 = 13. ✓ Scale balances.",
            "explanation_ar": "Substitute: 3(7) − 8 = 13. ✓ Scale balances."
          }
        ],
        "hint_en": "Add an 8-weight to both sides to cancel the subtracted 8.",
        "hint_ar": "أضف وزن 8 إلى كلا الجانبين لإلغاء الـ 8 المطروح.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-003",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 2(x + 3) = 14",
    "question_ar": "حل من أجل x: 2(x + 3) = 14 ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify the equation: 2(x + 3) = 14. Divide both sides by 2 first: x + 3 = 7.",
            "explanation_ar": "Identify the equation: 2(x + 3) = 14. Divide both sides by 2 first: x + 3 = 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 3 from both sides: x + 3 − 3 = 7 − 3, giving x = 4.",
            "explanation_ar": "Subtract 3 from both sides: x + 3 − 3 = 7 − 3, giving x = 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Alternative: expand first: 2x + 6 = 14, then 2x = 8, x = 4.",
            "explanation_ar": "Alternative: expand first: 2x + 6 = 14, then 2x = 8, x = 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 2(4 + 3) = 2(7) = 14. ✓",
            "explanation_ar": "Verify: 2(4 + 3) = 2(7) = 14. ✓"
          }
        ],
        "hint_en": "Divide both sides by 2 first, then subtract 3.",
        "hint_ar": "اقسم كلا الطرفين على 2 أولاً، ثم اطرح 3.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The expression 2(x + 3) means x + 3 is multiplied by 2.",
            "explanation_ar": "The expression 2(x + 3) means x + 3 is multiplied by 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "If 2 × (x + 3) = 14, then x + 3 = 14 ÷ 2 = 7.",
            "explanation_ar": "If 2 × (x + 3) = 14, then x + 3 = 14 ÷ 2 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "So x = 7 − 3 = 4.",
            "explanation_ar": "So x = 7 − 3 = 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2(4 + 3) = 2 × 7 = 14. ✓",
            "explanation_ar": "Check: 2(4 + 3) = 2 × 7 = 14. ✓"
          }
        ],
        "hint_en": "Think: two groups of (x + 3) equal 14, so one group is 7.",
        "hint_ar": "فكّر: مجموعتان من (x + 3) تساويان 14، إذن مجموعة واحدة تساوي 7.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine two identical bags, each containing x stones and 3 extra stones. Together they weigh 14.",
            "explanation_ar": "Imagine two identical bags, each containing x stones and 3 extra stones. Together they weigh 14."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each bag weighs 14 ÷ 2 = 7. So each bag has x + 3 = 7.",
            "explanation_ar": "Each bag weighs 14 ÷ 2 = 7. So each bag has x + 3 = 7."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remove 3 stones from the bag: x = 7 − 3 = 4.",
            "explanation_ar": "Remove 3 stones from the bag: x = 7 − 3 = 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: each bag has 4 + 3 = 7 stones; two bags = 14. ✓",
            "explanation_ar": "Verify: each bag has 4 + 3 = 7 stones; two bags = 14. ✓"
          }
        ],
        "hint_en": "Split 14 into two equal groups, then subtract 3.",
        "hint_ar": "قسّم 14 على مجموعتين متساويتين، ثم اطرح 3.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-004",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: x/3 + 4 = 9",
    "question_ar": "حل من أجل x: x/3 + 4 = 9 ؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify: x/3 + 4 = 9. Subtract 4 from both sides: x/3 = 9 − 4 = 5.",
            "explanation_ar": "Identify: x/3 + 4 = 9. Subtract 4 from both sides: x/3 = 9 − 4 = 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 3: x = 5 × 3 = 15.",
            "explanation_ar": "Multiply both sides by 3: x = 5 × 3 = 15."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 15/3 + 4 = 5 + 4 = 9. ✓",
            "explanation_ar": "Verify: 15/3 + 4 = 5 + 4 = 9. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The equation balances perfectly with x = 15.",
            "explanation_ar": "The equation balances perfectly with x = 15."
          }
        ],
        "hint_en": "Subtract 4 first, then multiply by 3 to undo the division.",
        "hint_ar": "اطرح 4 أولاً، ثم اضرب في 3 لإلغاء القسمة.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "We need x/3 to equal 9 − 4 = 5.",
            "explanation_ar": "We need x/3 to equal 9 − 4 = 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "So x/3 = 5, which means x = 5 × 3.",
            "explanation_ar": "So x/3 = 5, which means x = 5 × 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "5 × 3 = 15, therefore x = 15.",
            "explanation_ar": "5 × 3 = 15, therefore x = 15."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 15 ÷ 3 + 4 = 5 + 4 = 9. ✓",
            "explanation_ar": "Check: 15 ÷ 3 + 4 = 5 + 4 = 9. ✓"
          }
        ],
        "hint_en": "What divided by 3 gives 5? That number is x.",
        "hint_ar": "أي عدد مقسوم على 3 يساوي 5؟ ذلك العدد هو x.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a number line: x is split into 3 equal parts, one part plus 4 reaches 9.",
            "explanation_ar": "Picture a number line: x is split into 3 equal parts, one part plus 4 reaches 9."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "One part = 9 − 4 = 5. So one-third of x is 5.",
            "explanation_ar": "One part = 9 − 4 = 5. So one-third of x is 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Three parts (all of x) = 5 × 3 = 15.",
            "explanation_ar": "Three parts (all of x) = 5 × 3 = 15."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: 15 ÷ 3 = 5; 5 + 4 = 9. ✓",
            "explanation_ar": "Verify: 15 ÷ 3 = 5; 5 + 4 = 9. ✓"
          }
        ],
        "hint_en": "One-third of x plus 4 equals 9 — find that one-third first.",
        "hint_ar": "ثلث x زائد 4 يساوي 9 — ابحث عن الثلث أولاً.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-005",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 3x + 5x = 40",
    "question_ar": "حل من أجل x: 3x + 5x = 40 ؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combine like terms on the left: 3x + 5x = (3 + 5)x = 8x.",
            "explanation_ar": "Combine like terms on the left: 3x + 5x = (3 + 5)x = 8x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The equation becomes 8x = 40.",
            "explanation_ar": "The equation becomes 8x = 40."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 8: x = 40 ÷ 8 = 5.",
            "explanation_ar": "Divide both sides by 8: x = 40 ÷ 8 = 5."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 3(5) + 5(5) = 15 + 25 = 40. ✓",
            "explanation_ar": "Verify: 3(5) + 5(5) = 15 + 25 = 40. ✓"
          }
        ],
        "hint_en": "Combine the x-terms first: 3x + 5x = 8x.",
        "hint_ar": "اجمع حدود x أولاً: 3x + 5x = 8x.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor x from the left side: x(3 + 5) = 40.",
            "explanation_ar": "Factor x from the left side: x(3 + 5) = 40."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Simplify the bracket: x × 8 = 40.",
            "explanation_ar": "Simplify the bracket: x × 8 = 40."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "x = 40 ÷ 8 = 5.",
            "explanation_ar": "x = 40 ÷ 8 = 5."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3(5) + 5(5) = 15 + 25 = 40. ✓",
            "explanation_ar": "Check: 3(5) + 5(5) = 15 + 25 = 40. ✓"
          }
        ],
        "hint_en": "Both terms share x — factor it out: x(3 + 5) = 40.",
        "hint_ar": "كلا الحدين يشتركان في x — استخرجه: x(3 + 5) = 40.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 3 red x-blocks and 5 blue x-blocks lined up, totalling 40 units.",
            "explanation_ar": "Imagine 3 red x-blocks and 5 blue x-blocks lined up, totalling 40 units."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "All 8 blocks together weigh 40, so each block weighs 40 ÷ 8 = 5.",
            "explanation_ar": "All 8 blocks together weigh 40, so each block weighs 40 ÷ 8 = 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Whether red or blue, each x-block = 5.",
            "explanation_ar": "Whether red or blue, each x-block = 5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Confirm: 3 × 5 + 5 × 5 = 15 + 25 = 40. ✓",
            "explanation_ar": "Confirm: 3 × 5 + 5 × 5 = 15 + 25 = 40. ✓"
          }
        ],
        "hint_en": "Count all 8 x-blocks and share 40 equally among them.",
        "hint_ar": "عدّ جميع الـ 8 مكعبات x وقسّم 40 بالتساوي بينها.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-006",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 4x + 3 = 23",
    "question_ar": "حل من أجل x: 4x + 3 = 23 ؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify the equation: 4x + 3 = 23. Subtract 3 from both sides: 4x = 20.",
            "explanation_ar": "Identify the equation: 4x + 3 = 23. Subtract 3 from both sides: 4x = 20."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 4: x = 20 ÷ 4 = 5.",
            "explanation_ar": "Divide both sides by 4: x = 20 ÷ 4 = 5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 4(5) + 3 = 20 + 3 = 23. ✓",
            "explanation_ar": "Verify: 4(5) + 3 = 20 + 3 = 23. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The solution x = 5 satisfies the original equation.",
            "explanation_ar": "The solution x = 5 satisfies the original equation."
          }
        ],
        "hint_en": "Subtract 3, then divide by 4.",
        "hint_ar": "اطرح 3، ثم اقسم على 4.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "4x needs to equal 23 − 3 = 20.",
            "explanation_ar": "4x needs to equal 23 − 3 = 20."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4x = 20 means x = 20 ÷ 4.",
            "explanation_ar": "4x = 20 means x = 20 ÷ 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20 ÷ 4 = 5, so x = 5.",
            "explanation_ar": "20 ÷ 4 = 5, so x = 5."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4(5) + 3 = 23. ✓",
            "explanation_ar": "Check: 4(5) + 3 = 23. ✓"
          }
        ],
        "hint_en": "What must 4x equal so that adding 3 gives 23?",
        "hint_ar": "ماذا يجب أن يساوي 4x حتى يعطي مجموعه مع 3 الرقم 23؟",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance scale: 4 x-blocks and a 3-block on the left; 23-block on the right.",
            "explanation_ar": "Balance scale: 4 x-blocks and a 3-block on the left; 23-block on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove the 3-block from both sides: left = 4 x-blocks, right = 20.",
            "explanation_ar": "Remove the 3-block from both sides: left = 4 x-blocks, right = 20."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each x-block = 20 ÷ 4 = 5.",
            "explanation_ar": "Each x-block = 20 ÷ 4 = 5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Replace x with 5: 4(5) + 3 = 23. ✓",
            "explanation_ar": "Replace x with 5: 4(5) + 3 = 23. ✓"
          }
        ],
        "hint_en": "Remove the 3-block from both sides, then split 20 among 4 blocks.",
        "hint_ar": "أزل مكعب 3 من كلا الجانبين، ثم قسّم 20 على 4 مكعبات.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-007",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 5x − 7 = 18",
    "question_ar": "حل من أجل x: 5x − 7 = 18 ؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify: 5x − 7 = 18. Add 7 to both sides: 5x = 18 + 7 = 25.",
            "explanation_ar": "Identify: 5x − 7 = 18. Add 7 to both sides: 5x = 18 + 7 = 25."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 5: x = 25 ÷ 5 = 5.",
            "explanation_ar": "Divide both sides by 5: x = 25 ÷ 5 = 5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 5(5) − 7 = 25 − 7 = 18. ✓",
            "explanation_ar": "Verify: 5(5) − 7 = 25 − 7 = 18. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The solution x = 5 checks out.",
            "explanation_ar": "The solution x = 5 checks out."
          }
        ],
        "hint_en": "Add 7 to both sides first, then divide by 5.",
        "hint_ar": "أضف 7 إلى كلا الطرفين أولاً، ثم اقسم على 5.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rearrange: 5x = 18 + 7 = 25.",
            "explanation_ar": "Rearrange: 5x = 18 + 7 = 25."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Divide: x = 25 ÷ 5 = 5.",
            "explanation_ar": "Divide: x = 25 ÷ 5 = 5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "5 times 5 equals 25, and 25 − 7 = 18. ✓",
            "explanation_ar": "5 times 5 equals 25, and 25 − 7 = 18. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The answer is confirmed as x = 5.",
            "explanation_ar": "The answer is confirmed as x = 5."
          }
        ],
        "hint_en": "Move −7 to the right side to find 5x, then divide.",
        "hint_ar": "انقل −7 إلى الجانب الأيمن لإيجاد 5x، ثم اقسم.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Scale: 5 x-blocks with a 7-block removed on the left; 18-block on the right.",
            "explanation_ar": "Scale: 5 x-blocks with a 7-block removed on the left; 18-block on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add a 7-block to both sides: left = 5 x-blocks, right = 25.",
            "explanation_ar": "Add a 7-block to both sides: left = 5 x-blocks, right = 25."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Split 25 evenly among 5 blocks: each = 5.",
            "explanation_ar": "Split 25 evenly among 5 blocks: each = 5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "5(5) − 7 = 18. ✓",
            "explanation_ar": "5(5) − 7 = 18. ✓"
          }
        ],
        "hint_en": "Adding 7 restores balance; then each x-block equals 25 ÷ 5.",
        "hint_ar": "إضافة 7 تستعيد التوازن؛ ثم كل مكعب x يساوي 25 ÷ 5.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-008",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 3(x − 4) = 9",
    "question_ar": "حل من أجل x: 3(x − 4) = 9 ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by 3: x − 4 = 9 ÷ 3 = 3.",
            "explanation_ar": "Divide both sides by 3: x − 4 = 9 ÷ 3 = 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 4 to both sides: x = 3 + 4 = 7.",
            "explanation_ar": "Add 4 to both sides: x = 3 + 4 = 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 3(7 − 4) = 3(3) = 9. ✓",
            "explanation_ar": "Verify: 3(7 − 4) = 3(3) = 9. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 7 is confirmed.",
            "explanation_ar": "x = 7 is confirmed."
          }
        ],
        "hint_en": "Divide by 3 first to simplify, then add 4.",
        "hint_ar": "اقسم على 3 أولاً للتبسيط، ثم أضف 4.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Three groups of (x − 4) equal 9, so one group: x − 4 = 9 ÷ 3 = 3.",
            "explanation_ar": "Three groups of (x − 4) equal 9, so one group: x − 4 = 9 ÷ 3 = 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add 4 to both sides: x = 3 + 4 = 7.",
            "explanation_ar": "Add 4 to both sides: x = 3 + 4 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Each group of (7 − 4) = 3; three groups = 9. ✓",
            "explanation_ar": "Each group of (7 − 4) = 3; three groups = 9. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = 7.",
            "explanation_ar": "x = 7."
          }
        ],
        "hint_en": "One group of (x − 4) = 3; now solve x − 4 = 3.",
        "hint_ar": "مجموعة واحدة من (x − 4) = 3؛ الآن حل x − 4 = 3.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Three identical bags each hold x stones with 4 removed; together they count 9 stones.",
            "explanation_ar": "Three identical bags each hold x stones with 4 removed; together they count 9 stones."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each bag contributes 9 ÷ 3 = 3 stones, so x − 4 = 3.",
            "explanation_ar": "Each bag contributes 9 ÷ 3 = 3 stones, so x − 4 = 3."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 4 back: x = 7.",
            "explanation_ar": "Add 4 back: x = 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Check: 3(7 − 4) = 3 × 3 = 9. ✓",
            "explanation_ar": "Check: 3(7 − 4) = 3 × 3 = 9. ✓"
          }
        ],
        "hint_en": "Each bag contributes 3 stones; add back the 4 that were removed.",
        "hint_ar": "كل حقيبة تساهم بـ 3 حصوات؛ أضف الـ 4 التي أُزيلت.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-009",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: x/5 + 2 = 6",
    "question_ar": "حل من أجل x: x/5 + 2 = 6 ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 2 from both sides: x/5 = 6 − 2 = 4.",
            "explanation_ar": "Subtract 2 from both sides: x/5 = 6 − 2 = 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 5: x = 4 × 5 = 20.",
            "explanation_ar": "Multiply both sides by 5: x = 4 × 5 = 20."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 20/5 + 2 = 4 + 2 = 6. ✓",
            "explanation_ar": "Verify: 20/5 + 2 = 4 + 2 = 6. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 20 is correct.",
            "explanation_ar": "x = 20 is correct."
          }
        ],
        "hint_en": "Subtract 2 first, then multiply by 5.",
        "hint_ar": "اطرح 2 أولاً، ثم اضرب في 5.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "x/5 must equal 6 − 2 = 4.",
            "explanation_ar": "x/5 must equal 6 − 2 = 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x/5 = 4 means x = 4 × 5.",
            "explanation_ar": "x/5 = 4 means x = 4 × 5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4 × 5 = 20.",
            "explanation_ar": "4 × 5 = 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 20 ÷ 5 + 2 = 4 + 2 = 6. ✓",
            "explanation_ar": "Check: 20 ÷ 5 + 2 = 4 + 2 = 6. ✓"
          }
        ],
        "hint_en": "What number divided by 5 gives 4?",
        "hint_ar": "أي عدد مقسوم على 5 يساوي 4؟",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "x is cut into 5 equal pieces; one piece plus 2 reaches 6.",
            "explanation_ar": "x is cut into 5 equal pieces; one piece plus 2 reaches 6."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "One piece = 6 − 2 = 4. So one-fifth of x is 4.",
            "explanation_ar": "One piece = 6 − 2 = 4. So one-fifth of x is 4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "All five pieces: x = 4 × 5 = 20.",
            "explanation_ar": "All five pieces: x = 4 × 5 = 20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: 20 ÷ 5 + 2 = 6. ✓",
            "explanation_ar": "Verify: 20 ÷ 5 + 2 = 6. ✓"
          }
        ],
        "hint_en": "Find one-fifth of x first; then multiply by 5.",
        "hint_ar": "ابحث عن خُمس x أولاً؛ ثم اضرب في 5.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-010",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 2x + 7x = 36",
    "question_ar": "حل من أجل x: 2x + 7x = 36 ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combine like terms: 2x + 7x = 9x.",
            "explanation_ar": "Combine like terms: 2x + 7x = 9x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Equation becomes 9x = 36.",
            "explanation_ar": "Equation becomes 9x = 36."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 9: x = 36 ÷ 9 = 4.",
            "explanation_ar": "Divide both sides by 9: x = 36 ÷ 9 = 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 2(4) + 7(4) = 8 + 28 = 36. ✓",
            "explanation_ar": "Verify: 2(4) + 7(4) = 8 + 28 = 36. ✓"
          }
        ],
        "hint_en": "Add coefficients 2 and 7 to get 9x, then divide 36 by 9.",
        "hint_ar": "أضف المعاملين 2 و7 للحصول على 9x، ثم اقسم 36 على 9.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor: x(2 + 7) = 36, so x × 9 = 36.",
            "explanation_ar": "Factor: x(2 + 7) = 36, so x × 9 = 36."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Divide: x = 36 ÷ 9 = 4.",
            "explanation_ar": "Divide: x = 36 ÷ 9 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "2(4) = 8 and 7(4) = 28; sum = 36. ✓",
            "explanation_ar": "2(4) = 8 and 7(4) = 28; sum = 36. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = 4.",
            "explanation_ar": "x = 4."
          }
        ],
        "hint_en": "Factor out x and compute 2 + 7 = 9.",
        "hint_ar": "استخرج x واحسب 2 + 7 = 9.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "2 yellow x-blocks and 7 green x-blocks total 36 units.",
            "explanation_ar": "2 yellow x-blocks and 7 green x-blocks total 36 units."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "9 blocks weigh 36 total; each block = 36 ÷ 9 = 4.",
            "explanation_ar": "9 blocks weigh 36 total; each block = 36 ÷ 9 = 4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Every x-block, regardless of color, equals 4.",
            "explanation_ar": "Every x-block, regardless of color, equals 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "2(4) + 7(4) = 8 + 28 = 36. ✓",
            "explanation_ar": "2(4) + 7(4) = 8 + 28 = 36. ✓"
          }
        ],
        "hint_en": "Count 9 total x-blocks and share 36 among them.",
        "hint_ar": "عدّ 9 مكعبات x إجمالاً وقسّم 36 عليها.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-011",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 6x + 4 = −8",
    "question_ar": "حل من أجل x: 6x + 4 = −8 ؟",
    "answer": -2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 4 from both sides: 6x = −8 − 4 = −12.",
            "explanation_ar": "Subtract 4 from both sides: 6x = −8 − 4 = −12."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 6: x = −12 ÷ 6 = −2.",
            "explanation_ar": "Divide both sides by 6: x = −12 ÷ 6 = −2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 6(−2) + 4 = −12 + 4 = −8. ✓",
            "explanation_ar": "Verify: 6(−2) + 4 = −12 + 4 = −8. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = −2 is the solution.",
            "explanation_ar": "x = −2 is the solution."
          }
        ],
        "hint_en": "Subtract 4 from both sides; the right becomes −12, giving x = −2.",
        "hint_ar": "اطرح 4 من كلا الطرفين؛ يصبح الجانب الأيمن −12، مما يعطي x = −2.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو −2"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "6x needs to equal −8 − 4 = −12.",
            "explanation_ar": "6x needs to equal −8 − 4 = −12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = −12 ÷ 6 = −2.",
            "explanation_ar": "x = −12 ÷ 6 = −2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "A negative answer is fine — check: 6(−2) = −12, and −12 + 4 = −8. ✓",
            "explanation_ar": "A negative answer is fine — check: 6(−2) = −12, and −12 + 4 = −8. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = −2.",
            "explanation_ar": "x = −2."
          }
        ],
        "hint_en": "Negative values are allowed; −12 ÷ 6 = −2.",
        "hint_ar": "القيم السالبة مسموح بها؛ −12 ÷ 6 = −2.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو −2"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Scale: 6 x-blocks and a +4 block on the left; −8 on the right.",
            "explanation_ar": "Scale: 6 x-blocks and a +4 block on the left; −8 on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove the +4 block from both sides: left = 6 x-blocks, right = −12.",
            "explanation_ar": "Remove the +4 block from both sides: left = 6 x-blocks, right = −12."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each x-block weighs −12 ÷ 6 = −2 (negative weight means opposite direction).",
            "explanation_ar": "Each x-block weighs −12 ÷ 6 = −2 (negative weight means opposite direction)."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "6(−2) + 4 = −8. ✓",
            "explanation_ar": "6(−2) + 4 = −8. ✓"
          }
        ],
        "hint_en": "Subtract 4 to find 6x = −12, then each block = −2.",
        "hint_ar": "اطرح 4 لتجد 6x = −12، ثم كل مكعب = −2.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو −2"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-012",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 4(x + 5) = 28",
    "question_ar": "حل من أجل x: 4(x + 5) = 28 ؟",
    "answer": 2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by 4: x + 5 = 28 ÷ 4 = 7.",
            "explanation_ar": "Divide both sides by 4: x + 5 = 28 ÷ 4 = 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 5: x = 7 − 5 = 2.",
            "explanation_ar": "Subtract 5: x = 7 − 5 = 2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 4(2 + 5) = 4(7) = 28. ✓",
            "explanation_ar": "Verify: 4(2 + 5) = 4(7) = 28. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 2.",
            "explanation_ar": "x = 2."
          }
        ],
        "hint_en": "Divide by 4 first, then subtract 5.",
        "hint_ar": "اقسم على 4 أولاً، ثم اطرح 5.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "4 groups of (x + 5) = 28; each group = 28 ÷ 4 = 7.",
            "explanation_ar": "4 groups of (x + 5) = 28; each group = 28 ÷ 4 = 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x + 5 = 7.",
            "explanation_ar": "x + 5 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "x = 7 − 5 = 2.",
            "explanation_ar": "x = 7 − 5 = 2."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4(2 + 5) = 4 × 7 = 28. ✓",
            "explanation_ar": "Check: 4(2 + 5) = 4 × 7 = 28. ✓"
          }
        ],
        "hint_en": "Each of the 4 groups equals 7; then solve x + 5 = 7.",
        "hint_ar": "كل مجموعة من المجموعات الأربع تساوي 7؛ ثم حل x + 5 = 7.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Four bags each contain x stones plus 5 extra; total stones = 28.",
            "explanation_ar": "Four bags each contain x stones plus 5 extra; total stones = 28."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each bag = 28 ÷ 4 = 7 stones, so x + 5 = 7.",
            "explanation_ar": "Each bag = 28 ÷ 4 = 7 stones, so x + 5 = 7."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remove 5 stones: x = 2.",
            "explanation_ar": "Remove 5 stones: x = 2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "4(2 + 5) = 4 × 7 = 28. ✓",
            "explanation_ar": "4(2 + 5) = 4 × 7 = 28. ✓"
          }
        ],
        "hint_en": "Split 28 into 4 equal bags; each bag holds 7, so x = 2.",
        "hint_ar": "قسّم 28 على 4 حقائب متساوية؛ كل حقيبة تحوي 7، إذن x = 2.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-013",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: x/4 − 3 = 2",
    "question_ar": "حل من أجل x: x/4 − 3 = 2 ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 3 to both sides: x/4 = 2 + 3 = 5.",
            "explanation_ar": "Add 3 to both sides: x/4 = 2 + 3 = 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 4: x = 5 × 4 = 20.",
            "explanation_ar": "Multiply both sides by 4: x = 5 × 4 = 20."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 20/4 − 3 = 5 − 3 = 2. ✓",
            "explanation_ar": "Verify: 20/4 − 3 = 5 − 3 = 2. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 20.",
            "explanation_ar": "x = 20."
          }
        ],
        "hint_en": "Add 3 to both sides first, then multiply by 4.",
        "hint_ar": "أضف 3 إلى كلا الطرفين أولاً، ثم اضرب في 4.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "x/4 must equal 2 + 3 = 5.",
            "explanation_ar": "x/4 must equal 2 + 3 = 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "What number divided by 4 is 5? x = 5 × 4 = 20.",
            "explanation_ar": "What number divided by 4 is 5? x = 5 × 4 = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20 ÷ 4 = 5; 5 − 3 = 2. ✓",
            "explanation_ar": "20 ÷ 4 = 5; 5 − 3 = 2. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = 20.",
            "explanation_ar": "x = 20."
          }
        ],
        "hint_en": "Find x/4 = 5 first, then x = 20.",
        "hint_ar": "ابحث عن x/4 = 5 أولاً، ثم x = 20.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "x is divided into 4 equal strips; one strip minus 3 gives 2.",
            "explanation_ar": "x is divided into 4 equal strips; one strip minus 3 gives 2."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "One strip = 2 + 3 = 5.",
            "explanation_ar": "One strip = 2 + 3 = 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Four strips: x = 4 × 5 = 20.",
            "explanation_ar": "Four strips: x = 4 × 5 = 20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "20 ÷ 4 − 3 = 5 − 3 = 2. ✓",
            "explanation_ar": "20 ÷ 4 − 3 = 5 − 3 = 2. ✓"
          }
        ],
        "hint_en": "One strip equals 5; four strips equal x = 20.",
        "hint_ar": "شريط واحد يساوي 5؛ أربعة أشرطة تساوي x = 20.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-014",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 7x − 3 = −10",
    "question_ar": "حل من أجل x: 7x − 3 = −10 ؟",
    "answer": -1,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 3 to both sides: 7x = −10 + 3 = −7.",
            "explanation_ar": "Add 3 to both sides: 7x = −10 + 3 = −7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 7: x = −7 ÷ 7 = −1.",
            "explanation_ar": "Divide both sides by 7: x = −7 ÷ 7 = −1."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 7(−1) − 3 = −7 − 3 = −10. ✓",
            "explanation_ar": "Verify: 7(−1) − 3 = −7 − 3 = −10. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = −1.",
            "explanation_ar": "x = −1."
          }
        ],
        "hint_en": "Add 3 to both sides; then −7 ÷ 7 = −1.",
        "hint_ar": "أضف 3 إلى كلا الطرفين؛ ثم −7 ÷ 7 = −1.",
        "result_en": "The answer is -1",
        "result_ar": "الجواب هو −1"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rearrange: 7x = −10 + 3 = −7.",
            "explanation_ar": "Rearrange: 7x = −10 + 3 = −7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = −7 ÷ 7 = −1.",
            "explanation_ar": "x = −7 ÷ 7 = −1."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7(−1) = −7; −7 − 3 = −10. ✓",
            "explanation_ar": "7(−1) = −7; −7 − 3 = −10. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = −1.",
            "explanation_ar": "x = −1."
          }
        ],
        "hint_en": "Move −3 to the right (add 3), then divide by 7.",
        "hint_ar": "انقل −3 إلى اليمين (أضف 3)، ثم اقسم على 7.",
        "result_en": "The answer is -1",
        "result_ar": "الجواب هو −1"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Scale: 7 x-blocks with a −3 offset on the left; −10 on the right.",
            "explanation_ar": "Scale: 7 x-blocks with a −3 offset on the left; −10 on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 3 to both sides: 7 x-blocks = −7.",
            "explanation_ar": "Add 3 to both sides: 7 x-blocks = −7."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each x-block = −7 ÷ 7 = −1.",
            "explanation_ar": "Each x-block = −7 ÷ 7 = −1."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "7(−1) − 3 = −10. ✓",
            "explanation_ar": "7(−1) − 3 = −10. ✓"
          }
        ],
        "hint_en": "After adding 3, split −7 among 7 blocks to get −1 each.",
        "hint_ar": "بعد إضافة 3، قسّم −7 على 7 مكعبات للحصول على −1 لكل منها.",
        "result_en": "The answer is -1",
        "result_ar": "الجواب هو −1"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-015",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 5(x − 2) = 30",
    "question_ar": "حل من أجل x: 5(x − 2) = 30 ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by 5: x − 2 = 30 ÷ 5 = 6.",
            "explanation_ar": "Divide both sides by 5: x − 2 = 30 ÷ 5 = 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 2 to both sides: x = 6 + 2 = 8.",
            "explanation_ar": "Add 2 to both sides: x = 6 + 2 = 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 5(8 − 2) = 5(6) = 30. ✓",
            "explanation_ar": "Verify: 5(8 − 2) = 5(6) = 30. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 8.",
            "explanation_ar": "x = 8."
          }
        ],
        "hint_en": "Divide by 5 first, then add 2.",
        "hint_ar": "اقسم على 5 أولاً، ثم أضف 2.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "5 groups of (x − 2) = 30; one group = 30 ÷ 5 = 6.",
            "explanation_ar": "5 groups of (x − 2) = 30; one group = 30 ÷ 5 = 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x − 2 = 6.",
            "explanation_ar": "x − 2 = 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "x = 6 + 2 = 8.",
            "explanation_ar": "x = 6 + 2 = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 5(8 − 2) = 5 × 6 = 30. ✓",
            "explanation_ar": "Check: 5(8 − 2) = 5 × 6 = 30. ✓"
          }
        ],
        "hint_en": "One group = 6; add 2 to find x.",
        "hint_ar": "مجموعة واحدة = 6؛ أضف 2 لإيجاد x.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Five bags each with (x − 2) stones total 30 stones.",
            "explanation_ar": "Five bags each with (x − 2) stones total 30 stones."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each bag = 30 ÷ 5 = 6 stones; so x − 2 = 6.",
            "explanation_ar": "Each bag = 30 ÷ 5 = 6 stones; so x − 2 = 6."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 2 stones back to each bag: x = 8.",
            "explanation_ar": "Add 2 stones back to each bag: x = 8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "5(8 − 2) = 5 × 6 = 30. ✓",
            "explanation_ar": "5(8 − 2) = 5 × 6 = 30. ✓"
          }
        ],
        "hint_en": "Each bag holds 6; add back the 2 removed stones to get x = 8.",
        "hint_ar": "كل حقيبة تحمل 6؛ أضف الحجرتين المُزالتين للحصول على x = 8.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-016",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 4x + 6x = 50",
    "question_ar": "حل من أجل x: 4x + 6x = 50 ؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combine like terms: 4x + 6x = 10x.",
            "explanation_ar": "Combine like terms: 4x + 6x = 10x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10x = 50.",
            "explanation_ar": "10x = 50."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 50 ÷ 10 = 5.",
            "explanation_ar": "x = 50 ÷ 10 = 5."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 4(5) + 6(5) = 20 + 30 = 50. ✓",
            "explanation_ar": "Verify: 4(5) + 6(5) = 20 + 30 = 50. ✓"
          }
        ],
        "hint_en": "4 + 6 = 10, so 10x = 50, giving x = 5.",
        "hint_ar": "4 + 6 = 10، إذن 10x = 50، مما يعطي x = 5.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor x: x(4 + 6) = 50, so 10x = 50.",
            "explanation_ar": "Factor x: x(4 + 6) = 50, so 10x = 50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = 50 ÷ 10 = 5.",
            "explanation_ar": "x = 50 ÷ 10 = 5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4(5) = 20 and 6(5) = 30; 20 + 30 = 50. ✓",
            "explanation_ar": "4(5) = 20 and 6(5) = 30; 20 + 30 = 50. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = 5.",
            "explanation_ar": "x = 5."
          }
        ],
        "hint_en": "Factor out x, add 4 + 6 = 10, divide 50 by 10.",
        "hint_ar": "استخرج x، أضف 4 + 6 = 10، اقسم 50 على 10.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "4 red x-blocks and 6 blue x-blocks total 50 units.",
            "explanation_ar": "4 red x-blocks and 6 blue x-blocks total 50 units."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "10 equal blocks share 50: each = 50 ÷ 10 = 5.",
            "explanation_ar": "10 equal blocks share 50: each = 50 ÷ 10 = 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "x = 5 for all blocks.",
            "explanation_ar": "x = 5 for all blocks."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "4(5) + 6(5) = 20 + 30 = 50. ✓",
            "explanation_ar": "4(5) + 6(5) = 20 + 30 = 50. ✓"
          }
        ],
        "hint_en": "10 total blocks hold 50; each block is worth 5.",
        "hint_ar": "10 مكعبات إجمالاً تحمل 50؛ كل مكعب يساوي 5.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-017",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 3x + 11 = 2",
    "question_ar": "حل من أجل x: 3x + 11 = 2 ؟",
    "answer": -3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 11 from both sides: 3x = 2 − 11 = −9.",
            "explanation_ar": "Subtract 11 from both sides: 3x = 2 − 11 = −9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 3: x = −9 ÷ 3 = −3.",
            "explanation_ar": "Divide both sides by 3: x = −9 ÷ 3 = −3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 3(−3) + 11 = −9 + 11 = 2. ✓",
            "explanation_ar": "Verify: 3(−3) + 11 = −9 + 11 = 2. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = −3.",
            "explanation_ar": "x = −3."
          }
        ],
        "hint_en": "Subtracting 11 gives 3x = −9; dividing by 3 gives x = −3.",
        "hint_ar": "طرح 11 يعطي 3x = −9؛ القسمة على 3 تعطي x = −3.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو −3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "3x = 2 − 11 = −9.",
            "explanation_ar": "3x = 2 − 11 = −9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = −9 ÷ 3 = −3.",
            "explanation_ar": "x = −9 ÷ 3 = −3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "−9 is negative, so x must be negative.",
            "explanation_ar": "−9 is negative, so x must be negative."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3(−3) + 11 = −9 + 11 = 2. ✓",
            "explanation_ar": "Check: 3(−3) + 11 = −9 + 11 = 2. ✓"
          }
        ],
        "hint_en": "3x equals a negative number −9; x = −3.",
        "hint_ar": "3x يساوي عدداً سالباً −9؛ x = −3.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو −3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Scale: 3 x-blocks and an 11-block on the left; 2 on the right.",
            "explanation_ar": "Scale: 3 x-blocks and an 11-block on the left; 2 on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove the 11-block: left = 3 x-blocks, right = 2 − 11 = −9.",
            "explanation_ar": "Remove the 11-block: left = 3 x-blocks, right = 2 − 11 = −9."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each x-block = −9 ÷ 3 = −3.",
            "explanation_ar": "Each x-block = −9 ÷ 3 = −3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "3(−3) + 11 = 2. ✓",
            "explanation_ar": "3(−3) + 11 = 2. ✓"
          }
        ],
        "hint_en": "After removing 11, the right side is −9; each of 3 blocks = −3.",
        "hint_ar": "بعد إزالة 11، الجانب الأيمن = −9؛ كل مكعب من 3 = −3.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو −3"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-018",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: x/2 − 5 = 3",
    "question_ar": "حل من أجل x: x/2 − 5 = 3 ؟",
    "answer": 16,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 5 to both sides: x/2 = 3 + 5 = 8.",
            "explanation_ar": "Add 5 to both sides: x/2 = 3 + 5 = 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 2: x = 8 × 2 = 16.",
            "explanation_ar": "Multiply both sides by 2: x = 8 × 2 = 16."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 16/2 − 5 = 8 − 5 = 3. ✓",
            "explanation_ar": "Verify: 16/2 − 5 = 8 − 5 = 3. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 16.",
            "explanation_ar": "x = 16."
          }
        ],
        "hint_en": "Add 5 first, then multiply by 2.",
        "hint_ar": "أضف 5 أولاً، ثم اضرب في 2.",
        "result_en": "The answer is 16",
        "result_ar": "الجواب هو 16"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "x/2 = 3 + 5 = 8.",
            "explanation_ar": "x/2 = 3 + 5 = 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = 8 × 2 = 16.",
            "explanation_ar": "x = 8 × 2 = 16."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Half of 16 is 8; 8 − 5 = 3. ✓",
            "explanation_ar": "Half of 16 is 8; 8 − 5 = 3. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = 16.",
            "explanation_ar": "x = 16."
          }
        ],
        "hint_en": "Half of x is 8; double that to find x = 16.",
        "hint_ar": "نصف x هو 8؛ ضاعف ذلك لتجد x = 16.",
        "result_en": "The answer is 16",
        "result_ar": "الجواب هو 16"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "x split into 2 equal halves; one half minus 5 equals 3.",
            "explanation_ar": "x split into 2 equal halves; one half minus 5 equals 3."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "One half = 3 + 5 = 8.",
            "explanation_ar": "One half = 3 + 5 = 8."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Both halves: x = 2 × 8 = 16.",
            "explanation_ar": "Both halves: x = 2 × 8 = 16."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "16 ÷ 2 − 5 = 8 − 5 = 3. ✓",
            "explanation_ar": "16 ÷ 2 − 5 = 8 − 5 = 3. ✓"
          }
        ],
        "hint_en": "Each half equals 8; multiply by 2 to get x = 16.",
        "hint_ar": "كل نصف يساوي 8؛ اضرب في 2 للحصول على x = 16.",
        "result_en": "The answer is 16",
        "result_ar": "الجواب هو 16"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-019",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 9x − 5 = 22",
    "question_ar": "حل من أجل x: 9x − 5 = 22 ؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 5 to both sides: 9x = 22 + 5 = 27.",
            "explanation_ar": "Add 5 to both sides: 9x = 22 + 5 = 27."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 9: x = 27 ÷ 9 = 3.",
            "explanation_ar": "Divide both sides by 9: x = 27 ÷ 9 = 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 9(3) − 5 = 27 − 5 = 22. ✓",
            "explanation_ar": "Verify: 9(3) − 5 = 27 − 5 = 22. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 3.",
            "explanation_ar": "x = 3."
          }
        ],
        "hint_en": "Add 5 to get 9x = 27, then divide by 9.",
        "hint_ar": "أضف 5 للحصول على 9x = 27، ثم اقسم على 9.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "9x = 22 + 5 = 27.",
            "explanation_ar": "9x = 22 + 5 = 27."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = 27 ÷ 9 = 3.",
            "explanation_ar": "x = 27 ÷ 9 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "9 × 3 = 27; 27 − 5 = 22. ✓",
            "explanation_ar": "9 × 3 = 27; 27 − 5 = 22. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = 3.",
            "explanation_ar": "x = 3."
          }
        ],
        "hint_en": "What times 9 gives 27? That is x.",
        "hint_ar": "ما الذي مضروباً في 9 يساوي 27؟ ذلك هو x.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "9 x-blocks minus a 5-block balance 22.",
            "explanation_ar": "9 x-blocks minus a 5-block balance 22."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add a 5-block to both sides: 9 x-blocks = 27.",
            "explanation_ar": "Add a 5-block to both sides: 9 x-blocks = 27."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "27 ÷ 9 = 3 per block.",
            "explanation_ar": "27 ÷ 9 = 3 per block."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "9(3) − 5 = 22. ✓",
            "explanation_ar": "9(3) − 5 = 22. ✓"
          }
        ],
        "hint_en": "Restore the 5-block on both sides; then each of 9 blocks = 3.",
        "hint_ar": "أعد مكعب 5 على كلا الجانبين؛ ثم كل مكعب من 9 = 3.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-020",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 2(x − 7) = −6",
    "question_ar": "حل من أجل x: 2(x − 7) = −6 ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by 2: x − 7 = −6 ÷ 2 = −3.",
            "explanation_ar": "Divide both sides by 2: x − 7 = −6 ÷ 2 = −3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 7 to both sides: x = −3 + 7 = 4.",
            "explanation_ar": "Add 7 to both sides: x = −3 + 7 = 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 2(4 − 7) = 2(−3) = −6. ✓",
            "explanation_ar": "Verify: 2(4 − 7) = 2(−3) = −6. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 4.",
            "explanation_ar": "x = 4."
          }
        ],
        "hint_en": "Divide by 2 first; −6 ÷ 2 = −3, then add 7.",
        "hint_ar": "اقسم على 2 أولاً؛ −6 ÷ 2 = −3، ثم أضف 7.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Two groups of (x − 7) = −6; one group = −6 ÷ 2 = −3.",
            "explanation_ar": "Two groups of (x − 7) = −6; one group = −6 ÷ 2 = −3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x − 7 = −3.",
            "explanation_ar": "x − 7 = −3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "x = −3 + 7 = 4.",
            "explanation_ar": "x = −3 + 7 = 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2(4 − 7) = 2(−3) = −6. ✓",
            "explanation_ar": "Check: 2(4 − 7) = 2(−3) = −6. ✓"
          }
        ],
        "hint_en": "One group is −3; add 7 to find x = 4.",
        "hint_ar": "مجموعة واحدة = −3؛ أضف 7 لإيجاد x = 4.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Two bags each contain (x − 7) stones; together they hold −6 (a deficit of 6).",
            "explanation_ar": "Two bags each contain (x − 7) stones; together they hold −6 (a deficit of 6)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each bag: −6 ÷ 2 = −3, so x − 7 = −3.",
            "explanation_ar": "Each bag: −6 ÷ 2 = −3, so x − 7 = −3."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 7 to restore: x = 4.",
            "explanation_ar": "Add 7 to restore: x = 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "2(4 − 7) = 2(−3) = −6. ✓",
            "explanation_ar": "2(4 − 7) = 2(−3) = −6. ✓"
          }
        ],
        "hint_en": "Each bag is at −3; adding back 7 gives x = 4.",
        "hint_ar": "كل حقيبة عند −3؛ إعادة 7 تعطي x = 4.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-021",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: x/6 + 1 = 4",
    "question_ar": "حل من أجل x: x/6 + 1 = 4 ؟",
    "answer": 18,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 1 from both sides: x/6 = 4 − 1 = 3.",
            "explanation_ar": "Subtract 1 from both sides: x/6 = 4 − 1 = 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 6: x = 3 × 6 = 18.",
            "explanation_ar": "Multiply both sides by 6: x = 3 × 6 = 18."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 18/6 + 1 = 3 + 1 = 4. ✓",
            "explanation_ar": "Verify: 18/6 + 1 = 3 + 1 = 4. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = 18.",
            "explanation_ar": "x = 18."
          }
        ],
        "hint_en": "Subtract 1, then multiply by 6.",
        "hint_ar": "اطرح 1، ثم اضرب في 6.",
        "result_en": "The answer is 18",
        "result_ar": "الجواب هو 18"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "x/6 = 4 − 1 = 3.",
            "explanation_ar": "x/6 = 4 − 1 = 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = 3 × 6 = 18.",
            "explanation_ar": "x = 3 × 6 = 18."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "18 ÷ 6 = 3; 3 + 1 = 4. ✓",
            "explanation_ar": "18 ÷ 6 = 3; 3 + 1 = 4. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = 18.",
            "explanation_ar": "x = 18."
          }
        ],
        "hint_en": "One-sixth of x is 3; multiply by 6 to get x = 18.",
        "hint_ar": "سُدس x هو 3؛ اضرب في 6 للحصول على x = 18.",
        "result_en": "The answer is 18",
        "result_ar": "الجواب هو 18"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "x is divided into 6 equal segments; one segment plus 1 = 4.",
            "explanation_ar": "x is divided into 6 equal segments; one segment plus 1 = 4."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "One segment = 4 − 1 = 3.",
            "explanation_ar": "One segment = 4 − 1 = 3."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Six segments: x = 6 × 3 = 18.",
            "explanation_ar": "Six segments: x = 6 × 3 = 18."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "18 ÷ 6 + 1 = 3 + 1 = 4. ✓",
            "explanation_ar": "18 ÷ 6 + 1 = 3 + 1 = 4. ✓"
          }
        ],
        "hint_en": "Each segment = 3; 6 segments = 18.",
        "hint_ar": "كل قطعة = 3؛ 6 قطع = 18.",
        "result_en": "The answer is 18",
        "result_ar": "الجواب هو 18"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-022",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 8x − 4 = −20",
    "question_ar": "حل من أجل x: 8x − 4 = −20 ؟",
    "answer": -2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 4 to both sides: 8x = −20 + 4 = −16.",
            "explanation_ar": "Add 4 to both sides: 8x = −20 + 4 = −16."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 8: x = −16 ÷ 8 = −2.",
            "explanation_ar": "Divide both sides by 8: x = −16 ÷ 8 = −2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 8(−2) − 4 = −16 − 4 = −20. ✓",
            "explanation_ar": "Verify: 8(−2) − 4 = −16 − 4 = −20. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "x = −2.",
            "explanation_ar": "x = −2."
          }
        ],
        "hint_en": "Add 4 to get 8x = −16, then x = −2.",
        "hint_ar": "أضف 4 للحصول على 8x = −16، ثم x = −2.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو −2"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "8x = −20 + 4 = −16.",
            "explanation_ar": "8x = −20 + 4 = −16."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = −16 ÷ 8 = −2.",
            "explanation_ar": "x = −16 ÷ 8 = −2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "8 × (−2) = −16; −16 − 4 = −20. ✓",
            "explanation_ar": "8 × (−2) = −16; −16 − 4 = −20. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = −2.",
            "explanation_ar": "x = −2."
          }
        ],
        "hint_en": "−16 ÷ 8 = −2; the negative sign carries through.",
        "hint_ar": "−16 ÷ 8 = −2؛ تنتقل الإشارة السالبة.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو −2"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Scale: 8 x-blocks minus a 4-block = −20.",
            "explanation_ar": "Scale: 8 x-blocks minus a 4-block = −20."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add a 4-block to both sides: 8 x-blocks = −16.",
            "explanation_ar": "Add a 4-block to both sides: 8 x-blocks = −16."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each x-block = −16 ÷ 8 = −2.",
            "explanation_ar": "Each x-block = −16 ÷ 8 = −2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "8(−2) − 4 = −20. ✓",
            "explanation_ar": "8(−2) − 4 = −20. ✓"
          }
        ],
        "hint_en": "8 blocks share −16; each block = −2.",
        "hint_ar": "8 مكعبات تشترك في −16؛ كل مكعب = −2.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو −2"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-medium-023",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "Solve for x: 5x + 3x = 56",
    "question_ar": "حل من أجل x: 5x + 3x = 56 ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combine like terms: 5x + 3x = 8x.",
            "explanation_ar": "Combine like terms: 5x + 3x = 8x."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "8x = 56.",
            "explanation_ar": "8x = 56."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "x = 56 ÷ 8 = 7.",
            "explanation_ar": "x = 56 ÷ 8 = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 5(7) + 3(7) = 35 + 21 = 56. ✓",
            "explanation_ar": "Verify: 5(7) + 3(7) = 35 + 21 = 56. ✓"
          }
        ],
        "hint_en": "5 + 3 = 8, so 8x = 56, giving x = 7.",
        "hint_ar": "5 + 3 = 8، إذن 8x = 56، مما يعطي x = 7.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor: x(5 + 3) = 56, so 8x = 56.",
            "explanation_ar": "Factor: x(5 + 3) = 56, so 8x = 56."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "x = 56 ÷ 8 = 7.",
            "explanation_ar": "x = 56 ÷ 8 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "5(7) = 35 and 3(7) = 21; 35 + 21 = 56. ✓",
            "explanation_ar": "5(7) = 35 and 3(7) = 21; 35 + 21 = 56. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "x = 7.",
            "explanation_ar": "x = 7."
          }
        ],
        "hint_en": "Factor out x, add 5 + 3 = 8, then divide 56 by 8.",
        "hint_ar": "استخرج x، أضف 5 + 3 = 8، ثم اقسم 56 على 8.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "5 orange x-blocks and 3 purple x-blocks together hold 56 units.",
            "explanation_ar": "5 orange x-blocks and 3 purple x-blocks together hold 56 units."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "8 equal blocks share 56: each = 56 ÷ 8 = 7.",
            "explanation_ar": "8 equal blocks share 56: each = 56 ÷ 8 = 7."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Every x-block equals 7.",
            "explanation_ar": "Every x-block equals 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "5(7) + 3(7) = 35 + 21 = 56. ✓",
            "explanation_ar": "5(7) + 3(7) = 35 + 21 = 56. ✓"
          }
        ],
        "hint_en": "8 total blocks hold 56; each block is worth 7.",
        "hint_ar": "8 مكعبات إجمالاً تحمل 56؛ كل مكعب يساوي 7.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-001",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: -3x + 15 = 6",
    "question_ar": "حل من أجل x: -3x + 15 = 6 ؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify the equation: -3x + 15 = 6. The unknown is multiplied by -3 and 15 is added.",
            "explanation_ar": "Identify the equation: -3x + 15 = 6. The unknown is multiplied by -3 and 15 is added."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 15 from both sides: -3x + 15 - 15 = 6 - 15, giving -3x = -9.",
            "explanation_ar": "Subtract 15 from both sides: -3x + 15 - 15 = 6 - 15, giving -3x = -9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by -3: x = -9 ÷ -3 = 3.",
            "explanation_ar": "Divide both sides by -3: x = -9 ÷ -3 = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: -3(3) + 15 = -9 + 15 = 6. ✓",
            "explanation_ar": "Verify: -3(3) + 15 = -9 + 15 = 6. ✓"
          }
        ],
        "hint_en": "Subtract 15 first, then divide by -3.",
        "hint_ar": "اطرح 15 أولاً، ثم اقسم على -3.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Decompose -3x + 15 = 6 into two operations: first a multiplication by -3, then an addition of 15.",
            "explanation_ar": "Decompose -3x + 15 = 6 into two operations: first a multiplication by -3, then an addition of 15."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the addition: subtract 15 from 6 to get -9. Now the equation is -3x = -9.",
            "explanation_ar": "Undo the addition: subtract 15 from 6 to get -9. Now the equation is -3x = -9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo the multiplication: divide -9 by -3. A negative divided by a negative gives a positive: x = 3.",
            "explanation_ar": "Undo the multiplication: divide -9 by -3. A negative divided by a negative gives a positive: x = 3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check by substitution: -3 × 3 = -9, then -9 + 15 = 6. Correct. ✓",
            "explanation_ar": "Check by substitution: -3 × 3 = -9, then -9 + 15 = 6. Correct. ✓"
          }
        ],
        "hint_en": "Reverse each operation in reverse order: subtraction undoes addition, division undoes multiplication.",
        "hint_ar": "اعكس كل عملية بترتيب عكسي: الطرح يلغي الجمع، والقسمة تلغي الضرب.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a balance scale. Left pan holds -3x + 15, right pan holds 6.",
            "explanation_ar": "Draw a balance scale. Left pan holds -3x + 15, right pan holds 6."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 15 from both pans: left pan becomes -3x, right pan becomes 6 - 15 = -9.",
            "explanation_ar": "Remove 15 from both pans: left pan becomes -3x, right pan becomes 6 - 15 = -9."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Split the left pan into 3 equal negative groups: each group equals -9 ÷ 3 = -3. Since each group is -x, then -x = -3, so x = 3.",
            "explanation_ar": "Split the left pan into 3 equal negative groups: each group equals -9 ÷ 3 = -3. Since each group is -x, then -x = -3, so x = 3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Recheck the balance: -3(3) + 15 = -9 + 15 = 6. Both pans equal 6. ✓",
            "explanation_ar": "Recheck the balance: -3(3) + 15 = -9 + 15 = 6. Both pans equal 6. ✓"
          }
        ],
        "hint_en": "Picture the balance scale and remove 15 from both sides to isolate the -3x term.",
        "hint_ar": "تخيل ميزان متوازن وأزل 15 من كلا الجانبين لعزل الحد -3x.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-002",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 7x + 14 = -7",
    "question_ar": "حل من أجل x: 7x + 14 = -7 ؟",
    "answer": -3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify the equation: 7x + 14 = -7. The unknown is multiplied by 7 and 14 is added.",
            "explanation_ar": "Identify the equation: 7x + 14 = -7. The unknown is multiplied by 7 and 14 is added."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 14 from both sides: 7x + 14 - 14 = -7 - 14, giving 7x = -21.",
            "explanation_ar": "Subtract 14 from both sides: 7x + 14 - 14 = -7 - 14, giving 7x = -21."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 7: x = -21 ÷ 7 = -3.",
            "explanation_ar": "Divide both sides by 7: x = -21 ÷ 7 = -3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 7(-3) + 14 = -21 + 14 = -7. ✓",
            "explanation_ar": "Verify: 7(-3) + 14 = -21 + 14 = -7. ✓"
          }
        ],
        "hint_en": "Subtract 14 from both sides, then divide by 7.",
        "hint_ar": "اطرح 14 من كلا الجانبين، ثم اقسم على 7.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو -3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break the equation 7x + 14 = -7 into two steps: multiplying x by 7 and adding 14.",
            "explanation_ar": "Break the equation 7x + 14 = -7 into two steps: multiplying x by 7 and adding 14."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the addition of 14 by subtracting 14 from -7: -7 - 14 = -21. Equation becomes 7x = -21.",
            "explanation_ar": "Undo the addition of 14 by subtracting 14 from -7: -7 - 14 = -21. Equation becomes 7x = -21."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo the multiplication by 7: divide -21 by 7. Since -21 ÷ 7 = -3, we get x = -3.",
            "explanation_ar": "Undo the multiplication by 7: divide -21 by 7. Since -21 ÷ 7 = -3, we get x = -3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 7 × (-3) + 14 = -21 + 14 = -7. Correct. ✓",
            "explanation_ar": "Substitute back: 7 × (-3) + 14 = -21 + 14 = -7. Correct. ✓"
          }
        ],
        "hint_en": "Work backwards: undo addition first, then undo multiplication.",
        "hint_ar": "اعمل بشكل عكسي: تراجع عن الجمع أولاً، ثم تراجع عن الضرب.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو -3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a balance scale with 7x + 14 on the left and -7 on the right.",
            "explanation_ar": "Draw a balance scale with 7x + 14 on the left and -7 on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Take 14 away from both sides: left pan shows 7x, right pan shows -7 - 14 = -21.",
            "explanation_ar": "Take 14 away from both sides: left pan shows 7x, right pan shows -7 - 14 = -21."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Divide both pans into 7 equal parts: each part on the left is x, each part on the right is -21 ÷ 7 = -3.",
            "explanation_ar": "Divide both pans into 7 equal parts: each part on the left is x, each part on the right is -21 ÷ 7 = -3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "So x = -3. Check: 7(-3) + 14 = -21 + 14 = -7. Balance holds. ✓",
            "explanation_ar": "So x = -3. Check: 7(-3) + 14 = -21 + 14 = -7. Balance holds. ✓"
          }
        ],
        "hint_en": "Remove 14 from both sides of the scale, then split into 7 equal groups.",
        "hint_ar": "أزل 14 من كلا جانبي الميزان، ثم قسّم إلى 7 مجموعات متساوية.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو -3"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-003",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 20 - 4x = 8",
    "question_ar": "حل من أجل x: 20 - 4x = 8 ؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Start with 20 - 4x = 8. Isolate the term with x by subtracting 20 from both sides.",
            "explanation_ar": "Start with 20 - 4x = 8. Isolate the term with x by subtracting 20 from both sides."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "20 - 4x - 20 = 8 - 20 gives -4x = -12.",
            "explanation_ar": "20 - 4x - 20 = 8 - 20 gives -4x = -12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by -4: x = -12 ÷ -4 = 3.",
            "explanation_ar": "Divide both sides by -4: x = -12 ÷ -4 = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 20 - 4(3) = 20 - 12 = 8. ✓",
            "explanation_ar": "Verify: 20 - 4(3) = 20 - 12 = 8. ✓"
          }
        ],
        "hint_en": "Subtract 20 from both sides to get -4x alone, then divide by -4.",
        "hint_ar": "اطرح 20 من كلا الجانبين للحصول على -4x منفردة، ثم اقسم على -4.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite 20 - 4x = 8 as 20 + (-4x) = 8 to clarify the negative coefficient.",
            "explanation_ar": "Rewrite 20 - 4x = 8 as 20 + (-4x) = 8 to clarify the negative coefficient."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 20 from both sides: -4x = 8 - 20 = -12.",
            "explanation_ar": "Subtract 20 from both sides: -4x = 8 - 20 = -12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide -12 by -4: negative ÷ negative = positive, so x = 3.",
            "explanation_ar": "Divide -12 by -4: negative ÷ negative = positive, so x = 3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 20 - 4(3) = 20 - 12 = 8. ✓",
            "explanation_ar": "Check: 20 - 4(3) = 20 - 12 = 8. ✓"
          }
        ],
        "hint_en": "Think of the equation as 20 plus a negative term equals 8.",
        "hint_ar": "فكر في المعادلة على أنها 20 زائد حد سالب يساوي 8.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a number line: starting at 20, subtracting 4 groups of x lands at 8.",
            "explanation_ar": "Picture a number line: starting at 20, subtracting 4 groups of x lands at 8."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The gap between 20 and 8 is 12, which must equal 4x. So 4x = 12.",
            "explanation_ar": "The gap between 20 and 8 is 12, which must equal 4x. So 4x = 12."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Divide 12 into 4 equal groups: each group is 3. Therefore x = 3.",
            "explanation_ar": "Divide 12 into 4 equal groups: each group is 3. Therefore x = 3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Confirm: 20 - 4(3) = 20 - 12 = 8. The number line check works. ✓",
            "explanation_ar": "Confirm: 20 - 4(3) = 20 - 12 = 8. The number line check works. ✓"
          }
        ],
        "hint_en": "Find the gap between 20 and 8, then divide by 4.",
        "hint_ar": "أوجد الفجوة بين 20 و8، ثم اقسم على 4.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-004",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 5x + 3 = 2x + 12",
    "question_ar": "حل من أجل x: 5x + 3 = 2x + 12 ؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Move all x terms to one side: subtract 2x from both sides. 5x - 2x + 3 = 12 gives 3x + 3 = 12.",
            "explanation_ar": "Move all x terms to one side: subtract 2x from both sides. 5x - 2x + 3 = 12 gives 3x + 3 = 12."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 3 from both sides: 3x = 12 - 3 = 9.",
            "explanation_ar": "Subtract 3 from both sides: 3x = 12 - 3 = 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 3: x = 9 ÷ 3 = 3.",
            "explanation_ar": "Divide both sides by 3: x = 9 ÷ 3 = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 5(3) + 3 = 18 and 2(3) + 12 = 18. Both sides equal 18. ✓",
            "explanation_ar": "Verify: 5(3) + 3 = 18 and 2(3) + 12 = 18. Both sides equal 18. ✓"
          }
        ],
        "hint_en": "Collect x terms on one side by subtracting 2x from both sides.",
        "hint_ar": "اجمع حدود x في جانب واحد بطرح 2x من كلا الجانبين.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Identify that x appears on both sides of 5x + 3 = 2x + 12.",
            "explanation_ar": "Identify that x appears on both sides of 5x + 3 = 2x + 12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 2x from the right side and the left side: 5x - 2x = 3x, leaving 3x + 3 = 12.",
            "explanation_ar": "Subtract 2x from the right side and the left side: 5x - 2x = 3x, leaving 3x + 3 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Subtract 3 from both sides: 3x = 9. Then divide by 3: x = 3.",
            "explanation_ar": "Subtract 3 from both sides: 3x = 9. Then divide by 3: x = 3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: left = 5(3) + 3 = 18; right = 2(3) + 12 = 18. Equal. ✓",
            "explanation_ar": "Substitute: left = 5(3) + 3 = 18; right = 2(3) + 12 = 18. Equal. ✓"
          }
        ],
        "hint_en": "Get all x's on the left by subtracting 2x, then solve the two-step equation.",
        "hint_ar": "احصل على جميع x في الجانب الأيسر بطرح 2x، ثم حل المعادلة ذات الخطوتين.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a balance: left side has 5 x-tiles and 3 unit tiles; right side has 2 x-tiles and 12 unit tiles.",
            "explanation_ar": "Draw a balance: left side has 5 x-tiles and 3 unit tiles; right side has 2 x-tiles and 12 unit tiles."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 2 x-tiles from each pan: left becomes 3 x-tiles + 3 units; right becomes 12 units.",
            "explanation_ar": "Remove 2 x-tiles from each pan: left becomes 3 x-tiles + 3 units; right becomes 12 units."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remove 3 unit tiles from each pan: left becomes 3 x-tiles; right becomes 9 units.",
            "explanation_ar": "Remove 3 unit tiles from each pan: left becomes 3 x-tiles; right becomes 9 units."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Three x-tiles balance 9 units, so one x-tile = 3. Verify: 5(3)+3=18, 2(3)+12=18. ✓",
            "explanation_ar": "Three x-tiles balance 9 units, so one x-tile = 3. Verify: 5(3)+3=18, 2(3)+12=18. ✓"
          }
        ],
        "hint_en": "Use balance tiles to remove matching x-tiles and unit tiles from both sides.",
        "hint_ar": "استخدم بلاطات الميزان لإزالة بلاطات x والوحدات المتطابقة من كلا الجانبين.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-005",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 3(2x - 4) = 18",
    "question_ar": "حل من أجل x: 3(2x - 4) = 18 ؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by 3 to remove the outer factor: 2x - 4 = 18 ÷ 3 = 6.",
            "explanation_ar": "Divide both sides by 3 to remove the outer factor: 2x - 4 = 18 ÷ 3 = 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 4 to both sides: 2x = 6 + 4 = 10.",
            "explanation_ar": "Add 4 to both sides: 2x = 6 + 4 = 10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 2: x = 10 ÷ 2 = 5.",
            "explanation_ar": "Divide both sides by 2: x = 10 ÷ 2 = 5."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 3(2(5) - 4) = 3(10 - 4) = 3(6) = 18. ✓",
            "explanation_ar": "Verify: 3(2(5) - 4) = 3(10 - 4) = 3(6) = 18. ✓"
          }
        ],
        "hint_en": "Divide by 3 first to simplify, then solve the two-step equation.",
        "hint_ar": "اقسم على 3 أولاً للتبسيط، ثم حل المعادلة ذات الخطوتين.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Expand the brackets: 3 × 2x = 6x and 3 × (-4) = -12, so 6x - 12 = 18.",
            "explanation_ar": "Expand the brackets: 3 × 2x = 6x and 3 × (-4) = -12, so 6x - 12 = 18."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add 12 to both sides: 6x = 18 + 12 = 30.",
            "explanation_ar": "Add 12 to both sides: 6x = 18 + 12 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide both sides by 6: x = 30 ÷ 6 = 5.",
            "explanation_ar": "Divide both sides by 6: x = 30 ÷ 6 = 5."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3(2(5) - 4) = 3(6) = 18. ✓",
            "explanation_ar": "Check: 3(2(5) - 4) = 3(6) = 18. ✓"
          }
        ],
        "hint_en": "Distribute the 3 into the brackets, then isolate x.",
        "hint_ar": "وزّع الـ 3 داخل القوسين، ثم عزل x.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 3 identical bags, each containing (2x - 4) items. Together they total 18 items.",
            "explanation_ar": "Imagine 3 identical bags, each containing (2x - 4) items. Together they total 18 items."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each bag holds 18 ÷ 3 = 6 items. So 2x - 4 = 6.",
            "explanation_ar": "Each bag holds 18 ÷ 3 = 6 items. So 2x - 4 = 6."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 4 to both sides of the bag's equation: 2x = 10.",
            "explanation_ar": "Add 4 to both sides of the bag's equation: 2x = 10."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Split 10 into 2 equal parts: x = 5. Verify: 3(2×5-4) = 3×6 = 18. ✓",
            "explanation_ar": "Split 10 into 2 equal parts: x = 5. Verify: 3(2×5-4) = 3×6 = 18. ✓"
          }
        ],
        "hint_en": "Think of 3 identical bags totaling 18; find what's inside one bag first.",
        "hint_ar": "فكر في 3 أكياس متطابقة مجموعها 18؛ أوجد محتوى كيس واحد أولاً.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-006",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: x/3 - 5 = -2",
    "question_ar": "حل من أجل x: x/3 - 5 = -2 ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 5 to both sides of x/3 - 5 = -2: x/3 = -2 + 5 = 3.",
            "explanation_ar": "Add 5 to both sides of x/3 - 5 = -2: x/3 = -2 + 5 = 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 3 to isolate x: x = 3 × 3 = 9.",
            "explanation_ar": "Multiply both sides by 3 to isolate x: x = 3 × 3 = 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "No further steps needed.",
            "explanation_ar": "No further steps needed."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 9/3 - 5 = 3 - 5 = -2. ✓",
            "explanation_ar": "Verify: 9/3 - 5 = 3 - 5 = -2. ✓"
          }
        ],
        "hint_en": "Add 5 to both sides first, then multiply by 3.",
        "hint_ar": "أضف 5 إلى كلا الجانبين أولاً، ثم اضرب في 3.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Identify the two operations on x in x/3 - 5 = -2: divide by 3, then subtract 5.",
            "explanation_ar": "Identify the two operations on x in x/3 - 5 = -2: divide by 3, then subtract 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo subtracting 5 by adding 5 to both sides: x/3 = 3.",
            "explanation_ar": "Undo subtracting 5 by adding 5 to both sides: x/3 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo dividing by 3 by multiplying both sides by 3: x = 9.",
            "explanation_ar": "Undo dividing by 3 by multiplying both sides by 3: x = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 9/3 - 5 = 3 - 5 = -2. ✓",
            "explanation_ar": "Substitute: 9/3 - 5 = 3 - 5 = -2. ✓"
          }
        ],
        "hint_en": "Undo operations in reverse order: add 5 first, then multiply by 3.",
        "hint_ar": "تراجع عن العمليات بترتيب عكسي: أضف 5 أولاً، ثم اضرب في 3.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture x divided into 3 equal parts. Remove 5 from one part and you get -2.",
            "explanation_ar": "Picture x divided into 3 equal parts. Remove 5 from one part and you get -2."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 5 back to -2: one part (x/3) equals 3.",
            "explanation_ar": "Add 5 back to -2: one part (x/3) equals 3."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Three parts together give x: 3 × 3 = 9.",
            "explanation_ar": "Three parts together give x: 3 × 3 = 9."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Confirm: 9/3 - 5 = 3 - 5 = -2. ✓",
            "explanation_ar": "Confirm: 9/3 - 5 = 3 - 5 = -2. ✓"
          }
        ],
        "hint_en": "Think of x/3 as one third of x, then scale back up by multiplying by 3.",
        "hint_ar": "فكر في x/3 كثلث x، ثم تدرّج للأعلى بالضرب في 3.",
        "result_en": "The answer is 9",
        "result_ar": "الجواب هو 9"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-007",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: -5x + 2 = 27",
    "question_ar": "حل من أجل x: -5x + 2 = 27 ؟",
    "answer": -5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 2 from both sides: -5x + 2 - 2 = 27 - 2, giving -5x = 25.",
            "explanation_ar": "Subtract 2 from both sides: -5x + 2 - 2 = 27 - 2, giving -5x = 25."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by -5: x = 25 ÷ (-5) = -5.",
            "explanation_ar": "Divide both sides by -5: x = 25 ÷ (-5) = -5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "A positive divided by a negative gives a negative result.",
            "explanation_ar": "A positive divided by a negative gives a negative result."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: -5(-5) + 2 = 25 + 2 = 27. ✓",
            "explanation_ar": "Verify: -5(-5) + 2 = 25 + 2 = 27. ✓"
          }
        ],
        "hint_en": "Subtract 2 from both sides, then divide by -5 remembering the sign changes.",
        "hint_ar": "اطرح 2 من كلا الجانبين، ثم اقسم على -5 مع تذكر تغيير الإشارة.",
        "result_en": "The answer is -5",
        "result_ar": "الجواب هو -5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break -5x + 2 = 27 into two operations: multiply x by -5 and add 2.",
            "explanation_ar": "Break -5x + 2 = 27 into two operations: multiply x by -5 and add 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Reverse the addition: subtract 2 from 27 to get 25. Equation: -5x = 25.",
            "explanation_ar": "Reverse the addition: subtract 2 from 27 to get 25. Equation: -5x = 25."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Reverse the multiplication: divide 25 by -5. Result: x = -5.",
            "explanation_ar": "Reverse the multiplication: divide 25 by -5. Result: x = -5."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Back-check: -5 × (-5) + 2 = 25 + 2 = 27. ✓",
            "explanation_ar": "Back-check: -5 × (-5) + 2 = 25 + 2 = 27. ✓"
          }
        ],
        "hint_en": "Subtract 2 to isolate the -5x term, then divide noting positive ÷ negative = negative.",
        "hint_ar": "اطرح 2 لعزل الحد -5x، ثم اقسم مع ملاحظة أن الموجب ÷ السالب = سالب.",
        "result_en": "The answer is -5",
        "result_ar": "الجواب هو -5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance scale: left = -5x + 2, right = 27.",
            "explanation_ar": "Balance scale: left = -5x + 2, right = 27."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 2 unit tiles from both pans: left = -5x, right = 25.",
            "explanation_ar": "Remove 2 unit tiles from both pans: left = -5x, right = 25."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Flip 5 negative x-tiles to positive: 5x = 25. Divide both sides by 5: x = 5. But original tiles were negative, so x = -5.",
            "explanation_ar": "Flip 5 negative x-tiles to positive: 5x = 25. Divide both sides by 5: x = 5. But original tiles were negative, so x = -5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: -5(-5) + 2 = 25 + 2 = 27. ✓",
            "explanation_ar": "Verify: -5(-5) + 2 = 25 + 2 = 27. ✓"
          }
        ],
        "hint_en": "Remove 2 from both sides, then handle the sign of the x coefficient carefully.",
        "hint_ar": "أزل 2 من كلا الجانبين، ثم تعامل بعناية مع إشارة معامل x.",
        "result_en": "The answer is -5",
        "result_ar": "الجواب هو -5"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-008",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 4x + 9 = -11",
    "question_ar": "حل من أجل x: 4x + 9 = -11 ؟",
    "answer": -5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 9 from both sides: 4x + 9 - 9 = -11 - 9, giving 4x = -20.",
            "explanation_ar": "Subtract 9 from both sides: 4x + 9 - 9 = -11 - 9, giving 4x = -20."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 4: x = -20 ÷ 4 = -5.",
            "explanation_ar": "Divide both sides by 4: x = -20 ÷ 4 = -5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "A negative divided by a positive gives a negative.",
            "explanation_ar": "A negative divided by a positive gives a negative."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 4(-5) + 9 = -20 + 9 = -11. ✓",
            "explanation_ar": "Verify: 4(-5) + 9 = -20 + 9 = -11. ✓"
          }
        ],
        "hint_en": "Subtract 9 from both sides, then divide by 4.",
        "hint_ar": "اطرح 9 من كلا الجانبين، ثم اقسم على 4.",
        "result_en": "The answer is -5",
        "result_ar": "الجواب هو -5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Two operations act on x in 4x + 9 = -11: multiply by 4 and add 9.",
            "explanation_ar": "Two operations act on x in 4x + 9 = -11: multiply by 4 and add 9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo adding 9: subtract 9 from -11 to get -20. Equation becomes 4x = -20.",
            "explanation_ar": "Undo adding 9: subtract 9 from -11 to get -20. Equation becomes 4x = -20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo multiplying by 4: divide -20 by 4. Result x = -5.",
            "explanation_ar": "Undo multiplying by 4: divide -20 by 4. Result x = -5."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 4(-5) + 9 = -20 + 9 = -11. ✓",
            "explanation_ar": "Substitute: 4(-5) + 9 = -20 + 9 = -11. ✓"
          }
        ],
        "hint_en": "Subtract 9 first to undo the addition, then divide by 4.",
        "hint_ar": "اطرح 9 أولاً لإلغاء الجمع، ثم اقسم على 4.",
        "result_en": "The answer is -5",
        "result_ar": "الجواب هو -5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance scale: 4 x-tiles + 9 unit tiles on the left; -11 on the right.",
            "explanation_ar": "Balance scale: 4 x-tiles + 9 unit tiles on the left; -11 on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 9 unit tiles from both sides: left = 4 x-tiles, right = -11 - 9 = -20.",
            "explanation_ar": "Remove 9 unit tiles from both sides: left = 4 x-tiles, right = -11 - 9 = -20."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Split -20 into 4 equal groups: each group = -5. Each x-tile represents -5.",
            "explanation_ar": "Split -20 into 4 equal groups: each group = -5. Each x-tile represents -5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "So x = -5. Confirm: 4(-5) + 9 = -20 + 9 = -11. ✓",
            "explanation_ar": "So x = -5. Confirm: 4(-5) + 9 = -20 + 9 = -11. ✓"
          }
        ],
        "hint_en": "Remove 9 tiles from both sides of the balance, then share the remainder equally among 4 x-tiles.",
        "hint_ar": "أزل 9 بلاطات من كلا جانبي الميزان، ثم وزّع الباقي بالتساوي على 4 بلاطات x.",
        "result_en": "The answer is -5",
        "result_ar": "الجواب هو -5"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-009",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 12 - 3x = -6",
    "question_ar": "حل من أجل x: 12 - 3x = -6 ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 12 from both sides: 12 - 3x - 12 = -6 - 12, giving -3x = -18.",
            "explanation_ar": "Subtract 12 from both sides: 12 - 3x - 12 = -6 - 12, giving -3x = -18."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by -3: x = -18 ÷ -3 = 6.",
            "explanation_ar": "Divide both sides by -3: x = -18 ÷ -3 = 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Negative ÷ negative = positive.",
            "explanation_ar": "Negative ÷ negative = positive."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 12 - 3(6) = 12 - 18 = -6. ✓",
            "explanation_ar": "Verify: 12 - 3(6) = 12 - 18 = -6. ✓"
          }
        ],
        "hint_en": "Subtract 12 from both sides, then divide by -3.",
        "hint_ar": "اطرح 12 من كلا الجانبين، ثم اقسم على -3.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite as 12 + (-3x) = -6 to make the negative coefficient visible.",
            "explanation_ar": "Rewrite as 12 + (-3x) = -6 to make the negative coefficient visible."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move 12 to the right: -3x = -6 - 12 = -18.",
            "explanation_ar": "Move 12 to the right: -3x = -6 - 12 = -18."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide -18 by -3: x = 6.",
            "explanation_ar": "Divide -18 by -3: x = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 12 - 3(6) = 12 - 18 = -6. ✓",
            "explanation_ar": "Check: 12 - 3(6) = 12 - 18 = -6. ✓"
          }
        ],
        "hint_en": "Rewrite with explicit negative coefficient, then isolate -3x and divide.",
        "hint_ar": "أعد الكتابة بمعامل سالب صريح، ثم عزل -3x واقسم.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "On a number line, 12 minus 3 groups of x equals -6.",
            "explanation_ar": "On a number line, 12 minus 3 groups of x equals -6."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The jump from 12 to -6 is 18 steps down. These 18 steps come from 3x.",
            "explanation_ar": "The jump from 12 to -6 is 18 steps down. These 18 steps come from 3x."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "So 3x = 18. Divide by 3: x = 6.",
            "explanation_ar": "So 3x = 18. Divide by 3: x = 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Confirm: 12 - 3(6) = 12 - 18 = -6. ✓",
            "explanation_ar": "Confirm: 12 - 3(6) = 12 - 18 = -6. ✓"
          }
        ],
        "hint_en": "Find how far 12 must drop to reach -6, then divide that distance by 3.",
        "hint_ar": "أوجد كم يجب أن ينخفض 12 للوصول إلى -6، ثم اقسم تلك المسافة على 3.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-010",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 6x - 5 = 3x + 10",
    "question_ar": "حل من أجل x: 6x - 5 = 3x + 10 ؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 3x from both sides: 6x - 3x - 5 = 10, giving 3x - 5 = 10.",
            "explanation_ar": "Subtract 3x from both sides: 6x - 3x - 5 = 10, giving 3x - 5 = 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 5 to both sides: 3x = 10 + 5 = 15.",
            "explanation_ar": "Add 5 to both sides: 3x = 10 + 5 = 15."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 3: x = 15 ÷ 3 = 5.",
            "explanation_ar": "Divide both sides by 3: x = 15 ÷ 3 = 5."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 6(5) - 5 = 25 and 3(5) + 10 = 25. ✓",
            "explanation_ar": "Verify: 6(5) - 5 = 25 and 3(5) + 10 = 25. ✓"
          }
        ],
        "hint_en": "Subtract 3x from both sides to collect x terms, then isolate x.",
        "hint_ar": "اطرح 3x من كلا الجانبين لتجميع حدود x، ثم عزل x.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Variables appear on both sides of 6x - 5 = 3x + 10.",
            "explanation_ar": "Variables appear on both sides of 6x - 5 = 3x + 10."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 3x from both sides: 3x - 5 = 10.",
            "explanation_ar": "Subtract 3x from both sides: 3x - 5 = 10."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add 5 to both sides: 3x = 15. Divide by 3: x = 5.",
            "explanation_ar": "Add 5 to both sides: 3x = 15. Divide by 3: x = 5."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Back-substitute: 6(5)-5 = 25; 3(5)+10 = 25. Equal. ✓",
            "explanation_ar": "Back-substitute: 6(5)-5 = 25; 3(5)+10 = 25. Equal. ✓"
          }
        ],
        "hint_en": "Bring x terms together on the left, constants on the right.",
        "hint_ar": "اجمع حدود x معاً في الجانب الأيسر والثوابت في الجانب الأيمن.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance: left has 6 x-tiles minus 5 units; right has 3 x-tiles plus 10 units.",
            "explanation_ar": "Balance: left has 6 x-tiles minus 5 units; right has 3 x-tiles plus 10 units."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 3 x-tiles from each pan: left = 3 x-tiles - 5; right = 10.",
            "explanation_ar": "Remove 3 x-tiles from each pan: left = 3 x-tiles - 5; right = 10."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 5 unit tiles to each pan: left = 3 x-tiles; right = 15.",
            "explanation_ar": "Add 5 unit tiles to each pan: left = 3 x-tiles; right = 15."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Three x-tiles = 15 units, so x = 5. Check: 6(5)-5=25, 3(5)+10=25. ✓",
            "explanation_ar": "Three x-tiles = 15 units, so x = 5. Check: 6(5)-5=25, 3(5)+10=25. ✓"
          }
        ],
        "hint_en": "Remove matching x-tiles from both pans, then balance the unit tiles.",
        "hint_ar": "أزل بلاطات x المتطابقة من كلا الجانبين، ثم وازن بلاطات الوحدات.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-011",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 2(3x + 1) = -10",
    "question_ar": "حل من أجل x: 2(3x + 1) = -10 ؟",
    "answer": -2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by 2: 3x + 1 = -10 ÷ 2 = -5.",
            "explanation_ar": "Divide both sides by 2: 3x + 1 = -10 ÷ 2 = -5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 1 from both sides: 3x = -5 - 1 = -6.",
            "explanation_ar": "Subtract 1 from both sides: 3x = -5 - 1 = -6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 3: x = -6 ÷ 3 = -2.",
            "explanation_ar": "Divide both sides by 3: x = -6 ÷ 3 = -2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 2(3(-2) + 1) = 2(-6 + 1) = 2(-5) = -10. ✓",
            "explanation_ar": "Verify: 2(3(-2) + 1) = 2(-6 + 1) = 2(-5) = -10. ✓"
          }
        ],
        "hint_en": "Divide by 2 first to remove the outer factor, then solve the two-step equation.",
        "hint_ar": "اقسم على 2 أولاً لإزالة المعامل الخارجي، ثم حل المعادلة ذات الخطوتين.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو -2"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Expand: 2 × 3x = 6x and 2 × 1 = 2, so 6x + 2 = -10.",
            "explanation_ar": "Expand: 2 × 3x = 6x and 2 × 1 = 2, so 6x + 2 = -10."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 2 from both sides: 6x = -10 - 2 = -12.",
            "explanation_ar": "Subtract 2 from both sides: 6x = -10 - 2 = -12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide by 6: x = -12 ÷ 6 = -2.",
            "explanation_ar": "Divide by 6: x = -12 ÷ 6 = -2."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2(3(-2)+1) = 2(-5) = -10. ✓",
            "explanation_ar": "Check: 2(3(-2)+1) = 2(-5) = -10. ✓"
          }
        ],
        "hint_en": "Distribute 2 into the brackets, then isolate x with two steps.",
        "hint_ar": "وزّع 2 داخل القوسين، ثم عزل x بخطوتين.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو -2"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Two identical bags each contain (3x + 1) items and together they total -10.",
            "explanation_ar": "Two identical bags each contain (3x + 1) items and together they total -10."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each bag holds -10 ÷ 2 = -5 items: 3x + 1 = -5.",
            "explanation_ar": "Each bag holds -10 ÷ 2 = -5 items: 3x + 1 = -5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remove 1 item from one bag: 3x = -6. Divide the -6 among 3 groups: x = -2.",
            "explanation_ar": "Remove 1 item from one bag: 3x = -6. Divide the -6 among 3 groups: x = -2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: 2(3(-2)+1) = 2(-5) = -10. ✓",
            "explanation_ar": "Verify: 2(3(-2)+1) = 2(-5) = -10. ✓"
          }
        ],
        "hint_en": "Think of 2 identical bags totaling -10; solve for the contents of one bag.",
        "hint_ar": "فكر في كيسين متطابقين مجموعهما -10؛ حل لمحتوى كيس واحد.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو -2"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-012",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: x/4 + 2 = -1",
    "question_ar": "حل من أجل x: x/4 + 2 = -1 ؟",
    "answer": -12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 2 from both sides: x/4 + 2 - 2 = -1 - 2, giving x/4 = -3.",
            "explanation_ar": "Subtract 2 from both sides: x/4 + 2 - 2 = -1 - 2, giving x/4 = -3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 4: x = -3 × 4 = -12.",
            "explanation_ar": "Multiply both sides by 4: x = -3 × 4 = -12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "A negative multiplied by a positive gives a negative.",
            "explanation_ar": "A negative multiplied by a positive gives a negative."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: (-12)/4 + 2 = -3 + 2 = -1. ✓",
            "explanation_ar": "Verify: (-12)/4 + 2 = -3 + 2 = -1. ✓"
          }
        ],
        "hint_en": "Subtract 2 from both sides, then multiply by 4.",
        "hint_ar": "اطرح 2 من كلا الجانبين، ثم اضرب في 4.",
        "result_en": "The answer is -12",
        "result_ar": "الجواب هو -12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Two operations on x in x/4 + 2 = -1: divide by 4 and add 2.",
            "explanation_ar": "Two operations on x in x/4 + 2 = -1: divide by 4 and add 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo adding 2: subtract 2 from -1 to get -3. Equation: x/4 = -3.",
            "explanation_ar": "Undo adding 2: subtract 2 from -1 to get -3. Equation: x/4 = -3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo dividing by 4: multiply -3 by 4 to get x = -12.",
            "explanation_ar": "Undo dividing by 4: multiply -3 by 4 to get x = -12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: (-12)/4 + 2 = -3 + 2 = -1. ✓",
            "explanation_ar": "Substitute: (-12)/4 + 2 = -3 + 2 = -1. ✓"
          }
        ],
        "hint_en": "Undo adding 2 first (subtract 2), then undo dividing by 4 (multiply by 4).",
        "hint_ar": "تراجع عن إضافة 2 أولاً (اطرح 2)، ثم تراجع عن القسمة على 4 (اضرب في 4).",
        "result_en": "The answer is -12",
        "result_ar": "الجواب هو -12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "One quarter of x, plus 2, lands at -1 on the number line.",
            "explanation_ar": "One quarter of x, plus 2, lands at -1 on the number line."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Move back 2 from -1: x/4 is located at -1 - 2 = -3.",
            "explanation_ar": "Move back 2 from -1: x/4 is located at -1 - 2 = -3."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One quarter of x equals -3, so x must be 4 times -3 = -12.",
            "explanation_ar": "One quarter of x equals -3, so x must be 4 times -3 = -12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Confirm: (-12)/4 + 2 = -3 + 2 = -1. ✓",
            "explanation_ar": "Confirm: (-12)/4 + 2 = -3 + 2 = -1. ✓"
          }
        ],
        "hint_en": "Locate x/4 on the number line by subtracting 2 from -1, then scale up by 4.",
        "hint_ar": "حدد موقع x/4 على خط الأعداد بطرح 2 من -1، ثم قم بالتوسع بالضرب في 4.",
        "result_en": "The answer is -12",
        "result_ar": "الجواب هو -12"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-013",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: -2x - 7 = 9",
    "question_ar": "حل من أجل x: -2x - 7 = 9 ؟",
    "answer": -8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 7 to both sides: -2x - 7 + 7 = 9 + 7, giving -2x = 16.",
            "explanation_ar": "Add 7 to both sides: -2x - 7 + 7 = 9 + 7, giving -2x = 16."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by -2: x = 16 ÷ (-2) = -8.",
            "explanation_ar": "Divide both sides by -2: x = 16 ÷ (-2) = -8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Positive ÷ negative = negative.",
            "explanation_ar": "Positive ÷ negative = negative."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: -2(-8) - 7 = 16 - 7 = 9. ✓",
            "explanation_ar": "Verify: -2(-8) - 7 = 16 - 7 = 9. ✓"
          }
        ],
        "hint_en": "Add 7 to both sides to isolate -2x, then divide by -2.",
        "hint_ar": "أضف 7 إلى كلا الجانبين لعزل -2x، ثم اقسم على -2.",
        "result_en": "The answer is -8",
        "result_ar": "الجواب هو -8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Operations on x in -2x - 7 = 9: multiply by -2 and subtract 7.",
            "explanation_ar": "Operations on x in -2x - 7 = 9: multiply by -2 and subtract 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo subtracting 7 by adding 7 to 9: -2x = 16.",
            "explanation_ar": "Undo subtracting 7 by adding 7 to 9: -2x = 16."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo multiplying by -2 by dividing 16 by -2: x = -8.",
            "explanation_ar": "Undo multiplying by -2 by dividing 16 by -2: x = -8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Back-check: -2(-8) - 7 = 16 - 7 = 9. ✓",
            "explanation_ar": "Back-check: -2(-8) - 7 = 16 - 7 = 9. ✓"
          }
        ],
        "hint_en": "Add 7 to both sides first, then divide by -2 watching the sign.",
        "hint_ar": "أضف 7 إلى كلا الجانبين أولاً، ثم اقسم على -2 مع مراقبة الإشارة.",
        "result_en": "The answer is -8",
        "result_ar": "الجواب هو -8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance scale: -2x - 7 on the left, 9 on the right.",
            "explanation_ar": "Balance scale: -2x - 7 on the left, 9 on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 7 unit tiles to both sides: left = -2x, right = 9 + 7 = 16.",
            "explanation_ar": "Add 7 unit tiles to both sides: left = -2x, right = 9 + 7 = 16."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two negative x-tiles balance 16 positive units. Flip signs: 2x = -16, so x = -8.",
            "explanation_ar": "Two negative x-tiles balance 16 positive units. Flip signs: 2x = -16, so x = -8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: -2(-8) - 7 = 16 - 7 = 9. ✓",
            "explanation_ar": "Verify: -2(-8) - 7 = 16 - 7 = 9. ✓"
          }
        ],
        "hint_en": "Add 7 to both pans, then interpret the negative coefficient to find x.",
        "hint_ar": "أضف 7 إلى كلا الجانبين، ثم افسّر المعامل السالب لإيجاد x.",
        "result_en": "The answer is -8",
        "result_ar": "الجواب هو -8"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-014",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 4(x - 3) = -16",
    "question_ar": "حل من أجل x: 4(x - 3) = -16 ؟",
    "answer": -1,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by 4: x - 3 = -16 ÷ 4 = -4.",
            "explanation_ar": "Divide both sides by 4: x - 3 = -16 ÷ 4 = -4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 3 to both sides: x = -4 + 3 = -1.",
            "explanation_ar": "Add 3 to both sides: x = -4 + 3 = -1."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "No further steps needed.",
            "explanation_ar": "No further steps needed."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 4(-1 - 3) = 4(-4) = -16. ✓",
            "explanation_ar": "Verify: 4(-1 - 3) = 4(-4) = -16. ✓"
          }
        ],
        "hint_en": "Divide by 4 to isolate the bracket, then add 3 to both sides.",
        "hint_ar": "اقسم على 4 لعزل القوس، ثم أضف 3 إلى كلا الجانبين.",
        "result_en": "The answer is -1",
        "result_ar": "الجواب هو -1"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Expand the bracket: 4 × x = 4x and 4 × (-3) = -12, so 4x - 12 = -16.",
            "explanation_ar": "Expand the bracket: 4 × x = 4x and 4 × (-3) = -12, so 4x - 12 = -16."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add 12 to both sides: 4x = -16 + 12 = -4.",
            "explanation_ar": "Add 12 to both sides: 4x = -16 + 12 = -4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide by 4: x = -4 ÷ 4 = -1.",
            "explanation_ar": "Divide by 4: x = -4 ÷ 4 = -1."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4(-1 - 3) = 4(-4) = -16. ✓",
            "explanation_ar": "Check: 4(-1 - 3) = 4(-4) = -16. ✓"
          }
        ],
        "hint_en": "Distribute 4 into the bracket, then solve the resulting two-step equation.",
        "hint_ar": "وزّع 4 داخل القوس، ثم حل المعادلة ذات الخطوتين الناتجة.",
        "result_en": "The answer is -1",
        "result_ar": "الجواب هو -1"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Four identical groups, each containing (x - 3) items, total -16 items.",
            "explanation_ar": "Four identical groups, each containing (x - 3) items, total -16 items."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each group contains -16 ÷ 4 = -4 items: x - 3 = -4.",
            "explanation_ar": "Each group contains -16 ÷ 4 = -4 items: x - 3 = -4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 3 to both sides of the group equation: x = -4 + 3 = -1.",
            "explanation_ar": "Add 3 to both sides of the group equation: x = -4 + 3 = -1."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Confirm: 4(-1 - 3) = 4(-4) = -16. ✓",
            "explanation_ar": "Confirm: 4(-1 - 3) = 4(-4) = -16. ✓"
          }
        ],
        "hint_en": "Divide -16 by 4 to find what's in one group, then solve for x.",
        "hint_ar": "اقسم -16 على 4 لتجد محتوى مجموعة واحدة، ثم حل لإيجاد x.",
        "result_en": "The answer is -1",
        "result_ar": "الجواب هو -1"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-015",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 8x + 3 = 5x - 9",
    "question_ar": "حل من أجل x: 8x + 3 = 5x - 9 ؟",
    "answer": -4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 5x from both sides: 8x - 5x + 3 = -9, giving 3x + 3 = -9.",
            "explanation_ar": "Subtract 5x from both sides: 8x - 5x + 3 = -9, giving 3x + 3 = -9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 3 from both sides: 3x = -9 - 3 = -12.",
            "explanation_ar": "Subtract 3 from both sides: 3x = -9 - 3 = -12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 3: x = -12 ÷ 3 = -4.",
            "explanation_ar": "Divide both sides by 3: x = -12 ÷ 3 = -4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 8(-4) + 3 = -29 and 5(-4) - 9 = -29. ✓",
            "explanation_ar": "Verify: 8(-4) + 3 = -29 and 5(-4) - 9 = -29. ✓"
          }
        ],
        "hint_en": "Subtract 5x from both sides, then isolate x.",
        "hint_ar": "اطرح 5x من كلا الجانبين، ثم عزل x.",
        "result_en": "The answer is -4",
        "result_ar": "الجواب هو -4"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Variables appear on both sides of 8x + 3 = 5x - 9.",
            "explanation_ar": "Variables appear on both sides of 8x + 3 = 5x - 9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 5x: 3x + 3 = -9. Subtract 3: 3x = -12.",
            "explanation_ar": "Subtract 5x: 3x + 3 = -9. Subtract 3: 3x = -12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide by 3: x = -4.",
            "explanation_ar": "Divide by 3: x = -4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 8(-4)+3 = -29; 5(-4)-9 = -29. Equal. ✓",
            "explanation_ar": "Substitute: 8(-4)+3 = -29; 5(-4)-9 = -29. Equal. ✓"
          }
        ],
        "hint_en": "Remove 5x from both sides, then use two steps to isolate x.",
        "hint_ar": "أزل 5x من كلا الجانبين، ثم استخدم خطوتين لعزل x.",
        "result_en": "The answer is -4",
        "result_ar": "الجواب هو -4"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance: 8 x-tiles + 3 units on the left; 5 x-tiles - 9 units on the right.",
            "explanation_ar": "Balance: 8 x-tiles + 3 units on the left; 5 x-tiles - 9 units on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 5 x-tiles from both pans: 3 x-tiles + 3 units on left; -9 units on right.",
            "explanation_ar": "Remove 5 x-tiles from both pans: 3 x-tiles + 3 units on left; -9 units on right."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remove 3 unit tiles from both pans: 3 x-tiles on left; -12 units on right.",
            "explanation_ar": "Remove 3 unit tiles from both pans: 3 x-tiles on left; -12 units on right."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Three x-tiles = -12 units, so x = -4. Check: 8(-4)+3 = -29; 5(-4)-9 = -29. ✓",
            "explanation_ar": "Three x-tiles = -12 units, so x = -4. Check: 8(-4)+3 = -29; 5(-4)-9 = -29. ✓"
          }
        ],
        "hint_en": "Remove matching x-tiles from both pans, then balance the unit tiles.",
        "hint_ar": "أزل بلاطات x المتطابقة من كلا الجانبين، ثم وازن بلاطات الوحدات.",
        "result_en": "The answer is -4",
        "result_ar": "الجواب هو -4"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-016",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: x/5 + 7 = 5",
    "question_ar": "حل من أجل x: x/5 + 7 = 5 ؟",
    "answer": -10,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 7 from both sides: x/5 = 5 - 7 = -2.",
            "explanation_ar": "Subtract 7 from both sides: x/5 = 5 - 7 = -2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 5: x = -2 × 5 = -10.",
            "explanation_ar": "Multiply both sides by 5: x = -2 × 5 = -10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "A negative times a positive gives a negative.",
            "explanation_ar": "A negative times a positive gives a negative."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: (-10)/5 + 7 = -2 + 7 = 5. ✓",
            "explanation_ar": "Verify: (-10)/5 + 7 = -2 + 7 = 5. ✓"
          }
        ],
        "hint_en": "Subtract 7 from both sides first, then multiply by 5.",
        "hint_ar": "اطرح 7 من كلا الجانبين أولاً، ثم اضرب في 5.",
        "result_en": "The answer is -10",
        "result_ar": "الجواب هو -10"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Operations on x in x/5 + 7 = 5: divide by 5 and add 7.",
            "explanation_ar": "Operations on x in x/5 + 7 = 5: divide by 5 and add 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo adding 7: subtract 7 from both sides. x/5 = -2.",
            "explanation_ar": "Undo adding 7: subtract 7 from both sides. x/5 = -2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo dividing by 5: multiply both sides by 5. x = -10.",
            "explanation_ar": "Undo dividing by 5: multiply both sides by 5. x = -10."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Back-check: (-10)/5 + 7 = -2 + 7 = 5. ✓",
            "explanation_ar": "Back-check: (-10)/5 + 7 = -2 + 7 = 5. ✓"
          }
        ],
        "hint_en": "Subtract 7 to isolate x/5, then multiply by 5.",
        "hint_ar": "اطرح 7 لعزل x/5، ثم اضرب في 5.",
        "result_en": "The answer is -10",
        "result_ar": "الجواب هو -10"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "One fifth of x, added to 7, gives 5 on the number line.",
            "explanation_ar": "One fifth of x, added to 7, gives 5 on the number line."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Move back 7 from 5: x/5 is at 5 - 7 = -2.",
            "explanation_ar": "Move back 7 from 5: x/5 is at 5 - 7 = -2."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One fifth of x equals -2, so x = 5 × (-2) = -10.",
            "explanation_ar": "One fifth of x equals -2, so x = 5 × (-2) = -10."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Confirm: (-10)/5 + 7 = -2 + 7 = 5. ✓",
            "explanation_ar": "Confirm: (-10)/5 + 7 = -2 + 7 = 5. ✓"
          }
        ],
        "hint_en": "Subtract 7 from 5 to locate x/5, then multiply by 5 to get x.",
        "hint_ar": "اطرح 7 من 5 لتحديد موقع x/5، ثم اضرب في 5 للحصول على x.",
        "result_en": "The answer is -10",
        "result_ar": "الجواب هو -10"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-017",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: -4x + 6 = -10",
    "question_ar": "حل من أجل x: -4x + 6 = -10 ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 6 from both sides: -4x + 6 - 6 = -10 - 6, giving -4x = -16.",
            "explanation_ar": "Subtract 6 from both sides: -4x + 6 - 6 = -10 - 6, giving -4x = -16."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by -4: x = -16 ÷ (-4) = 4.",
            "explanation_ar": "Divide both sides by -4: x = -16 ÷ (-4) = 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Negative ÷ negative = positive.",
            "explanation_ar": "Negative ÷ negative = positive."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: -4(4) + 6 = -16 + 6 = -10. ✓",
            "explanation_ar": "Verify: -4(4) + 6 = -16 + 6 = -10. ✓"
          }
        ],
        "hint_en": "Subtract 6 from both sides, then divide by -4.",
        "hint_ar": "اطرح 6 من كلا الجانبين، ثم اقسم على -4.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break -4x + 6 = -10 into: multiply x by -4 and add 6.",
            "explanation_ar": "Break -4x + 6 = -10 into: multiply x by -4 and add 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo adding 6: subtract 6 from -10. -4x = -16.",
            "explanation_ar": "Undo adding 6: subtract 6 from -10. -4x = -16."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo multiplying by -4: divide -16 by -4. x = 4.",
            "explanation_ar": "Undo multiplying by -4: divide -16 by -4. x = 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: -4(4) + 6 = -16 + 6 = -10. ✓",
            "explanation_ar": "Check: -4(4) + 6 = -16 + 6 = -10. ✓"
          }
        ],
        "hint_en": "Subtract 6 first, then divide by -4 noting negative ÷ negative is positive.",
        "hint_ar": "اطرح 6 أولاً، ثم اقسم على -4 مع ملاحظة أن السالب ÷ السالب = موجب.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance: -4x + 6 on the left, -10 on the right.",
            "explanation_ar": "Balance: -4x + 6 on the left, -10 on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 6 unit tiles from both pans: -4x on the left, -16 on the right.",
            "explanation_ar": "Remove 6 unit tiles from both pans: -4x on the left, -16 on the right."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Four negative x-tiles = -16. Dividing -16 into 4 negative groups gives each group = 4.",
            "explanation_ar": "Four negative x-tiles = -16. Dividing -16 into 4 negative groups gives each group = 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Since -x = -4, x = 4. Verify: -4(4)+6 = -16+6 = -10. ✓",
            "explanation_ar": "Since -x = -4, x = 4. Verify: -4(4)+6 = -16+6 = -10. ✓"
          }
        ],
        "hint_en": "Remove 6 from both sides of the balance, then interpret the negative x-tiles.",
        "hint_ar": "أزل 6 من كلا جانبي الميزان، ثم افسّر بلاطات x السالبة.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-018",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 5(x + 4) = 10",
    "question_ar": "حل من أجل x: 5(x + 4) = 10 ؟",
    "answer": -2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by 5: x + 4 = 10 ÷ 5 = 2.",
            "explanation_ar": "Divide both sides by 5: x + 4 = 10 ÷ 5 = 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract 4 from both sides: x = 2 - 4 = -2.",
            "explanation_ar": "Subtract 4 from both sides: x = 2 - 4 = -2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "No further steps needed.",
            "explanation_ar": "No further steps needed."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 5(-2 + 4) = 5(2) = 10. ✓",
            "explanation_ar": "Verify: 5(-2 + 4) = 5(2) = 10. ✓"
          }
        ],
        "hint_en": "Divide both sides by 5 to eliminate the factor, then subtract 4.",
        "hint_ar": "اقسم كلا الجانبين على 5 لإزالة المعامل، ثم اطرح 4.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو -2"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Expand: 5 × x = 5x and 5 × 4 = 20, so 5x + 20 = 10.",
            "explanation_ar": "Expand: 5 × x = 5x and 5 × 4 = 20, so 5x + 20 = 10."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 20 from both sides: 5x = 10 - 20 = -10.",
            "explanation_ar": "Subtract 20 from both sides: 5x = 10 - 20 = -10."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide both sides by 5: x = -10 ÷ 5 = -2.",
            "explanation_ar": "Divide both sides by 5: x = -10 ÷ 5 = -2."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Back-check: 5(-2 + 4) = 5(2) = 10. ✓",
            "explanation_ar": "Back-check: 5(-2 + 4) = 5(2) = 10. ✓"
          }
        ],
        "hint_en": "Distribute 5, subtract 20, then divide by 5.",
        "hint_ar": "وزّع 5، اطرح 20، ثم اقسم على 5.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو -2"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Five identical bags each hold (x + 4) items and together total 10 items.",
            "explanation_ar": "Five identical bags each hold (x + 4) items and together total 10 items."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each bag holds 10 ÷ 5 = 2 items: x + 4 = 2.",
            "explanation_ar": "Each bag holds 10 ÷ 5 = 2 items: x + 4 = 2."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remove 4 items from the bag: x = 2 - 4 = -2.",
            "explanation_ar": "Remove 4 items from the bag: x = 2 - 4 = -2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: 5(-2 + 4) = 5(2) = 10. ✓",
            "explanation_ar": "Verify: 5(-2 + 4) = 5(2) = 10. ✓"
          }
        ],
        "hint_en": "Find one bag's contents by dividing 10 by 5, then subtract 4 to find x.",
        "hint_ar": "أوجد محتوى كيس واحد بقسمة 10 على 5، ثم اطرح 4 لإيجاد x.",
        "result_en": "The answer is -2",
        "result_ar": "الجواب هو -2"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-019",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 3x - 8 = -x + 4",
    "question_ar": "حل من أجل x: 3x - 8 = -x + 4 ؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add x to both sides to collect x on one side: 3x + x - 8 = 4, giving 4x - 8 = 4.",
            "explanation_ar": "Add x to both sides to collect x on one side: 3x + x - 8 = 4, giving 4x - 8 = 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 8 to both sides: 4x = 4 + 8 = 12.",
            "explanation_ar": "Add 8 to both sides: 4x = 4 + 8 = 12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 4: x = 12 ÷ 4 = 3.",
            "explanation_ar": "Divide both sides by 4: x = 12 ÷ 4 = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 3(3) - 8 = 1 and -(3) + 4 = 1. ✓",
            "explanation_ar": "Verify: 3(3) - 8 = 1 and -(3) + 4 = 1. ✓"
          }
        ],
        "hint_en": "Add x to both sides to eliminate the negative x on the right.",
        "hint_ar": "أضف x إلى كلا الجانبين للتخلص من x السالب في الجانب الأيمن.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Notice -x on the right side of 3x - 8 = -x + 4.",
            "explanation_ar": "Notice -x on the right side of 3x - 8 = -x + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add x to both sides: 4x - 8 = 4.",
            "explanation_ar": "Add x to both sides: 4x - 8 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add 8 to both sides: 4x = 12. Divide by 4: x = 3.",
            "explanation_ar": "Add 8 to both sides: 4x = 12. Divide by 4: x = 3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 3(3)-8 = 1; -(3)+4 = 1. Equal. ✓",
            "explanation_ar": "Substitute: 3(3)-8 = 1; -(3)+4 = 1. Equal. ✓"
          }
        ],
        "hint_en": "Adding x to both sides turns -x into 0 on the right, making it a one-variable side.",
        "hint_ar": "إضافة x إلى كلا الجانبين تجعل -x = 0 في الجانب الأيمن، مما يجعله جانباً بمتغير واحد.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance: 3 x-tiles - 8 units on the left; -1 x-tile + 4 units on the right.",
            "explanation_ar": "Balance: 3 x-tiles - 8 units on the left; -1 x-tile + 4 units on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 1 x-tile to both pans: 4 x-tiles - 8 units on the left; 4 units on the right.",
            "explanation_ar": "Add 1 x-tile to both pans: 4 x-tiles - 8 units on the left; 4 units on the right."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 8 unit tiles to both pans: 4 x-tiles on the left; 12 units on the right.",
            "explanation_ar": "Add 8 unit tiles to both pans: 4 x-tiles on the left; 12 units on the right."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Four x-tiles = 12 units, so x = 3. Check: 3(3)-8=1; -(3)+4=1. ✓",
            "explanation_ar": "Four x-tiles = 12 units, so x = 3. Check: 3(3)-8=1; -(3)+4=1. ✓"
          }
        ],
        "hint_en": "Add an x-tile to both pans to remove the negative x-tile from the right side.",
        "hint_ar": "أضف بلاطة x إلى كلا الجانبين لإزالة بلاطة x السالبة من الجانب الأيمن.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-020",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: x/2 - 4 = -8",
    "question_ar": "حل من أجل x: x/2 - 4 = -8 ؟",
    "answer": -8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 4 to both sides: x/2 = -8 + 4 = -4.",
            "explanation_ar": "Add 4 to both sides: x/2 = -8 + 4 = -4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply both sides by 2: x = -4 × 2 = -8.",
            "explanation_ar": "Multiply both sides by 2: x = -4 × 2 = -8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "A negative times a positive gives a negative.",
            "explanation_ar": "A negative times a positive gives a negative."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: (-8)/2 - 4 = -4 - 4 = -8. ✓",
            "explanation_ar": "Verify: (-8)/2 - 4 = -4 - 4 = -8. ✓"
          }
        ],
        "hint_en": "Add 4 to both sides to isolate x/2, then multiply by 2.",
        "hint_ar": "أضف 4 إلى كلا الجانبين لعزل x/2، ثم اضرب في 2.",
        "result_en": "The answer is -8",
        "result_ar": "الجواب هو -8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Operations on x in x/2 - 4 = -8: divide by 2 and subtract 4.",
            "explanation_ar": "Operations on x in x/2 - 4 = -8: divide by 2 and subtract 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo subtracting 4: add 4 to -8. x/2 = -4.",
            "explanation_ar": "Undo subtracting 4: add 4 to -8. x/2 = -4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Undo dividing by 2: multiply -4 by 2. x = -8.",
            "explanation_ar": "Undo dividing by 2: multiply -4 by 2. x = -8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: (-8)/2 - 4 = -4 - 4 = -8. ✓",
            "explanation_ar": "Check: (-8)/2 - 4 = -4 - 4 = -8. ✓"
          }
        ],
        "hint_en": "Undo the subtraction of 4 first by adding 4, then multiply by 2.",
        "hint_ar": "تراجع أولاً عن طرح 4 بإضافة 4، ثم اضرب في 2.",
        "result_en": "The answer is -8",
        "result_ar": "الجواب هو -8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Half of x, minus 4, lands at -8 on the number line.",
            "explanation_ar": "Half of x, minus 4, lands at -8 on the number line."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 4 to -8: half of x is at -8 + 4 = -4.",
            "explanation_ar": "Add 4 to -8: half of x is at -8 + 4 = -4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "If half of x is -4, then x = 2 × (-4) = -8.",
            "explanation_ar": "If half of x is -4, then x = 2 × (-4) = -8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Confirm: (-8)/2 - 4 = -4 - 4 = -8. ✓",
            "explanation_ar": "Confirm: (-8)/2 - 4 = -4 - 4 = -8. ✓"
          }
        ],
        "hint_en": "Add 4 to locate x/2 on the number line, then double it to find x.",
        "hint_ar": "أضف 4 لتحديد موقع x/2 على خط الأعداد، ثم ضاعفه للحصول على x.",
        "result_en": "The answer is -8",
        "result_ar": "الجواب هو -8"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-021",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: -6x + 4 = -8",
    "question_ar": "حل من أجل x: -6x + 4 = -8 ؟",
    "answer": 2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 4 from both sides: -6x + 4 - 4 = -8 - 4, giving -6x = -12.",
            "explanation_ar": "Subtract 4 from both sides: -6x + 4 - 4 = -8 - 4, giving -6x = -12."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by -6: x = -12 ÷ (-6) = 2.",
            "explanation_ar": "Divide both sides by -6: x = -12 ÷ (-6) = 2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Negative ÷ negative = positive.",
            "explanation_ar": "Negative ÷ negative = positive."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: -6(2) + 4 = -12 + 4 = -8. ✓",
            "explanation_ar": "Verify: -6(2) + 4 = -12 + 4 = -8. ✓"
          }
        ],
        "hint_en": "Subtract 4 from both sides, then divide by -6.",
        "hint_ar": "اطرح 4 من كلا الجانبين، ثم اقسم على -6.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Operations on x: multiply by -6 and add 4.",
            "explanation_ar": "Operations on x: multiply by -6 and add 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 4 from both sides: -6x = -12.",
            "explanation_ar": "Subtract 4 from both sides: -6x = -12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide -12 by -6: x = 2 (negative ÷ negative = positive).",
            "explanation_ar": "Divide -12 by -6: x = 2 (negative ÷ negative = positive)."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: -6(2) + 4 = -12 + 4 = -8. ✓",
            "explanation_ar": "Check: -6(2) + 4 = -12 + 4 = -8. ✓"
          }
        ],
        "hint_en": "Isolate -6x by subtracting 4, then divide by -6.",
        "hint_ar": "عزل -6x بطرح 4، ثم اقسم على -6.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance: -6x + 4 on the left, -8 on the right.",
            "explanation_ar": "Balance: -6x + 4 on the left, -8 on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 4 unit tiles from both pans: -6x on the left, -12 on the right.",
            "explanation_ar": "Remove 4 unit tiles from both pans: -6x on the left, -12 on the right."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Six negative x-tiles balance -12. Splitting -12 into 6 negative groups: each = 2, so -x = -2 means x = 2.",
            "explanation_ar": "Six negative x-tiles balance -12. Splitting -12 into 6 negative groups: each = 2, so -x = -2 means x = 2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: -6(2) + 4 = -12 + 4 = -8. ✓",
            "explanation_ar": "Verify: -6(2) + 4 = -12 + 4 = -8. ✓"
          }
        ],
        "hint_en": "Remove 4 from both pans, then distribute -12 across 6 negative x-tiles.",
        "hint_ar": "أزل 4 من كلا الجانبين، ثم وزّع -12 على 6 بلاطات x سالبة.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-022",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: 2x + 11 = 4x - 1",
    "question_ar": "حل من أجل x: 2x + 11 = 4x - 1 ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract 2x from both sides: 11 = 4x - 2x - 1, giving 11 = 2x - 1.",
            "explanation_ar": "Subtract 2x from both sides: 11 = 4x - 2x - 1, giving 11 = 2x - 1."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 1 to both sides: 12 = 2x.",
            "explanation_ar": "Add 1 to both sides: 12 = 2x."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 2: x = 12 ÷ 2 = 6.",
            "explanation_ar": "Divide both sides by 2: x = 12 ÷ 2 = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 2(6) + 11 = 23 and 4(6) - 1 = 23. ✓",
            "explanation_ar": "Verify: 2(6) + 11 = 23 and 4(6) - 1 = 23. ✓"
          }
        ],
        "hint_en": "Subtract 2x from both sides so x only appears on the right.",
        "hint_ar": "اطرح 2x من كلا الجانبين حتى تظهر x في الجانب الأيمن فقط.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "x appears on both sides of 2x + 11 = 4x - 1.",
            "explanation_ar": "x appears on both sides of 2x + 11 = 4x - 1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Move all x terms to the right: subtract 2x. 11 = 2x - 1.",
            "explanation_ar": "Move all x terms to the right: subtract 2x. 11 = 2x - 1."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Move constants to the left: add 1. 12 = 2x. Divide by 2: x = 6.",
            "explanation_ar": "Move constants to the left: add 1. 12 = 2x. Divide by 2: x = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 2(6)+11=23; 4(6)-1=23. Equal. ✓",
            "explanation_ar": "Substitute: 2(6)+11=23; 4(6)-1=23. Equal. ✓"
          }
        ],
        "hint_en": "Subtract 2x from both sides, then solve the simpler equation.",
        "hint_ar": "اطرح 2x من كلا الجانبين، ثم حل المعادلة الأبسط.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Balance: 2 x-tiles + 11 units on the left; 4 x-tiles - 1 unit on the right.",
            "explanation_ar": "Balance: 2 x-tiles + 11 units on the left; 4 x-tiles - 1 unit on the right."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 2 x-tiles from both pans: 11 units on the left; 2 x-tiles - 1 unit on the right.",
            "explanation_ar": "Remove 2 x-tiles from both pans: 11 units on the left; 2 x-tiles - 1 unit on the right."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 1 unit tile to both pans: 12 units on the left; 2 x-tiles on the right.",
            "explanation_ar": "Add 1 unit tile to both pans: 12 units on the left; 2 x-tiles on the right."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Two x-tiles = 12 units, so x = 6. Check: 2(6)+11=23; 4(6)-1=23. ✓",
            "explanation_ar": "Two x-tiles = 12 units, so x = 6. Check: 2(6)+11=23; 4(6)-1=23. ✓"
          }
        ],
        "hint_en": "Remove 2 x-tiles from both sides, then add 1 to both sides to isolate 2x.",
        "hint_ar": "أزل 2 بلاطات x من كلا الجانبين، ثم أضف 1 إلى كلا الجانبين لعزل 2x.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-alg-hard-023",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "Solve for x: -3(x - 2) = 15",
    "question_ar": "حل من أجل x: -3(x - 2) = 15 ؟",
    "answer": -3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide both sides by -3: x - 2 = 15 ÷ (-3) = -5.",
            "explanation_ar": "Divide both sides by -3: x - 2 = 15 ÷ (-3) = -5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add 2 to both sides: x = -5 + 2 = -3.",
            "explanation_ar": "Add 2 to both sides: x = -5 + 2 = -3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "No further steps needed.",
            "explanation_ar": "No further steps needed."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: -3(-3 - 2) = -3(-5) = 15. ✓",
            "explanation_ar": "Verify: -3(-3 - 2) = -3(-5) = 15. ✓"
          }
        ],
        "hint_en": "Divide by -3 first to isolate the bracket, then add 2.",
        "hint_ar": "اقسم على -3 أولاً لعزل القوس، ثم أضف 2.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو -3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Expand: -3 × x = -3x and -3 × (-2) = +6, so -3x + 6 = 15.",
            "explanation_ar": "Expand: -3 × x = -3x and -3 × (-2) = +6, so -3x + 6 = 15."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 6 from both sides: -3x = 15 - 6 = 9.",
            "explanation_ar": "Subtract 6 from both sides: -3x = 15 - 6 = 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide by -3: x = 9 ÷ (-3) = -3.",
            "explanation_ar": "Divide by -3: x = 9 ÷ (-3) = -3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: -3(-3 - 2) = -3(-5) = 15. ✓",
            "explanation_ar": "Check: -3(-3 - 2) = -3(-5) = 15. ✓"
          }
        ],
        "hint_en": "Distribute -3 into the bracket carefully (watch the double negative), then isolate x.",
        "hint_ar": "وزّع -3 داخل القوس بعناية (انتبه للسلبي المزدوج)، ثم عزل x.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو -3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Three negative bags each hold (x - 2) items and together they total 15.",
            "explanation_ar": "Three negative bags each hold (x - 2) items and together they total 15."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each negative bag: -1 × (x - 2) means each positive bag holds -(x-2). Dividing 15 by -3: each group = -5, so x - 2 = -5.",
            "explanation_ar": "Each negative bag: -1 × (x - 2) means each positive bag holds -(x-2). Dividing 15 by -3: each group = -5, so x - 2 = -5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 2 to both sides of x - 2 = -5: x = -5 + 2 = -3.",
            "explanation_ar": "Add 2 to both sides of x - 2 = -5: x = -5 + 2 = -3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Verify: -3(-3 - 2) = -3(-5) = 15. ✓",
            "explanation_ar": "Verify: -3(-3 - 2) = -3(-5) = 15. ✓"
          }
        ],
        "hint_en": "Divide 15 by -3 to find the contents of one group, then add 2 to both sides.",
        "hint_ar": "اقسم 15 على -3 لإيجاد محتوى مجموعة واحدة، ثم أضف 2 إلى كلا الجانبين.",
        "result_en": "The answer is -3",
        "result_ar": "الجواب هو -3"
      }
    },
    "meta": {
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-practice-pct-easy-001",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 20% of 60?",
    "question_ar": "ما هو 20% من 60 ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 20% of 60. Recognise that 20% = 2 × 10%.",
            "explanation_ar": "نحتاج 20% من 60. لاحظ أن 20% = 2 × 10%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 60 = 60 ÷ 10 = 6.",
            "explanation_ar": "10% من 60 = 60 ÷ 10 = 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "20% = 2 × 10%, so 20% of 60 = 2 × 6 = 12.",
            "explanation_ar": "20% = 2 × 10%، إذن 20% من 60 = 2 × 6 = 12."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 12.",
            "explanation_ar": "الجواب هو 12."
          }
        ],
        "hint_en": "Find 10% first, then double it.",
        "hint_ar": "أوجد 10% أولاً، ثم ضاعفه.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "20% of 60 means (20 ÷ 100) × 60.",
            "explanation_ar": "20% من 60 تعني (20 ÷ 100) × 60."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Simplify 20/100 = 1/5. Now compute 60 ÷ 5 = 12.",
            "explanation_ar": "بسّط 20/100 = 1/5. الآن احسب 60 ÷ 5 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20% of 60 = 12.",
            "explanation_ar": "20% من 60 = 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 12 × 5 = 60. ✓ The answer is 12.",
            "explanation_ar": "تحقق: 12 × 5 = 60. ✓ الجواب هو 12."
          }
        ],
        "hint_en": "Convert 20% to the fraction 1/5.",
        "hint_ar": "حوّل 20% إلى الكسر 1/5.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 60 apples arranged in 5 equal groups — each group represents 20%.",
            "explanation_ar": "تخيّل 60 تفاحة مرتبة في 5 مجموعات متساوية — كل مجموعة تمثل 20%."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "60 ÷ 5 = 12 apples per group.",
            "explanation_ar": "60 ÷ 5 = 12 تفاحة في كل مجموعة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One group of 20% holds exactly 12 apples.",
            "explanation_ar": "مجموعة واحدة تمثل 20% تحتوي على 12 تفاحة بالضبط."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "20% of 60 = 12.",
            "explanation_ar": "20% من 60 = 12."
          }
        ],
        "hint_en": "Split 60 into 5 equal groups — each group is 20%.",
        "hint_ar": "قسّم 60 إلى 5 مجموعات متساوية — كل مجموعة هي 20%.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-002",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 25% of 120?",
    "question_ar": "ما هو 25% من 120 ؟",
    "answer": 30,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 25% of 120. Recognise that 25% = 1/4.",
            "explanation_ar": "نحتاج 25% من 120. لاحظ أن 25% = 1/4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Half of 120 = 60. Half again = 60 ÷ 2 = 30.",
            "explanation_ar": "نصف 120 = 60. النصف مرة أخرى = 60 ÷ 2 = 30."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "25% = half of half, so 25% of 120 = 30.",
            "explanation_ar": "25% = نصف النصف، إذن 25% من 120 = 30."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 30.",
            "explanation_ar": "الجواب هو 30."
          }
        ],
        "hint_en": "25% = half of half. Halve 120 twice.",
        "hint_ar": "25% = نصف النصف. قسّم 120 على 2 مرتين.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "25% of 120 means (25 ÷ 100) × 120.",
            "explanation_ar": "25% من 120 تعني (25 ÷ 100) × 120."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Simplify 25/100 = 1/4. Now compute 120 ÷ 4 = 30.",
            "explanation_ar": "بسّط 25/100 = 1/4. الآن احسب 120 ÷ 4 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "25% of 120 = 30.",
            "explanation_ar": "25% من 120 = 30."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 30 × 4 = 120. ✓ The answer is 30.",
            "explanation_ar": "تحقق: 30 × 4 = 120. ✓ الجواب هو 30."
          }
        ],
        "hint_en": "Convert 25% to the fraction 1/4.",
        "hint_ar": "حوّل 25% إلى الكسر 1/4.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 120 students split into 4 equal teams — each team is 25% of the total.",
            "explanation_ar": "تخيّل 120 طالباً مقسّمين إلى 4 فرق متساوية — كل فريق يمثل 25% من المجموع."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "120 ÷ 4 = 30 students per team.",
            "explanation_ar": "120 ÷ 4 = 30 طالباً في كل فريق."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One team (25%) contains 30 students.",
            "explanation_ar": "فريق واحد (25%) يحتوي على 30 طالباً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "25% of 120 = 30.",
            "explanation_ar": "25% من 120 = 30."
          }
        ],
        "hint_en": "Split 120 into 4 equal groups — each is 25%.",
        "hint_ar": "قسّم 120 إلى 4 مجموعات متساوية — كل مجموعة هي 25%.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-003",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 10% of 350?",
    "question_ar": "ما هو 10% من 350 ؟",
    "answer": 35,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 10% of 350. 10% means divide by 10.",
            "explanation_ar": "نحتاج 10% من 350. 10% تعني القسمة على 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Move the decimal one place left: 350 ÷ 10 = 35.",
            "explanation_ar": "حرّك الفاصلة مكاناً واحداً إلى اليسار: 350 ÷ 10 = 35."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "10% of 350 = 35.",
            "explanation_ar": "10% من 350 = 35."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 35.",
            "explanation_ar": "الجواب هو 35."
          }
        ],
        "hint_en": "10% of any number = divide by 10.",
        "hint_ar": "10% من أي عدد = قسّمه على 10.",
        "result_en": "The answer is 35",
        "result_ar": "الجواب هو 35"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "10% of 350 means (10 ÷ 100) × 350.",
            "explanation_ar": "10% من 350 تعني (10 ÷ 100) × 350."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Simplify 10/100 = 1/10. Now compute 350 ÷ 10 = 35.",
            "explanation_ar": "بسّط 10/100 = 1/10. الآن احسب 350 ÷ 10 = 35."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "10% of 350 = 35.",
            "explanation_ar": "10% من 350 = 35."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 35 × 10 = 350. ✓ The answer is 35.",
            "explanation_ar": "تحقق: 35 × 10 = 350. ✓ الجواب هو 35."
          }
        ],
        "hint_en": "10/100 simplifies to 1/10.",
        "hint_ar": "10/100 تبسيطها 1/10.",
        "result_en": "The answer is 35",
        "result_ar": "الجواب هو 35"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 350 km split into 10 equal segments — each segment is 10% of the distance.",
            "explanation_ar": "تخيّل 350 كم مقسّمة إلى 10 أجزاء متساوية — كل جزء هو 10% من المسافة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "350 ÷ 10 = 35 km per segment.",
            "explanation_ar": "350 ÷ 10 = 35 كم في كل جزء."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One segment (10%) = 35 km.",
            "explanation_ar": "جزء واحد (10%) = 35 كم."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "10% of 350 = 35.",
            "explanation_ar": "10% من 350 = 35."
          }
        ],
        "hint_en": "Split 350 into 10 equal pieces — one piece is 10%.",
        "hint_ar": "قسّم 350 إلى 10 قطع متساوية — قطعة واحدة هي 10%.",
        "result_en": "The answer is 35",
        "result_ar": "الجواب هو 35"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-004",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A shirt costs $80. It is on sale for 25% off. What is the sale price?",
    "question_ar": "قميص يكلّف 80 دولاراً. هو معروض بخصم 25%. ما هو سعر البيع ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "25% off $80. First find 25% of 80: 25% = 1/4.",
            "explanation_ar": "خصم 25% من 80 دولاراً. أولاً أوجد 25% من 80: 25% = 1/4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "80 ÷ 4 = 20. The discount is $20.",
            "explanation_ar": "80 ÷ 4 = 20. الخصم هو 20 دولاراً."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sale price = original − discount = 80 − 20 = 60.",
            "explanation_ar": "سعر البيع = الأصلي − الخصم = 80 − 20 = 60."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The sale price is $60.",
            "explanation_ar": "سعر البيع هو 60 دولاراً."
          }
        ],
        "hint_en": "Find 25% of 80, then subtract from 80.",
        "hint_ar": "أوجد 25% من 80، ثم اطرحها من 80.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Discount = 25% × 80 = (25/100) × 80.",
            "explanation_ar": "الخصم = 25% × 80 = (25/100) × 80."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25/100 = 1/4. So discount = 80 ÷ 4 = 20.",
            "explanation_ar": "25/100 = 1/4. إذن الخصم = 80 ÷ 4 = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Sale price = 80 − 20 = 60.",
            "explanation_ar": "سعر البيع = 80 − 20 = 60."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 60 is 75% of 80 (60/80 = 0.75). ✓ The answer is $60.",
            "explanation_ar": "تحقق: 60 هو 75% من 80 (60/80 = 0.75). ✓ الجواب هو 60 دولاراً."
          }
        ],
        "hint_en": "Discount = 80 ÷ 4 = 20. Sale price = 80 − 20.",
        "hint_ar": "الخصم = 80 ÷ 4 = 20. سعر البيع = 80 − 20.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Think of $80 as a bar divided into 4 equal sections of $20 each — each section is 25%.",
            "explanation_ar": "فكّر في 80 دولاراً كشريط مقسّم إلى 4 أقسام متساوية كل منها 20 دولاراً — كل قسم هو 25%."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 1 section (the 25% discount): that section = $20.",
            "explanation_ar": "ظلّل قسماً واحداً (خصم 25%): هذا القسم = 20 دولاراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The remaining 3 sections = 3 × 20 = $60.",
            "explanation_ar": "الأقسام الثلاثة المتبقية = 3 × 20 = 60 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Sale price = $60.",
            "explanation_ar": "سعر البيع = 60 دولاراً."
          }
        ],
        "hint_en": "Divide $80 into 4 equal parts; remove one part.",
        "hint_ar": "قسّم 80 دولاراً إلى 4 أجزاء متساوية؛ أزل جزءاً واحداً.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-005",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A town has a population of 200. It increases by 15%. What is the new population?",
    "question_ar": "يبلغ عدد سكان بلدة 200 نسمة. ازداد بنسبة 15%. ما هو عدد السكان الجديد ؟",
    "answer": 230,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "15% of 200. Recognise 15% = 10% + 5%.",
            "explanation_ar": "15% من 200. لاحظ أن 15% = 10% + 5%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 200 = 20. 5% of 200 = 10. Total increase = 20 + 10 = 30.",
            "explanation_ar": "10% من 200 = 20. 5% من 200 = 10. إجمالي الزيادة = 20 + 10 = 30."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "New population = 200 + 30 = 230.",
            "explanation_ar": "عدد السكان الجديد = 200 + 30 = 230."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new population is 230.",
            "explanation_ar": "عدد السكان الجديد هو 230."
          }
        ],
        "hint_en": "Split 15% into 10% + 5%, add both parts.",
        "hint_ar": "قسّم 15% إلى 10% + 5%، ثم اجمع الجزأين.",
        "result_en": "The answer is 230",
        "result_ar": "الجواب هو 230"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Increase = 15% × 200 = (15/100) × 200.",
            "explanation_ar": "الزيادة = 15% × 200 = (15/100) × 200."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "15 × 200 = 3000. Then 3000 ÷ 100 = 30.",
            "explanation_ar": "15 × 200 = 3000. ثم 3000 ÷ 100 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New population = 200 + 30 = 230.",
            "explanation_ar": "عدد السكان الجديد = 200 + 30 = 230."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 30/200 = 0.15 = 15%. ✓ The answer is 230.",
            "explanation_ar": "تحقق: 30/200 = 0.15 = 15%. ✓ الجواب هو 230."
          }
        ],
        "hint_en": "Compute 15% of 200, then add to 200.",
        "hint_ar": "احسب 15% من 200، ثم أضفها إلى 200.",
        "result_en": "The answer is 230",
        "result_ar": "الجواب هو 230"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a bar showing 200 people. A 15% growth means adding a new section.",
            "explanation_ar": "تخيّل شريطاً يمثل 200 شخص. نموٌّ بنسبة 15% يعني إضافة قسم جديد."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "15% of 200 = 10% (20 people) + 5% (10 people) = 30 extra people.",
            "explanation_ar": "15% من 200 = 10% (20 شخصاً) + 5% (10 أشخاص) = 30 شخصاً إضافياً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Original 200 + extra 30 = 230 total people.",
            "explanation_ar": "الأصليون 200 + إضافيون 30 = 230 شخصاً في المجموع."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "New population = 230.",
            "explanation_ar": "عدد السكان الجديد = 230."
          }
        ],
        "hint_en": "Visualise adding 30 new people to the original 200.",
        "hint_ar": "تخيّل إضافة 30 شخصاً جديداً إلى الـ 200 الأصليين.",
        "result_en": "The answer is 230",
        "result_ar": "الجواب هو 230"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-006",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 30% of 80?",
    "question_ar": "ما هو 30% من 80 ؟",
    "answer": 24,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 30% of 80. Recognise 30% = 3 × 10%.",
            "explanation_ar": "نحتاج 30% من 80. لاحظ أن 30% = 3 × 10%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 80 = 8.",
            "explanation_ar": "10% من 80 = 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "30% = 3 × 10%, so 30% of 80 = 3 × 8 = 24.",
            "explanation_ar": "30% = 3 × 10%، إذن 30% من 80 = 3 × 8 = 24."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 24.",
            "explanation_ar": "الجواب هو 24."
          }
        ],
        "hint_en": "Find 10% of 80, then multiply by 3.",
        "hint_ar": "أوجد 10% من 80، ثم اضرب في 3.",
        "result_en": "The answer is 24",
        "result_ar": "الجواب هو 24"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "30% of 80 = (30/100) × 80.",
            "explanation_ar": "30% من 80 = (30/100) × 80."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Simplify 30/100 = 3/10. Now 80 × 3 = 240, then 240 ÷ 10 = 24.",
            "explanation_ar": "بسّط 30/100 = 3/10. الآن 80 × 3 = 240، ثم 240 ÷ 10 = 24."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "30% of 80 = 24.",
            "explanation_ar": "30% من 80 = 24."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 24 ÷ 80 = 0.3 = 30%. ✓ The answer is 24.",
            "explanation_ar": "تحقق: 24 ÷ 80 = 0.3 = 30%. ✓ الجواب هو 24."
          }
        ],
        "hint_en": "30/100 = 3/10. Multiply 80 by 3 then divide by 10.",
        "hint_ar": "30/100 = 3/10. اضرب 80 في 3 ثم اقسم على 10.",
        "result_en": "The answer is 24",
        "result_ar": "الجواب هو 24"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 80 points on a test split into 10 equal bands of 8 points each.",
            "explanation_ar": "تخيّل 80 نقطة في اختبار مقسّمة إلى 10 شرائط متساوية من 8 نقاط لكل منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each band = 8 points. 30% means 3 bands.",
            "explanation_ar": "كل شريط = 8 نقاط. 30% يعني 3 شرائط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "3 bands × 8 points = 24 points.",
            "explanation_ar": "3 شرائط × 8 نقاط = 24 نقطة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "30% of 80 = 24.",
            "explanation_ar": "30% من 80 = 24."
          }
        ],
        "hint_en": "Divide 80 into 10 equal parts; take 3 parts.",
        "hint_ar": "قسّم 80 إلى 10 أجزاء متساوية؛ خذ 3 أجزاء.",
        "result_en": "The answer is 24",
        "result_ar": "الجواب هو 24"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-007",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A book originally costs $40. Its price increases by 50%. What is the new price?",
    "question_ar": "كتاب يكلّف في الأصل 40 دولاراً. ارتفع سعره بنسبة 50%. ما هو السعر الجديد ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "50% increase on $40. 50% = 1/2.",
            "explanation_ar": "زيادة 50% على 40 دولاراً. 50% = 1/2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "50% of 40 = 40 ÷ 2 = 20.",
            "explanation_ar": "50% من 40 = 40 ÷ 2 = 20."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "New price = 40 + 20 = 60.",
            "explanation_ar": "السعر الجديد = 40 + 20 = 60."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new price is $60.",
            "explanation_ar": "السعر الجديد هو 60 دولاراً."
          }
        ],
        "hint_en": "50% = half. Half of 40 is 20. Add to original.",
        "hint_ar": "50% = النصف. نصف 40 هو 20. أضفها إلى الأصلي.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Increase = 50% × 40 = (50/100) × 40.",
            "explanation_ar": "الزيادة = 50% × 40 = (50/100) × 40."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "50/100 = 1/2. So increase = 40 ÷ 2 = 20.",
            "explanation_ar": "50/100 = 1/2. إذن الزيادة = 40 ÷ 2 = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New price = 40 + 20 = 60.",
            "explanation_ar": "السعر الجديد = 40 + 20 = 60."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 20/40 = 0.5 = 50%. ✓ The answer is $60.",
            "explanation_ar": "تحقق: 20/40 = 0.5 = 50%. ✓ الجواب هو 60 دولاراً."
          }
        ],
        "hint_en": "50% = 1/2. Half of 40 = 20. New price = 40 + 20.",
        "hint_ar": "50% = 1/2. نصف 40 = 20. السعر الجديد = 40 + 20.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Think of the $40 book price as a full bar. A 50% increase means adding half the bar again.",
            "explanation_ar": "فكّر في سعر الكتاب 40 دولاراً كشريط كامل. زيادة 50% تعني إضافة نصف الشريط مرة أخرى."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Half of the bar = $20.",
            "explanation_ar": "نصف الشريط = 20 دولاراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Original bar ($40) + extra half ($20) = $60.",
            "explanation_ar": "الشريط الأصلي (40 دولاراً) + النصف الإضافي (20 دولاراً) = 60 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "New price = $60.",
            "explanation_ar": "السعر الجديد = 60 دولاراً."
          }
        ],
        "hint_en": "Visualise adding half of $40 on top of the original $40.",
        "hint_ar": "تخيّل إضافة نصف الـ 40 دولار فوق الـ 40 الأصلية.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-008",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 40% of 150?",
    "question_ar": "ما هو 40% من 150 ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 40% of 150. Recognise 40% = 4 × 10%.",
            "explanation_ar": "نحتاج 40% من 150. لاحظ أن 40% = 4 × 10%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 150 = 15.",
            "explanation_ar": "10% من 150 = 15."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "40% = 4 × 15 = 60.",
            "explanation_ar": "40% = 4 × 15 = 60."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 60.",
            "explanation_ar": "الجواب هو 60."
          }
        ],
        "hint_en": "Find 10% of 150, then multiply by 4.",
        "hint_ar": "أوجد 10% من 150، ثم اضرب في 4.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "40% of 150 = (40/100) × 150.",
            "explanation_ar": "40% من 150 = (40/100) × 150."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Simplify 40/100 = 2/5. Now 150 × 2 = 300, then 300 ÷ 5 = 60.",
            "explanation_ar": "بسّط 40/100 = 2/5. الآن 150 × 2 = 300، ثم 300 ÷ 5 = 60."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "40% of 150 = 60.",
            "explanation_ar": "40% من 150 = 60."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 60 ÷ 150 = 0.4 = 40%. ✓ The answer is 60.",
            "explanation_ar": "تحقق: 60 ÷ 150 = 0.4 = 40%. ✓ الجواب هو 60."
          }
        ],
        "hint_en": "40/100 = 2/5. Multiply 150 by 2 then divide by 5.",
        "hint_ar": "40/100 = 2/5. اضرب 150 في 2 ثم اقسم على 5.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 150 seats in a cinema. 40% are in the front section.",
            "explanation_ar": "تخيّل 150 مقعداً في سينما. 40% منها في القسم الأمامي."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Split 150 into 10 equal rows of 15. 40% = 4 rows.",
            "explanation_ar": "قسّم 150 إلى 10 صفوف متساوية من 15 مقعداً. 40% = 4 صفوف."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "4 rows × 15 seats = 60 seats.",
            "explanation_ar": "4 صفوف × 15 مقعداً = 60 مقعداً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "40% of 150 = 60.",
            "explanation_ar": "40% من 150 = 60."
          }
        ],
        "hint_en": "Split 150 into 10 equal rows; take 4 rows.",
        "hint_ar": "قسّم 150 إلى 10 صفوف متساوية؛ خذ 4 صفوف.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-009",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A jacket costs $200. It is discounted by 20%. What is the sale price?",
    "question_ar": "معطف يكلّف 200 دولار. خُفِّض سعره بنسبة 20%. ما هو سعر البيع ؟",
    "answer": 160,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "20% discount on $200. 20% = 2 × 10%.",
            "explanation_ar": "خصم 20% على 200 دولار. 20% = 2 × 10%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 200 = 20. So 20% = 2 × 20 = 40.",
            "explanation_ar": "10% من 200 = 20. إذن 20% = 2 × 20 = 40."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sale price = 200 − 40 = 160.",
            "explanation_ar": "سعر البيع = 200 − 40 = 160."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The sale price is $160.",
            "explanation_ar": "سعر البيع هو 160 دولاراً."
          }
        ],
        "hint_en": "Find 10% of 200, double it, then subtract from 200.",
        "hint_ar": "أوجد 10% من 200، ضاعفها، ثم اطرحها من 200.",
        "result_en": "The answer is 160",
        "result_ar": "الجواب هو 160"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Discount = 20% × 200 = (20/100) × 200.",
            "explanation_ar": "الخصم = 20% × 200 = (20/100) × 200."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20/100 = 1/5. Discount = 200 ÷ 5 = 40.",
            "explanation_ar": "20/100 = 1/5. الخصم = 200 ÷ 5 = 40."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Sale price = 200 − 40 = 160.",
            "explanation_ar": "سعر البيع = 200 − 40 = 160."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 40/200 = 0.2 = 20%. ✓ The answer is $160.",
            "explanation_ar": "تحقق: 40/200 = 0.2 = 20%. ✓ الجواب هو 160 دولاراً."
          }
        ],
        "hint_en": "20% of 200 = 40. Sale price = 200 − 40.",
        "hint_ar": "20% من 200 = 40. سعر البيع = 200 − 40.",
        "result_en": "The answer is 160",
        "result_ar": "الجواب هو 160"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine $200 as a bar divided into 5 equal sections of $40 each — each is 20%.",
            "explanation_ar": "تخيّل 200 دولار كشريط مقسّم إلى 5 أقسام متساوية من 40 دولاراً لكل منها — كل قسم هو 20%."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The discount removes 1 section: 1 × $40 = $40.",
            "explanation_ar": "الخصم يزيل قسماً واحداً: 1 × 40 دولاراً = 40 دولاراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remaining 4 sections = 4 × $40 = $160.",
            "explanation_ar": "الأقسام الأربعة المتبقية = 4 × 40 دولاراً = 160 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Sale price = $160.",
            "explanation_ar": "سعر البيع = 160 دولاراً."
          }
        ],
        "hint_en": "Divide $200 into 5 equal parts; remove one part.",
        "hint_ar": "قسّم 200 دولار إلى 5 أجزاء متساوية؛ أزل جزءاً واحداً.",
        "result_en": "The answer is 160",
        "result_ar": "الجواب هو 160"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-010",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 50% of 340?",
    "question_ar": "ما هو 50% من 340 ؟",
    "answer": 170,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 50% of 340. 50% = 1/2.",
            "explanation_ar": "نحتاج 50% من 340. 50% = 1/2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Half of 340 = 340 ÷ 2 = 170.",
            "explanation_ar": "نصف 340 = 340 ÷ 2 = 170."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "50% of 340 = 170.",
            "explanation_ar": "50% من 340 = 170."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 170.",
            "explanation_ar": "الجواب هو 170."
          }
        ],
        "hint_en": "50% = half. Divide 340 by 2.",
        "hint_ar": "50% = النصف. قسّم 340 على 2.",
        "result_en": "The answer is 170",
        "result_ar": "الجواب هو 170"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "50% of 340 = (50/100) × 340.",
            "explanation_ar": "50% من 340 = (50/100) × 340."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "50/100 = 1/2. So 340 ÷ 2 = 170.",
            "explanation_ar": "50/100 = 1/2. إذن 340 ÷ 2 = 170."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "50% of 340 = 170.",
            "explanation_ar": "50% من 340 = 170."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 170 × 2 = 340. ✓ The answer is 170.",
            "explanation_ar": "تحقق: 170 × 2 = 340. ✓ الجواب هو 170."
          }
        ],
        "hint_en": "50/100 = 1/2. Simply halve 340.",
        "hint_ar": "50/100 = 1/2. قسّم 340 على 2 مباشرة.",
        "result_en": "The answer is 170",
        "result_ar": "الجواب هو 170"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 340 pages in a book split into two equal halves.",
            "explanation_ar": "تخيّل 340 صفحة في كتاب مقسّمة إلى نصفين متساويين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each half contains 340 ÷ 2 = 170 pages.",
            "explanation_ar": "كل نصف يحتوي على 340 ÷ 2 = 170 صفحة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One half (50%) = 170 pages.",
            "explanation_ar": "نصف واحد (50%) = 170 صفحة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "50% of 340 = 170.",
            "explanation_ar": "50% من 340 = 170."
          }
        ],
        "hint_en": "Split 340 into 2 equal parts — one part is 50%.",
        "hint_ar": "قسّم 340 إلى جزأين متساويين — جزء واحد هو 50%.",
        "result_en": "The answer is 170",
        "result_ar": "الجواب هو 170"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-011",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A school has 400 students. 25% are in Grade 7. How many Grade 7 students are there?",
    "question_ar": "مدرسة بها 400 طالب. 25% منهم في الصف السابع. كم عدد طلاب الصف السابع ؟",
    "answer": 100,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "25% of 400. Recognise 25% = 1/4.",
            "explanation_ar": "25% من 400. لاحظ أن 25% = 1/4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Half of 400 = 200. Half again = 100.",
            "explanation_ar": "نصف 400 = 200. النصف مرة أخرى = 100."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "25% of 400 = 400 ÷ 4 = 100.",
            "explanation_ar": "25% من 400 = 400 ÷ 4 = 100."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There are 100 Grade 7 students.",
            "explanation_ar": "يوجد 100 طالب في الصف السابع."
          }
        ],
        "hint_en": "25% = 1/4. Divide 400 by 4.",
        "hint_ar": "25% = 1/4. قسّم 400 على 4.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "25% of 400 = (25/100) × 400.",
            "explanation_ar": "25% من 400 = (25/100) × 400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25/100 = 1/4. So 400 ÷ 4 = 100.",
            "explanation_ar": "25/100 = 1/4. إذن 400 ÷ 4 = 100."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "25% of 400 = 100 students.",
            "explanation_ar": "25% من 400 = 100 طالب."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 100 × 4 = 400. ✓ The answer is 100.",
            "explanation_ar": "تحقق: 100 × 4 = 400. ✓ الجواب هو 100."
          }
        ],
        "hint_en": "1/4 of 400 = 100.",
        "hint_ar": "1/4 من 400 = 100.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 400 students sorted into 4 equal grade groups.",
            "explanation_ar": "تخيّل 400 طالب مقسّمين إلى 4 مجموعات صفية متساوية."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "400 ÷ 4 = 100 students per group.",
            "explanation_ar": "400 ÷ 4 = 100 طالب في كل مجموعة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One group (25%) = 100 students.",
            "explanation_ar": "مجموعة واحدة (25%) = 100 طالب."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Grade 7 has 100 students.",
            "explanation_ar": "الصف السابع يضمّ 100 طالب."
          }
        ],
        "hint_en": "Split 400 students into 4 equal groups — one group is 25%.",
        "hint_ar": "قسّم 400 طالب إلى 4 مجموعات متساوية — مجموعة واحدة هي 25%.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-012",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A runner covers 300 km. She increases her monthly distance by 10%. How many km does she run in the new month?",
    "question_ar": "عداءة تقطع 300 كم. زادت مسافتها الشهرية بنسبة 10%. كم كيلومتراً تجري في الشهر الجديد ؟",
    "answer": 330,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "10% increase on 300 km. 10% = divide by 10.",
            "explanation_ar": "زيادة 10% على 300 كم. 10% = القسمة على 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 300 = 300 ÷ 10 = 30 km.",
            "explanation_ar": "10% من 300 = 300 ÷ 10 = 30 كم."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "New distance = 300 + 30 = 330 km.",
            "explanation_ar": "المسافة الجديدة = 300 + 30 = 330 كم."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "She runs 330 km in the new month.",
            "explanation_ar": "تجري 330 كم في الشهر الجديد."
          }
        ],
        "hint_en": "10% of 300 = 30. Add that to 300.",
        "hint_ar": "10% من 300 = 30. أضفها إلى 300.",
        "result_en": "The answer is 330",
        "result_ar": "الجواب هو 330"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Increase = 10% × 300 = (10/100) × 300.",
            "explanation_ar": "الزيادة = 10% × 300 = (10/100) × 300."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "10/100 = 1/10. So 300 ÷ 10 = 30.",
            "explanation_ar": "10/100 = 1/10. إذن 300 ÷ 10 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New distance = 300 + 30 = 330 km.",
            "explanation_ar": "المسافة الجديدة = 300 + 30 = 330 كم."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 30/300 = 0.1 = 10%. ✓ The answer is 330.",
            "explanation_ar": "تحقق: 30/300 = 0.1 = 10%. ✓ الجواب هو 330."
          }
        ],
        "hint_en": "10% of 300 = 30. New distance = 300 + 30.",
        "hint_ar": "10% من 300 = 30. المسافة الجديدة = 300 + 30.",
        "result_en": "The answer is 330",
        "result_ar": "الجواب هو 330"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a 300 km route divided into 10 equal stretches of 30 km each.",
            "explanation_ar": "تخيّل مسار 300 كم مقسّماً إلى 10 مقاطع متساوية من 30 كم لكل منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "One extra stretch (10%) = 30 km added to the route.",
            "explanation_ar": "مقطع إضافي واحد (10%) = 30 كم تُضاف إلى المسار."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Original 300 + extra 30 = 330 km total.",
            "explanation_ar": "الأصلية 300 + إضافي 30 = 330 كم إجمالاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "New monthly distance = 330 km.",
            "explanation_ar": "المسافة الشهرية الجديدة = 330 كم."
          }
        ],
        "hint_en": "Add one extra stretch (30 km) to the original 300 km.",
        "hint_ar": "أضف مقطعاً إضافياً واحداً (30 كم) إلى الـ 300 كم الأصلية.",
        "result_en": "The answer is 330",
        "result_ar": "الجواب هو 330"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-013",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 15% of 200?",
    "question_ar": "ما هو 15% من 200 ؟",
    "answer": 30,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 15% of 200. Split 15% = 10% + 5%.",
            "explanation_ar": "نحتاج 15% من 200. قسّم 15% = 10% + 5%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 200 = 20. 5% of 200 = 10.",
            "explanation_ar": "10% من 200 = 20. 5% من 200 = 10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "15% of 200 = 20 + 10 = 30.",
            "explanation_ar": "15% من 200 = 20 + 10 = 30."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 30.",
            "explanation_ar": "الجواب هو 30."
          }
        ],
        "hint_en": "15% = 10% + 5%. Compute each and add.",
        "hint_ar": "15% = 10% + 5%. احسب كلاً منهما وأضفهما.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "15% of 200 = (15/100) × 200.",
            "explanation_ar": "15% من 200 = (15/100) × 200."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "15 × 200 = 3000. Then 3000 ÷ 100 = 30.",
            "explanation_ar": "15 × 200 = 3000. ثم 3000 ÷ 100 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15% of 200 = 30.",
            "explanation_ar": "15% من 200 = 30."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 30 ÷ 200 = 0.15 = 15%. ✓ The answer is 30.",
            "explanation_ar": "تحقق: 30 ÷ 200 = 0.15 = 15%. ✓ الجواب هو 30."
          }
        ],
        "hint_en": "Multiply 15 × 200 then divide by 100.",
        "hint_ar": "اضرب 15 × 200 ثم اقسم على 100.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine $200 savings. You spend 15% on a gift.",
            "explanation_ar": "تخيّل 200 دولار مدخرات. تنفق 15% منها على هدية."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "10% of 200 = $20 (two $10 bands). 5% = $10 (one $10 band). Total gift cost = $30.",
            "explanation_ar": "10% من 200 = 20 دولاراً (شريطان من 10 دولارات). 5% = 10 دولارات (شريط واحد). تكلفة الهدية = 30 دولاراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The 15% section equals $30.",
            "explanation_ar": "قسم الـ 15% يساوي 30 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "15% of 200 = 30.",
            "explanation_ar": "15% من 200 = 30."
          }
        ],
        "hint_en": "Use a bar model: 10% is $20, 5% is $10; total = $30.",
        "hint_ar": "استخدم نموذج الشريط: 10% هي 20 دولاراً، و5% هي 10 دولارات؛ المجموع = 30 دولاراً.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-014",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A phone costs $500. Its price is reduced by 40%. What is the new price?",
    "question_ar": "هاتف يكلّف 500 دولار. انخفض سعره بنسبة 40%. ما هو السعر الجديد ؟",
    "answer": 300,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "40% reduction on $500. 40% = 4 × 10%.",
            "explanation_ar": "تخفيض 40% على 500 دولار. 40% = 4 × 10%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 500 = 50. So 40% = 4 × 50 = 200.",
            "explanation_ar": "10% من 500 = 50. إذن 40% = 4 × 50 = 200."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "New price = 500 − 200 = 300.",
            "explanation_ar": "السعر الجديد = 500 − 200 = 300."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new price is $300.",
            "explanation_ar": "السعر الجديد هو 300 دولار."
          }
        ],
        "hint_en": "40% of 500 = 200. New price = 500 − 200.",
        "hint_ar": "40% من 500 = 200. السعر الجديد = 500 − 200.",
        "result_en": "The answer is 300",
        "result_ar": "الجواب هو 300"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Reduction = 40% × 500 = (40/100) × 500.",
            "explanation_ar": "التخفيض = 40% × 500 = (40/100) × 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "40/100 = 2/5. So 500 × 2 = 1000, then 1000 ÷ 5 = 200.",
            "explanation_ar": "40/100 = 2/5. إذن 500 × 2 = 1000، ثم 1000 ÷ 5 = 200."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New price = 500 − 200 = 300.",
            "explanation_ar": "السعر الجديد = 500 − 200 = 300."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 200/500 = 0.4 = 40%. ✓ The answer is $300.",
            "explanation_ar": "تحقق: 200/500 = 0.4 = 40%. ✓ الجواب هو 300 دولار."
          }
        ],
        "hint_en": "40% of 500 = 200. Subtract from 500.",
        "hint_ar": "40% من 500 = 200. اطرحها من 500.",
        "result_en": "The answer is 300",
        "result_ar": "الجواب هو 300"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine $500 as 10 blocks of $50. Each block is 10%.",
            "explanation_ar": "تخيّل 500 دولار كـ 10 مكعبات من 50 دولاراً. كل مكعب هو 10%."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "A 40% reduction removes 4 blocks: 4 × $50 = $200.",
            "explanation_ar": "تخفيض 40% يزيل 4 مكعبات: 4 × 50 دولاراً = 200 دولار."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remaining 6 blocks = 6 × $50 = $300.",
            "explanation_ar": "المكعبات الـ 6 المتبقية = 6 × 50 دولاراً = 300 دولار."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "New price = $300.",
            "explanation_ar": "السعر الجديد = 300 دولار."
          }
        ],
        "hint_en": "Remove 4 blocks of $50 from the 10-block bar.",
        "hint_ar": "أزل 4 مكعبات من 50 دولاراً من الشريط المكوّن من 10 مكعبات.",
        "result_en": "The answer is 300",
        "result_ar": "الجواب هو 300"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-015",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 20% of 450?",
    "question_ar": "ما هو 20% من 450 ؟",
    "answer": 90,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 20% of 450. 20% = 2 × 10%.",
            "explanation_ar": "نحتاج 20% من 450. 20% = 2 × 10%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 450 = 45.",
            "explanation_ar": "10% من 450 = 45."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "20% = 2 × 45 = 90.",
            "explanation_ar": "20% = 2 × 45 = 90."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 90.",
            "explanation_ar": "الجواب هو 90."
          }
        ],
        "hint_en": "10% of 450 = 45. Double it for 20%.",
        "hint_ar": "10% من 450 = 45. ضاعفها للحصول على 20%.",
        "result_en": "The answer is 90",
        "result_ar": "الجواب هو 90"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "20% of 450 = (20/100) × 450.",
            "explanation_ar": "20% من 450 = (20/100) × 450."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20/100 = 1/5. So 450 ÷ 5 = 90.",
            "explanation_ar": "20/100 = 1/5. إذن 450 ÷ 5 = 90."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20% of 450 = 90.",
            "explanation_ar": "20% من 450 = 90."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 90 × 5 = 450. ✓ The answer is 90.",
            "explanation_ar": "تحقق: 90 × 5 = 450. ✓ الجواب هو 90."
          }
        ],
        "hint_en": "20% = 1/5. Divide 450 by 5.",
        "hint_ar": "20% = 1/5. قسّم 450 على 5.",
        "result_en": "The answer is 90",
        "result_ar": "الجواب هو 90"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 450 bottles sorted into 5 equal crates — each crate holds 20%.",
            "explanation_ar": "تخيّل 450 زجاجة مرتّبة في 5 صناديق متساوية — كل صندوق يحتوي على 20%."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "450 ÷ 5 = 90 bottles per crate.",
            "explanation_ar": "450 ÷ 5 = 90 زجاجة في كل صندوق."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One crate (20%) holds 90 bottles.",
            "explanation_ar": "صندوق واحد (20%) يحتوي على 90 زجاجة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "20% of 450 = 90.",
            "explanation_ar": "20% من 450 = 90."
          }
        ],
        "hint_en": "Split 450 into 5 equal crates — one crate is 20%.",
        "hint_ar": "قسّم 450 إلى 5 صناديق متساوية — صندوق واحد هو 20%.",
        "result_en": "The answer is 90",
        "result_ar": "الجواب هو 90"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-016",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A city has 500 trees. 30% are oak trees. How many oak trees are there?",
    "question_ar": "مدينة بها 500 شجرة. 30% منها أشجار بلوط. كم عدد أشجار البلوط ؟",
    "answer": 150,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "30% of 500. Recognise 30% = 3 × 10%.",
            "explanation_ar": "30% من 500. لاحظ أن 30% = 3 × 10%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 500 = 50.",
            "explanation_ar": "10% من 500 = 50."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "30% = 3 × 50 = 150.",
            "explanation_ar": "30% = 3 × 50 = 150."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There are 150 oak trees.",
            "explanation_ar": "يوجد 150 شجرة بلوط."
          }
        ],
        "hint_en": "10% of 500 = 50. Multiply by 3 for 30%.",
        "hint_ar": "10% من 500 = 50. اضرب في 3 للحصول على 30%.",
        "result_en": "The answer is 150",
        "result_ar": "الجواب هو 150"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "30% of 500 = (30/100) × 500.",
            "explanation_ar": "30% من 500 = (30/100) × 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "30/100 = 3/10. So 500 × 3 = 1500, then 1500 ÷ 10 = 150.",
            "explanation_ar": "30/100 = 3/10. إذن 500 × 3 = 1500، ثم 1500 ÷ 10 = 150."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "30% of 500 = 150 oak trees.",
            "explanation_ar": "30% من 500 = 150 شجرة بلوط."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 150/500 = 0.3 = 30%. ✓ The answer is 150.",
            "explanation_ar": "تحقق: 150/500 = 0.3 = 30%. ✓ الجواب هو 150."
          }
        ],
        "hint_en": "3/10 of 500 = 150.",
        "hint_ar": "3/10 من 500 = 150.",
        "result_en": "The answer is 150",
        "result_ar": "الجواب هو 150"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 500 trees arranged in 10 equal rows of 50 trees each.",
            "explanation_ar": "تخيّل 500 شجرة مرتّبة في 10 صفوف متساوية من 50 شجرة لكل صف."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "30% = 3 rows. Each row has 50 trees.",
            "explanation_ar": "30% = 3 صفوف. كل صف يحتوي على 50 شجرة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "3 rows × 50 trees = 150 oak trees.",
            "explanation_ar": "3 صفوف × 50 شجرة = 150 شجرة بلوط."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "30% of 500 = 150.",
            "explanation_ar": "30% من 500 = 150."
          }
        ],
        "hint_en": "Divide 500 into 10 rows of 50; take 3 rows.",
        "hint_ar": "قسّم 500 إلى 10 صفوف من 50؛ خذ 3 صفوف.",
        "result_en": "The answer is 150",
        "result_ar": "الجواب هو 150"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-017",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A bicycle costs $300. The price increases by 20%. What is the new price?",
    "question_ar": "دراجة هوائية تكلّف 300 دولار. ارتفع سعرها بنسبة 20%. ما هو السعر الجديد ؟",
    "answer": 360,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "20% increase on $300. 20% = 2 × 10%.",
            "explanation_ar": "زيادة 20% على 300 دولار. 20% = 2 × 10%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 300 = 30. So 20% = 2 × 30 = 60.",
            "explanation_ar": "10% من 300 = 30. إذن 20% = 2 × 30 = 60."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "New price = 300 + 60 = 360.",
            "explanation_ar": "السعر الجديد = 300 + 60 = 360."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new price is $360.",
            "explanation_ar": "السعر الجديد هو 360 دولاراً."
          }
        ],
        "hint_en": "20% of 300 = 60. New price = 300 + 60.",
        "hint_ar": "20% من 300 = 60. السعر الجديد = 300 + 60.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Increase = 20% × 300 = (20/100) × 300.",
            "explanation_ar": "الزيادة = 20% × 300 = (20/100) × 300."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20/100 = 1/5. So 300 ÷ 5 = 60.",
            "explanation_ar": "20/100 = 1/5. إذن 300 ÷ 5 = 60."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New price = 300 + 60 = 360.",
            "explanation_ar": "السعر الجديد = 300 + 60 = 360."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 60/300 = 0.2 = 20%. ✓ The answer is $360.",
            "explanation_ar": "تحقق: 60/300 = 0.2 = 20%. ✓ الجواب هو 360 دولاراً."
          }
        ],
        "hint_en": "1/5 of 300 = 60. Add to 300.",
        "hint_ar": "1/5 من 300 = 60. أضفها إلى 300.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture the $300 price as 5 equal blocks of $60 each.",
            "explanation_ar": "تخيّل سعر 300 دولار كـ 5 مكعبات متساوية من 60 دولاراً لكل منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "A 20% increase adds 1 extra block of $60.",
            "explanation_ar": "زيادة 20% تضيف مكعباً إضافياً واحداً بقيمة 60 دولاراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "5 original blocks + 1 new block = 6 blocks × $60 = $360.",
            "explanation_ar": "5 مكعبات أصلية + مكعب جديد = 6 مكعبات × 60 دولاراً = 360 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "New price = $360.",
            "explanation_ar": "السعر الجديد = 360 دولاراً."
          }
        ],
        "hint_en": "Add one extra block of $60 to the five existing $60 blocks.",
        "hint_ar": "أضف مكعباً إضافياً من 60 دولاراً إلى الخمسة مكعبات الموجودة.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-018",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 50% of 180?",
    "question_ar": "ما هو 50% من 180 ؟",
    "answer": 90,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 50% of 180. 50% = 1/2.",
            "explanation_ar": "نحتاج 50% من 180. 50% = 1/2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Half of 180 = 180 ÷ 2 = 90.",
            "explanation_ar": "نصف 180 = 180 ÷ 2 = 90."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "50% of 180 = 90.",
            "explanation_ar": "50% من 180 = 90."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 90.",
            "explanation_ar": "الجواب هو 90."
          }
        ],
        "hint_en": "50% is simply half. Halve 180.",
        "hint_ar": "50% هو النصف ببساطة. قسّم 180 على 2.",
        "result_en": "The answer is 90",
        "result_ar": "الجواب هو 90"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "50% of 180 = (50/100) × 180.",
            "explanation_ar": "50% من 180 = (50/100) × 180."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "50/100 = 1/2. So 180 ÷ 2 = 90.",
            "explanation_ar": "50/100 = 1/2. إذن 180 ÷ 2 = 90."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "50% of 180 = 90.",
            "explanation_ar": "50% من 180 = 90."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 90 × 2 = 180. ✓ The answer is 90.",
            "explanation_ar": "تحقق: 90 × 2 = 180. ✓ الجواب هو 90."
          }
        ],
        "hint_en": "1/2 of 180 = 90.",
        "hint_ar": "1/2 من 180 = 90.",
        "result_en": "The answer is 90",
        "result_ar": "الجواب هو 90"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 180 coins split equally into two piles.",
            "explanation_ar": "تخيّل 180 عملة مقسّمة بالتساوي إلى كومتين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each pile = 180 ÷ 2 = 90 coins.",
            "explanation_ar": "كل كومة = 180 ÷ 2 = 90 عملة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One pile (50%) = 90 coins.",
            "explanation_ar": "كومة واحدة (50%) = 90 عملة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "50% of 180 = 90.",
            "explanation_ar": "50% من 180 = 90."
          }
        ],
        "hint_en": "Split 180 into 2 equal piles — one pile is 50%.",
        "hint_ar": "قسّم 180 إلى كومتين متساويتين — كومة واحدة هي 50%.",
        "result_en": "The answer is 90",
        "result_ar": "الجواب هو 90"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-019",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A shop has 240 items. 25% are on sale. How many items are on sale?",
    "question_ar": "متجر يحتوي على 240 سلعة. 25% منها في تخفيضات. كم عدد السلع المخفّضة ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "25% of 240. Recognise 25% = 1/4.",
            "explanation_ar": "25% من 240. لاحظ أن 25% = 1/4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Half of 240 = 120. Half again = 60.",
            "explanation_ar": "نصف 240 = 120. النصف مرة أخرى = 60."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "25% of 240 = 240 ÷ 4 = 60.",
            "explanation_ar": "25% من 240 = 240 ÷ 4 = 60."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "60 items are on sale.",
            "explanation_ar": "60 سلعة مخفّضة."
          }
        ],
        "hint_en": "25% = 1/4. Divide 240 by 4.",
        "hint_ar": "25% = 1/4. قسّم 240 على 4.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "25% of 240 = (25/100) × 240.",
            "explanation_ar": "25% من 240 = (25/100) × 240."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25/100 = 1/4. So 240 ÷ 4 = 60.",
            "explanation_ar": "25/100 = 1/4. إذن 240 ÷ 4 = 60."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "25% of 240 = 60 sale items.",
            "explanation_ar": "25% من 240 = 60 سلعة مخفّضة."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 60 × 4 = 240. ✓ The answer is 60.",
            "explanation_ar": "تحقق: 60 × 4 = 240. ✓ الجواب هو 60."
          }
        ],
        "hint_en": "1/4 of 240 = 60.",
        "hint_ar": "1/4 من 240 = 60.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 240 items arranged in 4 equal shelf sections of 60 items each.",
            "explanation_ar": "تخيّل 240 سلعة مرتّبة في 4 أقسام رفوف متساوية من 60 سلعة لكل قسم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "One section (25%) = 60 items on sale.",
            "explanation_ar": "قسم واحد (25%) = 60 سلعة مخفّضة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The sale section contains 60 items.",
            "explanation_ar": "قسم التخفيضات يحتوي على 60 سلعة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "25% of 240 = 60.",
            "explanation_ar": "25% من 240 = 60."
          }
        ],
        "hint_en": "Split 240 into 4 equal shelves — one shelf is 25%.",
        "hint_ar": "قسّم 240 إلى 4 رفوف متساوية — رف واحد هو 25%.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-020",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A bag of rice weighs 400 g. After drying, it loses 10% of its weight. What is the new weight?",
    "question_ar": "كيس أرز يزن 400 غرام. بعد التجفيف، يفقد 10% من وزنه. ما هو الوزن الجديد ؟",
    "answer": 360,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "10% reduction on 400 g. 10% = divide by 10.",
            "explanation_ar": "تخفيض 10% على 400 غرام. 10% = القسمة على 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 400 = 40 g lost.",
            "explanation_ar": "10% من 400 = 40 غرام تفقد."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "New weight = 400 − 40 = 360 g.",
            "explanation_ar": "الوزن الجديد = 400 − 40 = 360 غرام."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new weight is 360 g.",
            "explanation_ar": "الوزن الجديد هو 360 غرام."
          }
        ],
        "hint_en": "10% of 400 = 40. Subtract from 400.",
        "hint_ar": "10% من 400 = 40. اطرحها من 400.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Loss = 10% × 400 = (10/100) × 400.",
            "explanation_ar": "الفقدان = 10% × 400 = (10/100) × 400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "10/100 = 1/10. So 400 ÷ 10 = 40 g.",
            "explanation_ar": "10/100 = 1/10. إذن 400 ÷ 10 = 40 غرام."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New weight = 400 − 40 = 360 g.",
            "explanation_ar": "الوزن الجديد = 400 − 40 = 360 غرام."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 40/400 = 0.1 = 10%. ✓ The answer is 360.",
            "explanation_ar": "تحقق: 40/400 = 0.1 = 10%. ✓ الجواب هو 360."
          }
        ],
        "hint_en": "10% of 400 = 40. New weight = 400 − 40.",
        "hint_ar": "10% من 400 = 40. الوزن الجديد = 400 − 40.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine the 400 g bag as 10 equal segments of 40 g each.",
            "explanation_ar": "تخيّل الكيس البالغ 400 غرام كـ 10 أجزاء متساوية من 40 غرام لكل منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Drying removes 1 segment (10%): 40 g evaporates.",
            "explanation_ar": "التجفيف يزيل جزءاً واحداً (10%): 40 غرام تتبخر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remaining 9 segments = 9 × 40 = 360 g.",
            "explanation_ar": "الأجزاء التسعة المتبقية = 9 × 40 = 360 غرام."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "New weight = 360 g.",
            "explanation_ar": "الوزن الجديد = 360 غرام."
          }
        ],
        "hint_en": "Remove 1 segment (40 g) from 10 segments of 40 g.",
        "hint_ar": "أزل جزءاً واحداً (40 غراماً) من 10 أجزاء من 40 غراماً.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-021",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "What is 15% of 300?",
    "question_ar": "ما هو 15% من 300 ؟",
    "answer": 45,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 15% of 300. Split 15% = 10% + 5%.",
            "explanation_ar": "نحتاج 15% من 300. قسّم 15% = 10% + 5%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10% of 300 = 30. 5% of 300 = 15.",
            "explanation_ar": "10% من 300 = 30. 5% من 300 = 15."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "15% of 300 = 30 + 15 = 45.",
            "explanation_ar": "15% من 300 = 30 + 15 = 45."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 45.",
            "explanation_ar": "الجواب هو 45."
          }
        ],
        "hint_en": "15% = 10% + 5%. Compute both parts of 300 and add.",
        "hint_ar": "15% = 10% + 5%. احسب كلا الجزأين من 300 ثم أضفهما.",
        "result_en": "The answer is 45",
        "result_ar": "الجواب هو 45"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "15% of 300 = (15/100) × 300.",
            "explanation_ar": "15% من 300 = (15/100) × 300."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "15 × 300 = 4500. Then 4500 ÷ 100 = 45.",
            "explanation_ar": "15 × 300 = 4500. ثم 4500 ÷ 100 = 45."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15% of 300 = 45.",
            "explanation_ar": "15% من 300 = 45."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 45/300 = 0.15 = 15%. ✓ The answer is 45.",
            "explanation_ar": "تحقق: 45/300 = 0.15 = 15%. ✓ الجواب هو 45."
          }
        ],
        "hint_en": "15 × 300 ÷ 100 = 45.",
        "hint_ar": "15 × 300 ÷ 100 = 45.",
        "result_en": "The answer is 45",
        "result_ar": "الجواب هو 45"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine earning $300 and saving 15% each month.",
            "explanation_ar": "تخيّل أنك تكسب 300 دولار وتدّخر 15% كل شهر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "10% of $300 = $30 (first saving chunk). 5% = $15 (second chunk).",
            "explanation_ar": "10% من 300 دولار = 30 دولاراً (الجزء الأول من المدخرات). 5% = 15 دولاراً (الجزء الثاني)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total savings = $30 + $15 = $45.",
            "explanation_ar": "إجمالي المدخرات = 30 + 15 = 45 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "15% of 300 = 45.",
            "explanation_ar": "15% من 300 = 45."
          }
        ],
        "hint_en": "Add the $30 (10%) chunk and the $15 (5%) chunk together.",
        "hint_ar": "أضف جزء الـ 30 دولاراً (10%) وجزء الـ 15 دولاراً (5%) معاً.",
        "result_en": "The answer is 45",
        "result_ar": "الجواب هو 45"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-022",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A class of 120 students took a test. 50% passed. How many students passed?",
    "question_ar": "فصل من 120 طالباً أدّوا اختباراً. 50% منهم نجحوا. كم طالباً نجح ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "50% of 120. 50% = 1/2.",
            "explanation_ar": "50% من 120. 50% = 1/2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Half of 120 = 60.",
            "explanation_ar": "نصف 120 = 60."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "50% of 120 = 60 students.",
            "explanation_ar": "50% من 120 = 60 طالباً."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "60 students passed.",
            "explanation_ar": "60 طالباً نجحوا."
          }
        ],
        "hint_en": "50% = half. Half of 120 = 60.",
        "hint_ar": "50% = النصف. نصف 120 = 60.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "50% of 120 = (50/100) × 120.",
            "explanation_ar": "50% من 120 = (50/100) × 120."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "50/100 = 1/2. So 120 ÷ 2 = 60.",
            "explanation_ar": "50/100 = 1/2. إذن 120 ÷ 2 = 60."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "50% of 120 = 60 students passed.",
            "explanation_ar": "50% من 120 = 60 طالباً نجحوا."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 60 × 2 = 120. ✓ The answer is 60.",
            "explanation_ar": "تحقق: 60 × 2 = 120. ✓ الجواب هو 60."
          }
        ],
        "hint_en": "1/2 of 120 = 60.",
        "hint_ar": "1/2 من 120 = 60.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 120 students sitting in two equal rows — one row passes, one row does not.",
            "explanation_ar": "تخيّل 120 طالباً جالسين في صفّين متساويين — صفٌّ ينجح وصفٌّ لا ينجح."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each row = 120 ÷ 2 = 60 students.",
            "explanation_ar": "كل صف = 120 ÷ 2 = 60 طالباً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The passing row (50%) = 60 students.",
            "explanation_ar": "الصف الناجح (50%) = 60 طالباً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "50% of 120 = 60 students passed.",
            "explanation_ar": "50% من 120 = 60 طالباً نجحوا."
          }
        ],
        "hint_en": "Split 120 students into 2 equal rows — one row is 50%.",
        "hint_ar": "قسّم 120 طالباً إلى صفّين متساويين — صفٌّ واحد هو 50%.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-023",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A village had 320 people. Its population increases by 25%. What is the new population?",
    "question_ar": "قرية بها 320 شخصاً. زاد عدد سكانها بنسبة 25%. ما هو العدد الجديد للسكان ؟",
    "answer": 400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "25% increase on 320. 25% = 1/4.",
            "explanation_ar": "زيادة 25% على 320. 25% = 1/4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "25% of 320 = 320 ÷ 4 = 80.",
            "explanation_ar": "25% من 320 = 320 ÷ 4 = 80."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "New population = 320 + 80 = 400.",
            "explanation_ar": "العدد الجديد للسكان = 320 + 80 = 400."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new population is 400.",
            "explanation_ar": "العدد الجديد للسكان هو 400."
          }
        ],
        "hint_en": "25% = 1/4. One quarter of 320 = 80. Add to 320.",
        "hint_ar": "25% = 1/4. ربع 320 = 80. أضفها إلى 320.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Increase = 25% × 320 = (25/100) × 320.",
            "explanation_ar": "الزيادة = 25% × 320 = (25/100) × 320."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25/100 = 1/4. So 320 ÷ 4 = 80.",
            "explanation_ar": "25/100 = 1/4. إذن 320 ÷ 4 = 80."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New population = 320 + 80 = 400.",
            "explanation_ar": "العدد الجديد للسكان = 320 + 80 = 400."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 80/320 = 0.25 = 25%. ✓ The answer is 400.",
            "explanation_ar": "تحقق: 80/320 = 0.25 = 25%. ✓ الجواب هو 400."
          }
        ],
        "hint_en": "1/4 of 320 = 80. New population = 320 + 80.",
        "hint_ar": "1/4 من 320 = 80. العدد الجديد = 320 + 80.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 320 villagers in 4 equal groups of 80 each.",
            "explanation_ar": "تخيّل 320 قروياً في 4 مجموعات متساوية من 80 شخصاً لكل منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "A 25% increase adds 1 extra group of 80 new villagers.",
            "explanation_ar": "زيادة 25% تضيف مجموعة إضافية واحدة من 80 قروياً جديداً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "4 original groups + 1 new group = 5 groups × 80 = 400.",
            "explanation_ar": "4 مجموعات أصلية + مجموعة جديدة = 5 مجموعات × 80 = 400."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "New population = 400.",
            "explanation_ar": "العدد الجديد للسكان = 400."
          }
        ],
        "hint_en": "Add one extra group of 80 to the four existing groups.",
        "hint_ar": "أضف مجموعة إضافية واحدة من 80 إلى المجموعات الأربع الموجودة.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-easy-024",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A laptop costs $480. It is sold at a 50% discount. What is the sale price?",
    "question_ar": "حاسوب محمول يكلّف 480 دولاراً. يُباع بخصم 50%. ما هو سعر البيع ؟",
    "answer": 240,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "50% discount on $480. 50% = 1/2.",
            "explanation_ar": "خصم 50% على 480 دولاراً. 50% = 1/2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "50% of 480 = 480 ÷ 2 = 240.",
            "explanation_ar": "50% من 480 = 480 ÷ 2 = 240."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sale price = 480 − 240 = 240.",
            "explanation_ar": "سعر البيع = 480 − 240 = 240."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The sale price is $240.",
            "explanation_ar": "سعر البيع هو 240 دولاراً."
          }
        ],
        "hint_en": "50% off means pay half. Half of 480 = 240.",
        "hint_ar": "خصم 50% يعني تدفع النصف. نصف 480 = 240.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Discount = 50% × 480 = (50/100) × 480.",
            "explanation_ar": "الخصم = 50% × 480 = (50/100) × 480."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "50/100 = 1/2. Discount = 480 ÷ 2 = 240.",
            "explanation_ar": "50/100 = 1/2. الخصم = 480 ÷ 2 = 240."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Sale price = 480 − 240 = 240.",
            "explanation_ar": "سعر البيع = 480 − 240 = 240."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 240/480 = 0.5 = 50%. ✓ The answer is $240.",
            "explanation_ar": "تحقق: 240/480 = 0.5 = 50%. ✓ الجواب هو 240 دولاراً."
          }
        ],
        "hint_en": "50% of 480 = 240. Sale price = 480 − 240 = 240.",
        "hint_ar": "50% من 480 = 240. سعر البيع = 480 − 240 = 240.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Think of the $480 laptop price as two equal halves of $240 each.",
            "explanation_ar": "فكّر في سعر الحاسوب 480 دولاراً كنصفين متساويين من 240 دولاراً لكل منهما."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "A 50% discount removes one half: $240 is deducted.",
            "explanation_ar": "خصم 50% يزيل نصفاً واحداً: 240 دولاراً تُخصم."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The remaining half = $240.",
            "explanation_ar": "النصف المتبقي = 240 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Sale price = $240.",
            "explanation_ar": "سعر البيع = 240 دولاراً."
          }
        ],
        "hint_en": "Cut $480 in half — the sale price is the remaining half.",
        "hint_ar": "قسّم 480 دولاراً إلى نصفين — سعر البيع هو النصف المتبقي.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-001",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A price increases from $60 to $75. What is the percentage increase?",
    "question_ar": "ارتفع السعر من 60 دولاراً إلى 75 دولاراً. ما نسبة الزيادة؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find the increase: $75 − $60 = $15",
            "explanation_ar": "Find the increase: $75 − $60 = $15"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Set up ratio: 15 ÷ 60 = 0.25",
            "explanation_ar": "Set up ratio: 15 ÷ 60 = 0.25"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply by 100: 0.25 × 100 = 25",
            "explanation_ar": "Multiply by 100: 0.25 × 100 = 25"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The percentage increase is 25%",
            "explanation_ar": "The percentage increase is 25%"
          }
        ],
        "hint_en": "Divide the change by the original, then multiply by 100.",
        "hint_ar": "اقسم التغيير على الأصلي ثم اضرب في 100.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Change = $75 − $60 = $15",
            "explanation_ar": "Change = $75 − $60 = $15"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Express as fraction of original: 15/60 = 1/4",
            "explanation_ar": "Express as fraction of original: 15/60 = 1/4"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Convert 1/4 to percent: 1/4 = 25/100",
            "explanation_ar": "Convert 1/4 to percent: 1/4 = 25/100"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The percentage increase is 25%",
            "explanation_ar": "The percentage increase is 25%"
          }
        ],
        "hint_en": "Simplify the fraction 15/60 to find the percent.",
        "hint_ar": "بسّط الكسر 15/60 لإيجاد النسبة المئوية.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar representing $60 as 100%",
            "explanation_ar": "Draw a bar representing $60 as 100%"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The new amount $75 is $15 more than $60",
            "explanation_ar": "The new amount $75 is $15 more than $60"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each $1 of $60 equals 100/60 ≈ 1.667%; so $15 = 15 × (100/60) = 25%",
            "explanation_ar": "Each $1 of $60 equals 100/60 ≈ 1.667%; so $15 = 15 × (100/60) = 25%"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The bar extension of $15 represents 25% of the original $60",
            "explanation_ar": "The bar extension of $15 represents 25% of the original $60"
          }
        ],
        "hint_en": "Picture the original $60 as a full bar, then see how much extra $75 adds.",
        "hint_ar": "تخيّل 60 دولاراً شريطاً كاملاً ثم انظر كم تضيف 75 دولاراً.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-002",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "After a 30% discount, a jacket costs $84. What was the original price?",
    "question_ar": "بعد خصم 30%، أصبح سعر الجاكيت 84 دولاراً. ما كان السعر الأصلي؟",
    "answer": 120,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 30% off, the price is 70% of the original",
            "explanation_ar": "After 30% off, the price is 70% of the original"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Set up equation: 0.70 × original = $84",
            "explanation_ar": "Set up equation: 0.70 × original = $84"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides: original = 84 ÷ 0.70 = 120",
            "explanation_ar": "Divide both sides: original = 84 ÷ 0.70 = 120"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The original price was $120",
            "explanation_ar": "The original price was $120"
          }
        ],
        "hint_en": "A 30% discount means you paid 70% of the original price.",
        "hint_ar": "الخصم 30% يعني أنك دفعت 70% من السعر الأصلي.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "30% discount → remaining = 100% − 30% = 70%",
            "explanation_ar": "30% discount → remaining = 100% − 30% = 70%"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "70% of original = $84, so 1% = 84 ÷ 70 = $1.20",
            "explanation_ar": "70% of original = $84, so 1% = 84 ÷ 70 = $1.20"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100% = 1.20 × 100 = $120",
            "explanation_ar": "100% = 1.20 × 100 = $120"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The original price was $120",
            "explanation_ar": "The original price was $120"
          }
        ],
        "hint_en": "Find 1% first by dividing $84 by 70, then scale to 100%.",
        "hint_ar": "أوجد 1% أولاً بقسمة 84 على 70، ثم اضرب في 100.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar for the original price = 100%",
            "explanation_ar": "Draw a bar for the original price = 100%"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 30% as the discount; the remaining 70% segment equals $84",
            "explanation_ar": "Shade 30% as the discount; the remaining 70% segment equals $84"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Divide $84 into 70 equal parts: each part = $1.20",
            "explanation_ar": "Divide $84 into 70 equal parts: each part = $1.20"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "100 parts × $1.20 = $120 is the full bar (original price)",
            "explanation_ar": "100 parts × $1.20 = $120 is the full bar (original price)"
          }
        ],
        "hint_en": "Shade 30% off the bar; the unshaded 70% equals $84.",
        "hint_ar": "ظلّل 30% من الشريط؛ الجزء غير المظلل 70% يساوي 84 دولاراً.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-003",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A price of $200 is increased by 25% then decreased by 20%. What is the final price?",
    "question_ar": "سعر قدره 200 دولار يرتفع بنسبة 25% ثم ينخفض بنسبة 20%. ما السعر النهائي؟",
    "answer": 200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 25% increase: $200 × 1.25 = $250",
            "explanation_ar": "After 25% increase: $200 × 1.25 = $250"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After 20% decrease: $250 × 0.80 = $200",
            "explanation_ar": "After 20% decrease: $250 × 0.80 = $200"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combined multiplier: 1.25 × 0.80 = 1.00, so no net change",
            "explanation_ar": "Combined multiplier: 1.25 × 0.80 = 1.00, so no net change"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The final price is $200",
            "explanation_ar": "The final price is $200"
          }
        ],
        "hint_en": "Multiply the two multipliers 1.25 and 0.80 together.",
        "hint_ar": "اضرب المضاعفَين 1.25 و 0.80 معاً.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "25% of $200 = $50; new price = $200 + $50 = $250",
            "explanation_ar": "25% of $200 = $50; new price = $200 + $50 = $250"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20% of $250 = $50; final price = $250 − $50 = $200",
            "explanation_ar": "20% of $250 = $50; final price = $250 − $50 = $200"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The two changes exactly cancel: +$50 then −$50",
            "explanation_ar": "The two changes exactly cancel: +$50 then −$50"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The final price is $200",
            "explanation_ar": "The final price is $200"
          }
        ],
        "hint_en": "Calculate each step separately: first add 25%, then subtract 20% of the new amount.",
        "hint_ar": "احسب كل خطوة على حدة: أضف 25% أولاً، ثم اطرح 20% من المبلغ الجديد.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Start with a bar of length 200",
            "explanation_ar": "Start with a bar of length 200"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend it by 25%: bar grows to 250 (add 50 units)",
            "explanation_ar": "Extend it by 25%: bar grows to 250 (add 50 units)"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Shrink the 250-bar by 20%: remove 50 units, bar returns to 200",
            "explanation_ar": "Shrink the 250-bar by 20%: remove 50 units, bar returns to 200"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The bar is back to its original length: final price = $200",
            "explanation_ar": "The bar is back to its original length: final price = $200"
          }
        ],
        "hint_en": "Draw the bar growing then shrinking back to where it started.",
        "hint_ar": "ارسم الشريط ينمو ثم يعود للتقلص إلى نقطة البداية.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-004",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "What percentage of 200 is 50?",
    "question_ar": "ما النسبة المئوية التي تمثلها 50 من 200؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write the fraction: 50/200",
            "explanation_ar": "Write the fraction: 50/200"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Simplify: 50/200 = 1/4",
            "explanation_ar": "Simplify: 50/200 = 1/4"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Convert to percent: 1/4 × 100 = 25",
            "explanation_ar": "Convert to percent: 1/4 × 100 = 25"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "50 is 25% of 200",
            "explanation_ar": "50 is 25% of 200"
          }
        ],
        "hint_en": "Divide 50 by 200 and multiply by 100.",
        "hint_ar": "اقسم 50 على 200 واضرب في 100.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Ask: how many times does 50 fit into 200? Answer: 4 times",
            "explanation_ar": "Ask: how many times does 50 fit into 200? Answer: 4 times"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "So 50 is one-quarter (1/4) of 200",
            "explanation_ar": "So 50 is one-quarter (1/4) of 200"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "One-quarter as a percent = 25%",
            "explanation_ar": "One-quarter as a percent = 25%"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "50 is 25% of 200",
            "explanation_ar": "50 is 25% of 200"
          }
        ],
        "hint_en": "Think about how many 50s fit into 200.",
        "hint_ar": "فكّر كم مرة تدخل 50 في 200.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of length 200 split into 4 equal parts",
            "explanation_ar": "Draw a bar of length 200 split into 4 equal parts"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each part = 200 ÷ 4 = 50",
            "explanation_ar": "Each part = 200 ÷ 4 = 50"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One part (50) out of 4 total parts = 1/4",
            "explanation_ar": "One part (50) out of 4 total parts = 1/4"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "1/4 of the bar = 25% of 200",
            "explanation_ar": "1/4 of the bar = 25% of 200"
          }
        ],
        "hint_en": "Split 200 into equal parts of 50 and count the shaded portion.",
        "hint_ar": "قسّم 200 إلى أجزاء متساوية من 50 وعدّ الجزء المظلل.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-005",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A bike originally costs $150. It is sold for $120. What is the percentage decrease?",
    "question_ar": "تكلفة دراجة في الأصل 150 دولاراً، وتُباع بـ 120 دولاراً. ما نسبة الانخفاض؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find the decrease: $150 − $120 = $30",
            "explanation_ar": "Find the decrease: $150 − $120 = $30"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide by original: 30 ÷ 150 = 0.20",
            "explanation_ar": "Divide by original: 30 ÷ 150 = 0.20"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply by 100: 0.20 × 100 = 20",
            "explanation_ar": "Multiply by 100: 0.20 × 100 = 20"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The percentage decrease is 20%",
            "explanation_ar": "The percentage decrease is 20%"
          }
        ],
        "hint_en": "Divide the drop ($30) by the original ($150) and multiply by 100.",
        "hint_ar": "اقسم الانخفاض (30 دولاراً) على السعر الأصلي (150 دولاراً) واضرب في 100.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Decrease = $150 − $120 = $30",
            "explanation_ar": "Decrease = $150 − $120 = $30"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "30/150 = 3/15 = 1/5",
            "explanation_ar": "30/150 = 3/15 = 1/5"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "1/5 = 20/100 = 20%",
            "explanation_ar": "1/5 = 20/100 = 20%"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The percentage decrease is 20%",
            "explanation_ar": "The percentage decrease is 20%"
          }
        ],
        "hint_en": "Simplify 30/150 by dividing numerator and denominator by 30.",
        "hint_ar": "بسّط 30/150 بقسمة البسط والمقام على 30.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar for $150 (original price) = 100%",
            "explanation_ar": "Draw a bar for $150 (original price) = 100%"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Mark $120 on the bar — it is $30 less than $150",
            "explanation_ar": "Mark $120 on the bar — it is $30 less than $150"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "$30 out of $150 fills 1/5 of the bar",
            "explanation_ar": "$30 out of $150 fills 1/5 of the bar"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "1/5 of the bar = 20%, so the price dropped 20%",
            "explanation_ar": "1/5 of the bar = 20%, so the price dropped 20%"
          }
        ],
        "hint_en": "See how big the $30 drop looks compared to the full $150 bar.",
        "hint_ar": "انظر كم يبدو انخفاض 30 دولاراً مقارنةً بشريط 150 دولاراً الكامل.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-006",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "After a 20% increase, a salary is $480. What was the original salary?",
    "question_ar": "بعد زيادة بنسبة 20%، أصبح الراتب 480 دولاراً. ما كان الراتب الأصلي؟",
    "answer": 400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 20% increase, salary = 120% of original",
            "explanation_ar": "After 20% increase, salary = 120% of original"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Set up: 1.20 × original = $480",
            "explanation_ar": "Set up: 1.20 × original = $480"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide: original = 480 ÷ 1.20 = 400",
            "explanation_ar": "Divide: original = 480 ÷ 1.20 = 400"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The original salary was $400",
            "explanation_ar": "The original salary was $400"
          }
        ],
        "hint_en": "A 20% increase means the new value is 120% of the original.",
        "hint_ar": "زيادة 20% تعني أن القيمة الجديدة هي 120% من الأصلية.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "120% of original = $480",
            "explanation_ar": "120% of original = $480"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1% of original = 480 ÷ 120 = $4",
            "explanation_ar": "1% of original = 480 ÷ 120 = $4"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100% of original = 4 × 100 = $400",
            "explanation_ar": "100% of original = 4 × 100 = $400"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The original salary was $400",
            "explanation_ar": "The original salary was $400"
          }
        ],
        "hint_en": "Find 1% by dividing $480 by 120, then multiply by 100.",
        "hint_ar": "أوجد 1% بقسمة 480 على 120، ثم اضرب في 100.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar for original salary = 100%; add a 20% extension on the right",
            "explanation_ar": "Draw a bar for original salary = 100%; add a 20% extension on the right"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The full bar (120%) equals $480",
            "explanation_ar": "The full bar (120%) equals $480"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each 10% block = 480 ÷ 12 = $40",
            "explanation_ar": "Each 10% block = 480 ÷ 12 = $40"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "10 blocks × $40 = $400 is the original 100% bar",
            "explanation_ar": "10 blocks × $40 = $400 is the original 100% bar"
          }
        ],
        "hint_en": "The 120% bar is $480; find the value of 100% blocks.",
        "hint_ar": "شريط 120% يساوي 480 دولاراً؛ أوجد قيمة 100%.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-007",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A shirt costs $80 and is marked up by 50%. What is the selling price?",
    "question_ar": "قميص يكلف 80 دولاراً وتمت زيادة سعره بنسبة 50%. ما سعر البيع؟",
    "answer": 120,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Mark-up = 50% of $80 = 0.50 × 80 = $40",
            "explanation_ar": "Mark-up = 50% of $80 = 0.50 × 80 = $40"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Selling price = original + mark-up = $80 + $40",
            "explanation_ar": "Selling price = original + mark-up = $80 + $40"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "$80 + $40 = $120",
            "explanation_ar": "$80 + $40 = $120"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The selling price is $120",
            "explanation_ar": "The selling price is $120"
          }
        ],
        "hint_en": "Calculate 50% of $80, then add it to $80.",
        "hint_ar": "احسب 50% من 80 دولاراً ثم أضفها إلى 80 دولاراً.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "50% of $80 = half of $80 = $40",
            "explanation_ar": "50% of $80 = half of $80 = $40"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the mark-up to cost: $80 + $40",
            "explanation_ar": "Add the mark-up to cost: $80 + $40"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Alternatively: 150% × $80 = 1.5 × 80 = $120",
            "explanation_ar": "Alternatively: 150% × $80 = 1.5 × 80 = $120"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The selling price is $120",
            "explanation_ar": "The selling price is $120"
          }
        ],
        "hint_en": "50% of 80 is simply half of 80.",
        "hint_ar": "50% من 80 هي ببساطة نصف 80.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of length 80 (cost price)",
            "explanation_ar": "Draw a bar of length 80 (cost price)"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add a 50% extension: half of 80 = 40 units extra",
            "explanation_ar": "Add a 50% extension: half of 80 = 40 units extra"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total bar = 80 + 40 = 120 units",
            "explanation_ar": "Total bar = 80 + 40 = 120 units"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The selling price bar = $120",
            "explanation_ar": "The selling price bar = $120"
          }
        ],
        "hint_en": "Extend the $80 bar by half its length to reach the selling price.",
        "hint_ar": "مدّ شريط 80 دولاراً بنصف طوله للوصول إلى سعر البيع.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-008",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A population of 500 decreases by 10%. What is the new population?",
    "question_ar": "تنخفض تعداد سكاني قدره 500 بنسبة 10%. ما التعداد الجديد؟",
    "answer": 450,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "10% of 500 = 0.10 × 500 = 50",
            "explanation_ar": "10% of 500 = 0.10 × 500 = 50"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "New population = 500 − 50 = 450",
            "explanation_ar": "New population = 500 − 50 = 450"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Alternatively: 90% × 500 = 0.90 × 500 = 450",
            "explanation_ar": "Alternatively: 90% × 500 = 0.90 × 500 = 450"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new population is 450",
            "explanation_ar": "The new population is 450"
          }
        ],
        "hint_en": "Subtract 10% of 500 from 500.",
        "hint_ar": "اطرح 10% من 500 من 500.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "10% of 500: move decimal one place → 50",
            "explanation_ar": "10% of 500: move decimal one place → 50"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Remaining = 100% − 10% = 90% of 500",
            "explanation_ar": "Remaining = 100% − 10% = 90% of 500"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "90% of 500 = 9 × 50 = 450",
            "explanation_ar": "90% of 500 = 9 × 50 = 450"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The new population is 450",
            "explanation_ar": "The new population is 450"
          }
        ],
        "hint_en": "10% of 500 is easy — just divide by 10. Subtract from 500.",
        "hint_ar": "10% من 500 سهلة — فقط اقسم على 10. اطرح من 500.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 500 people split into 10 equal blocks of 50 each",
            "explanation_ar": "Draw a bar of 500 people split into 10 equal blocks of 50 each"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 1 block (10%) = 50 people who left",
            "explanation_ar": "Shade 1 block (10%) = 50 people who left"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remaining unshaded blocks = 9 blocks × 50 = 450",
            "explanation_ar": "Remaining unshaded blocks = 9 blocks × 50 = 450"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The new population is 450",
            "explanation_ar": "The new population is 450"
          }
        ],
        "hint_en": "Split 500 into 10 blocks of 50; remove 1 block.",
        "hint_ar": "قسّم 500 إلى 10 مجموعات من 50؛ احذف مجموعة واحدة.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-009",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A phone was sold for $360 after a 10% discount. What was the original price?",
    "question_ar": "بيع هاتف بـ 360 دولاراً بعد خصم 10%. ما كان السعر الأصلي؟",
    "answer": 400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 10% off, customer pays 90% of original",
            "explanation_ar": "After 10% off, customer pays 90% of original"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "0.90 × original = $360",
            "explanation_ar": "0.90 × original = $360"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "original = 360 ÷ 0.90 = 400",
            "explanation_ar": "original = 360 ÷ 0.90 = 400"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The original price was $400",
            "explanation_ar": "The original price was $400"
          }
        ],
        "hint_en": "A 10% discount means you paid 90% of the original price.",
        "hint_ar": "الخصم 10% يعني أنك دفعت 90% من السعر الأصلي.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "90% of original = $360",
            "explanation_ar": "90% of original = $360"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1% of original = 360 ÷ 90 = $4",
            "explanation_ar": "1% of original = 360 ÷ 90 = $4"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100% = $4 × 100 = $400",
            "explanation_ar": "100% = $4 × 100 = $400"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The original price was $400",
            "explanation_ar": "The original price was $400"
          }
        ],
        "hint_en": "Find 1% first: $360 ÷ 90 = $4, then multiply by 100.",
        "hint_ar": "أوجد 1% أولاً: 360 ÷ 90 = 4 دولارات، ثم اضرب في 100.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a 100% bar for original price; shade 10% as the discount",
            "explanation_ar": "Draw a 100% bar for original price; shade 10% as the discount"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The unshaded 90% equals $360",
            "explanation_ar": "The unshaded 90% equals $360"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each 10% segment = $360 ÷ 9 = $40",
            "explanation_ar": "Each 10% segment = $360 ÷ 9 = $40"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "10 segments × $40 = $400 original price",
            "explanation_ar": "10 segments × $40 = $400 original price"
          }
        ],
        "hint_en": "The 90% portion equals $360; find what 100% equals.",
        "hint_ar": "الجزء 90% يساوي 360 دولاراً؛ أوجد ما تساويه 100%.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-010",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A price of $250 is increased by 20% then decreased by 25%. What is the final price?",
    "question_ar": "سعر 250 دولاراً يرتفع بنسبة 20% ثم ينخفض بنسبة 25%. ما السعر النهائي؟",
    "answer": 225,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 20% increase: $250 × 1.20 = $300",
            "explanation_ar": "After 20% increase: $250 × 1.20 = $300"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After 25% decrease: $300 × 0.75 = $225",
            "explanation_ar": "After 25% decrease: $300 × 0.75 = $225"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combined factor: 1.20 × 0.75 = 0.90",
            "explanation_ar": "Combined factor: 1.20 × 0.75 = 0.90"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Final price = $250 × 0.90 = $225",
            "explanation_ar": "Final price = $250 × 0.90 = $225"
          }
        ],
        "hint_en": "Apply the two multipliers 1.20 and 0.75 one after the other.",
        "hint_ar": "طبّق المضاعفَين 1.20 و 0.75 الواحد تلو الآخر.",
        "result_en": "The answer is 225",
        "result_ar": "الجواب هو 225"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "20% of $250 = $50; price after increase = $300",
            "explanation_ar": "20% of $250 = $50; price after increase = $300"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25% of $300 = $75; price after decrease = $300 − $75",
            "explanation_ar": "25% of $300 = $75; price after decrease = $300 − $75"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "$300 − $75 = $225",
            "explanation_ar": "$300 − $75 = $225"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The final price is $225",
            "explanation_ar": "The final price is $225"
          }
        ],
        "hint_en": "Step 1: add 20% of $250. Step 2: subtract 25% of the new price.",
        "hint_ar": "الخطوة 1: أضف 20% من 250 دولاراً. الخطوة 2: اطرح 25% من السعر الجديد.",
        "result_en": "The answer is 225",
        "result_ar": "الجواب هو 225"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Start with bar = $250; extend by 20% (+$50) → bar = $300",
            "explanation_ar": "Start with bar = $250; extend by 20% (+$50) → bar = $300"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Now cut 25% from the $300 bar: 25% × 300 = $75",
            "explanation_ar": "Now cut 25% from the $300 bar: 25% × 300 = $75"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remove $75 from $300 → $225",
            "explanation_ar": "Remove $75 from $300 → $225"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar = $225",
            "explanation_ar": "The final bar = $225"
          }
        ],
        "hint_en": "Grow the bar to $300, then trim 25% off $300.",
        "hint_ar": "امدد الشريط إلى 300 دولاراً، ثم احذف 25% من 300 دولاراً.",
        "result_en": "The answer is 225",
        "result_ar": "الجواب هو 225"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-011",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A store increases prices by 10% and then by another 10%. By what overall percentage did the price increase if it started at $100?",
    "question_ar": "يرفع متجر أسعاره بنسبة 10% ثم بنسبة 10% أخرى. بأي نسبة مئوية إجمالية زاد السعر إذا كان يبدأ من 100 دولار؟",
    "answer": 21,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After first 10% rise: $100 × 1.10 = $110",
            "explanation_ar": "After first 10% rise: $100 × 1.10 = $110"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After second 10% rise: $110 × 1.10 = $121",
            "explanation_ar": "After second 10% rise: $110 × 1.10 = $121"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Overall increase = $121 − $100 = $21",
            "explanation_ar": "Overall increase = $121 − $100 = $21"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Percentage increase = 21/100 × 100 = 21%",
            "explanation_ar": "Percentage increase = 21/100 × 100 = 21%"
          }
        ],
        "hint_en": "Apply 1.10 twice, then compare to the starting $100.",
        "hint_ar": "طبّق 1.10 مرتين ثم قارن بالـ 100 دولار الأصلية.",
        "result_en": "The answer is 21",
        "result_ar": "الجواب هو 21"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "First increase: 10% of $100 = $10 → price = $110",
            "explanation_ar": "First increase: 10% of $100 = $10 → price = $110"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Second increase: 10% of $110 = $11 → price = $121",
            "explanation_ar": "Second increase: 10% of $110 = $11 → price = $121"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total rise = $10 + $11 = $21 on an original of $100",
            "explanation_ar": "Total rise = $10 + $11 = $21 on an original of $100"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Overall percentage increase = 21%",
            "explanation_ar": "Overall percentage increase = 21%"
          }
        ],
        "hint_en": "The second 10% applies to $110, not $100, so it adds $11 not $10.",
        "hint_ar": "الزيادة الثانية 10% تُطبَّق على 110 دولاراً لا 100 دولار، لذا تضيف 11 لا 10.",
        "result_en": "The answer is 21",
        "result_ar": "الجواب هو 21"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a $100 bar; add 10% (= $10) to get $110 bar",
            "explanation_ar": "Draw a $100 bar; add 10% (= $10) to get $110 bar"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 10% of the $110 bar (= $11) to get a $121 bar",
            "explanation_ar": "Add 10% of the $110 bar (= $11) to get a $121 bar"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Compare the $121 bar to the original $100 bar: difference = $21",
            "explanation_ar": "Compare the $121 bar to the original $100 bar: difference = $21"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The overall growth is 21 units out of 100 = 21%",
            "explanation_ar": "The overall growth is 21 units out of 100 = 21%"
          }
        ],
        "hint_en": "Each bar extension is 10% of the current bar, not the original.",
        "hint_ar": "كل امتداد للشريط هو 10% من الشريط الحالي، لا من الأصلي.",
        "result_en": "The answer is 21",
        "result_ar": "الجواب هو 21"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-012",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "What percentage of 400 is 100?",
    "question_ar": "ما النسبة المئوية التي تمثلها 100 من 400؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write the fraction: 100/400",
            "explanation_ar": "Write the fraction: 100/400"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Simplify: 100/400 = 1/4",
            "explanation_ar": "Simplify: 100/400 = 1/4"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Convert: 1/4 × 100 = 25",
            "explanation_ar": "Convert: 1/4 × 100 = 25"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "100 is 25% of 400",
            "explanation_ar": "100 is 25% of 400"
          }
        ],
        "hint_en": "Divide 100 by 400 and multiply by 100.",
        "hint_ar": "اقسم 100 على 400 واضرب في 100.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "400 ÷ 100 = 4, so 100 is one-quarter of 400",
            "explanation_ar": "400 ÷ 100 = 4, so 100 is one-quarter of 400"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "One quarter = 25%",
            "explanation_ar": "One quarter = 25%"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Check: 25% of 400 = 0.25 × 400 = 100 ✓",
            "explanation_ar": "Check: 25% of 400 = 0.25 × 400 = 100 ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "100 is 25% of 400",
            "explanation_ar": "100 is 25% of 400"
          }
        ],
        "hint_en": "Ask how many 100s fit into 400, then convert that fraction to a percent.",
        "hint_ar": "اسأل كم مرة تدخل 100 في 400، ثم حوّل هذا الكسر إلى نسبة مئوية.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 400, divided into 4 equal sections of 100 each",
            "explanation_ar": "Draw a bar of 400, divided into 4 equal sections of 100 each"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 1 section (= 100)",
            "explanation_ar": "Shade 1 section (= 100)"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "1 shaded section out of 4 total = 1/4",
            "explanation_ar": "1 shaded section out of 4 total = 1/4"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "1/4 = 25%, so 100 is 25% of 400",
            "explanation_ar": "1/4 = 25%, so 100 is 25% of 400"
          }
        ],
        "hint_en": "Divide the 400-bar into four equal parts; shade one part (100).",
        "hint_ar": "قسّم شريط 400 إلى أربعة أجزاء متساوية؛ ظلّل جزءاً واحداً (100).",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-013",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A laptop costs $900. After a 40% discount, what is the sale price?",
    "question_ar": "يكلف الكمبيوتر المحمول 900 دولار. بعد خصم 40%، ما سعر البيع؟",
    "answer": 540,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Discount = 40% of $900 = 0.40 × 900 = $360",
            "explanation_ar": "Discount = 40% of $900 = 0.40 × 900 = $360"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Sale price = $900 − $360 = $540",
            "explanation_ar": "Sale price = $900 − $360 = $540"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Alternatively: 60% × $900 = 0.60 × 900 = $540",
            "explanation_ar": "Alternatively: 60% × $900 = 0.60 × 900 = $540"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The sale price is $540",
            "explanation_ar": "The sale price is $540"
          }
        ],
        "hint_en": "After 40% off, you pay 60% of $900.",
        "hint_ar": "بعد خصم 40%، تدفع 60% من 900 دولاراً.",
        "result_en": "The answer is 540",
        "result_ar": "الجواب هو 540"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "10% of $900 = $90",
            "explanation_ar": "10% of $900 = $90"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "40% of $900 = 4 × $90 = $360",
            "explanation_ar": "40% of $900 = 4 × $90 = $360"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Sale price = $900 − $360 = $540",
            "explanation_ar": "Sale price = $900 − $360 = $540"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The sale price is $540",
            "explanation_ar": "The sale price is $540"
          }
        ],
        "hint_en": "Find 10% first ($90), then multiply by 4 to get 40%.",
        "hint_ar": "أوجد 10% أولاً (90 دولاراً)، ثم اضرب في 4 للحصول على 40%.",
        "result_en": "The answer is 540",
        "result_ar": "الجواب هو 540"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a $900 bar split into 10 equal blocks of $90 each",
            "explanation_ar": "Draw a $900 bar split into 10 equal blocks of $90 each"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 4 blocks (= $360) representing the 40% discount",
            "explanation_ar": "Shade 4 blocks (= $360) representing the 40% discount"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remaining 6 unshaded blocks = 6 × $90 = $540",
            "explanation_ar": "Remaining 6 unshaded blocks = 6 × $90 = $540"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The sale price is $540",
            "explanation_ar": "The sale price is $540"
          }
        ],
        "hint_en": "Split $900 into 10 blocks; remove 4 shaded blocks to find the sale price.",
        "hint_ar": "قسّم 900 دولاراً إلى 10 مجموعات؛ احذف 4 مجموعات مظللة لإيجاد سعر البيع.",
        "result_en": "The answer is 540",
        "result_ar": "الجواب هو 540"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-014",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "After a 25% increase, a value is 500. What was the original value?",
    "question_ar": "بعد زيادة 25%، أصبحت القيمة 500. ما كانت القيمة الأصلية؟",
    "answer": 400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 25% increase, new value = 125% of original",
            "explanation_ar": "After 25% increase, new value = 125% of original"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "1.25 × original = 500",
            "explanation_ar": "1.25 × original = 500"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "original = 500 ÷ 1.25 = 400",
            "explanation_ar": "original = 500 ÷ 1.25 = 400"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The original value was 400",
            "explanation_ar": "The original value was 400"
          }
        ],
        "hint_en": "A 25% increase gives 125% of the original; divide 500 by 1.25.",
        "hint_ar": "زيادة 25% تعطي 125% من الأصلي؛ اقسم 500 على 1.25.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "125% = 500, so 1% = 500 ÷ 125 = 4",
            "explanation_ar": "125% = 500, so 1% = 500 ÷ 125 = 4"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "100% = 4 × 100 = 400",
            "explanation_ar": "100% = 4 × 100 = 400"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Check: 400 × 1.25 = 500 ✓",
            "explanation_ar": "Check: 400 × 1.25 = 500 ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The original value was 400",
            "explanation_ar": "The original value was 400"
          }
        ],
        "hint_en": "Find 1% by dividing 500 by 125, then scale to 100%.",
        "hint_ar": "أوجد 1% بقسمة 500 على 125، ثم اضرب في 100.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar for original value; add a 25% extension (1/4 of bar) on the right",
            "explanation_ar": "Draw a bar for original value; add a 25% extension (1/4 of bar) on the right"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The full bar (125%) = 500",
            "explanation_ar": "The full bar (125%) = 500"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Divide 500 by 5 equal sections: each 25% section = 100",
            "explanation_ar": "Divide 500 by 5 equal sections: each 25% section = 100"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Original 100% = 4 sections × 100 = 400",
            "explanation_ar": "Original 100% = 4 sections × 100 = 400"
          }
        ],
        "hint_en": "The 125% bar equals 500; split it into 5 sections of 100 each.",
        "hint_ar": "شريط 125% يساوي 500؛ قسّمه إلى 5 أقسام من 100 لكل منها.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-015",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A score increased from 80 to 100. What is the percentage increase?",
    "question_ar": "ارتفعت نتيجة من 80 إلى 100. ما نسبة الزيادة؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Increase = 100 − 80 = 20",
            "explanation_ar": "Increase = 100 − 80 = 20"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ratio = 20 ÷ 80 = 0.25",
            "explanation_ar": "Ratio = 20 ÷ 80 = 0.25"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Percentage = 0.25 × 100 = 25%",
            "explanation_ar": "Percentage = 0.25 × 100 = 25%"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The percentage increase is 25%",
            "explanation_ar": "The percentage increase is 25%"
          }
        ],
        "hint_en": "Divide the increase (20) by the original (80) and multiply by 100.",
        "hint_ar": "اقسم الزيادة (20) على الأصلي (80) واضرب في 100.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Change = 100 − 80 = 20",
            "explanation_ar": "Change = 100 − 80 = 20"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20/80 = 2/8 = 1/4",
            "explanation_ar": "20/80 = 2/8 = 1/4"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "1/4 = 25%",
            "explanation_ar": "1/4 = 25%"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The percentage increase is 25%",
            "explanation_ar": "The percentage increase is 25%"
          }
        ],
        "hint_en": "Simplify 20/80 to get 1/4, then convert to percent.",
        "hint_ar": "بسّط 20/80 للحصول على 1/4، ثم حوّل إلى نسبة مئوية.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of length 80; extend it to 100",
            "explanation_ar": "Draw a bar of length 80; extend it to 100"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The extension = 20 units",
            "explanation_ar": "The extension = 20 units"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "20 out of 80 = 1 out of 4 sections of the original bar",
            "explanation_ar": "20 out of 80 = 1 out of 4 sections of the original bar"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "1/4 of the bar = 25%",
            "explanation_ar": "1/4 of the bar = 25%"
          }
        ],
        "hint_en": "See how the 20-unit extension compares to the 80-unit original bar.",
        "hint_ar": "انظر كيف يقارن الامتداد البالغ 20 وحدة بالشريط الأصلي البالغ 80 وحدة.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-016",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A product originally priced at $500 is increased by 10% then decreased by 10%. What is the final price?",
    "question_ar": "منتج سعره الأصلي 500 دولار يرتفع بنسبة 10% ثم ينخفض بنسبة 10%. ما السعر النهائي؟",
    "answer": 495,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 10% increase: $500 × 1.10 = $550",
            "explanation_ar": "After 10% increase: $500 × 1.10 = $550"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After 10% decrease: $550 × 0.90 = $495",
            "explanation_ar": "After 10% decrease: $550 × 0.90 = $495"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Net multiplier: 1.10 × 0.90 = 0.99",
            "explanation_ar": "Net multiplier: 1.10 × 0.90 = 0.99"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Final price = $500 × 0.99 = $495",
            "explanation_ar": "Final price = $500 × 0.99 = $495"
          }
        ],
        "hint_en": "Multiply 1.10 × 0.90 = 0.99, then apply to $500.",
        "hint_ar": "اضرب 1.10 × 0.90 = 0.99، ثم طبّق على 500 دولاراً.",
        "result_en": "The answer is 495",
        "result_ar": "الجواب هو 495"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "10% of $500 = $50; after increase: $500 + $50 = $550",
            "explanation_ar": "10% of $500 = $50; after increase: $500 + $50 = $550"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "10% of $550 = $55; after decrease: $550 − $55 = $495",
            "explanation_ar": "10% of $550 = $55; after decrease: $550 − $55 = $495"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net change = −$5 on original $500",
            "explanation_ar": "Net change = −$5 on original $500"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The final price is $495",
            "explanation_ar": "The final price is $495"
          }
        ],
        "hint_en": "The second 10% is taken from $550 (not $500), so it removes $55, not $50.",
        "hint_ar": "الـ 10% الثانية تؤخذ من 550 دولاراً (لا 500)، لذا تزيل 55 دولاراً لا 50.",
        "result_en": "The answer is 495",
        "result_ar": "الجواب هو 495"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Start with bar = $500; extend by $50 (10%) → $550 bar",
            "explanation_ar": "Start with bar = $500; extend by $50 (10%) → $550 bar"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Trim 10% of $550 bar = $55 from the bar",
            "explanation_ar": "Trim 10% of $550 bar = $55 from the bar"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "$550 − $55 = $495",
            "explanation_ar": "$550 − $55 = $495"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar is $495, slightly shorter than the original $500",
            "explanation_ar": "The final bar is $495, slightly shorter than the original $500"
          }
        ],
        "hint_en": "The trim ($55) is bigger than the extension ($50) because you're cutting from a bigger bar.",
        "hint_ar": "القطع (55 دولاراً) أكبر من الامتداد (50 دولاراً) لأنك تقطع من شريط أكبر.",
        "result_en": "The answer is 495",
        "result_ar": "الجواب هو 495"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-017",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "What percentage of 750 is 150?",
    "question_ar": "ما النسبة المئوية التي تمثلها 150 من 750؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write fraction: 150/750",
            "explanation_ar": "Write fraction: 150/750"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Simplify: 150/750 = 1/5",
            "explanation_ar": "Simplify: 150/750 = 1/5"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Convert: 1/5 × 100 = 20",
            "explanation_ar": "Convert: 1/5 × 100 = 20"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "150 is 20% of 750",
            "explanation_ar": "150 is 20% of 750"
          }
        ],
        "hint_en": "Divide 150 by 750 and multiply by 100.",
        "hint_ar": "اقسم 150 على 750 واضرب في 100.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "750 ÷ 150 = 5, so 150 is one-fifth of 750",
            "explanation_ar": "750 ÷ 150 = 5, so 150 is one-fifth of 750"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "One-fifth = 1/5 = 20%",
            "explanation_ar": "One-fifth = 1/5 = 20%"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Check: 20% × 750 = 0.20 × 750 = 150 ✓",
            "explanation_ar": "Check: 20% × 750 = 0.20 × 750 = 150 ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "150 is 20% of 750",
            "explanation_ar": "150 is 20% of 750"
          }
        ],
        "hint_en": "How many 150s fit into 750? Divide 750 by 150.",
        "hint_ar": "كم مرة تدخل 150 في 750؟ اقسم 750 على 150.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 750 split into 5 equal sections of 150 each",
            "explanation_ar": "Draw a bar of 750 split into 5 equal sections of 150 each"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 1 section (= 150)",
            "explanation_ar": "Shade 1 section (= 150)"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "1 shaded section out of 5 = 1/5 of the bar",
            "explanation_ar": "1 shaded section out of 5 = 1/5 of the bar"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "1/5 = 20%, so 150 is 20% of 750",
            "explanation_ar": "1/5 = 20%, so 150 is 20% of 750"
          }
        ],
        "hint_en": "Divide 750 into five 150-unit sections; shade one section.",
        "hint_ar": "قسّم 750 إلى خمسة أقسام من 150 وحدة لكل منها؛ ظلّل قسماً واحداً.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-018",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "After a 50% increase followed by a 50% decrease, what is the final value if the original was $200?",
    "question_ar": "بعد زيادة 50% ثم انخفاض 50%، ما القيمة النهائية إذا كانت الأصلية 200 دولار؟",
    "answer": 150,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 50% increase: $200 × 1.50 = $300",
            "explanation_ar": "After 50% increase: $200 × 1.50 = $300"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After 50% decrease: $300 × 0.50 = $150",
            "explanation_ar": "After 50% decrease: $300 × 0.50 = $150"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Net multiplier: 1.50 × 0.50 = 0.75",
            "explanation_ar": "Net multiplier: 1.50 × 0.50 = 0.75"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Final value = $200 × 0.75 = $150",
            "explanation_ar": "Final value = $200 × 0.75 = $150"
          }
        ],
        "hint_en": "A 50% increase then a 50% decrease does NOT return to the original.",
        "hint_ar": "زيادة 50% ثم انخفاض 50% لا تعيد القيمة إلى الأصل.",
        "result_en": "The answer is 150",
        "result_ar": "الجواب هو 150"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "50% of $200 = $100; after increase: $200 + $100 = $300",
            "explanation_ar": "50% of $200 = $100; after increase: $200 + $100 = $300"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "50% of $300 = $150; after decrease: $300 − $150 = $150",
            "explanation_ar": "50% of $300 = $150; after decrease: $300 − $150 = $150"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The decrease cuts $300 in half, giving $150",
            "explanation_ar": "The decrease cuts $300 in half, giving $150"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The final value is $150",
            "explanation_ar": "The final value is $150"
          }
        ],
        "hint_en": "The 50% decrease applies to the new $300, not the original $200.",
        "hint_ar": "الانخفاض 50% يُطبَّق على 300 دولاراً الجديدة، لا 200 دولاراً الأصلية.",
        "result_en": "The answer is 150",
        "result_ar": "الجواب هو 150"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Start with a bar of $200; add 50% (+$100) to get a $300 bar",
            "explanation_ar": "Start with a bar of $200; add 50% (+$100) to get a $300 bar"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Cut the $300 bar in half (50% decrease): $300 ÷ 2 = $150",
            "explanation_ar": "Cut the $300 bar in half (50% decrease): $300 ÷ 2 = $150"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The $150 result bar is 3/4 the length of the original $200 bar",
            "explanation_ar": "The $150 result bar is 3/4 the length of the original $200 bar"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Final value = $150",
            "explanation_ar": "Final value = $150"
          }
        ],
        "hint_en": "Halving $300 gives $150, which is less than the original $200.",
        "hint_ar": "تنصيف 300 دولاراً يعطي 150 دولاراً، وهو أقل من الأصلي 200 دولاراً.",
        "result_en": "The answer is 150",
        "result_ar": "الجواب هو 150"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-019",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A price decreases from $120 to $90. What is the percentage decrease?",
    "question_ar": "ينخفض السعر من 120 دولاراً إلى 90 دولاراً. ما نسبة الانخفاض؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Decrease = $120 − $90 = $30",
            "explanation_ar": "Decrease = $120 − $90 = $30"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide: 30 ÷ 120 = 0.25",
            "explanation_ar": "Divide: 30 ÷ 120 = 0.25"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply: 0.25 × 100 = 25",
            "explanation_ar": "Multiply: 0.25 × 100 = 25"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The percentage decrease is 25%",
            "explanation_ar": "The percentage decrease is 25%"
          }
        ],
        "hint_en": "Divide the drop ($30) by the original ($120) and multiply by 100.",
        "hint_ar": "اقسم الانخفاض (30 دولاراً) على السعر الأصلي (120 دولاراً) واضرب في 100.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Drop = $120 − $90 = $30",
            "explanation_ar": "Drop = $120 − $90 = $30"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "30/120 = 3/12 = 1/4",
            "explanation_ar": "30/120 = 3/12 = 1/4"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "1/4 = 25%",
            "explanation_ar": "1/4 = 25%"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The percentage decrease is 25%",
            "explanation_ar": "The percentage decrease is 25%"
          }
        ],
        "hint_en": "Simplify 30/120 by dividing top and bottom by 30 to get 1/4.",
        "hint_ar": "بسّط 30/120 بقسمة البسط والمقام على 30 للحصول على 1/4.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a $120 bar split into 4 equal sections of $30 each",
            "explanation_ar": "Draw a $120 bar split into 4 equal sections of $30 each"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The drop of $30 equals exactly 1 of the 4 sections",
            "explanation_ar": "The drop of $30 equals exactly 1 of the 4 sections"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "1 section out of 4 = 1/4 of the bar",
            "explanation_ar": "1 section out of 4 = 1/4 of the bar"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "1/4 = 25%, so the price dropped 25%",
            "explanation_ar": "1/4 = 25%, so the price dropped 25%"
          }
        ],
        "hint_en": "Divide the $120 bar into four $30 sections; the drop fills one section.",
        "hint_ar": "قسّم شريط 120 دولاراً إلى أربعة أقسام من 30 دولاراً؛ الانخفاض يملأ قسماً واحداً.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-020",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "After a 40% decrease, a value is $300. What was the original value?",
    "question_ar": "بعد انخفاض 40%، أصبحت القيمة 300 دولار. ما كانت القيمة الأصلية؟",
    "answer": 500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 40% decrease, remaining = 60% of original",
            "explanation_ar": "After 40% decrease, remaining = 60% of original"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "0.60 × original = $300",
            "explanation_ar": "0.60 × original = $300"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "original = 300 ÷ 0.60 = 500",
            "explanation_ar": "original = 300 ÷ 0.60 = 500"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The original value was $500",
            "explanation_ar": "The original value was $500"
          }
        ],
        "hint_en": "A 40% decrease leaves 60%; divide $300 by 0.60.",
        "hint_ar": "انخفاض 40% يترك 60%؛ اقسم 300 دولاراً على 0.60.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "60% of original = $300",
            "explanation_ar": "60% of original = $300"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1% = 300 ÷ 60 = $5",
            "explanation_ar": "1% = 300 ÷ 60 = $5"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100% = $5 × 100 = $500",
            "explanation_ar": "100% = $5 × 100 = $500"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The original value was $500",
            "explanation_ar": "The original value was $500"
          }
        ],
        "hint_en": "Find 1% by dividing $300 by 60, then multiply by 100.",
        "hint_ar": "أوجد 1% بقسمة 300 على 60، ثم اضرب في 100.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a 100% bar; shade 40% as the amount removed",
            "explanation_ar": "Draw a 100% bar; shade 40% as the amount removed"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The unshaded 60% equals $300",
            "explanation_ar": "The unshaded 60% equals $300"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each 10% block = $300 ÷ 6 = $50",
            "explanation_ar": "Each 10% block = $300 ÷ 6 = $50"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "10 blocks × $50 = $500 is the full original bar",
            "explanation_ar": "10 blocks × $50 = $500 is the full original bar"
          }
        ],
        "hint_en": "The 60% portion = $300; find the value of the full 100% bar.",
        "hint_ar": "الجزء 60% = 300 دولاراً؛ أوجد قيمة شريط 100% الكامل.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-021",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A price of $400 is decreased by 15% then increased by 15%. What is the final price?",
    "question_ar": "سعر 400 دولار ينخفض بنسبة 15% ثم يرتفع بنسبة 15%. ما السعر النهائي؟",
    "answer": 391,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 15% decrease: $400 × 0.85 = $340",
            "explanation_ar": "After 15% decrease: $400 × 0.85 = $340"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After 15% increase: $340 × 1.15 = $391",
            "explanation_ar": "After 15% increase: $340 × 1.15 = $391"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Net multiplier: 0.85 × 1.15 = 0.9775",
            "explanation_ar": "Net multiplier: 0.85 × 1.15 = 0.9775"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Final price = $400 × 0.9775 = $391",
            "explanation_ar": "Final price = $400 × 0.9775 = $391"
          }
        ],
        "hint_en": "Apply 0.85 then 1.15; note 0.85 × 1.15 is slightly less than 1.",
        "hint_ar": "طبّق 0.85 ثم 1.15؛ لاحظ أن 0.85 × 1.15 أقل قليلاً من 1.",
        "result_en": "The answer is 391",
        "result_ar": "الجواب هو 391"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "15% of $400 = $60; after decrease: $400 − $60 = $340",
            "explanation_ar": "15% of $400 = $60; after decrease: $400 − $60 = $340"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "15% of $340 = $51; after increase: $340 + $51 = $391",
            "explanation_ar": "15% of $340 = $51; after increase: $340 + $51 = $391"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net change = −$60 + $51 = −$9 from the original $400",
            "explanation_ar": "Net change = −$60 + $51 = −$9 from the original $400"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The final price is $391",
            "explanation_ar": "The final price is $391"
          }
        ],
        "hint_en": "The 15% increase acts on $340, not $400, so it adds $51 not $60.",
        "hint_ar": "الزيادة 15% تُطبَّق على 340 دولاراً لا 400، لذا تضيف 51 دولاراً لا 60.",
        "result_en": "The answer is 391",
        "result_ar": "الجواب هو 391"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Start with bar = $400; trim 15% (= $60) → bar shrinks to $340",
            "explanation_ar": "Start with bar = $400; trim 15% (= $60) → bar shrinks to $340"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend the $340 bar by 15% (= $51) → bar grows to $391",
            "explanation_ar": "Extend the $340 bar by 15% (= $51) → bar grows to $391"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The final $391 bar is $9 shorter than the original $400 bar",
            "explanation_ar": "The final $391 bar is $9 shorter than the original $400 bar"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Final price = $391",
            "explanation_ar": "Final price = $391"
          }
        ],
        "hint_en": "The trim is larger than the extension because we trim from $400 but extend from $340.",
        "hint_ar": "القطع أكبر من الامتداد لأننا نقطع من 400 دولاراً بينما نمتد من 340 دولاراً.",
        "result_en": "The answer is 391",
        "result_ar": "الجواب هو 391"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-022",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "What percentage of 600 is 180?",
    "question_ar": "ما النسبة المئوية التي تمثلها 180 من 600؟",
    "answer": 30,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write fraction: 180/600",
            "explanation_ar": "Write fraction: 180/600"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Simplify: 180/600 = 18/60 = 3/10",
            "explanation_ar": "Simplify: 180/600 = 18/60 = 3/10"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Convert: 3/10 × 100 = 30",
            "explanation_ar": "Convert: 3/10 × 100 = 30"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "180 is 30% of 600",
            "explanation_ar": "180 is 30% of 600"
          }
        ],
        "hint_en": "Divide 180 by 600 and multiply by 100.",
        "hint_ar": "اقسم 180 على 600 واضرب في 100.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "10% of 600 = 60",
            "explanation_ar": "10% of 600 = 60"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "How many 60s in 180? 180 ÷ 60 = 3",
            "explanation_ar": "How many 60s in 180? 180 ÷ 60 = 3"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "So 180 = 3 × 10% = 30%",
            "explanation_ar": "So 180 = 3 × 10% = 30%"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "180 is 30% of 600",
            "explanation_ar": "180 is 30% of 600"
          }
        ],
        "hint_en": "Find 10% of 600 = 60, then see how many times 60 fits into 180.",
        "hint_ar": "أوجد 10% من 600 = 60، ثم انظر كم مرة تدخل 60 في 180.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 600 split into 10 equal blocks of 60 each",
            "explanation_ar": "Draw a bar of 600 split into 10 equal blocks of 60 each"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 3 blocks (= 180)",
            "explanation_ar": "Shade 3 blocks (= 180)"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "3 shaded blocks out of 10 = 3/10",
            "explanation_ar": "3 shaded blocks out of 10 = 3/10"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "3/10 = 30%, so 180 is 30% of 600",
            "explanation_ar": "3/10 = 30%, so 180 is 30% of 600"
          }
        ],
        "hint_en": "Split 600 into ten 60-unit blocks; shade three blocks (180 units total).",
        "hint_ar": "قسّم 600 إلى عشرة أجزاء من 60 وحدة؛ ظلّل ثلاثة أجزاء (180 وحدة إجمالاً).",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-medium-023",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A price of $300 is increased by 20% then increased by another 25%. What is the final price?",
    "question_ar": "سعر 300 دولار يرتفع بنسبة 20% ثم يرتفع بنسبة 25% أخرى. ما السعر النهائي؟",
    "answer": 450,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After 20% increase: $300 × 1.20 = $360",
            "explanation_ar": "After 20% increase: $300 × 1.20 = $360"
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After 25% increase: $360 × 1.25 = $450",
            "explanation_ar": "After 25% increase: $360 × 1.25 = $450"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Net multiplier: 1.20 × 1.25 = 1.50",
            "explanation_ar": "Net multiplier: 1.20 × 1.25 = 1.50"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Final price = $300 × 1.50 = $450",
            "explanation_ar": "Final price = $300 × 1.50 = $450"
          }
        ],
        "hint_en": "Multiply 1.20 by 1.25 to get the combined factor, then apply to $300.",
        "hint_ar": "اضرب 1.20 في 1.25 للحصول على المعامل المجمّع، ثم طبّق على 300 دولاراً.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "20% of $300 = $60; after first increase: $300 + $60 = $360",
            "explanation_ar": "20% of $300 = $60; after first increase: $300 + $60 = $360"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25% of $360 = $90; after second increase: $360 + $90 = $450",
            "explanation_ar": "25% of $360 = $90; after second increase: $360 + $90 = $450"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total increase = $60 + $90 = $150 on original $300",
            "explanation_ar": "Total increase = $60 + $90 = $150 on original $300"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The final price is $450",
            "explanation_ar": "The final price is $450"
          }
        ],
        "hint_en": "Step 1: add 20% of $300 = $60. Step 2: add 25% of the new $360 = $90.",
        "hint_ar": "الخطوة 1: أضف 20% من 300 دولاراً = 60. الخطوة 2: أضف 25% من 360 دولاراً الجديدة = 90.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Start with a $300 bar; add a 20% extension ($60) → bar = $360",
            "explanation_ar": "Start with a $300 bar; add a 20% extension ($60) → bar = $360"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add a 25% extension of $360 ($90) → bar = $360 + $90 = $450",
            "explanation_ar": "Add a 25% extension of $360 ($90) → bar = $360 + $90 = $450"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The $450 bar is 1.5× the original $300 bar",
            "explanation_ar": "The $450 bar is 1.5× the original $300 bar"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Final price = $450",
            "explanation_ar": "Final price = $450"
          }
        ],
        "hint_en": "Grow the bar twice: first by $60, then by $90 of the bigger bar.",
        "hint_ar": "امدد الشريط مرتين: أولاً بـ 60 دولاراً، ثم بـ 90 دولاراً من الشريط الأكبر.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-001",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A town has 4,000 people. The population increases by 10%, then decreases by 10%. What is the final population?",
    "question_ar": "يبلغ عدد سكان بلدة 4,000 شخص. ارتفع عدد السكان بنسبة 10%، ثم انخفض بنسبة 10%. ما عدد السكان النهائي ؟",
    "answer": 3960,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Recognize a +10% then −10% chain. The combined multiplier is 1.10 × 0.90 = 0.99.",
            "explanation_ar": "Recognize a +10% then −10% chain. The combined multiplier is 1.10 × 0.90 = 0.99."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute the net change directly: 0.99 × 4,000.",
            "explanation_ar": "Compute the net change directly: 0.99 × 4,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "0.99 × 4,000 = 3,960.",
            "explanation_ar": "0.99 × 4,000 = 3,960."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The net effect is a 1% loss on 4,000, which is −40, confirming 4,000 − 40 = 3,960.",
            "explanation_ar": "The net effect is a 1% loss on 4,000, which is −40, confirming 4,000 − 40 = 3,960."
          }
        ],
        "hint_en": "Multiply both percentage multipliers together first, then apply to 4,000.",
        "hint_ar": "اضرب المضاعفَين معاً أولاً ثم طبّقهما على 4,000.",
        "result_en": "The answer is 3960",
        "result_ar": "الجواب هو 3960"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find 10% of 4,000 for the increase: 10% × 4,000 = 400. New population = 4,000 + 400 = 4,400.",
            "explanation_ar": "Find 10% of 4,000 for the increase: 10% × 4,000 = 400. New population = 4,000 + 400 = 4,400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find 10% of 4,400 for the decrease: 10% × 4,400 = 440.",
            "explanation_ar": "Find 10% of 4,400 for the decrease: 10% × 4,400 = 440."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Subtract the decrease: 4,400 − 440 = 3,960.",
            "explanation_ar": "Subtract the decrease: 4,400 − 440 = 3,960."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Note the decrease (440) is larger than the increase (400) because it is applied to the already-larger 4,400.",
            "explanation_ar": "Note the decrease (440) is larger than the increase (400) because it is applied to the already-larger 4,400."
          }
        ],
        "hint_en": "Apply each percentage change one at a time, updating the total after each step.",
        "hint_ar": "طبّق كل تغيير مئوي خطوة بخطوة مع تحديث المجموع في كل مرة.",
        "result_en": "The answer is 3960",
        "result_ar": "الجواب هو 3960"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar representing 4,000. Mark it at 100%.",
            "explanation_ar": "Draw a bar representing 4,000. Mark it at 100%."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend the bar by 10% to show 4,400 (the bar is now 110% of 4,000).",
            "explanation_ar": "Extend the bar by 10% to show 4,400 (the bar is now 110% of 4,000)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Shrink the 4,400 bar by 10%, removing 440 units, leaving 3,960.",
            "explanation_ar": "Shrink the 4,400 bar by 10%, removing 440 units, leaving 3,960."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar (3,960) is slightly shorter than the original (4,000), showing the net −1% effect visually.",
            "explanation_ar": "The final bar (3,960) is slightly shorter than the original (4,000), showing the net −1% effect visually."
          }
        ],
        "hint_en": "Picture the bar growing then shrinking — the shrink applies to the bigger bar, so the net result is slightly below the start.",
        "hint_ar": "تخيّل شريطاً يكبر ثم يصغر — التقليص يطال الشريط الأكبر فيكون الناتج أقل من البداية.",
        "result_en": "The answer is 3960",
        "result_ar": "الجواب هو 3960"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-002",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "What is 20% of 25% of 400?",
    "question_ar": "ما مقدار 20% من 25% من 400 ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Convert nested percentages into a single multiplier: 20% × 25% = 0.20 × 0.25 = 0.05.",
            "explanation_ar": "Convert nested percentages into a single multiplier: 20% × 25% = 0.20 × 0.25 = 0.05."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the combined rate by 400: 0.05 × 400 = 20.",
            "explanation_ar": "Multiply the combined rate by 400: 0.05 × 400 = 20."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 5% of 400 = 20. ✓",
            "explanation_ar": "Verify: 5% of 400 = 20. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 20, which means only 5 out of every 100 units of 400 satisfy both conditions.",
            "explanation_ar": "The answer is 20, which means only 5 out of every 100 units of 400 satisfy both conditions."
          }
        ],
        "hint_en": "Multiply the two percentages first to get a single combined rate, then apply to 400.",
        "hint_ar": "اضرب النسبتين المئويتين أولاً للحصول على معدّل واحد مجمّع ثم طبّقه على 400.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find 25% of 400 first: 25% × 400 = 100.",
            "explanation_ar": "Find 25% of 400 first: 25% × 400 = 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Now find 20% of that result: 20% × 100 = 20.",
            "explanation_ar": "Now find 20% of that result: 20% × 100 = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Check: 20 out of 400 is 5%, and 20% × 25% = 5%. ✓",
            "explanation_ar": "Check: 20 out of 400 is 5%, and 20% × 25% = 5%. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The final answer is 20.",
            "explanation_ar": "The final answer is 20."
          }
        ],
        "hint_en": "Work from the inside out — find 25% of 400 first, then take 20% of that.",
        "hint_ar": "اعمل من الداخل للخارج — ابحث عن 25% من 400 أولاً ثم خذ 20% من الناتج.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 400 squares arranged in a 20×20 grid.",
            "explanation_ar": "Imagine 400 squares arranged in a 20×20 grid."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 25% of them: shade 100 squares (one quarter of the grid).",
            "explanation_ar": "Shade 25% of them: shade 100 squares (one quarter of the grid)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From those 100 shaded squares, shade 20% more darkly: 20 squares.",
            "explanation_ar": "From those 100 shaded squares, shade 20% more darkly: 20 squares."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Count the darkly shaded squares — there are 20, confirming the answer.",
            "explanation_ar": "Count the darkly shaded squares — there are 20, confirming the answer."
          }
        ],
        "hint_en": "Picture a grid: first highlight a quarter of it, then highlight one-fifth of that quarter.",
        "hint_ar": "تخيّل شبكة: أبرز ربعها أولاً ثم أبرز خُمس ذلك الربع.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-003",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A jacket is discounted by 10% and then discounted by another 10%. The final price is $162. What was the original price?",
    "question_ar": "خُفِّض سعر سترة بنسبة 10% ثم خُفِّض مجدداً بنسبة 10%. السعر النهائي هو 162 دولاراً. ما السعر الأصلي ؟",
    "answer": 200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two successive 10% discounts give a combined multiplier of 0.90 × 0.90 = 0.81.",
            "explanation_ar": "Two successive 10% discounts give a combined multiplier of 0.90 × 0.90 = 0.81."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Set up the equation: original × 0.81 = 162.",
            "explanation_ar": "Set up the equation: original × 0.81 = 162."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 0.81: original = 162 ÷ 0.81 = 200.",
            "explanation_ar": "Divide both sides by 0.81: original = 162 ÷ 0.81 = 200."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 200 × 0.81 = 162. ✓",
            "explanation_ar": "Verify: 200 × 0.81 = 162. ✓"
          }
        ],
        "hint_en": "Two 10% discounts multiply to 0.81. Divide the final price by 0.81 to reverse-engineer the original.",
        "hint_ar": "خصمان بنسبة 10% يعطيان مضاعفاً مجمّعاً قدره 0.81. اقسم السعر النهائي على 0.81 للحصول على السعر الأصلي.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "After the second 10% discount, the price is 90% of the first discounted price.",
            "explanation_ar": "After the second 10% discount, the price is 90% of the first discounted price."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "After the first 10% discount, the price is 90% of the original. So: original × 0.9 × 0.9 = 162.",
            "explanation_ar": "After the first 10% discount, the price is 90% of the original. So: original × 0.9 × 0.9 = 162."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "original × 0.81 = 162, so original = 162 / 0.81.",
            "explanation_ar": "original × 0.81 = 162, so original = 162 / 0.81."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "162 / 0.81 = 200. Verify: 200 → 180 → 162. ✓",
            "explanation_ar": "162 / 0.81 = 200. Verify: 200 → 180 → 162. ✓"
          }
        ],
        "hint_en": "Work backwards: undo each 10% discount by dividing by 0.9 twice.",
        "hint_ar": "اعمل بشكل عكسي: ألغِ كل خصم 10% بالقسمة على 0.9 مرتين.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw three price tags: Original → After discount 1 → After discount 2 = $162.",
            "explanation_ar": "Draw three price tags: Original → After discount 1 → After discount 2 = $162."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Moving right to left: $162 ÷ 0.9 = $180 (undoing the second discount).",
            "explanation_ar": "Moving right to left: $162 ÷ 0.9 = $180 (undoing the second discount)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "$180 ÷ 0.9 = $200 (undoing the first discount).",
            "explanation_ar": "$180 ÷ 0.9 = $200 (undoing the first discount)."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The original price tag reads $200. Confirm: $200 × 0.9 × 0.9 = $162. ✓",
            "explanation_ar": "The original price tag reads $200. Confirm: $200 × 0.9 × 0.9 = $162. ✓"
          }
        ],
        "hint_en": "Visualize three price tags and reverse the discounts by dividing by 0.9 twice.",
        "hint_ar": "تخيّل ثلاث بطاقات أسعار واعكس الخصومات بالقسمة على 0.9 مرتين.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-004",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "$500 is invested at a simple interest rate of 10% per year for 2 years. What is the total amount at the end?",
    "question_ar": "تم استثمار 500 دولار بمعدل فائدة بسيطة 10% سنوياً لمدة 2 سنوات. ما المبلغ الإجمالي في النهاية ؟",
    "answer": 600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Simple interest formula: I = P × r × t = 500 × 0.10 × 2 = 100.",
            "explanation_ar": "Simple interest formula: I = P × r × t = 500 × 0.10 × 2 = 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Total = Principal + Interest = 500 + 100 = 600.",
            "explanation_ar": "Total = Principal + Interest = 500 + 100 = 600."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Alternatively, 10% per year for 2 years = 20% total interest on 500.",
            "explanation_ar": "Alternatively, 10% per year for 2 years = 20% total interest on 500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "20% of 500 = 100, so total = 500 + 100 = 600. ✓",
            "explanation_ar": "20% of 500 = 100, so total = 500 + 100 = 600. ✓"
          }
        ],
        "hint_en": "Simple interest: multiply the principal by the rate and time, then add to the principal.",
        "hint_ar": "الفائدة البسيطة: اضرب الأصل في المعدّل والزمن ثم أضف الناتج إلى الأصل.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Year 1 interest: 10% of $500 = $50.",
            "explanation_ar": "Year 1 interest: 10% of $500 = $50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Year 2 interest: 10% of $500 = $50 (simple interest uses the original principal each year).",
            "explanation_ar": "Year 2 interest: 10% of $500 = $50 (simple interest uses the original principal each year)."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total interest over 2 years = $50 + $50 = $100.",
            "explanation_ar": "Total interest over 2 years = $50 + $50 = $100."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total amount = $500 + $100 = $600.",
            "explanation_ar": "Total amount = $500 + $100 = $600."
          }
        ],
        "hint_en": "Add the same 10%-of-$500 interest for each of the 2 years, then add to $500.",
        "hint_ar": "أضف فائدة 10% من 500 دولار لكل سنة من السنتين ثم أضفها إلى 500 دولار.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of length $500 (the principal).",
            "explanation_ar": "Draw a bar of length $500 (the principal)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add a segment of $50 for Year 1 interest (10% of $500).",
            "explanation_ar": "Add a segment of $50 for Year 1 interest (10% of $500)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add another $50 segment for Year 2 interest (again 10% of the original $500).",
            "explanation_ar": "Add another $50 segment for Year 2 interest (again 10% of the original $500)."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The total bar length is $500 + $50 + $50 = $600.",
            "explanation_ar": "The total bar length is $500 + $50 + $50 = $600."
          }
        ],
        "hint_en": "Picture the $500 bar with two equal $50 interest blocks attached — total length is $600.",
        "hint_ar": "تخيّل شريط 500 دولار مع كتلتَي فائدة متساويتين بقيمة 50 دولاراً لكل منهما — الطول الإجمالي 600 دولار.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-005",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A school has 400 students. 60% are girls. 25% of the girls play sport. How many girls play sport?",
    "question_ar": "يضم مدرسة 400 طالب. 60% منهم إناث. 25% من الإناث يمارسن الرياضة. كم عدد الإناث اللواتي يمارسن الرياضة ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined rate = 60% × 25% = 0.60 × 0.25 = 0.15.",
            "explanation_ar": "Combined rate = 60% × 25% = 0.60 × 0.25 = 0.15."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply to 400: 0.15 × 400 = 60.",
            "explanation_ar": "Apply to 400: 0.15 × 400 = 60."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "This means 15% of all 400 students play sport and are girls.",
            "explanation_ar": "This means 15% of all 400 students play sport and are girls."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "15% × 400 = 60. ✓",
            "explanation_ar": "15% × 400 = 60. ✓"
          }
        ],
        "hint_en": "Multiply 60% by 25% to get a single rate, then apply to 400.",
        "hint_ar": "اضرب 60% في 25% للحصول على معدّل واحد ثم طبّقه على 400.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find the number of girls: 60% of 400 = 0.60 × 400 = 240 girls.",
            "explanation_ar": "Find the number of girls: 60% of 400 = 0.60 × 400 = 240 girls."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find 25% of the 240 girls: 0.25 × 240 = 60.",
            "explanation_ar": "Find 25% of the 240 girls: 0.25 × 240 = 60."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "So 60 girls play sport.",
            "explanation_ar": "So 60 girls play sport."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 60 out of 400 is 15%, and 60% × 25% = 15%. ✓",
            "explanation_ar": "Check: 60 out of 400 is 15%, and 60% × 25% = 15%. ✓"
          }
        ],
        "hint_en": "First find the number of girls (60% of 400), then take 25% of that number.",
        "hint_ar": "ابحث أولاً عن عدد الإناث (60% من 400) ثم خذ 25% من ذلك العدد.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 400 student icons. Shade 60% (240 icons) in one color to represent girls.",
            "explanation_ar": "Draw 400 student icons. Shade 60% (240 icons) in one color to represent girls."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "From the 240 shaded girls, shade 25% in a second color: 60 icons.",
            "explanation_ar": "From the 240 shaded girls, shade 25% in a second color: 60 icons."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the double-shaded icons — there are 60.",
            "explanation_ar": "Count the double-shaded icons — there are 60."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "60 girls play sport, which is 15% of the whole school.",
            "explanation_ar": "60 girls play sport, which is 15% of the whole school."
          }
        ],
        "hint_en": "Shade girls first, then shade sport-players within the girls group.",
        "hint_ar": "أبرز الإناث أولاً ثم أبرز الرياضيات من بين مجموعة الإناث.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-006",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A car costs $2,000. Its value increases by 20%, then decreases by 20%. What is the final value?",
    "question_ar": "تبلغ قيمة سيارة 2,000 دولار. ارتفعت قيمتها بنسبة 20%، ثم انخفضت بنسبة 20%. ما القيمة النهائية ؟",
    "answer": 1920,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier for +20% then −20%: 1.20 × 0.80 = 0.96.",
            "explanation_ar": "Combined multiplier for +20% then −20%: 1.20 × 0.80 = 0.96."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Net effect is a 4% decrease on the original value.",
            "explanation_ar": "Net effect is a 4% decrease on the original value."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "4% of 2,000 = 80. Final value = 2,000 − 80 = 1,920.",
            "explanation_ar": "4% of 2,000 = 80. Final value = 2,000 − 80 = 1,920."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 2,000 × 0.96 = 1,920. ✓",
            "explanation_ar": "Verify: 2,000 × 0.96 = 1,920. ✓"
          }
        ],
        "hint_en": "Multiply 1.20 by 0.80 to find the combined multiplier, then apply to $2,000.",
        "hint_ar": "اضرب 1.20 في 0.80 للحصول على المضاعف المجمّع ثم طبّقه على 2,000 دولار.",
        "result_en": "The answer is 1920",
        "result_ar": "الجواب هو 1920"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Increase by 20%: 20% of $2,000 = $400. New value = $2,000 + $400 = $2,400.",
            "explanation_ar": "Increase by 20%: 20% of $2,000 = $400. New value = $2,000 + $400 = $2,400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Decrease by 20%: 20% of $2,400 = $480.",
            "explanation_ar": "Decrease by 20%: 20% of $2,400 = $480."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Final value = $2,400 − $480 = $1,920.",
            "explanation_ar": "Final value = $2,400 − $480 = $1,920."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The decrease of $480 exceeds the increase of $400 because it acts on the higher $2,400.",
            "explanation_ar": "The decrease of $480 exceeds the increase of $400 because it acts on the higher $2,400."
          }
        ],
        "hint_en": "Apply each 20% change in sequence, updating the value each time.",
        "hint_ar": "طبّق كل تغيير بنسبة 20% بالتسلسل مع تحديث القيمة في كل مرة.",
        "result_en": "The answer is 1920",
        "result_ar": "الجواب هو 1920"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a value bar at $2,000 (100%).",
            "explanation_ar": "Draw a value bar at $2,000 (100%)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend it to $2,400 (120%) after the 20% increase.",
            "explanation_ar": "Extend it to $2,400 (120%) after the 20% increase."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Reduce the $2,400 bar by 20%: remove $480, leaving $1,920.",
            "explanation_ar": "Reduce the $2,400 bar by 20%: remove $480, leaving $1,920."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar at $1,920 is 4% shorter than the original $2,000 bar.",
            "explanation_ar": "The final bar at $1,920 is 4% shorter than the original $2,000 bar."
          }
        ],
        "hint_en": "The bar grows to $2,400 then shrinks by 20% of $2,400, ending below the start.",
        "hint_ar": "يكبر الشريط إلى 2,400 دولار ثم يتقلص بمقدار 20% من 2,400 دولار لينتهي أقل من البداية.",
        "result_en": "The answer is 1920",
        "result_ar": "الجواب هو 1920"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-007",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A shop has 500 items. The stock increases by 10% in January, then by 20% in February. How many items are there after both increases?",
    "question_ar": "يمتلك المتجر 500 قطعة. زادت المخزون بنسبة 10% في يناير ثم بنسبة 20% في فبراير. كم عدد القطع بعد كلا الزيادتين ؟",
    "answer": 660,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 1.10 × 1.20 = 1.32.",
            "explanation_ar": "Combined multiplier: 1.10 × 1.20 = 1.32."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply to 500: 500 × 1.32 = 660.",
            "explanation_ar": "Apply to 500: 500 × 1.32 = 660."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Net increase is 32% of 500 = 160 items.",
            "explanation_ar": "Net increase is 32% of 500 = 160 items."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "500 + 160 = 660. ✓",
            "explanation_ar": "500 + 160 = 660. ✓"
          }
        ],
        "hint_en": "Multiply 1.10 by 1.20 for the combined growth factor, then apply to 500.",
        "hint_ar": "اضرب 1.10 في 1.20 للحصول على عامل النمو المجمّع ثم طبّقه على 500.",
        "result_en": "The answer is 660",
        "result_ar": "الجواب هو 660"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "January: 10% of 500 = 50 items added. Stock = 500 + 50 = 550.",
            "explanation_ar": "January: 10% of 500 = 50 items added. Stock = 500 + 50 = 550."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "February: 20% of 550 = 110 items added.",
            "explanation_ar": "February: 20% of 550 = 110 items added."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Final stock = 550 + 110 = 660.",
            "explanation_ar": "Final stock = 550 + 110 = 660."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total increase = 160 items (50 + 110), or 32% of the original 500.",
            "explanation_ar": "Total increase = 160 items (50 + 110), or 32% of the original 500."
          }
        ],
        "hint_en": "Apply the 10% increase first to get 550, then apply 20% to 550.",
        "hint_ar": "طبّق زيادة 10% أولاً للحصول على 550 ثم طبّق 20% على 550.",
        "result_en": "The answer is 660",
        "result_ar": "الجواب هو 660"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 500 items.",
            "explanation_ar": "Draw a bar of 500 items."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add a 10% extension (50 items) for January — bar now shows 550.",
            "explanation_ar": "Add a 10% extension (50 items) for January — bar now shows 550."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add a 20% extension on the 550 (110 items) for February — bar now shows 660.",
            "explanation_ar": "Add a 20% extension on the 550 (110 items) for February — bar now shows 660."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar of 660 is 32% longer than the original 500.",
            "explanation_ar": "The final bar of 660 is 32% longer than the original 500."
          }
        ],
        "hint_en": "Visualize the bar growing in two steps: first by 50, then by 110.",
        "hint_ar": "تخيّل الشريط ينمو على خطوتين: أولاً بمقدار 50 ثم بمقدار 110.",
        "result_en": "The answer is 660",
        "result_ar": "الجواب هو 660"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-008",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A television originally costs $800. It is discounted by 50%, then discounted by another 50%. What is the final price?",
    "question_ar": "يبلغ السعر الأصلي للتلفاز 800 دولار. خُفِّض بنسبة 50% ثم خُفِّض مجدداً بنسبة 50%. ما السعر النهائي ؟",
    "answer": 200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 0.50 × 0.50 = 0.25.",
            "explanation_ar": "Combined multiplier: 0.50 × 0.50 = 0.25."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The final price is 25% of the original: 0.25 × $800 = $200.",
            "explanation_ar": "The final price is 25% of the original: 0.25 × $800 = $200."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Two 50% cuts reduce the price to one-quarter of its original value.",
            "explanation_ar": "Two 50% cuts reduce the price to one-quarter of its original value."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "$800 × 0.25 = $200. ✓",
            "explanation_ar": "$800 × 0.25 = $200. ✓"
          }
        ],
        "hint_en": "Two 50% discounts together equal a 75% total reduction — only 25% of $800 remains.",
        "hint_ar": "خصمان بنسبة 50% يعادلان تخفيضاً إجمالياً بنسبة 75% — يبقى فقط 25% من 800 دولار.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "First 50% discount: 50% of $800 = $400. Price after first cut = $800 − $400 = $400.",
            "explanation_ar": "First 50% discount: 50% of $800 = $400. Price after first cut = $800 − $400 = $400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Second 50% discount: 50% of $400 = $200. Price after second cut = $400 − $200 = $200.",
            "explanation_ar": "Second 50% discount: 50% of $400 = $200. Price after second cut = $400 − $200 = $200."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The final price is $200.",
            "explanation_ar": "The final price is $200."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "$200 is exactly one-quarter of the original $800 price.",
            "explanation_ar": "$200 is exactly one-quarter of the original $800 price."
          }
        ],
        "hint_en": "Halve the $800 for the first discount, then halve the result for the second discount.",
        "hint_ar": "قسّم 800 دولار على 2 للحصول على الخصم الأول ثم قسّم الناتج على 2 للخصم الثاني.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar representing $800.",
            "explanation_ar": "Draw a bar representing $800."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Cut the bar in half: $400 remains after the first 50% discount.",
            "explanation_ar": "Cut the bar in half: $400 remains after the first 50% discount."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Cut the $400 bar in half again: $200 remains after the second 50% discount.",
            "explanation_ar": "Cut the $400 bar in half again: $200 remains after the second 50% discount."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The remaining bar is $200, which is one-quarter of the original $800.",
            "explanation_ar": "The remaining bar is $200, which is one-quarter of the original $800."
          }
        ],
        "hint_en": "Picture halving twice — $800 → $400 → $200.",
        "hint_ar": "تخيّل التقسيم إلى النصف مرتين — 800 ← 400 ← 200.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-009",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A number is increased by 25% and then decreased by 20%. The result is 500. What was the original number?",
    "question_ar": "زاد عدد بنسبة 25% ثم نقص بنسبة 20%. كانت النتيجة 500. ما العدد الأصلي ؟",
    "answer": 500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 1.25 × 0.80 = 1.00.",
            "explanation_ar": "Combined multiplier: 1.25 × 0.80 = 1.00."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "A +25% followed by −20% returns exactly to the original value.",
            "explanation_ar": "A +25% followed by −20% returns exactly to the original value."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since original × 1.00 = 500, the original number is 500.",
            "explanation_ar": "Since original × 1.00 = 500, the original number is 500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 500 × 1.25 = 625, then 625 × 0.80 = 500. ✓",
            "explanation_ar": "Verify: 500 × 1.25 = 625, then 625 × 0.80 = 500. ✓"
          }
        ],
        "hint_en": "Notice that +25% and −20% cancel exactly: 1.25 × 0.80 = 1.00.",
        "hint_ar": "لاحظ أن +25% و −20% تتلغيان تماماً: 1.25 × 0.80 = 1.00.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Let the original number be x. After +25%: x × 1.25.",
            "explanation_ar": "Let the original number be x. After +25%: x × 1.25."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "After −20%: x × 1.25 × 0.80 = x × 1.00 = x.",
            "explanation_ar": "After −20%: x × 1.25 × 0.80 = x × 1.00 = x."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "So x = 500.",
            "explanation_ar": "So x = 500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 500 → 625 → 500. ✓ The two operations perfectly cancel.",
            "explanation_ar": "Check: 500 → 625 → 500. ✓ The two operations perfectly cancel."
          }
        ],
        "hint_en": "Set up the equation x × 1.25 × 0.80 = 500 and simplify.",
        "hint_ar": "ضع المعادلة x × 1.25 × 0.80 = 500 وبسّطها.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar for the unknown original.",
            "explanation_ar": "Draw a bar for the unknown original."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend it by 25% to show a longer bar (the intermediate value).",
            "explanation_ar": "Extend it by 25% to show a longer bar (the intermediate value)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Reduce that longer bar by 20% — it shrinks back to its starting length.",
            "explanation_ar": "Reduce that longer bar by 20% — it shrinks back to its starting length."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar equals the original, so the original = 500.",
            "explanation_ar": "The final bar equals the original, so the original = 500."
          }
        ],
        "hint_en": "The bar grows by 25% then shrinks by 20% of the larger bar — these two operations cancel perfectly.",
        "hint_ar": "يكبر الشريط بنسبة 25% ثم يتقلص بنسبة 20% من الشريط الأكبر — تتلغى هاتان العمليتان تماماً.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-010",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "$800 is invested at a simple interest rate of 5% per year for 3 years. What is the total amount?",
    "question_ar": "تم استثمار 800 دولار بمعدل فائدة بسيطة 5% سنوياً لمدة 3 سنوات. ما المبلغ الإجمالي ؟",
    "answer": 920,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Total simple interest rate = 5% × 3 years = 15%.",
            "explanation_ar": "Total simple interest rate = 5% × 3 years = 15%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Interest = 15% of $800 = 0.15 × 800 = $120.",
            "explanation_ar": "Interest = 15% of $800 = 0.15 × 800 = $120."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total amount = $800 + $120 = $920.",
            "explanation_ar": "Total amount = $800 + $120 = $920."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify using formula: I = P × r × t = 800 × 0.05 × 3 = 120. Total = 920. ✓",
            "explanation_ar": "Verify using formula: I = P × r × t = 800 × 0.05 × 3 = 120. Total = 920. ✓"
          }
        ],
        "hint_en": "Multiply the annual rate by the number of years to get the total rate, then find that percentage of $800.",
        "hint_ar": "اضرب المعدّل السنوي في عدد السنوات للحصول على المعدّل الإجمالي ثم احسب تلك النسبة من 800 دولار.",
        "result_en": "The answer is 920",
        "result_ar": "الجواب هو 920"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Annual interest = 5% of $800 = $40 per year.",
            "explanation_ar": "Annual interest = 5% of $800 = $40 per year."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Year 1: +$40. Year 2: +$40. Year 3: +$40.",
            "explanation_ar": "Year 1: +$40. Year 2: +$40. Year 3: +$40."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total interest = $40 × 3 = $120.",
            "explanation_ar": "Total interest = $40 × 3 = $120."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total amount = $800 + $120 = $920.",
            "explanation_ar": "Total amount = $800 + $120 = $920."
          }
        ],
        "hint_en": "Calculate the $40 interest once, multiply by 3 years, then add to $800.",
        "hint_ar": "احسب فائدة 40 دولاراً مرة واحدة واضربها في 3 سنوات ثم أضفها إلى 800 دولار.",
        "result_en": "The answer is 920",
        "result_ar": "الجواب هو 920"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a $800 principal bar.",
            "explanation_ar": "Draw a $800 principal bar."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Attach three equal interest blocks of $40 each (one per year).",
            "explanation_ar": "Attach three equal interest blocks of $40 each (one per year)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The three blocks together add $120.",
            "explanation_ar": "The three blocks together add $120."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total bar length = $800 + $120 = $920.",
            "explanation_ar": "Total bar length = $800 + $120 = $920."
          }
        ],
        "hint_en": "Picture three identical $40 interest blocks added to the $800 principal.",
        "hint_ar": "تخيّل ثلاث كتل فائدة متطابقة بقيمة 40 دولاراً لكل منها مضافة إلى 800 دولار.",
        "result_en": "The answer is 920",
        "result_ar": "الجواب هو 920"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-011",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "What is 50% of 40% of 600?",
    "question_ar": "ما مقدار 50% من 40% من 600 ؟",
    "answer": 120,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combine the two rates: 50% × 40% = 0.50 × 0.40 = 0.20.",
            "explanation_ar": "Combine the two rates: 50% × 40% = 0.50 × 0.40 = 0.20."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply the combined 20% rate to 600: 0.20 × 600 = 120.",
            "explanation_ar": "Apply the combined 20% rate to 600: 0.20 × 600 = 120."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "So 50% of 40% of 600 equals 20% of 600.",
            "explanation_ar": "So 50% of 40% of 600 equals 20% of 600."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "20% × 600 = 120. ✓",
            "explanation_ar": "20% × 600 = 120. ✓"
          }
        ],
        "hint_en": "Multiply 50% by 40% first to get 20%, then take 20% of 600.",
        "hint_ar": "اضرب 50% في 40% أولاً للحصول على 20% ثم خذ 20% من 600.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find 40% of 600: 0.40 × 600 = 240.",
            "explanation_ar": "Find 40% of 600: 0.40 × 600 = 240."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find 50% of 240: 0.50 × 240 = 120.",
            "explanation_ar": "Find 50% of 240: 0.50 × 240 = 120."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The answer is 120.",
            "explanation_ar": "The answer is 120."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Cross-check: 120 / 600 = 0.20 = 20%, and 50% × 40% = 20%. ✓",
            "explanation_ar": "Cross-check: 120 / 600 = 0.20 = 20%, and 50% × 40% = 20%. ✓"
          }
        ],
        "hint_en": "Work inside out — find 40% of 600 first, then take half of that result.",
        "hint_ar": "اعمل من الداخل للخارج — ابحث عن 40% من 600 أولاً ثم خذ نصف الناتج.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 600 units in a bar.",
            "explanation_ar": "Draw 600 units in a bar."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 40% of the bar: 240 units.",
            "explanation_ar": "Shade 40% of the bar: 240 units."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From the shaded 240, shade half (50%): 120 units.",
            "explanation_ar": "From the shaded 240, shade half (50%): 120 units."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The doubly shaded region represents 120 units.",
            "explanation_ar": "The doubly shaded region represents 120 units."
          }
        ],
        "hint_en": "Shade 40% of 600 to get 240, then shade half of that 240.",
        "hint_ar": "أبرز 40% من 600 للحصول على 240 ثم أبرز نصف تلك الـ 240.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-012",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A factory produces 5,000 items. Production increases by 30%, then decreases by 30%. How many items are produced finally?",
    "question_ar": "ينتج مصنع 5,000 قطعة. ارتفع الإنتاج بنسبة 30% ثم انخفض بنسبة 30%. كم عدد القطع المنتجة في النهاية ؟",
    "answer": 4550,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 1.30 × 0.70 = 0.91.",
            "explanation_ar": "Combined multiplier: 1.30 × 0.70 = 0.91."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Net effect is a 9% decrease on 5,000.",
            "explanation_ar": "Net effect is a 9% decrease on 5,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "9% of 5,000 = 450. Final = 5,000 − 450 = 4,550.",
            "explanation_ar": "9% of 5,000 = 450. Final = 5,000 − 450 = 4,550."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 5,000 × 0.91 = 4,550. ✓",
            "explanation_ar": "Verify: 5,000 × 0.91 = 4,550. ✓"
          }
        ],
        "hint_en": "1.30 × 0.70 = 0.91, so the net result is 91% of 5,000.",
        "hint_ar": "1.30 × 0.70 = 0.91، إذاً النتيجة الصافية هي 91% من 5,000.",
        "result_en": "The answer is 4550",
        "result_ar": "الجواب هو 4550"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Increase by 30%: 30% of 5,000 = 1,500. New total = 5,000 + 1,500 = 6,500.",
            "explanation_ar": "Increase by 30%: 30% of 5,000 = 1,500. New total = 5,000 + 1,500 = 6,500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Decrease by 30%: 30% of 6,500 = 1,950.",
            "explanation_ar": "Decrease by 30%: 30% of 6,500 = 1,950."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Final = 6,500 − 1,950 = 4,550.",
            "explanation_ar": "Final = 6,500 − 1,950 = 4,550."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The decrease (1,950) is larger than the increase (1,500) because it acts on the larger 6,500.",
            "explanation_ar": "The decrease (1,950) is larger than the increase (1,500) because it acts on the larger 6,500."
          }
        ],
        "hint_en": "Apply each 30% change one at a time, updating the production count after each.",
        "hint_ar": "طبّق كل تغيير بنسبة 30% خطوة بخطوة مع تحديث عدد القطع في كل مرة.",
        "result_en": "The answer is 4550",
        "result_ar": "الجواب هو 4550"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar at 5,000.",
            "explanation_ar": "Draw a bar at 5,000."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend by 30% to reach 6,500.",
            "explanation_ar": "Extend by 30% to reach 6,500."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Reduce the 6,500 bar by 30%: remove 1,950, leaving 4,550.",
            "explanation_ar": "Reduce the 6,500 bar by 30%: remove 1,950, leaving 4,550."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar at 4,550 is 9% shorter than the original 5,000.",
            "explanation_ar": "The final bar at 4,550 is 9% shorter than the original 5,000."
          }
        ],
        "hint_en": "The bar rises to 6,500 then falls further than it started — ending at 4,550.",
        "hint_ar": "يرتفع الشريط إلى 6,500 ثم ينخفض أكثر مما كان في البداية — وينتهي عند 4,550.",
        "result_en": "The answer is 4550",
        "result_ar": "الجواب هو 4550"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-013",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A number is 200. It is increased by 10%, then by 20%, then by 25%. What is the final result?",
    "question_ar": "عدد مقداره 200. زاد بنسبة 10% ثم بنسبة 20% ثم بنسبة 25%. ما النتيجة النهائية ؟",
    "answer": 330,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 1.10 × 1.20 × 1.25 = 1.65.",
            "explanation_ar": "Combined multiplier: 1.10 × 1.20 × 1.25 = 1.65."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "1.10 × 1.20 = 1.32, then 1.32 × 1.25 = 1.65.",
            "explanation_ar": "1.10 × 1.20 = 1.32, then 1.32 × 1.25 = 1.65."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Final result = 200 × 1.65 = 330.",
            "explanation_ar": "Final result = 200 × 1.65 = 330."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 200 → 220 → 264 → 330. ✓",
            "explanation_ar": "Verify: 200 → 220 → 264 → 330. ✓"
          }
        ],
        "hint_en": "Multiply all three growth factors together: 1.10 × 1.20 × 1.25, then apply to 200.",
        "hint_ar": "اضرب عوامل النمو الثلاثة معاً: 1.10 × 1.20 × 1.25 ثم طبّق على 200.",
        "result_en": "The answer is 330",
        "result_ar": "الجواب هو 330"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "+10% of 200 = 20. New value = 220.",
            "explanation_ar": "+10% of 200 = 20. New value = 220."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "+20% of 220 = 44. New value = 264.",
            "explanation_ar": "+20% of 220 = 44. New value = 264."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "+25% of 264 = 66. New value = 264 + 66 = 330.",
            "explanation_ar": "+25% of 264 = 66. New value = 264 + 66 = 330."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Final result = 330, which is a 65% total increase on the original 200.",
            "explanation_ar": "Final result = 330, which is a 65% total increase on the original 200."
          }
        ],
        "hint_en": "Apply each percentage increase one at a time: 200 → 220 → 264 → 330.",
        "hint_ar": "طبّق كل زيادة مئوية خطوة بخطوة: 200 → 220 → 264 → 330.",
        "result_en": "The answer is 330",
        "result_ar": "الجواب هو 330"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar at 200.",
            "explanation_ar": "Draw a bar at 200."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 10% (20 units) — bar grows to 220.",
            "explanation_ar": "Add 10% (20 units) — bar grows to 220."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 20% of 220 (44 units) — bar grows to 264.",
            "explanation_ar": "Add 20% of 220 (44 units) — bar grows to 264."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Add 25% of 264 (66 units) — bar grows to 330.",
            "explanation_ar": "Add 25% of 264 (66 units) — bar grows to 330."
          }
        ],
        "hint_en": "Picture three growth steps, each building on the previous total: 200, 220, 264, 330.",
        "hint_ar": "تخيّل ثلاث خطوات نمو تبني كل منها على المجموع السابق: 200، 220، 264، 330.",
        "result_en": "The answer is 330",
        "result_ar": "الجواب هو 330"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-014",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A phone is discounted by 20% and then by another 20%. The final price is $64. What was the original price?",
    "question_ar": "خُفِّض سعر هاتف بنسبة 20% ثم بنسبة 20% أخرى. السعر النهائي هو 64 دولاراً. ما السعر الأصلي ؟",
    "answer": 100,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier for two 20% discounts: 0.80 × 0.80 = 0.64.",
            "explanation_ar": "Combined multiplier for two 20% discounts: 0.80 × 0.80 = 0.64."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Equation: original × 0.64 = 64.",
            "explanation_ar": "Equation: original × 0.64 = 64."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "original = 64 ÷ 0.64 = 100.",
            "explanation_ar": "original = 64 ÷ 0.64 = 100."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 100 × 0.64 = 64. ✓",
            "explanation_ar": "Verify: 100 × 0.64 = 64. ✓"
          }
        ],
        "hint_en": "0.8 × 0.8 = 0.64. Divide $64 by 0.64 to find the original price.",
        "hint_ar": "0.8 × 0.8 = 0.64. اقسم 64 دولاراً على 0.64 للحصول على السعر الأصلي.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Work backwards from $64. Undo the second 20% discount: $64 ÷ 0.80 = $80.",
            "explanation_ar": "Work backwards from $64. Undo the second 20% discount: $64 ÷ 0.80 = $80."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo the first 20% discount: $80 ÷ 0.80 = $100.",
            "explanation_ar": "Undo the first 20% discount: $80 ÷ 0.80 = $100."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The original price was $100.",
            "explanation_ar": "The original price was $100."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Verify forward: $100 × 0.80 = $80, then $80 × 0.80 = $64. ✓",
            "explanation_ar": "Verify forward: $100 × 0.80 = $80, then $80 × 0.80 = $64. ✓"
          }
        ],
        "hint_en": "Reverse-engineer by dividing by 0.80 twice: $64 → $80 → $100.",
        "hint_ar": "اعكس العملية بالقسمة على 0.80 مرتين: 64 → 80 → 100.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw three price labels: ? → after 1st discount → $64.",
            "explanation_ar": "Draw three price labels: ? → after 1st discount → $64."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The final $64 is 80% of the price after the first discount.",
            "explanation_ar": "The final $64 is 80% of the price after the first discount."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Price after first discount = $64 ÷ 0.8 = $80.",
            "explanation_ar": "Price after first discount = $64 ÷ 0.8 = $80."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "$80 is 80% of original, so original = $80 ÷ 0.8 = $100.",
            "explanation_ar": "$80 is 80% of original, so original = $80 ÷ 0.8 = $100."
          }
        ],
        "hint_en": "Trace back from the final $64 price through each discount stage to the original.",
        "hint_ar": "تتبّع للخلف من السعر النهائي 64 دولاراً عبر كل مرحلة خصم للوصول إلى الأصل.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-015",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A school has 500 students. 40% are boys. 30% of the boys are in the math club. How many boys are in the math club?",
    "question_ar": "يضم مدرسة 500 طالب. 40% منهم ذكور. 30% من الذكور في نادي الرياضيات. كم عدد الذكور في نادي الرياضيات ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined rate: 40% × 30% = 0.40 × 0.30 = 0.12.",
            "explanation_ar": "Combined rate: 40% × 30% = 0.40 × 0.30 = 0.12."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "12% of 500 = 0.12 × 500 = 60.",
            "explanation_ar": "12% of 500 = 0.12 × 500 = 60."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "So 60 students are boys in the math club.",
            "explanation_ar": "So 60 students are boys in the math club."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 40% of 500 = 200 boys, 30% of 200 = 60. ✓",
            "explanation_ar": "Verify: 40% of 500 = 200 boys, 30% of 200 = 60. ✓"
          }
        ],
        "hint_en": "Multiply 40% by 30% to get 12%, then find 12% of 500.",
        "hint_ar": "اضرب 40% في 30% للحصول على 12% ثم اعثر على 12% من 500.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Number of boys: 40% of 500 = 0.40 × 500 = 200.",
            "explanation_ar": "Number of boys: 40% of 500 = 0.40 × 500 = 200."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Boys in math club: 30% of 200 = 0.30 × 200 = 60.",
            "explanation_ar": "Boys in math club: 30% of 200 = 0.30 × 200 = 60."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The answer is 60.",
            "explanation_ar": "The answer is 60."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "60 is 12% of the total 500 students.",
            "explanation_ar": "60 is 12% of the total 500 students."
          }
        ],
        "hint_en": "Find the boys first (40% of 500 = 200), then take 30% of 200.",
        "hint_ar": "ابحث أولاً عن عدد الذكور (40% من 500 = 200) ثم خذ 30% من 200.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 500 student icons.",
            "explanation_ar": "Draw 500 student icons."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 40% (200 icons) to represent boys.",
            "explanation_ar": "Shade 40% (200 icons) to represent boys."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From the 200 shaded boys, shade 30% (60 icons) in a second color for math club members.",
            "explanation_ar": "From the 200 shaded boys, shade 30% (60 icons) in a second color for math club members."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Count the double-shaded icons: 60 boys in the math club.",
            "explanation_ar": "Count the double-shaded icons: 60 boys in the math club."
          }
        ],
        "hint_en": "Shade 200 boys, then shade 30% of them (60) for math club.",
        "hint_ar": "أبرز 200 ذكر ثم أبرز 30% منهم (60) لعضوية نادي الرياضيات.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-016",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "$1,000 is invested at a simple interest rate of 8% per year for 2 years. What is the total amount?",
    "question_ar": "تم استثمار 1,000 دولار بمعدل فائدة بسيطة 8% سنوياً لمدة 2 سنة. ما المبلغ الإجمالي ؟",
    "answer": 1160,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Total interest rate over 2 years = 8% × 2 = 16%.",
            "explanation_ar": "Total interest rate over 2 years = 8% × 2 = 16%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Interest = 16% of $1,000 = 0.16 × 1,000 = $160.",
            "explanation_ar": "Interest = 16% of $1,000 = 0.16 × 1,000 = $160."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total = $1,000 + $160 = $1,160.",
            "explanation_ar": "Total = $1,000 + $160 = $1,160."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: I = 1,000 × 0.08 × 2 = 160. Total = 1,160. ✓",
            "explanation_ar": "Verify: I = 1,000 × 0.08 × 2 = 160. Total = 1,160. ✓"
          }
        ],
        "hint_en": "8% per year for 2 years = 16% total. Find 16% of $1,000 and add to the principal.",
        "hint_ar": "8% سنوياً لمدة سنتين = 16% إجمالاً. ابحث عن 16% من 1,000 دولار وأضفها إلى الأصل.",
        "result_en": "The answer is 1160",
        "result_ar": "الجواب هو 1160"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Year 1 interest: 8% of $1,000 = $80.",
            "explanation_ar": "Year 1 interest: 8% of $1,000 = $80."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Year 2 interest: 8% of $1,000 = $80 (same, since simple interest).",
            "explanation_ar": "Year 2 interest: 8% of $1,000 = $80 (same, since simple interest)."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total interest = $80 + $80 = $160.",
            "explanation_ar": "Total interest = $80 + $80 = $160."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total amount = $1,000 + $160 = $1,160.",
            "explanation_ar": "Total amount = $1,000 + $160 = $1,160."
          }
        ],
        "hint_en": "Add $80 interest for each of the 2 years, giving $160 total interest on top of $1,000.",
        "hint_ar": "أضف فائدة 80 دولاراً لكل سنة من السنتين، مما يعطي إجمالي فائدة 160 دولاراً فوق 1,000 دولار.",
        "result_en": "The answer is 1160",
        "result_ar": "الجواب هو 1160"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a $1,000 bar.",
            "explanation_ar": "Draw a $1,000 bar."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Attach a $80 interest block for Year 1.",
            "explanation_ar": "Attach a $80 interest block for Year 1."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Attach another $80 interest block for Year 2.",
            "explanation_ar": "Attach another $80 interest block for Year 2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total bar = $1,000 + $80 + $80 = $1,160.",
            "explanation_ar": "Total bar = $1,000 + $80 + $80 = $1,160."
          }
        ],
        "hint_en": "Two equal $80 interest blocks sit on top of the $1,000 principal.",
        "hint_ar": "كتلتا فائدة متساويتان بقيمة 80 دولاراً لكل منها تجلسان فوق 1,000 دولار من الأصل.",
        "result_en": "The answer is 1160",
        "result_ar": "الجواب هو 1160"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-017",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "What is 10% of 50% of 1,000?",
    "question_ar": "ما مقدار 10% من 50% من 1,000 ؟",
    "answer": 50,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combine: 10% × 50% = 0.10 × 0.50 = 0.05.",
            "explanation_ar": "Combine: 10% × 50% = 0.10 × 0.50 = 0.05."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "5% of 1,000 = 0.05 × 1,000 = 50.",
            "explanation_ar": "5% of 1,000 = 0.05 × 1,000 = 50."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Taking 10% of half of 1,000 gives the same as 5% of 1,000.",
            "explanation_ar": "Taking 10% of half of 1,000 gives the same as 5% of 1,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Answer: 50. ✓",
            "explanation_ar": "Answer: 50. ✓"
          }
        ],
        "hint_en": "Multiply 10% by 50% to get 5%, then find 5% of 1,000.",
        "hint_ar": "اضرب 10% في 50% للحصول على 5% ثم ابحث عن 5% من 1,000.",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find 50% of 1,000: 0.50 × 1,000 = 500.",
            "explanation_ar": "Find 50% of 1,000: 0.50 × 1,000 = 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find 10% of 500: 0.10 × 500 = 50.",
            "explanation_ar": "Find 10% of 500: 0.10 × 500 = 50."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The answer is 50.",
            "explanation_ar": "The answer is 50."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "50 out of 1,000 = 5%, consistent with 10% × 50% = 5%. ✓",
            "explanation_ar": "50 out of 1,000 = 5%, consistent with 10% × 50% = 5%. ✓"
          }
        ],
        "hint_en": "Half of 1,000 is 500; 10% of 500 is 50.",
        "hint_ar": "نصف 1,000 هو 500؛ 10% من 500 هو 50.",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 1,000 squares.",
            "explanation_ar": "Draw 1,000 squares."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 50% of them: 500 squares.",
            "explanation_ar": "Shade 50% of them: 500 squares."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From those 500 shaded squares, take 10%: 50 squares.",
            "explanation_ar": "From those 500 shaded squares, take 10%: 50 squares."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The 50 doubly-marked squares are the answer.",
            "explanation_ar": "The 50 doubly-marked squares are the answer."
          }
        ],
        "hint_en": "Half of 1,000 is 500; take one-tenth of that 500 to get 50.",
        "hint_ar": "نصف 1,000 هو 500؛ خذ عُشر ذلك الـ 500 للحصول على 50.",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-018",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A house is valued at $3,000. Its value increases by 20%, then decreases by 25%. What is the final value?",
    "question_ar": "تُقدَّر قيمة منزل بـ 3,000 دولار. ارتفعت قيمته بنسبة 20% ثم انخفضت بنسبة 25%. ما القيمة النهائية ؟",
    "answer": 2700,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 1.20 × 0.75 = 0.90.",
            "explanation_ar": "Combined multiplier: 1.20 × 0.75 = 0.90."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Net effect is a 10% decrease on 3,000.",
            "explanation_ar": "Net effect is a 10% decrease on 3,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "10% of 3,000 = 300. Final = 3,000 − 300 = 2,700.",
            "explanation_ar": "10% of 3,000 = 300. Final = 3,000 − 300 = 2,700."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 3,000 × 0.90 = 2,700. ✓",
            "explanation_ar": "Verify: 3,000 × 0.90 = 2,700. ✓"
          }
        ],
        "hint_en": "1.20 × 0.75 = 0.90, so the value ends up at 90% of $3,000.",
        "hint_ar": "1.20 × 0.75 = 0.90، إذاً تنتهي القيمة عند 90% من 3,000 دولار.",
        "result_en": "The answer is 2700",
        "result_ar": "الجواب هو 2700"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Increase by 20%: 20% of $3,000 = $600. New value = $3,600.",
            "explanation_ar": "Increase by 20%: 20% of $3,000 = $600. New value = $3,600."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Decrease by 25%: 25% of $3,600 = $900.",
            "explanation_ar": "Decrease by 25%: 25% of $3,600 = $900."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Final value = $3,600 − $900 = $2,700.",
            "explanation_ar": "Final value = $3,600 − $900 = $2,700."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Net change = −$300, which is a 10% decrease on the original $3,000.",
            "explanation_ar": "Net change = −$300, which is a 10% decrease on the original $3,000."
          }
        ],
        "hint_en": "First add 20% of $3,000 to get $3,600, then subtract 25% of $3,600.",
        "hint_ar": "أضف أولاً 20% من 3,000 دولار للحصول على 3,600 دولار ثم اطرح 25% من 3,600 دولار.",
        "result_en": "The answer is 2700",
        "result_ar": "الجواب هو 2700"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar at $3,000.",
            "explanation_ar": "Draw a bar at $3,000."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend by 20%: bar grows to $3,600.",
            "explanation_ar": "Extend by 20%: bar grows to $3,600."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Reduce the $3,600 bar by 25%: remove $900, leaving $2,700.",
            "explanation_ar": "Reduce the $3,600 bar by 25%: remove $900, leaving $2,700."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar at $2,700 is 10% shorter than the original $3,000.",
            "explanation_ar": "The final bar at $2,700 is 10% shorter than the original $3,000."
          }
        ],
        "hint_en": "The house value bar rises to $3,600 but falls by a larger amount (25% of $3,600) to $2,700.",
        "hint_ar": "يرتفع شريط قيمة المنزل إلى 3,600 دولار لكنه ينخفض بمبلغ أكبر (25% من 3,600 دولار) إلى 2,700 دولار.",
        "result_en": "The answer is 2700",
        "result_ar": "الجواب هو 2700"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-019",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A shop has 400 products. The stock increases by 25% in March, then by 20% in April. How many products are there after both increases?",
    "question_ar": "يمتلك المتجر 400 منتج. زاد المخزون بنسبة 25% في مارس ثم بنسبة 20% في أبريل. كم عدد المنتجات بعد كلا الزيادتين ؟",
    "answer": 600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 1.25 × 1.20 = 1.50.",
            "explanation_ar": "Combined multiplier: 1.25 × 1.20 = 1.50."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Total = 400 × 1.50 = 600.",
            "explanation_ar": "Total = 400 × 1.50 = 600."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Net growth is 50% over the original 400.",
            "explanation_ar": "Net growth is 50% over the original 400."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "50% of 400 = 200, so 400 + 200 = 600. ✓",
            "explanation_ar": "50% of 400 = 200, so 400 + 200 = 600. ✓"
          }
        ],
        "hint_en": "Multiply 1.25 × 1.20 = 1.50 and apply to 400.",
        "hint_ar": "اضرب 1.25 × 1.20 = 1.50 وطبّق على 400.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "March: 25% of 400 = 100. Stock = 400 + 100 = 500.",
            "explanation_ar": "March: 25% of 400 = 100. Stock = 400 + 100 = 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "April: 20% of 500 = 100. Stock = 500 + 100 = 600.",
            "explanation_ar": "April: 20% of 500 = 100. Stock = 500 + 100 = 600."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Final stock = 600.",
            "explanation_ar": "Final stock = 600."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total increase = 200 items (100 + 100), a 50% rise on the original 400.",
            "explanation_ar": "Total increase = 200 items (100 + 100), a 50% rise on the original 400."
          }
        ],
        "hint_en": "Apply 25% increase to 400 first, then 20% to the updated total of 500.",
        "hint_ar": "طبّق زيادة 25% على 400 أولاً ثم 20% على المجموع المحدَّث 500.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 400 products.",
            "explanation_ar": "Draw a bar of 400 products."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 25% (100 products) for March — bar now shows 500.",
            "explanation_ar": "Add 25% (100 products) for March — bar now shows 500."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 20% of 500 (100 products) for April — bar now shows 600.",
            "explanation_ar": "Add 20% of 500 (100 products) for April — bar now shows 600."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Final bar = 600, which is 50% larger than the original 400.",
            "explanation_ar": "Final bar = 600, which is 50% larger than the original 400."
          }
        ],
        "hint_en": "Two growth blocks of 100 each (25% of 400, then 20% of 500) bring the total to 600.",
        "hint_ar": "كتلتا نمو بمقدار 100 لكل منهما (25% من 400 ثم 20% من 500) تُوصل الإجمالي إلى 600.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-020",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A price increases by 50% and then decreases by 50%. The final price is $150. What was the original price?",
    "question_ar": "ارتفع سعر بنسبة 50% ثم انخفض بنسبة 50%. السعر النهائي هو 150 دولاراً. ما السعر الأصلي ؟",
    "answer": 200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 1.50 × 0.50 = 0.75.",
            "explanation_ar": "Combined multiplier: 1.50 × 0.50 = 0.75."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Equation: original × 0.75 = 150.",
            "explanation_ar": "Equation: original × 0.75 = 150."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "original = 150 ÷ 0.75 = 200.",
            "explanation_ar": "original = 150 ÷ 0.75 = 200."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 200 × 1.50 = 300, then 300 × 0.50 = 150. ✓",
            "explanation_ar": "Verify: 200 × 1.50 = 300, then 300 × 0.50 = 150. ✓"
          }
        ],
        "hint_en": "1.50 × 0.50 = 0.75. Divide $150 by 0.75 to find the original.",
        "hint_ar": "1.50 × 0.50 = 0.75. اقسم 150 دولاراً على 0.75 للحصول على الأصل.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "After the 50% decrease, the price is 50% of the post-increase price. So post-increase = $150 ÷ 0.50 = $300.",
            "explanation_ar": "After the 50% decrease, the price is 50% of the post-increase price. So post-increase = $150 ÷ 0.50 = $300."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "$300 is 150% of the original. So original = $300 ÷ 1.50 = $200.",
            "explanation_ar": "$300 is 150% of the original. So original = $300 ÷ 1.50 = $200."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The original price was $200.",
            "explanation_ar": "The original price was $200."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Confirm: $200 → $300 (after +50%) → $150 (after −50%). ✓",
            "explanation_ar": "Confirm: $200 → $300 (after +50%) → $150 (after −50%). ✓"
          }
        ],
        "hint_en": "Undo the 50% decrease first (÷ 0.5), then undo the 50% increase (÷ 1.5).",
        "hint_ar": "ألغِ نقص 50% أولاً (÷ 0.5) ثم ألغِ زيادة 50% (÷ 1.5).",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw three price tags: Original → $300 (after +50%) → $150 (after −50%).",
            "explanation_ar": "Draw three price tags: Original → $300 (after +50%) → $150 (after −50%)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Read right to left: $150 × 2 = $300 (undoing the 50% decrease).",
            "explanation_ar": "Read right to left: $150 × 2 = $300 (undoing the 50% decrease)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "$300 ÷ 1.5 = $200 (undoing the 50% increase).",
            "explanation_ar": "$300 ÷ 1.5 = $200 (undoing the 50% increase)."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Original price = $200.",
            "explanation_ar": "Original price = $200."
          }
        ],
        "hint_en": "Work backwards: double $150 to undo the halving, then divide by 1.5 to undo the increase.",
        "hint_ar": "اعمل بشكل عكسي: ضاعف 150 دولاراً للتراجع عن التخفيض النصفي ثم اقسم على 1.5 للتراجع عن الزيادة.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-021",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A school has 1,000 students. 50% are girls. 40% of the girls play sport. 25% of those girls win medals. How many girls win medals?",
    "question_ar": "يضم مدرسة 1,000 طالب. 50% منهم إناث. 40% من الإناث يمارسن الرياضة. 25% من هؤلاء الإناث يفزن بميداليات. كم عدد الإناث اللواتي يفزن بميداليات ؟",
    "answer": 50,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined rate: 50% × 40% × 25% = 0.50 × 0.40 × 0.25 = 0.05.",
            "explanation_ar": "Combined rate: 50% × 40% × 25% = 0.50 × 0.40 × 0.25 = 0.05."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply to 1,000: 0.05 × 1,000 = 50.",
            "explanation_ar": "Apply to 1,000: 0.05 × 1,000 = 50."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Only 5% of the total school population are medal-winning girls.",
            "explanation_ar": "Only 5% of the total school population are medal-winning girls."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "5% × 1,000 = 50. ✓",
            "explanation_ar": "5% × 1,000 = 50. ✓"
          }
        ],
        "hint_en": "Multiply all three percentages together (0.5 × 0.4 × 0.25 = 0.05), then apply to 1,000.",
        "hint_ar": "اضرب النسب الثلاث معاً (0.5 × 0.4 × 0.25 = 0.05) ثم طبّق على 1,000.",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Girls: 50% of 1,000 = 500.",
            "explanation_ar": "Girls: 50% of 1,000 = 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Girls who play sport: 40% of 500 = 200.",
            "explanation_ar": "Girls who play sport: 40% of 500 = 200."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Girls who win medals: 25% of 200 = 50.",
            "explanation_ar": "Girls who win medals: 25% of 200 = 50."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Answer: 50 girls win medals.",
            "explanation_ar": "Answer: 50 girls win medals."
          }
        ],
        "hint_en": "Apply each percentage in sequence: 1,000 → 500 → 200 → 50.",
        "hint_ar": "طبّق كل نسبة مئوية بالتسلسل: 1,000 → 500 → 200 → 50.",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 1,000 student icons.",
            "explanation_ar": "Draw 1,000 student icons."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 500 in blue (girls).",
            "explanation_ar": "Shade 500 in blue (girls)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From the 500 blue, shade 200 in green (sports-playing girls).",
            "explanation_ar": "From the 500 blue, shade 200 in green (sports-playing girls)."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "From the 200 green, shade 50 in gold (medal winners) — 50 gold icons.",
            "explanation_ar": "From the 200 green, shade 50 in gold (medal winners) — 50 gold icons."
          }
        ],
        "hint_en": "Three layers of shading: 1,000 → 500 (girls) → 200 (sport) → 50 (medals).",
        "hint_ar": "ثلاث طبقات من التظليل: 1,000 → 500 (إناث) → 200 (رياضة) → 50 (ميداليات).",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-022",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "$600 is invested at a simple interest rate of 10% per year. How much total interest is earned after 4 years?",
    "question_ar": "تم استثمار 600 دولار بمعدل فائدة بسيطة 10% سنوياً. كم إجمالي الفائدة المكتسبة بعد 4 سنوات ؟",
    "answer": 240,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Annual interest = 10% of $600 = $60.",
            "explanation_ar": "Annual interest = 10% of $600 = $60."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Total interest over 4 years = $60 × 4 = $240.",
            "explanation_ar": "Total interest over 4 years = $60 × 4 = $240."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Alternatively, 10% × 4 years = 40% total rate. 40% of $600 = $240.",
            "explanation_ar": "Alternatively, 10% × 4 years = 40% total rate. 40% of $600 = $240."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The question asks only for the interest (not the total), so the answer is $240.",
            "explanation_ar": "The question asks only for the interest (not the total), so the answer is $240."
          }
        ],
        "hint_en": "Interest = principal × rate × time = $600 × 0.10 × 4 = $240.",
        "hint_ar": "الفائدة = الأصل × المعدّل × الزمن = 600 × 0.10 × 4 = 240 دولاراً.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Year 1 interest: 10% × $600 = $60.",
            "explanation_ar": "Year 1 interest: 10% × $600 = $60."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Same for Years 2, 3, and 4: $60 each year.",
            "explanation_ar": "Same for Years 2, 3, and 4: $60 each year."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total interest = $60 + $60 + $60 + $60 = $240.",
            "explanation_ar": "Total interest = $60 + $60 + $60 + $60 = $240."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The total amount in the account would be $600 + $240 = $840, but the question asks only for interest: $240.",
            "explanation_ar": "The total amount in the account would be $600 + $240 = $840, but the question asks only for interest: $240."
          }
        ],
        "hint_en": "Add $60 of interest for each of the 4 years: 4 × $60 = $240.",
        "hint_ar": "أضف 60 دولاراً من الفائدة لكل سنة من السنوات الأربع: 4 × 60 = 240 دولاراً.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw the $600 principal bar.",
            "explanation_ar": "Draw the $600 principal bar."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Attach four equal $60 interest blocks, one for each year.",
            "explanation_ar": "Attach four equal $60 interest blocks, one for each year."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The four interest blocks together measure $240.",
            "explanation_ar": "The four interest blocks together measure $240."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The answer (total interest only) = $240.",
            "explanation_ar": "The answer (total interest only) = $240."
          }
        ],
        "hint_en": "Four identical $60 blocks stacked beside $600 — the four blocks total $240.",
        "hint_ar": "أربع كتل متطابقة بقيمة 60 دولاراً مكدّسة بجانب 600 دولار — مجموع الكتل الأربع 240 دولاراً.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-pct-hard-023",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A college has 800 students. 50% are boys. The number of boys increases by 20%. How many boys are there now?",
    "question_ar": "يضم كلية 800 طالب. 50% منهم ذكور. زاد عدد الذكور بنسبة 20%. كم عدد الذكور الآن ؟",
    "answer": 480,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 50% × 1.20 = 0.50 × 1.20 = 0.60.",
            "explanation_ar": "Combined multiplier: 50% × 1.20 = 0.50 × 1.20 = 0.60."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "New number of boys = 800 × 0.60 = 480.",
            "explanation_ar": "New number of boys = 800 × 0.60 = 480."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "This means 60% of the original student body count are boys now.",
            "explanation_ar": "This means 60% of the original student body count are boys now."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 50% of 800 = 400 boys; 400 × 1.20 = 480. ✓",
            "explanation_ar": "Verify: 50% of 800 = 400 boys; 400 × 1.20 = 480. ✓"
          }
        ],
        "hint_en": "Find 50% of 800 to get the initial boys, then multiply by 1.20 for the 20% increase.",
        "hint_ar": "ابحث عن 50% من 800 للحصول على عدد الذكور الأولي ثم اضرب في 1.20 للزيادة بنسبة 20%.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Initial boys: 50% of 800 = 400.",
            "explanation_ar": "Initial boys: 50% of 800 = 400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20% increase in boys: 20% of 400 = 80 additional boys.",
            "explanation_ar": "20% increase in boys: 20% of 400 = 80 additional boys."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New total boys = 400 + 80 = 480.",
            "explanation_ar": "New total boys = 400 + 80 = 480."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "480 boys is 60% of the original 800-student total.",
            "explanation_ar": "480 boys is 60% of the original 800-student total."
          }
        ],
        "hint_en": "Start with 400 boys (50% of 800), then add 80 (20% of 400) to get 480.",
        "hint_ar": "ابدأ بـ 400 ذكور (50% من 800) ثم أضف 80 (20% من 400) للحصول على 480.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 800 student icons; shade 400 (50%) in blue for boys.",
            "explanation_ar": "Draw 800 student icons; shade 400 (50%) in blue for boys."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 20% more blue icons: 20% of 400 = 80 new boys.",
            "explanation_ar": "Add 20% more blue icons: 20% of 400 = 80 new boys."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "New boy total = 400 + 80 = 480 blue icons.",
            "explanation_ar": "New boy total = 400 + 80 = 480 blue icons."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The 480 blue icons represent 60% of the original 800.",
            "explanation_ar": "The 480 blue icons represent 60% of the original 800."
          }
        ],
        "hint_en": "Shade 400 boys initially, then add 80 more for the 20% increase — total 480.",
        "hint_ar": "أبرز 400 ذكراً في البداية ثم أضف 80 آخرين للزيادة بنسبة 20% — الإجمالي 480.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      }
    },
    "meta": {
      "fun_fact_tag": "percentages_advanced"
    }
  },
  {
    "id": "g7-practice-word-easy-001",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A market in Tokyo sells 240 apples on Monday and 360 on Tuesday. How many apples were sold in total?",
    "question_ar": "يبيع سوق في طوكيو 240 تفاحة يوم الاثنين و 360 تفاحة يوم الثلاثاء. كم عدد التفاحات المبيعة إجمالاً ؟",
    "answer": 600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write the two numbers vertically: 240 on top, 360 below.",
            "explanation_ar": "Write the two numbers vertically: 240 on top, 360 below."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the hundreds: 200 + 300 = 500.",
            "explanation_ar": "Add the hundreds: 200 + 300 = 500."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the tens: 40 + 60 = 100.",
            "explanation_ar": "Add the tens: 40 + 60 = 100."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine: 500 + 100 = 600 apples total.",
            "explanation_ar": "Combine: 500 + 100 = 600 apples total."
          }
        ],
        "hint_en": "Add hundreds first, then tens, then combine.",
        "hint_ar": "اجمع المئات أولاً، ثم العشرات، ثم اجمع النتائج.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 240 into 200 + 40 and 360 into 300 + 60.",
            "explanation_ar": "Break 240 into 200 + 40 and 360 into 300 + 60."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the hundreds parts: 200 + 300 = 500.",
            "explanation_ar": "Add the hundreds parts: 200 + 300 = 500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the tens parts: 40 + 60 = 100.",
            "explanation_ar": "Add the tens parts: 40 + 60 = 100."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Add the two sums: 500 + 100 = 600 apples.",
            "explanation_ar": "Add the two sums: 500 + 100 = 600 apples."
          }
        ],
        "hint_en": "Decompose each number by place value before adding.",
        "hint_ar": "قسّم كل عدد حسب القيمة المكانية قبل الجمع.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a number line starting at 0.",
            "explanation_ar": "Draw a number line starting at 0."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Mark a jump of 240 to represent Monday's apples.",
            "explanation_ar": "Mark a jump of 240 to represent Monday's apples."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From 240, make a jump of 360 to represent Tuesday's apples.",
            "explanation_ar": "From 240, make a jump of 360 to represent Tuesday's apples."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Land at 240 + 360 = 600 apples total.",
            "explanation_ar": "Land at 240 + 360 = 600 apples total."
          }
        ],
        "hint_en": "Picture two jumps on a number line, one for each day.",
        "hint_ar": "تخيّل قفزتين على خط الأعداد، قفزة لكل يوم.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-002",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A store in Brazil marks up a price by 25%. The original price is 80 reais. What is the new price?",
    "question_ar": "يرفع متجر في البرازيل سعراً بنسبة 25%. السعر الأصلي هو 80 ريالاً برازيلياً. ما السعر الجديد ؟",
    "answer": 100,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find 25% of 80: 25% = 1/4, so 80 ÷ 4 = 20.",
            "explanation_ar": "Find 25% of 80: 25% = 1/4, so 80 ÷ 4 = 20."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The markup amount is 20 reais.",
            "explanation_ar": "The markup amount is 20 reais."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the markup to the original: 80 + 20 = 100.",
            "explanation_ar": "Add the markup to the original: 80 + 20 = 100."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new price is 100 reais.",
            "explanation_ar": "The new price is 100 reais."
          }
        ],
        "hint_en": "25% is the same as one-quarter; divide by 4 then add.",
        "hint_ar": "25% تساوي ربعاً؛ اقسم على 4 ثم أضف النتيجة.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 25% into 20% + 5%.",
            "explanation_ar": "Break 25% into 20% + 5%."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20% of 80 = 16; 5% of 80 = 4.",
            "explanation_ar": "20% of 80 = 16; 5% of 80 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total markup: 16 + 4 = 20 reais.",
            "explanation_ar": "Total markup: 16 + 4 = 20 reais."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "New price: 80 + 20 = 100 reais.",
            "explanation_ar": "New price: 80 + 20 = 100 reais."
          }
        ],
        "hint_en": "Split 25% into easier parts: 20% and 5%.",
        "hint_ar": "قسّم 25% إلى أجزاء أسهل: 20% و 5%.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar representing 80 reais as 100% of the original price.",
            "explanation_ar": "Draw a bar representing 80 reais as 100% of the original price."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide the bar into 4 equal sections; each section is 80 ÷ 4 = 20 reais.",
            "explanation_ar": "Divide the bar into 4 equal sections; each section is 80 ÷ 4 = 20 reais."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One extra section (25%) = 20 reais is added to the right.",
            "explanation_ar": "One extra section (25%) = 20 reais is added to the right."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The full bar now spans 5 sections × 20 = 100 reais.",
            "explanation_ar": "The full bar now spans 5 sections × 20 = 100 reais."
          }
        ],
        "hint_en": "Think of the original price as 4 equal blocks; add 1 more block for 25%.",
        "hint_ar": "تخيّل السعر الأصلي على شكل 4 مربعات متساوية؛ أضف مربعاً واحداً لتمثيل 25%.",
        "result_en": "The answer is 100",
        "result_ar": "الجواب هو 100"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-003",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A class in Egypt has 30 students. 20% scored full marks on a test. How many students scored full marks?",
    "question_ar": "يضم صف في مصر 30 طالباً. حصل 20% منهم على العلامة الكاملة في الاختبار. كم عدد الطلاب الذين حصلوا على العلامة الكاملة ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Convert 20% to a fraction: 20% = 20/100 = 1/5.",
            "explanation_ar": "Convert 20% to a fraction: 20% = 20/100 = 1/5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply: 30 × (1/5) = 30 ÷ 5 = 6.",
            "explanation_ar": "Multiply: 30 × (1/5) = 30 ÷ 5 = 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "So 6 students scored full marks.",
            "explanation_ar": "So 6 students scored full marks."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 6 ÷ 30 = 0.2 = 20%. Correct.",
            "explanation_ar": "Verify: 6 ÷ 30 = 0.2 = 20%. Correct."
          }
        ],
        "hint_en": "20% = 1/5; divide the total by 5.",
        "hint_ar": "20% = 1/5؛ اقسم المجموع على 5.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 20% into 10% + 10%.",
            "explanation_ar": "Break 20% into 10% + 10%."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "10% of 30 = 3.",
            "explanation_ar": "10% of 30 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "10% + 10% = 3 + 3 = 6.",
            "explanation_ar": "10% + 10% = 3 + 3 = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "6 students scored full marks.",
            "explanation_ar": "6 students scored full marks."
          }
        ],
        "hint_en": "Find 10% first, then double it to get 20%.",
        "hint_ar": "أوجد 10% أولاً، ثم ضاعفها للحصول على 20%.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 30 student icons in a row.",
            "explanation_ar": "Draw 30 student icons in a row."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group them into 5 equal groups of 6 (since 20% = 1/5).",
            "explanation_ar": "Group them into 5 equal groups of 6 (since 20% = 1/5)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Shade 1 group of 6 to represent the 20% who scored full marks.",
            "explanation_ar": "Shade 1 group of 6 to represent the 20% who scored full marks."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Count the shaded group: 6 students.",
            "explanation_ar": "Count the shaded group: 6 students."
          }
        ],
        "hint_en": "Arrange students into 5 equal groups and shade one group.",
        "hint_ar": "رتّب الطلاب في 5 مجموعات متساوية وظلّل مجموعة واحدة.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-004",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A train in Germany travels 480 km on Saturday and 315 km on Sunday. How many more kilometres did it travel on Saturday than on Sunday?",
    "question_ar": "يقطع قطار في ألمانيا 480 كم يوم السبت و 315 كم يوم الأحد. بكم كيلومتراً تفوّق مسافة السبت على مسافة الأحد ؟",
    "answer": 165,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Set up the subtraction: 480 − 315.",
            "explanation_ar": "Set up the subtraction: 480 − 315."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract the hundreds: 400 − 300 = 100.",
            "explanation_ar": "Subtract the hundreds: 400 − 300 = 100."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the remaining: 80 − 15 = 65.",
            "explanation_ar": "Subtract the remaining: 80 − 15 = 65."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine: 100 + 65 = 165 km.",
            "explanation_ar": "Combine: 100 + 65 = 165 km."
          }
        ],
        "hint_en": "Subtract hundreds, then subtract the remaining tens and units.",
        "hint_ar": "اطرح المئات أولاً، ثم اطرح ما تبقى من عشرات وآحاد.",
        "result_en": "The answer is 165",
        "result_ar": "الجواب هو 165"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 315 into 300 + 15.",
            "explanation_ar": "Break 315 into 300 + 15."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "480 − 300 = 180.",
            "explanation_ar": "480 − 300 = 180."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "180 − 15 = 165.",
            "explanation_ar": "180 − 15 = 165."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The difference is 165 km.",
            "explanation_ar": "The difference is 165 km."
          }
        ],
        "hint_en": "Subtract 300 first, then subtract 15 from the result.",
        "hint_ar": "اطرح 300 أولاً، ثم اطرح 15 من النتيجة.",
        "result_en": "The answer is 165",
        "result_ar": "الجواب هو 165"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a number line and mark 315 and 480.",
            "explanation_ar": "Draw a number line and mark 315 and 480."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Find the gap from 315 to 480 by stepping forward.",
            "explanation_ar": "Find the gap from 315 to 480 by stepping forward."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "315 + 85 = 400; then 400 + 80 = 480, giving 85 + 80 = 165.",
            "explanation_ar": "315 + 85 = 400; then 400 + 80 = 480, giving 85 + 80 = 165."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The distance between the two points is 165 km.",
            "explanation_ar": "The distance between the two points is 165 km."
          }
        ],
        "hint_en": "Jump from 315 to a round number, then to 480, and add the jumps.",
        "hint_ar": "قفز من 315 إلى عدد مستدير ثم إلى 480، واجمع القفزتين.",
        "result_en": "The answer is 165",
        "result_ar": "الجواب هو 165"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-005",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A bakery in France bakes 15 trays of croissants. Each tray holds 12 croissants. How many croissants are baked in total?",
    "question_ar": "يخبز مخبز في فرنسا 15 صينية من الكرواسان. كل صينية تحمل 12 كرواسانة. كم عدد الكرواسانات الإجمالي ؟",
    "answer": 180,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use the Vedic method: 15 × 12.",
            "explanation_ar": "Use the Vedic method: 15 × 12."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "15 × 10 = 150.",
            "explanation_ar": "15 × 10 = 150."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "15 × 2 = 30.",
            "explanation_ar": "15 × 2 = 30."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "150 + 30 = 180 croissants.",
            "explanation_ar": "150 + 30 = 180 croissants."
          }
        ],
        "hint_en": "Multiply 15 by 10, then by 2, and add the results.",
        "hint_ar": "اضرب 15 في 10، ثم في 2، وأضف النتيجتين.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 12 into 10 + 2.",
            "explanation_ar": "Break 12 into 10 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "15 × 10 = 150.",
            "explanation_ar": "15 × 10 = 150."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15 × 2 = 30.",
            "explanation_ar": "15 × 2 = 30."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "150 + 30 = 180 croissants.",
            "explanation_ar": "150 + 30 = 180 croissants."
          }
        ],
        "hint_en": "Split 12 into 10 and 2, multiply each by 15, then add.",
        "hint_ar": "قسّم 12 إلى 10 و 2، اضرب كلاً منهما في 15، ثم اجمع.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a 15-by-12 grid representing trays and croissants per tray.",
            "explanation_ar": "Draw a 15-by-12 grid representing trays and croissants per tray."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group the 15 rows into 10 rows and 5 rows.",
            "explanation_ar": "Group the 15 rows into 10 rows and 5 rows."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "10 rows × 12 = 120; 5 rows × 12 = 60.",
            "explanation_ar": "10 rows × 12 = 120; 5 rows × 12 = 60."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "120 + 60 = 180 croissants total.",
            "explanation_ar": "120 + 60 = 180 croissants total."
          }
        ],
        "hint_en": "Picture a grid of 15 rows and 12 columns; count all cells.",
        "hint_ar": "تخيّل شبكة من 15 صفاً و 12 عموداً؛ عدّ جميع المربعات.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-006",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A school in Canada has 560 students. Half of them participate in after-school sports. How many students participate in after-school sports?",
    "question_ar": "تضم مدرسة في كندا 560 طالباً. يشارك نصفهم في الرياضة بعد المدرسة. كم عدد الطلاب المشاركين في الرياضة بعد المدرسة ؟",
    "answer": 280,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "50% of 560 means dividing by 2.",
            "explanation_ar": "50% of 560 means dividing by 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Halve the hundreds: 500 ÷ 2 = 250.",
            "explanation_ar": "Halve the hundreds: 500 ÷ 2 = 250."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Halve the tens: 60 ÷ 2 = 30.",
            "explanation_ar": "Halve the tens: 60 ÷ 2 = 30."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "250 + 30 = 280 students.",
            "explanation_ar": "250 + 30 = 280 students."
          }
        ],
        "hint_en": "Split 560 into 500 and 60, halve each part, then combine.",
        "hint_ar": "قسّم 560 إلى 500 و 60، قسّم كلاً منهما على 2، ثم اجمع.",
        "result_en": "The answer is 280",
        "result_ar": "الجواب هو 280"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 560 into 400 + 160.",
            "explanation_ar": "Break 560 into 400 + 160."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "400 ÷ 2 = 200.",
            "explanation_ar": "400 ÷ 2 = 200."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "160 ÷ 2 = 80.",
            "explanation_ar": "160 ÷ 2 = 80."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "200 + 80 = 280 students.",
            "explanation_ar": "200 + 80 = 280 students."
          }
        ],
        "hint_en": "Decompose 560 into two even parts, halve each, then add.",
        "hint_ar": "قسّم 560 إلى جزأين زوجيين، قسّم كلاً منهما على 2، ثم اجمع.",
        "result_en": "The answer is 280",
        "result_ar": "الجواب هو 280"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar divided into 560 equal units representing all students.",
            "explanation_ar": "Draw a bar divided into 560 equal units representing all students."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a vertical line exactly in the middle of the bar.",
            "explanation_ar": "Draw a vertical line exactly in the middle of the bar."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each half contains 560 ÷ 2 = 280 units.",
            "explanation_ar": "Each half contains 560 ÷ 2 = 280 units."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The shaded half = 280 students who play sports.",
            "explanation_ar": "The shaded half = 280 students who play sports."
          }
        ],
        "hint_en": "Picture the school as a bar split exactly in half.",
        "hint_ar": "تخيّل المدرسة كشريط مقسّم إلى نصفين متساويين.",
        "result_en": "The answer is 280",
        "result_ar": "الجواب هو 280"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-007",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A river in India is 1,250 km long. A second river in India is 980 km long. What is the combined length of both rivers?",
    "question_ar": "يبلغ طول نهر في الهند 1,250 كم وطول نهر ثانٍ في الهند 980 كم. ما الطول الإجمالي للنهرين ؟",
    "answer": 2230,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write 1,250 + 980 vertically.",
            "explanation_ar": "Write 1,250 + 980 vertically."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the hundreds: 200 + 900 = 1,100.",
            "explanation_ar": "Add the hundreds: 200 + 900 = 1,100."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the remaining digits: 1,000 + 50 + 80 = 1,130. Total so far: 1,000 + 1,130 = 2,130... recount: 1,250 + 980.",
            "explanation_ar": "Add the remaining digits: 1,000 + 50 + 80 = 1,130. Total so far: 1,000 + 1,130 = 2,130... recount: 1,250 + 980."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "1,250 + 980: add 1,250 + 1,000 = 2,250, then subtract 20 (since 980 = 1,000 − 20): 2,250 − 20 = 2,230 km.",
            "explanation_ar": "1,250 + 980: add 1,250 + 1,000 = 2,250, then subtract 20 (since 980 = 1,000 − 20): 2,250 − 20 = 2,230 km."
          }
        ],
        "hint_en": "Round 980 up to 1,000, add, then subtract 20.",
        "hint_ar": "قرّب 980 إلى 1,000 ثم أضف وبعدها اطرح 20.",
        "result_en": "The answer is 2230",
        "result_ar": "الجواب هو 2230"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 980 into 900 + 80.",
            "explanation_ar": "Break 980 into 900 + 80."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1,250 + 900 = 2,150.",
            "explanation_ar": "1,250 + 900 = 2,150."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "2,150 + 80 = 2,230.",
            "explanation_ar": "2,150 + 80 = 2,230."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The combined length is 2,230 km.",
            "explanation_ar": "The combined length is 2,230 km."
          }
        ],
        "hint_en": "Decompose 980 into 900 and 80, add each part to 1,250.",
        "hint_ar": "قسّم 980 إلى 900 و 80، أضف كل جزء إلى 1,250.",
        "result_en": "The answer is 2230",
        "result_ar": "الجواب هو 2230"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw two horizontal bars: one of length 1,250 and one of length 980.",
            "explanation_ar": "Draw two horizontal bars: one of length 1,250 and one of length 980."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place them end to end on a number line.",
            "explanation_ar": "Place them end to end on a number line."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Mark the start at 0 and the end of the first bar at 1,250.",
            "explanation_ar": "Mark the start at 0 and the end of the first bar at 1,250."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Extend the second bar 980 more units to reach 2,230 km.",
            "explanation_ar": "Extend the second bar 980 more units to reach 2,230 km."
          }
        ],
        "hint_en": "Line up the two river bars end to end and read the total length.",
        "hint_ar": "رتّب شريطَي النهرين طرفاً لطرف واقرأ الطول الكلي.",
        "result_en": "The answer is 2230",
        "result_ar": "الجواب هو 2230"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-008",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A factory in South Korea produces 3,600 phone cases per day. How many phone cases does it produce in 5 days?",
    "question_ar": "ينتج مصنع في كوريا الجنوبية 3,600 غطاء هاتف يومياً. كم عدد أغطية الهواتف التي ينتجها في 5 أيام ؟",
    "answer": 18000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Multiply 3,600 × 5.",
            "explanation_ar": "Multiply 3,600 × 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ignore the zeros: 36 × 5 = 180.",
            "explanation_ar": "Ignore the zeros: 36 × 5 = 180."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Reattach the two zeros from 3,600: 180 × 100 = 18,000.",
            "explanation_ar": "Reattach the two zeros from 3,600: 180 × 100 = 18,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The factory produces 18,000 phone cases in 5 days.",
            "explanation_ar": "The factory produces 18,000 phone cases in 5 days."
          }
        ],
        "hint_en": "Multiply 36 × 5, then scale back up by 100.",
        "hint_ar": "اضرب 36 × 5، ثم اضرب الناتج في 100.",
        "result_en": "The answer is 18000",
        "result_ar": "الجواب هو 18000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 3,600 into 3,000 + 600.",
            "explanation_ar": "Break 3,600 into 3,000 + 600."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3,000 × 5 = 15,000.",
            "explanation_ar": "3,000 × 5 = 15,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "600 × 5 = 3,000.",
            "explanation_ar": "600 × 5 = 3,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "15,000 + 3,000 = 18,000 phone cases.",
            "explanation_ar": "15,000 + 3,000 = 18,000 phone cases."
          }
        ],
        "hint_en": "Split 3,600 into thousands and hundreds, multiply each by 5.",
        "hint_ar": "قسّم 3,600 إلى آلاف ومئات، واضرب كلاً منهما في 5.",
        "result_en": "The answer is 18000",
        "result_ar": "الجواب هو 18000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 5 equal boxes, each representing one day's production of 3,600 cases.",
            "explanation_ar": "Draw 5 equal boxes, each representing one day's production of 3,600 cases."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Stack the 5 boxes to form a tower of 5 × 3,600.",
            "explanation_ar": "Stack the 5 boxes to form a tower of 5 × 3,600."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Group: 5 groups of 3,000 = 15,000 and 5 groups of 600 = 3,000.",
            "explanation_ar": "Group: 5 groups of 3,000 = 15,000 and 5 groups of 600 = 3,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total tower height: 15,000 + 3,000 = 18,000 cases.",
            "explanation_ar": "Total tower height: 15,000 + 3,000 = 18,000 cases."
          }
        ],
        "hint_en": "Picture 5 equal stacks of 3,600 and count the total.",
        "hint_ar": "تخيّل 5 أكوام متساوية كل منها 3,600 وعدّ المجموع.",
        "result_en": "The answer is 18000",
        "result_ar": "الجواب هو 18000"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-009",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A bookshop in Mexico City orders 840 books and sells 595 of them. How many books remain unsold?",
    "question_ar": "تطلب مكتبة في مكسيكو سيتي 840 كتاباً وتبيع 595 منها. كم عدد الكتب التي لم تُبَع ؟",
    "answer": 245,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract: 840 − 595.",
            "explanation_ar": "Subtract: 840 − 595."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round 595 up to 600: 840 − 600 = 240.",
            "explanation_ar": "Round 595 up to 600: 840 − 600 = 240."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add back the 5 that was over-subtracted: 240 + 5 = 245.",
            "explanation_ar": "Add back the 5 that was over-subtracted: 240 + 5 = 245."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "245 books remain unsold.",
            "explanation_ar": "245 books remain unsold."
          }
        ],
        "hint_en": "Round 595 to 600, subtract, then compensate by adding 5.",
        "hint_ar": "قرّب 595 إلى 600، اطرح، ثم عوّض بإضافة 5.",
        "result_en": "The answer is 245",
        "result_ar": "الجواب هو 245"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 595 into 500 + 90 + 5.",
            "explanation_ar": "Break 595 into 500 + 90 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "840 − 500 = 340.",
            "explanation_ar": "840 − 500 = 340."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "340 − 90 = 250.",
            "explanation_ar": "340 − 90 = 250."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "250 − 5 = 245 books.",
            "explanation_ar": "250 − 5 = 245 books."
          }
        ],
        "hint_en": "Subtract 500, then 90, then 5 from 840 in stages.",
        "hint_ar": "اطرح 500 ثم 90 ثم 5 من 840 على مراحل.",
        "result_en": "The answer is 245",
        "result_ar": "الجواب هو 245"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 840 books.",
            "explanation_ar": "Draw a bar of 840 books."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 595 books as the ones sold.",
            "explanation_ar": "Shade 595 books as the ones sold."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The unshaded portion represents unsold books.",
            "explanation_ar": "The unshaded portion represents unsold books."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Measure the unshaded part: 840 − 595 = 245 books.",
            "explanation_ar": "Measure the unshaded part: 840 − 595 = 245 books."
          }
        ],
        "hint_en": "Use a bar model: shade 595 sold books and count the remainder.",
        "hint_ar": "استخدم نموذج الشريط: ظلّل 595 كتاباً مباعاً وعدّ الباقي.",
        "result_en": "The answer is 245",
        "result_ar": "الجواب هو 245"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-010",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A swimming pool in Australia holds 4,500 litres of water. After some water evaporates, it holds 4,050 litres. How many litres evaporated?",
    "question_ar": "تتسع حمامة سباحة في أستراليا لـ 4,500 لتر من الماء. بعد تبخّر بعض الماء أصبحت تحتوي على 4,050 لتراً. كم لتراً تبخّر ؟",
    "answer": 450,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract: 4,500 − 4,050.",
            "explanation_ar": "Subtract: 4,500 − 4,050."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "4,500 − 4,000 = 500.",
            "explanation_ar": "4,500 − 4,000 = 500."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "500 − 50 = 450.",
            "explanation_ar": "500 − 50 = 450."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "450 litres evaporated.",
            "explanation_ar": "450 litres evaporated."
          }
        ],
        "hint_en": "Subtract the thousands, then adjust for the remaining 50.",
        "hint_ar": "اطرح الآلاف أولاً ثم اضبط لـ 50 المتبقية.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 4,050 into 4,000 + 50.",
            "explanation_ar": "Break 4,050 into 4,000 + 50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4,500 − 4,000 = 500.",
            "explanation_ar": "4,500 − 4,000 = 500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "500 − 50 = 450.",
            "explanation_ar": "500 − 50 = 450."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "450 litres of water evaporated.",
            "explanation_ar": "450 litres of water evaporated."
          }
        ],
        "hint_en": "Split 4,050 into 4,000 and 50, subtract each step from 4,500.",
        "hint_ar": "قسّم 4,050 إلى 4,000 و 50، اطرح كل خطوة من 4,500.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a measuring cylinder filled to the 4,500-litre mark.",
            "explanation_ar": "Draw a measuring cylinder filled to the 4,500-litre mark."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Mark the new level at 4,050 litres.",
            "explanation_ar": "Mark the new level at 4,050 litres."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The gap between 4,050 and 4,500 is the evaporated water.",
            "explanation_ar": "The gap between 4,050 and 4,500 is the evaporated water."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Measure the gap: 4,500 − 4,050 = 450 litres.",
            "explanation_ar": "Measure the gap: 4,500 − 4,050 = 450 litres."
          }
        ],
        "hint_en": "Picture a water level dropping from 4,500 to 4,050 and measure the drop.",
        "hint_ar": "تخيّل مستوى الماء ينخفض من 4,500 إلى 4,050 وقِس مقدار الانخفاض.",
        "result_en": "The answer is 450",
        "result_ar": "الجواب هو 450"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-011",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A farmer in Nigeria harvests 720 oranges and packs them equally into 9 crates. How many oranges are in each crate?",
    "question_ar": "يحصد مزارع في نيجيريا 720 برتقالة ويعبّئها بالتساوي في 9 صناديق. كم برتقالة في كل صندوق ؟",
    "answer": 80,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide 720 ÷ 9.",
            "explanation_ar": "Divide 720 ÷ 9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Think: 9 × 8 = 72, so 9 × 80 = 720.",
            "explanation_ar": "Think: 9 × 8 = 72, so 9 × 80 = 720."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Therefore 720 ÷ 9 = 80.",
            "explanation_ar": "Therefore 720 ÷ 9 = 80."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Each crate holds 80 oranges.",
            "explanation_ar": "Each crate holds 80 oranges."
          }
        ],
        "hint_en": "Recall the 9-times table: 9 × 8 = 72, so 9 × 80 = 720.",
        "hint_ar": "تذكّر جدول الضرب في 9: 9 × 8 = 72، إذن 9 × 80 = 720.",
        "result_en": "The answer is 80",
        "result_ar": "الجواب هو 80"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 720 into 630 + 90.",
            "explanation_ar": "Break 720 into 630 + 90."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "630 ÷ 9 = 70.",
            "explanation_ar": "630 ÷ 9 = 70."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "90 ÷ 9 = 10.",
            "explanation_ar": "90 ÷ 9 = 10."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "70 + 10 = 80 oranges per crate.",
            "explanation_ar": "70 + 10 = 80 oranges per crate."
          }
        ],
        "hint_en": "Split 720 into parts divisible by 9, divide each, then add.",
        "hint_ar": "قسّم 720 إلى أجزاء قابلة للقسمة على 9، ثم اجمع النتائج.",
        "result_en": "The answer is 80",
        "result_ar": "الجواب هو 80"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 720 dots arranged into 9 equal columns.",
            "explanation_ar": "Draw 720 dots arranged into 9 equal columns."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Count the number of dots in one column.",
            "explanation_ar": "Count the number of dots in one column."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "720 ÷ 9: each column has 80 dots.",
            "explanation_ar": "720 ÷ 9: each column has 80 dots."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Each crate contains 80 oranges.",
            "explanation_ar": "Each crate contains 80 oranges."
          }
        ],
        "hint_en": "Arrange 720 into 9 equal groups and count one group.",
        "hint_ar": "رتّب 720 في 9 مجموعات متساوية وعدّ عناصر مجموعة واحدة.",
        "result_en": "The answer is 80",
        "result_ar": "الجواب هو 80"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-012",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A city in China had a population of 2,450,000 last year. This year the population grew by 50,000. What is the population this year?",
    "question_ar": "بلغ عدد سكان مدينة في الصين 2,450,000 نسمة العام الماضي. نما عدد السكان هذا العام بمقدار 50,000 نسمة. كم عدد السكان هذا العام ؟",
    "answer": 2500000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 2,450,000 + 50,000.",
            "explanation_ar": "Add 2,450,000 + 50,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Focus on the thousands: 450 + 50 = 500.",
            "explanation_ar": "Focus on the thousands: 450 + 50 = 500."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Replace the thousands part: 2,000,000 + 500,000 = 2,500,000.",
            "explanation_ar": "Replace the thousands part: 2,000,000 + 500,000 = 2,500,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The population this year is 2,500,000.",
            "explanation_ar": "The population this year is 2,500,000."
          }
        ],
        "hint_en": "Add the fifty-thousands: 450,000 + 50,000 = 500,000; then place it back.",
        "hint_ar": "أضف آلاف الخمسينيات: 450,000 + 50,000 = 500,000؛ ثم ضعها في مكانها.",
        "result_en": "The answer is 2500000",
        "result_ar": "الجواب هو 2500000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break the addition: 2,450,000 + 50,000.",
            "explanation_ar": "Break the addition: 2,450,000 + 50,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2,450,000 = 2,000,000 + 450,000.",
            "explanation_ar": "2,450,000 = 2,000,000 + 450,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "450,000 + 50,000 = 500,000.",
            "explanation_ar": "450,000 + 50,000 = 500,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "2,000,000 + 500,000 = 2,500,000.",
            "explanation_ar": "2,000,000 + 500,000 = 2,500,000."
          }
        ],
        "hint_en": "Isolate the 450,000 component and add 50,000 to it.",
        "hint_ar": "عزّل مكوّن الـ 450,000 وأضف إليه 50,000.",
        "result_en": "The answer is 2500000",
        "result_ar": "الجواب هو 2500000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a population bar ending at the 2,450,000 mark.",
            "explanation_ar": "Draw a population bar ending at the 2,450,000 mark."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend the bar by 50,000 units to the right.",
            "explanation_ar": "Extend the bar by 50,000 units to the right."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The bar now ends at 2,500,000.",
            "explanation_ar": "The bar now ends at 2,500,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "This year's population is 2,500,000.",
            "explanation_ar": "This year's population is 2,500,000."
          }
        ],
        "hint_en": "Picture the population bar growing by 50,000 to reach a round number.",
        "hint_ar": "تخيّل شريط السكان يمتد بمقدار 50,000 ليصل إلى عدد مستدير.",
        "result_en": "The answer is 2500000",
        "result_ar": "الجواب هو 2500000"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-013",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A cyclist in Kenya rides 18 km each day. After how many days will she have ridden a total of 126 km?",
    "question_ar": "تقطع راكبة دراجة في كينيا 18 كم كل يوم. بعد كم يوماً ستكون قد قطعت 126 كم إجمالاً ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Set up the equation: 18 × d = 126.",
            "explanation_ar": "Set up the equation: 18 × d = 126."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 18: d = 126 ÷ 18.",
            "explanation_ar": "Divide both sides by 18: d = 126 ÷ 18."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "18 × 7 = 126, so d = 7.",
            "explanation_ar": "18 × 7 = 126, so d = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "She will have ridden 126 km after 7 days.",
            "explanation_ar": "She will have ridden 126 km after 7 days."
          }
        ],
        "hint_en": "Divide 126 by 18 to find the number of days.",
        "hint_ar": "اقسم 126 على 18 لإيجاد عدد الأيام.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 126 into 90 + 36.",
            "explanation_ar": "Break 126 into 90 + 36."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "90 ÷ 18 = 5 days.",
            "explanation_ar": "90 ÷ 18 = 5 days."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "36 ÷ 18 = 2 days.",
            "explanation_ar": "36 ÷ 18 = 2 days."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "5 + 2 = 7 days total.",
            "explanation_ar": "5 + 2 = 7 days total."
          }
        ],
        "hint_en": "Split 126 into parts divisible by 18, then add the quotients.",
        "hint_ar": "قسّم 126 إلى أجزاء قابلة للقسمة على 18، ثم اجمع نتائج القسمة.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a number line starting at 0.",
            "explanation_ar": "Draw a number line starting at 0."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Make equal jumps of 18: 18, 36, 54, 72, 90, 108, 126.",
            "explanation_ar": "Make equal jumps of 18: 18, 36, 54, 72, 90, 108, 126."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the number of jumps to reach 126.",
            "explanation_ar": "Count the number of jumps to reach 126."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "There are 7 jumps, so the answer is 7 days.",
            "explanation_ar": "There are 7 jumps, so the answer is 7 days."
          }
        ],
        "hint_en": "Hop 18 at a time from 0 and count how many hops reach 126.",
        "hint_ar": "اقفز 18 في كل مرة من 0 وعدّ عدد القفزات للوصول إلى 126.",
        "result_en": "The answer is 7",
        "result_ar": "الجواب هو 7"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-014",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A clothing store in Turkey has a jacket originally priced at 200 lira. It is on sale at 10% off. What is the sale price?",
    "question_ar": "يبيع متجر ملابس في تركيا سترة سعرها الأصلي 200 ليرة. هي معروضة بخصم 10%. ما سعر البيع ؟",
    "answer": 180,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find 10% of 200: move the decimal one place left: 10% of 200 = 20.",
            "explanation_ar": "Find 10% of 200: move the decimal one place left: 10% of 200 = 20."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The discount is 20 lira.",
            "explanation_ar": "The discount is 20 lira."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the discount: 200 − 20 = 180.",
            "explanation_ar": "Subtract the discount: 200 − 20 = 180."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The sale price is 180 lira.",
            "explanation_ar": "The sale price is 180 lira."
          }
        ],
        "hint_en": "10% of any number = divide by 10; then subtract from original.",
        "hint_ar": "10% من أي عدد = اقسمه على 10؛ ثم اطرح النتيجة من الأصل.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "10% off means paying 90% of the price.",
            "explanation_ar": "10% off means paying 90% of the price."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "90% = 100% − 10%.",
            "explanation_ar": "90% = 100% − 10%."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "90% of 200 = 200 × 0.9 = 180.",
            "explanation_ar": "90% of 200 = 200 × 0.9 = 180."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The sale price is 180 lira.",
            "explanation_ar": "The sale price is 180 lira."
          }
        ],
        "hint_en": "Paying 90% of 200 is the same as subtracting 10% from it.",
        "hint_ar": "دفع 90% من 200 يعادل طرح 10% منها.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar divided into 10 equal sections; each section = 200 ÷ 10 = 20 lira.",
            "explanation_ar": "Draw a bar divided into 10 equal sections; each section = 200 ÷ 10 = 20 lira."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Cross out 1 section (10% = 20 lira) to show the discount.",
            "explanation_ar": "Cross out 1 section (10% = 20 lira) to show the discount."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the remaining 9 sections: 9 × 20 = 180 lira.",
            "explanation_ar": "Count the remaining 9 sections: 9 × 20 = 180 lira."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The sale price is 180 lira.",
            "explanation_ar": "The sale price is 180 lira."
          }
        ],
        "hint_en": "Divide the price bar into 10 parts, remove 1 part, count the rest.",
        "hint_ar": "قسّم شريط السعر إلى 10 أجزاء، أزل جزءاً واحداً، وعدّ الباقي.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-015",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A warehouse in the United Arab Emirates stores 5,400 boxes. Workers unload 1,350 boxes. How many boxes remain in the warehouse?",
    "question_ar": "يخزّن مستودع في الإمارات العربية المتحدة 5,400 صندوق. يفرغ العمال 1,350 صندوقاً. كم صندوقاً يبقى في المستودع ؟",
    "answer": 4050,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract: 5,400 − 1,350.",
            "explanation_ar": "Subtract: 5,400 − 1,350."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "5,400 − 1,000 = 4,400.",
            "explanation_ar": "5,400 − 1,000 = 4,400."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "4,400 − 350 = 4,050.",
            "explanation_ar": "4,400 − 350 = 4,050."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "4,050 boxes remain in the warehouse.",
            "explanation_ar": "4,050 boxes remain in the warehouse."
          }
        ],
        "hint_en": "Subtract 1,000 first, then subtract 350 from the result.",
        "hint_ar": "اطرح 1,000 أولاً، ثم اطرح 350 من الناتج.",
        "result_en": "The answer is 4050",
        "result_ar": "الجواب هو 4050"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 1,350 into 1,000 + 300 + 50.",
            "explanation_ar": "Break 1,350 into 1,000 + 300 + 50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5,400 − 1,000 = 4,400.",
            "explanation_ar": "5,400 − 1,000 = 4,400."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4,400 − 300 = 4,100.",
            "explanation_ar": "4,400 − 300 = 4,100."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "4,100 − 50 = 4,050 boxes.",
            "explanation_ar": "4,100 − 50 = 4,050 boxes."
          }
        ],
        "hint_en": "Decompose 1,350 and subtract each part from 5,400 step by step.",
        "hint_ar": "قسّم 1,350 واطرح كل جزء من 5,400 خطوةً بخطوة.",
        "result_en": "The answer is 4050",
        "result_ar": "الجواب هو 4050"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar representing 5,400 boxes.",
            "explanation_ar": "Draw a bar representing 5,400 boxes."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 1,350 boxes at one end to show the unloaded portion.",
            "explanation_ar": "Shade 1,350 boxes at one end to show the unloaded portion."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The unshaded portion is the remaining stock.",
            "explanation_ar": "The unshaded portion is the remaining stock."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "5,400 − 1,350 = 4,050 boxes remain.",
            "explanation_ar": "5,400 − 1,350 = 4,050 boxes remain."
          }
        ],
        "hint_en": "Use a bar model: shade 1,350 and count what is left.",
        "hint_ar": "استخدم نموذج الشريط: ظلّل 1,350 وعدّ ما تبقّى.",
        "result_en": "The answer is 4050",
        "result_ar": "الجواب هو 4050"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-016",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A supermarket in Argentina sells bags of rice. Each bag weighs 2 kg. A customer buys bags for a total weight of 30 kg. How many bags does the customer buy?",
    "question_ar": "يبيع سوبرماركت في الأرجنتين أكياس أرز. يزن كل كيس 2 كغ. يشتري زبون أكياساً بوزن إجمالي 30 كغ. كم كيساً اشترى الزبون ؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Set up the division: 30 ÷ 2.",
            "explanation_ar": "Set up the division: 30 ÷ 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "30 ÷ 2 = 15 (half of 30).",
            "explanation_ar": "30 ÷ 2 = 15 (half of 30)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The customer buys 15 bags.",
            "explanation_ar": "The customer buys 15 bags."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 15 × 2 = 30 kg. Correct.",
            "explanation_ar": "Verify: 15 × 2 = 30 kg. Correct."
          }
        ],
        "hint_en": "Divide the total weight by the weight of one bag.",
        "hint_ar": "اقسم الوزن الإجمالي على وزن الكيس الواحد.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 30 into 20 + 10.",
            "explanation_ar": "Break 30 into 20 + 10."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20 ÷ 2 = 10 bags.",
            "explanation_ar": "20 ÷ 2 = 10 bags."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "10 ÷ 2 = 5 bags.",
            "explanation_ar": "10 ÷ 2 = 5 bags."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "10 + 5 = 15 bags total.",
            "explanation_ar": "10 + 5 = 15 bags total."
          }
        ],
        "hint_en": "Split 30 into 20 and 10, divide each by 2, then add.",
        "hint_ar": "قسّم 30 إلى 20 و 10، قسّم كلاً منهما على 2، ثم اجمع.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 30 kg represented as a long bar.",
            "explanation_ar": "Draw 30 kg represented as a long bar."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide the bar into segments of 2 kg each.",
            "explanation_ar": "Divide the bar into segments of 2 kg each."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the number of segments.",
            "explanation_ar": "Count the number of segments."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "There are 15 segments, so the customer buys 15 bags.",
            "explanation_ar": "There are 15 segments, so the customer buys 15 bags."
          }
        ],
        "hint_en": "Segment a 30-unit bar into pieces of 2 and count the pieces.",
        "hint_ar": "قسّم شريطاً من 30 وحدة إلى قطع من 2 وعدّ القطع.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-017",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A school in Morocco collected 2,800 dirhams for charity. Another school collected 1,650 dirhams. How much more money did the first school collect?",
    "question_ar": "جمعت مدرسة في المغرب 2,800 درهم لصالح الجمعيات الخيرية. وجمعت مدرسة أخرى 1,650 درهماً. بكم درهم تفوّقت المدرسة الأولى ؟",
    "answer": 1150,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtract: 2,800 − 1,650.",
            "explanation_ar": "Subtract: 2,800 − 1,650."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "2,800 − 1,600 = 1,200.",
            "explanation_ar": "2,800 − 1,600 = 1,200."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "1,200 − 50 = 1,150.",
            "explanation_ar": "1,200 − 50 = 1,150."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The first school collected 1,150 dirhams more.",
            "explanation_ar": "The first school collected 1,150 dirhams more."
          }
        ],
        "hint_en": "Subtract 1,600 first, then subtract 50 from the result.",
        "hint_ar": "اطرح 1,600 أولاً، ثم اطرح 50 من الناتج.",
        "result_en": "The answer is 1150",
        "result_ar": "الجواب هو 1150"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 1,650 into 1,000 + 600 + 50.",
            "explanation_ar": "Break 1,650 into 1,000 + 600 + 50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2,800 − 1,000 = 1,800.",
            "explanation_ar": "2,800 − 1,000 = 1,800."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "1,800 − 600 = 1,200.",
            "explanation_ar": "1,800 − 600 = 1,200."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "1,200 − 50 = 1,150 dirhams.",
            "explanation_ar": "1,200 − 50 = 1,150 dirhams."
          }
        ],
        "hint_en": "Decompose 1,650 and subtract each part in stages.",
        "hint_ar": "قسّم 1,650 واطرح كل جزء على مراحل.",
        "result_en": "The answer is 1150",
        "result_ar": "الجواب هو 1150"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw two donation bars: one at 2,800 and one at 1,650.",
            "explanation_ar": "Draw two donation bars: one at 2,800 and one at 1,650."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Align them at the left end.",
            "explanation_ar": "Align them at the left end."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The gap between the tops of the two bars is the difference.",
            "explanation_ar": "The gap between the tops of the two bars is the difference."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Measure: 2,800 − 1,650 = 1,150 dirhams.",
            "explanation_ar": "Measure: 2,800 − 1,650 = 1,150 dirhams."
          }
        ],
        "hint_en": "Line up both bars and measure the gap between them.",
        "hint_ar": "وازن بين الشريطين وقِس الفجوة بينهما.",
        "result_en": "The answer is 1150",
        "result_ar": "الجواب هو 1150"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-018",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A zoo in Spain has 25% more animals than a zoo in Portugal. The zoo in Portugal has 160 animals. How many animals does the zoo in Spain have?",
    "question_ar": "يضم حديقة حيوان في إسبانيا 25% حيوانات أكثر من حديقة حيوان في البرتغال. يضم حديقة البرتغال 160 حيواناً. كم حيواناً في حديقة إسبانيا ؟",
    "answer": 200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "25% of 160: 25% = 1/4, so 160 ÷ 4 = 40.",
            "explanation_ar": "25% of 160: 25% = 1/4, so 160 ÷ 4 = 40."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The extra animals = 40.",
            "explanation_ar": "The extra animals = 40."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add to Portugal's total: 160 + 40 = 200.",
            "explanation_ar": "Add to Portugal's total: 160 + 40 = 200."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Spain's zoo has 200 animals.",
            "explanation_ar": "Spain's zoo has 200 animals."
          }
        ],
        "hint_en": "Find 1/4 of 160 (= 40), then add it to 160.",
        "hint_ar": "أوجد 1/4 من 160 (= 40)، ثم أضفه إلى 160.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 25% into 20% + 5%.",
            "explanation_ar": "Break 25% into 20% + 5%."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20% of 160 = 32; 5% of 160 = 8.",
            "explanation_ar": "20% of 160 = 32; 5% of 160 = 8."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total extra: 32 + 8 = 40 animals.",
            "explanation_ar": "Total extra: 32 + 8 = 40 animals."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "160 + 40 = 200 animals in Spain's zoo.",
            "explanation_ar": "160 + 40 = 200 animals in Spain's zoo."
          }
        ],
        "hint_en": "Split 25% into 20% and 5%, calculate each, then add to 160.",
        "hint_ar": "قسّم 25% إلى 20% و 5%، احسب كلاً منهما، ثم أضف إلى 160.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 160 units for Portugal's zoo.",
            "explanation_ar": "Draw a bar of 160 units for Portugal's zoo."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide it into 4 equal sections of 40 each (since 25% = 1/4).",
            "explanation_ar": "Divide it into 4 equal sections of 40 each (since 25% = 1/4)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add one extra section of 40 to the right of the bar.",
            "explanation_ar": "Add one extra section of 40 to the right of the bar."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The new bar spans 5 sections × 40 = 200 animals.",
            "explanation_ar": "The new bar spans 5 sections × 40 = 200 animals."
          }
        ],
        "hint_en": "Add one extra quarter of 160 to the original bar.",
        "hint_ar": "أضف ربعاً إضافياً من 160 إلى الشريط الأصلي.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-019",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A juice stall in Thailand sold 96 cups of mango juice over 8 days, selling the same number each day. How many cups were sold per day?",
    "question_ar": "باعت عربة عصائر في تايلاند 96 كوباً من عصير المانغو على مدار 8 أيام، بنفس العدد كل يوم. كم كوباً بيع في اليوم الواحد ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Divide 96 ÷ 8.",
            "explanation_ar": "Divide 96 ÷ 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "8 × 12 = 96 (from times tables).",
            "explanation_ar": "8 × 12 = 96 (from times tables)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Therefore 96 ÷ 8 = 12.",
            "explanation_ar": "Therefore 96 ÷ 8 = 12."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "12 cups were sold each day.",
            "explanation_ar": "12 cups were sold each day."
          }
        ],
        "hint_en": "Use the 8-times table: 8 × 12 = 96.",
        "hint_ar": "استخدم جدول الضرب في 8: 8 × 12 = 96.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 96 into 80 + 16.",
            "explanation_ar": "Break 96 into 80 + 16."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "80 ÷ 8 = 10.",
            "explanation_ar": "80 ÷ 8 = 10."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "16 ÷ 8 = 2.",
            "explanation_ar": "16 ÷ 8 = 2."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "10 + 2 = 12 cups per day.",
            "explanation_ar": "10 + 2 = 12 cups per day."
          }
        ],
        "hint_en": "Split 96 into multiples of 8, divide each, then add.",
        "hint_ar": "قسّم 96 إلى مضاعفات 8، قسّم كلاً منها، ثم اجمع.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 96 cup icons arranged in 8 equal rows.",
            "explanation_ar": "Draw 96 cup icons arranged in 8 equal rows."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Count the cups in one row.",
            "explanation_ar": "Count the cups in one row."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each row contains 96 ÷ 8 = 12 cups.",
            "explanation_ar": "Each row contains 96 ÷ 8 = 12 cups."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "12 cups were sold each day.",
            "explanation_ar": "12 cups were sold each day."
          }
        ],
        "hint_en": "Arrange 96 cups into 8 equal rows and count one row.",
        "hint_ar": "رتّب 96 كوباً في 8 صفوف متساوية وعدّ صفاً واحداً.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-easy-020",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A library in Sweden has 3,200 books. After a donation, the total becomes 3,680. How many books were donated?",
    "question_ar": "تمتلك مكتبة في السويد 3,200 كتاب. بعد تبرّع أصبح المجموع 3,680 كتاباً. كم كتاباً تمّ التبرّع به ؟",
    "answer": 480,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find the difference: 3,680 − 3,200.",
            "explanation_ar": "Find the difference: 3,680 − 3,200."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "3,680 − 3,200: subtract the thousands 3,000 − 3,000 = 0.",
            "explanation_ar": "3,680 − 3,200: subtract the thousands 3,000 − 3,000 = 0."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the hundreds and tens: 680 − 200 = 480.",
            "explanation_ar": "Subtract the hundreds and tens: 680 − 200 = 480."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "480 books were donated.",
            "explanation_ar": "480 books were donated."
          }
        ],
        "hint_en": "Subtract 3,200 from 3,680 to find the donated amount.",
        "hint_ar": "اطرح 3,200 من 3,680 لإيجاد عدد الكتب المتبرَّع بها.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 3,200 into 3,000 + 200.",
            "explanation_ar": "Break 3,200 into 3,000 + 200."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3,680 − 3,000 = 680.",
            "explanation_ar": "3,680 − 3,000 = 680."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "680 − 200 = 480.",
            "explanation_ar": "680 − 200 = 480."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "480 books were donated to the library.",
            "explanation_ar": "480 books were donated to the library."
          }
        ],
        "hint_en": "Subtract the thousands component, then subtract the hundreds.",
        "hint_ar": "اطرح مكوّن الآلاف أولاً، ثم اطرح المئات.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar at 3,200 representing the original collection.",
            "explanation_ar": "Draw a bar at 3,200 representing the original collection."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend it to 3,680 to show the new total after donation.",
            "explanation_ar": "Extend it to 3,680 to show the new total after donation."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The extension represents the donated books.",
            "explanation_ar": "The extension represents the donated books."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Measure the extension: 3,680 − 3,200 = 480 books.",
            "explanation_ar": "Measure the extension: 3,680 − 3,200 = 480 books."
          }
        ],
        "hint_en": "Picture the library bar growing from 3,200 to 3,680 and measure the growth.",
        "hint_ar": "تخيّل شريط المكتبة يمتد من 3,200 إلى 3,680 وقِس مقدار النمو.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-001",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A store in Morocco marks up a jacket's price by 35%. The new price is 1,080 dirhams. What was the original price in dirhams?",
    "question_ar": "متجر في المغرب يرفع سعر جاكيت بنسبة 35%. السعر الجديد هو 1,080 درهماً. ما كان السعر الأصلي بالدرهم؟",
    "answer": 800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Recognize that 1,080 dirhams represents 135% of the original price (100% + 35% markup).",
            "explanation_ar": "Recognize that 1,080 dirhams represents 135% of the original price (100% + 35% markup)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Set up the equation: original × 1.35 = 1,080.",
            "explanation_ar": "Set up the equation: original × 1.35 = 1,080."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 1.35: 1,080 ÷ 1.35 = 800.",
            "explanation_ar": "Divide both sides by 1.35: 1,080 ÷ 1.35 = 800."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 800 × 1.35 = 1,080 ✓. The original price is 800 dirhams.",
            "explanation_ar": "Verify: 800 × 1.35 = 1,080 ✓. The original price is 800 dirhams."
          }
        ],
        "hint_en": "The marked-up price equals 135% of the original. Divide 1,080 by 1.35.",
        "hint_ar": "السعر المرفوع يساوي 135% من الأصل. اقسم 1,080 على 1.35.",
        "result_en": "The answer is 800",
        "result_ar": "الجواب هو 800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 135% into 100% + 35%. If 135% = 1,080, find 1% first.",
            "explanation_ar": "Break 135% into 100% + 35%. If 135% = 1,080, find 1% first."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1% of original = 1,080 ÷ 135 = 8 dirhams.",
            "explanation_ar": "1% of original = 1,080 ÷ 135 = 8 dirhams."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100% of original = 8 × 100 = 800 dirhams.",
            "explanation_ar": "100% of original = 8 × 100 = 800 dirhams."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 35% of 800 = 280. Then 800 + 280 = 1,080 ✓.",
            "explanation_ar": "Check: 35% of 800 = 280. Then 800 + 280 = 1,080 ✓."
          }
        ],
        "hint_en": "Find the value of 1% by dividing 1,080 by 135, then multiply by 100.",
        "hint_ar": "أوجد قيمة 1% بقسمة 1,080 على 135 ثم اضرب في 100.",
        "result_en": "The answer is 800",
        "result_ar": "الجواب هو 800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar representing the original price as 100 equal parts.",
            "explanation_ar": "Draw a bar representing the original price as 100 equal parts."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 35 more parts on the right to show the 35% markup — the full bar is now 135 parts.",
            "explanation_ar": "Add 35 more parts on the right to show the 35% markup — the full bar is now 135 parts."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The full bar (135 parts) equals 1,080 dirhams, so each part = 1,080 ÷ 135 = 8 dirhams.",
            "explanation_ar": "The full bar (135 parts) equals 1,080 dirhams, so each part = 1,080 ÷ 135 = 8 dirhams."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The original 100 parts = 100 × 8 = 800 dirhams.",
            "explanation_ar": "The original 100 parts = 100 × 8 = 800 dirhams."
          }
        ],
        "hint_en": "Visualize the total 135-part bar equaling 1,080 dirhams; each part is 8 dirhams.",
        "hint_ar": "تخيل شريطاً من 135 جزءاً يساوي 1,080 درهماً؛ كل جزء يساوي 8 دراهم.",
        "result_en": "The answer is 800",
        "result_ar": "الجواب هو 800"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-002",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A cyclist in the Netherlands rides at 15 km/h. He rides for 3 hours. How many kilometres does he travel?",
    "question_ar": "دراج في هولندا يسير بسرعة 15 كم/ساعة. ركب لمدة 3 ساعات. كم كيلومتراً قطع؟",
    "answer": 45,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use the formula: Distance = Speed × Time.",
            "explanation_ar": "Use the formula: Distance = Speed × Time."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Substitute the values: Distance = 15 km/h × 3 h.",
            "explanation_ar": "Substitute the values: Distance = 15 km/h × 3 h."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply: 15 × 3 = 45.",
            "explanation_ar": "Multiply: 15 × 3 = 45."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The cyclist travels 45 km.",
            "explanation_ar": "The cyclist travels 45 km."
          }
        ],
        "hint_en": "Multiply speed 15 km/h by time 3 hours to get distance.",
        "hint_ar": "اضرب السرعة 15 كم/ساعة في الزمن 3 ساعات لتحصل على المسافة.",
        "result_en": "The answer is 45",
        "result_ar": "الجواب هو 45"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "In 1 hour the cyclist covers 15 km.",
            "explanation_ar": "In 1 hour the cyclist covers 15 km."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "In 2 hours he covers 15 + 15 = 30 km.",
            "explanation_ar": "In 2 hours he covers 15 + 15 = 30 km."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "In 3 hours he covers 30 + 15 = 45 km.",
            "explanation_ar": "In 3 hours he covers 30 + 15 = 45 km."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total distance = 45 km.",
            "explanation_ar": "Total distance = 45 km."
          }
        ],
        "hint_en": "Add 15 km for each of the 3 hours: 15 + 15 + 15.",
        "hint_ar": "أضف 15 كم لكل ساعة من الساعات الثلاث: 15 + 15 + 15.",
        "result_en": "The answer is 45",
        "result_ar": "الجواب هو 45"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a number line divided into 3 equal segments, each representing 1 hour.",
            "explanation_ar": "Draw a number line divided into 3 equal segments, each representing 1 hour."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Label each segment with 15 km (the distance per hour).",
            "explanation_ar": "Label each segment with 15 km (the distance per hour)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add up the three segments: 15 + 15 + 15 = 45 km.",
            "explanation_ar": "Add up the three segments: 15 + 15 + 15 = 45 km."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The endpoint of the third segment marks 45 km total.",
            "explanation_ar": "The endpoint of the third segment marks 45 km total."
          }
        ],
        "hint_en": "Picture three equal jumps of 15 km on a number line.",
        "hint_ar": "تخيل ثلاث قفزات متساوية كل منها 15 كم على خط الأعداد.",
        "result_en": "The answer is 45",
        "result_ar": "الجواب هو 45"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-003",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "Two factories in Germany together produce 1,260 parts per day. One factory produces 3 times as many parts as the other. How many parts does the smaller factory produce?",
    "question_ar": "مصنعان في ألمانيا ينتجان معاً 1,260 قطعة يومياً. أحد المصنعين ينتج 3 أضعاف الآخر. كم قطعة ينتج المصنع الأصغر؟",
    "answer": 315,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Let the smaller factory produce x parts. The larger produces 3x parts.",
            "explanation_ar": "Let the smaller factory produce x parts. The larger produces 3x parts."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Set up the equation: x + 3x = 1,260.",
            "explanation_ar": "Set up the equation: x + 3x = 1,260."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine: 4x = 1,260, so x = 1,260 ÷ 4 = 315.",
            "explanation_ar": "Combine: 4x = 1,260, so x = 1,260 ÷ 4 = 315."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 315 + 945 = 1,260 ✓. The smaller factory produces 315 parts.",
            "explanation_ar": "Verify: 315 + 945 = 1,260 ✓. The smaller factory produces 315 parts."
          }
        ],
        "hint_en": "Let the smaller factory = x. Then 4x = 1,260, so x = 315.",
        "hint_ar": "اجعل المصنع الأصغر = x. إذن 4x = 1,260، فـ x = 315.",
        "result_en": "The answer is 315",
        "result_ar": "الجواب هو 315"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Think of 1,260 parts shared in the ratio 1 : 3 (smaller : larger).",
            "explanation_ar": "Think of 1,260 parts shared in the ratio 1 : 3 (smaller : larger)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Total ratio parts = 1 + 3 = 4.",
            "explanation_ar": "Total ratio parts = 1 + 3 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Value of 1 ratio part = 1,260 ÷ 4 = 315.",
            "explanation_ar": "Value of 1 ratio part = 1,260 ÷ 4 = 315."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The smaller factory gets 1 ratio part = 315 parts.",
            "explanation_ar": "The smaller factory gets 1 ratio part = 315 parts."
          }
        ],
        "hint_en": "The ratio 1:3 means 4 total shares. Each share = 1,260 ÷ 4 = 315.",
        "hint_ar": "النسبة 1:3 تعني 4 أجزاء إجمالية. كل جزء = 1,260 ÷ 4 = 315.",
        "result_en": "The answer is 315",
        "result_ar": "الجواب هو 315"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 4 equal boxes in a row — 1 box for the smaller factory and 3 boxes for the larger.",
            "explanation_ar": "Draw 4 equal boxes in a row — 1 box for the smaller factory and 3 boxes for the larger."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "All 4 boxes together represent 1,260 parts.",
            "explanation_ar": "All 4 boxes together represent 1,260 parts."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box = 1,260 ÷ 4 = 315 parts.",
            "explanation_ar": "Each box = 1,260 ÷ 4 = 315 parts."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The smaller factory is 1 box = 315 parts.",
            "explanation_ar": "The smaller factory is 1 box = 315 parts."
          }
        ],
        "hint_en": "Four equal boxes fill 1,260. One box equals 315.",
        "hint_ar": "أربعة صناديق متساوية تملأ 1,260. صندوق واحد يساوي 315.",
        "result_en": "The answer is 315",
        "result_ar": "الجواب هو 315"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-004",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A shop in Japan sells a pair of headphones for 9,600 yen after a 20% discount. What was the original price in yen?",
    "question_ar": "متجر في اليابان يبيع سماعات بـ 9,600 ين بعد خصم 20%. ما كان السعر الأصلي بالين؟",
    "answer": 12000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "A 20% discount means the buyer pays 80% of the original price.",
            "explanation_ar": "A 20% discount means the buyer pays 80% of the original price."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Set up: original × 0.80 = 9,600.",
            "explanation_ar": "Set up: original × 0.80 = 9,600."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide: 9,600 ÷ 0.80 = 12,000.",
            "explanation_ar": "Divide: 9,600 ÷ 0.80 = 12,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 20% of 12,000 = 2,400. Then 12,000 − 2,400 = 9,600 ✓.",
            "explanation_ar": "Verify: 20% of 12,000 = 2,400. Then 12,000 − 2,400 = 9,600 ✓."
          }
        ],
        "hint_en": "9,600 yen is 80% of the original. Divide 9,600 by 0.80.",
        "hint_ar": "9,600 ين هو 80% من الأصل. اقسم 9,600 على 0.80.",
        "result_en": "The answer is 12000",
        "result_ar": "الجواب هو 12000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "80% of the original = 9,600. Find 1%: 9,600 ÷ 80 = 120 yen.",
            "explanation_ar": "80% of the original = 9,600. Find 1%: 9,600 ÷ 80 = 120 yen."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find 100%: 120 × 100 = 12,000 yen.",
            "explanation_ar": "Find 100%: 120 × 100 = 12,000 yen."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Check the discount: 20% of 12,000 = 2,400 yen.",
            "explanation_ar": "Check the discount: 20% of 12,000 = 2,400 yen."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Sale price: 12,000 − 2,400 = 9,600 ✓.",
            "explanation_ar": "Sale price: 12,000 − 2,400 = 9,600 ✓."
          }
        ],
        "hint_en": "Find 1% by dividing 9,600 by 80, then scale to 100%.",
        "hint_ar": "أوجد 1% بقسمة 9,600 على 80 ثم اضرب في 100.",
        "result_en": "The answer is 12000",
        "result_ar": "الجواب هو 12000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a full 100-part bar for the original price.",
            "explanation_ar": "Draw a full 100-part bar for the original price."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 20 parts red (the discount); the remaining 80 parts in green represent 9,600 yen.",
            "explanation_ar": "Shade 20 parts red (the discount); the remaining 80 parts in green represent 9,600 yen."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each of the 80 green parts = 9,600 ÷ 80 = 120 yen.",
            "explanation_ar": "Each of the 80 green parts = 9,600 ÷ 80 = 120 yen."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "All 100 parts = 100 × 120 = 12,000 yen.",
            "explanation_ar": "All 100 parts = 100 × 120 = 12,000 yen."
          }
        ],
        "hint_en": "80 green parts equal 9,600 yen; find all 100 parts.",
        "hint_ar": "80 جزءاً أخضر تساوي 9,600 ين؛ أوجد قيمة 100 جزء.",
        "result_en": "The answer is 12000",
        "result_ar": "الجواب هو 12000"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-005",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A water tank in Brazil holds 540 litres. It is currently 25% full. How many more litres are needed to fill it completely?",
    "question_ar": "خزان مياه في البرازيل سعته 540 لتراً. هو حالياً ممتلئ بنسبة 25%. كم لتراً إضافياً يلزم لملئه بالكامل؟",
    "answer": 405,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Current water = 25% of 540 = 0.25 × 540 = 135 litres.",
            "explanation_ar": "Current water = 25% of 540 = 0.25 × 540 = 135 litres."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Remaining capacity = 540 − 135 = 405 litres.",
            "explanation_ar": "Remaining capacity = 540 − 135 = 405 litres."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Alternatively: 75% of 540 must still be filled.",
            "explanation_ar": "Alternatively: 75% of 540 must still be filled."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "0.75 × 540 = 405 litres needed.",
            "explanation_ar": "0.75 × 540 = 405 litres needed."
          }
        ],
        "hint_en": "75% of the tank is empty. Find 75% of 540.",
        "hint_ar": "75% من الخزان فارغ. أوجد 75% من 540.",
        "result_en": "The answer is 405",
        "result_ar": "الجواب هو 405"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find 25% of 540: 10% of 540 = 54, so 25% = 54 + 54 + 27 = 135 litres.",
            "explanation_ar": "Find 25% of 540: 10% of 540 = 54, so 25% = 54 + 54 + 27 = 135 litres."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "The remaining empty portion is 100% − 25% = 75%.",
            "explanation_ar": "The remaining empty portion is 100% − 25% = 75%."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "75% = 3 × 25% = 3 × 135 = 405 litres.",
            "explanation_ar": "75% = 3 × 25% = 3 × 135 = 405 litres."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "So 405 more litres are needed.",
            "explanation_ar": "So 405 more litres are needed."
          }
        ],
        "hint_en": "25% of 540 = 135 litres already in. The rest is 3 × 135 = 405.",
        "hint_ar": "25% من 540 = 135 لتراً موجود. الباقي 3 × 135 = 405.",
        "result_en": "The answer is 405",
        "result_ar": "الجواب هو 405"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a tank divided into 4 equal sections, each representing 25% (= 135 litres).",
            "explanation_ar": "Draw a tank divided into 4 equal sections, each representing 25% (= 135 litres)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 1 section blue to show the water already in the tank (135 litres).",
            "explanation_ar": "Shade 1 section blue to show the water already in the tank (135 litres)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The remaining 3 sections are empty.",
            "explanation_ar": "The remaining 3 sections are empty."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "3 × 135 = 405 litres are needed to fill those three sections.",
            "explanation_ar": "3 × 135 = 405 litres are needed to fill those three sections."
          }
        ],
        "hint_en": "Picture 4 equal sections; 1 is full (135 L) and 3 are empty (3 × 135 = 405 L).",
        "hint_ar": "تخيل 4 أقسام متساوية؛ 1 ممتلئ (135 لتراً) و3 فارغة (3 × 135 = 405 لتراً).",
        "result_en": "The answer is 405",
        "result_ar": "الجواب هو 405"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-006",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A school in Canada has 840 students. The ratio of boys to girls is 3 : 4. How many girls are there?",
    "question_ar": "مدرسة في كندا فيها 840 طالباً. نسبة الأولاد إلى البنات هي 3 : 4. كم عدد البنات؟",
    "answer": 480,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Total ratio parts = 3 + 4 = 7.",
            "explanation_ar": "Total ratio parts = 3 + 4 = 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Each part = 840 ÷ 7 = 120 students.",
            "explanation_ar": "Each part = 840 ÷ 7 = 120 students."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Girls = 4 parts = 4 × 120 = 480.",
            "explanation_ar": "Girls = 4 parts = 4 × 120 = 480."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: boys = 3 × 120 = 360. Then 360 + 480 = 840 ✓.",
            "explanation_ar": "Verify: boys = 3 × 120 = 360. Then 360 + 480 = 840 ✓."
          }
        ],
        "hint_en": "Divide 840 by 7 total parts to get 120 per part; girls get 4 parts.",
        "hint_ar": "اقسم 840 على 7 أجزاء لتحصل على 120 لكل جزء؛ البنات لهن 4 أجزاء.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The ratio 3:4 means out of every 7 students, 4 are girls.",
            "explanation_ar": "The ratio 3:4 means out of every 7 students, 4 are girls."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Fraction of girls = 4/7.",
            "explanation_ar": "Fraction of girls = 4/7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Girls = (4/7) × 840 = 4 × 120 = 480.",
            "explanation_ar": "Girls = (4/7) × 840 = 4 × 120 = 480."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Boys = 840 − 480 = 360. Ratio check: 360 : 480 = 3 : 4 ✓.",
            "explanation_ar": "Boys = 840 − 480 = 360. Ratio check: 360 : 480 = 3 : 4 ✓."
          }
        ],
        "hint_en": "Girls make up 4/7 of 840 students.",
        "hint_ar": "البنات يمثلن 4/7 من 840 طالباً.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 7 equal blocks; label 3 blue (boys) and 4 pink (girls).",
            "explanation_ar": "Draw 7 equal blocks; label 3 blue (boys) and 4 pink (girls)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "All 7 blocks together = 840 students.",
            "explanation_ar": "All 7 blocks together = 840 students."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One block = 840 ÷ 7 = 120 students.",
            "explanation_ar": "One block = 840 ÷ 7 = 120 students."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The 4 pink blocks = 4 × 120 = 480 girls.",
            "explanation_ar": "The 4 pink blocks = 4 × 120 = 480 girls."
          }
        ],
        "hint_en": "7 blocks total; 4 pink blocks represent the girls: 4 × 120 = 480.",
        "hint_ar": "7 مربعات إجمالية؛ 4 مربعات وردية للبنات: 4 × 120 = 480.",
        "result_en": "The answer is 480",
        "result_ar": "الجواب هو 480"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-007",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A baker in France uses 3 cups of flour for every 2 cups of sugar. She wants to make a batch that uses 18 cups of flour. How many cups of sugar does she need?",
    "question_ar": "خبازة في فرنسا تستخدم 3 أكواب دقيق لكل 2 كوب سكر. تريد تحضير دفعة تستخدم 18 كوب دقيق. كم كوب سكر تحتاج؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The ratio of flour to sugar is 3 : 2.",
            "explanation_ar": "The ratio of flour to sugar is 3 : 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Set up a proportion: 3/2 = 18/x, where x is the cups of sugar.",
            "explanation_ar": "Set up a proportion: 3/2 = 18/x, where x is the cups of sugar."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Cross-multiply: 3x = 18 × 2 = 36.",
            "explanation_ar": "Cross-multiply: 3x = 18 × 2 = 36."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Solve: x = 36 ÷ 3 = 12 cups of sugar.",
            "explanation_ar": "Solve: x = 36 ÷ 3 = 12 cups of sugar."
          }
        ],
        "hint_en": "Use the proportion 3/2 = 18/x and cross-multiply to find x = 12.",
        "hint_ar": "استخدم النسبة 3/2 = 18/x وتقاطع الضرب لإيجاد x = 12.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "For every 3 cups of flour, 2 cups of sugar are used.",
            "explanation_ar": "For every 3 cups of flour, 2 cups of sugar are used."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "With 18 cups of flour, find how many groups of 3: 18 ÷ 3 = 6 groups.",
            "explanation_ar": "With 18 cups of flour, find how many groups of 3: 18 ÷ 3 = 6 groups."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Each group requires 2 cups of sugar: 6 × 2 = 12 cups.",
            "explanation_ar": "Each group requires 2 cups of sugar: 6 × 2 = 12 cups."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The baker needs 12 cups of sugar.",
            "explanation_ar": "The baker needs 12 cups of sugar."
          }
        ],
        "hint_en": "18 cups of flour = 6 groups of 3. Each group needs 2 cups of sugar.",
        "hint_ar": "18 كوب دقيق = 6 مجموعات من 3. كل مجموعة تحتاج 2 كوب سكر.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 6 sets of blocks: each set has 3 flour blocks and 2 sugar blocks.",
            "explanation_ar": "Draw 6 sets of blocks: each set has 3 flour blocks and 2 sugar blocks."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Count the flour blocks: 6 × 3 = 18 ✓.",
            "explanation_ar": "Count the flour blocks: 6 × 3 = 18 ✓."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the sugar blocks: 6 × 2 = 12.",
            "explanation_ar": "Count the sugar blocks: 6 × 2 = 12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The baker needs 12 cups of sugar.",
            "explanation_ar": "The baker needs 12 cups of sugar."
          }
        ],
        "hint_en": "Picture 6 identical sets; each set has 3 flour and 2 sugar. Count all sugar blocks.",
        "hint_ar": "تخيل 6 مجموعات متطابقة؛ كل مجموعة لها 3 دقيق و2 سكر. عد كل مربعات السكر.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-008",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A train in India travels 960 km in 8 hours. At the same speed, how many kilometres will it travel in 5 hours?",
    "question_ar": "قطار في الهند يقطع 960 كم في 8 ساعات. بنفس السرعة، كم كيلومتراً يقطع في 5 ساعات؟",
    "answer": 600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find the speed: 960 km ÷ 8 h = 120 km/h.",
            "explanation_ar": "Find the speed: 960 km ÷ 8 h = 120 km/h."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Use Distance = Speed × Time for 5 hours.",
            "explanation_ar": "Use Distance = Speed × Time for 5 hours."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Distance = 120 × 5 = 600 km.",
            "explanation_ar": "Distance = 120 × 5 = 600 km."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify the rate: 600 km ÷ 5 h = 120 km/h ✓.",
            "explanation_ar": "Verify the rate: 600 km ÷ 5 h = 120 km/h ✓."
          }
        ],
        "hint_en": "Speed = 960 ÷ 8 = 120 km/h. Then 120 × 5 = 600 km.",
        "hint_ar": "السرعة = 960 ÷ 8 = 120 كم/ساعة. إذن 120 × 5 = 600 كم.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "In 8 hours the train covers 960 km, so in 1 hour it covers 960 ÷ 8 = 120 km.",
            "explanation_ar": "In 8 hours the train covers 960 km, so in 1 hour it covers 960 ÷ 8 = 120 km."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "In 5 hours: add 120 five times: 120 + 120 + 120 + 120 + 120.",
            "explanation_ar": "In 5 hours: add 120 five times: 120 + 120 + 120 + 120 + 120."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "120 × 5 = 600 km.",
            "explanation_ar": "120 × 5 = 600 km."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The train covers 600 km in 5 hours.",
            "explanation_ar": "The train covers 600 km in 5 hours."
          }
        ],
        "hint_en": "Find the 1-hour distance (120 km) then multiply by 5.",
        "hint_ar": "أوجد المسافة في ساعة واحدة (120 كم) ثم اضرب في 5.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a timeline with 8 equal segments; each represents 1 hour = 120 km.",
            "explanation_ar": "Draw a timeline with 8 equal segments; each represents 1 hour = 120 km."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Highlight only the first 5 segments.",
            "explanation_ar": "Highlight only the first 5 segments."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the distance for 5 segments: 5 × 120 km = 600 km.",
            "explanation_ar": "Count the distance for 5 segments: 5 × 120 km = 600 km."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The train travels 600 km in 5 hours.",
            "explanation_ar": "The train travels 600 km in 5 hours."
          }
        ],
        "hint_en": "Each of the 8 hour-segments covers 120 km. Count 5 segments: 5 × 120 = 600.",
        "hint_ar": "كل ساعة من الـ8 تغطي 120 كم. عد 5 أجزاء: 5 × 120 = 600.",
        "result_en": "The answer is 600",
        "result_ar": "الجواب هو 600"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-009",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A market in Egypt sells 5 kg of tomatoes for 75 Egyptian pounds. How much do 12 kg of tomatoes cost?",
    "question_ar": "سوق في مصر يبيع 5 كغم من الطماطم بـ 75 جنيهاً مصرياً. كم يكلف 12 كغم من الطماطم؟",
    "answer": 180,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find the price per kilogram: 75 ÷ 5 = 15 pounds per kg.",
            "explanation_ar": "Find the price per kilogram: 75 ÷ 5 = 15 pounds per kg."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply by 12 kg: 15 × 12 = 180 pounds.",
            "explanation_ar": "Multiply by 12 kg: 15 × 12 = 180 pounds."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 180 ÷ 12 = 15 pounds/kg, and 15 × 5 = 75 ✓.",
            "explanation_ar": "Verify: 180 ÷ 12 = 15 pounds/kg, and 15 × 5 = 75 ✓."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "12 kg of tomatoes costs 180 Egyptian pounds.",
            "explanation_ar": "12 kg of tomatoes costs 180 Egyptian pounds."
          }
        ],
        "hint_en": "Unit price = 75 ÷ 5 = 15 pounds/kg. Then 15 × 12 = 180.",
        "hint_ar": "سعر الوحدة = 75 ÷ 5 = 15 جنيهاً/كغم. إذن 15 × 12 = 180.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "5 kg costs 75 pounds, so 10 kg costs 2 × 75 = 150 pounds.",
            "explanation_ar": "5 kg costs 75 pounds, so 10 kg costs 2 × 75 = 150 pounds."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Remaining 2 kg costs 2 × 15 = 30 pounds (since 1 kg = 15 pounds).",
            "explanation_ar": "Remaining 2 kg costs 2 × 15 = 30 pounds (since 1 kg = 15 pounds)."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total for 12 kg = 150 + 30 = 180 pounds.",
            "explanation_ar": "Total for 12 kg = 150 + 30 = 180 pounds."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The cost is 180 Egyptian pounds.",
            "explanation_ar": "The cost is 180 Egyptian pounds."
          }
        ],
        "hint_en": "Split 12 kg into 10 kg + 2 kg. 10 kg costs 150 and 2 kg costs 30.",
        "hint_ar": "قسّم 12 كغم إلى 10 كغم + 2 كغم. 10 كغم تكلف 150 و2 كغم تكلف 30.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 12 identical tomato icons, each worth 15 pounds.",
            "explanation_ar": "Draw 12 identical tomato icons, each worth 15 pounds."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group them into rows of 5: one full group of 5 = 75 pounds.",
            "explanation_ar": "Group them into rows of 5: one full group of 5 = 75 pounds."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Remaining 7 kg: another group of 5 = 75 pounds, plus 2 more = 30 pounds.",
            "explanation_ar": "Remaining 7 kg: another group of 5 = 75 pounds, plus 2 more = 30 pounds."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total: 75 + 75 + 30 = 180 pounds.",
            "explanation_ar": "Total: 75 + 75 + 30 = 180 pounds."
          }
        ],
        "hint_en": "Each kilogram costs 15 pounds. Picture 12 groups of 15 pounds.",
        "hint_ar": "كل كيلوغرام يكلف 15 جنيهاً. تخيل 12 مجموعة من 15 جنيهاً.",
        "result_en": "The answer is 180",
        "result_ar": "الجواب هو 180"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-010",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A company in South Korea increased its employees from 250 to 300. What is the percentage increase?",
    "question_ar": "شركة في كوريا الجنوبية زادت موظفيها من 250 إلى 300. ما نسبة الزيادة؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find the increase: 300 − 250 = 50 employees.",
            "explanation_ar": "Find the increase: 300 − 250 = 50 employees."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Percentage increase = (increase ÷ original) × 100.",
            "explanation_ar": "Percentage increase = (increase ÷ original) × 100."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "= (50 ÷ 250) × 100 = 0.20 × 100 = 20%.",
            "explanation_ar": "= (50 ÷ 250) × 100 = 0.20 × 100 = 20%."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The percentage increase is 20%.",
            "explanation_ar": "The percentage increase is 20%."
          }
        ],
        "hint_en": "Increase = 50. Then (50 ÷ 250) × 100 = 20%.",
        "hint_ar": "الزيادة = 50. إذن (50 ÷ 250) × 100 = 20%.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Original = 250. New = 300. Increase = 300 − 250 = 50.",
            "explanation_ar": "Original = 250. New = 300. Increase = 300 − 250 = 50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "What fraction of 250 is 50? → 50/250 = 1/5.",
            "explanation_ar": "What fraction of 250 is 50? → 50/250 = 1/5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Convert 1/5 to a percentage: 1/5 × 100 = 20%.",
            "explanation_ar": "Convert 1/5 to a percentage: 1/5 × 100 = 20%."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The company's workforce grew by 20%.",
            "explanation_ar": "The company's workforce grew by 20%."
          }
        ],
        "hint_en": "The increase of 50 is 1/5 of 250, which equals 20%.",
        "hint_ar": "الزيادة 50 هي 1/5 من 250، وهذا يساوي 20%.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar for 250 employees (original) and a longer bar for 300 employees (new).",
            "explanation_ar": "Draw a bar for 250 employees (original) and a longer bar for 300 employees (new)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Mark the extra section: 300 − 250 = 50 employees.",
            "explanation_ar": "Mark the extra section: 300 − 250 = 50 employees."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The extra section (50) compared to the original bar (250): 50/250 = 1/5.",
            "explanation_ar": "The extra section (50) compared to the original bar (250): 50/250 = 1/5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "1/5 = 20%, so the bar grew by 20%.",
            "explanation_ar": "1/5 = 20%, so the bar grew by 20%."
          }
        ],
        "hint_en": "The extra part (50) sits on top of the original (250); it is 1/5 of the original = 20%.",
        "hint_ar": "الجزء الإضافي (50) فوق الأصل (250)؛ هو 1/5 من الأصل = 20%.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-011",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A farmer in Nigeria has 420 metres of fencing. He uses it to make a rectangular field where the length is twice the width. What is the width of the field in metres?",
    "question_ar": "مزارع في نيجيريا لديه 420 متراً من الأسوار. يستخدمها لتسييج حقل مستطيل طوله ضعف عرضه. ما عرض الحقل بالأمتار؟",
    "answer": 70,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Let width = w. Then length = 2w.",
            "explanation_ar": "Let width = w. Then length = 2w."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Perimeter = 2(length + width) = 2(2w + w) = 6w.",
            "explanation_ar": "Perimeter = 2(length + width) = 2(2w + w) = 6w."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Set 6w = 420 → w = 420 ÷ 6 = 70 metres.",
            "explanation_ar": "Set 6w = 420 → w = 420 ÷ 6 = 70 metres."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: length = 140, perimeter = 2(140 + 70) = 2 × 210 = 420 ✓.",
            "explanation_ar": "Verify: length = 140, perimeter = 2(140 + 70) = 2 × 210 = 420 ✓."
          }
        ],
        "hint_en": "Perimeter = 6w = 420. Divide 420 by 6 to find w = 70.",
        "hint_ar": "المحيط = 6w = 420. اقسم 420 على 6 لتجد w = 70.",
        "result_en": "The answer is 70",
        "result_ar": "الجواب هو 70"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "A rectangle has 2 lengths and 2 widths. Length = 2 × width.",
            "explanation_ar": "A rectangle has 2 lengths and 2 widths. Length = 2 × width."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "So the fencing covers: 2(2w) + 2w = 4w + 2w = 6w.",
            "explanation_ar": "So the fencing covers: 2(2w) + 2w = 4w + 2w = 6w."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "6w = 420, so w = 70 metres.",
            "explanation_ar": "6w = 420, so w = 70 metres."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Length = 2 × 70 = 140 m. Check: 2(140) + 2(70) = 280 + 140 = 420 ✓.",
            "explanation_ar": "Length = 2 × 70 = 140 m. Check: 2(140) + 2(70) = 280 + 140 = 420 ✓."
          }
        ],
        "hint_en": "Break the perimeter into 4w (two lengths) + 2w (two widths) = 6w = 420.",
        "hint_ar": "قسّم المحيط إلى 4w (طولان) + 2w (عرضان) = 6w = 420.",
        "result_en": "The answer is 70",
        "result_ar": "الجواب هو 70"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Sketch a rectangle; label each width as w and each length as 2w.",
            "explanation_ar": "Sketch a rectangle; label each width as w and each length as 2w."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The four sides together form: w + 2w + w + 2w = 6w.",
            "explanation_ar": "The four sides together form: w + 2w + w + 2w = 6w."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "6 equal w-sized segments around the rectangle = 420 m, so w = 70 m.",
            "explanation_ar": "6 equal w-sized segments around the rectangle = 420 m, so w = 70 m."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Width = 70 m and length = 140 m.",
            "explanation_ar": "Width = 70 m and length = 140 m."
          }
        ],
        "hint_en": "Going around the rectangle you pass through 6 w-segments. 6w = 420, w = 70.",
        "hint_ar": "عند الدوران حول المستطيل تمر بـ 6 أجزاء بحجم w. 6w = 420، w = 70.",
        "result_en": "The answer is 70",
        "result_ar": "الجواب هو 70"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-012",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A supermarket in Australia sells apple juice for 4 Australian dollars per litre. A family buys 3.5 litres. How many Australian dollars do they pay?",
    "question_ar": "سوبرماركت في أستراليا يبيع عصير التفاح بـ 4 دولارات أسترالية للتر. عائلة تشتري 3.5 لتراً. كم دولاراً أسترالياً تدفع؟",
    "answer": 14,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Cost = price per litre × number of litres.",
            "explanation_ar": "Cost = price per litre × number of litres."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Cost = 4 × 3.5.",
            "explanation_ar": "Cost = 4 × 3.5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "4 × 3.5 = 4 × 3 + 4 × 0.5 = 12 + 2 = 14.",
            "explanation_ar": "4 × 3.5 = 4 × 3 + 4 × 0.5 = 12 + 2 = 14."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The family pays 14 Australian dollars.",
            "explanation_ar": "The family pays 14 Australian dollars."
          }
        ],
        "hint_en": "Multiply 4 dollars/litre × 3.5 litres = 14 dollars.",
        "hint_ar": "اضرب 4 دولارات/لتر × 3.5 لتراً = 14 دولاراً.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 3.5 litres into 3 litres + 0.5 litres.",
            "explanation_ar": "Split 3.5 litres into 3 litres + 0.5 litres."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Cost of 3 litres = 3 × 4 = 12 dollars.",
            "explanation_ar": "Cost of 3 litres = 3 × 4 = 12 dollars."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Cost of 0.5 litres = 0.5 × 4 = 2 dollars.",
            "explanation_ar": "Cost of 0.5 litres = 0.5 × 4 = 2 dollars."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total = 12 + 2 = 14 Australian dollars.",
            "explanation_ar": "Total = 12 + 2 = 14 Australian dollars."
          }
        ],
        "hint_en": "3.5 L = 3 L + 0.5 L. Costs: 12 + 2 = 14 dollars.",
        "hint_ar": "3.5 لتر = 3 لتر + 0.5 لتر. التكاليف: 12 + 2 = 14 دولاراً.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 4 bottles, each 1 litre, worth 4 dollars each (total: 16 dollars for 4 litres).",
            "explanation_ar": "Draw 4 bottles, each 1 litre, worth 4 dollars each (total: 16 dollars for 4 litres)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The family only buys 3.5 litres, which is 3 full bottles plus half a bottle.",
            "explanation_ar": "The family only buys 3.5 litres, which is 3 full bottles plus half a bottle."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "3 full bottles = 12 dollars; half a bottle = 2 dollars.",
            "explanation_ar": "3 full bottles = 12 dollars; half a bottle = 2 dollars."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total cost = 12 + 2 = 14 dollars.",
            "explanation_ar": "Total cost = 12 + 2 = 14 dollars."
          }
        ],
        "hint_en": "Picture 3 full bottles (12 dollars) and half a bottle (2 dollars) = 14 dollars.",
        "hint_ar": "تخيل 3 زجاجات كاملة (12 دولاراً) ونصف زجاجة (2 دولار) = 14 دولاراً.",
        "result_en": "The answer is 14",
        "result_ar": "الجواب هو 14"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-013",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A student in Turkey scores 56 out of 80 on a maths test. What is the percentage score?",
    "question_ar": "طالب في تركيا حصل على 56 من 80 في اختبار رياضيات. ما نسبة درجاته المئوية؟",
    "answer": 70,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Percentage = (score ÷ total) × 100.",
            "explanation_ar": "Percentage = (score ÷ total) × 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "= (56 ÷ 80) × 100.",
            "explanation_ar": "= (56 ÷ 80) × 100."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "56 ÷ 80 = 0.7; then 0.7 × 100 = 70.",
            "explanation_ar": "56 ÷ 80 = 0.7; then 0.7 × 100 = 70."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The student's percentage score is 70%.",
            "explanation_ar": "The student's percentage score is 70%."
          }
        ],
        "hint_en": "(56 ÷ 80) × 100 = 70%.",
        "hint_ar": "(56 ÷ 80) × 100 = 70%.",
        "result_en": "The answer is 70",
        "result_ar": "الجواب هو 70"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Simplify 56/80: divide both by 8 → 7/10.",
            "explanation_ar": "Simplify 56/80: divide both by 8 → 7/10."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "7/10 = 0.7.",
            "explanation_ar": "7/10 = 0.7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply by 100 to convert to percentage: 0.7 × 100 = 70.",
            "explanation_ar": "Multiply by 100 to convert to percentage: 0.7 × 100 = 70."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The student scored 70%.",
            "explanation_ar": "The student scored 70%."
          }
        ],
        "hint_en": "Simplify 56/80 = 7/10 = 70%.",
        "hint_ar": "بسّط 56/80 = 7/10 = 70%.",
        "result_en": "The answer is 70",
        "result_ar": "الجواب هو 70"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 80 equal marks; shade 56 of them.",
            "explanation_ar": "Draw a bar of 80 equal marks; shade 56 of them."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group marks into sets of 8: 56 marks = 7 groups; 80 marks = 10 groups.",
            "explanation_ar": "Group marks into sets of 8: 56 marks = 7 groups; 80 marks = 10 groups."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Fraction shaded = 7/10 = 70 out of 100.",
            "explanation_ar": "Fraction shaded = 7/10 = 70 out of 100."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The percentage is 70%.",
            "explanation_ar": "The percentage is 70%."
          }
        ],
        "hint_en": "56 out of 80 = 7 groups out of 10 groups = 70%.",
        "hint_ar": "56 من 80 = 7 مجموعات من 10 مجموعات = 70%.",
        "result_en": "The answer is 70",
        "result_ar": "الجواب هو 70"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-014",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A plumber in Mexico works 6 hours per day and earns 480 Mexican pesos per day. How many pesos does he earn per hour?",
    "question_ar": "سبّاك في المكسيك يعمل 6 ساعات يومياً ويكسب 480 بيسو مكسيكياً في اليوم. كم بيسو يكسب في الساعة؟",
    "answer": 80,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Hourly rate = total daily pay ÷ hours worked per day.",
            "explanation_ar": "Hourly rate = total daily pay ÷ hours worked per day."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Hourly rate = 480 ÷ 6.",
            "explanation_ar": "Hourly rate = 480 ÷ 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "480 ÷ 6 = 80 pesos per hour.",
            "explanation_ar": "480 ÷ 6 = 80 pesos per hour."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 80 × 6 = 480 ✓.",
            "explanation_ar": "Verify: 80 × 6 = 480 ✓."
          }
        ],
        "hint_en": "Divide 480 pesos by 6 hours to get 80 pesos per hour.",
        "hint_ar": "اقسم 480 بيسو على 6 ساعات تحصل على 80 بيسو في الساعة.",
        "result_en": "The answer is 80",
        "result_ar": "الجواب هو 80"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split the 6 hours into pairs: 2 + 2 + 2.",
            "explanation_ar": "Split the 6 hours into pairs: 2 + 2 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "480 ÷ 2 = 240 pesos for 2 hours, so 240 ÷ 2 = 120 per hour — wait, re-do as single step.",
            "explanation_ar": "480 ÷ 2 = 240 pesos for 2 hours, so 240 ÷ 2 = 120 per hour — wait, re-do as single step."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Better: 480 ÷ 6. First 480 ÷ 2 = 240, then 240 ÷ 3 = 80 pesos per hour.",
            "explanation_ar": "Better: 480 ÷ 6. First 480 ÷ 2 = 240, then 240 ÷ 3 = 80 pesos per hour."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The plumber earns 80 pesos per hour.",
            "explanation_ar": "The plumber earns 80 pesos per hour."
          }
        ],
        "hint_en": "Halve 480 to get 240 for 3 hours, then halve again… or divide 480 by 6 directly: 80.",
        "hint_ar": "قسّم 480 على 2 تحصل على 240 لـ3 ساعات، ثم على 3 تحصل على 80.",
        "result_en": "The answer is 80",
        "result_ar": "الجواب هو 80"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 6 equal time blocks, each representing 1 hour of work.",
            "explanation_ar": "Draw 6 equal time blocks, each representing 1 hour of work."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "All 6 blocks together represent 480 pesos.",
            "explanation_ar": "All 6 blocks together represent 480 pesos."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each block = 480 ÷ 6 = 80 pesos.",
            "explanation_ar": "Each block = 480 ÷ 6 = 80 pesos."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "One hour of work earns 80 pesos.",
            "explanation_ar": "One hour of work earns 80 pesos."
          }
        ],
        "hint_en": "6 equal blocks share 480 pesos. Each block = 80 pesos.",
        "hint_ar": "6 كتل متساوية تقسم 480 بيسو. كل كتلة = 80 بيسو.",
        "result_en": "The answer is 80",
        "result_ar": "الجواب هو 80"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-015",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A bookshop in Argentina has 960 books. 40% are fiction, 35% are science, and the rest are history. How many history books are there?",
    "question_ar": "مكتبة في الأرجنتين فيها 960 كتاباً. 40% منها روايات و35% علوم والباقي تاريخ. كم كتاب تاريخ يوجد؟",
    "answer": 240,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "History percentage = 100% − 40% − 35% = 25%.",
            "explanation_ar": "History percentage = 100% − 40% − 35% = 25%."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Number of history books = 25% of 960 = 0.25 × 960.",
            "explanation_ar": "Number of history books = 25% of 960 = 0.25 × 960."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "0.25 × 960 = 240.",
            "explanation_ar": "0.25 × 960 = 240."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There are 240 history books.",
            "explanation_ar": "There are 240 history books."
          }
        ],
        "hint_en": "History = 100% − 40% − 35% = 25%. Then 25% of 960 = 240.",
        "hint_ar": "التاريخ = 100% − 40% − 35% = 25%. إذن 25% من 960 = 240.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Fiction: 40% of 960 = 384. Science: 35% of 960 = 336.",
            "explanation_ar": "Fiction: 40% of 960 = 384. Science: 35% of 960 = 336."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Fiction + Science = 384 + 336 = 720 books.",
            "explanation_ar": "Fiction + Science = 384 + 336 = 720 books."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "History = 960 − 720 = 240 books.",
            "explanation_ar": "History = 960 − 720 = 240 books."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Verify: 384 + 336 + 240 = 960 ✓.",
            "explanation_ar": "Verify: 384 + 336 + 240 = 960 ✓."
          }
        ],
        "hint_en": "Subtract fiction (384) and science (336) from 960 to get history: 240.",
        "hint_ar": "اطرح الروايات (384) والعلوم (336) من 960 للحصول على التاريخ: 240.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a 100-part bar. Mark 40 parts red (fiction) and 35 parts blue (science).",
            "explanation_ar": "Draw a 100-part bar. Mark 40 parts red (fiction) and 35 parts blue (science)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The remaining 25 parts are green (history).",
            "explanation_ar": "The remaining 25 parts are green (history)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each part = 960 ÷ 100 = 9.6 books.",
            "explanation_ar": "Each part = 960 ÷ 100 = 9.6 books."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "History = 25 × 9.6 = 240 books.",
            "explanation_ar": "History = 25 × 9.6 = 240 books."
          }
        ],
        "hint_en": "25 out of 100 parts are history; 25% of 960 = 240.",
        "hint_ar": "25 من 100 جزء للتاريخ؛ 25% من 960 = 240.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-016",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A swimming pool in Spain holds 1,500 cubic metres of water. It is being filled at 25 cubic metres per hour. How many hours will it take to fill the pool completely?",
    "question_ar": "حوض سباحة في إسبانيا يتسع لـ 1,500 متر مكعب من الماء. يُملأ بمعدل 25 متراً مكعباً في الساعة. كم ساعة يستغرق ملؤه بالكامل؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Time = Total volume ÷ Fill rate.",
            "explanation_ar": "Time = Total volume ÷ Fill rate."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Time = 1,500 m³ ÷ 25 m³/h.",
            "explanation_ar": "Time = 1,500 m³ ÷ 25 m³/h."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "1,500 ÷ 25 = 60 hours.",
            "explanation_ar": "1,500 ÷ 25 = 60 hours."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 25 × 60 = 1,500 ✓.",
            "explanation_ar": "Verify: 25 × 60 = 1,500 ✓."
          }
        ],
        "hint_en": "Divide 1,500 by 25 to get 60 hours.",
        "hint_ar": "اقسم 1,500 على 25 تحصل على 60 ساعة.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "In 1 hour, 25 m³ is added. How many times does 25 fit into 1,500?",
            "explanation_ar": "In 1 hour, 25 m³ is added. How many times does 25 fit into 1,500?"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1,500 ÷ 25 = 1,500 ÷ 25. First: 1,000 ÷ 25 = 40.",
            "explanation_ar": "1,500 ÷ 25 = 1,500 ÷ 25. First: 1,000 ÷ 25 = 40."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Then: 500 ÷ 25 = 20.",
            "explanation_ar": "Then: 500 ÷ 25 = 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total: 40 + 20 = 60 hours.",
            "explanation_ar": "Total: 40 + 20 = 60 hours."
          }
        ],
        "hint_en": "Split 1,500 into 1,000 + 500. Each divided by 25 gives 40 + 20 = 60.",
        "hint_ar": "قسّم 1,500 إلى 1,000 + 500. كل قسمة على 25 تعطي 40 + 20 = 60.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a tall cylinder (the pool) divided into equal layers, each 25 m³.",
            "explanation_ar": "Draw a tall cylinder (the pool) divided into equal layers, each 25 m³."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Count the layers needed to reach 1,500 m³: 1,500 ÷ 25 = 60 layers.",
            "explanation_ar": "Count the layers needed to reach 1,500 m³: 1,500 ÷ 25 = 60 layers."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each layer takes 1 hour to fill.",
            "explanation_ar": "Each layer takes 1 hour to fill."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The pool takes 60 hours to fill completely.",
            "explanation_ar": "The pool takes 60 hours to fill completely."
          }
        ],
        "hint_en": "Picture 60 layers of 25 m³ stacked to reach 1,500 m³.",
        "hint_ar": "تخيل 60 طبقة من 25 م3 متراكمة للوصول إلى 1,500 م3.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-017",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "In China, a factory produces widgets in batches. Each batch takes 4 hours and produces 160 widgets. How many widgets are produced in a 10-hour shift?",
    "question_ar": "في الصين، مصنع ينتج منتجات على دفعات. كل دفعة تستغرق 4 ساعات وتنتج 160 منتجاً. كم منتجاً يُنتج في وردية 10 ساعات؟",
    "answer": 400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Find the hourly production rate: 160 ÷ 4 = 40 widgets per hour.",
            "explanation_ar": "Find the hourly production rate: 160 ÷ 4 = 40 widgets per hour."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply by the shift length: 40 × 10 = 400.",
            "explanation_ar": "Multiply by the shift length: 40 × 10 = 400."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 10 hours at 40 widgets/hour = 400 widgets.",
            "explanation_ar": "Verify: 10 hours at 40 widgets/hour = 400 widgets."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The factory produces 400 widgets per 10-hour shift.",
            "explanation_ar": "The factory produces 400 widgets per 10-hour shift."
          }
        ],
        "hint_en": "Rate = 160 ÷ 4 = 40 widgets/h. Then 40 × 10 = 400.",
        "hint_ar": "المعدل = 160 ÷ 4 = 40 منتجاً/ساعة. إذن 40 × 10 = 400.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "In 4 hours: 160 widgets. In 8 hours: 2 × 160 = 320 widgets.",
            "explanation_ar": "In 4 hours: 160 widgets. In 8 hours: 2 × 160 = 320 widgets."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Remaining 2 hours out of the 10-hour shift.",
            "explanation_ar": "Remaining 2 hours out of the 10-hour shift."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "In 2 hours (half a batch): 160 ÷ 2 = 80 widgets.",
            "explanation_ar": "In 2 hours (half a batch): 160 ÷ 2 = 80 widgets."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total = 320 + 80 = 400 widgets.",
            "explanation_ar": "Total = 320 + 80 = 400 widgets."
          }
        ],
        "hint_en": "8 hours = 2 batches = 320; 2 extra hours = half batch = 80. Total: 400.",
        "hint_ar": "8 ساعات = دفعتان = 320؛ ساعتان إضافيتان = نصف دفعة = 80. المجموع: 400.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a 10-hour timeline split into blocks of 4, 4, and 2 hours.",
            "explanation_ar": "Draw a 10-hour timeline split into blocks of 4, 4, and 2 hours."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Block 1 (4 h): 160 widgets. Block 2 (4 h): 160 widgets.",
            "explanation_ar": "Block 1 (4 h): 160 widgets. Block 2 (4 h): 160 widgets."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Block 3 (2 h = half of 4 h): 160 ÷ 2 = 80 widgets.",
            "explanation_ar": "Block 3 (2 h = half of 4 h): 160 ÷ 2 = 80 widgets."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total: 160 + 160 + 80 = 400 widgets.",
            "explanation_ar": "Total: 160 + 160 + 80 = 400 widgets."
          }
        ],
        "hint_en": "Two full 4-hour batches (160 + 160) plus a half batch (80) = 400.",
        "hint_ar": "دفعتان كاملتان (160 + 160) زائد نصف دفعة (80) = 400.",
        "result_en": "The answer is 400",
        "result_ar": "الجواب هو 400"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-018",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A clothing store in Kenya buys T-shirts at 500 Kenyan shillings each and sells them at a 30% profit. What is the selling price per T-shirt?",
    "question_ar": "متجر ملابس في كينيا يشتري قمصاناً بـ 500 شلن كيني لكل منها ويبيعها بربح 30%. ما سعر البيع لكل قميص؟",
    "answer": 650,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Profit = 30% of 500 = 0.30 × 500 = 150 shillings.",
            "explanation_ar": "Profit = 30% of 500 = 0.30 × 500 = 150 shillings."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Selling price = cost + profit = 500 + 150 = 650 shillings.",
            "explanation_ar": "Selling price = cost + profit = 500 + 150 = 650 shillings."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Alternatively: selling price = 130% of 500 = 1.30 × 500 = 650.",
            "explanation_ar": "Alternatively: selling price = 130% of 500 = 1.30 × 500 = 650."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Each T-shirt sells for 650 Kenyan shillings.",
            "explanation_ar": "Each T-shirt sells for 650 Kenyan shillings."
          }
        ],
        "hint_en": "30% profit on 500 = 150. Selling price = 500 + 150 = 650.",
        "hint_ar": "ربح 30% على 500 = 150. سعر البيع = 500 + 150 = 650.",
        "result_en": "The answer is 650",
        "result_ar": "الجواب هو 650"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "10% of 500 = 50 shillings.",
            "explanation_ar": "10% of 500 = 50 shillings."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "30% = 3 × 10% = 3 × 50 = 150 shillings profit.",
            "explanation_ar": "30% = 3 × 10% = 3 × 50 = 150 shillings profit."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Selling price = 500 + 150 = 650 shillings.",
            "explanation_ar": "Selling price = 500 + 150 = 650 shillings."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The store sells each T-shirt at 650 shillings.",
            "explanation_ar": "The store sells each T-shirt at 650 shillings."
          }
        ],
        "hint_en": "10% of 500 is 50. Three 10% = 150 profit. Then 500 + 150 = 650.",
        "hint_ar": "10% من 500 يساوي 50. ثلاثة 10% = 150 ربح. إذن 500 + 150 = 650.",
        "result_en": "The answer is 650",
        "result_ar": "الجواب هو 650"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of 500 shillings divided into 10 equal parts, each worth 50 shillings.",
            "explanation_ar": "Draw a bar of 500 shillings divided into 10 equal parts, each worth 50 shillings."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 3 extra parts (30%) on the right to represent the profit: 3 × 50 = 150 shillings.",
            "explanation_ar": "Shade 3 extra parts (30%) on the right to represent the profit: 3 × 50 = 150 shillings."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The full bar now spans 500 + 150 = 650 shillings.",
            "explanation_ar": "The full bar now spans 500 + 150 = 650 shillings."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The selling price is 650 Kenyan shillings.",
            "explanation_ar": "The selling price is 650 Kenyan shillings."
          }
        ],
        "hint_en": "Extend the 500-shilling bar by 3 extra parts of 50 each (= 150) to reach 650.",
        "hint_ar": "مدّد شريط 500 شلن بـ3 أجزاء إضافية بقيمة 50 لكل منها (= 150) للوصول إلى 650.",
        "result_en": "The answer is 650",
        "result_ar": "الجواب هو 650"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-019",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "Two friends in Sweden share a pizza bill of 360 Swedish kronor in the ratio 5 : 4. How many kronor does the friend with the larger share pay?",
    "question_ar": "صديقان في السويد يتقاسمان فاتورة بيتزا قدرها 360 كرون سويدي بنسبة 5 : 4. كم كروناً يدفع صاحب الحصة الكبرى؟",
    "answer": 200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Total ratio parts = 5 + 4 = 9.",
            "explanation_ar": "Total ratio parts = 5 + 4 = 9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Value of each part = 360 ÷ 9 = 40 kronor.",
            "explanation_ar": "Value of each part = 360 ÷ 9 = 40 kronor."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Larger share = 5 parts = 5 × 40 = 200 kronor.",
            "explanation_ar": "Larger share = 5 parts = 5 × 40 = 200 kronor."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: smaller share = 4 × 40 = 160; 200 + 160 = 360 ✓.",
            "explanation_ar": "Verify: smaller share = 4 × 40 = 160; 200 + 160 = 360 ✓."
          }
        ],
        "hint_en": "9 total parts; each part = 40 kronor. Larger share = 5 × 40 = 200.",
        "hint_ar": "9 أجزاء إجمالية؛ كل جزء = 40 كروناً. الحصة الكبرى = 5 × 40 = 200.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Ratio 5:4 means the larger friend pays 5/9 of the total.",
            "explanation_ar": "Ratio 5:4 means the larger friend pays 5/9 of the total."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5/9 of 360: first find 1/9 = 360 ÷ 9 = 40.",
            "explanation_ar": "5/9 of 360: first find 1/9 = 360 ÷ 9 = 40."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Then 5/9 = 5 × 40 = 200 kronor.",
            "explanation_ar": "Then 5/9 = 5 × 40 = 200 kronor."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The larger share is 200 kronor.",
            "explanation_ar": "The larger share is 200 kronor."
          }
        ],
        "hint_en": "1/9 of 360 = 40. The larger share is 5/9 = 5 × 40 = 200.",
        "hint_ar": "1/9 من 360 = 40. الحصة الكبرى هي 5/9 = 5 × 40 = 200.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 9 equal blocks representing 360 kronor.",
            "explanation_ar": "Draw 9 equal blocks representing 360 kronor."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Label 5 blocks for the larger friend and 4 blocks for the smaller friend.",
            "explanation_ar": "Label 5 blocks for the larger friend and 4 blocks for the smaller friend."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each block = 360 ÷ 9 = 40 kronor.",
            "explanation_ar": "Each block = 360 ÷ 9 = 40 kronor."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The 5 blocks for the larger friend = 5 × 40 = 200 kronor.",
            "explanation_ar": "The 5 blocks for the larger friend = 5 × 40 = 200 kronor."
          }
        ],
        "hint_en": "Nine equal blocks of 40 kronor; the larger friend takes 5 blocks = 200 kronor.",
        "hint_ar": "تسعة مربعات متساوية من 40 كروناً؛ صاحب الحصة الكبرى يأخذ 5 مربعات = 200 كروناً.",
        "result_en": "The answer is 200",
        "result_ar": "الجواب هو 200"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-medium-020",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A bus in South Africa departs at 07:00 and arrives at 13:30. The route is 390 km long. What is the average speed of the bus in kilometres per hour?",
    "question_ar": "حافلة في جنوب أفريقيا تغادر الساعة 07:00 وتصل الساعة 13:30. طول المسار 390 كم. ما متوسط سرعة الحافلة بالكيلومتر في الساعة؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Travel time = 13:30 − 07:00 = 6.5 hours.",
            "explanation_ar": "Travel time = 13:30 − 07:00 = 6.5 hours."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Average speed = Distance ÷ Time = 390 ÷ 6.5.",
            "explanation_ar": "Average speed = Distance ÷ Time = 390 ÷ 6.5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "390 ÷ 6.5 = 3,900 ÷ 65 = 60 km/h.",
            "explanation_ar": "390 ÷ 6.5 = 3,900 ÷ 65 = 60 km/h."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 60 × 6.5 = 390 ✓.",
            "explanation_ar": "Verify: 60 × 6.5 = 390 ✓."
          }
        ],
        "hint_en": "Time = 6.5 h. Speed = 390 ÷ 6.5 = 60 km/h.",
        "hint_ar": "الزمن = 6.5 ساعة. السرعة = 390 ÷ 6.5 = 60 كم/ساعة.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "From 07:00 to 13:00 = 6 hours; from 13:00 to 13:30 = 0.5 hours. Total = 6.5 h.",
            "explanation_ar": "From 07:00 to 13:00 = 6 hours; from 13:00 to 13:30 = 0.5 hours. Total = 6.5 h."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "In 6 hours at speed s: 6s km. In 0.5 hours: 0.5s km. Total: 6.5s = 390.",
            "explanation_ar": "In 6 hours at speed s: 6s km. In 0.5 hours: 0.5s km. Total: 6.5s = 390."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "s = 390 ÷ 6.5 = 60 km/h.",
            "explanation_ar": "s = 390 ÷ 6.5 = 60 km/h."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The average speed is 60 km/h.",
            "explanation_ar": "The average speed is 60 km/h."
          }
        ],
        "hint_en": "6 h + 0.5 h = 6.5 h total. Divide 390 by 6.5 to get 60 km/h.",
        "hint_ar": "6 ساعات + 0.5 ساعة = 6.5 ساعة إجمالاً. اقسم 390 على 6.5 تحصل على 60 كم/ساعة.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a number line from 07:00 to 13:30, split into 6 full-hour segments plus one half-hour segment.",
            "explanation_ar": "Draw a number line from 07:00 to 13:30, split into 6 full-hour segments plus one half-hour segment."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The bus travels 390 km across all 6.5 segments.",
            "explanation_ar": "The bus travels 390 km across all 6.5 segments."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each full hour covers 390 ÷ 6.5 = 60 km.",
            "explanation_ar": "Each full hour covers 390 ÷ 6.5 = 60 km."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Average speed = 60 km/h.",
            "explanation_ar": "Average speed = 60 km/h."
          }
        ],
        "hint_en": "6.5 equal time slots span 390 km; each slot (1 hour) covers 60 km.",
        "hint_ar": "6.5 فترة زمنية متساوية تغطي 390 كم؛ كل فترة (ساعة) تغطي 60 كم.",
        "result_en": "The answer is 60",
        "result_ar": "الجواب هو 60"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-001",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A train in India travels 480 km at 60 km/h, then 270 km at 90 km/h. What is the total journey time in hours?",
    "question_ar": "قطار في الهند يقطع 480 كم بسرعة 60 كم/ساعة، ثم 270 كم بسرعة 90 كم/ساعة. ما هو إجمالي وقت الرحلة بالساعات؟",
    "answer": 11,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify the two segments: Leg 1 is 480 km at 60 km/h; Leg 2 is 270 km at 90 km/h.",
            "explanation_ar": "Identify the two segments: Leg 1 is 480 km at 60 km/h; Leg 2 is 270 km at 90 km/h."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "First leg time: 480 ÷ 60 = 8 hours.",
            "explanation_ar": "First leg time: 480 ÷ 60 = 8 hours."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Second leg time: 270 ÷ 90 = 3 hours.",
            "explanation_ar": "Second leg time: 270 ÷ 90 = 3 hours."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Total time: 8 + 3 = 11 hours.",
            "explanation_ar": "Total time: 8 + 3 = 11 hours."
          }
        ],
        "hint_en": "Divide each distance by its speed, then add the results.",
        "hint_ar": "اقسم كل مسافة على سرعتها ثم اجمع النتائج.",
        "result_en": "The answer is 11",
        "result_ar": "الجواب هو 11"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Part 1: Distance = 480 km, Speed = 60 km/h. Time = 480 ÷ 60 = 8 hours.",
            "explanation_ar": "Part 1: Distance = 480 km, Speed = 60 km/h. Time = 480 ÷ 60 = 8 hours."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Part 2: Distance = 270 km, Speed = 90 km/h. Time = 270 ÷ 90 = 3 hours.",
            "explanation_ar": "Part 2: Distance = 270 km, Speed = 90 km/h. Time = 270 ÷ 90 = 3 hours."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total distance check: 480 + 270 = 750 km covered in both parts.",
            "explanation_ar": "Total distance check: 480 + 270 = 750 km covered in both parts."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total time: 8 + 3 = 11 hours.",
            "explanation_ar": "Total time: 8 + 3 = 11 hours."
          }
        ],
        "hint_en": "Use Time = Distance ÷ Speed for each leg separately, then sum.",
        "hint_ar": "استخدم الزمن = المسافة ÷ السرعة لكل جزء على حدة ثم اجمع.",
        "result_en": "The answer is 11",
        "result_ar": "الجواب هو 11"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a timeline: [Start] — 8 h — [Checkpoint] — 3 h — [End].",
            "explanation_ar": "Draw a timeline: [Start] — 8 h — [Checkpoint] — 3 h — [End]."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The first 8 blocks each represent 60 km traveled in 1 hour, totaling 480 km.",
            "explanation_ar": "The first 8 blocks each represent 60 km traveled in 1 hour, totaling 480 km."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The next 3 blocks each represent 90 km traveled in 1 hour, totaling 270 km.",
            "explanation_ar": "The next 3 blocks each represent 90 km traveled in 1 hour, totaling 270 km."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Count all time blocks: 8 + 3 = 11 hours total.",
            "explanation_ar": "Count all time blocks: 8 + 3 = 11 hours total."
          }
        ],
        "hint_en": "Picture the journey as two separate time blocks on a number line.",
        "hint_ar": "تخيّل الرحلة كجزأين منفصلين على خط زمني.",
        "result_en": "The answer is 11",
        "result_ar": "الجواب هو 11"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-002",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A shop in Australia marks up a $200 item by 35%, then gives a 20% loyalty discount. What is the final price in dollars?",
    "question_ar": "متجر في أستراليا يرفع سعر سلعة قيمتها 200 دولار بنسبة 35%، ثم يمنح خصماً بنسبة 20% لأعضاء الولاء. ما هو السعر النهائي بالدولار؟",
    "answer": 216,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combine the two multipliers: markup factor = 1.35, discount factor = 0.80.",
            "explanation_ar": "Combine the two multipliers: markup factor = 1.35, discount factor = 0.80."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Net multiplier = 1.35 × 0.80 = 1.08.",
            "explanation_ar": "Net multiplier = 1.35 × 0.80 = 1.08."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Final price = $200 × 1.08 = $216.",
            "explanation_ar": "Final price = $200 × 1.08 = $216."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The final price is $216.",
            "explanation_ar": "The final price is $216."
          }
        ],
        "hint_en": "Multiply the original price by the combined net multiplier 1.35 × 0.80.",
        "hint_ar": "اضرب السعر الأصلي في المعامل الصافي المدمج 1.35 × 0.80.",
        "result_en": "The answer is 216",
        "result_ar": "الجواب هو 216"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Step 1 — Markup: 35% of $200 = $70; marked-up price = $200 + $70 = $270.",
            "explanation_ar": "Step 1 — Markup: 35% of $200 = $70; marked-up price = $200 + $70 = $270."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step 2 — Discount: 20% of $270 = $54; final price = $270 − $54 = $216.",
            "explanation_ar": "Step 2 — Discount: 20% of $270 = $54; final price = $270 − $54 = $216."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net change: +$70 − $54 = +$16 above original $200.",
            "explanation_ar": "Net change: +$70 − $54 = +$16 above original $200."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Final price is $216.",
            "explanation_ar": "Final price is $216."
          }
        ],
        "hint_en": "Calculate each percentage change one at a time: first add the markup, then subtract the discount.",
        "hint_ar": "احسب كل تغيير في النسبة المئوية خطوة بخطوة: أضف هامش الربح أولاً ثم اطرح الخصم.",
        "result_en": "The answer is 216",
        "result_ar": "الجواب هو 216"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Start with a bar representing $200.",
            "explanation_ar": "Start with a bar representing $200."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend the bar by 35%: add $70 so the bar now shows $270.",
            "explanation_ar": "Extend the bar by 35%: add $70 so the bar now shows $270."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Shrink the $270 bar by 20%: remove $54, leaving $216.",
            "explanation_ar": "Shrink the $270 bar by 20%: remove $54, leaving $216."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bar length represents the sale price of $216.",
            "explanation_ar": "The final bar length represents the sale price of $216."
          }
        ],
        "hint_en": "Think of the price as a bar that first grows 35% then shrinks 20%.",
        "hint_ar": "تخيّل السعر كشريط يكبر أولاً بنسبة 35% ثم يصغر بنسبة 20%.",
        "result_en": "The answer is 216",
        "result_ar": "الجواب هو 216"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-003",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "Solve 5x − 8 = 42. A store in South Korea has x shelves, each holding 50 books. How many books are in the store in total?",
    "question_ar": "حل المعادلة 5x − 8 = 42. متجر في كوريا الجنوبية يحتوي على x رف، كل رف يحمل 50 كتاباً. كم عدد الكتب الإجمالي في المتجر؟",
    "answer": 500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Add 8 to both sides of 5x − 8 = 42: get 5x = 50.",
            "explanation_ar": "Add 8 to both sides of 5x − 8 = 42: get 5x = 50."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide both sides by 5: x = 10 shelves.",
            "explanation_ar": "Divide both sides by 5: x = 10 shelves."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total books = 10 shelves × 50 books per shelf = 500.",
            "explanation_ar": "Total books = 10 shelves × 50 books per shelf = 500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The store has 500 books.",
            "explanation_ar": "The store has 500 books."
          }
        ],
        "hint_en": "Isolate x first, then multiply the result by 50.",
        "hint_ar": "عزل x أولاً ثم اضرب الناتج في 50.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Equation: 5x − 8 = 42. Undo subtraction: 5x = 42 + 8 = 50.",
            "explanation_ar": "Equation: 5x − 8 = 42. Undo subtraction: 5x = 42 + 8 = 50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Undo multiplication: x = 50 ÷ 5 = 10 shelves.",
            "explanation_ar": "Undo multiplication: x = 50 ÷ 5 = 10 shelves."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Each of the 10 shelves holds 50 books: total = 10 × 50 = 500.",
            "explanation_ar": "Each of the 10 shelves holds 50 books: total = 10 × 50 = 500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "There are 500 books in the store.",
            "explanation_ar": "There are 500 books in the store."
          }
        ],
        "hint_en": "Solve the equation using inverse operations, then multiply x by 50.",
        "hint_ar": "حل المعادلة باستخدام العمليات العكسية ثم اضرب x في 50.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a balance scale: left side shows 5x − 8, right side shows 42.",
            "explanation_ar": "Draw a balance scale: left side shows 5x − 8, right side shows 42."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 8 weight to both pans: left becomes 5x, right becomes 50.",
            "explanation_ar": "Add 8 weight to both pans: left becomes 5x, right becomes 50."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Split the right pan (50) into 5 equal parts: each part = 10, so x = 10.",
            "explanation_ar": "Split the right pan (50) into 5 equal parts: each part = 10, so x = 10."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Picture 10 shelves, each with a row of 50 books: 10 × 50 = 500 books total.",
            "explanation_ar": "Picture 10 shelves, each with a row of 50 books: 10 × 50 = 500 books total."
          }
        ],
        "hint_en": "Use a balance model to solve for x, then picture x shelves of 50 books.",
        "hint_ar": "استخدم نموذج الميزان لإيجاد x ثم تخيّل x رفاً من 50 كتاباً.",
        "result_en": "The answer is 500",
        "result_ar": "الجواب هو 500"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-004",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A pool in the UAE is filled by a pipe in 4 hours and drained by another pipe in 6 hours. If both are open simultaneously on an empty pool, how many hours does it take to fill the pool completely?",
    "question_ar": "حوض سباحة في الإمارات يُملأ بأنبوب في 4 ساعات ويُفرَّغ بأنبوب آخر في 6 ساعات. إذا فُتح الأنبوبان معاً على الحوض الفارغ، كم ساعة يستغرق امتلاؤه بالكامل؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Fill rate = 1/4 pool per hour. Drain rate = 1/6 pool per hour.",
            "explanation_ar": "Fill rate = 1/4 pool per hour. Drain rate = 1/6 pool per hour."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Net rate = 1/4 − 1/6 = 3/12 − 2/12 = 1/12 pool per hour.",
            "explanation_ar": "Net rate = 1/4 − 1/6 = 3/12 − 2/12 = 1/12 pool per hour."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Time to fill completely = 1 ÷ (1/12) = 12 hours.",
            "explanation_ar": "Time to fill completely = 1 ÷ (1/12) = 12 hours."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The pool fills in 12 hours.",
            "explanation_ar": "The pool fills in 12 hours."
          }
        ],
        "hint_en": "Net rate = fill rate minus drain rate; time = 1 ÷ net rate.",
        "hint_ar": "المعدل الصافي = معدل التعبئة ناقص معدل التفريغ؛ الزمن = 1 ÷ المعدل الصافي.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "In 1 hour: the fill pipe adds 1/4 of the pool, the drain pipe removes 1/6.",
            "explanation_ar": "In 1 hour: the fill pipe adds 1/4 of the pool, the drain pipe removes 1/6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Convert to a common denominator of 12: fill adds 3/12, drain removes 2/12.",
            "explanation_ar": "Convert to a common denominator of 12: fill adds 3/12, drain removes 2/12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net gain per hour = 3/12 − 2/12 = 1/12 of the pool.",
            "explanation_ar": "Net gain per hour = 3/12 − 2/12 = 1/12 of the pool."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Hours to fill = 12 ÷ 1 = 12 hours.",
            "explanation_ar": "Hours to fill = 12 ÷ 1 = 12 hours."
          }
        ],
        "hint_en": "Find the net gain per hour using common denominator 12.",
        "hint_ar": "أوجد الكسب الصافي في الساعة باستخدام المقام المشترك 12.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Divide the pool into 12 equal segments (LCM of 4 and 6).",
            "explanation_ar": "Divide the pool into 12 equal segments (LCM of 4 and 6)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each hour: 3 segments fill in (12 ÷ 4 = 3) and 2 segments drain out (12 ÷ 6 = 2).",
            "explanation_ar": "Each hour: 3 segments fill in (12 ÷ 4 = 3) and 2 segments drain out (12 ÷ 6 = 2)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Net progress per hour = 3 − 2 = 1 segment.",
            "explanation_ar": "Net progress per hour = 3 − 2 = 1 segment."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "To fill all 12 segments: 12 hours.",
            "explanation_ar": "To fill all 12 segments: 12 hours."
          }
        ],
        "hint_en": "Represent the pool as 12 segments and track net gain per hour.",
        "hint_ar": "مثّل الحوض بـ 12 جزءاً وتتبّع الكسب الصافي في الساعة.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-005",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A Brazilian market sells mangoes at 3 for $5. Maria buys enough mangoes to fill 9 boxes, each holding 8 mangoes. How much does she pay in dollars?",
    "question_ar": "سوق برازيلية تبيع المانجو بسعر 3 ثمرات مقابل 5 دولارات. ماريا تشتري ما يكفي لملء 9 صناديق، كل صندوق يحتوي على 8 ثمرات. كم تدفع بالدولار؟",
    "answer": 120,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Total mangoes = 9 boxes × 8 per box = 72 mangoes.",
            "explanation_ar": "Total mangoes = 9 boxes × 8 per box = 72 mangoes."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Groups of 3: 72 ÷ 3 = 24 groups, each costing $5.",
            "explanation_ar": "Groups of 3: 72 ÷ 3 = 24 groups, each costing $5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total cost = 24 × $5 = $120.",
            "explanation_ar": "Total cost = 24 × $5 = $120."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Maria pays $120.",
            "explanation_ar": "Maria pays $120."
          }
        ],
        "hint_en": "Find total mangoes, divide by 3 to get pricing groups, then multiply by $5.",
        "hint_ar": "أوجد إجمالي المانجو واقسمها على 3 للحصول على مجموعات التسعير ثم اضرب في 5 دولارات.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Total mangoes = 9 × 8 = 72.",
            "explanation_ar": "Total mangoes = 9 × 8 = 72."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Price per mango = $5 ÷ 3 = $5/3.",
            "explanation_ar": "Price per mango = $5 ÷ 3 = $5/3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total cost = 72 × (5/3) = (72 × 5) ÷ 3 = 360 ÷ 3 = $120.",
            "explanation_ar": "Total cost = 72 × (5/3) = (72 × 5) ÷ 3 = 360 ÷ 3 = $120."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Maria pays $120.",
            "explanation_ar": "Maria pays $120."
          }
        ],
        "hint_en": "Calculate the unit rate per mango, then multiply by the total number of mangoes.",
        "hint_ar": "احسب سعر الوحدة لكل مانجو ثم اضرب في إجمالي عدد المانجو.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 9 boxes arranged in a 3×3 grid, each box filled with 8 mangoes.",
            "explanation_ar": "Picture 9 boxes arranged in a 3×3 grid, each box filled with 8 mangoes."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Total mangoes: 9 × 8 = 72.",
            "explanation_ar": "Total mangoes: 9 × 8 = 72."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Group the 72 mangoes into bundles of 3: 72 ÷ 3 = 24 bundles, each priced at $5.",
            "explanation_ar": "Group the 72 mangoes into bundles of 3: 72 ÷ 3 = 24 bundles, each priced at $5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total cost: 24 × $5 = $120.",
            "explanation_ar": "Total cost: 24 × $5 = $120."
          }
        ],
        "hint_en": "Visualize the 9 boxes, count total mangoes, then group into $5-priced bundles of 3.",
        "hint_ar": "تخيّل الصناديق التسعة، عدّ إجمالي المانجو ثم جمّعها في حزم تسعيرية من 3.",
        "result_en": "The answer is 120",
        "result_ar": "الجواب هو 120"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-006",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A factory in Germany produces 1,200 parts per day working 8 hours. After a 25% speed upgrade, how many parts does it produce in a 6-hour shift?",
    "question_ar": "مصنع في ألمانيا ينتج 1200 قطعة يومياً خلال 8 ساعات عمل. بعد تحسين السرعة بنسبة 25%، كم قطعة ينتج في وردية مدتها 6 ساعات؟",
    "answer": 1125,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Original rate: 1200 ÷ 8 = 150 parts per hour.",
            "explanation_ar": "Original rate: 1200 ÷ 8 = 150 parts per hour."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After 25% upgrade: 150 × 1.25 = 187.5 parts per hour.",
            "explanation_ar": "After 25% upgrade: 150 × 1.25 = 187.5 parts per hour."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "In 6 hours: 187.5 × 6 = 1125 parts.",
            "explanation_ar": "In 6 hours: 187.5 × 6 = 1125 parts."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The factory produces 1125 parts.",
            "explanation_ar": "The factory produces 1125 parts."
          }
        ],
        "hint_en": "Find hourly rate, apply 25% increase, then multiply by 6.",
        "hint_ar": "أوجد المعدل بالساعة وطبّق الزيادة بنسبة 25% ثم اضرب في 6.",
        "result_en": "The answer is 1125",
        "result_ar": "الجواب هو 1125"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Original hourly rate = 1200 ÷ 8 = 150 parts/hour.",
            "explanation_ar": "Original hourly rate = 1200 ÷ 8 = 150 parts/hour."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25% of 150 = 37.5; new rate = 150 + 37.5 = 187.5 parts/hour.",
            "explanation_ar": "25% of 150 = 37.5; new rate = 150 + 37.5 = 187.5 parts/hour."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Production in 6 hours = 187.5 × 6 = 1125 parts.",
            "explanation_ar": "Production in 6 hours = 187.5 × 6 = 1125 parts."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Answer: 1125 parts.",
            "explanation_ar": "Answer: 1125 parts."
          }
        ],
        "hint_en": "Break into: original rate → add 25% → multiply by 6 hours.",
        "hint_ar": "قسّم إلى: المعدل الأصلي ← أضف 25% ← اضرب في 6 ساعات.",
        "result_en": "The answer is 1125",
        "result_ar": "الجواب هو 1125"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 8 equal bars each representing 150 parts; total = 1200 parts.",
            "explanation_ar": "Draw 8 equal bars each representing 150 parts; total = 1200 parts."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Scale each bar up by 25%: each bar now represents 187.5 parts.",
            "explanation_ar": "Scale each bar up by 25%: each bar now represents 187.5 parts."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Take only 6 of the new bars: 6 × 187.5.",
            "explanation_ar": "Take only 6 of the new bars: 6 × 187.5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "6 × 150 = 900 and 6 × 37.5 = 225; total = 900 + 225 = 1125 parts.",
            "explanation_ar": "6 × 150 = 900 and 6 × 37.5 = 225; total = 900 + 225 = 1125 parts."
          }
        ],
        "hint_en": "Picture hourly production bars, scale each up 25%, then count 6 bars.",
        "hint_ar": "تخيّل أشرطة الإنتاج بالساعة وكبّر كل منها بنسبة 25% ثم عدّ 6 أشرطة.",
        "result_en": "The answer is 1125",
        "result_ar": "الجواب هو 1125"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-007",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A Japanese school has 3 times as many girls as boys. After 24 new students (all girls) enroll, the total becomes 144. How many boys are in the school?",
    "question_ar": "مدرسة يابانية فيها 3 أضعاف عدد البنات مقارنةً بالأولاد. بعد تسجيل 24 طالبة جديدة أصبح المجموع 144. كم عدد الأولاد في المدرسة؟",
    "answer": 30,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Let boys = b; original girls = 3b; original total = 4b.",
            "explanation_ar": "Let boys = b; original girls = 3b; original total = 4b."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After 24 new girls: 4b + 24 = 144.",
            "explanation_ar": "After 24 new girls: 4b + 24 = 144."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "4b = 120, so b = 120 ÷ 4 = 30.",
            "explanation_ar": "4b = 120, so b = 120 ÷ 4 = 30."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There are 30 boys.",
            "explanation_ar": "There are 30 boys."
          }
        ],
        "hint_en": "Set up 4b + 24 = 144 and solve for b.",
        "hint_ar": "كوّن المعادلة 4b + 24 = 144 وحلّها لإيجاد b.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Total before the 24 new students: 144 − 24 = 120 original students.",
            "explanation_ar": "Total before the 24 new students: 144 − 24 = 120 original students."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Girls:Boys ratio = 3:1, meaning 4 equal parts. Each part = 120 ÷ 4 = 30.",
            "explanation_ar": "Girls:Boys ratio = 3:1, meaning 4 equal parts. Each part = 120 ÷ 4 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Boys = 1 part = 30; girls = 3 parts = 90. Verify: 90 = 3 × 30. ✓",
            "explanation_ar": "Boys = 1 part = 30; girls = 3 parts = 90. Verify: 90 = 3 × 30. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "There are 30 boys.",
            "explanation_ar": "There are 30 boys."
          }
        ],
        "hint_en": "Subtract the 24 newcomers first, then apply the 3:1 ratio to the original 120.",
        "hint_ar": "اطرح الـ 24 القادمين الجدد أولاً ثم طبّق النسبة 3:1 على المجموع الأصلي 120.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 4 equal groups: 1 group for boys, 3 groups for girls.",
            "explanation_ar": "Draw 4 equal groups: 1 group for boys, 3 groups for girls."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The 24 extra girls sit outside the original 4 groups; total with extras = 144.",
            "explanation_ar": "The 24 extra girls sit outside the original 4 groups; total with extras = 144."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Original 4 groups = 144 − 24 = 120 students.",
            "explanation_ar": "Original 4 groups = 144 − 24 = 120 students."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Each group = 120 ÷ 4 = 30; the boys group = 30.",
            "explanation_ar": "Each group = 120 ÷ 4 = 30; the boys group = 30."
          }
        ],
        "hint_en": "Draw 4 equal bars for original students; set aside the 24 new girls outside.",
        "hint_ar": "ارسم 4 أشرطة متساوية للطلاب الأصليين وضع الـ 24 البنات الجدد خارجها.",
        "result_en": "The answer is 30",
        "result_ar": "الجواب هو 30"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-008",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A cyclist in France completes a 90 km race. She rides the first 60 km at 20 km/h, then the remaining 30 km at 15 km/h. What is her total race time in hours?",
    "question_ar": "دراجة في فرنسا تكمل سباقاً بطول 90 كم. تقطع أول 60 كم بسرعة 20 كم/ساعة، ثم 30 كم المتبقية بسرعة 15 كم/ساعة. ما هو إجمالي وقت السباق بالساعات؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Time for first 60 km at 20 km/h: 60 ÷ 20 = 3 hours.",
            "explanation_ar": "Time for first 60 km at 20 km/h: 60 ÷ 20 = 3 hours."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Time for remaining 30 km at 15 km/h: 30 ÷ 15 = 2 hours.",
            "explanation_ar": "Time for remaining 30 km at 15 km/h: 30 ÷ 15 = 2 hours."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total time: 3 + 2 = 5 hours.",
            "explanation_ar": "Total time: 3 + 2 = 5 hours."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Race time is 5 hours.",
            "explanation_ar": "Race time is 5 hours."
          }
        ],
        "hint_en": "Apply Time = Distance ÷ Speed to each segment, then add.",
        "hint_ar": "طبّق الزمن = المسافة ÷ السرعة على كل مقطع ثم اجمع.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Segment 1: 60 km at 20 km/h → time = 60 ÷ 20 = 3 hours.",
            "explanation_ar": "Segment 1: 60 km at 20 km/h → time = 60 ÷ 20 = 3 hours."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Segment 2: 30 km at 15 km/h → time = 30 ÷ 15 = 2 hours.",
            "explanation_ar": "Segment 2: 30 km at 15 km/h → time = 30 ÷ 15 = 2 hours."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total distance check: 60 + 30 = 90 km. ✓",
            "explanation_ar": "Total distance check: 60 + 30 = 90 km. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Total time: 3 + 2 = 5 hours.",
            "explanation_ar": "Total time: 3 + 2 = 5 hours."
          }
        ],
        "hint_en": "Split the 90 km course at the 60 km mark and find each segment's time.",
        "hint_ar": "قسّم المضمار البالغ 90 كم عند نقطة 60 كم وأوجد زمن كل مقطع.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a 90 km road with a checkpoint marked at 60 km.",
            "explanation_ar": "Draw a 90 km road with a checkpoint marked at 60 km."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "First section: 60 km ÷ 20 km per hour = 3 one-hour blocks.",
            "explanation_ar": "First section: 60 km ÷ 20 km per hour = 3 one-hour blocks."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Second section: 30 km ÷ 15 km per hour = 2 one-hour blocks.",
            "explanation_ar": "Second section: 30 km ÷ 15 km per hour = 2 one-hour blocks."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Count all blocks: 3 + 2 = 5 total hours.",
            "explanation_ar": "Count all blocks: 3 + 2 = 5 total hours."
          }
        ],
        "hint_en": "Mark the 60 km checkpoint and count one-hour travel blocks for each section.",
        "hint_ar": "ضع علامة عند نقطة 60 كم وعدّ كتل السفر لكل ساعة لكل قسم.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-009",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A store in Mexico sells shirts at a 40% markup over cost. During a sale, the marked price is discounted by 30%. If the original cost of a shirt is $50, what is the sale price in dollars?",
    "question_ar": "متجر في المكسيك يبيع القمصان بهامش ربح 40% فوق التكلفة. خلال تخفيضات يُخفَّض السعر المُعلَن بنسبة 30%. إذا كانت التكلفة الأصلية للقميص 50 دولاراً، ما هو سعر البيع خلال التخفيضات بالدولار؟",
    "answer": 49,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Net multiplier: 1.40 × 0.70 = 0.98.",
            "explanation_ar": "Net multiplier: 1.40 × 0.70 = 0.98."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Sale price = $50 × 0.98 = $49.",
            "explanation_ar": "Sale price = $50 × 0.98 = $49."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: marked price = $50 × 1.40 = $70; discount = $70 × 0.30 = $21; $70 − $21 = $49. ✓",
            "explanation_ar": "Verify: marked price = $50 × 1.40 = $70; discount = $70 × 0.30 = $21; $70 − $21 = $49. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Sale price is $49.",
            "explanation_ar": "Sale price is $49."
          }
        ],
        "hint_en": "Combine the two percentage changes: 1.40 × 0.70 = 0.98, then apply to $50.",
        "hint_ar": "ادمج تغيّرَي النسبة: 1.40 × 0.70 = 0.98 ثم طبّقه على 50 دولاراً.",
        "result_en": "The answer is 49",
        "result_ar": "الجواب هو 49"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Markup: 40% of $50 = $20; marked price = $50 + $20 = $70.",
            "explanation_ar": "Markup: 40% of $50 = $20; marked price = $50 + $20 = $70."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Discount: 30% of $70 = $21; sale price = $70 − $21 = $49.",
            "explanation_ar": "Discount: 30% of $70 = $21; sale price = $70 − $21 = $49."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net effect: +$20 markup then −$21 discount = −$1 overall from cost.",
            "explanation_ar": "Net effect: +$20 markup then −$21 discount = −$1 overall from cost."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Sale price is $49.",
            "explanation_ar": "Sale price is $49."
          }
        ],
        "hint_en": "First calculate the marked-up price at $70, then apply the 30% discount.",
        "hint_ar": "احسب أولاً السعر المرفوع عند 70 دولاراً ثم طبّق الخصم بنسبة 30%.",
        "result_en": "The answer is 49",
        "result_ar": "الجواب هو 49"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Start with a bar showing $50 (cost).",
            "explanation_ar": "Start with a bar showing $50 (cost)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend the bar by 40%: add $20, bar reaches $70.",
            "explanation_ar": "Extend the bar by 40%: add $20, bar reaches $70."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Shrink the $70 bar by 30%: remove $21, bar shows $49.",
            "explanation_ar": "Shrink the $70 bar by 30%: remove $21, bar shows $49."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Final bar length = sale price = $49.",
            "explanation_ar": "Final bar length = sale price = $49."
          }
        ],
        "hint_en": "Visualize cost as a bar that grows 40%, then shrinks 30%.",
        "hint_ar": "تخيّل التكلفة كشريط يكبر 40% ثم يصغر 30%.",
        "result_en": "The answer is 49",
        "result_ar": "الجواب هو 49"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-010",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "In Nigeria, two workers together can paint a house in 6 days. Worker A alone takes 10 days. How many days does Worker B take alone?",
    "question_ar": "في نيجيريا، عاملان معاً يمكنهما طلاء منزل في 6 أيام. العامل A وحده يستغرق 10 أيام. كم يوماً يستغرق العامل B وحده؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined rate = 1/6 house/day; Worker A rate = 1/10 house/day.",
            "explanation_ar": "Combined rate = 1/6 house/day; Worker A rate = 1/10 house/day."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Worker B rate = 1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15.",
            "explanation_ar": "Worker B rate = 1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Worker B's time = 1 ÷ (1/15) = 15 days.",
            "explanation_ar": "Worker B's time = 1 ÷ (1/15) = 15 days."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Worker B takes 15 days alone.",
            "explanation_ar": "Worker B takes 15 days alone."
          }
        ],
        "hint_en": "Subtract Worker A's daily rate from the combined rate to get Worker B's rate.",
        "hint_ar": "اطرح معدل العامل A اليومي من المعدل المشترك للحصول على معدل العامل B.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "In 1 day together: finish 1/6 of the house.",
            "explanation_ar": "In 1 day together: finish 1/6 of the house."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Worker A in 1 day: finishes 1/10 of the house.",
            "explanation_ar": "Worker A in 1 day: finishes 1/10 of the house."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Worker B in 1 day: 1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15.",
            "explanation_ar": "Worker B in 1 day: 1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Worker B needs 15 days to finish the house alone.",
            "explanation_ar": "Worker B needs 15 days to finish the house alone."
          }
        ],
        "hint_en": "Express each worker's contribution as a daily fraction and subtract.",
        "hint_ar": "عبّر عن مساهمة كل عامل ككسر يومي ثم اطرح.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Divide the house into 30 equal sections (LCM of 6 and 10).",
            "explanation_ar": "Divide the house into 30 equal sections (LCM of 6 and 10)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Together in 1 day: finish 30 ÷ 6 = 5 sections.",
            "explanation_ar": "Together in 1 day: finish 30 ÷ 6 = 5 sections."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Worker A in 1 day: finishes 30 ÷ 10 = 3 sections.",
            "explanation_ar": "Worker A in 1 day: finishes 30 ÷ 10 = 3 sections."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Worker B's daily sections: 5 − 3 = 2; days alone = 30 ÷ 2 = 15 days.",
            "explanation_ar": "Worker B's daily sections: 5 − 3 = 2; days alone = 30 ÷ 2 = 15 days."
          }
        ],
        "hint_en": "Use LCM = 30 to divide the house into sections and find Worker B's daily share.",
        "hint_ar": "استخدم م.م.أ = 30 لتقسيم المنزل إلى أقسام وأوجد حصة العامل B اليومية.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-011",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A taxi in Egypt charges a base fare of $3 plus $0.60 per km. After a 20% night surcharge is applied to the total fare, Carlos pays $18. How many km did he travel?",
    "question_ar": "تاكسي في مصر يتقاضى أجرة أساسية 3 دولارات بالإضافة إلى 0.60 دولار لكل كيلومتر. بعد تطبيق رسوم ليلية بنسبة 20%، دفع كارلوس 18 دولاراً. كم كيلومتراً قطع؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Remove the 20% surcharge: pre-surcharge fare = $18 ÷ 1.2 = $15.",
            "explanation_ar": "Remove the 20% surcharge: pre-surcharge fare = $18 ÷ 1.2 = $15."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract base fare: distance cost = $15 − $3 = $12.",
            "explanation_ar": "Subtract base fare: distance cost = $15 − $3 = $12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Distance = $12 ÷ $0.60 per km = 20 km.",
            "explanation_ar": "Distance = $12 ÷ $0.60 per km = 20 km."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Carlos traveled 20 km.",
            "explanation_ar": "Carlos traveled 20 km."
          }
        ],
        "hint_en": "Work backwards: divide by 1.2, subtract $3, then divide by $0.60.",
        "hint_ar": "اعمل عكسياً: اقسم على 1.2، اطرح 3 دولارات، ثم اقسم على 0.60 دولار.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Let km = d. Fare before surcharge = 3 + 0.60d.",
            "explanation_ar": "Let km = d. Fare before surcharge = 3 + 0.60d."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "With 20% surcharge: (3 + 0.60d) × 1.2 = 18.",
            "explanation_ar": "With 20% surcharge: (3 + 0.60d) × 1.2 = 18."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3 + 0.60d = 18 ÷ 1.2 = 15; so 0.60d = 12; d = 12 ÷ 0.60 = 20.",
            "explanation_ar": "3 + 0.60d = 18 ÷ 1.2 = 15; so 0.60d = 12; d = 12 ÷ 0.60 = 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Carlos traveled 20 km.",
            "explanation_ar": "Carlos traveled 20 km."
          }
        ],
        "hint_en": "Set up the equation (3 + 0.60d) × 1.2 = 18 and solve step by step.",
        "hint_ar": "كوّن المعادلة (3 + 0.60d) × 1.2 = 18 وحلّها خطوة بخطوة.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture the $18 total as a bar that includes a 20% extra layer on top.",
            "explanation_ar": "Picture the $18 total as a bar that includes a 20% extra layer on top."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Peel off the 20% layer: $18 ÷ 1.2 = $15 is the base fare bar.",
            "explanation_ar": "Peel off the 20% layer: $18 ÷ 1.2 = $15 is the base fare bar."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The $15 bar = $3 base + distance portion; distance portion = $15 − $3 = $12.",
            "explanation_ar": "The $15 bar = $3 base + distance portion; distance portion = $15 − $3 = $12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "$12 ÷ $0.60 per km = 20 km traveled.",
            "explanation_ar": "$12 ÷ $0.60 per km = 20 km traveled."
          }
        ],
        "hint_en": "Peel off the surcharge, then the base fare, to isolate the distance cost.",
        "hint_ar": "أزل طبقة الرسوم الإضافية ثم الأجرة الأساسية لعزل تكلفة المسافة.",
        "result_en": "The answer is 20",
        "result_ar": "الجواب هو 20"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-012",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A store in Canada has 240 apples. It sells 25% on Monday, then 40% of the remaining apples on Tuesday. How many apples are left?",
    "question_ar": "متجر في كندا يحتوي على 240 تفاحة. يبيع 25% منها يوم الاثنين، ثم 40% من الباقي يوم الثلاثاء. كم تفاحة تبقّت؟",
    "answer": 108,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Net multiplier: keep 75% on Monday then 60% on Tuesday = 0.75 × 0.60 = 0.45.",
            "explanation_ar": "Net multiplier: keep 75% on Monday then 60% on Tuesday = 0.75 × 0.60 = 0.45."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Remaining apples = 240 × 0.45 = 108.",
            "explanation_ar": "Remaining apples = 240 × 0.45 = 108."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 240 × 0.75 = 180; 180 × 0.60 = 108. ✓",
            "explanation_ar": "Verify: 240 × 0.75 = 180; 180 × 0.60 = 108. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "108 apples remain.",
            "explanation_ar": "108 apples remain."
          }
        ],
        "hint_en": "Multiply 240 by the combined retention rate 0.75 × 0.60 = 0.45.",
        "hint_ar": "اضرب 240 في معدل الاحتفاظ المدمج 0.75 × 0.60 = 0.45.",
        "result_en": "The answer is 108",
        "result_ar": "الجواب هو 108"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Monday sales: 25% of 240 = 60 apples sold; remaining = 240 − 60 = 180.",
            "explanation_ar": "Monday sales: 25% of 240 = 60 apples sold; remaining = 240 − 60 = 180."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Tuesday sales: 40% of 180 = 72 apples sold; remaining = 180 − 72 = 108.",
            "explanation_ar": "Tuesday sales: 40% of 180 = 72 apples sold; remaining = 180 − 72 = 108."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total sold: 60 + 72 = 132; check: 132 + 108 = 240. ✓",
            "explanation_ar": "Total sold: 60 + 72 = 132; check: 132 + 108 = 240. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "108 apples are left.",
            "explanation_ar": "108 apples are left."
          }
        ],
        "hint_en": "Calculate the number sold each day and subtract from the running total.",
        "hint_ar": "احسب عدد المباع كل يوم واطرحه من الرصيد الجاري.",
        "result_en": "The answer is 108",
        "result_ar": "الجواب هو 108"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 240 apples in a 12×20 grid.",
            "explanation_ar": "Draw 240 apples in a 12×20 grid."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Monday: shade 25% of the 240 squares = 60 squares; 180 remain unshaded.",
            "explanation_ar": "Monday: shade 25% of the 240 squares = 60 squares; 180 remain unshaded."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Tuesday: shade 40% of the 180 remaining = 72 more squares.",
            "explanation_ar": "Tuesday: shade 40% of the 180 remaining = 72 more squares."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Remaining unshaded squares: 180 − 72 = 108 apples.",
            "explanation_ar": "Remaining unshaded squares: 180 − 72 = 108 apples."
          }
        ],
        "hint_en": "Use a grid of 240 to shade Monday's sales, then shade 40% of what's left.",
        "hint_ar": "استخدم شبكة من 240 لتظليل مبيعات الاثنين ثم ظلّل 40% من المتبقي.",
        "result_en": "The answer is 108",
        "result_ar": "الجواب هو 108"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-013",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A school trip in China uses 7 buses of 45 seats each. If 12 seats are empty, how many students went on the trip?",
    "question_ar": "رحلة مدرسية في الصين تستخدم 7 حافلات سعة كل منها 45 مقعداً. إذا بقي 12 مقعداً فارغاً، كم عدد الطلاب الذين ذهبوا في الرحلة؟",
    "answer": 303,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Total seat capacity: 7 × 45 = 315 seats.",
            "explanation_ar": "Total seat capacity: 7 × 45 = 315 seats."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Occupied seats = 315 − 12 = 303.",
            "explanation_ar": "Occupied seats = 315 − 12 = 303."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Each occupied seat holds one student.",
            "explanation_ar": "Each occupied seat holds one student."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "303 students went on the trip.",
            "explanation_ar": "303 students went on the trip."
          }
        ],
        "hint_en": "Multiply buses by seats per bus, then subtract the 12 empty seats.",
        "hint_ar": "اضرب عدد الحافلات في المقاعد لكل حافلة ثم اطرح المقاعد الـ 12 الفارغة.",
        "result_en": "The answer is 303",
        "result_ar": "الجواب هو 303"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "7 buses × 45 seats = 315 total seats.",
            "explanation_ar": "7 buses × 45 seats = 315 total seats."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "12 seats are unoccupied.",
            "explanation_ar": "12 seats are unoccupied."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Students = 315 − 12 = 303.",
            "explanation_ar": "Students = 315 − 12 = 303."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Verify: 303 students + 12 empty = 315 seats total. ✓",
            "explanation_ar": "Verify: 303 students + 12 empty = 315 seats total. ✓"
          }
        ],
        "hint_en": "Total seats minus empty seats gives the number of students.",
        "hint_ar": "إجمالي المقاعد ناقص المقاعد الفارغة يعطي عدد الطلاب.",
        "result_en": "The answer is 303",
        "result_ar": "الجواب هو 303"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw 7 rows, each row containing 45 squares representing seats.",
            "explanation_ar": "Draw 7 rows, each row containing 45 squares representing seats."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Total squares: 7 × 45 = 315.",
            "explanation_ar": "Total squares: 7 × 45 = 315."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Cross out 12 squares in the last row to represent empty seats.",
            "explanation_ar": "Cross out 12 squares in the last row to represent empty seats."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Count the remaining filled squares: 315 − 12 = 303 students.",
            "explanation_ar": "Count the remaining filled squares: 315 − 12 = 303 students."
          }
        ],
        "hint_en": "Draw 7 rows of 45 seats each, then cross out the 12 empty ones.",
        "hint_ar": "ارسم 7 صفوف من 45 مقعداً ثم شطب الـ 12 الفارغة.",
        "result_en": "The answer is 303",
        "result_ar": "الجواب هو 303"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-014",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A bookstore in Turkey buys books at $12 each and sells them at a 50% markup. During a clearance sale, they offer a buy-2-get-1-free deal. What is the effective price per book in dollars when buying 3?",
    "question_ar": "مكتبة في تركيا تشتري الكتب بـ 12 دولاراً للكتاب وتبيعها بهامش ربح 50%. خلال تصفية المخزون تقدّم عرض 'اشترِ 2 واحصل على 1 مجاناً'. ما هو السعر الفعلي للكتاب الواحد بالدولار عند شراء 3 كتب؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Selling price per book: $12 × 1.50 = $18.",
            "explanation_ar": "Selling price per book: $12 × 1.50 = $18."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Buy-2-get-1-free: pay for 2 books, receive 3.",
            "explanation_ar": "Buy-2-get-1-free: pay for 2 books, receive 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total cost for 3 books = 2 × $18 = $36.",
            "explanation_ar": "Total cost for 3 books = 2 × $18 = $36."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Effective price per book = $36 ÷ 3 = $12.",
            "explanation_ar": "Effective price per book = $36 ÷ 3 = $12."
          }
        ],
        "hint_en": "Find the selling price of $18, then divide the 2-book payment across 3 books.",
        "hint_ar": "أوجد سعر البيع 18 دولاراً ثم قسّم دفع كتابين على 3 كتب.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Marked-up selling price: $12 × 1.50 = $18 per book.",
            "explanation_ar": "Marked-up selling price: $12 × 1.50 = $18 per book."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Under buy-2-get-1-free: customer pays for only 2 of the 3 books.",
            "explanation_ar": "Under buy-2-get-1-free: customer pays for only 2 of the 3 books."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Payment = 2 × $18 = $36 for 3 books received.",
            "explanation_ar": "Payment = 2 × $18 = $36 for 3 books received."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Effective price per book = $36 ÷ 3 = $12.",
            "explanation_ar": "Effective price per book = $36 ÷ 3 = $12."
          }
        ],
        "hint_en": "Pay for 2 at $18 each, divide total by 3 books received.",
        "hint_ar": "ادفع مقابل 2 بسعر 18 دولاراً لكل منها ثم اقسم الإجمالي على 3 كتب.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 3 books on a shelf: 2 with price tags of $18 each and 1 with a FREE tag.",
            "explanation_ar": "Picture 3 books on a shelf: 2 with price tags of $18 each and 1 with a FREE tag."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Total money exchanged: $18 + $18 + $0 = $36.",
            "explanation_ar": "Total money exchanged: $18 + $18 + $0 = $36."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Divide $36 equally among 3 books: $36 ÷ 3 = $12 per book.",
            "explanation_ar": "Divide $36 equally among 3 books: $36 ÷ 3 = $12 per book."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The effective price of $12 equals the original purchase cost.",
            "explanation_ar": "The effective price of $12 equals the original purchase cost."
          }
        ],
        "hint_en": "Visualize 3 books where 1 is free, then split the $36 total equally.",
        "hint_ar": "تخيّل 3 كتب أحدها مجاني ثم قسّم مجموع 36 دولاراً بالتساوي.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-015",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A water tank in South Africa holds 1,800 liters. It is currently 30% full. A pump adds 45 liters per minute. How many minutes until the tank is completely full?",
    "question_ar": "خزان مياه في جنوب أفريقيا سعته 1800 لتر. هو ممتلئ حالياً بنسبة 30%. مضخة تضيف 45 لتراً في الدقيقة. كم دقيقة حتى يمتلئ الخزان بالكامل؟",
    "answer": 28,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Current volume: 30% of 1800 = 0.30 × 1800 = 540 liters.",
            "explanation_ar": "Current volume: 30% of 1800 = 0.30 × 1800 = 540 liters."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Volume still needed: 1800 − 540 = 1260 liters.",
            "explanation_ar": "Volume still needed: 1800 − 540 = 1260 liters."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Time = 1260 ÷ 45 = 28 minutes.",
            "explanation_ar": "Time = 1260 ÷ 45 = 28 minutes."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The tank fills completely in 28 minutes.",
            "explanation_ar": "The tank fills completely in 28 minutes."
          }
        ],
        "hint_en": "Find the remaining volume by subtracting current fill from 1800, then divide by 45.",
        "hint_ar": "أوجد الحجم المتبقي بطرح الكمية الحالية من 1800 ثم اقسم على 45.",
        "result_en": "The answer is 28",
        "result_ar": "الجواب هو 28"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Full capacity = 1800 L; already filled = 30% × 1800 = 540 L.",
            "explanation_ar": "Full capacity = 1800 L; already filled = 30% × 1800 = 540 L."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Remaining to fill = 1800 − 540 = 1260 L.",
            "explanation_ar": "Remaining to fill = 1800 − 540 = 1260 L."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Pump rate = 45 L/min; time = 1260 ÷ 45 = 28 minutes.",
            "explanation_ar": "Pump rate = 45 L/min; time = 1260 ÷ 45 = 28 minutes."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "It takes 28 minutes.",
            "explanation_ar": "It takes 28 minutes."
          }
        ],
        "hint_en": "Calculate the missing liters, then divide by the pump rate of 45 L/min.",
        "hint_ar": "احسب اللترات الناقصة ثم اقسم على معدل المضخة 45 لتر/دقيقة.",
        "result_en": "The answer is 28",
        "result_ar": "الجواب هو 28"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a tank with 1800 L capacity; shade the bottom 30% as already filled (540 L).",
            "explanation_ar": "Draw a tank with 1800 L capacity; shade the bottom 30% as already filled (540 L)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The unshaded upper portion = 1800 − 540 = 1260 L still needed.",
            "explanation_ar": "The unshaded upper portion = 1800 − 540 = 1260 L still needed."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Picture 45-liter blocks stacking into the empty portion.",
            "explanation_ar": "Picture 45-liter blocks stacking into the empty portion."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Number of 45-liter blocks: 1260 ÷ 45 = 28 blocks = 28 minutes.",
            "explanation_ar": "Number of 45-liter blocks: 1260 ÷ 45 = 28 blocks = 28 minutes."
          }
        ],
        "hint_en": "Shade 30% of the tank already filled, then count 45-liter pump blocks to fill the rest.",
        "hint_ar": "ظلّل 30% من الخزان الممتلئ مسبقاً ثم عدّ مكعبات المضخة البالغة 45 لتراً لملء الباقي.",
        "result_en": "The answer is 28",
        "result_ar": "الجواب هو 28"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-016",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A Korean electronics store sells a laptop for $840, which is 5% more than the original price. What was the original price in dollars?",
    "question_ar": "متجر إلكترونيات كوري يبيع حاسوباً محمولاً بـ 840 دولاراً، وهو أكثر بنسبة 5% من السعر الأصلي. ما كان السعر الأصلي بالدولار؟",
    "answer": 800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Let original price = P. The sale price is 5% more: P × 1.05 = 840.",
            "explanation_ar": "Let original price = P. The sale price is 5% more: P × 1.05 = 840."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "P = 840 ÷ 1.05 = 800.",
            "explanation_ar": "P = 840 ÷ 1.05 = 800."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: $800 × 1.05 = $840. ✓",
            "explanation_ar": "Verify: $800 × 1.05 = $840. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Original price was $800.",
            "explanation_ar": "Original price was $800."
          }
        ],
        "hint_en": "Divide the $840 sale price by 1.05 to reverse the 5% increase.",
        "hint_ar": "اقسم سعر البيع 840 دولاراً على 1.05 لعكس الزيادة بنسبة 5%.",
        "result_en": "The answer is 800",
        "result_ar": "الجواب هو 800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Sale price $840 equals 105% of the original price.",
            "explanation_ar": "Sale price $840 equals 105% of the original price."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1% of original = $840 ÷ 105 = $8.",
            "explanation_ar": "1% of original = $840 ÷ 105 = $8."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100% (original price) = $8 × 100 = $800.",
            "explanation_ar": "100% (original price) = $8 × 100 = $800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Original price was $800.",
            "explanation_ar": "Original price was $800."
          }
        ],
        "hint_en": "Think of $840 as 105 parts; find what 1 part equals, then scale up to 100 parts.",
        "hint_ar": "فكّر في 840 دولاراً كـ 105 أجزاء؛ أوجد قيمة جزء واحد ثم ضاعفها لـ 100 جزء.",
        "result_en": "The answer is 800",
        "result_ar": "الجواب هو 800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar of unknown length P (original price).",
            "explanation_ar": "Draw a bar of unknown length P (original price)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Extend the bar by 5%: the extended bar represents $840.",
            "explanation_ar": "Extend the bar by 5%: the extended bar represents $840."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The extension (5% portion) = $840 ÷ 21 = $40 (since 5/105 = 1/21).",
            "explanation_ar": "The extension (5% portion) = $840 ÷ 21 = $40 (since 5/105 = 1/21)."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Original bar = $840 − $40 = $800.",
            "explanation_ar": "Original bar = $840 − $40 = $800."
          }
        ],
        "hint_en": "Visualize $840 as the original bar plus a 5% extension; find the extension to subtract.",
        "hint_ar": "تخيّل 840 دولاراً كالشريط الأصلي زائد امتداد بنسبة 5%؛ أوجد الامتداد لطرحه.",
        "result_en": "The answer is 800",
        "result_ar": "الجواب هو 800"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-017",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "Two trains depart from cities 450 km apart in Argentina, traveling toward each other. Train A travels at 90 km/h and Train B at 60 km/h. In how many hours do they meet?",
    "question_ar": "قطاران ينطلقان من مدينتين في الأرجنتين تبعدان 450 كم عن بعضهما، باتجاه بعضهما. القطار A بسرعة 90 كم/ساعة والقطار B بسرعة 60 كم/ساعة. بعد كم ساعة يلتقيان؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined closing speed = 90 + 60 = 150 km/h.",
            "explanation_ar": "Combined closing speed = 90 + 60 = 150 km/h."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Time to meet = 450 ÷ 150 = 3 hours.",
            "explanation_ar": "Time to meet = 450 ÷ 150 = 3 hours."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Check: Train A covers 90×3=270 km; Train B covers 60×3=180 km; 270+180=450. ✓",
            "explanation_ar": "Check: Train A covers 90×3=270 km; Train B covers 60×3=180 km; 270+180=450. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "They meet after 3 hours.",
            "explanation_ar": "They meet after 3 hours."
          }
        ],
        "hint_en": "Add both speeds to get the combined closing speed, then divide 450 by it.",
        "hint_ar": "اجمع السرعتين للحصول على سرعة الاقتراب المشتركة ثم اقسم 450 عليها.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Each hour: Train A covers 90 km and Train B covers 60 km toward each other.",
            "explanation_ar": "Each hour: Train A covers 90 km and Train B covers 60 km toward each other."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Combined distance closed per hour = 90 + 60 = 150 km.",
            "explanation_ar": "Combined distance closed per hour = 90 + 60 = 150 km."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Hours until the 450 km gap closes: 450 ÷ 150 = 3.",
            "explanation_ar": "Hours until the 450 km gap closes: 450 ÷ 150 = 3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "They meet in 3 hours.",
            "explanation_ar": "They meet in 3 hours."
          }
        ],
        "hint_en": "Find how much distance is closed each hour, then divide the 450 km gap by that.",
        "hint_ar": "أوجد المسافة التي تُقفل كل ساعة ثم اقسم الفجوة البالغة 450 كم عليها.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a 450 km line with Train A at the left end and Train B at the right end.",
            "explanation_ar": "Draw a 450 km line with Train A at the left end and Train B at the right end."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "After hour 1: Train A moves 90 km right; Train B moves 60 km left; gap = 300 km.",
            "explanation_ar": "After hour 1: Train A moves 90 km right; Train B moves 60 km left; gap = 300 km."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After hour 2: gap = 150 km. After hour 3: gap = 0 km — they meet.",
            "explanation_ar": "After hour 2: gap = 150 km. After hour 3: gap = 0 km — they meet."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Meeting point is 270 km from City A and 180 km from City B.",
            "explanation_ar": "Meeting point is 270 km from City A and 180 km from City B."
          }
        ],
        "hint_en": "Track the shrinking gap each hour until it reaches zero.",
        "hint_ar": "تتبّع الفجوة المتقلّصة كل ساعة حتى تصل إلى صفر.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-018",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A market in Morocco buys oranges at $2 per kg and sells them at $3.50 per kg. Weekly expenses are $84. How many kilograms must be sold to earn a net profit of $126?",
    "question_ar": "سوق في المغرب يشتري البرتقال بـ 2 دولار للكيلوغرام ويبيعه بـ 3.50 دولار للكيلوغرام. المصاريف الأسبوعية 84 دولاراً. كم كيلوغراماً يجب بيعه لتحقيق ربح صافٍ قدره 126 دولاراً؟",
    "answer": 140,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Margin per kg = $3.50 − $2.00 = $1.50.",
            "explanation_ar": "Margin per kg = $3.50 − $2.00 = $1.50."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Total gross profit needed = net profit + expenses = $126 + $84 = $210.",
            "explanation_ar": "Total gross profit needed = net profit + expenses = $126 + $84 = $210."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Kg needed = $210 ÷ $1.50 = 140 kg.",
            "explanation_ar": "Kg needed = $210 ÷ $1.50 = 140 kg."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "140 kg must be sold.",
            "explanation_ar": "140 kg must be sold."
          }
        ],
        "hint_en": "Add target profit to expenses to get required gross profit, then divide by $1.50 margin.",
        "hint_ar": "أضف الربح المستهدف إلى المصاريف للحصول على الربح الإجمالي المطلوب ثم اقسم على هامش 1.50 دولار.",
        "result_en": "The answer is 140",
        "result_ar": "الجواب هو 140"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Profit per kg: $3.50 − $2.00 = $1.50.",
            "explanation_ar": "Profit per kg: $3.50 − $2.00 = $1.50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Desired net profit = $126; fixed expenses = $84.",
            "explanation_ar": "Desired net profit = $126; fixed expenses = $84."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Required gross profit = $126 + $84 = $210.",
            "explanation_ar": "Required gross profit = $126 + $84 = $210."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Quantity = $210 ÷ $1.50 = 140 kg.",
            "explanation_ar": "Quantity = $210 ÷ $1.50 = 140 kg."
          }
        ],
        "hint_en": "Gross profit covers both expenses ($84) and net profit ($126), totaling $210.",
        "hint_ar": "الربح الإجمالي يغطي المصاريف (84 دولاراً) والربح الصافي (126 دولاراً) بمجموع 210 دولارات.",
        "result_en": "The answer is 140",
        "result_ar": "الجواب هو 140"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a $210 bar representing the total gross profit needed (expenses $84 + profit $126).",
            "explanation_ar": "Draw a $210 bar representing the total gross profit needed (expenses $84 + profit $126)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Each kg sold contributes $1.50 to this bar.",
            "explanation_ar": "Each kg sold contributes $1.50 to this bar."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count how many $1.50 blocks fit in $210: 210 ÷ 1.50 = 140.",
            "explanation_ar": "Count how many $1.50 blocks fit in $210: 210 ÷ 1.50 = 140."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "140 kg must be sold.",
            "explanation_ar": "140 kg must be sold."
          }
        ],
        "hint_en": "Visualize the $210 gross profit target and fill it with $1.50-per-kg blocks.",
        "hint_ar": "تخيّل هدف الربح الإجمالي البالغ 210 دولارات وملأه بكتل 1.50 دولار لكل كيلو.",
        "result_en": "The answer is 140",
        "result_ar": "الجواب هو 140"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-019",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A car in Italy depreciates by 15% in the first year and 10% in the second year. If the original price was $20,000, what is the car's value after two years in dollars?",
    "question_ar": "سيارة في إيطاليا تنخفض قيمتها بنسبة 15% في السنة الأولى و10% في السنة الثانية. إذا كان السعر الأصلي 20,000 دولار، ما قيمة السيارة بعد سنتين بالدولار؟",
    "answer": 15300,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Combined multiplier: 0.85 × 0.90 = 0.765.",
            "explanation_ar": "Combined multiplier: 0.85 × 0.90 = 0.765."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Value after 2 years = $20,000 × 0.765 = $15,300.",
            "explanation_ar": "Value after 2 years = $20,000 × 0.765 = $15,300."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: $20,000 × 0.85 = $17,000; $17,000 × 0.90 = $15,300. ✓",
            "explanation_ar": "Verify: $20,000 × 0.85 = $17,000; $17,000 × 0.90 = $15,300. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Value after two years is $15,300.",
            "explanation_ar": "Value after two years is $15,300."
          }
        ],
        "hint_en": "Multiply the original price by the combined depreciation factor 0.85 × 0.90.",
        "hint_ar": "اضرب السعر الأصلي في معامل الاستهلاك المدمج 0.85 × 0.90.",
        "result_en": "The answer is 15300",
        "result_ar": "الجواب هو 15300"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Year 1: depreciation = 15% of $20,000 = $3,000; value = $20,000 − $3,000 = $17,000.",
            "explanation_ar": "Year 1: depreciation = 15% of $20,000 = $3,000; value = $20,000 − $3,000 = $17,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Year 2: depreciation = 10% of $17,000 = $1,700; value = $17,000 − $1,700 = $15,300.",
            "explanation_ar": "Year 2: depreciation = 10% of $17,000 = $1,700; value = $17,000 − $1,700 = $15,300."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total depreciation over 2 years: $3,000 + $1,700 = $4,700.",
            "explanation_ar": "Total depreciation over 2 years: $3,000 + $1,700 = $4,700."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Final value: $20,000 − $4,700 = $15,300.",
            "explanation_ar": "Final value: $20,000 − $4,700 = $15,300."
          }
        ],
        "hint_en": "Apply each year's depreciation to the current value, not the original $20,000.",
        "hint_ar": "طبّق استهلاك كل سنة على القيمة الحالية وليس على السعر الأصلي 20,000 دولار.",
        "result_en": "The answer is 15300",
        "result_ar": "الجواب هو 15300"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Draw a bar representing $20,000.",
            "explanation_ar": "Draw a bar representing $20,000."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Year 1: shrink the bar by 15%, removing $3,000; bar now shows $17,000.",
            "explanation_ar": "Year 1: shrink the bar by 15%, removing $3,000; bar now shows $17,000."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Year 2: shrink the $17,000 bar by 10%, removing $1,700; bar shows $15,300.",
            "explanation_ar": "Year 2: shrink the $17,000 bar by 10%, removing $1,700; bar shows $15,300."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Final bar = $15,300 after two depreciation steps.",
            "explanation_ar": "Final bar = $15,300 after two depreciation steps."
          }
        ],
        "hint_en": "Visualize the car's value as a bar shrinking by 15% then 10% over two years.",
        "hint_ar": "تخيّل قيمة السيارة كشريط يتقلّص بنسبة 15% ثم 10% على مدى سنتين.",
        "result_en": "The answer is 15300",
        "result_ar": "الجواب هو 15300"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-practice-word-hard-020",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A rectangular field in Kenya is 3 times as long as it is wide. If the perimeter is 96 meters, what is the area of the field in square meters?",
    "question_ar": "حقل مستطيل في كينيا طوله 3 أضعاف عرضه. إذا كان محيطه 96 متراً، ما مساحة الحقل بالمتر المربع؟",
    "answer": 432,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Let width = w; length = 3w. Perimeter = 2(w + 3w) = 8w.",
            "explanation_ar": "Let width = w; length = 3w. Perimeter = 2(w + 3w) = 8w."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "8w = 96, so w = 12 m; length = 3 × 12 = 36 m.",
            "explanation_ar": "8w = 96, so w = 12 m; length = 3 × 12 = 36 m."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Area = 12 × 36 = 432 m².",
            "explanation_ar": "Area = 12 × 36 = 432 m²."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The area is 432 square meters.",
            "explanation_ar": "The area is 432 square meters."
          }
        ],
        "hint_en": "Express perimeter as 8w = 96, solve for w, then compute length × width.",
        "hint_ar": "عبّر عن المحيط كـ 8w = 96، أوجد w، ثم احسب الطول × العرض.",
        "result_en": "The answer is 432",
        "result_ar": "الجواب هو 432"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Width = w; length = 3w. Perimeter formula: 2(length + width) = 96.",
            "explanation_ar": "Width = w; length = 3w. Perimeter formula: 2(length + width) = 96."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2(3w + w) = 96 → 8w = 96 → w = 12 m.",
            "explanation_ar": "2(3w + w) = 96 → 8w = 96 → w = 12 m."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Length = 3 × 12 = 36 m.",
            "explanation_ar": "Length = 3 × 12 = 36 m."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Area = length × width = 36 × 12 = 432 m².",
            "explanation_ar": "Area = length × width = 36 × 12 = 432 m²."
          }
        ],
        "hint_en": "Use the perimeter equation to find width (12 m), then calculate length (36 m) and area.",
        "hint_ar": "استخدم معادلة المحيط لإيجاد العرض (12 م) ثم احسب الطول (36 م) والمساحة.",
        "result_en": "The answer is 432",
        "result_ar": "الجواب هو 432"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Sketch a rectangle where the long side is visibly 3 times the short side.",
            "explanation_ar": "Sketch a rectangle where the long side is visibly 3 times the short side."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Label all four sides: w, 3w, w, 3w. Sum = 8w = 96; solve w = 12.",
            "explanation_ar": "Label all four sides: w, 3w, w, 3w. Sum = 8w = 96; solve w = 12."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Write dimensions on the diagram: width = 12 m, length = 36 m.",
            "explanation_ar": "Write dimensions on the diagram: width = 12 m, length = 36 m."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Shade the rectangle and compute: 12 × 36 = 432 m².",
            "explanation_ar": "Shade the rectangle and compute: 12 × 36 = 432 m²."
          }
        ],
        "hint_en": "Sketch and label the rectangle, solve for w = 12, then shade and compute area.",
        "hint_ar": "ارسم المستطيل وسمّ أضلاعه وأوجد w = 12 ثم احسب المساحة.",
        "result_en": "The answer is 432",
        "result_ar": "الجواب هو 432"
      }
    },
    "meta": {
      "fun_fact_tag": "word_problem"
    }
  }
];

export const getByCategory = (cat: string) =>
  grade7PracticeBank.filter(p => p.category === cat);

export const getByLevel = (level: 'Easy' | 'Medium' | 'Hard') =>
  grade7PracticeBank.filter(p => p.level === level);

export const getById = (id: string) =>
  grade7PracticeBank.find(p => p.id === id) ?? null;

export const getLightProblems = () =>
  grade7PracticeBank.filter((p): p is LightPracticeProblem => p.bank === 'common');

export const getFullProblems = () =>
  grade7PracticeBank.filter((p): p is FullPracticeProblem => p.bank === 'specific');
