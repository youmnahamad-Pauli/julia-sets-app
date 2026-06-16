import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  ScrollView, TextInput,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, getMethodColor, getMethodEmoji } from '../theme';
import { Problem } from '../data/problems';
import { ChildProfile } from '../hooks/useAppState';
import strings from '../i18n/strings';

type Phase = 'answer' | 'correct_first' | 'wrong_first' | 'steps_guide' | 'correct_second' | 'wrong_final';
type MethodKey = 'vedic' | 'decompose' | 'visualize';

interface Props {
  problem: Problem;
  problemIndex: number;
  totalProblems: number;
  profile: ChildProfile;
  language: 'en' | 'ar';
  onNext: (xpEarned: number, result: 'correctFirst' | 'correctSecond' | 'wrong') => void;
  onBack: () => void;
  forcedMethod?: MethodKey;
  context?: 'challenge' | 'practice' | 'learn';
}

export default function SolveScreen({
  problem, problemIndex, totalProblems, profile,
  language, onNext, onBack, forcedMethod,
}: Props) {
  const t = strings[language];
  const isAr = language === 'ar';
  const [phase, setPhase] = useState<Phase>('answer');
  const [typedAnswer, setTypedAnswer] = useState('');
  const [activeMethod, setActiveMethod] = useState<MethodKey>(forcedMethod ?? profile.chosenMethod);
  const [currentStep, setCurrentStep] = useState(0);
  const [useTextInput] = useState(
    ['decimal', 'fraction', 'algebra', 'ratio'].includes(problem.answerType)
  );

  const methodColor = getMethodColor(activeMethod);
  const methodData = problem.methods[activeMethod];

  // Show Arabic question if available, otherwise English
  const questionText = isAr && problem.question_ar ? problem.question_ar : problem.question;

  // Show context story — only if Arabic has content, or always for English
  const contextStoryText = isAr
    ? (problem.contextStory.ar || '')
    : problem.contextStory.en;
  const hasContextStory = contextStoryText.length > 0;

  const handleNumpad = useCallback((val: string) => {
    if (val === 'del' || val === '⌫') {
      setTypedAnswer(prev => prev.slice(0, -1));
    } else if (val === '±') {
      setTypedAnswer(prev => {
        if (prev === '' || prev === '0') return '-';
        if (prev.startsWith('-')) return prev.slice(1);
        return '-' + prev;
      });
    } else {
      setTypedAnswer(prev => prev + val);
    }
  }, []);

  const normaliseAns = (s: string) => s.replace(/\s/g, '').toLowerCase().replace(/[()]/g, '');

  const checkAnswer = useCallback(() => {
    const ans = normaliseAns(typedAnswer);
    const correct = normaliseAns(problem.answer);
    if (ans === correct) {
      setPhase(phase === 'answer' ? 'correct_first' : 'correct_second');
    } else {
      setPhase(phase === 'answer' ? 'wrong_first' : 'wrong_final');
    }
  }, [typedAnswer, phase, problem.answer]);

  const handleMethodSwitch = (m: MethodKey) => {
    if (forcedMethod) return;
    setActiveMethod(m);
    setPhase('answer');
    setTypedAnswer('');
    setCurrentStep(0);
  };

  const NUMPAD = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '±', '0', '⌫'];
  const progressPct = (problemIndex / totalProblems) * 100;
  const checkLabel = isAr ? '✓ تحقق' : '✓ Check';
  const tryAgainLabel = isAr ? 'حاول مرة أخرى' : 'Now try again!';

  // Filter blank steps
  const validSteps = methodData.steps.filter(step =>
    (step.t && step.t.trim()) || (step.s && step.s.trim()) || (step.v && step.v.trim())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${progressPct}%` as any }]} />
        </View>
        <Text style={styles.headerLabel}>{t.problem} {problemIndex + 1} {t.of} {totalProblems}</Text>
      </View>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

        {hasContextStory && (
          <View style={styles.contextBanner}>
            <Text style={[styles.contextText, isAr && styles.rtlText]}>{contextStoryText}</Text>
          </View>
        )}

        <View style={styles.problemCard}>
          <View style={[styles.methodBadge, { backgroundColor: methodColor }]}>
            <Text style={styles.methodBadgeText}>{getMethodEmoji(activeMethod)} {activeMethod}</Text>
          </View>
          {/* Show Arabic question if available */}
          <Text style={[styles.questionText, isAr && styles.rtlText]}>{questionText}</Text>
          {/* If Arabic translation exists and is different, show English below as reference */}
          {isAr && problem.question_ar && problem.question_ar !== problem.question && (
            <Text style={styles.questionTextEn}>{problem.question}</Text>
          )}
        </View>

        {!forcedMethod && (
          <View style={styles.methodToggle}>
            {(['vedic', 'decompose', 'visualize'] as MethodKey[]).map(m => (
              <TouchableOpacity
                key={m}
                style={[styles.toggleBtn, activeMethod === m && { backgroundColor: getMethodColor(m) }]}
                onPress={() => handleMethodSwitch(m)}
              >
                <Text style={styles.toggleBtnText}>{getMethodEmoji(m)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {phase === 'answer' && (
          <View style={styles.answerSection}>
            <Text style={[styles.answerLabel, isAr && styles.rtlText]}>{t.nowWhatsYourAnswer}</Text>
            {useTextInput ? (
              <TextInput
                style={styles.textAnswerInput}
                value={typedAnswer}
                onChangeText={setTypedAnswer}
                placeholder="?"
                placeholderTextColor={Colors.textLight}
                keyboardType="default"
                autoCorrect={false}
                autoComplete="off"
                autoFocus
              />
            ) : (
              <View style={styles.answerDisplay}>
                <Text style={[
                  styles.answerDisplayText,
                  {
                    color: typedAnswer.startsWith('-') ? Colors.coral : Colors.white,
                    fontSize: typedAnswer.length <= 3 ? 36 : typedAnswer.length <= 5 ? 28 : 22,
                  },
                ]}>
                  {typedAnswer || '?'}
                </Text>
              </View>
            )}
            {!useTextInput && (
              <View style={styles.numpad}>
                {NUMPAD.map(key => (
                  <TouchableOpacity
                    key={key}
                    style={[styles.numKey, key === '±' && { backgroundColor: Colors.coral }]}
                    onPress={() => handleNumpad(key)}
                    activeOpacity={0.7}
                  >
                    <Text style={[styles.numKeyText, key === '±' && { color: Colors.white }]}>{key}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.checkWideBtn} onPress={checkAnswer} activeOpacity={0.8}>
                  <Text style={styles.checkWideBtnText}>{checkLabel}</Text>
                </TouchableOpacity>
              </View>
            )}
            {useTextInput && (
              <TouchableOpacity style={styles.checkBtn} onPress={checkAnswer}>
                <Text style={styles.checkBtnText}>{checkLabel}</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {phase === 'correct_first' && (
          <View style={[styles.feedbackCard, { backgroundColor: Colors.successGreen }]}>
            <Text style={styles.feedbackHeading}>{t.brilliant}</Text>
            <Text style={styles.feedbackAnswer}>{problem.answer}</Text>
            <Text style={styles.feedbackSub}>{t.perfectFirstTry} +10 XP</Text>
            <TouchableOpacity style={styles.nextBtn} onPress={() => onNext(10, 'correctFirst')}>
              <Text style={styles.nextBtnText}>{t.nextProblem}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.showStepsLink} onPress={() => { setCurrentStep(0); setPhase('steps_guide'); }}>
              <Text style={styles.showStepsLinkText}>{t.seeHowItWorks}</Text>
            </TouchableOpacity>
          </View>
        )}

        {phase === 'wrong_first' && (
          <View style={[styles.feedbackCard, { backgroundColor: Colors.aubergine }]}>
            <Text style={styles.feedbackHeading}>{t.notQuite}</Text>
            <Text style={styles.hintText}>{methodData.hint}</Text>
            <TouchableOpacity style={styles.tryAgainBtn} onPress={() => { setTypedAnswer(''); setPhase('answer'); }}>
              <Text style={styles.tryAgainBtnText}>{t.tryAgain}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.showStepsBtn, { backgroundColor: methodColor }]} onPress={() => { setCurrentStep(0); setPhase('steps_guide'); }}>
              <Text style={styles.showStepsBtnText}>{t.showMeSteps}</Text>
            </TouchableOpacity>
          </View>
        )}

        {phase === 'steps_guide' && (
          <View style={styles.stepsSection}>
            {validSteps.slice(0, currentStep + 1).map((step, i) => (
              <View key={i} style={styles.stepCard}>
                <View style={[styles.stepNumBadge, { backgroundColor: methodColor }]}>
                  <Text style={styles.stepNum}>{step.n}</Text>
                </View>
                <View style={styles.stepContent}>
                  {step.t && step.t.trim() !== '' && (
                    <Text style={[styles.stepTitle, { color: methodColor }]}>{step.t}</Text>
                  )}
                  {step.s && step.s.trim() !== '' && (
                    <Text style={styles.stepExplanation}>{step.s}</Text>
                  )}
                  {step.v && step.v.trim() !== '' && (
                    <View style={styles.stepVisual}>
                      <Text style={styles.stepVisualText}>{step.v}</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}

            {currentStep < validSteps.length - 1 ? (
              <TouchableOpacity
                style={[styles.nextStepBtn, { backgroundColor: methodColor }]}
                onPress={() => setCurrentStep(prev => prev + 1)}
              >
                <Text style={styles.nextStepBtnText}>{t.nextStep}</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.afterStepsSection}>
                <Text style={styles.afterStepsLabel}>{tryAgainLabel}</Text>
                {useTextInput ? (
                  <TextInput
                    style={styles.textAnswerInput}
                    value={typedAnswer}
                    onChangeText={setTypedAnswer}
                    placeholder="?"
                    placeholderTextColor={Colors.textLight}
                    keyboardType="default"
                    autoCorrect={false}
                    autoComplete="off"
                  />
                ) : (
                  <View style={styles.answerDisplay}>
                    <Text style={[
                      styles.answerDisplayText,
                      {
                        color: typedAnswer.startsWith('-') ? Colors.coral : Colors.white,
                        fontSize: typedAnswer.length <= 3 ? 36 : typedAnswer.length <= 5 ? 28 : 22,
                      },
                    ]}>
                      {typedAnswer || '?'}
                    </Text>
                  </View>
                )}
                {!useTextInput && (
                  <View style={styles.numpad}>
                    {NUMPAD.map(key => (
                      <TouchableOpacity
                        key={key}
                        style={[styles.numKey, key === '±' && { backgroundColor: Colors.coral }]}
                        onPress={() => handleNumpad(key)}
                        activeOpacity={0.7}
                      >
                        <Text style={[styles.numKeyText, key === '±' && { color: Colors.white }]}>{key}</Text>
                      </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.checkWideBtn} onPress={checkAnswer} activeOpacity={0.8}>
                      <Text style={styles.checkWideBtnText}>{checkLabel}</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {useTextInput && (
                  <TouchableOpacity style={styles.checkBtn} onPress={checkAnswer}>
                    <Text style={styles.checkBtnText}>{checkLabel}</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        )}

        {phase === 'correct_second' && (
          <View style={[styles.feedbackCard, { backgroundColor: Colors.successGreen }]}>
            <Text style={styles.feedbackHeading}>{t.gotIt} +6 XP</Text>
            <Text style={styles.feedbackAnswer}>{problem.answer}</Text>
            <TouchableOpacity style={styles.nextBtn} onPress={() => onNext(6, 'correctSecond')}>
              <Text style={styles.nextBtnText}>{t.nextProblem}</Text>
            </TouchableOpacity>
          </View>
        )}

        {phase === 'wrong_final' && (
          <View style={[styles.feedbackCard, { backgroundColor: Colors.aubergine }]}>
            <Text style={styles.feedbackHeading}>{t.heresToSolveIt}</Text>
            {validSteps.map((step, i) => (
              <View key={i} style={styles.stepCard}>
                <View style={[styles.stepNumBadge, { backgroundColor: methodColor }]}>
                  <Text style={styles.stepNum}>{step.n}</Text>
                </View>
                <View style={styles.stepContent}>
                  {step.t && step.t.trim() !== '' && (
                    <Text style={[styles.stepTitle, { color: methodColor }]}>{step.t}</Text>
                  )}
                  {step.s && step.s.trim() !== '' && (
                    <Text style={[styles.stepExplanation, { color: Colors.white }]}>{step.s}</Text>
                  )}
                  {step.v && step.v.trim() !== '' && (
                    <View style={styles.stepVisual}>
                      <Text style={styles.stepVisualText}>{step.v}</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
            <Text style={styles.finalAnswer}>
              {isAr ? `الجواب: ${problem.answer}` : `Answer: ${problem.answer}`}
            </Text>
            <TouchableOpacity style={styles.nextBtn} onPress={() => onNext(0, 'wrong')}>
              <Text style={styles.nextBtnText}>{t.nextProblem}</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.cream },
  header: {
    backgroundColor: Colors.aubergine,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  backBtn: {},
  backText: { fontFamily: FontFamilies.bodyBold, fontSize: 20, color: Colors.white },
  progressBarBg: {
    flex: 1, height: 6, backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3, overflow: 'hidden',
  },
  progressBarFill: { height: '100%', backgroundColor: Colors.pink, borderRadius: 3 },
  headerLabel: { fontFamily: FontFamilies.body, fontSize: 13, color: Colors.white },
  body: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
  contextBanner: {
    backgroundColor: Colors.aubergineDark,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
  },
  contextText: { fontFamily: FontFamilies.body, fontSize: 14, color: Colors.pink, lineHeight: 22 },
  rtlText: { textAlign: 'right', writingDirection: 'rtl' },
  problemCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    ...Shadow.card,
  },
  methodBadge: {
    alignSelf: 'flex-start',
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: 4,
    marginBottom: Spacing.sm,
  },
  methodBadgeText: { fontFamily: FontFamilies.bodySemiBold, fontSize: 13, color: Colors.white },
  questionText: { fontFamily: FontFamilies.displayBold, fontSize: 26, color: Colors.textDark },
  questionTextEn: {
    fontFamily: FontFamilies.body, fontSize: 13, color: Colors.textLight,
    marginTop: Spacing.xs, fontStyle: 'italic',
  },
  methodToggle: {
    flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.md, justifyContent: 'center',
  },
  toggleBtn: {
    paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full, backgroundColor: Colors.creamWarm,
  },
  toggleBtnText: { fontSize: 20 },
  answerSection: { alignItems: 'center', marginBottom: Spacing.md },
  answerLabel: {
    fontFamily: FontFamilies.bodySemiBold, fontSize: 13, color: Colors.textMid,
    letterSpacing: 1, textTransform: 'uppercase', marginBottom: Spacing.md,
  },
  answerDisplay: {
    width: 180, height: 72, borderRadius: BorderRadius.lg,
    backgroundColor: Colors.aubergine, alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.md, paddingHorizontal: Spacing.sm,
  },
  answerDisplayText: { fontFamily: FontFamilies.displayBold, fontSize: 36, color: Colors.white },
  checkWideBtn: {
    width: 280, height: 56, backgroundColor: Colors.successGreen,
    borderRadius: BorderRadius.md, alignItems: 'center', justifyContent: 'center', ...Shadow.card,
  },
  checkWideBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.white },
  textAnswerInput: {
    backgroundColor: Colors.white, borderRadius: BorderRadius.md, padding: Spacing.md,
    fontFamily: FontFamilies.bodyBold, fontSize: 24, color: Colors.textDark,
    width: '100%', textAlign: 'center', borderWidth: 2, borderColor: Colors.border,
    marginBottom: Spacing.md,
  },
  numpad: {
    flexDirection: 'row', flexWrap: 'wrap', width: 280, gap: Spacing.sm, justifyContent: 'center',
  },
  numKey: {
    width: 80, height: 64, backgroundColor: Colors.white,
    borderRadius: BorderRadius.md, alignItems: 'center', justifyContent: 'center', ...Shadow.card,
  },
  numKeyText: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: Colors.textDark },
  checkBtn: {
    backgroundColor: Colors.successGreen, paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl, borderRadius: BorderRadius.full, marginTop: Spacing.sm,
  },
  checkBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.white },
  feedbackCard: {
    borderRadius: BorderRadius.xl, padding: Spacing.xl, alignItems: 'center',
    marginBottom: Spacing.md, ...Shadow.card,
  },
  feedbackHeading: { fontFamily: FontFamilies.displayBold, fontSize: 26, color: Colors.white, marginBottom: Spacing.sm },
  feedbackAnswer: { fontFamily: FontFamilies.displayBold, fontSize: 40, color: Colors.white, marginBottom: Spacing.sm },
  feedbackSub: { fontFamily: FontFamilies.body, fontSize: 16, color: Colors.white, opacity: 0.9, marginBottom: Spacing.lg },
  hintText: { fontFamily: FontFamilies.body, fontSize: 15, color: Colors.white, opacity: 0.85, textAlign: 'center', marginBottom: Spacing.lg },
  nextBtn: {
    backgroundColor: Colors.white, paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xxl, borderRadius: BorderRadius.full,
    width: '100%', alignItems: 'center', marginTop: Spacing.sm,
  },
  nextBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.textDark },
  showStepsLink: { marginTop: Spacing.sm },
  showStepsLinkText: { fontFamily: FontFamilies.body, fontSize: 14, color: Colors.white, opacity: 0.7, textDecorationLine: 'underline' },
  tryAgainBtn: {
    backgroundColor: Colors.pink, paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xl, borderRadius: BorderRadius.full, marginBottom: Spacing.sm,
  },
  tryAgainBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.aubergine },
  showStepsBtn: { paddingVertical: Spacing.sm, paddingHorizontal: Spacing.xl, borderRadius: BorderRadius.full },
  showStepsBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },
  stepsSection: { marginBottom: Spacing.md },
  stepCard: {
    flexDirection: 'row', backgroundColor: Colors.white, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginBottom: Spacing.sm, gap: Spacing.md, ...Shadow.card,
  },
  stepNumBadge: {
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  stepNum: { fontFamily: FontFamilies.bodyBold, fontSize: 14, color: Colors.white },
  stepContent: { flex: 1 },
  stepTitle: { fontFamily: FontFamilies.bodyBold, fontSize: 15, marginBottom: 2 },
  stepExplanation: { fontFamily: FontFamilies.body, fontSize: 14, color: Colors.textDark, marginBottom: Spacing.xs },
  stepVisual: { backgroundColor: Colors.creamWarm, borderRadius: BorderRadius.sm, padding: Spacing.sm },
  stepVisualText: { fontFamily: FontFamilies.bodySemiBold, fontSize: 14, color: Colors.aubergine },
  nextStepBtn: { paddingVertical: Spacing.md, borderRadius: BorderRadius.full, alignItems: 'center', marginTop: Spacing.sm },
  nextStepBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },
  afterStepsSection: { alignItems: 'center', marginTop: Spacing.md },
  afterStepsLabel: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.textDark, marginBottom: Spacing.sm },
  finalAnswer: { fontFamily: FontFamilies.displayBold, fontSize: 24, color: Colors.amber, marginVertical: Spacing.md },
});
