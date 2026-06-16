import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  ScrollView,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';
import strings from '../i18n/strings';

const GRADES = [1, 2, 3, 4, 5, 6, 7, 8];

function getIBLabel(grade: number): string {
  if (grade <= 5) return 'PYP';
  if (grade === 6) return 'MYP Transition';
  return 'MYP';
}

interface Props {
  language: 'en' | 'ar';
  onGradeSelected: (grade: number) => void;
  onBack: () => void;
}

export default function GradeSelectionScreen({ language, onGradeSelected, onBack }: Props) {
  const t = strings[language];
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backText}>{t.back}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>{t.whatGrade}</Text>

        <View style={styles.grid}>
          {GRADES.map(grade => (
            <TouchableOpacity
              key={grade}
              style={[styles.gradeBtn, selected === grade && styles.gradeBtnSelected]}
              onPress={() => setSelected(grade)}
              activeOpacity={0.8}
            >
              <Text style={[styles.gradeNum, selected === grade && styles.gradeNumSelected]}>
                {t.grade} {grade}
              </Text>
              <Text style={[styles.ibLabel, selected === grade && styles.ibLabelSelected]}>
                {getIBLabel(grade)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selected !== null && (
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => onGradeSelected(selected)}
            activeOpacity={0.85}
          >
            <Text style={styles.continueBtnText}>{t.next}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cream,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  backText: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 16,
    color: Colors.aubergine,
  },
  inner: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
    alignItems: 'center',
  },
  heading: {
    fontFamily: FontFamilies.displayBold,
    fontSize: 26,
    color: Colors.aubergine,
    marginBottom: Spacing.xl,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  gradeBtn: {
    width: 150,
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.border,
    ...Shadow.card,
  },
  gradeBtnSelected: {
    backgroundColor: Colors.aubergine,
    borderColor: Colors.aubergine,
  },
  gradeNum: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 18,
    color: Colors.textDark,
  },
  gradeNumSelected: {
    color: Colors.white,
  },
  ibLabel: {
    fontFamily: FontFamilies.body,
    fontSize: 12,
    color: Colors.textMid,
    marginTop: 2,
  },
  ibLabelSelected: {
    color: Colors.pink,
  },
  continueBtn: {
    backgroundColor: Colors.aubergine,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xxl,
    borderRadius: BorderRadius.full,
    ...Shadow.card,
  },
  continueBtnText: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 18,
    color: Colors.white,
  },
});
