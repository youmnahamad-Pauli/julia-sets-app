import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
  TextInput, Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';
import strings from '../i18n/strings';

interface Props {
  language: 'en' | 'ar';
  onGroupFound: (code: string) => void;
  onGroupCreated: (code: string) => void;
  onBack: () => void;
}

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

export default function ParentGateScreen({ language, onGroupFound, onGroupCreated, onBack }: Props) {
  const t = strings[language];
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEnterCode = async () => {
    if (code.length !== 6) {
      Alert.alert('Invalid code', 'Please enter a 6-character group code.');
      return;
    }
    setLoading(true);
    try {
      const groupRaw = await AsyncStorage.getItem(`group_${code.toUpperCase()}`);
      if (groupRaw) {
        onGroupFound(code.toUpperCase());
      } else {
        Alert.alert('Code not found', 'No group exists with this code. Check the code and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreateGroup = async () => {
    const newCode = generateCode();
    await AsyncStorage.setItem(`group_${newCode}`, JSON.stringify([]));
    onGroupCreated(newCode);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backText}>{t.back}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inner}>
        <Text style={styles.heading}>{t.parentTeacherView}</Text>

        <View style={styles.card}>
          <Text style={styles.label}>{t.enterGroupCode}</Text>
          <TextInput
            style={styles.input}
            value={code}
            onChangeText={text => setCode(text.toUpperCase())}
            placeholder="ABC123"
            placeholderTextColor={Colors.textLight}
            maxLength={6}
            autoCapitalize="characters"
          />
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: Colors.aubergine }]}
            onPress={handleEnterCode}
            disabled={loading}
            activeOpacity={0.85}
          >
            <Text style={styles.btnText}>{t.enterCode}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>{t.orCreateGroup}</Text>

        <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.pink, marginTop: 0 }]} onPress={handleCreateGroup} activeOpacity={0.85}>
          <Text style={[styles.btnText, { color: Colors.aubergine }]}>{t.createNewGroup}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.aubergine },
  header: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
  backText: { fontFamily: FontFamilies.bodySemiBold, fontSize: 16, color: Colors.pink },
  inner: { flex: 1, paddingHorizontal: Spacing.lg, paddingTop: Spacing.xl, alignItems: 'center' },
  heading: {
    fontFamily: FontFamilies.displayBold,
    fontSize: 26,
    color: Colors.white,
    marginBottom: Spacing.xl,
    textAlign: 'center',
  },
  card: {
    backgroundColor: Colors.cream,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    width: '100%',
    marginBottom: Spacing.lg,
    ...Shadow.card,
  },
  label: { fontFamily: FontFamilies.bodyBold, fontSize: 15, color: Colors.textDark, marginBottom: Spacing.sm },
  input: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    fontFamily: FontFamilies.bodyBold,
    fontSize: 24,
    color: Colors.textDark,
    textAlign: 'center',
    letterSpacing: 4,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: Spacing.md,
  },
  btn: {
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    width: '100%',
    ...Shadow.card,
  },
  btnText: { fontFamily: FontFamilies.bodyBold, fontSize: 16, color: Colors.white },
  orText: {
    fontFamily: FontFamilies.bodyBold,
    fontSize: 14,
    color: Colors.white,
    opacity: 0.6,
    marginVertical: Spacing.lg,
  },
});
