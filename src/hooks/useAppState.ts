import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Method = 'vedic' | 'decompose' | 'visualize';
export type IBStage = 'PYP' | 'MYP_TRANSITION' | 'MYP';

export interface ChildProfile {
  id: string;
  name: string;
  grade: number;
  avatarEmoji: string;
  chosenMethod: Method;
  totalXP: number;
  streak: number;
  lastActiveDate: string;
  solvedIds: string[];
  parentCode?: string;
  groupCode?: string;
  ibStage: IBStage;
}

export interface MasteryRecord {
  topic: string;
  grade: number;
  totalAttempts: number;
  correctFirst: number;
  correctSecond: number;
  wrong: number;
  lastSeen: string;
  level: 'not_started' | 'developing' | 'secure' | 'mastered';
}

export type ScreenName =
  | 'language' | 'funFact' | 'whoIsLearning' | 'profileSetup'
  | 'gradeSelection' | 'onboarding' | 'home' | 'solve' | 'result'
  | 'profile' | 'parent' | 'parentGate' | 'practice'
  | 'practiceSession' | 'learn' | 'learnLesson' | 'challenge';

function getIBStage(grade: number): IBStage {
  if (grade <= 5) return 'PYP';
  if (grade === 6) return 'MYP_TRANSITION';
  return 'MYP';
}

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function generateGroupCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function useAppState() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('language');
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);
  const [activeProfile, setActiveProfile] = useState<ChildProfile | null>(null);
  const [masteryRecords, setMasteryRecords] = useState<Record<string, MasteryRecord>>({});
  const [viewedLessons, setViewedLessons] = useState<string[]>([]);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [funFactIndex, setFunFactIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  const navigate = useCallback((screen: ScreenName) => {
    setCurrentScreen(screen);
  }, []);

  const loadAllData = useCallback(async () => {
    try {
      const [langRaw, profilesRaw, activeIdRaw, factIndexRaw] = await Promise.all([
        AsyncStorage.getItem('julia_language'),
        AsyncStorage.getItem('julia_profiles'),
        AsyncStorage.getItem('julia_active_profile'),
        AsyncStorage.getItem('julia_fun_fact_index'),
      ]);

      if (langRaw) {
        setLanguage(langRaw as 'en' | 'ar');
      } else {
        setIsFirstLaunch(true);
      }
      if (factIndexRaw) setFunFactIndex(parseInt(factIndexRaw, 10));

      const allProfiles: ChildProfile[] = profilesRaw ? JSON.parse(profilesRaw) : [];
      setProfiles(allProfiles);

      if (allProfiles.length > 0 && activeIdRaw) {
        const found = allProfiles.find(p => p.id === activeIdRaw);
        if (found) {
          setActiveProfile(found);
          const [masteryRaw, viewedRaw] = await Promise.all([
            AsyncStorage.getItem(`profile_${found.id}_mastery`),
            AsyncStorage.getItem(`profile_${found.id}_viewed_lessons`),
          ]);
          if (masteryRaw) setMasteryRecords(JSON.parse(masteryRaw));
          if (viewedRaw) setViewedLessons(JSON.parse(viewedRaw));
        }
      }
    } catch (e) {
      console.error('Load error', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveLanguage = useCallback(async (lang: 'en' | 'ar') => {
    setLanguage(lang);
    await AsyncStorage.setItem('julia_language', lang);
  }, []);

  const advanceFunFact = useCallback(async (total: number) => {
    const next = (funFactIndex + 1) % total;
    setFunFactIndex(next);
    await AsyncStorage.setItem('julia_fun_fact_index', String(next));
  }, [funFactIndex]);

  const createProfile = useCallback(async (
    name: string,
    avatarEmoji: string,
    grade: number,
    method: Method,
    groupCode?: string
  ): Promise<ChildProfile> => {
    const id = generateId();
    const profile: ChildProfile = {
      id,
      name,
      grade,
      avatarEmoji,
      chosenMethod: method,
      totalXP: 0,
      streak: 0,
      lastActiveDate: '',
      solvedIds: [],
      groupCode,
      ibStage: getIBStage(grade),
    };

    const updatedProfiles = [...profiles, profile];
    setProfiles(updatedProfiles);
    setActiveProfile(profile);
    setMasteryRecords({});
    setViewedLessons([]);

    await Promise.all([
      AsyncStorage.setItem('julia_profiles', JSON.stringify(updatedProfiles)),
      AsyncStorage.setItem('julia_active_profile', id),
      AsyncStorage.setItem(`profile_${id}_mastery`, JSON.stringify({})),
      AsyncStorage.setItem(`profile_${id}_viewed_lessons`, JSON.stringify([])),
    ]);

    if (groupCode) {
      const groupRaw = await AsyncStorage.getItem(`group_${groupCode}`);
      const groupIds: string[] = groupRaw ? JSON.parse(groupRaw) : [];
      groupIds.push(id);
      await AsyncStorage.setItem(`group_${groupCode}`, JSON.stringify(groupIds));
    }

    return profile;
  }, [profiles]);

  const switchProfile = useCallback(async (profileId: string) => {
    const found = profiles.find(p => p.id === profileId);
    if (!found) return;

    setActiveProfile(found);
    await AsyncStorage.setItem('julia_active_profile', profileId);

    const [masteryRaw, viewedRaw] = await Promise.all([
      AsyncStorage.getItem(`profile_${profileId}_mastery`),
      AsyncStorage.getItem(`profile_${profileId}_viewed_lessons`),
    ]);
    setMasteryRecords(masteryRaw ? JSON.parse(masteryRaw) : {});
    setViewedLessons(viewedRaw ? JSON.parse(viewedRaw) : []);
  }, [profiles]);

  const deleteProfile = useCallback(async (profileId: string) => {
    const updatedProfiles = profiles.filter(p => p.id !== profileId);
    setProfiles(updatedProfiles);

    if (updatedProfiles.length === 0) {
      setActiveProfile(null);
      setMasteryRecords({});
      setViewedLessons([]);
      await AsyncStorage.multiRemove([
        'julia_profiles',
        'julia_active_profile',
        `profile_${profileId}_mastery`,
        `profile_${profileId}_viewed_lessons`,
        `profile_${profileId}_xp`,
        `profile_${profileId}_streak`,
        `profile_${profileId}_solved`,
      ]);
    } else {
      await AsyncStorage.setItem('julia_profiles', JSON.stringify(updatedProfiles));
      const newActive = updatedProfiles[0];
      setActiveProfile(newActive);
      await AsyncStorage.setItem('julia_active_profile', newActive.id);
    }
  }, [profiles]);

  const setMethod = useCallback(async (method: Method) => {
    if (!activeProfile) return;
    const updated = { ...activeProfile, chosenMethod: method };
    const updatedProfiles = profiles.map(p => p.id === activeProfile.id ? updated : p);
    setActiveProfile(updated);
    setProfiles(updatedProfiles);
    await AsyncStorage.setItem('julia_profiles', JSON.stringify(updatedProfiles));
  }, [activeProfile, profiles]);

  const addXP = useCallback(async (amount: number) => {
    if (!activeProfile) return;
    const updated = { ...activeProfile, totalXP: activeProfile.totalXP + amount };
    const updatedProfiles = profiles.map(p => p.id === activeProfile.id ? updated : p);
    setActiveProfile(updated);
    setProfiles(updatedProfiles);
    await AsyncStorage.setItem('julia_profiles', JSON.stringify(updatedProfiles));
  }, [activeProfile, profiles]);

  const updateStreak = useCallback(async () => {
    if (!activeProfile) return;
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    let newStreak = activeProfile.streak;

    if (activeProfile.lastActiveDate === today) {
      return;
    } else if (activeProfile.lastActiveDate === yesterday) {
      newStreak += 1;
    } else {
      newStreak = 1;
    }

    const updated = { ...activeProfile, streak: newStreak, lastActiveDate: today };
    const updatedProfiles = profiles.map(p => p.id === activeProfile.id ? updated : p);
    setActiveProfile(updated);
    setProfiles(updatedProfiles);
    await AsyncStorage.setItem('julia_profiles', JSON.stringify(updatedProfiles));
  }, [activeProfile, profiles]);

  const markSolved = useCallback(async (problemId: string) => {
    if (!activeProfile) return;
    if (activeProfile.solvedIds.includes(problemId)) return;
    const updated = { ...activeProfile, solvedIds: [...activeProfile.solvedIds, problemId] };
    const updatedProfiles = profiles.map(p => p.id === activeProfile.id ? updated : p);
    setActiveProfile(updated);
    setProfiles(updatedProfiles);
    await AsyncStorage.setItem('julia_profiles', JSON.stringify(updatedProfiles));
  }, [activeProfile, profiles]);

  const updateMastery = useCallback(async (
    topic: string,
    grade: number,
    result: 'correctFirst' | 'correctSecond' | 'wrong'
  ) => {
    if (!activeProfile) return;
    const key = `${topic}_${grade}`;
    const existing = masteryRecords[key] ?? {
      topic, grade,
      totalAttempts: 0, correctFirst: 0, correctSecond: 0, wrong: 0,
      lastSeen: '', level: 'not_started' as const,
    };

    const updated: MasteryRecord = {
      ...existing,
      totalAttempts: existing.totalAttempts + 1,
      correctFirst: result === 'correctFirst' ? existing.correctFirst + 1 : existing.correctFirst,
      correctSecond: result === 'correctSecond' ? existing.correctSecond + 1 : existing.correctSecond,
      wrong: result === 'wrong' ? existing.wrong + 1 : existing.wrong,
      lastSeen: new Date().toISOString(),
    };

    const accuracy = (updated.correctFirst + updated.correctSecond) / updated.totalAttempts;
    if (updated.totalAttempts < 3) {
      updated.level = 'developing';
    } else if (accuracy >= 0.9 && updated.correctFirst / updated.totalAttempts >= 0.7) {
      updated.level = 'mastered';
    } else if (accuracy >= 0.7) {
      updated.level = 'secure';
    } else {
      updated.level = 'developing';
    }

    const newRecords = { ...masteryRecords, [key]: updated };
    setMasteryRecords(newRecords);
    await AsyncStorage.setItem(`profile_${activeProfile.id}_mastery`, JSON.stringify(newRecords));
  }, [activeProfile, masteryRecords]);

  const markLessonViewed = useCallback(async (lessonId: string) => {
    if (!activeProfile) return;
    if (viewedLessons.includes(lessonId)) return;
    const updated = [...viewedLessons, lessonId];
    setViewedLessons(updated);
    await AsyncStorage.setItem(`profile_${activeProfile.id}_viewed_lessons`, JSON.stringify(updated));
  }, [activeProfile, viewedLessons]);

  const createGroup = useCallback(async (): Promise<string> => {
    const code = generateGroupCode();
    if (!activeProfile) return code;
    const updated = { ...activeProfile, groupCode: code };
    const updatedProfiles = profiles.map(p => p.id === activeProfile.id ? updated : p);
    setActiveProfile(updated);
    setProfiles(updatedProfiles);
    await Promise.all([
      AsyncStorage.setItem('julia_profiles', JSON.stringify(updatedProfiles)),
      AsyncStorage.setItem(`group_${code}`, JSON.stringify([activeProfile.id])),
    ]);
    return code;
  }, [activeProfile, profiles]);

  const joinGroup = useCallback(async (code: string): Promise<boolean> => {
    if (!activeProfile) return false;
    const groupRaw = await AsyncStorage.getItem(`group_${code}`);
    const groupIds: string[] = groupRaw ? JSON.parse(groupRaw) : [];
    if (!groupIds.includes(activeProfile.id)) groupIds.push(activeProfile.id);
    await AsyncStorage.setItem(`group_${code}`, JSON.stringify(groupIds));
    const updated = { ...activeProfile, groupCode: code };
    const updatedProfiles = profiles.map(p => p.id === activeProfile.id ? updated : p);
    setActiveProfile(updated);
    setProfiles(updatedProfiles);
    await AsyncStorage.setItem('julia_profiles', JSON.stringify(updatedProfiles));
    return true;
  }, [activeProfile, profiles]);

  const getGroupProfiles = useCallback(async (code: string): Promise<ChildProfile[]> => {
    const groupRaw = await AsyncStorage.getItem(`group_${code}`);
    if (!groupRaw) return [];
    const ids: string[] = JSON.parse(groupRaw);
    return profiles.filter(p => ids.includes(p.id));
  }, [profiles]);

  return {
    currentScreen, navigate,
    profiles, activeProfile,
    masteryRecords, viewedLessons,
    language, saveLanguage,
    funFactIndex, advanceFunFact,
    isLoaded, isFirstLaunch,
    loadAllData,
    createProfile, switchProfile, deleteProfile,
    setMethod, addXP, updateStreak, markSolved,
    updateMastery, markLessonViewed,
    createGroup, joinGroup, getGroupProfiles,
  };
}
