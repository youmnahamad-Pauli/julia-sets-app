import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, MethodColors } from '../theme';
import { Method } from '../hooks/useAppState';
import strings from '../i18n/strings';

interface Props {
  language: 'en' | 'ar';
  onMethodSelected: (method: Method) => void;
  onBack: () => void;
  step?: number;
  totalSteps?: number;
}

const METHODS: Array<{
  key: Method;
  emoji: string;
  titleKey: keyof typeof strings.en;
  descKey: keyof typeof strings.en;
  color: string;
}> = [
  { key: 'vedic', emoji: '⚡', titleKey: 'vedicTitle', descKey: 'vedicDesc', color: MethodColors.vedic },
  { key: 'decompose', emoji: '🔧', titleKey: 'decomposeTitle', descKey: 'decomposeDesc', color: MethodColors.decompose },
  { key: 'visualize', emoji: '👁', titleKey: 'visualizeTitle', descKey: 'visualizeDesc', color: MethodColors.visualize },
];

export default function OnboardingScreen({ language, onMethodSelected, onBack, step = 5, totalSteps = 5 }: Props) {
  const t = strings[language];
  const [selected, setSelected] = useState<Method | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backText}>{t.back}</Text>
        </TouchableOpacity>
        <View style={styles.dots}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <View key={i} style={[styles.dot, i === step - 1 && styles.dotActive]} />
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>{t.howDoYouThink}</Text>

        {METHODS.map(m => (
          <TouchableOpacity
            key={m.key}
            style={[
              styles.methodCard,
              { borderColor: m.color },
              selected === m.key && { backgroundColor: m.color + '22', borderWidth: 3 },
            ]}
            onPress={() => setSelected(m.key)}
            activeOpacity={0.8}
          >
            <Text style={styles.methodEmoji}>{m.emoji}</Text>
            <View style={styles.methodTextBlock}>
              <Text style={[styles.methodTitle, { color: m.color }]}>{t[m.titleKey] as string}</Text>
              <Text style={styles.methodDesc}>{t[m.descKey] as string}</Text>
            </View>
            {selected === m.key && (
              <View style={[styles.checkBadge, { backgroundColor: m.color }]}>
                <Text style={styles.checkText}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        {selected && (
          <TouchableOpacity
            style={[styles.continueBtn, { backgroundColor: METHODS.find(m => m.key === selected)?.color ?? Colors.pink }]}
            onPress={() => selected && onMethodSelected(selected)}
            activeOpacity={0.85}
          >
            <Text style={styles.continueBtnText}>{t.letsGo}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aubergine,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backText: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 16,
    color: Colors.pink,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  dotActive: {
    backgroundColor: Colors.pink,
    width: 20,
  },
  inner: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxl,
  },
  heading: {
    fontFamily: FontFamilies.displayBold,
    fontSize: 26,
    color: Colors.white,
    marginBottom: Spacing.xl,
    textAlign: 'center',
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.aubergineDark,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    borderWidth: 2,
    ...Shadow.card,
  },
  methodEmoji: {
    fontSize: 36,
    marginRight: Spacing.md,
  },
  methodTextBlock: {
    flex: 1,
  },
  methodTitle: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 18,
    marginBottom: 2,
  },
  methodDesc: {
    fontFamily: FontFamilies.body,
    fontSize: 14,
    color: Colors.white,
    opacity: 0.8,
  },
  checkBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    color: Colors.white,
    fontFamily: FontFamilies.bodyBold,
    fontSize: 14,
  },
  continueBtn: {
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    marginTop: Spacing.md,
    ...Shadow.card,
  },
  continueBtnText: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 18,
    color: Colors.white,
  },
});
