import React, { useMemo, useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, getMethodColor } from '../theme';
import {
  PracticeProblem, getPracticeProblems, isFullProblem, PracticeLearnMethod,
} from '../data/practice';
import { LEARN_BANK_BY_GRADE } from '../data/learn';
import { ChildProfile } from '../hooks/useAppState';
import strings from '../i18n/strings';
import MathKeypad from '../components/MathKeypad';

// ── Mascot assets ─────────────────────────────────────────────────────────────
const AMAZON_CELEBRATING   = require('../../assets/mascots/amazon_celebrating.png');
const SHIH_TZU_ENCOURAGING = require('../../assets/mascots/chih_tzu_encouraging.png');
const COLLIE_NEUTRAL       = require('../../assets/mascots/collie_happy_neutral.png');
const COLLIE_ENCOURAGING   = require('../../assets/mascots/collie_encouraging.png');
const COLLIE_CELEBRATING   = require('../../assets/mascots/collie_celebrating.png');

const CATEGORY_AR: Record<string, string> = {
  'Addition':'الجمع','Subtraction':'الطرح','Multiplication':'الضرب','Division':'القسمة',
  'Word Problem':'مسائل كلامية','Count On & Back':'العدّ للأمام والخلف',
  'Double & Half':'المضاعفة والتنصيف','Odd & Even':'الفردي والزوجي',
  'Skip Counting':'العدّ بالتخطي','Fractions of a Whole':'كسور من الكل',
  'Rounding & Estimation':'التقريب والتقدير','Factors & Multiples':'العوامل والمضاعفات',
  'Fractions: Compare & Order':'مقارنة الكسور وترتيبها','Decimals':'الأعشار',
  'Percentages':'النسب المئوية','Integers & Negatives':'الأعداد الصحيحة والسالبة',
  'Ratio & Proportion':'النسبة والتناسب','Algebra':'الجبر',
  'Percentages Advanced':'النسب المئوية المتقدمة','Powers & Roots':'الأسس والجذور',
  'Scientific Notation':'الترميز العلمي',
};
function categoryLabel(c: string, isAr: boolean) { return isAr ? (CATEGORY_AR[c] ?? c) : c; }

export type PracticeResultKind = 'correctFirst' | 'correctSecond' | 'wrong';
export interface PracticeResult { problem: PracticeProblem; result: PracticeResultKind; xp: number; }

interface Props {
  profile: ChildProfile; language: 'en' | 'ar';
  category: string; level: 'Easy' | 'Medium' | 'Hard';
  onDone: (totalXP: number, results: PracticeResult[]) => void;
  onGoToLesson: (learnProblemId: string) => void;
}

const SESSION_SIZE = 10;
const XP: Record<string, number> = { Easy: 10, Medium: 20, Hard: 30 };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = 'answering' | 'wrong1' | 'showSteps' | 'correct';

export default function PracticeSessionScreen({ profile, language, category, level, onDone, onGoToLesson }: Props) {
  const t = strings[language];
  const isAr = language === 'ar';
  const methodColor = getMethodColor(profile.chosenMethod);

  const problems = useMemo(
    () => shuffle(getPracticeProblems(profile.grade, category, level)).slice(0, SESSION_SIZE),
    [profile.grade, category, level]
  );

  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('answering');
  const [input, setInput] = useState('');
  const [results, setResults] = useState<PracticeResult[]>([]);
  const [finished, setFinished] = useState(false);

  const problem = problems[idx];

  const { learnProblemId } = useMemo(() => {
    if (!problem) return { learnProblemId: '' };
    if (isFullProblem(problem)) {
      const lp = (LEARN_BANK_BY_GRADE[profile.grade] ?? []).find(l => l.category === problem.category);
      return { learnProblemId: lp?.id ?? '' };
    }
    const ref = (problem as any).learn_ref as string;
    const lp = (LEARN_BANK_BY_GRADE[profile.grade] ?? []).find(l => l.id === ref);
    return { learnProblemId: lp?.id ?? '' };
  }, [problem?.id, profile.grade, profile.chosenMethod]);

  const advance = useCallback((result: PracticeResultKind, xp: number) => {
    const entry: PracticeResult = { problem, result, xp };
    const next = [...results, entry];
    setResults(next);
    if (idx + 1 < problems.length) {
      setIdx(i => i + 1);
      setInput('');
      setPhase('answering');
    } else {
      setFinished(true);
    }
  }, [problem, results, idx, problems.length]);

  const handleAnswer = useCallback((value: number) => {
    const correct = Math.abs(value - problem.answer) < 0.001;
    if (correct) {
      const xp = phase === 'answering' ? XP[problem.level] : Math.floor(XP[problem.level] / 2);
      const result: PracticeResultKind = phase === 'answering' ? 'correctFirst' : 'correctSecond';
      setPhase('correct');
      setTimeout(() => advance(result, xp), 1200);
    } else if (phase === 'answering') {
      setInput('');
      setPhase('wrong1');
    } else {
      setPhase('showSteps');
    }
  }, [problem, phase, advance]);

  const handleCheck = useCallback(() => {
    const value = parseFloat(input.replace(',', '.').trim());
    if (!isNaN(value)) handleAnswer(value);
  }, [input, handleAnswer]);

  const totalXPSoFar = results.reduce((s, r) => s + r.xp, 0);

  // ── Empty bank ────────────────────────────────────────────────────────────
  if (!problem) {
    return (
      <SafeAreaView style={st.container}>
        <View style={st.center}>
          <Image source={COLLIE_NEUTRAL} style={st.mascotLarge} resizeMode="contain" />
          <Text style={st.emptyTxt}>{t.noneAvailable}</Text>
          <TouchableOpacity style={st.btn} onPress={() => onDone(0, [])} activeOpacity={0.85}>
            <Text style={st.btnTxt}>{t.back}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Session complete ──────────────────────────────────────────────────────
  if (finished) {
    const totalXP = results.reduce((s, r) => s + r.xp, 0);
    const correct = results.filter(r => r.result !== 'wrong').length;
    const acc = results.length > 0 ? Math.round(correct / results.length * 100) : 0;
    return (
      <SafeAreaView style={st.container}>
        <ScrollView contentContainerStyle={st.doneScroll} showsVerticalScrollIndicator={false}>
          {/* Amazon Parrot celebrates full session complete */}
          <Image source={AMAZON_CELEBRATING} style={st.mascotLarge} resizeMode="contain" />
          <Text style={[st.doneTitle, isAr && st.rtl]}>{t.practiceComplete}!</Text>
          <Text style={[st.doneSub, isAr && st.rtl]}>{t.practiceAccomplished}</Text>
          <View style={st.statsRow}>
            <View style={st.statBox}><Text style={st.statVal}>{correct}/{results.length}</Text><Text style={st.statLbl}>{t.score}</Text></View>
            <View style={st.statBox}><Text style={st.statVal}>{acc}%</Text><Text style={st.statLbl}>{t.accuracy}</Text></View>
            <View style={st.statBox}><Text style={st.statVal}>⭐ {totalXP}</Text><Text style={st.statLbl}>{t.xp}</Text></View>
          </View>
          <TouchableOpacity style={[st.btn, { marginTop: Spacing.md, width: '100%' }]} onPress={() => onDone(totalXP, results)} activeOpacity={0.85}>
            <Text style={st.btnTxt}>{t.imdone}</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const showKeypad = phase === 'answering' || phase === 'wrong1';

  return (
    <SafeAreaView style={st.container}>
      {/* ── Header — Collie neutral coaches from the side ── */}
      <View style={st.header}>
        <TouchableOpacity onPress={() => onDone(totalXPSoFar, results)}>
          <Text style={st.backTxt}>{t.back}</Text>
        </TouchableOpacity>
        <Text style={st.headerTitle} numberOfLines={1}>{categoryLabel(category, isAr)}</Text>
        <Image source={COLLIE_NEUTRAL} style={st.mascotHeader} resizeMode="contain" />
        <Text style={st.headerCount}>{idx + 1}/{problems.length}</Text>
      </View>

      <ScrollView style={st.body} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

        {/* Question */}
        <View style={st.qCard}>
          <Text style={st.qLabel}>{t.problem} {idx + 1} {t.of} {problems.length}</Text>
          <Text style={[st.qText, isAr && st.rtl]}>
            {isAr ? problem.question_ar : problem.question_en}
          </Text>
        </View>

        {/* ── Correct — Amazon Parrot wings spread ── */}
        {phase === 'correct' && (
          <View style={[st.feedbackBox, { backgroundColor: Colors.successGreen }]}>
            <Image source={AMAZON_CELEBRATING} style={st.mascotFeedback} resizeMode="contain" />
            <Text style={st.feedbackTxt}>{t.brilliant} ⭐</Text>
          </View>
        )}

        {/* ── Wrong first try — Collie encouraging ── */}
        {phase === 'wrong1' && (
          <View style={[st.feedbackBox, { backgroundColor: Colors.coral }]}>
            <Image source={COLLIE_ENCOURAGING} style={st.mascotFeedback} resizeMode="contain" />
            <Text style={st.feedbackTxt}>{t.notQuite}</Text>
          </View>
        )}

        {/* ── Wrong twice — answer reveal + learn button ── */}
        {phase === 'showSteps' && (
          <View>
            {/* Answer reveal */}
            <View style={st.answerReveal}>
              <Text style={[st.answerRevealLabel, isAr && st.rtl]}>
                {isAr ? 'الإجابة الصحيحة' : 'The correct answer'}
              </Text>
              <Text style={st.answerRevealTxt}>= {problem.answer}</Text>
            </View>

            {/* Go to Learn — Shih Tzu encouraging */}
            {learnProblemId.length > 0 && (
              <TouchableOpacity
                style={st.learnBtn}
                onPress={() => onGoToLesson(learnProblemId)}
                activeOpacity={0.85}
              >
                <Image source={SHIH_TZU_ENCOURAGING} style={st.mascotLearnBtn} resizeMode="contain" />
                <View style={st.learnBtnText}>
                  <Text style={st.learnBtnTitle}>
                    {isAr ? 'تعلّم هذا المفهوم أولاً' : 'Learn this concept first'}
                  </Text>
                  <Text style={st.learnBtnSub}>
                    {isAr ? 'اضغط لمشاهدة الحل خطوة بخطوة ←' : 'See the step-by-step solution →'}
                  </Text>
                </View>
              </TouchableOpacity>
            )}

            {/* Next problem */}
            <TouchableOpacity
              style={[st.btn, { backgroundColor: methodColor }]}
              onPress={() => advance('wrong', 0)}
              activeOpacity={0.85}
            >
              <Text style={st.btnTxt}>{t.nextProblem}</Text>
            </TouchableOpacity>

            {/* End Practice — Collie celebrating good effort */}
            <TouchableOpacity
              style={st.endBtn}
              onPress={() => onDone(totalXPSoFar, results)}
              activeOpacity={0.85}
            >
              <Image source={COLLIE_CELEBRATING} style={st.mascotEndBtn} resizeMode="contain" />
              <Text style={st.endBtnTxt}>
                {isAr ? 'إنهاء التدريب' : 'End Practice'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ height: 16 }} />
      </ScrollView>

      {showKeypad && (
        <MathKeypad
          key={`keypad-${idx}-${phase}`}
          question={problem.question_en}
          currentInput={input}
          onInputChange={setInput}
          onAnswer={handleAnswer}
          onCheck={handleCheck}
          methodColor={methodColor}
          language={language}
        />
      )}
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.cream },

  // Header
  header: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.coral,
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.sm,
    paddingBottom: 0, gap: Spacing.sm, overflow: 'hidden',
  },
  backTxt: { fontFamily: FontFamilies.bodySemiBold, fontSize: 16, color: Colors.white },
  headerTitle: { flex: 1, fontFamily: FontFamilies.bodyBold, fontSize: 17, color: Colors.white, textAlign: 'center' },
  headerCount: { fontFamily: FontFamilies.bodyBold, fontSize: 14, color: Colors.white },
  mascotHeader: { width: 52, height: 52, marginBottom: -4 },

  rtl: { textAlign: 'right' },
  body: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: Spacing.xl },

  // Question card
  qCard: { backgroundColor: Colors.aubergine, borderRadius: BorderRadius.xl, padding: Spacing.lg, marginBottom: Spacing.md, ...Shadow.card },
  qLabel: { fontFamily: FontFamilies.body, fontSize: 12, color: Colors.pink, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  qText: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: Colors.white, lineHeight: 30 },

  // Feedback boxes
  feedbackBox: { borderRadius: BorderRadius.xl, padding: Spacing.md, marginBottom: Spacing.md, alignItems: 'center', gap: Spacing.sm },
  feedbackTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.white, textAlign: 'center' },

  // Mascots
  mascotFeedback: { width: 80, height: 80 },
  mascotLarge: { width: 150, height: 150, marginBottom: Spacing.md },
  mascotLearnBtn: { width: 60, height: 60, flexShrink: 0 },
  mascotEndBtn: { width: 40, height: 40 },

  // Answer reveal
  answerReveal: { backgroundColor: Colors.successGreen, borderRadius: BorderRadius.xl, padding: Spacing.lg, marginBottom: Spacing.md, ...Shadow.card },
  answerRevealLabel: { fontFamily: FontFamilies.bodySemiBold, fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 4 },
  answerRevealTxt: { fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.white },

  // Learn button
  learnBtn: {
    flexDirection: 'row', alignItems: 'center', gap: Spacing.md,
    backgroundColor: Colors.lavender, borderRadius: BorderRadius.xl,
    padding: Spacing.md, marginBottom: Spacing.md, ...Shadow.card,
  },
  learnBtnText: { flex: 1 },
  learnBtnTitle: { fontFamily: FontFamilies.displayBold, fontSize: 17, color: Colors.white },
  learnBtnSub: { fontFamily: FontFamilies.body, fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 2 },

  // Buttons
  btn: { backgroundColor: Colors.aubergine, borderRadius: BorderRadius.xxl, paddingVertical: Spacing.md, alignItems: 'center', marginBottom: Spacing.md, ...Shadow.card },
  btnTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },

  // End practice button
  endBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: Spacing.sm, borderRadius: BorderRadius.xxl, paddingVertical: Spacing.md,
    marginBottom: Spacing.md, borderWidth: 2, borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  endBtnTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 15, color: Colors.textMid },

  // Session complete
  doneScroll: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: Spacing.xl, paddingVertical: Spacing.xl },
  doneTitle: { fontFamily: FontFamilies.displayBold, fontSize: 26, color: Colors.aubergine },
  doneSub: { fontFamily: FontFamilies.body, fontSize: 15, color: Colors.textMid, marginTop: 4, marginBottom: Spacing.lg },
  statsRow: { flexDirection: 'row', gap: Spacing.md, marginBottom: Spacing.xl },
  statBox: { backgroundColor: Colors.white, borderRadius: BorderRadius.lg, padding: Spacing.md, alignItems: 'center', minWidth: 90, ...Shadow.card },
  statVal: { fontFamily: FontFamilies.displayBold, fontSize: 20, color: Colors.aubergine },
  statLbl: { fontFamily: FontFamilies.body, fontSize: 12, color: Colors.textMid, marginTop: 2 },
  emptyTxt: { fontFamily: FontFamilies.body, fontSize: 16, color: Colors.textMid, marginBottom: Spacing.lg },
});
