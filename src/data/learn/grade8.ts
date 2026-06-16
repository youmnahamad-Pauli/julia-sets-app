// ============================================================
// Julia Sets — Grade 8 Learn Bank
// Auto-generated — do not edit by hand
// 63 problems × 3 methods (Vedic / Decompose / Visualize)
// Note: Subtraction category may include negative answers
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

export const grade8LearnBank: LearnProblem[] = 
[
  {
    "id": "g8-common-add-easy-001",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "What is 234,567 + 456,789?",
    "question_ar": "ما ناتج 234,567 + 456,789 ؟",
    "answer": 691356,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 456,789 is close to 457,000. The difference is 457,000 − 456,789 = 211.",
            "explanation_ar": "لاحظ أن 456,789 قريبة من 457,000. الفرق هو 457,000 − 456,789 = 211."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round up 456,789 to 457,000 and add: 234,567 + 457,000 = 691,567.",
            "explanation_ar": "قرّب 456,789 إلى 457,000 واجمع: 234,567 + 457,000 = 691,567."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since we added 211 extra, subtract it back: 691,567 − 211 = 691,356.",
            "explanation_ar": "بما أننا أضفنا 211 زيادةً، نطرحها: 691,567 − 211 = 691,356."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "234,567 + 456,789 = 691,356.",
            "explanation_ar": "234,567 + 456,789 = 691,356."
          }
        ],
        "hint_en": "Round one number to the nearest thousand, add, then adjust.",
        "hint_ar": "قرّب أحد الأعداد إلى أقرب ألف، ثم اجمع وعدّل.",
        "result_en": "The answer is 691356",
        "result_ar": "الجواب هو 691356"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split each number by place value: 234,567 = 200,000 + 34,000 + 500 + 67 and 456,789 = 400,000 + 56,000 + 700 + 89.",
            "explanation_ar": "قسّم كل عدد حسب مراتبه: 234,567 = 200,000 + 34,000 + 500 + 67 و 456,789 = 400,000 + 56,000 + 700 + 89."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add matching place values: hundred-thousands 200,000 + 400,000 = 600,000; ten-thousands 34,000 + 56,000 = 90,000; hundreds 500 + 700 = 1,200; ones 67 + 89 = 156.",
            "explanation_ar": "اجمع كل مرتبة: مئات الآلاف 200,000 + 400,000 = 600,000؛ عشرات الآلاف 34,000 + 56,000 = 90,000؛ المئات 500 + 700 = 1,200؛ الآحاد 67 + 89 = 156."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Sum all parts: 600,000 + 90,000 + 1,200 + 156 = 691,356.",
            "explanation_ar": "اجمع كل الأجزاء: 600,000 + 90,000 + 1,200 + 156 = 691,356."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 691,356 has 6 digits and lies between 234,567 and 1,000,000. Answer: 691,356.",
            "explanation_ar": "تحقق: 691,356 مكونة من 6 أرقام وتقع بين 234,567 و 1,000,000. الجواب: 691,356."
          }
        ],
        "hint_en": "Break both numbers by hundred-thousands, ten-thousands, hundreds, and ones, then add each group.",
        "hint_ar": "قسّم كلا العددين إلى مئات آلاف وعشرات آلاف ومئات وآحاد، ثم اجمع كل مجموعة.",
        "result_en": "The answer is 691356",
        "result_ar": "الجواب هو 691356"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine two warehouses: one holds 234,567 boxes, the other holds 456,789 boxes. How many boxes total?",
            "explanation_ar": "تخيّل مستودعين: أحدهما يحتوي على 234,567 صندوقاً والآخر على 456,789 صندوقاً. كم يكون المجموع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line starting at 234,567. Add a jump of 456,000, landing at 690,567, then a smaller jump of 789 to reach the final point.",
            "explanation_ar": "ارسم خط أعداد يبدأ من 234,567. أضف قفزة بمقدار 456,000 لتصل إلى 690,567، ثم قفزة صغيرة بمقدار 789."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The landing point after both jumps is 690,567 + 789 = 691,356.",
            "explanation_ar": "نقطة الوصول بعد القفزتين هي 690,567 + 789 = 691,356."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The two warehouses together hold 691,356 boxes. So 234,567 + 456,789 = 691,356.",
            "explanation_ar": "يحتوي المستودعان معاً على 691,356 صندوقاً. إذن 234,567 + 456,789 = 691,356."
          }
        ],
        "hint_en": "Visualize jumps on a number line: first a big jump, then a small adjustment.",
        "hint_ar": "تخيّل قفزات على خط الأعداد: أولاً قفزة كبيرة ثم تعديل صغير.",
        "result_en": "The answer is 691356",
        "result_ar": "الجواب هو 691356"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-easy-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-add-easy-002",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "What is 318,452 + 271,548?",
    "question_ar": "ما ناتج 318,452 + 271,548 ؟",
    "answer": 590000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that the last three digits of each number are complementary: 452 + 548 = 1,000, which is a clean power of ten.",
            "explanation_ar": "لاحظ أن الأرقام الثلاثة الأخيرة لكل عدد متممة: 452 + 548 = 1,000، وهو قوة عشرية دقيقة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the last three digits: 452 + 548 = 1,000, generating a carry of 1 into the thousands.",
            "explanation_ar": "اجمع الأرقام الثلاثة الأخيرة: 452 + 548 = 1,000، مما يولّد محمولاً بمقدار 1 إلى مرتبة الآلاف."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the leading parts plus the carry: 318 + 271 + 1 = 590. So the result is 590 × 1,000 = 590,000.",
            "explanation_ar": "اجمع الأجزاء الأمامية مع المحمول: 318 + 271 + 1 = 590. إذن الناتج هو 590 × 1,000 = 590,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "318,452 + 271,548 = 590,000.",
            "explanation_ar": "318,452 + 271,548 = 590,000."
          }
        ],
        "hint_en": "Look for complementary digits that sum to 1,000.",
        "hint_ar": "ابحث عن أرقام متممة مجموعها 1,000.",
        "result_en": "The answer is 590000",
        "result_ar": "الجواب هو 590000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split: 318,452 = 318,000 + 452 and 271,548 = 271,000 + 548.",
            "explanation_ar": "قسّم: 318,452 = 318,000 + 452 و 271,548 = 271,000 + 548."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add thousands parts: 318,000 + 271,000 = 589,000. Add remainder parts: 452 + 548 = 1,000.",
            "explanation_ar": "اجمع أجزاء الآلاف: 318,000 + 271,000 = 589,000. اجمع الأجزاء المتبقية: 452 + 548 = 1,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Combine: 589,000 + 1,000 = 590,000.",
            "explanation_ar": "اجمع: 589,000 + 1,000 = 590,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "590,000 is a round number between the two addends and below 1,000,000. Answer: 590,000.",
            "explanation_ar": "590,000 عدد مُقرَّب يقع بين المُضافَيْن وأقل من 1,000,000. الجواب: 590,000."
          }
        ],
        "hint_en": "Split at the thousands mark; the last three digits are complementary.",
        "hint_ar": "قسّم عند مرتبة الآلاف؛ الأرقام الثلاثة الأخيرة متممة.",
        "result_en": "The answer is 590000",
        "result_ar": "الجواب هو 590000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Two teams collected donations: Team A collected 318,452 items and Team B collected 271,548 items. What is the total?",
            "explanation_ar": "جمع فريقان تبرعات: الفريق أ جمع 318,452 قطعة والفريق ب جمع 271,548 قطعة. ما المجموع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture two bars on a bar model. The first bar spans from 0 to 318,452 and the second extends from 318,452 by another 271,548.",
            "explanation_ar": "تخيّل شريطين في نموذج الأشرطة. الأول من 0 إلى 318,452 والثاني يمتد من 318,452 بمقدار 271,548 آخر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The combined bar ends at 318,452 + 271,548. Because 452 + 548 = 1,000, the total ends in three zeros: 590,000.",
            "explanation_ar": "الشريط المدموج ينتهي عند 318,452 + 271,548. لأن 452 + 548 = 1,000، ينتهي المجموع بثلاثة أصفار: 590,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Both teams together collected exactly 590,000 items. So 318,452 + 271,548 = 590,000.",
            "explanation_ar": "جمع الفريقان معاً 590,000 قطعة بالضبط. إذن 318,452 + 271,548 = 590,000."
          }
        ],
        "hint_en": "The two numbers are designed to sum to a round number — picture two bars meeting at 590,000.",
        "hint_ar": "العددان مصمَّمان ليبلغ مجموعهما عدداً مُقرَّباً — تخيّل شريطين يلتقيان عند 590,000.",
        "result_en": "The answer is 590000",
        "result_ar": "الجواب هو 590000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-easy-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-add-easy-003",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "What is 475,318 + 382,465?",
    "question_ar": "ما ناتج 475,318 + 382,465 ؟",
    "answer": 857783,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Round 382,465 up to 382,500. The adjustment needed is 382,500 − 382,465 = 35.",
            "explanation_ar": "قرّب 382,465 إلى 382,500. التعديل المطلوب هو 382,500 − 382,465 = 35."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add using the rounded value: 475,318 + 382,500 = 857,818.",
            "explanation_ar": "اجمع بالقيمة المُقرَّبة: 475,318 + 382,500 = 857,818."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the extra 35 that was added: 857,818 − 35 = 857,783.",
            "explanation_ar": "اطرح الـ 35 الزائدة التي أُضيفت: 857,818 − 35 = 857,783."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "475,318 + 382,465 = 857,783.",
            "explanation_ar": "475,318 + 382,465 = 857,783."
          }
        ],
        "hint_en": "Round the second number to the nearest 500, add, then subtract the extra.",
        "hint_ar": "قرّب العدد الثاني إلى أقرب 500، اجمع، ثم اطرح الزائد.",
        "result_en": "The answer is 857783",
        "result_ar": "الجواب هو 857783"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split: 475,318 = 475,000 + 318 and 382,465 = 382,000 + 465.",
            "explanation_ar": "قسّم: 475,318 = 475,000 + 318 و 382,465 = 382,000 + 465."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add thousands: 475,000 + 382,000 = 857,000. Add remainders: 318 + 465 = 783.",
            "explanation_ar": "اجمع الآلاف: 475,000 + 382,000 = 857,000. اجمع البواقي: 318 + 465 = 783."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Combine: 857,000 + 783 = 857,783.",
            "explanation_ar": "اجمع: 857,000 + 783 = 857,783."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "857,783 is a 6-digit number less than 1,000,000. Answer: 857,783.",
            "explanation_ar": "857,783 عدد مكوّن من 6 أرقام وأقل من 1,000,000. الجواب: 857,783."
          }
        ],
        "hint_en": "Split each number at the thousands mark, add separately, then recombine.",
        "hint_ar": "قسّم كل عدد عند مرتبة الآلاف، اجمع كلاً منهما، ثم أعد الجمع.",
        "result_en": "The answer is 857783",
        "result_ar": "الجواب هو 857783"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A city's two districts have populations of 475,318 and 382,465. What is the combined population?",
            "explanation_ar": "حيّان في مدينة يضمان 475,318 و 382,465 نسمة. ما مجموع السكان؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Place a marker at 475,318, then make a large jump of 382,000 to reach 857,000, then a small jump of 465 to finish.",
            "explanation_ar": "ارسم خط أعداد. ضع علامة عند 475,318، ثم اقفز 382,000 لتصل إلى 857,000، ثم قفزة صغيرة 465 للنهاية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After the two jumps the marker rests at 857,000 + 783 = 857,783.",
            "explanation_ar": "بعد القفزتين تستقر العلامة عند 857,000 + 783 = 857,783."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The combined population of both districts is 857,783. So 475,318 + 382,465 = 857,783.",
            "explanation_ar": "مجموع سكان الحيَّين هو 857,783. إذن 475,318 + 382,465 = 857,783."
          }
        ],
        "hint_en": "Picture a population counter ticking up from the first number by the second.",
        "hint_ar": "تخيّل عداد سكاني يرتفع من العدد الأول بمقدار العدد الثاني.",
        "result_en": "The answer is 857783",
        "result_ar": "الجواب هو 857783"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-easy-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-add-medium-001",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "What is 1,234,567 + 2,345,678?",
    "question_ar": "ما ناتج 1,234,567 + 2,345,678 ؟",
    "answer": 3580245,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 2,345,678 is close to 2,346,000. The overshoot is 2,346,000 − 2,345,678 = 322.",
            "explanation_ar": "لاحظ أن 2,345,678 قريبة من 2,346,000. الزيادة هي 2,346,000 − 2,345,678 = 322."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add using the rounded value: 1,234,567 + 2,346,000 = 3,580,567.",
            "explanation_ar": "اجمع بالقيمة المُقرَّبة: 1,234,567 + 2,346,000 = 3,580,567."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the overshoot of 322: 3,580,567 − 322 = 3,580,245.",
            "explanation_ar": "اطرح زيادة 322: 3,580,567 − 322 = 3,580,245."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "1,234,567 + 2,345,678 = 3,580,245.",
            "explanation_ar": "1,234,567 + 2,345,678 = 3,580,245."
          }
        ],
        "hint_en": "Round 2,345,678 up to 2,346,000, add, then subtract the overshoot of 322.",
        "hint_ar": "قرّب 2,345,678 إلى 2,346,000، اجمع، ثم اطرح الزيادة 322.",
        "result_en": "The answer is 3580245",
        "result_ar": "الجواب هو 3580245"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split: 1,234,567 = 1,234,000 + 567 and 2,345,678 = 2,345,000 + 678.",
            "explanation_ar": "قسّم: 1,234,567 = 1,234,000 + 567 و 2,345,678 = 2,345,000 + 678."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add thousands parts: 1,234,000 + 2,345,000 = 3,579,000. Add remainders: 567 + 678 = 1,245.",
            "explanation_ar": "اجمع أجزاء الآلاف: 1,234,000 + 2,345,000 = 3,579,000. اجمع البواقي: 567 + 678 = 1,245."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Combine: 3,579,000 + 1,245 = 3,580,245.",
            "explanation_ar": "اجمع: 3,579,000 + 1,245 = 3,580,245."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "3,580,245 is a 7-digit number, which is reasonable for two 7-digit addends. Answer: 3,580,245.",
            "explanation_ar": "3,580,245 عدد مكوّن من 7 أرقام، وهو معقول لمجموع عددين كل منهما 7 أرقام. الجواب: 3,580,245."
          }
        ],
        "hint_en": "Split at the thousands mark; watch for the carry when adding 567 + 678.",
        "hint_ar": "قسّم عند الآلاف؛ انتبه للمحمول عند جمع 567 + 678.",
        "result_en": "The answer is 3580245",
        "result_ar": "الجواب هو 3580245"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A streaming platform has 1,234,567 subscribers in Country A and 2,345,678 in Country B. What is the total?",
            "explanation_ar": "منصة بث تضم 1,234,567 مشتركاً في الدولة أ و 2,345,678 في الدولة ب. ما المجموع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Imagine a progress bar filling from 0 to 1,234,567 (first country), then extending by 2,345,678 more.",
            "explanation_ar": "تخيّل شريط تقدم يمتلئ من 0 إلى 1,234,567 (الدولة الأولى)، ثم يمتد بمقدار 2,345,678 آخر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The bar passes 3,000,000 and lands at 3,579,000 + 1,245 = 3,580,245.",
            "explanation_ar": "يتجاوز الشريط 3,000,000 ويستقر عند 3,579,000 + 1,245 = 3,580,245."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The total subscriber count is 3,580,245. So 1,234,567 + 2,345,678 = 3,580,245.",
            "explanation_ar": "إجمالي عدد المشتركين هو 3,580,245. إذن 1,234,567 + 2,345,678 = 3,580,245."
          }
        ],
        "hint_en": "Picture a bar growing past 3 million; check where it finally stops.",
        "hint_ar": "تخيّل شريطاً يتجاوز 3 ملايين؛ تحقق من المكان الذي يتوقف فيه.",
        "result_en": "The answer is 3580245",
        "result_ar": "الجواب هو 3580245"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-medium-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-add-medium-002",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "What is 3,456,789 + 1,543,211?",
    "question_ar": "ما ناتج 3,456,789 + 1,543,211 ؟",
    "answer": 5000000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Examine the last three digits: 789 + 211 = 1,000 exactly. This signals a perfectly clean addition.",
            "explanation_ar": "افحص الأرقام الثلاثة الأخيرة: 789 + 211 = 1,000 بالضبط. هذا يدل على جمع دقيق تماماً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The last three digits produce a carry of 1. Add the remaining parts: 3,456 + 1,543 = 4,999. Plus the carry: 4,999 + 1 = 5,000.",
            "explanation_ar": "تنتج الأرقام الثلاثة الأخيرة محمولاً بمقدار 1. اجمع الأجزاء المتبقية: 3,456 + 1,543 = 4,999. مع المحمول: 4,999 + 1 = 5,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The thousands part sums to 5,000 with carry, and the ones part gives 000. Full result: 5,000,000.",
            "explanation_ar": "يبلغ مجموع أجزاء الآلاف مع المحمول 5,000 وتُعطي الآحاد 000. النتيجة الكاملة: 5,000,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3,456,789 + 1,543,211 = 5,000,000.",
            "explanation_ar": "3,456,789 + 1,543,211 = 5,000,000."
          }
        ],
        "hint_en": "The last three digits are complementary; check if the full number pair sums to a round million.",
        "hint_ar": "الأرقام الثلاثة الأخيرة متممة؛ تحقق إذا كان مجموع الرقمين الكاملين يساوي مليوناً مُقرَّباً.",
        "result_en": "The answer is 5000000",
        "result_ar": "الجواب هو 5000000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split: 3,456,789 = 3,456,000 + 789 and 1,543,211 = 1,543,000 + 211.",
            "explanation_ar": "قسّم: 3,456,789 = 3,456,000 + 789 و 1,543,211 = 1,543,000 + 211."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add thousands: 3,456,000 + 1,543,000 = 4,999,000. Add remainders: 789 + 211 = 1,000.",
            "explanation_ar": "اجمع الآلاف: 3,456,000 + 1,543,000 = 4,999,000. اجمع البواقي: 789 + 211 = 1,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Combine: 4,999,000 + 1,000 = 5,000,000.",
            "explanation_ar": "اجمع: 4,999,000 + 1,000 = 5,000,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "5,000,000 is exactly 5 million — a beautifully round answer. Answer: 5,000,000.",
            "explanation_ar": "5,000,000 هو بالضبط 5 ملايين — إجابة مُقرَّبة جميلة. الجواب: 5,000,000."
          }
        ],
        "hint_en": "789 + 211 = 1,000; that push tips the thousands total from 4,999,000 to 5,000,000.",
        "hint_ar": "789 + 211 = 1,000؛ هذه الدفعة ترفع مجموع الآلاف من 4,999,000 إلى 5,000,000.",
        "result_en": "The answer is 5000000",
        "result_ar": "الجواب هو 5000000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A charity campaign needs 5,000,000 signatures. It already has 3,456,789. A second drive collects 1,543,211 more. Is the goal met?",
            "explanation_ar": "حملة خيرية تحتاج 5,000,000 توقيع. لديها بالفعل 3,456,789. حملة ثانية تجمع 1,543,211 توقيعاً آخر. هل تحقق الهدف؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a goal thermometer with 5,000,000 at the top. Mark the 3,456,789 level, then show a fill of 1,543,211 reaching the very top.",
            "explanation_ar": "ارسم مقياس حرارة هدفه 5,000,000 في الأعلى. ضع علامة عند مستوى 3,456,789، ثم أظهر امتلاءً بمقدار 1,543,211 يصل القمة بالضبط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The thermometer is completely full, confirming the total hits 5,000,000 exactly.",
            "explanation_ar": "مقياس الحرارة ممتلئ تماماً، مما يؤكد أن المجموع يبلغ 5,000,000 بالضبط."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Yes, the goal is exactly met: 3,456,789 + 1,543,211 = 5,000,000.",
            "explanation_ar": "نعم، تحقق الهدف بالضبط: 3,456,789 + 1,543,211 = 5,000,000."
          }
        ],
        "hint_en": "Picture a fundraising thermometer reaching its 5-million target exactly.",
        "hint_ar": "تخيّل مقياس حرارة تبرعات يصل هدفه البالغ 5 ملايين بالضبط.",
        "result_en": "The answer is 5000000",
        "result_ar": "الجواب هو 5000000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-medium-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-add-medium-003",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "What is 512,340 + 875,960 + 611,700?",
    "question_ar": "ما ناتج 512,340 + 875,960 + 611,700 ؟",
    "answer": 2000000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "All three numbers end in at least two zeros (340, 960, 700). Pair the first two: 512,340 + 875,960 = 1,388,300.",
            "explanation_ar": "تنتهي الأعداد الثلاثة بصفرين على الأقل (340، 960، 700). اجمع العددين الأولين: 512,340 + 875,960 = 1,388,300."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Notice 512,340 + 875,960: hundreds digits 3 + 9 = 12 → write 2, carry 1; thousands 512 + 875 + 1 = 1,388. Result: 1,388,300.",
            "explanation_ar": "لاحظ 512,340 + 875,960: مئات 3 + 9 = 12 → اكتب 2 واحمل 1؛ الآلاف 512 + 875 + 1 = 1,388. الناتج: 1,388,300."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now add 1,388,300 + 611,700: hundreds 3 + 7 = 10, carry 1; thousands 1,388 + 611 + 1 = 2,000. Result: 2,000,000.",
            "explanation_ar": "الآن اجمع 1,388,300 + 611,700: مئات 3 + 7 = 10، احمل 1؛ الآلاف 1,388 + 611 + 1 = 2,000. الناتج: 2,000,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "512,340 + 875,960 + 611,700 = 2,000,000.",
            "explanation_ar": "512,340 + 875,960 + 611,700 = 2,000,000."
          }
        ],
        "hint_en": "Add the first two numbers, then add the third to the subtotal.",
        "hint_ar": "اجمع العددين الأولين، ثم أضف الثالث إلى الناتج المؤقت.",
        "result_en": "The answer is 2000000",
        "result_ar": "الجواب هو 2000000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Strip the trailing two zeros: 5,123 + 8,759 + 6,117, then multiply final answer by 100.",
            "explanation_ar": "احذف الصفرين الأخيرين: 5,123 + 8,759 + 6,117، ثم اضرب الناتج النهائي في 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add: 5,123 + 8,759 = 13,882. Then 13,882 + 6,117 = 19,999. Wait — recheck: 5,123 + 8,759 = 13,882; 13,882 + 6,117 = 19,999. But 19,999 × 100 = 1,999,900 ≠ 2,000,000. Let's use the direct approach: 512,340 + 875,960 = 1,388,300; 1,388,300 + 611,700 = 2,000,000.",
            "explanation_ar": "اجمع مباشرةً: 512,340 + 875,960 = 1,388,300؛ ثم 1,388,300 + 611,700 = 2,000,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The running total after all three numbers is 2,000,000.",
            "explanation_ar": "المجموع المتراكم بعد الأعداد الثلاثة هو 2,000,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Rough check: 500,000 + 900,000 + 600,000 ≈ 2,000,000. ✓ Answer: 2,000,000.",
            "explanation_ar": "تحقق تقريبي: 500,000 + 900,000 + 600,000 ≈ 2,000,000. ✓ الجواب: 2,000,000."
          }
        ],
        "hint_en": "Add in pairs: first two numbers give 1,388,300, then add the third.",
        "hint_ar": "اجمع ثنائيًا: العددان الأولان يعطيان 1,388,300، ثم أضف الثالث.",
        "result_en": "The answer is 2000000",
        "result_ar": "الجواب هو 2000000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Three factories produce 512,340, 875,960, and 611,700 units respectively. Do they collectively hit the 2,000,000-unit target?",
            "explanation_ar": "ثلاثة مصانع تنتج 512,340 و 875,960 و 611,700 وحدة على التوالي. هل يحققون معاً هدف 2,000,000 وحدة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw three stacked bars. Factory 1 fills to 512,340; Factory 2 adds 875,960 reaching 1,388,300; Factory 3 adds 611,700.",
            "explanation_ar": "ارسم ثلاثة أشرطة مكدّسة. المصنع 1 يصل إلى 512,340؛ المصنع 2 يضيف 875,960 ليبلغ 1,388,300؛ المصنع 3 يضيف 611,700."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The total height of the three stacked bars reaches 1,388,300 + 611,700 = 2,000,000 — exactly at the target line.",
            "explanation_ar": "الارتفاع الكلي للأشرطة الثلاثة المكدّسة يبلغ 1,388,300 + 611,700 = 2,000,000 — عند خط الهدف بالضبط."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Yes, the target is met exactly: 512,340 + 875,960 + 611,700 = 2,000,000.",
            "explanation_ar": "نعم، تحقق الهدف بالضبط: 512,340 + 875,960 + 611,700 = 2,000,000."
          }
        ],
        "hint_en": "Stack three production bars and check if they reach the 2-million line.",
        "hint_ar": "كدِّس ثلاثة أشرطة إنتاج وتحقق إذا كانت تصل خط الـ 2 مليون.",
        "result_en": "The answer is 2000000",
        "result_ar": "الجواب هو 2000000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-medium-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-add-hard-001",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "What is 1,845,632 + 2,731,045 + 3,102,819 + 1,819,503?",
    "question_ar": "ما ناتج 1,845,632 + 2,731,045 + 3,102,819 + 1,819,503 ؟",
    "answer": 9498999,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Group the four numbers into two pairs: (1,845,632 + 3,102,819) and (2,731,045 + 1,819,503) to look for complementary sums.",
            "explanation_ar": "جمّع الأعداد الأربعة في زوجين: (1,845,632 + 3,102,819) و (2,731,045 + 1,819,503) للبحث عن مجاميع متممة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Pair 1: 1,845,632 + 3,102,819 = 4,948,451. Pair 2: 2,731,045 + 1,819,503 = 4,550,548.",
            "explanation_ar": "الزوج 1: 1,845,632 + 3,102,819 = 4,948,451. الزوج 2: 2,731,045 + 1,819,503 = 4,550,548."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two pair sums: 4,948,451 + 4,550,548 = 9,498,999.",
            "explanation_ar": "اجمع مجموعَي الزوجين: 4,948,451 + 4,550,548 = 9,498,999."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "1,845,632 + 2,731,045 + 3,102,819 + 1,819,503 = 9,498,999.",
            "explanation_ar": "1,845,632 + 2,731,045 + 3,102,819 + 1,819,503 = 9,498,999."
          }
        ],
        "hint_en": "Pair the four numbers strategically, compute two sub-sums, then add those together.",
        "hint_ar": "جمّع الأعداد الأربعة في أزواج استراتيجية، احسب مجموعين فرعيين، ثم اجمعهما.",
        "result_en": "The answer is 9498999",
        "result_ar": "الجواب هو 9498999"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Add left to right, keeping a running total. Start with 1,845,632.",
            "explanation_ar": "اجمع من اليسار إلى اليمين مع الاحتفاظ بمجموع متراكم. ابدأ بـ 1,845,632."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1,845,632 + 2,731,045 = 4,576,677. Then 4,576,677 + 3,102,819 = 7,679,496.",
            "explanation_ar": "1,845,632 + 2,731,045 = 4,576,677. ثم 4,576,677 + 3,102,819 = 7,679,496."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the last number: 7,679,496 + 1,819,503 = 9,498,999.",
            "explanation_ar": "أضف العدد الأخير: 7,679,496 + 1,819,503 = 9,498,999."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Estimate: 2M + 3M + 3M + 2M = 10M; actual 9,498,999 is just under 10M. ✓ Answer: 9,498,999.",
            "explanation_ar": "تقدير: 2م + 3م + 3م + 2م = 10م؛ الفعلي 9,498,999 أقل بقليل من 10م. ✓ الجواب: 9,498,999."
          }
        ],
        "hint_en": "Chain-add left to right in three steps, keeping a running subtotal.",
        "hint_ar": "اجمع تسلسليًا من اليسار إلى اليمين في ثلاث خطوات مع الاحتفاظ بمجموع فرعي.",
        "result_en": "The answer is 9498999",
        "result_ar": "الجواب هو 9498999"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Four provinces report annual budgets of 1,845,632; 2,731,045; 3,102,819; and 1,819,503 (in thousands). What is the national total?",
            "explanation_ar": "أربع مقاطعات تُعلن ميزانيات سنوية بمقدار 1,845,632 و 2,731,045 و 3,102,819 و 1,819,503 (بالآلاف). ما المجموع الوطني؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Imagine a progress gauge with a 10,000,000 cap. Fill province by province: 1,845,632 → 4,576,677 → 7,679,496 → ?",
            "explanation_ar": "تخيّل مقياس تقدم بحد أقصى 10,000,000. امتلئ مقاطعةً بمقاطعة: 1,845,632 → 4,576,677 → 7,679,496 → ؟"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Adding the final province 1,819,503 brings the gauge to 7,679,496 + 1,819,503 = 9,498,999, just short of 10,000,000.",
            "explanation_ar": "إضافة المقاطعة الأخيرة 1,819,503 يرفع المقياس إلى 7,679,496 + 1,819,503 = 9,498,999، أقل بقليل من 10,000,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The national total is 9,498,999. So 1,845,632 + 2,731,045 + 3,102,819 + 1,819,503 = 9,498,999.",
            "explanation_ar": "المجموع الوطني هو 9,498,999. إذن 1,845,632 + 2,731,045 + 3,102,819 + 1,819,503 = 9,498,999."
          }
        ],
        "hint_en": "Picture a budget gauge filling up province by province until it stops just under 10 million.",
        "hint_ar": "تخيّل مقياس ميزانية يمتلئ مقاطعةً بمقاطعة حتى يتوقف دون 10 ملايين بقليل.",
        "result_en": "The answer is 9498999",
        "result_ar": "الجواب هو 9498999"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-hard-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-add-hard-002",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "What is 2,450,000 + 1,875,325 + 3,124,675?",
    "question_ar": "ما ناتج 2,450,000 + 1,875,325 + 3,124,675 ؟",
    "answer": 7450000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 1,875,325 + 3,124,675: the last three digits 325 + 675 = 1,000 and thousands parts 875 + 124 = 999 + carry = 1,000. So their sum is exactly 5,000,000.",
            "explanation_ar": "لاحظ 1,875,325 + 3,124,675: الأرقام الثلاثة الأخيرة 325 + 675 = 1,000 وأجزاء الآلاف 875 + 124 = 999 + محمول = 1,000. إذن مجموعهما 5,000,000 بالضبط."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Confirm: 1,875,325 + 3,124,675 = 5,000,000 (the two numbers are perfectly complementary to 5 million).",
            "explanation_ar": "أكّد: 1,875,325 + 3,124,675 = 5,000,000 (العددان متممان تماماً لـ 5 ملايين)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now add the round subtotal: 2,450,000 + 5,000,000 = 7,450,000.",
            "explanation_ar": "الآن اجمع المجموع الفرعي المُقرَّب: 2,450,000 + 5,000,000 = 7,450,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2,450,000 + 1,875,325 + 3,124,675 = 7,450,000.",
            "explanation_ar": "2,450,000 + 1,875,325 + 3,124,675 = 7,450,000."
          }
        ],
        "hint_en": "Spot the complementary pair (1,875,325 + 3,124,675 = 5,000,000), then add the remaining term.",
        "hint_ar": "اكتشف الزوج المتمم (1,875,325 + 3,124,675 = 5,000,000)، ثم أضف الحد المتبقي.",
        "result_en": "The answer is 7450000",
        "result_ar": "الجواب هو 7450000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Reorder as (1,875,325 + 3,124,675) + 2,450,000 to add the complementary pair first.",
            "explanation_ar": "أعد الترتيب إلى (1,875,325 + 3,124,675) + 2,450,000 لجمع الزوج المتمم أولاً."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1,875,325 + 3,124,675: ones 325 + 675 = 1,000; thousands 1,875 + 3,124 + 1 = 5,000. Total = 5,000,000.",
            "explanation_ar": "1,875,325 + 3,124,675: آحاد 325 + 675 = 1,000؛ آلاف 1,875 + 3,124 + 1 = 5,000. المجموع = 5,000,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "5,000,000 + 2,450,000 = 7,450,000.",
            "explanation_ar": "5,000,000 + 2,450,000 = 7,450,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Estimate: 2.5M + 2M + 3M = 7.5M ≈ 7,450,000. ✓ Answer: 7,450,000.",
            "explanation_ar": "تقدير: 2.5م + 2م + 3م = 7.5م ≈ 7,450,000. ✓ الجواب: 7,450,000."
          }
        ],
        "hint_en": "Reorder using the commutative property; add the complementary pair first.",
        "hint_ar": "أعد الترتيب باستخدام خاصية التبادل؛ اجمع الزوج المتمم أولاً.",
        "result_en": "The answer is 7450000",
        "result_ar": "الجواب هو 7450000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Three investors contribute 2,450,000; 1,875,325; and 3,124,675 to a fund. What is the total fund size?",
            "explanation_ar": "ثلاثة مستثمرين يساهمون بـ 2,450,000 و 1,875,325 و 3,124,675 في صندوق. ما حجم الصندوق الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a fund meter. First fill 2,450,000. Then note investors 2 and 3 together contribute exactly 5,000,000 — a second full block.",
            "explanation_ar": "ارسم مقياس صندوق. امتلئ أولاً 2,450,000. ثم لاحظ أن المستثمرَين 2 و 3 معاً يساهمان بـ 5,000,000 بالضبط — كتلة ثانية كاملة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The meter shows 2,450,000 (first block) + 5,000,000 (second block) = 7,450,000.",
            "explanation_ar": "يُظهر المقياس 2,450,000 (الكتلة الأولى) + 5,000,000 (الكتلة الثانية) = 7,450,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The total fund is 7,450,000. So 2,450,000 + 1,875,325 + 3,124,675 = 7,450,000.",
            "explanation_ar": "إجمالي الصندوق هو 7,450,000. إذن 2,450,000 + 1,875,325 + 3,124,675 = 7,450,000."
          }
        ],
        "hint_en": "Picture two investment blocks: the first is 2.45M, and the second pair together form a clean 5M block.",
        "hint_ar": "تخيّل كتلتَي استثمار: الأولى 2.45م، والزوج الثاني يشكّلان كتلة 5م دقيقة.",
        "result_en": "The answer is 7450000",
        "result_ar": "الجواب هو 7450000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-hard-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-add-hard-003",
    "grade": 8,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "What is 1,111,111 + 2,222,222 + 3,333,333 + 2,222,222?",
    "question_ar": "ما ناتج 1,111,111 + 2,222,222 + 3,333,333 + 2,222,222 ؟",
    "answer": 8888888,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "All four numbers are repunit multiples of 1,111,111. Express each as: 1×1,111,111; 2×1,111,111; 3×1,111,111; 2×1,111,111.",
            "explanation_ar": "الأعداد الأربعة كلها مضاعفات repunit لـ 1,111,111. عبّر عن كل منها: 1×1,111,111؛ 2×1,111,111؛ 3×1,111,111؛ 2×1,111,111."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Sum the multipliers: 1 + 2 + 3 + 2 = 8.",
            "explanation_ar": "اجمع المضاعفات: 1 + 2 + 3 + 2 = 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply the unit by the total multiplier: 8 × 1,111,111 = 8,888,888.",
            "explanation_ar": "اضرب الوحدة في المضاعف الكلي: 8 × 1,111,111 = 8,888,888."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "1,111,111 + 2,222,222 + 3,333,333 + 2,222,222 = 8,888,888.",
            "explanation_ar": "1,111,111 + 2,222,222 + 3,333,333 + 2,222,222 = 8,888,888."
          }
        ],
        "hint_en": "Factor out 1,111,111 from all four terms; just add the coefficients 1+2+3+2 = 8.",
        "hint_ar": "استخرج العامل المشترك 1,111,111 من الحدود الأربعة؛ فقط اجمع المعاملات 1+2+3+2 = 8.",
        "result_en": "The answer is 8888888",
        "result_ar": "الجواب هو 8888888"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Recognise the pattern: each number consists of a single repeated digit. Add digit-by-digit across all four numbers.",
            "explanation_ar": "تعرّف على النمط: كل عدد يتكون من رقم واحد مكرر. اجمع رقماً بعد رقم عبر الأعداد الأربعة."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Each digit position sums: 1+2+3+2 = 8. All seven positions give 8. So the result is 8,888,888.",
            "explanation_ar": "كل مرتبة تعطي: 1+2+3+2 = 8. المراتب السبع جميعها تعطي 8. إذن الناتج هو 8,888,888."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "No carrying needed since each column sums to exactly 8. Result: 8,888,888.",
            "explanation_ar": "لا حاجة لمحمول لأن كل عمود يبلغ مجموعه 8 بالضبط. النتيجة: 8,888,888."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "8,888,888 is ≤ 9,999,999 ✓ and is a recognisable repdigit number. Answer: 8,888,888.",
            "explanation_ar": "8,888,888 أصغر من أو يساوي 9,999,999 ✓ وهو عدد repdigit مميز. الجواب: 8,888,888."
          }
        ],
        "hint_en": "Each of the 7 digit positions: 1+2+3+2 = 8 with no carrying — giving a perfect repdigit result.",
        "hint_ar": "كل مرتبة من المراتب السبع: 1+2+3+2 = 8 بلا محمول — مما يعطي نتيجة repdigit مثالية.",
        "result_en": "The answer is 8888888",
        "result_ar": "الجواب هو 8888888"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture four sets of towers: 1 tower, 2 towers, 3 towers, 2 towers, where each tower is exactly 1,111,111 floors tall.",
            "explanation_ar": "تخيّل أربع مجموعات أبراج: 1 برج، 2 برج، 3 أبراج، 2 برج، وكل برج ارتفاعه 1,111,111 طابقاً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a grid: 7 columns (one per digit position) × 4 rows (one per number). Each cell holds the same digit repeated.",
            "explanation_ar": "ارسم شبكة: 7 أعمدة (واحد لكل مرتبة) × 4 صفوف (واحد لكل عدد). كل خلية تحتوي على نفس الرقم المكرر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Sum each column: 1+2+3+2 = 8. Every column reads 8, so the result reads 8-8-8-8-8-8-8 = 8,888,888.",
            "explanation_ar": "اجمع كل عمود: 1+2+3+2 = 8. كل عمود يعطي 8، لذا الناتج هو 8-8-8-8-8-8-8 = 8,888,888."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The grid perfectly shows 8 in every position: 1,111,111 + 2,222,222 + 3,333,333 + 2,222,222 = 8,888,888.",
            "explanation_ar": "الشبكة تُظهر 8 في كل مرتبة بشكل مثالي: 1,111,111 + 2,222,222 + 3,333,333 + 2,222,222 = 8,888,888."
          }
        ],
        "hint_en": "Visualise a 7-column grid; each column sums the same four digits to produce 8.",
        "hint_ar": "تخيّل شبكة ذات 7 أعمدة؛ كل عمود يجمع نفس الأرقام الأربعة لينتج 8.",
        "result_en": "The answer is 8888888",
        "result_ar": "الجواب هو 8888888"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-add-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g8-common-sub-easy-001",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 876,543 − 234,567 = ?",
    "question_ar": "احسب: 876,543 − 234,567 = ؟",
    "answer": 641976,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write 876,543 − 234,567. Notice that in every column the top digit is larger than or equal to the bottom digit except the units place (3 < 7) and tens place (4 < 6), so borrowing will be needed there.",
            "explanation_ar": "اكتب 876,543 − 234,567. لاحظ أن رقم الوحدات (3) أصغر من (7) ورقم العشرات (4) أصغر من (6)، لذا ستكون هناك عمليات استعارة في هاتين الخانتين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply Nikhilam on the units pair: 3 − 7 requires borrowing; 13 − 7 = 6, carry 1. Tens: 4 − 6 − 1(carry) = 3 − 6 requires borrowing; 13 − 6 − 1 = 6, carry 1. Hundreds: 5 − 5 − 1 = −1, borrow; 15 − 5 − 1 = 9, carry 1.",
            "explanation_ar": "في خانة الوحدات: 13 − 7 = 6 مع استعارة. في خانة العشرات: 13 − 6 − 1 = 6 مع استعارة. في خانة المئات: 15 − 5 − 1 = 9 مع استعارة."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Thousands: 6 − 4 − 1(carry) = 1. Ten-thousands: 7 − 3 = 4. Hundred-thousands: 8 − 2 = 6. Assemble digits right to left: 6, 6, 9, 1, 4, 6.",
            "explanation_ar": "الآلاف: 6 − 4 − 1 = 1. عشرات الآلاف: 7 − 3 = 4. مئات الآلاف: 8 − 2 = 6. الأرقام من اليمين: 6، 6، 9، 1، 4، 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Reading from the hundred-thousands to the units gives 641,976. So 876,543 − 234,567 = 641,976.",
            "explanation_ar": "قراءة الأرقام من مئات الآلاف إلى الوحدات تعطي 641,976. إذن 876,543 − 234,567 = 641,976."
          }
        ],
        "hint_en": "When a digit is smaller than the one below it, add 10 and reduce the next column by 1.",
        "hint_ar": "عندما يكون الرقم أصغر من الرقم أسفله، أضف 10 وقلّل العمود التالي بمقدار 1.",
        "result_en": "The answer is 641976",
        "result_ar": "الجواب هو 641976"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 234,567 into 234,000 + 567. We will subtract each part from 876,543 in turn.",
            "explanation_ar": "قسّم 234,567 إلى 234,000 + 567. سنطرح كل جزء من 876,543 بالتتابع."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "First subtract 234,000: 876,543 − 234,000 = 642,543. Then subtract 567: 642,543 − 567 = 641,976.",
            "explanation_ar": "أولاً اطرح 234,000: 876,543 − 234,000 = 642,543. ثم اطرح 567: 642,543 − 567 = 641,976."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The two-stage subtraction yields a single result: 641,976. No additional combination is needed because we subtracted sequentially.",
            "explanation_ar": "الطرح على مرحلتين يعطي نتيجة واحدة: 641,976. لا حاجة لإعادة جمع لأننا طرحنا بالتسلسل."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 641,976 + 234,567 = 876,543. ✓ The answer is 641,976.",
            "explanation_ar": "تحقق: 641,976 + 234,567 = 876,543. ✓ الجواب هو 641,976."
          }
        ],
        "hint_en": "Break the subtrahend into thousands and hundreds to make each step simple.",
        "hint_ar": "قسّم المطروح إلى آلاف ومئات لتسهيل كل خطوة.",
        "result_en": "The answer is 641976",
        "result_ar": "الجواب هو 641976"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a warehouse holding 876,543 boxes. A truck removes 234,567 boxes. How many remain?",
            "explanation_ar": "تخيّل مستودعاً يحتوي 876,543 صندوقاً. شاحنة تنقل 234,567 صندوقاً. كم يتبقى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Mark 234,567 on the left and 876,543 on the right. The gap between them is the answer.",
            "explanation_ar": "ارسم خط أعداد. ضع 234,567 على اليسار و876,543 على اليمين. الفجوة بينهما هي الجواب."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Jump from 234,567 → 235,000 (add 433), then → 876,543 (add 641,543). Total jump = 433 + 641,543 = 641,976.",
            "explanation_ar": "انتقل من 234,567 → 235,000 (أضف 433)، ثم → 876,543 (أضف 641,543). المجموع = 433 + 641,543 = 641,976."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The total jump of 641,976 is exactly how many boxes remain in the warehouse after removing 234,567 from 876,543.",
            "explanation_ar": "القفزة الإجمالية 641,976 هي عدد الصناديق المتبقية في المستودع بعد إزالة 234,567 من 876,543."
          }
        ],
        "hint_en": "Use a number-line jump strategy: count up from the smaller number to the larger one.",
        "hint_ar": "استخدم استراتيجية القفز على خط الأعداد: عدّ صعوداً من العدد الأصغر إلى الأكبر.",
        "result_en": "The answer is 641976",
        "result_ar": "الجواب هو 641976"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-easy-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-sub-easy-002",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 950,000 − 387,456 = ?",
    "question_ar": "احسب: 950,000 − 387,456 = ؟",
    "answer": 562544,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "950,000 ends in five zeros, and every digit of 387,456 is larger than the corresponding digit in 950,000 except the leading digit. This is a classic 'zeros subtraction' pattern suited for the All-from-9, Last-from-10 rule.",
            "explanation_ar": "950,000 تنتهي بخمسة أصفار، وكل أرقام 387,456 أكبر من الأرقام المقابلة في 950,000 ما عدا الرقم الأول. هذا نمط الطرح من الأصفار المناسب لقاعدة 'كل شيء من 9 والأخير من 10'."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply All-from-9 / Last-from-10 to 000,000 portion vs 387,456: treat the last six digits of 950,000 as 950,000 directly. Subtract column by column with borrowing: 0−6 borrow → 10−6=4; 10−5−1=4 borrow → 9; but easier: 950,000 − 387,456, note 950,000 = 900,000 + 50,000.",
            "explanation_ar": "طبّق القاعدة على 387,456: 950,000 = 900,000 + 50,000. سنعمل على الأجزاء بالتفصيل في الخطوات التالية."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract digit by digit right-to-left with borrowing: units 10−6=4; tens 9−5−1=3 wait — 10−5=5 then −1(borrow)=4 → no: units: 0−6 borrow, 10−6=4 carry1; tens: 0−5−1 borrow, 10−5−1=4 carry1; hundreds: 0−4−1 borrow, 10−4−1=5 carry1; thousands: 0−7−1 borrow, 10−7−1=2 carry1; ten-thousands: 5−8−1 borrow, 15−8−1=6 carry1; hundred-thousands: 9−3−1=5.",
            "explanation_ar": "الوحدات: 10−6=4 استعارة؛ العشرات: 10−5−1=4 استعارة؛ المئات: 10−4−1=5 استعارة؛ الآلاف: 10−7−1=2 استعارة؛ عشرات الآلاف: 15−8−1=6 استعارة؛ مئات الآلاف: 9−3−1=5."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Reading the digits from hundred-thousands to units: 5, 6, 2, 5, 4, 4 → 562,544. So 950,000 − 387,456 = 562,544.",
            "explanation_ar": "قراءة الأرقام من مئات الآلاف إلى الوحدات: 5، 6، 2، 5، 4، 4 → 562,544. إذن 950,000 − 387,456 = 562,544."
          }
        ],
        "hint_en": "When subtracting from a number with trailing zeros, use the All-from-9 Last-from-10 Vedic rule for quick mental computation.",
        "hint_ar": "عند الطرح من عدد ينتهي بأصفار، استخدم قاعدة 'كل شيء من 9 والأخير من 10' الفيدية للحساب الذهني السريع.",
        "result_en": "The answer is 562544",
        "result_ar": "الجواب هو 562544"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 387,456 into 400,000 − 12,544. This makes 950,000 − 387,456 = 950,000 − 400,000 + 12,544.",
            "explanation_ar": "قسّم 387,456 إلى 400,000 − 12,544. هذا يجعل: 950,000 − 387,456 = 950,000 − 400,000 + 12,544."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "950,000 − 400,000 = 550,000. Then add back the over-subtracted amount: 550,000 + 12,544 = 562,544.",
            "explanation_ar": "950,000 − 400,000 = 550,000. ثم أضف المقدار الزائد: 550,000 + 12,544 = 562,544."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The result 562,544 comes from subtracting a round number (400,000) and compensating with +12,544 in one clean step.",
            "explanation_ar": "الناتج 562,544 يأتي من طرح عدد مقرّب (400,000) والتعويض بإضافة 12,544 في خطوة واحدة."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 562,544 + 387,456 = 950,000. ✓ The answer is 562,544.",
            "explanation_ar": "تحقق: 562,544 + 387,456 = 950,000. ✓ الجواب هو 562,544."
          }
        ],
        "hint_en": "Round 387,456 up to 400,000, subtract, then add back the difference of 12,544.",
        "hint_ar": "قرّب 387,456 إلى 400,000، اطرح، ثم أضف الفرق 12,544.",
        "result_en": "The answer is 562544",
        "result_ar": "الجواب هو 562544"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A city has 950,000 residents. After 387,456 people relocate, how many remain?",
            "explanation_ar": "مدينة بها 950,000 ساكن. بعد انتقال 387,456 شخص، كم يتبقى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar of length 950,000. Shade the left portion of 387,456. The unshaded right portion is the answer.",
            "explanation_ar": "ارسم شريطاً بطول 950,000. ظلّل الجزء الأيسر بـ 387,456. الجزء الأيمن غير المظلل هو الجواب."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The unshaded segment stretches from 387,456 to 950,000. Count up: 387,456 + 562,544 = 950,000, so the unshaded portion = 562,544.",
            "explanation_ar": "الجزء غير المظلل يمتد من 387,456 إلى 950,000. عدّ: 387,456 + 562,544 = 950,000، إذن الجزء = 562,544."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "562,544 residents remain in the city, matching the unshaded portion of our bar model.",
            "explanation_ar": "562,544 ساكن يتبقون في المدينة، وهو ما يمثله الجزء غير المظلل في نموذج الشريط."
          }
        ],
        "hint_en": "Visualize the two numbers on a bar and find the missing segment by counting up.",
        "hint_ar": "تخيّل العددين على شريط وابحث عن الجزء المفقود بالعدّ التصاعدي.",
        "result_en": "The answer is 562544",
        "result_ar": "الجواب هو 562544"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-easy-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-sub-easy-003",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "Calculate: 723,819 − 456,273 = ?",
    "question_ar": "احسب: 723,819 − 456,273 = ؟",
    "answer": 267546,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Align 723,819 and 456,273 by place value. Check each column: units 9 > 3 ✓, tens 1 < 7 (borrow needed), hundreds 8 > 2 ✓, thousands 3 < 6 (borrow needed), ten-thousands 2 < 5 (borrow needed), hundred-thousands 7 > 4 ✓.",
            "explanation_ar": "رتّب 723,819 و456,273 حسب القيم المنزلية. فحص كل عمود: وحدات 9 > 3 ✓، عشرات 1 < 7 (استعارة)، مئات 8 > 2 ✓، آلاف 3 < 6 (استعارة)، عشرات آلاف 2 < 5 (استعارة)، مئات آلاف 7 > 4 ✓."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Units: 9 − 3 = 6. Tens: 11 − 7 = 4 (borrow 1 from hundreds, so hundreds becomes 7). Hundreds: 7 − 2 = 5. Thousands: need to borrow; 13 − 6 = 7 (borrow 1 from ten-thousands, so ten-thousands becomes 1).",
            "explanation_ar": "الوحدات: 9 − 3 = 6. العشرات: 11 − 7 = 4 (استعارة من المئات فتصبح 7). المئات: 7 − 2 = 5. الآلاف: 13 − 6 = 7 (استعارة من عشرات الآلاف فتصبح 1)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Ten-thousands: 1 < 5, borrow from hundred-thousands; 11 − 5 = 6, hundred-thousands becomes 6. Hundred-thousands: 6 − 4 = 2. Digits assembled right-to-left: 6, 4, 5, 7, 6, 2.",
            "explanation_ar": "عشرات الآلاف: 1 < 5، استعارة من مئات الآلاف؛ 11 − 5 = 6، مئات الآلاف تصبح 6. مئات الآلاف: 6 − 4 = 2. الأرقام من اليمين: 6، 4، 5، 7، 6، 2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Reading from hundred-thousands to units: 2, 6, 7, 5, 4, 6 → 267,546. So 723,819 − 456,273 = 267,546.",
            "explanation_ar": "قراءة من مئات الآلاف إلى الوحدات: 2، 6، 7، 5، 4، 6 → 267,546. إذن 723,819 − 456,273 = 267,546."
          }
        ],
        "hint_en": "Scan each column first to identify where borrowing is needed before computing.",
        "hint_ar": "افحص كل عمود أولاً لتحديد أماكن الاستعارة قبل الحساب.",
        "result_en": "The answer is 267546",
        "result_ar": "الجواب هو 267546"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 456,273 into 456,000 + 273. Subtract each part from 723,819 separately.",
            "explanation_ar": "قسّم 456,273 إلى 456,000 + 273. اطرح كل جزء من 723,819 بشكل منفصل."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "723,819 − 456,000 = 267,819. Then 267,819 − 273 = 267,546.",
            "explanation_ar": "723,819 − 456,000 = 267,819. ثم 267,819 − 273 = 267,546."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The sequential subtraction gives 267,546. Subtracting 456,000 first removes the bulk, and 273 handles the remainder.",
            "explanation_ar": "الطرح التسلسلي يعطي 267,546. طرح 456,000 أولاً يزيل الجزء الأكبر، و273 تعالج الباقي."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 267,546 + 456,273 = 723,819. ✓ The answer is 267,546.",
            "explanation_ar": "تحقق: 267,546 + 456,273 = 723,819. ✓ الجواب هو 267,546."
          }
        ],
        "hint_en": "Separate the thousands from the hundreds-and-below to make two easy subtractions.",
        "hint_ar": "افصل الآلاف عن المئات وما دونها لإجراء عمليتي طرح سهلتين.",
        "result_en": "The answer is 267546",
        "result_ar": "الجواب هو 267546"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A library has 723,819 books. It donates 456,273 books to schools. How many books remain?",
            "explanation_ar": "مكتبة تحتوي 723,819 كتاباً. تتبرع بـ 456,273 كتاباً للمدارس. كم يتبقى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture shelves holding 723,819 books total. Remove 456,000 books (emptying most shelves), leaving 267,819. Then remove 273 more books.",
            "explanation_ar": "تخيّل رفوفاً تحمل 723,819 كتاباً. أزل 456,000 كتاباً (تفريغ معظم الرفوف)، يتبقى 267,819. ثم أزل 273 كتاباً إضافياً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After removing 456,000 books: 267,819 remain. After removing the final 273: 267,819 − 273 = 267,546 remain.",
            "explanation_ar": "بعد إزالة 456,000 كتاب: يتبقى 267,819. بعد إزالة 273 الأخيرة: 267,819 − 273 = 267,546 كتاباً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "267,546 books remain in the library, confirming that 723,819 − 456,273 = 267,546.",
            "explanation_ar": "267,546 كتاباً يتبقى في المكتبة، مما يؤكد أن 723,819 − 456,273 = 267,546."
          }
        ],
        "hint_en": "Think of removing books in two rounds: first the bulk (thousands), then the small remainder.",
        "hint_ar": "فكّر في إزالة الكتب على جولتين: أولاً الكميات الكبيرة (الآلاف)، ثم الباقي الصغير.",
        "result_en": "The answer is 267546",
        "result_ar": "الجواب هو 267546"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-easy-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-sub-medium-001",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 5,400,000 − 2,867,345 = ?",
    "question_ar": "احسب: 5,400,000 − 2,867,345 = ؟",
    "answer": 2532655,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "5,400,000 has trailing zeros from the units up to the ten-thousands place. 2,867,345 fills those places with non-zero digits, so we apply the All-from-9 / Last-from-10 rule to the trailing portion.",
            "explanation_ar": "5,400,000 تحتوي أصفاراً في خانات الوحدات حتى عشرات الآلاف. 2,867,345 يملأ تلك الخانات بأرقام غير صفرية، لذا نطبّق قاعدة 'كل شيء من 9 والأخير من 10'."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract column by column right-to-left: units 0−5 borrow → 10−5=5; tens 0−4−1=−5 borrow → 10−4−1=5; hundreds 0−3−1=−4 borrow → 10−3−1=6; thousands 0−7−1=−8 borrow → 10−7−1=2; ten-thousands 0−6−1=−7 borrow → 10−6−1=3; hundred-thousands 4−8−1=−5 borrow → 14−8−1=5; millions 5−2−1=2.",
            "explanation_ar": "طرح عمود عمود من اليمين: وحدات 10−5=5؛ عشرات 10−4−1=5؛ مئات 10−3−1=6؛ آلاف 10−7−1=2؛ عشرات آلاف 10−6−1=3؛ مئات آلاف 14−8−1=5؛ ملايين 5−2−1=2."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Digits right-to-left: 5, 5, 6, 2, 3, 5, 2. Reading left-to-right: 2,532,655.",
            "explanation_ar": "الأرقام من اليمين إلى اليسار: 5، 5، 6، 2، 3، 5، 2. قراءة من اليسار لليمين: 2,532,655."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "5,400,000 − 2,867,345 = 2,532,655.",
            "explanation_ar": "5,400,000 − 2,867,345 = 2,532,655."
          }
        ],
        "hint_en": "For large numbers with zeros, apply borrowing systematically from right to left.",
        "hint_ar": "للأعداد الكبيرة التي تحتوي أصفاراً، طبّق الاستعارة بشكل منهجي من اليمين إلى اليسار.",
        "result_en": "The answer is 2532655",
        "result_ar": "الجواب هو 2532655"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Round 2,867,345 up to 3,000,000. The compensation amount is 3,000,000 − 2,867,345 = 132,655.",
            "explanation_ar": "قرّب 2,867,345 إلى 3,000,000. مقدار التعويض هو 3,000,000 − 2,867,345 = 132,655."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5,400,000 − 3,000,000 = 2,400,000. Then add back the compensation: 2,400,000 + 132,655 = 2,532,655.",
            "explanation_ar": "5,400,000 − 3,000,000 = 2,400,000. ثم أضف التعويض: 2,400,000 + 132,655 = 2,532,655."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "We over-subtracted by 132,655 when rounding up, so adding it back gives the exact answer: 2,532,655.",
            "explanation_ar": "طرحنا 132,655 زيادة عند التقريب، لذا إضافتها مجدداً تعطي الجواب الدقيق: 2,532,655."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2,532,655 + 2,867,345 = 5,400,000. ✓ The answer is 2,532,655.",
            "explanation_ar": "تحقق: 2,532,655 + 2,867,345 = 5,400,000. ✓ الجواب هو 2,532,655."
          }
        ],
        "hint_en": "Round 2,867,345 to the nearest million (3,000,000), subtract from 5,400,000, then add back the rounding difference.",
        "hint_ar": "قرّب 2,867,345 إلى أقرب مليون (3,000,000)، اطرحه من 5,400,000، ثم أضف فرق التقريب.",
        "result_en": "The answer is 2532655",
        "result_ar": "الجواب هو 2532655"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A country's national fund holds 5,400,000 dollars. The government spends 2,867,345 dollars on infrastructure. How much remains?",
            "explanation_ar": "صندوق وطني يحتوي 5,400,000 دولار. تنفق الحكومة 2,867,345 دولار على البنية التحتية. كم يتبقى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a 7-digit bar from 0 to 5,400,000. Mark 2,867,345 inside it. The remaining segment to the right represents what's left.",
            "explanation_ar": "تخيّل شريطاً من 0 إلى 5,400,000. ضع علامة عند 2,867,345 داخله. الجزء المتبقي على اليمين يمثل الباقي."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Jump from 2,867,345 → 3,000,000 (a jump of 132,655), then from 3,000,000 → 5,400,000 (a jump of 2,400,000). Total = 132,655 + 2,400,000 = 2,532,655.",
            "explanation_ar": "انتقل من 2,867,345 → 3,000,000 (قفزة 132,655)، ثم من 3,000,000 → 5,400,000 (قفزة 2,400,000). المجموع = 132,655 + 2,400,000 = 2,532,655."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "2,532,655 dollars remain in the national fund after spending 2,867,345 dollars.",
            "explanation_ar": "2,532,655 دولار يتبقى في الصندوق الوطني بعد إنفاق 2,867,345 دولار."
          }
        ],
        "hint_en": "Use two jumps on a number line: first to the nearest million, then to the target.",
        "hint_ar": "استخدم قفزتين على خط الأعداد: أولاً إلى أقرب مليون، ثم إلى الهدف.",
        "result_en": "The answer is 2532655",
        "result_ar": "الجواب هو 2532655"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-medium-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-sub-medium-002",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 3,250,000 − (−485,000) = ?",
    "question_ar": "احسب: 3,250,000 − (−485,000) = ؟",
    "answer": 3735000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Subtracting a negative number is the same as adding its positive counterpart. Recognize that 3,250,000 − (−485,000) = 3,250,000 + 485,000.",
            "explanation_ar": "طرح عدد سالب يساوي جمع نظيره الموجب. لاحظ أن 3,250,000 − (−485,000) = 3,250,000 + 485,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Now add 3,250,000 + 485,000. Align by place value: hundred-thousands 2+4=6 with no carry needed at higher places. Millions digit stays 3.",
            "explanation_ar": "الآن أجمع 3,250,000 + 485,000. رتّب حسب القيم المنزلية: مئات الآلاف 2+4=6 بدون حمل في الخانات العليا. رقم الملايين يبقى 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "3,250,000 + 485,000: add 250,000 + 485,000 = 735,000. Prefix the 3,000,000 to get 3,735,000.",
            "explanation_ar": "3,250,000 + 485,000: أجمع 250,000 + 485,000 = 735,000. أضف 3,000,000 لتحصل على 3,735,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3,250,000 − (−485,000) = 3,250,000 + 485,000 = 3,735,000.",
            "explanation_ar": "3,250,000 − (−485,000) = 3,250,000 + 485,000 = 3,735,000."
          }
        ],
        "hint_en": "Subtracting a negative flips the sign: a − (−b) = a + b.",
        "hint_ar": "طرح سالب يقلب الإشارة: a − (−b) = a + b.",
        "result_en": "The answer is 3735000",
        "result_ar": "الجواب هو 3735000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite: 3,250,000 − (−485,000) = 3,250,000 + 485,000. Split 485,000 into 500,000 − 15,000 to use a round number.",
            "explanation_ar": "أعد الكتابة: 3,250,000 + 485,000. قسّم 485,000 إلى 500,000 − 15,000 لاستخدام عدد مقرّب."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3,250,000 + 500,000 = 3,750,000. Then subtract the overage: 3,750,000 − 15,000 = 3,735,000.",
            "explanation_ar": "3,250,000 + 500,000 = 3,750,000. ثم اطرح الزيادة: 3,750,000 − 15,000 = 3,735,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Adding 500,000 and subtracting 15,000 is equivalent to adding exactly 485,000, giving 3,735,000.",
            "explanation_ar": "إضافة 500,000 وطرح 15,000 يعادل إضافة 485,000 تماماً، مما يعطي 3,735,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3,735,000 − 485,000 = 3,250,000 ✓, confirming the original equation. The answer is 3,735,000.",
            "explanation_ar": "تحقق: 3,735,000 − 485,000 = 3,250,000 ✓، مما يؤكد المعادلة الأصلية. الجواب هو 3,735,000."
          }
        ],
        "hint_en": "Once you convert to addition, round 485,000 to 500,000 and adjust by −15,000.",
        "hint_ar": "بمجرد التحويل إلى جمع، قرّب 485,000 إلى 500,000 واضبط بطرح 15,000.",
        "result_en": "The answer is 3735000",
        "result_ar": "الجواب هو 3735000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A company's debt is recorded as −485,000 dollars. If the CEO decides to cancel (subtract) that debt from the company's asset of 3,250,000 dollars, what is the new total?",
            "explanation_ar": "دين شركة مسجّل بـ −485,000 دولار. إذا قرر الرئيس إلغاء (طرح) ذلك الدين من أصول الشركة البالغة 3,250,000 دولار، ما المجموع الجديد؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line extending left (negative) and right (positive). Place 3,250,000 on the positive side. Subtracting −485,000 means moving further right by 485,000.",
            "explanation_ar": "ارسم خط أعداد يمتد يساراً (سالب) ويميناً (موجب). ضع 3,250,000 على الجانب الموجب. طرح −485,000 يعني التحرك يميناً بمقدار 485,000."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Starting at 3,250,000 and moving 485,000 to the right lands on 3,735,000.",
            "explanation_ar": "الابتداء من 3,250,000 والتحرك 485,000 إلى اليمين يصل إلى 3,735,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Cancelling a debt of 485,000 increases assets from 3,250,000 to 3,735,000, confirming 3,250,000 − (−485,000) = 3,735,000.",
            "explanation_ar": "إلغاء دين بـ 485,000 يرفع الأصول من 3,250,000 إلى 3,735,000، مما يؤكد 3,250,000 − (−485,000) = 3,735,000."
          }
        ],
        "hint_en": "On a number line, subtracting a negative means moving to the right (increasing).",
        "hint_ar": "على خط الأعداد، طرح سالب يعني التحرك يميناً (تزايد).",
        "result_en": "The answer is 3735000",
        "result_ar": "الجواب هو 3735000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-medium-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-sub-medium-003",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "Calculate: 8,000,000 − 4,563,789 = ?",
    "question_ar": "احسب: 8,000,000 − 4,563,789 = ؟",
    "answer": 3436211,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "8,000,000 is a perfect power of 10 multiplied by 8. It has six trailing zeros. Subtracting 4,563,789 from it triggers the All-from-9, Last-from-10 rule on the six-digit block 000,000.",
            "explanation_ar": "8,000,000 لها ستة أصفار لاحقة. طرح 4,563,789 منها يُفعّل قاعدة 'كل شيء من 9 والأخير من 10' على الكتلة السداسية 000,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Apply All-from-9 to each digit of 563,789 except the last, and Last-from-10 to the units digit: 9 from 10 = 1; 8 from 9 = 1 wait — apply to full number 4,563,789: treat as 8,000,000 − 4,000,000 − 563,789 = 4,000,000 − 563,789.",
            "explanation_ar": "طبّق القاعدة: 8,000,000 − 4,000,000 = 4,000,000. ثم 4,000,000 − 563,789."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "For 4,000,000 − 563,789: apply All-from-9 to 5,6,3,7,8 and Last-from-10 to 9: 10−9=1; 9−8=1; 9−7=2; 9−3=6; 9−6=3; 9−5=4. But there are only 6 zeros and the subtrahend is 563,789 (6 digits), so leading digit result is 4−0=4. Result = 3,436,211.",
            "explanation_ar": "لـ 4,000,000 − 563,789: الوحدات 10−9=1؛ العشرات 9−8=1؛ المئات 9−7=2؛ الآلاف 9−3=6؛ عشرات الآلاف 9−6=3؛ مئات الآلاف 9−5=4. النتيجة 3,436,211 (الرقم الأول 4−1=3 من الاستعارة)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "8,000,000 − 4,563,789 = 3,436,211.",
            "explanation_ar": "8,000,000 − 4,563,789 = 3,436,211."
          }
        ],
        "hint_en": "Break off the millions digit first, then apply All-from-9 / Last-from-10 to the remaining zeros block.",
        "hint_ar": "افصل رقم الملايين أولاً، ثم طبّق قاعدة 'كل شيء من 9 والأخير من 10' على كتلة الأصفار المتبقية.",
        "result_en": "The answer is 3436211",
        "result_ar": "الجواب هو 3436211"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Round 4,563,789 up to 4,600,000. The compensation is 4,600,000 − 4,563,789 = 36,211.",
            "explanation_ar": "قرّب 4,563,789 إلى 4,600,000. التعويض هو 4,600,000 − 4,563,789 = 36,211."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "8,000,000 − 4,600,000 = 3,400,000. Then add back 36,211: 3,400,000 + 36,211 = 3,436,211.",
            "explanation_ar": "8,000,000 − 4,600,000 = 3,400,000. ثم أضف 36,211: 3,400,000 + 36,211 = 3,436,211."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Subtracting 4,600,000 and then adding 36,211 nets exactly subtracting 4,563,789, giving 3,436,211.",
            "explanation_ar": "طرح 4,600,000 ثم إضافة 36,211 يعادل طرح 4,563,789 تماماً، مما يعطي 3,436,211."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3,436,211 + 4,563,789 = 8,000,000. ✓ The answer is 3,436,211.",
            "explanation_ar": "تحقق: 3,436,211 + 4,563,789 = 8,000,000. ✓ الجواب هو 3,436,211."
          }
        ],
        "hint_en": "Round 4,563,789 to 4,600,000, then compensate by adding back 36,211.",
        "hint_ar": "قرّب 4,563,789 إلى 4,600,000، ثم عوّض بإضافة 36,211.",
        "result_en": "The answer is 3436211",
        "result_ar": "الجواب هو 3436211"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A rocket starts with 8,000,000 units of fuel. After the main burn it has used 4,563,789 units. How much fuel remains?",
            "explanation_ar": "صاروخ يبدأ بـ 8,000,000 وحدة وقود. بعد الاحتراق الرئيسي استهلك 4,563,789 وحدة. كم يتبقى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a fuel gauge from 0 to 8,000,000. The needle drops from 8,000,000 to 4,563,789, using the bottom portion. The top remaining portion is the answer.",
            "explanation_ar": "تخيّل عداد وقود من 0 إلى 8,000,000. الإبرة تنخفض من 8,000,000 إلى 4,563,789. الجزء المتبقي في الأعلى هو الجواب."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Jump from 4,563,789 → 4,600,000 (add 36,211) → 8,000,000 (add 3,400,000). Total remaining = 36,211 + 3,400,000 = 3,436,211.",
            "explanation_ar": "انتقل من 4,563,789 → 4,600,000 (أضف 36,211) → 8,000,000 (أضف 3,400,000). المجموع = 36,211 + 3,400,000 = 3,436,211."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "3,436,211 units of fuel remain in the rocket after burning 4,563,789 units of the original 8,000,000.",
            "explanation_ar": "3,436,211 وحدة وقود تتبقى في الصاروخ بعد حرق 4,563,789 وحدة من أصل 8,000,000."
          }
        ],
        "hint_en": "Think of a fuel gauge dropping and measure the gap between the used amount and the full tank.",
        "hint_ar": "فكّر في عداد وقود ينخفض وقِس الفجوة بين المقدار المستهلك والخزان الممتلئ.",
        "result_en": "The answer is 3436211",
        "result_ar": "الجواب هو 3436211"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-medium-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-sub-hard-001",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 12,500,000 − 4,875,320 − 3,124,680 = ?",
    "question_ar": "احسب: 12,500,000 − 4,875,320 − 3,124,680 = ؟",
    "answer": 4500000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 4,875,320 + 3,124,680 = 8,000,000 exactly (the units 320 + 680 = 1,000, the thousands 875 + 124 = 999+1 = 1000, so they sum to 8,000,000). This is a complementary pair.",
            "explanation_ar": "لاحظ أن 4,875,320 + 3,124,680 = 8,000,000 بالضبط (الوحدات 320 + 680 = 1,000، وهما زوج مكمّل)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Verify: 4,875,320 + 3,124,680. Units: 320+680=1,000 (write 0 carry 1); thousands: 875+124+1=1,000 (write 0 carry 1); millions: 4+3+1=8. Sum = 8,000,000. ✓",
            "explanation_ar": "تحقق: 320+680=1,000 (اكتب 0 حمل 1)؛ 875+124+1=1,000 (اكتب 0 حمل 1)؛ 4+3+1=8. المجموع = 8,000,000. ✓"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Replace the two subtrahends with their sum: 12,500,000 − 8,000,000 = 4,500,000.",
            "explanation_ar": "استبدل المطروحَين بمجموعهما: 12,500,000 − 8,000,000 = 4,500,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "12,500,000 − 4,875,320 − 3,124,680 = 12,500,000 − 8,000,000 = 4,500,000.",
            "explanation_ar": "12,500,000 − 4,875,320 − 3,124,680 = 12,500,000 − 8,000,000 = 4,500,000."
          }
        ],
        "hint_en": "Check whether the two subtrahends sum to a round number — if so, combine them first.",
        "hint_ar": "تحقق هل يُعطي مجموع المطروحَين عدداً مقرّباً — إذا كان الأمر كذلك، اجمعهما أولاً.",
        "result_en": "The answer is 4500000",
        "result_ar": "الجواب هو 4500000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Group the two subtrahends: 4,875,320 + 3,124,680. Observe the last three digits: 320 + 680 = 1,000, and 875 + 124 = 999, so adding the carry: total = 8,000,000.",
            "explanation_ar": "اجمع المطروحَين: 4,875,320 + 3,124,680. لاحظ آخر ثلاثة أرقام: 320 + 680 = 1,000، و875 + 124 + 1 = 1,000. المجموع = 8,000,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Now subtract the combined subtrahend from the minuend: 12,500,000 − 8,000,000 = 4,500,000.",
            "explanation_ar": "اطرح المطروح المجمّع من المطروح منه: 12,500,000 − 8,000,000 = 4,500,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Since subtraction is left-associative, subtracting each number separately or their sum gives the same result: 4,500,000.",
            "explanation_ar": "بما أن الطرح يُجرى من اليسار لليمين، طرح كل عدد منفرداً أو مجموعهما يعطي نفس النتيجة: 4,500,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4,500,000 + 3,124,680 = 7,624,680; 7,624,680 + 4,875,320 = 12,500,000. ✓ The answer is 4,500,000.",
            "explanation_ar": "تحقق: 4,500,000 + 3,124,680 = 7,624,680؛ 7,624,680 + 4,875,320 = 12,500,000. ✓ الجواب هو 4,500,000."
          }
        ],
        "hint_en": "Add the two numbers being subtracted together first to get one round number, then subtract once.",
        "hint_ar": "اجمع العددين المطروحَين معاً أولاً للحصول على عدد مقرّب واحد، ثم اطرح مرة واحدة.",
        "result_en": "The answer is 4500000",
        "result_ar": "الجواب هو 4500000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A stadium starts with 12,500,000 tiles. Crew A removes 4,875,320 tiles and Crew B removes 3,124,680 tiles. How many tiles remain?",
            "explanation_ar": "ملعب يبدأ بـ 12,500,000 بلاطة. الفريق A يزيل 4,875,320 بلاطة والفريق B يزيل 3,124,680 بلاطة. كم يتبقى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar of 12,500,000. Shade the first section of 4,875,320 and the adjacent section of 3,124,680. Together they fill 8,000,000 of the bar.",
            "explanation_ar": "ارسم شريطاً بـ 12,500,000. ظلّل القسم الأول بـ 4,875,320 والقسم المجاور بـ 3,124,680. معاً يملآن 8,000,000 من الشريط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The combined shaded region is 8,000,000. The unshaded remainder is 12,500,000 − 8,000,000 = 4,500,000.",
            "explanation_ar": "المنطقة المظللة المجمّعة هي 8,000,000. الباقي غير المظلل هو 12,500,000 − 8,000,000 = 4,500,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "4,500,000 tiles remain after both crews removed their portions, confirming the answer.",
            "explanation_ar": "4,500,000 بلاطة تتبقى بعد أن أزال الفريقان نصيبهما، مما يؤكد الجواب."
          }
        ],
        "hint_en": "Shade both removed sections on a bar model to see they form one clean block of 8,000,000.",
        "hint_ar": "ظلّل القسمين المزالَين على نموذج الشريط لترى أنهما يشكلان كتلة واحدة نظيفة بـ 8,000,000.",
        "result_en": "The answer is 4500000",
        "result_ar": "الجواب هو 4500000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-hard-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-sub-hard-002",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: −2,450,000 − 3,750,000 + 1,200,000 = ?",
    "question_ar": "احسب: −2,450,000 − 3,750,000 + 1,200,000 = ؟",
    "answer": -5000000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Group the two negative terms first: −2,450,000 − 3,750,000 = −6,200,000. Then add the positive term: −6,200,000 + 1,200,000.",
            "explanation_ar": "اجمع الحدّين السالبين أولاً: −2,450,000 − 3,750,000 = −6,200,000. ثم أضف الحدّ الموجب: −6,200,000 + 1,200,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "2,450,000 + 3,750,000: millions 2+3=5, hundred-thousands 4+7=11 (write 1 carry 1), so millions becomes 6; result = 6,200,000. Combined negative: −6,200,000.",
            "explanation_ar": "2,450,000 + 3,750,000: ملايين 2+3=5، مئات الآلاف 4+7=11 (اكتب 1 حمل 1)، فيصبح الملايين 6؛ النتيجة = 6,200,000. الجمع السالب: −6,200,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "−6,200,000 + 1,200,000: since |−6,200,000| > 1,200,000, subtract magnitudes: 6,200,000 − 1,200,000 = 5,000,000, and keep the negative sign.",
            "explanation_ar": "−6,200,000 + 1,200,000: بما أن |−6,200,000| > 1,200,000، اطرح المقادير: 6,200,000 − 1,200,000 = 5,000,000، واحتفظ بالإشارة السالبة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "−2,450,000 − 3,750,000 + 1,200,000 = −5,000,000.",
            "explanation_ar": "−2,450,000 − 3,750,000 + 1,200,000 = −5,000,000."
          }
        ],
        "hint_en": "Group same-sign terms together first, then combine with the opposite-sign term.",
        "hint_ar": "اجمع الحدود ذات الإشارة المتشابهة أولاً، ثم ادمجها مع الحدّ ذي الإشارة المعاكسة.",
        "result_en": "The answer is -5000000",
        "result_ar": "الجواب هو -5000000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite as a sum: (−2,450,000) + (−3,750,000) + (+1,200,000). Split into negative group and positive group: negatives total −6,200,000; positive total +1,200,000.",
            "explanation_ar": "أعد الكتابة كجمع: (−2,450,000) + (−3,750,000) + (+1,200,000). قسّم إلى مجموعة سالبة ومجموعة موجبة: السالبة −6,200,000؛ الموجبة +1,200,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Net value = −6,200,000 + 1,200,000. Difference of magnitudes: 6,200,000 − 1,200,000 = 5,000,000. Sign follows the larger magnitude (negative).",
            "explanation_ar": "القيمة الصافية = −6,200,000 + 1,200,000. فرق المقادير: 6,200,000 − 1,200,000 = 5,000,000. الإشارة تتبع المقدار الأكبر (سالب)."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net result = −5,000,000. The positives (+1,200,000) only partially offset the negatives (−6,200,000), leaving a net deficit of 5,000,000.",
            "explanation_ar": "النتيجة الصافية = −5,000,000. الموجبة (+1,200,000) تُعوّض جزئياً فقط السالبة (−6,200,000)، تاركةً عجزاً صافياً قدره 5,000,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check left-to-right: −2,450,000 − 3,750,000 = −6,200,000; −6,200,000 + 1,200,000 = −5,000,000. ✓ The answer is −5,000,000.",
            "explanation_ar": "تحقق من اليسار لليمين: −2,450,000 − 3,750,000 = −6,200,000؛ −6,200,000 + 1,200,000 = −5,000,000. ✓ الجواب هو −5,000,000."
          }
        ],
        "hint_en": "Collect all negative values, collect all positive values, then find their net sum.",
        "hint_ar": "اجمع كل القيم السالبة، اجمع كل القيم الموجبة، ثم أوجد مجموعهما الصافي.",
        "result_en": "The answer is -5000000",
        "result_ar": "الجواب هو -5000000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A bank account starts with a debt of 2,450,000. A further charge of 3,750,000 is added, then a deposit of 1,200,000 is made. What is the final balance?",
            "explanation_ar": "حساب بنكي يبدأ بدين 2,450,000. تُضاف رسوم إضافية 3,750,000، ثم يُودَع 1,200,000. ما الرصيد النهائي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, start at −2,450,000. Move left by 3,750,000 to reach −6,200,000. Then move right by 1,200,000.",
            "explanation_ar": "على خط الأعداد، ابدأ من −2,450,000. تحرك يساراً بـ 3,750,000 للوصول إلى −6,200,000. ثم تحرك يميناً بـ 1,200,000."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From −6,200,000, moving right 1,200,000 lands at −6,200,000 + 1,200,000 = −5,000,000.",
            "explanation_ar": "من −6,200,000، التحرك يميناً 1,200,000 يصل إلى −6,200,000 + 1,200,000 = −5,000,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The final bank balance is −5,000,000 (a debt of 5,000,000), confirming the expression equals −5,000,000.",
            "explanation_ar": "الرصيد البنكي النهائي هو −5,000,000 (دين بقيمة 5,000,000)، مما يؤكد أن قيمة التعبير = −5,000,000."
          }
        ],
        "hint_en": "Use a number line moving left for subtractions and right for additions to track the running total.",
        "hint_ar": "استخدم خط أعداد يتحرك يساراً للطرح ويميناً للجمع لتتبع المجموع الجاري.",
        "result_en": "The answer is -5000000",
        "result_ar": "الجواب هو -5000000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-hard-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-sub-hard-003",
    "grade": 8,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "Calculate: 20,000,000 − 7,654,321 − (−2,345,679) − 5,000,000 = ?",
    "question_ar": "احسب: 20,000,000 − 7,654,321 − (−2,345,679) − 5,000,000 = ؟",
    "answer": 9691358,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Rewrite by resolving the double negative: 20,000,000 − 7,654,321 + 2,345,679 − 5,000,000. Notice that 7,654,321 + 2,345,679 = 10,000,000 (complementary pair: units 1+9=10, thousands 654+345+1=1000, millions 7+2+1=10).",
            "explanation_ar": "أعد الكتابة بحل السالب المزدوج: 20,000,000 − 7,654,321 + 2,345,679 − 5,000,000. لاحظ أن 7,654,321 + 2,345,679 = 10,000,000 (زوج مكمّل)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Combine −7,654,321 + 2,345,679: this equals −(7,654,321 − 2,345,679) = −5,308,642. Alternatively: −7,654,321 + 2,345,679 = −5,308,642.",
            "explanation_ar": "اجمع −7,654,321 + 2,345,679: يساوي −(7,654,321 − 2,345,679) = −5,308,642."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now: 20,000,000 − 5,308,642 − 5,000,000 = 20,000,000 − 10,308,642 = 9,691,358.",
            "explanation_ar": "الآن: 20,000,000 − 5,308,642 − 5,000,000 = 20,000,000 − 10,308,642 = 9,691,358."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "20,000,000 − 7,654,321 − (−2,345,679) − 5,000,000 = 9,691,358.",
            "explanation_ar": "20,000,000 − 7,654,321 − (−2,345,679) − 5,000,000 = 9,691,358."
          }
        ],
        "hint_en": "Resolve double negatives first, then look for pairs that simplify to round numbers.",
        "hint_ar": "حلّ السالب المزدوج أولاً، ثم ابحث عن أزواج تُبسَّط إلى أعداد مقرّبة.",
        "result_en": "The answer is 9691358",
        "result_ar": "الجواب هو 9691358"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite: 20,000,000 − 7,654,321 + 2,345,679 − 5,000,000. Group subtractions: subtract 7,654,321 and 5,000,000, add 2,345,679. Total subtractions = 7,654,321 + 5,000,000 = 12,654,321.",
            "explanation_ar": "أعد الكتابة: 20,000,000 − 7,654,321 + 2,345,679 − 5,000,000. جمع المطروحات: 7,654,321 + 5,000,000 = 12,654,321."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20,000,000 − 12,654,321 = 7,345,679. Then add 2,345,679: 7,345,679 + 2,345,679 = 9,691,358.",
            "explanation_ar": "20,000,000 − 12,654,321 = 7,345,679. ثم أضف 2,345,679: 7,345,679 + 2,345,679 = 9,691,358."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The total of all operations nets 9,691,358. Grouping the subtractions first and then adding the positive term was the efficient path.",
            "explanation_ar": "مجموع كل العمليات يعطي 9,691,358. تجميع المطروحات أولاً ثم إضافة الحدّ الموجب كان المسار الأكثر كفاءة."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check step by step: 20,000,000 − 7,654,321 = 12,345,679; 12,345,679 + 2,345,679 = 14,691,358; 14,691,358 − 5,000,000 = 9,691,358. ✓",
            "explanation_ar": "تحقق خطوة بخطوة: 20,000,000 − 7,654,321 = 12,345,679؛ 12,345,679 + 2,345,679 = 14,691,358؛ 14,691,358 − 5,000,000 = 9,691,358. ✓"
          }
        ],
        "hint_en": "Convert the double negative, then group all subtractions together and all additions together before computing.",
        "hint_ar": "حوّل السالب المزدوج، ثم اجمع كل المطروحات معاً وكل المجموعات معاً قبل الحساب.",
        "result_en": "The answer is 9691358",
        "result_ar": "الجواب هو 9691358"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "A project budget starts at 20,000,000. Phase 1 costs 7,654,321. A cancelled expense of −2,345,679 is reversed (subtracted), releasing funds. Phase 2 costs 5,000,000. What remains?",
            "explanation_ar": "ميزانية مشروع تبدأ بـ 20,000,000. المرحلة 1 تكلّف 7,654,321. نفقة ملغاة −2,345,679 تُعكس (تُطرح)، محررةً أموالاً. المرحلة 2 تكلّف 5,000,000. كم يتبقى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a budget bar at 20,000,000. Subtract 7,654,321 (Phase 1) → 12,345,679. Add 2,345,679 (cancellation recovery) → 14,691,358. Subtract 5,000,000 (Phase 2) → final amount.",
            "explanation_ar": "ارسم شريط ميزانية عند 20,000,000. اطرح 7,654,321 (المرحلة 1) → 12,345,679. أضف 2,345,679 (استرداد الإلغاء) → 14,691,358. اطرح 5,000,000 (المرحلة 2) → المبلغ النهائي."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Following the bar: 20,000,000 → 12,345,679 → 14,691,358 → 9,691,358. Each arrow shows one operation in the expression.",
            "explanation_ar": "تتبع الشريط: 20,000,000 → 12,345,679 → 14,691,358 → 9,691,358. كل سهم يمثل عملية واحدة في التعبير."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "9,691,358 remains in the project budget after Phase 1 costs, the cancellation recovery, and Phase 2 costs.",
            "explanation_ar": "9,691,358 يتبقى في ميزانية المشروع بعد تكاليف المرحلة 1 وسداد الإلغاء وتكاليف المرحلة 2."
          }
        ],
        "hint_en": "Process each operation on the bar one at a time, tracking the running balance after each step.",
        "hint_ar": "عالج كل عملية على الشريط خطوة بخطوة، تتبع الرصيد الجاري بعد كل خطوة.",
        "result_en": "The answer is 9691358",
        "result_ar": "الجواب هو 9691358"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-sub-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g8-common-mul-easy-001",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 1,234 × 123 = ?",
    "question_ar": "احسب: 1,234 × 123 = ؟",
    "answer": 151782,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 123 is close to 100. We can write 123 = 100 + 23, which makes the Vedic approach straightforward for 1,234 × 123.",
            "explanation_ar": "لاحظ أن 123 قريب من 100. يمكننا كتابة 123 = 100 + 23، مما يجعل الأسلوب الفيدي سهلاً لـ 1,234 × 123."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 1,234 × 100 = 123,400. Then compute 1,234 × 20 = 24,680 and 1,234 × 3 = 3,702.",
            "explanation_ar": "احسب 1,234 × 100 = 123,400. ثم احسب 1,234 × 20 = 24,680 و 1,234 × 3 = 3,702."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the partial products for the 23 part: 24,680 + 3,702 = 28,382. This represents 1,234 × 23.",
            "explanation_ar": "اجمع الحاصلات الجزئية للجزء 23: 24,680 + 3,702 = 28,382. وهذا يمثل 1,234 × 23."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Add both parts: 123,400 + 28,382 = 151,782. Therefore 1,234 × 123 = 151,782.",
            "explanation_ar": "اجمع الجزأين: 123,400 + 28,382 = 151,782. إذن 1,234 × 123 = 151,782."
          }
        ],
        "hint_en": "Break 123 into 100 + 23 to simplify the multiplication.",
        "hint_ar": "قسّم 123 إلى 100 + 23 لتبسيط عملية الضرب.",
        "result_en": "The answer is 151782",
        "result_ar": "الجواب هو 151782"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 1,234 into 1,000 + 200 + 30 + 4 and keep 123 intact.",
            "explanation_ar": "قسّم 1,234 إلى 1,000 + 200 + 30 + 4 واحتفظ بـ 123 كما هو."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1,000 × 123 = 123,000. 200 × 123 = 24,600. 30 × 123 = 3,690. 4 × 123 = 492.",
            "explanation_ar": "1,000 × 123 = 123,000. 200 × 123 = 24,600. 30 × 123 = 3,690. 4 × 123 = 492."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add all parts: 123,000 + 24,600 = 147,600. Then 147,600 + 3,690 = 151,290. Then 151,290 + 492 = 151,782.",
            "explanation_ar": "اجمع كل الأجزاء: 123,000 + 24,600 = 147,600. ثم 147,600 + 3,690 = 151,290. ثم 151,290 + 492 = 151,782."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 151,782 ÷ 123 ≈ 1,234. Confirmed. 1,234 × 123 = 151,782.",
            "explanation_ar": "تحقق: 151,782 ÷ 123 ≈ 1,234. مؤكد. 1,234 × 123 = 151,782."
          }
        ],
        "hint_en": "Expand 1,234 into thousands, hundreds, tens, and units, then multiply each by 123.",
        "hint_ar": "وسّع 1,234 إلى آلاف ومئات وعشرات وآحاد، ثم اضرب كلاً منها في 123.",
        "result_en": "The answer is 151782",
        "result_ar": "الجواب هو 151782"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 123 shelves in a warehouse, each holding 1,234 items. How many items total?",
            "explanation_ar": "تخيّل 123 رفاً في مستودع، كل رف يحمل 1,234 عنصراً. كم العدد الإجمالي للعناصر؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group the 123 shelves into 100 shelves and 23 shelves. 100 shelves × 1,234 items = 123,400 items. 23 shelves × 1,234 items = 28,382 items.",
            "explanation_ar": "قسّم الـ 123 رفاً إلى 100 رف و 23 رفاً. 100 رف × 1,234 عنصر = 123,400 عنصر. 23 رف × 1,234 عنصر = 28,382 عنصر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The two groups together give: 123,400 + 28,382 = 151,782 items total across all 123 shelves.",
            "explanation_ar": "المجموعتان معاً تعطيان: 123,400 + 28,382 = 151,782 عنصراً إجمالياً في كل الـ 123 رف."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The total items in the warehouse is 151,782, so 1,234 × 123 = 151,782.",
            "explanation_ar": "إجمالي العناصر في المستودع هو 151,782، إذن 1,234 × 123 = 151,782."
          }
        ],
        "hint_en": "Picture rows and columns: 1,234 items per shelf across 123 shelves.",
        "hint_ar": "تخيّل صفوفاً وأعمدة: 1,234 عنصراً لكل رف عبر 123 رفاً.",
        "result_en": "The answer is 151782",
        "result_ar": "الجواب هو 151782"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-easy-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-mul-easy-002",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 1,425 × 112 = ?",
    "question_ar": "احسب: 1,425 × 112 = ؟",
    "answer": 159600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 112 = 100 + 12, and 1,425 is divisible by 25, making partial products clean.",
            "explanation_ar": "لاحظ أن 112 = 100 + 12، وأن 1,425 قابل للقسمة على 25، مما يجعل الحاصلات الجزئية مرتبة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 1,425 × 100 = 142,500. Then compute 1,425 × 10 = 14,250 and 1,425 × 2 = 2,850.",
            "explanation_ar": "احسب 1,425 × 100 = 142,500. ثم احسب 1,425 × 10 = 14,250 و 1,425 × 2 = 2,850."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine the parts for 12: 14,250 + 2,850 = 17,100. This gives 1,425 × 12 = 17,100.",
            "explanation_ar": "اجمع الأجزاء الخاصة بـ 12: 14,250 + 2,850 = 17,100. وهذا يعطي 1,425 × 12 = 17,100."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Add both main parts: 142,500 + 17,100 = 159,600. Therefore 1,425 × 112 = 159,600.",
            "explanation_ar": "اجمع الجزأين الرئيسيين: 142,500 + 17,100 = 159,600. إذن 1,425 × 112 = 159,600."
          }
        ],
        "hint_en": "Split 112 into 100 + 12 and use the fact that 1,425 × 12 is manageable.",
        "hint_ar": "قسّم 112 إلى 100 + 12 واستفد من حقيقة أن 1,425 × 12 قابل للإدارة.",
        "result_en": "The answer is 159600",
        "result_ar": "الجواب هو 159600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 1,425 into 1,000 + 400 + 25 and multiply each part by 112.",
            "explanation_ar": "قسّم 1,425 إلى 1,000 + 400 + 25 واضرب كل جزء في 112."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1,000 × 112 = 112,000. 400 × 112 = 44,800. 25 × 112 = 2,800.",
            "explanation_ar": "1,000 × 112 = 112,000. 400 × 112 = 44,800. 25 × 112 = 2,800."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add all parts: 112,000 + 44,800 = 156,800. Then 156,800 + 2,800 = 159,600.",
            "explanation_ar": "اجمع كل الأجزاء: 112,000 + 44,800 = 156,800. ثم 156,800 + 2,800 = 159,600."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 159,600 ÷ 112 = 1,425. Confirmed. 1,425 × 112 = 159,600.",
            "explanation_ar": "تحقق: 159,600 ÷ 112 = 1,425. مؤكد. 1,425 × 112 = 159,600."
          }
        ],
        "hint_en": "Break 1,425 into 1,000 + 400 + 25 for easy partial products with 112.",
        "hint_ar": "قسّم 1,425 إلى 1,000 + 400 + 25 للحصول على حاصلات جزئية سهلة مع 112.",
        "result_en": "The answer is 159600",
        "result_ar": "الجواب هو 159600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a school with 112 classrooms, each containing 1,425 books. How many books total?",
            "explanation_ar": "تخيّل مدرسة فيها 112 فصلاً دراسياً، يحتوي كل فصل على 1,425 كتاباً. كم مجموع الكتب؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group the 112 classrooms into 100 classrooms and 12 classrooms. 100 × 1,425 = 142,500 books. 12 × 1,425 = 17,100 books.",
            "explanation_ar": "قسّم الـ 112 فصلاً إلى 100 فصل و 12 فصلاً. 100 × 1,425 = 142,500 كتاب. 12 × 1,425 = 17,100 كتاب."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The two groups of classrooms together hold: 142,500 + 17,100 = 159,600 books.",
            "explanation_ar": "مجموعتا الفصول معاً تحتويان على: 142,500 + 17,100 = 159,600 كتاب."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The school has 159,600 books total, so 1,425 × 112 = 159,600.",
            "explanation_ar": "لدى المدرسة 159,600 كتاباً إجمالاً، إذن 1,425 × 112 = 159,600."
          }
        ],
        "hint_en": "Visualize 112 groups of 1,425 by splitting the 112 groups into 100 and 12.",
        "hint_ar": "تخيّل 112 مجموعة من 1,425 بتقسيم الـ 112 مجموعة إلى 100 و 12.",
        "result_en": "The answer is 159600",
        "result_ar": "الجواب هو 159600"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-easy-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-mul-easy-003",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "Calculate: 1,632 × 145 = ?",
    "question_ar": "احسب: 1,632 × 145 = ؟",
    "answer": 236640,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 145 = 100 + 45, and 45 = 50 − 5, giving a convenient near-50 shortcut for 1,632 × 145.",
            "explanation_ar": "لاحظ أن 145 = 100 + 45، وأن 45 = 50 − 5، مما يوفر اختصاراً مريحاً قريباً من 50 لـ 1,632 × 145."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 1,632 × 100 = 163,200. Then 1,632 × 50 = 81,600 and 1,632 × 5 = 8,160.",
            "explanation_ar": "احسب 1,632 × 100 = 163,200. ثم 1,632 × 50 = 81,600 و 1,632 × 5 = 8,160."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "For the 45 part, use 50 − 5: 81,600 − 8,160 = 73,440. This gives 1,632 × 45 = 73,440.",
            "explanation_ar": "للجزء 45، استخدم 50 − 5: 81,600 − 8,160 = 73,440. وهذا يعطي 1,632 × 45 = 73,440."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Add both parts: 163,200 + 73,440 = 236,640. Therefore 1,632 × 145 = 236,640.",
            "explanation_ar": "اجمع الجزأين: 163,200 + 73,440 = 236,640. إذن 1,632 × 145 = 236,640."
          }
        ],
        "hint_en": "Use 145 = 100 + (50 − 5) to turn the problem into easy steps.",
        "hint_ar": "استخدم 145 = 100 + (50 − 5) لتحويل المسألة إلى خطوات سهلة.",
        "result_en": "The answer is 236640",
        "result_ar": "الجواب هو 236640"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 1,632 into 1,600 + 32 and multiply each by 145.",
            "explanation_ar": "قسّم 1,632 إلى 1,600 + 32 واضرب كلاً منها في 145."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1,600 × 145 = 232,000. (Since 16 × 145 = 2,320, so 1,600 × 145 = 232,000.) 32 × 145 = 4,640.",
            "explanation_ar": "1,600 × 145 = 232,000. (بما أن 16 × 145 = 2,320، إذن 1,600 × 145 = 232,000.) 32 × 145 = 4,640."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the parts: 232,000 + 4,640 = 236,640.",
            "explanation_ar": "اجمع الأجزاء: 232,000 + 4,640 = 236,640."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 236,640 ÷ 145 = 1,632. Confirmed. 1,632 × 145 = 236,640.",
            "explanation_ar": "تحقق: 236,640 ÷ 145 = 1,632. مؤكد. 1,632 × 145 = 236,640."
          }
        ],
        "hint_en": "Split 1,632 into 1,600 + 32 to make each multiplication simpler.",
        "hint_ar": "قسّم 1,632 إلى 1,600 + 32 لجعل كل ضرب أبسط.",
        "result_en": "The answer is 236640",
        "result_ar": "الجواب هو 236640"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a factory producing 1,632 widgets per day. How many widgets are made in 145 days?",
            "explanation_ar": "تخيّل مصنعاً ينتج 1,632 قطعة يومياً. كم قطعة تُنتج في 145 يوماً؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group 145 days into 100 days and 45 days. 100 days × 1,632 = 163,200 widgets. 45 days × 1,632 = 73,440 widgets.",
            "explanation_ar": "قسّم 145 يوماً إلى 100 يوم و 45 يوماً. 100 يوم × 1,632 = 163,200 قطعة. 45 يوم × 1,632 = 73,440 قطعة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The two periods together: 163,200 + 73,440 = 236,640 widgets produced in 145 days.",
            "explanation_ar": "الفترتان معاً: 163,200 + 73,440 = 236,640 قطعة مُنتجة في 145 يوماً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The factory produces 236,640 widgets, so 1,632 × 145 = 236,640.",
            "explanation_ar": "ينتج المصنع 236,640 قطعة، إذن 1,632 × 145 = 236,640."
          }
        ],
        "hint_en": "Think of 145 days split into 100 days and 45 days of production.",
        "hint_ar": "فكّر في 145 يوماً مقسّمة إلى 100 يوم و 45 يوماً من الإنتاج.",
        "result_en": "The answer is 236640",
        "result_ar": "الجواب هو 236640"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-easy-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-mul-medium-001",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 3,456 × 234 = ?",
    "question_ar": "احسب: 3,456 × 234 = ؟",
    "answer": 808704,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write 234 = 200 + 34 and note that 3,456 × 200 is a simple shift. This splits 3,456 × 234 into two manageable parts.",
            "explanation_ar": "اكتب 234 = 200 + 34 ولاحظ أن 3,456 × 200 هو مجرد إزاحة بسيطة. هذا يقسم 3,456 × 234 إلى جزأين قابلين للإدارة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 3,456 × 200 = 691,200. Then 3,456 × 30 = 103,680 and 3,456 × 4 = 13,824.",
            "explanation_ar": "احسب 3,456 × 200 = 691,200. ثم 3,456 × 30 = 103,680 و 3,456 × 4 = 13,824."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine the 34 part: 103,680 + 13,824 = 117,504. This gives 3,456 × 34 = 117,504.",
            "explanation_ar": "اجمع جزء الـ 34: 103,680 + 13,824 = 117,504. وهذا يعطي 3,456 × 34 = 117,504."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Add the two main parts: 691,200 + 117,504 = 808,704. Therefore 3,456 × 234 = 808,704.",
            "explanation_ar": "اجمع الجزأين الرئيسيين: 691,200 + 117,504 = 808,704. إذن 3,456 × 234 = 808,704."
          }
        ],
        "hint_en": "Split 234 into 200 + 34 to use simple multiplication by 200 first.",
        "hint_ar": "قسّم 234 إلى 200 + 34 لاستخدام الضرب البسيط في 200 أولاً.",
        "result_en": "The answer is 808704",
        "result_ar": "الجواب هو 808704"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 3,456 into 3,000 + 456, and multiply each part by 234.",
            "explanation_ar": "قسّم 3,456 إلى 3,000 + 456، واضرب كل جزء في 234."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3,000 × 234 = 702,000. 456 × 234: compute 400 × 234 = 93,600 and 56 × 234 = 13,104, giving 106,704.",
            "explanation_ar": "3,000 × 234 = 702,000. 456 × 234: احسب 400 × 234 = 93,600 و 56 × 234 = 13,104، ليعطي 106,704."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 702,000 + 106,704 = 808,704.",
            "explanation_ar": "اجمع: 702,000 + 106,704 = 808,704."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 808,704 ÷ 234 ≈ 3,456. Confirmed. 3,456 × 234 = 808,704.",
            "explanation_ar": "تحقق: 808,704 ÷ 234 ≈ 3,456. مؤكد. 3,456 × 234 = 808,704."
          }
        ],
        "hint_en": "Break 3,456 into 3,000 and 456, then handle 456 × 234 with a further split.",
        "hint_ar": "قسّم 3,456 إلى 3,000 و 456، ثم تعامل مع 456 × 234 بتقسيم إضافي.",
        "result_en": "The answer is 808704",
        "result_ar": "الجواب هو 808704"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a sports stadium with 234 sections, each seating 3,456 fans. What is the total capacity?",
            "explanation_ar": "تخيّل ملعباً رياضياً به 234 قسماً، يتسع كل قسم لـ 3,456 مشجعاً. ما الطاقة الاستيعابية الإجمالية؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group 234 sections into 200 sections and 34 sections. 200 × 3,456 = 691,200 seats. 34 × 3,456 = 117,504 seats.",
            "explanation_ar": "قسّم الـ 234 قسماً إلى 200 قسم و 34 قسماً. 200 × 3,456 = 691,200 مقعد. 34 × 3,456 = 117,504 مقعد."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total capacity: 691,200 + 117,504 = 808,704 seats across all 234 sections.",
            "explanation_ar": "الطاقة الإجمالية: 691,200 + 117,504 = 808,704 مقعداً في جميع الأقسام الـ 234."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The stadium holds 808,704 fans, so 3,456 × 234 = 808,704.",
            "explanation_ar": "يتسع الملعب لـ 808,704 مشجعاً، إذن 3,456 × 234 = 808,704."
          }
        ],
        "hint_en": "Visualize 234 sections of 3,456 seats grouped into 200 + 34 sections.",
        "hint_ar": "تخيّل 234 قسماً من 3,456 مقعداً مجمّعة في 200 + 34 قسماً.",
        "result_en": "The answer is 808704",
        "result_ar": "الجواب هو 808704"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-medium-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-mul-medium-002",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 2,875 × 316 = ?",
    "question_ar": "احسب: 2,875 × 316 = ؟",
    "answer": 908500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Note that 316 = 300 + 16, and 2,875 = 2,500 + 375. Using 300 as a base keeps the leading product clean.",
            "explanation_ar": "لاحظ أن 316 = 300 + 16، وأن 2,875 = 2,500 + 375. استخدام 300 كأساس يجعل الحاصل الأولي مرتباً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 2,875 × 300 = 862,500. Then 2,875 × 10 = 28,750 and 2,875 × 6 = 17,250.",
            "explanation_ar": "احسب 2,875 × 300 = 862,500. ثم 2,875 × 10 = 28,750 و 2,875 × 6 = 17,250."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine the 16 part: 28,750 + 17,250 = 46,000. This gives 2,875 × 16 = 46,000.",
            "explanation_ar": "اجمع جزء الـ 16: 28,750 + 17,250 = 46,000. وهذا يعطي 2,875 × 16 = 46,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Add the two main parts: 862,500 + 46,000 = 908,500. Therefore 2,875 × 316 = 908,500.",
            "explanation_ar": "اجمع الجزأين الرئيسيين: 862,500 + 46,000 = 908,500. إذن 2,875 × 316 = 908,500."
          }
        ],
        "hint_en": "Split 316 into 300 + 16 and use the clean product 2,875 × 300 = 862,500.",
        "hint_ar": "قسّم 316 إلى 300 + 16 واستخدم الحاصل المرتّب 2,875 × 300 = 862,500.",
        "result_en": "The answer is 908500",
        "result_ar": "الجواب هو 908500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 2,875 into 2,000 + 875 and multiply each part by 316.",
            "explanation_ar": "قسّم 2,875 إلى 2,000 + 875 واضرب كل جزء في 316."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2,000 × 316 = 632,000. 875 × 316: compute 800 × 316 = 252,800 and 75 × 316 = 23,700, giving 276,500.",
            "explanation_ar": "2,000 × 316 = 632,000. 875 × 316: احسب 800 × 316 = 252,800 و 75 × 316 = 23,700، ليعطي 276,500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 632,000 + 276,500 = 908,500.",
            "explanation_ar": "اجمع: 632,000 + 276,500 = 908,500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 908,500 ÷ 316 = 2,875. Confirmed. 2,875 × 316 = 908,500.",
            "explanation_ar": "تحقق: 908,500 ÷ 316 = 2,875. مؤكد. 2,875 × 316 = 908,500."
          }
        ],
        "hint_en": "Split 2,875 into 2,000 and 875 to handle each multiplication separately.",
        "hint_ar": "قسّم 2,875 إلى 2,000 و 875 للتعامل مع كل ضرب بشكل منفصل.",
        "result_en": "The answer is 908500",
        "result_ar": "الجواب هو 908500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a printing press that prints 2,875 pages per hour, running for 316 hours. How many pages total?",
            "explanation_ar": "تخيّل مطبعة تطبع 2,875 صفحة في الساعة، وتعمل 316 ساعة. كم مجموع الصفحات؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide 316 hours into 300 hours and 16 hours. 300 hours × 2,875 pages = 862,500 pages. 16 hours × 2,875 pages = 46,000 pages.",
            "explanation_ar": "قسّم الـ 316 ساعة إلى 300 ساعة و 16 ساعة. 300 ساعة × 2,875 صفحة = 862,500 صفحة. 16 ساعة × 2,875 صفحة = 46,000 صفحة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total pages: 862,500 + 46,000 = 908,500 pages printed in 316 hours.",
            "explanation_ar": "إجمالي الصفحات: 862,500 + 46,000 = 908,500 صفحة مطبوعة في 316 ساعة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The press prints 908,500 pages, so 2,875 × 316 = 908,500.",
            "explanation_ar": "تطبع المطبعة 908,500 صفحة، إذن 2,875 × 316 = 908,500."
          }
        ],
        "hint_en": "Picture 316 hours of printing at 2,875 pages per hour, grouped as 300 + 16 hours.",
        "hint_ar": "تخيّل 316 ساعة من الطباعة بمعدل 2,875 صفحة في الساعة، مجمّعة على شكل 300 + 16 ساعة.",
        "result_en": "The answer is 908500",
        "result_ar": "الجواب هو 908500"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-medium-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-mul-medium-003",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "Calculate: 3,214 × 287 = ?",
    "question_ar": "احسب: 3,214 × 287 = ؟",
    "answer": 922418,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 287 = 300 − 13. Using the near-300 Vedic approach: 3,214 × 300 minus 3,214 × 13.",
            "explanation_ar": "لاحظ أن 287 = 300 − 13. باستخدام الأسلوب الفيدي القريب من 300: 3,214 × 300 ناقص 3,214 × 13."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 3,214 × 300 = 964,200. Then 3,214 × 10 = 32,140 and 3,214 × 3 = 9,642, so 3,214 × 13 = 41,782.",
            "explanation_ar": "احسب 3,214 × 300 = 964,200. ثم 3,214 × 10 = 32,140 و 3,214 × 3 = 9,642، إذن 3,214 × 13 = 41,782."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract: 964,200 − 41,782 = 922,418. This applies the (300 − 13) rule directly.",
            "explanation_ar": "اطرح: 964,200 − 41,782 = 922,418. هذا يطبق قاعدة (300 − 13) مباشرة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is 922,418. Therefore 3,214 × 287 = 922,418.",
            "explanation_ar": "النتيجة هي 922,418. إذن 3,214 × 287 = 922,418."
          }
        ],
        "hint_en": "Think of 287 as 300 − 13 and subtract 3,214 × 13 from 3,214 × 300.",
        "hint_ar": "فكّر في 287 كـ 300 − 13 واطرح 3,214 × 13 من 3,214 × 300.",
        "result_en": "The answer is 922418",
        "result_ar": "الجواب هو 922418"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 287 into 200 + 80 + 7 and multiply each part by 3,214.",
            "explanation_ar": "قسّم 287 إلى 200 + 80 + 7 واضرب كل جزء في 3,214."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3,214 × 200 = 642,800. 3,214 × 80 = 257,120. 3,214 × 7 = 22,498.",
            "explanation_ar": "3,214 × 200 = 642,800. 3,214 × 80 = 257,120. 3,214 × 7 = 22,498."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 642,800 + 257,120 = 899,920. Then 899,920 + 22,498 = 922,418.",
            "explanation_ar": "اجمع: 642,800 + 257,120 = 899,920. ثم 899,920 + 22,498 = 922,418."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 922,418 ÷ 287 ≈ 3,214. Confirmed. 3,214 × 287 = 922,418.",
            "explanation_ar": "تحقق: 922,418 ÷ 287 ≈ 3,214. مؤكد. 3,214 × 287 = 922,418."
          }
        ],
        "hint_en": "Expand 287 into 200 + 80 + 7 and sum three partial products.",
        "hint_ar": "وسّع 287 إلى 200 + 80 + 7 واجمع ثلاثة حاصلات جزئية.",
        "result_en": "The answer is 922418",
        "result_ar": "الجواب هو 922418"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 287 buses, each carrying 3,214 passengers on a long journey. How many passengers in total?",
            "explanation_ar": "تخيّل 287 حافلة، كل منها تحمل 3,214 مسافراً في رحلة طويلة. كم عدد المسافرين إجمالاً؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group the 287 buses into 200 buses and 87 buses. 200 × 3,214 = 642,800. 87 × 3,214: use 80 × 3,214 = 257,120 and 7 × 3,214 = 22,498, giving 279,618.",
            "explanation_ar": "قسّم الـ 287 حافلة إلى 200 حافلة و 87 حافلة. 200 × 3,214 = 642,800. 87 × 3,214: استخدم 80 × 3,214 = 257,120 و 7 × 3,214 = 22,498، ليعطي 279,618."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total passengers: 642,800 + 279,618 = 922,418 across all 287 buses.",
            "explanation_ar": "إجمالي المسافرين: 642,800 + 279,618 = 922,418 في جميع الـ 287 حافلة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The convoy carries 922,418 passengers, so 3,214 × 287 = 922,418.",
            "explanation_ar": "يحمل القافلة 922,418 مسافراً، إذن 3,214 × 287 = 922,418."
          }
        ],
        "hint_en": "Picture 287 buses of 3,214 passengers, split into 200 and 87 buses.",
        "hint_ar": "تخيّل 287 حافلة بها 3,214 مسافراً، مقسّمة إلى 200 و 87 حافلة.",
        "result_en": "The answer is 922418",
        "result_ar": "الجواب هو 922418"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-medium-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-mul-hard-001",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: 4,321 × 987 = ?",
    "question_ar": "احسب: 4,321 × 987 = ؟",
    "answer": 4264827,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 987 = 1,000 − 13. Using the near-1000 Vedic approach: 4,321 × 1,000 minus 4,321 × 13.",
            "explanation_ar": "لاحظ أن 987 = 1,000 − 13. باستخدام الأسلوب الفيدي القريب من 1,000: 4,321 × 1,000 ناقص 4,321 × 13."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 4,321 × 1,000 = 4,321,000. Then 4,321 × 10 = 43,210 and 4,321 × 3 = 12,963, so 4,321 × 13 = 56,173.",
            "explanation_ar": "احسب 4,321 × 1,000 = 4,321,000. ثم 4,321 × 10 = 43,210 و 4,321 × 3 = 12,963، إذن 4,321 × 13 = 56,173."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract: 4,321,000 − 56,173 = 4,264,827. The near-1000 rule gives the answer directly.",
            "explanation_ar": "اطرح: 4,321,000 − 56,173 = 4,264,827. قاعدة القريب من 1,000 تعطي الجواب مباشرة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is 4,264,827. Therefore 4,321 × 987 = 4,264,827.",
            "explanation_ar": "النتيجة هي 4,264,827. إذن 4,321 × 987 = 4,264,827."
          }
        ],
        "hint_en": "Use 987 = 1,000 − 13 and subtract 4,321 × 13 from 4,321,000.",
        "hint_ar": "استخدم 987 = 1,000 − 13 واطرح 4,321 × 13 من 4,321,000.",
        "result_en": "The answer is 4264827",
        "result_ar": "الجواب هو 4264827"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 987 into 900 + 87 and multiply each part by 4,321.",
            "explanation_ar": "قسّم 987 إلى 900 + 87 واضرب كل جزء في 4,321."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4,321 × 900 = 3,888,900. 4,321 × 87: compute 4,321 × 80 = 345,680 and 4,321 × 7 = 30,247, giving 375,927.",
            "explanation_ar": "4,321 × 900 = 3,888,900. 4,321 × 87: احسب 4,321 × 80 = 345,680 و 4,321 × 7 = 30,247، ليعطي 375,927."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 3,888,900 + 375,927 = 4,264,827.",
            "explanation_ar": "اجمع: 3,888,900 + 375,927 = 4,264,827."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4,264,827 ÷ 987 ≈ 4,321. Confirmed. 4,321 × 987 = 4,264,827.",
            "explanation_ar": "تحقق: 4,264,827 ÷ 987 ≈ 4,321. مؤكد. 4,321 × 987 = 4,264,827."
          }
        ],
        "hint_en": "Break 987 into 900 + 87 and compute two partial products.",
        "hint_ar": "قسّم 987 إلى 900 + 87 واحسب حاصلين جزئيين.",
        "result_en": "The answer is 4264827",
        "result_ar": "الجواب هو 4264827"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a city with 987 neighborhoods, each containing 4,321 residents. What is the city's population?",
            "explanation_ar": "تخيّل مدينة بها 987 حياً، يقطن كل حي 4,321 مقيماً. ما عدد سكان المدينة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Think of 987 = 1,000 − 13. A full 1,000 neighborhoods × 4,321 = 4,321,000. But we have 13 fewer neighborhoods: 13 × 4,321 = 56,173.",
            "explanation_ar": "فكّر في 987 = 1,000 − 13. ألف حي كامل × 4,321 = 4,321,000. لكننا نملك 13 حياً أقل: 13 × 4,321 = 56,173."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Subtract the 13 missing neighborhoods: 4,321,000 − 56,173 = 4,264,827 residents.",
            "explanation_ar": "اطرح الـ 13 حياً المفقودة: 4,321,000 − 56,173 = 4,264,827 مقيماً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The city has 4,264,827 residents, so 4,321 × 987 = 4,264,827.",
            "explanation_ar": "المدينة لديها 4,264,827 مقيماً، إذن 4,321 × 987 = 4,264,827."
          }
        ],
        "hint_en": "Visualize 987 neighborhoods as 1,000 minus 13, then subtract the 13 extra groups.",
        "hint_ar": "تخيّل 987 حياً على أنها 1,000 ناقص 13، ثم اطرح المجموعات الـ 13 الإضافية.",
        "result_en": "The answer is 4264827",
        "result_ar": "الجواب هو 4264827"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-hard-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-mul-hard-002",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: 4,756 × 892 = ?",
    "question_ar": "احسب: 4,756 × 892 = ؟",
    "answer": 4242352,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 892 = 900 − 8. Using the near-900 Vedic approach: 4,756 × 900 minus 4,756 × 8.",
            "explanation_ar": "لاحظ أن 892 = 900 − 8. باستخدام الأسلوب الفيدي القريب من 900: 4,756 × 900 ناقص 4,756 × 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 4,756 × 900 = 4,280,400. Then 4,756 × 8 = 38,048.",
            "explanation_ar": "احسب 4,756 × 900 = 4,280,400. ثم 4,756 × 8 = 38,048."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract: 4,280,400 − 38,048 = 4,242,352. The (900 − 8) rule gives the answer.",
            "explanation_ar": "اطرح: 4,280,400 − 38,048 = 4,242,352. قاعدة (900 − 8) تعطي الجواب."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is 4,242,352. Therefore 4,756 × 892 = 4,242,352.",
            "explanation_ar": "النتيجة هي 4,242,352. إذن 4,756 × 892 = 4,242,352."
          }
        ],
        "hint_en": "Use 892 = 900 − 8 and subtract 4,756 × 8 from 4,756 × 900.",
        "hint_ar": "استخدم 892 = 900 − 8 واطرح 4,756 × 8 من 4,756 × 900.",
        "result_en": "The answer is 4242352",
        "result_ar": "الجواب هو 4242352"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 4,756 into 4,000 + 756 and multiply each part by 892.",
            "explanation_ar": "قسّم 4,756 إلى 4,000 + 756 واضرب كل جزء في 892."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4,000 × 892 = 3,568,000. 756 × 892: compute 700 × 892 = 624,400 and 56 × 892 = 49,952, giving 674,352.",
            "explanation_ar": "4,000 × 892 = 3,568,000. 756 × 892: احسب 700 × 892 = 624,400 و 56 × 892 = 49,952، ليعطي 674,352."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 3,568,000 + 674,352 = 4,242,352.",
            "explanation_ar": "اجمع: 3,568,000 + 674,352 = 4,242,352."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4,242,352 ÷ 892 ≈ 4,756. Confirmed. 4,756 × 892 = 4,242,352.",
            "explanation_ar": "تحقق: 4,242,352 ÷ 892 ≈ 4,756. مؤكد. 4,756 × 892 = 4,242,352."
          }
        ],
        "hint_en": "Split 4,756 into 4,000 and 756 and compute two partial products with 892.",
        "hint_ar": "قسّم 4,756 إلى 4,000 و 756 واحسب حاصلين جزئيين مع 892.",
        "result_en": "The answer is 4242352",
        "result_ar": "الجواب هو 4242352"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 892 cargo ships, each carrying 4,756 containers. How many containers in total?",
            "explanation_ar": "تخيّل 892 سفينة شحن، كل منها تحمل 4,756 حاوية. كم مجموع الحاويات؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Think of 892 = 900 − 8. A full fleet of 900 ships × 4,756 = 4,280,400 containers. Remove 8 ships: 8 × 4,756 = 38,048 containers.",
            "explanation_ar": "فكّر في 892 = 900 − 8. أسطول كامل من 900 سفينة × 4,756 = 4,280,400 حاوية. أزل 8 سفن: 8 × 4,756 = 38,048 حاوية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Subtract the 8 removed ships: 4,280,400 − 38,048 = 4,242,352 containers for 892 ships.",
            "explanation_ar": "اطرح الـ 8 سفن المُزالة: 4,280,400 − 38,048 = 4,242,352 حاوية لـ 892 سفينة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The fleet carries 4,242,352 containers, so 4,756 × 892 = 4,242,352.",
            "explanation_ar": "يحمل الأسطول 4,242,352 حاوية، إذن 4,756 × 892 = 4,242,352."
          }
        ],
        "hint_en": "Think of 892 ships as 900 minus 8 ships, then subtract the 8 ships' worth of containers.",
        "hint_ar": "فكّر في 892 سفينة على أنها 900 ناقص 8 سفن، ثم اطرح حاويات الـ 8 سفن.",
        "result_en": "The answer is 4242352",
        "result_ar": "الجواب هو 4242352"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-hard-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-mul-hard-003",
    "grade": 8,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "Calculate: 4,923 × 876 = ?",
    "question_ar": "احسب: 4,923 × 876 = ؟",
    "answer": 4312548,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 876 = 900 − 24. Using the near-900 Vedic approach: 4,923 × 900 minus 4,923 × 24.",
            "explanation_ar": "لاحظ أن 876 = 900 − 24. باستخدام الأسلوب الفيدي القريب من 900: 4,923 × 900 ناقص 4,923 × 24."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute 4,923 × 900 = 4,430,700. Then 4,923 × 24: 4,923 × 20 = 98,460 and 4,923 × 4 = 19,692, giving 118,152.",
            "explanation_ar": "احسب 4,923 × 900 = 4,430,700. ثم 4,923 × 24: 4,923 × 20 = 98,460 و 4,923 × 4 = 19,692، ليعطي 118,152."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract: 4,430,700 − 118,152 = 4,312,548. The (900 − 24) rule completes the calculation.",
            "explanation_ar": "اطرح: 4,430,700 − 118,152 = 4,312,548. قاعدة (900 − 24) تكمل الحساب."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is 4,312,548. Therefore 4,923 × 876 = 4,312,548.",
            "explanation_ar": "النتيجة هي 4,312,548. إذن 4,923 × 876 = 4,312,548."
          }
        ],
        "hint_en": "Use 876 = 900 − 24 and subtract 4,923 × 24 from 4,923 × 900.",
        "hint_ar": "استخدم 876 = 900 − 24 واطرح 4,923 × 24 من 4,923 × 900.",
        "result_en": "The answer is 4312548",
        "result_ar": "الجواب هو 4312548"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 876 into 800 + 76 and multiply each part by 4,923.",
            "explanation_ar": "قسّم 876 إلى 800 + 76 واضرب كل جزء في 4,923."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4,923 × 800 = 3,938,400. 4,923 × 76: compute 4,923 × 70 = 344,610 and 4,923 × 6 = 29,538, giving 374,148.",
            "explanation_ar": "4,923 × 800 = 3,938,400. 4,923 × 76: احسب 4,923 × 70 = 344,610 و 4,923 × 6 = 29,538، ليعطي 374,148."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 3,938,400 + 374,148 = 4,312,548.",
            "explanation_ar": "اجمع: 3,938,400 + 374,148 = 4,312,548."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4,312,548 ÷ 876 ≈ 4,923. Confirmed. 4,923 × 876 = 4,312,548.",
            "explanation_ar": "تحقق: 4,312,548 ÷ 876 ≈ 4,923. مؤكد. 4,923 × 876 = 4,312,548."
          }
        ],
        "hint_en": "Split 876 into 800 + 76 and add the two partial products.",
        "hint_ar": "قسّم 876 إلى 800 + 76 واجمع الحاصلين الجزئيين.",
        "result_en": "The answer is 4312548",
        "result_ar": "الجواب هو 4312548"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a concert tour with 876 shows, each selling 4,923 tickets. How many tickets sold in total?",
            "explanation_ar": "تخيّل جولة موسيقية مؤلفة من 876 عرضاً، يُباع في كل عرض 4,923 تذكرة. كم مجموع التذاكر المباعة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Group the 876 shows into 800 shows and 76 shows. 800 × 4,923 = 3,938,400 tickets. 76 × 4,923 = 374,148 tickets.",
            "explanation_ar": "قسّم الـ 876 عرضاً إلى 800 عرض و 76 عرضاً. 800 × 4,923 = 3,938,400 تذكرة. 76 × 4,923 = 374,148 تذكرة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total tickets: 3,938,400 + 374,148 = 4,312,548 tickets sold across all 876 shows.",
            "explanation_ar": "إجمالي التذاكر: 3,938,400 + 374,148 = 4,312,548 تذكرة مباعة في جميع الـ 876 عرضاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The tour sold 4,312,548 tickets, so 4,923 × 876 = 4,312,548.",
            "explanation_ar": "باعت الجولة 4,312,548 تذكرة، إذن 4,923 × 876 = 4,312,548."
          }
        ],
        "hint_en": "Visualize 876 shows split into 800 shows and 76 shows, each selling 4,923 tickets.",
        "hint_ar": "تخيّل 876 عرضاً مقسّماً إلى 800 عرض و 76 عرضاً، يبيع كل منها 4,923 تذكرة.",
        "result_en": "The answer is 4312548",
        "result_ar": "الجواب هو 4312548"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-mul-hard-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g8-common-div-easy-001",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 456,300 ÷ 25 = ?",
    "question_ar": "احسب: 456,300 ÷ 25 = ؟",
    "answer": 18252,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 25 = 100 ÷ 4. Dividing by 25 is the same as multiplying by 4, then dividing by 100.",
            "explanation_ar": "لاحظ أن 25 = 100 ÷ 4. القسمة على 25 تساوي الضرب في 4 ثم القسمة على 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply 456,300 × 4 = 1,825,200.",
            "explanation_ar": "اضرب 456,300 × 4 = 1,825,200."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now divide 1,825,200 ÷ 100 by shifting the decimal two places left: 18,252.",
            "explanation_ar": "الآن اقسم 1,825,200 ÷ 100 بإزاحة الفاصلة منزلتين لليسار: 18,252."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "456,300 ÷ 25 = 18,252. Verify: 18,252 × 25 = 456,300. ✓",
            "explanation_ar": "456,300 ÷ 25 = 18,252. تحقق: 18,252 × 25 = 456,300. ✓"
          }
        ],
        "hint_en": "Dividing by 25 is the same as multiplying by 4 and dividing by 100.",
        "hint_ar": "القسمة على 25 تساوي الضرب في 4 ثم القسمة على 100.",
        "result_en": "The answer is 18252",
        "result_ar": "الجواب هو 18252"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 456,300 into 400,000 + 50,000 + 6,000 + 300, then divide each part by 25.",
            "explanation_ar": "قسّم 456,300 إلى 400,000 + 50,000 + 6,000 + 300، ثم اقسم كل جزء على 25."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "400,000 ÷ 25 = 16,000; 50,000 ÷ 25 = 2,000; 6,000 ÷ 25 = 240; 300 ÷ 25 = 12.",
            "explanation_ar": "400,000 ÷ 25 = 16,000؛ 50,000 ÷ 25 = 2,000؛ 6,000 ÷ 25 = 240؛ 300 ÷ 25 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 16,000 + 2,000 + 240 + 12 = 18,252.",
            "explanation_ar": "اجمع الحصص الجزئية: 16,000 + 2,000 + 240 + 12 = 18,252."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 18,252 × 25 = 456,300. The answer is 18,252.",
            "explanation_ar": "تحقق: 18,252 × 25 = 456,300. الجواب هو 18,252."
          }
        ],
        "hint_en": "Break 456,300 into parts that are each divisible by 25 and sum the results.",
        "hint_ar": "قسّم 456,300 إلى أجزاء قابلة للقسمة على 25 واجمع النتائج.",
        "result_en": "The answer is 18252",
        "result_ar": "الجواب هو 18252"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 456,300 coins being packed into bags of 25 coins each. How many bags are filled?",
            "explanation_ar": "تخيّل 456,300 قطعة نقدية توضع في أكياس، كل كيس يحتوي على 25 قطعة. كم كيساً تمتلئ؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a number line: every 25 units = 1 bag. Since 25 × 4 = 100, every 100 coins fills exactly 4 bags. 456,300 ÷ 100 = 4,563 groups of 100.",
            "explanation_ar": "تخيّل خطاً للأعداد: كل 25 وحدة = كيس واحد. بما أن 25 × 4 = 100، كل 100 قطعة تملأ 4 أكياس بالضبط. 456,300 ÷ 100 = 4,563 مجموعة من 100."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each group of 100 fills 4 bags, so 4,563 groups fill 4,563 × 4 = 18,252 bags.",
            "explanation_ar": "كل مجموعة من 100 تملأ 4 أكياس، إذن 4,563 مجموعة تملأ 4,563 × 4 = 18,252 كيساً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "456,300 coins in bags of 25 = 18,252 bags. So 456,300 ÷ 25 = 18,252.",
            "explanation_ar": "456,300 قطعة في أكياس بحجم 25 = 18,252 كيساً. إذن 456,300 ÷ 25 = 18,252."
          }
        ],
        "hint_en": "Think of grouping 456,300 into sets of 100, then multiplying by 4 since 4 groups of 25 make 100.",
        "hint_ar": "فكّر في تجميع 456,300 في مجموعات من 100، ثم اضرب في 4 لأن 4 مجموعات من 25 تساوي 100.",
        "result_en": "The answer is 18252",
        "result_ar": "الجواب هو 18252"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-easy-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-common-div-easy-002",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 312,000 ÷ 48 = ?",
    "question_ar": "احسب: 312,000 ÷ 48 = ؟",
    "answer": 6500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 312,000 = 312 × 1,000 and 48 = 48. Simplify by dividing both by a common factor: 312,000 ÷ 48 = 312,000 ÷ 48. Divide both by 8: 39,000 ÷ 6.",
            "explanation_ar": "لاحظ أن 312,000 = 312 × 1,000 و 48 = 48. بسّط بقسمة كليهما على عامل مشترك: اقسم كليهما على 8: 39,000 ÷ 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Now compute 39,000 ÷ 6 = 6,500.",
            "explanation_ar": "الآن احسب 39,000 ÷ 6 = 6,500."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since we only divided both dividend and divisor by the same factor (8), the quotient is unchanged: 312,000 ÷ 48 = 6,500.",
            "explanation_ar": "بما أننا قسمنا كلاً من المقسوم والمقسوم عليه على نفس العامل (8)، يبقى الناتج كما هو: 312,000 ÷ 48 = 6,500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 6,500 × 48 = 312,000. ✓ The answer is 6,500.",
            "explanation_ar": "تحقق: 6,500 × 48 = 312,000. ✓ الجواب هو 6,500."
          }
        ],
        "hint_en": "Divide both 312,000 and 48 by 8 to simplify before computing.",
        "hint_ar": "اقسم كلاً من 312,000 و 48 على 8 للتبسيط قبل الحساب.",
        "result_en": "The answer is 6500",
        "result_ar": "الجواب هو 6500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 312,000 into 240,000 + 72,000. Both are divisible by 48.",
            "explanation_ar": "قسّم 312,000 إلى 240,000 + 72,000. كلاهما قابل للقسمة على 48."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "240,000 ÷ 48 = 5,000; 72,000 ÷ 48 = 1,500.",
            "explanation_ar": "240,000 ÷ 48 = 5,000؛ 72,000 ÷ 48 = 1,500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 5,000 + 1,500 = 6,500.",
            "explanation_ar": "اجمع الحصص الجزئية: 5,000 + 1,500 = 6,500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 6,500 × 48 = 312,000. The answer is 6,500.",
            "explanation_ar": "تحقق: 6,500 × 48 = 312,000. الجواب هو 6,500."
          }
        ],
        "hint_en": "Split 312,000 into 240,000 + 72,000 and divide each part by 48.",
        "hint_ar": "قسّم 312,000 إلى 240,000 + 72,000 واقسم كل جزء على 48.",
        "result_en": "The answer is 6500",
        "result_ar": "الجواب هو 6500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 312,000 students divided equally into classes of 48 students each. How many classes are there?",
            "explanation_ar": "تخيّل 312,000 طالب يُقسَّمون بالتساوي إلى فصول من 48 طالباً لكل فصل. كم فصلاً يوجد؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Think of it in steps: 48 × 1,000 = 48,000 students fills 1,000 classes. How many thousands fit in 312,000? 312,000 ÷ 48,000 = 6.5, meaning 6,500 classes.",
            "explanation_ar": "فكّر في خطوات: 48 × 1,000 = 48,000 طالب يملأ 1,000 فصل. كم ألفاً يناسب 312,000؟ 312,000 ÷ 48,000 = 6.5، أي 6,500 فصل."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "6,000 classes × 48 = 288,000; remaining 24,000 ÷ 48 = 500 more classes. Total = 6,500 classes.",
            "explanation_ar": "6,000 فصل × 48 = 288,000؛ المتبقي 24,000 ÷ 48 = 500 فصل إضافي. المجموع = 6,500 فصل."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "312,000 students in groups of 48 = 6,500 groups. So 312,000 ÷ 48 = 6,500.",
            "explanation_ar": "312,000 طالب في مجموعات من 48 = 6,500 مجموعة. إذن 312,000 ÷ 48 = 6,500."
          }
        ],
        "hint_en": "Picture how many groups of 48 fit into 312,000 by thinking in thousands.",
        "hint_ar": "تخيّل كم مجموعة من 48 تناسب 312,000 بالتفكير بالآلاف.",
        "result_en": "The answer is 6500",
        "result_ar": "الجواب هو 6500"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-easy-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-common-div-easy-003",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "Calculate: 594,000 ÷ 75 = ?",
    "question_ar": "احسب: 594,000 ÷ 75 = ؟",
    "answer": 7920,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 75 = 300 ÷ 4. Dividing by 75 equals multiplying by 4, then dividing by 300.",
            "explanation_ar": "لاحظ أن 75 = 300 ÷ 4. القسمة على 75 تساوي الضرب في 4 ثم القسمة على 300."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply 594,000 × 4 = 2,376,000.",
            "explanation_ar": "اضرب 594,000 × 4 = 2,376,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide 2,376,000 ÷ 300 = 7,920.",
            "explanation_ar": "اقسم 2,376,000 ÷ 300 = 7,920."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 7,920 × 75 = 594,000. ✓ The answer is 7,920.",
            "explanation_ar": "تحقق: 7,920 × 75 = 594,000. ✓ الجواب هو 7,920."
          }
        ],
        "hint_en": "Dividing by 75 is the same as multiplying by 4 and dividing by 300.",
        "hint_ar": "القسمة على 75 تساوي الضرب في 4 ثم القسمة على 300.",
        "result_en": "The answer is 7920",
        "result_ar": "الجواب هو 7920"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 594,000 into 525,000 + 69,000. Both are divisible by 75.",
            "explanation_ar": "قسّم 594,000 إلى 525,000 + 69,000. كلاهما قابل للقسمة على 75."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "525,000 ÷ 75 = 7,000; 69,000 ÷ 75 = 920.",
            "explanation_ar": "525,000 ÷ 75 = 7,000؛ 69,000 ÷ 75 = 920."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 7,000 + 920 = 7,920.",
            "explanation_ar": "اجمع الحصص الجزئية: 7,000 + 920 = 7,920."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 7,920 × 75 = 594,000. The answer is 7,920.",
            "explanation_ar": "تحقق: 7,920 × 75 = 594,000. الجواب هو 7,920."
          }
        ],
        "hint_en": "Split 594,000 into 525,000 + 69,000 and divide each by 75.",
        "hint_ar": "قسّم 594,000 إلى 525,000 + 69,000 واقسم كلاً منهما على 75.",
        "result_en": "The answer is 7920",
        "result_ar": "الجواب هو 7920"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 594,000 kg of rice packed into sacks of 75 kg each. How many sacks are filled?",
            "explanation_ar": "تخيّل 594,000 كجم من الأرز يُعبَّأ في أكياس سعة 75 كجم لكل كيس. كم كيساً يمتلئ؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "75 × 8,000 = 600,000 which is close to 594,000. So we need slightly fewer than 8,000 sacks.",
            "explanation_ar": "75 × 8,000 = 600,000 وهو قريب من 594,000. إذن نحتاج أقل بقليل من 8,000 كيس."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "600,000 − 594,000 = 6,000. How many fewer sacks? 6,000 ÷ 75 = 80 fewer. So 8,000 − 80 = 7,920 sacks.",
            "explanation_ar": "600,000 − 594,000 = 6,000. كم كيساً أقل؟ 6,000 ÷ 75 = 80 أقل. إذن 8,000 − 80 = 7,920 كيساً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "594,000 kg in sacks of 75 kg = 7,920 sacks. So 594,000 ÷ 75 = 7,920.",
            "explanation_ar": "594,000 كجم في أكياس من 75 كجم = 7,920 كيساً. إذن 594,000 ÷ 75 = 7,920."
          }
        ],
        "hint_en": "Use 75 × 8,000 = 600,000 as an anchor, then subtract the excess.",
        "hint_ar": "استخدم 75 × 8,000 = 600,000 كنقطة ارتكاز، ثم اطرح الزيادة.",
        "result_en": "The answer is 7920",
        "result_ar": "الجواب هو 7920"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-easy-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-common-div-medium-001",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 1,234,428 ÷ 123 = ?",
    "question_ar": "احسب: 1,234,428 ÷ 123 = ؟",
    "answer": 10036,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 123 × 10,000 = 1,230,000, which is close to 1,234,560. The remainder after 10,000 groups is 1,234,560 − 1,230,000 = 4,560.",
            "explanation_ar": "لاحظ أن 123 × 10,000 = 1,230,000، وهو قريب من 1,234,560. الباقي بعد 10,000 مجموعة هو 1,234,560 − 1,230,000 = 4,560."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute the remainder: 1,234,428 − 1,230,000 = 4,428. Then 4,428 ÷ 123 = 36 (since 123 × 36 = 4,428). So the quotient is 10,000 + 36 = 10,036.",
            "explanation_ar": "احسب الباقي: 1,234,428 − 1,230,000 = 4,428. ثم 4,428 ÷ 123 = 36 (لأن 123 × 36 = 4,428). إذن الحصة هي 10,000 + 36 = 10,036."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine the two parts: 10,000 + 36 = 10,036.",
            "explanation_ar": "اجمع الجزأين: 10,000 + 36 = 10,036."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 10,036 × 123 = 1,234,428. The answer is 10,036.",
            "explanation_ar": "تحقق: 10,036 × 123 = 1,234,428. الجواب هو 10,036."
          }
        ],
        "hint_en": "Anchor at 123 × 10,000 = 1,230,000, then divide the remainder by 123.",
        "hint_ar": "ابدأ من 123 × 10,000 = 1,230,000، ثم اقسم الباقي على 123.",
        "result_en": "The answer is 10036",
        "result_ar": "الجواب هو 10036"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 1,234,428 into 1,230,000 + 4,428. Both are divisible by 123.",
            "explanation_ar": "قسّم 1,234,428 إلى 1,230,000 + 4,428. كلاهما قابل للقسمة على 123."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1,230,000 ÷ 123 = 10,000; 4,428 ÷ 123 = 36.",
            "explanation_ar": "1,230,000 ÷ 123 = 10,000؛ 4,428 ÷ 123 = 36."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 10,000 + 36 = 10,036.",
            "explanation_ar": "اجمع الحصص الجزئية: 10,000 + 36 = 10,036."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 10,036 × 123 = 1,234,428. The answer is 10,036.",
            "explanation_ar": "تحقق: 10,036 × 123 = 1,234,428. الجواب هو 10,036."
          }
        ],
        "hint_en": "Split 1,234,428 into 1,230,000 + 4,428 and divide each by 123.",
        "hint_ar": "قسّم 1,234,428 إلى 1,230,000 + 4,428 واقسم كلاً منهما على 123.",
        "result_en": "The answer is 10036",
        "result_ar": "الجواب هو 10036"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 1,234,428 books distributed equally into boxes of 123 books each. How many boxes are needed?",
            "explanation_ar": "تخيّل 1,234,428 كتاباً يُوزَّع بالتساوي في صناديق، كل صندوق يحتوي على 123 كتاباً. كم صندوقاً تحتاج؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Think in layers: 10,000 boxes hold 123 × 10,000 = 1,230,000 books. Remaining: 1,234,428 − 1,230,000 = 4,428 books.",
            "explanation_ar": "فكّر في طبقات: 10,000 صندوق يحمل 123 × 10,000 = 1,230,000 كتاباً. المتبقي: 1,234,428 − 1,230,000 = 4,428 كتاباً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "4,428 remaining books ÷ 123 per box = 36 additional boxes.",
            "explanation_ar": "4,428 كتاباً متبقياً ÷ 123 لكل صندوق = 36 صندوقاً إضافياً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total boxes: 10,000 + 36 = 10,036. So 1,234,428 ÷ 123 = 10,036.",
            "explanation_ar": "إجمالي الصناديق: 10,000 + 36 = 10,036. إذن 1,234,428 ÷ 123 = 10,036."
          }
        ],
        "hint_en": "Start with 10,000 boxes of 123, then find how many extra boxes the remaining books fill.",
        "hint_ar": "ابدأ بـ 10,000 صندوق من 123، ثم اجد كم صندوقاً إضافياً تملأ الكتب المتبقية.",
        "result_en": "The answer is 10036",
        "result_ar": "الجواب هو 10036"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-medium-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-common-div-medium-002",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 2,764,800 ÷ 240 = ?",
    "question_ar": "احسب: 2,764,800 ÷ 240 = ؟",
    "answer": 11520,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 240 = 24 × 10. First divide 2,764,800 ÷ 10 = 276,480, then divide 276,480 ÷ 24.",
            "explanation_ar": "لاحظ أن 240 = 24 × 10. أولاً اقسم 2,764,800 ÷ 10 = 276,480، ثم اقسم 276,480 ÷ 24."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "276,480 ÷ 24: simplify by dividing both by 8: 34,560 ÷ 3 = 11,520.",
            "explanation_ar": "276,480 ÷ 24: بسّط بقسمة كليهما على 8: 34,560 ÷ 3 = 11,520."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The result of 276,480 ÷ 24 = 11,520 gives us the final answer for 2,764,800 ÷ 240.",
            "explanation_ar": "نتيجة 276,480 ÷ 24 = 11,520 تعطينا الجواب النهائي لـ 2,764,800 ÷ 240."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 11,520 × 240 = 2,764,800. ✓ The answer is 11,520.",
            "explanation_ar": "تحقق: 11,520 × 240 = 2,764,800. ✓ الجواب هو 11,520."
          }
        ],
        "hint_en": "Break 240 into 10 × 24, divide by 10 first, then by 24.",
        "hint_ar": "حلّل 240 إلى 10 × 24، اقسم على 10 أولاً ثم على 24.",
        "result_en": "The answer is 11520",
        "result_ar": "الجواب هو 11520"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 2,764,800 into 2,400,000 + 364,800. Both are divisible by 240.",
            "explanation_ar": "قسّم 2,764,800 إلى 2,400,000 + 364,800. كلاهما قابل للقسمة على 240."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2,400,000 ÷ 240 = 10,000; 364,800 ÷ 240 = 1,520.",
            "explanation_ar": "2,400,000 ÷ 240 = 10,000؛ 364,800 ÷ 240 = 1,520."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 10,000 + 1,520 = 11,520.",
            "explanation_ar": "اجمع: 10,000 + 1,520 = 11,520."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 11,520 × 240 = 2,764,800. The answer is 11,520.",
            "explanation_ar": "تحقق: 11,520 × 240 = 2,764,800. الجواب هو 11,520."
          }
        ],
        "hint_en": "Split 2,764,800 into 2,400,000 + 364,800 and divide each by 240.",
        "hint_ar": "قسّم 2,764,800 إلى 2,400,000 + 364,800 واقسم كلاً منهما على 240.",
        "result_en": "The answer is 11520",
        "result_ar": "الجواب هو 11520"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a factory producing 2,764,800 units over many days, making 240 units per day. How many days did it run?",
            "explanation_ar": "تخيّل مصنعاً ينتج 2,764,800 وحدة على مدى أيام، بمعدل 240 وحدة يومياً. كم يوماً عمل المصنع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "In 10,000 days: 240 × 10,000 = 2,400,000 units. Remaining: 2,764,800 − 2,400,000 = 364,800 units.",
            "explanation_ar": "في 10,000 يوم: 240 × 10,000 = 2,400,000 وحدة. المتبقي: 2,764,800 − 2,400,000 = 364,800 وحدة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "364,800 additional units ÷ 240 per day = 1,520 more days.",
            "explanation_ar": "364,800 وحدة إضافية ÷ 240 في اليوم = 1,520 يوماً إضافياً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total days: 10,000 + 1,520 = 11,520. So 2,764,800 ÷ 240 = 11,520.",
            "explanation_ar": "إجمالي الأيام: 10,000 + 1,520 = 11,520. إذن 2,764,800 ÷ 240 = 11,520."
          }
        ],
        "hint_en": "Find how many 10,000-day batches fit, then handle the remainder.",
        "hint_ar": "اجد كم دفعة من 10,000 يوم تناسب، ثم تعامل مع الباقي.",
        "result_en": "The answer is 11520",
        "result_ar": "الجواب هو 11520"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-medium-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-common-div-medium-003",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "Calculate: 3,627,750 ÷ 350 = ?",
    "question_ar": "احسب: 3,627,750 ÷ 350 = ؟",
    "answer": 10365,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 350 = 35 × 10. Divide 3,627,750 ÷ 10 = 362,775, then divide 362,775 ÷ 35.",
            "explanation_ar": "لاحظ أن 350 = 35 × 10. اقسم 3,627,750 ÷ 10 = 362,775، ثم اقسم 362,775 ÷ 35."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "362,775 ÷ 35: divide both by 5: 72,555 ÷ 7 = 10,365.",
            "explanation_ar": "362,775 ÷ 35: اقسم كليهما على 5: 72,555 ÷ 7 = 10,365."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 72,555 ÷ 7 = 10,365, and this equals 362,775 ÷ 35, the answer to 3,627,750 ÷ 350 is 10,365.",
            "explanation_ar": "بما أن 72,555 ÷ 7 = 10,365، وهذا يساوي 362,775 ÷ 35، فإن الجواب لـ 3,627,750 ÷ 350 هو 10,365."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 10,365 × 350 = 3,627,750. ✓ The answer is 10,365.",
            "explanation_ar": "تحقق: 10,365 × 350 = 3,627,750. ✓ الجواب هو 10,365."
          }
        ],
        "hint_en": "Break 350 into 10 × 35, then further simplify 35 into 5 × 7.",
        "hint_ar": "حلّل 350 إلى 10 × 35، ثم بسّط 35 إلى 5 × 7.",
        "result_en": "The answer is 10365",
        "result_ar": "الجواب هو 10365"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 3,627,750 into 3,500,000 + 127,750. Both are divisible by 350.",
            "explanation_ar": "قسّم 3,627,750 إلى 3,500,000 + 127,750. كلاهما قابل للقسمة على 350."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3,500,000 ÷ 350 = 10,000; 127,750 ÷ 350 = 365.",
            "explanation_ar": "3,500,000 ÷ 350 = 10,000؛ 127,750 ÷ 350 = 365."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 10,000 + 365 = 10,365.",
            "explanation_ar": "اجمع الحصص الجزئية: 10,000 + 365 = 10,365."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 10,365 × 350 = 3,627,750. The answer is 10,365.",
            "explanation_ar": "تحقق: 10,365 × 350 = 3,627,750. الجواب هو 10,365."
          }
        ],
        "hint_en": "Split 3,627,750 into 3,500,000 + 127,750, both divisible by 350.",
        "hint_ar": "قسّم 3,627,750 إلى 3,500,000 + 127,750، كلاهما قابل للقسمة على 350.",
        "result_en": "The answer is 10365",
        "result_ar": "الجواب هو 10365"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 3,627,750 liters of water filling tanks of 350 liters each. How many tanks are filled?",
            "explanation_ar": "تخيّل 3,627,750 لتراً من الماء تُملأ في خزانات سعة 350 لتراً لكل خزان. كم خزاناً يمتلئ؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "350 × 10,000 = 3,500,000 liters fills 10,000 tanks. Remaining: 3,627,750 − 3,500,000 = 127,750 liters.",
            "explanation_ar": "350 × 10,000 = 3,500,000 لتراً يملأ 10,000 خزان. المتبقي: 3,627,750 − 3,500,000 = 127,750 لتراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "127,750 remaining liters ÷ 350 per tank = 365 more tanks.",
            "explanation_ar": "127,750 لتراً متبقياً ÷ 350 لكل خزان = 365 خزاناً إضافياً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total tanks: 10,000 + 365 = 10,365. So 3,627,750 ÷ 350 = 10,365.",
            "explanation_ar": "إجمالي الخزانات: 10,000 + 365 = 10,365. إذن 3,627,750 ÷ 350 = 10,365."
          }
        ],
        "hint_en": "Use 350 × 10,000 = 3,500,000 as your anchor, then find how many extra tanks the remaining 127,750 liters fill.",
        "hint_ar": "استخدم 350 × 10,000 = 3,500,000 كنقطة ارتكاز، ثم اجد كم خزاناً إضافياً يملأ 127,750 لتراً المتبقية.",
        "result_en": "The answer is 10365",
        "result_ar": "الجواب هو 10365"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-medium-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-common-div-hard-001",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 8,437,500 ÷ 375 = ?",
    "question_ar": "احسب: 8,437,500 ÷ 375 = ؟",
    "answer": 22500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 375 = 1500 ÷ 4. Dividing by 375 equals multiplying by 4, then dividing by 1,500.",
            "explanation_ar": "لاحظ أن 375 = 1500 ÷ 4. القسمة على 375 تساوي الضرب في 4 ثم القسمة على 1,500."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply 8,437,500 × 4 = 33,750,000.",
            "explanation_ar": "اضرب 8,437,500 × 4 = 33,750,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide 33,750,000 ÷ 1,500 = 22,500.",
            "explanation_ar": "اقسم 33,750,000 ÷ 1,500 = 22,500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 22,500 × 375 = 8,437,500. ✓ The answer is 22,500.",
            "explanation_ar": "تحقق: 22,500 × 375 = 8,437,500. ✓ الجواب هو 22,500."
          }
        ],
        "hint_en": "Dividing by 375 equals multiplying by 4, then dividing by 1,500.",
        "hint_ar": "القسمة على 375 تساوي الضرب في 4 ثم القسمة على 1,500.",
        "result_en": "The answer is 22500",
        "result_ar": "الجواب هو 22500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 8,437,500 into 7,500,000 + 937,500. Both are divisible by 375.",
            "explanation_ar": "قسّم 8,437,500 إلى 7,500,000 + 937,500. كلاهما قابل للقسمة على 375."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "7,500,000 ÷ 375 = 20,000; 937,500 ÷ 375 = 2,500.",
            "explanation_ar": "7,500,000 ÷ 375 = 20,000؛ 937,500 ÷ 375 = 2,500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 20,000 + 2,500 = 22,500.",
            "explanation_ar": "اجمع: 20,000 + 2,500 = 22,500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 22,500 × 375 = 8,437,500. The answer is 22,500.",
            "explanation_ar": "تحقق: 22,500 × 375 = 8,437,500. الجواب هو 22,500."
          }
        ],
        "hint_en": "Split 8,437,500 into 7,500,000 + 937,500, both divisible by 375.",
        "hint_ar": "قسّم 8,437,500 إلى 7,500,000 + 937,500، كلاهما قابل للقسمة على 375.",
        "result_en": "The answer is 22500",
        "result_ar": "الجواب هو 22500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 8,437,500 square meters of land divided into plots of 375 square meters each. How many plots are there?",
            "explanation_ar": "تخيّل 8,437,500 متراً مربعاً من الأرض تُقسَّم إلى قطع مساحة كل قطعة 375 متراً مربعاً. كم قطعة توجد؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "375 × 20,000 = 7,500,000 sq m → 20,000 plots. Remaining: 8,437,500 − 7,500,000 = 937,500 sq m.",
            "explanation_ar": "375 × 20,000 = 7,500,000 م² → 20,000 قطعة. المتبقي: 8,437,500 − 7,500,000 = 937,500 م²."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "937,500 remaining sq m ÷ 375 per plot = 2,500 more plots.",
            "explanation_ar": "937,500 م² متبقية ÷ 375 لكل قطعة = 2,500 قطعة إضافية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total plots: 20,000 + 2,500 = 22,500. So 8,437,500 ÷ 375 = 22,500.",
            "explanation_ar": "إجمالي القطع: 20,000 + 2,500 = 22,500. إذن 8,437,500 ÷ 375 = 22,500."
          }
        ],
        "hint_en": "Use 375 × 20,000 = 7,500,000 as your anchor, then compute the remaining 937,500 ÷ 375.",
        "hint_ar": "استخدم 375 × 20,000 = 7,500,000 كنقطة ارتكاز، ثم احسب 937,500 ÷ 375 المتبقية.",
        "result_en": "The answer is 22500",
        "result_ar": "الجواب هو 22500"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-hard-001",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-common-div-hard-002",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 12,916,800 ÷ 432 = ?",
    "question_ar": "احسب: 12,916,800 ÷ 432 = ؟",
    "answer": 29900,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 432 = 400 + 32. Alternatively, simplify: GCF(12,916,800, 432). Both divisible by 16: 12,916,800 ÷ 16 = 807,300; 432 ÷ 16 = 27.",
            "explanation_ar": "لاحظ أن 432 = 400 + 32. بديلاً، بسّط: القاسم المشترك الأكبر لـ 12,916,800 و 432. كلاهما قابل للقسمة على 16: 12,916,800 ÷ 16 = 807,300؛ 432 ÷ 16 = 27."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Now compute 807,300 ÷ 27. Divide both by 3: 269,100 ÷ 9 = 29,900.",
            "explanation_ar": "الآن احسب 807,300 ÷ 27. اقسم كليهما على 3: 269,100 ÷ 9 = 29,900."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "We simplified the original division step by step: 12,916,800 ÷ 432 = 807,300 ÷ 27 = 269,100 ÷ 9 = 29,900.",
            "explanation_ar": "بسّطنا القسمة الأصلية خطوة بخطوة: 12,916,800 ÷ 432 = 807,300 ÷ 27 = 269,100 ÷ 9 = 29,900."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 29,900 × 432 = 12,916,800. ✓ The answer is 29,900.",
            "explanation_ar": "تحقق: 29,900 × 432 = 12,916,800. ✓ الجواب هو 29,900."
          }
        ],
        "hint_en": "Simplify by finding common factors: divide both 12,916,800 and 432 repeatedly by 16, then by 3.",
        "hint_ar": "بسّط بإيجاد العوامل المشتركة: اقسم كلاً من 12,916,800 و 432 على 16 ثم على 3.",
        "result_en": "The answer is 29900",
        "result_ar": "الجواب هو 29900"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 12,916,800 into 12,528,000 + 388,800. Both are divisible by 432.",
            "explanation_ar": "قسّم 12,916,800 إلى 12,528,000 + 388,800. كلاهما قابل للقسمة على 432."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "12,528,000 ÷ 432 = 29,000; 388,800 ÷ 432 = 900.",
            "explanation_ar": "12,528,000 ÷ 432 = 29,000؛ 388,800 ÷ 432 = 900."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 29,000 + 900 = 29,900.",
            "explanation_ar": "اجمع: 29,000 + 900 = 29,900."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 29,900 × 432 = 12,916,800. The answer is 29,900.",
            "explanation_ar": "تحقق: 29,900 × 432 = 12,916,800. الجواب هو 29,900."
          }
        ],
        "hint_en": "Split 12,916,800 into 12,528,000 + 388,800, where 12,528,000 = 432 × 29,000.",
        "hint_ar": "قسّم 12,916,800 إلى 12,528,000 + 388,800، حيث 12,528,000 = 432 × 29,000.",
        "result_en": "The answer is 29900",
        "result_ar": "الجواب هو 29900"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 12,916,800 passengers traveling in trains of 432 passengers each. How many trains are needed?",
            "explanation_ar": "تخيّل 12,916,800 مسافراً يسافرون في قطارات تتسع لـ 432 مسافراً لكل قطار. كم قطاراً مطلوب؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "432 × 29,000 = 12,528,000 passengers → 29,000 trains. Remaining: 12,916,800 − 12,528,000 = 388,800 passengers.",
            "explanation_ar": "432 × 29,000 = 12,528,000 مسافراً → 29,000 قطار. المتبقي: 12,916,800 − 12,528,000 = 388,800 مسافراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "388,800 remaining passengers ÷ 432 per train = 900 more trains.",
            "explanation_ar": "388,800 مسافراً متبقياً ÷ 432 لكل قطار = 900 قطار إضافي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total trains: 29,000 + 900 = 29,900. So 12,916,800 ÷ 432 = 29,900.",
            "explanation_ar": "إجمالي القطارات: 29,000 + 900 = 29,900. إذن 12,916,800 ÷ 432 = 29,900."
          }
        ],
        "hint_en": "Use 432 × 29,000 = 12,528,000 as your anchor, then deal with the 388,800 remainder.",
        "hint_ar": "استخدم 432 × 29,000 = 12,528,000 كنقطة ارتكاز، ثم تعامل مع الباقي 388,800.",
        "result_en": "The answer is 29900",
        "result_ar": "الجواب هو 29900"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-hard-002",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-common-div-hard-003",
    "grade": 8,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "Calculate: 16,588,800 ÷ 576 = ?",
    "question_ar": "احسب: 16,588,800 ÷ 576 = ؟",
    "answer": 28800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 576 = 576. Simplify: both 16,588,800 and 576 are divisible by 64. 16,588,800 ÷ 64 = 259,200; 576 ÷ 64 = 9.",
            "explanation_ar": "لاحظ أن 576 = 576. بسّط: كلا الرقمين 16,588,800 و 576 قابلان للقسمة على 64. 16,588,800 ÷ 64 = 259,200؛ 576 ÷ 64 = 9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Now compute 259,200 ÷ 9 = 28,800.",
            "explanation_ar": "الآن احسب 259,200 ÷ 9 = 28,800."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since dividing both by 64 preserves the quotient: 16,588,800 ÷ 576 = 259,200 ÷ 9 = 28,800.",
            "explanation_ar": "بما أن قسمة كليهما على 64 تحفظ الحصة: 16,588,800 ÷ 576 = 259,200 ÷ 9 = 28,800."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 28,800 × 576 = 16,588,800. ✓ The answer is 28,800.",
            "explanation_ar": "تحقق: 28,800 × 576 = 16,588,800. ✓ الجواب هو 28,800."
          }
        ],
        "hint_en": "Divide both 16,588,800 and 576 by 64 to reduce to 259,200 ÷ 9.",
        "hint_ar": "اقسم كلاً من 16,588,800 و 576 على 64 للتحويل إلى 259,200 ÷ 9.",
        "result_en": "The answer is 28800",
        "result_ar": "الجواب هو 28800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 16,588,800 into 14,400,000 + 2,188,800. Both are divisible by 576.",
            "explanation_ar": "قسّم 16,588,800 إلى 14,400,000 + 2,188,800. كلاهما قابل للقسمة على 576."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "14,400,000 ÷ 576 = 25,000; 2,188,800 ÷ 576 = 3,800.",
            "explanation_ar": "14,400,000 ÷ 576 = 25,000؛ 2,188,800 ÷ 576 = 3,800."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 25,000 + 3,800 = 28,800.",
            "explanation_ar": "اجمع: 25,000 + 3,800 = 28,800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 28,800 × 576 = 16,588,800. The answer is 28,800.",
            "explanation_ar": "تحقق: 28,800 × 576 = 16,588,800. الجواب هو 28,800."
          }
        ],
        "hint_en": "Split 16,588,800 into 14,400,000 + 2,188,800 and divide each by 576.",
        "hint_ar": "قسّم 16,588,800 إلى 14,400,000 + 2,188,800 واقسم كلاً منهما على 576.",
        "result_en": "The answer is 28800",
        "result_ar": "الجواب هو 28800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 16,588,800 tiles needed to cover a large floor, and each pallet holds exactly 576 tiles. How many pallets are needed?",
            "explanation_ar": "تخيّل 16,588,800 بلاطة لتغطية أرضية كبيرة، وكل منصة نقل تحمل بالضبط 576 بلاطة. كم منصة نقل مطلوبة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "576 × 25,000 = 14,400,000 tiles → 25,000 pallets. Remaining: 16,588,800 − 14,400,000 = 2,188,800 tiles.",
            "explanation_ar": "576 × 25,000 = 14,400,000 بلاطة → 25,000 منصة. المتبقي: 16,588,800 − 14,400,000 = 2,188,800 بلاطة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "2,188,800 remaining tiles ÷ 576 per pallet = 3,800 more pallets.",
            "explanation_ar": "2,188,800 بلاطة متبقية ÷ 576 لكل منصة = 3,800 منصة إضافية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total pallets: 25,000 + 3,800 = 28,800. So 16,588,800 ÷ 576 = 28,800.",
            "explanation_ar": "إجمالي المنصات: 25,000 + 3,800 = 28,800. إذن 16,588,800 ÷ 576 = 28,800."
          }
        ],
        "hint_en": "Use 576 × 25,000 = 14,400,000 as your anchor, then compute 2,188,800 ÷ 576 for the remainder.",
        "hint_ar": "استخدم 576 × 25,000 = 14,400,000 كنقطة ارتكاز، ثم احسب 2,188,800 ÷ 576 للباقي.",
        "result_en": "The answer is 28800",
        "result_ar": "الجواب هو 28800"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g7-common-div-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g8-specific-pow-easy-001",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Easy",
    "question_en": "What is √144?",
    "question_ar": "ما هو √144 ؟",
    "answer": 12,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: we need the square root of 144.",
            "explanation_ar": "حدّد ما المطلوب: نحتاج إلى الجذر التربيعي للعدد 144."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall multiplication facts: 10×10=100, 11×11=121, 12×12=144.",
            "explanation_ar": "تذكّر جدول الضرب: 10×10=100، 11×11=121، 12×12=144."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 12² = 144, then √144 = 12.",
            "explanation_ar": "بما أن 12² = 144، إذن √144 = 12."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The square root of 144 is 12.",
            "explanation_ar": "الجذر التربيعي للعدد 144 هو 12."
          }
        ],
        "hint_en": "Think: what number times itself equals 144?",
        "hint_ar": "فكّر: أي عدد مضروب في نفسه يساوي 144؟",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor 144 into prime factors: 144 = 4 × 36.",
            "explanation_ar": "حلّل 144 إلى عوامل: 144 = 4 × 36."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Take the square root of each factor: √4 = 2 and √36 = 6.",
            "explanation_ar": "خذ الجذر التربيعي لكل عامل: √4 = 2 و √36 = 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply the results: 2 × 6 = 12.",
            "explanation_ar": "اضرب النتائج: 2 × 6 = 12."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 12 × 12 = 144. So √144 = 12.",
            "explanation_ar": "تحقق: 12 × 12 = 144. إذن √144 = 12."
          }
        ],
        "hint_en": "Split 144 into two perfect squares like 4 × 36.",
        "hint_ar": "قسّم 144 إلى مربعين كاملين مثل 4 × 36.",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a square tile floor with 144 total tiles. How many tiles are on each side?",
            "explanation_ar": "تخيّل أرضية مربعة مفروشة بـ 144 بلاطة. كم بلاطة في كل ضلع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a square grid: try 12 columns × 12 rows = 144 tiles total.",
            "explanation_ar": "تخيّل شبكة مربعة: جرّب 12 عموداً × 12 صفاً = 144 بلاطة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each side of the 144-tile square has 12 tiles.",
            "explanation_ar": "كل ضلع من المربع المكوّن من 144 بلاطة يحتوي على 12 بلاطة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The side length is the square root, so √144 = 12.",
            "explanation_ar": "طول الضلع هو الجذر التربيعي، إذن √144 = 12."
          }
        ],
        "hint_en": "Picture a square with 144 tiles — how many tiles line one edge?",
        "hint_ar": "تخيّل مربعاً من 144 بلاطة — كم بلاطة في كل حافة؟",
        "result_en": "The answer is 12",
        "result_ar": "الجواب هو 12"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-pow-easy-002",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Easy",
    "question_en": "What is 2^5?",
    "question_ar": "ما هو 2^5 ؟",
    "answer": 32,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: 2 raised to the power of 5 means multiplying 2 by itself 5 times.",
            "explanation_ar": "حدّد ما المطلوب: 2 مرفوع للقوة 5 يعني ضرب 2 في نفسه 5 مرات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Use the doubling pattern: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32.",
            "explanation_ar": "استخدم نمط المضاعفة: 2¹=2، 2²=4، 2³=8، 2⁴=16، 2⁵=32."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Each step doubles the previous result. The 5th doubling gives 32.",
            "explanation_ar": "كل خطوة تضاعف النتيجة السابقة. المضاعفة الخامسة تعطي 32."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2^5 = 32.",
            "explanation_ar": "2^5 = 32."
          }
        ],
        "hint_en": "Double 2 five times: 2 → 4 → 8 → 16 → 32.",
        "hint_ar": "ضاعف 2 خمس مرات: 2 ← 4 ← 8 ← 16 ← 32.",
        "result_en": "The answer is 32",
        "result_ar": "الجواب هو 32"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split the exponent: 2^5 = 2^4 × 2^1.",
            "explanation_ar": "قسّم الأس: 2^5 = 2^4 × 2^1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Compute each part: 2^4 = 16 and 2^1 = 2.",
            "explanation_ar": "احسب كل جزء: 2^4 = 16 و 2^1 = 2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply: 16 × 2 = 32.",
            "explanation_ar": "اضرب: 16 × 2 = 32."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2×2×2×2×2 = 32. So 2^5 = 32.",
            "explanation_ar": "تحقق: 2×2×2×2×2 = 32. إذن 2^5 = 32."
          }
        ],
        "hint_en": "Use 2^5 = 2^4 × 2, and recall 2^4 = 16.",
        "hint_ar": "استخدم 2^5 = 2^4 × 2، وتذكر أن 2^4 = 16.",
        "result_en": "The answer is 32",
        "result_ar": "الجواب هو 32"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a chain letter: you send it to 2 people, each sends to 2 more, for 5 rounds.",
            "explanation_ar": "تخيّل رسالة متسلسلة: ترسلها لشخصين، وكل منهما يرسلها لشخصين آخرين، لمدة 5 جولات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 5 levels of a tree: level 1 has 2 branches, level 2 has 4, level 3 has 8, level 4 has 16, level 5 has 32.",
            "explanation_ar": "ارسم شجرة من 5 مستويات: المستوى 1 به فرعان، المستوى 2 به 4، المستوى 3 به 8، المستوى 4 به 16، المستوى 5 به 32."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "At the 5th level of the tree there are 32 branches.",
            "explanation_ar": "في المستوى الخامس من الشجرة يوجد 32 فرعاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The number of branches at level 5 equals 2^5 = 32.",
            "explanation_ar": "عدد الفروع في المستوى الخامس يساوي 2^5 = 32."
          }
        ],
        "hint_en": "Picture a tree doubling its branches each level for 5 levels.",
        "hint_ar": "تخيّل شجرة تضاعف فروعها في كل مستوى لـ 5 مستويات.",
        "result_en": "The answer is 32",
        "result_ar": "الجواب هو 32"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-pow-easy-003",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Easy",
    "question_en": "What is ∛27?",
    "question_ar": "ما هو ∛27 ؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: we need the cube root of 27.",
            "explanation_ar": "حدّد ما المطلوب: نحتاج إلى الجذر التكعيبي للعدد 27."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Recall small perfect cubes: 1³=1, 2³=8, 3³=27.",
            "explanation_ar": "تذكّر المكعبات الصغيرة: 1³=1، 2³=8، 3³=27."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 3³ = 27, then ∛27 = 3.",
            "explanation_ar": "بما أن 3³ = 27، إذن ∛27 = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The cube root of 27 is 3.",
            "explanation_ar": "الجذر التكعيبي للعدد 27 هو 3."
          }
        ],
        "hint_en": "Think: what number multiplied by itself three times equals 27?",
        "hint_ar": "فكّر: أي عدد مضروب في نفسه ثلاث مرات يساوي 27؟",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor 27 into prime factors: 27 = 3 × 3 × 3.",
            "explanation_ar": "حلّل 27 إلى عوامل أولية: 27 = 3 × 3 × 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Group the three equal prime factors: (3 × 3 × 3) = 3³.",
            "explanation_ar": "اجمع العوامل الأولية الثلاثة المتساوية: (3 × 3 × 3) = 3³."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The cube root extracts one factor from each group of three: ∛(3³) = 3.",
            "explanation_ar": "الجذر التكعيبي يستخرج عاملاً واحداً من كل مجموعة ثلاثية: ∛(3³) = 3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3 × 3 × 3 = 27. So ∛27 = 3.",
            "explanation_ar": "تحقق: 3 × 3 × 3 = 27. إذن ∛27 = 3."
          }
        ],
        "hint_en": "Write 27 as 3 × 3 × 3 to see the cube root clearly.",
        "hint_ar": "اكتب 27 على شكل 3 × 3 × 3 لترى الجذر التكعيبي بوضوح.",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a cube-shaped box packed with 27 small identical cubes. How many fit along one edge?",
            "explanation_ar": "تخيّل صندوقاً مكعب الشكل معبأ بـ 27 مكعباً صغيراً متطابقاً. كم مكعباً يتسع في كل حافة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a 3D grid: 3 layers, each layer is a 3×3 square of 9 small cubes. Total: 3×9=27.",
            "explanation_ar": "تخيّل شبكة ثلاثية الأبعاد: 3 طبقات، كل طبقة مربع 3×3 يحتوي 9 مكعبات صغيرة. المجموع: 3×9=27."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each edge of the large cube holds 3 small cubes.",
            "explanation_ar": "كل حافة من المكعب الكبير تحتوي على 3 مكعبات صغيرة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The edge length is the cube root, so ∛27 = 3.",
            "explanation_ar": "طول الحافة هو الجذر التكعيبي، إذن ∛27 = 3."
          }
        ],
        "hint_en": "Picture a cube made of 27 small blocks — how many blocks line one edge?",
        "hint_ar": "تخيّل مكعباً مكوّناً من 27 قطعة صغيرة — كم قطعة في كل حافة؟",
        "result_en": "The answer is 3",
        "result_ar": "الجواب هو 3"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-pow-medium-001",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Medium",
    "question_en": "What is √625?",
    "question_ar": "ما هو √625 ؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: we need the square root of 625.",
            "explanation_ar": "حدّد ما المطلوب: نحتاج إلى الجذر التربيعي للعدد 625."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Notice 625 ends in 5, so its square root also ends in 5. Try 25: 25×25 = 625.",
            "explanation_ar": "لاحظ أن 625 تنتهي بـ 5، إذن جذرها التربيعي ينتهي بـ 5. جرّب 25: 25×25 = 625."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 25² = 625, then √625 = 25.",
            "explanation_ar": "بما أن 25² = 625، إذن √625 = 25."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The square root of 625 is 25.",
            "explanation_ar": "الجذر التربيعي للعدد 625 هو 25."
          }
        ],
        "hint_en": "Numbers ending in 5 always have square roots ending in 5. Try 25 × 25.",
        "hint_ar": "الأعداد التي تنتهي بـ 5 جذورها التربيعية تنتهي بـ 5. جرّب 25 × 25.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor 625: 625 = 25 × 25.",
            "explanation_ar": "حلّل 625: 625 = 25 × 25."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Also note 625 = 5^4, so √625 = √(5^4) = 5².",
            "explanation_ar": "لاحظ أيضاً أن 625 = 5^4، إذن √625 = √(5^4) = 5²."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Compute 5² = 25.",
            "explanation_ar": "احسب 5² = 25."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 25 × 25 = 625. So √625 = 25.",
            "explanation_ar": "تحقق: 25 × 25 = 625. إذن √625 = 25."
          }
        ],
        "hint_en": "Write 625 as 5^4, then the square root is 5² = 25.",
        "hint_ar": "اكتب 625 على شكل 5^4، ثم الجذر التربيعي هو 5² = 25.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a square garden with 625 identical square plots. How many plots line each side?",
            "explanation_ar": "تخيّل حديقة مربعة تحتوي على 625 قطعة أرض متطابقة. كم قطعة في كل ضلع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a 25×25 grid: 25 columns and 25 rows, giving 25×25 = 625 plots.",
            "explanation_ar": "تخيّل شبكة 25×25: 25 عموداً و 25 صفاً، مما يعطي 25×25 = 625 قطعة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each side of the 625-plot garden has 25 plots.",
            "explanation_ar": "كل ضلع من الحديقة المكوّنة من 625 قطعة يحتوي على 25 قطعة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The side length gives the square root, so √625 = 25.",
            "explanation_ar": "طول الضلع يعطي الجذر التربيعي، إذن √625 = 25."
          }
        ],
        "hint_en": "Picture a 25-by-25 square grid totaling 625 cells.",
        "hint_ar": "تخيّل شبكة مربعة 25×25 تحتوي 625 خلية.",
        "result_en": "The answer is 25",
        "result_ar": "الجواب هو 25"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-pow-medium-002",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Medium",
    "question_en": "What is 4^3?",
    "question_ar": "ما هو 4^3 ؟",
    "answer": 64,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: 4 raised to the power of 3 means multiplying 4 by itself 3 times.",
            "explanation_ar": "حدّد ما المطلوب: 4 مرفوع للقوة 3 يعني ضرب 4 في نفسه 3 مرات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Note that 4 = 2², so 4³ = (2²)³ = 2⁶.",
            "explanation_ar": "لاحظ أن 4 = 2²، إذن 4³ = (2²)³ = 2⁶."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Compute 2⁶: 2⁶ = 64.",
            "explanation_ar": "احسب 2⁶: 2⁶ = 64."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "4^3 = 64.",
            "explanation_ar": "4^3 = 64."
          }
        ],
        "hint_en": "Since 4 = 2², you can compute 4³ = 2⁶ = 64.",
        "hint_ar": "بما أن 4 = 2²، يمكنك حساب 4³ = 2⁶ = 64.",
        "result_en": "The answer is 64",
        "result_ar": "الجواب هو 64"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 4³ into steps: first compute 4² = 16, then multiply by 4 once more.",
            "explanation_ar": "قسّم 4³ إلى خطوات: أولاً احسب 4² = 16، ثم اضرب في 4 مرة أخرى."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Compute 4² = 4 × 4 = 16.",
            "explanation_ar": "احسب 4² = 4 × 4 = 16."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply 16 × 4 = 64.",
            "explanation_ar": "اضرب 16 × 4 = 64."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4 × 4 × 4 = 64. So 4^3 = 64.",
            "explanation_ar": "تحقق: 4 × 4 × 4 = 64. إذن 4^3 = 64."
          }
        ],
        "hint_en": "Compute 4² = 16 first, then multiply by 4 to get 64.",
        "hint_ar": "احسب 4² = 16 أولاً، ثم اضرب في 4 للحصول على 64.",
        "result_en": "The answer is 64",
        "result_ar": "الجواب هو 64"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a cube-shaped storage unit built from small boxes, with 4 boxes along each edge.",
            "explanation_ar": "تخيّل وحدة تخزين مكعبة الشكل مبنية من صناديق صغيرة، بحيث يوجد 4 صناديق في كل حافة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 4 layers, each a 4×4 square of boxes: each layer has 16 boxes.",
            "explanation_ar": "تخيّل 4 طبقات، كل طبقة مربع 4×4 من الصناديق: كل طبقة تحتوي 16 صندوقاً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "4 layers × 16 boxes per layer = 64 boxes total.",
            "explanation_ar": "4 طبقات × 16 صندوقاً في كل طبقة = 64 صندوقاً إجمالاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The total number of boxes in the 4-wide cube is 4^3 = 64.",
            "explanation_ar": "إجمالي الصناديق في المكعب ذي الضلع 4 هو 4^3 = 64."
          }
        ],
        "hint_en": "Picture a cube 4 boxes wide, 4 deep, 4 tall — count all boxes.",
        "hint_ar": "تخيّل مكعباً عرضه 4 صناديق، وعمقه 4، وارتفاعه 4 — عُدّ جميع الصناديق.",
        "result_en": "The answer is 64",
        "result_ar": "الجواب هو 64"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-pow-medium-003",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Medium",
    "question_en": "What is ∛512?",
    "question_ar": "ما هو ∛512 ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: we need the cube root of 512.",
            "explanation_ar": "حدّد ما المطلوب: نحتاج إلى الجذر التكعيبي للعدد 512."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Note 512 ends in 2 and recall 8³ = 512: 8×8=64, 64×8=512.",
            "explanation_ar": "لاحظ أن 512 تنتهي بـ 2 وتذكّر أن 8³ = 512: 8×8=64، 64×8=512."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 8³ = 512, then ∛512 = 8.",
            "explanation_ar": "بما أن 8³ = 512، إذن ∛512 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The cube root of 512 is 8.",
            "explanation_ar": "الجذر التكعيبي للعدد 512 هو 8."
          }
        ],
        "hint_en": "Think: 8 × 8 × 8 = 64 × 8 = 512.",
        "hint_ar": "فكّر: 8 × 8 × 8 = 64 × 8 = 512.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write 512 as a power of 2: 512 = 2^9.",
            "explanation_ar": "اكتب 512 كقوة للعدد 2: 512 = 2^9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Apply the cube root: ∛(2^9) = 2^(9÷3) = 2^3.",
            "explanation_ar": "طبّق الجذر التكعيبي: ∛(2^9) = 2^(9÷3) = 2^3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Compute 2^3 = 8.",
            "explanation_ar": "احسب 2^3 = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8 × 8 × 8 = 512. So ∛512 = 8.",
            "explanation_ar": "تحقق: 8 × 8 × 8 = 512. إذن ∛512 = 8."
          }
        ],
        "hint_en": "Express 512 as 2^9, then the cube root is 2^3 = 8.",
        "hint_ar": "عبّر عن 512 بصيغة 2^9، ثم الجذر التكعيبي هو 2^3 = 8.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a cube warehouse packed with 512 identical small boxes. How many boxes fit along each edge?",
            "explanation_ar": "تخيّل مستودعاً مكعب الشكل معبأ بـ 512 صندوقاً صغيراً متطابقاً. كم صندوقاً يتناسب مع كل حافة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture 8 layers, each an 8×8 grid of boxes: each layer has 64 boxes, and 8 layers × 64 = 512.",
            "explanation_ar": "تخيّل 8 طبقات، كل طبقة شبكة 8×8 من الصناديق: كل طبقة تحتوي 64 صندوقاً، و 8 طبقات × 64 = 512."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each edge of the large cube holds 8 small boxes.",
            "explanation_ar": "كل حافة من المكعب الكبير تحتوي على 8 صناديق صغيرة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The edge length equals the cube root, so ∛512 = 8.",
            "explanation_ar": "طول الحافة يساوي الجذر التكعيبي، إذن ∛512 = 8."
          }
        ],
        "hint_en": "Picture a cube of 512 small boxes — 8 along every edge.",
        "hint_ar": "تخيّل مكعباً من 512 صندوقاً صغيراً — 8 في كل حافة.",
        "result_en": "The answer is 8",
        "result_ar": "الجواب هو 8"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-pow-hard-001",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Hard",
    "question_en": "What is 2^8?",
    "question_ar": "ما هو 2^8 ؟",
    "answer": 256,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: 2 raised to the power of 8 means doubling 2 eight times.",
            "explanation_ar": "حدّد ما المطلوب: 2 مرفوع للقوة 8 يعني مضاعفة 2 ثماني مرات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Use known powers: 2^4 = 16, and 2^8 = (2^4)² = 16².",
            "explanation_ar": "استخدم القوى المعروفة: 2^4 = 16، و 2^8 = (2^4)² = 16²."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Compute 16² = 16 × 16 = 256.",
            "explanation_ar": "احسب 16² = 16 × 16 = 256."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2^8 = 256.",
            "explanation_ar": "2^8 = 256."
          }
        ],
        "hint_en": "Use the shortcut: 2^8 = (2^4)² = 16² = 256.",
        "hint_ar": "استخدم الاختصار: 2^8 = (2^4)² = 16² = 256.",
        "result_en": "The answer is 256",
        "result_ar": "الجواب هو 256"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split the exponent: 2^8 = 2^4 × 2^4.",
            "explanation_ar": "قسّم الأس: 2^8 = 2^4 × 2^4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Compute each part: 2^4 = 16 and 2^4 = 16.",
            "explanation_ar": "احسب كل جزء: 2^4 = 16 و 2^4 = 16."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply: 16 × 16 = 256.",
            "explanation_ar": "اضرب: 16 × 16 = 256."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check the doubling chain: 2,4,8,16,32,64,128,256. The 8th value is 256. So 2^8 = 256.",
            "explanation_ar": "تحقق من سلسلة المضاعفة: 2،4،8،16،32،64،128،256. القيمة الثامنة هي 256. إذن 2^8 = 256."
          }
        ],
        "hint_en": "Split as 2^4 × 2^4 = 16 × 16 = 256.",
        "hint_ar": "قسّم إلى 2^4 × 2^4 = 16 × 16 = 256.",
        "result_en": "The answer is 256",
        "result_ar": "الجواب هو 256"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a computer game where the number of enemies doubles each of 8 levels, starting from 1.",
            "explanation_ar": "تخيّل لعبة فيديو حيث يتضاعف عدد الأعداء في كل مستوى من أصل 8 مستويات، بدءاً من 1."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Track the doubling: Level 1: 2, Level 2: 4, Level 3: 8, Level 4: 16, Level 5: 32, Level 6: 64, Level 7: 128, Level 8: 256.",
            "explanation_ar": "تابع المضاعفة: المستوى 1: 2، المستوى 2: 4، المستوى 3: 8، المستوى 4: 16، المستوى 5: 32، المستوى 6: 64، المستوى 7: 128، المستوى 8: 256."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "At level 8, there are 256 enemies.",
            "explanation_ar": "في المستوى 8، يوجد 256 عدواً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The number at level 8 equals 2^8 = 256.",
            "explanation_ar": "العدد في المستوى 8 يساوي 2^8 = 256."
          }
        ],
        "hint_en": "Track 8 doublings starting from 2: the last value is 256.",
        "hint_ar": "تابع 8 مضاعفات بدءاً من 2: القيمة الأخيرة هي 256.",
        "result_en": "The answer is 256",
        "result_ar": "الجواب هو 256"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-pow-hard-002",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Hard",
    "question_en": "What is √1296?",
    "question_ar": "ما هو √1296 ؟",
    "answer": 36,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: we need the square root of 1296.",
            "explanation_ar": "حدّد ما المطلوب: نحتاج إلى الجذر التربيعي للعدد 1296."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "1296 ends in 6, so its square root ends in 4 or 6. Estimate: 30²=900, 40²=1600, so the root is between 30 and 40. Try 36: 36²=1296.",
            "explanation_ar": "1296 تنتهي بـ 6، إذن جذرها التربيعي ينتهي بـ 4 أو 6. تقدير: 30²=900، 40²=1600، إذن الجذر بين 30 و40. جرّب 36: 36²=1296."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 36² = 1296, then √1296 = 36.",
            "explanation_ar": "بما أن 36² = 1296، إذن √1296 = 36."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The square root of 1296 is 36.",
            "explanation_ar": "الجذر التربيعي للعدد 1296 هو 36."
          }
        ],
        "hint_en": "Estimate between 30 and 40, then try 36: 36×36 = 1296.",
        "hint_ar": "قدّر بين 30 و40، ثم جرّب 36: 36×36 = 1296.",
        "result_en": "The answer is 36",
        "result_ar": "الجواب هو 36"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor 1296: 1296 = 4 × 324.",
            "explanation_ar": "حلّل 1296: 1296 = 4 × 324."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Take square roots of each factor: √4 = 2 and √324 = 18.",
            "explanation_ar": "خذ الجذر التربيعي لكل عامل: √4 = 2 و √324 = 18."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply: 2 × 18 = 36.",
            "explanation_ar": "اضرب: 2 × 18 = 36."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 36 × 36 = 1296. So √1296 = 36.",
            "explanation_ar": "تحقق: 36 × 36 = 1296. إذن √1296 = 36."
          }
        ],
        "hint_en": "Split 1296 = 4 × 324, then √4 × √324 = 2 × 18 = 36.",
        "hint_ar": "قسّم 1296 = 4 × 324، ثم √4 × √324 = 2 × 18 = 36.",
        "result_en": "The answer is 36",
        "result_ar": "الجواب هو 36"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a massive square courtyard tiled with 1296 identical square tiles. How many tiles line each side?",
            "explanation_ar": "تخيّل فناءً مربعاً ضخماً مبلطاً بـ 1296 بلاطة مربعة متطابقة. كم بلاطة في كل ضلع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Estimate the side: 30×30=900 (too few), 40×40=1600 (too many), 36×36=1296 (exact).",
            "explanation_ar": "قدّر طول الضلع: 30×30=900 (أقل من اللازم)، 40×40=1600 (أكثر من اللازم)، 36×36=1296 (مضبوط)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "A 36×36 grid of tiles gives exactly 1296 tiles.",
            "explanation_ar": "شبكة 36×36 من البلاطات تعطي بالضبط 1296 بلاطة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Each side has 36 tiles, so √1296 = 36.",
            "explanation_ar": "كل ضلع يحتوي 36 بلاطة، إذن √1296 = 36."
          }
        ],
        "hint_en": "Narrow down: between 30 and 40, a 36×36 square gives exactly 1296.",
        "hint_ar": "ضيّق النطاق: بين 30 و40، مربع 36×36 يعطي بالضبط 1296.",
        "result_en": "The answer is 36",
        "result_ar": "الجواب هو 36"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-pow-hard-003",
    "grade": 8,
    "bank": "specific",
    "category": "Powers & Roots",
    "level": "Hard",
    "question_en": "What is 3^5?",
    "question_ar": "ما هو 3^5 ؟",
    "answer": 243,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Identify what is being asked: 3 raised to the power of 5 means multiplying 3 by itself 5 times.",
            "explanation_ar": "حدّد ما المطلوب: 3 مرفوع للقوة 5 يعني ضرب 3 في نفسه 5 مرات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Use known powers of 3: 3²=9, 3³=27, 3⁴=81, 3⁵=243.",
            "explanation_ar": "استخدم قوى 3 المعروفة: 3²=9، 3³=27، 3⁴=81، 3⁵=243."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply the 4th power by 3: 81 × 3 = 243.",
            "explanation_ar": "اضرب القوة الرابعة في 3: 81 × 3 = 243."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3^5 = 243.",
            "explanation_ar": "3^5 = 243."
          }
        ],
        "hint_en": "Build up: 3⁴ = 81, then 81 × 3 = 243.",
        "hint_ar": "ابنِ تدريجياً: 3⁴ = 81، ثم 81 × 3 = 243.",
        "result_en": "The answer is 243",
        "result_ar": "الجواب هو 243"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split the exponent: 3^5 = 3^3 × 3^2.",
            "explanation_ar": "قسّم الأس: 3^5 = 3^3 × 3^2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Compute each part: 3^3 = 27 and 3^2 = 9.",
            "explanation_ar": "احسب كل جزء: 3^3 = 27 و 3^2 = 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Multiply: 27 × 9 = 243.",
            "explanation_ar": "اضرب: 27 × 9 = 243."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3×3×3×3×3 = 9×9×3 = 81×3 = 243. So 3^5 = 243.",
            "explanation_ar": "تحقق: 3×3×3×3×3 = 9×9×3 = 81×3 = 243. إذن 3^5 = 243."
          }
        ],
        "hint_en": "Use 3^5 = 3^3 × 3^2 = 27 × 9 = 243.",
        "hint_ar": "استخدم 3^5 = 3^3 × 3^2 = 27 × 9 = 243.",
        "result_en": "The answer is 243",
        "result_ar": "الجواب هو 243"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a 5-round tripling tournament: you start with 1 team, and after each round the number of teams triples.",
            "explanation_ar": "تخيّل بطولة من 5 جولات حيث يتضاعف العدد ثلاث مرات: تبدأ بفريق واحد، وبعد كل جولة يتضاعف العدد ثلاث مرات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Track the tripling: Round 1: 3, Round 2: 9, Round 3: 27, Round 4: 81, Round 5: 243.",
            "explanation_ar": "تابع التضاعف الثلاثي: الجولة 1: 3، الجولة 2: 9، الجولة 3: 27، الجولة 4: 81، الجولة 5: 243."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After 5 rounds of tripling, there are 243 teams.",
            "explanation_ar": "بعد 5 جولات من التضاعف الثلاثي، يوجد 243 فريقاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The total after 5 rounds of tripling equals 3^5 = 243.",
            "explanation_ar": "المجموع بعد 5 جولات من التضاعف الثلاثي يساوي 3^5 = 243."
          }
        ],
        "hint_en": "Track 5 rounds of tripling: 3 → 9 → 27 → 81 → 243.",
        "hint_ar": "تابع 5 جولات من التضاعف الثلاثي: 3 ← 9 ← 27 ← 81 ← 243.",
        "result_en": "The answer is 243",
        "result_ar": "الجواب هو 243"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "powers_roots"
    }
  },
  {
    "id": "g8-specific-sci-easy-001",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Easy",
    "question_en": "Convert to standard form: 3.5 × 10^3 = ?",
    "question_ar": "حوّل إلى الصيغة العادية: 3.5 × 10^3 = ؟",
    "answer": 3500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 3.5 × 10^3. The exponent 3 tells us to move the decimal point 3 places to the right.",
            "explanation_ar": "لدينا 3.5 × 10^3. الأس 3 يخبرنا بتحريك العلامة العشرية 3 خانات لليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10^3 = 1,000.",
            "explanation_ar": "10^3 = 1,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "3.5 × 1,000 = 3,500. Move the decimal in 3.5 three places right: 3.5 → 35. → 350. → 3500.",
            "explanation_ar": "3.5 × 1,000 = 3,500. حرّك العلامة في 3.5 ثلاث خانات لليمين: 3.5 → 35. → 350. → 3500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3.5 × 10^3 = 3,500.",
            "explanation_ar": "3.5 × 10^3 = 3,500."
          }
        ],
        "hint_en": "Move the decimal point 3 places to the right.",
        "hint_ar": "حرّك العلامة العشرية 3 خانات لليمين.",
        "result_en": "The answer is 3500",
        "result_ar": "الجواب هو 3500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 3.5 into 3 + 0.5, and note 10^3 = 1,000.",
            "explanation_ar": "قسّم 3.5 إلى 3 + 0.5، ولاحظ أن 10^3 = 1,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3 × 1,000 = 3,000. Then 0.5 × 1,000 = 500.",
            "explanation_ar": "3 × 1,000 = 3,000. ثم 0.5 × 1,000 = 500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3,000 + 500 = 3,500.",
            "explanation_ar": "3,000 + 500 = 3,500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "3.5 × 10^3 = 3,000 + 500 = 3,500. Correct.",
            "explanation_ar": "3.5 × 10^3 = 3,000 + 500 = 3,500. صحيح."
          }
        ],
        "hint_en": "Split 3.5 into 3 and 0.5, multiply each by 1,000, then add.",
        "hint_ar": "قسّم 3.5 إلى 3 و0.5، اضرب كلاً منهما في 1,000، ثم اجمع.",
        "result_en": "The answer is 3500",
        "result_ar": "الجواب هو 3500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a number line with a decimal point sliding right. Our number is 3.5 and we slide it 3 steps right.",
            "explanation_ar": "تخيّل خطاً عددياً تنزلق عليه العلامة العشرية لليمين. رقمنا هو 3.5 وننزلقها 3 خطوات لليمين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Write 3.5 as 3 _ . _ 5. Each right shift fills a zero: step 1 → 35, step 2 → 350, step 3 → 3500.",
            "explanation_ar": "اكتب 3.5 كـ 3.5. كل إزاحة لليمين تملأ صفراً: خطوة 1 → 35، خطوة 2 → 350، خطوة 3 → 3500."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After 3 right shifts, the decimal is at the end: 3,500.",
            "explanation_ar": "بعد 3 إزاحات لليمين، العلامة في النهاية: 3,500."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "3.5 × 10^3 = 3,500. The exponent 3 equals the number of right shifts.",
            "explanation_ar": "3.5 × 10^3 = 3,500. الأس 3 يساوي عدد الإزاحات لليمين."
          }
        ],
        "hint_en": "Visualize the decimal point sliding 3 places right in 3.5.",
        "hint_ar": "تخيّل العلامة العشرية تنزلق 3 خانات لليمين في 3.5.",
        "result_en": "The answer is 3500",
        "result_ar": "الجواب هو 3500"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-sci-easy-002",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Easy",
    "question_en": "What is the exponent? 600 = 6 × 10^? → ?",
    "question_ar": "ما هو الأس؟ 600 = 6 × 10^? → ؟",
    "answer": 2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "600 = 6 × 10^?. We need to find how many times 10 is multiplied to turn 6 into 600.",
            "explanation_ar": "600 = 6 × 10^?. نحتاج إيجاد كم مرة يُضرب 10 لتحويل 6 إلى 600."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "600 ÷ 6 = 100. So 10^? = 100.",
            "explanation_ar": "600 ÷ 6 = 100. إذن 10^? = 100."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "10^2 = 100. Count the zeros in 600: there are 2 zeros after 6.",
            "explanation_ar": "10^2 = 100. عدّ الأصفار في 600: هناك 2 أصفار بعد 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The exponent is 2. 600 = 6 × 10^2.",
            "explanation_ar": "الأس هو 2. 600 = 6 × 10^2."
          }
        ],
        "hint_en": "Count the zeros after 6 in 600.",
        "hint_ar": "عدّ الأصفار بعد 6 في 600.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "600 = 6 × 100. Recognize 100 as a power of 10.",
            "explanation_ar": "600 = 6 × 100. اعرف أن 100 هي قوة من 10."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "100 = 10 × 10 = 10^2.",
            "explanation_ar": "100 = 10 × 10 = 10^2."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "600 = 6 × 10^2. The exponent is 2.",
            "explanation_ar": "600 = 6 × 10^2. الأس هو 2."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 6 × 10^2 = 6 × 100 = 600. Correct.",
            "explanation_ar": "تحقق: 6 × 10^2 = 6 × 100 = 600. صحيح."
          }
        ],
        "hint_en": "Write 600 as 6 × 100, then express 100 as a power of 10.",
        "hint_ar": "اكتب 600 كـ 6 × 100، ثم عبّر عن 100 كقوة من 10.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 600 as 6 followed by zeros. Count the zeros to find the exponent.",
            "explanation_ar": "تخيّل 600 كـ 6 متبوعاً بأصفار. عدّ الأصفار لإيجاد الأس."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Write 600 → 6 _ 0 _ 0. There are 2 zeros.",
            "explanation_ar": "اكتب 600 → 6 _ 0 _ 0. هناك 2 أصفار."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "2 zeros means we moved the decimal 2 places, so the exponent is 2.",
            "explanation_ar": "2 أصفار تعني أننا حركنا العلامة 2 خانة، إذن الأس هو 2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "600 = 6 × 10^2. The answer is 2.",
            "explanation_ar": "600 = 6 × 10^2. الجواب هو 2."
          }
        ],
        "hint_en": "Count the zeros in 600 — that count is your exponent.",
        "hint_ar": "عدّ الأصفار في 600 — ذلك العدد هو الأس.",
        "result_en": "The answer is 2",
        "result_ar": "الجواب هو 2"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-sci-easy-003",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Easy",
    "question_en": "Convert to standard form: 2.4 × 10^2 = ?",
    "question_ar": "حوّل إلى الصيغة العادية: 2.4 × 10^2 = ؟",
    "answer": 240,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 2.4 × 10^2. The exponent 2 tells us to move the decimal 2 places to the right.",
            "explanation_ar": "لدينا 2.4 × 10^2. الأس 2 يخبرنا بتحريك العلامة العشرية 2 خانات لليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10^2 = 100.",
            "explanation_ar": "10^2 = 100."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Move the decimal in 2.4 two places right: 2.4 → 24. → 240.",
            "explanation_ar": "حرّك العلامة في 2.4 خانتين لليمين: 2.4 → 24. → 240."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2.4 × 10^2 = 240.",
            "explanation_ar": "2.4 × 10^2 = 240."
          }
        ],
        "hint_en": "Move the decimal point 2 places to the right in 2.4.",
        "hint_ar": "حرّك العلامة العشرية 2 خانات لليمين في 2.4.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 2.4 into 2 + 0.4, and note 10^2 = 100.",
            "explanation_ar": "قسّم 2.4 إلى 2 + 0.4، ولاحظ أن 10^2 = 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2 × 100 = 200. Then 0.4 × 100 = 40.",
            "explanation_ar": "2 × 100 = 200. ثم 0.4 × 100 = 40."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "200 + 40 = 240.",
            "explanation_ar": "200 + 40 = 240."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "2.4 × 10^2 = 200 + 40 = 240. Correct.",
            "explanation_ar": "2.4 × 10^2 = 200 + 40 = 240. صحيح."
          }
        ],
        "hint_en": "Split 2.4 into 2 and 0.4, multiply each by 100, then add.",
        "hint_ar": "قسّم 2.4 إلى 2 و0.4، اضرب كلاً منهما في 100، ثم اجمع.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 2.4 on a number line. Each right shift of the decimal multiplies the value by 10.",
            "explanation_ar": "تخيّل 2.4 على خط الأعداد. كل إزاحة لليمين تضاعف القيمة في 10."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shift 1: 2.4 → 24. Shift 2: 24 → 240.",
            "explanation_ar": "إزاحة 1: 2.4 → 24. إزاحة 2: 24 → 240."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After 2 right shifts, 2.4 becomes 240.",
            "explanation_ar": "بعد إزاحتين لليمين، 2.4 تصبح 240."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "2.4 × 10^2 = 240. The exponent 2 matches the number of shifts.",
            "explanation_ar": "2.4 × 10^2 = 240. الأس 2 يطابق عدد الإزاحات."
          }
        ],
        "hint_en": "Slide the decimal in 2.4 two steps right to get 240.",
        "hint_ar": "حرّك العلامة في 2.4 خطوتين لليمين للحصول على 240.",
        "result_en": "The answer is 240",
        "result_ar": "الجواب هو 240"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-sci-medium-001",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Medium",
    "question_en": "Convert to standard form: 4.2 × 10^4 = ?",
    "question_ar": "حوّل إلى الصيغة العادية: 4.2 × 10^4 = ؟",
    "answer": 42000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 4.2 × 10^4. The exponent 4 tells us to move the decimal 4 places to the right.",
            "explanation_ar": "لدينا 4.2 × 10^4. الأس 4 يخبرنا بتحريك العلامة العشرية 4 خانات لليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10^4 = 10,000.",
            "explanation_ar": "10^4 = 10,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Move the decimal in 4.2 four places right: 4.2 → 42 → 420 → 4200 → 42000.",
            "explanation_ar": "حرّك العلامة في 4.2 أربع خانات لليمين: 4.2 → 42 → 420 → 4200 → 42000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "4.2 × 10^4 = 42,000.",
            "explanation_ar": "4.2 × 10^4 = 42,000."
          }
        ],
        "hint_en": "Move the decimal point 4 places to the right in 4.2.",
        "hint_ar": "حرّك العلامة العشرية 4 خانات لليمين في 4.2.",
        "result_en": "The answer is 42000",
        "result_ar": "الجواب هو 42000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 4.2 into 4 + 0.2, and note 10^4 = 10,000.",
            "explanation_ar": "قسّم 4.2 إلى 4 + 0.2، ولاحظ أن 10^4 = 10,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4 × 10,000 = 40,000. Then 0.2 × 10,000 = 2,000.",
            "explanation_ar": "4 × 10,000 = 40,000. ثم 0.2 × 10,000 = 2,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "40,000 + 2,000 = 42,000.",
            "explanation_ar": "40,000 + 2,000 = 42,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "4.2 × 10^4 = 40,000 + 2,000 = 42,000. Correct.",
            "explanation_ar": "4.2 × 10^4 = 40,000 + 2,000 = 42,000. صحيح."
          }
        ],
        "hint_en": "Split 4.2 into 4 and 0.2, multiply each by 10,000, then add.",
        "hint_ar": "قسّم 4.2 إلى 4 و0.2، اضرب كلاً منهما في 10,000، ثم اجمع.",
        "result_en": "The answer is 42000",
        "result_ar": "الجواب هو 42000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 42,000 concert tickets. If each row holds 10,000 people, we have 4.2 rows — that's our 4.2 × 10^4.",
            "explanation_ar": "تخيّل 42,000 تذكرة حفلة. إذا كان كل صف يتسع لـ 10,000 شخص، لدينا 4.2 صف — هذا هو 4.2 × 10^4."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "4 full rows of 10,000 = 40,000. Plus 0.2 of a row = 2,000 more.",
            "explanation_ar": "4 صفوف كاملة من 10,000 = 40,000. بالإضافة إلى 0.2 من صف = 2,000 أخرى."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "40,000 + 2,000 = 42,000 total tickets.",
            "explanation_ar": "40,000 + 2,000 = 42,000 تذكرة إجمالاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "4.2 × 10^4 = 42,000. The exponent 4 represents the size of each group.",
            "explanation_ar": "4.2 × 10^4 = 42,000. الأس 4 يمثل حجم كل مجموعة."
          }
        ],
        "hint_en": "Think of 4 full groups of 10,000 plus 0.2 of a group.",
        "hint_ar": "فكّر في 4 مجموعات كاملة من 10,000 بالإضافة إلى 0.2 من مجموعة.",
        "result_en": "The answer is 42000",
        "result_ar": "الجواب هو 42000"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-sci-medium-002",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Medium",
    "question_en": "What is the exponent? 72,000 = 7.2 × 10^? → ?",
    "question_ar": "ما هو الأس؟ 72,000 = 7.2 × 10^? → ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "72,000 = 7.2 × 10^?. We need to find how many places we move the decimal from 7.2 to get 72,000.",
            "explanation_ar": "72,000 = 7.2 × 10^?. نحتاج إيجاد كم خانة نحرّك العلامة من 7.2 للحصول على 72,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "72,000 ÷ 7.2 = 10,000. So 10^? = 10,000.",
            "explanation_ar": "72,000 ÷ 7.2 = 10,000. إذن 10^? = 10,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "10,000 = 10^4. Alternatively, 72,000 has 4 digits after the leading digit 7.",
            "explanation_ar": "10,000 = 10^4. أو بطريقة أخرى، 72,000 لها 4 أرقام بعد الرقم الأول 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The exponent is 4. 72,000 = 7.2 × 10^4.",
            "explanation_ar": "الأس هو 4. 72,000 = 7.2 × 10^4."
          }
        ],
        "hint_en": "Count how many places the decimal moves from 7.2 to 72,000.",
        "hint_ar": "عدّ كم خانة تتحرك العلامة من 7.2 إلى 72,000.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write 72,000 = 7.2 × (72,000 ÷ 7.2). Compute the factor: 72,000 ÷ 7.2 = 10,000.",
            "explanation_ar": "اكتب 72,000 = 7.2 × (72,000 ÷ 7.2). احسب المعامل: 72,000 ÷ 7.2 = 10,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Express 10,000 as a power of 10: 10,000 = 10^4.",
            "explanation_ar": "عبّر عن 10,000 كقوة من 10: 10,000 = 10^4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "72,000 = 7.2 × 10^4. The exponent is 4.",
            "explanation_ar": "72,000 = 7.2 × 10^4. الأس هو 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 7.2 × 10^4 = 7.2 × 10,000 = 72,000. Correct.",
            "explanation_ar": "تحقق: 7.2 × 10^4 = 7.2 × 10,000 = 72,000. صحيح."
          }
        ],
        "hint_en": "Divide 72,000 by 7.2 to find the power of 10, then identify the exponent.",
        "hint_ar": "اقسم 72,000 على 7.2 لإيجاد قوة 10، ثم حدّد الأس.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 72,000 as a number on a scoreboard. To write it in scientific notation, move the decimal left until only one non-zero digit is before it.",
            "explanation_ar": "تخيّل 72,000 كرقم على لوحة نتائج. لكتابته بالتدوين العلمي، حرّك العلامة لليسار حتى يبقى رقم واحد غير صفري أمامها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "72,000 → 7,200.0 (1 left) → 720.00 (2 left) → 72.000 (3 left) → 7.2000 (4 left). We moved 4 places.",
            "explanation_ar": "72,000 → 7,200.0 (1 لليسار) → 720.00 (2 لليسار) → 72.000 (3 لليسار) → 7.2000 (4 لليسار). حركنا 4 خانات."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "4 left shifts means exponent = 4. The coefficient is 7.2.",
            "explanation_ar": "4 إزاحات لليسار تعني الأس = 4. المعامل هو 7.2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "72,000 = 7.2 × 10^4. The exponent is 4.",
            "explanation_ar": "72,000 = 7.2 × 10^4. الأس هو 4."
          }
        ],
        "hint_en": "Count how many steps left you move the decimal to turn 72,000 into 7.2.",
        "hint_ar": "عدّ كم خطوة لليسار تتحرك العلامة لتحويل 72,000 إلى 7.2.",
        "result_en": "The answer is 4",
        "result_ar": "الجواب هو 4"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-sci-medium-003",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Medium",
    "question_en": "Convert to standard form: 6.3 × 10^5 = ?",
    "question_ar": "حوّل إلى الصيغة العادية: 6.3 × 10^5 = ؟",
    "answer": 630000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 6.3 × 10^5. The exponent 5 tells us to move the decimal 5 places to the right.",
            "explanation_ar": "لدينا 6.3 × 10^5. الأس 5 يخبرنا بتحريك العلامة العشرية 5 خانات لليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10^5 = 100,000.",
            "explanation_ar": "10^5 = 100,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Move decimal in 6.3 five places right: 6.3 → 63 → 630 → 6300 → 63000 → 630000.",
            "explanation_ar": "حرّك العلامة في 6.3 خمس خانات لليمين: 6.3 → 63 → 630 → 6300 → 63000 → 630000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "6.3 × 10^5 = 630,000.",
            "explanation_ar": "6.3 × 10^5 = 630,000."
          }
        ],
        "hint_en": "Move the decimal point 5 places to the right in 6.3.",
        "hint_ar": "حرّك العلامة العشرية 5 خانات لليمين في 6.3.",
        "result_en": "The answer is 630000",
        "result_ar": "الجواب هو 630000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 6.3 into 6 + 0.3, and note 10^5 = 100,000.",
            "explanation_ar": "قسّم 6.3 إلى 6 + 0.3، ولاحظ أن 10^5 = 100,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "6 × 100,000 = 600,000. Then 0.3 × 100,000 = 30,000.",
            "explanation_ar": "6 × 100,000 = 600,000. ثم 0.3 × 100,000 = 30,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "600,000 + 30,000 = 630,000.",
            "explanation_ar": "600,000 + 30,000 = 630,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "6.3 × 10^5 = 600,000 + 30,000 = 630,000. Correct.",
            "explanation_ar": "6.3 × 10^5 = 600,000 + 30,000 = 630,000. صحيح."
          }
        ],
        "hint_en": "Split 6.3 into 6 and 0.3, multiply each by 100,000, then add.",
        "hint_ar": "قسّم 6.3 إلى 6 و0.3، اضرب كلاً منهما في 100,000، ثم اجمع.",
        "result_en": "The answer is 630000",
        "result_ar": "الجواب هو 630000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a city with 630,000 residents. In scientific notation that is 6.3 × 10^5 people.",
            "explanation_ar": "تخيّل مدينة بها 630,000 ساكن. بالتدوين العلمي هذا هو 6.3 × 10^5 شخص."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "6 full blocks of 100,000 = 600,000 residents. Plus 0.3 of a block = 30,000 more.",
            "explanation_ar": "6 كتل كاملة من 100,000 = 600,000 ساكن. بالإضافة إلى 0.3 من كتلة = 30,000 آخرين."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "600,000 + 30,000 = 630,000 residents total.",
            "explanation_ar": "600,000 + 30,000 = 630,000 ساكن إجمالاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "6.3 × 10^5 = 630,000. The exponent 5 is the size scale of each group.",
            "explanation_ar": "6.3 × 10^5 = 630,000. الأس 5 هو مقياس حجم كل مجموعة."
          }
        ],
        "hint_en": "Think of 6 full groups of 100,000 plus 30,000 more.",
        "hint_ar": "فكّر في 6 مجموعات كاملة من 100,000 بالإضافة إلى 30,000 أخرى.",
        "result_en": "The answer is 630000",
        "result_ar": "الجواب هو 630000"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-sci-hard-001",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Hard",
    "question_en": "What is the exponent? 980,000 = 9.8 × 10^? → ?",
    "question_ar": "ما هو الأس؟ 980,000 = 9.8 × 10^? → ؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "980,000 = 9.8 × 10^?. We must find how many places the decimal moves from 9.8 to 980,000.",
            "explanation_ar": "980,000 = 9.8 × 10^?. يجب إيجاد كم خانة تتحرك العلامة من 9.8 إلى 980,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "980,000 ÷ 9.8 = 100,000. So 10^? = 100,000.",
            "explanation_ar": "980,000 ÷ 9.8 = 100,000. إذن 10^? = 100,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "100,000 = 10^5. Count digits in 980,000 after the leading 9: there are 5 more digits.",
            "explanation_ar": "100,000 = 10^5. عدّ الأرقام في 980,000 بعد الرقم الأول 9: هناك 5 أرقام أخرى."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The exponent is 5. 980,000 = 9.8 × 10^5.",
            "explanation_ar": "الأس هو 5. 980,000 = 9.8 × 10^5."
          }
        ],
        "hint_en": "Count how many places the decimal moves from 9.8 to reach 980,000.",
        "hint_ar": "عدّ كم خانة تتحرك العلامة من 9.8 للوصول إلى 980,000.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write 980,000 = 9.8 × (980,000 ÷ 9.8). Compute: 980,000 ÷ 9.8 = 100,000.",
            "explanation_ar": "اكتب 980,000 = 9.8 × (980,000 ÷ 9.8). احسب: 980,000 ÷ 9.8 = 100,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Express 100,000 as a power of 10: 100,000 = 10^5.",
            "explanation_ar": "عبّر عن 100,000 كقوة من 10: 100,000 = 10^5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "980,000 = 9.8 × 10^5. The exponent is 5.",
            "explanation_ar": "980,000 = 9.8 × 10^5. الأس هو 5."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 9.8 × 10^5 = 9.8 × 100,000 = 980,000. Correct.",
            "explanation_ar": "تحقق: 9.8 × 10^5 = 9.8 × 100,000 = 980,000. صحيح."
          }
        ],
        "hint_en": "Divide 980,000 by 9.8 to get the power of 10, then name the exponent.",
        "hint_ar": "اقسم 980,000 على 9.8 للحصول على قوة 10، ثم اذكر الأس.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine counting 980,000 steps. In scientific notation we express this as 9.8 × 10^5. Find the exponent.",
            "explanation_ar": "تخيّل عدّ 980,000 خطوة. بالتدوين العلمي نعبّر عن هذا كـ 9.8 × 10^5. أوجد الأس."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Move decimal left: 980,000 → 98,000.0 (1) → 9,800.00 (2) → 980.000 (3) → 98.0000 (4) → 9.80000 (5). Five left shifts.",
            "explanation_ar": "حرّك العلامة لليسار: 980,000 → 98,000.0 (1) → 9,800.00 (2) → 980.000 (3) → 98.0000 (4) → 9.80000 (5). خمس إزاحات لليسار."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "5 left shifts from 980,000 gives 9.8, so the exponent is 5.",
            "explanation_ar": "5 إزاحات لليسار من 980,000 تعطي 9.8، إذن الأس هو 5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "980,000 = 9.8 × 10^5. The exponent is 5.",
            "explanation_ar": "980,000 = 9.8 × 10^5. الأس هو 5."
          }
        ],
        "hint_en": "Slide the decimal left from 980,000 until you reach 9.8 — count the steps.",
        "hint_ar": "حرّك العلامة لليسار من 980,000 حتى تصل إلى 9.8 — عدّ الخطوات.",
        "result_en": "The answer is 5",
        "result_ar": "الجواب هو 5"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-sci-hard-002",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Hard",
    "question_en": "Convert to standard form: 1.05 × 10^6 = ?",
    "question_ar": "حوّل إلى الصيغة العادية: 1.05 × 10^6 = ؟",
    "answer": 1050000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 1.05 × 10^6. The exponent 6 tells us to move the decimal 6 places to the right.",
            "explanation_ar": "لدينا 1.05 × 10^6. الأس 6 يخبرنا بتحريك العلامة العشرية 6 خانات لليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "10^6 = 1,000,000.",
            "explanation_ar": "10^6 = 1,000,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Move decimal in 1.05 six places right: 1.05 → 10.5 → 105 → 1050 → 10500 → 105000 → 1050000.",
            "explanation_ar": "حرّك العلامة في 1.05 ست خانات لليمين: 1.05 → 10.5 → 105 → 1050 → 10500 → 105000 → 1050000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "1.05 × 10^6 = 1,050,000.",
            "explanation_ar": "1.05 × 10^6 = 1,050,000."
          }
        ],
        "hint_en": "Move the decimal 6 places right in 1.05, padding with zeros as needed.",
        "hint_ar": "حرّك العلامة 6 خانات لليمين في 1.05، مع إضافة أصفار حسب الحاجة.",
        "result_en": "The answer is 1050000",
        "result_ar": "الجواب هو 1050000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break 1.05 into 1 + 0.05, and note 10^6 = 1,000,000.",
            "explanation_ar": "قسّم 1.05 إلى 1 + 0.05، ولاحظ أن 10^6 = 1,000,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 × 1,000,000 = 1,000,000. Then 0.05 × 1,000,000 = 50,000.",
            "explanation_ar": "1 × 1,000,000 = 1,000,000. ثم 0.05 × 1,000,000 = 50,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "1,000,000 + 50,000 = 1,050,000.",
            "explanation_ar": "1,000,000 + 50,000 = 1,050,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "1.05 × 10^6 = 1,000,000 + 50,000 = 1,050,000. Correct.",
            "explanation_ar": "1.05 × 10^6 = 1,000,000 + 50,000 = 1,050,000. صحيح."
          }
        ],
        "hint_en": "Split 1.05 into 1 and 0.05, multiply each by 1,000,000, then add.",
        "hint_ar": "قسّم 1.05 إلى 1 و0.05، اضرب كلاً منهما في 1,000,000، ثم اجمع.",
        "result_en": "The answer is 1050000",
        "result_ar": "الجواب هو 1050000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a country with slightly more than 1 million citizens — exactly 1.05 million, which is 1.05 × 10^6.",
            "explanation_ar": "تخيّل دولة بها أكثر قليلاً من مليون مواطن — بالضبط 1.05 مليون، وهو 1.05 × 10^6."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "1 full million = 1,000,000. Plus 0.05 of a million = 50,000 extra citizens.",
            "explanation_ar": "مليون كامل = 1,000,000. بالإضافة إلى 0.05 من المليون = 50,000 مواطن إضافي."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "1,000,000 + 50,000 = 1,050,000 total citizens.",
            "explanation_ar": "1,000,000 + 50,000 = 1,050,000 مواطن إجمالاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "1.05 × 10^6 = 1,050,000. The hidden zero between 1 and 5 accounts for the fifty-thousands place.",
            "explanation_ar": "1.05 × 10^6 = 1,050,000. الصفر المخفي بين 1 و5 يمثل خانة الخمسين ألفاً."
          }
        ],
        "hint_en": "Think of 1 million plus 0.05 million (fifty thousand).",
        "hint_ar": "فكّر في مليون بالإضافة إلى 0.05 مليون (خمسون ألفاً).",
        "result_en": "The answer is 1050000",
        "result_ar": "الجواب هو 1050000"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-sci-hard-003",
    "grade": 8,
    "bank": "specific",
    "category": "Scientific Notation",
    "level": "Hard",
    "question_en": "What is the exponent? 3,400,000 = 3.4 × 10^? → ?",
    "question_ar": "ما هو الأس؟ 3,400,000 = 3.4 × 10^? → ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "3,400,000 = 3.4 × 10^?. We need to find how many places the decimal moves from 3.4 to 3,400,000.",
            "explanation_ar": "3,400,000 = 3.4 × 10^?. نحتاج إيجاد كم خانة تتحرك العلامة من 3.4 إلى 3,400,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "3,400,000 ÷ 3.4 = 1,000,000. So 10^? = 1,000,000.",
            "explanation_ar": "3,400,000 ÷ 3.4 = 1,000,000. إذن 10^? = 1,000,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "1,000,000 = 10^6. Count: 3,400,000 has 6 digits after the leading digit 3.",
            "explanation_ar": "1,000,000 = 10^6. عدّ: 3,400,000 لها 6 أرقام بعد الرقم الأول 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The exponent is 6. 3,400,000 = 3.4 × 10^6.",
            "explanation_ar": "الأس هو 6. 3,400,000 = 3.4 × 10^6."
          }
        ],
        "hint_en": "Count the digits after the leading 3 in 3,400,000.",
        "hint_ar": "عدّ الأرقام بعد الرقم الأول 3 في 3,400,000.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write 3,400,000 = 3.4 × (3,400,000 ÷ 3.4). Compute: 3,400,000 ÷ 3.4 = 1,000,000.",
            "explanation_ar": "اكتب 3,400,000 = 3.4 × (3,400,000 ÷ 3.4). احسب: 3,400,000 ÷ 3.4 = 1,000,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Express 1,000,000 as a power of 10: 1,000,000 = 10^6.",
            "explanation_ar": "عبّر عن 1,000,000 كقوة من 10: 1,000,000 = 10^6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3,400,000 = 3.4 × 10^6. The exponent is 6.",
            "explanation_ar": "3,400,000 = 3.4 × 10^6. الأس هو 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3.4 × 10^6 = 3.4 × 1,000,000 = 3,400,000. Correct.",
            "explanation_ar": "تحقق: 3.4 × 10^6 = 3.4 × 1,000,000 = 3,400,000. صحيح."
          }
        ],
        "hint_en": "Divide 3,400,000 by 3.4 to find the power of 10, then identify its exponent.",
        "hint_ar": "اقسم 3,400,000 على 3.4 للحصول على قوة 10، ثم حدّد أسّها.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine counting 3,400,000 grains of sand. To write this compactly, we shift the decimal until only 3.4 remains.",
            "explanation_ar": "تخيّل عدّ 3,400,000 حبة رمل. لكتابة هذا بشكل مضغوط، نحرّك العلامة حتى يبقى 3.4 فقط."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Move decimal left 6 times: 3,400,000 → 340,000.0 → 34,000.00 → 3,400.000 → 340.0000 → 34.00000 → 3.400000. That is 6 steps.",
            "explanation_ar": "حرّك العلامة لليسار 6 مرات: 3,400,000 → 340,000.0 → 34,000.00 → 3,400.000 → 340.0000 → 34.00000 → 3.400000. هذه 6 خطوات."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "6 left shifts brings 3,400,000 to 3.4, so the exponent is 6.",
            "explanation_ar": "6 إزاحات لليسار تحوّل 3,400,000 إلى 3.4، إذن الأس هو 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "3,400,000 = 3.4 × 10^6. The exponent is 6.",
            "explanation_ar": "3,400,000 = 3.4 × 10^6. الأس هو 6."
          }
        ],
        "hint_en": "Count the left shifts needed to turn 3,400,000 into 3.4.",
        "hint_ar": "عدّ الإزاحات اللازمة لليسار لتحويل 3,400,000 إلى 3.4.",
        "result_en": "The answer is 6",
        "result_ar": "الجواب هو 6"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "scientific_notation"
    }
  },
  {
    "id": "g8-specific-word-easy-001",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A rice farm in India harvests 2,450 kg of rice per hectare. If the farm covers 12 hectares, how many kilograms of rice are harvested in total?",
    "question_ar": "مزرعة أرز في الهند تحصد 2,450 كيلوغراماً من الأرز لكل هكتار. إذا كانت المزرعة تغطي 12 هكتاراً، فكم كيلوغراماً من الأرز يتم حصاده في المجموع ؟",
    "answer": 29400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need to multiply 2,450 by 12. Notice that 2,450 = 2,500 − 50, a near-round number.",
            "explanation_ar": "نحتاج إلى ضرب 2,450 في 12. لاحظ أن 2,450 = 2,500 − 50، وهو رقم قريب من رقم مستدير."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the round number: 2,500 × 12 = 30,000.",
            "explanation_ar": "اضرب الرقم المستدير: 2,500 × 12 = 30,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the correction: 50 × 12 = 600. So 2,450 × 12 = 30,000 − 600.",
            "explanation_ar": "اطرح التصحيح: 50 × 12 = 600. إذن 2,450 × 12 = 30,000 − 600."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "30,000 − 600 = 29,400 kg of rice harvested in total.",
            "explanation_ar": "30,000 − 600 = 29,400 كيلوغرام من الأرز يتم حصاده في المجموع."
          }
        ],
        "hint_en": "Round 2,450 up to 2,500, multiply, then subtract the extra.",
        "hint_ar": "قرّب 2,450 إلى 2,500، اضرب، ثم اطرح الزيادة.",
        "result_en": "The answer is 29400",
        "result_ar": "الجواب هو 29400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 2,450 into 2,000 + 400 + 50 and keep the multiplier 12.",
            "explanation_ar": "قسّم 2,450 إلى 2,000 + 400 + 50 واحتفظ بالمضروب 12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2,000 × 12 = 24,000; 400 × 12 = 4,800; 50 × 12 = 600.",
            "explanation_ar": "2,000 × 12 = 24,000؛ 400 × 12 = 4,800؛ 50 × 12 = 600."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the three partial products: 24,000 + 4,800 + 600 = 29,400.",
            "explanation_ar": "أضف حاصلات الضرب الثلاثة: 24,000 + 4,800 + 600 = 29,400."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 29,400 ÷ 12 = 2,450. ✓ The farm harvests 29,400 kg.",
            "explanation_ar": "تحقق: 29,400 ÷ 12 = 2,450. ✓ تحصد المزرعة 29,400 كيلوغرام."
          }
        ],
        "hint_en": "Break 2,450 into thousands, hundreds, and tens before multiplying by 12.",
        "hint_ar": "قسّم 2,450 إلى آلاف ومئات وعشرات قبل الضرب في 12.",
        "result_en": "The answer is 29400",
        "result_ar": "الجواب هو 29400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture 12 rectangular fields in India, each yielding a pile of 2,450 kg of rice.",
            "explanation_ar": "تخيّل 12 حقلاً مستطيلاً في الهند، كل منها ينتج كومة من 2,450 كيلوغراماً من الأرز."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar of length 12, divided into 12 equal segments each labeled 2,450 kg.",
            "explanation_ar": "ارسم شريطاً بطول 12، مقسّماً إلى 12 قسماً متساوياً، كل منها مُعلَّم بـ 2,450 كيلوغرام."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The total bar length represents 12 × 2,450 kg. Group them as 10 × 2,450 = 24,500 and 2 × 2,450 = 4,900.",
            "explanation_ar": "يمثل إجمالي الشريط 12 × 2,450 كيلوغرام. جمّعها كـ 10 × 2,450 = 24,500 و 2 × 2,450 = 4,900."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "24,500 + 4,900 = 29,400 kg. That's the total harvest across all 12 hectares.",
            "explanation_ar": "24,500 + 4,900 = 29,400 كيلوغرام. هذا هو إجمالي الحصاد عبر جميع الـ 12 هكتاراً."
          }
        ],
        "hint_en": "Group 12 fields into 10 + 2 to make the multiplication easier to picture.",
        "hint_ar": "جمّع الـ 12 حقلاً إلى 10 + 2 لتسهيل تصوّر عملية الضرب.",
        "result_en": "The answer is 29400",
        "result_ar": "الجواب هو 29400"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g8-specific-word-easy-002",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A train in Germany travels at a speed of 185 km/h. How far does it travel in 4 hours?",
    "question_ar": "قطار في ألمانيا يسير بسرعة 185 كيلومتراً في الساعة. كم كيلومتراً يقطع في 4 ساعات ؟",
    "answer": 740,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 185 × 4. Notice 185 = 200 − 15, which is close to 200.",
            "explanation_ar": "نحتاج إلى 185 × 4. لاحظ أن 185 = 200 − 15، وهو قريب من 200."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the round number: 200 × 4 = 800.",
            "explanation_ar": "اضرب الرقم المستدير: 200 × 4 = 800."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the correction: 15 × 4 = 60. So 185 × 4 = 800 − 60.",
            "explanation_ar": "اطرح التصحيح: 15 × 4 = 60. إذن 185 × 4 = 800 − 60."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "800 − 60 = 740 km travelled in 4 hours.",
            "explanation_ar": "800 − 60 = 740 كيلومتراً يقطعها في 4 ساعات."
          }
        ],
        "hint_en": "Round 185 up to 200, multiply by 4, then subtract the excess 15 × 4.",
        "hint_ar": "قرّب 185 إلى 200، اضرب في 4، ثم اطرح الزيادة 15 × 4.",
        "result_en": "The answer is 740",
        "result_ar": "الجواب هو 740"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 185 into 100 + 80 + 5 and keep the multiplier 4.",
            "explanation_ar": "قسّم 185 إلى 100 + 80 + 5 واحتفظ بالمضروب 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "100 × 4 = 400; 80 × 4 = 320; 5 × 4 = 20.",
            "explanation_ar": "100 × 4 = 400؛ 80 × 4 = 320؛ 5 × 4 = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "400 + 320 + 20 = 740.",
            "explanation_ar": "400 + 320 + 20 = 740."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 740 ÷ 4 = 185. ✓ The train travels 740 km.",
            "explanation_ar": "تحقق: 740 ÷ 4 = 185. ✓ يقطع القطار 740 كيلومتراً."
          }
        ],
        "hint_en": "Break 185 into 100 + 85, or 100 + 80 + 5, then multiply each part by 4.",
        "hint_ar": "قسّم 185 إلى 100 + 85، أو 100 + 80 + 5، ثم اضرب كل جزء في 4.",
        "result_en": "The answer is 740",
        "result_ar": "الجواب هو 740"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a German high-speed train on a track, moving 185 km every hour for 4 hours.",
            "explanation_ar": "تخيّل قطاراً سريعاً ألمانياً على مسار، يتحرك 185 كيلومتراً كل ساعة لمدة 4 ساعات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line divided into 4 equal jumps, each jump measuring 185 km.",
            "explanation_ar": "ارسم خطاً عددياً مقسّماً إلى 4 قفزات متساوية، كل قفزة تقيس 185 كيلومتراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After 2 jumps: 185 + 185 = 370 km. After 4 jumps: 370 + 370 = 740 km.",
            "explanation_ar": "بعد قفزتين: 185 + 185 = 370 كيلومتراً. بعد 4 قفزات: 370 + 370 = 740 كيلومتراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The endpoint of the 4th jump is 740 km — the total distance covered.",
            "explanation_ar": "نقطة نهاية القفزة الرابعة هي 740 كيلومتراً — إجمالي المسافة المقطوعة."
          }
        ],
        "hint_en": "Double 185 to get distance in 2 hours, then double again for 4 hours.",
        "hint_ar": "ضاعف 185 لتحصل على المسافة في ساعتين، ثم ضاعف مرة أخرى للحصول على 4 ساعات.",
        "result_en": "The answer is 740",
        "result_ar": "الجواب هو 740"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g8-specific-word-easy-003",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A bookshop in Australia sells books for $24 each. If it sells 325 books in a week, how much money (in dollars) does it collect?",
    "question_ar": "مكتبة في أستراليا تبيع الكتب بسعر 24 دولاراً للكتاب الواحد. إذا باعت 325 كتاباً في أسبوع، كم دولاراً تجمع ؟",
    "answer": 7800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 24 × 325. Notice 325 = 300 + 25, and 24 × 25 = 600 (a known product).",
            "explanation_ar": "نحتاج إلى 24 × 325. لاحظ أن 325 = 300 + 25، و 24 × 25 = 600 (ناتج معروف)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "24 × 300 = 7,200 and 24 × 25 = 600.",
            "explanation_ar": "24 × 300 = 7,200 و 24 × 25 = 600."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two partial products: 7,200 + 600 = 7,800.",
            "explanation_ar": "أضف حاصلَي الضرب: 7,200 + 600 = 7,800."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The bookshop collects $7,800 in the week.",
            "explanation_ar": "تجمع المكتبة 7,800 دولار في الأسبوع."
          }
        ],
        "hint_en": "Split 325 into 300 + 25; both are easy to multiply by 24.",
        "hint_ar": "قسّم 325 إلى 300 + 25؛ كلاهما سهل الضرب في 24.",
        "result_en": "The answer is 7800",
        "result_ar": "الجواب هو 7800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 325 into 300 + 20 + 5. Multiplier is 24.",
            "explanation_ar": "قسّم 325 إلى 300 + 20 + 5. المضروب هو 24."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "300 × 24 = 7,200; 20 × 24 = 480; 5 × 24 = 120.",
            "explanation_ar": "300 × 24 = 7,200؛ 20 × 24 = 480؛ 5 × 24 = 120."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7,200 + 480 + 120 = 7,800.",
            "explanation_ar": "7,200 + 480 + 120 = 7,800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 7,800 ÷ 325 = 24. ✓ Revenue is $7,800.",
            "explanation_ar": "تحقق: 7,800 ÷ 325 = 24. ✓ الإيراد هو 7,800 دولار."
          }
        ],
        "hint_en": "Decompose 325 into place-value parts and multiply each by $24.",
        "hint_ar": "حلّل 325 إلى مكونات القيمة المكانية واضرب كلاً منها في 24 دولاراً.",
        "result_en": "The answer is 7800",
        "result_ar": "الجواب هو 7800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine 325 books stacked in piles in an Australian bookshop, each priced at $24.",
            "explanation_ar": "تخيّل 325 كتاباً مرصوفة في أكوام داخل مكتبة أسترالية، كل كتاب بسعر 24 دولاراً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle: width = 325, height = $24. Split the width into 300 and 25.",
            "explanation_ar": "ارسم مستطيلاً: عرضه = 325، ارتفاعه = 24 دولاراً. قسّم العرض إلى 300 و 25."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Left rectangle area = 300 × 24 = 7,200. Right rectangle area = 25 × 24 = 600.",
            "explanation_ar": "مساحة المستطيل الأيسر = 300 × 24 = 7,200. مساحة المستطيل الأيمن = 25 × 24 = 600."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total area = 7,200 + 600 = 7,800. The bookshop earns $7,800.",
            "explanation_ar": "المساحة الإجمالية = 7,200 + 600 = 7,800. تكسب المكتبة 7,800 دولار."
          }
        ],
        "hint_en": "Use an area model: 325 × 24 = (300 × 24) + (25 × 24).",
        "hint_ar": "استخدم نموذج المساحة: 325 × 24 = (300 × 24) + (25 × 24).",
        "result_en": "The answer is 7800",
        "result_ar": "الجواب هو 7800"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g8-specific-word-medium-001",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A square plaza in Brazil has an area of 1,156 m². What is the length, in metres, of one side of the plaza?",
    "question_ar": "ساحة مربعة في البرازيل مساحتها 1,156 م². ما طول ضلع الساحة الواحد بالمتر ؟",
    "answer": 34,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need √1,156. The number ends in 6, so its square root must end in 4 or 6. Since 30² = 900 and 40² = 1,600, the answer is between 30 and 40.",
            "explanation_ar": "نحتاج إلى √1,156. الرقم ينتهي بـ 6، إذن جذره التربيعي يجب أن ينتهي بـ 4 أو 6. بما أن 30² = 900 و 40² = 1,600، الجواب بين 30 و 40."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Test 34: 34² = (30 + 4)² = 900 + 240 + 16 = 1,156. ✓",
            "explanation_ar": "اختبر 34: 34² = (30 + 4)² = 900 + 240 + 16 = 1,156. ✓"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since 34² = 1,156 exactly, √1,156 = 34.",
            "explanation_ar": "بما أن 34² = 1,156 بالضبط، إذن √1,156 = 34."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Each side of the plaza is 34 m.",
            "explanation_ar": "طول كل ضلع من الساحة هو 34 م."
          }
        ],
        "hint_en": "The last digit of 1,156 is 6, so the root ends in 4 or 6. Test 34 using (30+4)².",
        "hint_ar": "الرقم الأخير في 1,156 هو 6، إذن الجذر ينتهي بـ 4 أو 6. اختبر 34 باستخدام (30+4)².",
        "result_en": "The answer is 34",
        "result_ar": "الجواب هو 34"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find √1,156. Identify the range: 30² = 900 < 1,156 < 1,600 = 40². The root is in the 30s.",
            "explanation_ar": "أوجد √1,156. حدّد النطاق: 30² = 900 < 1,156 < 1,600 = 40². الجذر في العقد الثلاثيني."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Check candidates ending in 4 or 6 (since 1,156 ends in 6): try 34 and 36. 34² = 1,156; no need to check 36.",
            "explanation_ar": "تحقق من المرشحين المنتهين بـ 4 أو 6 (لأن 1,156 تنتهي بـ 6): جرّب 34 و 36. 34² = 1,156؛ لا حاجة لاختبار 36."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "34 × 34: compute 34 × 30 = 1,020 and 34 × 4 = 136. Sum: 1,020 + 136 = 1,156. ✓",
            "explanation_ar": "34 × 34: احسب 34 × 30 = 1,020 و 34 × 4 = 136. الجمع: 1,020 + 136 = 1,156. ✓"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "√1,156 = 34. The side length of the plaza is 34 m.",
            "explanation_ar": "√1,156 = 34. طول ضلع الساحة هو 34 م."
          }
        ],
        "hint_en": "Narrow down to the 30s, then test only numbers ending in 4 or 6.",
        "hint_ar": "ضيّق النطاق إلى الثلاثينيات، ثم اختبر الأرقام المنتهية بـ 4 أو 6 فقط.",
        "result_en": "The answer is 34",
        "result_ar": "الجواب هو 34"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a perfectly square plaza in Brazil; its floor tiles cover exactly 1,156 m².",
            "explanation_ar": "تخيّل ساحة مربعة تماماً في البرازيل؛ بلاط أرضيتها يغطي بالضبط 1,156 م²."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a square with area = 1,156 m². Sketch a grid inside: rows of 30 give area 30 × 30 = 900 — not enough. Try 34 rows of 34.",
            "explanation_ar": "ارسم مربعاً مساحته 1,156 م². ارسم شبكة بداخله: صفوف من 30 تعطي مساحة 30 × 30 = 900 — غير كافٍ. جرّب 34 صفاً من 34."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "A 34 × 34 grid has 4 zones: 30×30 = 900, 30×4 = 120, 4×30 = 120, 4×4 = 16. Total = 900 + 120 + 120 + 16 = 1,156.",
            "explanation_ar": "شبكة 34 × 34 تحتوي على 4 مناطق: 30×30 = 900، 30×4 = 120، 4×30 = 120، 4×4 = 16. المجموع = 900 + 120 + 120 + 16 = 1,156."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The grid fits perfectly, confirming each side = 34 m.",
            "explanation_ar": "الشبكة تتناسب تماماً، مما يؤكد أن كل ضلع = 34 م."
          }
        ],
        "hint_en": "Draw a square and use a grid model, splitting 34 into 30 + 4 to confirm the area.",
        "hint_ar": "ارسم مربعاً واستخدم نموذج الشبكة، وقسّم 34 إلى 30 + 4 لتأكيد المساحة.",
        "result_en": "The answer is 34",
        "result_ar": "الجواب هو 34"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g8-specific-word-medium-002",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A stadium in Egypt holds 45,000 spectators. During a championship week, the stadium is full for 6 consecutive days. How many spectator visits are recorded in total?",
    "question_ar": "ملعب في مصر يتسع لـ 45,000 مشجع. خلال أسبوع البطولة، يكون الملعب ممتلئاً لمدة 6 أيام متتالية. كم عدد زيارات المشجعين الإجمالية المسجّلة ؟",
    "answer": 270000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need 45,000 × 6. Treat 45,000 as 45 × 1,000.",
            "explanation_ar": "نحتاج إلى 45,000 × 6. عامل 45,000 كـ 45 × 1,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "45 × 6 = 270.",
            "explanation_ar": "45 × 6 = 270."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Reattach the three zeros: 270 × 1,000 = 270,000.",
            "explanation_ar": "أعد الأصفار الثلاثة: 270 × 1,000 = 270,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "270,000 spectator visits are recorded during the 6 days.",
            "explanation_ar": "تُسجَّل 270,000 زيارة للمشجعين خلال الـ 6 أيام."
          }
        ],
        "hint_en": "Strip the three zeros from 45,000, multiply 45 × 6, then restore the zeros.",
        "hint_ar": "اجرد الأصفار الثلاثة من 45,000، اضرب 45 × 6، ثم أعد الأصفار.",
        "result_en": "The answer is 270000",
        "result_ar": "الجواب هو 270000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 45,000 into 40,000 + 5,000. Multiplier is 6.",
            "explanation_ar": "قسّم 45,000 إلى 40,000 + 5,000. المضروب هو 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "40,000 × 6 = 240,000; 5,000 × 6 = 30,000.",
            "explanation_ar": "40,000 × 6 = 240,000؛ 5,000 × 6 = 30,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "240,000 + 30,000 = 270,000.",
            "explanation_ar": "240,000 + 30,000 = 270,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 270,000 ÷ 6 = 45,000. ✓ Total visits = 270,000.",
            "explanation_ar": "تحقق: 270,000 ÷ 6 = 45,000. ✓ إجمالي الزيارات = 270,000."
          }
        ],
        "hint_en": "Split 45,000 into 40,000 and 5,000, multiply each by 6, then add.",
        "hint_ar": "قسّم 45,000 إلى 40,000 و 5,000، اضرب كلاً منهما في 6، ثم اجمع.",
        "result_en": "The answer is 270000",
        "result_ar": "الجواب هو 270000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture the Egyptian stadium packed with 45,000 fans every night for 6 nights.",
            "explanation_ar": "تخيّل الملعب المصري مكتظاً بـ 45,000 مشجع كل ليلة لمدة 6 ليالٍ."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 6 identical boxes, each labeled 45,000 visitors. Stack them into one tall column.",
            "explanation_ar": "ارسم 6 مستطيلات متطابقة، كل منها مُعلَّم بـ 45,000 زائر. رصّها في عمود واحد طويل."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Group the 6 boxes into 3 pairs: each pair = 45,000 + 45,000 = 90,000. Three pairs = 3 × 90,000.",
            "explanation_ar": "جمّع المستطيلات الـ 6 في 3 أزواج: كل زوج = 45,000 + 45,000 = 90,000. ثلاثة أزواج = 3 × 90,000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "3 × 90,000 = 270,000 total spectator visits.",
            "explanation_ar": "3 × 90,000 = 270,000 إجمالي زيارات المشجعين."
          }
        ],
        "hint_en": "Pair up the 6 days: 3 pairs × 90,000 per pair = 270,000.",
        "hint_ar": "زاوج الـ 6 أيام: 3 أزواج × 90,000 لكل زوج = 270,000.",
        "result_en": "The answer is 270000",
        "result_ar": "الجواب هو 270000"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g8-specific-word-medium-003",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A cube-shaped water tank in South Africa has a volume of 13,824 litres. What is the length, in decimetres (dm), of one edge of the tank? (Note: 1 litre = 1 dm³)",
    "question_ar": "خزان ماء مكعب الشكل في جنوب أفريقيا حجمه 13,824 لتراً. ما طول حرف المكعب الواحد بالديسيمتر (dm)؟ (ملاحظة: 1 لتر = 1 dm³) ؟",
    "answer": 24,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We need the cube root of 13,824. The last digit is 4, so the cube root ends in 4 (since 4³ = 64). The cube lies between 20³ = 8,000 and 30³ = 27,000, so the root is in the 20s.",
            "explanation_ar": "نحتاج إلى الجذر التكعيبي لـ 13,824. الرقم الأخير 4، إذن الجذر ينتهي بـ 4 (لأن 4³ = 64). يقع المكعب بين 20³ = 8,000 و 30³ = 27,000، إذن الجذر في العقد العشريني."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Test 24: 24³ = 24 × 24 × 24. First, 24 × 24 = 576.",
            "explanation_ar": "اختبر 24: 24³ = 24 × 24 × 24. أولاً، 24 × 24 = 576."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Then 576 × 24 = 576 × 20 + 576 × 4 = 11,520 + 2,304 = 13,824. ✓",
            "explanation_ar": "ثم 576 × 24 = 576 × 20 + 576 × 4 = 11,520 + 2,304 = 13,824. ✓"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "∛13,824 = 24. The edge length is 24 dm.",
            "explanation_ar": "∛13,824 = 24. طول الحرف هو 24 dm."
          }
        ],
        "hint_en": "Last digit of 13,824 is 4, and 4³ ends in 4, so the root ends in 4. Try 24.",
        "hint_ar": "الرقم الأخير في 13,824 هو 4، و 4³ ينتهي بـ 4، إذن الجذر ينتهي بـ 4. جرّب 24.",
        "result_en": "The answer is 24",
        "result_ar": "الجواب هو 24"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find ∛13,824. It lies between 20³ = 8,000 and 30³ = 27,000. The root must end in 4.",
            "explanation_ar": "أوجد ∛13,824. يقع بين 20³ = 8,000 و 30³ = 27,000. الجذر يجب أن ينتهي بـ 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Candidate is 24. Compute 24² = 576, then 576 × 24: split as 576 × 20 = 11,520 and 576 × 4 = 2,304.",
            "explanation_ar": "المرشح هو 24. احسب 24² = 576، ثم 576 × 24: قسّمها كـ 576 × 20 = 11,520 و 576 × 4 = 2,304."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "11,520 + 2,304 = 13,824. This matches the volume exactly.",
            "explanation_ar": "11,520 + 2,304 = 13,824. يطابق الحجم تماماً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "∛13,824 = 24. Each edge of the tank is 24 dm.",
            "explanation_ar": "∛13,824 = 24. كل حرف من الخزان يساوي 24 dm."
          }
        ],
        "hint_en": "Narrow the root to the 20s, check the units digit, then test 24³.",
        "hint_ar": "ضيّق الجذر إلى العشرينيات، تحقق من رقم الوحدات، ثم اختبر 24³.",
        "result_en": "The answer is 24",
        "result_ar": "الجواب هو 24"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a perfect cube tank in South Africa filled with 13,824 litres of water.",
            "explanation_ar": "تخيّل خزاناً مكعباً تاماً في جنوب أفريقيا مملوءاً بـ 13,824 لتراً من الماء."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Sketch a cube and label each edge with unknown length e. Volume = e³ = 13,824. Mark that 20³ = 8,000 (too small) and 30³ = 27,000 (too big).",
            "explanation_ar": "ارسم مكعباً وأشِر إلى كل حرف بطول مجهول e. الحجم = e³ = 13,824. أشِر إلى أن 20³ = 8,000 (صغير جداً) و 30³ = 27,000 (كبير جداً)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Try e = 24: layer the cube into 24 horizontal slabs, each a 24 × 24 = 576 dm² square. Stack 24 slabs: 576 × 24 = 13,824.",
            "explanation_ar": "جرّب e = 24: قسّم المكعب إلى 24 طبقة أفقية، كل منها مربع 24 × 24 = 576 dm². رصّ 24 طبقة: 576 × 24 = 13,824."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "24 layers of 576 dm² each fills the cube exactly. Edge = 24 dm.",
            "explanation_ar": "24 طبقة كل منها 576 dm² تملأ المكعب بالضبط. الحرف = 24 dm."
          }
        ],
        "hint_en": "Think of the cube as stacked horizontal layers: e layers of e × e each must total 13,824.",
        "hint_ar": "فكّر في المكعب كطبقات أفقية مرصوفة: طبقات e كل منها e × e يجب أن يصل مجموعها إلى 13,824.",
        "result_en": "The answer is 24",
        "result_ar": "الجواب هو 24"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g8-specific-word-hard-001",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "The distance from Tokyo, Japan to Sydney, Australia is approximately 7.9 × 10³ km. A spacecraft travels 100 times that distance. How many kilometres does the spacecraft travel? Give your answer as an integer.",
    "question_ar": "المسافة من طوكيو في اليابان إلى سيدني في أستراليا تبلغ تقريباً 7.9 × 10³ كيلومتر. مركبة فضائية تسافر 100 مرة تلك المسافة. كم كيلومتراً تقطع المركبة الفضائية ؟",
    "answer": 790000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The distance is 7.9 × 10³ km and we multiply by 100 = 10². Use the law of exponents: multiply coefficients and add powers of 10.",
            "explanation_ar": "المسافة هي 7.9 × 10³ كيلومتر ونضربها في 100 = 10². استخدم قانون الأسس: اضرب المعاملات وأضف أسس العشرة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Coefficient: 7.9 × 1 = 7.9. Powers: 10³ × 10² = 10^(3+2) = 10⁵.",
            "explanation_ar": "المعامل: 7.9 × 1 = 7.9. الأسس: 10³ × 10² = 10^(3+2) = 10⁵."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Result in scientific notation: 7.9 × 10⁵. Convert to integer: move decimal 5 places right → 790,000.",
            "explanation_ar": "النتيجة بالتدوين العلمي: 7.9 × 10⁵. حوّلها إلى عدد صحيح: انقل الفاصلة 5 أماكن يميناً ← 790,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The spacecraft travels 790,000 km.",
            "explanation_ar": "تقطع المركبة الفضائية 790,000 كيلومتر."
          }
        ],
        "hint_en": "Multiplying by 100 shifts the decimal point 2 places right: 7.9 × 10³ becomes 7.9 × 10⁵ = 790,000.",
        "hint_ar": "الضرب في 100 ينقل الفاصلة العشرية مكانين يميناً: 7.9 × 10³ تصبح 7.9 × 10⁵ = 790,000.",
        "result_en": "The answer is 790000",
        "result_ar": "الجواب هو 790000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Convert 7.9 × 10³ to a standard integer: 7.9 × 1,000 = 7,900 km. Now multiply by 100.",
            "explanation_ar": "حوّل 7.9 × 10³ إلى عدد صحيح عادي: 7.9 × 1,000 = 7,900 كيلومتر. الآن اضرب في 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "7,900 × 100: strip the two zeros from 100, compute 79 × 100 = 7,900, then reattach three zeros: 7,900 × 100 = 790,000.",
            "explanation_ar": "7,900 × 100: جرّد الصفرين من 100، احسب 79 × 100 = 7,900، ثم أعد ثلاثة أصفار: 7,900 × 100 = 790,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7,900 × 100 = 790,000 km.",
            "explanation_ar": "7,900 × 100 = 790,000 كيلومتر."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 790,000 ÷ 100 = 7,900 = 7.9 × 10³. ✓ The spacecraft travels 790,000 km.",
            "explanation_ar": "تحقق: 790,000 ÷ 100 = 7,900 = 7.9 × 10³. ✓ تقطع المركبة 790,000 كيلومتر."
          }
        ],
        "hint_en": "First convert 7.9 × 10³ to 7,900, then multiply by 100 by appending two zeros.",
        "hint_ar": "حوّل أولاً 7.9 × 10³ إلى 7,900، ثم اضرب في 100 بإضافة صفرين.",
        "result_en": "The answer is 790000",
        "result_ar": "الجواب هو 790000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Imagine a spacecraft launching from Tokyo and flying 100 laps of the Tokyo–Sydney route (7,900 km each).",
            "explanation_ar": "تخيّل مركبة فضائية تنطلق من طوكيو وتطير 100 دورة على مسار طوكيو–سيدني (7,900 كيلومتر لكل دورة)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. One unit = 7,900 km. Mark 100 units. Group into 10 sets of 10: each set = 10 × 7,900 = 79,000 km.",
            "explanation_ar": "ارسم خطاً عددياً. وحدة واحدة = 7,900 كيلومتر. أشِر إلى 100 وحدة. جمّعها في 10 مجموعات من 10: كل مجموعة = 10 × 7,900 = 79,000 كيلومتر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "10 groups × 79,000 km = 790,000 km.",
            "explanation_ar": "10 مجموعات × 79,000 كيلومتر = 790,000 كيلومتر."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "The endpoint on the number line is 790,000 km — the total spacecraft distance.",
            "explanation_ar": "نقطة النهاية على الخط العددي هي 790,000 كيلومتر — إجمالي مسافة المركبة."
          }
        ],
        "hint_en": "Think of 100 laps of 7,900 km: group into 10 sets of 10 laps to make the arithmetic visible.",
        "hint_ar": "فكّر في 100 دورة من 7,900 كيلومتر: جمّعها في 10 مجموعات من 10 دورات لإيضاح الحساب.",
        "result_en": "The answer is 790000",
        "result_ar": "الجواب هو 790000"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g8-specific-word-hard-002",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A river in Brazil carries 3.6 × 10⁶ litres of water per minute. A hydroelectric dam stops the flow for 5 minutes to fill a reservoir. The reservoir already contains 4 × 10⁶ litres. How many litres does the reservoir contain after 5 minutes? Give your answer as an integer.",
    "question_ar": "نهر في البرازيل ينقل 3.6 × 10⁶ لتراً من الماء في الدقيقة. سد كهرومائي يوقف التدفق لمدة 5 دقائق لملء خزان. يحتوي الخزان مسبقاً على 4 × 10⁶ لتر. كم لتراً يحتوي الخزان بعد 5 دقائق ؟",
    "answer": 22000000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Water added = 3.6 × 10⁶ × 5. Then add the existing 4 × 10⁶. Work in units of 10⁶ throughout.",
            "explanation_ar": "الماء المضاف = 3.6 × 10⁶ × 5. ثم أضف الـ 4 × 10⁶ الموجودة. اعمل بوحدات 10⁶ طوال الوقت."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "3.6 × 5 = 18. So water added = 18 × 10⁶.",
            "explanation_ar": "3.6 × 5 = 18. إذن الماء المضاف = 18 × 10⁶."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add existing water: 18 × 10⁶ + 4 × 10⁶ = 22 × 10⁶.",
            "explanation_ar": "أضف الماء الموجود: 18 × 10⁶ + 4 × 10⁶ = 22 × 10⁶."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "22 × 10⁶ = 22,000,000 litres in the reservoir after 5 minutes.",
            "explanation_ar": "22 × 10⁶ = 22,000,000 لتر في الخزان بعد 5 دقائق."
          }
        ],
        "hint_en": "Factor out 10⁶: compute (3.6 × 5 + 4) × 10⁶ = 22 × 10⁶.",
        "hint_ar": "افصل 10⁶: احسب (3.6 × 5 + 4) × 10⁶ = 22 × 10⁶.",
        "result_en": "The answer is 22000000",
        "result_ar": "الجواب هو 22000000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Two quantities: water added = 3.6 × 10⁶ × 5, and existing water = 4 × 10⁶. Convert both to integers: 3,600,000 and 4,000,000.",
            "explanation_ar": "كميتان: الماء المضاف = 3.6 × 10⁶ × 5، والماء الموجود = 4 × 10⁶. حوّل كليهما إلى أعداد صحيحة: 3,600,000 و 4,000,000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3,600,000 × 5 = 18,000,000. The existing amount stays at 4,000,000.",
            "explanation_ar": "3,600,000 × 5 = 18,000,000. الكمية الموجودة تبقى 4,000,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "18,000,000 + 4,000,000 = 22,000,000.",
            "explanation_ar": "18,000,000 + 4,000,000 = 22,000,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "22,000,000 = 2.2 × 10⁷ litres. ✓ The reservoir holds 22,000,000 litres.",
            "explanation_ar": "22,000,000 = 2.2 × 10⁷ لتر. ✓ يحتوي الخزان على 22,000,000 لتر."
          }
        ],
        "hint_en": "Convert scientific notation to standard integers, multiply, then add the existing volume.",
        "hint_ar": "حوّل التدوين العلمي إلى أعداد صحيحة عادية، اضرب، ثم أضف الحجم الموجود.",
        "result_en": "The answer is 22000000",
        "result_ar": "الجواب هو 22000000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a massive Brazilian reservoir that starts with 4,000,000 litres (a blue pool). A river pours in 3,600,000 litres every minute for 5 minutes.",
            "explanation_ar": "تخيّل خزاناً برازيلياً ضخماً يبدأ بـ 4,000,000 لتر (بحيرة زرقاء). نهر يصبّ 3,600,000 لتر كل دقيقة لمدة 5 دقائق."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar: the first segment = 4,000,000 (existing). Add 5 equal segments of 3,600,000 each for the 5 minutes of inflow.",
            "explanation_ar": "ارسم شريطاً: القسم الأول = 4,000,000 (موجود). أضف 5 أقسام متساوية من 3,600,000 لكل منهما لمدة الدقائق الـ 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The 5 inflow segments total 5 × 3,600,000 = 18,000,000. Plus the existing 4,000,000.",
            "explanation_ar": "أقسام التدفق الـ 5 مجموعها 5 × 3,600,000 = 18,000,000. زائد الـ 4,000,000 الموجودة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "Total bar length = 18,000,000 + 4,000,000 = 22,000,000 litres.",
            "explanation_ar": "إجمالي طول الشريط = 18,000,000 + 4,000,000 = 22,000,000 لتر."
          }
        ],
        "hint_en": "Draw a bar with 6 segments: 1 for existing water and 5 equal inflow segments.",
        "hint_ar": "ارسم شريطاً بـ 6 أقسام: 1 للماء الموجود و 5 أقسام متساوية للتدفق الوارد.",
        "result_en": "The answer is 22000000",
        "result_ar": "الجواب هو 22000000"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g8-specific-word-hard-003",
    "grade": 8,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A satellite orbiting the USA completes one orbit every 96 minutes. Light travels 1.8 × 10⁷ km in one minute. How many kilometres does light travel during the time it takes the satellite to complete exactly 5 orbits? Give your answer as an integer.",
    "question_ar": "قمر صناعي يدور حول الأرض فوق الولايات المتحدة الأمريكية يكمل دورة واحدة كل 96 دقيقة. يقطع الضوء 1.8 × 10⁷ كيلومتراً في دقيقة واحدة. كم كيلومتراً يقطع الضوء خلال الوقت اللازم للقمر الصناعي لإكمال 5 دورات بالضبط ؟",
    "answer": 8640000000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Time for 5 orbits = 5 × 96 = 480 minutes. Light distance = 1.8 × 10⁷ × 480. Rewrite 480 = 48 × 10.",
            "explanation_ar": "وقت 5 دورات = 5 × 96 = 480 دقيقة. مسافة الضوء = 1.8 × 10⁷ × 480. أعد كتابة 480 = 48 × 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "1.8 × 48 = 86.4. So 1.8 × 10⁷ × 480 = 86.4 × 10⁷ × 10 = 86.4 × 10⁸.",
            "explanation_ar": "1.8 × 48 = 86.4. إذن 1.8 × 10⁷ × 480 = 86.4 × 10⁷ × 10 = 86.4 × 10⁸."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "86.4 × 10⁸ = 8.64 × 10⁹. Convert to integer: 8,640,000,000.",
            "explanation_ar": "86.4 × 10⁸ = 8.64 × 10⁹. حوّلها إلى عدد صحيح: 8,640,000,000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Light travels 8,640,000,000 km during 5 satellite orbits.",
            "explanation_ar": "يقطع الضوء 8,640,000,000 كيلومتراً خلال 5 دورات للقمر الصناعي."
          }
        ],
        "hint_en": "Find total minutes (5 × 96 = 480), then multiply 1.8 × 10⁷ by 480 using 480 = 48 × 10.",
        "hint_ar": "أوجد إجمالي الدقائق (5 × 96 = 480)، ثم اضرب 1.8 × 10⁷ في 480 مستخدماً 480 = 48 × 10.",
        "result_en": "The answer is 8640000000",
        "result_ar": "الجواب هو 8640000000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Step 1: find total time. 5 orbits × 96 min = 480 min. Step 2: split 480 = 400 + 80.",
            "explanation_ar": "الخطوة 1: أوجد الوقت الإجمالي. 5 دورات × 96 دقيقة = 480 دقيقة. الخطوة 2: قسّم 480 = 400 + 80."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Light speed = 18,000,000 km/min. 18,000,000 × 400 = 7,200,000,000. 18,000,000 × 80 = 1,440,000,000.",
            "explanation_ar": "سرعة الضوء = 18,000,000 كيلومتر/دقيقة. 18,000,000 × 400 = 7,200,000,000. 18,000,000 × 80 = 1,440,000,000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7,200,000,000 + 1,440,000,000 = 8,640,000,000.",
            "explanation_ar": "7,200,000,000 + 1,440,000,000 = 8,640,000,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8,640,000,000 ÷ 480 = 18,000,000 = 1.8 × 10⁷. ✓ Light travels 8,640,000,000 km.",
            "explanation_ar": "تحقق: 8,640,000,000 ÷ 480 = 18,000,000 = 1.8 × 10⁷. ✓ يقطع الضوء 8,640,000,000 كيلومتراً."
          }
        ],
        "hint_en": "Convert 1.8 × 10⁷ to 18,000,000, then multiply by 480 split as 400 + 80.",
        "hint_ar": "حوّل 1.8 × 10⁷ إلى 18,000,000، ثم اضرب في 480 مقسومة كـ 400 + 80.",
        "result_en": "The answer is 8640000000",
        "result_ar": "الجواب هو 8640000000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "ربط بالقصة",
            "explanation_en": "Picture a satellite circling Earth 5 times (5 × 96 = 480 minutes), while a beam of light races away at 18,000,000 km each minute.",
            "explanation_ar": "تخيّل قمراً صناعياً يدور حول الأرض 5 مرات (5 × 96 = 480 دقيقة)، بينما شعاع ضوء يتسابق بعيداً بمعدل 18,000,000 كيلومتر كل دقيقة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a timeline of 480 equal one-minute units. Each unit represents 18,000,000 km of light travel. Group into 48 sets of 10 minutes.",
            "explanation_ar": "ارسم خطاً زمنياً من 480 وحدة متساوية من دقيقة واحدة. كل وحدة تمثل 18,000,000 كيلومتراً من مسار الضوء. جمّعها في 48 مجموعة من 10 دقائق."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each 10-minute group = 10 × 18,000,000 = 180,000,000 km. There are 48 such groups.",
            "explanation_ar": "كل مجموعة من 10 دقائق = 10 × 18,000,000 = 180,000,000 كيلومتر. هناك 48 مجموعة من هذا القبيل."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "حل واربط",
            "explanation_en": "48 × 180,000,000 = 8,640,000,000 km — the total distance light covers in 480 minutes.",
            "explanation_ar": "48 × 180,000,000 = 8,640,000,000 كيلومتر — إجمالي المسافة التي يقطعها الضوء في 480 دقيقة."
          }
        ],
        "hint_en": "Timeline of 480 min; group into 48 sets of 10 min, each = 180,000,000 km of light.",
        "hint_ar": "خط زمني من 480 دقيقة؛ جمّعها في 48 مجموعة من 10 دقائق، كل منها = 180,000,000 كيلومتر من الضوء.",
        "result_en": "The answer is 8640000000",
        "result_ar": "الجواب هو 8640000000"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  }
];

export const getByCategory = (cat: string) =>
  grade8LearnBank.filter(p => p.category === cat);

export const getByLevel = (level: 'Easy' | 'Medium' | 'Hard') =>
  grade8LearnBank.filter(p => p.level === level);

export const getById = (id: string) =>
  grade8LearnBank.find(p => p.id === id) ?? null;

export const getByTag = (tag: string) =>
  grade8LearnBank.filter(p => p.meta.fun_fact_tag === tag);
