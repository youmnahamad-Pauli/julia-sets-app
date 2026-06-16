import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';
import { FUN_FACTS } from '../data/funFacts';
import strings from '../i18n/strings';

interface Props {
  factIndex: number;
  grade?: number;
  language: 'en' | 'ar';
  onContinue: () => void;
  onBack: () => void;
}

// Julia Sets spiral logo — concentric arcs in pink/lavender, compact and clean
function JuliaSpiral({ size = 56 }: { size?: number }) {
  const s = size;
  const c = s / 2;
  // Draw concentric partial circles using thin Text rings
  return (
    <View style={{ width: s, height: s, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ position: 'absolute', fontSize: s * 0.95, lineHeight: s, color: Colors.pink, opacity: 0.85 }}>◯</Text>
      <Text style={{ position: 'absolute', fontSize: s * 0.62, lineHeight: s, color: Colors.lavender, opacity: 0.9 }}>◯</Text>
      <Text style={{ position: 'absolute', fontSize: s * 0.32, lineHeight: s, color: Colors.amber }}>●</Text>
    </View>
  );
}

export default function DailyFunFactScreen({ factIndex, language, onContinue, onBack }: Props) {
  const t = strings[language];
  const isAr = language === 'ar';
  const fact = FUN_FACTS[factIndex % FUN_FACTS.length];
  const factText = isAr && (fact as any).ar ? (fact as any).ar : fact.fact;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backText}>{t.back}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        <Text style={styles.categoryBadge}>{fact.category}</Text>

        <JuliaSpiral size={64} />

        <Text style={[styles.heading, isAr && styles.rtlText]}>
          {isAr ? 'هل تعلم؟' : 'Did you know?'}
        </Text>

        <View style={styles.factCard}>
          <Text style={[styles.factText, isAr && styles.factTextRTL]}>{factText}</Text>
        </View>

        <TouchableOpacity style={styles.continueBtn} onPress={onContinue} activeOpacity={0.85}>
          <Text style={styles.continueBtnText}>{t.letsGo}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.aubergine },
  header: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
  backBtn: { alignSelf: 'flex-start' },
  backText: { fontFamily: FontFamilies.bodySemiBold, fontSize: 16, color: Colors.pink },
  inner: {
    flexGrow: 1, alignItems: 'center', justifyContent: 'center',
    paddingHorizontal: Spacing.lg, paddingVertical: Spacing.xl,
  },
  categoryBadge: {
    fontFamily: FontFamilies.bodySemiBold, fontSize: 12, color: Colors.amber,
    letterSpacing: 1, textTransform: 'uppercase', marginBottom: Spacing.md,
  },
  heading: {
    fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.white,
    textAlign: 'center', marginTop: Spacing.md, marginBottom: Spacing.xl,
  },
  rtlText: { textAlign: 'right' },
  factCard: {
    backgroundColor: Colors.aubergineDark, borderRadius: BorderRadius.xl, padding: Spacing.xl,
    width: '100%', marginBottom: Spacing.xxl, alignItems: 'center', ...Shadow.strong,
  },
  factText: {
    fontFamily: FontFamilies.body, fontSize: 18, color: Colors.white, textAlign: 'center', lineHeight: 28,
  },
  factTextRTL: { textAlign: 'right', writingDirection: 'rtl' },
  continueBtn: {
    backgroundColor: Colors.pink, paddingVertical: Spacing.md, paddingHorizontal: Spacing.xxl,
    borderRadius: BorderRadius.full, ...Shadow.card,
  },
  continueBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.aubergine },
});
