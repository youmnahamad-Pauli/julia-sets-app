// ============================================================
// Julia Sets — Grade 7 Learn Bank
// Auto-generated — do not edit by hand
// 63 problems × 3 methods (Vedic / Decompose / Visualize)
// Note: Algebra category allows negative answers
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

export const grade7LearnBank: LearnProblem[] = 
[
  {
    "id": "g7-common-add-easy-001",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "−12500 + 48300 = ?",
    "question_ar": "−12500 + 48300 = ؟",
    "answer": 35800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "You have two numbers: −12500 and +48300. The positive number (48300) has a larger magnitude than the negative number (12500), so the answer will be positive.",
            "explanation_ar": "لديك عددان: −12500 و+48300. العدد الموجب (48300) أكبر قيمةً من العدد السالب (12500)، إذن الناتج سيكون موجباً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Identify the magnitudes: |−12500| = 12500 and |48300| = 48300. The dominant (larger) magnitude is 48300.",
            "explanation_ar": "حدّد القيم المطلقة: |−12500| = 12500 و|48300| = 48300. القيمة الأكبر (المهيمنة) هي 48300."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the smaller magnitude from the larger: 48300 − 12500 = 35800. Keep the sign of the dominant number, which is positive.",
            "explanation_ar": "اطرح القيمة المطلقة الأصغر من الأكبر: 48300 − 12500 = 35800. احتفظ بإشارة العدد ذي القيمة الأكبر، وهي موجبة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is +35800. So −12500 + 48300 = 35800.",
            "explanation_ar": "الناتج هو +35800. إذن −12500 + 48300 = 35800."
          }
        ],
        "hint_en": "Which number is bigger in size? Subtract the smaller from the bigger and keep the bigger one's sign.",
        "hint_ar": "أيّ العددين أكبر في الحجم؟ اطرح الأصغر من الأكبر واحتفظ بإشارة الأكبر.",
        "result_en": "35800",
        "result_ar": "35800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Group the positives: +48300. Group the negatives: −12500. We will combine the two groups.",
            "explanation_ar": "اجمع الأعداد الموجبة: +48300. اجمع الأعداد السالبة: −12500. سنجمع المجموعتين."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Sum of positives = 48300. Sum of negatives = 12500. Now compute 48300 − 12500. Break it down: 48300 − 12000 = 36300, then 36300 − 500 = 35800.",
            "explanation_ar": "مجموع الأعداد الموجبة = 48300. مجموع الأعداد السالبة = 12500. احسب 48300 − 12500. بالتفكيك: 48300 − 12000 = 36300، ثم 36300 − 500 = 35800."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "48300 − 12500 = 35800. The positives outweigh the negatives, so the result is positive: +35800.",
            "explanation_ar": "48300 − 12500 = 35800. الأعداد الموجبة أكبر من السالبة، فالناتج موجب: +35800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 35800 + 12500 = 48300. ✓ Answer: 35800.",
            "explanation_ar": "للتحقق: 35800 + 12500 = 48300. ✓ الجواب: 35800."
          }
        ],
        "hint_en": "Add all positives together, add all negatives together, then subtract the smaller total from the larger.",
        "hint_ar": "اجمع كل الأعداد الموجبة معاً، واجمع كل الأعداد السالبة معاً، ثم اطرح المجموع الأصغر من الأكبر.",
        "result_en": "35800",
        "result_ar": "35800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a number line. You owe 12500 dollars (you start at −12500), then you earn 48300 dollars. Where do you end up?",
            "explanation_ar": "تخيّل خطاً عددياً. أنت مدين بـ 12500 دولاراً (تبدأ من −12500)، ثم تكسب 48300 دولاراً. أين ستنتهي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at −12500 on the number line. Move 48300 steps to the right (positive direction).",
            "explanation_ar": "ابدأ من −12500 على خط الأعداد. تحرّك 48300 خطوة نحو اليمين (الاتجاه الموجب)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From −12500, moving right 12500 steps brings you to 0. You still have 48300 − 12500 = 35800 more steps to go, landing at +35800.",
            "explanation_ar": "من −12500، تحرّك 12500 خطوة يميناً يصلك إلى 0. لا تزال تمتلك 48300 − 12500 = 35800 خطوة إضافية، فتصل إلى +35800."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You land at 35800. So −12500 + 48300 = 35800.",
            "explanation_ar": "وصلت إلى 35800. إذن −12500 + 48300 = 35800."
          }
        ],
        "hint_en": "Start at −12500 on a number line and jump 48300 to the right. How far past zero do you land?",
        "hint_ar": "ابدأ من −12500 على خط الأعداد وانتقل 48300 خطوة يميناً. كم تجاوزت الصفر؟",
        "result_en": "35800",
        "result_ar": "35800"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-add-easy-002",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "−67000 + (−24000) = ?",
    "question_ar": "−67000 + (−24000) = ؟",
    "answer": -91000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both numbers are negative: −67000 and −24000. When both signs match, you simply add the magnitudes and keep that sign.",
            "explanation_ar": "كلا العددين سالبان: −67000 و−24000. عندما تتطابق الإشارتان، تجمع القيمتين المطلقتين وتحتفظ بتلك الإشارة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "|−67000| = 67000 and |−24000| = 24000. Both carry the negative sign, so the dominant sign is negative.",
            "explanation_ar": "|−67000| = 67000 و|−24000| = 24000. كلاهما يحمل إشارة سالبة، فالإشارة المهيمنة هي السلبية."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the magnitudes: 67000 + 24000 = 91000. Apply the negative sign.",
            "explanation_ar": "اجمع القيمتين المطلقتين: 67000 + 24000 = 91000. ثم ضع الإشارة السالبة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is −91000. So −67000 + (−24000) = −91000.",
            "explanation_ar": "الناتج هو −91000. إذن −67000 + (−24000) = −91000."
          }
        ],
        "hint_en": "Same signs? Just add the magnitudes and keep the shared sign.",
        "hint_ar": "الإشارتان متطابقتان؟ اجمع القيمتين المطلقتين واحتفظ بالإشارة المشتركة.",
        "result_en": "−91000",
        "result_ar": "−91000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Both terms are negative. Group them: negatives = {67000, 24000}. There are no positives.",
            "explanation_ar": "كلا الحدّين سالبان. اجمعهما: السالبات = {67000, 24000}. لا توجد أعداد موجبة."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Sum of magnitudes of negatives: 67000 + 24000. Split: 67000 + 20000 = 87000, then 87000 + 4000 = 91000.",
            "explanation_ar": "مجموع القيم المطلقة للسالبات: 67000 + 24000. بالتفكيك: 67000 + 20000 = 87000، ثم 87000 + 4000 = 91000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Total negative magnitude = 91000. Positive total = 0. Result = −91000.",
            "explanation_ar": "مجموع القيمة المطلقة للسالبات = 91000. مجموع الموجبات = 0. الناتج = −91000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: −91000 can be split back into −67000 and −24000. ✓ Answer: −91000.",
            "explanation_ar": "للتحقق: −91000 يمكن تقسيمه مجدداً إلى −67000 و−24000. ✓ الجواب: −91000."
          }
        ],
        "hint_en": "No positives here — just combine the two negative amounts.",
        "hint_ar": "لا توجد أعداد موجبة هنا — اجمع فقط العددين السالبين.",
        "result_en": "−91000",
        "result_ar": "−91000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine owing 67000 dollars (starting at −67000 on the number line), then going further into debt by 24000 more. How deep in the negative do you go?",
            "explanation_ar": "تخيّل أنك مدين بـ 67000 دولار (تبدأ من −67000 على خط الأعداد)، ثم تزداد ديونك بـ 24000 أخرى. إلى أي عمق سالب ستصل؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at −67000 on the number line. Adding −24000 means moving 24000 steps further to the left (more negative).",
            "explanation_ar": "ابدأ من −67000 على خط الأعداد. إضافة −24000 تعني التحرك 24000 خطوة إضافية نحو اليسار (أكثر سلبية)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Moving left from −67000 by 24000 steps: −67000 − 24000 = −91000.",
            "explanation_ar": "التحرك يساراً من −67000 بمقدار 24000 خطوة: −67000 − 24000 = −91000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You land at −91000. So −67000 + (−24000) = −91000.",
            "explanation_ar": "وصلت إلى −91000. إذن −67000 + (−24000) = −91000."
          }
        ],
        "hint_en": "Both moves go left on the number line. Add the distances and stay negative.",
        "hint_ar": "كلا التحركين نحو اليسار على خط الأعداد. اجمع المسافتين وابقَ في النطاق السالب.",
        "result_en": "−91000",
        "result_ar": "−91000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-add-easy-003",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "38600 + 47400 = ?",
    "question_ar": "38600 + 47400 = ؟",
    "answer": 86000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both numbers are positive: 38600 and 47400. Notice that 600 + 400 = 1000, which creates a clean carry.",
            "explanation_ar": "كلا العددين موجبان: 38600 و47400. لاحظ أن 600 + 400 = 1000، مما يخلق حملاً مريحاً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Round both to the nearest thousand: 38600 → 39000 (add 400), 47400 → 47000 (subtract 400). Or notice the unit-hundreds sum: 6+4 = 10 hundreds = 1000.",
            "explanation_ar": "قرّب كلا العددين إلى أقرب ألف: 38600 ← 39000 (أضف 400)، 47400 ← 47000 (اطرح 400). أو لاحظ: 600 + 400 = 1000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the thousands: 38000 + 47000 = 85000. Add the hundreds: 600 + 400 = 1000. Total = 85000 + 1000 = 86000.",
            "explanation_ar": "اجمع الآلاف: 38000 + 47000 = 85000. اجمع المئات: 600 + 400 = 1000. الإجمالي = 85000 + 1000 = 86000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "85000 + 1000 = 86000. So 38600 + 47400 = 86000.",
            "explanation_ar": "85000 + 1000 = 86000. إذن 38600 + 47400 = 86000."
          }
        ],
        "hint_en": "Notice 600 + 400 = 1000. Add the thousands separately, then add the 1000 carry.",
        "hint_ar": "لاحظ أن 600 + 400 = 1000. اجمع الآلاف بشكل منفصل، ثم أضف حملة الـ 1000.",
        "result_en": "86000",
        "result_ar": "86000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split each number into thousands and hundreds: 38600 = 38000 + 600; 47400 = 47000 + 400.",
            "explanation_ar": "قسّم كل عدد إلى آلاف ومئات: 38600 = 38000 + 600؛ 47400 = 47000 + 400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 38000 + 47000 = 85000. Hundreds: 600 + 400 = 1000.",
            "explanation_ar": "الآلاف: 38000 + 47000 = 85000. المئات: 600 + 400 = 1000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "85000 + 1000 = 86000.",
            "explanation_ar": "85000 + 1000 = 86000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 86000 − 47400 = 38600. ✓ Answer: 86000.",
            "explanation_ar": "للتحقق: 86000 − 47400 = 38600. ✓ الجواب: 86000."
          }
        ],
        "hint_en": "Break both numbers into thousands + hundreds, add each group, then recombine.",
        "hint_ar": "قسّم كلا العددين إلى آلاف + مئات، اجمع كل مجموعة، ثم أعد التجميع.",
        "result_en": "86000",
        "result_ar": "86000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A store earns 38600 on Monday and 47400 on Tuesday. What is the two-day total?",
            "explanation_ar": "متجر يكسب 38600 يوم الاثنين و47400 يوم الثلاثاء. ما مجموع اليومين؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 38600. Move 47400 steps to the right. Break the jump: first move 40000 (landing at 78600), then move 7400 more.",
            "explanation_ar": "ابدأ من 38600. تحرّك 47400 خطوة نحو اليمين. قسّم القفزة: تحرّك أولاً 40000 (تصل إلى 78600)، ثم تحرّك 7400 إضافية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "78600 + 7000 = 85600, then 85600 + 400 = 86000. You land at 86000.",
            "explanation_ar": "78600 + 7000 = 85600، ثم 85600 + 400 = 86000. تصل إلى 86000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The two-day total is 86000. So 38600 + 47400 = 86000.",
            "explanation_ar": "مجموع اليومين هو 86000. إذن 38600 + 47400 = 86000."
          }
        ],
        "hint_en": "Jump from 38600 in steps: +40000 then +7400. Where do you land?",
        "hint_ar": "انتقل من 38600 على مراحل: +40000 ثم +7400. أين ستصل؟",
        "result_en": "86000",
        "result_ar": "86000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-add-medium-001",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "−3400 + 7800 + (−2100) = ?",
    "question_ar": "−3400 + 7800 + (−2100) = ؟",
    "answer": 2300,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Three terms: −3400, +7800, −2100. The positive term is 7800; the negatives are 3400 and 2100. Compare totals to find the dominant sign.",
            "explanation_ar": "ثلاثة حدود: −3400 و+7800 و−2100. الحد الموجب هو 7800؛ السالبان هما 3400 و2100. قارن المجموعين لتحديد الإشارة المهيمنة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Sum of negatives: 3400 + 2100 = 5500. Sum of positives: 7800. Since 7800 > 5500, the answer is positive.",
            "explanation_ar": "مجموع السالبات: 3400 + 2100 = 5500. مجموع الموجبات: 7800. بما أن 7800 > 5500، الناتج موجب."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the total negative magnitude from the total positive: 7800 − 5500 = 2300. Keep the positive sign.",
            "explanation_ar": "اطرح مجموع القيم المطلقة للسالبات من مجموع الموجبات: 7800 − 5500 = 2300. احتفظ بالإشارة الموجبة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is +2300. So −3400 + 7800 + (−2100) = 2300.",
            "explanation_ar": "الناتج هو +2300. إذن −3400 + 7800 + (−2100) = 2300."
          }
        ],
        "hint_en": "Pool all the negatives (3400 + 2100 = 5500) and compare to the positive (7800). Subtract to find the difference.",
        "hint_ar": "اجمع كل السالبات (3400 + 2100 = 5500) وقارنها بالموجب (7800). اطرح للحصول على الفرق.",
        "result_en": "2300",
        "result_ar": "2300"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Positives: {7800}. Negatives: {3400, 2100}. Group each set.",
            "explanation_ar": "الموجبات: {7800}. السالبات: {3400, 2100}. اجمع كل مجموعة."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Positive total: 7800. Negative total: 3400 + 2100 = 5500.",
            "explanation_ar": "مجموع الموجبات: 7800. مجموع السالبات: 3400 + 2100 = 5500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net = 7800 − 5500 = 2300 (positive wins).",
            "explanation_ar": "الصافي = 7800 − 5500 = 2300 (الموجب يفوز)."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2300 + 5500 = 7800. ✓ Answer: 2300.",
            "explanation_ar": "للتحقق: 2300 + 5500 = 7800. ✓ الجواب: 2300."
          }
        ],
        "hint_en": "Add the negatives together first (3400 + 2100 = 5500), then subtract from 7800.",
        "hint_ar": "اجمع السالبات أولاً (3400 + 2100 = 5500)، ثم اطرحها من 7800.",
        "result_en": "2300",
        "result_ar": "2300"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a bank account: you withdraw 3400, deposit 7800, then withdraw 2100. What is the final balance?",
            "explanation_ar": "تخيّل حساباً مصرفياً: تسحب 3400، تودع 7800، ثم تسحب 2100. ما الرصيد النهائي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 0. Move left 3400 (to −3400), then right 7800 (to +4400), then left 2100 (to +2300).",
            "explanation_ar": "ابدأ من 0. تحرّك يساراً 3400 (إلى −3400)، ثم يميناً 7800 (إلى +4400)، ثم يساراً 2100 (إلى +2300)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After all three moves: −3400 + 7800 = 4400, then 4400 − 2100 = 2300.",
            "explanation_ar": "بعد التحركات الثلاثة: −3400 + 7800 = 4400، ثم 4400 − 2100 = 2300."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Final position on the number line: 2300. Answer: 2300.",
            "explanation_ar": "الموقع النهائي على خط الأعداد: 2300. الجواب: 2300."
          }
        ],
        "hint_en": "Step through each number in order on the number line: left, right, left.",
        "hint_ar": "تقدّم خطوة بخطوة على خط الأعداد: يساراً، يميناً، يساراً.",
        "result_en": "2300",
        "result_ar": "2300"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-medium-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-add-medium-002",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "5200 + (−8900) + 4700 + (−1000) = ?",
    "question_ar": "5200 + (−8900) + 4700 + (−1000) = ؟",
    "answer": 0,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Four terms: +5200, −8900, +4700, −1000. Check if the positives and negatives balance out.",
            "explanation_ar": "أربعة حدود: +5200 و−8900 و+4700 و−1000. تحقق إذا كانت الموجبات والسالبات تتوازن."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Sum of positives: 5200 + 4700 = 9900. Sum of negatives: 8900 + 1000 = 9900. They are equal!",
            "explanation_ar": "مجموع الموجبات: 5200 + 4700 = 9900. مجموع السالبات: 8900 + 1000 = 9900. إنهما متساويان!"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "When the positive total equals the negative total, the result is exactly 0: 9900 − 9900 = 0.",
            "explanation_ar": "عندما يساوي مجموع الموجبات مجموع السالبات، يكون الناتج صفراً تماماً: 9900 − 9900 = 0."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is 0. So 5200 + (−8900) + 4700 + (−1000) = 0.",
            "explanation_ar": "الناتج هو 0. إذن 5200 + (−8900) + 4700 + (−1000) = 0."
          }
        ],
        "hint_en": "Add all positives together, then all negatives together. Do they match?",
        "hint_ar": "اجمع كل الموجبات معاً، ثم كل السالبات معاً. هل تتطابق؟",
        "result_en": "0",
        "result_ar": "0"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Positives: {5200, 4700}. Negatives: {8900, 1000}.",
            "explanation_ar": "الموجبات: {5200, 4700}. السالبات: {8900, 1000}."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Positive total: 5200 + 4700 = 9900. Negative total: 8900 + 1000 = 9900.",
            "explanation_ar": "مجموع الموجبات: 5200 + 4700 = 9900. مجموع السالبات: 8900 + 1000 = 9900."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net = 9900 − 9900 = 0. The groups perfectly cancel each other.",
            "explanation_ar": "الصافي = 9900 − 9900 = 0. المجموعتان تلغيان بعضهما تماماً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Both groups equal 9900, so they cancel. ✓ Answer: 0.",
            "explanation_ar": "كلتا المجموعتين تساوي 9900، فتلغي إحداهما الأخرى. ✓ الجواب: 0."
          }
        ],
        "hint_en": "Group the positives (5200 + 4700) and negatives (8900 + 1000) — do they match?",
        "hint_ar": "اجمع الموجبات (5200 + 4700) والسالبات (8900 + 1000) — هل تتطابق؟",
        "result_en": "0",
        "result_ar": "0"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine walking on a number line: step right 5200, left 8900, right 4700, left 1000. Do you end up where you started?",
            "explanation_ar": "تخيّل أنك تمشي على خط الأعداد: خطوة يميناً 5200، يساراً 8900، يميناً 4700، يساراً 1000. هل تعود إلى نقطة البداية؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 0 → +5200 → −3700 → +1000 → 0.",
            "explanation_ar": "ابدأ من 0 ← +5200 ← −3700 ← +1000 ← 0."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "0 + 5200 = 5200; 5200 − 8900 = −3700; −3700 + 4700 = 1000; 1000 − 1000 = 0.",
            "explanation_ar": "0 + 5200 = 5200؛ 5200 − 8900 = −3700؛ −3700 + 4700 = 1000؛ 1000 − 1000 = 0."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You return exactly to 0. Answer: 0.",
            "explanation_ar": "عدت تماماً إلى 0. الجواب: 0."
          }
        ],
        "hint_en": "Walk through each step. Right moves and left moves should balance perfectly.",
        "hint_ar": "مرّ عبر كل خطوة. تحركات اليمين واليسار يجب أن تتوازن تماماً.",
        "result_en": "0",
        "result_ar": "0"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-medium-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-add-medium-003",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "−15000 + 42000 + (−18000) + 6000 = ?",
    "question_ar": "−15000 + 42000 + (−18000) + 6000 = ؟",
    "answer": 15000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Four terms: −15000, +42000, −18000, +6000. Identify positives and negatives to find the dominant group.",
            "explanation_ar": "أربعة حدود: −15000 و+42000 و−18000 و+6000. حدّد الموجبات والسالبات لتجد المجموعة المهيمنة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Positive total: 42000 + 6000 = 48000. Negative total: 15000 + 18000 = 33000. Positives dominate (48000 > 33000).",
            "explanation_ar": "مجموع الموجبات: 42000 + 6000 = 48000. مجموع السالبات: 15000 + 18000 = 33000. الموجبات مهيمنة (48000 > 33000)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract: 48000 − 33000 = 15000. Keep the positive sign.",
            "explanation_ar": "اطرح: 48000 − 33000 = 15000. احتفظ بالإشارة الموجبة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is +15000. So −15000 + 42000 + (−18000) + 6000 = 15000.",
            "explanation_ar": "الناتج هو +15000. إذن −15000 + 42000 + (−18000) + 6000 = 15000."
          }
        ],
        "hint_en": "Collect positives (42000 + 6000 = 48000) and negatives (15000 + 18000 = 33000), then subtract.",
        "hint_ar": "اجمع الموجبات (42000 + 6000 = 48000) والسالبات (15000 + 18000 = 33000)، ثم اطرح.",
        "result_en": "15000",
        "result_ar": "15000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Positives: {42000, 6000}. Negatives: {15000, 18000}.",
            "explanation_ar": "الموجبات: {42000, 6000}. السالبات: {15000, 18000}."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Positive total: 42000 + 6000 = 48000. Negative total: 15000 + 18000 = 33000.",
            "explanation_ar": "مجموع الموجبات: 42000 + 6000 = 48000. مجموع السالبات: 15000 + 18000 = 33000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net = 48000 − 33000 = 15000.",
            "explanation_ar": "الصافي = 48000 − 33000 = 15000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 15000 + 33000 = 48000. ✓ Answer: 15000.",
            "explanation_ar": "للتحقق: 15000 + 33000 = 48000. ✓ الجواب: 15000."
          }
        ],
        "hint_en": "Group positives and negatives separately, total each group, then subtract.",
        "hint_ar": "اجمع الموجبات والسالبات كل على حدة، أوجد مجموع كل مجموعة، ثم اطرح.",
        "result_en": "15000",
        "result_ar": "15000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A hiker descends 15000 m, climbs 42000 m, descends 18000 m, then climbs 6000 m. Net altitude change?",
            "explanation_ar": "متسلق جبال ينزل 15000 م، يصعد 42000 م، ينزل 18000 م، ثم يصعد 6000 م. ما صافي التغيير في الارتفاع؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 0. Go to −15000, then +27000 (= −15000 + 42000), then +9000 (= 27000 − 18000), then +15000 (= 9000 + 6000).",
            "explanation_ar": "ابدأ من 0. انتقل إلى −15000، ثم +27000 (= −15000 + 42000)، ثم +9000 (= 27000 − 18000)، ثم +15000 (= 9000 + 6000)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Step-by-step: −15000; −15000 + 42000 = 27000; 27000 − 18000 = 9000; 9000 + 6000 = 15000.",
            "explanation_ar": "خطوة بخطوة: −15000؛ −15000 + 42000 = 27000؛ 27000 − 18000 = 9000؛ 9000 + 6000 = 15000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Final position: 15000. Answer: 15000.",
            "explanation_ar": "الموقع النهائي: 15000. الجواب: 15000."
          }
        ],
        "hint_en": "Work left to right: apply each number as a move on the number line.",
        "hint_ar": "اعمل من اليسار إلى اليمين: طبّق كل عدد كتحرك على خط الأعداد.",
        "result_en": "15000",
        "result_ar": "15000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-medium-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-add-hard-001",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "124.75 + 38.25 = ?",
    "question_ar": "124.75 + 38.25 = ؟",
    "answer": 163,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The decimals are 0.75 and 0.25. Notice that 0.75 + 0.25 = 1.00 exactly — the decimals cancel into a whole number.",
            "explanation_ar": "الأجزاء العشرية هي 0.75 و0.25. لاحظ أن 0.75 + 0.25 = 1.00 بالضبط — تلتغي الأجزاء العشرية لتعطي عدداً صحيحاً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Decimal parts: 0.75 + 0.25 = 1.00. Integer parts: 124 + 38 = 162.",
            "explanation_ar": "الأجزاء العشرية: 0.75 + 0.25 = 1.00. الأجزاء الصحيحة: 124 + 38 = 162."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine: 162 + 1 = 163. The decimal parts produced a carry of exactly 1.",
            "explanation_ar": "اجمع: 162 + 1 = 163. الأجزاء العشرية أنتجت حملاً مقداره 1 بالضبط."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is 163. So 124.75 + 38.25 = 163.",
            "explanation_ar": "الناتج هو 163. إذن 124.75 + 38.25 = 163."
          }
        ],
        "hint_en": "Look at the decimal parts first: 0.75 + 0.25 = 1. Then handle the whole numbers.",
        "hint_ar": "ابدأ بالنظر في الأجزاء العشرية: 0.75 + 0.25 = 1. ثم تعامل مع الأعداد الصحيحة.",
        "result_en": "163",
        "result_ar": "163"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split each number: 124.75 = 124 + 0.75; 38.25 = 38 + 0.25.",
            "explanation_ar": "قسّم كل عدد: 124.75 = 124 + 0.75؛ 38.25 = 38 + 0.25."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Integer parts: 124 + 38 = 162. Decimal parts: 0.75 + 0.25 = 1.00.",
            "explanation_ar": "الأجزاء الصحيحة: 124 + 38 = 162. الأجزاء العشرية: 0.75 + 0.25 = 1.00."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "162 + 1.00 = 163.",
            "explanation_ar": "162 + 1.00 = 163."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 163 − 38.25 = 124.75. ✓ Answer: 163.",
            "explanation_ar": "للتحقق: 163 − 38.25 = 124.75. ✓ الجواب: 163."
          }
        ],
        "hint_en": "Split whole parts from decimal parts, add each group, then recombine.",
        "hint_ar": "افصل الأجزاء الصحيحة عن العشرية، اجمع كل مجموعة، ثم أعد التجميع.",
        "result_en": "163",
        "result_ar": "163"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "You have a ribbon of length 124.75 cm and another of 38.25 cm. If you join them end to end, do you get a whole-number length?",
            "explanation_ar": "لديك شريط طوله 124.75 سم وآخر طوله 38.25 سم. إذا وصلتهما، هل تحصل على طول بعدد صحيح؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, start at 124.75. Move right 38 whole units to reach 162.75, then move right 0.25 more.",
            "explanation_ar": "على خط الأعداد، ابدأ من 124.75. تحرّك يميناً 38 وحدة صحيحة للوصول إلى 162.75، ثم تحرّك 0.25 إضافية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "162.75 + 0.25 = 163.00 exactly. The fractional part disappears.",
            "explanation_ar": "162.75 + 0.25 = 163.00 بالضبط. تختفي الكسور العشرية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You land exactly at 163 — a whole number. Answer: 163.",
            "explanation_ar": "تصل بالضبط إلى 163 — عدد صحيح. الجواب: 163."
          }
        ],
        "hint_en": "Move in two steps: +38 (whole), then +0.25 (decimal). Where does 162.75 + 0.25 land?",
        "hint_ar": "تحرّك على مرحلتين: +38 (عدد صحيح)، ثم +0.25 (عشري). أين يقع 162.75 + 0.25؟",
        "result_en": "163",
        "result_ar": "163"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-hard-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-add-hard-002",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "−250.5 + 89.5 + (−44) + 205 = ?",
    "question_ar": "−250.5 + 89.5 + (−44) + 205 = ؟",
    "answer": 0,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Four terms: −250.5, +89.5, −44, +205. Notice that −250.5 and +89.5 share a 0.5 decimal; they can be combined first: −250.5 + 89.5 = −161.",
            "explanation_ar": "أربعة حدود: −250.5 و+89.5 و−44 و+205. لاحظ أن −250.5 و+89.5 يشتركان في الجزء العشري 0.5؛ يمكن جمعهما أولاً: −250.5 + 89.5 = −161."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "−250.5 + 89.5: magnitudes 250.5 and 89.5, difference = 161, negative dominates → −161. Remaining: −44 and +205.",
            "explanation_ar": "−250.5 + 89.5: القيمتان المطلقتان 250.5 و89.5، الفرق = 161، السالب مهيمن ← −161. المتبقي: −44 و+205."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now add: −161 + (−44) + 205 = −205 + 205 = 0. (−161 − 44 = −205, then −205 + 205 = 0.)",
            "explanation_ar": "الآن اجمع: −161 + (−44) + 205 = −205 + 205 = 0. (−161 − 44 = −205، ثم −205 + 205 = 0.)"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Everything cancels to 0. So −250.5 + 89.5 + (−44) + 205 = 0.",
            "explanation_ar": "كل شيء يلغي بعضه ليعطي 0. إذن −250.5 + 89.5 + (−44) + 205 = 0."
          }
        ],
        "hint_en": "Pair −250.5 with +89.5 first (the 0.5 decimals cancel). Then check if the integers balance.",
        "hint_ar": "اقرن −250.5 مع +89.5 أولاً (تلغي الأجزاء العشرية). ثم تحقق إذا كانت الأعداد الصحيحة تتوازن.",
        "result_en": "0",
        "result_ar": "0"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Positives: {89.5, 205}. Negatives: {250.5, 44}.",
            "explanation_ar": "الموجبات: {89.5, 205}. السالبات: {250.5, 44}."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Positive total: 89.5 + 205 = 294.5. Negative total: 250.5 + 44 = 294.5.",
            "explanation_ar": "مجموع الموجبات: 89.5 + 205 = 294.5. مجموع السالبات: 250.5 + 44 = 294.5."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "294.5 − 294.5 = 0. The groups are equal, so they cancel perfectly.",
            "explanation_ar": "294.5 − 294.5 = 0. المجموعتان متساويتان، فتلغي إحداهما الأخرى تماماً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Both groups sum to 294.5. Net = 0. ✓ Answer: 0.",
            "explanation_ar": "كلتا المجموعتين تساوي 294.5. الصافي = 0. ✓ الجواب: 0."
          }
        ],
        "hint_en": "Total the positives (89.5 + 205) and the negatives (250.5 + 44). Do they match?",
        "hint_ar": "أوجد مجموع الموجبات (89.5 + 205) ومجموع السالبات (250.5 + 44). هل تتطابقان؟",
        "result_en": "0",
        "result_ar": "0"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A submarine dive log: descend 250.5 m, ascend 89.5 m, descend 44 m, ascend 205 m. What is the net depth change?",
            "explanation_ar": "سجل غوص غواصة: نزول 250.5 م، صعود 89.5 م، نزول 44 م، صعود 205 م. ما صافي التغيير في العمق؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 0. Move: 0 → −250.5 → −161 → −205 → 0.",
            "explanation_ar": "ابدأ من 0. تحرّك: 0 ← −250.5 ← −161 ← −205 ← 0."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "−250.5 + 89.5 = −161; −161 − 44 = −205; −205 + 205 = 0.",
            "explanation_ar": "−250.5 + 89.5 = −161؛ −161 − 44 = −205؛ −205 + 205 = 0."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You return to the surface — net change is 0. Answer: 0.",
            "explanation_ar": "عدت إلى السطح — صافي التغيير هو 0. الجواب: 0."
          }
        ],
        "hint_en": "Track each move on the number line step by step. You should return exactly to 0.",
        "hint_ar": "تتبّع كل تحرك على خط الأعداد خطوة بخطوة. يجب أن تعود بالضبط إلى 0.",
        "result_en": "0",
        "result_ar": "0"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-hard-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-add-hard-003",
    "grade": 7,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "−3700 + (−8500) + 12600 + (−2400) = ?",
    "question_ar": "−3700 + (−8500) + 12600 + (−2400) = ؟",
    "answer": -2000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Four terms: −3700, −8500, +12600, −2400. Three negatives vs. one positive — the negative side may dominate.",
            "explanation_ar": "أربعة حدود: −3700 و−8500 و+12600 و−2400. ثلاثة سالبات مقابل موجب واحد — قد تكون الجهة السالبة مهيمنة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Positive total: 12600. Negative total: 3700 + 8500 + 2400 = 14600. Negatives dominate (14600 > 12600).",
            "explanation_ar": "مجموع الموجبات: 12600. مجموع السالبات: 3700 + 8500 + 2400 = 14600. السالبات مهيمنة (14600 > 12600)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract: 14600 − 12600 = 2000. Keep the negative sign.",
            "explanation_ar": "اطرح: 14600 − 12600 = 2000. احتفظ بالإشارة السالبة."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is −2000. So −3700 + (−8500) + 12600 + (−2400) = −2000.",
            "explanation_ar": "الناتج هو −2000. إذن −3700 + (−8500) + 12600 + (−2400) = −2000."
          }
        ],
        "hint_en": "Sum the negatives (3700 + 8500 + 2400 = 14600). Compare to the positive (12600). Which is bigger?",
        "hint_ar": "اجمع السالبات (3700 + 8500 + 2400 = 14600). قارنها بالموجب (12600). أيهما أكبر؟",
        "result_en": "−2000",
        "result_ar": "−2000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Positives: {12600}. Negatives: {3700, 8500, 2400}.",
            "explanation_ar": "الموجبات: {12600}. السالبات: {3700, 8500, 2400}."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Positive total: 12600. Negative total: 3700 + 8500 = 12200, then 12200 + 2400 = 14600.",
            "explanation_ar": "مجموع الموجبات: 12600. مجموع السالبات: 3700 + 8500 = 12200، ثم 12200 + 2400 = 14600."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Net = 12600 − 14600 = −2000 (negatives exceed positives by 2000).",
            "explanation_ar": "الصافي = 12600 − 14600 = −2000 (تزيد السالبات على الموجبات بمقدار 2000)."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: −2000 + 14600 = 12600. ✓ Answer: −2000.",
            "explanation_ar": "للتحقق: −2000 + 14600 = 12600. ✓ الجواب: −2000."
          }
        ],
        "hint_en": "One positive (12600) vs. three negatives totalling 14600. The negatives win by 2000.",
        "hint_ar": "موجب واحد (12600) مقابل ثلاثة سالبات مجموعها 14600. السالبات تفوز بفارق 2000.",
        "result_en": "−2000",
        "result_ar": "−2000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A company's weekly cash flow: loses 3700 Monday, loses 8500 Tuesday, gains 12600 Wednesday, loses 2400 Thursday. Net result?",
            "explanation_ar": "التدفق النقدي الأسبوعي لشركة: خسارة 3700 الاثنين، خسارة 8500 الثلاثاء، ربح 12600 الأربعاء، خسارة 2400 الخميس. ما الناتج الصافي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Start at 0 → −3700 → −12200 → +400 → −2000.",
            "explanation_ar": "ابدأ من 0 ← −3700 ← −12200 ← +400 ← −2000."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "−3700 − 8500 = −12200; −12200 + 12600 = 400; 400 − 2400 = −2000.",
            "explanation_ar": "−3700 − 8500 = −12200؛ −12200 + 12600 = 400؛ 400 − 2400 = −2000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The company ends the week −2000. Answer: −2000.",
            "explanation_ar": "تنهي الشركة الأسبوع بـ −2000. الجواب: −2000."
          }
        ],
        "hint_en": "Move left, left, right, left on the number line. Track each position.",
        "hint_ar": "تحرّك يساراً، يساراً، يميناً، يساراً على خط الأعداد. تابع كل موقع.",
        "result_en": "−2000",
        "result_ar": "−2000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-add-hard-003",
      "upper_grade_equivalent": "g8-common-add-hard-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g7-common-sub-easy-001",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "15000 − (−8500) = ?",
    "question_ar": "15000 − (−8500) = ؟",
    "answer": 23500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The expression is 15000 − (−8500). Notice you are subtracting a negative number.",
            "explanation_ar": "التعبير هو 15000 − (−8500). لاحظ أنك تطرح عدداً سالباً."
          },
          {
            "step": 2,
            "title_en": "Apply the Negative Rule",
            "title_ar": "طبّق قاعدة السالب",
            "explanation_en": "Subtracting a negative equals adding a positive: 15000 − (−8500) = 15000 + 8500.",
            "explanation_ar": "طرح السالب يساوي جمع الموجب: 15000 − (−8500) = 15000 + 8500."
          },
          {
            "step": 3,
            "title_en": "Compute Left-to-Right",
            "title_ar": "احسب من اليسار إلى اليمين",
            "explanation_en": "Add the thousands first: 15 + 8 = 23 (thousands), so 15000 + 8000 = 23000. Then add 500: 23000 + 500 = 23500.",
            "explanation_ar": "اجمع الآلاف أولاً: 15 + 8 = 23 (آلاف)، إذن 15000 + 8000 = 23000. ثم أضف 500: 23000 + 500 = 23500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "15000 + 8500 = 23500. The answer is 23500.",
            "explanation_ar": "15000 + 8500 = 23500. الجواب هو 23500."
          }
        ],
        "hint_en": "Subtracting a negative flips to addition. Think: 15000 + 8500.",
        "hint_ar": "طرح السالب يتحول إلى جمع. فكّر: 15000 + 8500.",
        "result_en": "15000 − (−8500) = 23500",
        "result_ar": "15000 − (−8500) = 23500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite using the sign rule: 15000 − (−8500) becomes 15000 + 8500. Split 8500 into 8000 + 500.",
            "explanation_ar": "أعد الكتابة باستخدام قاعدة الإشارة: 15000 − (−8500) تصبح 15000 + 8500. قسّم 8500 إلى 8000 + 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "15000 + 8000 = 23000. Then handle the remaining 500.",
            "explanation_ar": "15000 + 8000 = 23000. ثم تعامل مع الـ 500 المتبقية."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "23000 + 500 = 23500.",
            "explanation_ar": "23000 + 500 = 23500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 23500 − 15000 = 8500, and 8500 = −(−8500). Confirmed. Answer: 23500.",
            "explanation_ar": "تحقق: 23500 − 15000 = 8500، و8500 = −(−8500). مؤكد. الجواب: 23500."
          }
        ],
        "hint_en": "Split 8500 into 8000 + 500 and add each piece to 15000.",
        "hint_ar": "قسّم 8500 إلى 8000 + 500 وأضف كل جزء إلى 15000.",
        "result_en": "15000 − (−8500) = 23500",
        "result_ar": "15000 − (−8500) = 23500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a number line. You start at 15000, and you need to subtract −8500 (a debt being removed).",
            "explanation_ar": "تخيّل خط الأعداد. تبدأ عند 15000، وتحتاج إلى طرح −8500 (دين يُزال)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On the number line, subtracting a negative means you reverse direction — instead of moving left (subtracting), you move right (adding). So move 8500 units to the right of 15000.",
            "explanation_ar": "على خط الأعداد، طرح السالب يعني عكس الاتجاه — بدلاً من التحرك يساراً (طرح)، تتحرك يميناً (جمع). إذن تحرك 8500 وحدة يميناً من 15000."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Starting at 15000, moving 8500 to the right lands you at 23500.",
            "explanation_ar": "بالبدء من 15000، والتحرك 8500 إلى اليمين، تصل إلى 23500."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The number line confirms: 15000 + 8500 = 23500. Removing a negative debt increases your total.",
            "explanation_ar": "يؤكد خط الأعداد: 15000 + 8500 = 23500. إزالة ديون سالبة تزيد مجموعك."
          }
        ],
        "hint_en": "On the number line, subtracting a negative reverses direction — you move right instead of left.",
        "hint_ar": "على خط الأعداد، طرح السالب يعكس الاتجاه — تتحرك يميناً بدلاً من اليسار.",
        "result_en": "15000 − (−8500) = 23500",
        "result_ar": "15000 − (−8500) = 23500"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-sub-easy-002",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "−6200 − 3400 = ?",
    "question_ar": "−6200 − 3400 = ؟",
    "answer": -9600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The expression is −6200 − 3400. Both operations move you further in the negative direction.",
            "explanation_ar": "التعبير هو −6200 − 3400. كلا العمليتين تنقلانك أكثر نحو الاتجاه السالب."
          },
          {
            "step": 2,
            "title_en": "Apply the Negative Rule",
            "title_ar": "طبّق قاعدة السالب",
            "explanation_en": "Both numbers are being subtracted (or are negative): −6200 − 3400 = −(6200 + 3400). Add the absolute values.",
            "explanation_ar": "كلا الرقمين يُطرحان (أو سالبان): −6200 − 3400 = −(6200 + 3400). اجمع القيم المطلقة."
          },
          {
            "step": 3,
            "title_en": "Compute Left-to-Right",
            "title_ar": "احسب من اليسار إلى اليمين",
            "explanation_en": "6200 + 3400: Add thousands first: 6 + 3 = 9 (thousands) = 9000. Then hundreds: 200 + 400 = 600. Total: 9000 + 600 = 9600.",
            "explanation_ar": "6200 + 3400: اجمع الآلاف أولاً: 6 + 3 = 9 (آلاف) = 9000. ثم المئات: 200 + 400 = 600. المجموع: 9000 + 600 = 9600."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is −9600. The answer is −9600.",
            "explanation_ar": "النتيجة هي −9600. الجواب هو −9600."
          }
        ],
        "hint_en": "Both terms are negative — add the absolute values and keep the negative sign.",
        "hint_ar": "كلا الحدّين سالبان — اجمع القيم المطلقة واحتفظ بالإشارة السالبة.",
        "result_en": "−6200 − 3400 = −9600",
        "result_ar": "−6200 − 3400 = −9600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite: −6200 − 3400 = −(6200 + 3400). Split 3400 into 3000 + 400.",
            "explanation_ar": "أعد الكتابة: −6200 − 3400 = −(6200 + 3400). قسّم 3400 إلى 3000 + 400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "6200 + 3000 = 9200. Then add 400: 9200 + 400 = 9600.",
            "explanation_ar": "6200 + 3000 = 9200. ثم أضف 400: 9200 + 400 = 9600."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Apply the negative sign: −9600.",
            "explanation_ar": "طبّق الإشارة السالبة: −9600."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: −9600 + 3400 = −6200. Confirmed. Answer: −9600.",
            "explanation_ar": "تحقق: −9600 + 3400 = −6200. مؤكد. الجواب: −9600."
          }
        ],
        "hint_en": "Factor out the negative: −(6200 + 3400), then add the positives.",
        "hint_ar": "اسحب السالب خارج القوسين: −(6200 + 3400)، ثم اجمع الموجبات.",
        "result_en": "−6200 − 3400 = −9600",
        "result_ar": "−6200 − 3400 = −9600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a diver already 6200 m below sea level. They dive another 3400 m deeper.",
            "explanation_ar": "تخيّل غوّاصاً بعمق 6200 متر تحت مستوى سطح البحر. يغوص 3400 متر أعمق."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On the number line, start at −6200. Subtracting 3400 (a positive) means moving 3400 units further left (more negative).",
            "explanation_ar": "على خط الأعداد، ابدأ عند −6200. طرح 3400 (موجب) يعني التحرك 3400 وحدة أكثر نحو اليسار (أكثر سلبية)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Moving left from −6200 by 3400 units: −6200 − 3000 = −9200, then −9200 − 400 = −9600.",
            "explanation_ar": "التحرك يساراً من −6200 بمقدار 3400 وحدة: −6200 − 3000 = −9200، ثم −9200 − 400 = −9600."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The diver ends up at −9600 m. The answer is −9600.",
            "explanation_ar": "ينتهي الغوّاص عند −9600 متر. الجواب هو −9600."
          }
        ],
        "hint_en": "Start at −6200 on the number line and move left by 3400.",
        "hint_ar": "ابدأ عند −6200 على خط الأعداد وتحرك يساراً بمقدار 3400.",
        "result_en": "−6200 − 3400 = −9600",
        "result_ar": "−6200 − 3400 = −9600"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-sub-easy-003",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "−4500 − (−11000) = ?",
    "question_ar": "−4500 − (−11000) = ؟",
    "answer": 6500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The expression is −4500 − (−11000). You are subtracting a negative number from a negative number.",
            "explanation_ar": "التعبير هو −4500 − (−11000). تطرح عدداً سالباً من عدد سالب."
          },
          {
            "step": 2,
            "title_en": "Apply the Negative Rule",
            "title_ar": "طبّق قاعدة السالب",
            "explanation_en": "Subtracting a negative equals adding a positive: −4500 − (−11000) = −4500 + 11000.",
            "explanation_ar": "طرح السالب يساوي جمع الموجب: −4500 − (−11000) = −4500 + 11000."
          },
          {
            "step": 3,
            "title_en": "Compute Left-to-Right",
            "title_ar": "احسب من اليسار إلى اليمين",
            "explanation_en": "−4500 + 11000: The larger absolute value is 11000 (positive), so the result is positive. 11000 − 4500 = 6500.",
            "explanation_ar": "−4500 + 11000: القيمة المطلقة الأكبر هي 11000 (موجبة)، لذا النتيجة موجبة. 11000 − 4500 = 6500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "−4500 + 11000 = 6500. The answer is 6500.",
            "explanation_ar": "−4500 + 11000 = 6500. الجواب هو 6500."
          }
        ],
        "hint_en": "Flip the sign of −11000 to get +11000, then compute −4500 + 11000.",
        "hint_ar": "اقلب إشارة −11000 لتحصل على +11000، ثم احسب −4500 + 11000.",
        "result_en": "−4500 − (−11000) = 6500",
        "result_ar": "−4500 − (−11000) = 6500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite using sign rule: −4500 − (−11000) = −4500 + 11000. Split 11000 into 4500 + 6500.",
            "explanation_ar": "أعد الكتابة باستخدام قاعدة الإشارة: −4500 − (−11000) = −4500 + 11000. قسّم 11000 إلى 4500 + 6500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "−4500 + 4500 = 0. The remaining part is 6500.",
            "explanation_ar": "−4500 + 4500 = 0. الجزء المتبقي هو 6500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "0 + 6500 = 6500.",
            "explanation_ar": "0 + 6500 = 6500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 6500 + 4500 = 11000 = −(−11000), and 6500 − 11000 = −4500. Confirmed. Answer: 6500.",
            "explanation_ar": "تحقق: 6500 + 4500 = 11000 = −(−11000)، و6500 − 11000 = −4500. مؤكد. الجواب: 6500."
          }
        ],
        "hint_en": "Use −4500 + 4500 = 0 to cancel, then you are left with the remaining portion of 11000.",
        "hint_ar": "استخدم −4500 + 4500 = 0 للإلغاء، ثم يتبقى لك الجزء المتبقي من 11000.",
        "result_en": "−4500 − (−11000) = 6500",
        "result_ar": "−4500 − (−11000) = 6500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine you are at floor −4500 of an underground building. A debt of −11000 is cancelled, sending you upward.",
            "explanation_ar": "تخيّل أنك في الطابق −4500 من مبنى تحت الأرض. دين بقيمة −11000 يُلغى، فترتفع إلى الأعلى."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On the number line, start at −4500. Subtracting −11000 reverses direction — you move 11000 units to the right (positive direction).",
            "explanation_ar": "على خط الأعداد، ابدأ عند −4500. طرح −11000 يعكس الاتجاه — تتحرك 11000 وحدة إلى اليمين (الاتجاه الموجب)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Moving right from −4500 by 4500 lands at 0, then 6500 more reaches 6500.",
            "explanation_ar": "التحرك يميناً من −4500 بمقدار 4500 يصل إلى 0، ثم 6500 آخر يصل إلى 6500."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You end up at 6500 on the number line. The answer is 6500.",
            "explanation_ar": "تنتهي عند 6500 على خط الأعداد. الجواب هو 6500."
          }
        ],
        "hint_en": "Start at −4500, move right 11000 steps — you cross zero and land at 6500.",
        "hint_ar": "ابدأ عند −4500، تحرك يميناً 11000 خطوة — تتجاوز الصفر وتصل إلى 6500.",
        "result_en": "−4500 − (−11000) = 6500",
        "result_ar": "−4500 − (−11000) = 6500"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-sub-medium-001",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "45000 − 18600 − 12400 = ?",
    "question_ar": "45000 − 18600 − 12400 = ؟",
    "answer": 14000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Three-term subtraction: 45000 − 18600 − 12400. All numbers are positive; subtract left-to-right.",
            "explanation_ar": "طرح ثلاثة حدود: 45000 − 18600 − 12400. كل الأرقام موجبة؛ اطرح من اليسار إلى اليمين."
          },
          {
            "step": 2,
            "title_en": "Spot the Companion",
            "title_ar": "اكتشف المرافق",
            "explanation_en": "Notice 18600 + 12400 = 31000. These two subtracted values combine neatly.",
            "explanation_ar": "لاحظ أن 18600 + 12400 = 31000. هاتان القيمتان المطروحتان تتحدان بسلاسة."
          },
          {
            "step": 3,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Group: 45000 − (18600 + 12400) = 45000 − 31000. Now subtract: 45000 − 31000 = 14000.",
            "explanation_ar": "اجمع: 45000 − (18600 + 12400) = 45000 − 31000. اطرح الآن: 45000 − 31000 = 14000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "45000 − 31000 = 14000. The answer is 14000.",
            "explanation_ar": "45000 − 31000 = 14000. الجواب هو 14000."
          }
        ],
        "hint_en": "Add the two subtracted values first: 18600 + 12400 = 31000, then subtract from 45000.",
        "hint_ar": "اجمع القيمتين المطروحتين أولاً: 18600 + 12400 = 31000، ثم اطرح من 45000.",
        "result_en": "45000 − 18600 − 12400 = 14000",
        "result_ar": "45000 − 18600 − 12400 = 14000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite as 45000 − 18600 − 12400. Notice 18600 = 18000 + 600 and 12400 = 12000 + 400.",
            "explanation_ar": "أعد الكتابة كـ 45000 − 18600 − 12400. لاحظ أن 18600 = 18000 + 600 و12400 = 12000 + 400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Thousands: 45000 − 18000 − 12000 = 15000. Hundreds: 600 + 400 = 1000.",
            "explanation_ar": "الآلاف: 45000 − 18000 − 12000 = 15000. المئات: 600 + 400 = 1000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15000 − 1000 = 14000.",
            "explanation_ar": "15000 − 1000 = 14000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 14000 + 18600 + 12400 = 14000 + 31000 = 45000. Confirmed. Answer: 14000.",
            "explanation_ar": "تحقق: 14000 + 18600 + 12400 = 14000 + 31000 = 45000. مؤكد. الجواب: 14000."
          }
        ],
        "hint_en": "Separate thousands and hundreds, subtract each group, then combine.",
        "hint_ar": "افصل الآلاف والمئات، اطرح كل مجموعة، ثم اجمع.",
        "result_en": "45000 − 18600 − 12400 = 14000",
        "result_ar": "45000 − 18600 − 12400 = 14000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A warehouse starts with 45000 items. Workers remove 18600 items, then 12400 more.",
            "explanation_ar": "مستودع يبدأ بـ 45000 قطعة. يزيل العمال 18600 قطعة، ثم 12400 أخرى."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On the number line, start at 45000, move left 18600 (land at 26400), then move left 12400 more.",
            "explanation_ar": "على خط الأعداد، ابدأ عند 45000، تحرك يساراً 18600 (تصل إلى 26400)، ثم تحرك يساراً 12400 آخر."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Total leftward movement: 18600 + 12400 = 31000 steps. 45000 − 31000 = 14000.",
            "explanation_ar": "إجمالي التحرك نحو اليسار: 18600 + 12400 = 31000 خطوة. 45000 − 31000 = 14000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The warehouse has 14000 items remaining. The answer is 14000.",
            "explanation_ar": "يتبقى في المستودع 14000 قطعة. الجواب هو 14000."
          }
        ],
        "hint_en": "Combine the two moves left: 18600 + 12400 = 31000, then subtract once from 45000.",
        "hint_ar": "اجمع الحركتين نحو اليسار: 18600 + 12400 = 31000، ثم اطرح مرة واحدة من 45000.",
        "result_en": "45000 − 18600 − 12400 = 14000",
        "result_ar": "45000 − 18600 − 12400 = 14000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-medium-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-sub-medium-002",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "30000 − (−5500) − 14500 = ?",
    "question_ar": "30000 − (−5500) − 14500 = ؟",
    "answer": 21000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The expression is 30000 − (−5500) − 14500. There is a subtracted negative in the middle.",
            "explanation_ar": "التعبير هو 30000 − (−5500) − 14500. يوجد سالب مطروح في المنتصف."
          },
          {
            "step": 2,
            "title_en": "Apply the Negative Rule",
            "title_ar": "طبّق قاعدة السالب",
            "explanation_en": "Convert: 30000 − (−5500) − 14500 = 30000 + 5500 − 14500.",
            "explanation_ar": "حوّل: 30000 − (−5500) − 14500 = 30000 + 5500 − 14500."
          },
          {
            "step": 3,
            "title_en": "Compute Left-to-Right",
            "title_ar": "احسب من اليسار إلى اليمين",
            "explanation_en": "30000 + 5500 = 35500. Then 35500 − 14500 = 21000.",
            "explanation_ar": "30000 + 5500 = 35500. ثم 35500 − 14500 = 21000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 21000.",
            "explanation_ar": "الجواب هو 21000."
          }
        ],
        "hint_en": "First flip −(−5500) to +5500, then work left to right: 30000 + 5500 − 14500.",
        "hint_ar": "أولاً اقلب −(−5500) إلى +5500، ثم اعمل من اليسار إلى اليمين: 30000 + 5500 − 14500.",
        "result_en": "30000 − (−5500) − 14500 = 21000",
        "result_ar": "30000 − (−5500) − 14500 = 21000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite: 30000 + 5500 − 14500. Group additions and subtractions: (30000 + 5500) − 14500.",
            "explanation_ar": "أعد الكتابة: 30000 + 5500 − 14500. جمّع الجمع والطرح: (30000 + 5500) − 14500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "30000 + 5500 = 35500. Now subtract 14500.",
            "explanation_ar": "30000 + 5500 = 35500. اطرح الآن 14500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "35500 − 14500 = 21000. (35 − 14 = 21 thousands, 500 − 500 = 0.)",
            "explanation_ar": "35500 − 14500 = 21000. (35 − 14 = 21 آلاف، 500 − 500 = 0.)"
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 21000 + 14500 − 5500 = 35500 − 5500 = 30000. Confirmed. Answer: 21000.",
            "explanation_ar": "تحقق: 21000 + 14500 − 5500 = 35500 − 5500 = 30000. مؤكد. الجواب: 21000."
          }
        ],
        "hint_en": "After converting, group the positive additions (30000 + 5500), then subtract 14500.",
        "hint_ar": "بعد التحويل، اجمع الجمعيات الموجبة (30000 + 5500)، ثم اطرح 14500.",
        "result_en": "30000 − (−5500) − 14500 = 21000",
        "result_ar": "30000 − (−5500) − 14500 = 21000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Start with 30000 points in a game. A penalty is cancelled (+5500), but then 14500 points are deducted.",
            "explanation_ar": "ابدأ بـ 30000 نقطة في لعبة. يُلغى غرامة (+5500)، ثم تُخصم 14500 نقطة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Number line: Start at 30000. Move right 5500 (cancelling the negative) to reach 35500. Then move left 14500.",
            "explanation_ar": "خط الأعداد: ابدأ عند 30000. تحرك يميناً 5500 (إلغاء السالب) للوصول إلى 35500. ثم تحرك يساراً 14500."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "35500 − 14500: the hundreds cancel (500 − 500 = 0) and 35000 − 14000 = 21000.",
            "explanation_ar": "35500 − 14500: المئات تلغي بعضها (500 − 500 = 0) و35000 − 14000 = 21000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Final position: 21000. The answer is 21000.",
            "explanation_ar": "الموقع النهائي: 21000. الجواب هو 21000."
          }
        ],
        "hint_en": "Plot three moves on the number line: start 30000, right +5500, left −14500.",
        "hint_ar": "ارسم ثلاث حركات على خط الأعداد: ابدأ 30000، يميناً +5500، يساراً −14500.",
        "result_en": "30000 − (−5500) − 14500 = 21000",
        "result_ar": "30000 − (−5500) − 14500 = 21000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-medium-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-sub-medium-003",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "−2000 − (−9000) − 4000 = ?",
    "question_ar": "−2000 − (−9000) − 4000 = ؟",
    "answer": 3000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The expression is −2000 − (−9000) − 4000. There are three terms; one subtracted negative must be converted.",
            "explanation_ar": "التعبير هو −2000 − (−9000) − 4000. يوجد ثلاثة حدود؛ يجب تحويل سالب مطروح."
          },
          {
            "step": 2,
            "title_en": "Apply the Negative Rule",
            "title_ar": "طبّق قاعدة السالب",
            "explanation_en": "−(−9000) = +9000. Rewrite as: −2000 + 9000 − 4000.",
            "explanation_ar": "−(−9000) = +9000. أعد الكتابة كـ: −2000 + 9000 − 4000."
          },
          {
            "step": 3,
            "title_en": "Compute Left-to-Right",
            "title_ar": "احسب من اليسار إلى اليمين",
            "explanation_en": "−2000 + 9000 = 7000. Then 7000 − 4000 = 3000.",
            "explanation_ar": "−2000 + 9000 = 7000. ثم 7000 − 4000 = 3000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The answer is 3000.",
            "explanation_ar": "الجواب هو 3000."
          }
        ],
        "hint_en": "Convert −(−9000) to +9000 first, then evaluate −2000 + 9000 − 4000 from left to right.",
        "hint_ar": "حوّل −(−9000) إلى +9000 أولاً، ثم احسب −2000 + 9000 − 4000 من اليسار إلى اليمين.",
        "result_en": "−2000 − (−9000) − 4000 = 3000",
        "result_ar": "−2000 − (−9000) − 4000 = 3000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite: −2000 + 9000 − 4000. Separate positives from negatives: positives = 9000; negatives = 2000 + 4000 = 6000.",
            "explanation_ar": "أعد الكتابة: −2000 + 9000 − 4000. افصل الموجبات عن السالبات: الموجبات = 9000؛ السالبات = 2000 + 4000 = 6000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Sum of negatives: −(2000 + 4000) = −6000. Sum of positives: 9000.",
            "explanation_ar": "مجموع السالبات: −(2000 + 4000) = −6000. مجموع الموجبات: 9000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "9000 − 6000 = 3000.",
            "explanation_ar": "9000 − 6000 = 3000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3000 + 2000 + 4000 = 9000 = −(−9000). Confirmed. Answer: 3000.",
            "explanation_ar": "تحقق: 3000 + 2000 + 4000 = 9000 = −(−9000). مؤكد. الجواب: 3000."
          }
        ],
        "hint_en": "Group all negatives together: −(2000 + 4000) = −6000, then 9000 − 6000 = 3000.",
        "hint_ar": "اجمع كل السالبات معاً: −(2000 + 4000) = −6000، ثم 9000 − 6000 = 3000.",
        "result_en": "−2000 − (−9000) − 4000 = 3000",
        "result_ar": "−2000 − (−9000) − 4000 = 3000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A bank account starts at −2000. A debt of −9000 is forgiven (moves right), then a fee of 4000 is charged (moves left).",
            "explanation_ar": "حساب بنكي يبدأ عند −2000. يُغفر دين −9000 (يتحرك يميناً)، ثم تُفرض رسوم 4000 (يتحرك يساراً)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Number line: start at −2000. Move right 9000 (removing the −9000 debt), land at 7000. Then move left 4000.",
            "explanation_ar": "خط الأعداد: ابدأ عند −2000. تحرك يميناً 9000 (إزالة الدين −9000)، تصل إلى 7000. ثم تحرك يساراً 4000."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "At 7000, move left 4000: 7000 − 4000 = 3000.",
            "explanation_ar": "عند 7000، تحرك يساراً 4000: 7000 − 4000 = 3000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Final balance: 3000. The answer is 3000.",
            "explanation_ar": "الرصيد النهائي: 3000. الجواب هو 3000."
          }
        ],
        "hint_en": "Two moves: right 9000 from −2000 reaches 7000; left 4000 from 7000 reaches 3000.",
        "hint_ar": "حركتان: يميناً 9000 من −2000 تصل إلى 7000؛ يساراً 4000 من 7000 تصل إلى 3000.",
        "result_en": "−2000 − (−9000) − 4000 = 3000",
        "result_ar": "−2000 − (−9000) − 4000 = 3000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-medium-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-sub-hard-001",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "250.375 − 125.375 = ?",
    "question_ar": "250.375 − 125.375 = ؟",
    "answer": 125,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both numbers share the same decimal part: .375. This is a key observation.",
            "explanation_ar": "كلا الرقمين يشتركان في نفس الجزء العشري: .375. هذه ملاحظة أساسية."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Since the decimal parts are identical, they cancel: .375 − .375 = 0. Only the integer parts remain.",
            "explanation_ar": "بما أن الأجزاء العشرية متطابقة، فإنها تلغي بعضها: .375 − .375 = 0. يبقى فقط الجزء الصحيح."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the integer parts: 250 − 125 = 125.",
            "explanation_ar": "اطرح الأجزاء الصحيحة: 250 − 125 = 125."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "125 + 0 = 125. The answer is the integer 125.",
            "explanation_ar": "125 + 0 = 125. الجواب هو العدد الصحيح 125."
          }
        ],
        "hint_en": "The .375 decimals are the same in both numbers — they cancel perfectly, leaving only 250 − 125.",
        "hint_ar": "الأعشار .375 متطابقة في كلا الرقمين — تلغي بعضها تماماً، فيتبقى فقط 250 − 125.",
        "result_en": "250.375 − 125.375 = 125",
        "result_ar": "250.375 − 125.375 = 125"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split each number into integer and decimal: 250.375 = 250 + 0.375 and 125.375 = 125 + 0.375.",
            "explanation_ar": "قسّم كل رقم إلى جزء صحيح وعشري: 250.375 = 250 + 0.375 و125.375 = 125 + 0.375."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract integers: 250 − 125 = 125. Subtract decimals: 0.375 − 0.375 = 0.",
            "explanation_ar": "اطرح الأعداد الصحيحة: 250 − 125 = 125. اطرح الأعشار: 0.375 − 0.375 = 0."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "125 + 0 = 125.",
            "explanation_ar": "125 + 0 = 125."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 125 + 125.375 = 250.375. Confirmed. Answer: 125.",
            "explanation_ar": "تحقق: 125 + 125.375 = 250.375. مؤكد. الجواب: 125."
          }
        ],
        "hint_en": "Separate integer and decimal parts; the decimals cancel, leaving a clean integer subtraction.",
        "hint_ar": "افصل الجزء الصحيح عن العشري؛ الأعشار تلغي بعضها، فيتبقى طرح أعداد صحيحة نظيف.",
        "result_en": "250.375 − 125.375 = 125",
        "result_ar": "250.375 − 125.375 = 125"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Two runners finish a race. Runner A ran 250.375 km total; Runner B ran 125.375 km. How much further did A run?",
            "explanation_ar": "عدّاءان ينهيان سباقاً. ركض العدّاء أ إجمالاً 250.375 كم؛ ركض العدّاء ب 125.375 كم. بكم تفوّق أ؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On the number line, both numbers have the same decimal .375. Picture both landing on the same fraction mark — only their integer positions differ.",
            "explanation_ar": "على خط الأعداد، كلا الرقمين لهما نفس العشري .375. تخيّل كليهما يقعان على نفس العلامة الكسرية — يختلف فقط موقعهما الصحيح."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The gap between 125.375 and 250.375 is exactly 125 integer units — the decimal part contributes nothing to the difference.",
            "explanation_ar": "الفجوة بين 125.375 و250.375 هي بالضبط 125 وحدة صحيحة — لا يُسهم الجزء العشري في الفرق."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Runner A ran 125 km further. The answer is 125.",
            "explanation_ar": "ركض العدّاء أ 125 كم أكثر. الجواب هو 125."
          }
        ],
        "hint_en": "Both numbers sit at the same .375 tick mark — just count the integer distance between them.",
        "hint_ar": "كلا الرقمين يجلسان على نفس علامة .375 — فقط احسب المسافة الصحيحة بينهما.",
        "result_en": "250.375 − 125.375 = 125",
        "result_ar": "250.375 − 125.375 = 125"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-hard-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-sub-hard-002",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "1000.6 − 437.6 − (−62) = ?",
    "question_ar": "1000.6 − 437.6 − (−62) = ؟",
    "answer": 625,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The expression has a decimal subtraction and a subtracted negative: 1000.6 − 437.6 − (−62).",
            "explanation_ar": "التعبير يحتوي على طرح عشري وسالب مطروح: 1000.6 − 437.6 − (−62)."
          },
          {
            "step": 2,
            "title_en": "Apply the Negative Rule",
            "title_ar": "طبّق قاعدة السالب",
            "explanation_en": "Convert − (−62) to +62: expression becomes 1000.6 − 437.6 + 62.",
            "explanation_ar": "حوّل −(−62) إلى +62: يصبح التعبير 1000.6 − 437.6 + 62."
          },
          {
            "step": 3,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "1000.6 − 437.6: the decimals (.6 − .6 = 0) cancel, giving 1000 − 437 = 563. Then 563 + 62 = 625.",
            "explanation_ar": "1000.6 − 437.6: الأعشار (.6 − .6 = 0) تلغي بعضها، فيعطي 1000 − 437 = 563. ثم 563 + 62 = 625."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "563 + 62 = 625. The answer is 625.",
            "explanation_ar": "563 + 62 = 625. الجواب هو 625."
          }
        ],
        "hint_en": "The .6 decimals cancel in the first subtraction. Then add 62 to the integer result.",
        "hint_ar": "الأعشار .6 تلغي بعضها في الطرح الأول. ثم أضف 62 إلى النتيجة الصحيحة.",
        "result_en": "1000.6 − 437.6 − (−62) = 625",
        "result_ar": "1000.6 − 437.6 − (−62) = 625"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite: 1000.6 − 437.6 + 62. Split 1000.6 and 437.6 into integer + decimal parts: (1000 + 0.6) − (437 + 0.6) + 62.",
            "explanation_ar": "أعد الكتابة: 1000.6 − 437.6 + 62. قسّم 1000.6 و437.6 إلى جزء صحيح وعشري: (1000 + 0.6) − (437 + 0.6) + 62."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Decimals: 0.6 − 0.6 = 0. Integers: 1000 − 437 = 563.",
            "explanation_ar": "الأعشار: 0.6 − 0.6 = 0. الأعداد الصحيحة: 1000 − 437 = 563."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "563 + 0 + 62 = 625.",
            "explanation_ar": "563 + 0 + 62 = 625."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 625 + 437.6 − 62 = 1062.6 − 62 = 1000.6. Confirmed. Answer: 625.",
            "explanation_ar": "تحقق: 625 + 437.6 − 62 = 1062.6 − 62 = 1000.6. مؤكد. الجواب: 625."
          }
        ],
        "hint_en": "Separate decimals from integers. The .6 parts cancel, and then you add the 62 integer bonus.",
        "hint_ar": "افصل الأعشار عن الأعداد الصحيحة. أجزاء .6 تلغي بعضها، ثم تضيف مكافأة 62 الصحيحة.",
        "result_en": "1000.6 − 437.6 − (−62) = 625",
        "result_ar": "1000.6 − 437.6 − (−62) = 625"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A tank holds 1000.6 litres. 437.6 litres are drained; then a valve reverses to add back 62 litres.",
            "explanation_ar": "خزان يحتوي على 1000.6 لتر. يُصرف 437.6 لتر؛ ثم تُعكس صمامة لإعادة 62 لتر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Number line: Start at 1000.6. Move left 437.6 — the .6 ticks cancel, landing cleanly at 563. Then move right 62.",
            "explanation_ar": "خط الأعداد: ابدأ عند 1000.6. تحرك يساراً 437.6 — علامات .6 تلغي بعضها، فتصل بدقة إلى 563. ثم تحرك يميناً 62."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From 563, moving right 62: 563 + 60 = 623, then +2 = 625.",
            "explanation_ar": "من 563، التحرك يميناً 62: 563 + 60 = 623، ثم +2 = 625."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The tank ends with 625 litres, which is a whole number. The answer is 625.",
            "explanation_ar": "ينتهي الخزان بـ 625 لتراً، وهو عدد صحيح. الجواب هو 625."
          }
        ],
        "hint_en": "The .6 cancels when you subtract 437.6 from 1000.6. You land on a whole number, then add 62.",
        "hint_ar": "تلغي .6 عند طرح 437.6 من 1000.6. تصل إلى عدد صحيح، ثم تضيف 62.",
        "result_en": "1000.6 − 437.6 − (−62) = 625",
        "result_ar": "1000.6 − 437.6 − (−62) = 625"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-hard-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-sub-hard-003",
    "grade": 7,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "−300.75 − (−800.75) − 200 = ?",
    "question_ar": "−300.75 − (−800.75) − 200 = ؟",
    "answer": 300,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The expression is −300.75 − (−800.75) − 200. Both decimals share .75 and one subtracted negative must be converted.",
            "explanation_ar": "التعبير هو −300.75 − (−800.75) − 200. كلا الأعشار تشتركان في .75 ويجب تحويل سالب مطروح."
          },
          {
            "step": 2,
            "title_en": "Apply the Negative Rule",
            "title_ar": "طبّق قاعدة السالب",
            "explanation_en": "−(−800.75) = +800.75. Rewrite: −300.75 + 800.75 − 200.",
            "explanation_ar": "−(−800.75) = +800.75. أعد الكتابة: −300.75 + 800.75 − 200."
          },
          {
            "step": 3,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "−300.75 + 800.75: decimals cancel (.75 − .75 = 0), leaving −300 + 800 = 500. Then 500 − 200 = 300.",
            "explanation_ar": "−300.75 + 800.75: الأعشار تلغي بعضها (.75 − .75 = 0)، ويتبقى −300 + 800 = 500. ثم 500 − 200 = 300."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "500 − 200 = 300. The answer is 300.",
            "explanation_ar": "500 − 200 = 300. الجواب هو 300."
          }
        ],
        "hint_en": "After converting −(−800.75) to +800.75, the .75 decimals cancel and you compute −300 + 800 − 200.",
        "hint_ar": "بعد تحويل −(−800.75) إلى +800.75، تلغي أعشار .75 بعضها وتحسب −300 + 800 − 200.",
        "result_en": "−300.75 − (−800.75) − 200 = 300",
        "result_ar": "−300.75 − (−800.75) − 200 = 300"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite: −300.75 + 800.75 − 200. Separate each decimal number: −300.75 = −300 − 0.75 and 800.75 = 800 + 0.75.",
            "explanation_ar": "أعد الكتابة: −300.75 + 800.75 − 200. افصل كل رقم عشري: −300.75 = −300 − 0.75 و800.75 = 800 + 0.75."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Decimals: −0.75 + 0.75 = 0. Integers: −300 + 800 − 200 = 300.",
            "explanation_ar": "الأعشار: −0.75 + 0.75 = 0. الأعداد الصحيحة: −300 + 800 − 200 = 300."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "300 + 0 = 300.",
            "explanation_ar": "300 + 0 = 300."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 300 + 300.75 + 200 = 800.75. Since −(−800.75) = 800.75, this checks out. Answer: 300.",
            "explanation_ar": "تحقق: 300 + 300.75 + 200 = 800.75. بما أن −(−800.75) = 800.75، هذا صحيح. الجواب: 300."
          }
        ],
        "hint_en": "Split into integers and decimals. The ±0.75 pair cancels, then solve −300 + 800 − 200.",
        "hint_ar": "قسّم إلى أعداد صحيحة وأعشار. الزوج ±0.75 يلغي بعضه، ثم احلّ −300 + 800 − 200.",
        "result_en": "−300.75 − (−800.75) − 200 = 300",
        "result_ar": "−300.75 − (−800.75) − 200 = 300"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A submarine is at depth −300.75 m. A buoy at −800.75 m is released and pulls the submarine upward; then the sub dives 200 m more.",
            "explanation_ar": "غوّاصة عند عمق −300.75 متر. عوّامة عند −800.75 متر تُفرج عنها وترفع الغوّاصة للأعلى؛ ثم تغوص 200 متر أكثر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Number line: start at −300.75. Subtracting −800.75 means moving right 800.75. The .75 ticks match perfectly and cancel, landing at −300 + 800 = 500. Then move left 200.",
            "explanation_ar": "خط الأعداد: ابدأ عند −300.75. طرح −800.75 يعني التحرك يميناً 800.75. علامات .75 تتطابق وتلغي بعضها، تصل إلى −300 + 800 = 500. ثم تحرك يساراً 200."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "At 500, move left 200: 500 − 200 = 300.",
            "explanation_ar": "عند 500، تحرك يساراً 200: 500 − 200 = 300."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The submarine ends at 300 m (above sea level). The answer is 300.",
            "explanation_ar": "تنتهي الغوّاصة عند 300 متر (فوق مستوى سطح البحر). الجواب هو 300."
          }
        ],
        "hint_en": "The .75 parts cancel when adding −300.75 and +800.75. You land on 500, then subtract 200.",
        "hint_ar": "أجزاء .75 تلغي بعضها عند جمع −300.75 و+800.75. تصل إلى 500، ثم تطرح 200.",
        "result_en": "−300.75 − (−800.75) − 200 = 300",
        "result_ar": "−300.75 − (−800.75) − 200 = 300"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-sub-hard-003",
      "upper_grade_equivalent": "g8-common-sub-hard-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g7-common-mul-easy-001",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "1250 × 8 = ?",
    "question_ar": "1250 × 8 = ؟",
    "answer": 10000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 1250 ends in two zeros and 8 is a single digit. Left-to-right: first multiply 1 (thousands) × 8 = 8000, then 2 (hundreds) × 8 = 1600, then 5 (tens) × 8 = 400, then 0 (units) × 8 = 0.",
            "explanation_ar": "لاحظ أن 1250 تنتهي بصفرين وأن 8 رقم واحد. من اليسار لليمين: اضرب أولاً 1 (ألوف) × 8 = 8000، ثم 2 (مئات) × 8 = 1600، ثم 5 (عشرات) × 8 = 400، ثم 0 (وحدات) × 8 = 0."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Partial products from left to right: 1000 × 8 = 8000; 200 × 8 = 1600; 50 × 8 = 400; 0 × 8 = 0.",
            "explanation_ar": "الحاصلات الجزئية من اليسار إلى اليمين: 1000 × 8 = 8000؛ 200 × 8 = 1600؛ 50 × 8 = 400؛ 0 × 8 = 0."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sum the partial products left to right: 8000 + 1600 = 9600, then 9600 + 400 = 10000, then 10000 + 0 = 10000.",
            "explanation_ar": "اجمع الحاصلات الجزئية من اليسار إلى اليمين: 8000 + 1600 = 9600، ثم 9600 + 400 = 10000، ثم 10000 + 0 = 10000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The total is 10000. So 1250 × 8 = 10000.",
            "explanation_ar": "المجموع هو 10000. إذن 1250 × 8 = 10000."
          }
        ],
        "hint_en": "Break 1250 into 1000 + 200 + 50 and multiply each piece by 8, then add.",
        "hint_ar": "قسّم 1250 إلى 1000 + 200 + 50 واضرب كل جزء في 8، ثم اجمع.",
        "result_en": "1250 × 8 = 10000",
        "result_ar": "1250 × 8 = 10000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 1250 into its place-value parts: 1250 = 1000 + 200 + 50 + 0.",
            "explanation_ar": "قسّم 1250 إلى أجزاء القيمة المكانية: 1250 = 1000 + 200 + 50 + 0."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Multiply each part by 8: 1000 × 8 = 8000; 200 × 8 = 1600; 50 × 8 = 400; 0 × 8 = 0.",
            "explanation_ar": "اضرب كل جزء في 8: 1000 × 8 = 8000؛ 200 × 8 = 1600؛ 50 × 8 = 400؛ 0 × 8 = 0."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add all partial products: 8000 + 1600 + 400 + 0 = 10000.",
            "explanation_ar": "اجمع جميع الحاصلات الجزئية: 8000 + 1600 + 400 + 0 = 10000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 1250 × 8 = 10000. Since 1250 is half of 2500 and 2500 × 4 = 10000, this confirms our answer.",
            "explanation_ar": "تحقق: 1250 × 8 = 10000. بما أن 1250 هو نصف 2500 و2500 × 4 = 10000، هذا يؤكد إجابتنا."
          }
        ],
        "hint_en": "Think of 1250 as 1000 + 250, then multiply each by 8.",
        "hint_ar": "فكّر في 1250 على أنها 1000 + 250، ثم اضرب كلاً منهما في 8.",
        "result_en": "1250 × 8 = 10000",
        "result_ar": "1250 × 8 = 10000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 8 large boxes, each holding 1250 marbles. How many marbles in total?",
            "explanation_ar": "تخيّل 8 صناديق كبيرة، كل صندوق يحتوي على 1250 كرة زجاجية. كم عدد الكرات الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle with width 8 and length 1250. Divide the length into sections: 1000 | 200 | 50. Each section's area = that length × 8.",
            "explanation_ar": "ارسم مستطيلاً بعرض 8 وطول 1250. قسّم الطول إلى أقسام: 1000 | 200 | 50. مساحة كل قسم = ذلك الطول × 8."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Section areas: 1000 × 8 = 8000; 200 × 8 = 1600; 50 × 8 = 400. The whole rectangle's area is the sum of all sections.",
            "explanation_ar": "مساحات الأقسام: 1000 × 8 = 8000؛ 200 × 8 = 1600؛ 50 × 8 = 400. مساحة المستطيل الكامل هي مجموع جميع الأقسام."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total area = 8000 + 1600 + 400 = 10000. So 8 boxes × 1250 marbles = 10000 marbles.",
            "explanation_ar": "المساحة الإجمالية = 8000 + 1600 + 400 = 10000. إذن 8 صناديق × 1250 كرة = 10000 كرة."
          }
        ],
        "hint_en": "Picture a rectangle 8 wide and 1250 long, split into three color-coded strips.",
        "hint_ar": "تخيّل مستطيلاً بعرض 8 وطول 1250، مقسّماً إلى ثلاثة شرائط ملونة.",
        "result_en": "1250 × 8 = 10000",
        "result_ar": "1250 × 8 = 10000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-mul-easy-002",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "3400 × 20 = ?",
    "question_ar": "3400 × 20 = ؟",
    "answer": 68000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 3400 = 34 × 100 and 20 = 2 × 10. We can first compute 34 × 2 = 68, then attach the three trailing zeros (100 × 10 = 1000).",
            "explanation_ar": "لاحظ أن 3400 = 34 × 100 و20 = 2 × 10. يمكننا أولاً حساب 34 × 2 = 68، ثم إضافة الأصفار الثلاثة اللاحقة (100 × 10 = 1000)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Core multiplication: 34 × 2 = 68. Count trailing zeros in 3400 (two) and in 20 (one), giving three zeros total.",
            "explanation_ar": "الضرب الأساسي: 34 × 2 = 68. عدّ الأصفار اللاحقة في 3400 (اثنان) وفي 20 (واحد)، ما يعطي ثلاثة أصفار إجمالاً."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Attach three zeros to 68: 68 → 68000.",
            "explanation_ar": "أضف ثلاثة أصفار إلى 68: 68 ← 68000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3400 × 20 = 68000.",
            "explanation_ar": "3400 × 20 = 68000."
          }
        ],
        "hint_en": "Multiply 34 × 2 first, then add three zeros for the 100 and 10 in the original numbers.",
        "hint_ar": "اضرب 34 × 2 أولاً، ثم أضف ثلاثة أصفار لـ 100 و10 في الأرقام الأصلية.",
        "result_en": "3400 × 20 = 68000",
        "result_ar": "3400 × 20 = 68000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 3400 into place-value parts: 3400 = 3000 + 400.",
            "explanation_ar": "قسّم 3400 إلى أجزاء القيمة المكانية: 3400 = 3000 + 400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Multiply each part by 20: 3000 × 20 = 60000; 400 × 20 = 8000.",
            "explanation_ar": "اضرب كل جزء في 20: 3000 × 20 = 60000؛ 400 × 20 = 8000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add partial products: 60000 + 8000 = 68000.",
            "explanation_ar": "اجمع الحاصلات الجزئية: 60000 + 8000 = 68000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3400 × 20 = 3400 × 2 × 10 = 6800 × 10 = 68000. Confirmed.",
            "explanation_ar": "تحقق: 3400 × 20 = 3400 × 2 × 10 = 6800 × 10 = 68000. مؤكد."
          }
        ],
        "hint_en": "Split 3400 into 3000 + 400 and multiply each by 20.",
        "hint_ar": "قسّم 3400 إلى 3000 + 400 واضرب كلاً منهما في 20.",
        "result_en": "3400 × 20 = 68000",
        "result_ar": "3400 × 20 = 68000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 20 rows of seats in a stadium section, each row holding 3400 fans. How many fans total?",
            "explanation_ar": "تخيّل 20 صفاً من المقاعد في قسم من الملعب، كل صف يتسع لـ 3400 مشجع. كم عدد المشجعين الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 20 tall and 3400 wide. Split the width: 3000 | 400. Each strip has area = width × 20.",
            "explanation_ar": "ارسم مستطيلاً ارتفاعه 20 وعرضه 3400. قسّم العرض إلى: 3000 | 400. مساحة كل شريط = العرض × 20."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Left strip: 3000 × 20 = 60000. Right strip: 400 × 20 = 8000.",
            "explanation_ar": "الشريط الأيسر: 3000 × 20 = 60000. الشريط الأيمن: 400 × 20 = 8000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 60000 + 8000 = 68000. So 20 rows × 3400 fans = 68000 fans.",
            "explanation_ar": "المجموع = 60000 + 8000 = 68000. إذن 20 صفاً × 3400 مشجع = 68000 مشجع."
          }
        ],
        "hint_en": "Picture a wide rectangle split into two strips: one for 3000 and one for 400, each multiplied by 20.",
        "hint_ar": "تخيّل مستطيلاً عريضاً مقسّماً إلى شريطين: واحد لـ 3000 وآخر لـ 400، كل منهما مضروب في 20.",
        "result_en": "3400 × 20 = 68000",
        "result_ar": "3400 × 20 = 68000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-mul-easy-003",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "2500 × 40 = ?",
    "question_ar": "2500 × 40 = ؟",
    "answer": 100000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "2500 = 25 × 100 and 40 = 4 × 10. First compute the core product 25 × 4, then append the trailing zeros.",
            "explanation_ar": "2500 = 25 × 100 و40 = 4 × 10. احسب أولاً الحاصل الأساسي 25 × 4، ثم أضف الأصفار اللاحقة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Core: 25 × 4 = 100. Trailing zeros: two from 2500, one from 40 → three zeros total, giving 100 × 1000 = 100000.",
            "explanation_ar": "الأساسي: 25 × 4 = 100. الأصفار اللاحقة: اثنان من 2500، وواحد من 40 → ثلاثة أصفار إجمالاً، ما يعطي 100 × 1000 = 100000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "100 × 1000 = 100000. The core product already ends in two zeros, so effectively we get five trailing zeros: 1 followed by five zeros = 100000.",
            "explanation_ar": "100 × 1000 = 100000. الحاصل الأساسي ينتهي بصفرين، فنحصل فعلياً على خمسة أصفار لاحقة: 1 متبوعاً بخمسة أصفار = 100000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2500 × 40 = 100000.",
            "explanation_ar": "2500 × 40 = 100000."
          }
        ],
        "hint_en": "Compute 25 × 4 = 100, then attach the three zeros from 2500 and 40 to get 100000.",
        "hint_ar": "احسب 25 × 4 = 100، ثم أضف الأصفار الثلاثة من 2500 و40 للحصول على 100000.",
        "result_en": "2500 × 40 = 100000",
        "result_ar": "2500 × 40 = 100000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 2500 into: 2000 + 500.",
            "explanation_ar": "قسّم 2500 إلى: 2000 + 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2000 × 40 = 80000; 500 × 40 = 20000.",
            "explanation_ar": "2000 × 40 = 80000؛ 500 × 40 = 20000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "80000 + 20000 = 100000.",
            "explanation_ar": "80000 + 20000 = 100000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Double-check: 2500 × 40 = 2500 × 4 × 10 = 10000 × 10 = 100000. Confirmed.",
            "explanation_ar": "تحقق مجدداً: 2500 × 40 = 2500 × 4 × 10 = 10000 × 10 = 100000. مؤكد."
          }
        ],
        "hint_en": "Split 2500 into 2000 + 500 and multiply each part by 40.",
        "hint_ar": "قسّم 2500 إلى 2000 + 500 واضرب كل جزء في 40.",
        "result_en": "2500 × 40 = 100000",
        "result_ar": "2500 × 40 = 100000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 40 delivery trucks each carrying 2500 packages. What is the total number of packages?",
            "explanation_ar": "تخيّل 40 شاحنة توصيل تحمل كل منها 2500 طرد. ما إجمالي عدد الطرود؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 40 tall and 2500 wide. Split the width into two sections: 2000 | 500.",
            "explanation_ar": "ارسم مستطيلاً ارتفاعه 40 وعرضه 2500. قسّم العرض إلى قسمين: 2000 | 500."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Left section area: 2000 × 40 = 80000. Right section area: 500 × 40 = 20000.",
            "explanation_ar": "مساحة القسم الأيسر: 2000 × 40 = 80000. مساحة القسم الأيمن: 500 × 40 = 20000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total area = 80000 + 20000 = 100000. So 40 trucks × 2500 packages = 100000 packages.",
            "explanation_ar": "إجمالي المساحة = 80000 + 20000 = 100000. إذن 40 شاحنة × 2500 طرد = 100000 طرد."
          }
        ],
        "hint_en": "Use a rectangle split into two strips: one 2000 wide and one 500 wide, both 40 tall.",
        "hint_ar": "استخدم مستطيلاً مقسّماً إلى شريطين: عرض الأول 2000 وعرض الثاني 500، وارتفاع كليهما 40.",
        "result_en": "2500 × 40 = 100000",
        "result_ar": "2500 × 40 = 100000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-mul-medium-001",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "1234 × 12 = ?",
    "question_ar": "1234 × 12 = ؟",
    "answer": 14808,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Multiply left to right by each digit of 12. Think of 12 as 10 + 2. First: 1234 × 10 = 12340. Then: 1234 × 2 = 2468.",
            "explanation_ar": "اضرب من اليسار لليمين في كل رقم من 12. فكّر في 12 على أنها 10 + 2. أولاً: 1234 × 10 = 12340. ثم: 1234 × 2 = 2468."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Partial products: 1234 × 10 = 12340 and 1234 × 2 = 2468.",
            "explanation_ar": "الحاصلات الجزئية: 1234 × 10 = 12340 و1234 × 2 = 2468."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two partial products: 12340 + 2468. Align: 12340 + 2468. Units: 0+8=8. Tens: 4+6=10, write 0 carry 1. Hundreds: 3+4+1=8. Thousands: 2+2=4. Ten-thousands: 1. Result: 14808.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 12340 + 2468. الوحدات: 0+8=8. العشرات: 4+6=10، اكتب 0 واحمل 1. المئات: 3+4+1=8. الآلاف: 2+2=4. عشرات الآلاف: 1. النتيجة: 14808."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "1234 × 12 = 14808.",
            "explanation_ar": "1234 × 12 = 14808."
          }
        ],
        "hint_en": "Split 12 into 10 + 2, multiply 1234 by each, then add the results.",
        "hint_ar": "قسّم 12 إلى 10 + 2، واضرب 1234 في كل منهما، ثم اجمع النتيجتين.",
        "result_en": "1234 × 12 = 14808",
        "result_ar": "1234 × 12 = 14808"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 1234 into place-value parts: 1000 + 200 + 30 + 4.",
            "explanation_ar": "قسّم 1234 إلى أجزاء القيمة المكانية: 1000 + 200 + 30 + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Multiply each part by 12: 1000 × 12 = 12000; 200 × 12 = 2400; 30 × 12 = 360; 4 × 12 = 48.",
            "explanation_ar": "اضرب كل جزء في 12: 1000 × 12 = 12000؛ 200 × 12 = 2400؛ 30 × 12 = 360؛ 4 × 12 = 48."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "12000 + 2400 = 14400; 14400 + 360 = 14760; 14760 + 48 = 14808.",
            "explanation_ar": "12000 + 2400 = 14400؛ 14400 + 360 = 14760؛ 14760 + 48 = 14808."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Rough check: 1200 × 12 = 14400, close to 14808. 1234 × 12 = 14808.",
            "explanation_ar": "فحص تقريبي: 1200 × 12 = 14400، قريب من 14808. 1234 × 12 = 14808."
          }
        ],
        "hint_en": "Break 1234 into 1000 + 200 + 30 + 4 and multiply each piece by 12.",
        "hint_ar": "قسّم 1234 إلى 1000 + 200 + 30 + 4 واضرب كل جزء في 12.",
        "result_en": "1234 × 12 = 14808",
        "result_ar": "1234 × 12 = 14808"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 12 shelves in a library, each holding 1234 books. How many books in total?",
            "explanation_ar": "تخيّل 12 رفاً في مكتبة، كل رف يحمل 1234 كتاباً. كم عدد الكتب الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 12 tall and 1234 wide. Divide the width into four strips: 1000 | 200 | 30 | 4.",
            "explanation_ar": "ارسم مستطيلاً ارتفاعه 12 وعرضه 1234. قسّم العرض إلى أربعة شرائط: 1000 | 200 | 30 | 4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Strip areas: 1000 × 12 = 12000; 200 × 12 = 2400; 30 × 12 = 360; 4 × 12 = 48.",
            "explanation_ar": "مساحات الشرائط: 1000 × 12 = 12000؛ 200 × 12 = 2400؛ 30 × 12 = 360؛ 4 × 12 = 48."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 12000 + 2400 + 360 + 48 = 14808. So 12 shelves × 1234 books = 14808 books.",
            "explanation_ar": "المجموع = 12000 + 2400 + 360 + 48 = 14808. إذن 12 رفاً × 1234 كتاباً = 14808 كتاباً."
          }
        ],
        "hint_en": "Use an area model: rectangle 12 × 1234 split into four color-coded strips.",
        "hint_ar": "استخدم نموذج المساحة: مستطيل 12 × 1234 مقسّم إلى أربعة شرائط ملونة.",
        "result_en": "1234 × 12 = 14808",
        "result_ar": "1234 × 12 = 14808"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-mul-medium-002",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "2345 × 15 = ?",
    "question_ar": "2345 × 15 = ؟",
    "answer": 35175,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Split 15 = 10 + 5. Left-to-right: compute 2345 × 10 first, then 2345 × 5.",
            "explanation_ar": "قسّم 15 = 10 + 5. من اليسار لليمين: احسب 2345 × 10 أولاً، ثم 2345 × 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "2345 × 10 = 23450. 2345 × 5 = half of 2345 × 10 = half of 23450 = 11725.",
            "explanation_ar": "2345 × 10 = 23450. 2345 × 5 = نصف 2345 × 10 = نصف 23450 = 11725."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add: 23450 + 11725 = 35175.",
            "explanation_ar": "اجمع: 23450 + 11725 = 35175."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2345 × 15 = 35175.",
            "explanation_ar": "2345 × 15 = 35175."
          }
        ],
        "hint_en": "Multiply by 10 first (shift left), then by 5 (half of the ×10 result), and add.",
        "hint_ar": "اضرب في 10 أولاً (ازحف يساراً)، ثم في 5 (نصف نتيجة ×10)، ثم اجمع.",
        "result_en": "2345 × 15 = 35175",
        "result_ar": "2345 × 15 = 35175"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 2345 = 2000 + 300 + 40 + 5.",
            "explanation_ar": "قسّم 2345 = 2000 + 300 + 40 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2000 × 15 = 30000; 300 × 15 = 4500; 40 × 15 = 600; 5 × 15 = 75.",
            "explanation_ar": "2000 × 15 = 30000؛ 300 × 15 = 4500؛ 40 × 15 = 600؛ 5 × 15 = 75."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "30000 + 4500 = 34500; 34500 + 600 = 35100; 35100 + 75 = 35175.",
            "explanation_ar": "30000 + 4500 = 34500؛ 34500 + 600 = 35100؛ 35100 + 75 = 35175."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Estimate: 2345 ≈ 2350, 2350 × 15 = 2350 × 10 + 2350 × 5 = 23500 + 11750 = 35250. Our answer 35175 is close. 2345 × 15 = 35175.",
            "explanation_ar": "تقدير: 2345 ≈ 2350، 2350 × 15 = 23500 + 11750 = 35250. إجابتنا 35175 قريبة. 2345 × 15 = 35175."
          }
        ],
        "hint_en": "Decompose 2345 into thousands, hundreds, tens, and units, then multiply each by 15.",
        "hint_ar": "حلّل 2345 إلى آلاف ومئات وعشرات ووحدات، ثم اضرب كلاً منها في 15.",
        "result_en": "2345 × 15 = 35175",
        "result_ar": "2345 × 15 = 35175"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 15 classes at a school, each with 2345 stickers to hand out. How many stickers in total?",
            "explanation_ar": "تخيّل 15 فصلاً في مدرسة، كل فصل لديه 2345 ملصقاً لتوزيعها. كم عدد الملصقات الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 15 tall and 2345 wide. Divide the width: 2000 | 300 | 40 | 5.",
            "explanation_ar": "ارسم مستطيلاً ارتفاعه 15 وعرضه 2345. قسّم العرض: 2000 | 300 | 40 | 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Strip areas: 2000 × 15 = 30000; 300 × 15 = 4500; 40 × 15 = 600; 5 × 15 = 75.",
            "explanation_ar": "مساحات الشرائط: 2000 × 15 = 30000؛ 300 × 15 = 4500؛ 40 × 15 = 600؛ 5 × 15 = 75."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 30000 + 4500 + 600 + 75 = 35175. So 15 classes × 2345 stickers = 35175 stickers.",
            "explanation_ar": "المجموع = 30000 + 4500 + 600 + 75 = 35175. إذن 15 فصلاً × 2345 ملصقاً = 35175 ملصقاً."
          }
        ],
        "hint_en": "Use an area model rectangle of 15 × 2345, split into four vertical strips.",
        "hint_ar": "استخدم نموذج المساحة لمستطيل 15 × 2345، مقسّم إلى أربعة شرائط رأسية.",
        "result_en": "2345 × 15 = 35175",
        "result_ar": "2345 × 15 = 35175"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-mul-medium-003",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "3125 × 16 = ?",
    "question_ar": "3125 × 16 = ؟",
    "answer": 50000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Split 16 = 10 + 6. Left-to-right partials: 3125 × 10 = 31250 and 3125 × 6.",
            "explanation_ar": "قسّم 16 = 10 + 6. الحاصلات الجزئية من اليسار لليمين: 3125 × 10 = 31250 و3125 × 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "3125 × 10 = 31250. For 3125 × 6: 3000 × 6 = 18000; 125 × 6 = 750; total = 18750.",
            "explanation_ar": "3125 × 10 = 31250. لـ 3125 × 6: 3000 × 6 = 18000؛ 125 × 6 = 750؛ المجموع = 18750."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add: 31250 + 18750 = 50000.",
            "explanation_ar": "اجمع: 31250 + 18750 = 50000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3125 × 16 = 50000. Note: 3125 = 5^5 / 5 = 5000/1.6, and 3125 × 16 = 3125 × 2^4 = 50000 since 3125 × 2 = 6250, × 2 = 12500, × 2 = 25000, × 2 = 50000.",
            "explanation_ar": "3125 × 16 = 50000. ملاحظة: 3125 × 16 = 3125 × 2^4؛ 3125 × 2 = 6250، × 2 = 12500، × 2 = 25000، × 2 = 50000."
          }
        ],
        "hint_en": "Split 16 = 10 + 6. Or notice 16 = 2^4 and double 3125 four times.",
        "hint_ar": "قسّم 16 = 10 + 6. أو لاحظ أن 16 = 2^4 وضاعف 3125 أربع مرات.",
        "result_en": "3125 × 16 = 50000",
        "result_ar": "3125 × 16 = 50000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 3125 = 3000 + 100 + 20 + 5.",
            "explanation_ar": "قسّم 3125 = 3000 + 100 + 20 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3000 × 16 = 48000; 100 × 16 = 1600; 20 × 16 = 320; 5 × 16 = 80.",
            "explanation_ar": "3000 × 16 = 48000؛ 100 × 16 = 1600؛ 20 × 16 = 320؛ 5 × 16 = 80."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "48000 + 1600 = 49600; 49600 + 320 = 49920; 49920 + 80 = 50000.",
            "explanation_ar": "48000 + 1600 = 49600؛ 49600 + 320 = 49920؛ 49920 + 80 = 50000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3125 × 16 = 3125 × 8 × 2 = 25000 × 2 = 50000. Confirmed.",
            "explanation_ar": "تحقق: 3125 × 16 = 3125 × 8 × 2 = 25000 × 2 = 50000. مؤكد."
          }
        ],
        "hint_en": "Decompose 3125 into 3000 + 100 + 20 + 5 and multiply each by 16.",
        "hint_ar": "حلّل 3125 إلى 3000 + 100 + 20 + 5 واضرب كلاً منها في 16.",
        "result_en": "3125 × 16 = 50000",
        "result_ar": "3125 × 16 = 50000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 16 large tanks each holding 3125 liters of water. What is the total volume?",
            "explanation_ar": "تخيّل 16 خزاناً كبيراً يحتوي كل منها على 3125 لتراً من الماء. ما إجمالي الحجم؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle 16 tall and 3125 wide. Split the width: 3000 | 100 | 20 | 5.",
            "explanation_ar": "ارسم مستطيلاً ارتفاعه 16 وعرضه 3125. قسّم العرض: 3000 | 100 | 20 | 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Strip areas: 3000 × 16 = 48000; 100 × 16 = 1600; 20 × 16 = 320; 5 × 16 = 80.",
            "explanation_ar": "مساحات الشرائط: 3000 × 16 = 48000؛ 100 × 16 = 1600؛ 20 × 16 = 320؛ 5 × 16 = 80."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 48000 + 1600 + 320 + 80 = 50000. So 16 tanks × 3125 liters = 50000 liters.",
            "explanation_ar": "المجموع = 48000 + 1600 + 320 + 80 = 50000. إذن 16 خزاناً × 3125 لتراً = 50000 لتراً."
          }
        ],
        "hint_en": "Use the area model for 16 × 3125, divided into four vertical strips.",
        "hint_ar": "استخدم نموذج المساحة لـ 16 × 3125، مقسّماً إلى أربعة شرائط رأسية.",
        "result_en": "3125 × 16 = 50000",
        "result_ar": "3125 × 16 = 50000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-mul-hard-001",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "(−234) × 17 = ?",
    "question_ar": "(−234) × 17 = ؟",
    "answer": -3978,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "One factor is negative (−234) and one is positive (17). By the sign rule: negative × positive = negative. Set aside the sign and compute 234 × 17.",
            "explanation_ar": "أحد العاملين سالب (−234) والآخر موجب (17). وفق قاعدة الإشارة: سالب × موجب = سالب. أجّل الإشارة واحسب 234 × 17."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "234 × 17: split 17 = 10 + 7. 234 × 10 = 2340. 234 × 7: 200 × 7 = 1400; 30 × 7 = 210; 4 × 7 = 28; total = 1638.",
            "explanation_ar": "234 × 17: قسّم 17 = 10 + 7. 234 × 10 = 2340. 234 × 7: 200 × 7 = 1400؛ 30 × 7 = 210؛ 4 × 7 = 28؛ المجموع = 1638."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add partial products: 2340 + 1638 = 3978. Now apply the negative sign: −3978.",
            "explanation_ar": "اجمع الحاصلات الجزئية: 2340 + 1638 = 3978. الآن طبّق الإشارة السالبة: −3978."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "(−234) × 17 = −3978.",
            "explanation_ar": "(−234) × 17 = −3978."
          }
        ],
        "hint_en": "Apply the sign rule first (neg × pos = neg), then compute 234 × 17 using left-to-right partials.",
        "hint_ar": "طبّق قاعدة الإشارة أولاً (سالب × موجب = سالب)، ثم احسب 234 × 17 باستخدام الحاصلات الجزئية من اليسار لليمين.",
        "result_en": "(−234) × 17 = −3978",
        "result_ar": "(−234) × 17 = −3978"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Separate the sign: (−234) × 17 = −(234 × 17). Split 234 = 200 + 30 + 4.",
            "explanation_ar": "افصل الإشارة: (−234) × 17 = −(234 × 17). قسّم 234 = 200 + 30 + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "200 × 17 = 3400; 30 × 17 = 510; 4 × 17 = 68.",
            "explanation_ar": "200 × 17 = 3400؛ 30 × 17 = 510؛ 4 × 17 = 68."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3400 + 510 = 3910; 3910 + 68 = 3978. Apply sign: −3978.",
            "explanation_ar": "3400 + 510 = 3910؛ 3910 + 68 = 3978. طبّق الإشارة: −3978."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check magnitude: 234 × 17 ≈ 230 × 17 = 3910, and 4 × 17 = 68, so 3978. With negative sign: −3978. (−234) × 17 = −3978.",
            "explanation_ar": "تحقق من القيمة المطلقة: 234 × 17 ≈ 230 × 17 = 3910، و4 × 17 = 68، إذن 3978. مع الإشارة السالبة: −3978. (−234) × 17 = −3978."
          }
        ],
        "hint_en": "Factor out the negative sign first, then decompose 234 into 200 + 30 + 4 and multiply each by 17.",
        "hint_ar": "أخرج الإشارة السالبة أولاً، ثم قسّم 234 إلى 200 + 30 + 4 واضرب كلاً منها في 17.",
        "result_en": "(−234) × 17 = −3978",
        "result_ar": "(−234) × 17 = −3978"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Think of a debt model: owing 234 coins per day for 17 days. A debt is negative, so you go further below zero each day.",
            "explanation_ar": "فكّر في نموذج الديون: ديْن يبلغ 234 عملة يومياً لمدة 17 يوماً. الدين سالب، لذا تزداد ابتعاداً عن الصفر كل يوم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a sign-then-magnitude diagram: first label the result as negative. Then build a positive area rectangle 17 × 234, split into strips: 200 | 30 | 4.",
            "explanation_ar": "ارسم مخططاً للإشارة ثم القيمة المطلقة: ضع علامة سالبة على النتيجة أولاً. ثم ارسم مستطيل المساحة الموجبة 17 × 234، مقسّماً إلى شرائط: 200 | 30 | 4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Strip areas: 200 × 17 = 3400; 30 × 17 = 510; 4 × 17 = 68. Magnitude = 3400 + 510 + 68 = 3978.",
            "explanation_ar": "مساحات الشرائط: 200 × 17 = 3400؛ 30 × 17 = 510؛ 4 × 17 = 68. القيمة المطلقة = 3400 + 510 + 68 = 3978."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Attach the negative sign to the magnitude: −3978. After 17 days, total debt = −3978 coins.",
            "explanation_ar": "أضف الإشارة السالبة للقيمة المطلقة: −3978. بعد 17 يوماً، إجمالي الديون = −3978 عملة."
          }
        ],
        "hint_en": "Use a sign-then-magnitude model: mark the answer as negative first, then find 234 × 17 with an area rectangle.",
        "hint_ar": "استخدم نموذج الإشارة ثم القيمة المطلقة: ضع الإشارة السالبة أولاً، ثم أوجد 234 × 17 بمستطيل المساحة.",
        "result_en": "(−234) × 17 = −3978",
        "result_ar": "(−234) × 17 = −3978"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-mul-hard-002",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "12.5 × 240 = ?",
    "question_ar": "12.5 × 240 = ؟",
    "answer": 3000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "12.5 = 25 ÷ 2. So 12.5 × 240 = (25 × 240) ÷ 2. Compute left-to-right: 25 × 240 = 25 × 24 × 10.",
            "explanation_ar": "12.5 = 25 ÷ 2. إذن 12.5 × 240 = (25 × 240) ÷ 2. احسب من اليسار لليمين: 25 × 240 = 25 × 24 × 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "25 × 24 = 600 (since 25 × 4 = 100 and 25 × 20 = 500, total 600). Then 600 × 10 = 6000.",
            "explanation_ar": "25 × 24 = 600 (لأن 25 × 4 = 100 و25 × 20 = 500، المجموع 600). ثم 600 × 10 = 6000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide by 2: 6000 ÷ 2 = 3000.",
            "explanation_ar": "اقسم على 2: 6000 ÷ 2 = 3000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "12.5 × 240 = 3000. The answer is an integer.",
            "explanation_ar": "12.5 × 240 = 3000. الإجابة عدد صحيح."
          }
        ],
        "hint_en": "Rewrite 12.5 as 25/2, then compute 25 × 240 ÷ 2.",
        "hint_ar": "أعد كتابة 12.5 كـ 25/2، ثم احسب 25 × 240 ÷ 2.",
        "result_en": "12.5 × 240 = 3000",
        "result_ar": "12.5 × 240 = 3000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 12.5 = 10 + 2 + 0.5. Multiply each part by 240.",
            "explanation_ar": "قسّم 12.5 = 10 + 2 + 0.5. اضرب كل جزء في 240."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "10 × 240 = 2400; 2 × 240 = 480; 0.5 × 240 = 120.",
            "explanation_ar": "10 × 240 = 2400؛ 2 × 240 = 480؛ 0.5 × 240 = 120."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "2400 + 480 = 2880; 2880 + 120 = 3000.",
            "explanation_ar": "2400 + 480 = 2880؛ 2880 + 120 = 3000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 12.5 × 240 = 12.5 × 24 × 10 = 300 × 10 = 3000. The decimal disappears because 12.5 × 2 = 25, a whole number. 12.5 × 240 = 3000.",
            "explanation_ar": "تحقق: 12.5 × 240 = 12.5 × 24 × 10 = 300 × 10 = 3000. تختفي الكسرية لأن 12.5 × 2 = 25، عدد صحيح. 12.5 × 240 = 3000."
          }
        ],
        "hint_en": "Split 12.5 into 10 + 2 + 0.5 and multiply each part by 240.",
        "hint_ar": "قسّم 12.5 إلى 10 + 2 + 0.5 واضرب كل جزء في 240.",
        "result_en": "12.5 × 240 = 3000",
        "result_ar": "12.5 × 240 = 3000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 240 bags of rice, each weighing 12.5 kg. What is the total weight?",
            "explanation_ar": "تخيّل 240 كيساً من الأرز، يزن كل منها 12.5 كيلوغراماً. ما إجمالي الوزن؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle with height 240 and width 12.5. Split the width: 10 | 2 | 0.5.",
            "explanation_ar": "ارسم مستطيلاً ارتفاعه 240 وعرضه 12.5. قسّم العرض: 10 | 2 | 0.5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Strip areas: 10 × 240 = 2400; 2 × 240 = 480; 0.5 × 240 = 120.",
            "explanation_ar": "مساحات الشرائط: 10 × 240 = 2400؛ 2 × 240 = 480؛ 0.5 × 240 = 120."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total = 2400 + 480 + 120 = 3000 kg. So 240 bags × 12.5 kg = 3000 kg exactly — no leftover decimal.",
            "explanation_ar": "المجموع = 2400 + 480 + 120 = 3000 كيلوغرام. إذن 240 كيساً × 12.5 كيلوغرام = 3000 كيلوغرام بالضبط — بدون كسور متبقية."
          }
        ],
        "hint_en": "Use an area model for 240 × 12.5, split into three strips: 10, 2, and 0.5.",
        "hint_ar": "استخدم نموذج المساحة لـ 240 × 12.5، مقسّماً إلى ثلاثة شرائط: 10 و2 و0.5.",
        "result_en": "12.5 × 240 = 3000",
        "result_ar": "12.5 × 240 = 3000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-mul-hard-003",
    "grade": 7,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "(−425) × 32 = ?",
    "question_ar": "(−425) × 32 = ؟",
    "answer": -13600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Sign rule: negative × positive = negative. Compute |−425| × 32 = 425 × 32 first, then apply the negative sign. Split 32 = 30 + 2 for left-to-right partials.",
            "explanation_ar": "قاعدة الإشارة: سالب × موجب = سالب. احسب |−425| × 32 = 425 × 32 أولاً، ثم طبّق الإشارة السالبة. قسّم 32 = 30 + 2 للحاصلات الجزئية من اليسار لليمين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "425 × 30: 400 × 30 = 12000; 25 × 30 = 750; total = 12750. 425 × 2 = 850.",
            "explanation_ar": "425 × 30: 400 × 30 = 12000؛ 25 × 30 = 750؛ المجموع = 12750. 425 × 2 = 850."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sum partials: 12750 + 850 = 13600. Apply negative sign: −13600.",
            "explanation_ar": "اجمع الحاصلات الجزئية: 12750 + 850 = 13600. طبّق الإشارة السالبة: −13600."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "(−425) × 32 = −13600.",
            "explanation_ar": "(−425) × 32 = −13600."
          }
        ],
        "hint_en": "Apply the sign rule first, then compute 425 × 32 by splitting 32 into 30 + 2.",
        "hint_ar": "طبّق قاعدة الإشارة أولاً، ثم احسب 425 × 32 بتقسيم 32 إلى 30 + 2.",
        "result_en": "(−425) × 32 = −13600",
        "result_ar": "(−425) × 32 = −13600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Factor out the sign: (−425) × 32 = −(425 × 32). Split 425 = 400 + 20 + 5.",
            "explanation_ar": "أخرج الإشارة: (−425) × 32 = −(425 × 32). قسّم 425 = 400 + 20 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "400 × 32 = 12800; 20 × 32 = 640; 5 × 32 = 160.",
            "explanation_ar": "400 × 32 = 12800؛ 20 × 32 = 640؛ 5 × 32 = 160."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "12800 + 640 = 13440; 13440 + 160 = 13600. Apply sign: −13600.",
            "explanation_ar": "12800 + 640 = 13440؛ 13440 + 160 = 13600. طبّق الإشارة: −13600."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Double check: 425 × 32 = 425 × 8 × 4 = 3400 × 4 = 13600. Negative sign gives −13600. (−425) × 32 = −13600.",
            "explanation_ar": "تحقق مجدداً: 425 × 32 = 425 × 8 × 4 = 3400 × 4 = 13600. الإشارة السالبة تعطي −13600. (−425) × 32 = −13600."
          }
        ],
        "hint_en": "Separate the negative sign, decompose 425 into 400 + 20 + 5, multiply each by 32, then negate the total.",
        "hint_ar": "افصل الإشارة السالبة، قسّم 425 إلى 400 + 20 + 5، اضرب كلاً منها في 32، ثم انفِ المجموع.",
        "result_en": "(−425) × 32 = −13600",
        "result_ar": "(−425) × 32 = −13600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Think of a temperature drop model: a temperature falls 425 units every hour for 32 hours. A drop is negative, so the total change is negative.",
            "explanation_ar": "فكّر في نموذج انخفاض درجة الحرارة: تنخفض درجة الحرارة 425 وحدة كل ساعة لمدة 32 ساعة. الانخفاض سالب، لذا يكون إجمالي التغيير سالباً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Mark the result as negative. Then draw a positive area rectangle 32 × 425, divided into strips: 400 | 20 | 5.",
            "explanation_ar": "ضع علامة سالبة على النتيجة. ثم ارسم مستطيل المساحة الموجبة 32 × 425، مقسّماً إلى شرائط: 400 | 20 | 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Strip areas: 400 × 32 = 12800; 20 × 32 = 640; 5 × 32 = 160. Magnitude = 12800 + 640 + 160 = 13600.",
            "explanation_ar": "مساحات الشرائط: 400 × 32 = 12800؛ 20 × 32 = 640؛ 5 × 32 = 160. القيمة المطلقة = 12800 + 640 + 160 = 13600."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Attach negative sign: −13600. After 32 hours the temperature has dropped by a total of 13600 units: (−425) × 32 = −13600.",
            "explanation_ar": "أضف الإشارة السالبة: −13600. بعد 32 ساعة انخفضت درجة الحرارة إجمالاً 13600 وحدة: (−425) × 32 = −13600."
          }
        ],
        "hint_en": "Use the sign-then-magnitude model: mark negative, build a 32 × 425 area rectangle split into three strips.",
        "hint_ar": "استخدم نموذج الإشارة ثم القيمة المطلقة: ضع الإشارة السالبة، ثم ارسم مستطيل المساحة 32 × 425 مقسّماً إلى ثلاثة شرائط.",
        "result_en": "(−425) × 32 = −13600",
        "result_ar": "(−425) × 32 = −13600"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-mul-hard-003",
      "upper_grade_equivalent": "g8-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g7-common-div-easy-001",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "45000 ÷ 25 = ?",
    "question_ar": "45000 ÷ 25 = ؟",
    "answer": 1800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 25 = 100 ÷ 4. Dividing by 25 is the same as multiplying by 4 and then dividing by 100.",
            "explanation_ar": "لاحظ أن 25 = 100 ÷ 4. القسمة على 25 تعادل الضرب في 4 ثم القسمة على 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the dividend by 4: 45000 × 4 = 180000.",
            "explanation_ar": "اضرب المقسوم في 4: 45000 × 4 = 180000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now divide 180000 by 100 by removing two zeros: 180000 ÷ 100 = 1800.",
            "explanation_ar": "الآن اقسم 180000 على 100 بحذف صفرين: 180000 ÷ 100 = 1800."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify by inverse: 1800 × 25 = 1800 × 25 = 45000. ✓ The answer is 1800.",
            "explanation_ar": "تحقق بالعملية العكسية: 1800 × 25 = 45000. ✓ الجواب هو 1800."
          }
        ],
        "hint_en": "Dividing by 25 is the same as multiplying by 4 then dividing by 100.",
        "hint_ar": "القسمة على 25 تعادل الضرب في 4 ثم القسمة على 100.",
        "result_en": "45000 ÷ 25 = 1800",
        "result_ar": "45000 ÷ 25 = 1800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 45000 into 25000 + 20000, both divisible by 25.",
            "explanation_ar": "قسّم 45000 إلى 25000 + 20000، وكلاهما يقبل القسمة على 25."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25000 ÷ 25 = 1000, and 20000 ÷ 25 = 800.",
            "explanation_ar": "25000 ÷ 25 = 1000، و 20000 ÷ 25 = 800."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 1000 + 800 = 1800.",
            "explanation_ar": "اجمع الحاصلَين الجزئيَّين: 1000 + 800 = 1800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 1800 × 25 = 45000. ✓ The answer is 1800.",
            "explanation_ar": "تحقق: 1800 × 25 = 45000. ✓ الجواب هو 1800."
          }
        ],
        "hint_en": "Break 45000 into 25000 + 20000 — each chunk is easy to divide by 25.",
        "hint_ar": "قسّم 45000 إلى 25000 + 20000 — كل جزء سهل القسمة على 25.",
        "result_en": "45000 ÷ 25 = 1800",
        "result_ar": "45000 ÷ 25 = 1800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 45000 coins being shared equally among 25 piggy banks. How many coins does each bank get?",
            "explanation_ar": "تخيّل توزيع 45000 عملة بالتساوي على 25 صندوق ادخار. كم عملة ينال كل صندوق؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 25 equal groups. Place groups of 1000 coins into each bank first: 25 × 1000 = 25000 coins used, leaving 20000.",
            "explanation_ar": "ارسم 25 مجموعة متساوية. ضع أولاً 1000 عملة في كل صندوق: 25 × 1000 = 25000 عملة، يتبقى 20000."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Distribute the remaining 20000: 20000 ÷ 25 = 800 more per bank.",
            "explanation_ar": "وزّع الـ 20000 المتبقية: 20000 ÷ 25 = 800 إضافية لكل صندوق."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total per bank: 1000 + 800 = 1800 coins. So 45000 ÷ 25 = 1800.",
            "explanation_ar": "المجموع لكل صندوق: 1000 + 800 = 1800 عملة. إذن 45000 ÷ 25 = 1800."
          }
        ],
        "hint_en": "Picture 25 equal groups being filled with thousands first, then hundreds.",
        "hint_ar": "تخيّل 25 مجموعة متساوية تُملأ بالآلاف أولاً ثم بالمئات.",
        "result_en": "45000 ÷ 25 = 1800",
        "result_ar": "45000 ÷ 25 = 1800"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-common-div-easy-002",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "36400 ÷ 14 = ?",
    "question_ar": "36400 ÷ 14 = ؟",
    "answer": 2600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 14 = 2 × 7. Dividing by 14 means dividing by 2 first, then by 7.",
            "explanation_ar": "لاحظ أن 14 = 2 × 7. القسمة على 14 تعني القسمة على 2 أولاً ثم على 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide 36400 by 2: 36400 ÷ 2 = 18200.",
            "explanation_ar": "اقسم 36400 على 2: 36400 ÷ 2 = 18200."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now divide 18200 by 7: 18200 ÷ 7 = 2600.",
            "explanation_ar": "الآن اقسم 18200 على 7: 18200 ÷ 7 = 2600."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 2600 × 14 = 2600 × 2 × 7 = 5200 × 7 = 36400. ✓ The answer is 2600.",
            "explanation_ar": "تحقق: 2600 × 14 = 2600 × 2 × 7 = 5200 × 7 = 36400. ✓ الجواب هو 2600."
          }
        ],
        "hint_en": "Factor the divisor: 14 = 2 × 7, then divide in two easy steps.",
        "hint_ar": "حلّل المقسوم عليه: 14 = 2 × 7، ثم اقسم في خطوتَين سهلتَين.",
        "result_en": "36400 ÷ 14 = 2600",
        "result_ar": "36400 ÷ 14 = 2600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 36400 into 28000 + 8400, both divisible by 14.",
            "explanation_ar": "قسّم 36400 إلى 28000 + 8400، وكلاهما يقبل القسمة على 14."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "28000 ÷ 14 = 2000, and 8400 ÷ 14 = 600.",
            "explanation_ar": "28000 ÷ 14 = 2000، و 8400 ÷ 14 = 600."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 2000 + 600 = 2600.",
            "explanation_ar": "اجمع: 2000 + 600 = 2600."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2600 × 14 = 36400. ✓ The answer is 2600.",
            "explanation_ar": "تحقق: 2600 × 14 = 36400. ✓ الجواب هو 2600."
          }
        ],
        "hint_en": "Split 36400 into 28000 + 8400 — multiples of 14 that are easy to divide.",
        "hint_ar": "قسّم 36400 إلى 28000 + 8400 — مضاعفات 14 سهلة القسمة.",
        "result_en": "36400 ÷ 14 = 2600",
        "result_ar": "36400 ÷ 14 = 2600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A school raises 36400 points shared equally among 14 teams. How many points does each team earn?",
            "explanation_ar": "مدرسة تجمع 36400 نقطة توزَّع بالتساوي على 14 فريقاً. كم نقطة ينال كل فريق؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Distribute 2000 points to each of the 14 teams: 14 × 2000 = 28000 points allocated, leaving 8400.",
            "explanation_ar": "وزّع 2000 نقطة على كل من 14 فريقاً: 14 × 2000 = 28000 نقطة، يتبقى 8400."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Distribute the remaining 8400: 8400 ÷ 14 = 600 more per team.",
            "explanation_ar": "وزّع الـ 8400 المتبقية: 8400 ÷ 14 = 600 إضافية لكل فريق."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total per team: 2000 + 600 = 2600 points. So 36400 ÷ 14 = 2600.",
            "explanation_ar": "المجموع لكل فريق: 2000 + 600 = 2600 نقطة. إذن 36400 ÷ 14 = 2600."
          }
        ],
        "hint_en": "Give each of the 14 teams 2000 first, then share the leftover 8400.",
        "hint_ar": "أعطِ كل فريق من الـ 14 فريقاً 2000 أولاً، ثم وزّع الباقي 8400.",
        "result_en": "36400 ÷ 14 = 2600",
        "result_ar": "36400 ÷ 14 = 2600"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-common-div-easy-003",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "84000 ÷ 35 = ?",
    "question_ar": "84000 ÷ 35 = ؟",
    "answer": 2400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice 35 = 5 × 7. Dividing by 35 means dividing by 5 first, then by 7.",
            "explanation_ar": "لاحظ أن 35 = 5 × 7. القسمة على 35 تعني القسمة على 5 أولاً ثم على 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide 84000 by 5: 84000 ÷ 5 = 16800.",
            "explanation_ar": "اقسم 84000 على 5: 84000 ÷ 5 = 16800."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now divide 16800 by 7: 16800 ÷ 7 = 2400.",
            "explanation_ar": "الآن اقسم 16800 على 7: 16800 ÷ 7 = 2400."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 2400 × 35 = 2400 × 5 × 7 = 12000 × 7 = 84000. ✓ The answer is 2400.",
            "explanation_ar": "تحقق: 2400 × 35 = 2400 × 5 × 7 = 12000 × 7 = 84000. ✓ الجواب هو 2400."
          }
        ],
        "hint_en": "Factor 35 = 5 × 7 and divide in two steps: first by 5, then by 7.",
        "hint_ar": "حلّل 35 = 5 × 7 واقسم في خطوتَين: أولاً على 5 ثم على 7.",
        "result_en": "84000 ÷ 35 = 2400",
        "result_ar": "84000 ÷ 35 = 2400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 84000 into 70000 + 14000, both divisible by 35.",
            "explanation_ar": "قسّم 84000 إلى 70000 + 14000، وكلاهما يقبل القسمة على 35."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "70000 ÷ 35 = 2000, and 14000 ÷ 35 = 400.",
            "explanation_ar": "70000 ÷ 35 = 2000، و 14000 ÷ 35 = 400."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 2000 + 400 = 2400.",
            "explanation_ar": "اجمع: 2000 + 400 = 2400."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 2400 × 35 = 84000. ✓ The answer is 2400.",
            "explanation_ar": "تحقق: 2400 × 35 = 84000. ✓ الجواب هو 2400."
          }
        ],
        "hint_en": "Split 84000 into 70000 + 14000 — clean multiples of 35.",
        "hint_ar": "قسّم 84000 إلى 70000 + 14000 — مضاعفات واضحة للعدد 35.",
        "result_en": "84000 ÷ 35 = 2400",
        "result_ar": "84000 ÷ 35 = 2400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A factory packs 84000 items into boxes of 35. How many boxes are filled?",
            "explanation_ar": "مصنع يعبّئ 84000 قطعة في صناديق سعة كل منها 35 قطعة. كم صندوقاً يُملأ؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Fill 2000 boxes first: 2000 × 35 = 70000 items, leaving 84000 − 70000 = 14000.",
            "explanation_ar": "املأ 2000 صندوق أولاً: 2000 × 35 = 70000 قطعة، يتبقى 84000 − 70000 = 14000."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Fill more boxes with the remaining 14000: 14000 ÷ 35 = 400 more boxes.",
            "explanation_ar": "أكمل تعبئة صناديق بالـ 14000 المتبقية: 14000 ÷ 35 = 400 صندوق إضافي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total boxes: 2000 + 400 = 2400. So 84000 ÷ 35 = 2400.",
            "explanation_ar": "إجمالي الصناديق: 2000 + 400 = 2400. إذن 84000 ÷ 35 = 2400."
          }
        ],
        "hint_en": "Fill 2000 boxes with 70000 items, then handle the remaining 14000.",
        "hint_ar": "املأ 2000 صندوق بـ 70000 قطعة، ثم تعامل مع الـ 14000 المتبقية.",
        "result_en": "84000 ÷ 35 = 2400",
        "result_ar": "84000 ÷ 35 = 2400"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-common-div-medium-001",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "(−48600) ÷ 12 = ?",
    "question_ar": "(−48600) ÷ 12 = ؟",
    "answer": -4050,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Negative ÷ Positive = Negative. Set aside the sign and work with the magnitude: 48600 ÷ 12.",
            "explanation_ar": "سالب ÷ موجب = سالب. أجّل إشارة السالب واعمل مع القيمة المطلقة: 48600 ÷ 12."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "12 = 4 × 3. Divide 48600 by 4: 48600 ÷ 4 = 12150.",
            "explanation_ar": "12 = 4 × 3. اقسم 48600 على 4: 48600 ÷ 4 = 12150."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now divide 12150 by 3: 12150 ÷ 3 = 4050.",
            "explanation_ar": "الآن اقسم 12150 على 3: 12150 ÷ 3 = 4050."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Restore the negative sign: the answer is −4050. Verify: −4050 × 12 = −48600. ✓",
            "explanation_ar": "أعِد الإشارة السالبة: الجواب هو −4050. تحقق: −4050 × 12 = −48600. ✓"
          }
        ],
        "hint_en": "Apply the sign rule first (negative result), then factor 12 = 4 × 3 and divide in two steps.",
        "hint_ar": "طبّق قاعدة الإشارة أولاً (النتيجة سالبة)، ثم حلّل 12 = 4 × 3 واقسم في خطوتَين.",
        "result_en": "(−48600) ÷ 12 = −4050",
        "result_ar": "(−48600) ÷ 12 = −4050"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Negative ÷ Positive = Negative. Work with 48600. Split into 48000 + 600, both divisible by 12.",
            "explanation_ar": "سالب ÷ موجب = سالب. اعمل مع 48600. قسّمه إلى 48000 + 600، وكلاهما يقبل القسمة على 12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "48000 ÷ 12 = 4000, and 600 ÷ 12 = 50.",
            "explanation_ar": "48000 ÷ 12 = 4000، و 600 ÷ 12 = 50."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 4000 + 50 = 4050.",
            "explanation_ar": "اجمع الحاصلَين الجزئيَّين: 4000 + 50 = 4050."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Apply the negative sign: −4050. Check: −4050 × 12 = −48600. ✓",
            "explanation_ar": "أضف الإشارة السالبة: −4050. تحقق: −4050 × 12 = −48600. ✓"
          }
        ],
        "hint_en": "Ignore the sign first, split 48600 = 48000 + 600, divide each, then attach the negative sign.",
        "hint_ar": "تجاهل الإشارة أولاً، قسّم 48600 = 48000 + 600، اقسم كلاً منهما، ثم أضف الإشارة السالبة.",
        "result_en": "(−48600) ÷ 12 = −4050",
        "result_ar": "(−48600) ÷ 12 = −4050"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A company loses 48600 dollars split equally as debt across 12 partners. Each partner owes a share of the debt.",
            "explanation_ar": "شركة تخسر 48600 دولاراً توزَّع كديون متساوية على 12 شريكاً. كل شريك يتحمّل حصته من الدَّين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a signed number line, mark −48600. Divide that segment into 12 equal parts.",
            "explanation_ar": "على محور الأعداد المُوقَّعة، ضع −48600. قسّم هذا المقطع إلى 12 جزءاً متساوياً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each part stretches 4050 units to the left of zero, meaning each partner owes −4050.",
            "explanation_ar": "كل جزء يمتد 4050 وحدة إلى يسار الصفر، أي أن كل شريك مدين بـ −4050."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each partner's share is −4050. So (−48600) ÷ 12 = −4050.",
            "explanation_ar": "حصة كل شريك هي −4050. إذن (−48600) ÷ 12 = −4050."
          }
        ],
        "hint_en": "Use a signed number line: −48600 split into 12 equal negative parts each equals −4050.",
        "hint_ar": "استخدم محور الأعداد المُوقَّعة: −48600 موزَّعة على 12 جزءاً سالباً متساوياً = −4050.",
        "result_en": "(−48600) ÷ 12 = −4050",
        "result_ar": "(−48600) ÷ 12 = −4050"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-common-div-medium-002",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "56784 ÷ 16 = ?",
    "question_ar": "56784 ÷ 16 = ؟",
    "answer": 3549,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "16 = 2⁴. Dividing by 16 means halving the number four times in succession.",
            "explanation_ar": "16 = 2⁴. القسمة على 16 تعني تنصيف العدد أربع مرات متتالية."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "56784 ÷ 2 = 28392. Then 28392 ÷ 2 = 14196.",
            "explanation_ar": "56784 ÷ 2 = 28392. ثم 28392 ÷ 2 = 14196."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Continue halving: 14196 ÷ 2 = 7098. Then 7098 ÷ 2 = 3549.",
            "explanation_ar": "تابع التنصيف: 14196 ÷ 2 = 7098. ثم 7098 ÷ 2 = 3549."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 3549 × 16 = 3549 × 2 × 2 × 2 × 2 = 7098 × 2 × 2 × 2 = 14196 × 2 × 2 = 28392 × 2 = 56784. ✓ The answer is 3549.",
            "explanation_ar": "تحقق: 3549 × 16 = 56784. ✓ الجواب هو 3549."
          }
        ],
        "hint_en": "Divide by 16 by halving four times: ÷2, ÷2, ÷2, ÷2.",
        "hint_ar": "اقسم على 16 بالتنصيف أربع مرات: ÷2، ÷2، ÷2، ÷2.",
        "result_en": "56784 ÷ 16 = 3549",
        "result_ar": "56784 ÷ 16 = 3549"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 56784 into 48000 + 8784, both divisible by 16.",
            "explanation_ar": "قسّم 56784 إلى 48000 + 8784، وكلاهما يقبل القسمة على 16."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "48000 ÷ 16 = 3000. For 8784 ÷ 16: split further as 8000 + 784. 8000 ÷ 16 = 500, 784 ÷ 16 = 49. So 8784 ÷ 16 = 549.",
            "explanation_ar": "48000 ÷ 16 = 3000. لـ 8784 ÷ 16: قسّم إلى 8000 + 784. 8000 ÷ 16 = 500، 784 ÷ 16 = 49. إذن 8784 ÷ 16 = 549."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 3000 + 549 = 3549.",
            "explanation_ar": "اجمع: 3000 + 549 = 3549."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 3549 × 16 = 56784. ✓ The answer is 3549.",
            "explanation_ar": "تحقق: 3549 × 16 = 56784. ✓ الجواب هو 3549."
          }
        ],
        "hint_en": "Break 56784 into 48000 + 8000 + 784 — all divisible by 16.",
        "hint_ar": "قسّم 56784 إلى 48000 + 8000 + 784 — كلها قابلة للقسمة على 16.",
        "result_en": "56784 ÷ 16 = 3549",
        "result_ar": "56784 ÷ 16 = 3549"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A printer produces 56784 pages divided equally among 16 print jobs. How many pages per job?",
            "explanation_ar": "طابعة تنتج 56784 صفحة توزَّع بالتساوي على 16 مهمة طباعة. كم صفحة لكل مهمة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Assign 3000 pages to each of 16 jobs: 16 × 3000 = 48000 pages used, leaving 56784 − 48000 = 8784.",
            "explanation_ar": "خصّص 3000 صفحة لكل مهمة من 16: 16 × 3000 = 48000 صفحة، يتبقى 56784 − 48000 = 8784."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Distribute the remaining 8784 pages: 8784 ÷ 16 = 549 more per job.",
            "explanation_ar": "وزّع الـ 8784 الصفحات المتبقية: 8784 ÷ 16 = 549 إضافية لكل مهمة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Pages per job: 3000 + 549 = 3549. So 56784 ÷ 16 = 3549.",
            "explanation_ar": "صفحات كل مهمة: 3000 + 549 = 3549. إذن 56784 ÷ 16 = 3549."
          }
        ],
        "hint_en": "Allocate 3000 pages to each of the 16 jobs first, then handle the remaining 8784.",
        "hint_ar": "خصّص 3000 صفحة لكل من 16 مهمة أولاً، ثم تعامل مع الـ 8784 المتبقية.",
        "result_en": "56784 ÷ 16 = 3549",
        "result_ar": "56784 ÷ 16 = 3549"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-common-div-medium-003",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "(−72450) ÷ 15 = ?",
    "question_ar": "(−72450) ÷ 15 = ؟",
    "answer": -4830,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Negative ÷ Positive = Negative. Work with the magnitude: 72450 ÷ 15. Note that 15 = 3 × 5.",
            "explanation_ar": "سالب ÷ موجب = سالب. اعمل مع القيمة المطلقة: 72450 ÷ 15. لاحظ أن 15 = 3 × 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide 72450 by 5 first: 72450 ÷ 5 = 14490.",
            "explanation_ar": "اقسم 72450 على 5 أولاً: 72450 ÷ 5 = 14490."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now divide 14490 by 3: 14490 ÷ 3 = 4830.",
            "explanation_ar": "الآن اقسم 14490 على 3: 14490 ÷ 3 = 4830."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Restore the negative sign: −4830. Verify: −4830 × 15 = −72450. ✓",
            "explanation_ar": "أعِد الإشارة السالبة: −4830. تحقق: −4830 × 15 = −72450. ✓"
          }
        ],
        "hint_en": "Mark the result as negative first, then factor 15 = 3 × 5 and divide step by step.",
        "hint_ar": "سجّل النتيجة سالبة أولاً، ثم حلّل 15 = 3 × 5 واقسم خطوةً بخطوة.",
        "result_en": "(−72450) ÷ 15 = −4830",
        "result_ar": "(−72450) ÷ 15 = −4830"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Negative ÷ Positive = Negative. Work with 72450. Split into 60000 + 12000 + 450, all divisible by 15.",
            "explanation_ar": "سالب ÷ موجب = سالب. اعمل مع 72450. قسّمه إلى 60000 + 12000 + 450، وكلها قابلة للقسمة على 15."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "60000 ÷ 15 = 4000, 12000 ÷ 15 = 800, 450 ÷ 15 = 30.",
            "explanation_ar": "60000 ÷ 15 = 4000، 12000 ÷ 15 = 800، 450 ÷ 15 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 4000 + 800 + 30 = 4830.",
            "explanation_ar": "اجمع: 4000 + 800 + 30 = 4830."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Apply negative sign: −4830. Check: −4830 × 15 = −72450. ✓",
            "explanation_ar": "أضف الإشارة السالبة: −4830. تحقق: −4830 × 15 = −72450. ✓"
          }
        ],
        "hint_en": "Split 72450 = 60000 + 12000 + 450, divide each by 15, then attach the negative sign.",
        "hint_ar": "قسّم 72450 = 60000 + 12000 + 450، اقسم كلاً منها على 15، ثم أضف الإشارة السالبة.",
        "result_en": "(−72450) ÷ 15 = −4830",
        "result_ar": "(−72450) ÷ 15 = −4830"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A submarine descends a total of 72450 meters over 15 equal dives, each dive going deeper. The descent is negative direction.",
            "explanation_ar": "غواصة تنزل مجموع 72450 متراً خلال 15 غطسة متساوية، كل غطسة تذهب أعمق. الاتجاه هو الهبوط (سالب)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a vertical number line, mark 0 at the surface and −72450 at the deepest point. Divide the line into 15 equal segments.",
            "explanation_ar": "على محور عمودي، ضع 0 عند السطح و −72450 عند أعمق نقطة. قسّم المحور إلى 15 قطعة متساوية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each segment represents one dive. The length of each segment is 72450 ÷ 15 = 4830 meters downward.",
            "explanation_ar": "كل قطعة تمثّل غطسة واحدة. طول كل قطعة هو 72450 ÷ 15 = 4830 متراً هبوطاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each dive = −4830 m. So (−72450) ÷ 15 = −4830.",
            "explanation_ar": "كل غطسة = −4830 م. إذن (−72450) ÷ 15 = −4830."
          }
        ],
        "hint_en": "Draw a vertical number line: 15 equal downward steps from 0 to −72450 each measure −4830.",
        "hint_ar": "ارسم محوراً عمودياً: 15 خطوة هبوطية متساوية من 0 إلى −72450 كل منها −4830.",
        "result_en": "(−72450) ÷ 15 = −4830",
        "result_ar": "(−72450) ÷ 15 = −4830"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-common-div-hard-001",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "118800 ÷ 144 = ?",
    "question_ar": "118800 ÷ 144 = ؟",
    "answer": 825,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "144 = 12 × 12 = 12². Dividing by 144 means dividing by 12 twice.",
            "explanation_ar": "144 = 12 × 12 = 12². القسمة على 144 تعني القسمة على 12 مرتَين."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide 118800 by 12: 118800 ÷ 12 = 9900.",
            "explanation_ar": "اقسم 118800 على 12: 118800 ÷ 12 = 9900."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide the result by 12 again: 9900 ÷ 12 = 825.",
            "explanation_ar": "اقسم الناتج على 12 مرة أخرى: 9900 ÷ 12 = 825."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 825 × 144 = 825 × 12 × 12 = 9900 × 12 = 118800. ✓ The answer is 825.",
            "explanation_ar": "تحقق: 825 × 144 = 825 × 12 × 12 = 9900 × 12 = 118800. ✓ الجواب هو 825."
          }
        ],
        "hint_en": "Since 144 = 12², divide by 12 twice: 118800 ÷ 12 = 9900, then 9900 ÷ 12 = 825.",
        "hint_ar": "بما أن 144 = 12²، اقسم على 12 مرتَين: 118800 ÷ 12 = 9900، ثم 9900 ÷ 12 = 825.",
        "result_en": "118800 ÷ 144 = 825",
        "result_ar": "118800 ÷ 144 = 825"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 118800 into 115200 + 3600, both divisible by 144.",
            "explanation_ar": "قسّم 118800 إلى 115200 + 3600، وكلاهما يقبل القسمة على 144."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "115200 ÷ 144 = 800 (since 144 × 800 = 115200), and 3600 ÷ 144 = 25.",
            "explanation_ar": "115200 ÷ 144 = 800 (لأن 144 × 800 = 115200)، و 3600 ÷ 144 = 25."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 800 + 25 = 825.",
            "explanation_ar": "اجمع: 800 + 25 = 825."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 825 × 144 = 118800. ✓ The answer is 825.",
            "explanation_ar": "تحقق: 825 × 144 = 118800. ✓ الجواب هو 825."
          }
        ],
        "hint_en": "Split 118800 into 115200 + 3600 — both clean multiples of 144.",
        "hint_ar": "قسّم 118800 إلى 115200 + 3600 — كلاهما مضاعف واضح للعدد 144.",
        "result_en": "118800 ÷ 144 = 825",
        "result_ar": "118800 ÷ 144 = 825"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A stadium has 118800 seats arranged in 144 equal sections. How many seats are in each section?",
            "explanation_ar": "ملعب يضم 118800 مقعداً موزَّعة على 144 قسماً متساوياً. كم مقعداً في كل قسم؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Assign 800 seats to each of the 144 sections: 144 × 800 = 115200 seats allocated, leaving 118800 − 115200 = 3600.",
            "explanation_ar": "خصّص 800 مقعد لكل من 144 قسماً: 144 × 800 = 115200 مقعداً، يتبقى 118800 − 115200 = 3600."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Distribute the remaining 3600 seats: 3600 ÷ 144 = 25 more per section.",
            "explanation_ar": "وزّع الـ 3600 مقعداً المتبقية: 3600 ÷ 144 = 25 إضافية لكل قسم."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Seats per section: 800 + 25 = 825. So 118800 ÷ 144 = 825.",
            "explanation_ar": "مقاعد كل قسم: 800 + 25 = 825. إذن 118800 ÷ 144 = 825."
          }
        ],
        "hint_en": "Give each of 144 sections 800 seats first (using 115200), then share the leftover 3600.",
        "hint_ar": "أعطِ كل قسم من 144 قسماً 800 مقعد أولاً (يستهلك 115200)، ثم وزّع الـ 3600 المتبقية.",
        "result_en": "118800 ÷ 144 = 825",
        "result_ar": "118800 ÷ 144 = 825"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-common-div-hard-002",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "37.8 ÷ 0.14 = ?",
    "question_ar": "37.8 ÷ 0.14 = ؟",
    "answer": 270,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Multiplying both dividend and divisor by the same power of 10 does not change the quotient. 0.14 has 2 decimal places, so multiply both by 100.",
            "explanation_ar": "ضرب المقسوم والمقسوم عليه في نفس قوة 10 لا يغيّر الناتج. 0.14 له منزلتان عشريتان، لذا اضرب كلَيهما في 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "37.8 × 100 = 3780 and 0.14 × 100 = 14. The problem becomes 3780 ÷ 14.",
            "explanation_ar": "37.8 × 100 = 3780 و 0.14 × 100 = 14. تصبح المسألة 3780 ÷ 14."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "14 = 2 × 7. So 3780 ÷ 2 = 1890, then 1890 ÷ 7 = 270.",
            "explanation_ar": "14 = 2 × 7. إذن 3780 ÷ 2 = 1890، ثم 1890 ÷ 7 = 270."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 270 × 0.14 = 270 × 14 ÷ 100 = 3780 ÷ 100 = 37.80. ✓ The answer is 270.",
            "explanation_ar": "تحقق: 270 × 0.14 = 270 × 14 ÷ 100 = 3780 ÷ 100 = 37.80. ✓ الجواب هو 270."
          }
        ],
        "hint_en": "Multiply both numbers by 100 to remove decimals: 3780 ÷ 14. Then factor 14 = 2 × 7.",
        "hint_ar": "اضرب كلا العددَين في 100 للتخلص من الأعشار: 3780 ÷ 14. ثم حلّل 14 = 2 × 7.",
        "result_en": "37.8 ÷ 0.14 = 270",
        "result_ar": "37.8 ÷ 0.14 = 270"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Scale up to whole numbers: 37.8 ÷ 0.14 = 3780 ÷ 14. Split 3780 into 2800 + 980, both divisible by 14.",
            "explanation_ar": "حوّل إلى أعداد صحيحة: 37.8 ÷ 0.14 = 3780 ÷ 14. قسّم 3780 إلى 2800 + 980، وكلاهما يقبل القسمة على 14."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2800 ÷ 14 = 200, and 980 ÷ 14 = 70.",
            "explanation_ar": "2800 ÷ 14 = 200، و 980 ÷ 14 = 70."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 200 + 70 = 270.",
            "explanation_ar": "اجمع: 200 + 70 = 270."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 270 × 0.14 = 37.80. ✓ The answer is 270.",
            "explanation_ar": "تحقق: 270 × 0.14 = 37.80. ✓ الجواب هو 270."
          }
        ],
        "hint_en": "Scale to 3780 ÷ 14, then split 3780 = 2800 + 980.",
        "hint_ar": "حوّل إلى 3780 ÷ 14، ثم قسّم 3780 = 2800 + 980.",
        "result_en": "37.8 ÷ 0.14 = 270",
        "result_ar": "37.8 ÷ 0.14 = 270"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A ribbon 37.8 cm long is cut into pieces each 0.14 cm long. How many pieces are there?",
            "explanation_ar": "شريط طوله 37.8 سم يُقطَّع إلى قطع طول كل منها 0.14 سم. كم قطعة ينتج؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Zoom in by ×100: the ribbon is now 3780 mm, each piece 14 mm. Draw a bar of length 3780 partitioned into segments of 14.",
            "explanation_ar": "كبّر بمقدار ×100: الشريط الآن 3780 ملم، كل قطعة 14 ملم. ارسم شريطاً بطول 3780 مقسَّماً إلى أجزاء بطول 14."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the segments: first 200 segments cover 2800 mm, next 70 segments cover 980 mm. Total = 270 segments.",
            "explanation_ar": "عدّ الأجزاء: أول 200 جزء تغطي 2800 ملم، ثم 70 جزءاً تغطي 980 ملم. الإجمالي = 270 جزءاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "270 pieces fit. So 37.8 ÷ 0.14 = 270.",
            "explanation_ar": "تتسع 270 قطعة. إذن 37.8 ÷ 0.14 = 270."
          }
        ],
        "hint_en": "Scale both numbers by ×100, then picture a bar of 3780 units cut into chunks of 14.",
        "hint_ar": "كبّر كلا العددَين بمقدار ×100، ثم تخيّل شريطاً بطول 3780 وحدة مقسَّماً إلى قطع بطول 14.",
        "result_en": "37.8 ÷ 0.14 = 270",
        "result_ar": "37.8 ÷ 0.14 = 270"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-common-div-hard-003",
    "grade": 7,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "239616 ÷ 312 = ?",
    "question_ar": "239616 ÷ 312 = ؟",
    "answer": 768,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "312 = 8 × 39 = 8 × 3 × 13. Divide by 8 first, then by 3, then by 13.",
            "explanation_ar": "312 = 8 × 39 = 8 × 3 × 13. اقسم على 8 أولاً ثم على 3 ثم على 13."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "239616 ÷ 8 = 29952. Then 29952 ÷ 3 = 9984.",
            "explanation_ar": "239616 ÷ 8 = 29952. ثم 29952 ÷ 3 = 9984."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Finally 9984 ÷ 13 = 768.",
            "explanation_ar": "أخيراً 9984 ÷ 13 = 768."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Verify: 768 × 312 = 768 × 300 + 768 × 12 = 230400 + 9216 = 239616. ✓ The answer is 768.",
            "explanation_ar": "تحقق: 768 × 312 = 768 × 300 + 768 × 12 = 230400 + 9216 = 239616. ✓ الجواب هو 768."
          }
        ],
        "hint_en": "Factor 312 = 8 × 3 × 13 and divide in three steps.",
        "hint_ar": "حلّل 312 = 8 × 3 × 13 واقسم في ثلاث خطوات.",
        "result_en": "239616 ÷ 312 = 768",
        "result_ar": "239616 ÷ 312 = 768"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 239616 into 218400 + 21216, both divisible by 312.",
            "explanation_ar": "قسّم 239616 إلى 218400 + 21216، وكلاهما يقبل القسمة على 312."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "218400 ÷ 312 = 700 (since 312 × 700 = 218400), and 21216 ÷ 312 = 68.",
            "explanation_ar": "218400 ÷ 312 = 700 (لأن 312 × 700 = 218400)، و 21216 ÷ 312 = 68."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add: 700 + 68 = 768.",
            "explanation_ar": "اجمع: 700 + 68 = 768."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 768 × 312 = 239616. ✓ The answer is 768.",
            "explanation_ar": "تحقق: 768 × 312 = 239616. ✓ الجواب هو 768."
          }
        ],
        "hint_en": "Split 239616 into 218400 + 21216 — both multiples of 312.",
        "hint_ar": "قسّم 239616 إلى 218400 + 21216 — كلاهما من مضاعفات 312.",
        "result_en": "239616 ÷ 312 = 768",
        "result_ar": "239616 ÷ 312 = 768"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A warehouse stores 239616 cans arranged equally in 312 pallets. How many cans are on each pallet?",
            "explanation_ar": "مستودع يحتوي 239616 علبة موزَّعة بالتساوي على 312 منصة شحن. كم علبة على كل منصة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Load 700 cans onto each of 312 pallets: 312 × 700 = 218400 cans loaded, leaving 239616 − 218400 = 21216.",
            "explanation_ar": "ضع 700 علبة على كل منصة من 312: 312 × 700 = 218400 علبة، يتبقى 239616 − 218400 = 21216."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Distribute the remaining 21216 cans: 21216 ÷ 312 = 68 more per pallet.",
            "explanation_ar": "وزّع الـ 21216 علبة المتبقية: 21216 ÷ 312 = 68 إضافية لكل منصة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Cans per pallet: 700 + 68 = 768. So 239616 ÷ 312 = 768.",
            "explanation_ar": "علب كل منصة: 700 + 68 = 768. إذن 239616 ÷ 312 = 768."
          }
        ],
        "hint_en": "Load 700 cans onto each of 312 pallets first (218400 total), then share the remaining 21216.",
        "hint_ar": "ضع أولاً 700 علبة على كل منصة من 312 (218400 إجمالاً)، ثم وزّع الـ 21216 المتبقية.",
        "result_en": "239616 ÷ 312 = 768",
        "result_ar": "239616 ÷ 312 = 768"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g6-common-div-hard-003",
      "upper_grade_equivalent": "g8-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g7-specific-alg-easy-001",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "x + 7 = 15. Solve for x. x = ?",
    "question_ar": "x + 7 = 15. أوجد قيمة x. x = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at the equation x + 7 = 15. The operation applied to x is addition of 7.",
            "explanation_ar": "انظر إلى المعادلة x + 7 = 15. العملية المطبّقة على x هي الجمع بإضافة 7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The inverse of adding 7 is subtracting 7. Note: 15 − 7 = 8.",
            "explanation_ar": "عكس الجمع بـ 7 هو الطرح بـ 7. لاحظ: 15 − 7 = 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Apply the inverse operation to both sides: x + 7 − 7 = 15 − 7, which gives x = 8.",
            "explanation_ar": "طبّق العملية العكسية على الطرفين: x + 7 − 7 = 15 − 7، فينتج x = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 8 + 7 = 15 ✓. The answer is x = 8.",
            "explanation_ar": "تحقق: 8 + 7 = 15 ✓. الإجابة هي x = 8."
          }
        ],
        "hint_en": "What number do you subtract from 15 to undo the +7?",
        "hint_ar": "ما العدد الذي تطرحه من 15 لإلغاء الجمع بـ 7؟",
        "result_en": "x = 8",
        "result_ar": "x = 8"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is x + 7 = 15. Identify the constant on the left side: it is +7.",
            "explanation_ar": "المعادلة هي x + 7 = 15. حدّد الثابت على الطرف الأيسر: وهو +7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 7 from both sides to isolate x: x + 7 − 7 = 15 − 7.",
            "explanation_ar": "اطرح 7 من كلا الطرفين لعزل x: x + 7 − 7 = 15 − 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Simplify both sides: x = 8.",
            "explanation_ar": "بسّط الطرفين: x = 8."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute back: 8 + 7 = 15 ✓. The solution is x = 8.",
            "explanation_ar": "عوّض للتحقق: 8 + 7 = 15 ✓. الحل هو x = 8."
          }
        ],
        "hint_en": "Move the constant 7 to the right side by subtracting it from both sides.",
        "hint_ar": "انقل الثابت 7 إلى الطرف الأيمن بطرحه من كلا الطرفين.",
        "result_en": "x = 8",
        "result_ar": "x = 8"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a balance scale. The left pan holds a mystery box (x) and 7 coins. The right pan holds 15 coins. The scale is balanced.",
            "explanation_ar": "تخيّل ميزاناً. الكفة اليسرى تحمل صندوقاً مجهولاً (x) و7 عملات. الكفة اليمنى تحمل 15 عملة. الميزان متوازن."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 7 coins from each pan to keep the balance: the left pan now has only the mystery box x, and the right pan has 15 − 7 = 8 coins.",
            "explanation_ar": "أزل 7 عملات من كل كفة للحفاظ على التوازن: الكفة اليسرى تحتوي الآن على الصندوق x فقط، والكفة اليمنى تحتوي على 15 − 7 = 8 عملات."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The balance now shows x on one side and 8 on the other. Since the scale is still level, x = 8.",
            "explanation_ar": "يُظهر الميزان الآن x على جانب و8 على الجانب الآخر. بما أن الميزان لا يزال متوازناً، فإن x = 8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: replacing x with 8 gives 8 + 7 = 15 ✓. The mystery box weighs 8.",
            "explanation_ar": "تأكيد: استبدال x بـ 8 يعطي 8 + 7 = 15 ✓. وزن الصندوق المجهول هو 8."
          }
        ],
        "hint_en": "Picture a balance scale — take 7 coins off both sides to find what's in the box.",
        "hint_ar": "تخيّل ميزاناً — أزل 7 عملات من كلا الجانبين لتكتشف ما في الصندوق.",
        "result_en": "x = 8",
        "result_ar": "x = 8"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-alg-easy-002",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "x − 9 = 4. Solve for x. x = ?",
    "question_ar": "x − 9 = 4. أوجد قيمة x. x = ؟",
    "answer": 13,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at x − 9 = 4. The operation applied to x is subtraction of 9.",
            "explanation_ar": "انظر إلى x − 9 = 4. العملية المطبّقة على x هي الطرح بـ 9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The inverse of subtracting 9 is adding 9. Note: 4 + 9 = 13.",
            "explanation_ar": "عكس الطرح بـ 9 هو الجمع بـ 9. لاحظ: 4 + 9 = 13."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Apply the inverse to both sides: x − 9 + 9 = 4 + 9, giving x = 13.",
            "explanation_ar": "طبّق العكس على الطرفين: x − 9 + 9 = 4 + 9، فينتج x = 13."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 13 − 9 = 4 ✓. The answer is x = 13.",
            "explanation_ar": "تحقق: 13 − 9 = 4 ✓. الإجابة هي x = 13."
          }
        ],
        "hint_en": "Subtraction is undone by addition — add 9 to both sides.",
        "hint_ar": "الطرح يُعكس بالجمع — أضف 9 إلى كلا الطرفين.",
        "result_en": "x = 13",
        "result_ar": "x = 13"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is x − 9 = 4. The constant on the left side is −9.",
            "explanation_ar": "المعادلة هي x − 9 = 4. الثابت على الطرف الأيسر هو −9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add 9 to both sides to isolate x: x − 9 + 9 = 4 + 9.",
            "explanation_ar": "أضف 9 إلى كلا الطرفين لعزل x: x − 9 + 9 = 4 + 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Simplify: x = 13.",
            "explanation_ar": "بسّط: x = 13."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 13 − 9 = 4 ✓. The solution is x = 13.",
            "explanation_ar": "عوّض: 13 − 9 = 4 ✓. الحل هو x = 13."
          }
        ],
        "hint_en": "Move −9 to the right by adding 9 to both sides.",
        "hint_ar": "انقل −9 إلى اليمين بإضافة 9 إلى كلا الطرفين.",
        "result_en": "x = 13",
        "result_ar": "x = 13"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a balance scale. The left pan has a mystery box (x) with 9 coins removed. The right pan holds 4 coins. The scale is balanced.",
            "explanation_ar": "تخيّل ميزاناً. الكفة اليسرى تحتوي صندوقاً مجهولاً (x) بعد إزالة 9 عملات منه. الكفة اليمنى تحمل 4 عملات. الميزان متوازن."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "To restore the box to its full weight, add 9 coins to each pan: left pan becomes x, right pan becomes 4 + 9 = 13 coins.",
            "explanation_ar": "لاستعادة الوزن الكامل للصندوق، أضف 9 عملات لكل كفة: الكفة اليسرى تصبح x، والكفة اليمنى تصبح 4 + 9 = 13 عملة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The balance shows x on the left and 13 on the right. So x = 13.",
            "explanation_ar": "يُظهر الميزان x على اليسار و13 على اليمين. إذن x = 13."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: 13 − 9 = 4 ✓. The mystery box holds 13.",
            "explanation_ar": "تأكيد: 13 − 9 = 4 ✓. الصندوق المجهول يحتوي على 13."
          }
        ],
        "hint_en": "If 9 coins were taken away and 4 remain, how many were there originally?",
        "hint_ar": "إذا أُزيلت 9 عملات وبقيت 4، فكم كان العدد في الأصل؟",
        "result_en": "x = 13",
        "result_ar": "x = 13"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-alg-easy-003",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Easy",
    "question_en": "6x = 42. Solve for x. x = ?",
    "question_ar": "6x = 42. أوجد قيمة x. x = ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 6x = 42. The operation applied to x is multiplication by 6.",
            "explanation_ar": "انظر إلى 6x = 42. العملية المطبّقة على x هي الضرب في 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The inverse of multiplying by 6 is dividing by 6. Note: 42 ÷ 6 = 7.",
            "explanation_ar": "عكس الضرب في 6 هو القسمة على 6. لاحظ: 42 ÷ 6 = 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Divide both sides by 6: 6x ÷ 6 = 42 ÷ 6, giving x = 7.",
            "explanation_ar": "اقسم الطرفين على 6: 6x ÷ 6 = 42 ÷ 6، فينتج x = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 6 × 7 = 42 ✓. The answer is x = 7.",
            "explanation_ar": "تحقق: 6 × 7 = 42 ✓. الإجابة هي x = 7."
          }
        ],
        "hint_en": "Multiplication is undone by division — divide both sides by 6.",
        "hint_ar": "الضرب يُعكس بالقسمة — اقسم كلا الطرفين على 6.",
        "result_en": "x = 7",
        "result_ar": "x = 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is 6x = 42. The coefficient of x is 6.",
            "explanation_ar": "المعادلة هي 6x = 42. معامل x هو 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Divide both sides by the coefficient 6 to isolate x: 6x ÷ 6 = 42 ÷ 6.",
            "explanation_ar": "اقسم كلا الطرفين على المعامل 6 لعزل x: 6x ÷ 6 = 42 ÷ 6."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Simplify: x = 7.",
            "explanation_ar": "بسّط: x = 7."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 6 × 7 = 42 ✓. The solution is x = 7.",
            "explanation_ar": "عوّض: 6 × 7 = 42 ✓. الحل هو x = 7."
          }
        ],
        "hint_en": "Ask yourself: 6 times what number equals 42?",
        "hint_ar": "اسأل نفسك: 6 مضروباً في أي عدد يساوي 42؟",
        "result_en": "x = 7",
        "result_ar": "x = 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 6 identical mystery boxes on the left pan of a balance scale. Together they weigh 42 units on the right pan.",
            "explanation_ar": "تخيّل 6 صناديق مجهولة متطابقة على الكفة اليسرى من الميزان. مجموع أوزانها 42 وحدة على الكفة اليمنى."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Divide the 42 units equally among 6 boxes: 42 ÷ 6 = 7 units per box. Each box weighs 7.",
            "explanation_ar": "وزّع الـ 42 وحدة بالتساوي على 6 صناديق: 42 ÷ 6 = 7 وحدات لكل صندوق. كل صندوق يزن 7."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "One box = 7. Therefore x = 7.",
            "explanation_ar": "صندوق واحد = 7. إذن x = 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: 6 × 7 = 42 ✓. Each mystery box holds 7.",
            "explanation_ar": "تأكيد: 6 × 7 = 42 ✓. كل صندوق مجهول يحمل قيمة 7."
          }
        ],
        "hint_en": "Split 42 equally into 6 groups — how many are in each group?",
        "hint_ar": "قسّم 42 بالتساوي على 6 مجموعات — كم في كل مجموعة؟",
        "result_en": "x = 7",
        "result_ar": "x = 7"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-alg-medium-001",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "2x + 5 = 17. Solve for x. x = ?",
    "question_ar": "2x + 5 = 17. أوجد قيمة x. x = ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 2x + 5 = 17. Two operations are applied to x: first multiply by 2, then add 5.",
            "explanation_ar": "انظر إلى 2x + 5 = 17. عمليتان مطبّقتان على x: أولاً الضرب في 2، ثم الجمع بـ 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Reverse the operations in opposite order: first undo the +5 by subtracting 5: 17 − 5 = 12. Then undo ×2 by dividing: 12 ÷ 2 = 6.",
            "explanation_ar": "اعكس العمليات بترتيب معاكس: أولاً ألغِ الجمع بـ 5 بالطرح: 17 − 5 = 12. ثم ألغِ الضرب في 2 بالقسمة: 12 ÷ 2 = 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Step 1: 2x + 5 − 5 = 17 − 5 → 2x = 12. Step 2: 2x ÷ 2 = 12 ÷ 2 → x = 6.",
            "explanation_ar": "الخطوة 1: 2x + 5 − 5 = 17 − 5 → 2x = 12. الخطوة 2: 2x ÷ 2 = 12 ÷ 2 → x = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 2(6) + 5 = 12 + 5 = 17 ✓. The answer is x = 6.",
            "explanation_ar": "تحقق: 2(6) + 5 = 12 + 5 = 17 ✓. الإجابة هي x = 6."
          }
        ],
        "hint_en": "Work backwards: subtract 5 first, then divide by 2.",
        "hint_ar": "اعمل بالترتيب المعكوس: اطرح 5 أولاً، ثم اقسم على 2.",
        "result_en": "x = 6",
        "result_ar": "x = 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is 2x + 5 = 17. There are two parts: the constant +5 and the coefficient 2 on x.",
            "explanation_ar": "المعادلة هي 2x + 5 = 17. هناك جزآن: الثابت +5 ومعامل x وهو 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "First, eliminate the constant: subtract 5 from both sides → 2x = 17 − 5 = 12.",
            "explanation_ar": "أولاً، تخلّص من الثابت: اطرح 5 من كلا الطرفين → 2x = 17 − 5 = 12."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Now eliminate the coefficient: divide both sides by 2 → x = 12 ÷ 2 = 6.",
            "explanation_ar": "الآن تخلّص من المعامل: اقسم كلا الطرفين على 2 → x = 12 ÷ 2 = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 2(6) + 5 = 17 ✓. The solution is x = 6.",
            "explanation_ar": "عوّض: 2(6) + 5 = 17 ✓. الحل هو x = 6."
          }
        ],
        "hint_en": "Two steps: subtract the constant first, then divide by the coefficient.",
        "hint_ar": "خطوتان: اطرح الثابت أولاً، ثم اقسم على المعامل.",
        "result_en": "x = 6",
        "result_ar": "x = 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a balance scale: left pan has 2 mystery boxes and 5 extra coins; right pan has 17 coins. The scale is level.",
            "explanation_ar": "تخيّل ميزاناً: الكفة اليسرى تحتوي 2 صندوق مجهول و5 عملات إضافية؛ الكفة اليمنى تحتوي 17 عملة. الميزان متوازن."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 5 coins from each pan: left has 2 boxes, right has 12 coins. The scale stays level.",
            "explanation_ar": "أزل 5 عملات من كل كفة: اليسرى تحتوي 2 صندوق، اليمنى تحتوي 12 عملة. الميزان لا يزال متوازناً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "2 boxes = 12 coins. Divide equally: each box = 6 coins. So x = 6.",
            "explanation_ar": "2 صندوق = 12 عملة. قسّم بالتساوي: كل صندوق = 6 عملات. إذن x = 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: 2(6) + 5 = 17 ✓. Each box weighs 6.",
            "explanation_ar": "تأكيد: 2(6) + 5 = 17 ✓. كل صندوق يزن 6."
          }
        ],
        "hint_en": "Remove the loose coins first, then split what's left equally between the boxes.",
        "hint_ar": "أزل العملات الحرة أولاً، ثم قسّم ما تبقى بالتساوي على الصناديق.",
        "result_en": "x = 6",
        "result_ar": "x = 6"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-alg-medium-002",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "3x − 8 = 13. Solve for x. x = ?",
    "question_ar": "3x − 8 = 13. أوجد قيمة x. x = ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 3x − 8 = 13. Two operations on x: multiply by 3, then subtract 8.",
            "explanation_ar": "انظر إلى 3x − 8 = 13. عمليتان على x: الضرب في 3، ثم الطرح بـ 8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Reverse order: undo −8 first by adding 8: 13 + 8 = 21. Then undo ×3 by dividing: 21 ÷ 3 = 7.",
            "explanation_ar": "الترتيب المعكوس: ألغِ −8 أولاً بالجمع بـ 8: 13 + 8 = 21. ثم ألغِ الضرب في 3 بالقسمة: 21 ÷ 3 = 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Step 1: 3x − 8 + 8 = 13 + 8 → 3x = 21. Step 2: 3x ÷ 3 = 21 ÷ 3 → x = 7.",
            "explanation_ar": "الخطوة 1: 3x − 8 + 8 = 13 + 8 → 3x = 21. الخطوة 2: 3x ÷ 3 = 21 ÷ 3 → x = 7."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 3(7) − 8 = 21 − 8 = 13 ✓. The answer is x = 7.",
            "explanation_ar": "تحقق: 3(7) − 8 = 21 − 8 = 13 ✓. الإجابة هي x = 7."
          }
        ],
        "hint_en": "Work backwards: add 8 first, then divide by 3.",
        "hint_ar": "اعمل بالترتيب المعكوس: أضف 8 أولاً، ثم اقسم على 3.",
        "result_en": "x = 7",
        "result_ar": "x = 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is 3x − 8 = 13. Identify the constant −8 and the coefficient 3.",
            "explanation_ar": "المعادلة هي 3x − 8 = 13. حدّد الثابت −8 والمعامل 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Eliminate the constant first: add 8 to both sides → 3x = 13 + 8 = 21.",
            "explanation_ar": "تخلّص من الثابت أولاً: أضف 8 لكلا الطرفين → 3x = 13 + 8 = 21."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Eliminate the coefficient: divide both sides by 3 → x = 21 ÷ 3 = 7.",
            "explanation_ar": "تخلّص من المعامل: اقسم كلا الطرفين على 3 → x = 21 ÷ 3 = 7."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 3(7) − 8 = 21 − 8 = 13 ✓. The solution is x = 7.",
            "explanation_ar": "عوّض: 3(7) − 8 = 21 − 8 = 13 ✓. الحل هو x = 7."
          }
        ],
        "hint_en": "Add 8 to both sides first to isolate the term with x.",
        "hint_ar": "أضف 8 إلى كلا الطرفين أولاً لعزل الحد الذي يحتوي x.",
        "result_en": "x = 7",
        "result_ar": "x = 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a balance scale: left pan has 3 mystery boxes with 8 coins removed; right pan has 13 coins. The scale is balanced.",
            "explanation_ar": "تخيّل ميزاناً: الكفة اليسرى تحتوي 3 صناديق مجهولة بعد إزالة 8 عملات؛ الكفة اليمنى تحتوي 13 عملة. الميزان متوازن."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Restore the 8 removed coins by adding 8 to each side: left has 3 boxes, right has 21 coins.",
            "explanation_ar": "أعد الـ 8 عملات المُزالة بإضافة 8 لكل جانب: اليسرى تحتوي 3 صناديق، اليمنى تحتوي 21 عملة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "3 boxes = 21 coins. Divide equally: each box = 7 coins. So x = 7.",
            "explanation_ar": "3 صناديق = 21 عملة. قسّم بالتساوي: كل صندوق = 7 عملات. إذن x = 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: 3(7) − 8 = 13 ✓. Each box weighs 7.",
            "explanation_ar": "تأكيد: 3(7) − 8 = 13 ✓. كل صندوق يزن 7."
          }
        ],
        "hint_en": "Add back the 8 removed coins, then share the total among 3 boxes.",
        "hint_ar": "أعد الـ 8 عملات المُزالة، ثم وزّع المجموع على 3 صناديق.",
        "result_en": "x = 7",
        "result_ar": "x = 7"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-alg-medium-003",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Medium",
    "question_en": "4x + 9 = 33. Solve for x. x = ?",
    "question_ar": "4x + 9 = 33. أوجد قيمة x. x = ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 4x + 9 = 33. Two operations on x: multiply by 4, then add 9.",
            "explanation_ar": "انظر إلى 4x + 9 = 33. عمليتان على x: الضرب في 4، ثم الجمع بـ 9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Reverse order: undo +9 by subtracting 9: 33 − 9 = 24. Then undo ×4 by dividing: 24 ÷ 4 = 6.",
            "explanation_ar": "الترتيب المعكوس: ألغِ +9 بالطرح: 33 − 9 = 24. ثم ألغِ الضرب في 4 بالقسمة: 24 ÷ 4 = 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Step 1: 4x + 9 − 9 = 33 − 9 → 4x = 24. Step 2: 4x ÷ 4 = 24 ÷ 4 → x = 6.",
            "explanation_ar": "الخطوة 1: 4x + 9 − 9 = 33 − 9 → 4x = 24. الخطوة 2: 4x ÷ 4 = 24 ÷ 4 → x = 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 4(6) + 9 = 24 + 9 = 33 ✓. The answer is x = 6.",
            "explanation_ar": "تحقق: 4(6) + 9 = 24 + 9 = 33 ✓. الإجابة هي x = 6."
          }
        ],
        "hint_en": "Subtract 9 first to strip the constant, then divide by 4.",
        "hint_ar": "اطرح 9 أولاً للتخلّص من الثابت، ثم اقسم على 4.",
        "result_en": "x = 6",
        "result_ar": "x = 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is 4x + 9 = 33. Identify the constant +9 and coefficient 4.",
            "explanation_ar": "المعادلة هي 4x + 9 = 33. حدّد الثابت +9 والمعامل 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 9 from both sides: 4x = 33 − 9 = 24.",
            "explanation_ar": "اطرح 9 من كلا الطرفين: 4x = 33 − 9 = 24."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide both sides by 4: x = 24 ÷ 4 = 6.",
            "explanation_ar": "اقسم كلا الطرفين على 4: x = 24 ÷ 4 = 6."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 4(6) + 9 = 33 ✓. The solution is x = 6.",
            "explanation_ar": "عوّض: 4(6) + 9 = 33 ✓. الحل هو x = 6."
          }
        ],
        "hint_en": "Strip the +9 away first, then share the remaining total among 4 groups.",
        "hint_ar": "أزل الـ +9 أولاً، ثم وزّع المتبقي على 4 مجموعات.",
        "result_en": "x = 6",
        "result_ar": "x = 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a balance scale: left pan has 4 mystery boxes and 9 extra coins; right pan has 33 coins. The scale is balanced.",
            "explanation_ar": "تخيّل ميزاناً: الكفة اليسرى تحتوي 4 صناديق مجهولة و9 عملات إضافية؛ الكفة اليمنى تحتوي 33 عملة. الميزان متوازن."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 9 coins from each side: left has 4 boxes, right has 24 coins. Scale stays level.",
            "explanation_ar": "أزل 9 عملات من كل جانب: اليسرى تحتوي 4 صناديق، اليمنى تحتوي 24 عملة. الميزان يبقى متوازناً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "4 boxes = 24 coins → each box = 6 coins. So x = 6.",
            "explanation_ar": "4 صناديق = 24 عملة → كل صندوق = 6 عملات. إذن x = 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: 4(6) + 9 = 33 ✓. Each box weighs 6.",
            "explanation_ar": "تأكيد: 4(6) + 9 = 33 ✓. كل صندوق يزن 6."
          }
        ],
        "hint_en": "Clear the 9 loose coins first, then divide the rest among 4 boxes.",
        "hint_ar": "أزل الـ 9 عملات الحرة أولاً، ثم قسّم الباقي على 4 صناديق.",
        "result_en": "x = 6",
        "result_ar": "x = 6"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-alg-hard-001",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "5x − 12 = 33. Solve for x. x = ?",
    "question_ar": "5x − 12 = 33. أوجد قيمة x. x = ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 5x − 12 = 33. Two operations on x: multiply by 5, then subtract 12.",
            "explanation_ar": "انظر إلى 5x − 12 = 33. عمليتان على x: الضرب في 5، ثم الطرح بـ 12."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Reverse order: undo −12 by adding 12: 33 + 12 = 45. Then undo ×5 by dividing: 45 ÷ 5 = 9.",
            "explanation_ar": "الترتيب المعكوس: ألغِ −12 بالجمع بـ 12: 33 + 12 = 45. ثم ألغِ الضرب في 5 بالقسمة: 45 ÷ 5 = 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Step 1: 5x − 12 + 12 = 33 + 12 → 5x = 45. Step 2: 5x ÷ 5 = 45 ÷ 5 → x = 9.",
            "explanation_ar": "الخطوة 1: 5x − 12 + 12 = 33 + 12 → 5x = 45. الخطوة 2: 5x ÷ 5 = 45 ÷ 5 → x = 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 5(9) − 12 = 45 − 12 = 33 ✓. The answer is x = 9.",
            "explanation_ar": "تحقق: 5(9) − 12 = 45 − 12 = 33 ✓. الإجابة هي x = 9."
          }
        ],
        "hint_en": "Add 12 to both sides first to cancel the −12, then divide by 5.",
        "hint_ar": "أضف 12 لكلا الطرفين أولاً لإلغاء −12، ثم اقسم على 5.",
        "result_en": "x = 9",
        "result_ar": "x = 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is 5x − 12 = 33. Identify the constant −12 and coefficient 5.",
            "explanation_ar": "المعادلة هي 5x − 12 = 33. حدّد الثابت −12 والمعامل 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add 12 to both sides to isolate the x term: 5x = 33 + 12 = 45.",
            "explanation_ar": "أضف 12 إلى كلا الطرفين لعزل حد x: 5x = 33 + 12 = 45."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide both sides by 5: x = 45 ÷ 5 = 9.",
            "explanation_ar": "اقسم كلا الطرفين على 5: x = 45 ÷ 5 = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 5(9) − 12 = 45 − 12 = 33 ✓. The solution is x = 9.",
            "explanation_ar": "عوّض: 5(9) − 12 = 45 − 12 = 33 ✓. الحل هو x = 9."
          }
        ],
        "hint_en": "First bring the 12 to the right side, giving 5x = 45, then divide.",
        "hint_ar": "أولاً انقل الـ 12 إلى الطرف الأيمن لتحصل على 5x = 45، ثم اقسم.",
        "result_en": "x = 9",
        "result_ar": "x = 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a balance scale: left pan has 5 mystery boxes with 12 coins removed; right pan has 33 coins. The scale is balanced.",
            "explanation_ar": "تخيّل ميزاناً: الكفة اليسرى تحتوي 5 صناديق مجهولة بعد إزالة 12 عملة؛ الكفة اليمنى تحتوي 33 عملة. الميزان متوازن."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Add 12 coins to each side to restore the boxes: left has 5 full boxes, right has 33 + 12 = 45 coins.",
            "explanation_ar": "أضف 12 عملة لكل جانب لاستعادة الصناديق كاملة: اليسرى تحتوي 5 صناديق كاملة، اليمنى تحتوي 33 + 12 = 45 عملة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "5 boxes = 45 coins → each box = 9 coins. So x = 9.",
            "explanation_ar": "5 صناديق = 45 عملة → كل صندوق = 9 عملات. إذن x = 9."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: 5(9) − 12 = 33 ✓. Each box holds 9.",
            "explanation_ar": "تأكيد: 5(9) − 12 = 33 ✓. كل صندوق يحمل 9."
          }
        ],
        "hint_en": "Refill the 12 missing coins on each side, then divide 45 among 5 boxes.",
        "hint_ar": "أعد الـ 12 عملة الناقصة لكل جانب، ثم قسّم 45 على 5 صناديق.",
        "result_en": "x = 9",
        "result_ar": "x = 9"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-alg-hard-002",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "−3x + 15 = 6. Solve for x. x = ?",
    "question_ar": "−3x + 15 = 6. أوجد قيمة x. x = ؟",
    "answer": 3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at −3x + 15 = 6. Two operations on x: multiply by −3, then add 15.",
            "explanation_ar": "انظر إلى −3x + 15 = 6. عمليتان على x: الضرب في −3، ثم الجمع بـ 15."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Reverse order: undo +15 by subtracting 15: 6 − 15 = −9. Then undo ×(−3) by dividing: −9 ÷ (−3) = 3.",
            "explanation_ar": "الترتيب المعكوس: ألغِ +15 بالطرح: 6 − 15 = −9. ثم ألغِ الضرب في −3 بالقسمة: −9 ÷ (−3) = 3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Step 1: −3x + 15 − 15 = 6 − 15 → −3x = −9. Step 2: −3x ÷ (−3) = −9 ÷ (−3) → x = 3.",
            "explanation_ar": "الخطوة 1: −3x + 15 − 15 = 6 − 15 → −3x = −9. الخطوة 2: −3x ÷ (−3) = −9 ÷ (−3) → x = 3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: −3(3) + 15 = −9 + 15 = 6 ✓. The answer is x = 3.",
            "explanation_ar": "تحقق: −3(3) + 15 = −9 + 15 = 6 ✓. الإجابة هي x = 3."
          }
        ],
        "hint_en": "Subtract 15 from both sides first, then divide by −3 (remember: negative ÷ negative = positive).",
        "hint_ar": "اطرح 15 من كلا الطرفين أولاً، ثم اقسم على −3 (تذكر: سالب ÷ سالب = موجب).",
        "result_en": "x = 3",
        "result_ar": "x = 3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is −3x + 15 = 6. Identify the constant +15 and the negative coefficient −3.",
            "explanation_ar": "المعادلة هي −3x + 15 = 6. حدّد الثابت +15 والمعامل السالب −3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 15 from both sides: −3x = 6 − 15 = −9.",
            "explanation_ar": "اطرح 15 من كلا الطرفين: −3x = 6 − 15 = −9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide both sides by −3: x = −9 ÷ (−3) = 3. Dividing two negatives gives a positive.",
            "explanation_ar": "اقسم كلا الطرفين على −3: x = −9 ÷ (−3) = 3. قسمة سالب على سالب تعطي موجباً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: −3(3) + 15 = −9 + 15 = 6 ✓. The solution is x = 3.",
            "explanation_ar": "عوّض: −3(3) + 15 = −9 + 15 = 6 ✓. الحل هو x = 3."
          }
        ],
        "hint_en": "Move +15 to the right side to get −3x = −9, then divide by −3.",
        "hint_ar": "انقل +15 إلى الطرف الأيمن لتحصل على −3x = −9، ثم اقسم على −3.",
        "result_en": "x = 3",
        "result_ar": "x = 3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a balance scale. The left pan has 15 coins minus 3 mystery boxes (the boxes are negative weights pulling the scale up). The right pan has 6 coins.",
            "explanation_ar": "تخيّل ميزاناً. الكفة اليسرى تحتوي 15 عملة ناقص 3 صناديق مجهولة (الصناديق أوزان سالبة ترفع الكفة). الكفة اليمنى تحتوي 6 عملات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 15 coins from each pan: left has −3 boxes (i.e., 3 boxes pulling upward = −3x), right has 6 − 15 = −9. So −3x = −9.",
            "explanation_ar": "أزل 15 عملة من كل كفة: اليسرى تحتوي −3 صناديق، اليمنى تحتوي 6 − 15 = −9. إذن −3x = −9."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "3 upward-pulling boxes balance −9 (a force of 9 downward). One box exerts a pull equal to 3. So x = 3.",
            "explanation_ar": "3 صناديق تسحب للأعلى توازن −9 (قوة 9 للأسفل). كل صندوق يعادل 3. إذن x = 3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: −3(3) + 15 = −9 + 15 = 6 ✓. x = 3.",
            "explanation_ar": "تأكيد: −3(3) + 15 = −9 + 15 = 6 ✓. x = 3."
          }
        ],
        "hint_en": "Take away 15 from both sides, then think: 3 boxes with negative weight equal −9, so each box = 3.",
        "hint_ar": "أزل 15 من كلا الجانبين، ثم فكّر: 3 صناديق بوزن سالب تساوي −9، إذن كل صندوق = 3.",
        "result_en": "x = 3",
        "result_ar": "x = 3"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-alg-hard-003",
    "grade": 7,
    "bank": "specific",
    "category": "Algebra",
    "level": "Hard",
    "question_en": "7x + 14 = −7. Solve for x. x = ?",
    "question_ar": "7x + 14 = −7. أوجد قيمة x. x = ؟",
    "answer": -3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Look at 7x + 14 = −7. Two operations on x: multiply by 7, then add 14. The right side is negative, which signals a negative answer.",
            "explanation_ar": "انظر إلى 7x + 14 = −7. عمليتان على x: الضرب في 7، ثم الجمع بـ 14. الطرف الأيمن سالب، مما يشير إلى أن الإجابة ستكون سالبة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Reverse order: undo +14 by subtracting 14: −7 − 14 = −21. Then undo ×7 by dividing: −21 ÷ 7 = −3.",
            "explanation_ar": "الترتيب المعكوس: ألغِ +14 بالطرح: −7 − 14 = −21. ثم ألغِ الضرب في 7 بالقسمة: −21 ÷ 7 = −3."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Step 1: 7x + 14 − 14 = −7 − 14 → 7x = −21. Step 2: 7x ÷ 7 = −21 ÷ 7 → x = −3.",
            "explanation_ar": "الخطوة 1: 7x + 14 − 14 = −7 − 14 → 7x = −21. الخطوة 2: 7x ÷ 7 = −21 ÷ 7 → x = −3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Check: 7(−3) + 14 = −21 + 14 = −7 ✓. The answer is x = −3.",
            "explanation_ar": "تحقق: 7(−3) + 14 = −21 + 14 = −7 ✓. الإجابة هي x = −3."
          }
        ],
        "hint_en": "Subtract 14 from both sides first; dividing a negative number by a positive gives a negative result.",
        "hint_ar": "اطرح 14 من كلا الطرفين أولاً؛ قسمة عدد سالب على موجب تعطي ناتجاً سالباً.",
        "result_en": "x = −3",
        "result_ar": "x = −3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The equation is 7x + 14 = −7. Identify the constant +14 and coefficient 7.",
            "explanation_ar": "المعادلة هي 7x + 14 = −7. حدّد الثابت +14 والمعامل 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract 14 from both sides: 7x = −7 − 14 = −21.",
            "explanation_ar": "اطرح 14 من كلا الطرفين: 7x = −7 − 14 = −21."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Divide both sides by 7: x = −21 ÷ 7 = −3. A negative divided by a positive is negative.",
            "explanation_ar": "اقسم كلا الطرفين على 7: x = −21 ÷ 7 = −3. سالب مقسوم على موجب يساوي سالباً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Substitute: 7(−3) + 14 = −21 + 14 = −7 ✓. The solution is x = −3.",
            "explanation_ar": "عوّض: 7(−3) + 14 = −21 + 14 = −7 ✓. الحل هو x = −3."
          }
        ],
        "hint_en": "After subtracting 14, you get 7x = −21; dividing by 7 gives a negative answer.",
        "hint_ar": "بعد طرح 14 تحصل على 7x = −21؛ القسمة على 7 تعطي إجابة سالبة.",
        "result_en": "x = −3",
        "result_ar": "x = −3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a balance scale: left pan has 7 mystery boxes and 14 coins; right pan has −7 (a debt of 7 coins, shown as a red weight). The scale is balanced.",
            "explanation_ar": "تخيّل ميزاناً: الكفة اليسرى تحتوي 7 صناديق مجهولة و14 عملة؛ الكفة اليمنى تحتوي −7 (دين من 7 عملات، يُمثَّل بوزن أحمر). الميزان متوازن."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Remove 14 coins from each side: left has 7 boxes, right has −7 − 14 = −21. So 7 boxes balance −21.",
            "explanation_ar": "أزل 14 عملة من كل جانب: اليسرى تحتوي 7 صناديق، اليمنى تحتوي −7 − 14 = −21. إذن 7 صناديق توازن −21."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "7 boxes = −21 → each box = −21 ÷ 7 = −3. Each box carries a negative value of 3. So x = −3.",
            "explanation_ar": "7 صناديق = −21 → كل صندوق = −21 ÷ 7 = −3. كل صندوق يحمل قيمة سالبة مقدارها 3. إذن x = −3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Confirm: 7(−3) + 14 = −21 + 14 = −7 ✓. The mystery value is −3.",
            "explanation_ar": "تأكيد: 7(−3) + 14 = −21 + 14 = −7 ✓. القيمة المجهولة هي −3."
          }
        ],
        "hint_en": "Remove the 14 coins from both sides; the 7 boxes then balance −21, so each box = −3.",
        "hint_ar": "أزل الـ 14 عملة من كلا الجانبين؛ الصناديق السبعة توازن −21، إذن كل صندوق = −3.",
        "result_en": "x = −3",
        "result_ar": "x = −3"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "algebra"
    }
  },
  {
    "id": "g7-specific-pct-easy-001",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A jacket costs $60. After a 20% discount, the sale price = ?",
    "question_ar": "سعر سترة 60 دولاراً. بعد خصم 20%، سعر البيع = ؟",
    "answer": 48,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "A 20% discount means you pay 100% − 20% = 80% of the original price. Convert 80% to a decimal multiplier: 80% = 0.8.",
            "explanation_ar": "خصم 20% يعني أنك تدفع 100% − 20% = 80% من السعر الأصلي. حوّل 80% إلى معامل عشري: 80% = 0.8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply: 60 × 0.8. Think of it as 6 × 8 = 48, then adjust the decimal: 60 × 0.8 = 48.",
            "explanation_ar": "اضرب: 60 × 0.8. فكّر في الأمر هكذا: 6 × 8 = 48، ثم اضبط المنزلة العشرية: 60 × 0.8 = 48."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sale price = original price × (1 − discount rate) = 60 × 0.8 = 48.",
            "explanation_ar": "سعر البيع = السعر الأصلي × (1 − نسبة الخصم) = 60 × 0.8 = 48."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The sale price is $48.",
            "explanation_ar": "سعر البيع هو 48 دولاراً."
          }
        ],
        "hint_en": "Convert 20% discount to 'pay 80%': multiply $60 by 0.8 in one step.",
        "hint_ar": "حوّل خصم 20% إلى 'ادفع 80%': اضرب 60 دولاراً في 0.8 في خطوة واحدة.",
        "result_en": "Sale price = $48",
        "result_ar": "سعر البيع = 48 دولاراً"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find 20% of $60. Split 20% into 2 × 10%. First find 10% of 60: 10% of 60 = 6.",
            "explanation_ar": "أوجد 20% من 60 دولاراً. قسّم 20% إلى 2 × 10%. أولاً أوجد 10% من 60: 10% من 60 = 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20% = 2 × 10%, so 20% of 60 = 2 × 6 = 12. This is the discount amount.",
            "explanation_ar": "20% = 2 × 10%، إذن 20% من 60 = 2 × 6 = 12. هذا هو مقدار الخصم."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Sale price = original − discount = 60 − 12 = 48.",
            "explanation_ar": "سعر البيع = السعر الأصلي − الخصم = 60 − 12 = 48."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 48 is 80% of 60 because 48 ÷ 60 = 0.8 ✓. The sale price is $48.",
            "explanation_ar": "تحقق: 48 هي 80% من 60 لأن 48 ÷ 60 = 0.8 ✓. سعر البيع هو 48 دولاراً."
          }
        ],
        "hint_en": "Find 10% of $60 = $6, then double it for 20% = $12 discount. Subtract from $60.",
        "hint_ar": "أوجد 10% من 60 دولاراً = 6 دولارات، ثم ضاعفها للحصول على 20% = 12 دولاراً خصماً. اطرحها من 60 دولاراً.",
        "result_en": "Sale price = $48",
        "result_ar": "سعر البيع = 48 دولاراً"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a price tag of $60 split into 100 equal squares. Each square = $0.60.",
            "explanation_ar": "تخيّل بطاقة سعر 60 دولاراً مقسّمة إلى 100 مربع متساوٍ. كل مربع = 0.60 دولار."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 20 squares red to show the 20% discount (20 × $0.60 = $12 removed). Leave 80 squares green (the part you pay).",
            "explanation_ar": "ظلّل 20 مربعاً باللون الأحمر لتمثيل خصم 20% (20 × 0.60 دولار = 12 دولاراً تُحذف). اترك 80 مربعاً خضراً (الجزء الذي تدفعه)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "80 green squares remain. 80 × $0.60 = $48.",
            "explanation_ar": "تبقى 80 مربعاً خضراً. 80 × 0.60 دولار = 48 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The 80 unshaded squares represent the sale price: $48.",
            "explanation_ar": "تمثّل المربعات الـ80 غير المظلّلة سعر البيع: 48 دولاراً."
          }
        ],
        "hint_en": "Draw a 100-square bar worth $60 total. Cross out 20 squares (the discount). Count the remaining 80 squares.",
        "hint_ar": "ارسم شريطاً من 100 مربع بقيمة إجمالية 60 دولاراً. اشطب 20 مربعاً (الخصم). اعدّ المربعات الـ80 المتبقية.",
        "result_en": "Sale price = $48",
        "result_ar": "سعر البيع = 48 دولاراً"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-pct-easy-002",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A price increases by 15% from $200. New price = ?",
    "question_ar": "ارتفع سعر بنسبة 15% من 200 دولار. السعر الجديد = ؟",
    "answer": 230,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "A 15% increase means the new price is 100% + 15% = 115% of the original. Convert to a multiplier: 115% = 1.15.",
            "explanation_ar": "زيادة 15% تعني أن السعر الجديد هو 100% + 15% = 115% من الأصل. حوّله إلى معامل: 115% = 1.15."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply: 200 × 1.15. Split: 200 × 1 = 200 and 200 × 0.15 = 30.",
            "explanation_ar": "اضرب: 200 × 1.15. قسّم: 200 × 1 = 200 و200 × 0.15 = 30."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "New price = 200 × 1.15 = 200 + 30 = 230.",
            "explanation_ar": "السعر الجديد = 200 × 1.15 = 200 + 30 = 230."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The new price is $230.",
            "explanation_ar": "السعر الجديد هو 230 دولاراً."
          }
        ],
        "hint_en": "15% increase → multiply by 1.15. Note: 200 × 0.15 = 30, so 200 + 30 = 230.",
        "hint_ar": "زيادة 15% → اضرب في 1.15. لاحظ: 200 × 0.15 = 30، إذن 200 + 30 = 230.",
        "result_en": "New price = $230",
        "result_ar": "السعر الجديد = 230 دولاراً"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find 15% of $200. Break 15% into 10% + 5%. Find 10% of 200: 10% of 200 = 20.",
            "explanation_ar": "أوجد 15% من 200 دولار. قسّم 15% إلى 10% + 5%. أوجد 10% من 200: 10% من 200 = 20."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5% is half of 10%, so 5% of 200 = 10. Total increase = 10% + 5% = 20 + 10 = 30.",
            "explanation_ar": "5% هي نصف 10%، إذن 5% من 200 = 10. إجمالي الزيادة = 10% + 5% = 20 + 10 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "New price = original + increase = 200 + 30 = 230.",
            "explanation_ar": "السعر الجديد = الأصلي + الزيادة = 200 + 30 = 230."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 30 ÷ 200 = 0.15 = 15% ✓. New price is $230.",
            "explanation_ar": "تحقق: 30 ÷ 200 = 0.15 = 15% ✓. السعر الجديد هو 230 دولاراً."
          }
        ],
        "hint_en": "Find 10% of $200 = $20, then half of that for 5% = $10. Add together: 15% = $30 increase.",
        "hint_ar": "أوجد 10% من 200 دولار = 20 دولاراً، ثم نصفها لـ5% = 10 دولارات. اجمع: 15% = 30 دولار زيادة.",
        "result_en": "New price = $230",
        "result_ar": "السعر الجديد = 230 دولاراً"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a bar representing $200 = 100 squares, each worth $2.",
            "explanation_ar": "تخيّل شريطاً يمثّل 200 دولار = 100 مربع، كل مربع يساوي 2 دولار."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The original bar is 100 squares. Add 15 extra squares to the right to show the 15% increase: 15 × $2 = $30 added.",
            "explanation_ar": "الشريط الأصلي 100 مربع. أضف 15 مربعاً إضافياً على اليمين لتمثيل زيادة 15%: 15 × 2 دولار = 30 دولاراً تُضاف."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "New total = 115 squares = 115 × $2 = $230.",
            "explanation_ar": "المجموع الجديد = 115 مربعاً = 115 × 2 دولار = 230 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The extended bar (115 squares at $2 each) equals the new price: $230.",
            "explanation_ar": "الشريط الممتد (115 مربعاً بـ2 دولار كل منها) يساوي السعر الجديد: 230 دولاراً."
          }
        ],
        "hint_en": "Draw 100 squares for $200. Each square = $2. Add 15 more squares for 15%. Count all 115 squares × $2.",
        "hint_ar": "ارسم 100 مربع لـ200 دولار. كل مربع = 2 دولار. أضف 15 مربعاً لـ15%. اعدّ كل الـ115 مربعاً × 2 دولار.",
        "result_en": "New price = $230",
        "result_ar": "السعر الجديد = 230 دولاراً"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-pct-easy-003",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Easy",
    "question_en": "A laptop costs $120. After a 25% discount, the sale price = ?",
    "question_ar": "سعر حاسوب محمول 120 دولاراً. بعد خصم 25%، سعر البيع = ؟",
    "answer": 90,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "A 25% discount means you pay 75% of the original price. 75% = 3/4 as a fraction.",
            "explanation_ar": "خصم 25% يعني أنك تدفع 75% من السعر الأصلي. 75% = 3/4 كسراً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Use the fraction: 3/4 of 120. First compute 120 ÷ 4 = 30, then multiply by 3: 30 × 3 = 90.",
            "explanation_ar": "استخدم الكسر: 3/4 من 120. أولاً احسب 120 ÷ 4 = 30، ثم اضرب في 3: 30 × 3 = 90."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sale price = 120 × 3/4 = 90.",
            "explanation_ar": "سعر البيع = 120 × 3/4 = 90."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The sale price is $90.",
            "explanation_ar": "سعر البيع هو 90 دولاراً."
          }
        ],
        "hint_en": "25% discount → pay 75% = 3/4. Divide $120 by 4 to get $30, then multiply by 3.",
        "hint_ar": "خصم 25% → ادفع 75% = 3/4. قسّم 120 دولاراً على 4 للحصول على 30 دولاراً، ثم اضرب في 3.",
        "result_en": "Sale price = $90",
        "result_ar": "سعر البيع = 90 دولاراً"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find 25% of $120. Build 25% from smaller parts: 25% = 2 × 10% + 5%. First, 10% of 120 = 12.",
            "explanation_ar": "أوجد 25% من 120 دولار. ابنِ 25% من أجزاء أصغر: 25% = 2 × 10% + 5%. أولاً، 10% من 120 = 12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "20% of 120 = 2 × 12 = 24. Then 5% = half of 10% = 6. Total: 25% of 120 = 24 + 6 = 30.",
            "explanation_ar": "20% من 120 = 2 × 12 = 24. ثم 5% = نصف 10% = 6. المجموع: 25% من 120 = 24 + 6 = 30."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Sale price = 120 − 30 = 90.",
            "explanation_ar": "سعر البيع = 120 − 30 = 90."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 30 ÷ 120 = 0.25 = 25% ✓. Sale price is $90.",
            "explanation_ar": "تحقق: 30 ÷ 120 = 0.25 = 25% ✓. سعر البيع هو 90 دولاراً."
          }
        ],
        "hint_en": "10% of $120 = $12. So 25% = 2×$12 + $6 = $30 discount. Then $120 − $30 = $90.",
        "hint_ar": "10% من 120 دولار = 12 دولاراً. إذن 25% = 2×12 + 6 = 30 دولاراً خصماً. ثم 120 − 30 = 90 دولاراً.",
        "result_en": "Sale price = $90",
        "result_ar": "سعر البيع = 90 دولاراً"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a bar of 100 squares representing $120. Each square = $1.20.",
            "explanation_ar": "تخيّل شريطاً من 100 مربع يمثّل 120 دولاراً. كل مربع = 1.20 دولار."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade the left quarter (25 squares) in red — that is the discount: 25 × $1.20 = $30. The remaining 75 squares are green.",
            "explanation_ar": "ظلّل الربع الأيسر (25 مربعاً) باللون الأحمر — هذا هو الخصم: 25 × 1.20 دولار = 30 دولاراً. المربعات الـ75 المتبقية خضراء."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "75 green squares: 75 × $1.20 = $90.",
            "explanation_ar": "75 مربعاً خضراء: 75 × 1.20 دولار = 90 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Three-quarters of the bar (75 green squares) shows the sale price: $90.",
            "explanation_ar": "ثلاثة أرباع الشريط (75 مربعاً خضراء) تمثّل سعر البيع: 90 دولاراً."
          }
        ],
        "hint_en": "25% is exactly one quarter. Cross out 1 out of every 4 squares. What's left is 3/4 of $120.",
        "hint_ar": "25% هي بالضبط الربع. اشطب 1 من كل 4 مربعات. ما تبقى هو 3/4 من 120 دولار.",
        "result_en": "Sale price = $90",
        "result_ar": "سعر البيع = 90 دولاراً"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-pct-medium-001",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A price rises from $60 to $75. Percentage increase = ?",
    "question_ar": "ارتفع سعر من 60 دولاراً إلى 75 دولاراً. نسبة الزيادة المئوية = ؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Percentage increase formula: [(new − old) ÷ old] × 100. Identify: new = 75, old = 60.",
            "explanation_ar": "صيغة نسبة الزيادة: [(الجديد − القديم) ÷ القديم] × 100. حدّد: الجديد = 75، القديم = 60."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Change = 75 − 60 = 15. Divide by original: 15 ÷ 60 = 1/4.",
            "explanation_ar": "التغيير = 75 − 60 = 15. اقسم على الأصل: 15 ÷ 60 = 1/4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Convert fraction to percentage: 1/4 = 0.25 = 25%.",
            "explanation_ar": "حوّل الكسر إلى نسبة مئوية: 1/4 = 0.25 = 25%."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The percentage increase is 25%.",
            "explanation_ar": "نسبة الزيادة هي 25%."
          }
        ],
        "hint_en": "Increase = $15. Divide by original $60: 15/60 = 1/4. Convert to %: 25%.",
        "hint_ar": "الزيادة = 15 دولاراً. اقسم على الأصل 60 دولاراً: 15/60 = 1/4. حوّل إلى نسبة: 25%.",
        "result_en": "Percentage increase = 25%",
        "result_ar": "نسبة الزيادة = 25%"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Find the actual increase: 75 − 60 = 15. Now express $15 as a fraction of the original $60.",
            "explanation_ar": "أوجد الزيادة الفعلية: 75 − 60 = 15. الآن عبّر عن 15 دولاراً كنسبة من الأصل 60 دولاراً."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Ask: what is 1% of 60? → 0.60. How many 0.60s fit into 15? → 15 ÷ 0.60 = 25.",
            "explanation_ar": "اسأل: ما هو 1% من 60؟ → 0.60. كم مرة يدخل 0.60 في 15؟ → 15 ÷ 0.60 = 25."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15 is 25 × 0.60, so the increase is 25% of the original price.",
            "explanation_ar": "15 = 25 × 0.60، إذن الزيادة هي 25% من السعر الأصلي."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 25% of 60 = 15, and 60 + 15 = 75 ✓. Percentage increase = 25%.",
            "explanation_ar": "تحقق: 25% من 60 = 15، و60 + 15 = 75 ✓. نسبة الزيادة = 25%."
          }
        ],
        "hint_en": "First find the change: $75 − $60 = $15. Then ask: $15 is what percent of $60?",
        "hint_ar": "أولاً أوجد التغيير: 75 − 60 = 15 دولاراً. ثم اسأل: 15 دولاراً تمثّل كم بالمئة من 60 دولاراً؟",
        "result_en": "Percentage increase = 25%",
        "result_ar": "نسبة الزيادة = 25%"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Draw a bar for the original $60 made of 4 equal blocks of $15 each (so each block = 25%).",
            "explanation_ar": "ارسم شريطاً للـ60 دولاراً الأصلية مكوّناً من 4 كتل متساوية بـ15 دولاراً كل منها (كل كتلة = 25%)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The new price $75 extends the bar by one more block of $15, making 5 blocks total. That extra block is what fraction of the original 4 blocks?",
            "explanation_ar": "السعر الجديد 75 دولاراً يمدّ الشريط بكتلة إضافية بـ15 دولاراً، فيصبح 5 كتل. ما نسبة تلك الكتلة الإضافية إلى الـ4 كتل الأصلية؟"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "1 extra block out of the original 4 blocks = 1/4 = 25%.",
            "explanation_ar": "كتلة إضافية واحدة من أصل 4 كتل = 1/4 = 25%."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The new block added is 25% of the original bar, so the percentage increase = 25%.",
            "explanation_ar": "الكتلة الجديدة المضافة هي 25% من الشريط الأصلي، إذن نسبة الزيادة = 25%."
          }
        ],
        "hint_en": "Draw $60 as 4 equal blocks. Add 1 more block for $75. That extra block out of 4 original = 1/4 = 25%.",
        "hint_ar": "ارسم 60 دولاراً كـ4 كتل متساوية. أضف كتلة أخرى لـ75 دولاراً. تلك الكتلة الإضافية من أصل 4 = 1/4 = 25%.",
        "result_en": "Percentage increase = 25%",
        "result_ar": "نسبة الزيادة = 25%"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-pct-medium-002",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "After a 30% discount, a bag costs $84. Original price = ?",
    "question_ar": "بعد خصم 30%، أصبح سعر حقيبة 84 دولاراً. السعر الأصلي = ؟",
    "answer": 120,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "After a 30% discount, the customer pays 70% of the original price. So 70% of original = $84.",
            "explanation_ar": "بعد خصم 30%، يدفع الزبون 70% من السعر الأصلي. إذن 70% من الأصل = 84 دولاراً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Convert to multiplier equation: 0.7 × original = 84. Solve: original = 84 ÷ 0.7.",
            "explanation_ar": "حوّل إلى معادلة: 0.7 × الأصل = 84. حلّ: الأصل = 84 ÷ 0.7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "84 ÷ 0.7 = 840 ÷ 7 = 120.",
            "explanation_ar": "84 ÷ 0.7 = 840 ÷ 7 = 120."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The original price was $120.",
            "explanation_ar": "السعر الأصلي كان 120 دولاراً."
          }
        ],
        "hint_en": "70% of original = $84. Divide: 84 ÷ 0.7 = 840 ÷ 7 = 120.",
        "hint_ar": "70% من الأصل = 84 دولاراً. اقسم: 84 ÷ 0.7 = 840 ÷ 7 = 120.",
        "result_en": "Original price = $120",
        "result_ar": "السعر الأصلي = 120 دولاراً"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Set up: if 70% of the original = $84, find 1% first: 1% = 84 ÷ 70 = 1.20.",
            "explanation_ar": "ضع المعادلة: إذا كان 70% من الأصل = 84 دولاراً، أوجد 1% أولاً: 1% = 84 ÷ 70 = 1.20."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Scale up: 100% = 1.20 × 100 = 120.",
            "explanation_ar": "كبّر: 100% = 1.20 × 100 = 120."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Original price = $120.",
            "explanation_ar": "السعر الأصلي = 120 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 30% of 120 = 36; 120 − 36 = 84 ✓. Original price = $120.",
            "explanation_ar": "تحقق: 30% من 120 = 36؛ 120 − 36 = 84 ✓. السعر الأصلي = 120 دولاراً."
          }
        ],
        "hint_en": "70% corresponds to $84. Find 10%: 84 ÷ 7 = 12. Then 100% = 10 × 12 = $120.",
        "hint_ar": "70% تقابل 84 دولاراً. أوجد 10%: 84 ÷ 7 = 12. ثم 100% = 10 × 12 = 120 دولاراً.",
        "result_en": "Original price = $120",
        "result_ar": "السعر الأصلي = 120 دولاراً"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a 100-square bar representing the original (unknown) price. 30 squares are crossed out (the 30% discount).",
            "explanation_ar": "تخيّل شريطاً من 100 مربع يمثّل السعر الأصلي (المجهول). 30 مربعاً مشطوبة (خصم 30%)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The remaining 70 squares = $84. So each square = $84 ÷ 70 = $1.20.",
            "explanation_ar": "المربعات الـ70 المتبقية = 84 دولاراً. إذن كل مربع = 84 ÷ 70 = 1.20 دولار."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Full bar = 100 squares × $1.20 = $120.",
            "explanation_ar": "الشريط الكامل = 100 مربع × 1.20 دولار = 120 دولاراً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The full 100-square bar is the original price = $120.",
            "explanation_ar": "الشريط الكامل من 100 مربع هو السعر الأصلي = 120 دولاراً."
          }
        ],
        "hint_en": "70 squares = $84. Find the value of 1 square = $84 ÷ 70. Then find 100 squares.",
        "hint_ar": "70 مربعاً = 84 دولاراً. أوجد قيمة 1 مربع = 84 ÷ 70. ثم أوجد 100 مربع.",
        "result_en": "Original price = $120",
        "result_ar": "السعر الأصلي = 120 دولاراً"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-pct-medium-003",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Medium",
    "question_en": "A price rises from $200 to $250. Percentage increase = ?",
    "question_ar": "ارتفع سعر من 200 دولار إلى 250 دولار. نسبة الزيادة المئوية = ؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Percentage increase = [(new − old) ÷ old] × 100. Here: new = 250, old = 200.",
            "explanation_ar": "نسبة الزيادة = [(الجديد − القديم) ÷ القديم] × 100. هنا: الجديد = 250، القديم = 200."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Change = 250 − 200 = 50. Fraction of original: 50 ÷ 200 = 1/4.",
            "explanation_ar": "التغيير = 250 − 200 = 50. نسبة من الأصل: 50 ÷ 200 = 1/4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "1/4 as a percentage = 25%.",
            "explanation_ar": "1/4 كنسبة مئوية = 25%."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The percentage increase is 25%.",
            "explanation_ar": "نسبة الزيادة هي 25%."
          }
        ],
        "hint_en": "Increase = $50, original = $200. Convert 50/200 = 1/4 to a percentage.",
        "hint_ar": "الزيادة = 50 دولاراً، الأصل = 200 دولار. حوّل 50/200 = 1/4 إلى نسبة مئوية.",
        "result_en": "Percentage increase = 25%",
        "result_ar": "نسبة الزيادة = 25%"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Actual increase: 250 − 200 = 50. Find 1% of 200: 1% of 200 = 2.",
            "explanation_ar": "الزيادة الفعلية: 250 − 200 = 50. أوجد 1% من 200: 1% من 200 = 2."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "How many 2s fit in 50? → 50 ÷ 2 = 25. So $50 is 25% of $200.",
            "explanation_ar": "كم مرة يدخل 2 في 50؟ → 50 ÷ 2 = 25. إذن 50 دولاراً هي 25% من 200 دولار."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "The increase of $50 represents 25% of the original $200.",
            "explanation_ar": "الزيادة البالغة 50 دولاراً تمثّل 25% من الـ200 دولار الأصلية."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 25% of 200 = 50, and 200 + 50 = 250 ✓. Percentage increase = 25%.",
            "explanation_ar": "تحقق: 25% من 200 = 50، و200 + 50 = 250 ✓. نسبة الزيادة = 25%."
          }
        ],
        "hint_en": "1% of $200 = $2. The increase is $50. Count: 50 ÷ 2 = 25 groups of 1%.",
        "hint_ar": "1% من 200 دولار = 2 دولار. الزيادة 50 دولاراً. احسب: 50 ÷ 2 = 25 مجموعة من 1%.",
        "result_en": "Percentage increase = 25%",
        "result_ar": "نسبة الزيادة = 25%"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Draw a bar for $200 divided into 4 equal blocks of $50 each.",
            "explanation_ar": "ارسم شريطاً لـ200 دولار مقسّماً إلى 4 كتل متساوية بـ50 دولاراً كل منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "The new price $250 adds one more $50 block beyond the original bar. That extra block is how many of the 4 original blocks?",
            "explanation_ar": "السعر الجديد 250 دولاراً يضيف كتلة 50 دولار إضافية بعد الشريط الأصلي. كم تمثّل تلك الكتلة من الكتل الـ4 الأصلية؟"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "1 extra block ÷ 4 original blocks = 1/4 = 25%.",
            "explanation_ar": "1 كتلة إضافية ÷ 4 كتل أصلية = 1/4 = 25%."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The added block ($50) is 25% of the original 4-block bar ($200). Percentage increase = 25%.",
            "explanation_ar": "الكتلة المضافة (50 دولاراً) هي 25% من الشريط الأصلي المكوّن من 4 كتل (200 دولار). نسبة الزيادة = 25%."
          }
        ],
        "hint_en": "Split $200 into 4 blocks of $50. The increase is $50 — that's exactly 1 out of 4 blocks = 25%.",
        "hint_ar": "قسّم 200 دولار إلى 4 كتل بـ50 دولاراً. الزيادة 50 دولاراً — هذا بالضبط 1 من أصل 4 كتل = 25%.",
        "result_en": "Percentage increase = 25%",
        "result_ar": "نسبة الزيادة = 25%"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-pct-hard-001",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "A population of 4000 increases by 10% then decreases by 10%. Final population = ?",
    "question_ar": "عدد سكان 4000 يزيد بنسبة 10% ثم ينقص بنسبة 10%. عدد السكان النهائي = ؟",
    "answer": 3960,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two successive multipliers: ×1.1 (10% increase) then ×0.9 (10% decrease). Combined multiplier = 1.1 × 0.9.",
            "explanation_ar": "معاملان متتاليان: ×1.1 (زيادة 10%) ثم ×0.9 (نقصان 10%). المعامل المركّب = 1.1 × 0.9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "1.1 × 0.9 = 0.99. This shows the result is 99% of the original — not 100%, because the decrease acts on a larger number.",
            "explanation_ar": "1.1 × 0.9 = 0.99. هذا يعني أن النتيجة هي 99% من الأصل — ليس 100%، لأن النقص يطبّق على رقم أكبر."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Final population = 4000 × 0.99 = 3960.",
            "explanation_ar": "عدد السكان النهائي = 4000 × 0.99 = 3960."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The final population is 3960 — 40 fewer than the start, because 10% up then 10% down is NOT the same as staying the same.",
            "explanation_ar": "عدد السكان النهائي هو 3960 — أقل بـ40 من البداية، لأن زيادة 10% ثم نقصان 10% لا يعني العودة للأصل."
          }
        ],
        "hint_en": "Multiply by 1.1 then by 0.9. Combined: 1.1 × 0.9 = 0.99. Then 4000 × 0.99 = 3960.",
        "hint_ar": "اضرب في 1.1 ثم في 0.9. المحصلة: 1.1 × 0.9 = 0.99. ثم 4000 × 0.99 = 3960.",
        "result_en": "Final population = 3960",
        "result_ar": "عدد السكان النهائي = 3960"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Step 1: Apply the 10% increase. 10% of 4000 = 400. New population after increase = 4000 + 400 = 4400.",
            "explanation_ar": "خطوة 1: طبّق الزيادة 10%. 10% من 4000 = 400. عدد السكان بعد الزيادة = 4000 + 400 = 4400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step 2: Apply the 10% decrease to the NEW value 4400. 10% of 4400 = 440. Population after decrease = 4400 − 440 = 3960.",
            "explanation_ar": "خطوة 2: طبّق النقصان 10% على القيمة الجديدة 4400. 10% من 4400 = 440. عدد السكان بعد النقصان = 4400 − 440 = 3960."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Notice: the decrease (440) was larger than the increase (400) because it applied to a bigger number. Net change = −40.",
            "explanation_ar": "لاحظ: النقصان (440) كان أكبر من الزيادة (400) لأنه طُبِّق على رقم أكبر. التغيير الصافي = −40."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 4000 × 0.99 = 3960 ✓. Final population = 3960.",
            "explanation_ar": "تحقق: 4000 × 0.99 = 3960 ✓. عدد السكان النهائي = 3960."
          }
        ],
        "hint_en": "Do it in two steps: 4000 → +10% → 4400 → −10% → 4400 − 440 = 3960.",
        "hint_ar": "افعلها بخطوتين: 4000 → +10% → 4400 → −10% → 4400 − 440 = 3960.",
        "result_en": "Final population = 3960",
        "result_ar": "عدد السكان النهائي = 3960"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a bar of 100 squares = 4000 people. Each square = 40 people.",
            "explanation_ar": "تخيّل شريطاً من 100 مربع = 4000 شخص. كل مربع = 40 شخصاً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "First, add 10 squares on the right (10% increase) → bar is now 110 squares = 4400 people. Then cross out 10% of 110 squares = 11 squares → 110 − 11 = 99 squares remain.",
            "explanation_ar": "أولاً، أضف 10 مربعات على اليمين (زيادة 10%) → الشريط الآن 110 مربعاً = 4400 شخص. ثم اشطب 10% من 110 مربعاً = 11 مربعاً → يتبقى 110 − 11 = 99 مربعاً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "99 squares remain. 99 × 40 = 3960 people.",
            "explanation_ar": "تبقى 99 مربعاً. 99 × 40 = 3960 شخصاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "You ended with 99 out of the original 100 squares — 99% of the start. Final population = 3960.",
            "explanation_ar": "انتهيت بـ99 من أصل 100 مربع — 99% من البداية. عدد السكان النهائي = 3960."
          }
        ],
        "hint_en": "Add 10 squares for the increase (100→110), then remove 10% of 110 = 11 squares (110→99). 99 squares × 40 = 3960.",
        "hint_ar": "أضف 10 مربعات للزيادة (100→110)، ثم أزل 10% من 110 = 11 مربعاً (110→99). 99 مربعاً × 40 = 3960.",
        "result_en": "Final population = 3960",
        "result_ar": "عدد السكان النهائي = 3960"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-pct-hard-002",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "20% of 25% of 400 = ?",
    "question_ar": "20% من 25% من 400 = ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Convert both percentages to decimals: 20% = 0.2, 25% = 0.25. The expression becomes 0.2 × 0.25 × 400.",
            "explanation_ar": "حوّل كلتا النسبتين إلى أعداد عشرية: 20% = 0.2، 25% = 0.25. تصبح العبارة: 0.2 × 0.25 × 400."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the decimals first: 0.2 × 0.25 = 0.05. Now the problem is simply 0.05 × 400.",
            "explanation_ar": "اضرب الأعداد العشرية أولاً: 0.2 × 0.25 = 0.05. الآن المسألة ببساطة: 0.05 × 400."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "0.05 × 400 = 20. (Alternatively: 5% of 400 = 400 ÷ 20 = 20.)",
            "explanation_ar": "0.05 × 400 = 20. (أو بطريقة أخرى: 5% من 400 = 400 ÷ 20 = 20.)"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "20% of 25% of 400 = 20.",
            "explanation_ar": "20% من 25% من 400 = 20."
          }
        ],
        "hint_en": "Convert: 0.2 × 0.25 = 0.05. Then 0.05 × 400 = 20.",
        "hint_ar": "حوّل: 0.2 × 0.25 = 0.05. ثم 0.05 × 400 = 20.",
        "result_en": "20% of 25% of 400 = 20",
        "result_ar": "20% من 25% من 400 = 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Work from right to left. First: find 25% of 400. 25% = 1/4, so 400 ÷ 4 = 100.",
            "explanation_ar": "اعمل من اليمين إلى اليسار. أولاً: أوجد 25% من 400. 25% = 1/4، إذن 400 ÷ 4 = 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Now find 20% of the result 100. 10% of 100 = 10, so 20% = 2 × 10 = 20.",
            "explanation_ar": "الآن أوجد 20% من النتيجة 100. 10% من 100 = 10، إذن 20% = 2 × 10 = 20."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20% of (25% of 400) = 20% of 100 = 20.",
            "explanation_ar": "20% من (25% من 400) = 20% من 100 = 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check with fractions: (1/5) × (1/4) × 400 = 400/20 = 20 ✓. Answer = 20.",
            "explanation_ar": "تحقق بالكسور: (1/5) × (1/4) × 400 = 400/20 = 20 ✓. الجواب = 20."
          }
        ],
        "hint_en": "Step 1: 25% of 400 = 100. Step 2: 20% of 100 = 20.",
        "hint_ar": "خطوة 1: 25% من 400 = 100. خطوة 2: 20% من 100 = 20.",
        "result_en": "20% of 25% of 400 = 20",
        "result_ar": "20% من 25% من 400 = 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Start with 400 represented as a 100-square bar. Each square = 4.",
            "explanation_ar": "ابدأ بـ400 ممثّلةً بشريط من 100 مربع. كل مربع = 4."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Shade 25 squares for 25% of 400 = 100. Now look at just those 25 shaded squares. Each = 4, total = 100.",
            "explanation_ar": "ظلّل 25 مربعاً لـ25% من 400 = 100. الآن انظر إلى تلك الـ25 مربعاً المظلّلة فقط. كل منها = 4، المجموع = 100."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Now take 20% of those 25 shaded squares: 20% of 25 = 5 squares. Value = 5 × 4 = 20.",
            "explanation_ar": "الآن خذ 20% من تلك الـ25 مربعاً المظلّلة: 20% من 25 = 5 مربعات. القيمة = 5 × 4 = 20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Only 5 of the original 100 squares are selected (5%), representing 20 out of 400. Answer = 20.",
            "explanation_ar": "فقط 5 من أصل 100 مربع تم اختيارها (5%)، تمثّل 20 من أصل 400. الجواب = 20."
          }
        ],
        "hint_en": "First shade 25% of the bar (25 squares = 100). Then shade 20% of those squares (5 squares = 20).",
        "hint_ar": "أولاً ظلّل 25% من الشريط (25 مربعاً = 100). ثم ظلّل 20% من تلك المربعات (5 مربعات = 20).",
        "result_en": "20% of 25% of 400 = 20",
        "result_ar": "20% من 25% من 400 = 20"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-pct-hard-003",
    "grade": 7,
    "bank": "specific",
    "category": "Percentages Advanced",
    "level": "Hard",
    "question_en": "After two successive 10% discounts, an item costs $162. Original price = ?",
    "question_ar": "بعد خصمين متتاليين بنسبة 10% لكل منهما، أصبح سعر سلعة 162 دولاراً. السعر الأصلي = ؟",
    "answer": 200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two successive 10% discounts: each time you pay 90% = 0.9. Combined multiplier: 0.9 × 0.9 = 0.81. So 81% of original = $162.",
            "explanation_ar": "خصمان متتاليان بنسبة 10%: في كل مرة تدفع 90% = 0.9. المعامل المركّب: 0.9 × 0.9 = 0.81. إذن 81% من الأصل = 162 دولاراً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Equation: 0.81 × original = 162. Solve: original = 162 ÷ 0.81 = 16200 ÷ 81.",
            "explanation_ar": "المعادلة: 0.81 × الأصل = 162. الحل: الأصل = 162 ÷ 0.81 = 16200 ÷ 81."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "16200 ÷ 81 = 200. (Check: 81 × 2 = 162, so 81 × 200 = 16200 ✓.)",
            "explanation_ar": "16200 ÷ 81 = 200. (تحقق: 81 × 2 = 162، إذن 81 × 200 = 16200 ✓.)"
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The original price was $200.",
            "explanation_ar": "السعر الأصلي كان 200 دولاراً."
          }
        ],
        "hint_en": "Two ×0.9 discounts → combined ×0.81. Reverse: 162 ÷ 0.81 = 162 × 100/81 = 200.",
        "hint_ar": "خصمان بمعامل ×0.9 → مجموعهما ×0.81. عكسياً: 162 ÷ 0.81 = 162 × 100/81 = 200.",
        "result_en": "Original price = $200",
        "result_ar": "السعر الأصلي = 200 دولاراً"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Work backwards. The final price $162 is the result after the second 10% discount. Before the second discount, price = 162 ÷ 0.9.",
            "explanation_ar": "اعمل للخلف. السعر النهائي 162 دولاراً هو النتيجة بعد الخصم الثاني 10%. قبل الخصم الثاني، السعر = 162 ÷ 0.9."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "162 ÷ 0.9 = 1620 ÷ 9 = 180. So the price after the first discount (before the second) was $180.",
            "explanation_ar": "162 ÷ 0.9 = 1620 ÷ 9 = 180. إذن السعر بعد الخصم الأول (قبل الثاني) كان 180 دولاراً."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Now undo the first 10% discount: original = 180 ÷ 0.9 = 1800 ÷ 9 = 200.",
            "explanation_ar": "الآن تراجع عن الخصم الأول 10%: الأصل = 180 ÷ 0.9 = 1800 ÷ 9 = 200."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 200 × 0.9 = 180; 180 × 0.9 = 162 ✓. Original price = $200.",
            "explanation_ar": "تحقق: 200 × 0.9 = 180؛ 180 × 0.9 = 162 ✓. السعر الأصلي = 200 دولاراً."
          }
        ],
        "hint_en": "Undo each discount in reverse: 162 ÷ 0.9 = 180, then 180 ÷ 0.9 = 200.",
        "hint_ar": "تراجع عن كل خصم بالترتيب العكسي: 162 ÷ 0.9 = 180، ثم 180 ÷ 0.9 = 200.",
        "result_en": "Original price = $200",
        "result_ar": "السعر الأصلي = 200 دولاراً"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a price tag going through two shrink steps. Final tag shows $162. Each shrink was 10% (remove 1 out of 10 parts).",
            "explanation_ar": "تخيّل بطاقة سعر تمرّ بخطوتي تقليص. البطاقة النهائية تُظهر 162 دولاراً. كل تقليص كان 10% (إزالة 1 من كل 10 أجزاء)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Reverse step 2: $162 represents 9 parts out of 10. One part = 162 ÷ 9 = 18. Ten parts = $180 (price before the second discount).",
            "explanation_ar": "اعكس الخطوة 2: 162 دولاراً تمثّل 9 أجزاء من 10. جزء واحد = 162 ÷ 9 = 18. عشرة أجزاء = 180 دولاراً (السعر قبل الخصم الثاني)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Reverse step 1: $180 represents 9 parts out of 10. One part = 180 ÷ 9 = 20. Ten parts = $200 (original price).",
            "explanation_ar": "اعكس الخطوة 1: 180 دولاراً تمثّل 9 أجزاء من 10. جزء واحد = 180 ÷ 9 = 20. عشرة أجزاء = 200 دولاراً (السعر الأصلي)."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Working backwards through two 9/10 shrinks: 162 → 180 → 200. Original price = $200.",
            "explanation_ar": "بالعمل للخلف عبر تقليصين بـ9/10: 162 → 180 → 200. السعر الأصلي = 200 دولاراً."
          }
        ],
        "hint_en": "Each discount keeps 9/10. Reverse twice: 162 ÷ 9 × 10 = 180, then 180 ÷ 9 × 10 = 200.",
        "hint_ar": "كل خصم يُبقي 9/10. اعكس مرتين: 162 ÷ 9 × 10 = 180، ثم 180 ÷ 9 × 10 = 200.",
        "result_en": "Original price = $200",
        "result_ar": "السعر الأصلي = 200 دولاراً"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-pct-hard-003",
      "upper_grade_equivalent": null,
      "fun_fact_tag": "percentages"
    }
  },
  {
    "id": "g7-specific-word-easy-001",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A bakery in Paris sells 145 croissants in the morning and 215 croissants in the afternoon. How many croissants were sold in total?",
    "question_ar": "مخبزة في باريس تبيع 145 كرواسون في الصباح و 215 كرواسون في فترة ما بعد الظهر. كم عدد الكرواسونات المباعة في المجموع ؟",
    "answer": 360,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "We have two quantities: 145 croissants in the morning and 215 croissants in the afternoon. We need their total.",
            "explanation_ar": "لدينا كميتان: 145 كرواسون في الصباح و 215 كرواسون في فترة ما بعد الظهر. نحتاج إلى إيجاد مجموعهما."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Notice 145 + 215: add the hundreds first: 100 + 200 = 300.",
            "explanation_ar": "نلاحظ 145 + 215: نجمع المئات أولاً: 100 + 200 = 300."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "Now add the remaining parts: 45 + 15 = 60.",
            "explanation_ar": "الآن نجمع الأجزاء المتبقية: 45 + 15 = 60."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "300 + 60 = 360. The bakery sold 360 croissants in total.",
            "explanation_ar": "300 + 60 = 360. باعت المخبزة 360 كرواسون في المجموع."
          }
        ],
        "hint_en": "Break both numbers into hundreds and the remaining tens/units, then add each part separately.",
        "hint_ar": "قسّم كلا الرقمين إلى مئات والأجزاء المتبقية، ثم اجمع كل جزء على حدة.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "Split 145 into 140 + 5, and 215 into 210 + 5.",
            "explanation_ar": "نقسّم 145 إلى 140 + 5، و 215 إلى 210 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "Add the tens groups: 140 + 210 = 350. Add the units: 5 + 5 = 10.",
            "explanation_ar": "نجمع مجموعات العشرات: 140 + 210 = 350. نجمع الوحدات: 5 + 5 = 10."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "350 + 10 = 360.",
            "explanation_ar": "350 + 10 = 360."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "Check: 145 + 215 = 360. The total number of croissants sold is 360.",
            "explanation_ar": "تحقق: 145 + 215 = 360. إجمالي عدد الكرواسونات المباعة هو 360."
          }
        ],
        "hint_en": "Decompose each number into its tens and units, add each group, then recombine.",
        "hint_ar": "حلّل كل رقم إلى عشرات ووحدات، اجمع كل مجموعة، ثم أعد دمجها.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Picture the Paris bakery with two batches of croissants: a morning tray of 145 and an afternoon tray of 215.",
            "explanation_ar": "تخيّل مخبزة باريس مع دفعتين من الكرواسونات: صينية صباحية بـ 145 وصينية بعد الظهر بـ 215."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "Draw a number line starting at 145. Make one jump of 200 to reach 345, then a jump of 15 to reach 360.",
            "explanation_ar": "ارسم خطاً رقمياً يبدأ من 145. اقفز 200 للوصول إلى 345، ثم اقفز 15 للوصول إلى 360."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "The number line shows: 145 → +200 → 345 → +15 → 360.",
            "explanation_ar": "يُظهر الخط الرقمي: 145 → +200 → 345 → +15 → 360."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "The final position on the number line is 360. That is the total number of croissants sold.",
            "explanation_ar": "الموضع النهائي على الخط الرقمي هو 360. هذا هو إجمالي عدد الكرواسونات المباعة."
          }
        ],
        "hint_en": "Use a number line and hop in friendly chunks of 200, then 15.",
        "hint_ar": "استخدم خطاً رقمياً وانتقل في أجزاء مريحة بمقدار 200 ثم 15.",
        "result_en": "The answer is 360",
        "result_ar": "الجواب هو 360"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-specific-word-easy-002",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A farmer in Kenya harvests 18 baskets of mangoes each day. How many baskets does he harvest in 15 days?",
    "question_ar": "مزارع في كينيا يحصد 18 سلة من المانجو كل يوم. كم سلة يحصد في 15 يوماً ؟",
    "answer": 270,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "We need 18 × 15. Notice that 18 = 20 − 2, which makes multiplication easier.",
            "explanation_ar": "نحتاج إلى حساب 18 × 15. نلاحظ أن 18 = 20 − 2، مما يجعل الضرب أسهل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Compute 20 × 15 = 300.",
            "explanation_ar": "نحسب 20 × 15 = 300."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "Subtract the extra: 2 × 15 = 30. So 300 − 30 = 270.",
            "explanation_ar": "نطرح الزائد: 2 × 15 = 30. إذاً 300 − 30 = 270."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "18 × 15 = 270. The farmer harvests 270 baskets in 15 days.",
            "explanation_ar": "18 × 15 = 270. يحصد المزارع 270 سلة في 15 يوماً."
          }
        ],
        "hint_en": "Use the rule: 18 × 15 = (20 − 2) × 15 = 300 − 30.",
        "hint_ar": "استخدم القاعدة: 18 × 15 = (20 − 2) × 15 = 300 − 30.",
        "result_en": "The answer is 270",
        "result_ar": "الجواب هو 270"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "Split 15 into 10 + 5 to make multiplication easier: 18 × 10 and 18 × 5.",
            "explanation_ar": "نقسّم 15 إلى 10 + 5 لتسهيل الضرب: 18 × 10 و 18 × 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "18 × 10 = 180. 18 × 5 = 90.",
            "explanation_ar": "18 × 10 = 180. 18 × 5 = 90."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "180 + 90 = 270.",
            "explanation_ar": "180 + 90 = 270."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "18 × 15 = 270. The farmer harvests 270 baskets in 15 days.",
            "explanation_ar": "18 × 15 = 270. يحصد المزارع 270 سلة في 15 يوماً."
          }
        ],
        "hint_en": "Break 15 into 10 + 5, multiply each by 18, then add.",
        "hint_ar": "قسّم 15 إلى 10 + 5، اضرب كلاً منهما في 18، ثم اجمع.",
        "result_en": "The answer is 270",
        "result_ar": "الجواب هو 270"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Picture the Kenyan farmer filling 18 baskets every single day for 15 days in a row.",
            "explanation_ar": "تخيّل المزارع الكيني يملأ 18 سلة كل يوم لمدة 15 يوماً متتالياً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "Draw a 15-column × 18-row array of baskets. Group the 15 columns as 10 columns + 5 columns.",
            "explanation_ar": "ارسم مصفوفة من 15 عموداً × 18 صفاً من السلال. اجمع الأعمدة الـ 15 كـ 10 أعمدة + 5 أعمدة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "The left group (10 columns × 18 rows) = 180 baskets. The right group (5 columns × 18 rows) = 90 baskets.",
            "explanation_ar": "المجموعة اليسرى (10 أعمدة × 18 صفاً) = 180 سلة. المجموعة اليمنى (5 أعمدة × 18 صفاً) = 90 سلة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "Total baskets = 180 + 90 = 270.",
            "explanation_ar": "إجمالي السلال = 180 + 90 = 270."
          }
        ],
        "hint_en": "Draw an array and split the 15 days into two groups: 10 days and 5 days.",
        "hint_ar": "ارسم مصفوفة وقسّم 15 يوماً إلى مجموعتين: 10 أيام و 5 أيام.",
        "result_en": "The answer is 270",
        "result_ar": "الجواب هو 270"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-specific-word-easy-003",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A student in Mexico City buys a notebook for 35 pesos and a pen for 15 pesos. She pays with a 100-peso note. How much change does she receive?",
    "question_ar": "طالبة في مكسيكو سيتي تشتري دفتراً بـ 35 بيسو وقلماً بـ 15 بيسو. تدفع بورقة 100 بيسو. كم تستلم من الباقي ؟",
    "answer": 50,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "The student spends 35 + 15 pesos and pays 100 pesos. We need 100 − (35 + 15).",
            "explanation_ar": "الطالبة تنفق 35 + 15 بيسو وتدفع 100 بيسو. نحتاج إلى 100 − (35 + 15)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Add the prices: 35 + 15 = 50 pesos total spent.",
            "explanation_ar": "نجمع الأسعار: 35 + 15 = 50 بيسو إجمالي المنفق."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "Subtract from the amount paid: 100 − 50 = 50 pesos change.",
            "explanation_ar": "نطرح من المبلغ المدفوع: 100 − 50 = 50 بيسو باقٍ."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "The student receives 50 pesos in change.",
            "explanation_ar": "تستلم الطالبة 50 بيسو باقٍ."
          }
        ],
        "hint_en": "First add the two prices (35 + 15), then subtract from 100.",
        "hint_ar": "اجمع السعرين أولاً (35 + 15)، ثم اطرح من 100.",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "Identify: paid = 100, spent = 35 + 15. Split the spending into two items.",
            "explanation_ar": "نحدد: المدفوع = 100، المنفق = 35 + 15. نقسّم الإنفاق إلى سلعتين."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "Subtract each item from 100 step by step: 100 − 35 = 65, then 65 − 15 = 50.",
            "explanation_ar": "نطرح كل سلعة من 100 خطوة بخطوة: 100 − 35 = 65، ثم 65 − 15 = 50."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "Both subtractions together give us the final change: 50 pesos.",
            "explanation_ar": "كلا الطرحين معاً يعطيانا الباقي النهائي: 50 بيسو."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "Check: 35 + 15 + 50 = 100. The change is 50 pesos.",
            "explanation_ar": "تحقق: 35 + 15 + 50 = 100. الباقي هو 50 بيسو."
          }
        ],
        "hint_en": "Subtract each purchase from 100 one at a time.",
        "hint_ar": "اطرح كل مشتريات من 100 واحدة تلو الأخرى.",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Picture a Mexican student at a stationery shop, handing over a 100-peso note to buy a 35-peso notebook and a 15-peso pen.",
            "explanation_ar": "تخيّل طالبة مكسيكية في محل قرطاسية تسلّم ورقة 100 بيسو لشراء دفتر بـ 35 بيسو وقلم بـ 15 بيسو."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "Draw a bar of length 100. Shade 35 for the notebook and 15 for the pen. The unshaded part is the change.",
            "explanation_ar": "ارسم شريطاً بطول 100. ظلّل 35 للدفتر و 15 للقلم. الجزء غير المظلل هو الباقي."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "The shaded section totals 35 + 15 = 50. The remaining unshaded section is 100 − 50 = 50.",
            "explanation_ar": "الجزء المظلل يبلغ 35 + 15 = 50. الجزء غير المظلل المتبقي هو 100 − 50 = 50."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "The unshaded bar represents 50 pesos change returned to the student.",
            "explanation_ar": "الشريط غير المظلل يمثل 50 بيسو باقٍ يُعاد للطالبة."
          }
        ],
        "hint_en": "Draw a bar model with 100 split into three parts: notebook cost, pen cost, and change.",
        "hint_ar": "ارسم نموذج شريط بـ 100 مقسّم إلى ثلاثة أجزاء: ثمن الدفتر، ثمن القلم، والباقي.",
        "result_en": "The answer is 50",
        "result_ar": "الجواب هو 50"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-specific-word-medium-001",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A clothing store in South Korea marks up a jacket by 40%. If the original price is 150,000 won, what is the selling price in won?",
    "question_ar": "متجر ملابس في كوريا الجنوبية يرفع سعر جاكيت بنسبة 40%. إذا كان السعر الأصلي 150,000 وون، فما هو سعر البيع بالوون ؟",
    "answer": 210000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "A 40% mark-up on 150,000 won means we find 40% of 150,000 and add it to 150,000.",
            "explanation_ar": "رفع السعر 40% على 150,000 وون يعني إيجاد 40% من 150,000 وإضافتها إلى 150,000."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Find 10% of 150,000: 150,000 ÷ 10 = 15,000.",
            "explanation_ar": "نجد 10% من 150,000: 150,000 ÷ 10 = 15,000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "40% = 4 × 10%, so 4 × 15,000 = 60,000 is the mark-up amount.",
            "explanation_ar": "40% = 4 × 10%، إذاً 4 × 15,000 = 60,000 هو مقدار الرفع."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "Selling price = 150,000 + 60,000 = 210,000 won.",
            "explanation_ar": "سعر البيع = 150,000 + 60,000 = 210,000 وون."
          }
        ],
        "hint_en": "Find 10% first, then multiply by 4 to get 40%, then add to the original price.",
        "hint_ar": "أوجد 10% أولاً، ثم اضرب في 4 للحصول على 40%، ثم أضف إلى السعر الأصلي.",
        "result_en": "The answer is 210000",
        "result_ar": "الجواب هو 210000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "Original price = 150,000 won. Mark-up = 40% of 150,000. Split 40% into 4 equal parts of 10% each.",
            "explanation_ar": "السعر الأصلي = 150,000 وون. الرفع = 40% من 150,000. نقسّم 40% إلى 4 أجزاء متساوية كل منها 10%."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "10% of 150,000 = 15,000. Multiply: 4 × 15,000 = 60,000 mark-up.",
            "explanation_ar": "10% من 150,000 = 15,000. نضرب: 4 × 15,000 = 60,000 مبلغ الرفع."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "Selling price = original + mark-up = 150,000 + 60,000 = 210,000.",
            "explanation_ar": "سعر البيع = الأصلي + الرفع = 150,000 + 60,000 = 210,000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "Check: 210,000 ÷ 150,000 = 1.4 = 140%, confirming 40% mark-up. Selling price = 210,000 won.",
            "explanation_ar": "تحقق: 210,000 ÷ 150,000 = 1.4 = 140%، مما يؤكد رفع 40%. سعر البيع = 210,000 وون."
          }
        ],
        "hint_en": "Calculate 10% of 150,000, scale up to 40%, then add to the original.",
        "hint_ar": "احسب 10% من 150,000، حوّلها إلى 40%، ثم أضف إلى الأصل.",
        "result_en": "The answer is 210000",
        "result_ar": "الجواب هو 210000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Picture a jacket with a price tag of 150,000 won in a Seoul boutique. The store is adding an extra 40% to that price.",
            "explanation_ar": "تخيّل جاكيتاً بعلامة سعر 150,000 وون في بوتيك في سيول. يضيف المتجر 40% إضافية على ذلك السعر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "Draw a bar representing 100% = 150,000 won. Extend it by 40% more, divided into 4 blocks of 10% (each block = 15,000 won).",
            "explanation_ar": "ارسم شريطاً يمثل 100% = 150,000 وون. مدّده بـ 40% إضافية، مقسّمة إلى 4 مجموعات من 10% (كل مجموعة = 15,000 وون)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "The extended bar shows 140% total. The 4 extra blocks each worth 15,000 together add 60,000 won.",
            "explanation_ar": "الشريط الممتد يُظهر 140% إجمالاً. الـ 4 مجموعات الإضافية كل منها بـ 15,000 تضيف معاً 60,000 وون."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "Total bar length = 150,000 + 60,000 = 210,000 won, which is the selling price.",
            "explanation_ar": "الطول الكلي للشريط = 150,000 + 60,000 = 210,000 وون، وهو سعر البيع."
          }
        ],
        "hint_en": "Draw a percent bar with 100% = 150,000 and extend it by four 10%-blocks.",
        "hint_ar": "ارسم شريطاً مئوياً بـ 100% = 150,000 ومدّده بأربع مجموعات من 10%.",
        "result_en": "The answer is 210000",
        "result_ar": "الجواب هو 210000"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-specific-word-medium-002",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A student in Egypt solves for x: 5x − 8 = 42. What is the value of x?",
    "question_ar": "طالب في مصر يحل للمتغير x: 5x − 8 = 42. ما هي قيمة x ؟",
    "answer": 10,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "The equation is 5x − 8 = 42. We need to isolate x by undoing the operations on it.",
            "explanation_ar": "المعادلة هي 5x − 8 = 42. نحتاج إلى عزل x بالتراجع عن العمليات المطبقة عليه."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Add 8 to both sides: 5x − 8 + 8 = 42 + 8, giving 5x = 50.",
            "explanation_ar": "نضيف 8 لكلا الطرفين: 5x − 8 + 8 = 42 + 8، ينتج 5x = 50."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "Divide both sides by 5: x = 50 ÷ 5 = 10.",
            "explanation_ar": "نقسم كلا الطرفين على 5: x = 50 ÷ 5 = 10."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "Check: 5 × 10 − 8 = 50 − 8 = 42. ✓ So x = 10.",
            "explanation_ar": "تحقق: 5 × 10 − 8 = 50 − 8 = 42. ✓ إذاً x = 10."
          }
        ],
        "hint_en": "Add 8 to both sides first, then divide by 5.",
        "hint_ar": "أضف 8 لكلا الطرفين أولاً، ثم اقسم على 5.",
        "result_en": "The answer is 10",
        "result_ar": "الجواب هو 10"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "The equation 5x − 8 = 42 has two operations on x: multiply by 5 and subtract 8. We reverse them in opposite order.",
            "explanation_ar": "المعادلة 5x − 8 = 42 تحتوي على عمليتين على x: الضرب في 5 وطرح 8. نعكسهما بترتيب عكسي."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "Reverse the subtraction of 8: add 8 to 42 to get 5x = 50.",
            "explanation_ar": "نعكس طرح 8: نضيف 8 إلى 42 للحصول على 5x = 50."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "Reverse the multiplication by 5: divide 50 by 5 to get x = 10.",
            "explanation_ar": "نعكس الضرب في 5: نقسم 50 على 5 للحصول على x = 10."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "Substitute back: 5 × 10 − 8 = 42. Confirmed. x = 10.",
            "explanation_ar": "نعوّض: 5 × 10 − 8 = 42. مؤكد. x = 10."
          }
        ],
        "hint_en": "Work backwards: first undo the −8, then undo the ×5.",
        "hint_ar": "اعمل للخلف: أولاً تراجع عن −8، ثم عن ×5.",
        "result_en": "The answer is 10",
        "result_ar": "الجواب هو 10"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Think of a balance scale with '5x − 8' on the left pan and '42' on the right. Both pans must stay equal.",
            "explanation_ar": "تخيّل ميزاناً متوازناً بـ '5x − 8' في الكفة اليسرى و '42' في الكفة اليمنى. يجب أن تبقى الكفتان متساويتين."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "To balance, add 8 to both pans: left becomes 5x, right becomes 50. The scale still balances.",
            "explanation_ar": "لتحقيق التوازن، نضيف 8 لكلتا الكفتين: اليسرى تصبح 5x، واليمنى تصبح 50. الميزان لا يزال متوازناً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "Now split both pans equally into 5 groups: each group on the left is x, each group on the right is 10.",
            "explanation_ar": "الآن نقسّم كلتا الكفتين بالتساوي إلى 5 مجموعات: كل مجموعة في اليسرى هي x، وكل مجموعة في اليمنى هي 10."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "Each x equals 10. The balance scale confirms x = 10.",
            "explanation_ar": "كل x يساوي 10. الميزان المتوازن يؤكد أن x = 10."
          }
        ],
        "hint_en": "Use a balance scale: add 8 to both sides, then divide both sides by 5.",
        "hint_ar": "استخدم ميزاناً: أضف 8 لكلا الطرفين، ثم اقسم كلا الطرفين على 5.",
        "result_en": "The answer is 10",
        "result_ar": "الجواب هو 10"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-specific-word-medium-003",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A cyclist in the Netherlands rides 12 km on Monday, 18 km on Wednesday, and 15 km on Friday. What is the average distance cycled per day over these three days?",
    "question_ar": "دراج في هولندا يقطع 12 كم في الاثنين و 18 كم في الأربعاء و 15 كم في الجمعة. ما هو متوسط المسافة التي قطعها يومياً خلال هذه الأيام الثلاثة ؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "Average = total distance ÷ number of days. We have three distances: 12, 18, and 15 km.",
            "explanation_ar": "المتوسط = المسافة الكلية ÷ عدد الأيام. لدينا ثلاث مسافات: 12 و 18 و 15 كم."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Notice 12 + 18 = 30 (a friendly pair). Then 30 + 15 = 45 km total.",
            "explanation_ar": "نلاحظ 12 + 18 = 30 (زوج مريح). ثم 30 + 15 = 45 كم إجمالاً."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "Divide 45 by 3: 45 ÷ 3 = 15 km per day.",
            "explanation_ar": "نقسم 45 على 3: 45 ÷ 3 = 15 كم في اليوم."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "The average distance cycled per day is 15 km.",
            "explanation_ar": "متوسط المسافة المقطوعة يومياً هو 15 كم."
          }
        ],
        "hint_en": "Spot the friendly pair 12 + 18 = 30 first, add 15, then divide by 3.",
        "hint_ar": "لاحظ الزوج المريح 12 + 18 = 30 أولاً، أضف 15، ثم اقسم على 3.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "Three distances: 12 km, 18 km, 15 km. We need their sum first, then divide by 3.",
            "explanation_ar": "ثلاث مسافات: 12 كم، 18 كم، 15 كم. نحتاج مجموعها أولاً، ثم نقسم على 3."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "Add step by step: 12 + 18 = 30, then 30 + 15 = 45.",
            "explanation_ar": "نجمع خطوة بخطوة: 12 + 18 = 30، ثم 30 + 15 = 45."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "Average = 45 ÷ 3 = 15.",
            "explanation_ar": "المتوسط = 45 ÷ 3 = 15."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "Check: 15 × 3 = 45 = 12 + 18 + 15. ✓ Average = 15 km.",
            "explanation_ar": "تحقق: 15 × 3 = 45 = 12 + 18 + 15. ✓ المتوسط = 15 كم."
          }
        ],
        "hint_en": "Sum all three distances (12 + 18 + 15 = 45) then divide by 3.",
        "hint_ar": "اجمع المسافات الثلاث (12 + 18 + 15 = 45) ثم اقسم على 3.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Picture a Dutch cyclist with three separate daily rides: a 12 km ride, an 18 km ride, and a 15 km ride.",
            "explanation_ar": "تخيّل دراجاً هولندياً مع ثلاث رحلات يومية منفصلة: رحلة 12 كم، ورحلة 18 كم، ورحلة 15 كم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "Draw three bars of lengths 12, 18, and 15. Combine them into one bar of total length 45, then cut it equally into 3 pieces.",
            "explanation_ar": "ارسم ثلاثة أشرطة بطول 12 و 18 و 15. ادمجها في شريط واحد بطول إجمالي 45، ثم قطّعه بالتساوي إلى 3 قطع."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "Each of the 3 equal pieces of the combined bar has length 45 ÷ 3 = 15.",
            "explanation_ar": "كل قطعة من الـ 3 قطع المتساوية من الشريط المدمج طولها 45 ÷ 3 = 15."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "Each equal piece represents the average daily ride: 15 km.",
            "explanation_ar": "كل قطعة متساوية تمثل متوسط رحلة اليوم: 15 كم."
          }
        ],
        "hint_en": "Combine the three bars into one and split into 3 equal parts to find the average.",
        "hint_ar": "ادمج الأشرطة الثلاثة في شريط واحد وقسّمه إلى 3 أجزاء متساوية لإيجاد المتوسط.",
        "result_en": "The answer is 15",
        "result_ar": "الجواب هو 15"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-specific-word-hard-001",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A factory in Germany produces 480 cars in 8 days. A second factory produces 270 cars in 6 days. How many total cars do both factories produce together in 12 days?",
    "question_ar": "مصنع في ألمانيا ينتج 480 سيارة في 8 أيام. مصنع ثانٍ ينتج 270 سيارة في 6 أيام. كم إجمالي السيارات التي ينتجها المصنعان معاً في 12 يوماً ؟",
    "answer": 1260,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "Find each factory's daily rate, then multiply by 12 to get each factory's 12-day output, and sum them.",
            "explanation_ar": "نجد معدل الإنتاج اليومي لكل مصنع، ثم نضرب في 12 للحصول على إنتاج كل مصنع في 12 يوماً، ونجمعهما."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Factory 1: 480 ÷ 8 = 60 cars/day. Factory 2: 270 ÷ 6 = 45 cars/day.",
            "explanation_ar": "المصنع 1: 480 ÷ 8 = 60 سيارة/يوم. المصنع 2: 270 ÷ 6 = 45 سيارة/يوم."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "Combined daily rate: 60 + 45 = 105 cars/day. In 12 days: 105 × 12 = 1,260.",
            "explanation_ar": "المعدل اليومي المشترك: 60 + 45 = 105 سيارة/يوم. في 12 يوماً: 105 × 12 = 1,260."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "Both factories together produce 1,260 cars in 12 days.",
            "explanation_ar": "المصنعان معاً ينتجان 1,260 سيارة في 12 يوماً."
          }
        ],
        "hint_en": "Find each factory's daily rate (÷ days), add the rates, then multiply by 12.",
        "hint_ar": "أوجد المعدل اليومي لكل مصنع (÷ الأيام)، اجمع المعدلين، ثم اضرب في 12.",
        "result_en": "The answer is 1260",
        "result_ar": "الجواب هو 1260"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "Split the problem into two parts: Factory 1 output in 12 days and Factory 2 output in 12 days.",
            "explanation_ar": "نقسّم المسألة إلى جزأين: إنتاج المصنع 1 في 12 يوماً وإنتاج المصنع 2 في 12 يوماً."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "Factory 1: rate = 480 ÷ 8 = 60/day → 60 × 12 = 720 cars. Factory 2: rate = 270 ÷ 6 = 45/day → 45 × 12 = 540 cars.",
            "explanation_ar": "المصنع 1: المعدل = 480 ÷ 8 = 60/يوم → 60 × 12 = 720 سيارة. المصنع 2: المعدل = 270 ÷ 6 = 45/يوم → 45 × 12 = 540 سيارة."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "Total = 720 + 540 = 1,260 cars.",
            "explanation_ar": "الإجمالي = 720 + 540 = 1,260 سيارة."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "Check: 60 × 12 = 720 ✓, 45 × 12 = 540 ✓, 720 + 540 = 1,260 ✓. Total = 1,260 cars.",
            "explanation_ar": "تحقق: 60 × 12 = 720 ✓، 45 × 12 = 540 ✓، 720 + 540 = 1,260 ✓. الإجمالي = 1,260 سيارة."
          }
        ],
        "hint_en": "Compute each factory's 12-day total separately, then add.",
        "hint_ar": "احسب إجمالي 12 يوم لكل مصنع بشكل منفصل، ثم اجمع.",
        "result_en": "The answer is 1260",
        "result_ar": "الجواب هو 1260"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Picture two German car factories running side by side for 12 days: one faster, one slower.",
            "explanation_ar": "تخيّل مصنعَي سيارات ألمانيَّين يعملان جنباً إلى جنب لمدة 12 يوماً: أحدهما أسرع والآخر أبطأ."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "Draw a timeline of 12 days. Mark Factory 1 producing 60 cars per day (a row of 60 per column) and Factory 2 producing 45 cars per day.",
            "explanation_ar": "ارسم خطاً زمنياً لـ 12 يوماً. ضع المصنع 1 ينتج 60 سيارة في اليوم (صف من 60 لكل عمود) والمصنع 2 ينتج 45 سيارة في اليوم."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "Factory 1 fills 12 × 60 = 720 cells. Factory 2 fills 12 × 45 = 540 cells.",
            "explanation_ar": "المصنع 1 يملأ 12 × 60 = 720 خلية. المصنع 2 يملأ 12 × 45 = 540 خلية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "Total cells = 720 + 540 = 1,260 cars produced together in 12 days.",
            "explanation_ar": "إجمالي الخلايا = 720 + 540 = 1,260 سيارة تنتجها المصانع معاً في 12 يوماً."
          }
        ],
        "hint_en": "Use a grid with 12 day-columns and daily-rate rows for each factory, then count total cells.",
        "hint_ar": "استخدم شبكة بـ 12 عموداً للأيام وصفوف المعدل اليومي لكل مصنع، ثم أحصِ الخلايا الكلية.",
        "result_en": "The answer is 1260",
        "result_ar": "الجواب هو 1260"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-specific-word-hard-002",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A shopkeeper in Morocco buys a carpet for 800 dirhams and sells it at a 35% profit. What is the selling price in dirhams?",
    "question_ar": "تاجر في المغرب يشتري سجادة بـ 800 درهم ويبيعها بربح 35%. ما هو سعر البيع بالدرهم ؟",
    "answer": 1080,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "35% profit on 800 dirhams means selling price = 800 + 35% of 800. We can also compute it as 135% of 800.",
            "explanation_ar": "ربح 35% على 800 درهم يعني سعر البيع = 800 + 35% من 800. يمكننا أيضاً حسابها كـ 135% من 800."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Find 10% of 800: 800 ÷ 10 = 80 dirhams. Then 30% = 3 × 80 = 240, and 5% = 40.",
            "explanation_ar": "نجد 10% من 800: 800 ÷ 10 = 80 درهم. ثم 30% = 3 × 80 = 240، و 5% = 40."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "35% of 800 = 240 + 40 = 280 dirhams profit.",
            "explanation_ar": "35% من 800 = 240 + 40 = 280 درهم ربح."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "Selling price = 800 + 280 = 1,080 dirhams.",
            "explanation_ar": "سعر البيع = 800 + 280 = 1,080 درهم."
          }
        ],
        "hint_en": "Find 10% of 800, build up to 35%, then add to 800.",
        "hint_ar": "أوجد 10% من 800، ابنِ حتى 35%، ثم أضف إلى 800.",
        "result_en": "The answer is 1080",
        "result_ar": "الجواب هو 1080"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "Cost = 800 dirhams. Profit rate = 35%. Split 35% into 25% + 10%.",
            "explanation_ar": "التكلفة = 800 درهم. نسبة الربح = 35%. نقسّم 35% إلى 25% + 10%."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "25% of 800 = 800 ÷ 4 = 200. 10% of 800 = 80. Total profit = 200 + 80 = 280.",
            "explanation_ar": "25% من 800 = 800 ÷ 4 = 200. 10% من 800 = 80. إجمالي الربح = 200 + 80 = 280."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "Selling price = cost + profit = 800 + 280 = 1,080.",
            "explanation_ar": "سعر البيع = التكلفة + الربح = 800 + 280 = 1,080."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "Check: 280 ÷ 800 = 0.35 = 35% ✓. Selling price = 1,080 dirhams.",
            "explanation_ar": "تحقق: 280 ÷ 800 = 0.35 = 35% ✓. سعر البيع = 1,080 درهم."
          }
        ],
        "hint_en": "Split 35% into 25% (divide by 4) + 10% (divide by 10), sum the profits, then add to 800.",
        "hint_ar": "قسّم 35% إلى 25% (اقسم على 4) + 10% (اقسم على 10)، اجمع الأرباح، ثم أضف إلى 800.",
        "result_en": "The answer is 1080",
        "result_ar": "الجواب هو 1080"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Picture a Moroccan carpet merchant who paid 800 dirhams for a carpet and wants to earn a 35% profit on top.",
            "explanation_ar": "تخيّل تاجر سجاد مغربي دفع 800 درهم لشراء سجادة ويريد تحقيق ربح 35% إضافي."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "Draw a bar of 100% = 800 dirhams. Extend it by 35% more: split the extension into a 25%-block (200 dirhams) and a 10%-block (80 dirhams).",
            "explanation_ar": "ارسم شريطاً بـ 100% = 800 درهم. مدّده بـ 35% إضافية: قسّم الامتداد إلى كتلة 25% (200 درهم) وكتلة 10% (80 درهم)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "Total bar = 100% + 35% = 135% = 800 + 200 + 80 = 1,080.",
            "explanation_ar": "الشريط الكلي = 100% + 35% = 135% = 800 + 200 + 80 = 1,080."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "The full bar of 135% equals 1,080 dirhams, which is the selling price.",
            "explanation_ar": "الشريط الكامل بـ 135% يساوي 1,080 درهم، وهو سعر البيع."
          }
        ],
        "hint_en": "Draw a percent bar: 100% = 800, then attach the 35%-extension to find the selling price.",
        "hint_ar": "ارسم شريطاً مئوياً: 100% = 800، ثم أرفق امتداد 35% لإيجاد سعر البيع.",
        "result_en": "The answer is 1080",
        "result_ar": "الجواب هو 1080"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "word_problem"
    }
  },
  {
    "id": "g7-specific-word-hard-003",
    "grade": 7,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A swimming pool in Australia holds 3,600 liters when full. A pump fills it at 120 liters per minute, but a leak drains it at 30 liters per minute. How many minutes does it take to fill the pool from empty?",
    "question_ar": "حوض سباحة في أستراليا يتسع لـ 3,600 لتر عند امتلائه. مضخة تملأه بمعدل 120 لتر في الدقيقة، لكن تسرباً يُفرغه بمعدل 30 لتر في الدقيقة. كم دقيقة يستغرق ملء الحوض من الفراغ ؟",
    "answer": 40,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "الملاحظة",
            "explanation_en": "The pump adds 120 liters/min and the leak removes 30 liters/min. The net fill rate is their difference.",
            "explanation_ar": "المضخة تضيف 120 لتر/دقيقة والتسرب يُزيل 30 لتر/دقيقة. معدل الملء الصافي هو الفرق بينهما."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "حساب القيم الأساسية",
            "explanation_en": "Net fill rate = 120 − 30 = 90 liters per minute.",
            "explanation_ar": "معدل الملء الصافي = 120 − 30 = 90 لتر في الدقيقة."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "تطبيق القاعدة",
            "explanation_en": "Time = total volume ÷ net rate = 3,600 ÷ 90.",
            "explanation_ar": "الزمن = الحجم الكلي ÷ المعدل الصافي = 3,600 ÷ 90."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "الجمع والإعلان",
            "explanation_en": "3,600 ÷ 90 = 40 minutes. The pool takes 40 minutes to fill.",
            "explanation_ar": "3,600 ÷ 90 = 40 دقيقة. يستغرق الحوض 40 دقيقة ليمتلئ."
          }
        ],
        "hint_en": "Subtract the leak rate from the pump rate to get the net fill rate, then divide 3,600 by that rate.",
        "hint_ar": "اطرح معدل التسرب من معدل المضخة للحصول على المعدل الصافي، ثم اقسم 3,600 على ذلك المعدل.",
        "result_en": "The answer is 40",
        "result_ar": "الجواب هو 40"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "التعرف والتقسيم",
            "explanation_en": "Split the problem into: (a) finding the net rate, and (b) computing time from net rate and volume.",
            "explanation_ar": "نقسّم المسألة إلى: (أ) إيجاد المعدل الصافي، و(ب) حساب الزمن من المعدل الصافي والحجم."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "العملية على كل جزء",
            "explanation_en": "Net rate = 120 − 30 = 90 liters/min. Time = 3,600 ÷ 90 = 40 min.",
            "explanation_ar": "المعدل الصافي = 120 − 30 = 90 لتر/دقيقة. الزمن = 3,600 ÷ 90 = 40 دقيقة."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "إعادة الدمج",
            "explanation_en": "Both sub-calculations combine to give: pool fills in 40 minutes.",
            "explanation_ar": "يتجمع الحسابان الفرعيان ليعطيا: الحوض يمتلئ في 40 دقيقة."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "التحقق والإعلان",
            "explanation_en": "Check: 90 × 40 = 3,600 liters ✓. Fill time = 40 minutes.",
            "explanation_ar": "تحقق: 90 × 40 = 3,600 لتر ✓. وقت الملء = 40 دقيقة."
          }
        ],
        "hint_en": "Find the net fill rate (120 − 30 = 90), then divide 3,600 by 90.",
        "hint_ar": "أوجد معدل الملء الصافي (120 − 30 = 90)، ثم اقسم 3,600 على 90.",
        "result_en": "The answer is 40",
        "result_ar": "الجواب هو 40"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "الربط بالقصة",
            "explanation_en": "Picture an Australian swimming pool with two arrows: a blue arrow (pump) pushing 120 liters in each minute, and a red arrow (leak) draining 30 liters each minute.",
            "explanation_ar": "تخيّل حوض سباحة أسترالي بسهمين: سهم أزرق (المضخة) يدفع 120 لتراً في كل دقيقة، وسهم أحمر (التسرب) يُفرغ 30 لتراً في كل دقيقة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "بناء النموذج",
            "explanation_en": "Draw a number line from 0 to 3,600. Each minute, the net effect is +90 liters (120 in − 30 out). Mark hops of 90 along the line.",
            "explanation_ar": "ارسم خطاً رقمياً من 0 إلى 3,600. كل دقيقة التأثير الصافي هو +90 لتراً (120 داخل − 30 خارج). ضع قفزات بمقدار 90 على الخط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "قراءة النموذج",
            "explanation_en": "Count how many 90-liter hops reach 3,600: 3,600 ÷ 90 = 40 hops = 40 minutes.",
            "explanation_ar": "أحصِ عدد القفزات البالغة 90 لتراً للوصول إلى 3,600: 3,600 ÷ 90 = 40 قفزة = 40 دقيقة."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "الحل والربط",
            "explanation_en": "40 hops of 90 liters each fill the pool completely. It takes 40 minutes.",
            "explanation_ar": "40 قفزة بمقدار 90 لتراً في كل منها تملأ الحوض تماماً. يستغرق ذلك 40 دقيقة."
          }
        ],
        "hint_en": "Draw a number line and hop in steps of 90 (net fill per minute) until you reach 3,600.",
        "hint_ar": "ارسم خطاً رقمياً واقفز بخطوات 90 (الملء الصافي في الدقيقة) حتى تصل إلى 3,600.",
        "result_en": "The answer is 40",
        "result_ar": "الجواب هو 40"
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
  grade7LearnBank.filter(p => p.category === cat);

export const getByLevel = (level: 'Easy' | 'Medium' | 'Hard') =>
  grade7LearnBank.filter(p => p.level === level);

export const getById = (id: string) =>
  grade7LearnBank.find(p => p.id === id) ?? null;

export const getByTag = (tag: string) =>
  grade7LearnBank.filter(p => p.meta.fun_fact_tag === tag);
