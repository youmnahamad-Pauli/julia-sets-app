import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, getMethodColor, getMethodEmoji } from '../theme';
import { PracticeProblem, PRACTICE_BANK_BY_GRADE } from '../data/practice';
import { ChildProfile } from '../hooks/useAppState';
import strings from '../i18n/strings';

type Mode = null | 'streak' | 'realWorld' | 'boss' | 'mixed';
type MixedMethod = 'vedic' | 'decompose' | 'visualize';

const normalise = (s: string) => s.replace(/\s/g, '').toLowerCase().replace(/[()]/g, '');

// Shared numpad used by all challenge modes
function NumpadInput({ value, onChange, onCheck, checkLabel }: {
  value: string;
  onChange: (v: string) => void;
  onCheck: () => void;
  checkLabel: string;
}) {
  const KEYS = ['1','2','3','4','5','6','7','8','9','±','0','⌫'];
  const handleKey = (k: string) => {
    if (k === '⌫') { onChange(value.slice(0, -1)); return; }
    if (k === '±') {
      if (value === '' || value === '0') { onChange('-'); return; }
      if (value.startsWith('-')) { onChange(value.slice(1)); return; }
      onChange('-' + value);
      return;
    }
    onChange(value + k);
  };
  return (
    <View style={npStyles.wrapper}>
      <View style={npStyles.display}>
        <Text style={[npStyles.displayText, {
          fontSize: value.length <= 3 ? 36 : value.length <= 5 ? 28 : 22,
          color: value.startsWith('-') ? Colors.coral : Colors.white,
        }]}>{value || '?'}</Text>
      </View>
      <View style={npStyles.grid}>
        {KEYS.map(k => (
          <TouchableOpacity
            key={k}
            style={[npStyles.key, k === '±' && { backgroundColor: Colors.coral }]}
            onPress={() => handleKey(k)}
            activeOpacity={0.7}
          >
            <Text style={[npStyles.keyText, k === '±' && { color: Colors.white }]}>{k}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={npStyles.checkBtn} onPress={onCheck} activeOpacity={0.8}>
          <Text style={npStyles.checkBtnText}>{checkLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const npStyles = StyleSheet.create({
  wrapper: { alignItems: 'center', marginTop: Spacing.md },
  display: {
    width: 200, height: 68, borderRadius: BorderRadius.lg,
    backgroundColor: Colors.aubergineDark, alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.md, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)',
  },
  displayText: { fontFamily: FontFamilies.displayBold, color: Colors.white },
  grid: { flexDirection: 'row', flexWrap: 'wrap', width: 280, gap: Spacing.sm, justifyContent: 'center' },
  key: {
    width: 80, height: 60, backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: BorderRadius.md, alignItems: 'center', justifyContent: 'center',
  },
  keyText: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: Colors.white },
  checkBtn: {
    width: 280, height: 52, backgroundColor: Colors.successGreen,
    borderRadius: BorderRadius.md, alignItems: 'center', justifyContent: 'center', ...Shadow.card,
  },
  checkBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.white },
});

interface Props {
  profile: ChildProfile;
  language: 'en' | 'ar';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onAddXP: (xp: number) => void;
}

export default function ChallengeScreen({ profile, language, activeTab, onTabChange, onAddXP }: Props) {
  const t = strings[language];
  const [mode, setMode] = useState<Mode>(null);

  // Draw problems directly from the new practice bank
  const problems: PracticeProblem[] = PRACTICE_BANK_BY_GRADE[profile.grade] ?? [];
  const isUnlocked = profile.solvedIds.length >= 10;

  const NAV_TABS = [
    { key: 'home',      label: '🏠', name: t.home },
    { key: 'learn',     label: '📖', name: t.learn },
    { key: 'practice',  label: '✏️', name: t.practice },
    { key: 'challenge', label: '🏆', name: t.challenge },
    { key: 'profile',   label: '⚡', name: t.myPower },
  ];

  if (mode === null) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>{t.challengeHeading}</Text>
        </View>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          {[
            { key: 'streak' as Mode,    emoji: '⚡', label: t.streakSprint,       desc: t.streakSprintDesc,   color: Colors.amber,        locked: false },
            { key: 'realWorld' as Mode, emoji: '🌍', label: t.realWorldChallenge, desc: t.realWorldDesc,      color: Colors.successGreen, locked: false },
            { key: 'boss' as Mode,      emoji: '👾', label: t.masteryBoss,        desc: t.masteryBossDesc,    color: Colors.coral,        locked: !isUnlocked },
            { key: 'mixed' as Mode,     emoji: '🎨', label: t.mixedMethods,       desc: t.mixedMethodsDesc,   color: Colors.lavender,     locked: false },
          ].map(c => (
            <TouchableOpacity
              key={c.key ?? 'null'}
              style={[styles.modeCard, c.locked && styles.modeCardLocked]}
              onPress={() => !c.locked && setMode(c.key)}
              activeOpacity={c.locked ? 1 : 0.85}
            >
              <Text style={styles.modeEmoji}>{c.emoji}</Text>
              <View style={styles.modeText}>
                <Text style={[styles.modeLabel, { color: c.color }]}>{c.label}</Text>
                <Text style={styles.modeDesc}>{c.locked ? t.needMoreProblems : c.desc}</Text>
              </View>
              {c.locked ? <Text style={styles.lockIcon}>🔒</Text> : (
                <View style={[styles.arrowBadge, { backgroundColor: c.color }]}>
                  <Text style={styles.arrowText}>→</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
          <View style={{ height: 80 }} />
        </ScrollView>
        <View style={styles.bottomNav}>
          {NAV_TABS.map(tab => (
            <TouchableOpacity key={tab.key} style={styles.navTab} onPress={() => onTabChange(tab.key)} activeOpacity={0.8}>
              <Text style={[styles.navIcon, activeTab === tab.key && styles.navIconActive]}>{tab.label}</Text>
              <Text style={[styles.navLabel, activeTab === tab.key && styles.navLabelActive]}>{tab.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }

  if (mode === 'streak')    return <StreakSprint    problems={problems} profile={profile} t={t} language={language} onBack={() => setMode(null)} onAddXP={onAddXP} />;
  if (mode === 'realWorld') return <RealWorldChallenge problems={problems} profile={profile} t={t} language={language} onBack={() => setMode(null)} onAddXP={onAddXP} />;
  if (mode === 'boss')      return <MasteryBoss      problems={problems} profile={profile} t={t} language={language} onBack={() => setMode(null)} onAddXP={onAddXP} />;
  if (mode === 'mixed')     return <MixedMethods     problems={problems} profile={profile} t={t} language={language} onBack={() => setMode(null)} onAddXP={onAddXP} />;
  return null;
}

// ── Streak Sprint ─────────────────────────────────────────────────────────────
function StreakSprint({ problems, profile, t, language, onBack, onAddXP }: {
  problems: PracticeProblem[]; profile: ChildProfile; t: any; language: string;
  onBack: () => void; onAddXP: (xp: number) => void;
}) {
  const isAr = language === 'ar';
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [xp, setXP] = useState(0);
  const [problemIdx, setProblemIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<null | 'correct' | 'wrong'>(null);
  const [done, setDone] = useState(false);
  const xpRef = useRef(0);
  useEffect(() => { xpRef.current = xp; }, [xp]);
  useEffect(() => { if (done) onAddXP(xpRef.current); }, [done]);

  const pool = problems.filter(p => p.grade === profile.grade);
  const problem = pool[problemIdx % Math.max(1, pool.length)];

  const check = useCallback(() => {
    if (!problem || feedback !== null) return;
    const correct = normalise(String(answer)) === normalise(String(problem.answer));
    if (correct) {
      const ns = streak + 1;
      setStreak(ns);
      if (ns > bestStreak) setBestStreak(ns);
      setXP(prev => prev + 1);
      setFeedback('correct');
    } else {
      setStreak(0);
      setFeedback('wrong');
    }
    setTimeout(() => { setFeedback(null); setAnswer(''); setProblemIdx(prev => prev + 1); }, 1200);
  }, [problem, answer, streak, bestStreak, feedback]);

  if (done) return (
    <SafeAreaView style={[s2.container, { backgroundColor: Colors.aubergine }]}>
      <Text style={s2.doneTitle}>{t.sessionOver ?? '⚡ Session Over!'}</Text>
      <Text style={s2.doneStat}>{t.bestStreak}: {bestStreak}</Text>
      <Text style={s2.doneStat}>XP: +{xp}</Text>
      <TouchableOpacity style={s2.backBtn} onPress={onBack}>
        <Text style={s2.backBtnText}>{t.backToChallenges ?? 'Back to Challenges'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={[s2.container, { backgroundColor: Colors.aubergine }]}>
      <View style={s2.header}>
        <TouchableOpacity onPress={() => setDone(true)}>
          <Text style={s2.stopText}>■ {t.stop}</Text>
        </TouchableOpacity>
        <View style={s2.streakBadge}><Text style={s2.streakText}>🔥 {streak}</Text></View>
      </View>
      {problem && (
        <Text style={s2.question}>
          {isAr && problem.question_ar ? problem.question_ar : problem.question_en}
        </Text>
      )}
      {feedback === 'correct' && <Text style={s2.feedbackOK}>✓ {isAr ? 'صحيح! +1 نقطة' : t.wellDone + ' +1 XP'}</Text>}
      {feedback === 'wrong' && <Text style={s2.feedbackWrong}>✗ {problem?.answer}</Text>}
      <NumpadInput value={answer} onChange={setAnswer} onCheck={check} checkLabel={t.checkAnswer} />
    </SafeAreaView>
  );
}

// ── Real World Challenge ───────────────────────────────────────────────────────
function RealWorldChallenge({ problems, profile, t, language, onBack, onAddXP }: {
  problems: PracticeProblem[]; profile: ChildProfile; t: any; language: string;
  onBack: () => void; onAddXP: (xp: number) => void;
}) {
  const isAr = language === 'ar';
  // Prefer Medium problems for real-world feel; fall back to all
  const pool = problems.filter(p => p.grade === profile.grade && p.level === 'Medium');
  const fallbackPool = problems.filter(p => p.grade === profile.grade);
  const activePool = pool.length >= 5 ? pool : fallbackPool;

  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [xp, setXP] = useState(0);
  const [done, setDone] = useState(false);
  const MAX = 5;
  const problem = activePool[idx % Math.max(1, activePool.length)];

  const check = () => {
    const correct = normalise(String(answer)) === normalise(String(problem?.answer ?? ''));
    if (correct) setXP(prev => prev + 4);
    if (idx + 1 >= MAX) { onAddXP(xp + (correct ? 4 : 0)); setDone(true); }
    else { setIdx(prev => prev + 1); setAnswer(''); }
  };

  if (done) return (
    <SafeAreaView style={[s2.container, { backgroundColor: Colors.aubergine }]}>
      <Text style={s2.doneTitle}>{t.realWorldComplete}</Text>
      <Text style={s2.doneStat}>+{xp} XP</Text>
      <TouchableOpacity style={s2.backBtn} onPress={onBack}>
        <Text style={s2.backBtnText}>{t.backToChallenges ?? 'Back to Challenges'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  if (!problem) return (
    <SafeAreaView style={[s2.container, { backgroundColor: Colors.aubergine }]}>
      <Text style={s2.doneTitle}>{isAr ? 'لا توجد تحديات لصفك بعد!' : t.noneAvailable}</Text>
      <TouchableOpacity style={s2.backBtn} onPress={onBack}><Text style={s2.backBtnText}>{t.back}</Text></TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={[s2.container, { backgroundColor: Colors.aubergine }]}>
      <View style={s2.header}>
        <TouchableOpacity onPress={onBack}><Text style={s2.stopText}>← {t.back}</Text></TouchableOpacity>
        <Text style={s2.headerCenter}>{idx + 1}/{MAX}</Text>
      </View>
      <Text style={[s2.question, isAr && { textAlign: 'right' }]}>
        {isAr && problem.question_ar ? problem.question_ar : problem.question_en}
      </Text>
      <NumpadInput value={answer} onChange={setAnswer} onCheck={check} checkLabel={t.checkAnswer} />
    </SafeAreaView>
  );
}

// ── Mastery Boss ───────────────────────────────────────────────────────────────
function MasteryBoss({ problems, profile, t, language, onBack, onAddXP }: {
  problems: PracticeProblem[]; profile: ChildProfile; t: any; language: string;
  onBack: () => void; onAddXP: (xp: number) => void;
}) {
  const isAr = language === 'ar';
  // Hard problems only for the boss
  const pool = problems.filter(p => p.grade === profile.grade && p.level === 'Hard');
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [health, setHealth] = useState(5);
  const [feedback, setFeedback] = useState<null | 'hit' | 'miss'>(null);
  const [done, setDone] = useState<false | 'win' | 'lose'>(false);
  const problem = pool[idx % Math.max(1, pool.length)];

  const check = useCallback(() => {
    if (!problem || feedback !== null) return;
    const correct = normalise(String(answer)) === normalise(String(problem.answer));
    if (correct) {
      const newHealth = health - 1;
      setHealth(newHealth);
      setFeedback('hit');
      setTimeout(() => {
        setFeedback(null); setAnswer('');
        if (newHealth <= 0) { onAddXP(20); setDone('win'); }
        else setIdx(prev => prev + 1);
      }, 1000);
    } else {
      setFeedback('miss');
      setTimeout(() => { setFeedback(null); setAnswer(''); setDone('lose'); }, 1000);
    }
  }, [problem, answer, health, feedback]);

  if (pool.length === 0) return (
    <SafeAreaView style={[s2.container, { backgroundColor: '#1A0A1A' }]}>
      <Text style={s2.doneTitle}>{isAr ? 'لا توجد مسائل صعبة لصفك بعد!' : t.noneAvailable}</Text>
      <TouchableOpacity style={s2.backBtn} onPress={onBack}><Text style={s2.backBtnText}>{t.back}</Text></TouchableOpacity>
    </SafeAreaView>
  );

  if (done === 'win') return (
    <SafeAreaView style={[s2.container, { backgroundColor: '#1A0A1A' }]}>
      <Text style={[s2.doneTitle, { color: Colors.amber }]}>{t.bossDefeated}</Text>
      <Text style={s2.doneStat}>+20 XP</Text>
      <TouchableOpacity style={s2.backBtn} onPress={onBack}><Text style={s2.backBtnText}>{t.wellDone}</Text></TouchableOpacity>
    </SafeAreaView>
  );

  if (done === 'lose') return (
    <SafeAreaView style={[s2.container, { backgroundColor: '#1A0A1A' }]}>
      <Text style={s2.doneTitle}>{t.tryAgainBoss}</Text>
      <TouchableOpacity style={s2.backBtn} onPress={onBack}><Text style={s2.backBtnText}>{t.back}</Text></TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={[s2.container, { backgroundColor: '#1A0A1A' }]}>
      <View style={s2.header}>
        <TouchableOpacity onPress={onBack}><Text style={s2.stopText}>← {t.back}</Text></TouchableOpacity>
        <Text style={s2.headerCenter}>👾 {t.masteryBoss}</Text>
      </View>
      <View style={s2.healthBar}>
        {Array.from({ length: 5 }).map((_, i) => (
          <View key={i} style={[s2.healthSegment, i < health && { backgroundColor: Colors.coral }]} />
        ))}
      </View>
      {feedback === 'hit' && <Text style={[s2.feedbackOK, { fontSize: 28 }]}>{t.hit}</Text>}
      {feedback === 'miss' && <Text style={[s2.feedbackWrong, { fontSize: 28 }]}>{t.miss}</Text>}
      {problem && (
        <Text style={s2.question}>
          {isAr && problem.question_ar ? problem.question_ar : problem.question_en}
        </Text>
      )}
      <NumpadInput value={answer} onChange={setAnswer} onCheck={check} checkLabel={t.checkAnswer} />
    </SafeAreaView>
  );
}

// ── Mixed Methods ──────────────────────────────────────────────────────────────
function MixedMethods({ problems, profile, t, language, onBack, onAddXP }: {
  problems: PracticeProblem[]; profile: ChildProfile; t: any; language: string;
  onBack: () => void; onAddXP: (xp: number) => void;
}) {
  const isAr = language === 'ar';
  const methods: MixedMethod[] = ['vedic', 'vedic', 'decompose', 'decompose', 'visualize', 'visualize'];
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [xp, setXP] = useState(0);
  const [done, setDone] = useState(false);
  const pool = problems.filter(p => p.grade === profile.grade);
  const problem = pool[idx % Math.max(1, pool.length)];
  const forcedMethod = methods[Math.min(idx, methods.length - 1)];

  const check = () => {
    const correct = normalise(String(answer)) === normalise(String(problem?.answer ?? ''));
    if (correct) setXP(prev => prev + 5);
    if (idx + 1 >= methods.length) { onAddXP(xp + (correct ? 5 : 0) + 15); setDone(true); }
    else { setIdx(prev => prev + 1); setAnswer(''); }
  };

  if (done) return (
    <SafeAreaView style={[s2.container, { backgroundColor: Colors.aubergine }]}>
      <Text style={s2.doneTitle}>{t.allSuperpowers}</Text>
      <Text style={s2.doneStat}>+{xp + 15} XP {isAr ? '(يشمل 15 نقطة إضافية!)' : '(+15 ' + t.xp + '!)'}</Text>
      <TouchableOpacity style={s2.backBtn} onPress={onBack}><Text style={s2.backBtnText}>{t.wellDone}</Text></TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={[s2.container, { backgroundColor: Colors.aubergine }]}>
      <View style={s2.header}>
        <TouchableOpacity onPress={onBack}><Text style={s2.stopText}>← {t.back}</Text></TouchableOpacity>
        <Text style={s2.headerCenter}>{idx + 1}/{methods.length}</Text>
      </View>
      <View style={[s2.methodLabel, { backgroundColor: getMethodColor(forcedMethod) }]}>
        <Text style={s2.methodLabelText}>
          {t.using} {getMethodEmoji(forcedMethod)} {forcedMethod === 'vedic' ? t.vedicTitle : forcedMethod === 'decompose' ? t.decomposeTitle : t.visualizeTitle}
        </Text>
      </View>
      {problem && (
        <Text style={s2.question}>
          {isAr && problem.question_ar ? problem.question_ar : problem.question_en}
        </Text>
      )}
      <NumpadInput value={answer} onChange={setAnswer} onCheck={check} checkLabel={t.checkAnswer} />
    </SafeAreaView>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.cream },
  header: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md },
  heading: { fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.aubergine },
  body: { flex: 1, paddingHorizontal: Spacing.lg },
  modeCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl, padding: Spacing.lg, marginBottom: Spacing.md, gap: Spacing.md, ...Shadow.card,
  },
  modeCardLocked: { opacity: 0.5 },
  modeEmoji: { fontSize: 36 },
  modeText: { flex: 1 },
  modeLabel: { fontFamily: FontFamilies.bodyBold, fontSize: 18 },
  modeDesc: { fontFamily: FontFamilies.body, fontSize: 13, color: Colors.textMid },
  lockIcon: { fontSize: 22 },
  arrowBadge: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  arrowText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.white },
  bottomNav: {
    flexDirection: 'row', backgroundColor: Colors.aubergineDark,
    paddingBottom: 8, paddingTop: 8, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)',
  },
  navTab: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  navIcon: { fontSize: 20, opacity: 0.5 },
  navIconActive: { opacity: 1 },
  navLabel: { fontFamily: FontFamilies.body, fontSize: 10, color: Colors.white, opacity: 0.5, marginTop: 2 },
  navLabelActive: { opacity: 1, color: Colors.pink },
});

const s2 = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.xl },
  stopText: { fontFamily: FontFamilies.bodySemiBold, fontSize: 16, color: Colors.pink },
  headerCenter: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },
  streakBadge: { backgroundColor: Colors.coral, borderRadius: BorderRadius.full, paddingHorizontal: Spacing.md, paddingVertical: 4 },
  streakText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.white },
  question: { fontFamily: FontFamilies.displayBold, fontSize: 26, color: Colors.white, textAlign: 'center', marginBottom: Spacing.md },
  feedbackOK: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: Colors.successGreen, textAlign: 'center', marginBottom: Spacing.sm },
  feedbackWrong: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: Colors.coral, textAlign: 'center', marginBottom: Spacing.sm },
  doneTitle: { fontFamily: FontFamilies.displayBold, fontSize: 26, color: Colors.white, textAlign: 'center', marginTop: Spacing.xxl, marginBottom: Spacing.lg },
  doneStat: { fontFamily: FontFamilies.body, fontSize: 18, color: Colors.white, textAlign: 'center', marginBottom: Spacing.sm },
  backBtn: { backgroundColor: Colors.pink, paddingVertical: Spacing.md, borderRadius: BorderRadius.full, alignItems: 'center', marginTop: Spacing.xl, marginHorizontal: Spacing.xl },
  backBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.aubergine },
  healthBar: { flexDirection: 'row', gap: Spacing.sm, justifyContent: 'center', marginBottom: Spacing.xl },
  healthSegment: { flex: 1, height: 20, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.2)' },
  methodLabel: { alignSelf: 'center', borderRadius: BorderRadius.full, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.xs, marginBottom: Spacing.lg },
  methodLabelText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },
  story: { fontFamily: FontFamilies.body, fontSize: 14, color: Colors.pink, marginBottom: Spacing.md, lineHeight: 22 },
});
