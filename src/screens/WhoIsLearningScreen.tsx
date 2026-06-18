import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow, getMethodColor } from '../theme';
import { ChildProfile } from '../hooks/useAppState';

interface Props {
  profiles: ChildProfile[];
  language: 'en' | 'ar';
  onSelectProfile: (profile: ChildProfile) => void;
  onAddNewLearner: () => void;
  onParentGate: () => void;
  onBack?: () => void;
  onDeleteProfile: (id: string) => void;
}

export default function WhoIsLearningScreen({
  profiles, language, onSelectProfile, onAddNewLearner, onParentGate, onBack, onDeleteProfile,
}: Props) {
  const isAr = language === 'ar';

  const gradeLabel = (g: number) => (isAr ? `الصف ${g}` : `Grade ${g}`);

  const confirmDelete = (p: ChildProfile) => {
    Alert.alert(
      isAr ? 'حذف الملف؟' : 'Delete profile?',
      isAr ? `سيتم حذف ${p.name} وكل تقدّمه.` : `This removes ${p.name} and all their progress.`,
      [
        { text: isAr ? 'إلغاء' : 'Cancel', style: 'cancel' },
        { text: isAr ? 'حذف' : 'Delete', style: 'destructive', onPress: () => onDeleteProfile(p.id) },
      ],
    );
  };

  return (
    <SafeAreaView style={s.container}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={s.header}>
          {onBack ? (
            <TouchableOpacity onPress={onBack} style={s.backBtn}>
              <Text style={s.backTxt}>{isAr ? '→ رجوع' : '← Back'}</Text>
            </TouchableOpacity>
          ) : <View style={s.backBtn} />}
        </View>

        <Text style={[s.title, isAr && s.rtl]}>
          {isAr ? 'من يتعلّم اليوم؟' : "Who's learning today?"}
        </Text>
        <Text style={[s.subtitle, isAr && s.rtl]}>
          {isAr ? 'اختر ملفك للمتابعة' : 'Tap your name to continue'}
        </Text>

        {/* Profile cards */}
        <View style={s.grid}>
          {profiles.map((p) => (
            <TouchableOpacity
              key={p.id}
              style={[s.card, { borderColor: getMethodColor(p.chosenMethod) }]}
              activeOpacity={0.85}
              onPress={() => onSelectProfile(p)}
              onLongPress={() => confirmDelete(p)}
            >
              <Text style={s.avatar}>{p.avatarEmoji || '🧒'}</Text>
              <Text style={s.cardName} numberOfLines={1}>{p.name}</Text>
              <Text style={s.cardGrade}>{gradeLabel(p.grade)}</Text>
            </TouchableOpacity>
          ))}

          {/* Add new learner */}
          <TouchableOpacity
            style={[s.card, s.addCard]}
            activeOpacity={0.85}
            onPress={onAddNewLearner}
          >
            <Text style={s.addPlus}>＋</Text>
            <Text style={s.addTxt}>{isAr ? 'متعلّم جديد' : 'Add learner'}</Text>
          </TouchableOpacity>
        </View>

        {profiles.length > 0 && (
          <Text style={[s.hint, isAr && s.rtl]}>
            {isAr ? 'اضغط مطوّلاً على ملف لحذفه' : 'Long-press a profile to remove it'}
          </Text>
        )}

        {/* Parent area */}
        <TouchableOpacity style={s.parentBtn} onPress={onParentGate} activeOpacity={0.8}>
          <Text style={s.parentTxt}>{isAr ? '👤 منطقة الوالدين' : '👤 Parent area'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.aubergine },
  scroll: { flexGrow: 1, paddingHorizontal: Spacing.lg, paddingBottom: Spacing.xxl },
  rtl: { textAlign: 'right' },

  header: { flexDirection: 'row', alignItems: 'center', paddingTop: Spacing.md, minHeight: 36 },
  backBtn: { alignSelf: 'flex-start' },
  backTxt: { fontFamily: FontFamilies.bodySemiBold, fontSize: 16, color: Colors.pink },

  title: {
    fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.white,
    marginTop: Spacing.lg, textAlign: 'center',
  },
  subtitle: {
    fontFamily: FontFamilies.body, fontSize: 14, color: 'rgba(255,255,255,0.6)',
    textAlign: 'center', marginTop: Spacing.xs, marginBottom: Spacing.xl,
  },

  grid: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: Spacing.md,
  },
  card: {
    width: 150, height: 150, borderRadius: BorderRadius.xl, backgroundColor: Colors.white,
    borderWidth: 2, alignItems: 'center', justifyContent: 'center', gap: 4, ...Shadow.card,
  },
  avatar: { fontSize: 52 },
  cardName: { fontFamily: FontFamilies.displayBold, fontSize: 18, color: Colors.aubergine, maxWidth: 130 },
  cardGrade: { fontFamily: FontFamilies.body, fontSize: 13, color: Colors.textMid },

  addCard: { backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.25)', borderStyle: 'dashed' },
  addPlus: { fontSize: 44, color: Colors.pink, fontFamily: FontFamilies.displayBold, marginBottom: 2 },
  addTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 14, color: 'rgba(255,255,255,0.85)' },

  hint: {
    fontFamily: FontFamilies.body, fontSize: 12, color: 'rgba(255,255,255,0.4)',
    textAlign: 'center', marginTop: Spacing.lg,
  },

  parentBtn: {
    marginTop: Spacing.xxl, alignSelf: 'center',
    paddingHorizontal: Spacing.xl, paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xxl, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)',
  },
  parentTxt: { fontFamily: FontFamilies.bodySemiBold, fontSize: 14, color: 'rgba(255,255,255,0.7)' },
});
