// Julia Sets — i18n strings
// Arabic text is clean UTF-8. Numbers always stay as Western numerals (1,2,3...).

export type Language = 'en' | 'ar';

const strings = {
  en: {
    // Nav
    home: 'Home', learn: 'Learn', practice: 'Practice',
    challenge: 'Challenge', myPower: 'My Power',

    // Language screen
    chooseLanguage: 'Choose your language', english: 'English', arabic: 'Arabic',
    continue: 'Continue →',

    // Fun fact
    didYouKnow: 'Did you know?', letsGo: "Let's go →",

    // Who is learning
    whoIsLearning: "Who's learning today?", addNewLearner: '+ Add new learner',
    parentTeacher: 'Parent or teacher? Enter group code →',

    // Profile setup
    whatsYourName: "What's your name?", namePlaceholder: 'Enter your name',
    chooseAvatar: 'Choose your avatar',
    joinGroup: 'Join a group? (enter 6-character code)', groupCodePlaceholder: 'Group code',
    next: 'Next →', back: '← Back',

    // Grade selection
    whatGrade: 'What grade are you in?', grade: 'Grade', gradeLabel: 'Grade',
    pyp: 'PYP', mypTransition: 'MYP Transition', myp: 'MYP',

    // Onboarding
    howDoYouThink: 'How do you like to think?',
    vedicTitle: 'Vedic', vedicDesc: 'Find the fastest path',
    decomposeTitle: 'Decompose', decomposeDesc: 'Break it into parts',
    visualizeTitle: 'Visualize', visualizeDesc: 'See it as a picture',

    // Home greetings
    goodMorning: 'Good morning',
    goodAfternoon: 'Good afternoon',
    goodEvening: 'Good evening',
    inARow: 'in a row',
    keepGoingRoll: "Keep going — you're on a roll!",

    // Home
    todaysChallenge: "Today's Challenge 🎯", newChallengestoday: 'New challenges today! 🌅',
    solved: 'Solved', xp: 'XP', streak: 'day streak',

    // Solve screen
    problem: 'Problem', of: 'of',
    nowWhatsYourAnswer: "NOW — WHAT'S YOUR ANSWER?",
    nextProblem: 'Next problem →', seeHowItWorks: 'See how it works →',
    tryAgain: 'Try again', showMeSteps: 'Show me the steps',
    brilliant: '⭐ Brilliant!', perfectFirstTry: 'Perfect first try!',
    gotIt: 'Got it!', notQuite: 'Not quite — try again?',
    heresToSolveIt: "Here's how to solve it",
    nextStep: 'Next step →', showAllSteps: 'Show all steps',
    checkAnswer: '✓ Check',
    heresHowToSolve: "Here's how to solve it:",

    // Result screen
    sessionComplete: 'Session complete 🎉',
    backToHome: 'Back to home', viewMyPower: 'View my power',
    earnedThisSession: 'earned this session',

    // Profile screen
    problemsSolved: 'Problems solved', xpEarned: 'XP earned',
    dayStreak: 'Day streak', lessonsExplored: 'Lessons explored',
    changeMyMethod: 'Change my method', switchLearner: 'Switch learner',
    myGroup: 'My group', shareCode: 'Share code',
    masteryProgress: 'Mastery Progress',

    // Parent gate
    parentTeacherView: 'Parent or teacher view', enterGroupCode: 'Enter group code',
    orCreateGroup: 'OR', createNewGroup: 'Create a new group', enterCode: 'Enter code',

    // Parent screen
    parentView: 'Parent view', weeklyActivity: 'Weekly activity',
    topicGaps: 'Needs work on', recommendedPractice: 'Recommended practice',
    parentTips: 'Parent Tips', exportReport: 'Export weekly report', close: '✕',

    // Practice
    practiceHeading: 'Practice',
    addition: 'Addition', subtraction: 'Subtraction',
    multiplication: 'Multiplication', division: 'Division',
    allTopics: 'All Topics', problems: 'problems', noneAvailable: 'None available',
    imdone: "I'm done", levelComplete: '🏆 Level Complete!',
    nextLevel: 'Next Level →', stay: 'Stay',
    practiceComplete: 'Well done', practiceAccomplished: 'Practice accomplished!',
    score: 'Score', accuracy: 'Accuracy',
    currentLevel: 'Current level', keepGoing: 'Keep going? →',
    easy: 'Easy', medium: 'Medium', hard: 'Hard',
    chooseDifficulty: 'Choose difficulty',

    // Learn
    learnHeading: 'Learn', oneConceptAtATime: 'One concept at a time',
    ofLessonsExplored: 'lessons explored', markAsDone: 'Mark as done ✓',
    tryItYourself: 'Try it yourself →', nextExample: 'Next example →',

    // Challenge
    challengeHeading: 'Challenge',
    streakSprint: 'Streak Sprint', streakSprintDesc: 'How long can you go?',
    realWorldChallenge: 'Real World Challenge', realWorldDesc: 'Solve real-world problems',
    masteryBoss: 'Mastery Boss', masteryBossDesc: '5 hard problems, no hints',
    mixedMethods: 'Mixed Methods', mixedMethodsDesc: 'Use all 3 superpowers',
    locked: 'Locked', needMoreProblems: 'Solve 10 problems to unlock',
    stop: 'Stop', bestStreak: 'Best streak',
    hit: 'Hit! 💥', miss: 'Miss!',
    bossDefeated: 'BOSS DEFEATED! 🏆', tryAgainBoss: 'Try again?',
    allSuperpowers: "You've used all 3 superpowers today!",
    realWorldComplete: 'You solved 5 real-world challenges!',
    using: 'Using:',
    sessionOver: '⚡ Session Over!',
    backToChallenges: 'Back to Challenges',

    // Feedback
    wellDone: 'Well done!', incorrect: 'Incorrect',
  },

  ar: {
    // Nav
    home: 'الرئيسية', learn: 'تعلّم', practice: 'تدرّب',
    challenge: 'تحدّي', myPower: 'قوّتي',

    // Language screen
    chooseLanguage: 'اختر لغتك', english: 'English', arabic: 'العربية',
    continue: 'استمر ←',

    // Fun fact
    didYouKnow: 'هل تعلم؟', letsGo: 'هيّا نبدأ ←',

    // Who is learning
    whoIsLearning: 'من يتعلّم اليوم؟', addNewLearner: '+ إضافة متعلّم جديد',
    parentTeacher: 'ولي أمر أو معلم؟ أدخل رمز المجموعة ←',

    // Profile setup
    whatsYourName: 'ما اسمك؟', namePlaceholder: 'أدخل اسمك',
    chooseAvatar: 'اختر صورتك',
    joinGroup: 'الانضمام لمجموعة؟ (أدخل الرمز المكوّن من 6 أحرف)', groupCodePlaceholder: 'رمز المجموعة',
    next: 'التالي ←', back: '→ رجوع',

    // Grade selection
    whatGrade: 'في أيّ صف أنت؟', grade: 'الصف', gradeLabel: 'الصف',
    pyp: 'PYP', mypTransition: 'انتقال MYP', myp: 'MYP',

    // Onboarding
    howDoYouThink: 'كيف تحبّ التفكير؟',
    vedicTitle: 'فيدي', vedicDesc: 'إيجاد أسرع طريق',
    decomposeTitle: 'تفكيك', decomposeDesc: 'تقسيم المسألة إلى أجزاء',
    visualizeTitle: 'تصوّر', visualizeDesc: 'حلّها برسم الصورة',

    // Home greetings
    goodMorning: 'صباح الخير',
    goodAfternoon: 'مساء الخير',
    goodEvening: 'مساء النور',
    inARow: 'يوماً متتالياً',
    keepGoingRoll: 'استمر — أنت رائع!',

    // Home
    todaysChallenge: 'تحدّي اليوم 🎯', newChallengestoday: 'تحدّيات جديدة اليوم! 🌅',
    solved: 'محلول', xp: 'نقطة', streak: 'يوم متتالي',

    // Solve screen
    problem: 'مسألة', of: 'من',
    nowWhatsYourAnswer: 'الآن — ما هي إجابتك؟',
    nextProblem: 'المسألة التالية ←', seeHowItWorks: 'كيف تُحلّ؟ ←',
    tryAgain: 'حاول مرة أخرى', showMeSteps: 'أرني الخطوات',
    brilliant: '⭐ ممتاز!', perfectFirstTry: 'مثالي من أول محاولة!',
    gotIt: 'أحسنت!', notQuite: 'ليس تماماً — حاول مرة أخرى؟',
    heresToSolveIt: 'هكذا تُحلّ المسألة',
    nextStep: 'الخطوة التالية ←', showAllSteps: 'أظهر كل الخطوات',
    checkAnswer: '✓ تحقق',
    heresHowToSolve: 'هكذا تُحلّ المسألة:',

    // Result screen
    sessionComplete: 'انتهت الجلسة 🎉',
    backToHome: 'العودة للرئيسية', viewMyPower: 'عرض قوّتي',
    earnedThisSession: 'نقاط في هذه الجلسة',

    // Profile screen
    problemsSolved: 'مسائل محلولة', xpEarned: 'نقاط مكتسبة',
    dayStreak: 'أيام متتالية', lessonsExplored: 'دروس مستكشفة',
    changeMyMethod: 'تغيير أسلوبي', switchLearner: 'تبديل المتعلّم',
    myGroup: 'مجموعتي', shareCode: 'مشاركة الرمز',
    masteryProgress: 'تقدّم الإتقان',

    // Parent gate
    parentTeacherView: 'عرض ولي الأمر أو المعلم', enterGroupCode: 'أدخل رمز المجموعة',
    orCreateGroup: 'أو', createNewGroup: 'إنشاء مجموعة جديدة', enterCode: 'أدخل الرمز',

    // Parent screen
    parentView: 'عرض ولي الأمر', weeklyActivity: 'النشاط الأسبوعي',
    topicGaps: 'يحتاج تحسيناً في', recommendedPractice: 'تدريب مقترح',
    parentTips: 'نصائح لولي الأمر', exportReport: 'تصدير التقرير الأسبوعي', close: '✕',

    // Practice
    practiceHeading: 'تدرّب',
    addition: 'الجمع', subtraction: 'الطرح',
    multiplication: 'الضرب', division: 'القسمة',
    allTopics: 'جميع المواضيع', problems: 'مسائل', noneAvailable: 'لا توجد مسائل',
    imdone: 'انتهيت', levelComplete: '🏆 اكتمل المستوى!',
    nextLevel: 'المستوى التالي ←', stay: 'ابقَ هنا',
    practiceComplete: 'أحسنت', practiceAccomplished: 'تم التدريب بنجاح!',
    score: 'الدرجة', accuracy: 'الدقة',
    currentLevel: 'المستوى الحالي', keepGoing: 'استمر؟ ←',
    easy: 'سهل', medium: 'متوسط', hard: 'صعب',
    chooseDifficulty: 'اختر المستوى',

    // Learn
    learnHeading: 'تعلّم', oneConceptAtATime: 'مفهوم واحد في كل مرة',
    ofLessonsExplored: 'دروس مستكشفة', markAsDone: 'تمّ ✓',
    tryItYourself: 'جرّبها بنفسك ←', nextExample: 'المثال التالي ←',

    // Challenge
    challengeHeading: 'تحدّي',
    streakSprint: 'سباق السلسلة', streakSprintDesc: 'كم تستطيع الاستمرار؟',
    realWorldChallenge: 'تحدّي الواقع', realWorldDesc: 'حلّ مسائل من الحياة الواقعية',
    masteryBoss: 'تحدّي الإتقان', masteryBossDesc: '5 مسائل صعبة بدون تلميحات',
    mixedMethods: 'الأساليب المختلطة', mixedMethodsDesc: 'استخدم الأساليب الثلاثة',
    locked: 'مقفل', needMoreProblems: 'حلّ 10 مسائل لفتح التحدّي',
    stop: 'توقّف', bestStreak: 'أفضل سلسلة',
    hit: 'إصابة! 💥', miss: 'فوت!',
    bossDefeated: 'تمّت هزيمة الخصم! 🏆', tryAgainBoss: 'حاول مرة أخرى؟',
    allSuperpowers: 'لقد استخدمت الأساليب الثلاثة اليوم!',
    realWorldComplete: 'حلّلت 5 تحدّيات من الحياة الواقعية!',
    using: 'باستخدام:',
    sessionOver: '⚡ انتهت الجلسة!',
    backToChallenges: 'العودة للتحديات',

    // Feedback
    wellDone: 'أحسنت!', incorrect: 'خطأ',
  },
};

export default strings;
export type StringKeys = keyof typeof strings.en;
