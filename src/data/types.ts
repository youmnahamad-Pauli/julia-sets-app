// Julia Sets — shared TypeScript types
// Kept in its own file so grade banks can import from here
// without creating circular dependencies through problems.ts

export interface Step {
  n: string;
  t: string;
  s: string;
  v: string;
}

export interface MethodData {
  steps: Step[];
  hint: string;
  result: string;
}

export interface Problem {
  id: string;
  grade: number;
  ibStage: string;
  strand: string;
  topic: string;
  skillTags: string[];
  learningObjectiveId: string;
  difficulty: string;
  duplicatePatternKey?: string;
  contextStory: { en: string; ar: string };
  question: string;
  answer: string;
  answerType: string;
  methods: {
    vedic: MethodData;
    decompose: MethodData;
    visualize: MethodData;
  };
  // Legacy compat fields — populated by normalise()
  q?: string;
  ans?: number;
  operation?: string;
  display?: string;
}
