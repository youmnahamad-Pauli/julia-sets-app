// Julia Sets — unified theme
// Merges both theme versions so all screens work

export const Colors = {
  aubergine: '#3D1B3F',
  aubergineDark: '#2A0F2C',
  aubergineLight: '#5C2F5E',
  cream: '#FBF6F4',
  creamWarm: '#F5EEEA',
  pink: '#E8A8C0',
  coral: '#E87A6E',
  amber: '#E89F66',
  lavender: '#B591C7',
  white: '#FFFFFF',
  success: '#1D9E75',
  error: '#E87A6E',
  // legacy aliases
  successGreen: '#1D9E75',
  textDark: '#3D1B3F',
  textMid: '#6B4F6E',
  textLight: '#9B8A9D',
  border: '#E0D8D4',
  textPrimary: '#3D1B3F',
  textSecondary: '#6B4F6E',
  textTertiary: '#9B8A9D',
};

export const MethodColors = {
  vedic: '#B591C7',
  decompose: '#E89F66',
  visualize: '#E87A6E',
};

export const MethodNames = {
  vedic: 'Vedic — speed tricks',
  decompose: 'Decompose — break it down',
  visualize: 'Visualize — see the story',
};

export const SuperpowerNames = {
  vedic: 'Speed Thinker',
  decompose: 'Logic Builder',
  visualize: 'Visual Learner',
};

export const SuperpowerDescriptions = {
  vedic: 'You love finding the fastest path to the answer.',
  decompose: 'You like breaking problems into clean, logical steps.',
  visualize: 'You turn numbers into pictures and real-world stories.',
};

export const FontFamilies = {
  display: 'Fraunces_400Regular',
  displayItalic: 'Fraunces_400Regular_Italic',
  displayBold: 'Fraunces_700Bold',
  body: 'Nunito_400Regular',
  bodyBold: 'Nunito_700Bold',
  bodySemiBold: 'Nunito_600SemiBold',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Both Radius and BorderRadius — screens use either name
export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 999,
  full: 999,
};
export const BorderRadius = Radius;

export const FontSize = {
  xs: 11,
  sm: 12,
  md: 13,
  base: 14,
  lg: 15,
  xl: 17,
  xxl: 22,
  xxxl: 28,
  display: 38,
};

export const FontWeight = {
  regular: '400' as const,
  medium: '600' as const,
  bold: '700' as const,
  black: '800' as const,
};

export const Shadow = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  strong: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
};

export const getMethodColor = (method: 'vedic' | 'decompose' | 'visualize'): string =>
  MethodColors[method];

export const getMethodEmoji = (method: 'vedic' | 'decompose' | 'visualize'): string => {
  switch (method) {
    case 'vedic': return '⚡';
    case 'decompose': return '🔧';
    case 'visualize': return '👁';
  }
};

export const getMethodTitle = (method: 'vedic' | 'decompose' | 'visualize'): string => {
  switch (method) {
    case 'vedic': return 'Speed Thinker';
    case 'decompose': return 'Pattern Builder';
    case 'visualize': return 'Story Weaver';
  }
};

export const getMethodTagline = (method: 'vedic' | 'decompose' | 'visualize'): string => {
  switch (method) {
    case 'vedic': return 'You find the fastest path ⚡';
    case 'decompose': return 'You break it into parts 🔧';
    case 'visualize': return 'You solve by seeing the picture 👁';
  }
};
