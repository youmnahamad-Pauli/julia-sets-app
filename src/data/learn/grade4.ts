// ============================================================
// Julia Sets — Grade 4 Learn Bank
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

export const grade4LearnBank: LearnProblem[] = 
[
  {
    "id": "g4-common-add-easy-001",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "2134 + 1253 = ?",
    "question_ar": "2134 + 1253 = ؟",
    "answer": 3387,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 2134 + 1253. No column sums to 10 or more, so there is no regrouping. Work left to right.",
            "explanation_ar": "انظر إلى 2134 + 1253. لا يساوي مجموع أي عمود 10 أو أكثر، لذا لا يوجد إعادة تجميع. اعمل من اليسار إلى اليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 2 + 1 = 3. Hundreds: 1 + 2 = 3. Tens: 3 + 5 = 8. Units: 4 + 3 = 7.",
            "explanation_ar": "الآلاف: 2 + 1 = 3. المئات: 1 + 2 = 3. العشرات: 3 + 5 = 8. الآحاد: 4 + 3 = 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Write the digits from left to right as you compute each place: 3, then 3, then 8, then 7.",
            "explanation_ar": "اكتب الأرقام من اليسار إلى اليمين عند حساب كل مرتبة: 3، ثم 3، ثم 8، ثم 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine the digits to get 3387. So 2134 + 1253 = 3387.",
            "explanation_ar": "اجمع الأرقام لتحصل على 3387. إذن 2134 + 1253 = 3387."
          }
        ],
        "hint_en": "Add thousands first, then hundreds, tens, and units — no carrying needed.",
        "hint_ar": "اجمع الآلاف أولاً، ثم المئات، ثم العشرات، ثم الآحاد — لا حاجة للحمل.",
        "result_en": "2134 + 1253 = 3387",
        "result_ar": "2134 + 1253 = 3387"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split each number by place value. 2134 = 2000 + 100 + 30 + 4. 1253 = 1000 + 200 + 50 + 3.",
            "explanation_ar": "قسّم كل رقم حسب مرتبته. 2134 = 2000 + 100 + 30 + 4. 1253 = 1000 + 200 + 50 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 2000 + 1000 = 3000. Hundreds: 100 + 200 = 300. Tens: 30 + 50 = 80. Units: 4 + 3 = 7.",
            "explanation_ar": "الآلاف: 2000 + 1000 = 3000. المئات: 100 + 200 = 300. العشرات: 30 + 50 = 80. الآحاد: 4 + 3 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial sums: 3000 + 300 + 80 + 7 = 3387.",
            "explanation_ar": "اجمع المجاميع الجزئية: 3000 + 300 + 80 + 7 = 3387."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3000 + 300 = 3300, plus 80 = 3380, plus 7 = 3387. Answer: 3387.",
            "explanation_ar": "تحقق: 3000 + 300 = 3300، زائد 80 = 3380، زائد 7 = 3387. الجواب: 3387."
          }
        ],
        "hint_en": "Break both numbers into thousands, hundreds, tens, and units, then add each group separately.",
        "hint_ar": "قسّم كلا الرقمين إلى آلاف ومئات وعشرات وآحاد، ثم اجمع كل مجموعة على حدة.",
        "result_en": "2134 + 1253 = 3387",
        "result_ar": "2134 + 1253 = 3387"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture two libraries: one with 2134 books, another with 1253 books. How many books in total?",
            "explanation_ar": "تخيّل مكتبتين: إحداهما تحتوي على 2134 كتاباً، والأخرى على 1253 كتاباً. كم عدد الكتب في المجموع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a place value chart with columns Th | H | T | U. Top row: 2 | 1 | 3 | 4. Bottom row: 1 | 2 | 5 | 3.",
            "explanation_ar": "ارسم جدول قيمة المرتبة بأعمدة: آ | م | ع | أ. الصف العلوي: 2 | 1 | 3 | 4. الصف السفلي: 1 | 2 | 5 | 3."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Read each column sum: Thousands = 3, Hundreds = 3, Tens = 8, Units = 7. No column overflows.",
            "explanation_ar": "اقرأ مجموع كل عمود: الآلاف = 3، المئات = 3، العشرات = 8، الآحاد = 7. لا يوجد فيض في أي عمود."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Combine the column results: 3387. The two libraries together hold 3387 books.",
            "explanation_ar": "اجمع نتائج الأعمدة: 3387. المكتبتان معاً تحتويان على 3387 كتاباً."
          }
        ],
        "hint_en": "Stack the two numbers in a place value chart and add each column from left to right.",
        "hint_ar": "ضع الرقمين فوق بعضهما في جدول القيمة المكانية واجمع كل عمود من اليسار إلى اليمين.",
        "result_en": "2134 + 1253 = 3387",
        "result_ar": "2134 + 1253 = 3387"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-add-easy-002",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "3021 + 4156 = ?",
    "question_ar": "3021 + 4156 = ؟",
    "answer": 7177,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 3021 + 4156. Every column adds to less than 10, so no regrouping is needed. Work left to right.",
            "explanation_ar": "انظر إلى 3021 + 4156. كل عمود مجموعه أقل من 10، لذا لا حاجة لإعادة التجميع. اعمل من اليسار إلى اليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 3 + 4 = 7. Hundreds: 0 + 1 = 1. Tens: 2 + 5 = 7. Units: 1 + 6 = 7.",
            "explanation_ar": "الآلاف: 3 + 4 = 7. المئات: 0 + 1 = 1. العشرات: 2 + 5 = 7. الآحاد: 1 + 6 = 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Write each digit from left to right: 7 (thousands), 1 (hundreds), 7 (tens), 7 (units).",
            "explanation_ar": "اكتب كل رقم من اليسار إلى اليمين: 7 (الآلاف)، 1 (المئات)، 7 (العشرات)، 7 (الآحاد)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The digits form 7177. So 3021 + 4156 = 7177.",
            "explanation_ar": "تكوّن من الأرقام العدد 7177. إذن 3021 + 4156 = 7177."
          }
        ],
        "hint_en": "Add each place value column left to right — all sums are single digits.",
        "hint_ar": "اجمع كل عمود من القيمة المكانية من اليسار إلى اليمين — جميع المجاميع أرقام أحادية.",
        "result_en": "3021 + 4156 = 7177",
        "result_ar": "3021 + 4156 = 7177"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "3021 = 3000 + 0 + 20 + 1. 4156 = 4000 + 100 + 50 + 6.",
            "explanation_ar": "3021 = 3000 + 0 + 20 + 1. 4156 = 4000 + 100 + 50 + 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 3000 + 4000 = 7000. Hundreds: 0 + 100 = 100. Tens: 20 + 50 = 70. Units: 1 + 6 = 7.",
            "explanation_ar": "الآلاف: 3000 + 4000 = 7000. المئات: 0 + 100 = 100. العشرات: 20 + 50 = 70. الآحاد: 1 + 6 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7000 + 100 + 70 + 7 = 7177.",
            "explanation_ar": "7000 + 100 + 70 + 7 = 7177."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "7000 + 100 = 7100, + 70 = 7170, + 7 = 7177. Answer confirmed: 7177.",
            "explanation_ar": "7000 + 100 = 7100، + 70 = 7170، + 7 = 7177. الجواب مؤكد: 7177."
          }
        ],
        "hint_en": "Note that 3021 has no hundreds digit — treat it as 0 hundreds when splitting.",
        "hint_ar": "لاحظ أن 3021 لا يحتوي على رقم في مرتبة المئات — اعتبره صفر مئات عند التقسيم.",
        "result_en": "3021 + 4156 = 7177",
        "result_ar": "3021 + 4156 = 7177"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A city has two stadiums with 3021 and 4156 seats. How many seats in total?",
            "explanation_ar": "مدينة فيها ملعبان يتسع أحدهما لـ 3021 مقعداً والآخر لـ 4156 مقعداً. كم يبلغ المجموع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart — Th | H | T | U. Top row: 3 | 0 | 2 | 1. Bottom row: 4 | 1 | 5 | 6.",
            "explanation_ar": "جدول القيمة المكانية — آ | م | ع | أ. الصف العلوي: 3 | 0 | 2 | 1. الصف السفلي: 4 | 1 | 5 | 6."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Column totals: Thousands = 7, Hundreds = 1, Tens = 7, Units = 7. All under 10.",
            "explanation_ar": "مجاميع الأعمدة: الآلاف = 7، المئات = 1، العشرات = 7، الآحاد = 7. جميعها أقل من 10."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Read off 7177. The two stadiums together have 7177 seats.",
            "explanation_ar": "اقرأ الناتج 7177. يبلغ مجموع مقاعد الملعبين 7177 مقعداً."
          }
        ],
        "hint_en": "The hundreds column of 3021 is empty — just bring down the 1 from 4156's hundreds.",
        "hint_ar": "عمود المئات في 3021 فارغ — فقط انقل الـ 1 من مئات 4156.",
        "result_en": "3021 + 4156 = 7177",
        "result_ar": "3021 + 4156 = 7177"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-add-easy-003",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "1412 + 2345 = ?",
    "question_ar": "1412 + 2345 = ؟",
    "answer": 3757,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 1412 + 2345. All column sums are single digits, confirming no regrouping is needed.",
            "explanation_ar": "انظر إلى 1412 + 2345. جميع مجاميع الأعمدة أرقام أحادية، مما يؤكد عدم الحاجة لإعادة التجميع."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 1 + 2 = 3. Hundreds: 4 + 3 = 7. Tens: 1 + 4 = 5. Units: 2 + 5 = 7.",
            "explanation_ar": "الآلاف: 1 + 2 = 3. المئات: 4 + 3 = 7. العشرات: 1 + 4 = 5. الآحاد: 2 + 5 = 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Record each digit left to right: 3, 7, 5, 7.",
            "explanation_ar": "سجّل كل رقم من اليسار إلى اليمين: 3، 7، 5، 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The four digits give 3757. So 1412 + 2345 = 3757.",
            "explanation_ar": "الأرقام الأربعة تعطي 3757. إذن 1412 + 2345 = 3757."
          }
        ],
        "hint_en": "Every column pair adds to under 10 — just write each sum digit straight down.",
        "hint_ar": "كل زوج من الأعمدة مجموعه أقل من 10 — فقط اكتب رقم كل مجموع مباشرة.",
        "result_en": "1412 + 2345 = 3757",
        "result_ar": "1412 + 2345 = 3757"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "1412 = 1000 + 400 + 10 + 2. 2345 = 2000 + 300 + 40 + 5.",
            "explanation_ar": "1412 = 1000 + 400 + 10 + 2. 2345 = 2000 + 300 + 40 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 1000 + 2000 = 3000. Hundreds: 400 + 300 = 700. Tens: 10 + 40 = 50. Units: 2 + 5 = 7.",
            "explanation_ar": "الآلاف: 1000 + 2000 = 3000. المئات: 400 + 300 = 700. العشرات: 10 + 40 = 50. الآحاد: 2 + 5 = 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3000 + 700 + 50 + 7 = 3757.",
            "explanation_ar": "3000 + 700 + 50 + 7 = 3757."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "3000 + 700 = 3700, + 50 = 3750, + 7 = 3757. Correct: 3757.",
            "explanation_ar": "3000 + 700 = 3700، + 50 = 3750، + 7 = 3757. صحيح: 3757."
          }
        ],
        "hint_en": "Split both numbers into place value parts, add matching parts, then combine.",
        "hint_ar": "قسّم كلا الرقمين إلى أجزاء القيمة المكانية، اجمع الأجزاء المتماثلة، ثم ادمجها.",
        "result_en": "1412 + 2345 = 3757",
        "result_ar": "1412 + 2345 = 3757"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A farm has 1412 apple trees and 2345 orange trees. How many trees altogether?",
            "explanation_ar": "مزرعة تحتوي على 1412 شجرة تفاح و2345 شجرة برتقال. كم يبلغ مجموع الأشجار؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart — Th | H | T | U. Top row: 1 | 4 | 1 | 2. Bottom row: 2 | 3 | 4 | 5.",
            "explanation_ar": "جدول القيمة المكانية — آ | م | ع | أ. الصف العلوي: 1 | 4 | 1 | 2. الصف السفلي: 2 | 3 | 4 | 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Column sums: 3, 7, 5, 7. Each is under 10, so no overflow.",
            "explanation_ar": "مجاميع الأعمدة: 3، 7، 5، 7. جميعها أقل من 10، لذا لا يوجد فيض."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Read across: 3757. The farm has 3757 trees in total.",
            "explanation_ar": "اقرأ عبر الأعمدة: 3757. تحتوي المزرعة على 3757 شجرة في المجموع."
          }
        ],
        "hint_en": "Stack the two numbers and read the column sums — no carrying needed.",
        "hint_ar": "ضع الرقمين فوق بعضهما واقرأ مجاميع الأعمدة — لا حاجة للحمل.",
        "result_en": "1412 + 2345 = 3757",
        "result_ar": "1412 + 2345 = 3757"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-add-medium-001",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "3265 + 1547 = ?",
    "question_ar": "3265 + 1547 = ؟",
    "answer": 4812,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 3265 + 1547. The units column: 5 + 7 = 12, regrouping needed. The tens column: 6 + 4 + 1 carry = 11, regrouping again. Hundreds and thousands are clean.",
            "explanation_ar": "انظر إلى 3265 + 1547. عمود الآحاد: 5 + 7 = 12، يلزم إعادة تجميع. عمود العشرات: 6 + 4 + 1 محمولة = 11، إعادة تجميع مرة أخرى. المئات والآلاف بدون حمل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 3 + 1 = 4. Hundreds: 2 + 5 + 1 carry = 8. Tens: 6 + 4 = 10, write 0 carry 1. Units: 5 + 7 = 12, write 2 carry 1.",
            "explanation_ar": "الآلاف: 3 + 1 = 4. المئات: 2 + 5 + 1 محمولة = 8. العشرات: 6 + 4 = 10، اكتب 0 واحمل 1. الآحاد: 5 + 7 = 12، اكتب 2 واحمل 1."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Working left to right: thousands digit = 4, hundreds digit = 8 (after carry), tens digit = 0 (after carry), units digit = 2.",
            "explanation_ar": "بالعمل من اليسار إلى اليمين: رقم الآلاف = 4، رقم المئات = 8 (بعد الحمل)، رقم العشرات = 0 (بعد الحمل)، رقم الآحاد = 2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The digits are 4, 8, 1, 2 — but tracking the carries right to left gives 4812. So 3265 + 1547 = 4812.",
            "explanation_ar": "الأرقام هي 4، 8، 1، 2 — وتتبع المحمولات من اليمين إلى اليسار يعطي 4812. إذن 3265 + 1547 = 4812."
          }
        ],
        "hint_en": "Watch for carries in the units and tens columns — they ripple leftward.",
        "hint_ar": "انتبه للحمل في عمودَي الآحاد والعشرات — فهو ينتقل إلى اليسار.",
        "result_en": "3265 + 1547 = 4812",
        "result_ar": "3265 + 1547 = 4812"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "3265 = 3000 + 200 + 60 + 5. 1547 = 1000 + 500 + 40 + 7.",
            "explanation_ar": "3265 = 3000 + 200 + 60 + 5. 1547 = 1000 + 500 + 40 + 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 3000 + 1000 = 4000. Hundreds: 200 + 500 = 700. Tens: 60 + 40 = 100. Units: 5 + 7 = 12.",
            "explanation_ar": "الآلاف: 3000 + 1000 = 4000. المئات: 200 + 500 = 700. العشرات: 60 + 40 = 100. الآحاد: 5 + 7 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4000 + 700 + 100 + 12 = 4812.",
            "explanation_ar": "4000 + 700 + 100 + 12 = 4812."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "4000 + 700 = 4700, + 100 = 4800, + 12 = 4812. Answer: 4812.",
            "explanation_ar": "4000 + 700 = 4700، + 100 = 4800، + 12 = 4812. الجواب: 4812."
          }
        ],
        "hint_en": "The tens partial sum (60 + 40 = 100) and units sum (12) both exceed 9 — they naturally merge upward when recombining.",
        "hint_ar": "المجموع الجزئي للعشرات (60 + 40 = 100) ومجموع الآحاد (12) كلاهما يتجاوز 9 — فهما يندمجان بشكل طبيعي للأعلى عند إعادة التجميع.",
        "result_en": "3265 + 1547 = 4812",
        "result_ar": "3265 + 1547 = 4812"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A concert venue sold 3265 tickets on Saturday and 1547 on Sunday. How many tickets in total?",
            "explanation_ar": "مكان الحفل باع 3265 تذكرة يوم السبت و1547 يوم الأحد. كم يبلغ مجموع التذاكر؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart — Th | H | T | U. Top row: 3 | 2 | 6 | 5. Bottom row: 1 | 5 | 4 | 7.",
            "explanation_ar": "جدول القيمة المكانية — آ | م | ع | أ. الصف العلوي: 3 | 2 | 6 | 5. الصف السفلي: 1 | 5 | 4 | 7."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Units: 5 + 7 = 12 → write 2, carry 1 to tens. Tens: 6 + 4 + 1 = 11 → write 1, carry 1 to hundreds. Hundreds: 2 + 5 + 1 = 8. Thousands: 3 + 1 = 4.",
            "explanation_ar": "الآحاد: 5 + 7 = 12 ← اكتب 2، احمل 1 للعشرات. العشرات: 6 + 4 + 1 = 11 ← اكتب 1، احمل 1 للمئات. المئات: 2 + 5 + 1 = 8. الآلاف: 3 + 1 = 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Reading the result row: 4812. The venue sold 4812 tickets over the weekend.",
            "explanation_ar": "قراءة صف النتيجة: 4812. باع المكان 4812 تذكرة خلال عطلة نهاية الأسبوع."
          }
        ],
        "hint_en": "Start from the units column — when a column sum hits 10 or more, carry 1 to the next column.",
        "hint_ar": "ابدأ من عمود الآحاد — عندما يصل مجموع العمود إلى 10 أو أكثر، احمل 1 إلى العمود التالي.",
        "result_en": "3265 + 1547 = 4812",
        "result_ar": "3265 + 1547 = 4812"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-add-medium-002",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "4321 + 2593 = ?",
    "question_ar": "4321 + 2593 = ؟",
    "answer": 6914,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 4321 + 2593. Only the tens column causes regrouping: 2 + 9 = 11. All other columns sum to less than 10.",
            "explanation_ar": "انظر إلى 4321 + 2593. فقط عمود العشرات يسبب إعادة التجميع: 2 + 9 = 11. جميع الأعمدة الأخرى مجاميعها أقل من 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 4 + 2 = 6. Hundreds: 3 + 5 + 1 carry = 9. Tens: 2 + 9 = 11, write 1 carry 1. Units: 1 + 3 = 4.",
            "explanation_ar": "الآلاف: 4 + 2 = 6. المئات: 3 + 5 + 1 محمولة = 9. العشرات: 2 + 9 = 11، اكتب 1 واحمل 1. الآحاد: 1 + 3 = 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Starting right to left: units = 4, tens = 1 (carry 1), hundreds = 9 (absorbs carry), thousands = 6.",
            "explanation_ar": "بدءاً من اليمين إلى اليسار: الآحاد = 4، العشرات = 1 (حمل 1)، المئات = 9 (تستوعب الحمل)، الآلاف = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The digits read 6914. So 4321 + 2593 = 6914.",
            "explanation_ar": "تُقرأ الأرقام 6914. إذن 4321 + 2593 = 6914."
          }
        ],
        "hint_en": "Only the tens column overflows — the carry of 1 gets added to the hundreds.",
        "hint_ar": "فقط عمود العشرات يفيض — تُضاف المحمولة 1 إلى المئات.",
        "result_en": "4321 + 2593 = 6914",
        "result_ar": "4321 + 2593 = 6914"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "4321 = 4000 + 300 + 20 + 1. 2593 = 2000 + 500 + 90 + 3.",
            "explanation_ar": "4321 = 4000 + 300 + 20 + 1. 2593 = 2000 + 500 + 90 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 4000 + 2000 = 6000. Hundreds: 300 + 500 = 800. Tens: 20 + 90 = 110. Units: 1 + 3 = 4.",
            "explanation_ar": "الآلاف: 4000 + 2000 = 6000. المئات: 300 + 500 = 800. العشرات: 20 + 90 = 110. الآحاد: 1 + 3 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "6000 + 800 + 110 + 4 = 6914.",
            "explanation_ar": "6000 + 800 + 110 + 4 = 6914."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "6000 + 800 = 6800, + 110 = 6910, + 4 = 6914. Answer: 6914.",
            "explanation_ar": "6000 + 800 = 6800، + 110 = 6910، + 4 = 6914. الجواب: 6914."
          }
        ],
        "hint_en": "The tens partial sum (20 + 90 = 110) exceeds 99 — its extra 100 rolls into the hundreds total.",
        "hint_ar": "المجموع الجزئي للعشرات (20 + 90 = 110) يتجاوز 99 — الـ 100 الإضافية تنتقل إلى إجمالي المئات.",
        "result_en": "4321 + 2593 = 6914",
        "result_ar": "4321 + 2593 = 6914"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A school collected 4321 cans in week one and 2593 cans in week two for a food drive. How many cans total?",
            "explanation_ar": "جمعت مدرسة 4321 علبة في الأسبوع الأول و2593 علبة في الأسبوع الثاني لحملة غذائية. كم يبلغ مجموع العلب؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart — Th | H | T | U. Top row: 4 | 3 | 2 | 1. Bottom row: 2 | 5 | 9 | 3.",
            "explanation_ar": "جدول القيمة المكانية — آ | م | ع | أ. الصف العلوي: 4 | 3 | 2 | 1. الصف السفلي: 2 | 5 | 9 | 3."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Units: 1 + 3 = 4. Tens: 2 + 9 = 11 → write 1, carry 1. Hundreds: 3 + 5 + 1 = 9. Thousands: 4 + 2 = 6.",
            "explanation_ar": "الآحاد: 1 + 3 = 4. العشرات: 2 + 9 = 11 ← اكتب 1، احمل 1. المئات: 3 + 5 + 1 = 9. الآلاف: 4 + 2 = 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Result row reads 6914. The school collected 6914 cans altogether.",
            "explanation_ar": "صف النتيجة يُقرأ 6914. جمعت المدرسة 6914 علبة في المجموع."
          }
        ],
        "hint_en": "Only the tens column overflows — mark the carry above the hundreds column.",
        "hint_ar": "فقط عمود العشرات يفيض — ضع علامة الحمل فوق عمود المئات.",
        "result_en": "4321 + 2593 = 6914",
        "result_ar": "4321 + 2593 = 6914"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-add-medium-003",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "2333 + 2918 = ?",
    "question_ar": "2333 + 2918 = ؟",
    "answer": 5251,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 2333 + 2918. Units: 3 + 8 = 11, regrouping. Tens: 3 + 1 + 1 carry = 5, no regroup. Hundreds: 3 + 9 = 12, regrouping. Thousands: 2 + 2 + 1 carry = 5.",
            "explanation_ar": "انظر إلى 2333 + 2918. الآحاد: 3 + 8 = 11، إعادة تجميع. العشرات: 3 + 1 + 1 محمولة = 5، لا تجميع. المئات: 3 + 9 = 12، إعادة تجميع. الآلاف: 2 + 2 + 1 محمولة = 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Units: 3 + 8 = 11 → digit 1, carry 1. Tens: 3 + 1 + 1 = 5 → digit 5. Hundreds: 3 + 9 = 12 → digit 2, carry 1. Thousands: 2 + 2 + 1 = 5 → digit 5.",
            "explanation_ar": "الآحاد: 3 + 8 = 11 ← رقم 1، حمل 1. العشرات: 3 + 1 + 1 = 5 ← رقم 5. المئات: 3 + 9 = 12 ← رقم 2، حمل 1. الآلاف: 2 + 2 + 1 = 5 ← رقم 5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Carries in units and hundreds columns propagate left, adjusting hundreds and thousands respectively.",
            "explanation_ar": "تنتشر الحمولات في عمودَي الآحاد والمئات إلى اليسار، معدِّلةً المئات والآلاف على التوالي."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Digits left to right: 5, 2, 5, 1 → 5251. So 2333 + 2918 = 5251.",
            "explanation_ar": "الأرقام من اليسار إلى اليمين: 5، 2، 5، 1 ← 5251. إذن 2333 + 2918 = 5251."
          }
        ],
        "hint_en": "Two carries occur — one from units to tens place, and one from hundreds to thousands place.",
        "hint_ar": "تحدث محمولتان — واحدة من الآحاد إلى العشرات، وأخرى من المئات إلى الآلاف.",
        "result_en": "2333 + 2918 = 5251",
        "result_ar": "2333 + 2918 = 5251"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "2333 = 2000 + 300 + 30 + 3. 2918 = 2000 + 900 + 10 + 8.",
            "explanation_ar": "2333 = 2000 + 300 + 30 + 3. 2918 = 2000 + 900 + 10 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 2000 + 2000 = 4000. Hundreds: 300 + 900 = 1200. Tens: 30 + 10 = 40. Units: 3 + 8 = 11.",
            "explanation_ar": "الآلاف: 2000 + 2000 = 4000. المئات: 300 + 900 = 1200. العشرات: 30 + 10 = 40. الآحاد: 3 + 8 = 11."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4000 + 1200 + 40 + 11 = 5251.",
            "explanation_ar": "4000 + 1200 + 40 + 11 = 5251."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "4000 + 1200 = 5200, + 40 = 5240, + 11 = 5251. Answer: 5251.",
            "explanation_ar": "4000 + 1200 = 5200، + 40 = 5240، + 11 = 5251. الجواب: 5251."
          }
        ],
        "hint_en": "The hundreds partial sum (300 + 900 = 1200) is greater than 999 — its extra 1000 merges into the thousands total.",
        "hint_ar": "المجموع الجزئي للمئات (300 + 900 = 1200) أكبر من 999 — الـ 1000 الإضافية تندمج في إجمالي الآلاف.",
        "result_en": "2333 + 2918 = 5251",
        "result_ar": "2333 + 2918 = 5251"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A charity raised 2333 coins in the morning and 2918 coins in the afternoon. How many coins total?",
            "explanation_ar": "جمعت جمعية خيرية 2333 عملة في الصباح و2918 عملة في المساء. كم يبلغ مجموع العملات؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart — Th | H | T | U. Top row: 2 | 3 | 3 | 3. Bottom row: 2 | 9 | 1 | 8.",
            "explanation_ar": "جدول القيمة المكانية — آ | م | ع | أ. الصف العلوي: 2 | 3 | 3 | 3. الصف السفلي: 2 | 9 | 1 | 8."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Units: 3 + 8 = 11 → write 1, carry 1. Tens: 3 + 1 + 1 = 5 → write 5. Hundreds: 3 + 9 = 12 → write 2, carry 1. Thousands: 2 + 2 + 1 = 5 → write 5.",
            "explanation_ar": "الآحاد: 3 + 8 = 11 ← اكتب 1، احمل 1. العشرات: 3 + 1 + 1 = 5 ← اكتب 5. المئات: 3 + 9 = 12 ← اكتب 2، احمل 1. الآلاف: 2 + 2 + 1 = 5 ← اكتب 5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Result row: 5251. The charity collected 5251 coins in total.",
            "explanation_ar": "صف النتيجة: 5251. جمعت الجمعية الخيرية 5251 عملة في المجموع."
          }
        ],
        "hint_en": "Mark two carry boxes in your chart — above the tens and above the thousands columns.",
        "hint_ar": "ضع مربعَي حمل في جدولك — فوق عمود العشرات وفوق عمود الآلاف.",
        "result_en": "2333 + 2918 = 5251",
        "result_ar": "2333 + 2918 = 5251"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-add-hard-001",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "4867 + 3975 = ?",
    "question_ar": "4867 + 3975 = ؟",
    "answer": 8842,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 4867 + 3975. Every column overflows: Units 7+5=12, Tens 6+7+1=14, Hundreds 8+9+1=18, Thousands 4+3+1=8.",
            "explanation_ar": "انظر إلى 4867 + 3975. كل عمود يفيض: الآحاد 7+5=12، العشرات 6+7+1=14، المئات 8+9+1=18، الآلاف 4+3+1=8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Units: 7+5=12 → write 2, carry 1. Tens: 6+7+1=14 → write 4, carry 1. Hundreds: 8+9+1=18 → write 8, carry 1. Thousands: 4+3+1=8 → write 8.",
            "explanation_ar": "الآحاد: 7+5=12 ← اكتب 2، احمل 1. العشرات: 6+7+1=14 ← اكتب 4، احمل 1. المئات: 8+9+1=18 ← اكتب 8، احمل 1. الآلاف: 4+3+1=8 ← اكتب 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Each carry feeds into the next column left. Thousands digit becomes 4+3+1 = 8, keeping the answer within 4 digits.",
            "explanation_ar": "كل حمل ينتقل إلى العمود التالي على اليسار. يصبح رقم الآلاف 4+3+1 = 8، مما يبقي الجواب ضمن 4 أرقام."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Reading left to right: 8, 8, 4, 2 → 8842. So 4867 + 3975 = 8842.",
            "explanation_ar": "القراءة من اليسار إلى اليمين: 8، 8، 4، 2 ← 8842. إذن 4867 + 3975 = 8842."
          }
        ],
        "hint_en": "All four columns produce carries — track each one carefully as it shifts left.",
        "hint_ar": "جميع الأعمدة الأربعة تنتج حمولات — تتبع كل واحدة بعناية وهي تنتقل إلى اليسار.",
        "result_en": "4867 + 3975 = 8842",
        "result_ar": "4867 + 3975 = 8842"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "4867 = 4000 + 800 + 60 + 7. 3975 = 3000 + 900 + 70 + 5.",
            "explanation_ar": "4867 = 4000 + 800 + 60 + 7. 3975 = 3000 + 900 + 70 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 4000+3000=7000. Hundreds: 800+900=1700. Tens: 60+70=130. Units: 7+5=12.",
            "explanation_ar": "الآلاف: 4000+3000=7000. المئات: 800+900=1700. العشرات: 60+70=130. الآحاد: 7+5=12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7000 + 1700 + 130 + 12 = 8842.",
            "explanation_ar": "7000 + 1700 + 130 + 12 = 8842."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "7000 + 1700 = 8700, + 130 = 8830, + 12 = 8842. Answer: 8842.",
            "explanation_ar": "7000 + 1700 = 8700، + 130 = 8830، + 12 = 8842. الجواب: 8842."
          }
        ],
        "hint_en": "Three of the four partial sums exceed their place value (1700, 130, 12) — let them cascade naturally when adding.",
        "hint_ar": "ثلاثة من المجاميع الجزئية الأربعة تتجاوز قيمتها المكانية (1700، 130، 12) — دعها تتتالى بشكل طبيعي عند الجمع.",
        "result_en": "4867 + 3975 = 8842",
        "result_ar": "4867 + 3975 = 8842"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Two mountain trails have lengths of 4867 metres and 3975 metres. What is their combined length?",
            "explanation_ar": "يبلغ طول مسارَي جبليَّين 4867 متراً و3975 متراً. ما هو طولهما مجتمعَين؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart — Th | H | T | U. Top row: 4 | 8 | 6 | 7. Bottom row: 3 | 9 | 7 | 5. Carry row above: _ | 1 | 1 | 1.",
            "explanation_ar": "جدول القيمة المكانية — آ | م | ع | أ. الصف العلوي: 4 | 8 | 6 | 7. الصف السفلي: 3 | 9 | 7 | 5. صف الحمل فوق: _ | 1 | 1 | 1."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Units: 7+5=12 → 2, carry. Tens: 6+7+1=14 → 4, carry. Hundreds: 8+9+1=18 → 8, carry. Thousands: 4+3+1=8.",
            "explanation_ar": "الآحاد: 7+5=12 ← 2، حمل. العشرات: 6+7+1=14 ← 4، حمل. المئات: 8+9+1=18 ← 8، حمل. الآلاف: 4+3+1=8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Result row: 8842. The combined trail length is 8842 metres.",
            "explanation_ar": "صف النتيجة: 8842. يبلغ الطول الإجمالي للمسارَين 8842 متراً."
          }
        ],
        "hint_en": "Use a carry row above your chart — you will need carry marks above the tens, hundreds, and thousands columns.",
        "hint_ar": "استخدم صف حمل فوق جدولك — ستحتاج إلى علامات حمل فوق أعمدة العشرات والمئات والآلاف.",
        "result_en": "4867 + 3975 = 8842",
        "result_ar": "4867 + 3975 = 8842"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-add-hard-002",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "3758 + 4863 = ?",
    "question_ar": "3758 + 4863 = ؟",
    "answer": 8621,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 3758 + 4863. Units: 8+3=11, Tens: 5+6+1=12, Hundreds: 7+8+1=16, Thousands: 3+4+1=8. Regrouping occurs in all four columns.",
            "explanation_ar": "انظر إلى 3758 + 4863. الآحاد: 8+3=11، العشرات: 5+6+1=12، المئات: 7+8+1=16، الآلاف: 3+4+1=8. تحدث إعادة التجميع في جميع الأعمدة الأربعة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Units: 8+3=11 → digit 1, carry 1. Tens: 5+6+1=12 → digit 2, carry 1. Hundreds: 7+8+1=16 → digit 6, carry 1. Thousands: 3+4+1=8 → digit 8.",
            "explanation_ar": "الآحاد: 8+3=11 ← رقم 1، حمل 1. العشرات: 5+6+1=12 ← رقم 2، حمل 1. المئات: 7+8+1=16 ← رقم 6، حمل 1. الآلاف: 3+4+1=8 ← رقم 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Each column's carry of 1 feeds the next column to the left. The chain of carries resolves cleanly at the thousands.",
            "explanation_ar": "حمل 1 من كل عمود ينتقل إلى العمود التالي على اليسار. تتحل سلسلة الحمولات بوضوح عند الآلاف."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Digits from left to right: 8, 6, 2, 1 → 8621. So 3758 + 4863 = 8621.",
            "explanation_ar": "الأرقام من اليسار إلى اليمين: 8، 6، 2، 1 ← 8621. إذن 3758 + 4863 = 8621."
          }
        ],
        "hint_en": "A carry chain runs through all four columns — stay organised by recording each carry before moving left.",
        "hint_ar": "سلسلة الحمل تمتد عبر جميع الأعمدة الأربعة — ابق منظماً بتسجيل كل حمل قبل التحرك يساراً.",
        "result_en": "3758 + 4863 = 8621",
        "result_ar": "3758 + 4863 = 8621"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "3758 = 3000 + 700 + 50 + 8. 4863 = 4000 + 800 + 60 + 3.",
            "explanation_ar": "3758 = 3000 + 700 + 50 + 8. 4863 = 4000 + 800 + 60 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 3000+4000=7000. Hundreds: 700+800=1500. Tens: 50+60=110. Units: 8+3=11.",
            "explanation_ar": "الآلاف: 3000+4000=7000. المئات: 700+800=1500. العشرات: 50+60=110. الآحاد: 8+3=11."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7000 + 1500 + 110 + 11 = 8621.",
            "explanation_ar": "7000 + 1500 + 110 + 11 = 8621."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "7000 + 1500 = 8500, + 110 = 8610, + 11 = 8621. Answer: 8621.",
            "explanation_ar": "7000 + 1500 = 8500، + 110 = 8610، + 11 = 8621. الجواب: 8621."
          }
        ],
        "hint_en": "Add the four partial sums step by step: start with thousands, then add hundreds total, then tens, then units.",
        "hint_ar": "اجمع المجاميع الجزئية الأربعة خطوة بخطوة: ابدأ بالآلاف، ثم أضف إجمالي المئات، ثم العشرات، ثم الآحاد.",
        "result_en": "3758 + 4863 = 8621",
        "result_ar": "3758 + 4863 = 8621"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A printing press ran 3758 copies in the morning and 4863 copies in the evening. How many copies in total?",
            "explanation_ar": "طبعت مطبعة 3758 نسخة في الصباح و4863 نسخة في المساء. كم يبلغ إجمالي النسخ؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart — Th | H | T | U. Top: 3 | 7 | 5 | 8. Bottom: 4 | 8 | 6 | 3. Carry row: 1 | 1 | 1 | (above each column).",
            "explanation_ar": "جدول القيمة المكانية — آ | م | ع | أ. الأعلى: 3 | 7 | 5 | 8. الأسفل: 4 | 8 | 6 | 3. صف الحمل: 1 | 1 | 1 | (فوق كل عمود)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Units: 8+3=11 → 1, carry. Tens: 5+6+1=12 → 2, carry. Hundreds: 7+8+1=16 → 6, carry. Thousands: 3+4+1=8.",
            "explanation_ar": "الآحاد: 8+3=11 ← 1، حمل. العشرات: 5+6+1=12 ← 2، حمل. المئات: 7+8+1=16 ← 6، حمل. الآلاف: 3+4+1=8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Result: 8621. The press produced 8621 copies in total.",
            "explanation_ar": "النتيجة: 8621. أنتجت المطبعة 8621 نسخة في المجموع."
          }
        ],
        "hint_en": "Draw three carry marks — above tens, hundreds, and thousands — before reading the final answer.",
        "hint_ar": "ارسم ثلاث علامات حمل — فوق العشرات والمئات والآلاف — قبل قراءة الجواب النهائي.",
        "result_en": "3758 + 4863 = 8621",
        "result_ar": "3758 + 4863 = 8621"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-add-hard-003",
    "grade": 4,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "2969 + 5874 = ?",
    "question_ar": "2969 + 5874 = ؟",
    "answer": 8843,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 2969 + 5874. Units: 9+4=13, Tens: 6+7+1=14, Hundreds: 9+8+1=18, Thousands: 2+5+1=8. All columns regroup.",
            "explanation_ar": "انظر إلى 2969 + 5874. الآحاد: 9+4=13، العشرات: 6+7+1=14، المئات: 9+8+1=18، الآلاف: 2+5+1=8. جميع الأعمدة تُعيد التجميع."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Units: 9+4=13 → digit 3, carry 1. Tens: 6+7+1=14 → digit 4, carry 1. Hundreds: 9+8+1=18 → digit 8, carry 1. Thousands: 2+5+1=8 → digit 8.",
            "explanation_ar": "الآحاد: 9+4=13 ← رقم 3، حمل 1. العشرات: 6+7+1=14 ← رقم 4، حمل 1. المئات: 9+8+1=18 ← رقم 8، حمل 1. الآلاف: 2+5+1=8 ← رقم 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The carry ripples through every column. Notice that 9 appears in both hundreds and units of 2969, making each sum large.",
            "explanation_ar": "تنتشر المحمولة عبر كل عمود. لاحظ أن 9 يظهر في مئات وآحاد 2969، مما يجعل كل مجموع كبيراً."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Digits left to right: 8, 8, 4, 3 → 8843. So 2969 + 5874 = 8843.",
            "explanation_ar": "الأرقام من اليسار إلى اليمين: 8، 8، 4، 3 ← 8843. إذن 2969 + 5874 = 8843."
          }
        ],
        "hint_en": "The 9s in 2969 guarantee large column sums — expect carries in every column.",
        "hint_ar": "الأرقام 9 في 2969 تضمن مجاميع كبيرة في الأعمدة — توقع حمولات في كل عمود.",
        "result_en": "2969 + 5874 = 8843",
        "result_ar": "2969 + 5874 = 8843"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "2969 = 2000 + 900 + 60 + 9. 5874 = 5000 + 800 + 70 + 4.",
            "explanation_ar": "2969 = 2000 + 900 + 60 + 9. 5874 = 5000 + 800 + 70 + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 2000+5000=7000. Hundreds: 900+800=1700. Tens: 60+70=130. Units: 9+4=13.",
            "explanation_ar": "الآلاف: 2000+5000=7000. المئات: 900+800=1700. العشرات: 60+70=130. الآحاد: 9+4=13."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7000 + 1700 + 130 + 13 = 8843.",
            "explanation_ar": "7000 + 1700 + 130 + 13 = 8843."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "7000 + 1700 = 8700, + 130 = 8830, + 13 = 8843. Answer confirmed: 8843.",
            "explanation_ar": "7000 + 1700 = 8700، + 130 = 8830، + 13 = 8843. الجواب مؤكد: 8843."
          }
        ],
        "hint_en": "The hundreds partial sum (900 + 800 = 1700) contributes an extra 1000 to the thousands — add step by step to keep it clear.",
        "hint_ar": "المجموع الجزئي للمئات (900 + 800 = 1700) يُضيف 1000 إضافية إلى الآلاف — اجمع خطوة بخطوة للوضوح.",
        "result_en": "2969 + 5874 = 8843",
        "result_ar": "2969 + 5874 = 8843"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A space telescope photographed 2969 stars in one scan and 5874 stars in a second scan. How many stars in total?",
            "explanation_ar": "التقط تلسكوب فضائي صور 2969 نجماً في أول مسح و5874 نجماً في المسح الثاني. كم يبلغ مجموع النجوم؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart — Th | H | T | U. Top: 2 | 9 | 6 | 9. Bottom: 5 | 8 | 7 | 4. Carry row above: 1 | 1 | 1 | (propagates left).",
            "explanation_ar": "جدول القيمة المكانية — آ | م | ع | أ. الأعلى: 2 | 9 | 6 | 9. الأسفل: 5 | 8 | 7 | 4. صف الحمل فوق: 1 | 1 | 1 | (ينتشر يساراً)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Units: 9+4=13 → 3, carry. Tens: 6+7+1=14 → 4, carry. Hundreds: 9+8+1=18 → 8, carry. Thousands: 2+5+1=8.",
            "explanation_ar": "الآحاد: 9+4=13 ← 3، حمل. العشرات: 6+7+1=14 ← 4، حمل. المئات: 9+8+1=18 ← 8، حمل. الآلاف: 2+5+1=8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Result row: 8843. The telescope catalogued 8843 stars across both scans.",
            "explanation_ar": "صف النتيجة: 8843. سجّل التلسكوب 8843 نجماً في كلا المسحَين."
          }
        ],
        "hint_en": "Three carry marks — above tens, hundreds, and thousands — turn the six-digit raw sums into a clean 4-digit answer.",
        "hint_ar": "ثلاث علامات حمل — فوق العشرات والمئات والآلاف — تحوّل المجاميع الخام ذات الرقمين إلى جواب مكوّن من 4 أرقام.",
        "result_en": "2969 + 5874 = 8843",
        "result_ar": "2969 + 5874 = 8843"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-add-hard-003",
      "upper_grade_equivalent": "g5-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g4-common-sub-easy-001",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "5768 − 2435 = ?",
    "question_ar": "5768 − 2435 = ؟",
    "answer": 3333,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 5768 − 2435. Each digit of the subtrahend is smaller than or equal to the corresponding digit of the minuend, so no borrowing is needed.",
            "explanation_ar": "انظر إلى 5768 − 2435. كل رقم في المطروح أصغر من أو يساوي الرقم المقابل في المنقوص منه، لذلك لا حاجة للاستعارة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 5 − 2 = 3. Hundreds: 7 − 4 = 3. Tens: 6 − 3 = 3. Ones: 8 − 5 = 3.",
            "explanation_ar": "الآلاف: 5 − 2 = 3. المئات: 7 − 4 = 3. العشرات: 6 − 3 = 3. الآحاد: 8 − 5 = 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract left to right: 5000 − 2000 = 3000, then 700 − 400 = 300, then 60 − 30 = 30, then 8 − 5 = 3.",
            "explanation_ar": "اطرح من اليسار إلى اليمين: 5000 − 2000 = 3000، ثم 700 − 400 = 300، ثم 60 − 30 = 30، ثم 8 − 5 = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3000 + 300 + 30 + 3 = 3333. So 5768 − 2435 = 3333.",
            "explanation_ar": "3000 + 300 + 30 + 3 = 3333. إذن 5768 − 2435 = 3333."
          }
        ],
        "hint_en": "Each column subtracts cleanly — just work from left to right.",
        "hint_ar": "كل عمود يُطرح بسهولة — فقط اعمل من اليسار إلى اليمين.",
        "result_en": "5768 − 2435 = 3333",
        "result_ar": "5768 − 2435 = 3333"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 5768 into 5000 + 700 + 60 + 8, and 2435 into 2000 + 400 + 30 + 5.",
            "explanation_ar": "قسّم 5768 إلى 5000 + 700 + 60 + 8، و2435 إلى 2000 + 400 + 30 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5000 − 2000 = 3000. 700 − 400 = 300. 60 − 30 = 30. 8 − 5 = 3.",
            "explanation_ar": "5000 − 2000 = 3000. 700 − 400 = 300. 60 − 30 = 30. 8 − 5 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial differences: 3000 + 300 = 3300, then 3300 + 30 = 3330, then 3330 + 3 = 3333.",
            "explanation_ar": "اجمع الفروق الجزئية: 3000 + 300 = 3300، ثم 3300 + 30 = 3330، ثم 3330 + 3 = 3333."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3333 + 2435 = 5768. ✓ So 5768 − 2435 = 3333.",
            "explanation_ar": "تحقق: 3333 + 2435 = 5768. ✓ إذن 5768 − 2435 = 3333."
          }
        ],
        "hint_en": "Break both numbers into thousands, hundreds, tens, and ones before subtracting.",
        "hint_ar": "قسّم كلا الرقمين إلى آلاف ومئات وعشرات وآحاد قبل الطرح.",
        "result_en": "5768 − 2435 = 3333",
        "result_ar": "5768 − 2435 = 3333"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a library with 5768 books. 2435 books are moved to another branch. How many remain?",
            "explanation_ar": "تخيّل مكتبة تحتوي على 5768 كتابًا. نُقل 2435 كتابًا إلى فرع آخر. كم كتابًا تبقّى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 5768. Make a large jump of −2000 to land on 3768, then −400 to 3368, then −30 to 3338, then −5 to 3333.",
            "explanation_ar": "ارسم خطًا عدديًا. ابدأ من 5768. قفز كبير بمقدار −2000 للوصول إلى 3768، ثم −400 إلى 3368، ثم −30 إلى 3338، ثم −5 إلى 3333."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The total distance jumped backward is 2000 + 400 + 30 + 5 = 2435. You landed on 3333.",
            "explanation_ar": "إجمالي المسافة المقفوزة للخلف هي 2000 + 400 + 30 + 5 = 2435. وصلت إلى 3333."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "5768 − 2435 = 3333. There are 3333 books still in the library.",
            "explanation_ar": "5768 − 2435 = 3333. لا يزال في المكتبة 3333 كتابًا."
          }
        ],
        "hint_en": "Jump backward in chunks of thousands, hundreds, tens, then ones on the number line.",
        "hint_ar": "اقفز للخلف على خط الأعداد على شكل آلاف، ثم مئات، ثم عشرات، ثم آحاد.",
        "result_en": "5768 − 2435 = 3333",
        "result_ar": "5768 − 2435 = 3333"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-sub-easy-002",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "8796 − 5342 = ?",
    "question_ar": "8796 − 5342 = ؟",
    "answer": 3454,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 8796 − 5342. Every digit of 5342 is less than the corresponding digit of 8796, so no borrowing is needed.",
            "explanation_ar": "انظر إلى 8796 − 5342. كل رقم في 5342 أصغر من الرقم المقابل في 8796، لذلك لا حاجة للاستعارة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 8 − 5 = 3. Hundreds: 7 − 3 = 4. Tens: 9 − 4 = 5. Ones: 6 − 2 = 4.",
            "explanation_ar": "الآلاف: 8 − 5 = 3. المئات: 7 − 3 = 4. العشرات: 9 − 4 = 5. الآحاد: 6 − 2 = 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract left to right: 8000 − 5000 = 3000, 700 − 300 = 400, 90 − 40 = 50, 6 − 2 = 4.",
            "explanation_ar": "اطرح من اليسار إلى اليمين: 8000 − 5000 = 3000، 700 − 300 = 400، 90 − 40 = 50، 6 − 2 = 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3000 + 400 + 50 + 4 = 3454. So 8796 − 5342 = 3454.",
            "explanation_ar": "3000 + 400 + 50 + 4 = 3454. إذن 8796 − 5342 = 3454."
          }
        ],
        "hint_en": "All columns subtract without borrowing — go left to right.",
        "hint_ar": "جميع الأعمدة تُطرح دون استعارة — اعمل من اليسار إلى اليمين.",
        "result_en": "8796 − 5342 = 3454",
        "result_ar": "8796 − 5342 = 3454"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 8796 into 8000 + 700 + 90 + 6, and 5342 into 5000 + 300 + 40 + 2.",
            "explanation_ar": "قسّم 8796 إلى 8000 + 700 + 90 + 6، و5342 إلى 5000 + 300 + 40 + 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "8000 − 5000 = 3000. 700 − 300 = 400. 90 − 40 = 50. 6 − 2 = 4.",
            "explanation_ar": "8000 − 5000 = 3000. 700 − 300 = 400. 90 − 40 = 50. 6 − 2 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3000 + 400 = 3400, then 3400 + 50 = 3450, then 3450 + 4 = 3454.",
            "explanation_ar": "3000 + 400 = 3400، ثم 3400 + 50 = 3450، ثم 3450 + 4 = 3454."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3454 + 5342 = 8796. ✓ So 8796 − 5342 = 3454.",
            "explanation_ar": "تحقق: 3454 + 5342 = 8796. ✓ إذن 8796 − 5342 = 3454."
          }
        ],
        "hint_en": "Decompose into place values and subtract each column independently.",
        "hint_ar": "حلّل إلى قيم مكانية واطرح كل عمود بشكل مستقل.",
        "result_en": "8796 − 5342 = 3454",
        "result_ar": "8796 − 5342 = 3454"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A stadium holds 8796 seats. 5342 seats are occupied. How many seats are empty?",
            "explanation_ar": "يتسع ملعب لـ 8796 مقعدًا. يشغل المتفرجون 5342 مقعدًا. كم مقعدًا فارغًا يوجد؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line starting at 8796, jump back −5000 to 3796, then −300 to 3496, then −40 to 3456, then −2 to 3454.",
            "explanation_ar": "على خط أعداد يبدأ من 8796، اقفز للخلف −5000 إلى 3796، ثم −300 إلى 3496، ثم −40 إلى 3456، ثم −2 إلى 3454."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total jumped back: 5000 + 300 + 40 + 2 = 5342. Landing point is 3454.",
            "explanation_ar": "إجمالي ما قفزنا للخلف: 5000 + 300 + 40 + 2 = 5342. نقطة الهبوط هي 3454."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "8796 − 5342 = 3454. There are 3454 empty seats.",
            "explanation_ar": "8796 − 5342 = 3454. يوجد 3454 مقعدًا فارغًا."
          }
        ],
        "hint_en": "Picture a number line and make four backward jumps matching the place values of 5342.",
        "hint_ar": "تخيّل خطًا عدديًا واقفز للخلف أربع مرات مطابقةً للقيم المكانية لـ 5342.",
        "result_en": "8796 − 5342 = 3454",
        "result_ar": "8796 − 5342 = 3454"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-sub-easy-003",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "9875 − 4321 = ?",
    "question_ar": "9875 − 4321 = ؟",
    "answer": 5554,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "In 9875 − 4321, each digit of 4321 is smaller than the matching digit of 9875, so no borrowing is needed at any column.",
            "explanation_ar": "في 9875 − 4321، كل رقم من 4321 أصغر من الرقم المقابل في 9875، لذا لا حاجة لاستعارة في أي عمود."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 9 − 4 = 5. Hundreds: 8 − 3 = 5. Tens: 7 − 2 = 5. Ones: 5 − 1 = 4.",
            "explanation_ar": "الآلاف: 9 − 4 = 5. المئات: 8 − 3 = 5. العشرات: 7 − 2 = 5. الآحاد: 5 − 1 = 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "9000 − 4000 = 5000, 800 − 300 = 500, 70 − 20 = 50, 5 − 1 = 4.",
            "explanation_ar": "9000 − 4000 = 5000، 800 − 300 = 500، 70 − 20 = 50، 5 − 1 = 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "5000 + 500 + 50 + 4 = 5554. So 9875 − 4321 = 5554.",
            "explanation_ar": "5000 + 500 + 50 + 4 = 5554. إذن 9875 − 4321 = 5554."
          }
        ],
        "hint_en": "No borrowing needed — subtract each column left to right.",
        "hint_ar": "لا حاجة للاستعارة — اطرح كل عمود من اليسار إلى اليمين.",
        "result_en": "9875 − 4321 = 5554",
        "result_ar": "9875 − 4321 = 5554"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 9875 into 9000 + 800 + 70 + 5, and 4321 into 4000 + 300 + 20 + 1.",
            "explanation_ar": "قسّم 9875 إلى 9000 + 800 + 70 + 5، و4321 إلى 4000 + 300 + 20 + 1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "9000 − 4000 = 5000. 800 − 300 = 500. 70 − 20 = 50. 5 − 1 = 4.",
            "explanation_ar": "9000 − 4000 = 5000. 800 − 300 = 500. 70 − 20 = 50. 5 − 1 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "5000 + 500 = 5500, then 5500 + 50 = 5550, then 5550 + 4 = 5554.",
            "explanation_ar": "5000 + 500 = 5500، ثم 5500 + 50 = 5550، ثم 5550 + 4 = 5554."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 5554 + 4321 = 9875. ✓ So 9875 − 4321 = 5554.",
            "explanation_ar": "تحقق: 5554 + 4321 = 9875. ✓ إذن 9875 − 4321 = 5554."
          }
        ],
        "hint_en": "Each place value subtracts cleanly — add up the four partial results.",
        "hint_ar": "كل قيمة مكانية تُطرح بسهولة — اجمع الأربعة نتائج الجزئية.",
        "result_en": "9875 − 4321 = 5554",
        "result_ar": "9875 − 4321 = 5554"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A farmer harvested 9875 oranges. He sold 4321 at the market. How many oranges does he have left?",
            "explanation_ar": "حصد مزارع 9875 برتقالة. باع 4321 منها في السوق. كم برتقالة تبقّت لديه؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line from 9875, jump −4000 to 5875, then −300 to 5575, then −20 to 5555, then −1 to 5554.",
            "explanation_ar": "على خط أعداد من 9875، اقفز −4000 إلى 5875، ثم −300 إلى 5575، ثم −20 إلى 5555، ثم −1 إلى 5554."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total jumped: 4000 + 300 + 20 + 1 = 4321. You arrived at 5554.",
            "explanation_ar": "إجمالي ما قفزنا: 4000 + 300 + 20 + 1 = 4321. وصلنا إلى 5554."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "9875 − 4321 = 5554. The farmer has 5554 oranges left.",
            "explanation_ar": "9875 − 4321 = 5554. تبقّى لدى المزارع 5554 برتقالة."
          }
        ],
        "hint_en": "Use a number line — jump back by thousands, then hundreds, then tens, then ones.",
        "hint_ar": "استخدم خط الأعداد — اقفز للخلف بالآلاف ثم المئات ثم العشرات ثم الآحاد.",
        "result_en": "9875 − 4321 = 5554",
        "result_ar": "9875 − 4321 = 5554"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-sub-medium-001",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "6234 − 3587 = ?",
    "question_ar": "6234 − 3587 = ؟",
    "answer": 2647,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "In 6234 − 3587, the ones column (4 − 7) and the tens column (3 − 8) both require borrowing. Plan to adjust from higher columns.",
            "explanation_ar": "في 6234 − 3587، يحتاج عمود الآحاد (4 − 7) وعمود العشرات (3 − 8) كلاهما إلى استعارة. خطّط للتعديل من الأعمدة الأعلى."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Thousands: 6 − 3 = 3, but we will need to lend to hundreds. Hundreds: 2 becomes 12 after borrowing but must lend to tens → effectively 11 − 5 = 6... Let's track carefully: Ones: borrow from tens: 14 − 7 = 7. Tens: after lending 1, becomes 2; borrow from hundreds: 12 − 8 = 4. Hundreds: after lending 1, becomes 1; borrow from thousands: 11 − 5 = 6. Thousands: after lending 1: 5 − 3 = 2.",
            "explanation_ar": "الآحاد: استعر من العشرات: 14 − 7 = 7. العشرات: بعد الإقراض تصبح 2، استعر من المئات: 12 − 8 = 4. المئات: بعد الإقراض تصبح 1، استعر من الآلاف: 11 − 5 = 6. الآلاف: بعد الإقراض: 5 − 3 = 2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Working right to left with borrowing: ones = 7, tens = 4, hundreds = 6, thousands = 2.",
            "explanation_ar": "العمل من اليمين إلى اليسار مع الاستعارة: الآحاد = 7، العشرات = 4، المئات = 6، الآلاف = 2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Reading the digits left to right: 2647. So 6234 − 3587 = 2647.",
            "explanation_ar": "قراءة الأرقام من اليسار إلى اليمين: 2647. إذن 6234 − 3587 = 2647."
          }
        ],
        "hint_en": "When a column would go negative, borrow 1 from the next higher column and add 10.",
        "hint_ar": "عندما يصبح عمود سالبًا، استعر 1 من العمود الأعلى التالي وأضف 10.",
        "result_en": "6234 − 3587 = 2647",
        "result_ar": "6234 − 3587 = 2647"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 6234 into 6000 + 200 + 30 + 4, and 3587 into 3000 + 500 + 80 + 7.",
            "explanation_ar": "قسّم 6234 إلى 6000 + 200 + 30 + 4، و3587 إلى 3000 + 500 + 80 + 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Ones: 4 − 7 is negative, so borrow 10 from the tens: 14 − 7 = 7; tens become 20. Tens: 20 − 80 is negative, so borrow 100 from hundreds: 120 − 80 = 40; hundreds become 100. Hundreds: 100 − 500 is negative, so borrow 1000 from thousands: 1100 − 500 = 600; thousands become 5000. Thousands: 5000 − 3000 = 2000.",
            "explanation_ar": "الآحاد: 4 − 7 سالب، استعر 10 من العشرات: 14 − 7 = 7؛ تصبح العشرات 20. العشرات: 20 − 80 سالب، استعر 100 من المئات: 120 − 80 = 40؛ تصبح المئات 100. المئات: 100 − 500 سالب، استعر 1000 من الآلاف: 1100 − 500 = 600؛ تصبح الآلاف 5000. الآلاف: 5000 − 3000 = 2000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "2000 + 600 + 40 + 7 = 2647.",
            "explanation_ar": "2000 + 600 + 40 + 7 = 2647."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2647 + 3587 = 6234. ✓ So 6234 − 3587 = 2647.",
            "explanation_ar": "تحقق: 2647 + 3587 = 6234. ✓ إذن 6234 − 3587 = 2647."
          }
        ],
        "hint_en": "When a partial difference is negative, borrow from the next place value.",
        "hint_ar": "عندما يكون الفرق الجزئي سالبًا، استعر من القيمة المكانية التالية.",
        "result_en": "6234 − 3587 = 2647",
        "result_ar": "6234 − 3587 = 2647"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A factory produced 6234 items. 3587 were shipped out. How many remain in the warehouse?",
            "explanation_ar": "أنتج مصنع 6234 قطعة. شُحن منها 3587. كم قطعة تبقّت في المستودع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a place value chart. In the ones column, 4 < 7, so regroup: trade 1 ten for 10 ones (tens: 3→2, ones: 4→14). In the tens column, 2 < 8, so regroup: trade 1 hundred for 10 tens (hundreds: 2→1, tens: 2→12). Now subtract column by column.",
            "explanation_ar": "ارسم جدول القيم المكانية. في عمود الآحاد، 4 < 7، لذا أعد التجميع: استبدل عشرة واحدة بـ 10 آحاد (العشرات: 3→2، الآحاد: 4→14). في عمود العشرات، 2 < 8، أعد التجميع: استبدل مئة بـ 10 عشرات (المئات: 2→1، العشرات: 2→12). الآن اطرح عمودًا بعمود."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After regrouping: ones 14−7=7, tens 12−8=4, hundreds 11−5=6, thousands 5−3=2. Result: 2647.",
            "explanation_ar": "بعد إعادة التجميع: الآحاد 14−7=7، العشرات 12−8=4، المئات 11−5=6، الآلاف 5−3=2. النتيجة: 2647."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "6234 − 3587 = 2647. There are 2647 items left in the warehouse.",
            "explanation_ar": "6234 − 3587 = 2647. تبقّى في المستودع 2647 قطعة."
          }
        ],
        "hint_en": "Use a place value chart and regroup where the top digit is smaller than the bottom.",
        "hint_ar": "استخدم جدول القيم المكانية وأعد التجميع حيث يكون الرقم العلوي أصغر من السفلي.",
        "result_en": "6234 − 3587 = 2647",
        "result_ar": "6234 − 3587 = 2647"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-sub-medium-002",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "7415 − 2863 = ?",
    "question_ar": "7415 − 2863 = ؟",
    "answer": 4552,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "In 7415 − 2863, the ones column (5 − 3) is fine, but the tens column (1 − 6) and hundreds column (4 − 8) both require borrowing.",
            "explanation_ar": "في 7415 − 2863، عمود الآحاد (5 − 3) جيد، لكن عمود العشرات (1 − 6) وعمود المئات (4 − 8) يحتاجان إلى استعارة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ones: 5 − 3 = 2. Tens: 1 < 6, borrow from hundreds: 11 − 6 = 5; hundreds become 3. Hundreds: 3 < 8, borrow from thousands: 13 − 8 = 5; thousands become 6. Thousands: 6 − 2 = 4.",
            "explanation_ar": "الآحاد: 5 − 3 = 2. العشرات: 1 < 6، استعر من المئات: 11 − 6 = 5؛ تصبح المئات 3. المئات: 3 < 8، استعر من الآلاف: 13 − 8 = 5؛ تصبح الآلاف 6. الآلاف: 6 − 2 = 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "With borrowing applied: thousands = 4, hundreds = 5, tens = 5, ones = 2.",
            "explanation_ar": "مع تطبيق الاستعارة: الآلاف = 4، المئات = 5، العشرات = 5، الآحاد = 2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Digits left to right: 4552. So 7415 − 2863 = 4552.",
            "explanation_ar": "الأرقام من اليسار إلى اليمين: 4552. إذن 7415 − 2863 = 4552."
          }
        ],
        "hint_en": "Borrow from the hundreds column when tens are too small, and from thousands when hundreds are too small.",
        "hint_ar": "استعر من المئات عندما تكون العشرات صغيرة جدًا، ومن الآلاف عندما تكون المئات صغيرة جدًا.",
        "result_en": "7415 − 2863 = 4552",
        "result_ar": "7415 − 2863 = 4552"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 7415 into 7000 + 400 + 10 + 5, and 2863 into 2000 + 800 + 60 + 3.",
            "explanation_ar": "قسّم 7415 إلى 7000 + 400 + 10 + 5، و2863 إلى 2000 + 800 + 60 + 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Ones: 5 − 3 = 2. Tens: 10 − 60 is negative; borrow 100 → 110 − 60 = 50; hundreds become 300. Hundreds: 300 − 800 is negative; borrow 1000 → 1300 − 800 = 500; thousands become 6000. Thousands: 6000 − 2000 = 4000.",
            "explanation_ar": "الآحاد: 5 − 3 = 2. العشرات: 10 − 60 سالب؛ استعر 100 → 110 − 60 = 50؛ تصبح المئات 300. المئات: 300 − 800 سالب؛ استعر 1000 → 1300 − 800 = 500؛ تصبح الآلاف 6000. الآلاف: 6000 − 2000 = 4000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4000 + 500 + 50 + 2 = 4552.",
            "explanation_ar": "4000 + 500 + 50 + 2 = 4552."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4552 + 2863 = 7415. ✓ So 7415 − 2863 = 4552.",
            "explanation_ar": "تحقق: 4552 + 2863 = 7415. ✓ إذن 7415 − 2863 = 4552."
          }
        ],
        "hint_en": "Borrow from the next place value whenever a partial subtraction goes negative.",
        "hint_ar": "استعر من القيمة المكانية التالية كلما كان الطرح الجزئي سالبًا.",
        "result_en": "7415 − 2863 = 4552",
        "result_ar": "7415 − 2863 = 4552"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A school collected 7415 cans for a food drive. 2863 cans were distributed. How many cans remain?",
            "explanation_ar": "جمعت مدرسة 7415 علبة لحملة الغذاء. وُزّع منها 2863 علبة. كم علبة تبقّت؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a place value chart for 7415. The tens digit (1) is less than 6, so cross out the 4 in hundreds and write 3; change tens 1 to 11. Then 3 hundreds < 8 hundreds, so cross out the 7 in thousands and write 6; change hundreds 3 to 13.",
            "explanation_ar": "ارسم جدول القيم المكانية لـ 7415. رقم العشرات (1) أصغر من 6، لذا شطب الـ4 في المئات واكتب 3؛ غيّر العشرات من 1 إلى 11. ثم 3 مئات < 8 مئات، لذا شطب الـ7 في الآلاف واكتب 6؛ غيّر المئات من 3 إلى 13."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After regrouping: ones 5−3=2, tens 11−6=5, hundreds 13−8=5, thousands 6−2=4. Result: 4552.",
            "explanation_ar": "بعد إعادة التجميع: الآحاد 5−3=2، العشرات 11−6=5، المئات 13−8=5، الآلاف 6−2=4. النتيجة: 4552."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "7415 − 2863 = 4552. There are 4552 cans left.",
            "explanation_ar": "7415 − 2863 = 4552. تبقّى 4552 علبة."
          }
        ],
        "hint_en": "Use a place value chart and cross out digits that need regrouping.",
        "hint_ar": "استخدم جدول القيم المكانية وشطب الأرقام التي تحتاج إلى إعادة تجميع.",
        "result_en": "7415 − 2863 = 4552",
        "result_ar": "7415 − 2863 = 4552"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-sub-medium-003",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "5321 − 1748 = ?",
    "question_ar": "5321 − 1748 = ؟",
    "answer": 3573,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "In 5321 − 1748, the ones column (1 − 8) and the tens column (2 − 4) both need borrowing.",
            "explanation_ar": "في 5321 − 1748، يحتاج عمود الآحاد (1 − 8) وعمود العشرات (2 − 4) كلاهما إلى استعارة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ones: 1 < 8, borrow from tens: 11 − 8 = 3; tens become 1. Tens: 1 < 4, borrow from hundreds: 11 − 4 = 7; hundreds become 2. Hundreds: 2 − 7... wait, 2 < 7, borrow from thousands: 12 − 7 = 5; thousands become 4. Thousands: 4 − 1 = 3.",
            "explanation_ar": "الآحاد: 1 < 8، استعر من العشرات: 11 − 8 = 3؛ تصبح العشرات 1. العشرات: 1 < 4، استعر من المئات: 11 − 4 = 7؛ تصبح المئات 2. المئات: 2 < 7، استعر من الآلاف: 12 − 7 = 5؛ تصبح الآلاف 4. الآلاف: 4 − 1 = 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "With all borrowing applied: thousands = 3, hundreds = 5, tens = 7, ones = 3.",
            "explanation_ar": "مع تطبيق جميع الاستعارات: الآلاف = 3، المئات = 5، العشرات = 7، الآحاد = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3573. So 5321 − 1748 = 3573.",
            "explanation_ar": "3573. إذن 5321 − 1748 = 3573."
          }
        ],
        "hint_en": "Borrow step by step — ones first, then tens, then hundreds.",
        "hint_ar": "استعر خطوة بخطوة — الآحاد أولًا، ثم العشرات، ثم المئات.",
        "result_en": "5321 − 1748 = 3573",
        "result_ar": "5321 − 1748 = 3573"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 5321 into 5000 + 300 + 20 + 1, and 1748 into 1000 + 700 + 40 + 8.",
            "explanation_ar": "قسّم 5321 إلى 5000 + 300 + 20 + 1، و1748 إلى 1000 + 700 + 40 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Ones: 1 − 8 negative; borrow 10 → 11 − 8 = 3; tens become 10. Tens: 10 − 40 negative; borrow 100 → 110 − 40 = 70; hundreds become 200. Hundreds: 200 − 700 negative; borrow 1000 → 1200 − 700 = 500; thousands become 4000. Thousands: 4000 − 1000 = 3000.",
            "explanation_ar": "الآحاد: 1 − 8 سالب؛ استعر 10 → 11 − 8 = 3؛ تصبح العشرات 10. العشرات: 10 − 40 سالب؛ استعر 100 → 110 − 40 = 70؛ تصبح المئات 200. المئات: 200 − 700 سالب؛ استعر 1000 → 1200 − 700 = 500؛ تصبح الآلاف 4000. الآلاف: 4000 − 1000 = 3000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3000 + 500 + 70 + 3 = 3573.",
            "explanation_ar": "3000 + 500 + 70 + 3 = 3573."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3573 + 1748 = 5321. ✓ So 5321 − 1748 = 3573.",
            "explanation_ar": "تحقق: 3573 + 1748 = 5321. ✓ إذن 5321 − 1748 = 3573."
          }
        ],
        "hint_en": "Each time a column goes negative, borrow 10 units from the next higher place value.",
        "hint_ar": "في كل مرة يصبح عمود سالبًا، استعر 10 وحدات من القيمة المكانية الأعلى التالية.",
        "result_en": "5321 − 1748 = 3573",
        "result_ar": "5321 − 1748 = 3573"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A town had 5321 residents. 1748 moved away. How many residents remain?",
            "explanation_ar": "كان في بلدة 5321 ساكنًا. غادر منها 1748. كم ساكنًا تبقّى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a place value chart for 5321. Ones 1 < 8: regroup — tens 2→1, ones 1→11. Tens 1 < 4: regroup — hundreds 3→2, tens 1→11. Hundreds 2 < 7: regroup — thousands 5→4, hundreds 2→12.",
            "explanation_ar": "ارسم جدول القيم المكانية لـ 5321. الآحاد 1 < 8: أعد التجميع — العشرات 2→1، الآحاد 1→11. العشرات 1 < 4: أعد التجميع — المئات 3→2، العشرات 1→11. المئات 2 < 7: أعد التجميع — الآلاف 5→4، المئات 2→12."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After regrouping: ones 11−8=3, tens 11−4=7, hundreds 12−7=5, thousands 4−1=3. Result: 3573.",
            "explanation_ar": "بعد إعادة التجميع: الآحاد 11−8=3، العشرات 11−4=7، المئات 12−7=5، الآلاف 4−1=3. النتيجة: 3573."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "5321 − 1748 = 3573. There are 3573 residents remaining.",
            "explanation_ar": "5321 − 1748 = 3573. تبقّى 3573 ساكنًا."
          }
        ],
        "hint_en": "Regroup in the place value chart wherever the top digit is smaller than the bottom.",
        "hint_ar": "أعد التجميع في جدول القيم المكانية في كل مكان يكون فيه الرقم العلوي أصغر من السفلي.",
        "result_en": "5321 − 1748 = 3573",
        "result_ar": "5321 − 1748 = 3573"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-sub-hard-001",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "8003 − 4567 = ?",
    "question_ar": "8003 − 4567 = ؟",
    "answer": 3436,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "8003 has two internal zeros. To subtract 4567, borrowing must cascade from the thousands column all the way through the zeros in the hundreds and tens columns.",
            "explanation_ar": "8003 يحتوي على صفرين داخليين. لطرح 4567، يجب أن تتسلسل الاستعارة من عمود الآلاف عبر الأصفار في أعمدة المئات والعشرات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ones: 3 < 7. Borrow from tens, but tens = 0. Borrow from hundreds, but hundreds = 0. Borrow from thousands: thousands 8→7, hundreds 0→10. Now borrow from hundreds for tens: hundreds 10→9, tens 0→10. Now borrow from tens for ones: tens 10→9, ones 3→13. Ones: 13−7=6. Tens: 9−6=3. Hundreds: 9−5=4. Thousands: 7−4=3.",
            "explanation_ar": "الآحاد: 3 < 7. استعر من العشرات، لكن العشرات = 0. استعر من المئات، لكن المئات = 0. استعر من الآلاف: الآلاف 8→7، المئات 0→10. الآن استعر من المئات للعشرات: المئات 10→9، العشرات 0→10. الآن استعر من العشرات للآحاد: العشرات 10→9، الآحاد 3→13. الآحاد: 13−7=6. العشرات: 9−6=3. المئات: 9−5=4. الآلاف: 7−4=3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "After cascading borrowing: thousands=3, hundreds=4, tens=3, ones=6.",
            "explanation_ar": "بعد الاستعارة المتسلسلة: الآلاف=3، المئات=4، العشرات=3، الآحاد=6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3436. So 8003 − 4567 = 3436.",
            "explanation_ar": "3436. إذن 8003 − 4567 = 3436."
          }
        ],
        "hint_en": "When you hit a zero, keep borrowing from the next column until you find a non-zero digit.",
        "hint_ar": "عندما تصادف صفرًا، استمر في الاستعارة من العمود التالي حتى تجد رقمًا غير صفري.",
        "result_en": "8003 − 4567 = 3436",
        "result_ar": "8003 − 4567 = 3436"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 8003 into 8000 + 0 + 0 + 3, and 4567 into 4000 + 500 + 60 + 7.",
            "explanation_ar": "قسّم 8003 إلى 8000 + 0 + 0 + 3، و4567 إلى 4000 + 500 + 60 + 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Think of 8003 as 7000 + 900 + 90 + 13 (after full cascade borrow). Now: 13−7=6; 90−60=30; 900−500=400; 7000−4000=3000.",
            "explanation_ar": "فكّر في 8003 كـ 7000 + 900 + 90 + 13 (بعد الاستعارة المتسلسلة الكاملة). الآن: 13−7=6؛ 90−60=30؛ 900−500=400؛ 7000−4000=3000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3000 + 400 + 30 + 6 = 3436.",
            "explanation_ar": "3000 + 400 + 30 + 6 = 3436."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3436 + 4567 = 8003. ✓ So 8003 − 4567 = 3436.",
            "explanation_ar": "تحقق: 3436 + 4567 = 8003. ✓ إذن 8003 − 4567 = 3436."
          }
        ],
        "hint_en": "Rewrite 8003 as 7000 + 900 + 90 + 13 to make the subtraction possible.",
        "hint_ar": "أعد كتابة 8003 كـ 7000 + 900 + 90 + 13 لجعل الطرح ممكنًا.",
        "result_en": "8003 − 4567 = 3436",
        "result_ar": "8003 − 4567 = 3436"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A space station starts with 8003 litres of oxygen. 4567 litres are used on a mission. How much oxygen is left?",
            "explanation_ar": "تبدأ محطة فضائية بـ 8003 لتر من الأكسجين. استُهلك 4567 لترًا في مهمة. كم لترًا تبقّى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart for 8003: Th=8, H=0, T=0, O=3. Ones 3<7: try borrowing from tens — tens=0, so borrow from hundreds — hundreds=0, so borrow from thousands: Th=7, H=10. Then borrow from hundreds: H=9, T=10. Then borrow from tens: T=9, O=13.",
            "explanation_ar": "جدول القيم المكانية لـ 8003: آلاف=8، مئات=0، عشرات=0، آحاد=3. الآحاد 3<7: حاول الاستعارة من العشرات — عشرات=0، لذا استعر من المئات — مئات=0، لذا استعر من الآلاف: آلاف=7، مئات=10. ثم استعر من المئات: مئات=9، عشرات=10. ثم استعر من العشرات: عشرات=9، آحاد=13."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "New chart: Th=7, H=9, T=9, O=13. Subtract: 13−7=6, 9−6=3, 9−5=4, 7−4=3. Result: 3436.",
            "explanation_ar": "الجدول الجديد: آلاف=7، مئات=9، عشرات=9، آحاد=13. اطرح: 13−7=6، 9−6=3، 9−5=4، 7−4=3. النتيجة: 3436."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "8003 − 4567 = 3436. There are 3436 litres of oxygen remaining.",
            "explanation_ar": "8003 − 4567 = 3436. تبقّى 3436 لترًا من الأكسجين."
          }
        ],
        "hint_en": "When you see zeros, you must keep borrowing across them until you reach a non-zero digit.",
        "hint_ar": "عندما ترى الأصفار، يجب أن تستمر في الاستعارة عبرها حتى تصل إلى رقم غير صفري.",
        "result_en": "8003 − 4567 = 3436",
        "result_ar": "8003 − 4567 = 3436"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-sub-hard-002",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "7000 − 3485 = ?",
    "question_ar": "7000 − 3485 = ؟",
    "answer": 3515,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "7000 has three zeros. Every column except thousands needs borrowing, and each borrow must cascade through zeros.",
            "explanation_ar": "7000 يحتوي على ثلاثة أصفار. كل عمود عدا الآلاف يحتاج إلى استعارة، وكل استعارة يجب أن تتسلسل عبر الأصفار."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Borrow cascade from 7000: Th=6, H=9, T=9, O=10. Now subtract: Ones: 10−5=5. Tens: 9−8=1. Hundreds: 9−4=5. Thousands: 6−3=3.",
            "explanation_ar": "تسلسل الاستعارة من 7000: آلاف=6، مئات=9، عشرات=9، آحاد=10. الآن اطرح: الآحاد: 10−5=5. العشرات: 9−8=1. المئات: 9−4=5. الآلاف: 6−3=3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "After the full cascade: thousands=3, hundreds=5, tens=1, ones=5.",
            "explanation_ar": "بعد التسلسل الكامل: الآلاف=3، المئات=5، العشرات=1، الآحاد=5."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3515. So 7000 − 3485 = 3515.",
            "explanation_ar": "3515. إذن 7000 − 3485 = 3515."
          }
        ],
        "hint_en": "Think of 7000 as 6999 + 1 to make borrowing easier, or borrow across all three zeros at once.",
        "hint_ar": "فكّر في 7000 كـ 6999 + 1 لتسهيل الاستعارة، أو استعر عبر الأصفار الثلاثة دفعةً واحدة.",
        "result_en": "7000 − 3485 = 3515",
        "result_ar": "7000 − 3485 = 3515"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "7000 can be rewritten as 6000 + 900 + 90 + 10 after cascading the borrowing. Split 3485 into 3000 + 400 + 80 + 5.",
            "explanation_ar": "يمكن إعادة كتابة 7000 كـ 6000 + 900 + 90 + 10 بعد تسلسل الاستعارة. قسّم 3485 إلى 3000 + 400 + 80 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "10 − 5 = 5. 90 − 80 = 10. 900 − 400 = 500. 6000 − 3000 = 3000.",
            "explanation_ar": "10 − 5 = 5. 90 − 80 = 10. 900 − 400 = 500. 6000 − 3000 = 3000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3000 + 500 + 10 + 5 = 3515.",
            "explanation_ar": "3000 + 500 + 10 + 5 = 3515."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3515 + 3485 = 7000. ✓ So 7000 − 3485 = 3515.",
            "explanation_ar": "تحقق: 3515 + 3485 = 7000. ✓ إذن 7000 − 3485 = 3515."
          }
        ],
        "hint_en": "Rewrite 7000 as 6000 + 999 + 1 to enable column-by-column subtraction.",
        "hint_ar": "أعد كتابة 7000 كـ 6000 + 999 + 1 لتمكين الطرح عمودًا بعمود.",
        "result_en": "7000 − 3485 = 3515",
        "result_ar": "7000 − 3485 = 3515"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A charity had a goal of 7000 donations. So far, 3485 have been collected. How many more are needed to reach the goal?",
            "explanation_ar": "كان هدف جمعية خيرية جمع 7000 تبرع. حُصل حتى الآن على 3485. كم تبرعًا آخر يلزم للوصول إلى الهدف؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart: Th=7, H=0, T=0, O=0. Since O=0 < 5, borrow across all three zeros: Th becomes 6, H becomes 9, T becomes 9, O becomes 10.",
            "explanation_ar": "جدول القيم المكانية: آلاف=7، مئات=0، عشرات=0، آحاد=0. بما أن آحاد=0 < 5، استعر عبر الأصفار الثلاثة: تصبح الآلاف 6، المئات 9، العشرات 9، الآحاد 10."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "New values: Th=6, H=9, T=9, O=10. Subtract: 10−5=5, 9−8=1, 9−4=5, 6−3=3. Result: 3515.",
            "explanation_ar": "القيم الجديدة: آلاف=6، مئات=9، عشرات=9، آحاد=10. اطرح: 10−5=5، 9−8=1، 9−4=5، 6−3=3. النتيجة: 3515."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "7000 − 3485 = 3515. The charity needs 3515 more donations.",
            "explanation_ar": "7000 − 3485 = 3515. تحتاج الجمعية إلى 3515 تبرعًا إضافيًا."
          }
        ],
        "hint_en": "7000 has three zeros — borrow across all of them at once to get 6, 9, 9, 10.",
        "hint_ar": "7000 يحتوي على ثلاثة أصفار — استعر عبرها جميعًا مرة واحدة للحصول على 6، 9، 9، 10.",
        "result_en": "7000 − 3485 = 3515",
        "result_ar": "7000 − 3485 = 3515"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-sub-hard-003",
    "grade": 4,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "6005 − 2738 = ?",
    "question_ar": "6005 − 2738 = ؟",
    "answer": 3267,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "6005 contains two internal zeros in the hundreds and tens columns. Borrowing for the ones column must cascade through both zeros to reach the thousands.",
            "explanation_ar": "6005 يحتوي على صفرين داخليين في أعمدة المئات والعشرات. يجب أن تتسلسل استعارة عمود الآحاد عبر كلا الصفرين للوصول إلى الآلاف."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ones: 5 < 8. Borrow cascade: Th=5, H=9, T=10, O=5. Then borrow from T for O: T=9, O=15. Ones: 15−8=7. Tens: 9−3=6. Hundreds: 9−7=2 (wait, subtrahend hundreds = 7). 9−7=2. Thousands: 5−2=3.",
            "explanation_ar": "الآحاد: 5 < 8. تسلسل الاستعارة: آلاف=5، مئات=9، عشرات=10، آحاد=5. ثم استعر من العشرات للآحاد: عشرات=9، آحاد=15. الآحاد: 15−8=7. العشرات: 9−3=6. المئات: 9−7=2. الآلاف: 5−2=3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "After cascade borrowing: thousands=3, hundreds=2, tens=6, ones=7.",
            "explanation_ar": "بعد الاستعارة المتسلسلة: الآلاف=3، المئات=2، العشرات=6، الآحاد=7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3267. So 6005 − 2738 = 3267.",
            "explanation_ar": "3267. إذن 6005 − 2738 = 3267."
          }
        ],
        "hint_en": "With zeros in the hundreds and tens, you must borrow from thousands first, then redistribute through each zero.",
        "hint_ar": "مع وجود أصفار في المئات والعشرات، يجب عليك الاستعارة من الآلاف أولًا، ثم إعادة التوزيع عبر كل صفر.",
        "result_en": "6005 − 2738 = 3267",
        "result_ar": "6005 − 2738 = 3267"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite 6005 after full cascade borrow as 5000 + 900 + 90 + 15. Split 2738 into 2000 + 700 + 30 + 8.",
            "explanation_ar": "أعد كتابة 6005 بعد الاستعارة المتسلسلة الكاملة كـ 5000 + 900 + 90 + 15. قسّم 2738 إلى 2000 + 700 + 30 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "15 − 8 = 7. 90 − 30 = 60. 900 − 700 = 200. 5000 − 2000 = 3000.",
            "explanation_ar": "15 − 8 = 7. 90 − 30 = 60. 900 − 700 = 200. 5000 − 2000 = 3000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3000 + 200 + 60 + 7 = 3267.",
            "explanation_ar": "3000 + 200 + 60 + 7 = 3267."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3267 + 2738 = 6005. ✓ So 6005 − 2738 = 3267.",
            "explanation_ar": "تحقق: 3267 + 2738 = 6005. ✓ إذن 6005 − 2738 = 3267."
          }
        ],
        "hint_en": "Rewrite 6005 as 5000 + 900 + 90 + 15 to allow clean column subtraction.",
        "hint_ar": "أعد كتابة 6005 كـ 5000 + 900 + 90 + 15 للسماح بطرح عمودي سلس.",
        "result_en": "6005 − 2738 = 3267",
        "result_ar": "6005 − 2738 = 3267"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A city's water tank holds 6005 gallons. After a drought, 2738 gallons were used. How many gallons remain?",
            "explanation_ar": "تتسع خزانة مياه المدينة لـ 6005 غالون. بعد جفاف، استُهلك 2738 غالون. كم غالون تبقّى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart for 6005: Th=6, H=0, T=0, O=5. O=5 < 8: borrow from Th through both zeros: Th=5, H=9, T=9, O=15.",
            "explanation_ar": "جدول القيم المكانية لـ 6005: آلاف=6، مئات=0، عشرات=0، آحاد=5. الآحاد=5 < 8: استعر من الآلاف عبر كلا الصفرين: آلاف=5، مئات=9، عشرات=9، آحاد=15."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "New chart: Th=5, H=9, T=9, O=15. Subtract: 15−8=7, 9−3=6, 9−7=2, 5−2=3. Result: 3267.",
            "explanation_ar": "الجدول الجديد: آلاف=5، مئات=9، عشرات=9، آحاد=15. اطرح: 15−8=7، 9−3=6، 9−7=2، 5−2=3. النتيجة: 3267."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "6005 − 2738 = 3267. There are 3267 gallons of water left in the tank.",
            "explanation_ar": "6005 − 2738 = 3267. تبقّى في الخزانة 3267 غالون من الماء."
          }
        ],
        "hint_en": "The two zeros in 6005 turn into 9 and 9 (and ones become 15) when you borrow from the thousands.",
        "hint_ar": "يتحوّل الصفران في 6005 إلى 9 و9 (وتصبح الآحاد 15) عند الاستعارة من الآلاف.",
        "result_en": "6005 − 2738 = 3267",
        "result_ar": "6005 − 2738 = 3267"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-sub-hard-003",
      "upper_grade_equivalent": "g5-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g4-common-mul-easy-001",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "30 × 20 = ?",
    "question_ar": "30 × 20 = ؟",
    "answer": 600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both 30 and 20 are multiples of 10. We can strip the zeros and multiply the core digits first.",
            "explanation_ar": "كلٌّ من 30 و20 من مضاعفات 10. يمكننا حذف الأصفار وضرب الأرقام الأساسية أولاً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Strip one zero from each: 3 and 2. Multiply the core digits: 3 × 2 = 6.",
            "explanation_ar": "احذف صفراً من كل منهما: 3 و2. اضرب الأرقام الأساسية: 3 × 2 = 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Count the total zeros stripped: 1 zero from 30 and 1 zero from 20 = 2 zeros total. Append 2 zeros to 6.",
            "explanation_ar": "عدّ مجموع الأصفار المحذوفة: صفر من 30 وصفر من 20 = صفران. أضف صفرين إلى 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "6 followed by two zeros = 600. So 30 × 20 = 600.",
            "explanation_ar": "6 يليها صفران = 600. إذاً 30 × 20 = 600."
          }
        ],
        "hint_en": "Strip the zeros, multiply 3 × 2, then add both zeros back.",
        "hint_ar": "احذف الأصفار، اضرب 3 × 2، ثم أضف الأصفار.",
        "result_en": "30 × 20 = 600",
        "result_ar": "30 × 20 = 600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write 30 as 3 × 10. Now the problem becomes (3 × 10) × 20.",
            "explanation_ar": "اكتب 30 على شكل 3 × 10. تصبح المسألة (3 × 10) × 20."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Group the tens together: 3 × (10 × 20) = 3 × 200 = 600.",
            "explanation_ar": "اجمع الآحاد من عشرات معاً: 3 × (10 × 20) = 3 × 200 = 600."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3 × 200 = 600. No further addition needed.",
            "explanation_ar": "3 × 200 = 600. لا حاجة لجمع إضافي."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 30 groups of 20 is the same as 600 individual items. 30 × 20 = 600.",
            "explanation_ar": "تحقق: 30 مجموعة من 20 تساوي 600 عنصراً. 30 × 20 = 600."
          }
        ],
        "hint_en": "Break 30 into 3 × 10, then multiply 3 × 200.",
        "hint_ar": "قسّم 30 إلى 3 × 10، ثم اضرب 3 × 200.",
        "result_en": "30 × 20 = 600",
        "result_ar": "30 × 20 = 600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a parking lot with 30 rows and 20 spaces in each row. How many spaces are there in total?",
            "explanation_ar": "تخيّل موقفاً للسيارات فيه 30 صفاً وفي كل صف 20 مكاناً. كم عدد الأماكن الإجمالية؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 30 units wide and 20 units tall. Its area represents all the parking spaces.",
            "explanation_ar": "ارسم مستطيلاً عرضه 30 وحدة وارتفاعه 20 وحدة. مساحته تمثّل جميع الأماكن."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The rectangle has width 30 and height 20. Area = 30 × 20.",
            "explanation_ar": "عرض المستطيل 30 وارتفاعه 20. المساحة = 30 × 20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Area = 30 × 20 = 600 square units — exactly 600 parking spaces. 30 × 20 = 600.",
            "explanation_ar": "المساحة = 30 × 20 = 600 وحدة مربعة — أي 600 مكان للسيارات. 30 × 20 = 600."
          }
        ],
        "hint_en": "Picture a 30-by-20 rectangle and count its total squares.",
        "hint_ar": "تخيّل مستطيلاً 30 × 20 وعدّ مربعاته.",
        "result_en": "30 × 20 = 600",
        "result_ar": "30 × 20 = 600"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-mul-easy-002",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "40 × 15 = ?",
    "question_ar": "40 × 15 = ؟",
    "answer": 600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "40 is a multiple of 10. We can use the zeros trick: 40 × 15 = 4 × 10 × 15.",
            "explanation_ar": "40 من مضاعفات 10. يمكننا استخدام خدعة الأصفار: 40 × 15 = 4 × 10 × 15."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "First compute 4 × 15 = 60.",
            "explanation_ar": "احسب أولاً 4 × 15 = 60."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now multiply by the 10 that was stripped from 40: 60 × 10 = 600.",
            "explanation_ar": "الآن اضرب في الـ10 التي كانت في 40: 60 × 10 = 600."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "4 × 15 = 60, then × 10 gives 600. So 40 × 15 = 600.",
            "explanation_ar": "4 × 15 = 60، ثم × 10 يعطي 600. إذاً 40 × 15 = 600."
          }
        ],
        "hint_en": "Think of 40 as 4 × 10, compute 4 × 15 = 60, then multiply by 10.",
        "hint_ar": "فكّر في 40 كـ 4 × 10، احسب 4 × 15 = 60، ثم اضرب في 10.",
        "result_en": "40 × 15 = 600",
        "result_ar": "40 × 15 = 600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 15 into 10 + 5. Now compute 40 × (10 + 5).",
            "explanation_ar": "قسّم 15 إلى 10 + 5. احسب الآن 40 × (10 + 5)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "40 × 10 = 400 and 40 × 5 = 200.",
            "explanation_ar": "40 × 10 = 400 و40 × 5 = 200."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two partial products: 400 + 200 = 600.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 400 + 200 = 600."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "400 + 200 = 600. So 40 × 15 = 600.",
            "explanation_ar": "400 + 200 = 600. إذاً 40 × 15 = 600."
          }
        ],
        "hint_en": "Split 15 into 10 + 5, multiply 40 by each part, then add.",
        "hint_ar": "قسّم 15 إلى 10 + 5، اضرب 40 في كل جزء، ثم اجمع.",
        "result_en": "40 × 15 = 600",
        "result_ar": "40 × 15 = 600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 40 students each collecting 15 stickers. How many stickers altogether?",
            "explanation_ar": "تخيّل 40 طالباً يجمع كل منهم 15 ملصقاً. كم عدد الملصقات الإجمالية؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 40 wide and 15 tall. Split the 15 side into 10 and 5, making two smaller rectangles.",
            "explanation_ar": "ارسم مستطيلاً عرضه 40 وارتفاعه 15. قسّم ضلع الـ15 إلى 10 و5، ما يعطيك مستطيلين أصغر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top rectangle: 40 × 10 = 400. Bottom rectangle: 40 × 5 = 200.",
            "explanation_ar": "المستطيل العلوي: 40 × 10 = 400. المستطيل السفلي: 40 × 5 = 200."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total area = 400 + 200 = 600 stickers. 40 × 15 = 600.",
            "explanation_ar": "إجمالي المساحة = 400 + 200 = 600 ملصق. 40 × 15 = 600."
          }
        ],
        "hint_en": "Draw a 40 × 15 rectangle, split the 15 into 10 + 5.",
        "hint_ar": "ارسم مستطيل 40 × 15، قسّم الـ15 إلى 10 + 5.",
        "result_en": "40 × 15 = 600",
        "result_ar": "40 × 15 = 600"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-mul-easy-003",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "50 × 18 = ?",
    "question_ar": "50 × 18 = ؟",
    "answer": 900,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "50 is a multiple of 10. Use the zeros trick: 50 × 18 = 5 × 10 × 18.",
            "explanation_ar": "50 من مضاعفات 10. استخدم خدعة الأصفار: 50 × 18 = 5 × 10 × 18."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 5 × 18 = 90.",
            "explanation_ar": "احسب 5 × 18 = 90."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply by the 10 from 50: 90 × 10 = 900.",
            "explanation_ar": "اضرب في الـ10 من 50: 90 × 10 = 900."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "5 × 18 = 90, then × 10 gives 900. So 50 × 18 = 900.",
            "explanation_ar": "5 × 18 = 90، ثم × 10 يعطي 900. إذاً 50 × 18 = 900."
          }
        ],
        "hint_en": "Think of 50 as 5 × 10. Compute 5 × 18 = 90, then × 10 = 900.",
        "hint_ar": "فكّر في 50 كـ 5 × 10. احسب 5 × 18 = 90، ثم × 10 = 900.",
        "result_en": "50 × 18 = 900",
        "result_ar": "50 × 18 = 900"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 18 into 10 + 8. Now compute 50 × (10 + 8).",
            "explanation_ar": "قسّم 18 إلى 10 + 8. احسب الآن 50 × (10 + 8)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "50 × 10 = 500 and 50 × 8 = 400.",
            "explanation_ar": "50 × 10 = 500 و50 × 8 = 400."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "500 + 400 = 900.",
            "explanation_ar": "500 + 400 = 900."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "500 + 400 = 900. So 50 × 18 = 900.",
            "explanation_ar": "500 + 400 = 900. إذاً 50 × 18 = 900."
          }
        ],
        "hint_en": "Split 18 into 10 + 8, multiply 50 by each, then add 500 + 400.",
        "hint_ar": "قسّم 18 إلى 10 + 8، اضرب 50 في كل منهما، ثم اجمع 500 + 400.",
        "result_en": "50 × 18 = 900",
        "result_ar": "50 × 18 = 900"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 50 bookshelves, each holding 18 books. How many books in total?",
            "explanation_ar": "تخيّل 50 رفّاً للكتب، كل رف يحمل 18 كتاباً. كم عدد الكتب الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 50 wide and 18 tall. Split the 18 side into 10 and 8.",
            "explanation_ar": "ارسم مستطيلاً عرضه 50 وارتفاعه 18. قسّم ضلع الـ18 إلى 10 و8."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top rectangle: 50 × 10 = 500. Bottom rectangle: 50 × 8 = 400.",
            "explanation_ar": "المستطيل العلوي: 50 × 10 = 500. المستطيل السفلي: 50 × 8 = 400."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total area = 500 + 400 = 900 books. 50 × 18 = 900.",
            "explanation_ar": "إجمالي المساحة = 500 + 400 = 900 كتاب. 50 × 18 = 900."
          }
        ],
        "hint_en": "Draw a 50 × 18 rectangle, split the 18 into 10 + 8.",
        "hint_ar": "ارسم مستطيل 50 × 18، قسّم الـ18 إلى 10 + 8.",
        "result_en": "50 × 18 = 900",
        "result_ar": "50 × 18 = 900"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-mul-medium-001",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "23 × 12 = ?",
    "question_ar": "23 × 12 = ؟",
    "answer": 276,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use the FOIL/cross-multiplication mental trick. Write 23 = 20 + 3 and 12 = 10 + 2.",
            "explanation_ar": "استخدم خدعة الضرب التقاطعي الذهني. اكتب 23 = 20 + 3 و12 = 10 + 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Four partial products: 20×10 = 200, 20×2 = 40, 3×10 = 30, 3×2 = 6.",
            "explanation_ar": "أربعة حواصل جزئية: 20×10 = 200، 20×2 = 40، 3×10 = 30، 3×2 = 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add all four parts: 200 + 40 + 30 + 6 = 276.",
            "explanation_ar": "اجمع الأجزاء الأربعة: 200 + 40 + 30 + 6 = 276."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "200 + 40 = 240, then 240 + 30 = 270, then 270 + 6 = 276. So 23 × 12 = 276.",
            "explanation_ar": "200 + 40 = 240، ثم 240 + 30 = 270، ثم 270 + 6 = 276. إذاً 23 × 12 = 276."
          }
        ],
        "hint_en": "Split both numbers: (20+3)×(10+2) = 200+40+30+6.",
        "hint_ar": "قسّم الرقمين: (20+3)×(10+2) = 200+40+30+6.",
        "result_en": "23 × 12 = 276",
        "result_ar": "23 × 12 = 276"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 12 into 10 + 2. Compute 23 × (10 + 2).",
            "explanation_ar": "قسّم 12 إلى 10 + 2. احسب 23 × (10 + 2)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "23 × 10 = 230 and 23 × 2 = 46.",
            "explanation_ar": "23 × 10 = 230 و23 × 2 = 46."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "230 + 46 = 276.",
            "explanation_ar": "230 + 46 = 276."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "230 + 46: add the tens first (230 + 40 = 270), then units (270 + 6 = 276). So 23 × 12 = 276.",
            "explanation_ar": "230 + 46: اجمع العشرات أولاً (230 + 40 = 270)، ثم الآحاد (270 + 6 = 276). إذاً 23 × 12 = 276."
          }
        ],
        "hint_en": "Split 12 into 10 + 2, then add 23×10 and 23×2.",
        "hint_ar": "قسّم 12 إلى 10 + 2، ثم اجمع 23×10 و23×2.",
        "result_en": "23 × 12 = 276",
        "result_ar": "23 × 12 = 276"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a garden with 23 rows of plants and 12 plants in each row. How many plants are there?",
            "explanation_ar": "تخيّل حديقة فيها 23 صفاً من النباتات و12 نبتة في كل صف. كم عدد النباتات؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 23 wide and 12 tall. Split the width at 20|3 and the height at 10|2 to get four sub-rectangles.",
            "explanation_ar": "ارسم مستطيلاً عرضه 23 وارتفاعه 12. قسّم العرض عند 20|3 والارتفاع عند 10|2 للحصول على أربعة مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top-left 20×10=200, top-right 3×10=30, bottom-left 20×2=40, bottom-right 3×2=6.",
            "explanation_ar": "أعلى اليسار 20×10=200، أعلى اليمين 3×10=30، أسفل اليسار 20×2=40، أسفل اليمين 3×2=6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 200 + 30 + 40 + 6 = 276 plants. 23 × 12 = 276.",
            "explanation_ar": "المجموع = 200 + 30 + 40 + 6 = 276 نبتة. 23 × 12 = 276."
          }
        ],
        "hint_en": "Draw a 23×12 area model with a split at 20|3 and 10|2.",
        "hint_ar": "ارسم نموذج مساحة 23×12 مع تقسيم عند 20|3 و10|2.",
        "result_en": "23 × 12 = 276",
        "result_ar": "23 × 12 = 276"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-mul-medium-002",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "34 × 11 = ?",
    "question_ar": "34 × 11 = ؟",
    "answer": 374,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Multiplying by 11 has a quick Vedic trick: write the outer digits and insert their sum in the middle. For 34: outer digits are 3 and 4, middle digit is 3+4=7.",
            "explanation_ar": "للضرب في 11 خدعة فيدية سريعة: اكتب الرقمين الخارجيين وضع مجموعهما في الوسط. لـ34: الرقمان الخارجيان 3 و4، والرقم الأوسط 3+4=7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Sum of digits of 34: 3 + 4 = 7. No carry needed since 7 < 10.",
            "explanation_ar": "مجموع أرقام 34: 3 + 4 = 7. لا حمل لأن 7 < 10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Write 3 on the left, 7 in the middle, 4 on the right → 374.",
            "explanation_ar": "اكتب 3 على اليسار، 7 في الوسط، 4 على اليمين → 374."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Reading left to right: 3, 7, 4 = 374. So 34 × 11 = 374.",
            "explanation_ar": "نقرأ من اليسار إلى اليمين: 3، 7، 4 = 374. إذاً 34 × 11 = 374."
          }
        ],
        "hint_en": "For ×11: keep the outer digits of 34 and insert 3+4=7 between them.",
        "hint_ar": "للضرب في 11: احتفظ بالأرقام الخارجية لـ34 وضع 3+4=7 بينهما.",
        "result_en": "34 × 11 = 374",
        "result_ar": "34 × 11 = 374"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 11 into 10 + 1. Compute 34 × (10 + 1).",
            "explanation_ar": "قسّم 11 إلى 10 + 1. احسب 34 × (10 + 1)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "34 × 10 = 340 and 34 × 1 = 34.",
            "explanation_ar": "34 × 10 = 340 و34 × 1 = 34."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "340 + 34 = 374.",
            "explanation_ar": "340 + 34 = 374."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "340 + 34: 340 + 30 = 370, then 370 + 4 = 374. So 34 × 11 = 374.",
            "explanation_ar": "340 + 34: 340 + 30 = 370، ثم 370 + 4 = 374. إذاً 34 × 11 = 374."
          }
        ],
        "hint_en": "Split 11 into 10 + 1. 34×10=340, 34×1=34; add to get 374.",
        "hint_ar": "قسّم 11 إلى 10 + 1. 34×10=340، 34×1=34؛ اجمعهما للحصول على 374.",
        "result_en": "34 × 11 = 374",
        "result_ar": "34 × 11 = 374"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 34 teams each scoring 11 points in a game. What is the total score?",
            "explanation_ar": "تخيّل 34 فريقاً يسجّل كل منهم 11 نقطة في مباراة. ما هو المجموع الكلي للنقاط؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 34 wide and 11 tall. Split the width at 30|4 and the height at 10|1 into four sub-rectangles.",
            "explanation_ar": "ارسم مستطيلاً عرضه 34 وارتفاعه 11. قسّم العرض عند 30|4 والارتفاع عند 10|1 إلى أربعة مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top-left 30×10=300, top-right 4×10=40, bottom-left 30×1=30, bottom-right 4×1=4.",
            "explanation_ar": "أعلى اليسار 30×10=300، أعلى اليمين 4×10=40، أسفل اليسار 30×1=30، أسفل اليمين 4×1=4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 300 + 40 + 30 + 4 = 374 points. 34 × 11 = 374.",
            "explanation_ar": "المجموع = 300 + 40 + 30 + 4 = 374 نقطة. 34 × 11 = 374."
          }
        ],
        "hint_en": "Draw a 34×11 area model split at 30|4 and 10|1.",
        "hint_ar": "ارسم نموذج مساحة 34×11 مقسّماً عند 30|4 و10|1.",
        "result_en": "34 × 11 = 374",
        "result_ar": "34 × 11 = 374"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-mul-medium-003",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "45 × 14 = ?",
    "question_ar": "45 × 14 = ؟",
    "answer": 630,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use FOIL-style cross-multiplication. Write 45 = 40 + 5 and 14 = 10 + 4.",
            "explanation_ar": "استخدم الضرب التقاطعي بأسلوب FOIL. اكتب 45 = 40 + 5 و14 = 10 + 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Four partial products: 40×10 = 400, 40×4 = 160, 5×10 = 50, 5×4 = 20.",
            "explanation_ar": "أربعة حواصل جزئية: 40×10 = 400، 40×4 = 160، 5×10 = 50، 5×4 = 20."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add all four: 400 + 160 + 50 + 20 = 630.",
            "explanation_ar": "اجمع الأربعة: 400 + 160 + 50 + 20 = 630."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "400 + 160 = 560, then 560 + 50 = 610, then 610 + 20 = 630. So 45 × 14 = 630.",
            "explanation_ar": "400 + 160 = 560، ثم 560 + 50 = 610، ثم 610 + 20 = 630. إذاً 45 × 14 = 630."
          }
        ],
        "hint_en": "Split (40+5)×(10+4) = 400+160+50+20.",
        "hint_ar": "قسّم (40+5)×(10+4) = 400+160+50+20.",
        "result_en": "45 × 14 = 630",
        "result_ar": "45 × 14 = 630"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 14 into 10 + 4. Compute 45 × (10 + 4).",
            "explanation_ar": "قسّم 14 إلى 10 + 4. احسب 45 × (10 + 4)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "45 × 10 = 450 and 45 × 4 = 180.",
            "explanation_ar": "45 × 10 = 450 و45 × 4 = 180."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "450 + 180 = 630.",
            "explanation_ar": "450 + 180 = 630."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "450 + 180: 450 + 100 = 550, then 550 + 80 = 630. So 45 × 14 = 630.",
            "explanation_ar": "450 + 180: 450 + 100 = 550، ثم 550 + 80 = 630. إذاً 45 × 14 = 630."
          }
        ],
        "hint_en": "Split 14 into 10 + 4, then add 45×10=450 and 45×4=180.",
        "hint_ar": "قسّم 14 إلى 10 + 4، ثم اجمع 45×10=450 و45×4=180.",
        "result_en": "45 × 14 = 630",
        "result_ar": "45 × 14 = 630"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 45 classrooms each with 14 desks. How many desks are there in the whole school?",
            "explanation_ar": "تخيّل 45 فصلاً دراسياً في كل منهم 14 مقعداً. كم عدد المقاعد في المدرسة كلها؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 45 wide and 14 tall. Split the width at 40|5 and the height at 10|4 into four sub-rectangles.",
            "explanation_ar": "ارسم مستطيلاً عرضه 45 وارتفاعه 14. قسّم العرض عند 40|5 والارتفاع عند 10|4 إلى أربعة مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top-left 40×10=400, top-right 5×10=50, bottom-left 40×4=160, bottom-right 5×4=20.",
            "explanation_ar": "أعلى اليسار 40×10=400، أعلى اليمين 5×10=50، أسفل اليسار 40×4=160، أسفل اليمين 5×4=20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 400 + 50 + 160 + 20 = 630 desks. 45 × 14 = 630.",
            "explanation_ar": "المجموع = 400 + 50 + 160 + 20 = 630 مقعداً. 45 × 14 = 630."
          }
        ],
        "hint_en": "Draw a 45×14 area model split at 40|5 and 10|4.",
        "hint_ar": "ارسم نموذج مساحة 45×14 مقسّماً عند 40|5 و10|4.",
        "result_en": "45 × 14 = 630",
        "result_ar": "45 × 14 = 630"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-mul-hard-001",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "27 × 18 = ?",
    "question_ar": "27 × 18 = ؟",
    "answer": 486,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use FOIL-style cross-multiplication. Write 27 = 20 + 7 and 18 = 10 + 8.",
            "explanation_ar": "استخدم الضرب التقاطعي بأسلوب FOIL. اكتب 27 = 20 + 7 و18 = 10 + 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Four partial products: 20×10 = 200, 20×8 = 160, 7×10 = 70, 7×8 = 56.",
            "explanation_ar": "أربعة حواصل جزئية: 20×10 = 200، 20×8 = 160، 7×10 = 70، 7×8 = 56."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add all four: 200 + 160 + 70 + 56 = 486.",
            "explanation_ar": "اجمع الأربعة: 200 + 160 + 70 + 56 = 486."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "200 + 160 = 360, then 360 + 70 = 430, then 430 + 56 = 486. So 27 × 18 = 486.",
            "explanation_ar": "200 + 160 = 360، ثم 360 + 70 = 430، ثم 430 + 56 = 486. إذاً 27 × 18 = 486."
          }
        ],
        "hint_en": "Split (20+7)×(10+8) = 200+160+70+56.",
        "hint_ar": "قسّم (20+7)×(10+8) = 200+160+70+56.",
        "result_en": "27 × 18 = 486",
        "result_ar": "27 × 18 = 486"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 18 into 10 + 8. Compute 27 × (10 + 8).",
            "explanation_ar": "قسّم 18 إلى 10 + 8. احسب 27 × (10 + 8)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "27 × 10 = 270 and 27 × 8 = 216.",
            "explanation_ar": "27 × 10 = 270 و27 × 8 = 216."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "270 + 216 = 486.",
            "explanation_ar": "270 + 216 = 486."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "270 + 216: 270 + 200 = 470, then 470 + 16 = 486. So 27 × 18 = 486.",
            "explanation_ar": "270 + 216: 270 + 200 = 470، ثم 470 + 16 = 486. إذاً 27 × 18 = 486."
          }
        ],
        "hint_en": "Split 18 into 10 + 8, then add 27×10=270 and 27×8=216.",
        "hint_ar": "قسّم 18 إلى 10 + 8، ثم اجمع 27×10=270 و27×8=216.",
        "result_en": "27 × 18 = 486",
        "result_ar": "27 × 18 = 486"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a tile floor with 27 columns and 18 rows of tiles. How many tiles cover the floor?",
            "explanation_ar": "تخيّل أرضية من البلاط بها 27 عموداً و18 صفاً من البلاطات. كم عدد البلاطات التي تغطي الأرضية؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 27 wide and 18 tall. Split the width at 20|7 and the height at 10|8 to form four sub-rectangles.",
            "explanation_ar": "ارسم مستطيلاً عرضه 27 وارتفاعه 18. قسّم العرض عند 20|7 والارتفاع عند 10|8 لتشكيل أربعة مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top-left 20×10=200, top-right 7×10=70, bottom-left 20×8=160, bottom-right 7×8=56.",
            "explanation_ar": "أعلى اليسار 20×10=200، أعلى اليمين 7×10=70، أسفل اليسار 20×8=160، أسفل اليمين 7×8=56."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 200 + 70 + 160 + 56 = 486 tiles. 27 × 18 = 486.",
            "explanation_ar": "المجموع = 200 + 70 + 160 + 56 = 486 بلاطة. 27 × 18 = 486."
          }
        ],
        "hint_en": "Draw a 27×18 area model split at 20|7 and 10|8.",
        "hint_ar": "ارسم نموذج مساحة 27×18 مقسّماً عند 20|7 و10|8.",
        "result_en": "27 × 18 = 486",
        "result_ar": "27 × 18 = 486"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-mul-hard-002",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "36 × 24 = ?",
    "question_ar": "36 × 24 = ؟",
    "answer": 864,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use FOIL-style cross-multiplication. Write 36 = 30 + 6 and 24 = 20 + 4.",
            "explanation_ar": "استخدم الضرب التقاطعي بأسلوب FOIL. اكتب 36 = 30 + 6 و24 = 20 + 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Four partial products: 30×20 = 600, 30×4 = 120, 6×20 = 120, 6×4 = 24.",
            "explanation_ar": "أربعة حواصل جزئية: 30×20 = 600، 30×4 = 120، 6×20 = 120، 6×4 = 24."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add all four: 600 + 120 + 120 + 24 = 864.",
            "explanation_ar": "اجمع الأربعة: 600 + 120 + 120 + 24 = 864."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "600 + 120 = 720, then 720 + 120 = 840, then 840 + 24 = 864. So 36 × 24 = 864.",
            "explanation_ar": "600 + 120 = 720، ثم 720 + 120 = 840، ثم 840 + 24 = 864. إذاً 36 × 24 = 864."
          }
        ],
        "hint_en": "Split (30+6)×(20+4) = 600+120+120+24.",
        "hint_ar": "قسّم (30+6)×(20+4) = 600+120+120+24.",
        "result_en": "36 × 24 = 864",
        "result_ar": "36 × 24 = 864"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 24 into 20 + 4. Compute 36 × (20 + 4).",
            "explanation_ar": "قسّم 24 إلى 20 + 4. احسب 36 × (20 + 4)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "36 × 20 = 720 and 36 × 4 = 144.",
            "explanation_ar": "36 × 20 = 720 و36 × 4 = 144."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "720 + 144 = 864.",
            "explanation_ar": "720 + 144 = 864."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "720 + 144: 720 + 100 = 820, then 820 + 44 = 864. So 36 × 24 = 864.",
            "explanation_ar": "720 + 144: 720 + 100 = 820، ثم 820 + 44 = 864. إذاً 36 × 24 = 864."
          }
        ],
        "hint_en": "Split 24 into 20 + 4, then add 36×20=720 and 36×4=144.",
        "hint_ar": "قسّم 24 إلى 20 + 4، ثم اجمع 36×20=720 و36×4=144.",
        "result_en": "36 × 24 = 864",
        "result_ar": "36 × 24 = 864"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a solar panel array with 36 panels across and 24 panels tall. How many panels are there in total?",
            "explanation_ar": "تخيّل صفيفة ألواح شمسية فيها 36 لوحاً أفقياً و24 لوحاً عمودياً. كم عدد الألواح الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 36 wide and 24 tall. Split the width at 30|6 and the height at 20|4 into four sub-rectangles.",
            "explanation_ar": "ارسم مستطيلاً عرضه 36 وارتفاعه 24. قسّم العرض عند 30|6 والارتفاع عند 20|4 إلى أربعة مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top-left 30×20=600, top-right 6×20=120, bottom-left 30×4=120, bottom-right 6×4=24.",
            "explanation_ar": "أعلى اليسار 30×20=600، أعلى اليمين 6×20=120، أسفل اليسار 30×4=120، أسفل اليمين 6×4=24."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 600 + 120 + 120 + 24 = 864 panels. 36 × 24 = 864.",
            "explanation_ar": "المجموع = 600 + 120 + 120 + 24 = 864 لوحاً. 36 × 24 = 864."
          }
        ],
        "hint_en": "Draw a 36×24 area model split at 30|6 and 20|4.",
        "hint_ar": "ارسم نموذج مساحة 36×24 مقسّماً عند 30|6 و20|4.",
        "result_en": "36 × 24 = 864",
        "result_ar": "36 × 24 = 864"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-mul-hard-003",
    "grade": 4,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "32 × 25 = ?",
    "question_ar": "32 × 25 = ؟",
    "answer": 800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use FOIL-style cross-multiplication. Write 32 = 30 + 2 and 25 = 20 + 5.",
            "explanation_ar": "استخدم الضرب التقاطعي بأسلوب FOIL. اكتب 32 = 30 + 2 و25 = 20 + 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Four partial products: 30×20 = 600, 30×5 = 150, 2×20 = 40, 2×5 = 10.",
            "explanation_ar": "أربعة حواصل جزئية: 30×20 = 600، 30×5 = 150، 2×20 = 40، 2×5 = 10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add all four: 600 + 150 + 40 + 10 = 800.",
            "explanation_ar": "اجمع الأربعة: 600 + 150 + 40 + 10 = 800."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "600 + 150 = 750, then 750 + 40 = 790, then 790 + 10 = 800. So 32 × 25 = 800.",
            "explanation_ar": "600 + 150 = 750، ثم 750 + 40 = 790، ثم 790 + 10 = 800. إذاً 32 × 25 = 800."
          }
        ],
        "hint_en": "Split (30+2)×(20+5) = 600+150+40+10.",
        "hint_ar": "قسّم (30+2)×(20+5) = 600+150+40+10.",
        "result_en": "32 × 25 = 800",
        "result_ar": "32 × 25 = 800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 25 into 20 + 5. Compute 32 × (20 + 5).",
            "explanation_ar": "قسّم 25 إلى 20 + 5. احسب 32 × (20 + 5)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "32 × 20 = 640 and 32 × 5 = 160.",
            "explanation_ar": "32 × 20 = 640 و32 × 5 = 160."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "640 + 160 = 800.",
            "explanation_ar": "640 + 160 = 800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "640 + 160: 640 + 100 = 740, then 740 + 60 = 800. So 32 × 25 = 800.",
            "explanation_ar": "640 + 160: 640 + 100 = 740، ثم 740 + 60 = 800. إذاً 32 × 25 = 800."
          }
        ],
        "hint_en": "Split 25 into 20 + 5, then add 32×20=640 and 32×5=160.",
        "hint_ar": "قسّم 25 إلى 20 + 5، ثم اجمع 32×20=640 و32×5=160.",
        "result_en": "32 × 25 = 800",
        "result_ar": "32 × 25 = 800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a chocolate box factory making 32 boxes per minute, each box holding 25 chocolates. How many chocolates are packed in one minute?",
            "explanation_ar": "تخيّل مصنع علب شوكولاتة ينتج 32 علبة في الدقيقة، كل علبة تحتوي 25 قطعة شوكولاتة. كم قطعة تُعبّأ في دقيقة واحدة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 32 wide and 25 tall. Split the width at 30|2 and the height at 20|5 into four sub-rectangles.",
            "explanation_ar": "ارسم مستطيلاً عرضه 32 وارتفاعه 25. قسّم العرض عند 30|2 والارتفاع عند 20|5 إلى أربعة مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top-left 30×20=600, top-right 2×20=40, bottom-left 30×5=150, bottom-right 2×5=10.",
            "explanation_ar": "أعلى اليسار 30×20=600، أعلى اليمين 2×20=40، أسفل اليسار 30×5=150، أسفل اليمين 2×5=10."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 600 + 40 + 150 + 10 = 800 chocolates. 32 × 25 = 800.",
            "explanation_ar": "المجموع = 600 + 40 + 150 + 10 = 800 قطعة شوكولاتة. 32 × 25 = 800."
          }
        ],
        "hint_en": "Draw a 32×25 area model split at 30|2 and 20|5.",
        "hint_ar": "ارسم نموذج مساحة 32×25 مقسّماً عند 30|2 و20|5.",
        "result_en": "32 × 25 = 800",
        "result_ar": "32 × 25 = 800"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-mul-hard-003",
      "upper_grade_equivalent": "g5-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g4-common-div-easy-001",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "600 ÷ 3 = ?",
    "question_ar": "600 ÷ 3 = ؟",
    "answer": 200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "600 is 6 hundreds. We need to divide 600 by 3.",
            "explanation_ar": "600 تساوي 6 مئات. نحتاج إلى قسمة 600 على 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ask: 3 × ? = 6. Since 3 × 2 = 6, the key digit is 2.",
            "explanation_ar": "اسأل: 3 × ؟ = 6. بما أن 3 × 2 = 6، فالرقم الأساسي هو 2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "If 3 × 2 = 6, then 3 × 200 = 600. Scale up by 100.",
            "explanation_ar": "إذا كان 3 × 2 = 6، فإن 3 × 200 = 600. نضرب في 100."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "600 ÷ 3 = 200.",
            "explanation_ar": "600 ÷ 3 = 200."
          }
        ],
        "hint_en": "Think: 3 × ? = 6, then add the two zeros.",
        "hint_ar": "فكّر: 3 × ؟ = 6، ثم أضف الصفرين.",
        "result_en": "600 ÷ 3 = 200",
        "result_ar": "600 ÷ 3 = 200"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "600 = 300 + 300. Both parts are divisible by 3.",
            "explanation_ar": "600 = 300 + 300. كلا الجزأين قابل للقسمة على 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "300 ÷ 3 = 100, and 300 ÷ 3 = 100.",
            "explanation_ar": "300 ÷ 3 = 100، و300 ÷ 3 = 100."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100 + 100 = 200.",
            "explanation_ar": "100 + 100 = 200."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3 × 200 = 600. ✓ So 600 ÷ 3 = 200.",
            "explanation_ar": "تحقق: 3 × 200 = 600. ✓ إذن 600 ÷ 3 = 200."
          }
        ],
        "hint_en": "Split 600 into two equal halves, divide each by 3, then add.",
        "hint_ar": "قسّم 600 إلى نصفين متساويين، اقسم كلاً منهما على 3، ثم اجمع.",
        "result_en": "600 ÷ 3 = 200",
        "result_ar": "600 ÷ 3 = 200"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 600 marbles shared equally among 3 friends.",
            "explanation_ar": "تخيّل 600 كرة زجاجية تُوزَّع بالتساوي على 3 أصدقاء."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 6 bags of 100 marbles each. Deal one bag at a time to each friend: 2 bags per friend uses all 6 bags.",
            "explanation_ar": "تخيّل 6 أكياس تحتوي كل منها على 100 كرة. وزّع كيساً واحداً في كل مرة على كل صديق: 2 أكياس لكل صديق تستنفد جميع الأكياس الستة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each friend receives 2 bags × 100 marbles = 200 marbles.",
            "explanation_ar": "يحصل كل صديق على 2 كيس × 100 كرة = 200 كرة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "600 marbles ÷ 3 friends = 200 marbles each. 600 ÷ 3 = 200.",
            "explanation_ar": "600 كرة ÷ 3 أصدقاء = 200 كرة لكل واحد. 600 ÷ 3 = 200."
          }
        ],
        "hint_en": "Group the 6 hundreds into 3 equal piles of 2 hundreds each.",
        "hint_ar": "رتّب المئات الست في 3 مجموعات متساوية من مئتين لكل مجموعة.",
        "result_en": "600 ÷ 3 = 200",
        "result_ar": "600 ÷ 3 = 200"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-common-div-easy-002",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "480 ÷ 4 = ?",
    "question_ar": "480 ÷ 4 = ؟",
    "answer": 120,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "480 = 48 tens. We can divide 48 tens by 4.",
            "explanation_ar": "480 = 48 عشرة. يمكننا قسمة 48 عشرة على 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ask: 4 × ? = 48. Since 4 × 12 = 48, the key value is 12.",
            "explanation_ar": "اسأل: 4 × ؟ = 48. بما أن 4 × 12 = 48، فالقيمة الأساسية هي 12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "If 4 × 12 = 48, then 4 × 120 = 480. Scale up by 10.",
            "explanation_ar": "إذا كان 4 × 12 = 48، فإن 4 × 120 = 480. نضرب في 10."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "480 ÷ 4 = 120.",
            "explanation_ar": "480 ÷ 4 = 120."
          }
        ],
        "hint_en": "Think: 4 × ? = 48, then add a zero to your answer.",
        "hint_ar": "فكّر: 4 × ؟ = 48، ثم أضف صفراً إلى إجابتك.",
        "result_en": "480 ÷ 4 = 120",
        "result_ar": "480 ÷ 4 = 120"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 480 into 400 + 80. Both are divisible by 4.",
            "explanation_ar": "قسّم 480 إلى 400 + 80. كلاهما قابل للقسمة على 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "400 ÷ 4 = 100, and 80 ÷ 4 = 20.",
            "explanation_ar": "400 ÷ 4 = 100، و80 ÷ 4 = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100 + 20 = 120.",
            "explanation_ar": "100 + 20 = 120."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4 × 120 = 480. ✓ So 480 ÷ 4 = 120.",
            "explanation_ar": "تحقق: 4 × 120 = 480. ✓ إذن 480 ÷ 4 = 120."
          }
        ],
        "hint_en": "Break 480 into 400 and 80, divide each by 4, then add.",
        "hint_ar": "قسّم 480 إلى 400 و80، اقسم كلاً منهما على 4، ثم اجمع.",
        "result_en": "480 ÷ 4 = 120",
        "result_ar": "480 ÷ 4 = 120"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 480 stickers shared equally among 4 students.",
            "explanation_ar": "تخيّل 480 ملصقاً تُوزَّع بالتساوي على 4 طلاب."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 4 rows. Place 100 stickers in each row first — that uses 400. Then share the remaining 80: 20 stickers per row.",
            "explanation_ar": "تخيّل 4 صفوف. ضع 100 ملصق في كل صف أولاً — هذا يستخدم 400. ثم وزّع الـ80 المتبقية: 20 ملصقاً لكل صف."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each row has 100 + 20 = 120 stickers.",
            "explanation_ar": "كل صف يحتوي على 100 + 20 = 120 ملصقاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "480 stickers ÷ 4 students = 120 stickers each. 480 ÷ 4 = 120.",
            "explanation_ar": "480 ملصق ÷ 4 طلاب = 120 ملصقاً لكل طالب. 480 ÷ 4 = 120."
          }
        ],
        "hint_en": "First give each student 100, then share the remaining 80 equally.",
        "hint_ar": "أعطِ كل طالب 100 أولاً، ثم وزّع الـ80 المتبقية بالتساوي.",
        "result_en": "480 ÷ 4 = 120",
        "result_ar": "480 ÷ 4 = 120"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-common-div-easy-003",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "900 ÷ 5 = ?",
    "question_ar": "900 ÷ 5 = ؟",
    "answer": 180,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "900 = 90 tens. We divide 90 tens by 5.",
            "explanation_ar": "900 = 90 عشرة. نقسم 90 عشرة على 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Ask: 5 × ? = 90. Since 5 × 18 = 90, the key value is 18.",
            "explanation_ar": "اسأل: 5 × ؟ = 90. بما أن 5 × 18 = 90، فالقيمة الأساسية هي 18."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "If 5 × 18 = 90, then 5 × 180 = 900. Scale up by 10.",
            "explanation_ar": "إذا كان 5 × 18 = 90، فإن 5 × 180 = 900. نضرب في 10."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "900 ÷ 5 = 180.",
            "explanation_ar": "900 ÷ 5 = 180."
          }
        ],
        "hint_en": "Think: 5 × ? = 90, then add a zero.",
        "hint_ar": "فكّر: 5 × ؟ = 90، ثم أضف صفراً.",
        "result_en": "900 ÷ 5 = 180",
        "result_ar": "900 ÷ 5 = 180"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 900 into 500 + 400. Both are divisible by 5.",
            "explanation_ar": "قسّم 900 إلى 500 + 400. كلاهما قابل للقسمة على 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "500 ÷ 5 = 100, and 400 ÷ 5 = 80.",
            "explanation_ar": "500 ÷ 5 = 100، و400 ÷ 5 = 80."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "100 + 80 = 180.",
            "explanation_ar": "100 + 80 = 180."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 5 × 180 = 900. ✓ So 900 ÷ 5 = 180.",
            "explanation_ar": "تحقق: 5 × 180 = 900. ✓ إذن 900 ÷ 5 = 180."
          }
        ],
        "hint_en": "Split 900 into 500 and 400, divide each by 5, then add.",
        "hint_ar": "قسّم 900 إلى 500 و400، اقسم كلاً منهما على 5، ثم اجمع.",
        "result_en": "900 ÷ 5 = 180",
        "result_ar": "900 ÷ 5 = 180"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 900 books shared equally among 5 shelves.",
            "explanation_ar": "تخيّل 900 كتاب تُوزَّع بالتساوي على 5 رفوف."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place 100 books on each shelf first — that uses 500. The remaining 400 ÷ 5 = 80 books go on each shelf.",
            "explanation_ar": "ضع 100 كتاب على كل رف أولاً — هذا يستخدم 500. الـ400 المتبقية ÷ 5 = 80 كتاباً تُضاف لكل رف."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each shelf holds 100 + 80 = 180 books.",
            "explanation_ar": "كل رف يحمل 100 + 80 = 180 كتاباً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "900 books ÷ 5 shelves = 180 books per shelf. 900 ÷ 5 = 180.",
            "explanation_ar": "900 كتاب ÷ 5 رفوف = 180 كتاباً لكل رف. 900 ÷ 5 = 180."
          }
        ],
        "hint_en": "Put 100 on each shelf first, then share what's left.",
        "hint_ar": "ضع 100 على كل رف أولاً، ثم وزّع الباقي.",
        "result_en": "900 ÷ 5 = 180",
        "result_ar": "900 ÷ 5 = 180"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-common-div-medium-001",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "144 ÷ 6 = ?",
    "question_ar": "144 ÷ 6 = ؟",
    "answer": 24,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 6 × ? = 144. Think of nearby multiples of 6.",
            "explanation_ar": "نحتاج 6 × ؟ = 144. فكّر في مضاعفات 6 القريبة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "6 × 20 = 120 and 6 × 4 = 24. So 6 × 24 = 144.",
            "explanation_ar": "6 × 20 = 120 و6 × 4 = 24. إذن 6 × 24 = 144."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 6 × 24 = 144, the answer is 24.",
            "explanation_ar": "بما أن 6 × 24 = 144، فالجواب هو 24."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "144 ÷ 6 = 24.",
            "explanation_ar": "144 ÷ 6 = 24."
          }
        ],
        "hint_en": "Think: 6 × 20 = 120, then 6 × 4 = 24. Add the parts: 6 × 24 = 144.",
        "hint_ar": "فكّر: 6 × 20 = 120، ثم 6 × 4 = 24. اجمع الأجزاء: 6 × 24 = 144.",
        "result_en": "144 ÷ 6 = 24",
        "result_ar": "144 ÷ 6 = 24"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 144 into 120 + 24. Both are divisible by 6.",
            "explanation_ar": "قسّم 144 إلى 120 + 24. كلاهما قابل للقسمة على 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "120 ÷ 6 = 20, and 24 ÷ 6 = 4.",
            "explanation_ar": "120 ÷ 6 = 20، و24 ÷ 6 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20 + 4 = 24.",
            "explanation_ar": "20 + 4 = 24."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 6 × 24 = 144. ✓ So 144 ÷ 6 = 24.",
            "explanation_ar": "تحقق: 6 × 24 = 144. ✓ إذن 144 ÷ 6 = 24."
          }
        ],
        "hint_en": "Break 144 into 120 and 24, divide each by 6, then add.",
        "hint_ar": "قسّم 144 إلى 120 و24، اقسم كلاً منهما على 6، ثم اجمع.",
        "result_en": "144 ÷ 6 = 24",
        "result_ar": "144 ÷ 6 = 24"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 144 pencils shared equally among 6 classrooms.",
            "explanation_ar": "تخيّل 144 قلماً تُوزَّع بالتساوي على 6 فصول دراسية."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Give each classroom 20 pencils first — that uses 120. Then share the remaining 24: 4 pencils per classroom.",
            "explanation_ar": "أعطِ كل فصل 20 قلماً أولاً — هذا يستخدم 120. ثم وزّع الـ24 المتبقية: 4 أقلام لكل فصل."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each classroom gets 20 + 4 = 24 pencils.",
            "explanation_ar": "كل فصل يحصل على 20 + 4 = 24 قلماً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "144 pencils ÷ 6 classrooms = 24 pencils each. 144 ÷ 6 = 24.",
            "explanation_ar": "144 قلم ÷ 6 فصول = 24 قلماً لكل فصل. 144 ÷ 6 = 24."
          }
        ],
        "hint_en": "Hand out 20 to each classroom first, then share what's left.",
        "hint_ar": "وزّع 20 على كل فصل أولاً، ثم وزّع الباقي.",
        "result_en": "144 ÷ 6 = 24",
        "result_ar": "144 ÷ 6 = 24"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-common-div-medium-002",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "195 ÷ 5 = ?",
    "question_ar": "195 ÷ 5 = ؟",
    "answer": 39,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 5 × ? = 195. Think of what multiplication by 5 gives 195.",
            "explanation_ar": "نحتاج 5 × ؟ = 195. فكّر في ضرب 5 الذي يعطي 195."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "5 × 30 = 150 and 5 × 9 = 45. So 5 × 39 = 150 + 45 = 195.",
            "explanation_ar": "5 × 30 = 150 و5 × 9 = 45. إذن 5 × 39 = 150 + 45 = 195."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 5 × 39 = 195, the answer is 39.",
            "explanation_ar": "بما أن 5 × 39 = 195، فالجواب هو 39."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "195 ÷ 5 = 39.",
            "explanation_ar": "195 ÷ 5 = 39."
          }
        ],
        "hint_en": "Think: 5 × 30 = 150, then 5 × 9 = 45. Together: 5 × 39 = 195.",
        "hint_ar": "فكّر: 5 × 30 = 150، ثم 5 × 9 = 45. معاً: 5 × 39 = 195.",
        "result_en": "195 ÷ 5 = 39",
        "result_ar": "195 ÷ 5 = 39"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 195 into 150 + 45. Both are divisible by 5.",
            "explanation_ar": "قسّم 195 إلى 150 + 45. كلاهما قابل للقسمة على 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "150 ÷ 5 = 30, and 45 ÷ 5 = 9.",
            "explanation_ar": "150 ÷ 5 = 30، و45 ÷ 5 = 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "30 + 9 = 39.",
            "explanation_ar": "30 + 9 = 39."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 5 × 39 = 195. ✓ So 195 ÷ 5 = 39.",
            "explanation_ar": "تحقق: 5 × 39 = 195. ✓ إذن 195 ÷ 5 = 39."
          }
        ],
        "hint_en": "Break 195 into 150 and 45, divide each by 5, then add.",
        "hint_ar": "قسّم 195 إلى 150 و45، اقسم كلاً منهما على 5، ثم اجمع.",
        "result_en": "195 ÷ 5 = 39",
        "result_ar": "195 ÷ 5 = 39"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 195 coins shared equally among 5 piggy banks.",
            "explanation_ar": "تخيّل 195 قطعة نقدية تُوزَّع بالتساوي على 5 حصالات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Put 30 coins in each piggy bank first — that uses 150. Then share the remaining 45: 9 coins per piggy bank.",
            "explanation_ar": "ضع 30 قطعة في كل حصالة أولاً — هذا يستخدم 150. ثم وزّع الـ45 المتبقية: 9 قطع لكل حصالة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each piggy bank holds 30 + 9 = 39 coins.",
            "explanation_ar": "كل حصالة تحتوي على 30 + 9 = 39 قطعة نقدية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "195 coins ÷ 5 piggy banks = 39 coins each. 195 ÷ 5 = 39.",
            "explanation_ar": "195 قطعة ÷ 5 حصالات = 39 قطعة لكل حصالة. 195 ÷ 5 = 39."
          }
        ],
        "hint_en": "Fill each bank with 30 first, then add 9 more to each.",
        "hint_ar": "ضع 30 في كل حصالة أولاً، ثم أضف 9 أخرى لكل واحدة.",
        "result_en": "195 ÷ 5 = 39",
        "result_ar": "195 ÷ 5 = 39"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-common-div-medium-003",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "168 ÷ 8 = ?",
    "question_ar": "168 ÷ 8 = ؟",
    "answer": 21,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 8 × ? = 168. Think of multiples of 8 near 168.",
            "explanation_ar": "نحتاج 8 × ؟ = 168. فكّر في مضاعفات 8 القريبة من 168."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "8 × 20 = 160 and 8 × 1 = 8. So 8 × 21 = 160 + 8 = 168.",
            "explanation_ar": "8 × 20 = 160 و8 × 1 = 8. إذن 8 × 21 = 160 + 8 = 168."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 8 × 21 = 168, the answer is 21.",
            "explanation_ar": "بما أن 8 × 21 = 168، فالجواب هو 21."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "168 ÷ 8 = 21.",
            "explanation_ar": "168 ÷ 8 = 21."
          }
        ],
        "hint_en": "Think: 8 × 20 = 160, then 8 × 1 = 8. Together: 8 × 21 = 168.",
        "hint_ar": "فكّر: 8 × 20 = 160، ثم 8 × 1 = 8. معاً: 8 × 21 = 168.",
        "result_en": "168 ÷ 8 = 21",
        "result_ar": "168 ÷ 8 = 21"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 168 into 160 + 8. Both are divisible by 8.",
            "explanation_ar": "قسّم 168 إلى 160 + 8. كلاهما قابل للقسمة على 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "160 ÷ 8 = 20, and 8 ÷ 8 = 1.",
            "explanation_ar": "160 ÷ 8 = 20، و8 ÷ 8 = 1."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20 + 1 = 21.",
            "explanation_ar": "20 + 1 = 21."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8 × 21 = 168. ✓ So 168 ÷ 8 = 21.",
            "explanation_ar": "تحقق: 8 × 21 = 168. ✓ إذن 168 ÷ 8 = 21."
          }
        ],
        "hint_en": "Break 168 into 160 and 8, divide each by 8, then add.",
        "hint_ar": "قسّم 168 إلى 160 و8، اقسم كلاً منهما على 8، ثم اجمع.",
        "result_en": "168 ÷ 8 = 21",
        "result_ar": "168 ÷ 8 = 21"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 168 cookies packed equally into 8 boxes.",
            "explanation_ar": "تخيّل 168 بسكويتة تُعبَّأ بالتساوي في 8 صناديق."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Put 20 cookies in each box first — that uses 160. Then place the remaining 8 cookies: 1 cookie per box.",
            "explanation_ar": "ضع 20 بسكويتة في كل صندوق أولاً — هذا يستخدم 160. ثم ضع الـ8 المتبقية: بسكويتة واحدة لكل صندوق."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box holds 20 + 1 = 21 cookies.",
            "explanation_ar": "كل صندوق يحتوي على 20 + 1 = 21 بسكويتة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "168 cookies ÷ 8 boxes = 21 cookies each. 168 ÷ 8 = 21.",
            "explanation_ar": "168 بسكويتة ÷ 8 صناديق = 21 بسكويتة لكل صندوق. 168 ÷ 8 = 21."
          }
        ],
        "hint_en": "Fill each box with 20, then add 1 more to each box.",
        "hint_ar": "ضع 20 في كل صندوق، ثم أضف 1 أخرى لكل صندوق.",
        "result_en": "168 ÷ 8 = 21",
        "result_ar": "168 ÷ 8 = 21"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-common-div-hard-001",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "252 ÷ 7 = ?",
    "question_ar": "252 ÷ 7 = ؟",
    "answer": 36,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 7 × ? = 252. Think of multiples of 7 near 252.",
            "explanation_ar": "نحتاج 7 × ؟ = 252. فكّر في مضاعفات 7 القريبة من 252."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "7 × 30 = 210 and 7 × 6 = 42. So 7 × 36 = 210 + 42 = 252.",
            "explanation_ar": "7 × 30 = 210 و7 × 6 = 42. إذن 7 × 36 = 210 + 42 = 252."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 7 × 36 = 252, the answer is 36.",
            "explanation_ar": "بما أن 7 × 36 = 252، فالجواب هو 36."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "252 ÷ 7 = 36.",
            "explanation_ar": "252 ÷ 7 = 36."
          }
        ],
        "hint_en": "Think: 7 × 30 = 210, then 7 × 6 = 42. Together: 7 × 36 = 252.",
        "hint_ar": "فكّر: 7 × 30 = 210، ثم 7 × 6 = 42. معاً: 7 × 36 = 252.",
        "result_en": "252 ÷ 7 = 36",
        "result_ar": "252 ÷ 7 = 36"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 252 into 210 + 42. Both are divisible by 7.",
            "explanation_ar": "قسّم 252 إلى 210 + 42. كلاهما قابل للقسمة على 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "210 ÷ 7 = 30, and 42 ÷ 7 = 6.",
            "explanation_ar": "210 ÷ 7 = 30، و42 ÷ 7 = 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "30 + 6 = 36.",
            "explanation_ar": "30 + 6 = 36."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 7 × 36 = 252. ✓ So 252 ÷ 7 = 36.",
            "explanation_ar": "تحقق: 7 × 36 = 252. ✓ إذن 252 ÷ 7 = 36."
          }
        ],
        "hint_en": "Break 252 into 210 and 42, divide each by 7, then add.",
        "hint_ar": "قسّم 252 إلى 210 و42، اقسم كلاً منهما على 7، ثم اجمع.",
        "result_en": "252 ÷ 7 = 36",
        "result_ar": "252 ÷ 7 = 36"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 252 beads divided equally into 7 jars.",
            "explanation_ar": "تخيّل 252 خرزة تُوزَّع بالتساوي في 7 برطمانات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Put 30 beads in each jar first — that uses 210. Then share the remaining 42 beads: 6 per jar.",
            "explanation_ar": "ضع 30 خرزة في كل برطمان أولاً — هذا يستخدم 210. ثم وزّع الـ42 المتبقية: 6 خرزات لكل برطمان."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each jar holds 30 + 6 = 36 beads.",
            "explanation_ar": "كل برطمان يحتوي على 30 + 6 = 36 خرزة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "252 beads ÷ 7 jars = 36 beads each. 252 ÷ 7 = 36.",
            "explanation_ar": "252 خرزة ÷ 7 برطمانات = 36 خرزة لكل برطمان. 252 ÷ 7 = 36."
          }
        ],
        "hint_en": "Fill each jar with 30 first, then share the remaining 42 as 6 each.",
        "hint_ar": "ضع 30 في كل برطمان أولاً، ثم وزّع الـ42 المتبقية بواقع 6 لكل برطمان.",
        "result_en": "252 ÷ 7 = 36",
        "result_ar": "252 ÷ 7 = 36"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-common-div-hard-002",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "336 ÷ 8 = ?",
    "question_ar": "336 ÷ 8 = ؟",
    "answer": 42,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 8 × ? = 336. Think of multiples of 8 near 336.",
            "explanation_ar": "نحتاج 8 × ؟ = 336. فكّر في مضاعفات 8 القريبة من 336."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "8 × 40 = 320 and 8 × 2 = 16. So 8 × 42 = 320 + 16 = 336.",
            "explanation_ar": "8 × 40 = 320 و8 × 2 = 16. إذن 8 × 42 = 320 + 16 = 336."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 8 × 42 = 336, the answer is 42.",
            "explanation_ar": "بما أن 8 × 42 = 336، فالجواب هو 42."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "336 ÷ 8 = 42.",
            "explanation_ar": "336 ÷ 8 = 42."
          }
        ],
        "hint_en": "Think: 8 × 40 = 320, then 8 × 2 = 16. Together: 8 × 42 = 336.",
        "hint_ar": "فكّر: 8 × 40 = 320، ثم 8 × 2 = 16. معاً: 8 × 42 = 336.",
        "result_en": "336 ÷ 8 = 42",
        "result_ar": "336 ÷ 8 = 42"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 336 into 320 + 16. Both are divisible by 8.",
            "explanation_ar": "قسّم 336 إلى 320 + 16. كلاهما قابل للقسمة على 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "320 ÷ 8 = 40, and 16 ÷ 8 = 2.",
            "explanation_ar": "320 ÷ 8 = 40، و16 ÷ 8 = 2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "40 + 2 = 42.",
            "explanation_ar": "40 + 2 = 42."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8 × 42 = 336. ✓ So 336 ÷ 8 = 42.",
            "explanation_ar": "تحقق: 8 × 42 = 336. ✓ إذن 336 ÷ 8 = 42."
          }
        ],
        "hint_en": "Break 336 into 320 and 16, divide each by 8, then add.",
        "hint_ar": "قسّم 336 إلى 320 و16، اقسم كلاً منهما على 8، ثم اجمع.",
        "result_en": "336 ÷ 8 = 42",
        "result_ar": "336 ÷ 8 = 42"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 336 photos sorted equally into 8 albums.",
            "explanation_ar": "تخيّل 336 صورة تُرتَّب بالتساوي في 8 ألبومات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place 40 photos in each album first — that uses 320. Then share the remaining 16: 2 photos per album.",
            "explanation_ar": "ضع 40 صورة في كل ألبوم أولاً — هذا يستخدم 320. ثم وزّع الـ16 المتبقية: 2 صورتان لكل ألبوم."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each album holds 40 + 2 = 42 photos.",
            "explanation_ar": "كل ألبوم يحتوي على 40 + 2 = 42 صورة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "336 photos ÷ 8 albums = 42 photos each. 336 ÷ 8 = 42.",
            "explanation_ar": "336 صورة ÷ 8 ألبومات = 42 صورة لكل ألبوم. 336 ÷ 8 = 42."
          }
        ],
        "hint_en": "Fill each album with 40 first, then add 2 more to each.",
        "hint_ar": "ضع 40 في كل ألبوم أولاً، ثم أضف 2 أخريين لكل ألبوم.",
        "result_en": "336 ÷ 8 = 42",
        "result_ar": "336 ÷ 8 = 42"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-common-div-hard-003",
    "grade": 4,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "378 ÷ 9 = ?",
    "question_ar": "378 ÷ 9 = ؟",
    "answer": 42,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 9 × ? = 378. Think of multiples of 9 near 378.",
            "explanation_ar": "نحتاج 9 × ؟ = 378. فكّر في مضاعفات 9 القريبة من 378."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "9 × 40 = 360 and 9 × 2 = 18. So 9 × 42 = 360 + 18 = 378.",
            "explanation_ar": "9 × 40 = 360 و9 × 2 = 18. إذن 9 × 42 = 360 + 18 = 378."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 9 × 42 = 378, the answer is 42.",
            "explanation_ar": "بما أن 9 × 42 = 378، فالجواب هو 42."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "378 ÷ 9 = 42.",
            "explanation_ar": "378 ÷ 9 = 42."
          }
        ],
        "hint_en": "Think: 9 × 40 = 360, then 9 × 2 = 18. Together: 9 × 42 = 378.",
        "hint_ar": "فكّر: 9 × 40 = 360، ثم 9 × 2 = 18. معاً: 9 × 42 = 378.",
        "result_en": "378 ÷ 9 = 42",
        "result_ar": "378 ÷ 9 = 42"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 378 into 360 + 18. Both are divisible by 9.",
            "explanation_ar": "قسّم 378 إلى 360 + 18. كلاهما قابل للقسمة على 9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "360 ÷ 9 = 40, and 18 ÷ 9 = 2.",
            "explanation_ar": "360 ÷ 9 = 40، و18 ÷ 9 = 2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "40 + 2 = 42.",
            "explanation_ar": "40 + 2 = 42."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 9 × 42 = 378. ✓ So 378 ÷ 9 = 42.",
            "explanation_ar": "تحقق: 9 × 42 = 378. ✓ إذن 378 ÷ 9 = 42."
          }
        ],
        "hint_en": "Break 378 into 360 and 18, divide each by 9, then add.",
        "hint_ar": "قسّم 378 إلى 360 و18، اقسم كلاً منهما على 9، ثم اجمع.",
        "result_en": "378 ÷ 9 = 42",
        "result_ar": "378 ÷ 9 = 42"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 378 seeds planted equally in 9 garden rows.",
            "explanation_ar": "تخيّل 378 بذرة تُزرع بالتساوي في 9 صفوف من الحديقة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Plant 40 seeds in each row first — that uses 360. Then plant the remaining 18: 2 seeds per row.",
            "explanation_ar": "ازرع 40 بذرة في كل صف أولاً — هذا يستخدم 360. ثم ازرع الـ18 المتبقية: 2 بذرتان لكل صف."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each row holds 40 + 2 = 42 seeds.",
            "explanation_ar": "كل صف يحتوي على 40 + 2 = 42 بذرة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "378 seeds ÷ 9 rows = 42 seeds per row. 378 ÷ 9 = 42.",
            "explanation_ar": "378 بذرة ÷ 9 صفوف = 42 بذرة لكل صف. 378 ÷ 9 = 42."
          }
        ],
        "hint_en": "Plant 40 in each row first, then add 2 more to every row.",
        "hint_ar": "ازرع 40 في كل صف أولاً، ثم أضف 2 أخريين لكل صف.",
        "result_en": "378 ÷ 9 = 42",
        "result_ar": "378 ÷ 9 = 42"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-common-div-hard-003",
      "upper_grade_equivalent": "g5-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g4-specific-factor-easy-001",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Easy",
    "question_en": "What is the largest factor of 18 other than 18 itself? = ?",
    "question_ar": "ما أكبر عامل للعدد 18 غير 18 نفسه؟ = ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The largest factor of any number (other than itself) is found by dividing it by its smallest prime factor. For 18, identify the smallest prime that divides it evenly.",
            "explanation_ar": "أكبر عامل لأي عدد (غير نفسه) يُوجد بقسمته على أصغر عامل أولي له. للعدد 18، حدّد أصغر عدد أولي يقسمه بالتساوي."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "18 is even, so its smallest prime factor is 2. Divide: 18 ÷ 2 = 9.",
            "explanation_ar": "18 عدد زوجي، إذن أصغر عامل أولي له هو 2. القسمة: 18 ÷ 2 = 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 9 × 2 = 18, the number 9 is a factor of 18. No factor between 9 and 18 exists because the next divisor after 2 is 3, giving 18 ÷ 3 = 6, which is smaller than 9.",
            "explanation_ar": "بما أن 9 × 2 = 18، فإن 9 عامل من عوامل 18. لا يوجد عامل بين 9 و18، لأن القاسم التالي بعد 2 هو 3، وينتج 18 ÷ 3 = 6، وهو أصغر من 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The largest factor of 18 other than 18 is 9.",
            "explanation_ar": "إذن أكبر عامل للعدد 18 غير 18 نفسه هو 9."
          }
        ],
        "hint_en": "Divide 18 by its smallest prime factor (2) to get the largest factor.",
        "hint_ar": "اقسم 18 على أصغر عامل أولي له (2) للحصول على أكبر عامل.",
        "result_en": "The largest factor of 18 (other than 18) is 9.",
        "result_ar": "أكبر عامل للعدد 18 (غير 18 نفسه) هو 9."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "List all factor pairs of 18 systematically: start from 1 and work up.",
            "explanation_ar": "اكتب جميع أزواج عوامل 18 بشكل منهجي: ابدأ من 1 وتصاعد."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 × 18 = 18 ✓ | 2 × 9 = 18 ✓ | 3 × 6 = 18 ✓ | 4 × ? — 18 ÷ 4 = 4.5, not whole ✗. Factor pairs: (1,18), (2,9), (3,6).",
            "explanation_ar": "1 × 18 = 18 ✓ | 2 × 9 = 18 ✓ | 3 × 6 = 18 ✓ | 4 × ؟ — 18 ÷ 4 = 4.5، ليس عدداً صحيحاً ✗. أزواج العوامل: (1، 18)، (2، 9)، (3، 6)."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "All factors of 18: 1, 2, 3, 6, 9, 18. Remove 18 itself. The largest remaining factor is 9.",
            "explanation_ar": "جميع عوامل 18: 1، 2، 3، 6، 9، 18. نحذف 18 نفسه. أكبر عامل متبقٍّ هو 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 9 × 2 = 18 ✓. The answer is 9.",
            "explanation_ar": "تحقق: 9 × 2 = 18 ✓. الجواب هو 9."
          }
        ],
        "hint_en": "Write all factor pairs of 18, then pick the largest factor that isn't 18.",
        "hint_ar": "اكتب جميع أزواج عوامل 18، ثم اختر أكبر عامل غير 18.",
        "result_en": "The largest factor of 18 (other than 18) is 9.",
        "result_ar": "أكبر عامل للعدد 18 (غير 18 نفسه) هو 9."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine arranging 18 chairs into equal rows. Each valid arrangement reveals a factor pair.",
            "explanation_ar": "تخيّل ترتيب 18 كرسياً في صفوف متساوية. كل ترتيب صحيح يكشف زوجاً من العوامل."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw rectangles with area 18: a 1×18 row, a 2×9 grid, and a 3×6 grid. Each dimension is a factor.",
            "explanation_ar": "ارسم مستطيلات مساحتها 18: صف 1×18، وشبكة 2×9، وشبكة 3×6. كل بُعد هو عامل."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Factors seen: 1, 2, 3, 6, 9, 18. The widest rectangle (other than the 1×18 strip) has width 9.",
            "explanation_ar": "العوامل المرئية: 1، 2، 3، 6، 9، 18. أعرض مستطيل (غير الشريط 1×18) عرضه 9."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The largest factor other than 18 is 9, seen as the long side of the 2×9 rectangle.",
            "explanation_ar": "أكبر عامل غير 18 هو 9، ويظهر كالضلع الطويل للمستطيل 2×9."
          }
        ],
        "hint_en": "Picture 18 chairs arranged in rows — the 2-row arrangement gives 9 chairs per row.",
        "hint_ar": "تخيّل 18 كرسياً في صفوف — الترتيب بصفين يعطي 9 كراسي في كل صف.",
        "result_en": "The largest factor of 18 (other than 18) is 9.",
        "result_ar": "أكبر عامل للعدد 18 (غير 18 نفسه) هو 9."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-factor-easy-002",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Easy",
    "question_en": "How many factors does 12 have? = ?",
    "question_ar": "كم عدد عوامل العدد 12؟ = ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write the prime factorisation of 12 to count factors using the exponent formula.",
            "explanation_ar": "اكتب التحليل إلى عوامل أولية للعدد 12 لحساب عدد العوامل باستخدام قانون الأسس."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "12 = 2² × 3¹. The exponents are 2 and 1.",
            "explanation_ar": "12 = 2² × 3¹. الأسس هي 2 و1."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Number of factors = (exponent of 2 + 1) × (exponent of 3 + 1) = (2+1) × (1+1) = 3 × 2 = 6.",
            "explanation_ar": "عدد العوامل = (أس 2 + 1) × (أس 3 + 1) = (2+1) × (1+1) = 3 × 2 = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "12 has exactly 6 factors.",
            "explanation_ar": "للعدد 12 ستة عوامل بالضبط."
          }
        ],
        "hint_en": "Write 12 = 2² × 3¹, then use (2+1)(1+1) to count factors.",
        "hint_ar": "اكتب 12 = 2² × 3¹، ثم استخدم (2+1)(1+1) لحساب العوامل.",
        "result_en": "12 has 6 factors.",
        "result_ar": "العدد 12 له 6 عوامل."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find all factor pairs of 12 by testing divisors from 1 upward.",
            "explanation_ar": "أوجد جميع أزواج عوامل 12 باختبار القواسم بدءاً من 1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 × 12 = 12 ✓ | 2 × 6 = 12 ✓ | 3 × 4 = 12 ✓ | 4 × 3 — already found, stop here.",
            "explanation_ar": "1 × 12 = 12 ✓ | 2 × 6 = 12 ✓ | 3 × 4 = 12 ✓ | 4 × 3 — وجدنا هذا مسبقاً، نتوقف هنا."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Factor pairs give us 3 pairs = 6 individual factors: 1, 2, 3, 4, 6, 12.",
            "explanation_ar": "أزواج العوامل تعطينا 3 أزواج = 6 عوامل منفردة: 1، 2، 3، 4، 6، 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Count: 1, 2, 3, 4, 6, 12 — that's 6 factors. ✓",
            "explanation_ar": "العد: 1، 2، 3، 4، 6، 12 — هذه 6 عوامل. ✓"
          }
        ],
        "hint_en": "List factor pairs: (1,12), (2,6), (3,4) — count all numbers to get 6.",
        "hint_ar": "اكتب أزواج العوامل: (1، 12)، (2، 6)، (3، 4) — عُدَّ جميع الأعداد للحصول على 6.",
        "result_en": "12 has 6 factors.",
        "result_ar": "العدد 12 له 6 عوامل."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 12 tiles. How many different rectangular arrangements can you make?",
            "explanation_ar": "تخيّل 12 بلاطة. كم عدد الترتيبات المستطيلة المختلفة التي يمكنك صنعها؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw three rectangles with area 12: 1×12, 2×6, and 3×4. Each rectangle uses a different factor pair.",
            "explanation_ar": "ارسم ثلاثة مستطيلات مساحتها 12: 1×12، و2×6، و3×4. كل مستطيل يستخدم زوجاً مختلفاً من العوامل."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each rectangle has 2 dimensions, giving 6 distinct labels: 1, 2, 3, 4, 6, 12.",
            "explanation_ar": "كل مستطيل له بُعدان، مما يعطي 6 قيم مختلفة: 1، 2، 3، 4، 6، 12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Three rectangles × 2 dimensions each = 6 factors total.",
            "explanation_ar": "ثلاثة مستطيلات × بُعدان لكل منها = 6 عوامل في المجموع."
          }
        ],
        "hint_en": "Draw all rectangles with area 12 and count the unique side lengths.",
        "hint_ar": "ارسم جميع المستطيلات ذات المساحة 12 وعُدَّ أطوال الأضلاع الفريدة.",
        "result_en": "12 has 6 factors.",
        "result_ar": "العدد 12 له 6 عوامل."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-factor-easy-003",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Easy",
    "question_en": "What is the smallest factor of 20 greater than 1? = ?",
    "question_ar": "ما أصغر عامل للعدد 20 أكبر من 1؟ = ؟",
    "answer": 2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The smallest factor greater than 1 is always the smallest prime that divides the number. Check if the number is even first.",
            "explanation_ar": "أصغر عامل أكبر من 1 هو دائماً أصغر عدد أولي يقسم العدد. تحقق أولاً إذا كان العدد زوجياً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "20 is even (it ends in 0). Therefore 2 divides 20 exactly: 20 ÷ 2 = 10.",
            "explanation_ar": "20 عدد زوجي (ينتهي بـ 0). إذن 2 يقسم 20 بالتساوي: 20 ÷ 2 = 10."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 2 is the smallest prime number and it divides 20, there is no factor between 1 and 2.",
            "explanation_ar": "بما أن 2 هو أصغر عدد أولي ويقسم 20، فلا يوجد عامل بين 1 و2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The smallest factor of 20 greater than 1 is 2.",
            "explanation_ar": "أصغر عامل للعدد 20 أكبر من 1 هو 2."
          }
        ],
        "hint_en": "Is 20 even? If yes, 2 is already a factor — and nothing between 1 and 2 can be a factor.",
        "hint_ar": "هل 20 زوجي؟ إذا نعم، فـ 2 هو بالفعل عامل — ولا يوجد شيء بين 1 و2 يمكن أن يكون عاملاً.",
        "result_en": "The smallest factor of 20 greater than 1 is 2.",
        "result_ar": "أصغر عامل للعدد 20 أكبر من 1 هو 2."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Test divisors starting from 2: does 2 divide 20?",
            "explanation_ar": "اختبر القواسم بدءاً من 2: هل 2 يقسم 20؟"
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20 ÷ 2 = 10, with no remainder. So 2 is a factor of 20.",
            "explanation_ar": "20 ÷ 2 = 10، بدون باقٍ. إذن 2 عامل من عوامل 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Factor pair found: 2 × 10 = 20. We stop at 2 since we want the smallest factor > 1.",
            "explanation_ar": "وجدنا زوج العوامل: 2 × 10 = 20. نتوقف عند 2 لأننا نريد أصغر عامل > 1."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "2 × 10 = 20 ✓. The answer is 2.",
            "explanation_ar": "2 × 10 = 20 ✓. الجواب هو 2."
          }
        ],
        "hint_en": "Start testing from 2 — stop as soon as you find the first factor.",
        "hint_ar": "ابدأ الاختبار من 2 — توقف فور إيجاد أول عامل.",
        "result_en": "The smallest factor of 20 greater than 1 is 2.",
        "result_ar": "أصغر عامل للعدد 20 أكبر من 1 هو 2."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You have 20 stickers. Can you split them into equal groups starting from the smallest group size greater than 1?",
            "explanation_ar": "لديك 20 ملصقاً. هل يمكنك تقسيمها إلى مجموعات متساوية بدءاً من أصغر حجم مجموعة أكبر من 1؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Try groups of 2: picture 10 pairs of stickers laid out in 2 columns of 10.",
            "explanation_ar": "جرّب مجموعات من 2: تخيّل 10 أزواج من الملصقات موزعة في عمودين كل منهما 10."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "2 columns of 10 stickers works perfectly — no stickers left over. So 2 is a factor.",
            "explanation_ar": "عمودان من 10 ملصقات يعمل بشكل مثالي — لا تبقى ملصقات. إذن 2 عامل."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "2 is the smallest whole number greater than 1 that divides 20 evenly. Answer: 2.",
            "explanation_ar": "2 هو أصغر عدد صحيح أكبر من 1 يقسم 20 بالتساوي. الجواب: 2."
          }
        ],
        "hint_en": "Can you split 20 stickers into pairs? Yes — so 2 is the smallest factor greater than 1.",
        "hint_ar": "هل يمكنك تقسيم 20 ملصقاً إلى أزواج؟ نعم — إذن 2 هو أصغر عامل أكبر من 1.",
        "result_en": "The smallest factor of 20 greater than 1 is 2.",
        "result_ar": "أصغر عامل للعدد 20 أكبر من 1 هو 2."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-factor-medium-001",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Medium",
    "question_en": "What is the GCF of 12 and 18? = ?",
    "question_ar": "ما القاسم المشترك الأكبر للعددين 12 و18؟ = ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use prime factorisation to find the GCF. Write the prime factorisation of both numbers.",
            "explanation_ar": "استخدم التحليل إلى عوامل أولية لإيجاد القاسم المشترك الأكبر. اكتب التحليل الأولي لكلا العددين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "12 = 2² × 3¹ and 18 = 2¹ × 3².",
            "explanation_ar": "12 = 2² × 3¹ و18 = 2¹ × 3²."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "GCF = product of shared primes using the LOWER exponent each time: 2^min(2,1) × 3^min(1,2) = 2¹ × 3¹ = 2 × 3 = 6.",
            "explanation_ar": "القاسم المشترك الأكبر = حاصل ضرب العوامل الأولية المشتركة مع أخذ الأس الأصغر في كل مرة: 2^min(2,1) × 3^min(1,2) = 2¹ × 3¹ = 2 × 3 = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The GCF of 12 and 18 is 6.",
            "explanation_ar": "القاسم المشترك الأكبر للعددين 12 و18 هو 6."
          }
        ],
        "hint_en": "Factor both: 12 = 2²×3 and 18 = 2×3². Multiply shared primes with lowest powers: 2×3 = 6.",
        "hint_ar": "حلّل كليهما: 12 = 2²×3 و18 = 2×3². اضرب العوامل المشتركة بأصغر أس: 2×3 = 6.",
        "result_en": "The GCF of 12 and 18 is 6.",
        "result_ar": "القاسم المشترك الأكبر للعددين 12 و18 هو 6."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "List all factors of 12 and all factors of 18 separately.",
            "explanation_ar": "اكتب جميع عوامل 12 وجميع عوامل 18 كلٌّ على حدة."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18.",
            "explanation_ar": "عوامل 12: 1، 2، 3، 4، 6، 12. عوامل 18: 1، 2، 3، 6، 9، 18."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Common factors (in both lists): 1, 2, 3, 6. The greatest of these is 6.",
            "explanation_ar": "العوامل المشتركة (في كلتا القائمتين): 1، 2، 3، 6. أكبرها هو 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "12 ÷ 6 = 2 ✓ and 18 ÷ 6 = 3 ✓. GCF = 6.",
            "explanation_ar": "12 ÷ 6 = 2 ✓ و18 ÷ 6 = 3 ✓. القاسم المشترك الأكبر = 6."
          }
        ],
        "hint_en": "List factors of each number, then find the biggest one that appears in both lists.",
        "hint_ar": "اكتب عوامل كل عدد، ثم أوجد أكبر عامل يظهر في كلتا القائمتين.",
        "result_en": "The GCF of 12 and 18 is 6.",
        "result_ar": "القاسم المشترك الأكبر للعددين 12 و18 هو 6."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Draw two circles — one for factors of 12 and one for factors of 18. The overlapping middle holds their common factors.",
            "explanation_ar": "ارسم دائرتين — إحداهما لعوامل 12 والأخرى لعوامل 18. الجزء المتداخل في المنتصف يحوي العوامل المشتركة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Left circle (12 only): 4, 12. Middle (both): 1, 2, 3, 6. Right circle (18 only): 9, 18.",
            "explanation_ar": "الدائرة اليسرى (12 فقط): 4، 12. الوسط (كلاهما): 1، 2، 3، 6. الدائرة اليمنى (18 فقط): 9، 18."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The common factors in the overlap are 1, 2, 3, 6. The greatest is 6.",
            "explanation_ar": "العوامل المشتركة في منطقة التداخل هي 1، 2، 3، 6. أكبرها هو 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The GCF is the largest value in the overlapping region: 6.",
            "explanation_ar": "القاسم المشترك الأكبر هو أكبر قيمة في منطقة التداخل: 6."
          }
        ],
        "hint_en": "Use a Venn diagram: put shared factors in the middle, then pick the largest.",
        "hint_ar": "استخدم مخطط فن: ضع العوامل المشتركة في الوسط، ثم اختر الأكبر.",
        "result_en": "The GCF of 12 and 18 is 6.",
        "result_ar": "القاسم المشترك الأكبر للعددين 12 و18 هو 6."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-factor-medium-002",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Medium",
    "question_en": "What is the LCM of 4 and 6? = ?",
    "question_ar": "ما المضاعف المشترك الأصغر للعددين 4 و6؟ = ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use prime factorisation to find the LCM. Write prime factorisations of 4 and 6.",
            "explanation_ar": "استخدم التحليل إلى عوامل أولية لإيجاد المضاعف المشترك الأصغر. اكتب التحليل الأولي للعددين 4 و6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "4 = 2² and 6 = 2¹ × 3¹.",
            "explanation_ar": "4 = 2² و6 = 2¹ × 3¹."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "LCM = product of all primes using the HIGHER exponent each time: 2^max(2,1) × 3^max(0,1) = 2² × 3¹ = 4 × 3 = 12.",
            "explanation_ar": "المضاعف المشترك الأصغر = حاصل ضرب جميع العوامل الأولية مع أخذ الأس الأكبر في كل مرة: 2^max(2,1) × 3^max(0,1) = 2² × 3¹ = 4 × 3 = 12."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The LCM of 4 and 6 is 12.",
            "explanation_ar": "المضاعف المشترك الأصغر للعددين 4 و6 هو 12."
          }
        ],
        "hint_en": "4 = 2² and 6 = 2×3. Take highest powers: 2² × 3 = 12.",
        "hint_ar": "4 = 2² و6 = 2×3. خذ أعلى الأسس: 2² × 3 = 12.",
        "result_en": "The LCM of 4 and 6 is 12.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 4 و6 هو 12."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "List multiples of the larger number (6) and check which is also a multiple of 4.",
            "explanation_ar": "اكتب مضاعفات العدد الأكبر (6) وتحقق أيها مضاعف للعدد 4 أيضاً."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Multiples of 6: 6, 12, 18, 24 … Is 6 divisible by 4? 6 ÷ 4 = 1.5 ✗. Is 12 divisible by 4? 12 ÷ 4 = 3 ✓.",
            "explanation_ar": "مضاعفات 6: 6، 12، 18، 24 … هل 6 يقبل القسمة على 4؟ 6 ÷ 4 = 1.5 ✗. هل 12 يقبل القسمة على 4؟ 12 ÷ 4 = 3 ✓."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "12 is the first multiple that works for both 4 and 6. LCM = 12.",
            "explanation_ar": "12 هو أول مضاعف مشترك للعددين 4 و6. المضاعف المشترك الأصغر = 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "12 ÷ 4 = 3 ✓ and 12 ÷ 6 = 2 ✓. LCM = 12.",
            "explanation_ar": "12 ÷ 4 = 3 ✓ و12 ÷ 6 = 2 ✓. المضاعف المشترك الأصغر = 12."
          }
        ],
        "hint_en": "List multiples of 6 (6, 12, 18…) and stop at the first one divisible by 4.",
        "hint_ar": "اكتب مضاعفات 6 (6، 12، 18…) وتوقف عند أول عدد يقبل القسمة على 4.",
        "result_en": "The LCM of 4 and 6 is 12.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 4 و6 هو 12."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Two friends jump on a number line: one jumps in steps of 4, the other in steps of 6. When do they first land on the same number?",
            "explanation_ar": "صديقان يقفزان على خط الأعداد: أحدهما يقفز بخطوات من 4، والآخر بخطوات من 6. متى يقعان على العدد نفسه لأول مرة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Mark multiples of 4 with circles: 4, 8, 12. Mark multiples of 6 with squares: 6, 12.",
            "explanation_ar": "ارسم خط أعداد. ضع دوائر على مضاعفات 4: 4، 8، 12. ضع مربعات على مضاعفات 6: 6، 12."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The first number where both a circle and a square appear is 12.",
            "explanation_ar": "أول عدد تظهر عنده دائرة ومربع معاً هو 12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Both friends land on 12 first — so LCM(4, 6) = 12.",
            "explanation_ar": "يصل كلا الصديقين إلى 12 أولاً — إذن المضاعف المشترك الأصغر(4، 6) = 12."
          }
        ],
        "hint_en": "Hop along the number line in steps of 4 and 6 — first shared landing is the LCM.",
        "hint_ar": "اقفز على خط الأعداد بخطوات من 4 ومن 6 — أول موقع مشترك هو المضاعف المشترك الأصغر.",
        "result_en": "The LCM of 4 and 6 is 12.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 4 و6 هو 12."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-factor-medium-003",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Medium",
    "question_en": "What is the GCF of 8 and 20? = ?",
    "question_ar": "ما القاسم المشترك الأكبر للعددين 8 و20؟ = ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write the prime factorisation of both 8 and 20.",
            "explanation_ar": "اكتب التحليل إلى عوامل أولية للعددين 8 و20."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "8 = 2³ and 20 = 2² × 5¹.",
            "explanation_ar": "8 = 2³ و20 = 2² × 5¹."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "GCF = shared prime raised to the lower exponent: only 2 is shared. 2^min(3,2) = 2² = 4.",
            "explanation_ar": "القاسم المشترك الأكبر = العامل الأولي المشترك مرفوعاً للأس الأصغر: 2 هو العامل الأولي المشترك الوحيد. 2^min(3,2) = 2² = 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The GCF of 8 and 20 is 4.",
            "explanation_ar": "القاسم المشترك الأكبر للعددين 8 و20 هو 4."
          }
        ],
        "hint_en": "8 = 2³ and 20 = 2²×5. Only 2 is shared; use the lower power: 2² = 4.",
        "hint_ar": "8 = 2³ و20 = 2²×5. 2 هو العامل المشترك الوحيد؛ استخدم الأس الأصغر: 2² = 4.",
        "result_en": "The GCF of 8 and 20 is 4.",
        "result_ar": "القاسم المشترك الأكبر للعددين 8 و20 هو 4."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "List all factors of 8 and all factors of 20.",
            "explanation_ar": "اكتب جميع عوامل 8 وجميع عوامل 20."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Factors of 8: 1, 2, 4, 8. Factors of 20: 1, 2, 4, 5, 10, 20.",
            "explanation_ar": "عوامل 8: 1، 2، 4، 8. عوامل 20: 1، 2، 4، 5، 10، 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Common factors: 1, 2, 4. The greatest is 4.",
            "explanation_ar": "العوامل المشتركة: 1، 2، 4. أكبرها هو 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "8 ÷ 4 = 2 ✓ and 20 ÷ 4 = 5 ✓. GCF = 4.",
            "explanation_ar": "8 ÷ 4 = 2 ✓ و20 ÷ 4 = 5 ✓. القاسم المشترك الأكبر = 4."
          }
        ],
        "hint_en": "Factors of 8: {1,2,4,8}. Factors of 20: {1,2,4,5,10,20}. Common ones: 1, 2, 4 — largest is 4.",
        "hint_ar": "عوامل 8: {1,2,4,8}. عوامل 20: {1,2,4,5,10,20}. المشتركة: 1، 2، 4 — أكبرها 4.",
        "result_en": "The GCF of 8 and 20 is 4.",
        "result_ar": "القاسم المشترك الأكبر للعددين 8 و20 هو 4."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Draw two overlapping circles (Venn diagram): left circle for factors of 8, right for factors of 20.",
            "explanation_ar": "ارسم دائرتين متداخلتين (مخطط فن): الدائرة اليسرى لعوامل 8، واليمنى لعوامل 20."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Left only: 8. Middle (shared): 1, 2, 4. Right only: 5, 10, 20.",
            "explanation_ar": "اليسار فقط: 8. الوسط (مشترك): 1، 2، 4. اليمين فقط: 5، 10، 20."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The overlapping region contains 1, 2, 4. The largest is 4.",
            "explanation_ar": "منطقة التداخل تحتوي على 1، 2، 4. أكبرها هو 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "GCF = the greatest value in the overlap = 4.",
            "explanation_ar": "القاسم المشترك الأكبر = أكبر قيمة في منطقة التداخل = 4."
          }
        ],
        "hint_en": "Venn diagram: shared factors of 8 and 20 are 1, 2, 4 — the greatest is 4.",
        "hint_ar": "مخطط فن: العوامل المشتركة بين 8 و20 هي 1، 2، 4 — أكبرها 4.",
        "result_en": "The GCF of 8 and 20 is 4.",
        "result_ar": "القاسم المشترك الأكبر للعددين 8 و20 هو 4."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-factor-hard-001",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Hard",
    "question_en": "What is the LCM of 6 and 9? = ?",
    "question_ar": "ما المضاعف المشترك الأصغر للعددين 6 و9؟ = ؟",
    "answer": 18,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use prime factorisation. Both 6 and 9 share the prime factor 3, which makes LCM less obvious than simple multiplication.",
            "explanation_ar": "استخدم التحليل إلى عوامل أولية. كلا العددين 6 و9 يشتركان في العامل الأولي 3، مما يجعل المضاعف المشترك الأصغر أقل وضوحاً من الضرب المباشر."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "6 = 2¹ × 3¹ and 9 = 3².",
            "explanation_ar": "6 = 2¹ × 3¹ و9 = 3²."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "LCM = highest power of each prime present: 2^max(1,0) × 3^max(1,2) = 2¹ × 3² = 2 × 9 = 18.",
            "explanation_ar": "المضاعف المشترك الأصغر = أعلى قوة لكل عامل أولي موجود: 2^max(1,0) × 3^max(1,2) = 2¹ × 3² = 2 × 9 = 18."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The LCM of 6 and 9 is 18.",
            "explanation_ar": "المضاعف المشترك الأصغر للعددين 6 و9 هو 18."
          }
        ],
        "hint_en": "6 = 2×3 and 9 = 3². Take 2¹ and 3² (highest powers): 2 × 9 = 18.",
        "hint_ar": "6 = 2×3 و9 = 3². خذ 2¹ و3² (أعلى الأسس): 2 × 9 = 18.",
        "result_en": "The LCM of 6 and 9 is 18.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 6 و9 هو 18."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "List multiples of 9 (the larger number) and check each against divisibility by 6.",
            "explanation_ar": "اكتب مضاعفات 9 (العدد الأكبر) وتحقق من قابلية كل منها للقسمة على 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Multiples of 9: 9, 18, 27 … 9 ÷ 6 = 1.5 ✗. 18 ÷ 6 = 3 ✓.",
            "explanation_ar": "مضاعفات 9: 9، 18، 27 … 9 ÷ 6 = 1.5 ✗. 18 ÷ 6 = 3 ✓."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "18 is divisible by both 9 and 6. It is the smallest such number.",
            "explanation_ar": "18 يقبل القسمة على كلٍّ من 9 و6. وهو أصغر عدد كذلك."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "18 ÷ 6 = 3 ✓ and 18 ÷ 9 = 2 ✓. LCM = 18.",
            "explanation_ar": "18 ÷ 6 = 3 ✓ و18 ÷ 9 = 2 ✓. المضاعف المشترك الأصغر = 18."
          }
        ],
        "hint_en": "List multiples of 9: 9, 18 … Stop when you find one divisible by 6. Answer: 18.",
        "hint_ar": "اكتب مضاعفات 9: 9، 18 … توقف عندما تجد واحداً يقبل القسمة على 6. الجواب: 18.",
        "result_en": "The LCM of 6 and 9 is 18.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 6 و9 هو 18."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Two buses leave a station: Bus A every 6 minutes, Bus B every 9 minutes. When do they first leave together again?",
            "explanation_ar": "حافلتان تغادران المحطة: الحافلة أ كل 6 دقائق، والحافلة ب كل 9 دقائق. متى تغادران معاً لأول مرة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Bus A stops at 6, 12, 18. Bus B stops at 9, 18. Mark each with different symbols.",
            "explanation_ar": "ارسم خط أعداد. توقفات الحافلة أ: 6، 12، 18. توقفات الحافلة ب: 9، 18. ضع رمزاً مختلفاً لكل منهما."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The first position where both symbols appear is 18.",
            "explanation_ar": "أول موضع يظهر فيه كلا الرمزين هو 18."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Both buses meet at minute 18 — so LCM(6, 9) = 18.",
            "explanation_ar": "تلتقي الحافلتان عند الدقيقة 18 — إذن المضاعف المشترك الأصغر(6، 9) = 18."
          }
        ],
        "hint_en": "Mark multiples of 6 and 9 on a number line — first overlap is at 18.",
        "hint_ar": "ضع مضاعفات 6 و9 على خط أعداد — أول تقاطع عند 18.",
        "result_en": "The LCM of 6 and 9 is 18.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 6 و9 هو 18."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-factor-hard-002",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Hard",
    "question_en": "What is the GCF of 24 and 36? = ?",
    "question_ar": "ما القاسم المشترك الأكبر للعددين 24 و36؟ = ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both 24 and 36 are divisible by many small numbers. Use prime factorisation to find shared prime factors precisely.",
            "explanation_ar": "كلا العددين 24 و36 يقبلان القسمة على كثير من الأعداد الصغيرة. استخدم التحليل إلى عوامل أولية لإيجاد العوامل الأولية المشتركة بدقة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "24 = 2³ × 3¹ and 36 = 2² × 3².",
            "explanation_ar": "24 = 2³ × 3¹ و36 = 2² × 3²."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "GCF = 2^min(3,2) × 3^min(1,2) = 2² × 3¹ = 4 × 3 = 12.",
            "explanation_ar": "القاسم المشترك الأكبر = 2^min(3,2) × 3^min(1,2) = 2² × 3¹ = 4 × 3 = 12."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The GCF of 24 and 36 is 12.",
            "explanation_ar": "القاسم المشترك الأكبر للعددين 24 و36 هو 12."
          }
        ],
        "hint_en": "24 = 2³×3 and 36 = 2²×3². Use lower powers: 2²×3 = 4×3 = 12.",
        "hint_ar": "24 = 2³×3 و36 = 2²×3². استخدم الأسس الأصغر: 2²×3 = 4×3 = 12.",
        "result_en": "The GCF of 24 and 36 is 12.",
        "result_ar": "القاسم المشترك الأكبر للعددين 24 و36 هو 12."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "List all factors of 24 and all factors of 36.",
            "explanation_ar": "اكتب جميع عوامل 24 وجميع عوامل 36."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.",
            "explanation_ar": "عوامل 24: 1، 2، 3، 4، 6، 8، 12، 24. عوامل 36: 1، 2، 3، 4، 6، 9، 12، 18، 36."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Common factors: 1, 2, 3, 4, 6, 12. The greatest is 12.",
            "explanation_ar": "العوامل المشتركة: 1، 2، 3، 4، 6، 12. أكبرها هو 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "24 ÷ 12 = 2 ✓ and 36 ÷ 12 = 3 ✓. GCF = 12.",
            "explanation_ar": "24 ÷ 12 = 2 ✓ و36 ÷ 12 = 3 ✓. القاسم المشترك الأكبر = 12."
          }
        ],
        "hint_en": "Common factors of 24 and 36 include 1, 2, 3, 4, 6, 12 — the largest is 12.",
        "hint_ar": "العوامل المشتركة للعددين 24 و36 تشمل 1، 2، 3، 4، 6، 12 — أكبرها 12.",
        "result_en": "The GCF of 24 and 36 is 12.",
        "result_ar": "القاسم المشترك الأكبر للعددين 24 و36 هو 12."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Draw two overlapping circles (Venn diagram): left for factors of 24, right for factors of 36.",
            "explanation_ar": "ارسم دائرتين متداخلتين (مخطط فن): اليسرى لعوامل 24، واليمنى لعوامل 36."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Left only: 8, 24. Middle (shared): 1, 2, 3, 4, 6, 12. Right only: 9, 18, 36.",
            "explanation_ar": "اليسار فقط: 8، 24. الوسط (مشترك): 1، 2، 3، 4، 6، 12. اليمين فقط: 9، 18، 36."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The overlapping region: 1, 2, 3, 4, 6, 12. The greatest common factor is 12.",
            "explanation_ar": "منطقة التداخل: 1، 2، 3، 4، 6، 12. القاسم المشترك الأكبر هو 12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "GCF = the largest number in the overlapping region = 12.",
            "explanation_ar": "القاسم المشترك الأكبر = أكبر عدد في منطقة التداخل = 12."
          }
        ],
        "hint_en": "Venn diagram overlap for 24 and 36 includes 12 as the largest shared factor.",
        "hint_ar": "منطقة تداخل مخطط فن للعددين 24 و36 تتضمن 12 كأكبر عامل مشترك.",
        "result_en": "The GCF of 24 and 36 is 12.",
        "result_ar": "القاسم المشترك الأكبر للعددين 24 و36 هو 12."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-factor-hard-003",
    "grade": 4,
    "bank": "specific",
    "category": "Factors & Multiples",
    "level": "Hard",
    "question_en": "What is the LCM of 8 and 12? = ?",
    "question_ar": "ما المضاعف المشترك الأصغر للعددين 8 و12؟ = ؟",
    "answer": 24,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both 8 and 12 share prime factor 2. Use prime factorisation to avoid simply multiplying them (8 × 12 = 96, which is NOT the LCM).",
            "explanation_ar": "كلا العددين 8 و12 يشتركان في العامل الأولي 2. استخدم التحليل إلى عوامل أولية لتجنب ضربهما مباشرة (8 × 12 = 96، وهذا ليس المضاعف المشترك الأصغر)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "8 = 2³ and 12 = 2² × 3¹.",
            "explanation_ar": "8 = 2³ و12 = 2² × 3¹."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "LCM = 2^max(3,2) × 3^max(0,1) = 2³ × 3¹ = 8 × 3 = 24.",
            "explanation_ar": "المضاعف المشترك الأصغر = 2^max(3,2) × 3^max(0,1) = 2³ × 3¹ = 8 × 3 = 24."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The LCM of 8 and 12 is 24.",
            "explanation_ar": "المضاعف المشترك الأصغر للعددين 8 و12 هو 24."
          }
        ],
        "hint_en": "8 = 2³ and 12 = 2²×3. Take highest powers: 2³ × 3 = 8 × 3 = 24.",
        "hint_ar": "8 = 2³ و12 = 2²×3. خذ أعلى الأسس: 2³ × 3 = 8 × 3 = 24.",
        "result_en": "The LCM of 8 and 12 is 24.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 8 و12 هو 24."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "List multiples of 12 (the larger) and check each for divisibility by 8.",
            "explanation_ar": "اكتب مضاعفات 12 (الأكبر) وتحقق من قابلية كل منها للقسمة على 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Multiples of 12: 12, 24, 36 … 12 ÷ 8 = 1.5 ✗. 24 ÷ 8 = 3 ✓.",
            "explanation_ar": "مضاعفات 12: 12، 24، 36 … 12 ÷ 8 = 1.5 ✗. 24 ÷ 8 = 3 ✓."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "24 is divisible by both 12 and 8. It is the smallest such multiple.",
            "explanation_ar": "24 يقبل القسمة على كلٍّ من 12 و8. وهو أصغر مضاعف مشترك."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "24 ÷ 8 = 3 ✓ and 24 ÷ 12 = 2 ✓. LCM = 24.",
            "explanation_ar": "24 ÷ 8 = 3 ✓ و24 ÷ 12 = 2 ✓. المضاعف المشترك الأصغر = 24."
          }
        ],
        "hint_en": "List multiples of 12: 12, 24 … The first one divisible by 8 is 24.",
        "hint_ar": "اكتب مضاعفات 12: 12، 24 … أول واحد يقبل القسمة على 8 هو 24.",
        "result_en": "The LCM of 8 and 12 is 24.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 8 و12 هو 24."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Two sprinklers water a garden: one activates every 8 minutes, the other every 12 minutes. When do they first go off together?",
            "explanation_ar": "رشاشان يسقيان حديقة: أحدهما يعمل كل 8 دقائق، والآخر كل 12 دقيقة. متى يعملان معاً لأول مرة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Mark a number line. Sprinkler A activates at 8, 16, 24. Sprinkler B activates at 12, 24.",
            "explanation_ar": "ضع علامات على خط أعداد. الرشاش أ يعمل عند: 8، 16، 24. الرشاش ب يعمل عند: 12، 24."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The first number appearing in both sequences is 24.",
            "explanation_ar": "أول عدد يظهر في كلتا المتتاليتين هو 24."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Both sprinklers activate together at minute 24. LCM(8, 12) = 24.",
            "explanation_ar": "يعمل كلا الرشاشين معاً عند الدقيقة 24. المضاعف المشترك الأصغر(8، 12) = 24."
          }
        ],
        "hint_en": "Multiples of 8: 8, 16, 24. Multiples of 12: 12, 24. First overlap is 24.",
        "hint_ar": "مضاعفات 8: 8، 16، 24. مضاعفات 12: 12، 24. أول تقاطع هو 24.",
        "result_en": "The LCM of 8 and 12 is 24.",
        "result_ar": "المضاعف المشترك الأصغر للعددين 8 و12 هو 24."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "factors_multiples"
    }
  },
  {
    "id": "g4-specific-frac-easy-001",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Easy",
    "question_en": "1/2 = ?/8",
    "question_ar": "1/2 = ؟/8",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You have 1/2 and need to find the equivalent fraction with denominator 8.",
            "explanation_ar": "لديك 1/2 وتحتاج إلى إيجاد الكسر المكافئ بمقام 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the scale factor: 8 ÷ 2 = 4. The denominator was multiplied by 4.",
            "explanation_ar": "أوجد معامل التحجيم: 8 ÷ 2 = 4. تمّ ضرب المقام في 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since the denominator was multiplied by 4, the numerator must also be multiplied by 4: 1 × 4 = 4.",
            "explanation_ar": "بما أن المقام ضُرب في 4، يجب أن يُضرب البسط أيضاً في 4: 1 × 4 = 4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "1/2 = 4/8. The missing numerator is 4.",
            "explanation_ar": "1/2 = 4/8. البسط المجهول هو 4."
          }
        ],
        "hint_en": "What do you multiply 2 by to get 8? Multiply the top by the same number.",
        "hint_ar": "بماذا تضرب 2 لتحصل على 8؟ اضرب البسط بالعدد نفسه.",
        "result_en": "The answer is 4. So 1/2 = 4/8.",
        "result_ar": "الجواب هو 4. إذاً 1/2 = 4/8."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The fraction is 1/2. The new denominator is 8. Write the two denominators: 2 and 8.",
            "explanation_ar": "الكسر هو 1/2. المقام الجديد هو 8. اكتب المقامَين: 2 و8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find how many times 2 goes into 8: 8 ÷ 2 = 4. This is the scale factor.",
            "explanation_ar": "أوجد كم مرة يدخل 2 في 8: 8 ÷ 2 = 4. هذا هو معامل التحجيم."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply the original numerator by the scale factor: 1 × 4 = 4.",
            "explanation_ar": "اضرب البسط الأصلي في معامل التحجيم: 1 × 4 = 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4/8 simplifies back to 1/2 ✓. The answer is 4.",
            "explanation_ar": "تحقق: 4/8 تُبسَّط إلى 1/2 ✓. الجواب هو 4."
          }
        ],
        "hint_en": "Divide the new denominator by the old one to find the scale factor, then multiply the numerator.",
        "hint_ar": "اقسم المقام الجديد على القديم لتجد معامل التحجيم، ثم اضرب البسط.",
        "result_en": "The answer is 4. So 1/2 = 4/8.",
        "result_ar": "الجواب هو 4. إذاً 1/2 = 4/8."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a chocolate bar split into 2 equal pieces. You have 1 piece — that is 1/2.",
            "explanation_ar": "تخيّل لوح شوكولاتة مقسّماً إلى قطعتين متساويتين. لديك قطعة واحدة — أي 1/2."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Now cut each of the 2 pieces into 4 smaller pieces. The bar now has 8 equal pieces total.",
            "explanation_ar": "الآن قطّع كل قطعة من القطعتين إلى 4 أجزاء أصغر. أصبح اللوح يحتوي على 8 قطع متساوية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Your original 1 piece became 4 small pieces out of 8. So 1/2 = 4/8.",
            "explanation_ar": "قطعتك الأصلية الواحدة أصبحت 4 قطع صغيرة من أصل 8. إذاً 1/2 = 4/8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The missing numerator is the number of small pieces you have: 4.",
            "explanation_ar": "البسط المجهول هو عدد القطع الصغيرة التي لديك: 4."
          }
        ],
        "hint_en": "Draw a rectangle, split it in half, then split each half into 4 parts. Count the shaded parts.",
        "hint_ar": "ارسم مستطيلاً، اقسمه إلى نصفين، ثم اقسم كل نصف إلى 4 أجزاء. عدّ الأجزاء المظلّلة.",
        "result_en": "The answer is 4. So 1/2 = 4/8.",
        "result_ar": "الجواب هو 4. إذاً 1/2 = 4/8."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-frac-easy-002",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Easy",
    "question_en": "2/3 = ?/9",
    "question_ar": "2/3 = ؟/9",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You have 2/3 and need to find the equivalent fraction with denominator 9.",
            "explanation_ar": "لديك 2/3 وتحتاج إلى إيجاد الكسر المكافئ بمقام 9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the scale factor: 9 ÷ 3 = 3. The denominator was multiplied by 3.",
            "explanation_ar": "أوجد معامل التحجيم: 9 ÷ 3 = 3. تمّ ضرب المقام في 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since the denominator was multiplied by 3, the numerator must also be multiplied by 3: 2 × 3 = 6.",
            "explanation_ar": "بما أن المقام ضُرب في 3، يجب أن يُضرب البسط أيضاً في 3: 2 × 3 = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2/3 = 6/9. The missing numerator is 6.",
            "explanation_ar": "2/3 = 6/9. البسط المجهول هو 6."
          }
        ],
        "hint_en": "What do you multiply 3 by to get 9? Multiply the top by the same number.",
        "hint_ar": "بماذا تضرب 3 لتحصل على 9؟ اضرب البسط بالعدد نفسه.",
        "result_en": "The answer is 6. So 2/3 = 6/9.",
        "result_ar": "الجواب هو 6. إذاً 2/3 = 6/9."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The fraction is 2/3. The new denominator is 9. Write both denominators: 3 and 9.",
            "explanation_ar": "الكسر هو 2/3. المقام الجديد هو 9. اكتب المقامَين: 3 و9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find the scale factor: 9 ÷ 3 = 3.",
            "explanation_ar": "أوجد معامل التحجيم: 9 ÷ 3 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply the numerator by 3: 2 × 3 = 6.",
            "explanation_ar": "اضرب البسط في 3: 2 × 3 = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 6/9 simplifies to 2/3 ✓. The answer is 6.",
            "explanation_ar": "تحقق: 6/9 تُبسَّط إلى 2/3 ✓. الجواب هو 6."
          }
        ],
        "hint_en": "Divide 9 by 3 to get the scale factor, then multiply the numerator 2 by it.",
        "hint_ar": "اقسم 9 على 3 لتحصل على معامل التحجيم، ثم اضرب البسط 2 فيه.",
        "result_en": "The answer is 6. So 2/3 = 6/9.",
        "result_ar": "الجواب هو 6. إذاً 2/3 = 6/9."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a pizza cut into 3 equal slices. You eat 2 slices — that is 2/3 of the pizza.",
            "explanation_ar": "تخيّل بيتزا مقطّعة إلى 3 شرائح متساوية. أنت تأكل شريحتين — أي 2/3 من البيتزا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Now cut each of the 3 slices into 3 smaller pieces. The pizza now has 9 small pieces total.",
            "explanation_ar": "الآن قطّع كل شريحة من الشرائح الثلاث إلى 3 قطع أصغر. أصبحت البيتزا تحتوي على 9 قطع صغيرة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Your 2 original slices became 6 small pieces out of 9. So 2/3 = 6/9.",
            "explanation_ar": "شريحتاك الأصليتان أصبحتا 6 قطع صغيرة من أصل 9. إذاً 2/3 = 6/9."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The missing numerator is 6.",
            "explanation_ar": "البسط المجهول هو 6."
          }
        ],
        "hint_en": "Draw a bar split into 3 parts, shade 2. Then split each part into 3 — count the shaded small parts.",
        "hint_ar": "ارسم شريطاً مقسّماً إلى 3 أجزاء، ظلّل 2. ثم اقسم كل جزء إلى 3 — عدّ الأجزاء الصغيرة المظلّلة.",
        "result_en": "The answer is 6. So 2/3 = 6/9.",
        "result_ar": "الجواب هو 6. إذاً 2/3 = 6/9."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-frac-easy-003",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Easy",
    "question_en": "3/4 = ?/12",
    "question_ar": "3/4 = ؟/12",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You have 3/4 and need to find the equivalent fraction with denominator 12.",
            "explanation_ar": "لديك 3/4 وتحتاج إلى إيجاد الكسر المكافئ بمقام 12."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the scale factor: 12 ÷ 4 = 3. The denominator was multiplied by 3.",
            "explanation_ar": "أوجد معامل التحجيم: 12 ÷ 4 = 3. تمّ ضرب المقام في 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since the denominator was multiplied by 3, the numerator must also be multiplied by 3: 3 × 3 = 9.",
            "explanation_ar": "بما أن المقام ضُرب في 3، يجب أن يُضرب البسط أيضاً في 3: 3 × 3 = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3/4 = 9/12. The missing numerator is 9.",
            "explanation_ar": "3/4 = 9/12. البسط المجهول هو 9."
          }
        ],
        "hint_en": "What do you multiply 4 by to get 12? Multiply the top by the same number.",
        "hint_ar": "بماذا تضرب 4 لتحصل على 12؟ اضرب البسط بالعدد نفسه.",
        "result_en": "The answer is 9. So 3/4 = 9/12.",
        "result_ar": "الجواب هو 9. إذاً 3/4 = 9/12."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The fraction is 3/4. The new denominator is 12. Write both denominators: 4 and 12.",
            "explanation_ar": "الكسر هو 3/4. المقام الجديد هو 12. اكتب المقامَين: 4 و12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find the scale factor: 12 ÷ 4 = 3.",
            "explanation_ar": "أوجد معامل التحجيم: 12 ÷ 4 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply the numerator by 3: 3 × 3 = 9.",
            "explanation_ar": "اضرب البسط في 3: 3 × 3 = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 9/12 simplifies to 3/4 ✓. The answer is 9.",
            "explanation_ar": "تحقق: 9/12 تُبسَّط إلى 3/4 ✓. الجواب هو 9."
          }
        ],
        "hint_en": "Divide 12 by 4 to get the scale factor, then multiply the numerator 3 by it.",
        "hint_ar": "اقسم 12 على 4 لتحصل على معامل التحجيم، ثم اضرب البسط 3 فيه.",
        "result_en": "The answer is 9. So 3/4 = 9/12.",
        "result_ar": "الجواب هو 9. إذاً 3/4 = 9/12."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a ribbon cut into 4 equal sections. You use 3 sections — that is 3/4 of the ribbon.",
            "explanation_ar": "تخيّل شريطاً مقطّعاً إلى 4 أقسام متساوية. تستخدم 3 أقسام — أي 3/4 من الشريط."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Now cut each of the 4 sections into 3 smaller pieces. The ribbon now has 12 small pieces total.",
            "explanation_ar": "الآن قطّع كل قسم من الأقسام الأربعة إلى 3 قطع أصغر. أصبح الشريط يحتوي على 12 قطعة صغيرة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Your 3 original sections became 9 small pieces out of 12. So 3/4 = 9/12.",
            "explanation_ar": "أقسامك الأصلية الثلاثة أصبحت 9 قطع صغيرة من أصل 12. إذاً 3/4 = 9/12."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The missing numerator is 9.",
            "explanation_ar": "البسط المجهول هو 9."
          }
        ],
        "hint_en": "Draw a bar split into 4 parts, shade 3. Then cut each part into 3 — count all shaded small parts.",
        "hint_ar": "ارسم شريطاً مقسّماً إلى 4 أجزاء، ظلّل 3. ثم قطّع كل جزء إلى 3 — عدّ جميع الأجزاء الصغيرة المظلّلة.",
        "result_en": "The answer is 9. So 3/4 = 9/12.",
        "result_ar": "الجواب هو 9. إذاً 3/4 = 9/12."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-frac-med-001",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Medium",
    "question_en": "What is the LCD (Lowest Common Denominator) of 1/4 and 1/6?",
    "question_ar": "ما هو المقام المشترك الأصغر (LCD) للكسرين 1/4 و1/6؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The denominators are 4 and 6. You need the smallest number that both 4 and 6 divide into evenly.",
            "explanation_ar": "المقامان هما 4 و6. تحتاج إلى أصغر عدد يقبل القسمة على كل من 4 و6 بلا باقٍ."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "List multiples of the larger denominator, 6: 6, 12, 18, 24 …",
            "explanation_ar": "اكتب مضاعفات المقام الأكبر، وهو 6: 6، 12، 18، 24 …"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Check each multiple: does 4 divide into 6? No. Does 4 divide into 12? Yes, 12 ÷ 4 = 3. Stop here.",
            "explanation_ar": "تحقق من كل مضاعف: هل 4 يقسم 6؟ لا. هل 4 يقسم 12؟ نعم، 12 ÷ 4 = 3. أوقف هنا."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The LCD of 1/4 and 1/6 is 12.",
            "explanation_ar": "المقام المشترك الأصغر للكسرين 1/4 و1/6 هو 12."
          }
        ],
        "hint_en": "List multiples of 6 until you find one that 4 also divides into.",
        "hint_ar": "اكتب مضاعفات 6 حتى تجد واحداً يقبل القسمة على 4 أيضاً.",
        "result_en": "The answer is 12. The LCD of 1/4 and 1/6 is 12.",
        "result_ar": "الجواب هو 12. المقام المشترك الأصغر للكسرين 1/4 و1/6 هو 12."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break each denominator into prime factors: 4 = 2 × 2, and 6 = 2 × 3.",
            "explanation_ar": "حلّل كل مقام إلى عوامله الأولية: 4 = 2 × 2، و6 = 2 × 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Take the highest power of each prime: take 2² from 4, and take 3 from 6.",
            "explanation_ar": "خذ أعلى قوة لكل عامل أولي: خذ 2² من 4، وخذ 3 من 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply them together: 2² × 3 = 4 × 3 = 12.",
            "explanation_ar": "اضربها معاً: 2² × 3 = 4 × 3 = 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 12 ÷ 4 = 3 ✓ and 12 ÷ 6 = 2 ✓. The LCD is 12.",
            "explanation_ar": "تحقق: 12 ÷ 4 = 3 ✓ و12 ÷ 6 = 2 ✓. المقام المشترك الأصغر هو 12."
          }
        ],
        "hint_en": "Factor 4 and 6 into primes, then multiply the highest powers of each prime together.",
        "hint_ar": "حلّل 4 و6 إلى عوامل أولية، ثم اضرب أعلى قوة لكل عامل.",
        "result_en": "The answer is 12. The LCD of 1/4 and 1/6 is 12.",
        "result_ar": "الجواب هو 12. المقام المشترك الأصغر للكسرين 1/4 و1/6 هو 12."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine two number lines — one with marks every 1/4 and another with marks every 1/6. You want the first mark they share.",
            "explanation_ar": "تخيّل خطَّي أعداد — أحدهما بعلامات كل 1/4 والآخر بعلامات كل 1/6. تريد أول علامة مشتركة بينهما."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Mark fourths: 1/4, 2/4, 3/4, 4/4=1, 5/4, 6/4=3/2… Mark sixths: 1/6, 2/6, 3/6, 4/6, 5/6, 6/6=1…",
            "explanation_ar": "ضع علامات الأرباع: 1/4، 2/4، 3/4، 4/4=1 ... وعلامات الأسداس: 1/6، 2/6، 3/6، 4/6، 5/6، 6/6=1 ..."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Convert to common units: fourths reach 12/12 at the 3rd step from 1 (i.e., 3/4=9/12). Sixths reach 12/12 at the 2nd step (2/6=4/12). The first whole-number alignment is at 12 twelfths.",
            "explanation_ar": "حوّل إلى وحدات مشتركة: الأرباع تصل إلى 12/12 بعد 3 خطوات، والأسداس تصل إليها بعد خطوتين. أول توافق كامل هو عند 12 اثنا عشرياً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The first shared denominator is 12. That is the LCD.",
            "explanation_ar": "أول مقام مشترك هو 12. هذا هو المقام المشترك الأصغر."
          }
        ],
        "hint_en": "List: 4, 8, 12 … and 6, 12 … — the first number appearing in both lists is the LCD.",
        "hint_ar": "اكتب: 4، 8، 12 ... و6، 12 ... — أول عدد يظهر في كلتا القائمتين هو المقام المشترك الأصغر.",
        "result_en": "The answer is 12. The LCD of 1/4 and 1/6 is 12.",
        "result_ar": "الجواب هو 12. المقام المشترك الأصغر للكسرين 1/4 و1/6 هو 12."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-frac-med-002",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Medium",
    "question_en": "What is the LCD (Lowest Common Denominator) of 1/3 and 1/5?",
    "question_ar": "ما هو المقام المشترك الأصغر (LCD) للكسرين 1/3 و1/5؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The denominators are 3 and 5. Because 3 and 5 share no common factors other than 1, the LCD is simply their product.",
            "explanation_ar": "المقامان هما 3 و5. بما أن 3 و5 لا يشتركان في عوامل مشتركة غير 1، فإن المقام المشترك الأصغر هو حاصل ضربهما."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the two denominators: 3 × 5 = 15.",
            "explanation_ar": "اضرب المقامَين: 3 × 5 = 15."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Verify: 15 ÷ 3 = 5 ✓ and 15 ÷ 5 = 3 ✓. No smaller number works for both.",
            "explanation_ar": "تحقق: 15 ÷ 3 = 5 ✓ و15 ÷ 5 = 3 ✓. لا يوجد عدد أصغر يصلح لكليهما."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The LCD of 1/3 and 1/5 is 15.",
            "explanation_ar": "المقام المشترك الأصغر للكسرين 1/3 و1/5 هو 15."
          }
        ],
        "hint_en": "When two denominators share no common factor, multiply them together to get the LCD.",
        "hint_ar": "عندما لا يشترك مقامان في أي عامل مشترك، اضربهما معاً للحصول على المقام المشترك الأصغر.",
        "result_en": "The answer is 15. The LCD of 1/3 and 1/5 is 15.",
        "result_ar": "الجواب هو 15. المقام المشترك الأصغر للكسرين 1/3 و1/5 هو 15."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "List multiples of 3: 3, 6, 9, 12, 15 … List multiples of 5: 5, 10, 15 …",
            "explanation_ar": "اكتب مضاعفات 3: 3، 6، 9، 12، 15 ... واكتب مضاعفات 5: 5، 10، 15 ..."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Scan both lists for the first common number.",
            "explanation_ar": "تفحّص كلتا القائمتين بحثاً عن أول عدد مشترك."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15 appears in both lists first.",
            "explanation_ar": "15 يظهر في كلتا القائمتين أولاً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "15 ÷ 3 = 5 ✓ and 15 ÷ 5 = 3 ✓. The LCD is 15.",
            "explanation_ar": "15 ÷ 3 = 5 ✓ و15 ÷ 5 = 3 ✓. المقام المشترك الأصغر هو 15."
          }
        ],
        "hint_en": "Write multiples of 3 and multiples of 5 and find the first match.",
        "hint_ar": "اكتب مضاعفات 3 ومضاعفات 5 وأوجد أول تطابق.",
        "result_en": "The answer is 15. The LCD of 1/3 and 1/5 is 15.",
        "result_ar": "الجواب هو 15. المقام المشترك الأصغر للكسرين 1/3 و1/5 هو 15."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine two friends sharing a cake: one cuts it into 3 pieces, the other into 5 pieces. To compare fairly, you need a size both can use.",
            "explanation_ar": "تخيّل صديقَين يتقاسمان كعكة: أحدهما يقطعها إلى 3 قطع والآخر إلى 5 قطع. للمقارنة بشكل عادل، تحتاج إلى حجم يصلح لكليهما."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Mark thirds: 1/3, 2/3, 3/3 … Mark fifths: 1/5, 2/5, 3/5, 4/5, 5/5 …",
            "explanation_ar": "ارسم خط أعداد. ضع علامات الأثلاث: 1/3، 2/3، 3/3 ... وعلامات الأخماس: 1/5، 2/5، 3/5، 4/5، 5/5 ..."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Continue until a mark falls in the same spot: 5/3 = 15/15 and 3/5 = 15/15 both land on 1 whole at 15 fifteenths.",
            "explanation_ar": "استمر حتى تقع علامة في نفس المكان: 5/3 و3/5 كلاهما يصلان إلى 15 خمسة عشرياً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The first shared denominator is 15. That is the LCD.",
            "explanation_ar": "أول مقام مشترك هو 15. هذا هو المقام المشترك الأصغر."
          }
        ],
        "hint_en": "Count up by 3s (3, 6, 9, 12, 15) and by 5s (5, 10, 15) — the first number they share is the LCD.",
        "hint_ar": "عدّ بمضاعفات 3 (3، 6، 9، 12، 15) وبمضاعفات 5 (5، 10، 15) — أول عدد مشترك هو المقام المشترك الأصغر.",
        "result_en": "The answer is 15. The LCD of 1/3 and 1/5 is 15.",
        "result_ar": "الجواب هو 15. المقام المشترك الأصغر للكسرين 1/3 و1/5 هو 15."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-frac-med-003",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Medium",
    "question_en": "Simplify 6/9. What is the numerator in simplest form?",
    "question_ar": "بسّط الكسر 6/9. ما هو البسط في أبسط صورة؟",
    "answer": 2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You need to simplify 6/9. Look at the numerator 6 and denominator 9 — both are even multiples of 3.",
            "explanation_ar": "تحتاج إلى تبسيط 6/9. انظر إلى البسط 6 والمقام 9 — كلاهما من مضاعفات 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the Greatest Common Factor (GCF) of 6 and 9. Factors of 6: 1, 2, 3, 6. Factors of 9: 1, 3, 9. GCF = 3.",
            "explanation_ar": "أوجد أكبر عامل مشترك (GCF) لـ6 و9. عوامل 6: 1، 2، 3، 6. عوامل 9: 1، 3، 9. أكبر عامل مشترك = 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both numerator and denominator by 3: 6 ÷ 3 = 2 and 9 ÷ 3 = 3.",
            "explanation_ar": "اقسم كلاً من البسط والمقام على 3: 6 ÷ 3 = 2 و9 ÷ 3 = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "6/9 = 2/3 in simplest form. The numerator is 2.",
            "explanation_ar": "6/9 = 2/3 في أبسط صورة. البسط هو 2."
          }
        ],
        "hint_en": "Find the biggest number that divides evenly into both 6 and 9, then divide both by it.",
        "hint_ar": "أوجد أكبر عدد يقسم 6 و9 معاً بلا باقٍ، ثم اقسم كليهما عليه.",
        "result_en": "The answer is 2. Simplified: 6/9 = 2/3.",
        "result_ar": "الجواب هو 2. مبسّطاً: 6/9 = 2/3."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write 6 and 9 as products of 3: 6 = 3 × 2 and 9 = 3 × 3.",
            "explanation_ar": "اكتب 6 و9 كحاصل ضرب 3: 6 = 3 × 2 و9 = 3 × 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Cancel the common factor of 3 from numerator and denominator.",
            "explanation_ar": "ألغِ العامل المشترك 3 من البسط والمقام."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "What remains: numerator = 2, denominator = 3. The fraction is 2/3.",
            "explanation_ar": "ما تبقى: البسط = 2، المقام = 3. الكسر هو 2/3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2 and 3 share no common factor other than 1, so 2/3 is fully simplified. The numerator is 2.",
            "explanation_ar": "تحقق: 2 و3 لا يشتركان في أي عامل غير 1، إذاً 2/3 مبسّط تماماً. البسط هو 2."
          }
        ],
        "hint_en": "Both 6 and 9 are in the 3 times table. Divide each by 3.",
        "hint_ar": "كلا العددَين 6 و9 من مضاعفات 3. اقسم كليهما على 3.",
        "result_en": "The answer is 2. Simplified: 6/9 = 2/3.",
        "result_ar": "الجواب هو 2. مبسّطاً: 6/9 = 2/3."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a fraction bar showing 6/9 — a rectangle divided into 9 equal strips, with 6 shaded.",
            "explanation_ar": "تخيّل شريط كسر يمثّل 6/9 — مستطيل مقسّم إلى 9 أشرطة متساوية، منها 6 مظلّلة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group the 9 strips into sets of 3. You get 3 groups total, and 2 of those groups are fully shaded.",
            "explanation_ar": "جمّع الأشرطة الـ9 في مجموعات من 3. تحصل على 3 مجموعات، منها 2 مجموعتان مظلّلتان بالكامل."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "2 out of 3 groups are shaded — so 6/9 looks exactly like 2/3.",
            "explanation_ar": "مجموعتان من 3 مظلّلتان — إذاً 6/9 تبدو تماماً مثل 2/3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The simplified numerator is 2.",
            "explanation_ar": "البسط المبسّط هو 2."
          }
        ],
        "hint_en": "Draw 9 boxes and shade 6. Then circle every group of 3 — how many groups are shaded?",
        "hint_ar": "ارسم 9 مربعات وظلّل 6. ثم دوّر كل مجموعة من 3 — كم مجموعة مظلّلة؟",
        "result_en": "The answer is 2. Simplified: 6/9 = 2/3.",
        "result_ar": "الجواب هو 2. مبسّطاً: 6/9 = 2/3."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-frac-hard-001",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Hard",
    "question_en": "Which is larger: (1) 5/6 or (2) 3/4? Type 1 or 2.",
    "question_ar": "أيّهما أكبر: (1) 5/6 أم (2) 3/4؟ اكتب 1 أو 2.",
    "answer": 1,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Compare 5/6 and 3/4. The denominators are 6 and 4. Find the LCD to convert both fractions.",
            "explanation_ar": "قارن 5/6 و3/4. المقامان هما 6 و4. أوجد المقام المشترك الأصغر لتحويل كلا الكسرين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "LCD of 6 and 4: multiples of 6 are 6, 12 … Does 4 divide 12? Yes. LCD = 12.",
            "explanation_ar": "المقام المشترك الأصغر لـ6 و4: مضاعفات 6 هي 6، 12 ... هل 4 يقسم 12؟ نعم. المقام المشترك الأصغر = 12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Convert: 5/6 = 10/12 (multiply top and bottom by 2). 3/4 = 9/12 (multiply top and bottom by 3). Now compare 10 and 9.",
            "explanation_ar": "حوّل: 5/6 = 10/12 (اضرب البسط والمقام في 2). 3/4 = 9/12 (اضرب البسط والمقام في 3). الآن قارن 10 و9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "10/12 > 9/12, so 5/6 > 3/4. The larger fraction is (1) 5/6.",
            "explanation_ar": "10/12 > 9/12، إذاً 5/6 > 3/4. الكسر الأكبر هو (1) 5/6."
          }
        ],
        "hint_en": "Convert both fractions to twelfths, then compare the numerators.",
        "hint_ar": "حوّل كلا الكسرين إلى اثنا عشريات، ثم قارن البسطَين.",
        "result_en": "The answer is 1. 5/6 = 10/12 is greater than 3/4 = 9/12.",
        "result_ar": "الجواب هو 1. 5/6 = 10/12 أكبر من 3/4 = 9/12."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The two fractions are 5/6 and 3/4. Find LCD(6, 4) = 12.",
            "explanation_ar": "الكسران هما 5/6 و3/4. أوجد المقام المشترك الأصغر (6، 4) = 12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Scale 5/6: 12 ÷ 6 = 2, so 5 × 2 = 10. New fraction: 10/12. Scale 3/4: 12 ÷ 4 = 3, so 3 × 3 = 9. New fraction: 9/12.",
            "explanation_ar": "حوّل 5/6: 12 ÷ 6 = 2، إذاً 5 × 2 = 10. الكسر الجديد: 10/12. حوّل 3/4: 12 ÷ 4 = 3، إذاً 3 × 3 = 9. الكسر الجديد: 9/12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Compare numerators: 10 vs 9. Since 10 > 9, the fraction 10/12 (which is 5/6) is larger.",
            "explanation_ar": "قارن البسطَين: 10 مقابل 9. بما أن 10 > 9، فإن الكسر 10/12 (أي 5/6) أكبر."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "5/6 is the larger fraction. The answer is 1.",
            "explanation_ar": "5/6 هو الكسر الأكبر. الجواب هو 1."
          }
        ],
        "hint_en": "Find the LCD of 6 and 4, convert both fractions, then compare the numerators.",
        "hint_ar": "أوجد المقام المشترك الأصغر لـ6 و4، حوّل كلا الكسرين، ثم قارن البسطَين.",
        "result_en": "The answer is 1. 5/6 = 10/12 is greater than 3/4 = 9/12.",
        "result_ar": "الجواب هو 1. 5/6 = 10/12 أكبر من 3/4 = 9/12."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine two chocolate bars of the same size. One is cut into 6 pieces and you eat 5. The other is cut into 4 pieces and you eat 3. Which one did you eat more of?",
            "explanation_ar": "تخيّل لوحَي شوكولاتة بنفس الحجم. أحدهما مقطّع إلى 6 قطع وتأكل 5، والآخر مقطّع إلى 4 قطع وتأكل 3. من أيّهما أكلت أكثر؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw two equal rectangles. Split the first into 12 equal parts and shade 10 (representing 5/6). Split the second into 12 equal parts and shade 9 (representing 3/4).",
            "explanation_ar": "ارسم مستطيلَين متساويَين. قسّم الأول إلى 12 جزءاً متساوياً وظلّل 10 (يمثّل 5/6). قسّم الثاني إلى 12 جزءاً وظلّل 9 (يمثّل 3/4)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The first rectangle has more shading: 10 parts vs 9 parts. So 5/6 covers more area than 3/4.",
            "explanation_ar": "المستطيل الأول أكثر تظليلاً: 10 أجزاء مقابل 9 أجزاء. إذاً 5/6 يغطي مساحة أكبر من 3/4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "5/6 is larger. The answer is 1.",
            "explanation_ar": "5/6 أكبر. الجواب هو 1."
          }
        ],
        "hint_en": "Convert both to twelfths and draw fraction bars — count the shaded parts.",
        "hint_ar": "حوّل كليهما إلى اثنا عشريات وارسم أشرطة الكسر — عدّ الأجزاء المظلّلة.",
        "result_en": "The answer is 1. 5/6 = 10/12 is greater than 3/4 = 9/12.",
        "result_ar": "الجواب هو 1. 5/6 = 10/12 أكبر من 3/4 = 9/12."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-frac-hard-002",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Hard",
    "question_en": "3/5 = ?/20",
    "question_ar": "3/5 = ؟/20",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You have 3/5 and need to find the equivalent fraction with denominator 20.",
            "explanation_ar": "لديك 3/5 وتحتاج إلى إيجاد الكسر المكافئ بمقام 20."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the scale factor: 20 ÷ 5 = 4. The denominator was multiplied by 4.",
            "explanation_ar": "أوجد معامل التحجيم: 20 ÷ 5 = 4. تمّ ضرب المقام في 4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since the denominator was multiplied by 4, the numerator must also be multiplied by 4: 3 × 4 = 12.",
            "explanation_ar": "بما أن المقام ضُرب في 4، يجب أن يُضرب البسط أيضاً في 4: 3 × 4 = 12."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3/5 = 12/20. The missing numerator is 12.",
            "explanation_ar": "3/5 = 12/20. البسط المجهول هو 12."
          }
        ],
        "hint_en": "What do you multiply 5 by to get 20? Multiply the top by the same number.",
        "hint_ar": "بماذا تضرب 5 لتحصل على 20؟ اضرب البسط بالعدد نفسه.",
        "result_en": "The answer is 12. So 3/5 = 12/20.",
        "result_ar": "الجواب هو 12. إذاً 3/5 = 12/20."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The fraction is 3/5. The new denominator is 20. Write both denominators: 5 and 20.",
            "explanation_ar": "الكسر هو 3/5. المقام الجديد هو 20. اكتب المقامَين: 5 و20."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Find the scale factor: 20 ÷ 5 = 4.",
            "explanation_ar": "أوجد معامل التحجيم: 20 ÷ 5 = 4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply the numerator by 4: 3 × 4 = 12.",
            "explanation_ar": "اضرب البسط في 4: 3 × 4 = 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 12/20 simplifies to 3/5 ✓. The answer is 12.",
            "explanation_ar": "تحقق: 12/20 تُبسَّط إلى 3/5 ✓. الجواب هو 12."
          }
        ],
        "hint_en": "Divide 20 by 5 to get the scale factor, then multiply the numerator 3 by it.",
        "hint_ar": "اقسم 20 على 5 لتحصل على معامل التحجيم، ثم اضرب البسط 3 فيه.",
        "result_en": "The answer is 12. So 3/5 = 12/20.",
        "result_ar": "الجواب هو 12. إذاً 3/5 = 12/20."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a road divided into 5 equal segments. You have travelled 3 of them — that is 3/5 of the road.",
            "explanation_ar": "تخيّل طريقاً مقسّماً إلى 5 أجزاء متساوية. قطعت 3 منها — أي 3/5 من الطريق."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Now divide each of the 5 segments into 4 smaller pieces. The road now has 20 small pieces total.",
            "explanation_ar": "الآن قسّم كل جزء من الأجزاء الخمسة إلى 4 قطع أصغر. أصبح الطريق يحتوي على 20 قطعة صغيرة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Your 3 original segments became 12 small pieces out of 20. So 3/5 = 12/20.",
            "explanation_ar": "أجزاؤك الأصلية الثلاثة أصبحت 12 قطعة صغيرة من أصل 20. إذاً 3/5 = 12/20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The missing numerator is 12.",
            "explanation_ar": "البسط المجهول هو 12."
          }
        ],
        "hint_en": "Draw a bar split into 5 equal parts, shade 3. Split each part into 4 — count all shaded small parts.",
        "hint_ar": "ارسم شريطاً مقسّماً إلى 5 أجزاء متساوية، ظلّل 3. قسّم كل جزء إلى 4 — عدّ جميع الأجزاء الصغيرة المظلّلة.",
        "result_en": "The answer is 12. So 3/5 = 12/20.",
        "result_ar": "الجواب هو 12. إذاً 3/5 = 12/20."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-frac-hard-003",
    "grade": 4,
    "bank": "specific",
    "category": "Fractions: Compare & Order",
    "level": "Hard",
    "question_en": "Which is larger: (1) 7/8 or (2) 2/3? Type 1 or 2.",
    "question_ar": "أيّهما أكبر: (1) 7/8 أم (2) 2/3؟ اكتب 1 أو 2.",
    "answer": 1,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Compare 7/8 and 2/3. The denominators are 8 and 3. Find the LCD.",
            "explanation_ar": "قارن 7/8 و2/3. المقامان هما 8 و3. أوجد المقام المشترك الأصغر."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "LCD of 8 and 3: since 8 and 3 share no common factors, LCD = 8 × 3 = 24.",
            "explanation_ar": "المقام المشترك الأصغر لـ8 و3: بما أن 8 و3 لا يشتركان في عوامل مشتركة، المقام المشترك الأصغر = 8 × 3 = 24."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Convert: 7/8 = 21/24 (multiply by 3). 2/3 = 16/24 (multiply by 8). Compare 21 and 16.",
            "explanation_ar": "حوّل: 7/8 = 21/24 (اضرب في 3). 2/3 = 16/24 (اضرب في 8). قارن 21 و16."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "21/24 > 16/24, so 7/8 > 2/3. The larger fraction is (1) 7/8.",
            "explanation_ar": "21/24 > 16/24، إذاً 7/8 > 2/3. الكسر الأكبر هو (1) 7/8."
          }
        ],
        "hint_en": "Find the LCD of 8 and 3 (it's 24), convert both fractions, then compare the numerators.",
        "hint_ar": "أوجد المقام المشترك الأصغر لـ8 و3 (هو 24)، حوّل كلا الكسرين، ثم قارن البسطَين.",
        "result_en": "The answer is 1. 7/8 = 21/24 is greater than 2/3 = 16/24.",
        "result_ar": "الجواب هو 1. 7/8 = 21/24 أكبر من 2/3 = 16/24."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The two fractions are 7/8 and 2/3. Find LCD(8, 3) = 24.",
            "explanation_ar": "الكسران هما 7/8 و2/3. أوجد المقام المشترك الأصغر (8، 3) = 24."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Scale 7/8: 24 ÷ 8 = 3, so 7 × 3 = 21. New fraction: 21/24. Scale 2/3: 24 ÷ 3 = 8, so 2 × 8 = 16. New fraction: 16/24.",
            "explanation_ar": "حوّل 7/8: 24 ÷ 8 = 3، إذاً 7 × 3 = 21. الكسر الجديد: 21/24. حوّل 2/3: 24 ÷ 3 = 8، إذاً 2 × 8 = 16. الكسر الجديد: 16/24."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Compare numerators: 21 vs 16. Since 21 > 16, the fraction 21/24 (which is 7/8) is larger.",
            "explanation_ar": "قارن البسطَين: 21 مقابل 16. بما أن 21 > 16، فإن الكسر 21/24 (أي 7/8) أكبر."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "7/8 is the larger fraction. The answer is 1.",
            "explanation_ar": "7/8 هو الكسر الأكبر. الجواب هو 1."
          }
        ],
        "hint_en": "Multiply 8 × 3 to get the LCD of 24, then scale each fraction and compare numerators.",
        "hint_ar": "اضرب 8 × 3 للحصول على المقام المشترك الأصغر 24، ثم حوّل كل كسر وقارن البسطَين.",
        "result_en": "The answer is 1. 7/8 = 21/24 is greater than 2/3 = 16/24.",
        "result_ar": "الجواب هو 1. 7/8 = 21/24 أكبر من 2/3 = 16/24."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine two water tanks of equal size. Tank A is 7/8 full, Tank B is 2/3 full. Which tank has more water?",
            "explanation_ar": "تخيّل خزّانَي ماء بنفس الحجم. الخزان أ ممتلئ بمقدار 7/8، والخزان ب ممتلئ بمقدار 2/3. أيّ الخزانَين يحتوي على ماء أكثر؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw two equal rectangles. Divide each into 24 equal parts. Shade 21 parts for Tank A (7/8 = 21/24) and 16 parts for Tank B (2/3 = 16/24).",
            "explanation_ar": "ارسم مستطيلَين متساويَين. قسّم كلاً منهما إلى 24 جزءاً متساوياً. ظلّل 21 جزءاً للخزان أ (7/8 = 21/24) و16 جزءاً للخزان ب (2/3 = 16/24)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Tank A has more shading: 21 parts vs 16 parts. So 7/8 is greater than 2/3.",
            "explanation_ar": "الخزان أ أكثر تظليلاً: 21 جزءاً مقابل 16 جزءاً. إذاً 7/8 أكبر من 2/3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "7/8 is larger. The answer is 1.",
            "explanation_ar": "7/8 أكبر. الجواب هو 1."
          }
        ],
        "hint_en": "Convert both to 24ths and draw fraction bars — count the shaded parts to see which is more.",
        "hint_ar": "حوّل كليهما إلى أربعة وعشرينيات وارسم أشرطة الكسر — عدّ الأجزاء المظلّلة لترى أيّهما أكثر.",
        "result_en": "The answer is 1. 7/8 = 21/24 is greater than 2/3 = 16/24.",
        "result_ar": "الجواب هو 1. 7/8 = 21/24 أكبر من 2/3 = 16/24."
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-frac-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "fractions"
    }
  },
  {
    "id": "g4-specific-word-easy-001",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A flower market in Amsterdam sold 2314 tulips on Saturday and 1875 tulips on Sunday. How many tulips were sold over the weekend? 2314 + 1875 = ?",
    "question_ar": "باع سوق الزهور في أمستردام 2314 زهرة توليب يوم السبت و1875 زهرة توليب يوم الأحد. كم عدد زهور التوليب التي بيعت خلال عطلة نهاية الأسبوع؟ 2314 + 1875 = ؟",
    "answer": 4189,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We are adding 2314 and 1875. Notice that 1875 is close to 2000 — it is 125 less than 2000.",
            "explanation_ar": "نجمع 2314 و1875. لاحظ أن 1875 قريبة من 2000 — فهي أقل من 2000 بمقدار 125."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round 1875 up to 2000. Then add: 2314 + 2000 = 4314.",
            "explanation_ar": "قرّب 1875 إلى 2000. ثم اجمع: 2314 + 2000 = 4314."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "We added 125 too many, so subtract 125 from 4314: 4314 − 125 = 4189.",
            "explanation_ar": "لقد أضفنا 125 زيادةً، فنطرح 125 من 4314: 4314 − 125 = 4189."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The flower market sold 4189 tulips over the weekend.",
            "explanation_ar": "باع سوق الزهور 4189 زهرة توليب خلال عطلة نهاية الأسبوع."
          }
        ],
        "hint_en": "Round 1875 to 2000, add, then subtract the difference of 125.",
        "hint_ar": "قرّب 1875 إلى 2000، اجمع، ثم اطرح الفارق وهو 125.",
        "result_en": "2314 + 1875 = 4189",
        "result_ar": "2314 + 1875 = 4189"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 1875 into 1000 + 800 + 75.",
            "explanation_ar": "قسّم 1875 إلى 1000 + 800 + 75."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2314 + 1000 = 3314. Then 3314 + 800 = 4114. Then 4114 + 75 = 4189.",
            "explanation_ar": "2314 + 1000 = 3314. ثم 3314 + 800 = 4114. ثم 4114 + 75 = 4189."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "All parts have been added: 3314 → 4114 → 4189.",
            "explanation_ar": "تمت إضافة جميع الأجزاء: 3314 → 4114 → 4189."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2000 + 1000 = 3000, 300 + 800 = 1100, 14 + 75 = 89. Total: 3000 + 1100 + 89 = 4189. The total is 4189 tulips.",
            "explanation_ar": "تحقق: 2000 + 1000 = 3000، 300 + 800 = 1100، 14 + 75 = 89. المجموع: 3000 + 1100 + 89 = 4189. الإجمالي هو 4189 زهرة."
          }
        ],
        "hint_en": "Break 1875 into thousands, hundreds, and tens+ones, then add each part to 2314.",
        "hint_ar": "قسّم 1875 إلى آلاف ومئات وعشرات وآحاد، ثم أضف كل جزء إلى 2314.",
        "result_en": "2314 + 1875 = 4189",
        "result_ar": "2314 + 1875 = 4189"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture two big buckets of tulips at the Amsterdam market — one with 2314 and one with 1875.",
            "explanation_ar": "تخيّل دلوَين كبيرَين من التوليب في سوق أمستردام — أحدهما يحتوي على 2314 والآخر على 1875."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Start at 2314, jump +1000 to 3314, then +800 to 4114, then +75 to 4189.",
            "explanation_ar": "ارسم خط أعداد. ابدأ عند 2314، اقفز +1000 إلى 3314، ثم +800 إلى 4114، ثم +75 إلى 4189."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The final position on the number line is 4189.",
            "explanation_ar": "الموضع النهائي على خط الأعداد هو 4189."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The two buckets together hold 4189 tulips — that is the weekend total.",
            "explanation_ar": "يحتوي الدلوان معاً على 4189 زهرة توليب — وهذا هو إجمالي عطلة نهاية الأسبوع."
          }
        ],
        "hint_en": "Imagine jumping along a number line from 2314 by adding the parts of 1875 one at a time.",
        "hint_ar": "تخيّل القفز على خط الأعداد من 2314 بإضافة أجزاء 1875 واحدةً تلو الأخرى.",
        "result_en": "2314 + 1875 = 4189",
        "result_ar": "2314 + 1875 = 4189"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g4-specific-word-easy-002",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A shipping company in Karachi had 4730 packages to deliver. By evening, 2863 packages had been delivered. How many packages were still undelivered? 4730 − 2863 = ?",
    "question_ar": "كان لدى شركة شحن في كراتشي 4730 طرداً للتوصيل. بحلول المساء، تم تسليم 2863 طرداً. كم عدد الطرود التي لم يتم تسليمها بعد؟ 4730 − 2863 = ؟",
    "answer": 1867,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 2863 from 4730. Notice 2863 is close to 2900 — it is 37 less than 2900.",
            "explanation_ar": "نطرح 2863 من 4730. لاحظ أن 2863 قريبة من 2900 — فهي أقل من 2900 بمقدار 37."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round 2863 up to 2900. Then subtract: 4730 − 2900 = 1830.",
            "explanation_ar": "قرّب 2863 إلى 2900. ثم اطرح: 4730 − 2900 = 1830."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "We subtracted 37 too many, so add 37 back: 1830 + 37 = 1867.",
            "explanation_ar": "لقد طرحنا 37 زيادةً، فنضيف 37 مرة أخرى: 1830 + 37 = 1867."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There were 1867 packages still undelivered.",
            "explanation_ar": "كان هناك 1867 طرداً لم يتم تسليمها بعد."
          }
        ],
        "hint_en": "Round 2863 up to 2900, subtract from 4730, then add back the 37 you over-subtracted.",
        "hint_ar": "قرّب 2863 إلى 2900، اطرح من 4730، ثم أضف 37 التي طرحتها زيادةً.",
        "result_en": "4730 − 2863 = 1867",
        "result_ar": "4730 − 2863 = 1867"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 2863 into 2000 + 800 + 63.",
            "explanation_ar": "قسّم 2863 إلى 2000 + 800 + 63."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4730 − 2000 = 2730. Then 2730 − 800 = 1930. Then 1930 − 63 = 1867.",
            "explanation_ar": "4730 − 2000 = 2730. ثم 2730 − 800 = 1930. ثم 1930 − 63 = 1867."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "All parts have been subtracted: 2730 → 1930 → 1867.",
            "explanation_ar": "تم طرح جميع الأجزاء: 2730 → 1930 → 1867."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 1867 + 2863 = 4730. Correct! There were 1867 packages still undelivered.",
            "explanation_ar": "تحقق: 1867 + 2863 = 4730. صحيح! كان هناك 1867 طرداً لم يتم تسليمها."
          }
        ],
        "hint_en": "Break 2863 into 2000, 800, and 63, then subtract each piece from 4730 step by step.",
        "hint_ar": "قسّم 2863 إلى 2000 و800 و63، ثم اطرح كل جزء من 4730 خطوةً بخطوة.",
        "result_en": "4730 − 2863 = 1867",
        "result_ar": "4730 − 2863 = 1867"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a large warehouse in Karachi with 4730 boxes stacked up. Workers are removing 2863 of them.",
            "explanation_ar": "تخيّل مستودعاً كبيراً في كراتشي مكدّساً بـ 4730 صندوقاً. يقوم العمال بإزالة 2863 منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar: total bar = 4730, shade 2863 as removed. The unshaded portion is the answer.",
            "explanation_ar": "ارسم شريطاً: الشريط الكلي = 4730، ظلّل 2863 كجزء محذوف. الجزء غير المظلل هو الجواب."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The unshaded section represents 4730 − 2863 = 1867 packages.",
            "explanation_ar": "يمثل الجزء غير المظلل 4730 − 2863 = 1867 طرداً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "1867 packages remained in the warehouse undelivered.",
            "explanation_ar": "ظلت 1867 طرداً في المستودع دون تسليم."
          }
        ],
        "hint_en": "Think of a full bar of 4730 — remove a chunk of 2863 and count what remains.",
        "hint_ar": "فكّر في شريط كامل مكوّن من 4730 — أزل جزءاً مقداره 2863 وعدّ ما تبقى.",
        "result_en": "4730 − 2863 = 1867",
        "result_ar": "4730 − 2863 = 1867"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g4-specific-word-easy-003",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "During the Rio de Janeiro carnival, a parade float used 1648 red flowers and 2135 yellow flowers. How many flowers were used in total? 1648 + 2135 = ?",
    "question_ar": "خلال كرنفال ريو دي جانيرو، استخدمت عربة الاستعراض 1648 زهرة حمراء و2135 زهرة صفراء. كم عدد الزهور المستخدمة إجمالاً؟ 1648 + 2135 = ؟",
    "answer": 3783,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We add 1648 and 2135. Notice 1648 is close to 1650 — it is 2 less than 1650.",
            "explanation_ar": "نجمع 1648 و2135. لاحظ أن 1648 قريبة من 1650 — فهي أقل من 1650 بمقدار 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round 1648 up to 1650. Then add: 1650 + 2135 = 3785.",
            "explanation_ar": "قرّب 1648 إلى 1650. ثم اجمع: 1650 + 2135 = 3785."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "We added 2 too many, so subtract 2: 3785 − 2 = 3783.",
            "explanation_ar": "لقد أضفنا 2 زيادةً، فنطرح 2: 3785 − 2 = 3783."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The parade float used 3783 flowers in total.",
            "explanation_ar": "استخدمت عربة الاستعراض 3783 زهرة إجمالاً."
          }
        ],
        "hint_en": "Round 1648 to 1650, add 2135, then subtract 2 to correct.",
        "hint_ar": "قرّب 1648 إلى 1650، أضف 2135، ثم اطرح 2 للتصحيح.",
        "result_en": "1648 + 2135 = 3783",
        "result_ar": "1648 + 2135 = 3783"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 2135 into 2000 + 100 + 35.",
            "explanation_ar": "قسّم 2135 إلى 2000 + 100 + 35."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1648 + 2000 = 3648. Then 3648 + 100 = 3748. Then 3748 + 35 = 3783.",
            "explanation_ar": "1648 + 2000 = 3648. ثم 3648 + 100 = 3748. ثم 3748 + 35 = 3783."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "All parts added: 3648 → 3748 → 3783.",
            "explanation_ar": "تمت إضافة جميع الأجزاء: 3648 → 3748 → 3783."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 1000 + 2000 = 3000, 600 + 100 = 700, 48 + 35 = 83. Total: 3000 + 700 + 83 = 3783. Correct!",
            "explanation_ar": "تحقق: 1000 + 2000 = 3000، 600 + 100 = 700، 48 + 35 = 83. المجموع: 3000 + 700 + 83 = 3783. صحيح!"
          }
        ],
        "hint_en": "Break 2135 into 2000, 100, and 35, then add each to 1648.",
        "hint_ar": "قسّم 2135 إلى 2000 و100 و35، ثم أضف كلاً منها إلى 1648.",
        "result_en": "1648 + 2135 = 3783",
        "result_ar": "1648 + 2135 = 3783"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a colourful carnival float in Rio covered in red and yellow flowers — two separate bunches being combined.",
            "explanation_ar": "تخيّل عربة كرنفال ملوّنة في ريو مغطاة بالزهور الحمراء والصفراء — باقتان منفصلتان يتم دمجهما."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw two boxes side by side: one labelled 1648, one labelled 2135. Together they form one long bar.",
            "explanation_ar": "ارسم صندوقين جنباً إلى جنب: واحد مكتوب عليه 1648 والآخر 2135. معاً يُشكّلان شريطاً طويلاً واحداً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The total length of the bar is 1648 + 2135 = 3783.",
            "explanation_ar": "الطول الإجمالي للشريط هو 1648 + 2135 = 3783."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The float was decorated with 3783 flowers in all.",
            "explanation_ar": "تم تزيين العربة بـ 3783 زهرة في المجموع."
          }
        ],
        "hint_en": "Visualise two bunches of flowers merging into one — add the totals of each bunch.",
        "hint_ar": "تخيّل باقتين من الزهور تندمجان في واحدة — اجمع مجاميع كل باقة.",
        "result_en": "1648 + 2135 = 3783",
        "result_ar": "1648 + 2135 = 3783"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g4-specific-word-medium-001",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A bakery in Vienna bakes 36 trays of pastries every morning. Each tray holds 24 pastries. How many pastries does the bakery make each morning? 36 × 24 = ?",
    "question_ar": "تخبز مخبزة في فيينا 36 صينية من المعجنات كل صباح. تحتوي كل صينية على 24 معجنة. كم عدد المعجنات التي تصنعها المخبزة كل صباح؟ 36 × 24 = ؟",
    "answer": 864,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We multiply 36 × 24. Notice both numbers are close to multiples of 10: 36 = 40 − 4 and 24 = 20 + 4.",
            "explanation_ar": "نضرب 36 × 24. لاحظ أن كلا الرقمين قريبان من مضاعفات 10: 36 = 40 − 4 و 24 = 20 + 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Use (30 + 6) × 24. First: 30 × 24 = 720. Then: 6 × 24 = 144.",
            "explanation_ar": "استخدم (30 + 6) × 24. أولاً: 30 × 24 = 720. ثم: 6 × 24 = 144."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two products: 720 + 144 = 864.",
            "explanation_ar": "أضف الحاصلَين: 720 + 144 = 864."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The Vienna bakery makes 864 pastries each morning.",
            "explanation_ar": "تصنع مخبزة فيينا 864 معجنة كل صباح."
          }
        ],
        "hint_en": "Split 36 into 30 + 6, multiply each by 24, then add the results.",
        "hint_ar": "قسّم 36 إلى 30 + 6، اضرب كلاً منهما في 24، ثم أضف النتائج.",
        "result_en": "36 × 24 = 864",
        "result_ar": "36 × 24 = 864"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 24 into 20 + 4.",
            "explanation_ar": "قسّم 24 إلى 20 + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "36 × 20 = 720. And 36 × 4 = 144.",
            "explanation_ar": "36 × 20 = 720. و 36 × 4 = 144."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "720 + 144 = 864.",
            "explanation_ar": "720 + 144 = 864."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 36 × 24 = 36 × 20 + 36 × 4 = 720 + 144 = 864. The bakery makes 864 pastries.",
            "explanation_ar": "تحقق: 36 × 24 = 36 × 20 + 36 × 4 = 720 + 144 = 864. تصنع المخبزة 864 معجنة."
          }
        ],
        "hint_en": "Split 24 into 20 and 4, multiply each by 36, then add.",
        "hint_ar": "قسّم 24 إلى 20 و4، اضرب كلاً منهما في 36، ثم أضف.",
        "result_en": "36 × 24 = 864",
        "result_ar": "36 × 24 = 864"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture 36 rows of trays in the Vienna bakery, each row holding 24 pastries.",
            "explanation_ar": "تخيّل 36 صفاً من الصواني في مخبزة فيينا، كل صف يحتوي على 24 معجنة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 36 units wide and 24 units tall. Split the width into 30 and 6 to form two smaller rectangles.",
            "explanation_ar": "ارسم مستطيلاً عرضه 36 وحدة وارتفاعه 24 وحدة. قسّم العرض إلى 30 و6 لتكوين مستطيلين أصغر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Left rectangle: 30 × 24 = 720. Right rectangle: 6 × 24 = 144.",
            "explanation_ar": "المستطيل الأيسر: 30 × 24 = 720. المستطيل الأيمن: 6 × 24 = 144."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total area = 720 + 144 = 864. That is the total number of pastries baked.",
            "explanation_ar": "المساحة الإجمالية = 720 + 144 = 864. وهذا هو إجمالي عدد المعجنات المخبوزة."
          }
        ],
        "hint_en": "Picture an area model: a 36-by-24 grid split into a 30-wide and a 6-wide section.",
        "hint_ar": "تخيّل نموذج المساحة: شبكة 36×24 مقسّمة إلى قسم عرضه 30 وآخر عرضه 6.",
        "result_en": "36 × 24 = 864",
        "result_ar": "36 × 24 = 864"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g4-specific-word-medium-002",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A coffee cooperative in Addis Ababa packed 1848 coffee bags equally into 8 boxes. How many bags did each box contain? 1848 ÷ 8 = ?",
    "question_ar": "قامت تعاونية قهوة في أديس أبابا بتعبئة 1848 كيس قهوة بالتساوي في 8 صناديق. كم كيساً احتوى كل صندوق؟ 1848 ÷ 8 = ؟",
    "answer": 231,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We divide 1848 by 8. Notice 1848 = 1600 + 248, and both are divisible by 8.",
            "explanation_ar": "نقسم 1848 على 8. لاحظ أن 1848 = 1600 + 248، وكلاهما قابل للقسمة على 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "1600 ÷ 8 = 200. Then 248 ÷ 8 = 31.",
            "explanation_ar": "1600 ÷ 8 = 200. ثم 248 ÷ 8 = 31."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two quotients: 200 + 31 = 231.",
            "explanation_ar": "أضف الحاصلَين: 200 + 31 = 231."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Each box contained 231 coffee bags.",
            "explanation_ar": "احتوى كل صندوق على 231 كيس قهوة."
          }
        ],
        "hint_en": "Split 1848 into 1600 + 248 and divide each part by 8.",
        "hint_ar": "قسّم 1848 إلى 1600 + 248 وقسّم كل جزء على 8.",
        "result_en": "1848 ÷ 8 = 231",
        "result_ar": "1848 ÷ 8 = 231"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 1848 into place values: 1000 + 800 + 48.",
            "explanation_ar": "قسّم 1848 حسب القيم المكانية: 1000 + 800 + 48."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1000 ÷ 8 = 125. Then 800 ÷ 8 = 100. Then 48 ÷ 8 = 6.",
            "explanation_ar": "1000 ÷ 8 = 125. ثم 800 ÷ 8 = 100. ثم 48 ÷ 8 = 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "125 + 100 + 6 = 231.",
            "explanation_ar": "125 + 100 + 6 = 231."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 231 × 8 = 1848. Correct! Each box holds 231 bags.",
            "explanation_ar": "تحقق: 231 × 8 = 1848. صحيح! يحتوي كل صندوق على 231 كيساً."
          }
        ],
        "hint_en": "Divide 1000, 800, and 48 each by 8, then add the results.",
        "hint_ar": "قسّم 1000 و800 و48 كلاً على حدة على 8، ثم أضف النتائج.",
        "result_en": "1848 ÷ 8 = 231",
        "result_ar": "1848 ÷ 8 = 231"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture 1848 coffee bags arranged in 8 equal stacks at the Addis Ababa cooperative.",
            "explanation_ar": "تخيّل 1848 كيس قهوة مرتّباً في 8 أكوام متساوية في تعاونية أديس أبابا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 8 equal boxes under a bar labelled 1848. Each box holds the same amount.",
            "explanation_ar": "ارسم 8 صناديق متساوية تحت شريط مكتوب عليه 1848. كل صندوق يحتوي على نفس الكمية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each of the 8 sections equals 1848 ÷ 8 = 231.",
            "explanation_ar": "كل واحد من الأقسام الـ 8 يساوي 1848 ÷ 8 = 231."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each box contains 231 coffee bags.",
            "explanation_ar": "يحتوي كل صندوق على 231 كيس قهوة."
          }
        ],
        "hint_en": "Imagine 1848 bags split equally into 8 groups — how many bags per group?",
        "hint_ar": "تخيّل 1848 كيساً مقسّماً بالتساوي إلى 8 مجموعات — كم كيساً في كل مجموعة؟",
        "result_en": "1848 ÷ 8 = 231",
        "result_ar": "1848 ÷ 8 = 231"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g4-specific-word-medium-003",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A ferry in Manila carries 47 passengers per trip. The ferry makes 38 trips in one week. How many passengers does it carry in a week? 47 × 38 = ?",
    "question_ar": "تنقل عبّارة في مانيلا 47 راكباً في كل رحلة. تُنجز العبّارة 38 رحلة في أسبوع واحد. كم عدد الركاب الذين تنقلهم في الأسبوع؟ 47 × 38 = ؟",
    "answer": 1786,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We multiply 47 × 38. Both are close to 50 and 40: 47 = 50 − 3 and 38 = 40 − 2.",
            "explanation_ar": "نضرب 47 × 38. كلاهما قريبان من 50 و40: 47 = 50 − 3 و 38 = 40 − 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Use (40 + 7) × 38. First: 40 × 38 = 1520. Then: 7 × 38 = 266.",
            "explanation_ar": "استخدم (40 + 7) × 38. أولاً: 40 × 38 = 1520. ثم: 7 × 38 = 266."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add: 1520 + 266 = 1786.",
            "explanation_ar": "أضف: 1520 + 266 = 1786."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The Manila ferry carries 1786 passengers in one week.",
            "explanation_ar": "تنقل عبّارة مانيلا 1786 راكباً في أسبوع واحد."
          }
        ],
        "hint_en": "Split 47 into 40 + 7, multiply each by 38, then add.",
        "hint_ar": "قسّم 47 إلى 40 + 7، اضرب كلاً منهما في 38، ثم أضف.",
        "result_en": "47 × 38 = 1786",
        "result_ar": "47 × 38 = 1786"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 38 into 30 + 8.",
            "explanation_ar": "قسّم 38 إلى 30 + 8."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "47 × 30 = 1410. And 47 × 8 = 376.",
            "explanation_ar": "47 × 30 = 1410. و 47 × 8 = 376."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "1410 + 376 = 1786.",
            "explanation_ar": "1410 + 376 = 1786."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 47 × 38 = 47 × 30 + 47 × 8 = 1410 + 376 = 1786. The ferry carries 1786 passengers.",
            "explanation_ar": "تحقق: 47 × 38 = 47 × 30 + 47 × 8 = 1410 + 376 = 1786. تنقل العبّارة 1786 راكباً."
          }
        ],
        "hint_en": "Split 38 into 30 and 8, multiply each by 47, then add.",
        "hint_ar": "قسّم 38 إلى 30 و8، اضرب كلاً منهما في 47، ثم أضف.",
        "result_en": "47 × 38 = 1786",
        "result_ar": "47 × 38 = 1786"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture the Manila ferry dock — 38 trips in a week, each filled with 47 passengers.",
            "explanation_ar": "تخيّل رصيف عبّارة مانيلا — 38 رحلة في أسبوع، كل منها محمّلة بـ 47 راكباً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw an area model: a rectangle 47 wide and 38 tall, split into a 30-tall and an 8-tall section.",
            "explanation_ar": "ارسم نموذج المساحة: مستطيل عرضه 47 وارتفاعه 38، مقسّم إلى قسم ارتفاعه 30 وآخر ارتفاعه 8."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top section: 47 × 30 = 1410. Bottom section: 47 × 8 = 376.",
            "explanation_ar": "القسم العلوي: 47 × 30 = 1410. القسم السفلي: 47 × 8 = 376."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total passengers = 1410 + 376 = 1786.",
            "explanation_ar": "إجمالي الركاب = 1410 + 376 = 1786."
          }
        ],
        "hint_en": "Use an area model: 47 columns × 38 rows, split into 47×30 and 47×8.",
        "hint_ar": "استخدم نموذج المساحة: 47 عموداً × 38 صفاً، مقسّماً إلى 47×30 و 47×8.",
        "result_en": "47 × 38 = 1786",
        "result_ar": "47 × 38 = 1786"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g4-specific-word-hard-001",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A library in Stockholm received 1250 new books and placed them equally on 5 shelves. Then a donation of 348 more books arrived and was added to the total. How many books are in the library now? (1250 ÷ 5) × 5 + 348 = ?",
    "question_ar": "استلمت مكتبة في ستوكهولم 1250 كتاباً جديداً ووزّعتها بالتساوي على 5 رفوف. ثم وصل تبرّع بـ 348 كتاباً إضافياً وأُضيف إلى المجموع. كم عدد الكتب في المكتبة الآن؟ (1250 ÷ 5) × 5 + 348 = ؟",
    "answer": 1598,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Step 1: Divide 1250 books equally among 5 shelves. Step 2: Add 348 to the original 1250.",
            "explanation_ar": "الخطوة 1: قسّم 1250 كتاباً بالتساوي على 5 رفوف. الخطوة 2: أضف 348 إلى 1250 الأصلية."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "1250 ÷ 5 = 250 books per shelf. The total books remain 1250 after placing them on shelves.",
            "explanation_ar": "1250 ÷ 5 = 250 كتاباً لكل رف. يبقى إجمالي الكتب 1250 بعد وضعها على الرفوف."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the donation: 1250 + 348 = 1598.",
            "explanation_ar": "أضف التبرّع: 1250 + 348 = 1598."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The Stockholm library now holds 1598 books in total.",
            "explanation_ar": "تضم مكتبة ستوكهولم الآن 1598 كتاباً في المجموع."
          }
        ],
        "hint_en": "The division tells you how the books are arranged, but the total stays 1250. Then add 348.",
        "hint_ar": "القسمة تخبرك كيف توزّعت الكتب، لكن المجموع يبقى 1250. ثم أضف 348.",
        "result_en": "1250 + 348 = 1598",
        "result_ar": "1250 + 348 = 1598"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "There are two steps: first the division, then the addition.",
            "explanation_ar": "هناك خطوتان: القسمة أولاً، ثم الجمع."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step 1: 1250 ÷ 5 = 250 per shelf, confirming equal distribution. The library still has 1250 books. Step 2: 1250 + 348 = 1598.",
            "explanation_ar": "الخطوة 1: 1250 ÷ 5 = 250 لكل رف، مما يؤكد التوزيع المتساوي. لا تزال المكتبة تمتلك 1250 كتاباً. الخطوة 2: 1250 + 348 = 1598."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The final count is 1598 books.",
            "explanation_ar": "العدد النهائي هو 1598 كتاباً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "1250 + 348: 1250 + 300 = 1550, 1550 + 48 = 1598. The library has 1598 books.",
            "explanation_ar": "1250 + 348: 1250 + 300 = 1550، 1550 + 48 = 1598. تمتلك المكتبة 1598 كتاباً."
          }
        ],
        "hint_en": "Handle the division first (it doesn't change the total), then add the 348 donated books.",
        "hint_ar": "تعامل مع القسمة أولاً (لا تغيّر المجموع)، ثم أضف الـ 348 كتاباً المتبرّع بها.",
        "result_en": "1250 + 348 = 1598",
        "result_ar": "1250 + 348 = 1598"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a Stockholm library with 5 shelves loaded with 1250 books, then a delivery truck bringing 348 more.",
            "explanation_ar": "تخيّل مكتبة في ستوكهولم بـ 5 رفوف محمّلة بـ 1250 كتاباً، ثم شاحنة توصيل تجلب 348 كتاباً إضافياً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 5 equal shelves totalling 1250 (250 each), then draw a separate stack of 348.",
            "explanation_ar": "ارسم 5 رفوف متساوية مجموعها 1250 (250 لكل منها)، ثم ارسم كومة منفصلة من 348."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Combine the shelves (1250) with the new stack (348): 1250 + 348 = 1598.",
            "explanation_ar": "اجمع الرفوف (1250) مع الكومة الجديدة (348): 1250 + 348 = 1598."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The library's grand total is 1598 books.",
            "explanation_ar": "إجمالي المكتبة الكلي هو 1598 كتاباً."
          }
        ],
        "hint_en": "The 5-shelf arrangement doesn't remove any books — picture the full 1250 still there, then add 348.",
        "hint_ar": "ترتيب الرفوف الخمسة لا يحذف أي كتاب — تخيّل 1250 كتاباً لا تزال موجودة، ثم أضف 348.",
        "result_en": "1250 + 348 = 1598",
        "result_ar": "1250 + 348 = 1598"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g4-specific-word-hard-002",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A textile factory in Lahore produced 2450 metres of fabric in the first week and 1830 metres in the second week. Workers then cut the total into pieces of 4 metres each. How many pieces did they get? (2450 + 1830) ÷ 4 = ?",
    "question_ar": "أنتجت مصنع نسيج في لاهور 2450 متراً من القماش في الأسبوع الأول و1830 متراً في الأسبوع الثاني. ثم قطّع العمال المجموع إلى قطع طول كل منها 4 أمتار. كم عدد القطع التي حصلوا عليها؟ (2450 + 1830) ÷ 4 = ؟",
    "answer": 1070,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two steps: first add 2450 + 1830, then divide the total by 4.",
            "explanation_ar": "خطوتان: أولاً اجمع 2450 + 1830، ثم قسّم المجموع على 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "2450 + 1830 = 4280. Then notice 4280 ÷ 4: 4000 ÷ 4 = 1000 and 280 ÷ 4 = 70.",
            "explanation_ar": "2450 + 1830 = 4280. ثم لاحظ 4280 ÷ 4: 4000 ÷ 4 = 1000 و 280 ÷ 4 = 70."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the quotients: 1000 + 70 = 1070.",
            "explanation_ar": "أضف الحاصلَين: 1000 + 70 = 1070."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The workers got 1070 pieces of fabric.",
            "explanation_ar": "حصل العمال على 1070 قطعة قماش."
          }
        ],
        "hint_en": "Add the two weeks first to get 4280, then split 4280 ÷ 4 as 4000 ÷ 4 + 280 ÷ 4.",
        "hint_ar": "اجمع الأسبوعين أولاً للحصول على 4280، ثم قسّم 4280 ÷ 4 على هيئة 4000 ÷ 4 + 280 ÷ 4.",
        "result_en": "(2450 + 1830) ÷ 4 = 4280 ÷ 4 = 1070",
        "result_ar": "(2450 + 1830) ÷ 4 = 4280 ÷ 4 = 1070"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Two operations: addition first, then division.",
            "explanation_ar": "عمليتان: الجمع أولاً، ثم القسمة."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Addition: 2450 + 1830 = 4280. Division: 4280 ÷ 4. Split 4280 = 4000 + 280. Then 4000 ÷ 4 = 1000 and 280 ÷ 4 = 70.",
            "explanation_ar": "الجمع: 2450 + 1830 = 4280. القسمة: 4280 ÷ 4. قسّم 4280 = 4000 + 280. ثم 4000 ÷ 4 = 1000 و 280 ÷ 4 = 70."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "1000 + 70 = 1070.",
            "explanation_ar": "1000 + 70 = 1070."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 1070 × 4 = 4280, and 2450 + 1830 = 4280. Correct! There are 1070 pieces.",
            "explanation_ar": "تحقق: 1070 × 4 = 4280، و 2450 + 1830 = 4280. صحيح! هناك 1070 قطعة."
          }
        ],
        "hint_en": "Sum the two weeks' output, then divide by 4 using place-value chunks.",
        "hint_ar": "اجمع إنتاج الأسبوعين، ثم قسّم على 4 باستخدام قطع القيمة المكانية.",
        "result_en": "(2450 + 1830) ÷ 4 = 1070",
        "result_ar": "(2450 + 1830) ÷ 4 = 1070"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture two large rolls of fabric from a Lahore factory — 2450 m and 1830 m — laid end to end, then a worker cutting them every 4 metres.",
            "explanation_ar": "تخيّل لفّتَين كبيرتَين من القماش من مصنع في لاهور — 2450 م و1830 م — موضوعتَين نهايةً تلو الأخرى، ثم عامل يقطعهما كل 4 أمتار."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a long bar: first segment 2450, second segment 1830, total = 4280. Then mark divisions every 4 units.",
            "explanation_ar": "ارسم شريطاً طويلاً: الجزء الأول 2450، الجزء الثاني 1830، المجموع = 4280. ثم ضع علامات قسمة كل 4 وحدات."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Counting the 4-metre cuts in 4280 metres: 4280 ÷ 4 = 1070 pieces.",
            "explanation_ar": "عدّ قطع الـ 4 أمتار في 4280 متراً: 4280 ÷ 4 = 1070 قطعة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The factory produced 1070 cut pieces of fabric in total.",
            "explanation_ar": "أنتج المصنع 1070 قطعة قماش مقطوعة إجمالاً."
          }
        ],
        "hint_en": "Join the two fabric lengths into one long bar of 4280 m, then picture cutting it into 4 m sections.",
        "hint_ar": "اجمع طولَي القماش في شريط واحد طوله 4280 م، ثم تخيّل تقطيعه إلى أقسام بطول 4 م.",
        "result_en": "(2450 + 1830) ÷ 4 = 1070",
        "result_ar": "(2450 + 1830) ÷ 4 = 1070"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g4-specific-word-hard-003",
    "grade": 4,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A sports store in Auckland ordered 45 boxes of tennis balls. Each box holds 28 balls. The store already had 735 balls in stock. How many tennis balls does the store have in total? (45 × 28) + 735 = ?",
    "question_ar": "طلب متجر رياضي في أوكلاند 45 صندوقاً من كرات التنس. يحتوي كل صندوق على 28 كرة. كان المتجر يمتلك بالفعل 735 كرة في المخزون. كم عدد كرات التنس الإجمالية لدى المتجر؟ (45 × 28) + 735 = ؟",
    "answer": 1995,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two steps: first multiply 45 × 28, then add 735. Notice 45 × 28 = 45 × 30 − 45 × 2.",
            "explanation_ar": "خطوتان: أولاً اضرب 45 × 28، ثم أضف 735. لاحظ أن 45 × 28 = 45 × 30 − 45 × 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "45 × 30 = 1350. Then 45 × 2 = 90. So 45 × 28 = 1350 − 90 = 1260.",
            "explanation_ar": "45 × 30 = 1350. ثم 45 × 2 = 90. إذن 45 × 28 = 1350 − 90 = 1260."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the existing stock: 1260 + 735 = 1995.",
            "explanation_ar": "أضف المخزون الموجود: 1260 + 735 = 1995."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The Auckland store has 1995 tennis balls in total.",
            "explanation_ar": "يمتلك متجر أوكلاند 1995 كرة تنس إجمالاً."
          }
        ],
        "hint_en": "Use 45 × 28 = 45 × 30 − 45 × 2 = 1350 − 90 = 1260, then add 735.",
        "hint_ar": "استخدم 45 × 28 = 45 × 30 − 45 × 2 = 1350 − 90 = 1260، ثم أضف 735.",
        "result_en": "(45 × 28) + 735 = 1260 + 735 = 1995",
        "result_ar": "(45 × 28) + 735 = 1260 + 735 = 1995"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Two operations: multiplication first, then addition.",
            "explanation_ar": "عمليتان: الضرب أولاً، ثم الجمع."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Multiplication: 45 × 28. Split 28 = 20 + 8. 45 × 20 = 900. 45 × 8 = 360. Total: 900 + 360 = 1260. Addition: 1260 + 735 = 1995.",
            "explanation_ar": "الضرب: 45 × 28. قسّم 28 = 20 + 8. 45 × 20 = 900. 45 × 8 = 360. المجموع: 900 + 360 = 1260. الجمع: 1260 + 735 = 1995."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "1260 + 735 = 1995.",
            "explanation_ar": "1260 + 735 = 1995."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 45 × 28 = 1260 (since 45 × 20 = 900 and 45 × 8 = 360, 900 + 360 = 1260). 1260 + 735 = 1995. The store has 1995 balls.",
            "explanation_ar": "تحقق: 45 × 28 = 1260 (إذ أن 45 × 20 = 900 و 45 × 8 = 360، 900 + 360 = 1260). 1260 + 735 = 1995. يمتلك المتجر 1995 كرة."
          }
        ],
        "hint_en": "Split 28 into 20 + 8, multiply each by 45, add them, then add the 735 in stock.",
        "hint_ar": "قسّم 28 إلى 20 + 8، اضرب كلاً منهما في 45، أضفهما، ثم أضف 735 المخزونة.",
        "result_en": "(45 × 28) + 735 = 1995",
        "result_ar": "(45 × 28) + 735 = 1995"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture an Auckland sports store: 45 new boxes of 28 balls arriving, plus a shelf already holding 735 balls.",
            "explanation_ar": "تخيّل متجراً رياضياً في أوكلاند: 45 صندوقاً جديداً يحتوي كلٌّ منها على 28 كرة يصل، إضافةً إلى رف يحتوي بالفعل على 735 كرة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw an area model for 45 × 28 (split 28 into 20 + 8): gives 900 + 360 = 1260. Then draw a separate block of 735.",
            "explanation_ar": "ارسم نموذج المساحة لـ 45 × 28 (قسّم 28 إلى 20 + 8): يعطي 900 + 360 = 1260. ثم ارسم كتلة منفصلة من 735."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "New delivery block = 1260 balls. Existing stock block = 735 balls. Together: 1260 + 735 = 1995.",
            "explanation_ar": "كتلة التسليم الجديد = 1260 كرة. كتلة المخزون الحالي = 735 كرة. معاً: 1260 + 735 = 1995."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The store's entire tennis ball supply is 1995.",
            "explanation_ar": "إجمالي مخزون كرات التنس في المتجر هو 1995."
          }
        ],
        "hint_en": "First find how many balls are in the 45 boxes (area model: 45×28), then add the 735 already on the shelf.",
        "hint_ar": "ابحث أولاً عن عدد الكرات في الـ 45 صندوقاً (نموذج المساحة: 45×28)، ثم أضف 735 الموجودة بالفعل على الرف.",
        "result_en": "(45 × 28) + 735 = 1995",
        "result_ar": "(45 × 28) + 735 = 1995"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g3-specific-word-hard-003",
      "upper_grade_equivalent": "g5-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  }
];

export const getByCategory = (cat: string) =>
  grade4LearnBank.filter(p => p.category === cat);

export const getByLevel = (level: 'Easy' | 'Medium' | 'Hard') =>
  grade4LearnBank.filter(p => p.level === level);

export const getById = (id: string) =>
  grade4LearnBank.find(p => p.id === id) ?? null;

export const getByTag = (tag: string) =>
  grade4LearnBank.filter(p => p.meta.fun_fact_tag === tag);
