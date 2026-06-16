// Julia Sets — problem types + normalise utility

export interface Step { n: string; t: string; s: string; v: string; }
export interface MethodData { steps: Step[]; hint: string; result: string; }
export interface Problem {
  id: string; grade: number; ibStage: string; strand: string; topic: string;
  skillTags: string[]; learningObjectiveId: string; difficulty: string;
  duplicatePatternKey?: string; contextStory: { en: string; ar: string };
  question: string; question_ar?: string; answer: string; answerType: string;
  methods: { vedic: MethodData; decompose: MethodData; visualize: MethodData; };
  q: string; ans: number; operation: string; display: string;
}

export function normalise(problems: any[]): Problem[] {
  return (problems ?? []).map(p => ({
    ...p,
    q: p.q ?? p.question ?? '',
    ans: p.ans ?? (isNaN(Number(p.answer)) ? 0 : Number(p.answer)),
    operation: p.operation ?? p.strand ?? p.topic ?? '',
    display: p.display ?? p.question ?? '',
  }));
}

export const SAMPLE_PROBLEMS: Problem[] = [];
export const XP_TABLE: Record<number, number> = { 1: 10, 2: 6, 0: 0 };
