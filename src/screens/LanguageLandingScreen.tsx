import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, Animated, Dimensions, Image,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';

const { width, height } = Dimensions.get('window');

const LOGO_ICON = require('../../assets/logo_icon.png');

interface Props {
  initialLanguage: 'en' | 'ar';
  onLanguageSelected: (lang: 'en' | 'ar') => void;
}

// ── Julia Set spiral rings ────────────────────────────────────────────────────
function JuliaSpiral() {
  const spirals = [
    { size: 380, rotate: '0deg',  opacity: 0.18, borderRadius: 130 },
    { size: 310, rotate: '15deg', opacity: 0.16, borderRadius: 108 },
    { size: 245, rotate: '30deg', opacity: 0.14, borderRadius: 88  },
    { size: 185, rotate: '45deg', opacity: 0.12, borderRadius: 68  },
    { size: 128, rotate: '60deg', opacity: 0.10, borderRadius: 50  },
    { size: 78,  rotate: '75deg', opacity: 0.08, borderRadius: 32  },
  ];
  return (
    <View style={sp.container} pointerEvents="none">
      {spirals.map((item, i) => (
        <View
          key={i}
          style={[
            sp.ring,
            {
              width: item.size,
              height: item.size,
              borderRadius: item.borderRadius,
              opacity: item.opacity,
              transform: [{ rotate: item.rotate }],
            },
          ]}
        />
      ))}
    </View>
  );
}

const sp = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
    borderWidth: 1.5,
    borderColor: Colors.pink,
  },
});

// ── Floating math symbols ─────────────────────────────────────────────────────
const MATH_SYMBOLS = [
  // Left column
  { sym: 'Σ',  top: '6%',  left: '4%',   size: 32, opacity: 0.22 },
  { sym: '÷',  top: '14%', left: '9%',   size: 20, opacity: 0.16 },
  { sym: '+',  top: '22%', left: '3%',   size: 26, opacity: 0.18 },
  { sym: '=',  top: '31%', left: '11%',  size: 18, opacity: 0.14 },
  { sym: '−',  top: '40%', left: '4%',   size: 24, opacity: 0.17 },
  { sym: 'π',  top: '50%', left: '7%',   size: 28, opacity: 0.20 },
  { sym: '<',  top: '59%', left: '3%',   size: 22, opacity: 0.15 },
  { sym: '√',  top: '67%', left: '10%',  size: 26, opacity: 0.18 },
  { sym: '×',  top: '76%', left: '4%',   size: 20, opacity: 0.16 },
  { sym: '%',  top: '84%', left: '8%',   size: 22, opacity: 0.14 },
  { sym: '∞',  top: '91%', left: '3%',   size: 24, opacity: 0.17 },
  // Right column
  { sym: '×',  top: '5%',  right: '6%',  size: 22, opacity: 0.16 },
  { sym: '√',  top: '13%', right: '3%',  size: 28, opacity: 0.20 },
  { sym: '≠',  top: '21%', right: '9%',  size: 20, opacity: 0.15 },
  { sym: '>',  top: '30%', right: '4%',  size: 24, opacity: 0.17 },
  { sym: '²',  top: '39%', right: '8%',  size: 20, opacity: 0.14 },
  { sym: '∑',  top: '48%', right: '3%',  size: 30, opacity: 0.20 },
  { sym: '±',  top: '57%', right: '7%',  size: 22, opacity: 0.16 },
  { sym: 'π',  top: '66%', right: '4%',  size: 26, opacity: 0.18 },
  { sym: '÷',  top: '74%', right: '9%',  size: 20, opacity: 0.15 },
  { sym: '=',  top: '82%', right: '4%',  size: 22, opacity: 0.17 },
  { sym: '∫',  top: '90%', right: '7%',  size: 28, opacity: 0.16 },
  // Top scatter
  { sym: '+',  top: '3%',  left: '30%',  size: 18, opacity: 0.13 },
  { sym: '−',  top: '4%',  right: '28%', size: 16, opacity: 0.12 },
  // Bottom scatter
  { sym: '×',  top: '94%', left: '28%',  size: 18, opacity: 0.13 },
  { sym: '+',  top: '93%', right: '25%', size: 20, opacity: 0.14 },
];

export default function LanguageLandingScreen({ initialLanguage, onLanguageSelected }: Props) {
  const [selected, setSelected] = useState<'en' | 'ar'>(initialLanguage);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={s.container}>

      {/* ── Julia Set spiral rings ── */}
      <JuliaSpiral />

      {/* ── Floating math symbols ── */}
      {MATH_SYMBOLS.map((m, i) => (
        <Text
          key={i}
          style={[
            s.mathSymbol,
            {
              top: m.top as any,
              left: (m as any).left,
              right: (m as any).right,
              fontSize: m.size,
              opacity: m.opacity,
            },
          ]}
          pointerEvents="none"
        >
          {m.sym}
        </Text>
      ))}

      {/* ── Main content ── */}
      <Animated.View
        style={[
          s.content,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        {/* Logo badge */}
        <View style={s.logoBadge}>
          <Image source={LOGO_ICON} style={s.logoImg} resizeMode="contain" />
          <Text style={s.logoTitle}>Julia Sets</Text>
          <Text style={s.logoSub}>Mental Maths</Text>
        </View>

        {/* Language prompt */}
        <Text style={s.prompt}>Choose your language</Text>
        <Text style={s.promptAr}>اختر لغتك</Text>

        {/* Language cards */}
        <View style={s.langRow}>
          <TouchableOpacity
            style={[s.langCard, selected === 'en' && s.langCardActive]}
            onPress={() => setSelected('en')}
            activeOpacity={0.85}
          >
            <Text style={s.flagEmoji}>🇬🇧</Text>
            <Text style={[s.langLabel, selected === 'en' && s.langLabelActive]}>
              English
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.langCard, selected === 'ar' && s.langCardActive]}
            onPress={() => setSelected('ar')}
            activeOpacity={0.85}
          >
            <Text style={s.flagEmoji}>🇦🇪</Text>
            <Text style={[s.langLabel, selected === 'ar' && s.langLabelActive]}>
              العربية
            </Text>
          </TouchableOpacity>
        </View>

        {/* Continue button — rounded corners (not pill) */}
        <TouchableOpacity
          style={s.continueBtn}
          onPress={() => onLanguageSelected(selected)}
          activeOpacity={0.85}
        >
          <Text style={s.continueTxt}>Continue →</Text>
        </TouchableOpacity>

      </Animated.View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aubergineDark,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mathSymbol: {
    position: 'absolute',
    fontFamily: FontFamilies.displayBold,
    color: Colors.pink,
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    gap: Spacing.lg,
    zIndex: 10,
  },

  // Logo badge
  logoBadge: {
    backgroundColor: Colors.pink,
    borderRadius: 28,
    paddingHorizontal: Spacing.xl * 2,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
    marginBottom: Spacing.md,
    ...Shadow.card,
  },
  logoImg: {
    width: 64,
    height: 64,
    marginBottom: Spacing.sm,
    borderRadius: 16,
  },
  logoTitle: {
    fontFamily: FontFamilies.displayBold,
    fontSize: 32,
    color: Colors.aubergineDark,
    letterSpacing: -0.5,
  },
  logoSub: {
    fontFamily: FontFamilies.body,
    fontSize: 15,
    color: Colors.aubergine,
    opacity: 0.8,
    letterSpacing: 1,
  },

  // Language prompt
  prompt: {
    fontFamily: FontFamilies.displayBold,
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
    marginTop: Spacing.md,
  },
  promptAr: {
    fontFamily: FontFamilies.body,
    fontSize: 17,
    color: Colors.pink,
    textAlign: 'center',
    marginTop: -Spacing.sm,
  },

  // Language cards
  langRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.sm,
  },
  langCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: BorderRadius.xl,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    gap: Spacing.sm,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  langCardActive: {
    backgroundColor: 'rgba(232,168,192,0.15)',
    borderColor: Colors.pink,
    ...Shadow.card,
  },
  flagEmoji: {
    fontSize: 36,
  },
  langLabel: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
  },
  langLabelActive: {
    color: Colors.white,
  },

  // Continue button — rounded corners
  continueBtn: {
    backgroundColor: Colors.pink,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md + 2,
    paddingHorizontal: Spacing.xl * 3,
    marginTop: Spacing.md,
    ...Shadow.card,
  },
  continueTxt: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 18,
    color: Colors.aubergineDark,
    letterSpacing: 0.3,
  },
});
