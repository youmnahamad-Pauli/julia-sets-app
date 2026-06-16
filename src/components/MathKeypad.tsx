// Julia Sets — MathKeypad
// A kid-friendly number entry pad that replaces the iOS keyboard.
// Three modes, auto-detected from the question:
//   'number'   — standard digits, decimal, negative, backspace
//   'compare'  — "which fraction is greater" → big First / Equal / Second buttons
//   'position' — "which position is largest" → big 1st / 2nd / 3rd buttons
//   'fraction' — enter a fraction like 3/4, displayed as num/den

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from '../theme';

export type KeypadMode = 'number' | 'compare' | 'position' | 'fraction';

export function detectMode(question: string): KeypadMode {
  const q = question.toLowerCase();
  if (q.includes('which position') || q.includes('which place')) return 'position';
  if (q.includes('which fraction is greater') || q.includes('which is greater')) return 'compare';
  if (q.includes('1 if first') || q.includes('-1 if second')) return 'compare';
  return 'number';
}

interface Props {
  question: string;        // used to auto-detect mode
  onAnswer: (value: number) => void;
  onCheck: () => void;
  currentInput: string;
  onInputChange: (val: string) => void;
  methodColor: string;
  language: 'en' | 'ar';
}

export default function MathKeypad({ question, onAnswer, onCheck, currentInput, onInputChange, methodColor, language }: Props) {
  const isAr = language === 'ar';
  const [mode, setMode] = useState<KeypadMode>('number');
  const [fracNum, setFracNum] = useState('');
  const [fracDen, setFracDen] = useState('');
  const [fracFocus, setFracFocus] = useState<'num' | 'den'>('num');

  useEffect(() => {
    const detected = detectMode(question);
    setMode(detected);
    setFracNum(''); setFracDen(''); setFracFocus('num');
    onInputChange('');
  }, [question]);

  const press = (key: string) => {
    if (mode === 'fraction') {
      const setter = fracFocus === 'num' ? setFracNum : setFracDen;
      const curr = fracFocus === 'num' ? fracNum : fracDen;
      if (key === '⌫') { setter(curr.slice(0, -1)); return; }
      if (key === '/') { setFracFocus('den'); return; }
      if (/\d/.test(key)) {
        const next = curr + key;
        setter(next);
        onInputChange(fracFocus === 'num' ? `${next}/${fracDen}` : `${fracNum}/${next}`);
      }
      return;
    }
    if (key === '⌫') { onInputChange(currentInput.slice(0, -1)); return; }
    if (key === '−') {
      if (currentInput.startsWith('-')) onInputChange(currentInput.slice(1));
      else onInputChange('-' + currentInput);
      return;
    }
    if (key === '.') {
      if (!currentInput.includes('.')) onInputChange(currentInput + '.');
      return;
    }
    if (key === '0' && currentInput === '0') return;
    onInputChange(currentInput + key);
  };

  const handleCheck = () => {
    if (mode === 'fraction') {
      const n = parseFloat(fracNum), d = parseFloat(fracDen);
      if (!isNaN(n) && !isNaN(d) && d !== 0) {
        onAnswer(n / d);
      }
      return;
    }
    const val = parseFloat(currentInput);
    if (!isNaN(val)) onCheck();
  };

  // ── Compare mode (first / equal / second) ──
  if (mode === 'compare') {
    return (
      <View style={styles.wrap}>
        <Text style={[styles.modeLabel, isAr && styles.rtl]}>
          {isAr ? 'اختر الكسر الأكبر' : 'Tap which fraction is greater'}
        </Text>
        <View style={styles.compareRow}>
          <TouchableOpacity style={[styles.compareBtn, { backgroundColor: methodColor }]}
            onPress={() => onAnswer(1)} activeOpacity={0.8}>
            <Text style={styles.compareBtnEmoji}>👈</Text>
            <Text style={styles.compareBtnText}>{isAr ? 'الأول أكبر' : 'First\nis bigger'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.compareBtn, styles.compareBtnEqual]}
            onPress={() => onAnswer(0)} activeOpacity={0.8}>
            <Text style={styles.compareBtnEmoji}>⚖️</Text>
            <Text style={[styles.compareBtnText, { color: Colors.aubergine }]}>
              {isAr ? 'متساويان' : 'Equal'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.compareBtn, { backgroundColor: Colors.coral }]}
            onPress={() => onAnswer(-1)} activeOpacity={0.8}>
            <Text style={styles.compareBtnEmoji}>👉</Text>
            <Text style={styles.compareBtnText}>{isAr ? 'الثاني أكبر' : 'Second\nis bigger'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // ── Position mode (1st / 2nd / 3rd) ──
  if (mode === 'position') {
    const labels = isAr
      ? ['الأول 🥇', 'الثاني 🥈', 'الثالث 🥉']
      : ['1st 🥇', '2nd 🥈', '3rd 🥉'];
    return (
      <View style={styles.wrap}>
        <Text style={[styles.modeLabel, isAr && styles.rtl]}>
          {isAr ? 'أي موضع يحمل الكسر الأكبر؟' : 'Which position holds the largest fraction?'}
        </Text>
        <View style={styles.posRow}>
          {[1, 2, 3].map((pos, i) => (
            <TouchableOpacity key={pos}
              style={[styles.posBtn, { backgroundColor: i === 0 ? methodColor : i === 1 ? Colors.amber : Colors.coral }]}
              onPress={() => onAnswer(pos)} activeOpacity={0.8}>
              <Text style={styles.posBtnText}>{labels[i]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  // ── Number + Fraction entry modes ──
  const ROWS = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['−', '0', '.'],
  ];

  const displayValue = mode === 'fraction'
    ? (fracNum || '?') + ' / ' + (fracDen || '?')
    : currentInput || '';

  const canCheck = mode === 'fraction'
    ? fracNum.length > 0 && fracDen.length > 0 && fracDen !== '0'
    : currentInput.length > 0 && currentInput !== '-';

  return (
    <View style={styles.wrap}>
      {/* Display + mode toggle */}
      <View style={styles.displayRow}>
        <View style={styles.displayBox}>
          <Text style={[styles.displayText, !displayValue && styles.displayPlaceholder]}>
            {displayValue || (isAr ? 'إجابتك' : 'Your answer')}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.modeToggle, mode === 'fraction' && { backgroundColor: methodColor }]}
          onPress={() => {
            const next = mode === 'fraction' ? 'number' : 'fraction';
            setMode(next);
            setFracNum(''); setFracDen(''); setFracFocus('num');
            onInputChange('');
          }}
          activeOpacity={0.8}
        >
          <Text style={[styles.modeToggleText, mode === 'fraction' && { color: Colors.white }]}>½</Text>
        </TouchableOpacity>
      </View>

      {/* Fraction focus toggle */}
      {mode === 'fraction' && (
        <View style={styles.fracFocusRow}>
          <TouchableOpacity
            style={[styles.fracFocusBtn, fracFocus === 'num' && { backgroundColor: methodColor }]}
            onPress={() => setFracFocus('num')} activeOpacity={0.8}>
            <Text style={[styles.fracFocusTxt, fracFocus === 'num' && { color: Colors.white }]}>
              {isAr ? 'البسط' : 'Numerator'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.fracSlash}>/</Text>
          <TouchableOpacity
            style={[styles.fracFocusBtn, fracFocus === 'den' && { backgroundColor: methodColor }]}
            onPress={() => setFracFocus('den')} activeOpacity={0.8}>
            <Text style={[styles.fracFocusTxt, fracFocus === 'den' && { color: Colors.white }]}>
              {isAr ? 'المقام' : 'Denominator'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Digit grid */}
      <View style={styles.grid}>
        {ROWS.map((row, ri) => (
          <View key={ri} style={styles.gridRow}>
            {row.map(key => (
              <TouchableOpacity
                key={key}
                style={[styles.key, key === '−' && styles.keySpecial, key === '.' && styles.keySpecial]}
                onPress={() => press(key)}
                activeOpacity={0.7}
              >
                <Text style={[styles.keyText, key === '−' && styles.keySpecialText]}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        {/* Bottom row: backspace + check */}
        <View style={styles.gridRow}>
          <TouchableOpacity style={[styles.key, styles.keyBackspace]} onPress={() => press('⌫')} activeOpacity={0.7}>
            <Text style={styles.keyBackspaceText}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.keyCheck, { backgroundColor: canCheck ? methodColor : Colors.border }]}
            onPress={handleCheck}
            disabled={!canCheck}
            activeOpacity={0.8}
          >
            <Text style={[styles.keyCheckText, !canCheck && { color: Colors.textLight }]}>
              {isAr ? '✓ تحقق' : '✓ Check'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: Colors.creamWarm, paddingHorizontal: Spacing.md, paddingTop: Spacing.md, paddingBottom: Spacing.lg },
  rtl: { textAlign: 'right' },

  // Display
  displayRow: { flexDirection: 'row', gap: Spacing.sm, marginBottom: Spacing.sm, alignItems: 'center' },
  displayBox: {
    flex: 1, backgroundColor: Colors.white, borderRadius: BorderRadius.lg, borderWidth: 2,
    borderColor: Colors.border, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md,
    minHeight: 56, justifyContent: 'center', ...Shadow.card,
  },
  displayText: { fontFamily: FontFamilies.displayBold, fontSize: 28, color: Colors.aubergine, textAlign: 'center' },
  displayPlaceholder: { color: Colors.textLight, fontFamily: FontFamilies.body, fontSize: 16 },
  modeToggle: {
    width: 52, height: 52, borderRadius: 26, backgroundColor: Colors.white,
    alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: Colors.border,
  },
  modeToggleText: { fontFamily: FontFamilies.displayBold, fontSize: 20, color: Colors.aubergine },

  // Fraction focus
  fracFocusRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: Spacing.sm, marginBottom: Spacing.sm },
  fracFocusBtn: { borderRadius: 999, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.xs, backgroundColor: Colors.white, borderWidth: 1.5, borderColor: Colors.border },
  fracFocusTxt: { fontFamily: FontFamilies.bodyBold, fontSize: 14, color: Colors.textMid },
  fracSlash: { fontFamily: FontFamilies.displayBold, fontSize: 22, color: Colors.aubergine },

  // Grid
  grid: { gap: Spacing.sm },
  gridRow: { flexDirection: 'row', gap: Spacing.sm },
  key: {
    flex: 1, height: 60, backgroundColor: Colors.white, borderRadius: BorderRadius.lg,
    alignItems: 'center', justifyContent: 'center', ...Shadow.card,
  },
  keyText: { fontFamily: FontFamilies.displayBold, fontSize: 24, color: Colors.aubergine },
  keySpecial: { backgroundColor: Colors.creamWarm, borderWidth: 1, borderColor: Colors.border },
  keySpecialText: { fontSize: 22, color: Colors.coral },
  keyBackspace: { flex: 1, backgroundColor: Colors.creamWarm, borderWidth: 1, borderColor: Colors.border },
  keyBackspaceText: { fontSize: 22, color: Colors.textMid },
  keyCheck: { flex: 2, height: 60, borderRadius: BorderRadius.lg, alignItems: 'center', justifyContent: 'center', ...Shadow.card },
  keyCheckText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.white },

  // Compare mode
  modeLabel: { fontFamily: FontFamilies.bodySemiBold, fontSize: 14, color: Colors.textMid, textAlign: 'center', marginBottom: Spacing.sm },
  compareRow: { flexDirection: 'row', gap: Spacing.sm },
  compareBtn: {
    flex: 1, borderRadius: BorderRadius.lg, paddingVertical: Spacing.lg,
    alignItems: 'center', justifyContent: 'center', gap: 4, ...Shadow.card,
  },
  compareBtnEqual: { backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.border },
  compareBtnEmoji: { fontSize: 24 },
  compareBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 13, color: Colors.white, textAlign: 'center' },

  // Position mode
  posRow: { gap: Spacing.sm },
  posBtn: { borderRadius: BorderRadius.lg, paddingVertical: Spacing.lg, alignItems: 'center', justifyContent: 'center', ...Shadow.card },
  posBtnText: { fontFamily: FontFamilies.bodyBold, fontSize: 18, color: Colors.white },
});
