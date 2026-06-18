import React, { useEffect, useState, useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Fraunces_400Regular, Fraunces_400Regular_Italic, Fraunces_700Bold } from '@expo-google-fonts/fraunces';
import { Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { Colors, FontFamilies, Spacing, BorderRadius, Shadow } from './src/theme';
import { useAppState } from './src/hooks/useAppState';
import { LearnProblem, LEARN_BANK_BY_GRADE } from './src/data/learn';
import { hasPracticeBank } from './src/data/practice';
import type { PracticeResult } from './src/screens/PracticeSessionScreen';
import { syncContentInBackground, getFunFactCount } from './src/services/contentService';

import LanguageLandingScreen from './src/screens/LanguageLandingScreen';
import WhoIsLearningScreen from './src/screens/WhoIsLearningScreen';
import StudentProfileSetupScreen from './src/screens/StudentProfileSetupScreen';
import GradeSelectionScreen from './src/screens/GradeSelectionScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ParentGateScreen from './src/screens/ParentGateScreen';
import ParentScreen from './src/screens/ParentScreen';
import PracticeScreen from './src/screens/PracticeScreen';
import PracticeSessionScreen from './src/screens/PracticeSessionScreen';
import LearnScreen from './src/screens/LearnScreen';
import LearnLessonScreen from './src/screens/LearnLessonScreen';
import ChallengeScreen from './src/screens/ChallengeScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Fraunces_400Regular,
    Fraunces_400Regular_Italic,
    Fraunces_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  const app = useAppState();

  const [pendingName, setPendingName] = useState('');
  const [pendingAvatar, setPendingAvatar] = useState('');
  const [pendingGroupCode, setPendingGroupCode] = useState<string | undefined>();
  const [pendingGrade, setPendingGrade] = useState(1);

  const [activeTab, setActiveTab] = useState('home');

  const [practiceCategory, setPracticeCategory] = useState<string>('Addition');
  const [practiceLevel, setPracticeLevel] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [currentLesson, setCurrentLesson] = useState<LearnProblem | null>(null);
  const [parentGroupProfiles, setParentGroupProfiles] = useState<any[]>([]);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  useEffect(() => {
    app.loadAllData();
  }, []);

  useEffect(() => {
    syncContentInBackground();
  }, []);

  useEffect(() => {
    if (!app.isLoaded) return;
    if (app.isFirstLaunch) {
      app.navigate('language');
    } else if (app.activeProfile) {
      app.navigate('home');
    } else if (app.profiles.length > 0) {
      app.navigate('whoIsLearning');
    } else {
      app.navigate('language');
    }
  }, [app.isLoaded]);

  const handleSelectLanguage = useCallback(async (lang: 'en' | 'ar') => {
    await app.saveLanguage(lang);
    setLanguageModalVisible(false);
  }, [app]);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    if (tab === 'home')           app.navigate('home');
    else if (tab === 'learn')     app.navigate('learn');
    else if (tab === 'practice')  app.navigate('practice');
    else if (tab === 'challenge') app.navigate('challenge');
    else if (tab === 'profile')   app.navigate('profile');
  }, [app]);

  if (!fontsLoaded || !app.isLoaded) {
    return (
      <View style={appStyles.loadingScreen}>
        <ActivityIndicator size="large" color={Colors.pink} />
      </View>
    );
  }

  const profile = app.activeProfile;

  const renderScreen = () => {
    switch (app.currentScreen) {

      case 'language':
        return (
          <LanguageLandingScreen
            initialLanguage={app.language}
            onLanguageSelected={async (lang) => {
              await app.saveLanguage(lang);
              app.navigate('whoIsLearning');
            }}
          />
        );

      case 'whoIsLearning':
        return (
          <WhoIsLearningScreen
            profiles={app.profiles}
            language={app.language}
            onSelectProfile={async (p) => {
              await app.switchProfile(p.id);
              app.navigate('home');
              setActiveTab('home');
            }}
            onAddNewLearner={() => app.navigate('profileSetup')}
            onParentGate={() => app.navigate('parentGate')}
            onBack={profile
              ? () => { app.navigate('home'); setActiveTab('home'); }
              : undefined
            }
            onDeleteProfile={async (id) => {
              await app.deleteProfile(id);
              if (app.profiles.filter(p => p.id !== id).length === 0) {
                app.navigate('whoIsLearning');
              }
            }}
          />
        );

      case 'profileSetup':
        return (
          <StudentProfileSetupScreen
            language={app.language}
            onNext={(name, avatar, groupCode) => {
              setPendingName(name);
              setPendingAvatar(avatar);
              setPendingGroupCode(groupCode);
              app.navigate('gradeSelection');
            }}
            onBack={() => app.navigate('whoIsLearning')}
          />
        );

      case 'gradeSelection':
        return (
          <GradeSelectionScreen
            language={app.language}
            onGradeSelected={(grade) => {
              setPendingGrade(grade);
              app.navigate('onboarding');
            }}
            onBack={() => app.navigate('profileSetup')}
          />
        );

      case 'onboarding':
        return (
          <OnboardingScreen
            language={app.language}
            onMethodSelected={async (method: any) => {
              if (profile) {
                // Existing profile changing their method (from My Power)
                await app.setMethod(method);
                app.navigate('profile');
                setActiveTab('profile');
              } else {
                // New profile creation flow
                await app.createProfile(
                  pendingName,
                  pendingAvatar,
                  pendingGrade,
                  method,
                  pendingGroupCode,
                );
                app.navigate('home');
                setActiveTab('home');
              }
            }}
            onBack={() => {
              if (profile) {
                app.navigate('profile');
                setActiveTab('profile');
              } else {
                app.navigate('gradeSelection');
              }
            }}
          />
        );

      case 'home':
        if (!profile) {
          app.navigate('whoIsLearning');
          return null;
        }
        return (
          <HomeScreen
            profile={profile}
            language={app.language}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onAvatarPress={() => app.navigate('whoIsLearning')}
            funFactIndex={app.funFactIndex}
            onAdvanceFunFact={async () => {
              const count = await getFunFactCount(app.language);
              await app.advanceFunFact(count);
            }}
          />
        );


      case 'profile':
        if (!profile) { app.navigate('whoIsLearning'); return null; }
        return (
          <ProfileScreen
            profile={profile}
            masteryRecords={app.masteryRecords}
            viewedLessons={app.viewedLessons}
            language={app.language}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onChangeMethod={() => app.navigate('onboarding')}
            onSwitchLearner={() => app.navigate('whoIsLearning')}
            onCreateGroup={app.createGroup}
          />
        );

      case 'parentGate':
        return (
          <ParentGateScreen
            language={app.language}
            onGroupFound={async (code) => {
              const group = await app.getGroupProfiles(code);
              setParentGroupProfiles(group);
              app.navigate('parent');
            }}
            onGroupCreated={async (_code) => {
              setParentGroupProfiles([]);
              app.navigate('parent');
            }}
            onBack={() => app.navigate('whoIsLearning')}
          />
        );

      case 'parent':
        return (
          <ParentScreen
            groupProfiles={parentGroupProfiles}
            language={app.language}
            onClose={() => app.navigate('whoIsLearning')}
          />
        );

      case 'practice':
        if (!profile) { app.navigate('whoIsLearning'); return null; }
        return (
          <PracticeScreen
            profile={profile}
            language={app.language}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onStartPractice={(category, level) => {
              setPracticeCategory(category);
              setPracticeLevel(level);
              app.navigate('practiceSession');
            }}
          />
        );

      case 'practiceSession':
        if (!profile) { app.navigate('whoIsLearning'); return null; }
        return (
          <PracticeSessionScreen
            profile={profile}
            language={app.language}
            category={practiceCategory}
            level={practiceLevel}
            onDone={async (xp: number, results: PracticeResult[]) => {
              if (xp > 0) await app.addXP(xp);
              for (const r of results) {
                if (r.result !== 'wrong') await app.markSolved(r.problem.id);
                await app.updateMastery(r.problem.category, r.problem.grade, r.result);
              }
              if (results.length > 0) await app.updateStreak();
              app.navigate('practice');
            }}
            onGoToLesson={(learnProblemId: string) => {
              const lp = (LEARN_BANK_BY_GRADE[profile.grade] ?? []).find((l: LearnProblem) => l.id === learnProblemId);
              if (lp) {
                setCurrentLesson(lp);
                setActiveTab('learn');
                app.navigate('learnLesson');
              }
            }}
          />
        );

      case 'learn':
        if (!profile) { app.navigate('whoIsLearning'); return null; }
        return (
          <LearnScreen
            profile={profile}
            viewedLessons={app.viewedLessons}
            language={app.language}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onOpenLesson={(lesson) => {
              setCurrentLesson(lesson);
              app.navigate('learnLesson');
            }}
          />
        );

      case 'learnLesson':
        if (!profile || !currentLesson) { app.navigate('learn'); return null; }
        return (
          <LearnLessonScreen
            lesson={currentLesson}
            profile={profile}
            language={app.language}
            onBack={() => app.navigate('learn')}
            onMarkDone={async (id) => {
              await app.markLessonViewed(id);
            }}
            onTryItYourself={(lesson) => {
              if (hasPracticeBank(profile.grade)) {
                setPracticeCategory(lesson.category);
                setPracticeLevel(lesson.level);
                app.navigate('practiceSession');
              } else {
                setActiveTab('practice');
                app.navigate('practice');
              }
            }}
            isViewed={app.viewedLessons.includes(currentLesson.id)}
          />
        );

      case 'challenge':
        if (!profile) { app.navigate('whoIsLearning'); return null; }
        return (
          <ChallengeScreen
            profile={profile}
            language={app.language}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onAddXP={async (xp) => {
              if (xp > 0) await app.addXP(xp);
            }}
          />
        );

      default:
        return (
          <View style={appStyles.loadingScreen}>
            <ActivityIndicator color={Colors.pink} />
          </View>
        );
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        {renderScreen()}

        <TouchableOpacity
          style={appStyles.globeButton}
          onPress={() => setLanguageModalVisible(true)}
          activeOpacity={0.8}
        >
          <Text style={appStyles.globeIcon}>🌐</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={languageModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <TouchableOpacity
          style={appStyles.modalOverlay}
          activeOpacity={1}
          onPress={() => setLanguageModalVisible(false)}
        >
          <View style={appStyles.langModal}>
            <Text style={appStyles.langModalTitle}>Language / اللغة</Text>
            <TouchableOpacity
              style={[appStyles.langOption, app.language === 'en' && appStyles.langOptionActive]}
              onPress={() => handleSelectLanguage('en')}
            >
              <Text style={[appStyles.langOptionText, app.language === 'en' && appStyles.langOptionTextActive]}>
                🇬🇧  English
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[appStyles.langOption, app.language === 'ar' && appStyles.langOptionActive]}
              onPress={() => handleSelectLanguage('ar')}
            >
              <Text style={[appStyles.langOptionText, app.language === 'ar' && appStyles.langOptionTextActive]}>
                العربية  🇦🇪
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const appStyles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: Colors.aubergine,
    alignItems: 'center',
    justifyContent: 'center',
  },
  globeButton: {
    position: 'absolute',
    top: 48,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  globeIcon: {
    fontSize: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  langModal: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    width: 240,
    ...Shadow.strong,
  },
  langModalTitle: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 13,
    color: Colors.textMid,
    textAlign: 'center',
    marginBottom: Spacing.md,
    letterSpacing: 0.5,
  },
  langOption: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.sm,
    backgroundColor: Colors.cream,
    alignItems: 'center',
  },
  langOptionActive: {
    backgroundColor: Colors.aubergine,
  },
  langOptionText: {
    fontFamily: FontFamilies.bodySemiBold,
    fontSize: 16,
    color: Colors.aubergine,
  },
  langOptionTextActive: {
    color: Colors.white,
  },
});
