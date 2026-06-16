import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Share,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, getMethodColor, getMethodEmoji } from '../theme';
import { ChildProfile, MasteryRecord } from '../hooks/useAppState';
import { LEARN_BANK_BY_GRADE, getCategoriesForGrade } from '../data/learn';
import { CATEGORY_META, categoryLabel } from './LearnScreen';
import strings from '../i18n/strings';

interface Props {
  profile: ChildProfile;
  masteryRecords: Record<string, MasteryRecord>;
  viewedLessons: string[];
  language: 'en' | 'ar';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onChangeMethod: () => void;
  onSwitchLearner: () => void;
  onCreateGroup: () => Promise<string>;
}

const METHOD_NAMES: Record<string, Record<'en' | 'ar', string>> = {
  vedic:     { en: 'Speed Thinker', ar: 'المفكر السريع' },
  decompose: { en: 'Logic Builder', ar: 'بناء المنطق' },
  visualize: { en: 'Story Weaver',  ar: 'رسّام القصص' },
};

const LEVEL_META: Record<string, { emoji: string; en: string; ar: string; color: string }> = {
  not_started: { emoji: '⚪', en: 'Not started', ar: 'لم يبدأ',  color: Colors.textLight },
  developing:  { emoji: '🌱', en: 'Developing',  ar: 'في تطور',  color: Colors.amber },
  secure:      { emoji: '💪', en: 'Secure',      ar: 'متمكن',    color: Colors.lavender },
  mastered:    { emoji: '🏆', en: 'Mastered',    ar: 'متقن',     color: Colors.successGreen },
};

export default function ProfileScreen({
  profile, masteryRecords, viewedLessons, language, activeTab,
  onTabChange, onChangeMethod, onSwitchLearner, onCreateGroup,
}: Props) {
  const t = strings[language];
  const isAr = language === 'ar';
  const methodColor = getMethodColor(profile.chosenMethod);
  const [groupCode, setGroupCode] = useState<string | undefined>(profile.groupCode);
  const [creatingGroup, setCreatingGroup] = useState(false);

  const NAV_TABS = [
    { key: 'home',      label: '🏠', name: t.home },
    { key: 'learn',     label: '📖', name: t.learn },
    { key: 'practice',  label: '✏️', name: t.practice },
    { key: 'challenge', label: '🏆', name: t.challenge },
    { key: 'profile',   label: '⚡', name: t.myPower },
  ];

  // ── Learn progress per category ──
  const learnBank = LEARN_BANK_BY_GRADE[profile.grade] ?? [];
  const categories = getCategoriesForGrade(profile.grade);
  const exploredCount = learnBank.filter(p => viewedLessons.includes(p.id)).length;

  // ── Mastery records for this grade ──
  const gradeMastery = Object.values(masteryRecords).filter(m => m.grade === profile.grade);

  const handleCreateGroup = async () => {
    setCreatingGroup(true);
    try {
      const code = await onCreateGroup();
      setGroupCode(code);
    } finally {
      setCreatingGroup(false);
    }
  };

  const handleShareCode = async () => {
    if (!groupCode) return;
    const message = isAr
      ? `رمز مجموعتي في Julia Sets هو: ${groupCode} — أدخله في التطبيق لمتابعة تقدمي!`
      : `My Julia Sets group code is: ${groupCode} — enter it in the app to follow my progress!`;
    try {
      await Share.share({ message });
    } catch {
      // user cancelled — nothing to do
    }
  };

  const methodName = METHOD_NAMES[profile.chosenMethod]?.[language] ?? profile.chosenMethod;
  const ibLabel = profile.ibStage === 'PYP' ? 'PYP'
    : profile.ibStage === 'MYP_TRANSITION' ? 'MYP Transition' : 'MYP';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        {/* Identity header */}
        <View style={[styles.identityCard, { backgroundColor: methodColor }]}>
          <View style={styles.identityAvatar}>
            <Text style={styles.identityAvatarText}>{profile.avatarEmoji}</Text>
          </View>
          <Text style={styles.identityName}>{profile.name}</Text>
          <Text style={styles.identityGrade}>
            {isAr ? `${ibLabel} · ${t.grade} ${profile.grade}` : `${t.grade} ${profile.grade} · ${ibLabel}`}
          </Text>
          <View style={styles.identityMethod}>
            <Text style={styles.identityMethodText}>
              {getMethodEmoji(profile.chosenMethod)} {methodName}
            </Text>
          </View>
        </View>

        {/* Stats grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>⭐ {profile.totalXP}</Text>
            <Text style={[styles.statLabel, isAr && styles.rtlCenter]}>{t.xpEarned}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>🔥 {profile.streak}</Text>
            <Text style={[styles.statLabel, isAr && styles.rtlCenter]}>{t.dayStreak}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>✅ {profile.solvedIds.length}</Text>
            <Text style={[styles.statLabel, isAr && styles.rtlCenter]}>{t.problemsSolved}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>📖 {exploredCount}/{learnBank.length}</Text>
            <Text style={[styles.statLabel, isAr && styles.rtlCenter]}>{t.lessonsExplored}</Text>
          </View>
        </View>

        {/* Learn progress per category */}
        <Text style={[styles.sectionTitle, isAr && styles.rtlText]}>📖 {t.learnHeading}</Text>
        <View style={styles.sectionCard}>
          {categories.map(category => {
            const catProblems = learnBank.filter(p => p.category === category);
            const viewed = catProblems.filter(p => viewedLessons.includes(p.id)).length;
            const pct = catProblems.length > 0 ? (viewed / catProblems.length) * 100 : 0;
            return (
              <View key={category} style={styles.progressRowItem}>
                <Text style={styles.progressEmoji}>{CATEGORY_META[category]?.emoji ?? '📖'}</Text>
                <View style={styles.progressInfo}>
                  <View style={styles.progressLabelRow}>
                    <Text style={[styles.progressLabel, isAr && styles.rtlText]} numberOfLines={1}>
                      {categoryLabel(category, isAr)}
                    </Text>
                    <Text style={styles.progressCount}>{viewed}/{catProblems.length}</Text>
                  </View>
                  <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: `${pct}%` as any }]} />
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        {/* Mastery */}
        <Text style={[styles.sectionTitle, isAr && styles.rtlText]}>🎯 {t.masteryProgress}</Text>
        <View style={styles.sectionCard}>
          {gradeMastery.length === 0 ? (
            <Text style={[styles.emptyText, isAr && styles.rtlText]}>
              {isAr ? 'ابدأ التدريب لبناء سجل الإتقان!' : 'Start practicing to build your mastery record!'}
            </Text>
          ) : (
            gradeMastery.map(m => {
              const lv = LEVEL_META[m.level] ?? LEVEL_META.not_started;
              return (
                <View key={`${m.topic}_${m.grade}`} style={styles.masteryRow}>
                  <Text style={[styles.masteryTopic, isAr && styles.rtlText]} numberOfLines={1}>
                    {categoryLabel(m.topic, isAr)}
                  </Text>
                  <View style={[styles.masteryChip, { backgroundColor: lv.color }]}>
                    <Text style={styles.masteryChipText}>{lv.emoji} {isAr ? lv.ar : lv.en}</Text>
                  </View>
                </View>
              );
            })
          )}
        </View>

        {/* My group */}
        <Text style={[styles.sectionTitle, isAr && styles.rtlText]}>👨‍👩‍👧 {t.myGroup}</Text>
        <View style={styles.sectionCard}>
          {groupCode ? (
            <View style={styles.groupWrap}>
              <Text style={[styles.groupHint, isAr && styles.rtlText]}>
                {isAr
                  ? 'شارك هذا الرمز مع ولي أمرك أو معلمك ليتابع تقدمك:'
                  : 'Share this code with your parent or teacher so they can follow your progress:'}
              </Text>
              <View style={styles.groupCodeBox}>
                <Text style={styles.groupCodeText}>{groupCode}</Text>
              </View>
              <TouchableOpacity style={styles.shareBtn} onPress={handleShareCode} activeOpacity={0.85}>
                <Text style={styles.shareBtnText}>📤 {t.shareCode}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.groupWrap}>
              <Text style={[styles.groupHint, isAr && styles.rtlText]}>
                {isAr
                  ? 'أنشئ مجموعة واحصل على رمز تشاركه مع ولي أمرك أو معلمك.'
                  : 'Create a group to get a code you can share with your parent or teacher.'}
              </Text>
              <TouchableOpacity
                style={[styles.shareBtn, creatingGroup && { opacity: 0.6 }]}
                onPress={handleCreateGroup}
                disabled={creatingGroup}
                activeOpacity={0.85}
              >
                <Text style={styles.shareBtnText}>✨ {t.createNewGroup}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Actions */}
        <TouchableOpacity style={styles.actionBtn} onPress={onChangeMethod} activeOpacity={0.85}>
          <Text style={styles.actionBtnText}>🔄 {t.changeMyMethod}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtnOutline} onPress={onSwitchLearner} activeOpacity={0.85}>
          <Text style={styles.actionBtnOutlineText}>👤 {t.switchLearner}</Text>
        </TouchableOpacity>

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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.cream },
  body: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
  rtlText: { textAlign: 'right' },
  rtlCenter: { textAlign: 'center' },

  identityCard: {
    borderRadius: BorderRadius.xl, padding: Spacing.lg, alignItems: 'center',
    marginBottom: Spacing.md, ...Shadow.card,
  },
  identityAvatar: {
    width: 72, height: 72, borderRadius: 36, backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center', justifyContent: 'center', marginBottom: Spacing.sm,
  },
  identityAvatarText: { fontSize: 40 },
  identityName: { fontFamily: FontFamilies.displayBold, fontSize: 24, color: Colors.white },
  identityGrade: { fontFamily: FontFamilies.body, fontSize: 13, color: Colors.white, opacity: 0.9, marginTop: 2 },
  identityMethod: {
    backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: BorderRadius.xxl,
    paddingHorizontal: Spacing.md, paddingVertical: 4, marginTop: Spacing.sm,
  },
  identityMethodText: { fontFamily: FontFamilies.bodyBold, fontSize: 13, color: Colors.white },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, marginBottom: Spacing.lg },
  statBox: {
    backgroundColor: Colors.white, borderRadius: BorderRadius.lg, padding: Spacing.md,
    alignItems: 'center', flexBasis: '47%', flexGrow: 1, ...Shadow.card,
  },
  statValue: { fontFamily: FontFamilies.displayBold, fontSize: 20, color: Colors.aubergine },
  statLabel: { fontFamily: FontFamilies.body, fontSize: 12, color: Colors.textMid, marginTop: 2, textAlign: 'center' },

  sectionTitle: { fontFamily: FontFamilies.displayBold, fontSize: 18, color: Colors.aubergine, marginBottom: Spacing.sm },
  sectionCard: {
    backgroundColor: Colors.white, borderRadius: BorderRadius.lg, padding: Spacing.md,
    marginBottom: Spacing.lg, ...Shadow.card,
  },

  progressRowItem: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginBottom: Spacing.sm },
  progressEmoji: { fontSize: 20, width: 28, textAlign: 'center' },
  progressInfo: { flex: 1 },
  progressLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 },
  progressLabel: { fontFamily: FontFamilies.bodySemiBold, fontSize: 13, color: Colors.textDark, flex: 1 },
  progressCount: { fontFamily: FontFamilies.body, fontSize: 12, color: Colors.textLight, marginLeft: Spacing.sm },
  progressBarBg: { height: 5, backgroundColor: Colors.border, borderRadius: 3, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: Colors.successGreen, borderRadius: 3 },

  masteryRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: Spacing.xs,
  },
  masteryTopic: { fontFamily: FontFamilies.bodySemiBold, fontSize: 14, color: Colors.textDark, flex: 1 },
  masteryChip: { borderRadius: BorderRadius.xxl, paddingHorizontal: Spacing.sm, paddingVertical: 3 },
  masteryChipText: { fontFamily: FontFamilies.bodyBold, fontSize: 11, color: Colors.white },
  emptyText: { fontFamily: FontFamilies.body, fontSize: 14, color: Colors.textMid, textAlign: 'center', paddingVertical: Spacing.sm },

  groupWrap: { alignItems: 'center' },
  groupHint: { fontFamily: FontFamilies.body, fontSize: 13, color: Colors.textMid, textAlign: 'center', marginBottom: Spacing.sm, lineHeight: 19 },
  groupCodeBox: {
    backgroundColor: Colors.creamWarm, borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.xl, paddingVertical: Spacing.md, marginBottom: Spacing.sm,
    borderWidth: 2, borderColor: Colors.lavender, borderStyle: 'dashed',
  },
  groupCodeText: { fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.aubergine, letterSpacing: 4 },
  shareBtn: {
    backgroundColor: Colors.lavender, borderRadius: BorderRadius.xxl,
    paddingHorizontal: Spacing.xl, paddingVertical: Spacing.sm,
  },
  shareBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 15, color: Colors.white },

  actionBtn: {
    backgroundColor: Colors.aubergine, borderRadius: BorderRadius.xxl,
    paddingVertical: Spacing.md, alignItems: 'center', marginBottom: Spacing.sm, ...Shadow.card,
  },
  actionBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 15, color: Colors.white },
  actionBtnOutline: {
    borderRadius: BorderRadius.xxl, paddingVertical: Spacing.md, alignItems: 'center',
    borderWidth: 2, borderColor: Colors.aubergine,
  },
  actionBtnOutlineText: { fontFamily: FontFamilies.bodyBold, fontSize: 15, color: Colors.aubergine },

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
