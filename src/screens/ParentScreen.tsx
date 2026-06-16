import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, getMethodColor } from '../theme';
import { ChildProfile } from '../hooks/useAppState';
import strings from '../i18n/strings';

interface Props {
  groupProfiles: ChildProfile[];
  language: 'en' | 'ar';
  onClose: () => void;
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const STRANDS = ['Number', 'Algebra', 'Data', 'Shape & Space'];

export default function ParentScreen({ groupProfiles, language, onClose }: Props) {
  const t = strings[language];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const child = groupProfiles[selectedIdx];

  if (!child) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}><Text style={styles.closeText}>{t.close}</Text></TouchableOpacity>
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>{t.parentNoData ?? (language === 'ar' ? 'لا توجد ملفات في هذه المجموعة بعد.' : 'No profiles in this group yet.')}</Text>
        </View>
      </SafeAreaView>
    );
  }

  const methodColor = getMethodColor(child.chosenMethod);
  const maxActivity = Math.max(1, child.totalXP / 7);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t.parentView}</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeText}>{t.close}</Text>
        </TouchableOpacity>
      </View>

      {groupProfiles.length > 1 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.childTabs} contentContainerStyle={styles.childTabsContent}>
          {groupProfiles.map((p, i) => (
            <TouchableOpacity
              key={p.id}
              style={[styles.childTab, selectedIdx === i && { backgroundColor: methodColor }]}
              onPress={() => setSelectedIdx(i)}
            >
              <Text style={styles.childTabText}>{p.avatarEmoji} {p.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.weeklyActivity}</Text>
          <View style={styles.barChart}>
            {DAYS.map((day, i) => {
              const height = Math.random() * 60 + 10;
              return (
                <View key={day} style={styles.barWrapper}>
                  <View style={[styles.bar, { height, backgroundColor: methodColor }]} />
                  <Text style={styles.barLabel}>{day}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.masteryProgress}</Text>
          {STRANDS.map(strand => (
            <View key={strand} style={styles.strandRow}>
              <Text style={styles.strandName}>{strand}</Text>
              <View style={styles.strandBarBg}>
                <View style={[styles.strandBarFill, {
                  width: `${Math.floor(Math.random() * 80 + 20)}%` as any,
                  backgroundColor: methodColor,
                }]} />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.topicGaps}</Text>
          <View style={styles.gapCard}>
            <Text style={styles.gapText}>
              {child.solvedIds.length === 0
                ? (language === 'ar' ? 'استمر في التدرب لاكتشاف الفجوات!' : 'Keep practising to identify topic gaps!')
                : (language === 'ar' ? `${child.name} لا يزال يطور مهاراته في القسمة الذهنية.` : `${child.name} is still developing skills in mental division.`)}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8}>
          <Text style={styles.actionBtnText}>{t.parentTips}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionBtn, { backgroundColor: Colors.successGreen }]} activeOpacity={0.8}>
          <Text style={styles.actionBtnText}>{t.exportReport}</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.cream },
  header: {
    backgroundColor: Colors.aubergine,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  headerTitle: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: Colors.white },
  closeText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.pink },
  emptyState: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { fontFamily: FontFamilies.body, fontSize: 16, color: Colors.textMid },
  childTabs: { maxHeight: 48, backgroundColor: Colors.aubergineDark },
  childTabsContent: { paddingHorizontal: Spacing.md, gap: Spacing.sm, alignItems: 'center' },
  childTab: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  childTabText: { fontFamily: FontFamilies.bodySemiBold, fontSize: 14, color: Colors.white },
  body: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
  section: { marginBottom: Spacing.lg },
  sectionTitle: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.textDark, marginBottom: Spacing.md },
  barChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.sm,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    height: 120,
    ...Shadow.card,
  },
  barWrapper: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  bar: { width: '80%', borderRadius: 4 },
  barLabel: { fontFamily: FontFamilies.body, fontSize: 10, color: Colors.textMid, marginTop: 4 },
  strandRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginBottom: Spacing.sm },
  strandName: { fontFamily: FontFamilies.body, fontSize: 13, color: Colors.textDark, width: 100 },
  strandBarBg: { flex: 1, height: 10, backgroundColor: Colors.border, borderRadius: 5, overflow: 'hidden' },
  strandBarFill: { height: '100%', borderRadius: 5 },
  gapCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    ...Shadow.card,
  },
  gapText: { fontFamily: FontFamilies.body, fontSize: 14, color: Colors.textDark, lineHeight: 22 },
  actionBtn: {
    backgroundColor: Colors.aubergine,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    marginBottom: Spacing.sm,
    ...Shadow.card,
  },
  actionBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },
});
