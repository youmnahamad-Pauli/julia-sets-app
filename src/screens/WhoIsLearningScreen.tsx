import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  FlatList, Alert,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';
import { ChildProfile } from '../hooks/useAppState';
import strings from '../i18n/strings';

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
  profiles, language, onSelectProfile, onAddNewLearner,
  onParentGate, onBack, onDeleteProfile,
}: Props) {
  const [editMode, setEditMode] = useState(false);
  const t = strings[language];

  const ibLabel = (stage: string) => {
    if (stage === 'PYP') return 'PYP';
    if (stage === 'MYP_TRANSITION') return 'MYP T';
    return 'MYP';
  };

  const handleDelete = (profile: ChildProfile) => {
    Alert.alert(
      'Remove learner',
      `Remove ${profile.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove', style: 'destructive',
          onPress: () => onDeleteProfile(profile.id),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {onBack && (
          <TouchableOpacity onPress={onBack} style={styles.backBtn}>
            <Text style={styles.backText}>{t.back}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => setEditMode(!editMode)}>
            <Text style={styles.editBtn}>{editMode ? 'Done' : '✏️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inner}>
        <Text style={styles.heading}>{t.whoIsLearning}</Text>

        <FlatList
          data={profiles}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={
            <View style={styles.row}>
              <TouchableOpacity style={styles.addCard} onPress={onAddNewLearner} activeOpacity={0.8}>
                <Text style={styles.addCardText}>{t.addNewLearner}</Text>
              </TouchableOpacity>
              {profiles.length % 2 !== 0 && <View style={styles.cardSpacer} />}
            </View>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.profileCard}
              onPress={() => !editMode && onSelectProfile(item)}
              activeOpacity={0.85}
            >
              {editMode && (
                <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(item)}>
                  <Text style={styles.deleteBtnText}>✕</Text>
                </TouchableOpacity>
              )}
              <Text style={styles.avatar}>{item.avatarEmoji}</Text>
              <Text style={styles.profileName}>{item.name}</Text>
              <View style={styles.gradeBadge}>
                <Text style={styles.gradeBadgeText}>Grade {item.grade} · {ibLabel(item.ibStage)}</Text>
              </View>
              <Text style={styles.xpText}>{item.totalXP} XP</Text>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity style={styles.parentLink} onPress={onParentGate} activeOpacity={0.8}>
          <Text style={styles.parentLinkText}>{t.parentTeacher}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aubergine,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  backBtn: {},
  backText: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 16,
    color: Colors.pink,
  },
  headerRight: {},
  editBtn: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 16,
    color: Colors.amber,
  },
  inner: {
    flex: 1,
    paddingHorizontal: Spacing.md,
  },
  heading: {
    fontFamily: FontFamilies.displayBold,
    fontSize: 26,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: Spacing.lg,
    marginTop: Spacing.sm,
  },
  listContent: {
    paddingBottom: Spacing.md,
  },
  row: {
    gap: Spacing.md,
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.xs,
  },
  profileCard: {
    flex: 1,
    backgroundColor: Colors.aubergineDark,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    ...Shadow.card,
  },
  deleteBtn: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    backgroundColor: Colors.coral,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  deleteBtnText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: FontFamilies.bodyBold,
  },
  avatar: {
    fontSize: 48,
    marginBottom: Spacing.sm,
  },
  profileName: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 16,
    color: Colors.white,
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  gradeBadge: {
    backgroundColor: Colors.pink,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    marginBottom: Spacing.xs,
  },
  gradeBadgeText: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 11,
    color: Colors.aubergine,
  },
  xpText: {
    fontFamily: FontFamilies.body,
    fontSize: 13,
    color: Colors.amber,
  },
  addCard: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.coral,
    borderStyle: 'dashed',
    minHeight: 140,
  },
  addCardText: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 16,
    color: Colors.coral,
    textAlign: 'center',
  },
  cardSpacer: {
    flex: 1,
  },
  parentLink: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    marginTop: Spacing.sm,
  },
  parentLinkText: {
    fontFamily: FontFamilies.body,
    fontSize: 14,
    color: Colors.pink,
    opacity: 0.8,
  },
});
