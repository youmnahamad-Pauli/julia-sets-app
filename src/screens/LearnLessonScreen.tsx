import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, getMethodColor, getMethodEmoji } from '../theme';
import { LearnProblem } from '../data/learn';
import { ChildProfile } from '../hooks/useAppState';
import StepDiagram, { phaseFor } from '../components/StepDiagram';
import strings from '../i18n/strings';

// ── Mascot assets ─────────────────────────────────────────────────────────────
const AFRICAN_GREY_NEUTRAL     = require('../../assets/mascots/african_grey_neutral.png');
const AFRICAN_GREY_POINTING    = require('../../assets/mascots/african_grey_pointing.png');
const AFRICAN_GREY_CELEBRATING = require('../../assets/mascots/african_grey_celebrating.png');

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
function catLabel(cat: string, isAr: boolean) { return isAr ? (CATEGORY_AR[cat] ?? cat) : cat; }
type MethodKey = 'vedic' | 'decompose' | 'visualize';

interface Props {
  lesson: LearnProblem; profile: ChildProfile; language: 'en' | 'ar';
  onBack: () => void; onMarkDone: (id: string) => void;
  onTryItYourself: (lesson: LearnProblem) => void; isViewed: boolean;
}

export default function LearnLessonScreen({ lesson, profile, language, onBack, onMarkDone, onTryItYourself, isViewed }: Props) {
  const t = strings[language];
  const isAr = language === 'ar';
  const [activeMethod, setActiveMethod] = useState<MethodKey>(profile.chosenMethod);
  const [stepIdx, setStepIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const color = getMethodColor(activeMethod);
  const methodData = lesson.methods[activeMethod];
  const steps = methodData.steps;
  const total = steps.length;
  const step = steps[Math.min(stepIdx, total - 1)];
  const phase = phaseFor(stepIdx, total);
  const hint = isAr ? methodData.hint_ar : methodData.hint_en;
  const result = isAr ? methodData.result_ar : methodData.result_en;
  const pct = showResult ? 100 : ((stepIdx + 1) / (total + 1)) * 100;
  const answer = typeof lesson.answer === 'number' ? lesson.answer : parseFloat(String(lesson.answer));

  const switchMethod = (m: MethodKey) => { setActiveMethod(m); setStepIdx(0); setShowHint(false); setShowResult(false); };

  // African Grey expression: pointing when showing hint, celebrating on result, neutral otherwise
  const mascotImg = showResult
    ? AFRICAN_GREY_CELEBRATING
    : showHint
    ? AFRICAN_GREY_POINTING
    : AFRICAN_GREY_NEUTRAL;

  return (
    <SafeAreaView style={s.container}>
      {/* ── Header with African Grey ── */}
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.backTxt}>{t.back}</Text></TouchableOpacity>
        <Text style={s.headerTitle} numberOfLines={1}>{catLabel(lesson.category, isAr)}</Text>
        <Image source={mascotImg} style={s.mascotHeader} resizeMode="contain" />
      </View>

      {/* Method tabs */}
      <View style={s.methodTabs}>
        {(['vedic', 'decompose', 'visualize'] as MethodKey[]).map(m => (
          <TouchableOpacity key={m} style={[s.methodTab, activeMethod === m && { backgroundColor: getMethodColor(m) }]} onPress={() => switchMethod(m)}>
            <Text style={s.methodTabIcon}>{getMethodEmoji(m)}</Text>
            <Text style={[s.methodTabLbl, activeMethod === m && { color: Colors.white }]}>
              {m === 'vedic' ? t.vedicTitle : m === 'decompose' ? t.decomposeTitle : t.visualizeTitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={s.body} showsVerticalScrollIndicator={false}>
        {/* Question card */}
        <View style={s.qCard}>
          <View style={s.badges}>
            <View style={s.gradeBadge}><Text style={s.gradeBadgeTxt}>{t.grade} {lesson.grade}</Text></View>
            <View style={[s.methodBadge, { backgroundColor: color }]}>
              <Text style={s.methodBadgeTxt}>{activeMethod === 'vedic' ? t.vedicTitle : activeMethod === 'decompose' ? t.decomposeTitle : t.visualizeTitle}</Text>
            </View>
          </View>
          <Text style={[s.qTxt, isAr && s.rtl]}>{isAr ? lesson.question_ar : lesson.question_en}</Text>
        </View>

        {/* Progress */}
        <View style={s.progBg}><View style={[s.progFill, { width: `${pct}%` as any, backgroundColor: color }]} /></View>
        <View style={s.dots}>
          {steps.map((_, i) => {
            const done = showResult || i < stepIdx, cur = !showResult && i === stepIdx;
            return (
              <TouchableOpacity key={i} style={[s.dot, done && { backgroundColor: color, opacity: 0.45 }, cur && { backgroundColor: color }]}
                onPress={() => { setShowResult(false); setStepIdx(i); }}>
                <Text style={[s.dotTxt, (done || cur) && { color: Colors.white }]}>{i + 1}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {!showResult ? (
          <>
            <View style={s.stepCard}>
              <View style={s.stepHeader}>
                <View style={[s.stepBadge, { backgroundColor: color }]}><Text style={s.stepBadgeTxt}>{step.step}</Text></View>
                <Text style={[s.stepTitle, isAr && s.rtl]}>{isAr ? step.title_ar : step.title_en}</Text>
              </View>
              <Text style={[s.stepTxt, isAr && s.rtl]}>{isAr ? step.explanation_ar : step.explanation_en}</Text>
              <StepDiagram
                question={lesson.question_en}
                answer={answer}
                category={lesson.category}
                method={activeMethod}
                phase={phase}
                color={color}
              />
              {hint.length > 0 && (
                <TouchableOpacity style={s.hintBox} onPress={() => setShowHint(v => !v)}>
                  <View style={s.hintRow}>
                    {showHint && (
                      <Image source={AFRICAN_GREY_POINTING} style={s.mascotHint} resizeMode="contain" />
                    )}
                    <Text style={[s.hintTxt, isAr && s.rtl]}>
                      💡 {showHint ? hint : (isAr ? 'هل تحتاج تلميحاً؟' : 'Need a hint?')}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <View style={s.navRow}>
              <TouchableOpacity style={[s.navBack, stepIdx === 0 && { opacity: 0.4 }]} disabled={stepIdx === 0} onPress={() => setStepIdx(i => Math.max(0, i - 1))}>
                <Text style={s.navBackTxt}>{t.back}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[s.navNext, { backgroundColor: color }]} onPress={() => { setShowHint(false); if (stepIdx + 1 < total) setStepIdx(stepIdx + 1); else setShowResult(true); }}>
                <Text style={s.navNextTxt}>{stepIdx + 1 < total ? t.nextStep : (isAr ? 'النتيجة ←' : 'See Result →')}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            {/* Result card with African Grey celebrating */}
            <View style={s.ansCard}>
              <Image source={AFRICAN_GREY_CELEBRATING} style={s.mascotResult} resizeMode="contain" />
              <Text style={s.ansTxt}>= {lesson.answer}</Text>
              {result.length > 0 && <Text style={[s.resTxt, isAr && s.rtl]}>{result}</Text>}
              <View style={s.verifyLight}><Text style={s.verifyLightTick}>✓</Text></View>
            </View>
            <View style={s.actionRow}>
              <TouchableOpacity style={[s.tryBtn, { backgroundColor: color }]} onPress={() => onTryItYourself(lesson)}>
                <Text style={s.tryBtnTxt}>{t.tryItYourself}</Text>
              </TouchableOpacity>
              {!isViewed && (
                <TouchableOpacity style={s.doneBtn} onPress={() => onMarkDone(lesson.id)}>
                  <Text style={s.doneBtnTxt}>{t.markAsDone}</Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.cream },
  rtl: { textAlign: 'right' },

  // Header
  header: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.aubergine,
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.md,
    paddingBottom: 0, gap: Spacing.md, overflow: 'hidden',
  },
  backTxt: { fontFamily: FontFamilies.bodySemiBold, fontSize: 16, color: Colors.pink },
  headerTitle: { flex: 1, fontFamily: FontFamilies.bodyBold, fontSize: 17, color: Colors.white, textAlign: 'center' },
  mascotHeader: { width: 64, height: 64, marginBottom: -4 },

  // Method tabs
  methodTabs: { flexDirection: 'row', backgroundColor: Colors.aubergineDark, paddingHorizontal: Spacing.md, paddingBottom: Spacing.sm, gap: Spacing.sm },
  methodTab: { flex: 1, alignItems: 'center', paddingVertical: Spacing.xs, borderRadius: BorderRadius.md, backgroundColor: 'rgba(255,255,255,0.1)' },
  methodTabIcon: { fontSize: 18 },
  methodTabLbl: { fontFamily: FontFamilies.body, fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 1 },

  body: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },

  // Question card
  qCard: { backgroundColor: Colors.aubergine, borderRadius: BorderRadius.xl, padding: Spacing.lg, marginBottom: Spacing.md, ...Shadow.card },
  badges: { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.sm },
  gradeBadge: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: BorderRadius.sm, paddingHorizontal: Spacing.sm, paddingVertical: 3 },
  gradeBadgeTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 11, color: Colors.white },
  methodBadge: { borderRadius: BorderRadius.sm, paddingHorizontal: Spacing.sm, paddingVertical: 3 },
  methodBadgeTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 11, color: Colors.white },
  qTxt: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: Colors.white, lineHeight: 30 },

  // Progress
  progBg: { height: 6, backgroundColor: Colors.border, borderRadius: 3, overflow: 'hidden', marginBottom: Spacing.md },
  progFill: { height: '100%', borderRadius: 3 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: Spacing.md, marginBottom: Spacing.md },
  dot: { width: 34, height: 34, borderRadius: 17, backgroundColor: Colors.white, borderWidth: 1.5, borderColor: Colors.border, alignItems: 'center', justifyContent: 'center' },
  dotTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 14, color: Colors.textMid },

  // Step card
  stepCard: { backgroundColor: Colors.white, borderRadius: BorderRadius.xl, padding: Spacing.lg, marginBottom: Spacing.md, ...Shadow.card },
  stepHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginBottom: Spacing.sm },
  stepBadge: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  stepBadgeTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 15, color: Colors.white },
  stepTitle: { flex: 1, fontFamily: FontFamilies.displayBold, fontSize: 19, color: Colors.textDark },
  stepTxt: { fontFamily: FontFamilies.body, fontSize: 15, color: Colors.textDark, lineHeight: 22 },

  // Hint
  hintBox: { borderWidth: 1.5, borderColor: Colors.border, borderStyle: 'dashed', borderRadius: BorderRadius.md, padding: Spacing.md, marginTop: Spacing.md },
  hintRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  hintTxt: { flex: 1, fontFamily: FontFamilies.body, fontSize: 13, color: Colors.textMid },
  mascotHint: { width: 36, height: 36 },

  // Nav
  navRow: { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.md },
  navBack: { flex: 1, borderRadius: 999, paddingVertical: Spacing.md, alignItems: 'center', borderWidth: 2, borderColor: Colors.border, backgroundColor: Colors.white },
  navBackTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 15, color: Colors.textMid },
  navNext: { flex: 2, borderRadius: 999, paddingVertical: Spacing.md, alignItems: 'center', ...Shadow.card },
  navNextTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },

  // Result card
  ansCard: { backgroundColor: Colors.successGreen, borderRadius: BorderRadius.xl, padding: Spacing.lg, marginBottom: Spacing.md, alignItems: 'center', ...Shadow.card },
  mascotResult: { width: 100, height: 100, marginBottom: Spacing.sm },
  ansTxt: { fontFamily: FontFamilies.displayBold, fontSize: 34, color: Colors.white, marginBottom: 4 },
  resTxt: { fontFamily: FontFamilies.body, fontSize: 14, color: Colors.white, opacity: 0.95, textAlign: 'center' },
  verifyLight: { width: 48, height: 48, borderRadius: 24, borderWidth: 3, borderColor: Colors.white, alignItems: 'center', justifyContent: 'center', marginTop: Spacing.sm },
  verifyLightTick: { fontSize: 24, color: Colors.white },

  // Actions
  actionRow: { gap: Spacing.sm, marginBottom: Spacing.md },
  tryBtn: { paddingVertical: Spacing.md, borderRadius: 999, alignItems: 'center', ...Shadow.card },
  tryBtnTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },
  doneBtn: { paddingVertical: Spacing.md, borderRadius: 999, alignItems: 'center', borderWidth: 2, borderColor: Colors.successGreen },
  doneBtnTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.successGreen },
});
