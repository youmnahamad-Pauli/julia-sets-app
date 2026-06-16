import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';
import { LearnProblem, LEARN_BANK_BY_GRADE, getCategoriesForGrade } from '../data/learn';
import { ChildProfile } from '../hooks/useAppState';
import strings from '../i18n/strings';

interface Props {
  profile: ChildProfile;
  viewedLessons: string[];
  language: 'en' | 'ar';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenLesson: (lesson: LearnProblem) => void;
}

// ── Category metadata: emoji + Arabic name for every category across grades 1–8 ──
export const CATEGORY_META: Record<string, { emoji: string; ar: string }> = {
  'Addition':                   { emoji: '➕', ar: 'الجمع' },
  'Subtraction':                { emoji: '➖', ar: 'الطرح' },
  'Multiplication':             { emoji: '✖️', ar: 'الضرب' },
  'Division':                   { emoji: '➗', ar: 'القسمة' },
  'Word Problem':               { emoji: '🧩', ar: 'مسائل كلامية' },
  'Count On & Back':            { emoji: '🔢', ar: 'العدّ للأمام والخلف' },
  'Double & Half':              { emoji: '🌓', ar: 'المضاعفة والتنصيف' },
  'Odd & Even':                 { emoji: '🎲', ar: 'الفردي والزوجي' },
  'Skip Counting':              { emoji: '🦘', ar: 'العدّ بالتخطي' },
  'Fractions of a Whole':       { emoji: '🍕', ar: 'كسور من الكل' },
  'Rounding & Estimation':      { emoji: '🎯', ar: 'التقريب والتقدير' },
  'Factors & Multiples':        { emoji: '🧱', ar: 'العوامل والمضاعفات' },
  'Fractions: Compare & Order': { emoji: '📊', ar: 'مقارنة الكسور وترتيبها' },
  'Decimals':                   { emoji: '💠', ar: 'الأعشار' },
  'Percentages':                { emoji: '💯', ar: 'النسب المئوية' },
  'Integers & Negatives':       { emoji: '🌡️', ar: 'الأعداد الصحيحة والسالبة' },
  'Ratio & Proportion':         { emoji: '⚖️', ar: 'النسبة والتناسب' },
  'Algebra':                    { emoji: '🔤', ar: 'الجبر' },
  'Percentages Advanced':       { emoji: '📈', ar: 'النسب المئوية المتقدمة' },
  'Powers & Roots':             { emoji: '🌱', ar: 'الأسس والجذور' },
  'Scientific Notation':        { emoji: '🔬', ar: 'الترميز العلمي' },
};

export function categoryLabel(category: string, isAr: boolean): string {
  if (!isAr) return category;
  return CATEGORY_META[category]?.ar ?? category;
}

export default function LearnScreen({ profile, viewedLessons, language, activeTab, onTabChange, onOpenLesson }: Props) {
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

  const allProblems: LearnProblem[] = LEARN_BANK_BY_GRADE[profile.grade] ?? [];
  const categories = getCategoriesForGrade(profile.grade);
  const exploredCount = allProblems.filter(p => viewedLessons.includes(p.id)).length;

  const categoryProblems = selectedCategory
    ? allProblems.filter(p => p.category === selectedCategory)
    : [];

  const levelLabel = (level: string) => {
    const dot = level === 'Easy' ? '🟢' : level === 'Medium' ? '🟡' : '🔴';
    const label = level === 'Easy' ? t.easy : level === 'Medium' ? t.medium : t.hard;
    return `${dot} ${label}`;
  };

  const renderCategoryGrid = () => (
    <FlatList
      data={categories}
      keyExtractor={(c: string) => c}
      contentContainerStyle={styles.listContent}
      renderItem={({ item: category }: { item: string }) => {
        const problems = allProblems.filter(p => p.category === category);
        const viewed = problems.filter(p => viewedLessons.includes(p.id)).length;
        const meta = CATEGORY_META[category];
        const complete = viewed === problems.length && problems.length > 0;
        return (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => setSelectedCategory(category)}
            activeOpacity={0.85}
          >
            <View style={styles.categoryIcon}>
              <Text style={styles.categoryEmoji}>{meta?.emoji ?? '📖'}</Text>
            </View>
            <View style={styles.categoryText}>
              <Text style={[styles.categoryTitle, isAr && styles.rtlText]}>
                {categoryLabel(category, isAr)}
              </Text>
              <Text style={[styles.categoryCount, isAr && styles.rtlText]}>
                {viewed} {t.of} {problems.length} {t.ofLessonsExplored}
              </Text>
              <View style={styles.categoryBarBg}>
                <View style={[styles.categoryBarFill, { width: `${(viewed / Math.max(1, problems.length)) * 100}%` as any }]} />
              </View>
            </View>
            <Text style={styles.categoryChevron}>{complete ? '✅' : isAr ? '‹' : '›'}</Text>
          </TouchableOpacity>
        );
      }}
      ListFooterComponent={<View style={{ height: 80 }} />}
    />
  );

  const renderProblemList = () => (
    <FlatList
      data={categoryProblems}
      keyExtractor={(p: LearnProblem) => p.id}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={
        <TouchableOpacity style={styles.backChip} onPress={() => setSelectedCategory(null)} activeOpacity={0.8}>
          <Text style={styles.backChipText}>{t.back}</Text>
        </TouchableOpacity>
      }
      renderItem={({ item }: { item: LearnProblem }) => {
        const viewed = viewedLessons.includes(item.id);
        return (
          <TouchableOpacity
            style={[styles.lessonCard, viewed && styles.lessonCardViewed]}
            onPress={() => onOpenLesson(item)}
            activeOpacity={0.85}
          >
            <View style={styles.lessonIcon}>
              <Text style={styles.lessonEmoji}>{CATEGORY_META[item.category]?.emoji ?? '📖'}</Text>
            </View>
            <View style={styles.lessonText}>
              <Text style={[styles.lessonTitle, isAr && styles.rtlText]} numberOfLines={1}>
                {isAr ? item.question_ar : item.question_en}
              </Text>
              <Text style={[styles.lessonDiff, isAr && styles.rtlText]}>{levelLabel(item.level)}</Text>
            </View>
            {viewed && <Text style={styles.viewedTick}>✅</Text>}
          </TouchableOpacity>
        );
      }}
      ListFooterComponent={<View style={{ height: 80 }} />}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.heading, isAr && styles.rtlText]}>
          {selectedCategory ? categoryLabel(selectedCategory, isAr) : t.learnHeading}
        </Text>
        <Text style={[styles.subHeading, isAr && styles.rtlText]}>{t.oneConceptAtATime}</Text>
        <View style={styles.progressRow}>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${(exploredCount / Math.max(1, allProblems.length)) * 100}%` as any }]} />
          </View>
          <Text style={styles.progressText}>{exploredCount} {t.of} {allProblems.length} {t.ofLessonsExplored}</Text>
        </View>
      </View>

      {selectedCategory ? renderProblemList() : renderCategoryGrid()}

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
  header: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.sm, backgroundColor: Colors.cream },
  heading: { fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.aubergine },
  subHeading: { fontFamily: FontFamilies.body, fontSize: 14, color: Colors.textMid, marginBottom: Spacing.sm },
  rtlText: { textAlign: 'right' },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginBottom: Spacing.md },
  progressBarBg: { flex: 1, height: 6, backgroundColor: Colors.border, borderRadius: 3, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: Colors.successGreen, borderRadius: 3 },
  progressText: { fontFamily: FontFamilies.body, fontSize: 12, color: Colors.textMid },
  listContent: { paddingHorizontal: Spacing.lg },

  // Category grid
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    gap: Spacing.md,
    ...Shadow.card,
  },
  categoryIcon: {
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: Colors.creamWarm,
    alignItems: 'center', justifyContent: 'center',
  },
  categoryEmoji: { fontSize: 26 },
  categoryText: { flex: 1 },
  categoryTitle: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.textDark },
  categoryCount: { fontFamily: FontFamilies.body, fontSize: 12, color: Colors.textLight, marginTop: 2, marginBottom: 6 },
  categoryBarBg: { height: 4, backgroundColor: Colors.border, borderRadius: 2, overflow: 'hidden' },
  categoryBarFill: { height: '100%', backgroundColor: Colors.successGreen, borderRadius: 2 },
  categoryChevron: { fontSize: 18, color: Colors.textLight },

  // Back chip
  backChip: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xxl,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    marginBottom: Spacing.sm,
    ...Shadow.card,
  },
  backChipText: { fontFamily: FontFamilies.bodySemiBold, fontSize: 14, color: Colors.aubergine },

  // Problem list
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    gap: Spacing.md,
    ...Shadow.card,
  },
  lessonCardViewed: { opacity: 0.75 },
  lessonIcon: {
    width: 48, height: 48, borderRadius: 24,
    backgroundColor: Colors.creamWarm,
    alignItems: 'center', justifyContent: 'center',
  },
  lessonEmoji: { fontSize: 24 },
  lessonText: { flex: 1 },
  lessonTitle: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.textDark },
  lessonDiff: { fontFamily: FontFamilies.body, fontSize: 12, color: Colors.textLight, marginTop: 2 },
  viewedTick: { fontSize: 20 },

  bottomNav: {
    flexDirection: 'row',
    backgroundColor: Colors.aubergineDark,
    paddingBottom: 8, paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  navTab: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  navIcon: { fontSize: 20, opacity: 0.5 },
  navIconActive: { opacity: 1 },
  navLabel: { fontFamily: FontFamilies.body, fontSize: 10, color: Colors.white, opacity: 0.5, marginTop: 2 },
  navLabelActive: { opacity: 1, color: Colors.pink },
});
