import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ScrollView,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';
import { hasPracticeBank, getPracticeCategories, getPracticeProblems } from '../data/practice';
import { CATEGORY_META, categoryLabel } from './LearnScreen';
import { ChildProfile } from '../hooks/useAppState';
import strings from '../i18n/strings';

interface Props {
  profile: ChildProfile;
  language: 'en' | 'ar';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onStartPractice: (category: string, level: 'Easy' | 'Medium' | 'Hard') => void;
}

const LEVELS: Array<'Easy' | 'Medium' | 'Hard'> = ['Easy', 'Medium', 'Hard'];

export default function PracticeScreen({ profile, language, activeTab, onTabChange, onStartPractice }: Props) {
  const t = strings[language];
  const isAr = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const NAV_TABS = [
    { key: 'home', label: '🏠', name: t.home },
    { key: 'learn', label: '📖', name: t.learn },
    { key: 'practice', label: '✏️', name: t.practice },
    { key: 'challenge', label: '🏆', name: t.challenge },
    { key: 'profile', label: '⚡', name: t.myPower },
  ];

  const bankReady = hasPracticeBank(profile.grade);
  const categories = bankReady ? getPracticeCategories(profile.grade) : [];

  const levelLabel = (level: string) => {
    const dot = level === 'Easy' ? '🟢' : level === 'Medium' ? '🟡' : '🔴';
    const label = level === 'Easy' ? t.easy : level === 'Medium' ? t.medium : t.hard;
    return `${dot} ${label}`;
  };

  const renderComingSoon = () => (
    <ScrollView contentContainerStyle={styles.comingSoonWrap} showsVerticalScrollIndicator={false}>
      <View style={styles.comingSoonCard}>
        <Text style={styles.comingSoonEmoji}>✏️</Text>
        <Text style={[styles.comingSoonTitle, isAr && styles.rtlText]}>
          {isAr ? 'قريباً!' : 'Coming soon!'}
        </Text>
        <Text style={[styles.comingSoonText, isAr && styles.rtlText]}>
          {isAr
            ? `بنك التدريب للصف ${profile.grade} قيد التحضير. في هذه الأثناء، استكشف شاشة تعلّم!`
            : `The practice bank for Grade ${profile.grade} is being prepared. In the meantime, explore the Learn tab!`}
        </Text>
        <TouchableOpacity style={styles.comingSoonBtn} onPress={() => onTabChange('learn')} activeOpacity={0.85}>
          <Text style={styles.comingSoonBtnText}>📖 {t.learn}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const renderCategories = () => (
    <FlatList
      data={categories}
      keyExtractor={(c: string) => c}
      contentContainerStyle={styles.listContent}
      renderItem={({ item: category }: { item: string }) => {
        const count = getPracticeProblems(profile.grade, category).length;
        const meta = CATEGORY_META[category];
        return (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => setSelectedCategory(category)}
            activeOpacity={0.85}
          >
            <View style={styles.categoryIcon}>
              <Text style={styles.categoryEmoji}>{meta?.emoji ?? '✏️'}</Text>
            </View>
            <View style={styles.categoryText}>
              <Text style={[styles.categoryTitle, isAr && styles.rtlText]}>
                {categoryLabel(category, isAr)}
              </Text>
              <Text style={[styles.categoryCount, isAr && styles.rtlText]}>
                {isAr ? 'اضغط للبدء' : 'Tap to start'}
              </Text>
            </View>
            <Text style={styles.categoryChevron}>{isAr ? '‹' : '›'}</Text>
          </TouchableOpacity>
        );
      }}
      ListFooterComponent={<View style={{ height: 80 }} />}
    />
  );

  const renderDifficulty = () => (
    <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.backChip} onPress={() => setSelectedCategory(null)} activeOpacity={0.8}>
        <Text style={styles.backChipText}>{t.back}</Text>
      </TouchableOpacity>
      <Text style={[styles.diffHeading, isAr && styles.rtlText]}>{t.chooseDifficulty}</Text>
      {LEVELS.map(level => {
        const count = getPracticeProblems(profile.grade, selectedCategory!, level).length;
        return (
          <TouchableOpacity
            key={level}
            style={[styles.diffCard, count === 0 && styles.diffCardDisabled]}
            disabled={count === 0}
            onPress={() => onStartPractice(selectedCategory!, level)}
            activeOpacity={0.85}
          >
            <Text style={styles.diffLabel}>{levelLabel(level)}</Text>
            <Text style={styles.diffCount}>{isAr ? 'اضغط للبدء' : 'Tap to start'}</Text>
          </TouchableOpacity>
        );
      })}
      <View style={{ height: 80 }} />
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.heading, isAr && styles.rtlText]}>
          {selectedCategory ? categoryLabel(selectedCategory, isAr) : t.practiceHeading}
        </Text>
      </View>

      {!bankReady ? renderComingSoon() : selectedCategory ? renderDifficulty() : renderCategories()}

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
  header: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.sm },
  heading: { fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.aubergine },
  rtlText: { textAlign: 'right' },
  listContent: { paddingHorizontal: Spacing.lg },

  comingSoonWrap: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: Spacing.lg },
  comingSoonCard: {
    backgroundColor: Colors.white, borderRadius: BorderRadius.xl, padding: Spacing.xxl,
    alignItems: 'center', ...Shadow.card,
  },
  comingSoonEmoji: { fontSize: 56, marginBottom: Spacing.md },
  comingSoonTitle: { fontFamily: FontFamilies.displayBold, fontSize: 24, color: Colors.aubergine, marginBottom: Spacing.sm },
  comingSoonText: { fontFamily: FontFamilies.body, fontSize: 15, color: Colors.textMid, textAlign: 'center', lineHeight: 22 },
  comingSoonBtn: {
    marginTop: Spacing.lg, backgroundColor: Colors.aubergine, borderRadius: BorderRadius.xxl,
    paddingHorizontal: Spacing.xl, paddingVertical: Spacing.md,
  },
  comingSoonBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },

  categoryCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg, padding: Spacing.md, marginBottom: Spacing.sm,
    gap: Spacing.md, ...Shadow.card,
  },
  categoryIcon: {
    width: 52, height: 52, borderRadius: 26, backgroundColor: Colors.creamWarm,
    alignItems: 'center', justifyContent: 'center',
  },
  categoryEmoji: { fontSize: 26 },
  categoryText: { flex: 1 },
  categoryTitle: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.textDark },
  categoryCount: { fontFamily: FontFamilies.body, fontSize: 12, color: Colors.textLight, marginTop: 2 },
  categoryChevron: { fontSize: 18, color: Colors.textLight },

  backChip: {
    alignSelf: 'flex-start', backgroundColor: Colors.white, borderRadius: BorderRadius.xxl,
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.xs, marginBottom: Spacing.md, ...Shadow.card,
  },
  backChipText: { fontFamily: FontFamilies.bodySemiBold, fontSize: 14, color: Colors.aubergine },
  diffHeading: { fontFamily: FontFamilies.displayBold, fontSize: 20, color: Colors.aubergine, marginBottom: Spacing.md },
  diffCard: {
    backgroundColor: Colors.white, borderRadius: BorderRadius.lg, padding: Spacing.lg,
    marginBottom: Spacing.sm, flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', ...Shadow.card,
  },
  diffCardDisabled: { opacity: 0.4 },
  diffLabel: { fontFamily: FontFamilies.bodyBold, fontSize: 17, color: Colors.textDark },
  diffCount: { fontFamily: FontFamilies.body, fontSize: 13, color: Colors.textLight },

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
