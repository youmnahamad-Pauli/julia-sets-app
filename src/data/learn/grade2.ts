// ============================================================
// Julia Sets — Grade 2 Learn Bank
// Auto-generated — do not edit by hand
// 63 problems × 3 methods (Vedic / Decompose / Visualize)
// ============================================================

export interface LearnStep {
  step: number;
  title_en: string;
  title_ar: string;
  explanation_en: string;
  explanation_ar: string;
}

export interface LearnMethod {
  steps: LearnStep[];
  hint_en: string;
  hint_ar: string;
  result_en: string;
  result_ar: string;
}

export interface LearnMeta {
  lower_grade_equivalent: string | null;
  upper_grade_equivalent: string | null;
  fun_fact_tag: string;
}

export interface LearnProblem {
  id: string;
  grade: number;
  bank: 'common' | 'specific';
  category: string;
  level: 'Easy' | 'Medium' | 'Hard';
  question_en: string;
  question_ar: string;
  answer: number;
  methods: {
    vedic: LearnMethod;
    decompose: LearnMethod;
    visualize: LearnMethod;
  };
  meta: LearnMeta;
}

export const grade2LearnBank: LearnProblem[] = 
[
  {
    "id": "g2-common-add-easy-001",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "23 + 14 = ?",
    "question_ar": "23 + 14 = ؟",
    "answer": 37,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 23 + 14. Work left to right: start with the tens digits, 2 and 1.",
            "explanation_ar": "لدينا 23 + 14. نعمل من اليسار إلى اليمين: نبدأ بخانة العشرات، 2 و 1."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 20 + 10 = 30.",
            "explanation_ar": "اجمع العشرات: 20 + 10 = 30."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 3 + 4 = 7.",
            "explanation_ar": "اجمع الآحاد: 3 + 4 = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 30 + 7 = 37. So 23 + 14 = 37.",
            "explanation_ar": "اجمع 30 + 7 = 37. إذن 23 + 14 = 37."
          }
        ],
        "hint_en": "Add the tens first (20 + 10), then the units (3 + 4).",
        "hint_ar": "اجمع العشرات أولاً (20 + 10)، ثم الآحاد (3 + 4).",
        "result_en": "23 + 14 = 37",
        "result_ar": "23 + 14 = 37"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 23 into 20 + 3, and split 14 into 10 + 4.",
            "explanation_ar": "قسّم 23 إلى 20 + 3، وقسّم 14 إلى 10 + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 20 + 10 = 30. Add the units: 3 + 4 = 7.",
            "explanation_ar": "اجمع العشرات: 20 + 10 = 30. اجمع الآحاد: 3 + 4 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts back together: 30 + 7 = 37.",
            "explanation_ar": "أعد تجميع الأجزاء: 30 + 7 = 37."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 23 + 14. Tens give 30, units give 7, total is 37. Correct!",
            "explanation_ar": "تحقق: 23 + 14. العشرات تعطي 30، والآحاد تعطي 7، المجموع 37. صحيح!"
          }
        ],
        "hint_en": "Break each number into tens and units, then add each group separately.",
        "hint_ar": "قسّم كل عدد إلى عشرات وآحاد، ثم اجمع كل مجموعة على حدة.",
        "result_en": "23 + 14 = 37",
        "result_ar": "23 + 14 = 37"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 23 blue blocks and 14 red blocks sitting on a table.",
            "explanation_ar": "تخيّل 23 مكعباً أزرق و 14 مكعباً أحمر موضوعة على طاولة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group the blue blocks: 2 rods of 10 and 3 singles. Group the red blocks: 1 rod of 10 and 4 singles.",
            "explanation_ar": "رتّب المكعبات الزرقاء: عصا من 10 وعصا من 10 و 3 مفردة. رتّب المكعبات الحمراء: عصا من 10 و 4 مفردة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the rods: 2 + 1 = 3 rods of 10, that's 30. Count the singles: 3 + 4 = 7.",
            "explanation_ar": "عدّ العصي: 2 + 1 = 3 عصي من 10، أي 30. عدّ المفردة: 3 + 4 = 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "30 ones-rods and 7 singles make 37. So 23 + 14 = 37.",
            "explanation_ar": "30 من العصي و 7 مفردة تساوي 37. إذن 23 + 14 = 37."
          }
        ],
        "hint_en": "Picture base-10 blocks: group the rods of ten, then the single units.",
        "hint_ar": "تخيّل مكعبات العشرات: رتّب عصي العشرات أولاً، ثم الوحدات المفردة.",
        "result_en": "23 + 14 = 37",
        "result_ar": "23 + 14 = 37"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-add-easy-002",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "41 + 25 = ?",
    "question_ar": "41 + 25 = ؟",
    "answer": 66,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 41 + 25. Work left to right: start with the tens digits, 4 and 2.",
            "explanation_ar": "لدينا 41 + 25. نعمل من اليسار إلى اليمين: نبدأ بخانة العشرات، 4 و 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 40 + 20 = 60.",
            "explanation_ar": "اجمع العشرات: 40 + 20 = 60."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 1 + 5 = 6.",
            "explanation_ar": "اجمع الآحاد: 1 + 5 = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 60 + 6 = 66. So 41 + 25 = 66.",
            "explanation_ar": "اجمع 60 + 6 = 66. إذن 41 + 25 = 66."
          }
        ],
        "hint_en": "Add the tens first (40 + 20), then the units (1 + 5).",
        "hint_ar": "اجمع العشرات أولاً (40 + 20)، ثم الآحاد (1 + 5).",
        "result_en": "41 + 25 = 66",
        "result_ar": "41 + 25 = 66"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 41 into 40 + 1, and split 25 into 20 + 5.",
            "explanation_ar": "قسّم 41 إلى 40 + 1، وقسّم 25 إلى 20 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 40 + 20 = 60. Add the units: 1 + 5 = 6.",
            "explanation_ar": "اجمع العشرات: 40 + 20 = 60. اجمع الآحاد: 1 + 5 = 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts back together: 60 + 6 = 66.",
            "explanation_ar": "أعد تجميع الأجزاء: 60 + 6 = 66."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 41 + 25. Tens give 60, units give 6, total is 66. Correct!",
            "explanation_ar": "تحقق: 41 + 25. العشرات تعطي 60، والآحاد تعطي 6، المجموع 66. صحيح!"
          }
        ],
        "hint_en": "Break each number into tens and units, then add each group separately.",
        "hint_ar": "قسّم كل عدد إلى عشرات وآحاد، ثم اجمع كل مجموعة على حدة.",
        "result_en": "41 + 25 = 66",
        "result_ar": "41 + 25 = 66"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine you are on a number line standing at 41. You need to jump 25 steps forward.",
            "explanation_ar": "تخيّل أنك على خط الأعداد واقف عند 41. عليك القفز 25 خطوة إلى الأمام."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "First, take a big jump of 20 from 41. You land on 61.",
            "explanation_ar": "أولاً، اقفز قفزة كبيرة بمقدار 20 من 41. ستصل إلى 61."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Now take 5 more small steps from 61: 62, 63, 64, 65, 66.",
            "explanation_ar": "الآن خذ 5 خطوات صغيرة من 61: 62، 63، 64، 65، 66."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 66. So 41 + 25 = 66.",
            "explanation_ar": "وصلت إلى 66. إذن 41 + 25 = 66."
          }
        ],
        "hint_en": "Jump 20 from 41 to reach 61, then jump 5 more to land on 66.",
        "hint_ar": "اقفز 20 من 41 لتصل إلى 61، ثم اقفز 5 خطوات أخرى لتصل إلى 66.",
        "result_en": "41 + 25 = 66",
        "result_ar": "41 + 25 = 66"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-add-easy-003",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "32 + 45 = ?",
    "question_ar": "32 + 45 = ؟",
    "answer": 77,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 32 + 45. Work left to right: start with the tens digits, 3 and 4.",
            "explanation_ar": "لدينا 32 + 45. نعمل من اليسار إلى اليمين: نبدأ بخانة العشرات، 3 و 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 30 + 40 = 70.",
            "explanation_ar": "اجمع العشرات: 30 + 40 = 70."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 2 + 5 = 7.",
            "explanation_ar": "اجمع الآحاد: 2 + 5 = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 70 + 7 = 77. So 32 + 45 = 77.",
            "explanation_ar": "اجمع 70 + 7 = 77. إذن 32 + 45 = 77."
          }
        ],
        "hint_en": "Add the tens first (30 + 40), then the units (2 + 5).",
        "hint_ar": "اجمع العشرات أولاً (30 + 40)، ثم الآحاد (2 + 5).",
        "result_en": "32 + 45 = 77",
        "result_ar": "32 + 45 = 77"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 32 into 30 + 2, and split 45 into 40 + 5.",
            "explanation_ar": "قسّم 32 إلى 30 + 2، وقسّم 45 إلى 40 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 30 + 40 = 70. Add the units: 2 + 5 = 7.",
            "explanation_ar": "اجمع العشرات: 30 + 40 = 70. اجمع الآحاد: 2 + 5 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts back together: 70 + 7 = 77.",
            "explanation_ar": "أعد تجميع الأجزاء: 70 + 7 = 77."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 32 + 45. Tens give 70, units give 7, total is 77. Correct!",
            "explanation_ar": "تحقق: 32 + 45. العشرات تعطي 70، والآحاد تعطي 7، المجموع 77. صحيح!"
          }
        ],
        "hint_en": "Break each number into tens and units, then add each group separately.",
        "hint_ar": "قسّم كل عدد إلى عشرات وآحاد، ثم اجمع كل مجموعة على حدة.",
        "result_en": "32 + 45 = 77",
        "result_ar": "32 + 45 = 77"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 32 base-10 blocks (3 rods of 10, 2 singles) and 45 blocks (4 rods of 10, 5 singles).",
            "explanation_ar": "تخيّل 32 مكعباً (3 عصي من 10 و 2 مفردة) و 45 مكعباً (4 عصي من 10 و 5 مفردة)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Line up all the ten-rods together: 3 rods + 4 rods = 7 rods.",
            "explanation_ar": "صفّ كل عصي العشرة معاً: 3 عصي + 4 عصي = 7 عصي."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "7 rods = 70. Now count the singles: 2 + 5 = 7 singles.",
            "explanation_ar": "7 عصي = 70. الآن عدّ المفردة: 2 + 5 = 7 مفردة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "70 from the rods plus 7 singles equals 77. So 32 + 45 = 77.",
            "explanation_ar": "70 من العصي زائد 7 مفردة يساوي 77. إذن 32 + 45 = 77."
          }
        ],
        "hint_en": "Group the rods of ten (3 + 4 = 7 rods = 70), then count the singles (2 + 5 = 7).",
        "hint_ar": "اجمع عصي العشرة (3 + 4 = 7 عصي = 70)، ثم عدّ المفردة (2 + 5 = 7).",
        "result_en": "32 + 45 = 77",
        "result_ar": "32 + 45 = 77"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-add-medium-001",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "47 + 36 = ?",
    "question_ar": "47 + 36 = ؟",
    "answer": 83,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 47 + 36. Work left to right: start with the tens, 4 and 3.",
            "explanation_ar": "لدينا 47 + 36. نعمل من اليسار إلى اليمين: نبدأ بالعشرات، 4 و 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 40 + 30 = 70.",
            "explanation_ar": "اجمع العشرات: 40 + 30 = 70."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 7 + 6 = 13. This is more than 9, so we carry 1 ten.",
            "explanation_ar": "اجمع الآحاد: 7 + 6 = 13. هذا أكبر من 9، لذا نحمل عشرة واحدة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 70 + 13 = 83. So 47 + 36 = 83.",
            "explanation_ar": "اجمع 70 + 13 = 83. إذن 47 + 36 = 83."
          }
        ],
        "hint_en": "Add the tens (40 + 30 = 70), then the units (7 + 6 = 13), and combine to get 83.",
        "hint_ar": "اجمع العشرات (40 + 30 = 70)، ثم الآحاد (7 + 6 = 13)، واجمعهما لتحصل على 83.",
        "result_en": "47 + 36 = 83",
        "result_ar": "47 + 36 = 83"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 47 into 40 + 7, and split 36 into 30 + 6.",
            "explanation_ar": "قسّم 47 إلى 40 + 7، وقسّم 36 إلى 30 + 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 40 + 30 = 70. Add the units: 7 + 6 = 13.",
            "explanation_ar": "اجمع العشرات: 40 + 30 = 70. اجمع الآحاد: 7 + 6 = 13."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts together: 70 + 13 = 83.",
            "explanation_ar": "أعد تجميع الأجزاء: 70 + 13 = 83."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 47 + 36. Tens give 70, units give 13, total is 83. Correct!",
            "explanation_ar": "تحقق: 47 + 36. العشرات تعطي 70، والآحاد تعطي 13، المجموع 83. صحيح!"
          }
        ],
        "hint_en": "Split both numbers, add tens (70) and units (13) separately, then combine for 83.",
        "hint_ar": "قسّم العددين، اجمع العشرات (70) والآحاد (13) على حدة، ثم اجمعهما لتحصل على 83.",
        "result_en": "47 + 36 = 83",
        "result_ar": "47 + 36 = 83"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Stand on a number line at 47. You need to jump forward 36 steps.",
            "explanation_ar": "قف على خط الأعداد عند 47. عليك القفز 36 خطوة إلى الأمام."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Take a big jump of 30 from 47. You land on 77.",
            "explanation_ar": "خذ قفزة كبيرة بمقدار 30 من 47. ستصل إلى 77."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Now jump 6 more from 77: 78, 79, 80, 81, 82, 83.",
            "explanation_ar": "الآن اقفز 6 خطوات أخرى من 77: 78، 79، 80، 81، 82، 83."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 83. So 47 + 36 = 83.",
            "explanation_ar": "وصلت إلى 83. إذن 47 + 36 = 83."
          }
        ],
        "hint_en": "Jump 30 from 47 to reach 77, then jump 6 more to land on 83.",
        "hint_ar": "اقفز 30 من 47 لتصل إلى 77، ثم اقفز 6 خطوات أخرى لتصل إلى 83.",
        "result_en": "47 + 36 = 83",
        "result_ar": "47 + 36 = 83"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-add-medium-002",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "58 + 25 = ?",
    "question_ar": "58 + 25 = ؟",
    "answer": 83,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 58 + 25. Work left to right: start with the tens, 5 and 2.",
            "explanation_ar": "لدينا 58 + 25. نعمل من اليسار إلى اليمين: نبدأ بالعشرات، 5 و 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 50 + 20 = 70.",
            "explanation_ar": "اجمع العشرات: 50 + 20 = 70."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 8 + 5 = 13. Since 13 is more than 9, we carry a ten.",
            "explanation_ar": "اجمع الآحاد: 8 + 5 = 13. بما أن 13 أكبر من 9، نحمل عشرة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 70 + 13 = 83. So 58 + 25 = 83.",
            "explanation_ar": "اجمع 70 + 13 = 83. إذن 58 + 25 = 83."
          }
        ],
        "hint_en": "Add the tens (50 + 20 = 70), then the units (8 + 5 = 13), and combine to get 83.",
        "hint_ar": "اجمع العشرات (50 + 20 = 70)، ثم الآحاد (8 + 5 = 13)، واجمعهما لتحصل على 83.",
        "result_en": "58 + 25 = 83",
        "result_ar": "58 + 25 = 83"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 58 into 50 + 8, and split 25 into 20 + 5.",
            "explanation_ar": "قسّم 58 إلى 50 + 8، وقسّم 25 إلى 20 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 50 + 20 = 70. Add the units: 8 + 5 = 13.",
            "explanation_ar": "اجمع العشرات: 50 + 20 = 70. اجمع الآحاد: 8 + 5 = 13."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts together: 70 + 13 = 83.",
            "explanation_ar": "أعد تجميع الأجزاء: 70 + 13 = 83."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 58 + 25. Tens give 70, units give 13, total is 83. Correct!",
            "explanation_ar": "تحقق: 58 + 25. العشرات تعطي 70، والآحاد تعطي 13، المجموع 83. صحيح!"
          }
        ],
        "hint_en": "Split both numbers, add tens (70) and units (13) separately, then combine for 83.",
        "hint_ar": "قسّم العددين، اجمع العشرات (70) والآحاد (13) على حدة، ثم اجمعهما لتحصل على 83.",
        "result_en": "58 + 25 = 83",
        "result_ar": "58 + 25 = 83"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 58 base-10 blocks: 5 rods of ten and 8 singles. Now add 25 more: 2 rods and 5 singles.",
            "explanation_ar": "تخيّل 58 مكعباً: 5 عصي من عشرة و 8 مفردة. الآن أضف 25 أخرى: 2 عصي و 5 مفردة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group all ten-rods: 5 + 2 = 7 rods = 70. Group all singles: 8 + 5 = 13 singles.",
            "explanation_ar": "اجمع كل عصي العشرة: 5 + 2 = 7 عصي = 70. اجمع كل المفردة: 8 + 5 = 13 مفردة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "13 singles = 1 extra rod of ten plus 3 singles. Total rods now: 7 + 1 = 8, with 3 singles left.",
            "explanation_ar": "13 مفردة = عصا إضافية من عشرة و 3 مفردة. إجمالي العصي الآن: 7 + 1 = 8، مع بقاء 3 مفردة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "8 rods = 80, plus 3 singles = 83. So 58 + 25 = 83.",
            "explanation_ar": "8 عصي = 80، زائد 3 مفردة = 83. إذن 58 + 25 = 83."
          }
        ],
        "hint_en": "Group the rods (5 + 2 = 7 rods), then regroup the 13 singles into 1 extra rod and 3 leftover, giving 83.",
        "hint_ar": "اجمع العصي (5 + 2 = 7 عصي)، ثم أعد تجميع الـ 13 مفردة إلى عصا إضافية و 3 متبقية، لتحصل على 83.",
        "result_en": "58 + 25 = 83",
        "result_ar": "58 + 25 = 83"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-add-medium-003",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "64 + 29 = ?",
    "question_ar": "64 + 29 = ؟",
    "answer": 93,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 64 + 29. Work left to right: start with the tens, 6 and 2.",
            "explanation_ar": "لدينا 64 + 29. نعمل من اليسار إلى اليمين: نبدأ بالعشرات، 6 و 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 60 + 20 = 80.",
            "explanation_ar": "اجمع العشرات: 60 + 20 = 80."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 4 + 9 = 13. Since 13 exceeds 9, we carry a ten.",
            "explanation_ar": "اجمع الآحاد: 4 + 9 = 13. بما أن 13 يتجاوز 9، نحمل عشرة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 80 + 13 = 93. So 64 + 29 = 93.",
            "explanation_ar": "اجمع 80 + 13 = 93. إذن 64 + 29 = 93."
          }
        ],
        "hint_en": "Add the tens (60 + 20 = 80), then the units (4 + 9 = 13), and combine to get 93.",
        "hint_ar": "اجمع العشرات (60 + 20 = 80)، ثم الآحاد (4 + 9 = 13)، واجمعهما لتحصل على 93.",
        "result_en": "64 + 29 = 93",
        "result_ar": "64 + 29 = 93"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 64 into 60 + 4, and split 29 into 20 + 9.",
            "explanation_ar": "قسّم 64 إلى 60 + 4، وقسّم 29 إلى 20 + 9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 60 + 20 = 80. Add the units: 4 + 9 = 13.",
            "explanation_ar": "اجمع العشرات: 60 + 20 = 80. اجمع الآحاد: 4 + 9 = 13."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts together: 80 + 13 = 93.",
            "explanation_ar": "أعد تجميع الأجزاء: 80 + 13 = 93."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 64 + 29. Tens give 80, units give 13, total is 93. Correct!",
            "explanation_ar": "تحقق: 64 + 29. العشرات تعطي 80، والآحاد تعطي 13، المجموع 93. صحيح!"
          }
        ],
        "hint_en": "Split both numbers, add tens (80) and units (13) separately, then combine for 93.",
        "hint_ar": "قسّم العددين، اجمع العشرات (80) والآحاد (13) على حدة، ثم اجمعهما لتحصل على 93.",
        "result_en": "64 + 29 = 93",
        "result_ar": "64 + 29 = 93"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Stand on a number line at 64. You need to add 29 steps.",
            "explanation_ar": "قف على خط الأعداد عند 64. عليك إضافة 29 خطوة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "First, make a jump of 30 to overshoot slightly: 64 + 30 = 94.",
            "explanation_ar": "أولاً، اقفز 30 للأمام قليلاً: 64 + 30 = 94."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "You added one too many (30 instead of 29), so step back 1: 94 - 1 = 93.",
            "explanation_ar": "أضفت واحدة زائدة (30 بدلاً من 29)، لذا ارجع خطوة واحدة: 94 - 1 = 93."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You land on 93. So 64 + 29 = 93.",
            "explanation_ar": "وصلت إلى 93. إذن 64 + 29 = 93."
          }
        ],
        "hint_en": "Jump 30 from 64 to reach 94, then step back 1 because you only need 29, giving 93.",
        "hint_ar": "اقفز 30 من 64 لتصل إلى 94، ثم ارجع خطوة واحدة لأنك تحتاج 29 فقط، لتحصل على 93.",
        "result_en": "64 + 29 = 93",
        "result_ar": "64 + 29 = 93"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-add-hard-001",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "76 + 58 = ?",
    "question_ar": "76 + 58 = ؟",
    "answer": 134,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 76 + 58. Work left to right: start with the tens, 7 and 5.",
            "explanation_ar": "لدينا 76 + 58. نعمل من اليسار إلى اليمين: نبدأ بالعشرات، 7 و 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 70 + 50 = 120.",
            "explanation_ar": "اجمع العشرات: 70 + 50 = 120."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 6 + 8 = 14. This carries a ten into the hundreds.",
            "explanation_ar": "اجمع الآحاد: 6 + 8 = 14. هذا يحمل عشرة إلى المئات."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 120 + 14 = 134. So 76 + 58 = 134.",
            "explanation_ar": "اجمع 120 + 14 = 134. إذن 76 + 58 = 134."
          }
        ],
        "hint_en": "Add the tens (70 + 50 = 120), then the units (6 + 8 = 14), and combine for 134.",
        "hint_ar": "اجمع العشرات (70 + 50 = 120)، ثم الآحاد (6 + 8 = 14)، واجمعهما لتحصل على 134.",
        "result_en": "76 + 58 = 134",
        "result_ar": "76 + 58 = 134"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 76 into 70 + 6, and split 58 into 50 + 8.",
            "explanation_ar": "قسّم 76 إلى 70 + 6، وقسّم 58 إلى 50 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 70 + 50 = 120. Add the units: 6 + 8 = 14.",
            "explanation_ar": "اجمع العشرات: 70 + 50 = 120. اجمع الآحاد: 6 + 8 = 14."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts together: 120 + 14 = 134.",
            "explanation_ar": "أعد تجميع الأجزاء: 120 + 14 = 134."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 76 + 58. Tens give 120, units give 14, total is 134. Correct!",
            "explanation_ar": "تحقق: 76 + 58. العشرات تعطي 120، والآحاد تعطي 14، المجموع 134. صحيح!"
          }
        ],
        "hint_en": "Split both numbers, add tens (120) and units (14) separately, then combine for 134.",
        "hint_ar": "قسّم العددين، اجمع العشرات (120) والآحاد (14) على حدة، ثم اجمعهما لتحصل على 134.",
        "result_en": "76 + 58 = 134",
        "result_ar": "76 + 58 = 134"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 76 base-10 blocks: 7 rods of ten and 6 singles. Now add 58 more: 5 rods and 8 singles.",
            "explanation_ar": "تخيّل 76 مكعباً: 7 عصي من عشرة و 6 مفردة. الآن أضف 58 أخرى: 5 عصي و 8 مفردة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group all ten-rods: 7 + 5 = 12 rods = 120. Group all singles: 6 + 8 = 14 singles.",
            "explanation_ar": "اجمع كل عصي العشرة: 7 + 5 = 12 عصا = 120. اجمع كل المفردة: 6 + 8 = 14 مفردة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "14 singles = 1 extra rod and 4 singles. Total rods: 12 + 1 = 13, with 4 singles left.",
            "explanation_ar": "14 مفردة = عصا إضافية و 4 مفردة. إجمالي العصي: 12 + 1 = 13، مع بقاء 4 مفردة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "13 rods = 130, plus 4 singles = 134. So 76 + 58 = 134.",
            "explanation_ar": "13 عصا = 130، زائد 4 مفردة = 134. إذن 76 + 58 = 134."
          }
        ],
        "hint_en": "Group all ten-rods (7 + 5 = 12), regroup the 14 singles into 1 extra rod and 4 leftover, giving 13 rods and 4 = 134.",
        "hint_ar": "اجمع كل عصي العشرة (7 + 5 = 12)، أعد تجميع الـ 14 مفردة إلى عصا إضافية و 4 متبقية، لتحصل على 13 عصا و 4 = 134.",
        "result_en": "76 + 58 = 134",
        "result_ar": "76 + 58 = 134"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-add-hard-002",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "85 + 67 = ?",
    "question_ar": "85 + 67 = ؟",
    "answer": 152,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 85 + 67. Work left to right: start with the tens, 8 and 6.",
            "explanation_ar": "لدينا 85 + 67. نعمل من اليسار إلى اليمين: نبدأ بالعشرات، 8 و 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 80 + 60 = 140.",
            "explanation_ar": "اجمع العشرات: 80 + 60 = 140."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 5 + 7 = 12. This carries a ten.",
            "explanation_ar": "اجمع الآحاد: 5 + 7 = 12. هذا يحمل عشرة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 140 + 12 = 152. So 85 + 67 = 152.",
            "explanation_ar": "اجمع 140 + 12 = 152. إذن 85 + 67 = 152."
          }
        ],
        "hint_en": "Add the tens (80 + 60 = 140), then the units (5 + 7 = 12), and combine for 152.",
        "hint_ar": "اجمع العشرات (80 + 60 = 140)، ثم الآحاد (5 + 7 = 12)، واجمعهما لتحصل على 152.",
        "result_en": "85 + 67 = 152",
        "result_ar": "85 + 67 = 152"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 85 into 80 + 5, and split 67 into 60 + 7.",
            "explanation_ar": "قسّم 85 إلى 80 + 5، وقسّم 67 إلى 60 + 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 80 + 60 = 140. Add the units: 5 + 7 = 12.",
            "explanation_ar": "اجمع العشرات: 80 + 60 = 140. اجمع الآحاد: 5 + 7 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts together: 140 + 12 = 152.",
            "explanation_ar": "أعد تجميع الأجزاء: 140 + 12 = 152."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 85 + 67. Tens give 140, units give 12, total is 152. Correct!",
            "explanation_ar": "تحقق: 85 + 67. العشرات تعطي 140، والآحاد تعطي 12، المجموع 152. صحيح!"
          }
        ],
        "hint_en": "Split both numbers, add tens (140) and units (12) separately, then combine for 152.",
        "hint_ar": "قسّم العددين، اجمع العشرات (140) والآحاد (12) على حدة، ثم اجمعهما لتحصل على 152.",
        "result_en": "85 + 67 = 152",
        "result_ar": "85 + 67 = 152"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Stand on a number line at 85. You need to jump forward 67 steps.",
            "explanation_ar": "قف على خط الأعداد عند 85. عليك القفز 67 خطوة إلى الأمام."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Take a big jump of 60 from 85. You land on 145.",
            "explanation_ar": "خذ قفزة كبيرة بمقدار 60 من 85. ستصل إلى 145."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Now jump 7 more from 145: 146, 147, 148, 149, 150, 151, 152.",
            "explanation_ar": "الآن اقفز 7 خطوات أخرى من 145: 146، 147، 148، 149، 150، 151، 152."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 152. So 85 + 67 = 152.",
            "explanation_ar": "وصلت إلى 152. إذن 85 + 67 = 152."
          }
        ],
        "hint_en": "Jump 60 from 85 to reach 145, then jump 7 more to land on 152.",
        "hint_ar": "اقفز 60 من 85 لتصل إلى 145، ثم اقفز 7 خطوات أخرى لتصل إلى 152.",
        "result_en": "85 + 67 = 152",
        "result_ar": "85 + 67 = 152"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-add-hard-003",
    "grade": 2,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "94 + 78 = ?",
    "question_ar": "94 + 78 = ؟",
    "answer": 172,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 94 + 78. Work left to right: start with the tens, 9 and 7.",
            "explanation_ar": "لدينا 94 + 78. نعمل من اليسار إلى اليمين: نبدأ بالعشرات، 9 و 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 90 + 70 = 160.",
            "explanation_ar": "اجمع العشرات: 90 + 70 = 160."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the units: 4 + 8 = 12. This carries a ten.",
            "explanation_ar": "اجمع الآحاد: 4 + 8 = 12. هذا يحمل عشرة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 160 + 12 = 172. So 94 + 78 = 172.",
            "explanation_ar": "اجمع 160 + 12 = 172. إذن 94 + 78 = 172."
          }
        ],
        "hint_en": "Add the tens (90 + 70 = 160), then the units (4 + 8 = 12), and combine for 172.",
        "hint_ar": "اجمع العشرات (90 + 70 = 160)، ثم الآحاد (4 + 8 = 12)، واجمعهما لتحصل على 172.",
        "result_en": "94 + 78 = 172",
        "result_ar": "94 + 78 = 172"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 94 into 90 + 4, and split 78 into 70 + 8.",
            "explanation_ar": "قسّم 94 إلى 90 + 4، وقسّم 78 إلى 70 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the tens: 90 + 70 = 160. Add the units: 4 + 8 = 12.",
            "explanation_ar": "اجمع العشرات: 90 + 70 = 160. اجمع الآحاد: 4 + 8 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Put the parts together: 160 + 12 = 172.",
            "explanation_ar": "أعد تجميع الأجزاء: 160 + 12 = 172."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 94 + 78. Tens give 160, units give 12, total is 172. Correct!",
            "explanation_ar": "تحقق: 94 + 78. العشرات تعطي 160، والآحاد تعطي 12، المجموع 172. صحيح!"
          }
        ],
        "hint_en": "Split both numbers, add tens (160) and units (12) separately, then combine for 172.",
        "hint_ar": "قسّم العددين، اجمع العشرات (160) والآحاد (12) على حدة، ثم اجمعهما لتحصل على 172.",
        "result_en": "94 + 78 = 172",
        "result_ar": "94 + 78 = 172"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 94 base-10 blocks: 9 rods of ten and 4 singles. Now add 78: 7 rods and 8 singles.",
            "explanation_ar": "تخيّل 94 مكعباً: 9 عصي من عشرة و 4 مفردة. الآن أضف 78: 7 عصي و 8 مفردة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group all ten-rods: 9 + 7 = 16 rods = 160. Group all singles: 4 + 8 = 12 singles.",
            "explanation_ar": "اجمع كل عصي العشرة: 9 + 7 = 16 عصا = 160. اجمع كل المفردة: 4 + 8 = 12 مفردة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "12 singles = 1 extra rod and 2 singles. Total rods: 16 + 1 = 17, with 2 singles left.",
            "explanation_ar": "12 مفردة = عصا إضافية و 2 مفردة. إجمالي العصي: 16 + 1 = 17، مع بقاء 2 مفردة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "17 rods = 170, plus 2 singles = 172. So 94 + 78 = 172.",
            "explanation_ar": "17 عصا = 170، زائد 2 مفردة = 172. إذن 94 + 78 = 172."
          }
        ],
        "hint_en": "Group all ten-rods (9 + 7 = 16), regroup the 12 singles into 1 extra rod and 2 leftover, giving 17 rods and 2 = 172.",
        "hint_ar": "اجمع كل عصي العشرة (9 + 7 = 16)، أعد تجميع الـ 12 مفردة إلى عصا إضافية و 2 متبقية، لتحصل على 17 عصا و 2 = 172.",
        "result_en": "94 + 78 = 172",
        "result_ar": "94 + 78 = 172"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-add-hard-003",
      "upper_grade_equivalent": "g3-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g2-common-sub-easy-001",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "45 − 12 = ?",
    "question_ar": "45 − 12 = ؟",
    "answer": 33,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 12 from 45. Work left-to-right: tens digit first, then units digit.",
            "explanation_ar": "نطرح 12 من 45. نعمل من اليسار إلى اليمين: نبدأ بخانة العشرات ثم خانة الآحاد."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 4 − 1 = 3, so 30. Units: 5 − 2 = 3.",
            "explanation_ar": "العشرات: 4 − 1 = 3، أي 30. الآحاد: 5 − 2 = 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Both results are non-negative, so no adjustment is needed. Tens give 30, units give 3.",
            "explanation_ar": "كلا النتيجتين غير سالبة، فلا حاجة لأي تعديل. العشرات تعطي 30 والآحاد تعطي 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "30 + 3 = 33. So 45 − 12 = 33.",
            "explanation_ar": "30 + 3 = 33. إذن 45 − 12 = 33."
          }
        ],
        "hint_en": "Subtract tens first (4−1), then units (5−2).",
        "hint_ar": "اطرح العشرات أولاً (4−1)، ثم الآحاد (5−2).",
        "result_en": "45 − 12 = 33",
        "result_ar": "45 − 12 = 33"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 12 into its tens and units: 12 = 10 + 2.",
            "explanation_ar": "قسّم 12 إلى عشرات وآحاد: 12 = 10 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "First subtract the tens: 45 − 10 = 35. Then subtract the units: 35 − 2 = 33.",
            "explanation_ar": "اطرح العشرات أولاً: 45 − 10 = 35. ثم اطرح الآحاد: 35 − 2 = 33."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are done. The result after both steps is 33.",
            "explanation_ar": "تمت العمليتان. الناتج بعد الخطوتين هو 33."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 33 + 12 = 45. ✓ So 45 − 12 = 33.",
            "explanation_ar": "تحقق: 33 + 12 = 45. ✓ إذن 45 − 12 = 33."
          }
        ],
        "hint_en": "Split 12 into 10 and 2, then subtract each part from 45 one at a time.",
        "hint_ar": "قسّم 12 إلى 10 و2، ثم اطرح كل جزء من 45 على حدة.",
        "result_en": "45 − 12 = 33",
        "result_ar": "45 − 12 = 33"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine you have 45 stickers and you give away 12. How many are left? Picture a number line starting at 45.",
            "explanation_ar": "تخيّل أن لديك 45 ملصقاً وأعطيت 12 منها. كم تبقى لديك؟ تخيّل خطاً عددياً يبدأ من 45."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On the number line, start at 45. Jump back 10 to land on 35, then jump back 2 more to land on 33.",
            "explanation_ar": "على خط الأعداد، ابدأ من 45. قفز للخلف 10 لتصل إلى 35، ثم قفز للخلف 2 أخرى لتصل إلى 33."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "You made two jumps backward totalling 12 steps: 45 → 35 → 33.",
            "explanation_ar": "قمت بقفزتين للخلف بمجموع 12 خطوة: 45 ← 35 ← 33."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 33. So 45 − 12 = 33 stickers remain.",
            "explanation_ar": "وصلت إلى 33. إذن يتبقى 33 ملصقاً، أي 45 − 12 = 33."
          }
        ],
        "hint_en": "Start at 45 on a number line, jump back 10 then back 2.",
        "hint_ar": "ابدأ من 45 على خط الأعداد، وقفز للخلف 10 ثم 2.",
        "result_en": "45 − 12 = 33",
        "result_ar": "45 − 12 = 33"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-sub-easy-002",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "67 − 23 = ?",
    "question_ar": "67 − 23 = ؟",
    "answer": 44,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 23 from 67. Work left-to-right: tens digit first, then units digit.",
            "explanation_ar": "نطرح 23 من 67. نعمل من اليسار إلى اليمين: نبدأ بخانة العشرات ثم خانة الآحاد."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 6 − 2 = 4, so 40. Units: 7 − 3 = 4.",
            "explanation_ar": "العشرات: 6 − 2 = 4، أي 40. الآحاد: 7 − 3 = 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Both results are non-negative, so no adjustment needed. Tens give 40, units give 4.",
            "explanation_ar": "كلا النتيجتين غير سالبة، فلا تعديل مطلوب. العشرات تعطي 40 والآحاد تعطي 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "40 + 4 = 44. So 67 − 23 = 44.",
            "explanation_ar": "40 + 4 = 44. إذن 67 − 23 = 44."
          }
        ],
        "hint_en": "Subtract tens first (6−2), then units (7−3).",
        "hint_ar": "اطرح العشرات أولاً (6−2)، ثم الآحاد (7−3).",
        "result_en": "67 − 23 = 44",
        "result_ar": "67 − 23 = 44"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 23 into tens and units: 23 = 20 + 3.",
            "explanation_ar": "قسّم 23 إلى عشرات وآحاد: 23 = 20 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract the tens first: 67 − 20 = 47. Then subtract the units: 47 − 3 = 44.",
            "explanation_ar": "اطرح العشرات أولاً: 67 − 20 = 47. ثم اطرح الآحاد: 47 − 3 = 44."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are complete. The final result is 44.",
            "explanation_ar": "تمت العمليتان. النتيجة النهائية هي 44."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 44 + 23 = 67. ✓ So 67 − 23 = 44.",
            "explanation_ar": "تحقق: 44 + 23 = 67. ✓ إذن 67 − 23 = 44."
          }
        ],
        "hint_en": "Split 23 into 20 and 3, subtract 20 from 67, then subtract 3.",
        "hint_ar": "قسّم 23 إلى 20 و3، اطرح 20 من 67، ثم اطرح 3.",
        "result_en": "67 − 23 = 44",
        "result_ar": "67 − 23 = 44"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You have 67 marbles and you give 23 away. How many remain? Picture a number line starting at 67.",
            "explanation_ar": "لديك 67 كرة وأعطيت 23 منها. كم يتبقى؟ تخيّل خطاً عددياً يبدأ من 67."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 67 on the number line. Jump back 20 to reach 47, then jump back 3 more to reach 44.",
            "explanation_ar": "ابدأ من 67 على خط الأعداد. قفز للخلف 20 لتصل إلى 47، ثم قفز للخلف 3 أخرى لتصل إلى 44."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two backward jumps totalling 23 steps: 67 → 47 → 44.",
            "explanation_ar": "قفزتان للخلف بمجموع 23 خطوة: 67 ← 47 ← 44."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 44. So 67 − 23 = 44 marbles remain.",
            "explanation_ar": "وصلت إلى 44. إذن يتبقى 44 كرة، أي 67 − 23 = 44."
          }
        ],
        "hint_en": "Start at 67, jump back 20, then jump back 3.",
        "hint_ar": "ابدأ من 67، وقفز للخلف 20، ثم قفز للخلف 3.",
        "result_en": "67 − 23 = 44",
        "result_ar": "67 − 23 = 44"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-sub-easy-003",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "89 − 34 = ?",
    "question_ar": "89 − 34 = ؟",
    "answer": 55,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 34 from 89. Work left-to-right: tens digit first, then units digit.",
            "explanation_ar": "نطرح 34 من 89. نعمل من اليسار إلى اليمين: نبدأ بخانة العشرات ثم خانة الآحاد."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 8 − 3 = 5, so 50. Units: 9 − 4 = 5.",
            "explanation_ar": "العشرات: 8 − 3 = 5، أي 50. الآحاد: 9 − 4 = 5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Both results are non-negative, so no adjustment is needed. Tens give 50, units give 5.",
            "explanation_ar": "كلا النتيجتين غير سالبة، فلا تعديل مطلوب. العشرات تعطي 50 والآحاد تعطي 5."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "50 + 5 = 55. So 89 − 34 = 55.",
            "explanation_ar": "50 + 5 = 55. إذن 89 − 34 = 55."
          }
        ],
        "hint_en": "Subtract tens first (8−3), then units (9−4).",
        "hint_ar": "اطرح العشرات أولاً (8−3)، ثم الآحاد (9−4).",
        "result_en": "89 − 34 = 55",
        "result_ar": "89 − 34 = 55"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 34 into tens and units: 34 = 30 + 4.",
            "explanation_ar": "قسّم 34 إلى عشرات وآحاد: 34 = 30 + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract the tens first: 89 − 30 = 59. Then subtract the units: 59 − 4 = 55.",
            "explanation_ar": "اطرح العشرات أولاً: 89 − 30 = 59. ثم اطرح الآحاد: 59 − 4 = 55."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are complete. The final result is 55.",
            "explanation_ar": "تمت العمليتان. النتيجة النهائية هي 55."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 55 + 34 = 89. ✓ So 89 − 34 = 55.",
            "explanation_ar": "تحقق: 55 + 34 = 89. ✓ إذن 89 − 34 = 55."
          }
        ],
        "hint_en": "Split 34 into 30 and 4, subtract 30 from 89, then subtract 4.",
        "hint_ar": "قسّم 34 إلى 30 و4، اطرح 30 من 89، ثم اطرح 4.",
        "result_en": "89 − 34 = 55",
        "result_ar": "89 − 34 = 55"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A shelf holds 89 books. You remove 34. How many stay? Picture a number line starting at 89.",
            "explanation_ar": "رف يحتوي على 89 كتاباً. أزلت 34 منها. كم يتبقى؟ تخيّل خطاً عددياً يبدأ من 89."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 89 on the number line. Jump back 30 to reach 59, then jump back 4 more to reach 55.",
            "explanation_ar": "ابدأ من 89 على خط الأعداد. قفز للخلف 30 لتصل إلى 59، ثم قفز للخلف 4 أخرى لتصل إلى 55."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two backward jumps totalling 34 steps: 89 → 59 → 55.",
            "explanation_ar": "قفزتان للخلف بمجموع 34 خطوة: 89 ← 59 ← 55."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 55. So 89 − 34 = 55 books remain on the shelf.",
            "explanation_ar": "وصلت إلى 55. إذن يتبقى 55 كتاباً على الرف، أي 89 − 34 = 55."
          }
        ],
        "hint_en": "Start at 89, jump back 30, then jump back 4.",
        "hint_ar": "ابدأ من 89، وقفز للخلف 30، ثم قفز للخلف 4.",
        "result_en": "89 − 34 = 55",
        "result_ar": "89 − 34 = 55"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-sub-medium-001",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "52 − 17 = ?",
    "question_ar": "52 − 17 = ؟",
    "answer": 35,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 17 from 52. Work left-to-right: tens first, then units. Notice units will need adjustment since 2 < 7.",
            "explanation_ar": "نطرح 17 من 52. نعمل من اليسار إلى اليمين: العشرات أولاً ثم الآحاد. لاحظ أن الآحاد ستحتاج تعديلاً لأن 2 < 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 5 − 1 = 4, so tentatively 40. Units: 2 − 7 = −5 (negative, needs adjustment).",
            "explanation_ar": "العشرات: 5 − 1 = 4، أي 40 مبدئياً. الآحاد: 2 − 7 = −5 (سالب، يحتاج تعديلاً)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Units are negative (−5), so reduce the tens result by 1 (40 becomes 30) and add 10 to the units (−5 + 10 = 5).",
            "explanation_ar": "الآحاد سالبة (−5)، لذا نُنقص نتيجة العشرات بمقدار 1 (40 تصبح 30) ونضيف 10 إلى الآحاد (−5 + 10 = 5)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "30 + 5 = 35. So 52 − 17 = 35.",
            "explanation_ar": "30 + 5 = 35. إذن 52 − 17 = 35."
          }
        ],
        "hint_en": "Since 2 < 7, borrow from the tens: reduce tens by 1 and add 10 to units.",
        "hint_ar": "بما أن 2 < 7، استعر من العشرات: نقّص العشرات بـ 1 وأضف 10 إلى الآحاد.",
        "result_en": "52 − 17 = 35",
        "result_ar": "52 − 17 = 35"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 17 into tens and units: 17 = 10 + 7.",
            "explanation_ar": "قسّم 17 إلى عشرات وآحاد: 17 = 10 + 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract the tens first: 52 − 10 = 42. Then subtract the units: 42 − 7 = 35.",
            "explanation_ar": "اطرح العشرات أولاً: 52 − 10 = 42. ثم اطرح الآحاد: 42 − 7 = 35."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are complete. The final result is 35.",
            "explanation_ar": "تمت العمليتان. النتيجة النهائية هي 35."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 35 + 17 = 52. ✓ So 52 − 17 = 35.",
            "explanation_ar": "تحقق: 35 + 17 = 52. ✓ إذن 52 − 17 = 35."
          }
        ],
        "hint_en": "Split 17 into 10 and 7. Subtract 10 from 52 first to get 42, then subtract 7.",
        "hint_ar": "قسّم 17 إلى 10 و7. اطرح 10 من 52 أولاً لتحصل على 42، ثم اطرح 7.",
        "result_en": "52 − 17 = 35",
        "result_ar": "52 − 17 = 35"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You baked 52 cookies and gave 17 to friends. How many are left? Picture a number line starting at 52.",
            "explanation_ar": "خبزت 52 كعكة وأعطيت 17 منها لأصدقائك. كم تبقى؟ تخيّل خطاً عددياً يبدأ من 52."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 52. Jump back 10 to reach 42, then jump back 7 more to reach 35.",
            "explanation_ar": "ابدأ من 52. قفز للخلف 10 لتصل إلى 42، ثم قفز للخلف 7 أخرى لتصل إلى 35."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two backward jumps totalling 17 steps: 52 → 42 → 35.",
            "explanation_ar": "قفزتان للخلف بمجموع 17 خطوة: 52 ← 42 ← 35."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 35. So 52 − 17 = 35 cookies remain.",
            "explanation_ar": "وصلت إلى 35. إذن يتبقى 35 كعكة، أي 52 − 17 = 35."
          }
        ],
        "hint_en": "Start at 52, jump back 10 to 42, then jump back 7 to 35.",
        "hint_ar": "ابدأ من 52، وقفز للخلف 10 إلى 42، ثم قفز للخلف 7 إلى 35.",
        "result_en": "52 − 17 = 35",
        "result_ar": "52 − 17 = 35"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-sub-medium-002",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "63 − 28 = ?",
    "question_ar": "63 − 28 = ؟",
    "answer": 35,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 28 from 63. Work left-to-right. Notice 3 < 8, so the units will require adjustment.",
            "explanation_ar": "نطرح 28 من 63. نعمل من اليسار إلى اليمين. لاحظ أن 3 < 8، لذا ستحتاج الآحاد إلى تعديل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 6 − 2 = 4, so tentatively 40. Units: 3 − 8 = −5 (negative).",
            "explanation_ar": "العشرات: 6 − 2 = 4، أي 40 مبدئياً. الآحاد: 3 − 8 = −5 (سالب)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Units are negative (−5), so reduce tens by 1 (40 → 30) and adjust units (−5 + 10 = 5).",
            "explanation_ar": "الآحاد سالبة (−5)، لذا نُنقص العشرات بـ 1 (40 ← 30) ونعدّل الآحاد (−5 + 10 = 5)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "30 + 5 = 35. So 63 − 28 = 35.",
            "explanation_ar": "30 + 5 = 35. إذن 63 − 28 = 35."
          }
        ],
        "hint_en": "Since 3 < 8, borrow from tens: reduce tens by 1 and add 10 to units.",
        "hint_ar": "بما أن 3 < 8، استعر من العشرات: نقّص العشرات بـ 1 وأضف 10 إلى الآحاد.",
        "result_en": "63 − 28 = 35",
        "result_ar": "63 − 28 = 35"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 28 into tens and units: 28 = 20 + 8.",
            "explanation_ar": "قسّم 28 إلى عشرات وآحاد: 28 = 20 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract the tens first: 63 − 20 = 43. Then subtract the units: 43 − 8 = 35.",
            "explanation_ar": "اطرح العشرات أولاً: 63 − 20 = 43. ثم اطرح الآحاد: 43 − 8 = 35."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are complete. The final result is 35.",
            "explanation_ar": "تمت العمليتان. النتيجة النهائية هي 35."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 35 + 28 = 63. ✓ So 63 − 28 = 35.",
            "explanation_ar": "تحقق: 35 + 28 = 63. ✓ إذن 63 − 28 = 35."
          }
        ],
        "hint_en": "Split 28 into 20 and 8. Subtract 20 from 63 to get 43, then subtract 8.",
        "hint_ar": "قسّم 28 إلى 20 و8. اطرح 20 من 63 لتحصل على 43، ثم اطرح 8.",
        "result_en": "63 − 28 = 35",
        "result_ar": "63 − 28 = 35"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A jar holds 63 candies. You eat 28 of them. How many are left? Picture a number line starting at 63.",
            "explanation_ar": "برطمان يحتوي على 63 حلوى. أكلت 28 منها. كم يتبقى؟ تخيّل خطاً عددياً يبدأ من 63."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 63. Jump back 20 to reach 43, then jump back 8 more to reach 35.",
            "explanation_ar": "ابدأ من 63. قفز للخلف 20 لتصل إلى 43، ثم قفز للخلف 8 أخرى لتصل إلى 35."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two backward jumps totalling 28 steps: 63 → 43 → 35.",
            "explanation_ar": "قفزتان للخلف بمجموع 28 خطوة: 63 ← 43 ← 35."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 35. So 63 − 28 = 35 candies remain in the jar.",
            "explanation_ar": "وصلت إلى 35. إذن يتبقى 35 حلوى في البرطمان، أي 63 − 28 = 35."
          }
        ],
        "hint_en": "Start at 63, jump back 20 to 43, then jump back 8 to 35.",
        "hint_ar": "ابدأ من 63، وقفز للخلف 20 إلى 43، ثم قفز للخلف 8 إلى 35.",
        "result_en": "63 − 28 = 35",
        "result_ar": "63 − 28 = 35"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-sub-medium-003",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "74 − 39 = ?",
    "question_ar": "74 − 39 = ؟",
    "answer": 35,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 39 from 74. Work left-to-right. Notice 4 < 9, so the units will need adjustment.",
            "explanation_ar": "نطرح 39 من 74. نعمل من اليسار إلى اليمين. لاحظ أن 4 < 9، لذا ستحتاج الآحاد إلى تعديل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 7 − 3 = 4, so tentatively 40. Units: 4 − 9 = −5 (negative).",
            "explanation_ar": "العشرات: 7 − 3 = 4، أي 40 مبدئياً. الآحاد: 4 − 9 = −5 (سالب)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Units are negative (−5), so reduce tens by 1 (40 → 30) and adjust units (−5 + 10 = 5).",
            "explanation_ar": "الآحاد سالبة (−5)، لذا نُنقص العشرات بـ 1 (40 ← 30) ونعدّل الآحاد (−5 + 10 = 5)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "30 + 5 = 35. So 74 − 39 = 35.",
            "explanation_ar": "30 + 5 = 35. إذن 74 − 39 = 35."
          }
        ],
        "hint_en": "Since 4 < 9, borrow from tens: reduce tens by 1 and add 10 to units.",
        "hint_ar": "بما أن 4 < 9، استعر من العشرات: نقّص العشرات بـ 1 وأضف 10 إلى الآحاد.",
        "result_en": "74 − 39 = 35",
        "result_ar": "74 − 39 = 35"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 39 into tens and units: 39 = 30 + 9.",
            "explanation_ar": "قسّم 39 إلى عشرات وآحاد: 39 = 30 + 9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract the tens first: 74 − 30 = 44. Then subtract the units: 44 − 9 = 35.",
            "explanation_ar": "اطرح العشرات أولاً: 74 − 30 = 44. ثم اطرح الآحاد: 44 − 9 = 35."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are complete. The final result is 35.",
            "explanation_ar": "تمت العمليتان. النتيجة النهائية هي 35."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 35 + 39 = 74. ✓ So 74 − 39 = 35.",
            "explanation_ar": "تحقق: 35 + 39 = 74. ✓ إذن 74 − 39 = 35."
          }
        ],
        "hint_en": "Split 39 into 30 and 9. Subtract 30 from 74 to get 44, then subtract 9.",
        "hint_ar": "قسّم 39 إلى 30 و9. اطرح 30 من 74 لتحصل على 44، ثم اطرح 9.",
        "result_en": "74 − 39 = 35",
        "result_ar": "74 − 39 = 35"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You collect 74 leaves in the park and drop 39 on the way home. How many do you keep? Picture a number line starting at 74.",
            "explanation_ar": "جمعت 74 ورقة شجر في الحديقة وأسقطت 39 منها في الطريق إلى المنزل. كم احتفظت؟ تخيّل خطاً عددياً يبدأ من 74."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 74. Jump back 30 to reach 44, then jump back 9 more to reach 35.",
            "explanation_ar": "ابدأ من 74. قفز للخلف 30 لتصل إلى 44، ثم قفز للخلف 9 أخرى لتصل إلى 35."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two backward jumps totalling 39 steps: 74 → 44 → 35.",
            "explanation_ar": "قفزتان للخلف بمجموع 39 خطوة: 74 ← 44 ← 35."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 35. So 74 − 39 = 35 leaves remain.",
            "explanation_ar": "وصلت إلى 35. إذن يتبقى 35 ورقة، أي 74 − 39 = 35."
          }
        ],
        "hint_en": "Start at 74, jump back 30 to 44, then jump back 9 to 35.",
        "hint_ar": "ابدأ من 74، وقفز للخلف 30 إلى 44، ثم قفز للخلف 9 إلى 35.",
        "result_en": "74 − 39 = 35",
        "result_ar": "74 − 39 = 35"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-sub-hard-001",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "84 − 37 = ?",
    "question_ar": "84 − 37 = ؟",
    "answer": 47,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 37 from 84. Work left-to-right: tens first, then units. Notice 4 < 7, so adjustment will be needed.",
            "explanation_ar": "نطرح 37 من 84. نعمل من اليسار إلى اليمين: العشرات أولاً ثم الآحاد. لاحظ أن 4 < 7، لذا سيكون هناك تعديل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 8 − 3 = 5, so tentatively 50. Units: 4 − 7 = −3 (negative).",
            "explanation_ar": "العشرات: 8 − 3 = 5، أي 50 مبدئياً. الآحاد: 4 − 7 = −3 (سالب)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Units are negative (−3), so reduce tens by 1 (50 → 40) and adjust units (−3 + 10 = 7).",
            "explanation_ar": "الآحاد سالبة (−3)، لذا نُنقص العشرات بـ 1 (50 ← 40) ونعدّل الآحاد (−3 + 10 = 7)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "40 + 7 = 47. So 84 − 37 = 47.",
            "explanation_ar": "40 + 7 = 47. إذن 84 − 37 = 47."
          }
        ],
        "hint_en": "Since 4 < 7, borrow from tens: reduce tens by 1 and add 10 to units.",
        "hint_ar": "بما أن 4 < 7، استعر من العشرات: نقّص العشرات بـ 1 وأضف 10 إلى الآحاد.",
        "result_en": "84 − 37 = 47",
        "result_ar": "84 − 37 = 47"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 37 into tens and units: 37 = 30 + 7.",
            "explanation_ar": "قسّم 37 إلى عشرات وآحاد: 37 = 30 + 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract the tens first: 84 − 30 = 54. Then subtract the units: 54 − 7 = 47.",
            "explanation_ar": "اطرح العشرات أولاً: 84 − 30 = 54. ثم اطرح الآحاد: 54 − 7 = 47."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are complete. The final result is 47.",
            "explanation_ar": "تمت العمليتان. النتيجة النهائية هي 47."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 47 + 37 = 84. ✓ So 84 − 37 = 47.",
            "explanation_ar": "تحقق: 47 + 37 = 84. ✓ إذن 84 − 37 = 47."
          }
        ],
        "hint_en": "Split 37 into 30 and 7. Subtract 30 from 84 to get 54, then subtract 7.",
        "hint_ar": "قسّم 37 إلى 30 و7. اطرح 30 من 84 لتحصل على 54، ثم اطرح 7.",
        "result_en": "84 − 37 = 47",
        "result_ar": "84 − 37 = 47"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "There are 84 seats in the school hall. 37 are already taken. How many are free? Picture a number line starting at 84.",
            "explanation_ar": "في قاعة المدرسة 84 مقعداً. 37 منها مشغولة بالفعل. كم مقعداً متبقياً؟ تخيّل خطاً عددياً يبدأ من 84."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 84. Jump back 30 to reach 54, then jump back 7 more to reach 47.",
            "explanation_ar": "ابدأ من 84. قفز للخلف 30 لتصل إلى 54، ثم قفز للخلف 7 أخرى لتصل إلى 47."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two backward jumps totalling 37 steps: 84 → 54 → 47.",
            "explanation_ar": "قفزتان للخلف بمجموع 37 خطوة: 84 ← 54 ← 47."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 47. So 84 − 37 = 47 free seats remain.",
            "explanation_ar": "وصلت إلى 47. إذن يتبقى 47 مقعداً متاحاً، أي 84 − 37 = 47."
          }
        ],
        "hint_en": "Start at 84, jump back 30 to 54, then jump back 7 to 47.",
        "hint_ar": "ابدأ من 84، وقفز للخلف 30 إلى 54، ثم قفز للخلف 7 إلى 47.",
        "result_en": "84 − 37 = 47",
        "result_ar": "84 − 37 = 47"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-sub-hard-002",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "91 − 46 = ?",
    "question_ar": "91 − 46 = ؟",
    "answer": 45,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 46 from 91. Work left-to-right: tens first, then units. Notice 1 < 6, so adjustment will be needed.",
            "explanation_ar": "نطرح 46 من 91. نعمل من اليسار إلى اليمين: العشرات أولاً ثم الآحاد. لاحظ أن 1 < 6، لذا سيكون هناك تعديل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 9 − 4 = 5, so tentatively 50. Units: 1 − 6 = −5 (negative).",
            "explanation_ar": "العشرات: 9 − 4 = 5، أي 50 مبدئياً. الآحاد: 1 − 6 = −5 (سالب)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Units are negative (−5), so reduce tens by 1 (50 → 40) and adjust units (−5 + 10 = 5).",
            "explanation_ar": "الآحاد سالبة (−5)، لذا نُنقص العشرات بـ 1 (50 ← 40) ونعدّل الآحاد (−5 + 10 = 5)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "40 + 5 = 45. So 91 − 46 = 45.",
            "explanation_ar": "40 + 5 = 45. إذن 91 − 46 = 45."
          }
        ],
        "hint_en": "Since 1 < 6, borrow from tens: reduce tens by 1 and add 10 to units.",
        "hint_ar": "بما أن 1 < 6، استعر من العشرات: نقّص العشرات بـ 1 وأضف 10 إلى الآحاد.",
        "result_en": "91 − 46 = 45",
        "result_ar": "91 − 46 = 45"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 46 into tens and units: 46 = 40 + 6.",
            "explanation_ar": "قسّم 46 إلى عشرات وآحاد: 46 = 40 + 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract the tens first: 91 − 40 = 51. Then subtract the units: 51 − 6 = 45.",
            "explanation_ar": "اطرح العشرات أولاً: 91 − 40 = 51. ثم اطرح الآحاد: 51 − 6 = 45."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are complete. The final result is 45.",
            "explanation_ar": "تمت العمليتان. النتيجة النهائية هي 45."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 45 + 46 = 91. ✓ So 91 − 46 = 45.",
            "explanation_ar": "تحقق: 45 + 46 = 91. ✓ إذن 91 − 46 = 45."
          }
        ],
        "hint_en": "Split 46 into 40 and 6. Subtract 40 from 91 to get 51, then subtract 6.",
        "hint_ar": "قسّم 46 إلى 40 و6. اطرح 40 من 91 لتحصل على 51، ثم اطرح 6.",
        "result_en": "91 − 46 = 45",
        "result_ar": "91 − 46 = 45"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A box has 91 crayons. You take out 46 to draw. How many stay in the box? Picture a number line starting at 91.",
            "explanation_ar": "صندوق يحتوي على 91 قلم تلوين. أخذت 46 منها للرسم. كم يتبقى في الصندوق؟ تخيّل خطاً عددياً يبدأ من 91."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 91. Jump back 40 to reach 51, then jump back 6 more to reach 45.",
            "explanation_ar": "ابدأ من 91. قفز للخلف 40 لتصل إلى 51، ثم قفز للخلف 6 أخرى لتصل إلى 45."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two backward jumps totalling 46 steps: 91 → 51 → 45.",
            "explanation_ar": "قفزتان للخلف بمجموع 46 خطوة: 91 ← 51 ← 45."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 45. So 91 − 46 = 45 crayons remain in the box.",
            "explanation_ar": "وصلت إلى 45. إذن يتبقى 45 قلم تلوين في الصندوق، أي 91 − 46 = 45."
          }
        ],
        "hint_en": "Start at 91, jump back 40 to 51, then jump back 6 to 45.",
        "hint_ar": "ابدأ من 91، وقفز للخلف 40 إلى 51، ثم قفز للخلف 6 إلى 45.",
        "result_en": "91 − 46 = 45",
        "result_ar": "91 − 46 = 45"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-sub-hard-003",
    "grade": 2,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "75 − 48 = ?",
    "question_ar": "75 − 48 = ؟",
    "answer": 27,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 48 from 75. Work left-to-right: tens first, then units. Notice 5 < 8, so adjustment will be needed.",
            "explanation_ar": "نطرح 48 من 75. نعمل من اليسار إلى اليمين: العشرات أولاً ثم الآحاد. لاحظ أن 5 < 8، لذا سيكون هناك تعديل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens: 7 − 4 = 3, so tentatively 30. Units: 5 − 8 = −3 (negative).",
            "explanation_ar": "العشرات: 7 − 4 = 3، أي 30 مبدئياً. الآحاد: 5 − 8 = −3 (سالب)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Units are negative (−3), so reduce tens by 1 (30 → 20) and adjust units (−3 + 10 = 7).",
            "explanation_ar": "الآحاد سالبة (−3)، لذا نُنقص العشرات بـ 1 (30 ← 20) ونعدّل الآحاد (−3 + 10 = 7)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "20 + 7 = 27. So 75 − 48 = 27.",
            "explanation_ar": "20 + 7 = 27. إذن 75 − 48 = 27."
          }
        ],
        "hint_en": "Since 5 < 8, borrow from tens: reduce tens by 1 and add 10 to units.",
        "hint_ar": "بما أن 5 < 8، استعر من العشرات: نقّص العشرات بـ 1 وأضف 10 إلى الآحاد.",
        "result_en": "75 − 48 = 27",
        "result_ar": "75 − 48 = 27"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 48 into tens and units: 48 = 40 + 8.",
            "explanation_ar": "قسّم 48 إلى عشرات وآحاد: 48 = 40 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract the tens first: 75 − 40 = 35. Then subtract the units: 35 − 8 = 27.",
            "explanation_ar": "اطرح العشرات أولاً: 75 − 40 = 35. ثم اطرح الآحاد: 35 − 8 = 27."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions are complete. The final result is 27.",
            "explanation_ar": "تمت العمليتان. النتيجة النهائية هي 27."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 27 + 48 = 75. ✓ So 75 − 48 = 27.",
            "explanation_ar": "تحقق: 27 + 48 = 75. ✓ إذن 75 − 48 = 27."
          }
        ],
        "hint_en": "Split 48 into 40 and 8. Subtract 40 from 75 to get 35, then subtract 8.",
        "hint_ar": "قسّم 48 إلى 40 و8. اطرح 40 من 75 لتحصل على 35، ثم اطرح 8.",
        "result_en": "75 − 48 = 27",
        "result_ar": "75 − 48 = 27"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You scored 75 points in a game and your friend subtracted 48 penalty points. How many points remain? Picture a number line starting at 75.",
            "explanation_ar": "حصلت على 75 نقطة في لعبة وطُرح منك 48 نقطة عقوبة. كم نقطة تبقى لديك؟ تخيّل خطاً عددياً يبدأ من 75."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 75. Jump back 40 to reach 35, then jump back 8 more to reach 27.",
            "explanation_ar": "ابدأ من 75. قفز للخلف 40 لتصل إلى 35، ثم قفز للخلف 8 أخرى لتصل إلى 27."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two backward jumps totalling 48 steps: 75 → 35 → 27.",
            "explanation_ar": "قفزتان للخلف بمجموع 48 خطوة: 75 ← 35 ← 27."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You landed on 27. So 75 − 48 = 27 points remain.",
            "explanation_ar": "وصلت إلى 27. إذن يتبقى 27 نقطة، أي 75 − 48 = 27."
          }
        ],
        "hint_en": "Start at 75, jump back 40 to 35, then jump back 8 to 27.",
        "hint_ar": "ابدأ من 75، وقفز للخلف 40 إلى 35، ثم قفز للخلف 8 إلى 27.",
        "result_en": "75 − 48 = 27",
        "result_ar": "75 − 48 = 27"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-sub-hard-003",
      "upper_grade_equivalent": "g3-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g2-common-mul-easy-001",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "4 × 2 = ?",
    "question_ar": "4 × 2 = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 4 by 2. The ×2 rule means you simply double the number.",
            "explanation_ar": "أنت تضرب 4 في 2. قاعدة الضرب في 2 تعني أنك تضاعف العدد ببساطة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Double 4: 4 + 4 = 8.",
            "explanation_ar": "ضاعف 4: 4 + 4 = 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "×2 always means doubling, so 4 × 2 = 8.",
            "explanation_ar": "الضرب في 2 يعني دائمًا المضاعفة، إذن 4 × 2 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "4 doubled is 8. The answer is 8.",
            "explanation_ar": "4 مضاعفة تساوي 8. الجواب هو 8."
          }
        ],
        "hint_en": "×2 means double — just add the number to itself.",
        "hint_ar": "الضرب في 2 يعني المضاعفة — فقط أضف العدد إلى نفسه.",
        "result_en": "4 × 2 = 8",
        "result_ar": "4 × 2 = 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 4 into 2 + 2 to make it easy to work with.",
            "explanation_ar": "قسّم 4 إلى 2 + 2 لتسهيل العملية."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2 × 2 = 4, and 2 × 2 = 4.",
            "explanation_ar": "2 × 2 = 4، و 2 × 2 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two parts together: 4 + 4 = 8.",
            "explanation_ar": "أضف الجزأين معًا: 4 + 4 = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Both parts give 4, and 4 + 4 = 8. Confirmed: 4 × 2 = 8.",
            "explanation_ar": "كلا الجزأين يعطيان 4، و 4 + 4 = 8. تأكيد: 4 × 2 = 8."
          }
        ],
        "hint_en": "Split 4 into 2 + 2, multiply each by 2, then add.",
        "hint_ar": "قسّم 4 إلى 2 + 2، واضرب كل جزء في 2، ثم اجمع.",
        "result_en": "4 × 2 = 8",
        "result_ar": "4 × 2 = 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 4 children, and each child has 2 stickers.",
            "explanation_ar": "تخيّل 4 أطفال، وكل طفل لديه 2 ملصقات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 4 rows with 2 dots each: • •  • •  • •  • •",
            "explanation_ar": "تصوّر 4 صفوف بدوتين في كل صف: • •  • •  • •  • •"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count all the dots: 2, 4, 6, 8. There are 8 dots in total.",
            "explanation_ar": "عدّ جميع النقاط: 2، 4، 6، 8. المجموع 8 نقاط."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "4 groups of 2 dots = 8 dots. So 4 × 2 = 8.",
            "explanation_ar": "4 مجموعات من 2 نقطة = 8 نقاط. إذن 4 × 2 = 8."
          }
        ],
        "hint_en": "Picture 4 pairs of dots and count them all.",
        "hint_ar": "تصوّر 4 أزواج من النقاط وعدّها جميعًا.",
        "result_en": "4 × 2 = 8",
        "result_ar": "4 × 2 = 8"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-mul-easy-001",
      "upper_grade_equivalent": "g3-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-mul-easy-002",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "7 × 5 = ?",
    "question_ar": "7 × 5 = ؟",
    "answer": 35,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 7 by 5. The ×5 trick: multiply by 10 then halve.",
            "explanation_ar": "أنت تضرب 7 في 5. حيلة الضرب في 5: اضرب في 10 ثم قسّم على 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "7 × 10 = 70.",
            "explanation_ar": "7 × 10 = 70."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Halve 70: 70 ÷ 2 = 35.",
            "explanation_ar": "قسّم 70 على 2: 70 ÷ 2 = 35."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "7 × 5 = 35.",
            "explanation_ar": "7 × 5 = 35."
          }
        ],
        "hint_en": "×5 trick: multiply by 10 then halve the result.",
        "hint_ar": "حيلة الضرب في 5: اضرب في 10 ثم قسّم الناتج على 2.",
        "result_en": "7 × 5 = 35",
        "result_ar": "7 × 5 = 35"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 7 into 5 + 2.",
            "explanation_ar": "قسّم 7 إلى 5 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5 × 5 = 25, and 2 × 5 = 10.",
            "explanation_ar": "5 × 5 = 25، و 2 × 5 = 10."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "25 + 10 = 35.",
            "explanation_ar": "25 + 10 = 35."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "25 + 10 = 35. Confirmed: 7 × 5 = 35.",
            "explanation_ar": "25 + 10 = 35. تأكيد: 7 × 5 = 35."
          }
        ],
        "hint_en": "Split 7 into 5 + 2, multiply each by 5, then add.",
        "hint_ar": "قسّم 7 إلى 5 + 2، واضرب كل جزء في 5، ثم اجمع.",
        "result_en": "7 × 5 = 35",
        "result_ar": "7 × 5 = 35"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 7 hands, and each hand has 5 fingers.",
            "explanation_ar": "تخيّل 7 أيدٍ، وكل يد لها 5 أصابع."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 7 rows with 5 dots each: 7 rows × 5 columns of dots.",
            "explanation_ar": "تصوّر 7 صفوف بخمس نقاط في كل صف: 7 صفوف × 5 أعمدة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count by 5s: 5, 10, 15, 20, 25, 30, 35.",
            "explanation_ar": "عدّ بخمسات: 5، 10، 15، 20، 25، 30، 35."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "7 groups of 5 = 35. So 7 × 5 = 35.",
            "explanation_ar": "7 مجموعات من 5 = 35. إذن 7 × 5 = 35."
          }
        ],
        "hint_en": "Count by 5s seven times: 5, 10, 15, 20, 25, 30, 35.",
        "hint_ar": "عدّ بخمسات سبع مرات: 5، 10، 15، 20، 25، 30، 35.",
        "result_en": "7 × 5 = 35",
        "result_ar": "7 × 5 = 35"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-mul-hard-001",
      "upper_grade_equivalent": "g3-common-mul-easy-002",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-mul-easy-003",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "9 × 2 = ?",
    "question_ar": "9 × 2 = ؟",
    "answer": 18,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 9 by 2. The ×2 rule is to double the number.",
            "explanation_ar": "أنت تضرب 9 في 2. قاعدة الضرب في 2 هي مضاعفة العدد."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Double 9: 9 + 9 = 18.",
            "explanation_ar": "ضاعف 9: 9 + 9 = 18."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "×2 always means doubling, so 9 × 2 = 18.",
            "explanation_ar": "الضرب في 2 يعني دائمًا المضاعفة، إذن 9 × 2 = 18."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "9 doubled is 18. The answer is 18.",
            "explanation_ar": "9 مضاعفة تساوي 18. الجواب هو 18."
          }
        ],
        "hint_en": "Double 9 by adding 9 + 9.",
        "hint_ar": "ضاعف 9 بجمع 9 + 9.",
        "result_en": "9 × 2 = 18",
        "result_ar": "9 × 2 = 18"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 9 into 10 − 1 to use a near-ten shortcut.",
            "explanation_ar": "قسّم 9 إلى 10 − 1 لاستخدام اختصار القريب من 10."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "10 × 2 = 20, and 1 × 2 = 2.",
            "explanation_ar": "10 × 2 = 20، و 1 × 2 = 2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20 − 2 = 18.",
            "explanation_ar": "20 − 2 = 18."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "20 − 2 = 18. Confirmed: 9 × 2 = 18.",
            "explanation_ar": "20 − 2 = 18. تأكيد: 9 × 2 = 18."
          }
        ],
        "hint_en": "Think of 9 as 10 − 1, then (10 × 2) − (1 × 2) = 20 − 2.",
        "hint_ar": "فكّر في 9 على أنها 10 − 1، ثم (10 × 2) − (1 × 2) = 20 − 2.",
        "result_en": "9 × 2 = 18",
        "result_ar": "9 × 2 = 18"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 9 bicycles, and each bicycle has 2 wheels.",
            "explanation_ar": "تخيّل 9 دراجات هوائية، وكل دراجة لها عجلتان."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 9 rows with 2 dots each: • •  • •  • • … (9 rows).",
            "explanation_ar": "تصوّر 9 صفوف بدوتين في كل صف: • •  • •  • • … (9 صفوف)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count by 2s: 2, 4, 6, 8, 10, 12, 14, 16, 18.",
            "explanation_ar": "عدّ بمثنى: 2، 4، 6، 8، 10، 12، 14، 16، 18."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "9 groups of 2 = 18 wheels total. So 9 × 2 = 18.",
            "explanation_ar": "9 مجموعات من 2 = 18 عجلة. إذن 9 × 2 = 18."
          }
        ],
        "hint_en": "Count by 2s nine times to reach 18.",
        "hint_ar": "عدّ بمثنى تسع مرات للوصول إلى 18.",
        "result_en": "9 × 2 = 18",
        "result_ar": "9 × 2 = 18"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-mul-hard-002",
      "upper_grade_equivalent": "g3-common-mul-easy-003",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-mul-medium-001",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "6 × 3 = ?",
    "question_ar": "6 × 3 = ؟",
    "answer": 18,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 6 by 3. Notice that 6 = 2 × 3, so 6 × 3 = 2 × 3 × 3.",
            "explanation_ar": "أنت تضرب 6 في 3. لاحظ أن 6 = 2 × 3، إذن 6 × 3 = 2 × 3 × 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "First compute 3 × 3 = 9.",
            "explanation_ar": "احسب أولًا 3 × 3 = 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now double the result: 9 × 2 = 18.",
            "explanation_ar": "الآن ضاعف الناتج: 9 × 2 = 18."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "6 × 3 = 18.",
            "explanation_ar": "6 × 3 = 18."
          }
        ],
        "hint_en": "Since 6 = 2 × 3, compute 3 × 3 = 9 then double it.",
        "hint_ar": "بما أن 6 = 2 × 3، احسب 3 × 3 = 9 ثم ضاعفه.",
        "result_en": "6 × 3 = 18",
        "result_ar": "6 × 3 = 18"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 6 into 5 + 1.",
            "explanation_ar": "قسّم 6 إلى 5 + 1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5 × 3 = 15, and 1 × 3 = 3.",
            "explanation_ar": "5 × 3 = 15، و 1 × 3 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15 + 3 = 18.",
            "explanation_ar": "15 + 3 = 18."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "15 + 3 = 18. Confirmed: 6 × 3 = 18.",
            "explanation_ar": "15 + 3 = 18. تأكيد: 6 × 3 = 18."
          }
        ],
        "hint_en": "Split 6 into 5 + 1, multiply each by 3, then add.",
        "hint_ar": "قسّم 6 إلى 5 + 1، واضرب كل جزء في 3، ثم اجمع.",
        "result_en": "6 × 3 = 18",
        "result_ar": "6 × 3 = 18"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 6 triangles, and each triangle has 3 corners.",
            "explanation_ar": "تخيّل 6 مثلثات، وكل مثلث له 3 زوايا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a grid of 6 rows and 3 columns of dots — 18 dots total.",
            "explanation_ar": "تصوّر شبكة من 6 صفوف و3 أعمدة من النقاط — 18 نقطة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count by 3s: 3, 6, 9, 12, 15, 18.",
            "explanation_ar": "عدّ بثلاثات: 3، 6، 9، 12، 15، 18."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "6 groups of 3 = 18. So 6 × 3 = 18.",
            "explanation_ar": "6 مجموعات من 3 = 18. إذن 6 × 3 = 18."
          }
        ],
        "hint_en": "Count by 3s six times: 3, 6, 9, 12, 15, 18.",
        "hint_ar": "عدّ بثلاثات ست مرات: 3، 6، 9، 12، 15، 18.",
        "result_en": "6 × 3 = 18",
        "result_ar": "6 × 3 = 18"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-mul-hard-003",
      "upper_grade_equivalent": "g3-common-mul-medium-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-mul-medium-002",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "8 × 4 = ?",
    "question_ar": "8 × 4 = ؟",
    "answer": 32,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 8 by 4. Both numbers are powers of 2, so repeated doubling works well.",
            "explanation_ar": "أنت تضرب 8 في 4. كلا العددين من مضاعفات 2، لذا تعمل المضاعفة المتكررة بشكل جيد."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Start with 8 × 2 = 16.",
            "explanation_ar": "ابدأ بـ 8 × 2 = 16."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 4 = 2 × 2, double 16 again: 16 × 2 = 32.",
            "explanation_ar": "بما أن 4 = 2 × 2، ضاعف 16 مرة أخرى: 16 × 2 = 32."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Double 8 to get 16, then double again to get 32. So 8 × 4 = 32.",
            "explanation_ar": "ضاعف 8 لتحصل على 16، ثم ضاعف مرة أخرى لتحصل على 32. إذن 8 × 4 = 32."
          }
        ],
        "hint_en": "Double 8 twice: 8 → 16 → 32.",
        "hint_ar": "ضاعف 8 مرتين: 8 ← 16 ← 32.",
        "result_en": "8 × 4 = 32",
        "result_ar": "8 × 4 = 32"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 8 into 5 + 3.",
            "explanation_ar": "قسّم 8 إلى 5 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5 × 4 = 20, and 3 × 4 = 12.",
            "explanation_ar": "5 × 4 = 20، و 3 × 4 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20 + 12 = 32.",
            "explanation_ar": "20 + 12 = 32."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "20 + 12 = 32. Confirmed: 8 × 4 = 32.",
            "explanation_ar": "20 + 12 = 32. تأكيد: 8 × 4 = 32."
          }
        ],
        "hint_en": "Split 8 into 5 + 3, multiply each by 4, then add.",
        "hint_ar": "قسّم 8 إلى 5 + 3، واضرب كل جزء في 4، ثم اجمع.",
        "result_en": "8 × 4 = 32",
        "result_ar": "8 × 4 = 32"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 8 tables in a classroom, with 4 chairs at each table.",
            "explanation_ar": "تخيّل 8 طاولات في فصل دراسي، مع 4 كراسي على كل طاولة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a rectangle of 8 rows and 4 columns of dots.",
            "explanation_ar": "تصوّر مستطيلًا من 8 صفوف و4 أعمدة من النقاط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count by 4s: 4, 8, 12, 16, 20, 24, 28, 32.",
            "explanation_ar": "عدّ برباعيات: 4، 8، 12، 16، 20، 24، 28، 32."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "8 groups of 4 = 32 chairs total. So 8 × 4 = 32.",
            "explanation_ar": "8 مجموعات من 4 = 32 كرسيًا. إذن 8 × 4 = 32."
          }
        ],
        "hint_en": "Count by 4s eight times: 4, 8, 12, 16, 20, 24, 28, 32.",
        "hint_ar": "عدّ برباعيات ثماني مرات: 4، 8، 12، 16، 20، 24، 28، 32.",
        "result_en": "8 × 4 = 32",
        "result_ar": "8 × 4 = 32"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-mul-hard-003",
      "upper_grade_equivalent": "g3-common-mul-medium-002",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-mul-medium-003",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "7 × 3 = ?",
    "question_ar": "7 × 3 = ؟",
    "answer": 21,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 7 by 3. Use the times-table pattern: count up by 3 seven times.",
            "explanation_ar": "أنت تضرب 7 في 3. استخدم نمط جدول الضرب: عدّ بثلاثات سبع مرات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "A useful anchor: 5 × 3 = 15.",
            "explanation_ar": "نقطة ارتكاز مفيدة: 5 × 3 = 15."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add 2 more threes to 15: 15 + 3 + 3 = 15 + 6 = 21.",
            "explanation_ar": "أضف ثلاثتين إضافيتين إلى 15: 15 + 3 + 3 = 15 + 6 = 21."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "5 × 3 = 15, plus 2 more threes gives 21. So 7 × 3 = 21.",
            "explanation_ar": "5 × 3 = 15، بإضافة ثلاثتين أخريين نحصل على 21. إذن 7 × 3 = 21."
          }
        ],
        "hint_en": "Start from 5 × 3 = 15 and add two more 3s.",
        "hint_ar": "ابدأ من 5 × 3 = 15 وأضف ثلاثتين أخريين.",
        "result_en": "7 × 3 = 21",
        "result_ar": "7 × 3 = 21"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 7 into 5 + 2.",
            "explanation_ar": "قسّم 7 إلى 5 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5 × 3 = 15, and 2 × 3 = 6.",
            "explanation_ar": "5 × 3 = 15، و 2 × 3 = 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15 + 6 = 21.",
            "explanation_ar": "15 + 6 = 21."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "15 + 6 = 21. Confirmed: 7 × 3 = 21.",
            "explanation_ar": "15 + 6 = 21. تأكيد: 7 × 3 = 21."
          }
        ],
        "hint_en": "Split 7 into 5 + 2, multiply each by 3, then add.",
        "hint_ar": "قسّم 7 إلى 5 + 2، واضرب كل جزء في 3، ثم اجمع.",
        "result_en": "7 × 3 = 21",
        "result_ar": "7 × 3 = 21"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 7 tricycles, and each tricycle has 3 wheels.",
            "explanation_ar": "تخيّل 7 دراجات ثلاثية العجلات، وكل دراجة لها 3 عجلات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a grid of 7 rows and 3 columns of dots.",
            "explanation_ar": "تصوّر شبكة من 7 صفوف و3 أعمدة من النقاط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count by 3s: 3, 6, 9, 12, 15, 18, 21.",
            "explanation_ar": "عدّ بثلاثات: 3، 6، 9، 12، 15، 18، 21."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "7 tricycles × 3 wheels = 21 wheels. So 7 × 3 = 21.",
            "explanation_ar": "7 دراجات × 3 عجلات = 21 عجلة. إذن 7 × 3 = 21."
          }
        ],
        "hint_en": "Count by 3s seven times: 3, 6, 9, 12, 15, 18, 21.",
        "hint_ar": "عدّ بثلاثات سبع مرات: 3، 6، 9، 12، 15، 18، 21.",
        "result_en": "7 × 3 = 21",
        "result_ar": "7 × 3 = 21"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-mul-hard-001",
      "upper_grade_equivalent": "g3-common-mul-medium-003",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-mul-hard-001",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "7 × 6 = ?",
    "question_ar": "7 × 6 = ؟",
    "answer": 42,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 7 by 6. Since 6 = 2 × 3, you can use repeated doubling.",
            "explanation_ar": "أنت تضرب 7 في 6. بما أن 6 = 2 × 3، يمكنك استخدام المضاعفة المتكررة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "7 × 3 = 21.",
            "explanation_ar": "7 × 3 = 21."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 6 = 2 × 3, double the result: 21 × 2 = 42.",
            "explanation_ar": "بما أن 6 = 2 × 3، ضاعف الناتج: 21 × 2 = 42."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "7 × 3 = 21, then double to get 42. So 7 × 6 = 42.",
            "explanation_ar": "7 × 3 = 21، ثم ضاعف لتحصل على 42. إذن 7 × 6 = 42."
          }
        ],
        "hint_en": "Compute 7 × 3 = 21, then double it to get 7 × 6.",
        "hint_ar": "احسب 7 × 3 = 21، ثم ضاعفه للحصول على 7 × 6.",
        "result_en": "7 × 6 = 42",
        "result_ar": "7 × 6 = 42"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 6 into 5 + 1.",
            "explanation_ar": "قسّم 6 إلى 5 + 1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "7 × 5 = 35, and 7 × 1 = 7.",
            "explanation_ar": "7 × 5 = 35، و 7 × 1 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "35 + 7 = 42.",
            "explanation_ar": "35 + 7 = 42."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "35 + 7 = 42. Confirmed: 7 × 6 = 42.",
            "explanation_ar": "35 + 7 = 42. تأكيد: 7 × 6 = 42."
          }
        ],
        "hint_en": "7 × 6 = 7 × 5 + 7 × 1 = 35 + 7 = 42.",
        "hint_ar": "7 × 6 = 7 × 5 + 7 × 1 = 35 + 7 = 42.",
        "result_en": "7 × 6 = 42",
        "result_ar": "7 × 6 = 42"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 7 ladybugs, and each ladybug has 6 spots.",
            "explanation_ar": "تخيّل 7 دعسوقات، وكل دعسوقة لها 6 نقاط."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a rectangle of 7 rows and 6 columns of dots.",
            "explanation_ar": "تصوّر مستطيلًا من 7 صفوف و6 أعمدة من النقاط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count by 6s: 6, 12, 18, 24, 30, 36, 42.",
            "explanation_ar": "عدّ بستات: 6، 12، 18، 24، 30، 36، 42."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "7 ladybugs × 6 spots = 42 spots. So 7 × 6 = 42.",
            "explanation_ar": "7 دعسوقات × 6 نقاط = 42 نقطة. إذن 7 × 6 = 42."
          }
        ],
        "hint_en": "Count by 6s seven times: 6, 12, 18, 24, 30, 36, 42.",
        "hint_ar": "عدّ بستات سبع مرات: 6، 12، 18، 24، 30، 36، 42.",
        "result_en": "7 × 6 = 42",
        "result_ar": "7 × 6 = 42"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-mul-hard-003",
      "upper_grade_equivalent": "g3-common-mul-hard-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-mul-hard-002",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "8 × 9 = ?",
    "question_ar": "8 × 9 = ؟",
    "answer": 72,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 8 × 9. Both are close to 10, so use the near-10 Vedic method.",
            "explanation_ar": "أنت تضرب 8 × 9. كلاهما قريب من 10، لذا استخدم طريقة القريب من 10 الفيدية."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Deficits from 10: 10 − 8 = 2, and 10 − 9 = 1.",
            "explanation_ar": "الفروق عن 10: 10 − 8 = 2، و 10 − 9 = 1."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Left part: 8 − 1 = 7 (or 9 − 2 = 7). Right part: 2 × 1 = 2. Result: 72.",
            "explanation_ar": "الجزء الأيسر: 8 − 1 = 7 (أو 9 − 2 = 7). الجزء الأيمن: 2 × 1 = 2. الناتج: 72."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine 7 and 2 to get 72. So 8 × 9 = 72.",
            "explanation_ar": "ضع 7 و2 معًا لتحصل على 72. إذن 8 × 9 = 72."
          }
        ],
        "hint_en": "Near-10 trick: deficits are 2 and 1. Cross-subtract: 8−1=7. Multiply deficits: 2×1=2. Answer: 72.",
        "hint_ar": "حيلة القريب من 10: الفروق 2 و1. اطرح أحدهما: 8−1=7. اضرب الفروق: 2×1=2. الجواب: 72.",
        "result_en": "8 × 9 = 72",
        "result_ar": "8 × 9 = 72"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 9 into 10 − 1.",
            "explanation_ar": "قسّم 9 إلى 10 − 1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "8 × 10 = 80, and 8 × 1 = 8.",
            "explanation_ar": "8 × 10 = 80، و 8 × 1 = 8."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "80 − 8 = 72.",
            "explanation_ar": "80 − 8 = 72."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "80 − 8 = 72. Confirmed: 8 × 9 = 72.",
            "explanation_ar": "80 − 8 = 72. تأكيد: 8 × 9 = 72."
          }
        ],
        "hint_en": "8 × 9 = 8 × 10 − 8 × 1 = 80 − 8 = 72.",
        "hint_ar": "8 × 9 = 8 × 10 − 8 × 1 = 80 − 8 = 72.",
        "result_en": "8 × 9 = 72",
        "result_ar": "8 × 9 = 72"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 8 boxes, and each box holds 9 crayons.",
            "explanation_ar": "تخيّل 8 صناديق، وكل صندوق يحتوي على 9 أقلام تلوين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a rectangle of 8 rows and 9 columns of dots — nearly a 10-column square with one column missing.",
            "explanation_ar": "تصوّر مستطيلًا من 8 صفوف و9 أعمدة من النقاط — يشبه مربعًا من 10 أعمدة بعمود ناقص."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count by 9s: 9, 18, 27, 36, 45, 54, 63, 72.",
            "explanation_ar": "عدّ بتساعيات: 9، 18، 27، 36، 45، 54، 63، 72."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "8 boxes × 9 crayons = 72 crayons. So 8 × 9 = 72.",
            "explanation_ar": "8 صناديق × 9 أقلام = 72 قلمًا. إذن 8 × 9 = 72."
          }
        ],
        "hint_en": "Count by 9s eight times: 9, 18, 27, 36, 45, 54, 63, 72.",
        "hint_ar": "عدّ بتساعيات ثماني مرات: 9، 18، 27، 36، 45، 54، 63، 72.",
        "result_en": "8 × 9 = 72",
        "result_ar": "8 × 9 = 72"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-mul-hard-003",
      "upper_grade_equivalent": "g3-common-mul-hard-002",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-mul-hard-003",
    "grade": 2,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "6 × 7 = ?",
    "question_ar": "6 × 7 = ؟",
    "answer": 42,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You are multiplying 6 × 7. Since 6 = 2 × 3, use repeated doubling of 7.",
            "explanation_ar": "أنت تضرب 6 × 7. بما أن 6 = 2 × 3، استخدم المضاعفة المتكررة لـ 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "First compute 7 × 3 = 21.",
            "explanation_ar": "احسب أولًا 7 × 3 = 21."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Double 21 because 6 = 2 × 3: 21 × 2 = 42.",
            "explanation_ar": "ضاعف 21 لأن 6 = 2 × 3: 21 × 2 = 42."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "7 × 3 = 21, then double to get 42. So 6 × 7 = 42.",
            "explanation_ar": "7 × 3 = 21، ثم ضاعف لتحصل على 42. إذن 6 × 7 = 42."
          }
        ],
        "hint_en": "Compute 7 × 3 = 21 then double it: 21 + 21 = 42.",
        "hint_ar": "احسب 7 × 3 = 21 ثم ضاعفه: 21 + 21 = 42.",
        "result_en": "6 × 7 = 42",
        "result_ar": "6 × 7 = 42"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 7 into 5 + 2.",
            "explanation_ar": "قسّم 7 إلى 5 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "6 × 5 = 30, and 6 × 2 = 12.",
            "explanation_ar": "6 × 5 = 30، و 6 × 2 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "30 + 12 = 42.",
            "explanation_ar": "30 + 12 = 42."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "30 + 12 = 42. Confirmed: 6 × 7 = 42.",
            "explanation_ar": "30 + 12 = 42. تأكيد: 6 × 7 = 42."
          }
        ],
        "hint_en": "6 × 7 = 6 × 5 + 6 × 2 = 30 + 12 = 42.",
        "hint_ar": "6 × 7 = 6 × 5 + 6 × 2 = 30 + 12 = 42.",
        "result_en": "6 × 7 = 42",
        "result_ar": "6 × 7 = 42"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 6 weeks of the year, and each week has 7 days.",
            "explanation_ar": "تخيّل 6 أسابيع من السنة، وكل أسبوع يحتوي على 7 أيام."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a rectangle of 6 rows and 7 columns of dots.",
            "explanation_ar": "تصوّر مستطيلًا من 6 صفوف و7 أعمدة من النقاط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count by 7s: 7, 14, 21, 28, 35, 42.",
            "explanation_ar": "عدّ بسبعات: 7، 14، 21، 28، 35، 42."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "6 weeks × 7 days = 42 days. So 6 × 7 = 42.",
            "explanation_ar": "6 أسابيع × 7 أيام = 42 يومًا. إذن 6 × 7 = 42."
          }
        ],
        "hint_en": "Count by 7s six times: 7, 14, 21, 28, 35, 42.",
        "hint_ar": "عدّ بسبعات ست مرات: 7، 14، 21، 28، 35، 42.",
        "result_en": "6 × 7 = 42",
        "result_ar": "6 × 7 = 42"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g2-common-mul-hard-001",
      "upper_grade_equivalent": "g3-common-mul-hard-003",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g2-common-div-easy-001",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "18 ÷ 2 = ?",
    "question_ar": "18 ÷ 2 = ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 18 by 2. Think of the inverse: 2 × ? = 18.",
            "explanation_ar": "عليك قسمة 18 على 2. فكّر في العكس: 2 × ? = 18."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 2 times table: 2×9 = 18.",
            "explanation_ar": "تذكّر جدول الضرب في 2: 2×9 = 18."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 2×9 = 18, the missing factor is 9. So 18 ÷ 2 = 9.",
            "explanation_ar": "بما أن 2×9 = 18، فالعامل المجهول هو 9. إذن 18 ÷ 2 = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 9.",
            "explanation_ar": "الجواب هو 9."
          }
        ],
        "hint_en": "Think: 2 × ? = 18",
        "hint_ar": "فكّر: 2 × ? = 18",
        "result_en": "18 ÷ 2 = 9",
        "result_ar": "18 ÷ 2 = 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 18 into two friendly parts: 10 + 8.",
            "explanation_ar": "قسّم 18 إلى جزأين سهلَين: 10 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "10 ÷ 2 = 5, and 8 ÷ 2 = 4.",
            "explanation_ar": "10 ÷ 2 = 5، و 8 ÷ 2 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 5 + 4 = 9.",
            "explanation_ar": "اجمع النتيجتين: 5 + 4 = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 9 × 2 = 18. ✓ The answer is 9.",
            "explanation_ar": "تحقّق: 9 × 2 = 18. ✓ الجواب هو 9."
          }
        ],
        "hint_en": "Split 18 into 10 + 8, then halve each part.",
        "hint_ar": "قسّم 18 إلى 10 + 8، ثم قسّم كل جزء على 2.",
        "result_en": "18 ÷ 2 = 9",
        "result_ar": "18 ÷ 2 = 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 18 apples shared equally between 2 baskets.",
            "explanation_ar": "تخيّل 18 تفاحة توزَّع بالتساوي على سلّتَين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture two baskets. Start placing apples one at a time into each basket until all 18 are placed.",
            "explanation_ar": "تصوَّر سلّتَين. ضع التفاحات واحدة تلو الأخرى في كل سلة حتى توزّع جميع الـ 18."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each basket ends up with 9 apples.",
            "explanation_ar": "تحتوي كل سلة على 9 تفاحات."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "18 apples ÷ 2 baskets = 9 apples per basket.",
            "explanation_ar": "18 تفاحة ÷ 2 سلّتين = 9 تفاحات لكل سلة."
          }
        ],
        "hint_en": "Picture 18 apples shared into 2 equal groups.",
        "hint_ar": "تخيّل 18 تفاحة تُوزَّع على مجموعتَين متساويتَين.",
        "result_en": "18 ÷ 2 = 9",
        "result_ar": "18 ÷ 2 = 9"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-003",
      "upper_grade_equivalent": "g3-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-common-div-easy-002",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "30 ÷ 5 = ?",
    "question_ar": "30 ÷ 5 = ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 30 by 5. Think of the inverse: 5 × ? = 30.",
            "explanation_ar": "عليك قسمة 30 على 5. فكّر في العكس: 5 × ? = 30."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 5 times table: 5×6 = 30.",
            "explanation_ar": "تذكّر جدول الضرب في 5: 5×6 = 30."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 5×6 = 30, the missing factor is 6. So 30 ÷ 5 = 6.",
            "explanation_ar": "بما أن 5×6 = 30، فالعامل المجهول هو 6. إذن 30 ÷ 5 = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 6.",
            "explanation_ar": "الجواب هو 6."
          }
        ],
        "hint_en": "Think: 5 × ? = 30",
        "hint_ar": "فكّر: 5 × ? = 30",
        "result_en": "30 ÷ 5 = 6",
        "result_ar": "30 ÷ 5 = 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 30 into two friendly parts: 25 + 5.",
            "explanation_ar": "قسّم 30 إلى جزأين سهلَين: 25 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25 ÷ 5 = 5, and 5 ÷ 5 = 1.",
            "explanation_ar": "25 ÷ 5 = 5، و 5 ÷ 5 = 1."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 5 + 1 = 6.",
            "explanation_ar": "اجمع النتيجتين: 5 + 1 = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 6 × 5 = 30. ✓ The answer is 6.",
            "explanation_ar": "تحقّق: 6 × 5 = 30. ✓ الجواب هو 6."
          }
        ],
        "hint_en": "Split 30 into 25 + 5, then divide each by 5.",
        "hint_ar": "قسّم 30 إلى 25 + 5، ثم اقسم كل جزء على 5.",
        "result_en": "30 ÷ 5 = 6",
        "result_ar": "30 ÷ 5 = 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 30 stickers shared equally among 5 friends.",
            "explanation_ar": "تخيّل 30 ملصقاً تُوزَّع بالتساوي على 5 أصدقاء."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 5 friends standing in a row. Hand out stickers one at a time to each friend until all 30 are given.",
            "explanation_ar": "تصوَّر 5 أصدقاء في صف. وزّع الملصقات واحداً تلو الآخر على كل صديق حتى تنتهي الـ 30."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each friend receives 6 stickers.",
            "explanation_ar": "يحصل كل صديق على 6 ملصقات."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "30 stickers ÷ 5 friends = 6 stickers per friend.",
            "explanation_ar": "30 ملصقاً ÷ 5 أصدقاء = 6 ملصقات لكل صديق."
          }
        ],
        "hint_en": "Picture 30 stickers shared equally among 5 friends.",
        "hint_ar": "تخيّل 30 ملصقاً تُوزَّع بالتساوي على 5 أصدقاء.",
        "result_en": "30 ÷ 5 = 6",
        "result_ar": "30 ÷ 5 = 6"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-002",
      "upper_grade_equivalent": "g3-common-div-easy-002",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-common-div-easy-003",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "16 ÷ 2 = ?",
    "question_ar": "16 ÷ 2 = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 16 by 2. Think of the inverse: 2 × ? = 16.",
            "explanation_ar": "عليك قسمة 16 على 2. فكّر في العكس: 2 × ? = 16."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 2 times table: 2×8 = 16.",
            "explanation_ar": "تذكّر جدول الضرب في 2: 2×8 = 16."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 2×8 = 16, the missing factor is 8. So 16 ÷ 2 = 8.",
            "explanation_ar": "بما أن 2×8 = 16، فالعامل المجهول هو 8. إذن 16 ÷ 2 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 8.",
            "explanation_ar": "الجواب هو 8."
          }
        ],
        "hint_en": "Think: 2 × ? = 16",
        "hint_ar": "فكّر: 2 × ? = 16",
        "result_en": "16 ÷ 2 = 8",
        "result_ar": "16 ÷ 2 = 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 16 into two equal parts: 8 + 8.",
            "explanation_ar": "قسّم 16 إلى جزأين متساويَين: 8 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "8 ÷ 2 = 4, and 8 ÷ 2 = 4.",
            "explanation_ar": "8 ÷ 2 = 4، و 8 ÷ 2 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 4 + 4 = 8.",
            "explanation_ar": "اجمع النتيجتين: 4 + 4 = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8 × 2 = 16. ✓ The answer is 8.",
            "explanation_ar": "تحقّق: 8 × 2 = 16. ✓ الجواب هو 8."
          }
        ],
        "hint_en": "Split 16 into 8 + 8, then halve each part.",
        "hint_ar": "قسّم 16 إلى 8 + 8، ثم اقسم كل جزء على 2.",
        "result_en": "16 ÷ 2 = 8",
        "result_ar": "16 ÷ 2 = 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 16 crayons split evenly into 2 boxes.",
            "explanation_ar": "تخيّل 16 قلم تلوين تُوزَّع بالتساوي في علبتَين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 2 boxes. Place crayons one at a time into each box, alternating, until all 16 are placed.",
            "explanation_ar": "تصوَّر علبتَين. ضع الأقلام واحداً تلو الآخر في كل علبة بالتناوب حتى تنتهي الـ 16."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box holds 8 crayons.",
            "explanation_ar": "تحتوي كل علبة على 8 أقلام تلوين."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "16 crayons ÷ 2 boxes = 8 crayons per box.",
            "explanation_ar": "16 قلم تلوين ÷ 2 علبتَين = 8 أقلام لكل علبة."
          }
        ],
        "hint_en": "Picture 16 crayons split equally into 2 boxes.",
        "hint_ar": "تخيّل 16 قلم تلوين تُوزَّع بالتساوي على علبتَين.",
        "result_en": "16 ÷ 2 = 8",
        "result_ar": "16 ÷ 2 = 8"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-001",
      "upper_grade_equivalent": "g3-common-div-easy-003",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-common-div-medium-001",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "24 ÷ 3 = ?",
    "question_ar": "24 ÷ 3 = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 24 by 3. Think of the inverse: 3 × ? = 24.",
            "explanation_ar": "عليك قسمة 24 على 3. فكّر في العكس: 3 × ? = 24."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 3 times table: 3×8 = 24.",
            "explanation_ar": "تذكّر جدول الضرب في 3: 3×8 = 24."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 3×8 = 24, the missing factor is 8. So 24 ÷ 3 = 8.",
            "explanation_ar": "بما أن 3×8 = 24، فالعامل المجهول هو 8. إذن 24 ÷ 3 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 8.",
            "explanation_ar": "الجواب هو 8."
          }
        ],
        "hint_en": "Think: 3 × ? = 24",
        "hint_ar": "فكّر: 3 × ? = 24",
        "result_en": "24 ÷ 3 = 8",
        "result_ar": "24 ÷ 3 = 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 24 into two parts that are easy to divide by 3: 21 + 3.",
            "explanation_ar": "قسّم 24 إلى جزأين يسهل قسمتهما على 3: 21 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "21 ÷ 3 = 7, and 3 ÷ 3 = 1.",
            "explanation_ar": "21 ÷ 3 = 7، و 3 ÷ 3 = 1."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 7 + 1 = 8.",
            "explanation_ar": "اجمع النتيجتين: 7 + 1 = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8 × 3 = 24. ✓ The answer is 8.",
            "explanation_ar": "تحقّق: 8 × 3 = 24. ✓ الجواب هو 8."
          }
        ],
        "hint_en": "Split 24 into 21 + 3, then divide each part by 3.",
        "hint_ar": "قسّم 24 إلى 21 + 3، ثم اقسم كل جزء على 3.",
        "result_en": "24 ÷ 3 = 8",
        "result_ar": "24 ÷ 3 = 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 24 cookies shared equally among 3 children.",
            "explanation_ar": "تخيّل 24 بسكويتة تُوزَّع بالتساوي على 3 أطفال."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 3 plates. Deal cookies one at a time to each plate until all 24 are placed.",
            "explanation_ar": "تصوَّر 3 أطباق. وزّع البسكويت واحدة تلو الأخرى على كل طبق حتى تنتهي الـ 24."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each plate ends up with 8 cookies.",
            "explanation_ar": "يحتوي كل طبق على 8 بسكويتات."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "24 cookies ÷ 3 plates = 8 cookies per plate.",
            "explanation_ar": "24 بسكويتة ÷ 3 أطباق = 8 بسكويتات لكل طبق."
          }
        ],
        "hint_en": "Picture 24 cookies shared equally among 3 plates.",
        "hint_ar": "تخيّل 24 بسكويتة تُوزَّع بالتساوي على 3 أطباق.",
        "result_en": "24 ÷ 3 = 8",
        "result_ar": "24 ÷ 3 = 8"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-003",
      "upper_grade_equivalent": "g3-common-div-medium-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-common-div-medium-002",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "36 ÷ 4 = ?",
    "question_ar": "36 ÷ 4 = ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 36 by 4. Think of the inverse: 4 × ? = 36.",
            "explanation_ar": "عليك قسمة 36 على 4. فكّر في العكس: 4 × ? = 36."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 4 times table: 4×9 = 36.",
            "explanation_ar": "تذكّر جدول الضرب في 4: 4×9 = 36."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 4×9 = 36, the missing factor is 9. So 36 ÷ 4 = 9.",
            "explanation_ar": "بما أن 4×9 = 36، فالعامل المجهول هو 9. إذن 36 ÷ 4 = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 9.",
            "explanation_ar": "الجواب هو 9."
          }
        ],
        "hint_en": "Think: 4 × ? = 36",
        "hint_ar": "فكّر: 4 × ? = 36",
        "result_en": "36 ÷ 4 = 9",
        "result_ar": "36 ÷ 4 = 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 36 into two parts divisible by 4: 20 + 16.",
            "explanation_ar": "قسّم 36 إلى جزأين قابلَين للقسمة على 4: 20 + 16."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20 ÷ 4 = 5, and 16 ÷ 4 = 4.",
            "explanation_ar": "20 ÷ 4 = 5، و 16 ÷ 4 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 5 + 4 = 9.",
            "explanation_ar": "اجمع النتيجتين: 5 + 4 = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 9 × 4 = 36. ✓ The answer is 9.",
            "explanation_ar": "تحقّق: 9 × 4 = 36. ✓ الجواب هو 9."
          }
        ],
        "hint_en": "Split 36 into 20 + 16, then divide each part by 4.",
        "hint_ar": "قسّم 36 إلى 20 + 16، ثم اقسم كل جزء على 4.",
        "result_en": "36 ÷ 4 = 9",
        "result_ar": "36 ÷ 4 = 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 36 marbles shared equally into 4 bags.",
            "explanation_ar": "تخيّل 36 كُرة زجاجية تُوزَّع بالتساوي في 4 أكياس."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 4 bags. Drop marbles one at a time into each bag until all 36 are placed.",
            "explanation_ar": "تصوَّر 4 أكياس. ضع الكُرات واحدة تلو الأخرى في كل كيس حتى تنتهي الـ 36."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each bag holds 9 marbles.",
            "explanation_ar": "يحتوي كل كيس على 9 كُرات."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "36 marbles ÷ 4 bags = 9 marbles per bag.",
            "explanation_ar": "36 كُرة ÷ 4 أكياس = 9 كُرات لكل كيس."
          }
        ],
        "hint_en": "Picture 36 marbles shared equally into 4 bags.",
        "hint_ar": "تخيّل 36 كُرة زجاجية تُوزَّع بالتساوي على 4 أكياس.",
        "result_en": "36 ÷ 4 = 9",
        "result_ar": "36 ÷ 4 = 9"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-003",
      "upper_grade_equivalent": "g3-common-div-medium-002",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-common-div-medium-003",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "27 ÷ 3 = ?",
    "question_ar": "27 ÷ 3 = ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 27 by 3. Think of the inverse: 3 × ? = 27.",
            "explanation_ar": "عليك قسمة 27 على 3. فكّر في العكس: 3 × ? = 27."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 3 times table: 3×9 = 27.",
            "explanation_ar": "تذكّر جدول الضرب في 3: 3×9 = 27."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 3×9 = 27, the missing factor is 9. So 27 ÷ 3 = 9.",
            "explanation_ar": "بما أن 3×9 = 27، فالعامل المجهول هو 9. إذن 27 ÷ 3 = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 9.",
            "explanation_ar": "الجواب هو 9."
          }
        ],
        "hint_en": "Think: 3 × ? = 27",
        "hint_ar": "فكّر: 3 × ? = 27",
        "result_en": "27 ÷ 3 = 9",
        "result_ar": "27 ÷ 3 = 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 27 into two parts divisible by 3: 24 + 3.",
            "explanation_ar": "قسّم 27 إلى جزأين قابلَين للقسمة على 3: 24 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "24 ÷ 3 = 8, and 3 ÷ 3 = 1.",
            "explanation_ar": "24 ÷ 3 = 8، و 3 ÷ 3 = 1."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 8 + 1 = 9.",
            "explanation_ar": "اجمع النتيجتين: 8 + 1 = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 9 × 3 = 27. ✓ The answer is 9.",
            "explanation_ar": "تحقّق: 9 × 3 = 27. ✓ الجواب هو 9."
          }
        ],
        "hint_en": "Split 27 into 24 + 3, then divide each by 3.",
        "hint_ar": "قسّم 27 إلى 24 + 3، ثم اقسم كل جزء على 3.",
        "result_en": "27 ÷ 3 = 9",
        "result_ar": "27 ÷ 3 = 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 27 books arranged equally on 3 shelves.",
            "explanation_ar": "تخيّل 27 كتاباً تُرتَّب بالتساوي على 3 رفوف."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 3 shelves. Place books one at a time on each shelf until all 27 are arranged.",
            "explanation_ar": "تصوَّر 3 رفوف. ضع الكتب واحداً تلو الآخر على كل رف حتى تنتهي الـ 27."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each shelf holds 9 books.",
            "explanation_ar": "يحتوي كل رف على 9 كتب."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "27 books ÷ 3 shelves = 9 books per shelf.",
            "explanation_ar": "27 كتاباً ÷ 3 رفوف = 9 كتب لكل رف."
          }
        ],
        "hint_en": "Picture 27 books placed equally on 3 shelves.",
        "hint_ar": "تخيّل 27 كتاباً تُرتَّب بالتساوي على 3 رفوف.",
        "result_en": "27 ÷ 3 = 9",
        "result_ar": "27 ÷ 3 = 9"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-003",
      "upper_grade_equivalent": "g3-common-div-medium-003",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-common-div-hard-001",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "80 ÷ 10 = ?",
    "question_ar": "80 ÷ 10 = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 80 by 10. Think of the inverse: 10 × ? = 80.",
            "explanation_ar": "عليك قسمة 80 على 10. فكّر في العكس: 10 × ? = 80."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 10 times table: 10×8 = 80.",
            "explanation_ar": "تذكّر جدول الضرب في 10: 10×8 = 80."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Dividing by 10 removes the zero from a round ten: 80 → 8. So 80 ÷ 10 = 8.",
            "explanation_ar": "القسمة على 10 تحذف الصفر من العدد المنتهي بصفر: 80 ← 8. إذن 80 ÷ 10 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 8.",
            "explanation_ar": "الجواب هو 8."
          }
        ],
        "hint_en": "Think: 10 × ? = 80. Remove the zero from 80.",
        "hint_ar": "فكّر: 10 × ? = 80. احذف الصفر من 80.",
        "result_en": "80 ÷ 10 = 8",
        "result_ar": "80 ÷ 10 = 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 80 into two equal parts: 40 + 40.",
            "explanation_ar": "قسّم 80 إلى جزأين متساويَين: 40 + 40."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "40 ÷ 10 = 4, and 40 ÷ 10 = 4.",
            "explanation_ar": "40 ÷ 10 = 4، و 40 ÷ 10 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 4 + 4 = 8.",
            "explanation_ar": "اجمع النتيجتين: 4 + 4 = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8 × 10 = 80. ✓ The answer is 8.",
            "explanation_ar": "تحقّق: 8 × 10 = 80. ✓ الجواب هو 8."
          }
        ],
        "hint_en": "Split 80 into 40 + 40, then divide each by 10.",
        "hint_ar": "قسّم 80 إلى 40 + 40، ثم اقسم كل جزء على 10.",
        "result_en": "80 ÷ 10 = 8",
        "result_ar": "80 ÷ 10 = 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 80 pencils packed equally into 10 cases.",
            "explanation_ar": "تخيّل 80 قلماً تُوضَع بالتساوي في 10 علب."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 10 cases in a row. Distribute pencils one at a time to each case until all 80 are packed.",
            "explanation_ar": "تصوَّر 10 علب في صف. وزّع الأقلام واحداً تلو الآخر في كل علبة حتى تنتهي الـ 80."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each case holds 8 pencils.",
            "explanation_ar": "تحتوي كل علبة على 8 أقلام."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "80 pencils ÷ 10 cases = 8 pencils per case.",
            "explanation_ar": "80 قلماً ÷ 10 علب = 8 أقلام لكل علبة."
          }
        ],
        "hint_en": "Picture 80 pencils packed equally into 10 cases.",
        "hint_ar": "تخيّل 80 قلماً تُوزَّع بالتساوي على 10 علب.",
        "result_en": "80 ÷ 10 = 8",
        "result_ar": "80 ÷ 10 = 8"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-003",
      "upper_grade_equivalent": "g3-common-div-hard-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-common-div-hard-002",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "70 ÷ 10 = ?",
    "question_ar": "70 ÷ 10 = ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 70 by 10. Think of the inverse: 10 × ? = 70.",
            "explanation_ar": "عليك قسمة 70 على 10. فكّر في العكس: 10 × ? = 70."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 10 times table: 10×7 = 70.",
            "explanation_ar": "تذكّر جدول الضرب في 10: 10×7 = 70."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Dividing by 10 removes the zero: 70 → 7. So 70 ÷ 10 = 7.",
            "explanation_ar": "القسمة على 10 تحذف الصفر: 70 ← 7. إذن 70 ÷ 10 = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 7.",
            "explanation_ar": "الجواب هو 7."
          }
        ],
        "hint_en": "Think: 10 × ? = 70. Remove the zero from 70.",
        "hint_ar": "فكّر: 10 × ? = 70. احذف الصفر من 70.",
        "result_en": "70 ÷ 10 = 7",
        "result_ar": "70 ÷ 10 = 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 70 into two parts divisible by 10: 50 + 20.",
            "explanation_ar": "قسّم 70 إلى جزأين قابلَين للقسمة على 10: 50 + 20."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "50 ÷ 10 = 5, and 20 ÷ 10 = 2.",
            "explanation_ar": "50 ÷ 10 = 5، و 20 ÷ 10 = 2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 5 + 2 = 7.",
            "explanation_ar": "اجمع النتيجتين: 5 + 2 = 7."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 7 × 10 = 70. ✓ The answer is 7.",
            "explanation_ar": "تحقّق: 7 × 10 = 70. ✓ الجواب هو 7."
          }
        ],
        "hint_en": "Split 70 into 50 + 20, then divide each by 10.",
        "hint_ar": "قسّم 70 إلى 50 + 20، ثم اقسم كل جزء على 10.",
        "result_en": "70 ÷ 10 = 7",
        "result_ar": "70 ÷ 10 = 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 70 seeds planted equally in 10 flowerpots.",
            "explanation_ar": "تخيّل 70 بذرة تُزرَع بالتساوي في 10 أصص زهور."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 10 pots in a row. Drop seeds one at a time into each pot until all 70 are planted.",
            "explanation_ar": "تصوَّر 10 أصص في صف. ضع البذور واحدة تلو الأخرى في كل أصيص حتى تنتهي الـ 70."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each pot holds 7 seeds.",
            "explanation_ar": "يحتوي كل أصيص على 7 بذور."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "70 seeds ÷ 10 pots = 7 seeds per pot.",
            "explanation_ar": "70 بذرة ÷ 10 أصص = 7 بذور لكل أصيص."
          }
        ],
        "hint_en": "Picture 70 seeds shared equally into 10 pots.",
        "hint_ar": "تخيّل 70 بذرة تُوزَّع بالتساوي على 10 أصص.",
        "result_en": "70 ÷ 10 = 7",
        "result_ar": "70 ÷ 10 = 7"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-003",
      "upper_grade_equivalent": "g3-common-div-hard-002",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-common-div-hard-003",
    "grade": 2,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "32 ÷ 4 = ?",
    "question_ar": "32 ÷ 4 = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to divide 32 by 4. Think of the inverse: 4 × ? = 32.",
            "explanation_ar": "عليك قسمة 32 على 4. فكّر في العكس: 4 × ? = 32."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall your 4 times table: 4×8 = 32.",
            "explanation_ar": "تذكّر جدول الضرب في 4: 4×8 = 32."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 4×8 = 32, the missing factor is 8. So 32 ÷ 4 = 8.",
            "explanation_ar": "بما أن 4×8 = 32، فالعامل المجهول هو 8. إذن 32 ÷ 4 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 8.",
            "explanation_ar": "الجواب هو 8."
          }
        ],
        "hint_en": "Think: 4 × ? = 32",
        "hint_ar": "فكّر: 4 × ? = 32",
        "result_en": "32 ÷ 4 = 8",
        "result_ar": "32 ÷ 4 = 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 32 into two parts divisible by 4: 20 + 12.",
            "explanation_ar": "قسّم 32 إلى جزأين قابلَين للقسمة على 4: 20 + 12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20 ÷ 4 = 5, and 12 ÷ 4 = 3.",
            "explanation_ar": "20 ÷ 4 = 5، و 12 ÷ 4 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two results: 5 + 3 = 8.",
            "explanation_ar": "اجمع النتيجتين: 5 + 3 = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8 × 4 = 32. ✓ The answer is 8.",
            "explanation_ar": "تحقّق: 8 × 4 = 32. ✓ الجواب هو 8."
          }
        ],
        "hint_en": "Split 32 into 20 + 12, then divide each by 4.",
        "hint_ar": "قسّم 32 إلى 20 + 12، ثم اقسم كل جزء على 4.",
        "result_en": "32 ÷ 4 = 8",
        "result_ar": "32 ÷ 4 = 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 32 toy cars shared equally among 4 children.",
            "explanation_ar": "تخيّل 32 سيارة لعبة تُوزَّع بالتساوي على 4 أطفال."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 4 children. Hand out toy cars one at a time to each child until all 32 are given.",
            "explanation_ar": "تصوَّر 4 أطفال. وزّع سيارات اللعبة واحدة تلو الأخرى على كل طفل حتى تنتهي الـ 32."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each child receives 8 toy cars.",
            "explanation_ar": "يحصل كل طفل على 8 سيارات لعبة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "32 toy cars ÷ 4 children = 8 toy cars per child.",
            "explanation_ar": "32 سيارة لعبة ÷ 4 أطفال = 8 سيارات لكل طفل."
          }
        ],
        "hint_en": "Picture 32 toy cars shared equally among 4 children.",
        "hint_ar": "تخيّل 32 سيارة لعبة تُوزَّع بالتساوي على 4 أطفال.",
        "result_en": "32 ÷ 4 = 8",
        "result_ar": "32 ÷ 4 = 8"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-common-div-hard-003",
      "upper_grade_equivalent": "g3-common-div-hard-003",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g2-specific-skip-easy-001",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Easy",
    "question_en": "2, 4, 6, 8, __ = ?",
    "question_ar": "2، 4، 6، 8، __ = ؟",
    "answer": 10,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 2, 4, 6, 8, __. Each number is a little bigger than the one before it.",
            "explanation_ar": "انظر إلى المتتالية: 2، 4، 6، 8، __. كل عدد أكبر قليلاً من الذي قبله."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap: 4 − 2 = 2, 6 − 4 = 2, 8 − 6 = 2. The fixed step is 2.",
            "explanation_ar": "أوجد الفرق: 4 − 2 = 2، 6 − 4 = 2، 8 − 6 = 2. الخطوة الثابتة هي 2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 2 each time. The last known number is 8, so 8 + 2 = 10.",
            "explanation_ar": "القاعدة هي: أضف 2 في كل مرة. آخر عدد معروف هو 8، إذن 8 + 2 = 10."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The sequence counting by 2s gives: 2, 4, 6, 8, 10. The missing number is 10.",
            "explanation_ar": "المتتالية بالعد بمقدار 2 تعطي: 2، 4، 6، 8، 10. العدد المفقود هو 10."
          }
        ],
        "hint_en": "What do you add to 8 to get to the next even number?",
        "hint_ar": "ماذا تضيف إلى 8 للحصول على العدد الزوجي التالي؟",
        "result_en": "The missing number is 10.",
        "result_ar": "العدد المفقود هو 10."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 2, 4, 6, 8, __. The first term is 2, and the blank is the 5th term.",
            "explanation_ar": "المتتالية هي 2، 4، 6، 8، __. الحد الأول هو 2، والفراغ هو الحد الخامس."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 2. Use the formula: 5th term = first term + (5 − 1) × step = 2 + 4 × 2 = 2 + 8 = 10.",
            "explanation_ar": "الخطوة = 2. استخدم الصيغة: الحد الخامس = الحد الأول + (5 − 1) × الخطوة = 2 + 4 × 2 = 2 + 8 = 10."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "2 + 8 = 10. So the 5th term is 10.",
            "explanation_ar": "2 + 8 = 10. إذن الحد الخامس هو 10."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2, 4, 6, 8, 10 — each gap is 2. Correct! The missing number is 10.",
            "explanation_ar": "تحقق: 2، 4، 6، 8، 10 — كل فرق هو 2. صحيح! العدد المفقود هو 10."
          }
        ],
        "hint_en": "The 5th term = 2 + 4 × 2. Can you work that out?",
        "hint_ar": "الحد الخامس = 2 + 4 × 2. هل يمكنك حساب ذلك؟",
        "result_en": "The missing number is 10.",
        "result_ar": "العدد المفقود هو 10."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine hopping along a number line, making jumps of 2. You start at 2 and hop forward.",
            "explanation_ar": "تخيل أنك تقفز على خط الأعداد بخطوات مقدارها 2. تبدأ من 2 وتقفز للأمام."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line: mark 2, jump +2 to 4, jump +2 to 6, jump +2 to 8, then one more jump of +2.",
            "explanation_ar": "ارسم خط أعداد: ضع علامة عند 2، اقفز +2 إلى 4، اقفز +2 إلى 6، اقفز +2 إلى 8، ثم قفزة أخيرة بمقدار +2."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After the 4th mark at 8, one more jump of 2 lands you at 10.",
            "explanation_ar": "بعد العلامة الرابعة عند 8، قفزة واحدة بمقدار 2 تأخذك إلى 10."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The blank is at position 10 on the number line. The missing number is 10.",
            "explanation_ar": "الفراغ يقع عند الموضع 10 على خط الأعداد. العدد المفقود هو 10."
          }
        ],
        "hint_en": "Picture four hops of 2 on a number line starting at 2. Where do you land on the 5th hop?",
        "hint_ar": "تخيل أربع قفزات بمقدار 2 على خط الأعداد ابتداءً من 2. أين تقف في القفزة الخامسة؟",
        "result_en": "The missing number is 10.",
        "result_ar": "العدد المفقود هو 10."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-skip-easy-002",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Easy",
    "question_en": "5, 10, __, 20, 25 = ?",
    "question_ar": "5، 10، __، 20، 25 = ؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 5, 10, __, 20, 25. The numbers end in 5 or 0 — a familiar pattern.",
            "explanation_ar": "انظر إلى المتتالية: 5، 10، __، 20، 25. الأعداد تنتهي بـ 5 أو 0 — نمط مألوف."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap: 10 − 5 = 5, 25 − 20 = 5. The fixed step is 5.",
            "explanation_ar": "أوجد الفرق: 10 − 5 = 5، 25 − 20 = 5. الخطوة الثابتة هي 5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 5 each time. The term before the blank is 10, so 10 + 5 = 15.",
            "explanation_ar": "القاعدة هي: أضف 5 في كل مرة. الحد قبل الفراغ هو 10، إذن 10 + 5 = 15."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The full sequence is 5, 10, 15, 20, 25. The missing number is 15.",
            "explanation_ar": "المتتالية الكاملة هي 5، 10، 15، 20، 25. العدد المفقود هو 15."
          }
        ],
        "hint_en": "Counting by 5s: 5, 10, ?, 20, 25. What comes after 10?",
        "hint_ar": "العد بمقدار 5: 5، 10، ؟، 20، 25. ما الذي يأتي بعد 10؟",
        "result_en": "The missing number is 15.",
        "result_ar": "العدد المفقود هو 15."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 5, 10, __, 20, 25. The first term is 5, and the blank is the 3rd term.",
            "explanation_ar": "المتتالية هي 5، 10، __، 20، 25. الحد الأول هو 5، والفراغ هو الحد الثالث."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 5. Use the formula: 3rd term = first term + (3 − 1) × step = 5 + 2 × 5 = 5 + 10 = 15.",
            "explanation_ar": "الخطوة = 5. استخدم الصيغة: الحد الثالث = الحد الأول + (3 − 1) × الخطوة = 5 + 2 × 5 = 5 + 10 = 15."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "5 + 10 = 15. So the 3rd term is 15.",
            "explanation_ar": "5 + 10 = 15. إذن الحد الثالث هو 15."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 5, 10, 15, 20, 25 — each gap is 5. Correct! The missing number is 15.",
            "explanation_ar": "تحقق: 5، 10، 15، 20، 25 — كل فرق هو 5. صحيح! العدد المفقود هو 15."
          }
        ],
        "hint_en": "3rd term = 5 + 2 × 5. What is 5 + 10?",
        "hint_ar": "الحد الثالث = 5 + 2 × 5. ما هو 5 + 10؟",
        "result_en": "The missing number is 15.",
        "result_ar": "العدد المفقود هو 15."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine counting fingers on hands. Each hand has 5 fingers. You count: 5, 10, ?, 20, 25.",
            "explanation_ar": "تخيل أنك تعد أصابع اليدين. كل يد لها 5 أصابع. تعد: 5، 10، ؟، 20، 25."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line: mark 5, jump +5 to 10, then another +5 jump to the blank, +5 to 20, +5 to 25.",
            "explanation_ar": "ارسم خط أعداد: ضع علامة عند 5، اقفز +5 إلى 10، ثم قفزة +5 أخرى إلى الفراغ، +5 إلى 20، +5 إلى 25."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The blank sits between 10 and 20, exactly halfway. One jump of 5 from 10 lands at 15.",
            "explanation_ar": "الفراغ يقع بين 10 و20، في المنتصف تماماً. قفزة واحدة بمقدار 5 من 10 تصل إلى 15."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The blank is at 15. Check: 15 + 5 = 20. The missing number is 15.",
            "explanation_ar": "الفراغ عند 15. تحقق: 15 + 5 = 20. العدد المفقود هو 15."
          }
        ],
        "hint_en": "Hop from 10 by 5. Where do you land before 20?",
        "hint_ar": "اقفز من 10 بمقدار 5. أين تقف قبل 20؟",
        "result_en": "The missing number is 15.",
        "result_ar": "العدد المفقود هو 15."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-skip-easy-003",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Easy",
    "question_en": "2, __, 6, 8, 10 = ?",
    "question_ar": "2، __، 6، 8، 10 = ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 2, __, 6, 8, 10. All visible numbers are even, suggesting we count by 2s.",
            "explanation_ar": "انظر إلى المتتالية: 2، __، 6، 8، 10. جميع الأعداد المرئية زوجية، مما يشير إلى العد بمقدار 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap using known neighbours: 8 − 6 = 2, 10 − 8 = 2. The fixed step is 2.",
            "explanation_ar": "أوجد الفرق باستخدام الجيران المعروفين: 8 − 6 = 2، 10 − 8 = 2. الخطوة الثابتة هي 2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 2 each time. The term before the blank is 2, so 2 + 2 = 4.",
            "explanation_ar": "القاعدة هي: أضف 2 في كل مرة. الحد قبل الفراغ هو 2، إذن 2 + 2 = 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The full sequence is 2, 4, 6, 8, 10. The missing number is 4.",
            "explanation_ar": "المتتالية الكاملة هي 2، 4، 6، 8، 10. العدد المفقود هو 4."
          }
        ],
        "hint_en": "What even number comes between 2 and 6?",
        "hint_ar": "ما العدد الزوجي الذي يقع بين 2 و6؟",
        "result_en": "The missing number is 4.",
        "result_ar": "العدد المفقود هو 4."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 2, __, 6, 8, 10. The first term is 2 and the blank is the 2nd term.",
            "explanation_ar": "المتتالية هي 2، __، 6، 8، 10. الحد الأول هو 2 والفراغ هو الحد الثاني."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 2. Use the formula: 2nd term = first term + (2 − 1) × step = 2 + 1 × 2 = 2 + 2 = 4.",
            "explanation_ar": "الخطوة = 2. استخدم الصيغة: الحد الثاني = الحد الأول + (2 − 1) × الخطوة = 2 + 1 × 2 = 2 + 2 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "2 + 2 = 4. So the 2nd term is 4.",
            "explanation_ar": "2 + 2 = 4. إذن الحد الثاني هو 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2, 4, 6, 8, 10 — each gap is 2. Correct! The missing number is 4.",
            "explanation_ar": "تحقق: 2، 4، 6، 8، 10 — كل فرق هو 2. صحيح! العدد المفقود هو 4."
          }
        ],
        "hint_en": "2nd term = 2 + 1 × 2. What is 2 + 2?",
        "hint_ar": "الحد الثاني = 2 + 1 × 2. ما هو 2 + 2؟",
        "result_en": "The missing number is 4.",
        "result_ar": "العدد المفقود هو 4."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine hopping on even-numbered stones: 2, ?, 6, 8, 10. One stone is hidden — which one is it?",
            "explanation_ar": "تخيل أنك تقفز على حجارة ذات أعداد زوجية: 2، ؟، 6، 8، 10. حجر واحد مخفي — ما هو؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line: mark 2, leave a gap for the blank, then 6, 8, 10, each spaced 2 apart.",
            "explanation_ar": "ارسم خط أعداد: ضع علامة عند 2، اترك فراغاً للمجهول، ثم 6، 8، 10 كل منها يبعد 2 عن الآخر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The blank is one hop of 2 after 2, and one hop of 2 before 6. It must be at 4.",
            "explanation_ar": "الفراغ يقع بعد قفزة 2 من العدد 2، وقبل قفزة 2 من العدد 6. يجب أن يكون عند 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The hidden stone is 4: 2 + 2 = 4 and 4 + 2 = 6. The missing number is 4.",
            "explanation_ar": "الحجر المخفي هو 4: 2 + 2 = 4 و4 + 2 = 6. العدد المفقود هو 4."
          }
        ],
        "hint_en": "What number is 2 more than 2 and 2 less than 6?",
        "hint_ar": "ما العدد الذي يزيد 2 عن 2 ويقل 2 عن 6؟",
        "result_en": "The missing number is 4.",
        "result_ar": "العدد المفقود هو 4."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-skip-medium-001",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Medium",
    "question_en": "3, 6, 9, __, 15 = ?",
    "question_ar": "3، 6، 9، __، 15 = ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 3, 6, 9, __, 15. These are multiples of 3.",
            "explanation_ar": "انظر إلى المتتالية: 3، 6، 9، __، 15. هذه مضاعفات العدد 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap: 6 − 3 = 3, 9 − 6 = 3, 15 − ? = 3. The fixed step is 3.",
            "explanation_ar": "أوجد الفرق: 6 − 3 = 3، 9 − 6 = 3، 15 − ؟ = 3. الخطوة الثابتة هي 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 3 each time. The term before the blank is 9, so 9 + 3 = 12. Check: 12 + 3 = 15. ✓",
            "explanation_ar": "القاعدة هي: أضف 3 في كل مرة. الحد قبل الفراغ هو 9، إذن 9 + 3 = 12. تحقق: 12 + 3 = 15. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The full sequence is 3, 6, 9, 12, 15. The missing number is 12.",
            "explanation_ar": "المتتالية الكاملة هي 3، 6، 9، 12، 15. العدد المفقود هو 12."
          }
        ],
        "hint_en": "Add 3 to 9. What do you get?",
        "hint_ar": "أضف 3 إلى 9. ماذا تحصل؟",
        "result_en": "The missing number is 12.",
        "result_ar": "العدد المفقود هو 12."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 3, 6, 9, __, 15. The first term is 3 and the blank is the 4th term.",
            "explanation_ar": "المتتالية هي 3، 6، 9، __، 15. الحد الأول هو 3 والفراغ هو الحد الرابع."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 3. Use the formula: 4th term = first term + (4 − 1) × step = 3 + 3 × 3 = 3 + 9 = 12.",
            "explanation_ar": "الخطوة = 3. استخدم الصيغة: الحد الرابع = الحد الأول + (4 − 1) × الخطوة = 3 + 3 × 3 = 3 + 9 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3 + 9 = 12. So the 4th term is 12.",
            "explanation_ar": "3 + 9 = 12. إذن الحد الرابع هو 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3, 6, 9, 12, 15 — each gap is 3. Correct! The missing number is 12.",
            "explanation_ar": "تحقق: 3، 6، 9، 12، 15 — كل فرق هو 3. صحيح! العدد المفقود هو 12."
          }
        ],
        "hint_en": "4th term = 3 + 3 × 3. What is 3 + 9?",
        "hint_ar": "الحد الرابع = 3 + 3 × 3. ما هو 3 + 9؟",
        "result_en": "The missing number is 12.",
        "result_ar": "العدد المفقود هو 12."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine stacking triangles: each triangle has 3 sides. 1 triangle = 3, 2 = 6, 3 = 9, 4 = ?, 5 = 15.",
            "explanation_ar": "تخيل أنك تكدّس مثلثات: كل مثلث له 3 أضلاع. 1 مثلث = 3، 2 = 6، 3 = 9، 4 = ؟، 5 = 15."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line with jumps of 3: 3, 6, 9, [blank], 15. The blank is between 9 and 15.",
            "explanation_ar": "ارسم خط أعداد بقفزات مقدارها 3: 3، 6، 9، [فراغ]، 15. الفراغ بين 9 و15."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One hop of 3 from 9 reaches the blank. 9 + 3 = 12. Also, 12 + 3 = 15 confirms the position.",
            "explanation_ar": "قفزة واحدة بمقدار 3 من 9 تصل إلى الفراغ. 9 + 3 = 12. وأيضاً 12 + 3 = 15 يؤكد الموضع."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "4 triangles have 4 × 3 = 12 sides. The blank is at 12. The missing number is 12.",
            "explanation_ar": "4 مثلثات لها 4 × 3 = 12 ضلعاً. الفراغ عند 12. العدد المفقود هو 12."
          }
        ],
        "hint_en": "Hop one step of 3 forward from 9. Where do you land?",
        "hint_ar": "اقفز خطوة واحدة بمقدار 3 للأمام من 9. أين تقف؟",
        "result_en": "The missing number is 12.",
        "result_ar": "العدد المفقود هو 12."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-skip-medium-002",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Medium",
    "question_en": "10, 20, 30, __, 50 = ?",
    "question_ar": "10، 20، 30، __، 50 = ؟",
    "answer": 40,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 10, 20, 30, __, 50. All numbers end in 0 — counting by 10s.",
            "explanation_ar": "انظر إلى المتتالية: 10، 20، 30، __، 50. جميع الأعداد تنتهي بـ 0 — العد بمقدار 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap: 20 − 10 = 10, 30 − 20 = 10, 50 − ? = 10. The fixed step is 10.",
            "explanation_ar": "أوجد الفرق: 20 − 10 = 10، 30 − 20 = 10، 50 − ؟ = 10. الخطوة الثابتة هي 10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 10 each time. The term before the blank is 30, so 30 + 10 = 40. Check: 40 + 10 = 50. ✓",
            "explanation_ar": "القاعدة هي: أضف 10 في كل مرة. الحد قبل الفراغ هو 30، إذن 30 + 10 = 40. تحقق: 40 + 10 = 50. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The full sequence is 10, 20, 30, 40, 50. The missing number is 40.",
            "explanation_ar": "المتتالية الكاملة هي 10، 20، 30، 40، 50. العدد المفقود هو 40."
          }
        ],
        "hint_en": "What tens number comes between 30 and 50?",
        "hint_ar": "ما العدد العشري الذي يقع بين 30 و50؟",
        "result_en": "The missing number is 40.",
        "result_ar": "العدد المفقود هو 40."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 10, 20, 30, __, 50. The first term is 10 and the blank is the 4th term.",
            "explanation_ar": "المتتالية هي 10، 20، 30، __، 50. الحد الأول هو 10 والفراغ هو الحد الرابع."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 10. Use the formula: 4th term = first term + (4 − 1) × step = 10 + 3 × 10 = 10 + 30 = 40.",
            "explanation_ar": "الخطوة = 10. استخدم الصيغة: الحد الرابع = الحد الأول + (4 − 1) × الخطوة = 10 + 3 × 10 = 10 + 30 = 40."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "10 + 30 = 40. So the 4th term is 40.",
            "explanation_ar": "10 + 30 = 40. إذن الحد الرابع هو 40."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 10, 20, 30, 40, 50 — each gap is 10. Correct! The missing number is 40.",
            "explanation_ar": "تحقق: 10، 20، 30، 40، 50 — كل فرق هو 10. صحيح! العدد المفقود هو 40."
          }
        ],
        "hint_en": "4th term = 10 + 3 × 10. What is 10 + 30?",
        "hint_ar": "الحد الرابع = 10 + 3 × 10. ما هو 10 + 30؟",
        "result_en": "The missing number is 40.",
        "result_ar": "العدد المفقود هو 40."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine counting coins worth 10 cents each: 10, 20, 30, ?, 50. One coin label is missing.",
            "explanation_ar": "تخيل أنك تعد عملات معدنية تساوي 10 سنتات لكل منها: 10، 20، 30، ؟، 50. ملصق عملة واحدة مفقود."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line with jumps of 10: 10, 20, 30, [blank], 50. The blank is one jump before 50.",
            "explanation_ar": "ارسم خط أعداد بقفزات مقدارها 10: 10، 20، 30، [فراغ]، 50. الفراغ قفزة واحدة قبل 50."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One hop of 10 from 30 reaches the blank. 30 + 10 = 40. Also 50 − 10 = 40 confirms it.",
            "explanation_ar": "قفزة واحدة بمقدار 10 من 30 تصل إلى الفراغ. 30 + 10 = 40. وأيضاً 50 − 10 = 40 يؤكد ذلك."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The blank coin is worth 40 cents. The missing number is 40.",
            "explanation_ar": "العملة المفقودة تساوي 40 سنتاً. العدد المفقود هو 40."
          }
        ],
        "hint_en": "Count: 10, 20, 30, then one more jump of 10. Where do you land?",
        "hint_ar": "اعدد: 10، 20، 30، ثم قفزة أخرى بمقدار 10. أين تقف؟",
        "result_en": "The missing number is 40.",
        "result_ar": "العدد المفقود هو 40."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-skip-medium-003",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Medium",
    "question_en": "6, 9, __, 15, 18 = ?",
    "question_ar": "6، 9، __، 15، 18 = ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 6, 9, __, 15, 18. The numbers increase steadily — this looks like counting by 3s.",
            "explanation_ar": "انظر إلى المتتالية: 6، 9، __، 15، 18. الأعداد تزداد بانتظام — يبدو هذا مثل العد بمقدار 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap: 9 − 6 = 3, 18 − 15 = 3. The fixed step is 3.",
            "explanation_ar": "أوجد الفرق: 9 − 6 = 3، 18 − 15 = 3. الخطوة الثابتة هي 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 3 each time. The term before the blank is 9, so 9 + 3 = 12. Check: 12 + 3 = 15. ✓",
            "explanation_ar": "القاعدة هي: أضف 3 في كل مرة. الحد قبل الفراغ هو 9، إذن 9 + 3 = 12. تحقق: 12 + 3 = 15. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The full sequence is 6, 9, 12, 15, 18. The missing number is 12.",
            "explanation_ar": "المتتالية الكاملة هي 6، 9، 12، 15، 18. العدد المفقود هو 12."
          }
        ],
        "hint_en": "Add 3 to 9. What number do you get?",
        "hint_ar": "أضف 3 إلى 9. ما العدد الذي تحصل عليه؟",
        "result_en": "The missing number is 12.",
        "result_ar": "العدد المفقود هو 12."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 6, 9, __, 15, 18. The first term is 6 and the blank is the 3rd term.",
            "explanation_ar": "المتتالية هي 6، 9، __، 15، 18. الحد الأول هو 6 والفراغ هو الحد الثالث."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 3. Use the formula: 3rd term = first term + (3 − 1) × step = 6 + 2 × 3 = 6 + 6 = 12.",
            "explanation_ar": "الخطوة = 3. استخدم الصيغة: الحد الثالث = الحد الأول + (3 − 1) × الخطوة = 6 + 2 × 3 = 6 + 6 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "6 + 6 = 12. So the 3rd term is 12.",
            "explanation_ar": "6 + 6 = 12. إذن الحد الثالث هو 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 6, 9, 12, 15, 18 — each gap is 3. Correct! The missing number is 12.",
            "explanation_ar": "تحقق: 6، 9، 12، 15، 18 — كل فرق هو 3. صحيح! العدد المفقود هو 12."
          }
        ],
        "hint_en": "3rd term = 6 + 2 × 3. What is 6 + 6?",
        "hint_ar": "الحد الثالث = 6 + 2 × 3. ما هو 6 + 6؟",
        "result_en": "The missing number is 12.",
        "result_ar": "العدد المفقود هو 12."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine placing groups of 3 apples on a scale: 6, 9, ?, 15, 18 apples. One tray count is hidden.",
            "explanation_ar": "تخيل أنك تضع مجموعات من 3 تفاحات على ميزان: 6، 9، ؟، 15، 18 تفاحة. عدد إحدى الصواني مخفي."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line with jumps of 3: 6, 9, [blank], 15, 18. The blank is between 9 and 15.",
            "explanation_ar": "ارسم خط أعداد بقفزات مقدارها 3: 6، 9، [فراغ]، 15، 18. الفراغ بين 9 و15."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One hop of 3 from 9 lands at the blank. 9 + 3 = 12. Also 15 − 3 = 12 confirms the position.",
            "explanation_ar": "قفزة واحدة بمقدار 3 من 9 تصل إلى الفراغ. 9 + 3 = 12. وأيضاً 15 − 3 = 12 يؤكد الموضع."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The blank is at 12 on the number line. The missing number is 12.",
            "explanation_ar": "الفراغ عند 12 على خط الأعداد. العدد المفقود هو 12."
          }
        ],
        "hint_en": "Start at 9 and take one jump of 3. Where do you land?",
        "hint_ar": "ابدأ من 9 وخذ قفزة واحدة بمقدار 3. أين تقف؟",
        "result_en": "The missing number is 12.",
        "result_ar": "العدد المفقود هو 12."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-skip-hard-001",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Hard",
    "question_en": "4, 8, 12, __, 20 = ?",
    "question_ar": "4، 8، 12، __، 20 = ؟",
    "answer": 16,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 4, 8, 12, __, 20. These are multiples of 4.",
            "explanation_ar": "انظر إلى المتتالية: 4، 8، 12، __، 20. هذه مضاعفات العدد 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap: 8 − 4 = 4, 12 − 8 = 4, 20 − ? = 4. The fixed step is 4.",
            "explanation_ar": "أوجد الفرق: 8 − 4 = 4، 12 − 8 = 4، 20 − ؟ = 4. الخطوة الثابتة هي 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 4 each time. The term before the blank is 12, so 12 + 4 = 16. Check: 16 + 4 = 20. ✓",
            "explanation_ar": "القاعدة هي: أضف 4 في كل مرة. الحد قبل الفراغ هو 12، إذن 12 + 4 = 16. تحقق: 16 + 4 = 20. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The full sequence is 4, 8, 12, 16, 20. The missing number is 16.",
            "explanation_ar": "المتتالية الكاملة هي 4، 8، 12، 16، 20. العدد المفقود هو 16."
          }
        ],
        "hint_en": "Add 4 to 12. What do you get?",
        "hint_ar": "أضف 4 إلى 12. ماذا تحصل؟",
        "result_en": "The missing number is 16.",
        "result_ar": "العدد المفقود هو 16."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 4, 8, 12, __, 20. The first term is 4 and the blank is the 4th term.",
            "explanation_ar": "المتتالية هي 4، 8، 12، __، 20. الحد الأول هو 4 والفراغ هو الحد الرابع."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 4. Use the formula: 4th term = first term + (4 − 1) × step = 4 + 3 × 4 = 4 + 12 = 16.",
            "explanation_ar": "الخطوة = 4. استخدم الصيغة: الحد الرابع = الحد الأول + (4 − 1) × الخطوة = 4 + 3 × 4 = 4 + 12 = 16."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4 + 12 = 16. So the 4th term is 16.",
            "explanation_ar": "4 + 12 = 16. إذن الحد الرابع هو 16."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4, 8, 12, 16, 20 — each gap is 4. Correct! The missing number is 16.",
            "explanation_ar": "تحقق: 4، 8، 12، 16، 20 — كل فرق هو 4. صحيح! العدد المفقود هو 16."
          }
        ],
        "hint_en": "4th term = 4 + 3 × 4. What is 4 + 12?",
        "hint_ar": "الحد الرابع = 4 + 3 × 4. ما هو 4 + 12؟",
        "result_en": "The missing number is 16.",
        "result_ar": "العدد المفقود هو 16."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine counting the legs of spiders — each spider has 4 legs: 1 spider = 4, 2 = 8, 3 = 12, 4 = ?, 5 = 20.",
            "explanation_ar": "تخيل أنك تعد أرجل العناكب — لكل عنكبوت 4 أرجل: 1 عنكبوت = 4، 2 = 8، 3 = 12، 4 = ؟، 5 = 20."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line with jumps of 4: 4, 8, 12, [blank], 20. The blank is between 12 and 20.",
            "explanation_ar": "ارسم خط أعداد بقفزات مقدارها 4: 4، 8، 12، [فراغ]، 20. الفراغ بين 12 و20."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One hop of 4 from 12 lands at the blank. 12 + 4 = 16. Also 20 − 4 = 16 confirms it.",
            "explanation_ar": "قفزة واحدة بمقدار 4 من 12 تصل إلى الفراغ. 12 + 4 = 16. وأيضاً 20 − 4 = 16 يؤكد ذلك."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "4 spiders have 4 × 4 = 16 legs. The blank is at 16. The missing number is 16.",
            "explanation_ar": "4 عناكب لها 4 × 4 = 16 رجلاً. الفراغ عند 16. العدد المفقود هو 16."
          }
        ],
        "hint_en": "Hop one step of 4 from 12. Where do you land before reaching 20?",
        "hint_ar": "اقفز خطوة واحدة بمقدار 4 من 12. أين تقف قبل الوصول إلى 20؟",
        "result_en": "The missing number is 16.",
        "result_ar": "العدد المفقود هو 16."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-skip-hard-002",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Hard",
    "question_en": "10, 20, __, 40, 50 = ?",
    "question_ar": "10، 20، __، 40، 50 = ؟",
    "answer": 30,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 10, 20, __, 40, 50. All numbers end in 0 and go up by the same amount.",
            "explanation_ar": "انظر إلى المتتالية: 10، 20، __، 40، 50. جميع الأعداد تنتهي بـ 0 وتزداد بنفس المقدار."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap: 20 − 10 = 10, 50 − 40 = 10. The fixed step is 10.",
            "explanation_ar": "أوجد الفرق: 20 − 10 = 10، 50 − 40 = 10. الخطوة الثابتة هي 10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 10 each time. The term before the blank is 20, so 20 + 10 = 30. Check: 30 + 10 = 40. ✓",
            "explanation_ar": "القاعدة هي: أضف 10 في كل مرة. الحد قبل الفراغ هو 20، إذن 20 + 10 = 30. تحقق: 30 + 10 = 40. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The full sequence is 10, 20, 30, 40, 50. The missing number is 30.",
            "explanation_ar": "المتتالية الكاملة هي 10، 20، 30، 40، 50. العدد المفقود هو 30."
          }
        ],
        "hint_en": "What tens number is exactly between 20 and 40?",
        "hint_ar": "ما العدد العشري الذي يقع بالضبط بين 20 و40؟",
        "result_en": "The missing number is 30.",
        "result_ar": "العدد المفقود هو 30."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 10, 20, __, 40, 50. The first term is 10 and the blank is the 3rd term.",
            "explanation_ar": "المتتالية هي 10، 20، __، 40، 50. الحد الأول هو 10 والفراغ هو الحد الثالث."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 10. Use the formula: 3rd term = first term + (3 − 1) × step = 10 + 2 × 10 = 10 + 20 = 30.",
            "explanation_ar": "الخطوة = 10. استخدم الصيغة: الحد الثالث = الحد الأول + (3 − 1) × الخطوة = 10 + 2 × 10 = 10 + 20 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "10 + 20 = 30. So the 3rd term is 30.",
            "explanation_ar": "10 + 20 = 30. إذن الحد الثالث هو 30."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 10, 20, 30, 40, 50 — each gap is 10. Correct! The missing number is 30.",
            "explanation_ar": "تحقق: 10، 20، 30، 40، 50 — كل فرق هو 10. صحيح! العدد المفقود هو 30."
          }
        ],
        "hint_en": "3rd term = 10 + 2 × 10. What is 10 + 20?",
        "hint_ar": "الحد الثالث = 10 + 2 × 10. ما هو 10 + 20؟",
        "result_en": "The missing number is 30.",
        "result_ar": "العدد المفقود هو 30."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a ruler marked at every 10 cm: 10, 20, ?, 40, 50. One mark is covered — which one?",
            "explanation_ar": "تخيل مسطرة مُعلَّمة عند كل 10 سم: 10، 20، ؟، 40، 50. علامة واحدة مغطاة — أيها؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line with jumps of 10: 10, 20, [blank], 40, 50. The blank is between 20 and 40.",
            "explanation_ar": "ارسم خط أعداد بقفزات مقدارها 10: 10، 20، [فراغ]، 40، 50. الفراغ بين 20 و40."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One hop of 10 from 20 lands at the blank: 20 + 10 = 30. And 40 − 10 = 30 confirms it.",
            "explanation_ar": "قفزة واحدة بمقدار 10 من 20 تصل إلى الفراغ: 20 + 10 = 30. و40 − 10 = 30 يؤكد ذلك."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The hidden mark is at 30 cm. The missing number is 30.",
            "explanation_ar": "العلامة المخفية عند 30 سم. العدد المفقود هو 30."
          }
        ],
        "hint_en": "Jump one step of 10 forward from 20. Where do you land?",
        "hint_ar": "اقفز خطوة واحدة بمقدار 10 للأمام من 20. أين تقف؟",
        "result_en": "The missing number is 30.",
        "result_ar": "العدد المفقود هو 30."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-skip-hard-003",
    "grade": 2,
    "bank": "specific",
    "category": "Skip Counting",
    "level": "Hard",
    "question_en": "8, 12, 16, __, 24 = ?",
    "question_ar": "8، 12، 16، __، 24 = ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the sequence: 8, 12, 16, __, 24. These are multiples of 4 starting from 8.",
            "explanation_ar": "انظر إلى المتتالية: 8، 12، 16، __، 24. هذه مضاعفات 4 ابتداءً من 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the gap: 12 − 8 = 4, 16 − 12 = 4, 24 − ? = 4. The fixed step is 4.",
            "explanation_ar": "أوجد الفرق: 12 − 8 = 4، 16 − 12 = 4، 24 − ؟ = 4. الخطوة الثابتة هي 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The rule is: add 4 each time. The term before the blank is 16, so 16 + 4 = 20. Check: 20 + 4 = 24. ✓",
            "explanation_ar": "القاعدة هي: أضف 4 في كل مرة. الحد قبل الفراغ هو 16، إذن 16 + 4 = 20. تحقق: 20 + 4 = 24. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The full sequence is 8, 12, 16, 20, 24. The missing number is 20.",
            "explanation_ar": "المتتالية الكاملة هي 8، 12، 16، 20، 24. العدد المفقود هو 20."
          }
        ],
        "hint_en": "Add 4 to 16. What do you get?",
        "hint_ar": "أضف 4 إلى 16. ماذا تحصل؟",
        "result_en": "The missing number is 20.",
        "result_ar": "العدد المفقود هو 20."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The sequence is 8, 12, 16, __, 24. The first term is 8 and the blank is the 4th term.",
            "explanation_ar": "المتتالية هي 8، 12، 16، __، 24. الحد الأول هو 8 والفراغ هو الحد الرابع."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step = 4. Use the formula: 4th term = first term + (4 − 1) × step = 8 + 3 × 4 = 8 + 12 = 20.",
            "explanation_ar": "الخطوة = 4. استخدم الصيغة: الحد الرابع = الحد الأول + (4 − 1) × الخطوة = 8 + 3 × 4 = 8 + 12 = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "8 + 12 = 20. So the 4th term is 20.",
            "explanation_ar": "8 + 12 = 20. إذن الحد الرابع هو 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8, 12, 16, 20, 24 — each gap is 4. Correct! The missing number is 20.",
            "explanation_ar": "تحقق: 8، 12، 16، 20، 24 — كل فرق هو 4. صحيح! العدد المفقود هو 20."
          }
        ],
        "hint_en": "4th term = 8 + 3 × 4. What is 8 + 12?",
        "hint_ar": "الحد الرابع = 8 + 3 × 4. ما هو 8 + 12؟",
        "result_en": "The missing number is 20.",
        "result_ar": "العدد المفقود هو 20."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine counting wheels on cars: 2 cars = 8 wheels, 3 = 12, 4 = 16, 5 = ?, 6 = 24.",
            "explanation_ar": "تخيل أنك تعد عجلات السيارات: 2 سيارة = 8 عجلات، 3 = 12، 4 = 16، 5 = ؟، 6 = 24."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line with jumps of 4: 8, 12, 16, [blank], 24. The blank is between 16 and 24.",
            "explanation_ar": "ارسم خط أعداد بقفزات مقدارها 4: 8، 12، 16، [فراغ]، 24. الفراغ بين 16 و24."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One hop of 4 from 16 lands at the blank: 16 + 4 = 20. Also 24 − 4 = 20 confirms the position.",
            "explanation_ar": "قفزة واحدة بمقدار 4 من 16 تصل إلى الفراغ: 16 + 4 = 20. وأيضاً 24 − 4 = 20 يؤكد الموضع."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "5 cars have 5 × 4 = 20 wheels. The blank is at 20. The missing number is 20.",
            "explanation_ar": "5 سيارات لها 5 × 4 = 20 عجلة. الفراغ عند 20. العدد المفقود هو 20."
          }
        ],
        "hint_en": "Jump one step of 4 forward from 16. Where do you land before 24?",
        "hint_ar": "اقفز خطوة واحدة بمقدار 4 للأمام من 16. أين تقف قبل 24؟",
        "result_en": "The missing number is 20.",
        "result_ar": "العدد المفقود هو 20."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "skip_counting"
    }
  },
  {
    "id": "g2-specific-odd-easy-001",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Easy",
    "question_en": "What is the even number? 4 + 6 = ?",
    "question_ar": "ما هو العدد الزوجي؟ 4 + 6 = ؟",
    "answer": 10,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at both numbers: 4 is even and 6 is even.",
            "explanation_ar": "انظر إلى العددين: 4 زوجي و6 زوجي."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply the rule: even + even = even. So the answer will be even.",
            "explanation_ar": "طبّق القاعدة: زوجي + زوجي = زوجي. إذاً الناتج سيكون زوجياً."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add 4 + 6: think of it as 4 + 6 = 10.",
            "explanation_ar": "اجمع 4 + 6: فكّر فيها كـ 4 + 6 = 10."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "4 + 6 = 10. The answer is 10, which is even — confirming our prediction!",
            "explanation_ar": "4 + 6 = 10. الجواب 10، وهو زوجي — يؤكد توقعنا!"
          }
        ],
        "hint_en": "Even + Even always gives an even answer.",
        "hint_ar": "زوجي + زوجي دائماً يعطي ناتجاً زوجياً.",
        "result_en": "4 + 6 = 10",
        "result_ar": "4 + 6 = 10"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 6 into 6 = 4 + 2, so the problem becomes 4 + 4 + 2.",
            "explanation_ar": "قسّم 6 إلى 4 + 2، فيصبح المثال 4 + 4 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "First add 4 + 4 = 8, then add the remaining 2.",
            "explanation_ar": "أولاً اجمع 4 + 4 = 8، ثم أضف 2 المتبقية."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "8 + 2 = 10.",
            "explanation_ar": "8 + 2 = 10."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "4 + 6 = 10. The result 10 is even because it ends in 0.",
            "explanation_ar": "4 + 6 = 10. الناتج 10 زوجي لأنه ينتهي بـ 0."
          }
        ],
        "hint_en": "Break one number to make a friendly pair.",
        "hint_ar": "قسّم أحد العددين لتكوين زوج سهل.",
        "result_en": "4 + 6 = 10",
        "result_ar": "4 + 6 = 10"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 4 red dots and 6 blue dots lined up in pairs.",
            "explanation_ar": "تخيّل 4 نقاط حمراء و6 نقاط زرقاء مرتبة في أزواج."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Pair up the red dots: ●● ●● — all paired, so 4 is even. Pair up the blue dots: ●● ●● ●● — all paired, so 6 is even.",
            "explanation_ar": "رتّب النقاط الحمراء أزواجاً: ●● ●● — كلها مزدوجة، إذاً 4 زوجي. رتّب الزرقاء: ●● ●● ●● — كلها مزدوجة، إذاً 6 زوجي."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Put all 10 dots together: ●● ●● ●● ●● ●● — 5 perfect pairs, no leftover dot. So 10 is even.",
            "explanation_ar": "اجمع كل النقاط العشر: ●● ●● ●● ●● ●● — 5 أزواج كاملة، لا نقطة فائضة. إذاً 10 زوجي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "4 + 6 = 10. Counting 5 pairs of dots confirms the answer is 10, an even number.",
            "explanation_ar": "4 + 6 = 10. عدّ 5 أزواج من النقاط يؤكد أن الجواب 10، وهو زوجي."
          }
        ],
        "hint_en": "Even numbers always pair up perfectly — no dot is left alone.",
        "hint_ar": "الأعداد الزوجية دائماً تُرتَّب في أزواج كاملة — لا نقطة تبقى وحدها.",
        "result_en": "4 + 6 = 10",
        "result_ar": "4 + 6 = 10"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-odd-easy-002",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Easy",
    "question_en": "Odd number: 7 − 4 = ?",
    "question_ar": "عدد فردي: 7 − 4 = ؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at both numbers: 7 is odd and 4 is even.",
            "explanation_ar": "انظر إلى العددين: 7 فردي و4 زوجي."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply the rule: odd − even = odd. So the answer will be odd.",
            "explanation_ar": "طبّق القاعدة: فردي − زوجي = فردي. إذاً الناتج سيكون فردياً."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract: 7 − 4 = 3.",
            "explanation_ar": "اطرح: 7 − 4 = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "7 − 4 = 3. The answer is 3, which is odd — confirming our prediction!",
            "explanation_ar": "7 − 4 = 3. الجواب 3، وهو فردي — يؤكد توقعنا!"
          }
        ],
        "hint_en": "Odd − Even always gives an odd answer.",
        "hint_ar": "فردي − زوجي دائماً يعطي ناتجاً فردياً.",
        "result_en": "7 − 4 = 3",
        "result_ar": "7 − 4 = 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Think of 7 as 4 + 3, so 7 − 4 becomes (4 + 3) − 4.",
            "explanation_ar": "فكّر في 7 كـ 4 + 3، فيصبح 7 − 4 هو (4 + 3) − 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Cancel out the 4s: 4 − 4 = 0. What remains is 3.",
            "explanation_ar": "أزل الأربعات: 4 − 4 = 0. ما يبقى هو 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "0 + 3 = 3.",
            "explanation_ar": "0 + 3 = 3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "7 − 4 = 3. The result 3 is odd because it cannot be split into equal pairs.",
            "explanation_ar": "7 − 4 = 3. الناتج 3 فردي لأنه لا يمكن تقسيمه إلى أزواج متساوية."
          }
        ],
        "hint_en": "Split 7 into (4 + 3) to make the subtraction easy.",
        "hint_ar": "قسّم 7 إلى (4 + 3) لتسهيل الطرح.",
        "result_en": "7 − 4 = 3",
        "result_ar": "7 − 4 = 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 7 apples on a table. You take away 4 of them.",
            "explanation_ar": "تخيّل 7 تفاحات على طاولة. تأخذ منها 4."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 7 dots: ●● ●● ●● ●. Notice 7 has one leftover dot — it is odd. Cross out 4 dots (2 pairs).",
            "explanation_ar": "ارسم 7 نقاط: ●● ●● ●● ●. لاحظ أن 7 لها نقطة فائضة — إذاً هي فردية. اشطب 4 نقاط (زوجان)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After removing 4 dots, 3 dots remain: ●● ●. One pair and one leftover — so 3 is odd.",
            "explanation_ar": "بعد إزالة 4 نقاط، تبقى 3 نقاط: ●● ●. زوج واحد ونقطة فائضة — إذاً 3 فردي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "7 − 4 = 3. The 3 remaining dots confirm the answer is 3, an odd number.",
            "explanation_ar": "7 − 4 = 3. النقاط الـ3 المتبقية تؤكد أن الجواب 3، وهو فردي."
          }
        ],
        "hint_en": "Odd numbers always have one dot left over when you try to pair them up.",
        "hint_ar": "الأعداد الفردية دائماً تترك نقطة واحدة فائضة عند محاولة ترتيبها أزواجاً.",
        "result_en": "7 − 4 = 3",
        "result_ar": "7 − 4 = 3"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-odd-easy-003",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Easy",
    "question_en": "What is the even number? 5 + 3 = ?",
    "question_ar": "ما هو العدد الزوجي؟ 5 + 3 = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at both numbers: 5 is odd and 3 is odd.",
            "explanation_ar": "انظر إلى العددين: 5 فردي و3 فردي."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply the rule: odd + odd = even. So the answer will be even.",
            "explanation_ar": "طبّق القاعدة: فردي + فردي = زوجي. إذاً الناتج سيكون زوجياً."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add: 5 + 3 = 8.",
            "explanation_ar": "اجمع: 5 + 3 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "5 + 3 = 8. The answer is 8, which is even — confirming that odd + odd = even!",
            "explanation_ar": "5 + 3 = 8. الجواب 8، وهو زوجي — يؤكد أن فردي + فردي = زوجي!"
          }
        ],
        "hint_en": "Odd + Odd always gives an even answer.",
        "hint_ar": "فردي + فردي دائماً يعطي ناتجاً زوجياً.",
        "result_en": "5 + 3 = 8",
        "result_ar": "5 + 3 = 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 5 into 5 = 2 + 3, so the problem becomes 2 + 3 + 3.",
            "explanation_ar": "قسّم 5 إلى 2 + 3، فيصبح المثال 2 + 3 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "First combine the two 3s: 3 + 3 = 6.",
            "explanation_ar": "أولاً اجمع الثلاثين: 3 + 3 = 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "6 + 2 = 8.",
            "explanation_ar": "6 + 2 = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "5 + 3 = 8. The result 8 is even because it ends in 8 and pairs up perfectly.",
            "explanation_ar": "5 + 3 = 8. الناتج 8 زوجي لأنه ينتهي بـ 8 ويُرتَّب في أزواج كاملة."
          }
        ],
        "hint_en": "Break 5 into 2 + 3 to pair up the odd parts.",
        "hint_ar": "قسّم 5 إلى 2 + 3 لتزاوج الأجزاء الفردية.",
        "result_en": "5 + 3 = 8",
        "result_ar": "5 + 3 = 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 5 yellow stars and 3 blue stars arranged in pairs.",
            "explanation_ar": "تخيّل 5 نجوم صفراء و3 نجوم زرقاء مرتبة في أزواج."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Pair up the yellow stars: ★★ ★★ ★ — 5 has one leftover, it's odd. Pair up the blue stars: ★★ ★ — 3 has one leftover, it's odd too.",
            "explanation_ar": "رتّب النجوم الصفراء أزواجاً: ★★ ★★ ★ — 5 لها نجمة فائضة، إذاً هي فردية. رتّب الزرقاء: ★★ ★ — 3 لها نجمة فائضة أيضاً، إذاً هي فردية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Put all 8 stars together: ★★ ★★ ★★ ★★ — the two leftover stars paired up! All 4 pairs are complete, so 8 is even.",
            "explanation_ar": "اجمع كل النجوم الـ8: ★★ ★★ ★★ ★★ — النجمتان الفائضتان تزاوجتا! جميع الأزواج الـ4 كاملة، إذاً 8 زوجي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "5 + 3 = 8. The two leftover stars paired together, confirming odd + odd = even.",
            "explanation_ar": "5 + 3 = 8. النجمتان الفائضتان تزاوجتا معاً، مما يؤكد أن فردي + فردي = زوجي."
          }
        ],
        "hint_en": "The two leftover dots from two odd numbers always pair up to make an even total.",
        "hint_ar": "النقطتان الفائضتان من عددين فرديين تتزاوجان دائماً لتكوين مجموع زوجي.",
        "result_en": "5 + 3 = 8",
        "result_ar": "5 + 3 = 8"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-odd-medium-001",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Medium",
    "question_en": "12 + __ = the even number closest to 20. __ = ?",
    "question_ar": "12 + __ = العدد الزوجي الأقرب إلى 20. __ = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The even number closest to 20 is 20 itself (20 is even).",
            "explanation_ar": "العدد الزوجي الأقرب إلى 20 هو 20 نفسه (20 زوجي)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "We need 12 + __ = 20. Since 12 is even and 20 is even, the missing number must be even (even + even = even).",
            "explanation_ar": "نحتاج إلى 12 + __ = 20. بما أن 12 زوجي و20 زوجي، فالعدد المفقود يجب أن يكون زوجياً (زوجي + زوجي = زوجي)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Find __ = 20 − 12 = 8.",
            "explanation_ar": "أوجد __ = 20 − 12 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "12 + 8 = 20. The missing number is 8, which is even — consistent with our rule.",
            "explanation_ar": "12 + 8 = 20. العدد المفقود هو 8، وهو زوجي — يتوافق مع قاعدتنا."
          }
        ],
        "hint_en": "The even number closest to 20 is 20. Work backwards: 20 − 12 = ?",
        "hint_ar": "العدد الزوجي الأقرب إلى 20 هو 20. اعمل بشكل عكسي: 20 − 12 = ؟",
        "result_en": "12 + 8 = 20",
        "result_ar": "12 + 8 = 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The target is 20. Break 20 into 12 + something: 20 = 10 + 10, and 12 = 10 + 2.",
            "explanation_ar": "الهدف هو 20. قسّم 20 إلى 12 + شيء ما: 20 = 10 + 10، و12 = 10 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "__ = 20 − 12. Subtract the tens: 10 − 10 = 0. Subtract the units: 0 − 2 means we need to borrow — easier to think: 12 + ? = 20.",
            "explanation_ar": "__ = 20 − 12. اطرح العشرات: 10 − 10 = 0. اطرح الآحاد: 0 − 2 يعني نحتاج إلى استعارة — الأسهل أن نفكر: 12 + ؟ = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "12 + 8 = 20 because 12 + 8 = (12 + 8) and 2 + 8 = 10, then 10 + 10 = 20.",
            "explanation_ar": "12 + 8 = 20 لأن 2 + 8 = 10، ثم 10 + 10 = 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The missing number is 8. Check: 12 + 8 = 20. ✓ 20 is even.",
            "explanation_ar": "العدد المفقود هو 8. تحقق: 12 + 8 = 20. ✓ 20 زوجي."
          }
        ],
        "hint_en": "Think: what do I add to 12 to reach 20?",
        "hint_ar": "فكّر: ماذا أضيف إلى 12 للوصول إلى 20؟",
        "result_en": "12 + 8 = 20",
        "result_ar": "12 + 8 = 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You have 12 building blocks. You want to reach exactly 20 blocks — the nearest even count.",
            "explanation_ar": "لديك 12 مكعباً. تريد الوصول إلى 20 مكعباً بالضبط — أقرب عدد زوجي."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line from 12 to 20. Count the jumps: 12 → 14 → 16 → 18 → 20. That's 4 jumps of 2.",
            "explanation_ar": "ارسم خطاً عددياً من 12 إلى 20. عدّ القفزات: 12 ← 14 ← 16 ← 18 ← 20. هذه 4 قفزات كل منها 2."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "4 jumps × 2 = 8. We need 8 more blocks to go from 12 to 20.",
            "explanation_ar": "4 قفزات × 2 = 8. نحتاج إلى 8 مكعبات إضافية للانتقال من 12 إلى 20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "12 + 8 = 20. The missing number is 8, and 20 is even — a perfect even total!",
            "explanation_ar": "12 + 8 = 20. العدد المفقود هو 8، و20 زوجي — مجموع زوجي مثالي!"
          }
        ],
        "hint_en": "Count up from 12 to 20 on a number line to find the gap.",
        "hint_ar": "عدّ من 12 إلى 20 على خط الأعداد لإيجاد الفرق.",
        "result_en": "12 + 8 = 20",
        "result_ar": "12 + 8 = 20"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-odd-medium-002",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Medium",
    "question_en": "__ + 7 = an odd number less than 15. __ = ?",
    "question_ar": "__ + 7 = عدد فردي أقل من 15. __ = ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "7 is odd. For __ + 7 to be odd, the missing number must be even (even + odd = odd).",
            "explanation_ar": "7 فردي. لكي يكون __ + 7 فردياً، يجب أن يكون العدد المفقود زوجياً (زوجي + فردي = فردي)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The result must be odd and less than 15. The odd numbers less than 15 are: 13, 11, 9, ... Try 13: __ = 13 − 7 = 6. Check: 6 is even. ✓",
            "explanation_ar": "يجب أن يكون الناتج فردياً وأقل من 15. الأعداد الفردية الأقل من 15: 13، 11، 9... جرّب 13: __ = 13 − 7 = 6. تحقق: 6 زوجي. ✓"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "6 + 7 = 13. 13 is odd and less than 15.",
            "explanation_ar": "6 + 7 = 13. 13 فردي وأقل من 15."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The missing number is 6. 6 + 7 = 13, which is odd and less than 15.",
            "explanation_ar": "العدد المفقود هو 6. 6 + 7 = 13، وهو فردي وأقل من 15."
          }
        ],
        "hint_en": "Even + Odd = Odd. Find an even number to add to 7 to get an odd sum less than 15.",
        "hint_ar": "زوجي + فردي = فردي. أوجد عدداً زوجياً تضيفه إلى 7 لتحصل على مجموع فردي أقل من 15.",
        "result_en": "6 + 7 = 13",
        "result_ar": "6 + 7 = 13"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "We need __ + 7 < 15 and odd. So __ < 8. Try even numbers less than 8: 6, 4, 2.",
            "explanation_ar": "نحتاج إلى __ + 7 < 15 وفردي. إذاً __ < 8. جرّب الأعداد الزوجية الأقل من 8: 6، 4، 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Try __ = 6: 6 + 7 = 13. Is 13 odd? Yes. Is 13 < 15? Yes. ✓",
            "explanation_ar": "جرّب __ = 6: 6 + 7 = 13. هل 13 فردي؟ نعم. هل 13 < 15؟ نعم. ✓"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Decompose 6 + 7 as (6 + 4) + 3 = 10 + 3 = 13.",
            "explanation_ar": "حلّل 6 + 7 كـ (6 + 4) + 3 = 10 + 3 = 13."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The missing number is 6. 6 + 7 = 13. ✓ 13 is odd and less than 15.",
            "explanation_ar": "العدد المفقود هو 6. 6 + 7 = 13. ✓ 13 فردي وأقل من 15."
          }
        ],
        "hint_en": "Try even numbers: 2, 4, 6 … add each to 7 and check if the sum is odd and less than 15.",
        "hint_ar": "جرّب الأعداد الزوجية: 2، 4، 6... أضف كلاً منها إلى 7 وتحقق من أن المجموع فردي وأقل من 15.",
        "result_en": "6 + 7 = 13",
        "result_ar": "6 + 7 = 13"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You have some biscuits in a bag. You add 7 more. The total is an odd number less than 15.",
            "explanation_ar": "لديك بعض البسكويت في كيس. تضيف 7 قطع أخرى. المجموع عدد فردي أقل من 15."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Think of the number line: start at 7 (already in the bag). Count on by 6: 7 → 8 → 9 → 10 → 11 → 12 → 13.",
            "explanation_ar": "فكّر في خط الأعداد: ابدأ من 7 (الموجودة في الكيس بالفعل). عدّ 6 خطوات: 7 ← 8 ← 9 ← 10 ← 11 ← 12 ← 13."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "We land on 13. Draw 13 dots: ●● ●● ●● ●● ●● ●● ● — 6 pairs and 1 leftover. 13 is odd!",
            "explanation_ar": "نصل إلى 13. ارسم 13 نقطة: ●● ●● ●● ●● ●● ●● ● — 6 أزواج ونقطة فائضة. 13 فردي!"
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "6 + 7 = 13. We started with 6 biscuits, added 7, and got 13 — odd and less than 15.",
            "explanation_ar": "6 + 7 = 13. بدأنا بـ6 قطع بسكويت، أضفنا 7، وحصلنا على 13 — فردي وأقل من 15."
          }
        ],
        "hint_en": "Start from 7 on the number line and jump forward an even number of steps.",
        "hint_ar": "ابدأ من 7 على خط الأعداد وقفز للأمام عدداً زوجياً من الخطوات.",
        "result_en": "6 + 7 = 13",
        "result_ar": "6 + 7 = 13"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-odd-medium-003",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Medium",
    "question_en": "9 + __ = an even number less than 18. __ = ?",
    "question_ar": "9 + __ = عدد زوجي أقل من 18. __ = ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "9 is odd. For 9 + __ to be even, the missing number must be odd (odd + odd = even).",
            "explanation_ar": "9 فردي. لكي يكون 9 + __ زوجياً، يجب أن يكون العدد المفقود فردياً (فردي + فردي = زوجي)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The result must be even and less than 18. Even numbers less than 18: 16, 14, 12, … Try 16: __ = 16 − 9 = 7. Check: 7 is odd. ✓",
            "explanation_ar": "يجب أن يكون الناتج زوجياً وأقل من 18. الأعداد الزوجية الأقل من 18: 16، 14، 12... جرّب 16: __ = 16 − 9 = 7. تحقق: 7 فردي. ✓"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "9 + 7 = 16. 16 is even and less than 18.",
            "explanation_ar": "9 + 7 = 16. 16 زوجي وأقل من 18."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The missing number is 7. 9 + 7 = 16, which is even and less than 18.",
            "explanation_ar": "العدد المفقود هو 7. 9 + 7 = 16، وهو زوجي وأقل من 18."
          }
        ],
        "hint_en": "Odd + Odd = Even. Find an odd number to add to 9 to get an even sum less than 18.",
        "hint_ar": "فردي + فردي = زوجي. أوجد عدداً فردياً تضيفه إلى 9 لتحصل على مجموع زوجي أقل من 18.",
        "result_en": "9 + 7 = 16",
        "result_ar": "9 + 7 = 16"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "We need 9 + __ < 18 and even. So __ < 9. Try odd numbers less than 9: 7, 5, 3, 1.",
            "explanation_ar": "نحتاج إلى 9 + __ < 18 وزوجي. إذاً __ < 9. جرّب الأعداد الفردية الأقل من 9: 7، 5، 3، 1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Try __ = 7: 9 + 7 = 16. Is 16 even? Yes. Is 16 < 18? Yes. ✓",
            "explanation_ar": "جرّب __ = 7: 9 + 7 = 16. هل 16 زوجي؟ نعم. هل 16 < 18؟ نعم. ✓"
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Decompose: 9 + 7 = 9 + (1 + 6) = (9 + 1) + 6 = 10 + 6 = 16.",
            "explanation_ar": "حلّل: 9 + 7 = 9 + (1 + 6) = (9 + 1) + 6 = 10 + 6 = 16."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "The missing number is 7. 9 + 7 = 16. ✓ 16 is even and less than 18.",
            "explanation_ar": "العدد المفقود هو 7. 9 + 7 = 16. ✓ 16 زوجي وأقل من 18."
          }
        ],
        "hint_en": "Make 10 first: 9 + 1 = 10, then add the rest of the missing number.",
        "hint_ar": "اصنع 10 أولاً: 9 + 1 = 10، ثم أضف الباقي من العدد المفقود.",
        "result_en": "9 + 7 = 16",
        "result_ar": "9 + 7 = 16"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You have 9 toy cars. You get some more. The total is an even number less than 18 — meaning all cars can be paired up.",
            "explanation_ar": "لديك 9 سيارات لعبة. تحصل على مزيد منها. المجموع عدد زوجي أقل من 18 — أي يمكن ترتيب جميع السيارات أزواجاً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 9 dots: ●● ●● ●● ●● ● — one dot is unpaired. To make all pairs complete, the extra number must also be odd (to fill that gap).",
            "explanation_ar": "ارسم 9 نقاط: ●● ●● ●● ●● ● — نقطة واحدة بلا زوج. لإكمال الأزواج، يجب أن يكون العدد الإضافي أيضاً فردياً (لملء تلك الفجوة)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Add 7 dots: ●● ●● ●● ● — 7 also has one leftover. The two leftover dots pair together. Total: 16 dots in 8 perfect pairs.",
            "explanation_ar": "أضف 7 نقاط: ●● ●● ●● ● — 7 أيضاً لها نقطة فائضة. تتزاوج النقطتان الفائضتان. المجموع: 16 نقطة في 8 أزواج كاملة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "9 + 7 = 16. 16 dots pair up perfectly — confirming 16 is even and less than 18.",
            "explanation_ar": "9 + 7 = 16. النقاط الـ16 تُرتَّب في أزواج كاملة — تؤكد أن 16 زوجي وأقل من 18."
          }
        ],
        "hint_en": "9 has one unpaired dot. Add an odd number to pair it up and get an even total.",
        "hint_ar": "9 لها نقطة بلا زوج. أضف عدداً فردياً لتزاوجها والحصول على مجموع زوجي.",
        "result_en": "9 + 7 = 16",
        "result_ar": "9 + 7 = 16"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-odd-hard-001",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Hard",
    "question_en": "Sum of the first 4 even numbers: 2 + 4 + 6 + 8 = ?",
    "question_ar": "مجموع أول 4 أعداد زوجية: 2 + 4 + 6 + 8 = ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We are adding four even numbers: 2, 4, 6, 8. Even + Even + Even + Even = Even.",
            "explanation_ar": "نجمع أربعة أعداد زوجية: 2، 4، 6، 8. زوجي + زوجي + زوجي + زوجي = زوجي."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Pair them strategically: (2 + 8) = 10 and (4 + 6) = 10.",
            "explanation_ar": "قارنها بذكاء: (2 + 8) = 10 و(4 + 6) = 10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now add the two pairs: 10 + 10 = 20.",
            "explanation_ar": "الآن اجمع الزوجين: 10 + 10 = 20."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2 + 4 + 6 + 8 = 20. The answer is 20, which is even — as expected when adding only even numbers.",
            "explanation_ar": "2 + 4 + 6 + 8 = 20. الجواب 20، وهو زوجي — كما هو متوقع عند جمع أعداد زوجية فقط."
          }
        ],
        "hint_en": "Pair the numbers cleverly: the first and last even numbers add to 10, and so do the middle two.",
        "hint_ar": "قارن الأعداد بذكاء: العدد الزوجي الأول والأخير يساويان 10، وكذلك الاثنان في المنتصف.",
        "result_en": "2 + 4 + 6 + 8 = 20",
        "result_ar": "2 + 4 + 6 + 8 = 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Add left to right in pairs: first compute 2 + 4, then 6 + 8.",
            "explanation_ar": "اجمع من اليسار إلى اليمين على دفعتين: احسب أولاً 2 + 4، ثم 6 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2 + 4 = 6 and 6 + 8 = 14.",
            "explanation_ar": "2 + 4 = 6 و6 + 8 = 14."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two subtotals: 6 + 14 = 20.",
            "explanation_ar": "اجمع المجموعين الفرعيين: 6 + 14 = 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "2 + 4 + 6 + 8 = 20. All four even numbers sum to 20, which is even.",
            "explanation_ar": "2 + 4 + 6 + 8 = 20. مجموع الأعداد الزوجية الأربعة هو 20، وهو زوجي."
          }
        ],
        "hint_en": "Split into two pairs: (2 + 4) and (6 + 8), then add the results.",
        "hint_ar": "قسّم إلى زوجين: (2 + 4) و(6 + 8)، ثم اجمع النتيجتين.",
        "result_en": "2 + 4 + 6 + 8 = 20",
        "result_ar": "2 + 4 + 6 + 8 = 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine four rows of dots: 2 dots, then 4 dots, then 6 dots, then 8 dots — all arranged in neat pairs.",
            "explanation_ar": "تخيّل أربعة صفوف من النقاط: 2 نقطة، ثم 4 نقاط، ثم 6 نقاط، ثم 8 نقاط — كلها مرتبة في أزواج أنيقة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Row 1: ●● (1 pair). Row 2: ●● ●● (2 pairs). Row 3: ●● ●● ●● (3 pairs). Row 4: ●● ●● ●● ●● (4 pairs). Total pairs: 1+2+3+4 = 10 pairs.",
            "explanation_ar": "الصف 1: ●● (زوج واحد). الصف 2: ●● ●● (زوجان). الصف 3: ●● ●● ●● (3 أزواج). الصف 4: ●● ●● ●● ●● (4 أزواج). مجموع الأزواج: 1+2+3+4 = 10 أزواج."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "10 pairs of dots = 10 × 2 = 20 dots in total. Every dot has a partner — the total is even.",
            "explanation_ar": "10 أزواج من النقاط = 10 × 2 = 20 نقطة في المجموع. كل نقطة لها شريك — المجموع زوجي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "2 + 4 + 6 + 8 = 20. Counting 10 complete pairs of dots confirms the sum is 20.",
            "explanation_ar": "2 + 4 + 6 + 8 = 20. عدّ 10 أزواج كاملة من النقاط يؤكد أن المجموع هو 20."
          }
        ],
        "hint_en": "Count the total number of pairs across all four rows.",
        "hint_ar": "عدّ إجمالي الأزواج في جميع الصفوف الأربعة.",
        "result_en": "2 + 4 + 6 + 8 = 20",
        "result_ar": "2 + 4 + 6 + 8 = 20"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-odd-hard-002",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Hard",
    "question_en": "Sum of the first 4 odd numbers: 1 + 3 + 5 + 7 = ?",
    "question_ar": "مجموع أول 4 أعداد فردية: 1 + 3 + 5 + 7 = ؟",
    "answer": 16,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We are adding four odd numbers: 1, 3, 5, 7. Odd + Odd = Even; Even + Odd = Odd; Odd + Odd = Even. So the final sum is even.",
            "explanation_ar": "نجمع أربعة أعداد فردية: 1، 3، 5، 7. فردي + فردي = زوجي؛ زوجي + فردي = فردي؛ فردي + فردي = زوجي. إذاً المجموع النهائي زوجي."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Pair them: (1 + 7) = 8 and (3 + 5) = 8.",
            "explanation_ar": "قارنها: (1 + 7) = 8 و(3 + 5) = 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two pairs: 8 + 8 = 16.",
            "explanation_ar": "اجمع الزوجين: 8 + 8 = 16."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "1 + 3 + 5 + 7 = 16. The answer is 16, an even number — because an even count of odd numbers always sums to even.",
            "explanation_ar": "1 + 3 + 5 + 7 = 16. الجواب 16، وهو زوجي — لأن عدداً زوجياً من الأعداد الفردية يكون مجموعه دائماً زوجياً."
          }
        ],
        "hint_en": "Pair the first and last: 1 + 7 = 8, and the middle two: 3 + 5 = 8. Then 8 + 8 = 16.",
        "hint_ar": "قارن الأول والأخير: 1 + 7 = 8، والاثنين في المنتصف: 3 + 5 = 8. ثم 8 + 8 = 16.",
        "result_en": "1 + 3 + 5 + 7 = 16",
        "result_ar": "1 + 3 + 5 + 7 = 16"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Add step by step: first 1 + 3, then add 5, then add 7.",
            "explanation_ar": "اجمع خطوة بخطوة: أولاً 1 + 3، ثم أضف 5، ثم أضف 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 + 3 = 4. Then 4 + 5 = 9.",
            "explanation_ar": "1 + 3 = 4. ثم 4 + 5 = 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "9 + 7 = 16.",
            "explanation_ar": "9 + 7 = 16."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "1 + 3 + 5 + 7 = 16. The four odd numbers sum to 16, which is even.",
            "explanation_ar": "1 + 3 + 5 + 7 = 16. مجموع الأعداد الفردية الأربعة هو 16، وهو زوجي."
          }
        ],
        "hint_en": "Add the numbers one at a time: 1+3=4, 4+5=9, 9+7=16.",
        "hint_ar": "اجمع الأعداد واحداً في المرة: 1+3=4، 4+5=9، 9+7=16.",
        "result_en": "1 + 3 + 5 + 7 = 16",
        "result_ar": "1 + 3 + 5 + 7 = 16"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine stacking four towers of dots: 1 dot, 3 dots, 5 dots, and 7 dots.",
            "explanation_ar": "تخيّل تكديس أربعة أبراج من النقاط: 1 نقطة، 3 نقاط، 5 نقاط، و7 نقاط."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Tower 1: ● (1 — no pair). Tower 2: ●● ● (3 — one leftover). Tower 3: ●● ●● ● (5 — one leftover). Tower 4: ●● ●● ●● ● (7 — one leftover). Each odd tower has exactly one unpaired dot.",
            "explanation_ar": "البرج 1: ● (1 — بلا زوج). البرج 2: ●● ● (3 — نقطة فائضة). البرج 3: ●● ●● ● (5 — نقطة فائضة). البرج 4: ●● ●● ●● ● (7 — نقطة فائضة). كل برج فردي له نقطة واحدة بلا زوج."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The 4 leftover dots pair up into 2 extra pairs. All 16 dots now form 8 perfect pairs — so 16 is even.",
            "explanation_ar": "النقاط الـ4 الفائضة تتزاوج لتكوين زوجين إضافيين. جميع النقاط الـ16 تشكّل الآن 8 أزواج كاملة — إذاً 16 زوجي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "1 + 3 + 5 + 7 = 16. The four leftover dots from the four odd towers paired up, confirming the even total.",
            "explanation_ar": "1 + 3 + 5 + 7 = 16. النقاط الـ4 الفائضة من الأبراج الفردية الأربعة تزاوجت، مما يؤكد المجموع الزوجي."
          }
        ],
        "hint_en": "Each odd number has one leftover dot. Four odd numbers give four leftover dots that form two more pairs.",
        "hint_ar": "كل عدد فردي له نقطة فائضة واحدة. أربعة أعداد فردية تعطي أربع نقاط فائضة تُشكّل زوجين إضافيين.",
        "result_en": "1 + 3 + 5 + 7 = 16",
        "result_ar": "1 + 3 + 5 + 7 = 16"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-odd-hard-003",
    "grade": 2,
    "bank": "specific",
    "category": "Odd & Even",
    "level": "Hard",
    "question_en": "Even numbers between 10 and 20 (not including 10 and 20): 12 + 14 + 16 + 18 = ?",
    "question_ar": "الأعداد الزوجية بين 10 و20 (لا تشمل 10 و20): 12 + 14 + 16 + 18 = ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We are adding four even numbers: 12, 14, 16, 18. Even + Even + Even + Even = Even.",
            "explanation_ar": "نجمع أربعة أعداد زوجية: 12، 14، 16، 18. زوجي + زوجي + زوجي + زوجي = زوجي."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Pair them: (12 + 18) = 30 and (14 + 16) = 30.",
            "explanation_ar": "قارنها: (12 + 18) = 30 و(14 + 16) = 30."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two pairs: 30 + 30 = 60.",
            "explanation_ar": "اجمع الزوجين: 30 + 30 = 60."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "12 + 14 + 16 + 18 = 60. The answer is 60, an even number.",
            "explanation_ar": "12 + 14 + 16 + 18 = 60. الجواب 60، وهو زوجي."
          }
        ],
        "hint_en": "Pair the outer numbers (12 + 18 = 30) and the inner numbers (14 + 16 = 30), then add the two 30s.",
        "hint_ar": "قارن الأعداد الخارجية (12 + 18 = 30) والأعداد الداخلية (14 + 16 = 30)، ثم اجمع الـ30ين.",
        "result_en": "12 + 14 + 16 + 18 = 60",
        "result_ar": "12 + 14 + 16 + 18 = 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Separate the tens and units: tens are 10+10+10+10 = 40, units are 2+4+6+8 = 20.",
            "explanation_ar": "افصل العشرات والآحاد: العشرات هي 10+10+10+10 = 40، والآحاد هي 2+4+6+8 = 20."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Sum of tens: 4 × 10 = 40. Sum of units: 2 + 4 + 6 + 8 = 20 (we know this from a previous problem!).",
            "explanation_ar": "مجموع العشرات: 4 × 10 = 40. مجموع الآحاد: 2 + 4 + 6 + 8 = 20 (نعرف هذا من مسألة سابقة!)."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "40 + 20 = 60.",
            "explanation_ar": "40 + 20 = 60."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "12 + 14 + 16 + 18 = 60. The result 60 is even — as expected when summing only even numbers.",
            "explanation_ar": "12 + 14 + 16 + 18 = 60. الناتج 60 زوجي — كما هو متوقع عند جمع أعداد زوجية فقط."
          }
        ],
        "hint_en": "Split each number into tens and units, sum them separately, then add back together.",
        "hint_ar": "قسّم كل عدد إلى عشرات وآحاد، اجمعها بشكل منفصل، ثم اجمعها معاً.",
        "result_en": "12 + 14 + 16 + 18 = 60",
        "result_ar": "12 + 14 + 16 + 18 = 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine four baskets with 12, 14, 16, and 18 oranges. All counts are even — every orange has a partner.",
            "explanation_ar": "تخيّل أربعة سلال تحتوي على 12، 14، 16، و18 برتقالة. جميع الأعداد زوجية — لكل برتقالة شريك."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture each basket as a column: 6 pairs, 7 pairs, 8 pairs, 9 pairs. Total pairs: 6+7+8+9 = 30 pairs.",
            "explanation_ar": "تصوّر كل سلة كعمود: 6 أزواج، 7 أزواج، 8 أزواج، 9 أزواج. مجموع الأزواج: 6+7+8+9 = 30 زوجاً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "30 pairs × 2 oranges each = 60 oranges total. All perfectly paired — the total is even.",
            "explanation_ar": "30 زوجاً × 2 برتقالة = 60 برتقالة إجمالاً. جميعها في أزواج مثالية — المجموع زوجي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "12 + 14 + 16 + 18 = 60. Counting 30 pairs confirms the answer is 60, an even number.",
            "explanation_ar": "12 + 14 + 16 + 18 = 60. عدّ 30 زوجاً يؤكد أن الجواب 60، وهو زوجي."
          }
        ],
        "hint_en": "Count the number of pairs in each basket and multiply the total pairs by 2.",
        "hint_ar": "عدّ عدد الأزواج في كل سلة واضرب مجموع الأزواج في 2.",
        "result_en": "12 + 14 + 16 + 18 = 60",
        "result_ar": "12 + 14 + 16 + 18 = 60"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "odd_even"
    }
  },
  {
    "id": "g2-specific-word-easy-001",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "Amira has 23 stickers in Cairo. Her friend gives her 14 more. How many stickers does she have now? 23 + 14 = ?",
    "question_ar": "عند أميرة 23 ملصقاً في القاهرة. أعطتها صديقتها 14 أخرى. كم ملصقاً لديها الآن؟ 23 + 14 = ؟",
    "answer": 37,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 23 + 14. The tens digits are 2 and 1, the units digits are 3 and 4. No carrying needed.",
            "explanation_ar": "انظر إلى 23 + 14. أرقام العشرات هي 2 و1، وأرقام الآحاد هي 3 و4. لا حاجة إلى نقل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 20 + 10 = 30. Add the units: 3 + 4 = 7.",
            "explanation_ar": "اجمع العشرات: 20 + 10 = 30. اجمع الآحاد: 3 + 4 = 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine the partial sums: 30 + 7 = 37.",
            "explanation_ar": "اجمع النتائج الجزئية: 30 + 7 = 37."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Amira now has 37 stickers. 23 + 14 = 37.",
            "explanation_ar": "أصبح لدى أميرة 37 ملصقاً. 23 + 14 = 37."
          }
        ],
        "hint_en": "Add tens to tens and units to units separately, then combine.",
        "hint_ar": "اجمع العشرات مع العشرات والآحاد مع الآحاد بشكل منفصل، ثم اجمع النتائج.",
        "result_en": "23 + 14 = 37",
        "result_ar": "23 + 14 = 37"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 14 into 10 + 4. Start with 23.",
            "explanation_ar": "قسّم 14 إلى 10 + 4. ابدأ بـ 23."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "First add the 10: 23 + 10 = 33. Then add the 4: 33 + 4 = 37.",
            "explanation_ar": "أضف العشرة أولاً: 23 + 10 = 33. ثم أضف الأربعة: 33 + 4 = 37."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The result is 37. Both steps add up correctly: 23 + 10 + 4 = 37.",
            "explanation_ar": "النتيجة هي 37. الخطوتان تعطيان: 23 + 10 + 4 = 37."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 23 + 14 = 37. Amira has 37 stickers.",
            "explanation_ar": "تحقق: 23 + 14 = 37. لدى أميرة 37 ملصقاً."
          }
        ],
        "hint_en": "Break 14 into 10 and 4, then add to 23 in two hops.",
        "hint_ar": "قسّم 14 إلى 10 و4، ثم أضفهما إلى 23 على خطوتين.",
        "result_en": "23 + 14 = 37",
        "result_ar": "23 + 14 = 37"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture Amira holding 23 stickers in Cairo's busy market, then her friend hands her a small packet of 14 more.",
            "explanation_ar": "تخيّل أميرة تمسك 23 ملصقاً في سوق القاهرة المزدحم، ثم تعطيها صديقتها حزمة صغيرة من 14 ملصقاً إضافياً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 23, jump +10 to land on 33, then jump +4 to land on 37.",
            "explanation_ar": "ارسم خطاً للأعداد. ابدأ من 23، اقفز +10 لتصل إلى 33، ثم اقفز +4 لتصل إلى 37."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The number line shows two jumps: 23 → 33 → 37. The final position is 37.",
            "explanation_ar": "يُظهر خط الأعداد قفزتين: 23 ← 33 ← 37. الموضع النهائي هو 37."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Amira ends up with 37 stickers. 23 + 14 = 37.",
            "explanation_ar": "انتهى الأمر بأن لدى أميرة 37 ملصقاً. 23 + 14 = 37."
          }
        ],
        "hint_en": "Jump along a number line: +10 then +4 from 23.",
        "hint_ar": "اقفز على خط الأعداد: +10 ثم +4 من 23.",
        "result_en": "23 + 14 = 37",
        "result_ar": "23 + 14 = 37"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g2-specific-word-easy-002",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "Kenji buys 45 fish crackers at a shop in Tokyo. He eats 12 on the way home. How many crackers does he have left? 45 − 12 = ?",
    "question_ar": "اشترى كينجي 45 كعكة سمك من متجر في طوكيو. أكل 12 منها في طريقه إلى المنزل. كم كعكة تبقّت معه؟ 45 − 12 = ؟",
    "answer": 33,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 45 − 12. The tens digits are 4 and 1, the units digits are 5 and 2. No borrowing needed since 5 > 2.",
            "explanation_ar": "انظر إلى 45 − 12. أرقام العشرات هي 4 و1، وأرقام الآحاد هي 5 و2. لا حاجة للاستعارة لأن 5 > 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract the tens: 40 − 10 = 30. Subtract the units: 5 − 2 = 3.",
            "explanation_ar": "اطرح العشرات: 40 − 10 = 30. اطرح الآحاد: 5 − 2 = 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine: 30 + 3 = 33.",
            "explanation_ar": "اجمع: 30 + 3 = 33."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Kenji has 33 crackers left. 45 − 12 = 33.",
            "explanation_ar": "تبقّى مع كينجي 33 كعكة. 45 − 12 = 33."
          }
        ],
        "hint_en": "Subtract tens from tens and units from units separately.",
        "hint_ar": "اطرح العشرات من العشرات والآحاد من الآحاد بشكل منفصل.",
        "result_en": "45 − 12 = 33",
        "result_ar": "45 − 12 = 33"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 12 into 10 + 2. Start with 45.",
            "explanation_ar": "قسّم 12 إلى 10 + 2. ابدأ بـ 45."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "First subtract the 10: 45 − 10 = 35. Then subtract the 2: 35 − 2 = 33.",
            "explanation_ar": "اطرح العشرة أولاً: 45 − 10 = 35. ثم اطرح الاثنين: 35 − 2 = 33."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Both subtractions give: 45 − 10 − 2 = 33.",
            "explanation_ar": "العمليتان معاً تعطيان: 45 − 10 − 2 = 33."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 33 + 12 = 45. ✓ Kenji has 33 crackers.",
            "explanation_ar": "تحقق: 33 + 12 = 45. ✓ لدى كينجي 33 كعكة."
          }
        ],
        "hint_en": "Take away 10 first, then take away 2.",
        "hint_ar": "اطرح 10 أولاً، ثم اطرح 2.",
        "result_en": "45 − 12 = 33",
        "result_ar": "45 − 12 = 33"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture Kenji walking through Tokyo's colorful streets with a bag of 45 fish crackers, munching 12 as he walks.",
            "explanation_ar": "تخيّل كينجي يمشي في شوارع طوكيو الملوّنة وهو يحمل كيساً من 45 كعكة سمك، يأكل منها 12 أثناء المشي."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 45, jump back −10 to land on 35, then jump back −2 to land on 33.",
            "explanation_ar": "ارسم خطاً للأعداد. ابدأ من 45، اقفز −10 لتصل إلى 35، ثم اقفز −2 لتصل إلى 33."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The number line shows: 45 → 35 → 33. The final count is 33.",
            "explanation_ar": "يُظهر خط الأعداد: 45 ← 35 ← 33. العدد النهائي هو 33."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Kenji arrives home with 33 crackers. 45 − 12 = 33.",
            "explanation_ar": "وصل كينجي إلى المنزل معه 33 كعكة. 45 − 12 = 33."
          }
        ],
        "hint_en": "Count backwards on a number line: −10 then −2 from 45.",
        "hint_ar": "اعدّ للخلف على خط الأعداد: −10 ثم −2 من 45.",
        "result_en": "45 − 12 = 33",
        "result_ar": "45 − 12 = 33"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g2-specific-word-easy-003",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "Lila picks 31 flowers in Sydney's botanical garden. Her brother picks 26 flowers. How many flowers do they have altogether? 31 + 26 = ?",
    "question_ar": "قطفت ليلى 31 زهرة في الحديقة النباتية في سيدني. قطف أخوها 26 زهرة. كم زهرة لديهما معاً؟ 31 + 26 = ؟",
    "answer": 57,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 31 + 26. Tens digits: 3 and 2. Units digits: 1 and 6. Units sum is 7, no carrying needed.",
            "explanation_ar": "انظر إلى 31 + 26. أرقام العشرات: 3 و2. أرقام الآحاد: 1 و6. مجموع الآحاد 7، لا حاجة للنقل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the tens: 30 + 20 = 50. Add the units: 1 + 6 = 7.",
            "explanation_ar": "اجمع العشرات: 30 + 20 = 50. اجمع الآحاد: 1 + 6 = 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine: 50 + 7 = 57.",
            "explanation_ar": "اجمع: 50 + 7 = 57."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Lila and her brother have 57 flowers altogether. 31 + 26 = 57.",
            "explanation_ar": "لدى ليلى وأخيها 57 زهرة معاً. 31 + 26 = 57."
          }
        ],
        "hint_en": "Add tens to tens and units to units, then combine the two results.",
        "hint_ar": "اجمع العشرات مع العشرات والآحاد مع الآحاد، ثم اجمع النتيجتين.",
        "result_en": "31 + 26 = 57",
        "result_ar": "31 + 26 = 57"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 26 into 20 + 6. Start with 31.",
            "explanation_ar": "قسّم 26 إلى 20 + 6. ابدأ بـ 31."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the 20: 31 + 20 = 51. Then add the 6: 51 + 6 = 57.",
            "explanation_ar": "أضف العشرين: 31 + 20 = 51. ثم أضف الستة: 51 + 6 = 57."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "31 + 20 + 6 = 57. The two parts give the full total.",
            "explanation_ar": "31 + 20 + 6 = 57. الجزآن يعطيان المجموع الكامل."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 57 − 26 = 31. ✓ They have 57 flowers.",
            "explanation_ar": "تحقق: 57 − 26 = 31. ✓ لديهما 57 زهرة."
          }
        ],
        "hint_en": "Add 20 to 31 first, then add 6.",
        "hint_ar": "أضف 20 إلى 31 أولاً، ثم أضف 6.",
        "result_en": "31 + 26 = 57",
        "result_ar": "31 + 26 = 57"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture Lila and her brother each holding bunches of flowers in Sydney's sunny botanical garden.",
            "explanation_ar": "تخيّل ليلى وأخاها يمسكان باقات الزهور في الحديقة النباتية المشمسة في سيدني."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw two groups: one with 31 flowers (3 tens and 1 unit) and one with 26 flowers (2 tens and 6 units).",
            "explanation_ar": "ارسم مجموعتين: واحدة بـ 31 زهرة (3 عشرات وواحدة آحاد) وأخرى بـ 26 زهرة (2 عشرات و6 آحاد)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Put the groups together: 5 tens = 50, and 1 + 6 = 7 units. Total = 57.",
            "explanation_ar": "اجمع المجموعتين: 5 عشرات = 50، و1 + 6 = 7 آحاد. المجموع = 57."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Together they have 57 flowers. 31 + 26 = 57.",
            "explanation_ar": "لديهما معاً 57 زهرة. 31 + 26 = 57."
          }
        ],
        "hint_en": "Group the tens together and the units together, then combine.",
        "hint_ar": "اجمع العشرات مع بعضها والآحاد مع بعضها، ثم اجمعهما.",
        "result_en": "31 + 26 = 57",
        "result_ar": "31 + 26 = 57"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g2-specific-word-medium-001",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "At a market in São Paulo, mangoes are packed into 6 bags with 8 mangoes in each bag. How many mangoes are there in total? 6 × 8 = ?",
    "question_ar": "في سوق في ساو باولو، تُعبّأ المانغو في 6 أكياس، في كل كيس 8 حبات مانغو. كم حبة مانغو يوجد في المجموع؟ 6 × 8 = ؟",
    "answer": 48,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 6 × 8. Notice that 6 × 8 is the same as 5 × 8 plus 1 × 8.",
            "explanation_ar": "لدينا 6 × 8. لاحظ أن 6 × 8 = 5 × 8 + 1 × 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "5 × 8 = 40. Then 1 × 8 = 8.",
            "explanation_ar": "5 × 8 = 40. ثم 1 × 8 = 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two parts: 40 + 8 = 48.",
            "explanation_ar": "اجمع الجزأين: 40 + 8 = 48."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There are 48 mangoes in total. 6 × 8 = 48.",
            "explanation_ar": "يوجد 48 حبة مانغو في المجموع. 6 × 8 = 48."
          }
        ],
        "hint_en": "Think of 6 groups as 5 groups + 1 group. 5 × 8 = 40, then add one more 8.",
        "hint_ar": "فكّر في 6 مجموعات كـ 5 مجموعات + مجموعة واحدة. 5 × 8 = 40، ثم أضف 8 أخرى.",
        "result_en": "6 × 8 = 48",
        "result_ar": "6 × 8 = 48"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split the 6 groups into 3 groups + 3 groups.",
            "explanation_ar": "قسّم المجموعات الـ 6 إلى 3 مجموعات + 3 مجموعات."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3 × 8 = 24. Do this for both halves: 24 + 24 = 48.",
            "explanation_ar": "3 × 8 = 24. افعل ذلك للنصفين: 24 + 24 = 48."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "24 + 24 = 48. Doubling 3 groups of 8 gives the answer.",
            "explanation_ar": "24 + 24 = 48. مضاعفة 3 مجموعات من 8 تعطي الإجابة."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 48 ÷ 6 = 8. ✓ There are 48 mangoes.",
            "explanation_ar": "تحقق: 48 ÷ 6 = 8. ✓ يوجد 48 حبة مانغو."
          }
        ],
        "hint_en": "Split 6 into 3 + 3. Find 3 × 8 = 24, then double it.",
        "hint_ar": "قسّم 6 إلى 3 + 3. احسب 3 × 8 = 24، ثم ضاعفه.",
        "result_en": "6 × 8 = 48",
        "result_ar": "6 × 8 = 48"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture 6 bags lined up at a colourful São Paulo market stall, each bag filled with 8 bright yellow mangoes.",
            "explanation_ar": "تخيّل 6 أكياس مصفوفة في كشك سوق ساو باولو الملوّن، كل كيس ممتلئ بـ 8 حبات مانغو صفراء زاهية."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a 6-by-8 array: 6 rows with 8 dots each, representing the mangoes.",
            "explanation_ar": "ارسم مصفوفة 6×8: 6 صفوف بـ 8 نقاط في كل صف، تمثّل حبات المانغو."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the rows: 8, 16, 24, 32, 40, 48. Each new row adds 8 more.",
            "explanation_ar": "عدّ الصفوف: 8، 16، 24، 32، 40، 48. كل صف جديد يضيف 8 أكثر."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "6 full rows of 8 equals 48 mangoes. 6 × 8 = 48.",
            "explanation_ar": "6 صفوف كاملة من 8 تساوي 48 حبة مانغو. 6 × 8 = 48."
          }
        ],
        "hint_en": "Draw 6 rows of 8 and count by 8s.",
        "hint_ar": "ارسم 6 صفوف من 8 وعدّ بالثمانيات.",
        "result_en": "6 × 8 = 48",
        "result_ar": "6 × 8 = 48"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g2-specific-word-medium-002",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "On a red double-decker bus in London, 57 passengers are seated and 36 more get on at the next stop. How many passengers are on the bus now? 57 + 36 = ?",
    "question_ar": "في حافلة ذات طابقين حمراء في لندن، يجلس 57 راكباً ويصعد 36 آخرون في المحطة التالية. كم راكباً في الحافلة الآن؟ 57 + 36 = ؟",
    "answer": 93,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 57 + 36. Units: 7 + 6 = 13, which is more than 9, so regrouping is needed.",
            "explanation_ar": "انظر إلى 57 + 36. الآحاد: 7 + 6 = 13، وهو أكبر من 9، لذا يلزم إعادة التجميع."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round 57 up to 60 (add 3). Then 60 + 36 = 96.",
            "explanation_ar": "قرّب 57 إلى 60 (أضف 3). ثم 60 + 36 = 96."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "We added 3 extra to 57, so subtract it back: 96 − 3 = 93.",
            "explanation_ar": "أضفنا 3 زيادة إلى 57، لذا نطرحها: 96 − 3 = 93."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There are 93 passengers on the bus. 57 + 36 = 93.",
            "explanation_ar": "يوجد 93 راكباً في الحافلة. 57 + 36 = 93."
          }
        ],
        "hint_en": "Round 57 up to 60, add 36 to get 96, then subtract the 3 you added.",
        "hint_ar": "قرّب 57 إلى 60، أضف 36 لتحصل على 96، ثم اطرح الـ 3 التي أضفتها.",
        "result_en": "57 + 36 = 93",
        "result_ar": "57 + 36 = 93"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 36 into 30 + 6. Start with 57.",
            "explanation_ar": "قسّم 36 إلى 30 + 6. ابدأ بـ 57."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the 30: 57 + 30 = 87. Then add the 6: 87 + 6 = 93.",
            "explanation_ar": "أضف الثلاثين: 57 + 30 = 87. ثم أضف الستة: 87 + 6 = 93."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "57 + 30 + 6 = 93. Regrouping happens at the last step (87 + 6 crosses into the tens).",
            "explanation_ar": "57 + 30 + 6 = 93. إعادة التجميع تحدث في الخطوة الأخيرة (87 + 6 يتجاوز العشرات)."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 93 − 36 = 57. ✓ There are 93 passengers.",
            "explanation_ar": "تحقق: 93 − 36 = 57. ✓ يوجد 93 راكباً."
          }
        ],
        "hint_en": "Add 30 to 57 first to get 87, then add 6 more.",
        "hint_ar": "أضف 30 إلى 57 أولاً لتحصل على 87، ثم أضف 6 أخرى.",
        "result_en": "57 + 36 = 93",
        "result_ar": "57 + 36 = 93"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture London's famous red double-decker bus with 57 passengers, then a crowd of 36 more boarding at a busy stop.",
            "explanation_ar": "تخيّل حافلة لندن الحمراء ذات الطابقين المشهورة وبها 57 راكباً، ثم حشداً من 36 شخصاً يصعدون في محطة مزدحمة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 57, take a jump of +30 to reach 87, then a jump of +6 to reach 93.",
            "explanation_ar": "ارسم خطاً للأعداد. ابدأ من 57، اقفز +30 لتصل إلى 87، ثم اقفز +6 لتصل إلى 93."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two jumps: 57 → 87 → 93. The final position is 93.",
            "explanation_ar": "قفزتان: 57 ← 87 ← 93. الموضع النهائي هو 93."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The bus now carries 93 passengers. 57 + 36 = 93.",
            "explanation_ar": "تحمل الحافلة الآن 93 راكباً. 57 + 36 = 93."
          }
        ],
        "hint_en": "Hop +30 from 57 to get 87, then hop +6 to get 93.",
        "hint_ar": "اقفز +30 من 57 لتحصل على 87، ثم اقفز +6 لتحصل على 93.",
        "result_en": "57 + 36 = 93",
        "result_ar": "57 + 36 = 93"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g2-specific-word-medium-003",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "Priya sells 64 samosas at her stall in Mumbai. Then she sells 28 more in the evening. How many samosas did she sell altogether? 64 + 28 = ?",
    "question_ar": "باعت بريا 64 سموسة في كشكها في مومباي. ثم باعت 28 أخرى في المساء. كم سموسة باعت في المجموع؟ 64 + 28 = ؟",
    "answer": 92,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 64 + 28. Units: 4 + 8 = 12, more than 9, so regrouping is needed.",
            "explanation_ar": "انظر إلى 64 + 28. الآحاد: 4 + 8 = 12، أكبر من 9، لذا يلزم إعادة التجميع."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round 28 up to 30 (add 2). Then 64 + 30 = 94.",
            "explanation_ar": "قرّب 28 إلى 30 (أضف 2). ثم 64 + 30 = 94."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "We added 2 extra, so subtract it back: 94 − 2 = 92.",
            "explanation_ar": "أضفنا 2 زيادة، لذا نطرحها: 94 − 2 = 92."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Priya sold 92 samosas altogether. 64 + 28 = 92.",
            "explanation_ar": "باعت بريا 92 سموسة في المجموع. 64 + 28 = 92."
          }
        ],
        "hint_en": "Round 28 up to 30, add to 64 to get 94, then subtract the extra 2.",
        "hint_ar": "قرّب 28 إلى 30، أضفها إلى 64 لتحصل على 94، ثم اطرح الـ 2 الإضافية.",
        "result_en": "64 + 28 = 92",
        "result_ar": "64 + 28 = 92"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 28 into 20 + 8. Start with 64.",
            "explanation_ar": "قسّم 28 إلى 20 + 8. ابدأ بـ 64."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the 20: 64 + 20 = 84. Then add the 8: 84 + 8 = 92.",
            "explanation_ar": "أضف العشرين: 64 + 20 = 84. ثم أضف الثمانية: 84 + 8 = 92."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "64 + 20 + 8 = 92. At step 2, 84 + 8 requires regrouping: 80 + 12 = 92.",
            "explanation_ar": "64 + 20 + 8 = 92. في الخطوة الثانية، 84 + 8 تتطلب إعادة تجميع: 80 + 12 = 92."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 92 − 28 = 64. ✓ Priya sold 92 samosas.",
            "explanation_ar": "تحقق: 92 − 28 = 64. ✓ باعت بريا 92 سموسة."
          }
        ],
        "hint_en": "Add 20 to 64 to get 84, then add 8 more.",
        "hint_ar": "أضف 20 إلى 64 لتحصل على 84، ثم أضف 8 أخرى.",
        "result_en": "64 + 28 = 92",
        "result_ar": "64 + 28 = 92"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture Priya's busy stall in Mumbai with a tray of 64 samosas in the morning, then another batch of 28 fresh ones arriving in the evening.",
            "explanation_ar": "تخيّل كشك بريا المزدحم في مومباي مع صينية من 64 سموسة في الصباح، ثم دفعة أخرى من 28 سموسة طازجة تصل في المساء."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 64, jump +20 to reach 84, then jump +8 to reach 92.",
            "explanation_ar": "ارسم خطاً للأعداد. ابدأ من 64، اقفز +20 لتصل إلى 84، ثم اقفز +8 لتصل إلى 92."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two jumps on the number line: 64 → 84 → 92. Final position: 92.",
            "explanation_ar": "قفزتان على خط الأعداد: 64 ← 84 ← 92. الموضع النهائي: 92."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Priya sold 92 samosas in total. 64 + 28 = 92.",
            "explanation_ar": "باعت بريا 92 سموسة في المجموع. 64 + 28 = 92."
          }
        ],
        "hint_en": "Hop +20 from 64 to reach 84, then hop +8 to reach 92.",
        "hint_ar": "اقفز +20 من 64 لتصل إلى 84، ثم اقفز +8 لتصل إلى 92.",
        "result_en": "64 + 28 = 92",
        "result_ar": "64 + 28 = 92"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g2-specific-word-hard-001",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "Chidi has 75 oranges at his stall in Lagos. He buys 18 more from a farmer. Then he gives away 23 to his neighbours. How many oranges does Chidi have now? 75 + 18 − 23 = ?",
    "question_ar": "لدى تشيدي 75 برتقالة في كشكه في لاغوس. اشترى 18 أخرى من مزارع. ثم أعطى 23 منها لجيرانه. كم برتقالة لدى تشيدي الآن؟ 75 + 18 − 23 = ؟",
    "answer": 70,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two operations: first add 18 to 75, then subtract 23. Tackle them in order.",
            "explanation_ar": "عمليتان: أولاً أضف 18 إلى 75، ثم اطرح 23. تعامل معهما بالترتيب."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round 18 to 20 (add 2): 75 + 20 = 95. Adjust back: 95 − 2 = 93. So 75 + 18 = 93.",
            "explanation_ar": "قرّب 18 إلى 20 (أضف 2): 75 + 20 = 95. صحّح: 95 − 2 = 93. إذاً 75 + 18 = 93."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now subtract 23 from 93: 93 − 23 = 70. (Tens: 90 − 20 = 70. Units: 3 − 3 = 0.)",
            "explanation_ar": "الآن اطرح 23 من 93: 93 − 23 = 70. (العشرات: 90 − 20 = 70. الآحاد: 3 − 3 = 0.)"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Chidi has 70 oranges. 75 + 18 − 23 = 70.",
            "explanation_ar": "لدى تشيدي 70 برتقالة. 75 + 18 − 23 = 70."
          }
        ],
        "hint_en": "Do the addition first (75 + 18 = 93), then do the subtraction (93 − 23 = 70).",
        "hint_ar": "قم بالجمع أولاً (75 + 18 = 93)، ثم قم بالطرح (93 − 23 = 70).",
        "result_en": "75 + 18 − 23 = 70",
        "result_ar": "75 + 18 − 23 = 70"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Step 1: 75 + 18. Split 18 into 10 + 8.",
            "explanation_ar": "الخطوة الأولى: 75 + 18. قسّم 18 إلى 10 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "75 + 10 = 85, then 85 + 8 = 93. Now subtract 23: split into 20 + 3. 93 − 20 = 73, then 73 − 3 = 70.",
            "explanation_ar": "75 + 10 = 85، ثم 85 + 8 = 93. الآن اطرح 23: قسّمها إلى 20 + 3. 93 − 20 = 73، ثم 73 − 3 = 70."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "75 + 18 = 93, and 93 − 23 = 70. The two steps combine to give 70.",
            "explanation_ar": "75 + 18 = 93، و93 − 23 = 70. الخطوتان تعطيان 70."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 70 + 23 = 93, and 93 − 18 = 75. ✓ Chidi has 70 oranges.",
            "explanation_ar": "تحقق: 70 + 23 = 93، و93 − 18 = 75. ✓ لدى تشيدي 70 برتقالة."
          }
        ],
        "hint_en": "First add 18 to 75 in two hops (+10, +8), then subtract 23 in two hops (−20, −3).",
        "hint_ar": "أضف 18 إلى 75 على خطوتين (+10، +8)، ثم اطرح 23 على خطوتين (−20، −3).",
        "result_en": "75 + 18 − 23 = 70",
        "result_ar": "75 + 18 − 23 = 70"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture Chidi's Lagos market stall piled with 75 bright oranges, a farmer arriving with 18 more, and then Chidi handing bags of 23 oranges to smiling neighbours.",
            "explanation_ar": "تخيّل كشك تشيدي في سوق لاغوس مكدّساً بـ 75 برتقالة زاهية، ثم مزارع يأتي بـ 18 أخرى، ثم تشيدي يوزّع أكياساً من 23 برتقالة على جيران مبتسمين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 75, jump +18 to land on 93, then jump −23 to land on 70.",
            "explanation_ar": "ارسم خطاً للأعداد. ابدأ من 75، اقفز +18 لتصل إلى 93، ثم اقفز −23 لتصل إلى 70."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Number line: 75 → 93 → 70. One forward jump, one backward jump.",
            "explanation_ar": "خط الأعداد: 75 ← 93 ← 70. قفزة للأمام، ثم قفزة للخلف."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Chidi ends up with 70 oranges. 75 + 18 − 23 = 70.",
            "explanation_ar": "انتهى الأمر بأن لدى تشيدي 70 برتقالة. 75 + 18 − 23 = 70."
          }
        ],
        "hint_en": "Jump forward 18 from 75 to get 93, then jump back 23 to get 70.",
        "hint_ar": "اقفز للأمام 18 من 75 لتحصل على 93، ثم اقفز للخلف 23 لتحصل على 70.",
        "result_en": "75 + 18 − 23 = 70",
        "result_ar": "75 + 18 − 23 = 70"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g2-specific-word-hard-002",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A baker in Mexico City makes 90 tamales in the morning. She sells 35 before noon. In the afternoon she makes 22 more. How many tamales does she have now? 90 − 35 + 22 = ?",
    "question_ar": "تصنع خبّازة في مكسيكو سيتي 90 تامالة في الصباح. تبيع 35 منها قبل الظهر. وفي فترة بعد الظهر تصنع 22 أخرى. كم تامالة لديها الآن؟ 90 − 35 + 22 = ؟",
    "answer": 77,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two operations: subtract 35 from 90, then add 22. Work left to right.",
            "explanation_ar": "عمليتان: اطرح 35 من 90، ثم أضف 22. اعمل من اليسار إلى اليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "90 − 35: think 90 − 30 = 60, then 60 − 5 = 55. So 90 − 35 = 55.",
            "explanation_ar": "90 − 35: فكّر 90 − 30 = 60، ثم 60 − 5 = 55. إذاً 90 − 35 = 55."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now add 22 to 55: 55 + 22 = 77. (Tens: 50 + 20 = 70. Units: 5 + 2 = 7. Total: 77.)",
            "explanation_ar": "الآن أضف 22 إلى 55: 55 + 22 = 77. (العشرات: 50 + 20 = 70. الآحاد: 5 + 2 = 7. المجموع: 77.)"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The baker has 77 tamales. 90 − 35 + 22 = 77.",
            "explanation_ar": "لدى الخبّازة 77 تامالة. 90 − 35 + 22 = 77."
          }
        ],
        "hint_en": "Subtract 35 from 90 first (= 55), then add 22 (= 77).",
        "hint_ar": "اطرح 35 من 90 أولاً (= 55)، ثم أضف 22 (= 77).",
        "result_en": "90 − 35 + 22 = 77",
        "result_ar": "90 − 35 + 22 = 77"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Step 1: 90 − 35. Split 35 into 30 + 5.",
            "explanation_ar": "الخطوة الأولى: 90 − 35. قسّم 35 إلى 30 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "90 − 30 = 60, then 60 − 5 = 55. Next, add 22: split into 20 + 2. 55 + 20 = 75, then 75 + 2 = 77.",
            "explanation_ar": "90 − 30 = 60، ثم 60 − 5 = 55. بعد ذلك أضف 22: قسّمها إلى 20 + 2. 55 + 20 = 75، ثم 75 + 2 = 77."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "90 − 35 = 55, and 55 + 22 = 77. The two steps combine to give 77.",
            "explanation_ar": "90 − 35 = 55، و55 + 22 = 77. الخطوتان تعطيان 77."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 77 − 22 = 55, and 55 + 35 = 90. ✓ She has 77 tamales.",
            "explanation_ar": "تحقق: 77 − 22 = 55، و55 + 35 = 90. ✓ لديها 77 تامالة."
          }
        ],
        "hint_en": "Break each number into tens and units and handle them one hop at a time.",
        "hint_ar": "قسّم كل عدد إلى عشرات وآحاد وتعامل معها خطوة خطوة.",
        "result_en": "90 − 35 + 22 = 77",
        "result_ar": "90 − 35 + 22 = 77"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a Mexico City kitchen with 90 steaming tamales, a market crowd buying 35, then the baker wrapping 22 fresh ones in corn husks in the afternoon.",
            "explanation_ar": "تخيّل مطبخاً في مكسيكو سيتي فيه 90 تامالة ساخنة، ثم حشد من السوق يشتري 35، ثم الخبّازة تلفّ 22 تامالة طازجة بأوراق الذرة في فترة بعد الظهر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 90, jump −35 to land on 55, then jump +22 to land on 77.",
            "explanation_ar": "ارسم خطاً للأعداد. ابدأ من 90، اقفز −35 لتصل إلى 55، ثم اقفز +22 لتصل إلى 77."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Number line: 90 → 55 → 77. First a backward jump, then a forward jump.",
            "explanation_ar": "خط الأعداد: 90 ← 55 ← 77. أولاً قفزة للخلف، ثم قفزة للأمام."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The baker ends the day with 77 tamales. 90 − 35 + 22 = 77.",
            "explanation_ar": "تنهي الخبّازة يومها ولديها 77 تامالة. 90 − 35 + 22 = 77."
          }
        ],
        "hint_en": "Jump back 35 from 90 to get 55, then jump forward 22 to get 77.",
        "hint_ar": "اقفز للخلف 35 من 90 لتحصل على 55، ثم اقفز للأمام 22 لتحصل على 77.",
        "result_en": "90 − 35 + 22 = 77",
        "result_ar": "90 − 35 + 22 = 77"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g2-specific-word-hard-003",
    "grade": 2,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "Erik has 80 coins in his piggy bank in Oslo. He spends 45 coins at a toy shop. On the way home he finds 16 coins on the ground. How many coins does Erik have now? 80 − 45 + 16 = ?",
    "question_ar": "لدى إيريك 80 قطعة نقدية في حصالته في أوسلو. أنفق 45 منها في متجر الألعاب. وفي طريق عودته إلى المنزل وجد 16 قطعة على الأرض. كم قطعة نقدية لدى إيريك الآن؟ 80 − 45 + 16 = ؟",
    "answer": 51,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two operations: subtract 45 from 80, then add 16. Work left to right.",
            "explanation_ar": "عمليتان: اطرح 45 من 80، ثم أضف 16. اعمل من اليسار إلى اليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "80 − 45: think 80 − 40 = 40, then 40 − 5 = 35. So 80 − 45 = 35.",
            "explanation_ar": "80 − 45: فكّر 80 − 40 = 40، ثم 40 − 5 = 35. إذاً 80 − 45 = 35."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now add 16 to 35: 35 + 16 = 51. (Round 16 to 20: 35 + 20 = 55, then 55 − 4 = 51.)",
            "explanation_ar": "الآن أضف 16 إلى 35: 35 + 16 = 51. (قرّب 16 إلى 20: 35 + 20 = 55، ثم 55 − 4 = 51.)"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Erik has 51 coins. 80 − 45 + 16 = 51.",
            "explanation_ar": "لدى إيريك 51 قطعة نقدية. 80 − 45 + 16 = 51."
          }
        ],
        "hint_en": "Subtract 45 from 80 first (= 35), then add 16 (= 51).",
        "hint_ar": "اطرح 45 من 80 أولاً (= 35)، ثم أضف 16 (= 51).",
        "result_en": "80 − 45 + 16 = 51",
        "result_ar": "80 − 45 + 16 = 51"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Step 1: 80 − 45. Split 45 into 40 + 5.",
            "explanation_ar": "الخطوة الأولى: 80 − 45. قسّم 45 إلى 40 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "80 − 40 = 40, then 40 − 5 = 35. Next, add 16: split into 10 + 6. 35 + 10 = 45, then 45 + 6 = 51.",
            "explanation_ar": "80 − 40 = 40، ثم 40 − 5 = 35. بعد ذلك أضف 16: قسّمها إلى 10 + 6. 35 + 10 = 45، ثم 45 + 6 = 51."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "80 − 45 = 35, and 35 + 16 = 51. The two steps combine to give 51.",
            "explanation_ar": "80 − 45 = 35، و35 + 16 = 51. الخطوتان تعطيان 51."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 51 − 16 = 35, and 35 + 45 = 80. ✓ Erik has 51 coins.",
            "explanation_ar": "تحقق: 51 − 16 = 35، و35 + 45 = 80. ✓ لدى إيريك 51 قطعة نقدية."
          }
        ],
        "hint_en": "Take away 45 from 80 in two hops (−40, −5), then add 16 in two hops (+10, +6).",
        "hint_ar": "اطرح 45 من 80 على خطوتين (−40، −5)، ثم أضف 16 على خطوتين (+10، +6).",
        "result_en": "80 − 45 + 16 = 51",
        "result_ar": "80 − 45 + 16 = 51"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture Erik in snowy Oslo, shaking 80 coins from his piggy bank, handing 45 to a toy-shop cashier, then spotting 16 shiny coins on the pavement.",
            "explanation_ar": "تخيّل إيريك في أوسلو المثلجة يهزّ 80 قطعة نقدية من حصالته، ثم يعطي 45 منها لصرّاف متجر الألعاب، ثم يرى 16 قطعة لامعة على الرصيف."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 80, jump −45 to land on 35, then jump +16 to land on 51.",
            "explanation_ar": "ارسم خطاً للأعداد. ابدأ من 80، اقفز −45 لتصل إلى 35، ثم اقفز +16 لتصل إلى 51."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Number line: 80 → 35 → 51. A big backward jump, then a smaller forward jump.",
            "explanation_ar": "خط الأعداد: 80 ← 35 ← 51. قفزة كبيرة للخلف، ثم قفزة أصغر للأمام."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Erik ends up with 51 coins. 80 − 45 + 16 = 51.",
            "explanation_ar": "انتهى الأمر بأن لدى إيريك 51 قطعة نقدية. 80 − 45 + 16 = 51."
          }
        ],
        "hint_en": "Jump back 45 from 80 to get 35, then jump forward 16 to get 51.",
        "hint_ar": "اقفز للخلف 45 من 80 لتحصل على 35، ثم اقفز للأمام 16 لتحصل على 51.",
        "result_en": "80 − 45 + 16 = 51",
        "result_ar": "80 − 45 + 16 = 51"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g1-specific-word-hard-003",
      "upper_grade_equivalent": "g3-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  }
];

// Utility helpers
export const getByCategory = (cat: string) =>
  grade2LearnBank.filter(p => p.category === cat);

export const getByLevel = (level: 'Easy' | 'Medium' | 'Hard') =>
  grade2LearnBank.filter(p => p.level === level);

export const getById = (id: string) =>
  grade2LearnBank.find(p => p.id === id) ?? null;

export const getByTag = (tag: string) =>
  grade2LearnBank.filter(p => p.meta.fun_fact_tag === tag);
