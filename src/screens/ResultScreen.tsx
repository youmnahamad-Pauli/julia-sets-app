import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';
import { Problem } from '../data/problems';
import strings from '../i18n/strings';
import { getFunFacts, FunFact } from '../services/contentService';

interface ResultItem {
  problem: Problem;
  xpEarned: number;
  result: 'correctFirst' | 'correctSecond' | 'wrong';
}

interface Props {
  results: ResultItem[];
  totalXP: number;
  language: 'en' | 'ar';
  onHome: () => void;
  onViewPower: () => void;
}

export default function ResultScreen({ results, totalXP, language, onHome, onViewPower }: Props) {
  const t = strings[language];
  const [fact, setFact] = useState<FunFact | null>(null);

  // Detect grade from the first problem in the session
  const grade = results[0]?.problem?.grade ?? 4;

  useEffect(() => {
    getFunFacts(language).then(facts => {
      if (facts.length > 0) setFact(facts[Math.floor(Math.random() * facts.length)]);
    });
  }, [grade, language]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>{t.sessionComplete}</Text>

        <View style={styles.xpCircle}>
          <Text style={styles.xpLabel}>XP</Text>
          <Text style={styles.xpAmount}>+{totalXP}</Text>
          <Text style={styles.xpSub}>{t.earnedThisSession}</Text>
        </View>

        <View style={styles.resultsList}>
          {results.map((item, idx) => (
            <View key={idx} style={styles.resultRow}>
              <Text style={styles.resultIcon}>
                {item.result === 'wrong' ? '❌' : item.result === 'correctFirst' ? '✅' : '🟡'}
              </Text>
              <Text style={styles.resultQuestion} numberOfLines={1}>{item.problem.question}</Text>
              <Text style={[styles.resultXP, { color: item.xpEarned > 0 ? Colors.amber : Colors.textLight }]}>
                {item.xpEarned > 0 ? `+${item.xpEarned}` : '0'}
              </Text>
            </View>
          ))}
        </View>

        {/* ── Fun Fact Card ─────────────────────────────────────── */}
        <View style={styles.factCard}>
          <Text style={styles.factTitle}>
            {'💡 ' + t.didYouKnow}
          </Text>
          {fact ? (
            <Text style={[styles.factText, language === 'ar' && styles.factTextRTL]}>
              {fact.text}
            </Text>
          ) : (
            <ActivityIndicator color={Colors.amber} style={{ marginTop: Spacing.sm }} />
          )}
        </View>
        {/* ─────────────────────────────────────────────────────── */}

        <TouchableOpacity style={styles.homeBtn} onPress={onHome} activeOpacity={0.85}>
          <Text style={styles.homeBtnText}>{t.backToHome}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.powerBtn} onPress={onViewPower} activeOpacity={0.85}>
          <Text style={styles.powerBtnText}>{t.viewMyPower}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aubergine,
  },
  inner: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
    alignItems: 'center',
  },
  heading: {
    fontFamily: FontFamilies.displayBold,
    fontSize: 28,
    color: Colors.white,
    marginBottom: Spacing.xl,
    textAlign: 'center',
  },
  xpCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.amber,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
    ...Shadow.strong,
  },
  xpLabel: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 14,
    color: Colors.aubergine,
    opacity: 0.7,
  },
  xpAmount: {
    fontFamily: FontFamilies.displayBold,
    fontSize: 48,
    color: Colors.aubergine,
  },
  xpSub: {
    fontFamily: FontFamilies.body,
    fontSize: 12,
    color: Colors.aubergine,
    opacity: 0.7,
  },
  resultsList: {
    width: '100%',
    backgroundColor: Colors.aubergineDark,
    borderRadius: BorderRadius.xl,
    padding: Spacing.md,
    marginBottom: Spacing.xl,
    ...Shadow.card,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    gap: Spacing.sm,
  },
  resultIcon: {
    fontSize: 20,
  },
  resultQuestion: {
    flex: 1,
    fontFamily: FontFamilies.body,
    fontSize: 15,
    color: Colors.white,
  },
  resultXP: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 15,
  },
  // ── Fun Fact Card styles ──────────────────────────────────────
  factCard: {
    width: '100%',
    backgroundColor: Colors.aubergineDark,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.amber + '55',
    ...Shadow.card,
  },
  factTitle: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 13,
    color: Colors.amber,
    letterSpacing: 0.5,
    marginBottom: Spacing.sm,
    textTransform: 'uppercase',
  },
  factEmoji: {
    fontSize: 36,
    marginBottom: Spacing.sm,
  },
  factText: {
    fontFamily: FontFamilies.body,
    fontSize: 15,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.92,
  },
  factTextRTL: {
    textAlign: 'right',
    writingDirection: 'rtl',
  },
  // ─────────────────────────────────────────────────────────────
  homeBtn: {
    backgroundColor: Colors.white,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xxl,
    borderRadius: BorderRadius.xxl,
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.md,
    ...Shadow.card,
  },
  homeBtnText: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 18,
    color: Colors.aubergine,
  },
  powerBtn: {
    backgroundColor: Colors.lavender,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xxl,
    borderRadius: BorderRadius.xxl,
    width: '100%',
    alignItems: 'center',
    ...Shadow.card,
  },
  powerBtnText: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 18,
    color: Colors.white,
  },
});
