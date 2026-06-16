import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, ScrollView, Image, Modal, Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, getMethodColor, getMethodEmoji } from '../theme';
import { ChildProfile } from '../hooks/useAppState';
import { getFunFactForIndex, getFunFactCount } from '../services/contentService';
import strings from '../i18n/strings';

// ── Mascot assets ─────────────────────────────────────────────────────────────
const SHIH_TZU_NEUTRAL = require('../../assets/mascots/chih_tzu_happy_neutral.png');

interface Props {
  profile: ChildProfile;
  language: 'en' | 'ar';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onAvatarPress: () => void;
  funFactIndex: number;
  onAdvanceFunFact: () => void;
}

function greeting(isAr: boolean): string {
  const h = new Date().getHours();
  if (isAr) {
    if (h < 12) return 'صباح الخير';
    if (h < 17) return 'مساء الخير';
    return 'مساء النور';
  }
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

const TAB_ICONS: Record<string, string> = {
  home: '🏠', learn: '📖', practice: '✏️', challenge: '⚡', profile: '⭐',
};
const TAB_LABELS_EN: Record<string, string> = {
  home: 'Home', learn: 'Learn', practice: 'Practice', challenge: 'Challenge', profile: 'My Power',
};
const TAB_LABELS_AR: Record<string, string> = {
  home: 'الرئيسية', learn: 'تعلّم', practice: 'تدرّب', challenge: 'تحدَّ', profile: 'قوّتي',
};

export default function HomeScreen({ profile, language, activeTab, onTabChange, onAvatarPress, funFactIndex, onAdvanceFunFact }: Props) {
  const isAr = language === 'ar';
  const methodColor = getMethodColor(profile.chosenMethod);
  const streak = profile.streak ?? 0;
  const totalXP = profile.totalXP ?? 0;

  const [showSplash, setShowSplash] = useState(false);
  const [factText, setFactText] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Check if we should show the splash today
  useEffect(() => {
    const checkAndShow = async () => {
      const today = new Date().toDateString();
      const key = `julia_fact_shown_${profile.id}`;
      const lastShown = await AsyncStorage.getItem(key);

      // Load fact regardless
      const fact = await getFunFactForIndex(funFactIndex, profile.grade, language);
      setFactText(fact.text);

      // Only show splash if not yet shown today
      if (lastShown !== today) {
        setShowSplash(true);
        Animated.timing(fadeAnim, {
          toValue: 1, duration: 400, useNativeDriver: true,
        }).start();
        await AsyncStorage.setItem(key, today);
        // Advance to next fact for tomorrow
        const count = await getFunFactCount(language);
        // We don't call onAdvanceFunFact here — we advance AFTER dismiss
      }
    };
    checkAndShow();
  }, [profile.id]);

  const dismissSplash = async () => {
    Animated.timing(fadeAnim, {
      toValue: 0, duration: 300, useNativeDriver: true,
    }).start(async () => {
      setShowSplash(false);
      // Advance index so tomorrow shows a different fact
      onAdvanceFunFact();
    });
  };

  return (
    <SafeAreaView style={s.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>

        {/* ── Header band ── */}
        <View style={s.header}>
          <View style={s.headerText}>
            <Text style={[s.greetingTxt, isAr && s.rtl]}>{greeting(isAr)},</Text>
            <TouchableOpacity onPress={onAvatarPress} activeOpacity={0.8}>
              <Text style={[s.nameTxt, isAr && s.rtl]}>{profile.name} 👋</Text>
            </TouchableOpacity>
          </View>
          <Image source={SHIH_TZU_NEUTRAL} style={s.mascot} resizeMode="contain" />
        </View>

        {/* ── Stats row ── */}
        <View style={s.statsRow}>
          <View style={[s.statCard, { borderColor: Colors.amber }]}>
            <Text style={s.statEmoji}>🔥</Text>
            <Text style={s.statVal}>{streak}</Text>
            <Text style={s.statLbl}>{isAr ? 'يوم متتالي' : 'Day streak'}</Text>
          </View>
          <View style={[s.statCard, { borderColor: Colors.lavender }]}>
            <Text style={s.statEmoji}>⭐</Text>
            <Text style={s.statVal}>{totalXP}</Text>
            <Text style={s.statLbl}>{isAr ? 'نقاط XP' : 'Total XP'}</Text>
          </View>
          <View style={[s.statCard, { borderColor: methodColor }]}>
            <Text style={s.statEmoji}>{getMethodEmoji(profile.chosenMethod)}</Text>
            <Text style={[s.statVal, { color: methodColor, fontSize: 12 }]}>
              {profile.chosenMethod === 'vedic'
                ? (isAr ? 'فيدي' : 'Vedic')
                : profile.chosenMethod === 'decompose'
                ? (isAr ? 'تحليل' : 'Decompose')
                : (isAr ? 'تصوّر' : 'Visualize')}
            </Text>
            <Text style={s.statLbl}>{isAr ? 'أسلوبي' : 'My style'}</Text>
          </View>
        </View>

        {/* ── Quick action cards ── */}
        <Text style={[s.sectionTitle, isAr && s.rtl]}>
          {isAr ? 'ماذا تريد أن تفعل اليوم؟' : 'What would you like to do today?'}
        </Text>

        <TouchableOpacity style={[s.actionCard, { backgroundColor: Colors.aubergine }]}
          onPress={() => onTabChange('learn')} activeOpacity={0.85}>
          <View style={s.actionContent}>
            <Text style={s.actionEmoji}>📖</Text>
            <View style={s.actionText}>
              <Text style={[s.actionTitle, isAr && s.rtl]}>{isAr ? 'تعلّم' : 'Learn'}</Text>
              <Text style={[s.actionSub, isAr && s.rtl]}>
                {isAr ? 'خطوة بخطوة مع شرح كامل' : 'Step-by-step with full explanation'}
              </Text>
            </View>
            <Text style={s.actionArrow}>{isAr ? '←' : '→'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[s.actionCard, { backgroundColor: Colors.coral }]}
          onPress={() => onTabChange('practice')} activeOpacity={0.85}>
          <View style={s.actionContent}>
            <Text style={s.actionEmoji}>✏️</Text>
            <View style={s.actionText}>
              <Text style={[s.actionTitle, isAr && s.rtl]}>{isAr ? 'تدرَّب' : 'Practice'}</Text>
              <Text style={[s.actionSub, isAr && s.rtl]}>
                {isAr ? '١٠ مسائل بمستوى تختاره' : '10 problems at your chosen level'}
              </Text>
            </View>
            <Text style={s.actionArrow}>{isAr ? '←' : '→'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[s.actionCard, { backgroundColor: Colors.amber }]}
          onPress={() => onTabChange('challenge')} activeOpacity={0.85}>
          <View style={s.actionContent}>
            <Text style={s.actionEmoji}>⚡</Text>
            <View style={s.actionText}>
              <Text style={[s.actionTitle, isAr && s.rtl]}>{isAr ? 'تحدَّ نفسك' : 'Challenge'}</Text>
              <Text style={[s.actionSub, isAr && s.rtl]}>
                {isAr ? 'سرعة، تسلسل، إتقان' : 'Speed, streaks, mastery'}
              </Text>
            </View>
            <Text style={s.actionArrow}>{isAr ? '←' : '→'}</Text>
          </View>
        </TouchableOpacity>

        <View style={{ height: 16 }} />
      </ScrollView>

      {/* ── Bottom tab bar ── */}
      <View style={s.tabBar}>
        {['home', 'learn', 'practice', 'challenge', 'profile'].map(tab => {
          const active = activeTab === tab;
          return (
            <TouchableOpacity key={tab} style={s.tabBtn} onPress={() => onTabChange(tab)} activeOpacity={0.7}>
              <Text style={s.tabIcon}>{TAB_ICONS[tab]}</Text>
              <Text style={[s.tabLabel, active && { color: Colors.pink }]}>
                {isAr ? TAB_LABELS_AR[tab] : TAB_LABELS_EN[tab]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ── Daily fact splash overlay ── */}
      {showSplash && (
        <Animated.View style={[s.splashOverlay, { opacity: fadeAnim }]}>
          <TouchableOpacity
            style={s.splashInner}
            onPress={dismissSplash}
            activeOpacity={1}
          >
            {/* Top decoration */}
            <Text style={s.splashDecor}>✦ ✦ ✦</Text>

            {/* Label */}
            <View style={s.splashBadge}>
              <Text style={s.splashBadgeTxt}>
                🧠 {isAr ? 'هل تعلم؟' : "Did you know?"}
              </Text>
            </View>

            {/* Fact text */}
            <Text style={[s.splashFact, isAr && s.rtl]}>{factText}</Text>

            {/* Dismiss hint */}
            <View style={s.splashBtn}>
              <Text style={s.splashBtnTxt}>
                {isAr ? 'رائع! هيّا نبدأ ←' : "Cool! Let's go →"}
              </Text>
            </View>

            <Text style={s.splashTapHint}>
              {isAr ? 'اضغط في أي مكان للمتابعة' : 'Tap anywhere to continue'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.cream },
  scroll: { paddingBottom: 24 },
  rtl: { textAlign: 'right' },

  header: {
    flexDirection: 'row', alignItems: 'flex-end',
    backgroundColor: Colors.aubergine,
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.xl, paddingBottom: 0,
    overflow: 'hidden',
  },
  headerText: { flex: 1, paddingBottom: Spacing.lg },
  greetingTxt: {
    fontFamily: FontFamilies.body, fontSize: 14,
    color: 'rgba(255,255,255,0.55)', marginBottom: 2,
  },
  nameTxt: {
    fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.white,
  },
  mascot: { width: 110, height: 110, marginBottom: -4 },

  statsRow: {
    flexDirection: 'row', gap: Spacing.sm,
    paddingHorizontal: Spacing.lg, paddingVertical: Spacing.lg,
  },
  statCard: {
    flex: 1, backgroundColor: Colors.white, borderRadius: BorderRadius.lg,
    borderWidth: 2, paddingVertical: Spacing.md,
    alignItems: 'center', gap: 2, ...Shadow.card,
  },
  statEmoji: { fontSize: 20 },
  statVal: { fontFamily: FontFamilies.displayBold, fontSize: 18, color: Colors.aubergine },
  statLbl: { fontFamily: FontFamilies.body, fontSize: 11, color: Colors.textMid, textAlign: 'center' },

  sectionTitle: {
    fontFamily: FontFamilies.displayBold, fontSize: 18,
    color: Colors.aubergine, paddingHorizontal: Spacing.lg, marginBottom: Spacing.md,
  },

  actionCard: { marginHorizontal: Spacing.lg, marginBottom: Spacing.md, borderRadius: BorderRadius.xl, ...Shadow.card },
  actionContent: { flexDirection: 'row', alignItems: 'center', padding: Spacing.lg, gap: Spacing.md },
  actionEmoji: { fontSize: 30 },
  actionText: { flex: 1 },
  actionTitle: { fontFamily: FontFamilies.displayBold, fontSize: 20, color: Colors.white },
  actionSub: { fontFamily: FontFamilies.body, fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
  actionArrow: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: 'rgba(255,255,255,0.6)' },

  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.aubergineDark,
    borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.07)',
    paddingBottom: Spacing.sm,
  },
  tabBtn: { flex: 1, paddingVertical: Spacing.sm, alignItems: 'center', gap: 2 },
  tabIcon: { fontSize: 20 },
  tabLabel: {
    fontFamily: FontFamilies.bodyBold, fontSize: 10,
    color: 'rgba(255,255,255,0.35)', letterSpacing: 0.5,
  },

  // ── Splash overlay ──────────────────────────────────────────────────────────
  splashOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.aubergineDark,
    zIndex: 999,
  },
  splashInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl * 2,
    gap: Spacing.xl,
  },
  splashDecor: {
    fontSize: 18,
    color: Colors.lavender,
    letterSpacing: 8,
    opacity: 0.6,
  },
  splashBadge: {
    backgroundColor: Colors.lavender,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  splashBadgeTxt: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 15,
    color: Colors.aubergineDark,
  },
  splashFact: {
    fontFamily: FontFamilies.body,
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 30,
  },
  splashBtn: {
    backgroundColor: Colors.pink,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.xl * 2,
    paddingVertical: Spacing.md,
    marginTop: Spacing.md,
    ...Shadow.card,
  },
  splashBtnTxt: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 16,
    color: Colors.aubergine,
  },
  splashTapHint: {
    fontFamily: FontFamilies.body,
    fontSize: 12,
    color: 'rgba(255,255,255,0.3)',
    marginTop: -Spacing.sm,
  },
});
