import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  TextInput, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';
import strings from '../i18n/strings';

const AVATARS = ['🦁', '🐯', '🦊', '🐺', '🦝', '🐸', '🦋', '🐬', '🦅', '🌟', '🚀', '🎯'];

interface Props {
  language: 'en' | 'ar';
  onNext: (name: string, avatar: string, groupCode?: string) => void;
  onBack: () => void;
}

export default function StudentProfileSetupScreen({ language, onNext, onBack }: Props) {
  const t = strings[language];
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [groupCode, setGroupCode] = useState('');

  const canProceed = name.trim().length > 0 && avatar.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
          <View style={styles.topRow}>
            <TouchableOpacity onPress={onBack}>
              <Text style={styles.backText}>{t.back}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>{t.whatsYourName}</Text>
            <TextInput
              style={styles.input}
              placeholder={t.namePlaceholder}
              placeholderTextColor={Colors.textLight}
              value={name}
              onChangeText={setName}
              maxLength={20}
              autoFocus
            />

            <Text style={[styles.label, { marginTop: Spacing.lg }]}>{t.chooseAvatar}</Text>
            <View style={styles.avatarGrid}>
              {AVATARS.map(emoji => (
                <TouchableOpacity
                  key={emoji}
                  style={[styles.avatarBtn, avatar === emoji && styles.avatarBtnSelected]}
                  onPress={() => setAvatar(emoji)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.avatarEmoji}>{emoji}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={[styles.label, { marginTop: Spacing.lg }]}>{t.joinGroup}</Text>
            <TextInput
              style={styles.input}
              placeholder={t.groupCodePlaceholder}
              placeholderTextColor={Colors.textLight}
              value={groupCode}
              onChangeText={text => setGroupCode(text.toUpperCase())}
              maxLength={6}
              autoCapitalize="characters"
            />
          </View>

          <TouchableOpacity
            style={[styles.nextBtn, !canProceed && styles.nextBtnDisabled]}
            onPress={() => canProceed && onNext(name.trim(), avatar, groupCode.length === 6 ? groupCode : undefined)}
            activeOpacity={0.85}
            disabled={!canProceed}
          >
            <Text style={styles.nextBtnText}>{t.next}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aubergine,
  },
  inner: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  topRow: {
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  backText: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 16,
    color: Colors.pink,
  },
  card: {
    backgroundColor: Colors.cream,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    ...Shadow.card,
  },
  label: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 16,
    color: Colors.textDark,
    marginBottom: Spacing.sm,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontFamily: FontFamilies.body,
    fontSize: 16,
    color: Colors.textDark,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  avatarBtn: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.creamWarm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarBtnSelected: {
    borderColor: Colors.aubergine,
    backgroundColor: Colors.pink,
  },
  avatarEmoji: {
    fontSize: 28,
  },
  nextBtn: {
    backgroundColor: Colors.pink,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    ...Shadow.card,
  },
  nextBtnDisabled: {
    opacity: 0.4,
  },
  nextBtnText: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 18,
    color: Colors.aubergine,
  },
});
