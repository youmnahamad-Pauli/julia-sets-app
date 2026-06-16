// ============================================================
// Julia Sets — Grade 6 Learn Bank
// Auto-generated — do not edit by hand
// 63 problems × 3 methods (Vedic / Decompose / Visualize)
// Note: Integers & Negatives category allows negative answers
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

export const grade6LearnBank: LearnProblem[] = 
[
  {
    "id": "g6-common-add-easy-001",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "312500 + 241300 = ?",
    "question_ar": "312500 + 241300 = ؟",
    "answer": 553800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Write both numbers left to right: 312500 and 241300. Notice that no column sums exceed 9, so no carrying is needed anywhere.",
            "explanation_ar": "اكتب الرقمين من اليسار إلى اليمين: 312500 و241300. لاحظ أن مجموع كل عمود لا يتجاوز 9، لذا لا يوجد نقل في أي مكان."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Hundreds of thousands: 3 + 2 = 5. Ten-thousands: 1 + 4 = 5. Thousands: 2 + 1 = 3. The last three digits are 500 + 300 = 800.",
            "explanation_ar": "مئات الآلاف: 3 + 2 = 5. عشرات الآلاف: 1 + 4 = 5. الآلاف: 2 + 1 = 3. الأرقام الثلاثة الأخيرة: 500 + 300 = 800."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Combine the leading digits left to right: 5, 5, 3 give 553, then append 800 to get 553800.",
            "explanation_ar": "اجمع الأرقام الرئيسية من اليسار إلى اليمين: 5، 5، 3 تعطي 553، ثم أضف 800 لتحصل على 553800."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "312500 + 241300 = 553800.",
            "explanation_ar": "312500 + 241300 = 553800."
          }
        ],
        "hint_en": "Add digit by digit from left to right — no carrying needed.",
        "hint_ar": "اجمع رقمًا رقمًا من اليسار إلى اليمين — لا حاجة للنقل.",
        "result_en": "312500 + 241300 = 553800",
        "result_ar": "312500 + 241300 = 553800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split each number by place value: 312500 = 300000 + 12000 + 500; 241300 = 200000 + 41000 + 300.",
            "explanation_ar": "قسّم كل رقم حسب القيمة المكانية: 312500 = 300000 + 12000 + 500؛ 241300 = 200000 + 41000 + 300."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Hundred-thousands: 300000 + 200000 = 500000. Ten-thousands + thousands: 12000 + 41000 = 53000. Hundreds: 500 + 300 = 800.",
            "explanation_ar": "مئات الآلاف: 300000 + 200000 = 500000. عشرات الآلاف والآلاف: 12000 + 41000 = 53000. المئات: 500 + 300 = 800."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "500000 + 53000 + 800 = 553800.",
            "explanation_ar": "500000 + 53000 + 800 = 553800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 553800 − 241300 = 312500. ✓ Answer: 553800.",
            "explanation_ar": "تحقق: 553800 − 241300 = 312500. ✓ الجواب: 553800."
          }
        ],
        "hint_en": "Break each number into hundred-thousands, ten-thousands, and hundreds, then add matching parts.",
        "hint_ar": "قسّم كل رقم إلى مئات آلاف وعشرات آلاف ومئات، ثم اجمع الأجزاء المتشابهة.",
        "result_en": "312500 + 241300 = 553800",
        "result_ar": "312500 + 241300 = 553800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine two libraries: one holds 312500 books and the other holds 241300 books. How many books are there in total?",
            "explanation_ar": "تخيّل مكتبتين: إحداهما تحتوي على 312500 كتاب والأخرى على 241300 كتاب. كم يبلغ إجمالي الكتب؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a place-value chart with columns: HTh | TTh | Th | H | T | U. Fill in 3,1,2,5,0,0 and 2,4,1,3,0,0.",
            "explanation_ar": "ارسم جدول القيمة المكانية بأعمدة: م.آ | ع.آ | آ | م | ع | آحاد. أدخل 3،1،2،5،0،0 و2،4،1،3،0،0."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each column total: 5, 5, 3, 8, 0, 0 — reading left to right gives 553800.",
            "explanation_ar": "مجموع كل عمود: 5، 5، 3، 8، 0، 0 — القراءة من اليسار إلى اليمين تعطي 553800."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The two libraries combined hold 553800 books. 312500 + 241300 = 553800.",
            "explanation_ar": "تضم المكتبتان معًا 553800 كتاب. 312500 + 241300 = 553800."
          }
        ],
        "hint_en": "Use a place-value chart; add each column top to bottom with no carrying.",
        "hint_ar": "استخدم جدول القيمة المكانية؛ اجمع كل عمود من الأعلى إلى الأسفل دون نقل.",
        "result_en": "312500 + 241300 = 553800",
        "result_ar": "312500 + 241300 = 553800"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-add-easy-002",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "421300 + 163200 = ?",
    "question_ar": "421300 + 163200 = ؟",
    "answer": 584500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Examine 421300 and 163200 column by column from the left. Every digit pair sums to 9 or less, confirming zero carrying.",
            "explanation_ar": "افحص 421300 و163200 عمودًا بعمود من اليسار. كل زوج أرقام مجموعه 9 أو أقل، مما يؤكد عدم وجود نقل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "HTh: 4+1=5. TTh: 2+6=8. Th: 1+3=4. H: 3+2=5. T & U: 0+0=0 for both.",
            "explanation_ar": "م.آ: 4+1=5. ع.آ: 2+6=8. آ: 1+3=4. م: 3+2=5. ع وآحاد: 0+0=0 في كليهما."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Read the column sums left to right: 5, 8, 4, 5, 0, 0 → 584500.",
            "explanation_ar": "اقرأ مجاميع الأعمدة من اليسار إلى اليمين: 5، 8، 4، 5، 0، 0 → 584500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "421300 + 163200 = 584500.",
            "explanation_ar": "421300 + 163200 = 584500."
          }
        ],
        "hint_en": "No carrying — just add each place value left to right.",
        "hint_ar": "لا يوجد نقل — فقط اجمع كل قيمة مكانية من اليسار إلى اليمين.",
        "result_en": "421300 + 163200 = 584500",
        "result_ar": "421300 + 163200 = 584500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "421300 = 400000 + 21000 + 300; 163200 = 100000 + 63000 + 200.",
            "explanation_ar": "421300 = 400000 + 21000 + 300؛ 163200 = 100000 + 63000 + 200."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "400000 + 100000 = 500000. 21000 + 63000 = 84000. 300 + 200 = 500.",
            "explanation_ar": "400000 + 100000 = 500000. 21000 + 63000 = 84000. 300 + 200 = 500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "500000 + 84000 + 500 = 584500.",
            "explanation_ar": "500000 + 84000 + 500 = 584500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 584500 − 163200 = 421300. ✓ Answer: 584500.",
            "explanation_ar": "تحقق: 584500 − 163200 = 421300. ✓ الجواب: 584500."
          }
        ],
        "hint_en": "Split at the hundred-thousands boundary, then at thousands.",
        "hint_ar": "قسّم عند حد مئات الآلاف، ثم عند الآلاف.",
        "result_en": "421300 + 163200 = 584500",
        "result_ar": "421300 + 163200 = 584500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A city has 421300 residents in the north district and 163200 in the south district. What is the city's total population?",
            "explanation_ar": "تضم مدينة 421300 ساكنًا في الحي الشمالي و163200 في الحي الجنوبي. ما إجمالي سكان المدينة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart: HTh | TTh | Th | H | T | U. Row 1: 4,2,1,3,0,0. Row 2: 1,6,3,2,0,0.",
            "explanation_ar": "جدول القيمة المكانية: م.آ | ع.آ | آ | م | ع | آحاد. الصف 1: 4،2،1،3،0،0. الصف 2: 1،6،3،2،0،0."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Column totals: 5, 8, 4, 5, 0, 0 → 584500.",
            "explanation_ar": "مجاميع الأعمدة: 5، 8، 4، 5، 0، 0 → 584500."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The city's total population is 584500. 421300 + 163200 = 584500.",
            "explanation_ar": "إجمالي سكان المدينة 584500. 421300 + 163200 = 584500."
          }
        ],
        "hint_en": "A place-value chart with two rows makes this addition visual and quick.",
        "hint_ar": "جدول القيمة المكانية بصفين يجعل هذا الجمع مرئيًا وسريعًا.",
        "result_en": "421300 + 163200 = 584500",
        "result_ar": "421300 + 163200 = 584500"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-add-easy-003",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Easy",
    "question_en": "530200 + 214600 = ?",
    "question_ar": "530200 + 214600 = ؟",
    "answer": 744800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Scan 530200 and 214600 from left to right. No column exceeds 9 (5+2=7, 3+1=4, 0+4=4, 2+6=8, 0+0=0, 0+0=0), so no carrying.",
            "explanation_ar": "افحص 530200 و214600 من اليسار إلى اليمين. لا يتجاوز أي عمود 9 (5+2=7، 3+1=4، 0+4=4، 2+6=8، 0+0=0، 0+0=0)، إذن لا يوجد نقل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "HTh: 5+2=7. TTh: 3+1=4. Th: 0+4=4. H: 2+6=8. T+U: 0.",
            "explanation_ar": "م.آ: 5+2=7. ع.آ: 3+1=4. آ: 0+4=4. م: 2+6=8. ع+آحاد: 0."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Read sums left to right: 7, 4, 4, 8, 0, 0 → 744800.",
            "explanation_ar": "اقرأ المجاميع من اليسار إلى اليمين: 7، 4، 4، 8، 0، 0 → 744800."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "530200 + 214600 = 744800.",
            "explanation_ar": "530200 + 214600 = 744800."
          }
        ],
        "hint_en": "Check each column pair first — if all ≤ 9, just read off the sums.",
        "hint_ar": "تحقق من كل زوج أعمدة أولًا — إذا كانت كلها ≤ 9، اقرأ المجاميع مباشرة.",
        "result_en": "530200 + 214600 = 744800",
        "result_ar": "530200 + 214600 = 744800"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "530200 = 500000 + 30000 + 200; 214600 = 200000 + 14000 + 600.",
            "explanation_ar": "530200 = 500000 + 30000 + 200؛ 214600 = 200000 + 14000 + 600."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "500000 + 200000 = 700000. 30000 + 14000 = 44000. 200 + 600 = 800.",
            "explanation_ar": "500000 + 200000 = 700000. 30000 + 14000 = 44000. 200 + 600 = 800."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "700000 + 44000 + 800 = 744800.",
            "explanation_ar": "700000 + 44000 + 800 = 744800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 744800 − 214600 = 530200. ✓ Answer: 744800.",
            "explanation_ar": "تحقق: 744800 − 214600 = 530200. ✓ الجواب: 744800."
          }
        ],
        "hint_en": "Group the hundreds-of-thousands together, then ten-thousands, then hundreds.",
        "hint_ar": "اجمع مئات الآلاف معًا، ثم عشرات الآلاف، ثم المئات.",
        "result_en": "530200 + 214600 = 744800",
        "result_ar": "530200 + 214600 = 744800"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A stadium sold 530200 tickets on day one and 214600 tickets on day two. How many total tickets were sold?",
            "explanation_ar": "باع ملعب 530200 تذكرة في اليوم الأول و214600 تذكرة في اليوم الثاني. كم إجمالي التذاكر المباعة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Place value chart rows: [5,3,0,2,0,0] and [2,1,4,6,0,0].",
            "explanation_ar": "صفوف جدول القيمة المكانية: [5،3،0،2،0،0] و[2،1،4،6،0،0]."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Column totals: 7, 4, 4, 8, 0, 0 → 744800.",
            "explanation_ar": "مجاميع الأعمدة: 7، 4، 4، 8، 0، 0 → 744800."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total tickets sold over two days: 744800. 530200 + 214600 = 744800.",
            "explanation_ar": "إجمالي التذاكر المباعة خلال يومين: 744800. 530200 + 214600 = 744800."
          }
        ],
        "hint_en": "Visualise two rows in a place-value chart and add each column.",
        "hint_ar": "تصور صفين في جدول القيمة المكانية واجمع كل عمود.",
        "result_en": "530200 + 214600 = 744800",
        "result_ar": "530200 + 214600 = 744800"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-add-medium-001",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "347600 + 254800 = ?",
    "question_ar": "347600 + 254800 = ؟",
    "answer": 602400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Left to right: HTh digits are 3+2=5 (OK). TTh: 4+5=9 (OK). Th: 7+4=11 — carry 1 to ten-thousands. H: 6+8=14 — carry 1 to thousands.",
            "explanation_ar": "من اليسار إلى اليمين: أرقام م.آ هي 3+2=5 (مقبول). ع.آ: 4+5=9 (مقبول). آ: 7+4=11 — انقل 1 إلى عشرات الآلاف. م: 6+8=14 — انقل 1 إلى الآلاف."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Hundreds: 600+800 = 1400, write 4, carry 1. Thousands: 7000+4000+1000(carry) = 12000, write 2, carry 1. Ten-thousands: 40000+50000+10000(carry) = 100000, write 0, carry 1. HTh: 300000+200000+100000(carry) = 600000.",
            "explanation_ar": "المئات: 600+800=1400، اكتب 4، انقل 1. الآلاف: 7000+4000+1000(نقل)=12000، اكتب 2، انقل 1. عشرات الآلاف: 40000+50000+10000(نقل)=100000، اكتب 0، انقل 1. م.آ: 300000+200000+100000(نقل)=600000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Cascading carries give: 6 (HTh), 0 (TTh), 2 (Th), 4 (H), 0 (T), 0 (U) → 602400.",
            "explanation_ar": "النقل المتتالي يعطي: 6 (م.آ)، 0 (ع.آ)، 2 (آ)، 4 (م)، 0 (ع)، 0 (آحاد) → 602400."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "347600 + 254800 = 602400.",
            "explanation_ar": "347600 + 254800 = 602400."
          }
        ],
        "hint_en": "Work right to left tracking carries; the hundreds and thousands both trigger a carry.",
        "hint_ar": "اعمل من اليمين إلى اليسار مع تتبع النقل؛ المئات والآلاف كلاهما يُطلق نقلًا.",
        "result_en": "347600 + 254800 = 602400",
        "result_ar": "347600 + 254800 = 602400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "347600 = 300000 + 47000 + 600; 254800 = 200000 + 54000 + 800.",
            "explanation_ar": "347600 = 300000 + 47000 + 600؛ 254800 = 200000 + 54000 + 800."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "300000 + 200000 = 500000. 47000 + 54000 = 101000. 600 + 800 = 1400.",
            "explanation_ar": "300000 + 200000 = 500000. 47000 + 54000 = 101000. 600 + 800 = 1400."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "500000 + 101000 + 1400 = 602400.",
            "explanation_ar": "500000 + 101000 + 1400 = 602400."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 602400 − 254800 = 347600. ✓ Answer: 602400.",
            "explanation_ar": "تحقق: 602400 − 254800 = 347600. ✓ الجواب: 602400."
          }
        ],
        "hint_en": "When the partial sums exceed 1000 or 10000, they simply roll into the next group.",
        "hint_ar": "عندما تتجاوز المجاميع الجزئية 1000 أو 10000، فإنها تنتقل ببساطة إلى المجموعة التالية.",
        "result_en": "347600 + 254800 = 602400",
        "result_ar": "347600 + 254800 = 602400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A fundraiser collected 347600 coins in week one and 254800 coins in week two. What is the total?",
            "explanation_ar": "جمع مشروع خيري 347600 قطعة نقدية في الأسبوع الأول و254800 في الأسبوع الثاني. ما المجموع الكلي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, start at 347600. Jump +200000 → 547600. Jump +50000 → 597600. Jump +4800 → 602400.",
            "explanation_ar": "على خط الأعداد، ابدأ عند 347600. قفز +200000 → 547600. قفز +50000 → 597600. قفز +4800 → 602400."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Three jumps land exactly on 602400.",
            "explanation_ar": "ثلاث قفزات تصل بدقة إلى 602400."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total coins collected: 602400. 347600 + 254800 = 602400.",
            "explanation_ar": "إجمالي القطع النقدية المجموعة: 602400. 347600 + 254800 = 602400."
          }
        ],
        "hint_en": "Jump in chunks (hundreds of thousands, then ten-thousands, then leftovers) along a number line.",
        "hint_ar": "قفز على شرائح (مئات الآلاف، ثم عشرات الآلاف، ثم الباقي) على خط الأعداد.",
        "result_en": "347600 + 254800 = 602400",
        "result_ar": "347600 + 254800 = 602400"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-add-medium-002",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "463800 + 278400 = ?",
    "question_ar": "463800 + 278400 = ؟",
    "answer": 742200,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Scan from right: T & U are 0. H: 8+4=12, carry 1. Th: 3+8+1=12, carry 1. TTh: 6+7+1=14, carry 1. HTh: 4+2+1=7.",
            "explanation_ar": "افحص من اليمين: ع وآحاد = 0. م: 8+4=12، انقل 1. آ: 3+8+1=12، انقل 1. ع.آ: 6+7+1=14، انقل 1. م.آ: 4+2+1=7."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Hundreds digit: 2 (from 12). Thousands digit: 2 (from 12). Ten-thousands digit: 4 (from 14). HTh: 7. Append 00.",
            "explanation_ar": "رقم المئات: 2 (من 12). رقم الآلاف: 2 (من 12). رقم عشرات الآلاف: 4 (من 14). م.آ: 7. أضف 00."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Digits left to right: 7, 4, 2, 2, 0, 0 → 742200.",
            "explanation_ar": "الأرقام من اليسار إلى اليمين: 7، 4، 2، 2، 0، 0 → 742200."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "463800 + 278400 = 742200.",
            "explanation_ar": "463800 + 278400 = 742200."
          }
        ],
        "hint_en": "Three columns in a row generate carries — track each one carefully.",
        "hint_ar": "ثلاثة أعمدة متتالية تولّد نقلًا — تتبع كل واحد بعناية.",
        "result_en": "463800 + 278400 = 742200",
        "result_ar": "463800 + 278400 = 742200"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "463800 = 400000 + 63000 + 800; 278400 = 200000 + 78000 + 400.",
            "explanation_ar": "463800 = 400000 + 63000 + 800؛ 278400 = 200000 + 78000 + 400."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "400000 + 200000 = 600000. 63000 + 78000 = 141000. 800 + 400 = 1200.",
            "explanation_ar": "400000 + 200000 = 600000. 63000 + 78000 = 141000. 800 + 400 = 1200."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "600000 + 141000 + 1200 = 742200.",
            "explanation_ar": "600000 + 141000 + 1200 = 742200."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 742200 − 278400 = 463800. ✓ Answer: 742200.",
            "explanation_ar": "تحقق: 742200 − 278400 = 463800. ✓ الجواب: 742200."
          }
        ],
        "hint_en": "The thousands partial sum (141000) is over 100000 — let it flow into the next group.",
        "hint_ar": "مجموع الآلاف الجزئي (141000) يتجاوز 100000 — اتركه يتدفق إلى المجموعة التالية.",
        "result_en": "463800 + 278400 = 742200",
        "result_ar": "463800 + 278400 = 742200"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Two warehouses store 463800 and 278400 items respectively. What is the combined stock?",
            "explanation_ar": "مستودعان يخزنان 463800 و278400 عنصرًا على التوالي. ما المخزون الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Number line: start at 463800. Jump +278000 = 741800. Jump +400 = 742200.",
            "explanation_ar": "خط الأعداد: ابدأ عند 463800. قفز +278000 = 741800. قفز +400 = 742200."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Two jumps land on 742200.",
            "explanation_ar": "قفزتان تصلان إلى 742200."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Combined stock: 742200. 463800 + 278400 = 742200.",
            "explanation_ar": "المخزون المشترك: 742200. 463800 + 278400 = 742200."
          }
        ],
        "hint_en": "Split the second addend into a round thousands part and a hundreds part for easier jumps.",
        "hint_ar": "قسّم الجمع الثاني إلى جزء آلاف مستديرة وجزء مئات لقفزات أسهل.",
        "result_en": "463800 + 278400 = 742200",
        "result_ar": "463800 + 278400 = 742200"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-add-medium-003",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Medium",
    "question_en": "572900 + 348600 = ?",
    "question_ar": "572900 + 348600 = ؟",
    "answer": 921500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Right to left: T & U = 0. H: 9+6=15, carry 1. Th: 2+8+1=11, carry 1. TTh: 7+4+1=12, carry 1. HTh: 5+3+1=9.",
            "explanation_ar": "من اليمين إلى اليسار: ع وآحاد = 0. م: 9+6=15، انقل 1. آ: 2+8+1=11، انقل 1. ع.آ: 7+4+1=12، انقل 1. م.آ: 5+3+1=9."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "H digit: 5 (from 15). Th digit: 1 (from 11). TTh digit: 2 (from 12). HTh: 9. Append 00.",
            "explanation_ar": "رقم المئات: 5 (من 15). رقم الآلاف: 1 (من 11). رقم ع.آ: 2 (من 12). م.آ: 9. أضف 00."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Digits: 9, 2, 1, 5, 0, 0 → 921500.",
            "explanation_ar": "الأرقام: 9، 2، 1، 5، 0، 0 → 921500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "572900 + 348600 = 921500.",
            "explanation_ar": "572900 + 348600 = 921500."
          }
        ],
        "hint_en": "Carries cascade from hundreds all the way through to hundred-thousands.",
        "hint_ar": "النقل يتتالى من المئات وصولًا إلى مئات الآلاف.",
        "result_en": "572900 + 348600 = 921500",
        "result_ar": "572900 + 348600 = 921500"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "572900 = 500000 + 72000 + 900; 348600 = 300000 + 48000 + 600.",
            "explanation_ar": "572900 = 500000 + 72000 + 900؛ 348600 = 300000 + 48000 + 600."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "500000 + 300000 = 800000. 72000 + 48000 = 120000. 900 + 600 = 1500.",
            "explanation_ar": "500000 + 300000 = 800000. 72000 + 48000 = 120000. 900 + 600 = 1500."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "800000 + 120000 + 1500 = 921500.",
            "explanation_ar": "800000 + 120000 + 1500 = 921500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 921500 − 348600 = 572900. ✓ Answer: 921500.",
            "explanation_ar": "تحقق: 921500 − 348600 = 572900. ✓ الجواب: 921500."
          }
        ],
        "hint_en": "72+48=120 (thousands), so that chunk contributes 120000 to the total.",
        "hint_ar": "72+48=120 (الآلاف)، لذا يضيف هذا الجزء 120000 للمجموع.",
        "result_en": "572900 + 348600 = 921500",
        "result_ar": "572900 + 348600 = 921500"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A country's two provinces have populations of 572900 and 348600. What is the combined population?",
            "explanation_ar": "مقاطعتان في دولة يبلغ عدد سكانهما 572900 و348600. ما عدد السكان الإجمالي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Number line: start at 572900. Jump +300000 → 872900. Jump +48000 → 920900. Jump +600 → 921500.",
            "explanation_ar": "خط الأعداد: ابدأ عند 572900. قفز +300000 → 872900. قفز +48000 → 920900. قفز +600 → 921500."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Three benchmark jumps reach 921500.",
            "explanation_ar": "ثلاث قفزات مرجعية تصل إلى 921500."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Combined population: 921500. 572900 + 348600 = 921500.",
            "explanation_ar": "إجمالي السكان: 921500. 572900 + 348600 = 921500."
          }
        ],
        "hint_en": "Use three jumps: hundreds of thousands first, then ten-thousands, then hundreds.",
        "hint_ar": "استخدم ثلاث قفزات: مئات الآلاف أولًا، ثم عشرات الآلاف، ثم المئات.",
        "result_en": "572900 + 348600 = 921500",
        "result_ar": "572900 + 348600 = 921500"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-add-hard-001",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "12.375 + 7.625 = ?",
    "question_ar": "12.375 + 7.625 = ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Align decimal points: 12.375 and 7.625. Look at the thousandths: 5+5=10. The hundredths: 7+2=9 plus carry 1 = 10. The tenths: 3+6=9 plus carry 1 = 10.",
            "explanation_ar": "قم بمحاذاة الفواصل العشرية: 12.375 و7.625. انظر إلى جزء الألف: 5+5=10. جزء المئة: 7+2=9 زائد نقل 1 = 10. جزء العُشر: 3+6=9 زائد نقل 1 = 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "The decimal parts are complements: 0.375 + 0.625 = 1.000 exactly. This complement pair eliminates all decimals.",
            "explanation_ar": "الأجزاء العشرية متكاملة: 0.375 + 0.625 = 1.000 بالضبط. هذا الزوج المتكامل يُلغي جميع الكسور العشرية."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the integer parts and the decimal complement: 12 + 7 + 1 = 20.",
            "explanation_ar": "اجمع الأجزاء الصحيحة والمكمّل العشري: 12 + 7 + 1 = 20."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "12.375 + 7.625 = 20.",
            "explanation_ar": "12.375 + 7.625 = 20."
          }
        ],
        "hint_en": "Check if the decimal parts are complements to 1 (i.e., they sum to 1.000).",
        "hint_ar": "تحقق مما إذا كانت الأجزاء العشرية مكملة للعدد 1 (أي مجموعها 1.000).",
        "result_en": "12.375 + 7.625 = 20",
        "result_ar": "12.375 + 7.625 = 20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "12.375 = 12 + 0.3 + 0.07 + 0.005; 7.625 = 7 + 0.6 + 0.02 + 0.005.",
            "explanation_ar": "12.375 = 12 + 0.3 + 0.07 + 0.005؛ 7.625 = 7 + 0.6 + 0.02 + 0.005."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Integers: 12 + 7 = 19. Tenths: 0.3 + 0.6 = 0.9. Hundredths: 0.07 + 0.02 = 0.09. Thousandths: 0.005 + 0.005 = 0.010.",
            "explanation_ar": "الأعداد الصحيحة: 12 + 7 = 19. أعشار: 0.3 + 0.6 = 0.9. أجزاء من مئة: 0.07 + 0.02 = 0.09. أجزاء من ألف: 0.005 + 0.005 = 0.010."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "19 + 0.9 + 0.09 + 0.010 = 19 + 1.000 = 20.",
            "explanation_ar": "19 + 0.9 + 0.09 + 0.010 = 19 + 1.000 = 20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 20 − 7.625 = 12.375. ✓ Answer: 20.",
            "explanation_ar": "تحقق: 20 − 7.625 = 12.375. ✓ الجواب: 20."
          }
        ],
        "hint_en": "The decimal columns (tenths + hundredths + thousandths) sum to exactly 1.",
        "hint_ar": "الأعمدة العشرية (أعشار + أجزاء من مئة + أجزاء من ألف) مجموعها 1 بالضبط.",
        "result_en": "12.375 + 7.625 = 20",
        "result_ar": "12.375 + 7.625 = 20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A baker uses 12.375 kg of flour from one bag and 7.625 kg from another. How many kilograms of flour in total?",
            "explanation_ar": "يستخدم خبّاز 12.375 كجم من الدقيق من كيس و7.625 كجم من آخر. كم الكيلوغرام الإجمالي من الدقيق؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a decimal place-value chart: Units | Tenths | Hundredths | Thousandths. Row 1: 12 | 3 | 7 | 5. Row 2: 7 | 6 | 2 | 5.",
            "explanation_ar": "ارسم جدول قيمة مكانية عشرية: وحدات | أعشار | أجزاء من مئة | أجزاء من ألف. الصف 1: 12 | 3 | 7 | 5. الصف 2: 7 | 6 | 2 | 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Thousandths: 5+5=10, write 0 carry 1. Hundredths: 7+2+1=10, write 0 carry 1. Tenths: 3+6+1=10, write 0 carry 1. Units: 12+7+1=20.",
            "explanation_ar": "أجزاء من ألف: 5+5=10، اكتب 0 انقل 1. أجزاء من مئة: 7+2+1=10، اكتب 0 انقل 1. أعشار: 3+6+1=10، اكتب 0 انقل 1. وحدات: 12+7+1=20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The baker used 20 kg in total. 12.375 + 7.625 = 20.",
            "explanation_ar": "استخدم الخبّاز 20 كجم إجمالًا. 12.375 + 7.625 = 20."
          }
        ],
        "hint_en": "In the decimal chart, every column carries — leaving all zeros after the decimal point.",
        "hint_ar": "في الجدول العشري، كل عمود يُنتج نقلًا — مما يُبقي جميع الأصفار بعد الفاصلة العشرية.",
        "result_en": "12.375 + 7.625 = 20",
        "result_ar": "12.375 + 7.625 = 20"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-add-hard-002",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "486750 + 397500 = ?",
    "question_ar": "486750 + 397500 = ؟",
    "answer": 884250,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Right to left: U=0. T: 5+0=5. H: 7+5=12, carry 1. Th: 6+7+1=14, carry 1. TTh: 8+9+1=18, carry 1. HTh: 4+3+1=8.",
            "explanation_ar": "من اليمين إلى اليسار: آحاد=0. ع: 5+0=5. م: 7+5=12، انقل 1. آ: 6+7+1=14، انقل 1. ع.آ: 8+9+1=18، انقل 1. م.آ: 4+3+1=8."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tens digit: 5. H digit: 2 (from 12). Th digit: 4 (from 14). TTh digit: 8 (from 18). HTh: 8.",
            "explanation_ar": "رقم العشرات: 5. رقم المئات: 2 (من 12). رقم الآلاف: 4 (من 14). رقم ع.آ: 8 (من 18). م.آ: 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Reading left to right: 8, 8, 4, 2, 5, 0 → 884250.",
            "explanation_ar": "القراءة من اليسار إلى اليمين: 8، 8، 4، 2، 5، 0 → 884250."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "486750 + 397500 = 884250.",
            "explanation_ar": "486750 + 397500 = 884250."
          }
        ],
        "hint_en": "Four consecutive columns produce carries — note that TTh gives 18, so write 8 and carry 1.",
        "hint_ar": "أربعة أعمدة متتالية تُنتج نقلًا — لاحظ أن ع.آ تعطي 18، فاكتب 8 وانقل 1.",
        "result_en": "486750 + 397500 = 884250",
        "result_ar": "486750 + 397500 = 884250"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "486750 = 400000 + 86000 + 750; 397500 = 300000 + 97000 + 500.",
            "explanation_ar": "486750 = 400000 + 86000 + 750؛ 397500 = 300000 + 97000 + 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "400000 + 300000 = 700000. 86000 + 97000 = 183000. 750 + 500 = 1250.",
            "explanation_ar": "400000 + 300000 = 700000. 86000 + 97000 = 183000. 750 + 500 = 1250."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "700000 + 183000 + 1250 = 884250.",
            "explanation_ar": "700000 + 183000 + 1250 = 884250."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 884250 − 397500 = 486750. ✓ Answer: 884250.",
            "explanation_ar": "تحقق: 884250 − 397500 = 486750. ✓ الجواب: 884250."
          }
        ],
        "hint_en": "86+97=183 thousands — that overflow is the key challenge here.",
        "hint_ar": "86+97=183 ألفًا — هذا الفائض هو التحدي الأساسي هنا.",
        "result_en": "486750 + 397500 = 884250",
        "result_ar": "486750 + 397500 = 884250"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Two factories produced 486750 and 397500 units this year. What is their combined production?",
            "explanation_ar": "أنتج مصنعان 486750 و397500 وحدة هذا العام. ما إجمالي إنتاجهما؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Number line: start at 486750. Jump +400000 → 886750. Adjust: we need to subtract 2500 because 397500 = 400000 − 2500. So 886750 − 2500 = 884250.",
            "explanation_ar": "خط الأعداد: ابدأ عند 486750. قفز +400000 → 886750. تصحيح: نطرح 2500 لأن 397500 = 400000 − 2500. إذن 886750 − 2500 = 884250."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Jump up to a round benchmark (400000), then step back the adjustment (2500) to land on 884250.",
            "explanation_ar": "قفز إلى منعطف مستدير (400000)، ثم تراجع بمقدار التعديل (2500) للوصول إلى 884250."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Combined production: 884250. 486750 + 397500 = 884250.",
            "explanation_ar": "إجمالي الإنتاج: 884250. 486750 + 397500 = 884250."
          }
        ],
        "hint_en": "Round 397500 up to 400000, add, then subtract the 2500 difference.",
        "hint_ar": "قرّب 397500 إلى 400000، اجمع، ثم اطرح الفرق 2500.",
        "result_en": "486750 + 397500 = 884250",
        "result_ar": "486750 + 397500 = 884250"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-add-hard-003",
    "grade": 6,
    "bank": "common",
    "category": "Addition",
    "level": "Hard",
    "question_en": "45.125 + 14.875 = ?",
    "question_ar": "45.125 + 14.875 = ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Align decimal points: 45.125 and 14.875. Check decimal parts: thousandths 5+5=10 (carry), hundredths 2+7+1=10 (carry), tenths 1+8+1=10 (carry). All decimal columns carry out.",
            "explanation_ar": "حاذِ الفواصل العشرية: 45.125 و14.875. تحقق من الأجزاء العشرية: أجزاء من ألف 5+5=10 (نقل)، أجزاء من مئة 2+7+1=10 (نقل)، أعشار 1+8+1=10 (نقل). كل الأعمدة العشرية تُنتج نقلًا."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Decimal complement: 0.125 + 0.875 = 1.000 exactly. Integer parts plus the carried 1: 45 + 14 + 1 = 60.",
            "explanation_ar": "المكمّل العشري: 0.125 + 0.875 = 1.000 بالضبط. الأجزاء الصحيحة زائد النقل 1: 45 + 14 + 1 = 60."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "The decimal parts cancel to 1, so the answer is simply 45 + 14 + 1 = 60.",
            "explanation_ar": "تُلغي الأجزاء العشرية لتصبح 1، فالجواب هو ببساطة 45 + 14 + 1 = 60."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "45.125 + 14.875 = 60.",
            "explanation_ar": "45.125 + 14.875 = 60."
          }
        ],
        "hint_en": "Spot the complement pair: 0.125 and 0.875 always add to 1.",
        "hint_ar": "اكتشف الزوج المتكامل: 0.125 و0.875 دائمًا مجموعهما 1.",
        "result_en": "45.125 + 14.875 = 60",
        "result_ar": "45.125 + 14.875 = 60"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "45.125 = 45 + 0.1 + 0.02 + 0.005; 14.875 = 14 + 0.8 + 0.07 + 0.005.",
            "explanation_ar": "45.125 = 45 + 0.1 + 0.02 + 0.005؛ 14.875 = 14 + 0.8 + 0.07 + 0.005."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Integers: 45 + 14 = 59. Tenths: 0.1 + 0.8 = 0.9. Hundredths: 0.02 + 0.07 = 0.09. Thousandths: 0.005 + 0.005 = 0.010.",
            "explanation_ar": "الأعداد الصحيحة: 45 + 14 = 59. أعشار: 0.1 + 0.8 = 0.9. أجزاء من مئة: 0.02 + 0.07 = 0.09. أجزاء من ألف: 0.005 + 0.005 = 0.010."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "59 + 0.9 + 0.09 + 0.010 = 59 + 1.000 = 60.",
            "explanation_ar": "59 + 0.9 + 0.09 + 0.010 = 59 + 1.000 = 60."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 60 − 14.875 = 45.125. ✓ Answer: 60.",
            "explanation_ar": "تحقق: 60 − 14.875 = 45.125. ✓ الجواب: 60."
          }
        ],
        "hint_en": "Add all the decimal parts together; they will total exactly 1.000.",
        "hint_ar": "اجمع جميع الأجزاء العشرية معًا؛ مجموعها سيكون 1.000 بالضبط.",
        "result_en": "45.125 + 14.875 = 60",
        "result_ar": "45.125 + 14.875 = 60"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A swimmer completes two laps: 45.125 seconds and 14.875 seconds. What is the total time?",
            "explanation_ar": "يُكمل سبّاح دورتين: 45.125 ثانية و14.875 ثانية. ما الوقت الكلي؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Decimal place-value chart: Units | Tenths | Hundredths | Thousandths. Row 1: 45 | 1 | 2 | 5. Row 2: 14 | 8 | 7 | 5.",
            "explanation_ar": "جدول القيمة المكانية العشرية: وحدات | أعشار | أجزاء من مئة | أجزاء من ألف. الصف 1: 45 | 1 | 2 | 5. الصف 2: 14 | 8 | 7 | 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Every decimal column carries out completely, leaving 0.000 after the decimal and carrying 1 to the units: 45 + 14 + 1 = 60.",
            "explanation_ar": "كل عمود عشري ينقل بالكامل، مما يُبقي 0.000 بعد الفاصلة وينقل 1 إلى الوحدات: 45 + 14 + 1 = 60."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total swimming time: 60 seconds (exactly 1 minute). 45.125 + 14.875 = 60.",
            "explanation_ar": "إجمالي وقت السباحة: 60 ثانية (دقيقة واحدة بالضبط). 45.125 + 14.875 = 60."
          }
        ],
        "hint_en": "A decimal chart shows how each column cascades carries to produce a clean whole number.",
        "hint_ar": "يُظهر الجدول العشري كيف يتتالى النقل في كل عمود لينتج عددًا صحيحًا نظيفًا.",
        "result_en": "45.125 + 14.875 = 60",
        "result_ar": "45.125 + 14.875 = 60"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-add-hard-003",
      "upper_grade_equivalent": "g7-common-add-easy-001",
      "fun_fact_tag": "addition"
    }
  },
  {
    "id": "g6-common-sub-easy-001",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "576800 − 243500 = ?",
    "question_ar": "576800 − 243500 = ؟",
    "answer": 333300,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both numbers end in 00, so the last two digits are already handled — focus on the first four significant digits: 5768 minus 2435.",
            "explanation_ar": "كلا الرقمين ينتهيان بـ 00، لذا انتبه إلى الأرقام الأربعة الأولى: 5768 ناقص 2435."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract left-to-right: 5 − 2 = 3 (hundred-thousands), 7 − 4 = 3 (ten-thousands), 6 − 3 = 3 (thousands), 8 − 5 = 3 (hundreds).",
            "explanation_ar": "اطرح من اليسار إلى اليمين: 5 − 2 = 3 (مئات الآلاف)، 7 − 4 = 3 (عشرات الآلاف)، 6 − 3 = 3 (آلاف)، 8 − 5 = 3 (مئات)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since no column produced a negative result, no adjustment is needed. The tens and units are both 0 − 0 = 0.",
            "explanation_ar": "لم تنتج أي خانة نتيجة سالبة، لذا لا يلزم أي تعديل. خانتا العشرات والآحاد هما 0 − 0 = 0."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Combine the digits in order: 3, 3, 3, 3, 0, 0 → 333300.",
            "explanation_ar": "اجمع الأرقام بالترتيب: 3، 3، 3، 3، 0، 0 ← 333300."
          }
        ],
        "hint_en": "No borrowing needed — subtract each pair of digits straight across.",
        "hint_ar": "لا يوجد استلاف — اطرح كل زوج من الأرقام مباشرةً.",
        "result_en": "576800 − 243500 = 333300",
        "result_ar": "576800 − 243500 = 333300"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split each number by place value: 576800 = 500000 + 70000 + 6000 + 800; 243500 = 200000 + 40000 + 3000 + 500.",
            "explanation_ar": "قسّم كل رقم حسب القيم المكانية: 576800 = 500000 + 70000 + 6000 + 800؛ 243500 = 200000 + 40000 + 3000 + 500."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "500000 − 200000 = 300000; 70000 − 40000 = 30000; 6000 − 3000 = 3000; 800 − 500 = 300.",
            "explanation_ar": "500000 − 200000 = 300000؛ 70000 − 40000 = 30000؛ 6000 − 3000 = 3000؛ 800 − 500 = 300."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial results: 300000 + 30000 + 3000 + 300 = 333300.",
            "explanation_ar": "اجمع النتائج الجزئية: 300000 + 30000 + 3000 + 300 = 333300."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 333300 + 243500 = 576800 ✓. The answer is 333300.",
            "explanation_ar": "تحقق: 333300 + 243500 = 576800 ✓. الجواب هو 333300."
          }
        ],
        "hint_en": "Break both numbers into hundred-thousands, ten-thousands, thousands, and hundreds, then subtract each column.",
        "hint_ar": "قسّم كلا الرقمين إلى مئات الآلاف وعشرات الآلاف والآلاف والمئات، ثم اطرح كل خانة.",
        "result_en": "576800 − 243500 = 333300",
        "result_ar": "576800 − 243500 = 333300"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a warehouse holding 576800 boxes. 243500 boxes are shipped out. How many remain?",
            "explanation_ar": "تخيّل مستودعاً يحتوي على 576800 صندوق. يُشحن 243500 صندوق. كم تبقّى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Mark 576800 on the right. Jump back 200000 to 376800, then back 40000 to 336800, then back 3000 to 333800, then back 500 to 333300.",
            "explanation_ar": "ارسم خطاً عددياً. ضع 576800 على اليمين. اقفز 200000 إلى الخلف إلى 376800، ثم 40000 إلى 336800، ثم 3000 إلى 333800، ثم 500 إلى 333300."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The landing point after all four jumps back is 333300.",
            "explanation_ar": "نقطة الهبوط بعد القفزات الأربعة إلى الخلف هي 333300."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total jumped back: 200000 + 40000 + 3000 + 500 = 243500. Landing point: 333300. The warehouse has 333300 boxes remaining.",
            "explanation_ar": "مجموع القفزات: 200000 + 40000 + 3000 + 500 = 243500. نقطة الهبوط: 333300. تبقّى في المستودع 333300 صندوق."
          }
        ],
        "hint_en": "Use benchmark jumps of 200000, 40000, 3000, and 500 backward on a number line.",
        "hint_ar": "استخدم قفزات معيارية إلى الخلف على خط الأعداد: 200000، 40000، 3000، 500.",
        "result_en": "576800 − 243500 = 333300",
        "result_ar": "576800 − 243500 = 333300"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-sub-easy-002",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "895400 − 362100 = ?",
    "question_ar": "895400 − 362100 = ؟",
    "answer": 533300,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both numbers end in 00. Focus on the meaningful four digits: 8954 minus 3621.",
            "explanation_ar": "كلا الرقمين ينتهيان بـ 00. ركّز على الأرقام الأربعة المهمة: 8954 ناقص 3621."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract left-to-right: 8 − 3 = 5 (hundred-thousands), 9 − 6 = 3 (ten-thousands), 5 − 2 = 3 (thousands), 4 − 1 = 3 (hundreds).",
            "explanation_ar": "اطرح من اليسار إلى اليمين: 8 − 3 = 5 (مئات الآلاف)، 9 − 6 = 3 (عشرات الآلاف)، 5 − 2 = 3 (آلاف)، 4 − 1 = 3 (مئات)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "No column went negative, so no adjustment is required. Tens and units: 0 − 0 = 0.",
            "explanation_ar": "لم تنتج أي خانة نتيجة سالبة، لا يلزم أي تعديل. العشرات والآحاد: 0 − 0 = 0."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Digits in order: 5, 3, 3, 3, 0, 0 → 533300.",
            "explanation_ar": "الأرقام بالترتيب: 5، 3، 3، 3، 0، 0 ← 533300."
          }
        ],
        "hint_en": "Each digit pair subtracts cleanly — no borrowing required.",
        "hint_ar": "كل زوج من الأرقام يُطرح بسهولة — لا استلاف مطلوب.",
        "result_en": "895400 − 362100 = 533300",
        "result_ar": "895400 − 362100 = 533300"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "895400 = 800000 + 90000 + 5000 + 400; 362100 = 300000 + 60000 + 2000 + 100.",
            "explanation_ar": "895400 = 800000 + 90000 + 5000 + 400؛ 362100 = 300000 + 60000 + 2000 + 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "800000 − 300000 = 500000; 90000 − 60000 = 30000; 5000 − 2000 = 3000; 400 − 100 = 300.",
            "explanation_ar": "800000 − 300000 = 500000؛ 90000 − 60000 = 30000؛ 5000 − 2000 = 3000؛ 400 − 100 = 300."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "500000 + 30000 + 3000 + 300 = 533300.",
            "explanation_ar": "500000 + 30000 + 3000 + 300 = 533300."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 533300 + 362100 = 895400 ✓. The answer is 533300.",
            "explanation_ar": "تحقق: 533300 + 362100 = 895400 ✓. الجواب هو 533300."
          }
        ],
        "hint_en": "Split into place-value parts, subtract each, then add the remainders together.",
        "hint_ar": "قسّم إلى أجزاء بالقيم المكانية، اطرح كلاً منها، ثم اجمع البواقي.",
        "result_en": "895400 − 362100 = 533300",
        "result_ar": "895400 − 362100 = 533300"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A city had 895400 residents. 362100 moved away. How many remain?",
            "explanation_ar": "كانت في مدينة 895400 ساكن. هاجر 362100 منهم. كم تبقّى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, start at 895400 and jump back: −300000 → 595400, −60000 → 535400, −2000 → 533400, −100 → 533300.",
            "explanation_ar": "على خط الأعداد، ابدأ من 895400 وارجع: −300000 ← 595400، −60000 ← 535400، −2000 ← 533400، −100 ← 533300."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After four backward jumps the marker lands on 533300.",
            "explanation_ar": "بعد أربع قفزات إلى الخلف، يقع المؤشر على 533300."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total removed: 300000 + 60000 + 2000 + 100 = 362100. Remaining: 533300 residents.",
            "explanation_ar": "إجمالي من غادر: 300000 + 60000 + 2000 + 100 = 362100. المتبقّون: 533300 ساكن."
          }
        ],
        "hint_en": "Jump back in chunks of 300000, 60000, 2000, and 100 on the number line.",
        "hint_ar": "اقفز إلى الخلف بمقادير 300000 و60000 و2000 و100 على خط الأعداد.",
        "result_en": "895400 − 362100 = 533300",
        "result_ar": "895400 − 362100 = 533300"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-sub-easy-003",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Easy",
    "question_en": "748600 − 315200 = ?",
    "question_ar": "748600 − 315200 = ؟",
    "answer": 433400,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both numbers end in 00. The meaningful digits are 7486 minus 3152.",
            "explanation_ar": "كلا الرقمين ينتهيان بـ 00. الأرقام المهمة هي 7486 ناقص 3152."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract left-to-right: 7 − 3 = 4 (hundred-thousands), 4 − 1 = 3 (ten-thousands), 8 − 5 = 3 (thousands), 6 − 2 = 4 (hundreds).",
            "explanation_ar": "اطرح من اليسار إلى اليمين: 7 − 3 = 4 (مئات الآلاف)، 4 − 1 = 3 (عشرات الآلاف)، 8 − 5 = 3 (آلاف)، 6 − 2 = 4 (مئات)."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "No negative columns — no adjustments needed. Tens and units remain 0.",
            "explanation_ar": "لا توجد خانات سالبة — لا تعديلات مطلوبة. تبقى العشرات والآحاد 0."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Digits in order: 4, 3, 3, 4, 0, 0 → 433400.",
            "explanation_ar": "الأرقام بالترتيب: 4، 3، 3، 4، 0، 0 ← 433400."
          }
        ],
        "hint_en": "Subtract digit by digit from left to right — all columns are positive.",
        "hint_ar": "اطرح رقماً رقماً من اليسار إلى اليمين — جميع الخانات موجبة.",
        "result_en": "748600 − 315200 = 433400",
        "result_ar": "748600 − 315200 = 433400"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "748600 = 700000 + 40000 + 8000 + 600; 315200 = 300000 + 10000 + 5000 + 200.",
            "explanation_ar": "748600 = 700000 + 40000 + 8000 + 600؛ 315200 = 300000 + 10000 + 5000 + 200."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "700000 − 300000 = 400000; 40000 − 10000 = 30000; 8000 − 5000 = 3000; 600 − 200 = 400.",
            "explanation_ar": "700000 − 300000 = 400000؛ 40000 − 10000 = 30000؛ 8000 − 5000 = 3000؛ 600 − 200 = 400."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "400000 + 30000 + 3000 + 400 = 433400.",
            "explanation_ar": "400000 + 30000 + 3000 + 400 = 433400."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 433400 + 315200 = 748600 ✓. The answer is 433400.",
            "explanation_ar": "تحقق: 433400 + 315200 = 748600 ✓. الجواب هو 433400."
          }
        ],
        "hint_en": "Each place-value column subtracts without borrowing — keep them separate, then recombine.",
        "hint_ar": "كل خانة قيمة مكانية تُطرح دون استلاف — أبقها منفصلة ثم أعد تجميعها.",
        "result_en": "748600 − 315200 = 433400",
        "result_ar": "748600 − 315200 = 433400"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A library catalogue has 748600 books. 315200 are sent to another branch. How many stay?",
            "explanation_ar": "فهرس مكتبة يحتوي على 748600 كتاب. يُرسل 315200 إلى فرع آخر. كم يتبقّى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Number line: start at 748600, jump −300000 → 448600, −10000 → 438600, −5000 → 433600, −200 → 433400.",
            "explanation_ar": "خط الأعداد: ابدأ من 748600، اقفز −300000 ← 448600، −10000 ← 438600، −5000 ← 433600، −200 ← 433400."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The final landing point is 433400.",
            "explanation_ar": "نقطة الهبوط النهائية هي 433400."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Books removed: 300000 + 10000 + 5000 + 200 = 315200. Books remaining: 433400.",
            "explanation_ar": "الكتب المُرسَلة: 300000 + 10000 + 5000 + 200 = 315200. الكتب المتبقّية: 433400."
          }
        ],
        "hint_en": "Break 315200 into four chunks and hop backward on the number line from 748600.",
        "hint_ar": "قسّم 315200 إلى أربعة أجزاء وتخطَّ إلى الخلف على خط الأعداد من 748600.",
        "result_en": "748600 − 315200 = 433400",
        "result_ar": "748600 − 315200 = 433400"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-sub-medium-001",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "623400 − 358700 = ?",
    "question_ar": "623400 − 358700 = ؟",
    "answer": 264700,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Working left-to-right: hundreds column gives 4 − 7 = −3, which is negative, so we will need to adjust the thousands result.",
            "explanation_ar": "نعمل من اليسار إلى اليمين: خانة المئات تعطي 4 − 7 = −3، وهو سالب، لذا سنحتاج لتعديل نتيجة الآلاف."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Left-to-right raw digits: 6−3=3, 2−5=−3, 3−8=−5, 4−7=−3, 0−0=0, 0−0=0.",
            "explanation_ar": "الأرقام الخام من اليسار إلى اليمين: 6−3=3، 2−5=−3، 3−8=−5، 4−7=−3، 0−0=0، 0−0=0."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Adjust right-to-left for negatives. Hundreds: −3 + 10 = 7, borrow 1 from thousands. Thousands: −5 − 1 + 10 = 4, borrow 1 from ten-thousands. Ten-thousands: −3 − 1 + 10 = 6, borrow 1 from hundred-thousands. Hundred-thousands: 3 − 1 = 2.",
            "explanation_ar": "عدّل من اليمين إلى اليسار للأرقام السالبة. المئات: −3 + 10 = 7، استلف 1 من الآلاف. الآلاف: −5 − 1 + 10 = 4، استلف 1 من عشرات الآلاف. عشرات الآلاف: −3 − 1 + 10 = 6، استلف 1 من مئات الآلاف. مئات الآلاف: 3 − 1 = 2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Adjusted digits: 2, 6, 4, 7, 0, 0 → 264700.",
            "explanation_ar": "الأرقام بعد التعديل: 2، 6، 4، 7، 0، 0 ← 264700."
          }
        ],
        "hint_en": "When a column is negative, add 10 to that digit and reduce the digit to its left by 1.",
        "hint_ar": "حين تكون الخانة سالبة، أضف 10 إليها وانقص الرقم الذي على يسارها بمقدار 1.",
        "result_en": "623400 − 358700 = 264700",
        "result_ar": "623400 − 358700 = 264700"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "623400 = 600000 + 20000 + 3000 + 400; 358700 = 300000 + 50000 + 8000 + 700.",
            "explanation_ar": "623400 = 600000 + 20000 + 3000 + 400؛ 358700 = 300000 + 50000 + 8000 + 700."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Hundreds: 400 − 700 = −300 → borrow 1000 from thousands: (400+1000) − 700 = 700; Thousands now: 3000 − 1000 − 8000 = −6000 → borrow 10000: (3000−1000+10000) − 8000 = 4000; Ten-thousands: 20000 − 10000 − 50000 = −40000 → borrow 100000: (20000−10000+100000) − 50000 = 60000; Hundred-thousands: 600000 − 100000 − 300000 = 200000.",
            "explanation_ar": "المئات: 400 − 700 = −300 ← استلف 1000 من الآلاف: (400+1000) − 700 = 700. الآلاف الآن: 3000 − 1000 − 8000 = −6000 ← استلف 10000: (3000−1000+10000) − 8000 = 4000. عشرات الآلاف: 20000 − 10000 − 50000 = −40000 ← استلف 100000: (20000−10000+100000) − 50000 = 60000. مئات الآلاف: 600000 − 100000 − 300000 = 200000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "200000 + 60000 + 4000 + 700 = 264700.",
            "explanation_ar": "200000 + 60000 + 4000 + 700 = 264700."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 264700 + 358700 = 623400 ✓. The answer is 264700.",
            "explanation_ar": "تحقق: 264700 + 358700 = 623400 ✓. الجواب هو 264700."
          }
        ],
        "hint_en": "Borrow from the next higher column whenever a subtraction would go negative.",
        "hint_ar": "استلف من الخانة الأعلى مرتبةً في كل مرة تصبح فيها عملية الطرح سالبة.",
        "result_en": "623400 − 358700 = 264700",
        "result_ar": "623400 − 358700 = 264700"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A factory produced 623400 units. 358700 were sold. How many units are in stock?",
            "explanation_ar": "أنتج مصنع 623400 وحدة. بِيعَ 358700 منها. كم وحدة لا تزال في المخزون؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, round subtrahend up to 360000 for an easy jump: 623400 − 360000 = 263400, then add back the 1300 overshoot: 263400 + 1300 = 264700.",
            "explanation_ar": "على خط الأعداد، قرّب المطروح إلى 360000 لقفزة سهلة: 623400 − 360000 = 263400، ثم أضف 1300 التي زدتها: 263400 + 1300 = 264700."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The compensated landing point is 264700.",
            "explanation_ar": "نقطة الهبوط بعد التعويض هي 264700."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "We subtracted 360000 but needed only 358700, so we over-subtracted by 1300. Adding 1300 back gives 264700 units in stock.",
            "explanation_ar": "طرحنا 360000 لكنّنا كنّا بحاجة إلى طرح 358700 فقط، لذا زدنا في الطرح بمقدار 1300. بإضافة 1300 نحصل على 264700 وحدة في المخزون."
          }
        ],
        "hint_en": "Round 358700 up to 360000, subtract, then add back the 1300 difference.",
        "hint_ar": "قرّب 358700 إلى 360000، اطرح، ثم أعد إضافة الفرق 1300.",
        "result_en": "623400 − 358700 = 264700",
        "result_ar": "623400 − 358700 = 264700"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-sub-medium-002",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "741250 − 486530 = ?",
    "question_ar": "741250 − 486530 = ؟",
    "answer": 254720,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Left-to-right: the ten-thousands and thousands columns will produce negative raw values since 4 < 8 and 1 < 6.",
            "explanation_ar": "من اليسار إلى اليمين: ستعطي خانتا عشرات الآلاف والآلاف قيماً خاماً سالبة لأن 4 < 8 و1 < 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Raw left-to-right: 7−4=3, 4−8=−4, 1−6=−5, 2−5=−3, 5−3=2, 0−0=0.",
            "explanation_ar": "القيم الخام من اليسار إلى اليمين: 7−4=3، 4−8=−4، 1−6=−5، 2−5=−3، 5−3=2، 0−0=0."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Adjust right-to-left: hundreds −3+10=7, borrow 1 from thousands; thousands −5−1+10=4, borrow 1 from ten-thousands; ten-thousands −4−1+10=5, borrow 1 from hundred-thousands; hundred-thousands 3−1=2.",
            "explanation_ar": "عدّل من اليمين إلى اليسار: المئات −3+10=7، استلف 1 من الآلاف؛ الآلاف −5−1+10=4، استلف 1 من عشرات الآلاف؛ عشرات الآلاف −4−1+10=5، استلف 1 من مئات الآلاف؛ مئات الآلاف 3−1=2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Adjusted digits: 2, 5, 4, 7, 2, 0 → 254720.",
            "explanation_ar": "الأرقام بعد التعديل: 2، 5، 4، 7، 2، 0 ← 254720."
          }
        ],
        "hint_en": "Identify negative columns first, then adjust each by adding 10 and carrying −1 leftward.",
        "hint_ar": "حدّد الخانات السالبة أولاً، ثم عدّل كلاً منها بإضافة 10 ونقل −1 إلى اليسار.",
        "result_en": "741250 − 486530 = 254720",
        "result_ar": "741250 − 486530 = 254720"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "741250 = 700000 + 40000 + 1000 + 200 + 50; 486530 = 400000 + 80000 + 6000 + 500 + 30.",
            "explanation_ar": "741250 = 700000 + 40000 + 1000 + 200 + 50؛ 486530 = 400000 + 80000 + 6000 + 500 + 30."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Tens: 50−30=20. Hundreds: 200−500=−300, borrow 1000: 1200−500=700. Thousands: 1000−1000−6000=−6000, borrow 10000: 11000−1000−6000=4000. Ten-thousands: 40000−10000−80000=−50000, borrow 100000: 140000−10000−80000=50000. Hundred-thousands: 700000−100000−400000=200000.",
            "explanation_ar": "العشرات: 50−30=20. المئات: 200−500=−300، استلف 1000: 1200−500=700. الآلاف: 1000−1000−6000=−6000، استلف 10000: 11000−1000−6000=4000. عشرات الآلاف: 40000−10000−80000=−50000، استلف 100000: 140000−10000−80000=50000. مئات الآلاف: 700000−100000−400000=200000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "200000 + 50000 + 4000 + 700 + 20 = 254720.",
            "explanation_ar": "200000 + 50000 + 4000 + 700 + 20 = 254720."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 254720 + 486530 = 741250 ✓. The answer is 254720.",
            "explanation_ar": "تحقق: 254720 + 486530 = 741250 ✓. الجواب هو 254720."
          }
        ],
        "hint_en": "Start from the tens place, handle borrowing column by column moving left.",
        "hint_ar": "ابدأ من خانة العشرات وتعامل مع الاستلاف خانةً خانةً نحو اليسار.",
        "result_en": "741250 − 486530 = 254720",
        "result_ar": "741250 − 486530 = 254720"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A stadium sold 741250 tickets across a season. 486530 tickets were for away fans. How many were for home fans?",
            "explanation_ar": "باع ملعب 741250 تذكرة خلال الموسم. كانت 486530 تذكرة للمشجعين الزوار. كم تذكرة كانت للمشجعين المحليين؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Round 486530 to 490000. 741250 − 490000 = 251250, then add back the 3470 overshoot: 251250 + 3470 = 254720.",
            "explanation_ar": "قرّب 486530 إلى 490000. 741250 − 490000 = 251250، ثم أضف الزيادة 3470: 251250 + 3470 = 254720."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After compensating for the rounding, the result is 254720.",
            "explanation_ar": "بعد التعويض عن التقريب، تكون النتيجة 254720."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "490000 − 486530 = 3470 was over-subtracted; adding it back: 251250 + 3470 = 254720 home-fan tickets.",
            "explanation_ar": "3470 = 490000 − 486530 كانت زيادةً في الطرح؛ بإضافتها: 251250 + 3470 = 254720 تذكرة للمشجعين المحليين."
          }
        ],
        "hint_en": "Round 486530 up to 490000, subtract from 741250, then add back the 3470 difference.",
        "hint_ar": "قرّب 486530 إلى 490000، اطرحها من 741250، ثم أعد إضافة الفرق 3470.",
        "result_en": "741250 − 486530 = 254720",
        "result_ar": "741250 − 486530 = 254720"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-sub-medium-003",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Medium",
    "question_en": "534820 − 278650 = ?",
    "question_ar": "534820 − 278650 = ؟",
    "answer": 256170,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Scanning left-to-right: 5−2, 3−7, 4−8, 8−6, 2−5, 0−0. Three columns (ten-thousands, thousands, tens) go negative.",
            "explanation_ar": "بالمسح من اليسار إلى اليمين: 5−2، 3−7، 4−8، 8−6، 2−5، 0−0. ثلاث خانات (عشرات الآلاف، الآلاف، العشرات) تعطي نتائج سالبة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Raw: 5−2=3, 3−7=−4, 4−8=−4, 8−6=2, 2−5=−3, 0−0=0.",
            "explanation_ar": "القيم الخام: 5−2=3، 3−7=−4، 4−8=−4، 8−6=2، 2−5=−3، 0−0=0."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Adjust right-to-left: tens −3+10=7, borrow 1 from hundreds; hundreds 2−1=1 (no adjustment needed); thousands −4+10=6, borrow 1 from ten-thousands; ten-thousands −4−1+10=5, borrow 1 from hundred-thousands; hundred-thousands 3−1=2.",
            "explanation_ar": "عدّل من اليمين إلى اليسار: العشرات −3+10=7، استلف 1 من المئات؛ المئات 2−1=1 (لا تعديل)؛ الآلاف −4+10=6، استلف 1 من عشرات الآلاف؛ عشرات الآلاف −4−1+10=5، استلف 1 من مئات الآلاف؛ مئات الآلاف 3−1=2."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Adjusted digits: 2, 5, 6, 1, 7, 0 → 256170.",
            "explanation_ar": "الأرقام بعد التعديل: 2، 5، 6، 1، 7، 0 ← 256170."
          }
        ],
        "hint_en": "Work left-to-right, note every negative column, then sweep back rightward correcting each one.",
        "hint_ar": "اعمل من اليسار إلى اليمين، سجّل كل خانة سالبة، ثم عُد من اليمين وصحّح كل واحدة.",
        "result_en": "534820 − 278650 = 256170",
        "result_ar": "534820 − 278650 = 256170"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "534820 = 500000 + 30000 + 4000 + 800 + 20; 278650 = 200000 + 70000 + 8000 + 600 + 50.",
            "explanation_ar": "534820 = 500000 + 30000 + 4000 + 800 + 20؛ 278650 = 200000 + 70000 + 8000 + 600 + 50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Tens: 20−50=−30, borrow 100: 120−50=70. Hundreds: 800−100−600=100. Thousands: 4000−8000=−4000, borrow 10000: 14000−8000=6000. Ten-thousands: 30000−10000−70000=−50000, borrow 100000: 130000−10000−70000=50000. Hundred-thousands: 500000−100000−200000=200000.",
            "explanation_ar": "العشرات: 20−50=−30، استلف 100: 120−50=70. المئات: 800−100−600=100. الآلاف: 4000−8000=−4000، استلف 10000: 14000−8000=6000. عشرات الآلاف: 30000−10000−70000=−50000، استلف 100000: 130000−10000−70000=50000. مئات الآلاف: 500000−100000−200000=200000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "200000 + 50000 + 6000 + 100 + 70 = 256170.",
            "explanation_ar": "200000 + 50000 + 6000 + 100 + 70 = 256170."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 256170 + 278650 = 534820 ✓. The answer is 256170.",
            "explanation_ar": "تحقق: 256170 + 278650 = 534820 ✓. الجواب هو 256170."
          }
        ],
        "hint_en": "Handle borrowing one column at a time, starting from the tens place.",
        "hint_ar": "تعامل مع الاستلاف خانةً واحدةً في كل مرة، بدءاً من خانة العشرات.",
        "result_en": "534820 − 278650 = 256170",
        "result_ar": "534820 − 278650 = 256170"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A fundraiser collected 534820 coins. 278650 coins were donated to a charity. How many coins remain?",
            "explanation_ar": "جمع حدثٌ خيريٌّ 534820 قطعة نقدية. تبرَّع بـ 278650 منها لمنظمة خيرية. كم تبقّى؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Round 278650 to 280000. 534820 − 280000 = 254820, then add back the overshoot of 1350: 254820 + 1350 = 256170.",
            "explanation_ar": "قرّب 278650 إلى 280000. 534820 − 280000 = 254820، ثم أضف الزيادة 1350: 254820 + 1350 = 256170."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The compensated value is 256170.",
            "explanation_ar": "القيمة بعد التعويض هي 256170."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "We over-subtracted by 280000 − 278650 = 1350. Restoring that: 254820 + 1350 = 256170 coins remain.",
            "explanation_ar": "زدنا في الطرح بمقدار 280000 − 278650 = 1350. بإعادتها: 254820 + 1350 = 256170 قطعة نقدية متبقّية."
          }
        ],
        "hint_en": "Round 278650 up to 280000, subtract, then add the 1350 overshoot back.",
        "hint_ar": "قرّب 278650 إلى 280000، اطرح، ثم أعد إضافة الزيادة 1350.",
        "result_en": "534820 − 278650 = 256170",
        "result_ar": "534820 − 278650 = 256170"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-sub-hard-001",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "800300 − 456700 = ?",
    "question_ar": "800300 − 456700 = ؟",
    "answer": 343600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The minuend 800300 has zeros in the ten-thousands, thousands, and tens places — any borrow will cascade through these zeros.",
            "explanation_ar": "المنقوص منه 800300 يحتوي على أصفار في خانات عشرات الآلاف والآلاف والعشرات — أي استلاف سيتسلسل عبر هذه الأصفار."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Raw left-to-right: 8−4=4, 0−5=−5, 0−6=−6, 3−7=−4, 0−0=0, 0−0=0.",
            "explanation_ar": "القيم الخام من اليسار إلى اليمين: 8−4=4، 0−5=−5، 0−6=−6، 3−7=−4، 0−0=0، 0−0=0."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Adjust right-to-left: hundreds −4+10=6, borrow 1 from thousands; thousands −6−1+10=3, borrow 1 from ten-thousands; ten-thousands −5−1+10=4, borrow 1 from hundred-thousands; hundred-thousands 4−1=3.",
            "explanation_ar": "عدّل من اليمين إلى اليسار: المئات −4+10=6، استلف 1 من الآلاف؛ الآلاف −6−1+10=3، استلف 1 من عشرات الآلاف؛ عشرات الآلاف −5−1+10=4، استلف 1 من مئات الآلاف؛ مئات الآلاف 4−1=3."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Adjusted digits: 3, 4, 3, 6, 0, 0 → 343600.",
            "explanation_ar": "الأرقام بعد التعديل: 3، 4، 3، 6، 0، 0 ← 343600."
          }
        ],
        "hint_en": "The zeros in 800300 cause a chain borrow — each zero becomes 9 after lending 1 onward, except the last zero that becomes 10.",
        "hint_ar": "أصفار 800300 تسبّب استلافاً متسلسلاً — كل صفر يصبح 9 بعد أن يُقرض 1 للخانة التالية، ما عدا الصفر الأخير الذي يصبح 10.",
        "result_en": "800300 − 456700 = 343600",
        "result_ar": "800300 − 456700 = 343600"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite 800300 as 799300 + 1000 to avoid cascading zeros: 799300 − 456700 = 342600, then add back 1000 = 343600.",
            "explanation_ar": "أعد كتابة 800300 كـ 799300 + 1000 لتجنّب الأصفار المتسلسلة: 799300 − 456700 = 342600، ثم أضف 1000 = 343600."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "799300 − 456700: hundreds 3−7=−4, borrow: 13−7=6; thousands 9−1−6=2... wait, use direct column method: 700000+90000+9000+300 minus 400000+50000+6000+700: 300000+40000+3000−400 = 342600. Then 342600 + 1000 = 343600.",
            "explanation_ar": "799300 − 456700 = 342600 ثم 342600 + 1000 = 343600. بالتفصيل: 700000−400000=300000؛ 90000−50000=40000؛ 9000−6000=3000؛ 300−700=−400 ← استلف: 1300−700=600، وانقص الآلاف: 3000−1000=2000. المجموع: 300000+40000+2000+600=342600، ثم أضف 1000: 343600."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "342600 + 1000 = 343600.",
            "explanation_ar": "342600 + 1000 = 343600."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 343600 + 456700 = 800300 ✓. The answer is 343600.",
            "explanation_ar": "تحقق: 343600 + 456700 = 800300 ✓. الجواب هو 343600."
          }
        ],
        "hint_en": "Transform 800300 into 799300 + 1000 to sidestep the zero chain, then restore the 1000 at the end.",
        "hint_ar": "حوّل 800300 إلى 799300 + 1000 لتجنّب سلسلة الأصفار، ثم أعد إضافة 1000 في النهاية.",
        "result_en": "800300 − 456700 = 343600",
        "result_ar": "800300 − 456700 = 343600"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A national park covers 800300 hectares. 456700 hectares are designated wilderness zones. How many hectares are open to visitors?",
            "explanation_ar": "تمتدّ محميّة طبيعية على 800300 هكتار. خُصِّص 456700 هكتار كمناطق برية محمية. كم هكتاراً مفتوح للزوار؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, use the complement: 456700 needs 43300 to reach 500000, then 300300 more to reach 800300. Total: 43300 + 300300 = 343600.",
            "explanation_ar": "على خط الأعداد، استخدم المتمّم: يحتاج 456700 إلى 43300 ليصل إلى 500000، ثم 300300 إضافية ليصل إلى 800300. الإجمالي: 43300 + 300300 = 343600."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The gap between 456700 and 800300, measured in two hops via benchmark 500000, is 343600.",
            "explanation_ar": "المسافة بين 456700 و800300، تُقاس في قفزتين عبر نقطة الإرساء 500000، هي 343600."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "43300 + 300300 = 343600 hectares are open to visitors.",
            "explanation_ar": "43300 + 300300 = 343600 هكتار مفتوح للزوار."
          }
        ],
        "hint_en": "Count up from 456700 to the benchmark 500000 (= 43300), then from 500000 to 800300 (= 300300). Add the two hops.",
        "hint_ar": "اعدّ من 456700 إلى نقطة الإرساء 500000 (= 43300)، ثم من 500000 إلى 800300 (= 300300). اجمع القفزتين.",
        "result_en": "800300 − 456700 = 343600",
        "result_ar": "800300 − 456700 = 343600"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-sub-hard-002",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "700050 − 284360 = ?",
    "question_ar": "700050 − 284360 = ؟",
    "answer": 415690,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The minuend 700050 has zeros in the hundred-thousands companion digits — specifically 0 in ten-thousands, 0 in thousands, and 0 in hundreds — making any borrow cascade through three zeros.",
            "explanation_ar": "المنقوص منه 700050 يحتوي على أصفار في عشرات الآلاف والآلاف والمئات، مما يجعل أي استلاف يتسلسل عبر ثلاثة أصفار."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Raw left-to-right: 7−2=5, 0−8=−8, 0−4=−4, 0−3=−3, 5−6=−1, 0−0=0.",
            "explanation_ar": "القيم الخام من اليسار إلى اليمين: 7−2=5، 0−8=−8، 0−4=−4، 0−3=−3، 5−6=−1، 0−0=0."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Adjust right-to-left: tens −1+10=9, borrow 1 from hundreds; hundreds −3−1+10=6, borrow 1 from thousands; thousands −4−1+10=5, borrow 1 from ten-thousands; ten-thousands −8−1+10=1, borrow 1 from hundred-thousands; hundred-thousands 5−1=4.",
            "explanation_ar": "عدّل من اليمين إلى اليسار: العشرات −1+10=9، استلف 1 من المئات؛ المئات −3−1+10=6، استلف 1 من الآلاف؛ الآلاف −4−1+10=5، استلف 1 من عشرات الآلاف؛ عشرات الآلاف −8−1+10=1، استلف 1 من مئات الآلاف؛ مئات الآلاف 5−1=4."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Adjusted digits: 4, 1, 5, 6, 9, 0 → 415690.",
            "explanation_ar": "الأرقام بعد التعديل: 4، 1، 5، 6، 9، 0 ← 415690."
          }
        ],
        "hint_en": "In 700050, borrowing from the hundreds cascades all the way to the hundred-thousands through three consecutive zeros.",
        "hint_ar": "في 700050، الاستلاف من المئات يتسلسل كلّه حتى مئات الآلاف عبر ثلاثة أصفار متتالية.",
        "result_en": "700050 − 284360 = 415690",
        "result_ar": "700050 − 284360 = 415690"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite 700050 as 699050 + 1000. Then 699050 − 284360 is easier, and we add 1000 back.",
            "explanation_ar": "أعد كتابة 700050 كـ 699050 + 1000. بعدها 699050 − 284360 أسهل، ثم نُضيف 1000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "699050 − 284360: tens 5−6=−1, borrow: 15−6=9; hundreds 0−1−3=−4, borrow: 10−1−3=6; thousands 9−1−4=4; ten-thousands 9−8=1; hundred-thousands 6−2=4. Result: 414690. Add 1000: 414690 + 1000 = 415690.",
            "explanation_ar": "699050 − 284360: العشرات 5−6=−1، استلف: 15−6=9؛ المئات 0−1−3=−4، استلف: 10−1−3=6؛ الآلاف 9−1−4=4؛ عشرات الآلاف 9−8=1؛ مئات الآلاف 6−2=4. النتيجة: 414690. أضف 1000: 414690 + 1000 = 415690."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "414690 + 1000 = 415690.",
            "explanation_ar": "414690 + 1000 = 415690."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 415690 + 284360 = 700050 ✓. The answer is 415690.",
            "explanation_ar": "تحقق: 415690 + 284360 = 700050 ✓. الجواب هو 415690."
          }
        ],
        "hint_en": "Substitute 700050 with 699050 + 1000 to eliminate the zero cascade, solve, then restore the 1000.",
        "hint_ar": "استبدل 700050 بـ 699050 + 1000 للتخلص من تسلسل الأصفار، احسب، ثم أعد 1000.",
        "result_en": "700050 − 284360 = 415690",
        "result_ar": "700050 − 284360 = 415690"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A satellite orbits at 700050 km from Earth's surface. A space station is 284360 km closer to Earth. What is the station's altitude?",
            "explanation_ar": "تدور مركبة فضائية على ارتفاع 700050 كيلومتر عن سطح الأرض. محطة فضائية أقرب بـ 284360 كيلومتر. ما ارتفاع المحطة؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Count up from 284360 to 700050. Step 1: 284360 → 300000 (add 15640). Step 2: 300000 → 700000 (add 400000). Step 3: 700000 → 700050 (add 50). Total: 15640 + 400000 + 50 = 415690.",
            "explanation_ar": "اعدّ من 284360 إلى 700050. الخطوة 1: 284360 ← 300000 (أضف 15640). الخطوة 2: 300000 ← 700000 (أضف 400000). الخطوة 3: 700000 ← 700050 (أضف 50). الإجمالي: 15640 + 400000 + 50 = 415690."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The three forward hops total 415690.",
            "explanation_ar": "القفزات الثلاث إلى الأمام تبلغ 415690."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "15640 + 400000 + 50 = 415690 km is the station's altitude.",
            "explanation_ar": "15640 + 400000 + 50 = 415690 كيلومتر هو ارتفاع المحطة."
          }
        ],
        "hint_en": "Count up from 284360 through the benchmarks 300000 and 700000, then the final 50 to land on 700050.",
        "hint_ar": "اعدّ من 284360 عبر نقاط الإرساء 300000 و700000 ثم 50 إضافية للوصول إلى 700050.",
        "result_en": "700050 − 284360 = 415690",
        "result_ar": "700050 − 284360 = 415690"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-sub-hard-003",
    "grade": 6,
    "bank": "common",
    "category": "Subtraction",
    "level": "Hard",
    "question_en": "18.5 − 8.5 = ?",
    "question_ar": "18.5 − 8.5 = ؟",
    "answer": 10,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both numbers share the same decimal part (.5), which means the tenths will cancel perfectly and the result will be a whole number.",
            "explanation_ar": "يشترك الرقمان في نفس الجزء العشري (.5)، مما يعني أن أجزاء العشرات ستلغي بعضها تماماً وستكون النتيجة عدداً صحيحاً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Tenths: 5 − 5 = 0 (no decimal remainder). Units: 8 − 8 = 0. Tens: 1 − 0 = 1.",
            "explanation_ar": "أجزاء العشرات: 5 − 5 = 0 (لا باقٍ عشري). الآحاد: 8 − 8 = 0. العشرات: 1 − 0 = 1."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Since the tenths digit cancels, subtract the integer parts directly: 18 − 8 = 10.",
            "explanation_ar": "بما أن جزء العشرات يلغي نفسه، اطرح الأجزاء الصحيحة مباشرةً: 18 − 8 = 10."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Result is the whole number 10 — no decimal component at all.",
            "explanation_ar": "النتيجة هي العدد الصحيح 10 — بلا أي جزء عشري."
          }
        ],
        "hint_en": "Identical decimal parts cancel; just subtract the whole-number parts: 18 − 8 = 10.",
        "hint_ar": "الأجزاء العشرية المتماثلة تلغي بعضها؛ اطرح فقط الأجزاء الصحيحة: 18 − 8 = 10.",
        "result_en": "18.5 − 8.5 = 10",
        "result_ar": "18.5 − 8.5 = 10"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split each number into integer and decimal parts: 18.5 = 18 + 0.5 and 8.5 = 8 + 0.5.",
            "explanation_ar": "قسّم كل رقم إلى جزء صحيح وجزء عشري: 18.5 = 18 + 0.5 و8.5 = 8 + 0.5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Decimal parts: 0.5 − 0.5 = 0. Integer parts: 18 − 8 = 10.",
            "explanation_ar": "الأجزاء العشرية: 0.5 − 0.5 = 0. الأجزاء الصحيحة: 18 − 8 = 10."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "10 + 0 = 10.",
            "explanation_ar": "10 + 0 = 10."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 10 + 8.5 = 18.5 ✓. The answer is the whole number 10.",
            "explanation_ar": "تحقق: 10 + 8.5 = 18.5 ✓. الجواب هو العدد الصحيح 10."
          }
        ],
        "hint_en": "Subtract the decimal halves separately (they vanish), then subtract the whole-number parts.",
        "hint_ar": "اطرح النصفين العشريين بشكل منفصل (يختفيان)، ثم اطرح الأجزاء الصحيحة.",
        "result_en": "18.5 − 8.5 = 10",
        "result_ar": "18.5 − 8.5 = 10"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A recipe uses 18.5 cups of flour in total; 8.5 cups are already measured. How many cups are still needed?",
            "explanation_ar": "تستخدم وصفة 18.5 كوباً من الدقيق إجمالاً؛ قُيِس 8.5 كوب بالفعل. كم كوباً لا يزال مطلوباً؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, mark 8.5 and 18.5. Jump from 8.5 to 9 (= 0.5), then from 9 to 18.5 (= 9.5). Total gap = 0.5 + 9.5 = 10.",
            "explanation_ar": "على خط الأعداد، ضع علامتَي 8.5 و18.5. اقفز من 8.5 إلى 9 (= 0.5)، ثم من 9 إلى 18.5 (= 9.5). إجمالي الفجوة = 0.5 + 9.5 = 10."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The distance between 8.5 and 18.5 on the number line is exactly 10 units.",
            "explanation_ar": "المسافة بين 8.5 و18.5 على خط الأعداد هي 10 وحدات تماماً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "0.5 + 9.5 = 10 cups are still needed. The answer is the whole number 10.",
            "explanation_ar": "0.5 + 9.5 = 10 أكواب لا تزال مطلوبة. الجواب هو العدد الصحيح 10."
          }
        ],
        "hint_en": "Hop from 8.5 to the nearest whole number 9 (half a unit), then count the remaining whole units to 18.5.",
        "hint_ar": "اقفز من 8.5 إلى العدد الصحيح الأقرب 9 (نصف وحدة)، ثم عُدَّ الوحدات الصحيحة المتبقية حتى 18.5.",
        "result_en": "18.5 − 8.5 = 10",
        "result_ar": "18.5 − 8.5 = 10"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-sub-hard-003",
      "upper_grade_equivalent": "g7-common-sub-easy-001",
      "fun_fact_tag": "subtraction"
    }
  },
  {
    "id": "g6-common-mul-easy-001",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "200 × 300 = ?",
    "question_ar": "200 × 300 = ؟",
    "answer": 60000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both 200 and 300 are multiples of 100. Write them as 2 × 100 and 3 × 100.",
            "explanation_ar": "كلٌّ من 200 و300 من مضاعفات 100. اكتبهما كـ 2 × 100 و3 × 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the non-zero digits: 2 × 3 = 6.",
            "explanation_ar": "اضرب الأرقام غير الصفرية: 2 × 3 = 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Count the total zeros: 200 has 2 zeros, 300 has 2 zeros — that is 4 zeros in total. Attach them to 6.",
            "explanation_ar": "عدّ الأصفار الكلية: في 200 صفران وفي 300 صفران — المجموع 4 أصفار. أضفها إلى 6."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "6 followed by 4 zeros = 60000. So 200 × 300 = 60000.",
            "explanation_ar": "6 يليه 4 أصفار = 60000. إذن 200 × 300 = 60000."
          }
        ],
        "hint_en": "Multiply the leading digits, then count all the zeros.",
        "hint_ar": "اضرب الأرقام الأمامية، ثم عدّ جميع الأصفار.",
        "result_en": "200 × 300 = 60000",
        "result_ar": "200 × 300 = 60000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write 200 = 2 × 100 and 300 = 3 × 100.",
            "explanation_ar": "اكتب 200 = 2 × 100 و300 = 3 × 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Regroup: (2 × 3) × (100 × 100) = 6 × 10000.",
            "explanation_ar": "أعد التجميع: (2 × 3) × (100 × 100) = 6 × 10000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "6 × 10000 = 60000.",
            "explanation_ar": "6 × 10000 = 60000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 200 × 300 = 200 × 3 × 100 = 600 × 100 = 60000. ✓",
            "explanation_ar": "تحقق: 200 × 300 = 200 × 3 × 100 = 600 × 100 = 60000. ✓"
          }
        ],
        "hint_en": "Break each number into its leading digit times a power of 10.",
        "hint_ar": "قسّم كل عدد إلى رقمه الأمامي مضروبًا في قوة من 10.",
        "result_en": "200 × 300 = 60000",
        "result_ar": "200 × 300 = 60000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a parking lot that is 200 metres long and 300 metres wide.",
            "explanation_ar": "تخيّل موقفًا للسيارات طوله 200 متر وعرضه 300 متر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw one large rectangle labelled 200 on the horizontal side and 300 on the vertical side. Since both numbers are round, there is only one region.",
            "explanation_ar": "ارسم مستطيلًا كبيرًا واكتب 200 على الجانب الأفقي و300 على الجانب الرأسي. بما أن العددين كاملان، المنطقة واحدة فقط."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Area of the rectangle = 200 × 300.",
            "explanation_ar": "مساحة المستطيل = 200 × 300."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The area is 60000 square metres. So 200 × 300 = 60000.",
            "explanation_ar": "المساحة 60000 متر مربع. إذن 200 × 300 = 60000."
          }
        ],
        "hint_en": "Picture a rectangle and calculate its area.",
        "hint_ar": "تخيّل مستطيلًا واحسب مساحته.",
        "result_en": "200 × 300 = 60000",
        "result_ar": "200 × 300 = 60000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-mul-easy-002",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "400 × 200 = ?",
    "question_ar": "400 × 200 = ؟",
    "answer": 80000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both 400 and 200 are multiples of 100. Write them as 4 × 100 and 2 × 100.",
            "explanation_ar": "كلٌّ من 400 و200 من مضاعفات 100. اكتبهما كـ 4 × 100 و2 × 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the non-zero digits: 4 × 2 = 8.",
            "explanation_ar": "اضرب الأرقام غير الصفرية: 4 × 2 = 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Count total zeros: 400 has 2 zeros, 200 has 2 zeros — 4 zeros in all. Attach them to 8.",
            "explanation_ar": "عدّ الأصفار الكلية: في 400 صفران وفي 200 صفران — المجموع 4 أصفار. أضفها إلى 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "8 followed by 4 zeros = 80000. So 400 × 200 = 80000.",
            "explanation_ar": "8 يليه 4 أصفار = 80000. إذن 400 × 200 = 80000."
          }
        ],
        "hint_en": "Multiply the leading digits, then count all the zeros.",
        "hint_ar": "اضرب الأرقام الأمامية، ثم عدّ جميع الأصفار.",
        "result_en": "400 × 200 = 80000",
        "result_ar": "400 × 200 = 80000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write 400 = 4 × 100 and 200 = 2 × 100.",
            "explanation_ar": "اكتب 400 = 4 × 100 و200 = 2 × 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Regroup: (4 × 2) × (100 × 100) = 8 × 10000.",
            "explanation_ar": "أعد التجميع: (4 × 2) × (100 × 100) = 8 × 10000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "8 × 10000 = 80000.",
            "explanation_ar": "8 × 10000 = 80000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 400 × 200 = 400 × 2 × 100 = 800 × 100 = 80000. ✓",
            "explanation_ar": "تحقق: 400 × 200 = 400 × 2 × 100 = 800 × 100 = 80000. ✓"
          }
        ],
        "hint_en": "Break each number into its leading digit times a power of 10.",
        "hint_ar": "قسّم كل عدد إلى رقمه الأمامي مضروبًا في قوة من 10.",
        "result_en": "400 × 200 = 80000",
        "result_ar": "400 × 200 = 80000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a football field that is 400 metres long and 200 metres wide.",
            "explanation_ar": "تخيّل ملعبًا طوله 400 متر وعرضه 200 متر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw one large rectangle: 400 on the horizontal side and 200 on the vertical side.",
            "explanation_ar": "ارسم مستطيلًا كبيرًا: 400 على الجانب الأفقي و200 على الجانب الرأسي."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Area = 400 × 200.",
            "explanation_ar": "المساحة = 400 × 200."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The area is 80000 square metres. So 400 × 200 = 80000.",
            "explanation_ar": "المساحة 80000 متر مربع. إذن 400 × 200 = 80000."
          }
        ],
        "hint_en": "Picture a rectangle and calculate its area.",
        "hint_ar": "تخيّل مستطيلًا واحسب مساحته.",
        "result_en": "400 × 200 = 80000",
        "result_ar": "400 × 200 = 80000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-mul-easy-003",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Easy",
    "question_en": "300 × 300 = ?",
    "question_ar": "300 × 300 = ؟",
    "answer": 90000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Both factors are 300. Write each as 3 × 100.",
            "explanation_ar": "كلا العاملين هو 300. اكتب كلًّا منهما كـ 3 × 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply the non-zero digits: 3 × 3 = 9.",
            "explanation_ar": "اضرب الأرقام غير الصفرية: 3 × 3 = 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Count total zeros: 300 has 2 zeros, 300 has 2 zeros — 4 zeros in all. Attach them to 9.",
            "explanation_ar": "عدّ الأصفار الكلية: في 300 صفران وفي 300 صفران — المجموع 4 أصفار. أضفها إلى 9."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "9 followed by 4 zeros = 90000. So 300 × 300 = 90000.",
            "explanation_ar": "9 يليه 4 أصفار = 90000. إذن 300 × 300 = 90000."
          }
        ],
        "hint_en": "Multiply the leading digits, then count all the zeros.",
        "hint_ar": "اضرب الأرقام الأمامية، ثم عدّ جميع الأصفار.",
        "result_en": "300 × 300 = 90000",
        "result_ar": "300 × 300 = 90000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write both 300 as 3 × 100.",
            "explanation_ar": "اكتب كلا الـ 300 كـ 3 × 100."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Regroup: (3 × 3) × (100 × 100) = 9 × 10000.",
            "explanation_ar": "أعد التجميع: (3 × 3) × (100 × 100) = 9 × 10000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "9 × 10000 = 90000.",
            "explanation_ar": "9 × 10000 = 90000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 300 × 300 = 300 × 3 × 100 = 900 × 100 = 90000. ✓",
            "explanation_ar": "تحقق: 300 × 300 = 300 × 3 × 100 = 900 × 100 = 90000. ✓"
          }
        ],
        "hint_en": "Both numbers split the same way: 3 × 100.",
        "hint_ar": "كلا العددين يُقسَّمان بنفس الطريقة: 3 × 100.",
        "result_en": "300 × 300 = 90000",
        "result_ar": "300 × 300 = 90000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a square garden where each side is 300 metres.",
            "explanation_ar": "تخيّل حديقة مربعة كل ضلع منها 300 متر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a square with side 300. Both horizontal and vertical sides are equal.",
            "explanation_ar": "ارسم مربعًا ضلعه 300. الجانبان الأفقي والرأسي متساويان."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Area of square = side × side = 300 × 300.",
            "explanation_ar": "مساحة المربع = الضلع × الضلع = 300 × 300."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The area is 90000 square metres. So 300 × 300 = 90000.",
            "explanation_ar": "المساحة 90000 متر مربع. إذن 300 × 300 = 90000."
          }
        ],
        "hint_en": "A square with side 300 — calculate its area.",
        "hint_ar": "مربع ضلعه 300 — احسب مساحته.",
        "result_en": "300 × 300 = 90000",
        "result_ar": "300 × 300 = 90000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-mul-medium-001",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "125 × 240 = ?",
    "question_ar": "125 × 240 = ؟",
    "answer": 30000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 125 × 8 = 1000, a very clean number. Also 240 = 8 × 30.",
            "explanation_ar": "لاحظ أن 125 × 8 = 1000، وهو عدد نظيف جدًا. كذلك 240 = 8 × 30."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Rewrite: 125 × 240 = 125 × 8 × 30 = 1000 × 30.",
            "explanation_ar": "أعد الكتابة: 125 × 240 = 125 × 8 × 30 = 1000 × 30."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "1000 × 30 = 30000.",
            "explanation_ar": "1000 × 30 = 30000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "125 × 240 = 30000.",
            "explanation_ar": "125 × 240 = 30000."
          }
        ],
        "hint_en": "125 is a friend of 8: 125 × 8 = 1000.",
        "hint_ar": "125 صديق الرقم 8: 125 × 8 = 1000.",
        "result_en": "125 × 240 = 30000",
        "result_ar": "125 × 240 = 30000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 240 into 200 + 40.",
            "explanation_ar": "قسّم 240 إلى 200 + 40."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "125 × 200 = 25000. Then 125 × 40 = 5000.",
            "explanation_ar": "125 × 200 = 25000. ثم 125 × 40 = 5000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "25000 + 5000 = 30000.",
            "explanation_ar": "25000 + 5000 = 30000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "125 × 240 = 125 × 200 + 125 × 40 = 25000 + 5000 = 30000. ✓",
            "explanation_ar": "125 × 240 = 125 × 200 + 125 × 40 = 25000 + 5000 = 30000. ✓"
          }
        ],
        "hint_en": "Split 240 into 200 + 40, then distribute 125 over each part.",
        "hint_ar": "قسّم 240 إلى 200 + 40، ثم وزّع 125 على كل جزء.",
        "result_en": "125 × 240 = 30000",
        "result_ar": "125 × 240 = 30000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a rectangular hall that is 125 metres long and 240 metres wide.",
            "explanation_ar": "تخيّل قاعة مستطيلة طولها 125 مترًا وعرضها 240 مترًا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle with width 240 split into two columns: 200 and 40. The height is 125, kept as one row.",
            "explanation_ar": "ارسم مستطيلًا عرضه 240 مقسَّم إلى عمودين: 200 و40. الارتفاع 125، صف واحد."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Left region: 125 × 200 = 25000. Right region: 125 × 40 = 5000.",
            "explanation_ar": "المنطقة اليسرى: 125 × 200 = 25000. المنطقة اليمنى: 125 × 40 = 5000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total area = 25000 + 5000 = 30000. So 125 × 240 = 30000.",
            "explanation_ar": "إجمالي المساحة = 25000 + 5000 = 30000. إذن 125 × 240 = 30000."
          }
        ],
        "hint_en": "Split the 240-wide rectangle into a 200-part and a 40-part.",
        "hint_ar": "قسّم المستطيل العرض 240 إلى جزء 200 وجزء 40.",
        "result_en": "125 × 240 = 30000",
        "result_ar": "125 × 240 = 30000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-mul-medium-002",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "215 × 140 = ?",
    "question_ar": "215 × 140 = ؟",
    "answer": 30100,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "215 is close to the round number 200. Write 215 = 200 + 15.",
            "explanation_ar": "215 قريب من العدد الكامل 200. اكتب 215 = 200 + 15."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "200 × 140 = 28000. Then 15 × 140 = 2100.",
            "explanation_ar": "200 × 140 = 28000. ثم 15 × 140 = 2100."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the two parts: 28000 + 2100 = 30100.",
            "explanation_ar": "أضف الجزأين: 28000 + 2100 = 30100."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "215 × 140 = 30100.",
            "explanation_ar": "215 × 140 = 30100."
          }
        ],
        "hint_en": "Round 215 down to 200, multiply, then add the extra 15 × 140.",
        "hint_ar": "قرّب 215 إلى 200، اضرب، ثم أضف الزيادة 15 × 140.",
        "result_en": "215 × 140 = 30100",
        "result_ar": "215 × 140 = 30100"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 215 into 200 + 10 + 5.",
            "explanation_ar": "قسّم 215 إلى 200 + 10 + 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "200 × 140 = 28000. Then 10 × 140 = 1400. Then 5 × 140 = 700.",
            "explanation_ar": "200 × 140 = 28000. ثم 10 × 140 = 1400. ثم 5 × 140 = 700."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "28000 + 1400 + 700 = 30100.",
            "explanation_ar": "28000 + 1400 + 700 = 30100."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "215 × 140 = 28000 + 1400 + 700 = 30100. ✓",
            "explanation_ar": "215 × 140 = 28000 + 1400 + 700 = 30100. ✓"
          }
        ],
        "hint_en": "Break 215 into 200 + 10 + 5, then multiply each part by 140.",
        "hint_ar": "قسّم 215 إلى 200 + 10 + 5، ثم اضرب كل جزء في 140.",
        "result_en": "215 × 140 = 30100",
        "result_ar": "215 × 140 = 30100"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a plot of land that is 215 metres by 140 metres.",
            "explanation_ar": "تخيّل قطعة أرض أبعادها 215 مترًا × 140 مترًا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle with height 140 and width split into three columns: 200, 10, and 5.",
            "explanation_ar": "ارسم مستطيلًا ارتفاعه 140 وعرضه مقسَّم إلى ثلاثة أعمدة: 200 و10 و5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Left region: 200 × 140 = 28000. Middle: 10 × 140 = 1400. Right: 5 × 140 = 700.",
            "explanation_ar": "المنطقة اليسرى: 200 × 140 = 28000. الوسط: 10 × 140 = 1400. اليمين: 5 × 140 = 700."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total area = 28000 + 1400 + 700 = 30100. So 215 × 140 = 30100.",
            "explanation_ar": "إجمالي المساحة = 28000 + 1400 + 700 = 30100. إذن 215 × 140 = 30100."
          }
        ],
        "hint_en": "Split the 215-wide side into 200, 10, and 5 strips.",
        "hint_ar": "قسّم الجانب العرض 215 إلى شرائح: 200 و10 و5.",
        "result_en": "215 × 140 = 30100",
        "result_ar": "215 × 140 = 30100"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-mul-medium-003",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Medium",
    "question_en": "180 × 250 = ?",
    "question_ar": "180 × 250 = ؟",
    "answer": 45000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "250 × 4 = 1000, a clean anchor. Rewrite 180 = 4 × 45.",
            "explanation_ar": "250 × 4 = 1000، ارتكاز نظيف. أعد كتابة 180 = 4 × 45."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Rearrange: 180 × 250 = 45 × 4 × 250 = 45 × 1000.",
            "explanation_ar": "أعد الترتيب: 180 × 250 = 45 × 4 × 250 = 45 × 1000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "45 × 1000 = 45000.",
            "explanation_ar": "45 × 1000 = 45000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "180 × 250 = 45000.",
            "explanation_ar": "180 × 250 = 45000."
          }
        ],
        "hint_en": "250 is a friend of 4: 250 × 4 = 1000. Find the factor of 4 inside 180.",
        "hint_ar": "250 صديق الرقم 4: 250 × 4 = 1000. ابحث عن العامل 4 داخل 180.",
        "result_en": "180 × 250 = 45000",
        "result_ar": "180 × 250 = 45000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 250 into 200 + 50.",
            "explanation_ar": "قسّم 250 إلى 200 + 50."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "180 × 200 = 36000. Then 180 × 50 = 9000.",
            "explanation_ar": "180 × 200 = 36000. ثم 180 × 50 = 9000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "36000 + 9000 = 45000.",
            "explanation_ar": "36000 + 9000 = 45000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "180 × 250 = 180 × 200 + 180 × 50 = 36000 + 9000 = 45000. ✓",
            "explanation_ar": "180 × 250 = 180 × 200 + 180 × 50 = 36000 + 9000 = 45000. ✓"
          }
        ],
        "hint_en": "Split 250 into 200 + 50, then distribute 180 over each part.",
        "hint_ar": "قسّم 250 إلى 200 + 50، ثم وزّع 180 على كل جزء.",
        "result_en": "180 × 250 = 45000",
        "result_ar": "180 × 250 = 45000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a swimming pool complex that is 180 metres long and 250 metres wide.",
            "explanation_ar": "تخيّل مجمعًا للسباحة طوله 180 مترًا وعرضه 250 مترًا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle with width 180 and height split into two rows: 200 and 50.",
            "explanation_ar": "ارسم مستطيلًا عرضه 180 وارتفاعه مقسَّم إلى صفين: 200 و50."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Top region: 180 × 200 = 36000. Bottom region: 180 × 50 = 9000.",
            "explanation_ar": "المنطقة العلوية: 180 × 200 = 36000. المنطقة السفلية: 180 × 50 = 9000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total area = 36000 + 9000 = 45000. So 180 × 250 = 45000.",
            "explanation_ar": "إجمالي المساحة = 36000 + 9000 = 45000. إذن 180 × 250 = 45000."
          }
        ],
        "hint_en": "Split the 250-tall side into a 200-strip and a 50-strip.",
        "hint_ar": "قسّم الجانب الارتفاع 250 إلى شريط 200 وشريط 50.",
        "result_en": "180 × 250 = 45000",
        "result_ar": "180 × 250 = 45000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-mul-hard-001",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "234 × 170 = ?",
    "question_ar": "234 × 170 = ؟",
    "answer": 39780,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "170 = 17 × 10. Focus on 234 × 17 first, then multiply by 10.",
            "explanation_ar": "170 = 17 × 10. ركّز أولًا على 234 × 17، ثم اضرب في 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "234 × 17: use (234 × 20) − (234 × 3) = 4680 − 702 = 3978.",
            "explanation_ar": "234 × 17: استخدم (234 × 20) − (234 × 3) = 4680 − 702 = 3978."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply by 10: 3978 × 10 = 39780.",
            "explanation_ar": "اضرب في 10: 3978 × 10 = 39780."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "234 × 170 = 39780.",
            "explanation_ar": "234 × 170 = 39780."
          }
        ],
        "hint_en": "Write 170 = 17 × 10, compute 234 × 17 using near-20 adjustment, then ×10.",
        "hint_ar": "اكتب 170 = 17 × 10، احسب 234 × 17 باستخدام تعديل القرب من 20، ثم ×10.",
        "result_en": "234 × 170 = 39780",
        "result_ar": "234 × 170 = 39780"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 234 into 200 + 30 + 4.",
            "explanation_ar": "قسّم 234 إلى 200 + 30 + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "200 × 170 = 34000. Then 30 × 170 = 5100. Then 4 × 170 = 680.",
            "explanation_ar": "200 × 170 = 34000. ثم 30 × 170 = 5100. ثم 4 × 170 = 680."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "34000 + 5100 + 680 = 39780.",
            "explanation_ar": "34000 + 5100 + 680 = 39780."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "234 × 170 = 34000 + 5100 + 680 = 39780. ✓",
            "explanation_ar": "234 × 170 = 34000 + 5100 + 680 = 39780. ✓"
          }
        ],
        "hint_en": "Break 234 into 200 + 30 + 4, then multiply each part by 170.",
        "hint_ar": "قسّم 234 إلى 200 + 30 + 4، ثم اضرب كل جزء في 170.",
        "result_en": "234 × 170 = 39780",
        "result_ar": "234 × 170 = 39780"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a city block that is 234 metres by 170 metres.",
            "explanation_ar": "تخيّل مبنى مدينة أبعاده 234 مترًا × 170 مترًا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle: width 234 split into columns 200, 30, 4; height 170 split into rows 100, 70 — giving 6 sub-rectangles.",
            "explanation_ar": "ارسم مستطيلًا: العرض 234 مقسَّم إلى أعمدة 200 و30 و4؛ الارتفاع 170 مقسَّم إلى صفوف 100 و70 — ينتج 6 مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "200×100=20000, 30×100=3000, 4×100=400, 200×70=14000, 30×70=2100, 4×70=280.",
            "explanation_ar": "200×100=20000، 30×100=3000، 4×100=400، 200×70=14000، 30×70=2100، 4×70=280."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Sum all regions: 20000+3000+400+14000+2100+280 = 39780. So 234 × 170 = 39780.",
            "explanation_ar": "اجمع كل المناطق: 20000+3000+400+14000+2100+280 = 39780. إذن 234 × 170 = 39780."
          }
        ],
        "hint_en": "Split 234 into (200, 30, 4) and 170 into (100, 70). Fill a 2×3 area grid.",
        "hint_ar": "قسّم 234 إلى (200، 30، 4) و170 إلى (100، 70). املأ شبكة مساحة 2×3.",
        "result_en": "234 × 170 = 39780",
        "result_ar": "234 × 170 = 39780"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-mul-hard-002",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "312 × 240 = ?",
    "question_ar": "312 × 240 = ؟",
    "answer": 74880,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "240 = 24 × 10. Focus on 312 × 24 first, then multiply by 10.",
            "explanation_ar": "240 = 24 × 10. ركّز أولًا على 312 × 24، ثم اضرب في 10."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "312 × 24: use (312 × 25) − (312 × 1) = 7800 − 312 = 7488. (312 × 25 = 312 × 100 ÷ 4 = 31200 ÷ 4 = 7800.)",
            "explanation_ar": "312 × 24: استخدم (312 × 25) − (312 × 1) = 7800 − 312 = 7488. (312 × 25 = 312 × 100 ÷ 4 = 31200 ÷ 4 = 7800.)"
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply by 10: 7488 × 10 = 74880.",
            "explanation_ar": "اضرب في 10: 7488 × 10 = 74880."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "312 × 240 = 74880.",
            "explanation_ar": "312 × 240 = 74880."
          }
        ],
        "hint_en": "Write 240 = 24 × 10, then use 25 as a stepping-stone for ×24.",
        "hint_ar": "اكتب 240 = 24 × 10، ثم استخدم 25 كحجر قفز لـ ×24.",
        "result_en": "312 × 240 = 74880",
        "result_ar": "312 × 240 = 74880"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 312 into 300 + 12.",
            "explanation_ar": "قسّم 312 إلى 300 + 12."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "300 × 240 = 72000. Then 12 × 240 = 2880.",
            "explanation_ar": "300 × 240 = 72000. ثم 12 × 240 = 2880."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "72000 + 2880 = 74880.",
            "explanation_ar": "72000 + 2880 = 74880."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "312 × 240 = 300 × 240 + 12 × 240 = 72000 + 2880 = 74880. ✓",
            "explanation_ar": "312 × 240 = 300 × 240 + 12 × 240 = 72000 + 2880 = 74880. ✓"
          }
        ],
        "hint_en": "Break 312 into 300 + 12, then multiply each part by 240.",
        "hint_ar": "قسّم 312 إلى 300 + 12، ثم اضرب كل جزء في 240.",
        "result_en": "312 × 240 = 74880",
        "result_ar": "312 × 240 = 74880"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a warehouse floor that is 312 metres long and 240 metres wide.",
            "explanation_ar": "تخيّل أرضية مستودع طولها 312 مترًا وعرضها 240 مترًا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle: width 312 split into columns 300 and 12; height 240 split into rows 200 and 40 — giving 4 sub-rectangles.",
            "explanation_ar": "ارسم مستطيلًا: العرض 312 مقسَّم إلى عمودين 300 و12؛ الارتفاع 240 مقسَّم إلى صفين 200 و40 — ينتج 4 مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "300×200=60000, 12×200=2400, 300×40=12000, 12×40=480.",
            "explanation_ar": "300×200=60000، 12×200=2400، 300×40=12000، 12×40=480."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Sum all regions: 60000+2400+12000+480 = 74880. So 312 × 240 = 74880.",
            "explanation_ar": "اجمع كل المناطق: 60000+2400+12000+480 = 74880. إذن 312 × 240 = 74880."
          }
        ],
        "hint_en": "Split 312 into (300, 12) and 240 into (200, 40). Fill a 2×2 area grid.",
        "hint_ar": "قسّم 312 إلى (300، 12) و240 إلى (200، 40). املأ شبكة مساحة 2×2.",
        "result_en": "312 × 240 = 74880",
        "result_ar": "312 × 240 = 74880"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-mul-hard-003",
    "grade": 6,
    "bank": "common",
    "category": "Multiplication",
    "level": "Hard",
    "question_en": "275 × 360 = ?",
    "question_ar": "275 × 360 = ؟",
    "answer": 99000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "275 × 4 = 1100 and 360 = 4 × 90. Use this to group efficiently.",
            "explanation_ar": "275 × 4 = 1100 و360 = 4 × 90. استخدم هذا للتجميع بكفاءة."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Rearrange: 275 × 360 = 275 × 4 × 90 = 1100 × 90.",
            "explanation_ar": "أعد الترتيب: 275 × 360 = 275 × 4 × 90 = 1100 × 90."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "1100 × 90 = 99000.",
            "explanation_ar": "1100 × 90 = 99000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "275 × 360 = 99000.",
            "explanation_ar": "275 × 360 = 99000."
          }
        ],
        "hint_en": "275 × 4 = 1100 is a clean result. Find the factor 4 inside 360.",
        "hint_ar": "275 × 4 = 1100 نتيجة نظيفة. ابحث عن العامل 4 داخل 360.",
        "result_en": "275 × 360 = 99000",
        "result_ar": "275 × 360 = 99000"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 275 into 200 + 75.",
            "explanation_ar": "قسّم 275 إلى 200 + 75."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "200 × 360 = 72000. Then 75 × 360 = 27000.",
            "explanation_ar": "200 × 360 = 72000. ثم 75 × 360 = 27000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "72000 + 27000 = 99000.",
            "explanation_ar": "72000 + 27000 = 99000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "275 × 360 = 200 × 360 + 75 × 360 = 72000 + 27000 = 99000. ✓",
            "explanation_ar": "275 × 360 = 200 × 360 + 75 × 360 = 72000 + 27000 = 99000. ✓"
          }
        ],
        "hint_en": "Break 275 into 200 + 75, then multiply each part by 360.",
        "hint_ar": "قسّم 275 إلى 200 + 75، ثم اضرب كل جزء في 360.",
        "result_en": "275 × 360 = 99000",
        "result_ar": "275 × 360 = 99000"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a solar farm that is 275 metres by 360 metres.",
            "explanation_ar": "تخيّل مزرعة شمسية أبعادها 275 مترًا × 360 مترًا."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle: width 275 split into columns 200 and 75; height 360 split into rows 300 and 60 — giving 4 sub-rectangles.",
            "explanation_ar": "ارسم مستطيلًا: العرض 275 مقسَّم إلى عمودين 200 و75؛ الارتفاع 360 مقسَّم إلى صفين 300 و60 — ينتج 4 مستطيلات فرعية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "200×300=60000, 75×300=22500, 200×60=12000, 75×60=4500.",
            "explanation_ar": "200×300=60000، 75×300=22500، 200×60=12000، 75×60=4500."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Sum all regions: 60000+22500+12000+4500 = 99000. So 275 × 360 = 99000.",
            "explanation_ar": "اجمع كل المناطق: 60000+22500+12000+4500 = 99000. إذن 275 × 360 = 99000."
          }
        ],
        "hint_en": "Split 275 into (200, 75) and 360 into (300, 60). Fill a 2×2 area grid.",
        "hint_ar": "قسّم 275 إلى (200، 75) و360 إلى (300، 60). املأ شبكة مساحة 2×2.",
        "result_en": "275 × 360 = 99000",
        "result_ar": "275 × 360 = 99000"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-mul-hard-003",
      "upper_grade_equivalent": "g7-common-mul-easy-001",
      "fun_fact_tag": "multiplication"
    }
  },
  {
    "id": "g6-common-div-easy-001",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "4800 ÷ 20 = ?",
    "question_ar": "4800 ÷ 20 = ؟",
    "answer": 240,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 20 = 2 × 10. Dividing by 20 means dividing first by 10, then by 2.",
            "explanation_ar": "لاحظ أن 20 = 2 × 10. القسمة على 20 تعني القسمة أولاً على 10، ثم على 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide 4800 by 10: 4800 ÷ 10 = 480.",
            "explanation_ar": "اقسم 4800 على 10: 4800 ÷ 10 = 480."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now divide 480 by 2: 480 ÷ 2 = 240.",
            "explanation_ar": "الآن اقسم 480 على 2: 480 ÷ 2 = 240."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "4800 ÷ 20 = 240. Check: 240 × 20 = 4800. ✓",
            "explanation_ar": "4800 ÷ 20 = 240. تحقق: 240 × 20 = 4800. ✓"
          }
        ],
        "hint_en": "Break 20 into 10 × 2, then divide in two easy steps.",
        "hint_ar": "حلّل 20 إلى 10 × 2، ثم اقسم في خطوتين سهلتين.",
        "result_en": "4800 ÷ 20 = 240",
        "result_ar": "4800 ÷ 20 = 240"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 4800 into two parts that are each divisible by 20: 4000 + 800.",
            "explanation_ar": "قسّم 4800 إلى جزأين كلٌّ منهما قابل للقسمة على 20: 4000 + 800."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4000 ÷ 20 = 200 and 800 ÷ 20 = 40.",
            "explanation_ar": "4000 ÷ 20 = 200 و 800 ÷ 20 = 40."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the two partial quotients: 200 + 40 = 240.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 200 + 40 = 240."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "240 × 20 = 4800. ✓ The answer is 240.",
            "explanation_ar": "240 × 20 = 4800. ✓ الجواب هو 240."
          }
        ],
        "hint_en": "Split 4800 into 4000 + 800, then divide each chunk by 20.",
        "hint_ar": "قسّم 4800 إلى 4000 + 800، ثم اقسم كل جزء على 20.",
        "result_en": "4800 ÷ 20 = 240",
        "result_ar": "4800 ÷ 20 = 240"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 4800 students lined up to be divided equally into 20 school buses.",
            "explanation_ar": "تخيّل 4800 طالب يصطفون ليُوزَّعوا بالتساوي على 20 حافلة مدرسية."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a rectangle representing 4800. Divide it into 20 equal columns.",
            "explanation_ar": "ارسم مستطيلاً يمثل 4800. قسّمه إلى 20 عموداً متساوياً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each column holds the same number of students. 20 groups fit perfectly into 4800 with no leftovers.",
            "explanation_ar": "كل عمود يحتوي على العدد نفسه من الطلاب. تنتظم 20 مجموعة بالتساوي في 4800 دون أي باقٍ."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each bus carries 4800 ÷ 20 = 240 students. Picture 240 seats filled on each of the 20 buses.",
            "explanation_ar": "كل حافلة تحمل 4800 ÷ 20 = 240 طالباً. تخيّل 240 مقعداً ممتلئاً في كل واحدة من الحافلات الـ 20."
          }
        ],
        "hint_en": "Picture 4800 items shared equally among 20 groups.",
        "hint_ar": "تخيّل توزيع 4800 عنصر بالتساوي على 20 مجموعة.",
        "result_en": "4800 ÷ 20 = 240",
        "result_ar": "4800 ÷ 20 = 240"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-common-div-easy-002",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "6250 ÷ 25 = ?",
    "question_ar": "6250 ÷ 25 = ؟",
    "answer": 250,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 25 × 4 = 100. Dividing by 25 is the same as multiplying by 4 then dividing by 100.",
            "explanation_ar": "لاحظ أن 25 × 4 = 100. القسمة على 25 تساوي الضرب في 4 ثم القسمة على 100."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiply 6250 by 4: 6250 × 4 = 25000.",
            "explanation_ar": "اضرب 6250 في 4: 6250 × 4 = 25000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now divide by 100: 25000 ÷ 100 = 250.",
            "explanation_ar": "الآن اقسم على 100: 25000 ÷ 100 = 250."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "6250 ÷ 25 = 250. Check: 250 × 25 = 6250. ✓",
            "explanation_ar": "6250 ÷ 25 = 250. تحقق: 250 × 25 = 6250. ✓"
          }
        ],
        "hint_en": "Use the rule: ÷ 25 equals × 4 then ÷ 100.",
        "hint_ar": "استخدم القاعدة: ÷ 25 يساوي × 4 ثم ÷ 100.",
        "result_en": "6250 ÷ 25 = 250",
        "result_ar": "6250 ÷ 25 = 250"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 6250 into two parts each divisible by 25: 5000 + 1250.",
            "explanation_ar": "قسّم 6250 إلى جزأين كلٌّ منهما قابل للقسمة على 25: 5000 + 1250."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5000 ÷ 25 = 200 and 1250 ÷ 25 = 50.",
            "explanation_ar": "5000 ÷ 25 = 200 و 1250 ÷ 25 = 50."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 200 + 50 = 250.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 200 + 50 = 250."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "250 × 25 = 6250. ✓ The answer is 250.",
            "explanation_ar": "250 × 25 = 6250. ✓ الجواب هو 250."
          }
        ],
        "hint_en": "Split 6250 into 5000 + 1250, both easy to divide by 25.",
        "hint_ar": "قسّم 6250 إلى 5000 + 1250، وكلاهما سهل القسمة على 25.",
        "result_en": "6250 ÷ 25 = 250",
        "result_ar": "6250 ÷ 25 = 250"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A merchant has 6250 coins to pack equally into 25 bags.",
            "explanation_ar": "تاجر لديه 6250 قطعة نقدية يريد تعبئتها بالتساوي في 25 كيساً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 25 equal bags. Picture filling 5 groups of 5 bags at a time, giving 5 rows of 5 bags.",
            "explanation_ar": "ارسم 25 كيساً متساوياً. تخيّل ملء 5 مجموعات من 5 أكياس في كل مرة، مما يعطي 5 صفوف من 5 أكياس."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "All 6250 coins fit perfectly across 25 bags with nothing left over.",
            "explanation_ar": "تنتظم جميع الـ 6250 قطعة نقدية في 25 كيساً دون أي باقٍ."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each bag receives 6250 ÷ 25 = 250 coins. 25 bags × 250 coins = 6250 coins total.",
            "explanation_ar": "يستقبل كل كيس 6250 ÷ 25 = 250 قطعة. 25 كيساً × 250 قطعة = 6250 قطعة إجمالاً."
          }
        ],
        "hint_en": "Imagine 6250 items shared equally into 25 equal groups.",
        "hint_ar": "تخيّل توزيع 6250 عنصر بالتساوي على 25 مجموعة.",
        "result_en": "6250 ÷ 25 = 250",
        "result_ar": "6250 ÷ 25 = 250"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-common-div-easy-003",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Easy",
    "question_en": "9150 ÷ 50 = ?",
    "question_ar": "9150 ÷ 50 = ؟",
    "answer": 183,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Notice that 50 = 100 ÷ 2. Dividing by 50 equals dividing by 100 and then multiplying by 2.",
            "explanation_ar": "لاحظ أن 50 = 100 ÷ 2. القسمة على 50 تعني القسمة على 100 ثم الضرب في 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Divide 9150 by 100: 9150 ÷ 100 = 91.5.",
            "explanation_ar": "اقسم 9150 على 100: 9150 ÷ 100 = 91.5."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply by 2: 91.5 × 2 = 183.",
            "explanation_ar": "اضرب في 2: 91.5 × 2 = 183."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "9150 ÷ 50 = 183. Check: 183 × 50 = 9150. ✓",
            "explanation_ar": "9150 ÷ 50 = 183. تحقق: 183 × 50 = 9150. ✓"
          }
        ],
        "hint_en": "÷ 50 is the same as ÷ 100 then × 2.",
        "hint_ar": "÷ 50 هي نفسها ÷ 100 ثم × 2.",
        "result_en": "9150 ÷ 50 = 183",
        "result_ar": "9150 ÷ 50 = 183"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 9150 into parts each divisible by 50: 9000 + 150.",
            "explanation_ar": "قسّم 9150 إلى أجزاء كل منها قابل للقسمة على 50: 9000 + 150."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "9000 ÷ 50 = 180 and 150 ÷ 50 = 3.",
            "explanation_ar": "9000 ÷ 50 = 180 و 150 ÷ 50 = 3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 180 + 3 = 183.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 180 + 3 = 183."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "183 × 50 = 9150. ✓ The answer is 183.",
            "explanation_ar": "183 × 50 = 9150. ✓ الجواب هو 183."
          }
        ],
        "hint_en": "Split 9150 into 9000 + 150, both divisible by 50.",
        "hint_ar": "قسّم 9150 إلى 9000 + 150، وكلاهما قابل للقسمة على 50.",
        "result_en": "9150 ÷ 50 = 183",
        "result_ar": "9150 ÷ 50 = 183"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A factory produces 9150 items and packs them into boxes of 50.",
            "explanation_ar": "مصنع ينتج 9150 قطعة ويعبّئها في صناديق سعة كل منها 50 قطعة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Visualise a long row of 9150 items being grouped into clusters of 50.",
            "explanation_ar": "تخيّل صفاً طويلاً من 9150 قطعة تُجمَّع في مجموعات من 50."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Every 50 items fill exactly one box. With 9150 items there are no leftovers.",
            "explanation_ar": "كل 50 قطعة تملأ صندوقاً واحداً بالضبط. مع 9150 قطعة لا يوجد أي باقٍ."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "9150 ÷ 50 = 183 boxes. 183 boxes × 50 items = 9150 items. ✓",
            "explanation_ar": "9150 ÷ 50 = 183 صندوقاً. 183 صندوقاً × 50 قطعة = 9150 قطعة. ✓"
          }
        ],
        "hint_en": "Group 9150 items into bundles of 50 and count the bundles.",
        "hint_ar": "جمّع 9150 عنصر في حزم من 50 وعُدّ الحزم.",
        "result_en": "9150 ÷ 50 = 183",
        "result_ar": "9150 ÷ 50 = 183"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-common-div-medium-001",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "2184 ÷ 13 = ?",
    "question_ar": "2184 ÷ 13 = ؟",
    "answer": 168,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Build multiples of 13 up to 2184. Key anchors: 13 × 100 = 1300, 13 × 160 = 2080, 13 × 168 = 2184.",
            "explanation_ar": "ابنِ مضاعفات 13 حتى 2184. نقاط ارتكاز أساسية: 13 × 100 = 1300، 13 × 160 = 2080، 13 × 168 = 2184."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "13 × 160 = 2080. Remainder: 2184 − 2080 = 104.",
            "explanation_ar": "13 × 160 = 2080. الباقي: 2184 − 2080 = 104."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "104 ÷ 13 = 8. So the total quotient is 160 + 8 = 168.",
            "explanation_ar": "104 ÷ 13 = 8. إذن الحاصل الكلي هو 160 + 8 = 168."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "2184 ÷ 13 = 168. Check: 168 × 13 = 2184. ✓",
            "explanation_ar": "2184 ÷ 13 = 168. تحقق: 168 × 13 = 2184. ✓"
          }
        ],
        "hint_en": "Find the largest multiple of 13 just below 2184, then handle the remainder.",
        "hint_ar": "ابحث عن أكبر مضاعف لـ 13 أقل من 2184، ثم تعامل مع الباقي.",
        "result_en": "2184 ÷ 13 = 168",
        "result_ar": "2184 ÷ 13 = 168"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 2184 into parts each divisible by 13: 1300 + 884.",
            "explanation_ar": "قسّم 2184 إلى أجزاء كل منها قابل للقسمة على 13: 1300 + 884."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1300 ÷ 13 = 100 and 884 ÷ 13 = 68.",
            "explanation_ar": "1300 ÷ 13 = 100 و 884 ÷ 13 = 68."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 100 + 68 = 168.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 100 + 68 = 168."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "168 × 13 = 2184. ✓ The answer is 168.",
            "explanation_ar": "168 × 13 = 2184. ✓ الجواب هو 168."
          }
        ],
        "hint_en": "Split 2184 into 1300 + 884; each piece divides evenly by 13.",
        "hint_ar": "قسّم 2184 إلى 1300 + 884؛ كل جزء قابل للقسمة على 13 تماماً.",
        "result_en": "2184 ÷ 13 = 168",
        "result_ar": "2184 ÷ 13 = 168"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A librarian arranges 2184 books equally across 13 shelves.",
            "explanation_ar": "أمين مكتبة يرتّب 2184 كتاباً بالتساوي على 13 رفاً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 13 rows. First place 100 books per row (using 1300 books), then add more to use the remaining 884.",
            "explanation_ar": "ارسم 13 صفاً. ضع أولاً 100 كتاب في كل صف (باستخدام 1300 كتاب)، ثم أضف المزيد للـ 884 المتبقية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After the first fill each row has 100 books. Distributing 884 more gives 884 ÷ 13 = 68 extra books per row.",
            "explanation_ar": "بعد الملء الأول يحتوي كل صف على 100 كتاب. توزيع 884 كتاباً إضافياً يعطي 884 ÷ 13 = 68 كتاباً إضافياً لكل صف."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each shelf holds 100 + 68 = 168 books. 13 shelves × 168 books = 2184 books. ✓",
            "explanation_ar": "كل رف يحمل 100 + 68 = 168 كتاباً. 13 رفاً × 168 كتاباً = 2184 كتاباً. ✓"
          }
        ],
        "hint_en": "Picture 2184 books spread evenly across 13 shelves.",
        "hint_ar": "تخيّل 2184 كتاباً موزَّعاً بالتساوي على 13 رفاً.",
        "result_en": "2184 ÷ 13 = 168",
        "result_ar": "2184 ÷ 13 = 168"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-common-div-medium-002",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "3456 ÷ 16 = ?",
    "question_ar": "3456 ÷ 16 = ؟",
    "answer": 216,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Build up multiples of 16. Key anchor: 16 × 200 = 3200. Remainder: 3456 − 3200 = 256.",
            "explanation_ar": "ابنِ مضاعفات 16. نقطة الارتكاز: 16 × 200 = 3200. الباقي: 3456 − 3200 = 256."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "16 × 200 = 3200 and 16 × 16 = 256.",
            "explanation_ar": "16 × 200 = 3200 و 16 × 16 = 256."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "256 ÷ 16 = 16. So total quotient = 200 + 16 = 216.",
            "explanation_ar": "256 ÷ 16 = 16. إذن الحاصل الكلي = 200 + 16 = 216."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "3456 ÷ 16 = 216. Check: 216 × 16 = 3456. ✓",
            "explanation_ar": "3456 ÷ 16 = 216. تحقق: 216 × 16 = 3456. ✓"
          }
        ],
        "hint_en": "Start with 16 × 200 = 3200, then divide the remainder 256 by 16.",
        "hint_ar": "ابدأ بـ 16 × 200 = 3200، ثم اقسم الباقي 256 على 16.",
        "result_en": "3456 ÷ 16 = 216",
        "result_ar": "3456 ÷ 16 = 216"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 3456 into parts each divisible by 16: 3200 + 256.",
            "explanation_ar": "قسّم 3456 إلى أجزاء كل منها قابل للقسمة على 16: 3200 + 256."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "3200 ÷ 16 = 200 and 256 ÷ 16 = 16.",
            "explanation_ar": "3200 ÷ 16 = 200 و 256 ÷ 16 = 16."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 200 + 16 = 216.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 200 + 16 = 216."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "216 × 16 = 3456. ✓ The answer is 216.",
            "explanation_ar": "216 × 16 = 3456. ✓ الجواب هو 216."
          }
        ],
        "hint_en": "Split 3456 into 3200 + 256; each is a clean multiple of 16.",
        "hint_ar": "قسّم 3456 إلى 3200 + 256؛ كل منهما مضاعف نظيف لـ 16.",
        "result_en": "3456 ÷ 16 = 216",
        "result_ar": "3456 ÷ 16 = 216"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A coach divides 3456 training cards equally among 16 players.",
            "explanation_ar": "مدرب يوزّع 3456 بطاقة تدريبية بالتساوي على 16 لاعباً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 16 columns. First give each player 200 cards (uses 3200), then distribute the remaining 256 cards.",
            "explanation_ar": "ارسم 16 عموداً. أعطِ كل لاعب 200 بطاقة أولاً (يستخدم 3200)، ثم وزّع الـ 256 بطاقة المتبقية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each player has 200 cards. The remaining 256 cards give each player 16 more.",
            "explanation_ar": "كل لاعب لديه 200 بطاقة. الـ 256 بطاقة المتبقية تعطي كل لاعب 16 بطاقة إضافية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each player receives 200 + 16 = 216 cards. 16 × 216 = 3456. ✓",
            "explanation_ar": "يحصل كل لاعب على 200 + 16 = 216 بطاقة. 16 × 216 = 3456. ✓"
          }
        ],
        "hint_en": "Picture 3456 cards shared equally by 16 players.",
        "hint_ar": "تخيّل توزيع 3456 بطاقة بالتساوي على 16 لاعباً.",
        "result_en": "3456 ÷ 16 = 216",
        "result_ar": "3456 ÷ 16 = 216"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-common-div-medium-003",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Medium",
    "question_en": "5928 ÷ 24 = ?",
    "question_ar": "5928 ÷ 24 = ؟",
    "answer": 247,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Build up multiples of 24. Key anchor: 24 × 200 = 4800. Remainder: 5928 − 4800 = 1128.",
            "explanation_ar": "ابنِ مضاعفات 24. نقطة الارتكاز: 24 × 200 = 4800. الباقي: 5928 − 4800 = 1128."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "24 × 40 = 960. Remainder after 240: 1128 − 960 = 168. Then 24 × 7 = 168.",
            "explanation_ar": "24 × 40 = 960. الباقي بعد 240: 1128 − 960 = 168. ثم 24 × 7 = 168."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total quotient = 200 + 40 + 7 = 247.",
            "explanation_ar": "الحاصل الكلي = 200 + 40 + 7 = 247."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "5928 ÷ 24 = 247. Check: 247 × 24 = 5928. ✓",
            "explanation_ar": "5928 ÷ 24 = 247. تحقق: 247 × 24 = 5928. ✓"
          }
        ],
        "hint_en": "Climb in steps: 24×200=4800, then 24×40=960, then 24×7=168.",
        "hint_ar": "تسلَّق بخطوات: 24×200=4800، ثم 24×40=960، ثم 24×7=168.",
        "result_en": "5928 ÷ 24 = 247",
        "result_ar": "5928 ÷ 24 = 247"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 5928 into parts each divisible by 24: 4800 + 1128.",
            "explanation_ar": "قسّم 5928 إلى أجزاء كل منها قابل للقسمة على 24: 4800 + 1128."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "4800 ÷ 24 = 200 and 1128 ÷ 24 = 47.",
            "explanation_ar": "4800 ÷ 24 = 200 و 1128 ÷ 24 = 47."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 200 + 47 = 247.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 200 + 47 = 247."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "247 × 24 = 5928. ✓ The answer is 247.",
            "explanation_ar": "247 × 24 = 5928. ✓ الجواب هو 247."
          }
        ],
        "hint_en": "Split 5928 into 4800 + 1128; both divide evenly by 24.",
        "hint_ar": "قسّم 5928 إلى 4800 + 1128؛ كلاهما يُقسَم تماماً على 24.",
        "result_en": "5928 ÷ 24 = 247",
        "result_ar": "5928 ÷ 24 = 247"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A packaging team packs 5928 chocolates into boxes of 24.",
            "explanation_ar": "فريق تعبئة يحزم 5928 قطعة شوكولاتة في علب سعة كل منها 24 قطعة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Imagine a grid with 24 columns. Fill row by row until all 5928 chocolates are placed.",
            "explanation_ar": "تخيّل شبكة بها 24 عموداً. املأ صفاً تلو الآخر حتى يُوضَع جميع الـ 5928 قطعة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count the rows: 200 full rows use 4800 chocolates, and 47 more rows hold the remaining 1128.",
            "explanation_ar": "عُدّ الصفوف: 200 صف كامل يستخدم 4800 قطعة، و 47 صفاً إضافياً يضم الـ 1128 المتبقية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total rows = 247. That means 5928 ÷ 24 = 247 boxes. ✓",
            "explanation_ar": "إجمالي الصفوف = 247. هذا يعني 5928 ÷ 24 = 247 علبة. ✓"
          }
        ],
        "hint_en": "Group 5928 chocolates into rows of 24 and count the rows.",
        "hint_ar": "جمّع 5928 قطعة شوكولاتة في صفوف من 24 وعُدّ الصفوف.",
        "result_en": "5928 ÷ 24 = 247",
        "result_ar": "5928 ÷ 24 = 247"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-common-div-hard-001",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "18144 ÷ 14 = ?",
    "question_ar": "18144 ÷ 14 = ؟",
    "answer": 1296,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Build up multiples of 14. Key anchor: 14 × 1000 = 14000. Remainder: 18144 − 14000 = 4144.",
            "explanation_ar": "ابنِ مضاعفات 14. نقطة الارتكاز: 14 × 1000 = 14000. الباقي: 18144 − 14000 = 4144."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "14 × 280 = 3920. Remaining after 1280: 4144 − 3920 = 224. Then 14 × 16 = 224.",
            "explanation_ar": "14 × 280 = 3920. الباقي بعد 1280: 4144 − 3920 = 224. ثم 14 × 16 = 224."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total quotient = 1000 + 280 + 16 = 1296.",
            "explanation_ar": "الحاصل الكلي = 1000 + 280 + 16 = 1296."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "18144 ÷ 14 = 1296. Check: 1296 × 14 = 18144. ✓",
            "explanation_ar": "18144 ÷ 14 = 1296. تحقق: 1296 × 14 = 18144. ✓"
          }
        ],
        "hint_en": "Climb: 14×1000=14000, then 14×280=3920, then 14×16=224.",
        "hint_ar": "تسلَّق: 14×1000=14000، ثم 14×280=3920، ثم 14×16=224.",
        "result_en": "18144 ÷ 14 = 1296",
        "result_ar": "18144 ÷ 14 = 1296"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 18144 into parts each divisible by 14: 14000 + 4144.",
            "explanation_ar": "قسّم 18144 إلى أجزاء كل منها قابل للقسمة على 14: 14000 + 4144."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "14000 ÷ 14 = 1000 and 4144 ÷ 14 = 296.",
            "explanation_ar": "14000 ÷ 14 = 1000 و 4144 ÷ 14 = 296."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 1000 + 296 = 1296.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 1000 + 296 = 1296."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "1296 × 14 = 18144. ✓ The answer is 1296.",
            "explanation_ar": "1296 × 14 = 18144. ✓ الجواب هو 1296."
          }
        ],
        "hint_en": "Split 18144 into 14000 + 4144; both divide evenly by 14.",
        "hint_ar": "قسّم 18144 إلى 14000 + 4144؛ كلاهما يُقسَم تماماً على 14.",
        "result_en": "18144 ÷ 14 = 1296",
        "result_ar": "18144 ÷ 14 = 1296"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A stadium arranges 18144 seats into exactly 14 equal sections.",
            "explanation_ar": "ملعب رياضي يرتّب 18144 مقعداً في 14 قطاعاً متساوياً تماماً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 14 blocks. First assign 1000 seats each (fills 14000 seats), leaving 4144.",
            "explanation_ar": "ارسم 14 كتلة. خصّص أولاً 1000 مقعد لكل منها (يملأ 14000 مقعد)، ويبقى 4144."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "The leftover 4144 seats spread over 14 sections gives 4144 ÷ 14 = 296 extra seats per section.",
            "explanation_ar": "توزيع الـ 4144 مقعداً المتبقية على 14 قطاعاً يعطي 4144 ÷ 14 = 296 مقعداً إضافياً لكل قطاع."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each section has 1000 + 296 = 1296 seats. 14 × 1296 = 18144. ✓",
            "explanation_ar": "كل قطاع يحتوي على 1000 + 296 = 1296 مقعداً. 14 × 1296 = 18144. ✓"
          }
        ],
        "hint_en": "Imagine 18144 seats arranged equally in 14 stadium sections.",
        "hint_ar": "تخيّل 18144 مقعداً مرتَّبة بالتساوي في 14 قطاعاً بالملعب.",
        "result_en": "18144 ÷ 14 = 1296",
        "result_ar": "18144 ÷ 14 = 1296"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-common-div-hard-002",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "24696 ÷ 18 = ?",
    "question_ar": "24696 ÷ 18 = ؟",
    "answer": 1372,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Build up multiples of 18. Key anchor: 18 × 1000 = 18000. Remainder: 24696 − 18000 = 6696.",
            "explanation_ar": "ابنِ مضاعفات 18. نقطة الارتكاز: 18 × 1000 = 18000. الباقي: 24696 − 18000 = 6696."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "18 × 300 = 5400. Remaining: 6696 − 5400 = 1296. Then 18 × 72 = 1296.",
            "explanation_ar": "18 × 300 = 5400. الباقي: 6696 − 5400 = 1296. ثم 18 × 72 = 1296."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Total quotient = 1000 + 300 + 72 = 1372.",
            "explanation_ar": "الحاصل الكلي = 1000 + 300 + 72 = 1372."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "24696 ÷ 18 = 1372. Check: 1372 × 18 = 24696. ✓",
            "explanation_ar": "24696 ÷ 18 = 1372. تحقق: 1372 × 18 = 24696. ✓"
          }
        ],
        "hint_en": "Climb: 18×1000=18000, then 18×300=5400, then 18×72=1296.",
        "hint_ar": "تسلَّق: 18×1000=18000، ثم 18×300=5400، ثم 18×72=1296.",
        "result_en": "24696 ÷ 18 = 1372",
        "result_ar": "24696 ÷ 18 = 1372"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 24696 into parts each divisible by 18: 18000 + 6696.",
            "explanation_ar": "قسّم 24696 إلى أجزاء كل منها قابل للقسمة على 18: 18000 + 6696."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "18000 ÷ 18 = 1000 and 6696 ÷ 18 = 372.",
            "explanation_ar": "18000 ÷ 18 = 1000 و 6696 ÷ 18 = 372."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 1000 + 372 = 1372.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 1000 + 372 = 1372."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "1372 × 18 = 24696. ✓ The answer is 1372.",
            "explanation_ar": "1372 × 18 = 24696. ✓ الجواب هو 1372."
          }
        ],
        "hint_en": "Split 24696 into 18000 + 6696; both divide evenly by 18.",
        "hint_ar": "قسّم 24696 إلى 18000 + 6696؛ كلاهما يُقسَم تماماً على 18.",
        "result_en": "24696 ÷ 18 = 1372",
        "result_ar": "24696 ÷ 18 = 1372"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A printer prints 24696 pages and bundles them into sets of 18 pages each.",
            "explanation_ar": "طابعة تطبع 24696 صفحة وتُجمّعها في حزم من 18 صفحة لكل منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Picture a long shelf of 24696 pages grouped into stacks of 18. Start with 1000 stacks (18000 pages).",
            "explanation_ar": "تخيّل رفاً طويلاً من 24696 صفحة مُجمَّعة في رزم من 18. ابدأ بـ 1000 رزمة (18000 صفحة)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After the first 1000 stacks, 6696 pages remain. These form 6696 ÷ 18 = 372 more stacks.",
            "explanation_ar": "بعد أول 1000 رزمة، تبقى 6696 صفحة. تُشكّل هذه 6696 ÷ 18 = 372 رزمة إضافية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Total stacks = 1000 + 372 = 1372. 1372 × 18 = 24696 pages. ✓",
            "explanation_ar": "إجمالي الرزم = 1000 + 372 = 1372. 1372 × 18 = 24696 صفحة. ✓"
          }
        ],
        "hint_en": "Group 24696 pages into bundles of 18 and count the bundles.",
        "hint_ar": "جمّع 24696 صفحة في حزم من 18 وعُدّ الحزم.",
        "result_en": "24696 ÷ 18 = 1372",
        "result_ar": "24696 ÷ 18 = 1372"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-common-div-hard-003",
    "grade": 6,
    "bank": "common",
    "category": "Division",
    "level": "Hard",
    "question_en": "32175 ÷ 25 = ?",
    "question_ar": "32175 ÷ 25 = ؟",
    "answer": 1287,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Use the rule: ÷ 25 equals × 4 then ÷ 100. Multiply 32175 by 4.",
            "explanation_ar": "استخدم القاعدة: ÷ 25 تعني × 4 ثم ÷ 100. اضرب 32175 في 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "32175 × 4 = 128700.",
            "explanation_ar": "32175 × 4 = 128700."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "128700 ÷ 100 = 1287.",
            "explanation_ar": "128700 ÷ 100 = 1287."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "32175 ÷ 25 = 1287. Check: 1287 × 25 = 32175. ✓",
            "explanation_ar": "32175 ÷ 25 = 1287. تحقق: 1287 × 25 = 32175. ✓"
          }
        ],
        "hint_en": "÷ 25 = × 4 then ÷ 100. So 32175 × 4 = 128700, then ÷ 100 = 1287.",
        "hint_ar": "÷ 25 = × 4 ثم ÷ 100. إذن 32175 × 4 = 128700، ثم ÷ 100 = 1287.",
        "result_en": "32175 ÷ 25 = 1287",
        "result_ar": "32175 ÷ 25 = 1287"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 32175 into parts each divisible by 25: 25000 + 7175.",
            "explanation_ar": "قسّم 32175 إلى أجزاء كل منها قابل للقسمة على 25: 25000 + 7175."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25000 ÷ 25 = 1000 and 7175 ÷ 25 = 287.",
            "explanation_ar": "25000 ÷ 25 = 1000 و 7175 ÷ 25 = 287."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Add the partial quotients: 1000 + 287 = 1287.",
            "explanation_ar": "اجمع الحاصلين الجزئيين: 1000 + 287 = 1287."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "1287 × 25 = 32175. ✓ The answer is 1287.",
            "explanation_ar": "1287 × 25 = 32175. ✓ الجواب هو 1287."
          }
        ],
        "hint_en": "Split 32175 into 25000 + 7175; both divide evenly by 25.",
        "hint_ar": "قسّم 32175 إلى 25000 + 7175؛ كلاهما يُقسَم تماماً على 25.",
        "result_en": "32175 ÷ 25 = 1287",
        "result_ar": "32175 ÷ 25 = 1287"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "A charity distributes 32175 meals equally across 25 neighbourhoods.",
            "explanation_ar": "جمعية خيرية توزّع 32175 وجبة بالتساوي على 25 حيّاً سكنياً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 25 equal sections. First assign 1000 meals each, using 25000 meals, leaving 7175.",
            "explanation_ar": "ارسم 25 قطاعاً متساوياً. خصّص أولاً 1000 وجبة لكل منها، مستخدماً 25000 وجبة، ويبقى 7175."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Distributing 7175 remaining meals across 25 neighbourhoods gives 7175 ÷ 25 = 287 extra meals each.",
            "explanation_ar": "توزيع 7175 وجبة متبقية على 25 حيّاً يعطي 7175 ÷ 25 = 287 وجبة إضافية لكل حي."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Each neighbourhood receives 1000 + 287 = 1287 meals. 25 × 1287 = 32175. ✓",
            "explanation_ar": "يستقبل كل حي 1000 + 287 = 1287 وجبة. 25 × 1287 = 32175. ✓"
          }
        ],
        "hint_en": "Picture 32175 meals shared equally across 25 neighbourhoods.",
        "hint_ar": "تخيّل توزيع 32175 وجبة بالتساوي على 25 حيّاً.",
        "result_en": "32175 ÷ 25 = 1287",
        "result_ar": "32175 ÷ 25 = 1287"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-common-div-hard-003",
      "upper_grade_equivalent": "g7-common-div-easy-001",
      "fun_fact_tag": "division"
    }
  },
  {
    "id": "g6-specific-ratio-easy-001",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Easy",
    "question_en": "The ratio of boys to girls is 2:3. There are 10 boys. How many girls? = ?",
    "question_ar": "نسبة الأولاد إلى البنات هي 2:3. عدد الأولاد 10. كم عدد البنات؟ = ؟",
    "answer": 15,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The ratio boys:girls = 2:3. We know boys = 10. The boys part of the ratio is 2.",
            "explanation_ar": "نسبة الأولاد إلى البنات = 2:3. نعلم أن عدد الأولاد = 10. جزء الأولاد في النسبة هو 2."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the unit value: 10 ÷ 2 = 5. Every '1 part' of the ratio equals 5 students.",
            "explanation_ar": "أوجد قيمة الوحدة: 10 ÷ 2 = 5. كل 'جزء واحد' من النسبة يساوي 5 طلاب."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Girls have 3 parts. Multiply: 3 × 5 = 15.",
            "explanation_ar": "للبنات 3 أجزاء. اضرب: 3 × 5 = 15."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There are 15 girls. Check: 10:15 = 2:3 ✓",
            "explanation_ar": "عدد البنات هو 15. تحقق: 10:15 = 2:3 ✓"
          }
        ],
        "hint_en": "Divide the known value by its ratio part to find the unit value, then multiply by the other ratio part.",
        "hint_ar": "اقسم القيمة المعلومة على جزئها في النسبة لتجد قيمة الوحدة، ثم اضرب في الجزء الآخر.",
        "result_en": "There are 15 girls.",
        "result_ar": "عدد البنات هو 15."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "The ratio 2:3 has two parts: boys (2) and girls (3). Boys = 10 is our known quantity.",
            "explanation_ar": "النسبة 2:3 لها جزآن: الأولاد (2) والبنات (3). الأولاد = 10 هي الكمية المعلومة."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "One unit = 10 ÷ 2 = 5. Now apply to girls: 3 units = 3 × 5 = 15.",
            "explanation_ar": "وحدة واحدة = 10 ÷ 2 = 5. طبّق على البنات: 3 وحدات = 3 × 5 = 15."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Boys = 10, Girls = 15. Total = 25 students.",
            "explanation_ar": "الأولاد = 10، البنات = 15. الإجمالي = 25 طالباً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "10:15 simplifies to 2:3. Confirmed — girls = 15.",
            "explanation_ar": "10:15 تُبسَّط إلى 2:3. تأكد — البنات = 15."
          }
        ],
        "hint_en": "Find how much one ratio unit is worth by dividing 10 by 2.",
        "hint_ar": "أوجد قيمة وحدة النسبة الواحدة بقسمة 10 على 2.",
        "result_en": "There are 15 girls.",
        "result_ar": "عدد البنات هو 15."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a classroom. Boys fill 2 equal boxes, girls fill 3 equal boxes. Boys total = 10.",
            "explanation_ar": "تخيّل فصلاً دراسياً. الأولاد يملؤون مربعين متساويين، والبنات يملؤون 3 مربعات متساوية. مجموع الأولاد = 10."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 2 boxes labeled 'B' each holding 5, and 3 boxes labeled 'G'. Boys: [5][5] = 10.",
            "explanation_ar": "ارسم مربعين بعنوان 'أ' يحتوي كل منهما على 5، و3 مربعات بعنوان 'ب'. الأولاد: [5][5] = 10."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box = 5. Girls have 3 boxes: [5][5][5] = 15.",
            "explanation_ar": "كل مربع = 5. للبنات 3 مربعات: [5][5][5] = 15."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Reading the 3 girls' boxes gives 15. The answer is 15 girls.",
            "explanation_ar": "قراءة مربعات البنات الثلاث تعطي 15. الإجابة هي 15 بنتاً."
          }
        ],
        "hint_en": "Draw boxes for each ratio part and fill in the known boxes first.",
        "hint_ar": "ارسم مربعات لكل جزء من النسبة واملأ المربعات المعلومة أولاً.",
        "result_en": "There are 15 girls.",
        "result_ar": "عدد البنات هو 15."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-ratio-easy-002",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Easy",
    "question_en": "A bag has red and blue marbles in the ratio 5:2. There are 20 red marbles. How many blue marbles? = ?",
    "question_ar": "تحتوي حقيبة على كرات حمراء وزرقاء بنسبة 5:2. عدد الكرات الحمراء 20. كم عدد الكرات الزرقاء؟ = ؟",
    "answer": 8,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Ratio red:blue = 5:2. Red = 20. The red part of the ratio is 5.",
            "explanation_ar": "نسبة الحمراء إلى الزرقاء = 5:2. الحمراء = 20. جزء الحمراء في النسبة هو 5."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Unit value: 20 ÷ 5 = 4. One ratio part = 4 marbles.",
            "explanation_ar": "قيمة الوحدة: 20 ÷ 5 = 4. جزء نسبة واحد = 4 كرات."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Blue has 2 parts: 2 × 4 = 8.",
            "explanation_ar": "الزرقاء لها جزآن: 2 × 4 = 8."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "There are 8 blue marbles. Check: 20:8 = 5:2 ✓",
            "explanation_ar": "عدد الكرات الزرقاء هو 8. تحقق: 20:8 = 5:2 ✓"
          }
        ],
        "hint_en": "Divide 20 by 5 to find the unit value, then multiply by 2 for blue.",
        "hint_ar": "اقسم 20 على 5 لتجد قيمة الوحدة، ثم اضرب في 2 للزرقاء.",
        "result_en": "There are 8 blue marbles.",
        "result_ar": "عدد الكرات الزرقاء هو 8."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Ratio 5:2 — red gets 5 parts, blue gets 2 parts. Red = 20 marbles.",
            "explanation_ar": "النسبة 5:2 — الحمراء تحصل على 5 أجزاء، الزرقاء تحصل على جزأين. الحمراء = 20 كرة."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 part = 20 ÷ 5 = 4. Blue = 2 parts = 2 × 4 = 8.",
            "explanation_ar": "1 جزء = 20 ÷ 5 = 4. الزرقاء = جزآن = 2 × 4 = 8."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Red = 20, Blue = 8. Total = 28 marbles.",
            "explanation_ar": "الحمراء = 20، الزرقاء = 8. الإجمالي = 28 كرة."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "20:8 = 5:2. Confirmed — blue = 8.",
            "explanation_ar": "20:8 = 5:2. تأكد — الزرقاء = 8."
          }
        ],
        "hint_en": "One unit of the ratio = 20 ÷ 5 = 4 marbles.",
        "hint_ar": "وحدة نسبة واحدة = 20 ÷ 5 = 4 كرات.",
        "result_en": "There are 8 blue marbles.",
        "result_ar": "عدد الكرات الزرقاء هو 8."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a bag with 5 groups of red marbles and 2 groups of blue marbles, all groups equal in size.",
            "explanation_ar": "تخيّل حقيبة بها 5 مجموعات من الكرات الحمراء و2 مجموعتان من الكرات الزرقاء، جميع المجموعات متساوية الحجم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 5 red boxes and 2 blue boxes. The 5 red boxes total 20, so each box = 4.",
            "explanation_ar": "ارسم 5 مربعات حمراء و2 مربعتين زرقاوين. المربعات الحمراء الخمسة مجموعها 20، إذن كل مربع = 4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box = 4. The 2 blue boxes: [4][4] = 8.",
            "explanation_ar": "كل مربع = 4. المربعتان الزرقاوان: [4][4] = 8."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The 2 blue boxes give 8. There are 8 blue marbles.",
            "explanation_ar": "المربعتان الزرقاوان تعطيان 8. عدد الكرات الزرقاء 8."
          }
        ],
        "hint_en": "Draw 5 equal boxes for red (total 20) and 2 equal boxes for blue — each box holds the same amount.",
        "hint_ar": "ارسم 5 مربعات متساوية للحمراء (المجموع 20) و2 مربعتين متساويتين للزرقاء — كل مربع يحمل نفس الكمية.",
        "result_en": "There are 8 blue marbles.",
        "result_ar": "عدد الكرات الزرقاء هو 8."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-ratio-easy-003",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Easy",
    "question_en": "A paint mix uses yellow and green in the ratio 3:1. If you use 18 ml of yellow, how many ml of green? = ?",
    "question_ar": "خلطة طلاء تستخدم الأصفر والأخضر بنسبة 3:1. إذا استخدمت 18 مل من الأصفر، كم مل من الأخضر؟ = ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Ratio yellow:green = 3:1. Yellow = 18 ml. Yellow's ratio part is 3.",
            "explanation_ar": "نسبة الأصفر إلى الأخضر = 3:1. الأصفر = 18 مل. جزء الأصفر في النسبة هو 3."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Unit value: 18 ÷ 3 = 6. One part = 6 ml.",
            "explanation_ar": "قيمة الوحدة: 18 ÷ 3 = 6. جزء واحد = 6 مل."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Green has 1 part: 1 × 6 = 6 ml.",
            "explanation_ar": "الأخضر له جزء واحد: 1 × 6 = 6 مل."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "You need 6 ml of green. Check: 18:6 = 3:1 ✓",
            "explanation_ar": "تحتاج إلى 6 مل من الأخضر. تحقق: 18:6 = 3:1 ✓"
          }
        ],
        "hint_en": "Divide 18 by 3 to find one unit, then that one unit IS the amount of green.",
        "hint_ar": "اقسم 18 على 3 لتجد وحدة واحدة، ثم تلك الوحدة الواحدة هي كمية الأخضر.",
        "result_en": "You need 6 ml of green paint.",
        "result_ar": "تحتاج إلى 6 مل من الطلاء الأخضر."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Ratio 3:1 — yellow gets 3 parts, green gets 1 part. Yellow = 18 ml.",
            "explanation_ar": "النسبة 3:1 — الأصفر يأخذ 3 أجزاء، الأخضر يأخذ جزءاً واحداً. الأصفر = 18 مل."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 part = 18 ÷ 3 = 6 ml. Green = 1 part = 6 ml.",
            "explanation_ar": "1 جزء = 18 ÷ 3 = 6 مل. الأخضر = جزء واحد = 6 مل."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Yellow = 18 ml, Green = 6 ml. Total mix = 24 ml.",
            "explanation_ar": "الأصفر = 18 مل، الأخضر = 6 مل. مجموع الخلطة = 24 مل."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "18:6 = 3:1. Confirmed — green = 6 ml.",
            "explanation_ar": "18:6 = 3:1. تأكد — الأخضر = 6 مل."
          }
        ],
        "hint_en": "Since the ratio is 3:1, green is exactly one-third of the yellow amount.",
        "hint_ar": "بما أن النسبة هي 3:1، فإن الأخضر هو بالضبط ثلث كمية الأصفر.",
        "result_en": "You need 6 ml of green paint.",
        "result_ar": "تحتاج إلى 6 مل من الطلاء الأخضر."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a paint can. For every 3 equal scoops of yellow, you add 1 equal scoop of green.",
            "explanation_ar": "تخيّل علبة طلاء. لكل 3 ملاعق متساوية من الأصفر، تضيف ملعقة واحدة متساوية من الأخضر."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 3 yellow boxes and 1 green box, all equal. Yellow: [6][6][6] = 18 ml.",
            "explanation_ar": "ارسم 3 مربعات صفراء ومربعاً أخضراً واحداً، جميعها متساوية. الأصفر: [6][6][6] = 18 مل."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box = 6 ml. The 1 green box: [6] = 6 ml.",
            "explanation_ar": "كل مربع = 6 مل. المربع الأخضر الواحد: [6] = 6 مل."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The single green box is 6 ml. You need 6 ml of green.",
            "explanation_ar": "المربع الأخضر الواحد يساوي 6 مل. تحتاج إلى 6 مل من الأخضر."
          }
        ],
        "hint_en": "Spread 18 ml equally across 3 yellow boxes — each box is also the size of the 1 green box.",
        "hint_ar": "وزّع 18 مل بالتساوي على 3 مربعات صفراء — كل مربع هو أيضاً حجم المربع الأخضر الواحد.",
        "result_en": "You need 6 ml of green paint.",
        "result_ar": "تحتاج إلى 6 مل من الطلاء الأخضر."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-ratio-medium-001",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Medium",
    "question_en": "Share 40 sweets between Ali and Sara in the ratio 3:5. How many sweets does Sara get? = ?",
    "question_ar": "وزّع 40 حلوى بين علي وسارة بنسبة 3:5. كم حلوى تحصل سارة؟ = ؟",
    "answer": 25,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Total parts = 3 + 5 = 8. Total sweets = 40. Sara has 5 parts.",
            "explanation_ar": "مجموع الأجزاء = 3 + 5 = 8. مجموع الحلوى = 40. سارة تملك 5 أجزاء."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Unit value: 40 ÷ 8 = 5. Each part = 5 sweets.",
            "explanation_ar": "قيمة الوحدة: 40 ÷ 8 = 5. كل جزء = 5 حلويات."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sara's share = 5 parts × 5 sweets = 25 sweets.",
            "explanation_ar": "نصيب سارة = 5 أجزاء × 5 حلويات = 25 حلوى."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Sara gets 25 sweets, Ali gets 15. Check: 15 + 25 = 40 ✓",
            "explanation_ar": "سارة تحصل على 25 حلوى، علي يحصل على 15. تحقق: 15 + 25 = 40 ✓"
          }
        ],
        "hint_en": "Add ratio parts (3+5=8), divide total by 8 for the unit value, then multiply by Sara's part (5).",
        "hint_ar": "أضف أجزاء النسبة (3+5=8)، اقسم الإجمالي على 8 لإيجاد قيمة الوحدة، ثم اضرب في جزء سارة (5).",
        "result_en": "Sara gets 25 sweets.",
        "result_ar": "تحصل سارة على 25 حلوى."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Ratio 3:5. Total parts = 3 + 5 = 8. We are sharing 40 sweets.",
            "explanation_ar": "النسبة 3:5. مجموع الأجزاء = 3 + 5 = 8. نوزّع 40 حلوى."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 part = 40 ÷ 8 = 5 sweets. Ali: 3 × 5 = 15. Sara: 5 × 5 = 25.",
            "explanation_ar": "1 جزء = 40 ÷ 8 = 5 حلويات. علي: 3 × 5 = 15. سارة: 5 × 5 = 25."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "15 + 25 = 40 sweets total. Accounts for all sweets.",
            "explanation_ar": "15 + 25 = 40 حلوى إجمالاً. يحسب جميع الحلويات."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "15:25 = 3:5. Confirmed — Sara gets 25.",
            "explanation_ar": "15:25 = 3:5. تأكد — سارة تحصل على 25."
          }
        ],
        "hint_en": "The total 40 splits into 8 equal parts. Find one part first.",
        "hint_ar": "إجمالي 40 ينقسم إلى 8 أجزاء متساوية. أوجد جزءاً واحداً أولاً.",
        "result_en": "Sara gets 25 sweets.",
        "result_ar": "تحصل سارة على 25 حلوى."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine 40 sweets on a table. Ali takes 3 handfuls, Sara takes 5 handfuls — each handful the same size.",
            "explanation_ar": "تخيّل 40 حلوى على طاولة. علي يأخذ 3 حفنات، سارة تأخذ 5 حفنات — كل حفنة بنفس الحجم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 8 equal boxes in a row (3 for Ali, 5 for Sara). Total = 40, so each box = 40 ÷ 8 = 5.",
            "explanation_ar": "ارسم 8 مربعات متساوية في صف (3 لعلي، 5 لسارة). الإجمالي = 40، إذن كل مربع = 40 ÷ 8 = 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Sara's 5 boxes: [5][5][5][5][5] = 25 sweets.",
            "explanation_ar": "مربعات سارة الخمسة: [5][5][5][5][5] = 25 حلوى."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Sara's 5 boxes hold 25 sweets in total. The answer is 25.",
            "explanation_ar": "مربعات سارة الخمسة تحتوي على 25 حلوى إجمالاً. الإجابة هي 25."
          }
        ],
        "hint_en": "Draw 8 equal boxes (3+5), fill all 8 with 40 total, then count Sara's 5 boxes.",
        "hint_ar": "ارسم 8 مربعات متساوية (3+5)، امل الثمانية بإجمالي 40، ثم عدّ مربعات سارة الخمسة.",
        "result_en": "Sara gets 25 sweets.",
        "result_ar": "تحصل سارة على 25 حلوى."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-ratio-medium-002",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Medium",
    "question_en": "A recipe uses flour and sugar in the ratio 4:3. If you use 24 g of flour, how many grams of sugar? = ?",
    "question_ar": "وصفة تستخدم الدقيق والسكر بنسبة 4:3. إذا استخدمت 24 جرام من الدقيق، كم جراماً من السكر؟ = ؟",
    "answer": 18,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Ratio flour:sugar = 4:3. Flour = 24 g. Flour's ratio part is 4.",
            "explanation_ar": "نسبة الدقيق إلى السكر = 4:3. الدقيق = 24 جرام. جزء الدقيق في النسبة هو 4."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Unit value: 24 ÷ 4 = 6. One ratio part = 6 grams.",
            "explanation_ar": "قيمة الوحدة: 24 ÷ 4 = 6. جزء نسبة واحد = 6 جرامات."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sugar has 3 parts: 3 × 6 = 18 g.",
            "explanation_ar": "السكر له 3 أجزاء: 3 × 6 = 18 جرام."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "You need 18 g of sugar. Check: 24:18 = 4:3 ✓",
            "explanation_ar": "تحتاج إلى 18 جرام من السكر. تحقق: 24:18 = 4:3 ✓"
          }
        ],
        "hint_en": "Divide 24 by 4 to find one unit (= 6 g), then multiply by sugar's 3 parts.",
        "hint_ar": "اقسم 24 على 4 لتجد وحدة واحدة (= 6 جرام)، ثم اضرب في 3 أجزاء السكر.",
        "result_en": "You need 18 g of sugar.",
        "result_ar": "تحتاج إلى 18 جرام من السكر."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Ratio 4:3 — flour has 4 parts, sugar has 3 parts. Flour = 24 g.",
            "explanation_ar": "النسبة 4:3 — الدقيق له 4 أجزاء، السكر له 3 أجزاء. الدقيق = 24 جرام."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 part = 24 ÷ 4 = 6 g. Sugar = 3 parts = 3 × 6 = 18 g.",
            "explanation_ar": "1 جزء = 24 ÷ 4 = 6 جرام. السكر = 3 أجزاء = 3 × 6 = 18 جرام."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Flour = 24 g, Sugar = 18 g. Total dry ingredients = 42 g.",
            "explanation_ar": "الدقيق = 24 جرام، السكر = 18 جرام. إجمالي المكونات الجافة = 42 جرام."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "24:18 = 4:3. Confirmed — sugar = 18 g.",
            "explanation_ar": "24:18 = 4:3. تأكد — السكر = 18 جرام."
          }
        ],
        "hint_en": "Divide flour (24 g) by its ratio part (4) to find the value of one part.",
        "hint_ar": "اقسم الدقيق (24 جرام) على جزئه في النسبة (4) لإيجاد قيمة جزء واحد.",
        "result_en": "You need 18 g of sugar.",
        "result_ar": "تحتاج إلى 18 جرام من السكر."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a kitchen scale. The flour fills 4 equal scoops and the sugar fills 3 equal scoops.",
            "explanation_ar": "تخيّل ميزان مطبخ. الدقيق يملأ 4 ملاعق متساوية والسكر يملأ 3 ملاعق متساوية."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 4 flour boxes and 3 sugar boxes. Flour: [6][6][6][6] = 24 g, so each box = 6.",
            "explanation_ar": "ارسم 4 مربعات للدقيق و3 مربعات للسكر. الدقيق: [6][6][6][6] = 24 جرام، إذن كل مربع = 6."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box = 6 g. Sugar has 3 boxes: [6][6][6] = 18 g.",
            "explanation_ar": "كل مربع = 6 جرام. السكر له 3 مربعات: [6][6][6] = 18 جرام."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "3 sugar boxes × 6 g = 18 g of sugar needed.",
            "explanation_ar": "3 مربعات سكر × 6 جرام = 18 جرام من السكر مطلوبة."
          }
        ],
        "hint_en": "Spread 24 g across 4 equal flour boxes (6 g each), then count 3 sugar boxes of the same size.",
        "hint_ar": "وزّع 24 جرام على 4 مربعات دقيق متساوية (6 جرام لكل منها)، ثم عدّ 3 مربعات سكر بنفس الحجم.",
        "result_en": "You need 18 g of sugar.",
        "result_ar": "تحتاج إلى 18 جرام من السكر."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-ratio-medium-003",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Medium",
    "question_en": "A class of 35 students has boys and girls in the ratio 4:3. How many boys are in the class? = ?",
    "question_ar": "صف من 35 طالباً فيه أولاد وبنات بنسبة 4:3. كم عدد الأولاد في الصف؟ = ؟",
    "answer": 20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Ratio boys:girls = 4:3. Total parts = 4 + 3 = 7. Total students = 35. Boys have 4 parts.",
            "explanation_ar": "نسبة الأولاد إلى البنات = 4:3. مجموع الأجزاء = 4 + 3 = 7. إجمالي الطلاب = 35. للأولاد 4 أجزاء."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Unit value: 35 ÷ 7 = 5. Each part = 5 students.",
            "explanation_ar": "قيمة الوحدة: 35 ÷ 7 = 5. كل جزء = 5 طلاب."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Boys = 4 parts × 5 = 20 students.",
            "explanation_ar": "الأولاد = 4 أجزاء × 5 = 20 طالباً."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Boys = 20, Girls = 15. Check: 20 + 15 = 35 ✓ and 20:15 = 4:3 ✓",
            "explanation_ar": "الأولاد = 20، البنات = 15. تحقق: 20 + 15 = 35 ✓ و20:15 = 4:3 ✓"
          }
        ],
        "hint_en": "Total parts = 4+3 = 7. Divide 35 by 7 for the unit, then multiply by 4 for boys.",
        "hint_ar": "مجموع الأجزاء = 4+3 = 7. اقسم 35 على 7 للوحدة، ثم اضرب في 4 للأولاد.",
        "result_en": "There are 20 boys in the class.",
        "result_ar": "عدد الأولاد في الصف 20."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Ratio 4:3, total 7 parts across 35 students.",
            "explanation_ar": "النسبة 4:3، إجمالي 7 أجزاء موزعة على 35 طالباً."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "1 part = 35 ÷ 7 = 5. Boys = 4 × 5 = 20. Girls = 3 × 5 = 15.",
            "explanation_ar": "1 جزء = 35 ÷ 7 = 5. الأولاد = 4 × 5 = 20. البنات = 3 × 5 = 15."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "20 + 15 = 35 — all students accounted for.",
            "explanation_ar": "20 + 15 = 35 — جميع الطلاب محسوبون."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "20:15 = 4:3. Confirmed — boys = 20.",
            "explanation_ar": "20:15 = 4:3. تأكد — الأولاد = 20."
          }
        ],
        "hint_en": "Split 35 into 7 equal parts first, then give 4 of those parts to boys.",
        "hint_ar": "قسّم 35 إلى 7 أجزاء متساوية أولاً، ثم أعطِ 4 من تلك الأجزاء للأولاد.",
        "result_en": "There are 20 boys in the class.",
        "result_ar": "عدد الأولاد في الصف 20."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture 35 students entering a classroom. They form 7 equal groups — 4 groups of boys and 3 groups of girls.",
            "explanation_ar": "تخيّل 35 طالباً يدخلون فصلاً. يُكوّنون 7 مجموعات متساوية — 4 مجموعات من الأولاد و3 مجموعات من البنات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 7 equal boxes (4 labelled 'B', 3 labelled 'G'). 35 ÷ 7 = 5, so each box holds 5.",
            "explanation_ar": "ارسم 7 مربعات متساوية (4 بعنوان 'أ'، 3 بعنوان 'ب'). 35 ÷ 7 = 5، إذن كل مربع يحمل 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Boys' 4 boxes: [5][5][5][5] = 20 students.",
            "explanation_ar": "مربعات الأولاد الأربعة: [5][5][5][5] = 20 طالباً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "4 boxes × 5 students = 20 boys. The answer is 20.",
            "explanation_ar": "4 مربعات × 5 طلاب = 20 ولداً. الإجابة هي 20."
          }
        ],
        "hint_en": "Draw 7 equal boxes for the whole class of 35 (5 per box), then shade the 4 boys' boxes.",
        "hint_ar": "ارسم 7 مربعات متساوية للصف الكامل من 35 (5 في كل مربع)، ثم ظلّل مربعات الأولاد الأربعة.",
        "result_en": "There are 20 boys in the class.",
        "result_ar": "عدد الأولاد في الصف 20."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-ratio-hard-001",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Hard",
    "question_en": "3 workers can paint a fence in 12 days. How many days would 4 workers take to paint the same fence? = ?",
    "question_ar": "3 عمال يمكنهم دهن سياج في 12 يوماً. كم يوماً يحتاج 4 عمال لدهن نفس السياج؟ = ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "This is inverse proportion — more workers means fewer days. 3 workers × 12 days gives the total work.",
            "explanation_ar": "هذه نسبة عكسية — عدد أكبر من العمال يعني أياماً أقل. 3 عمال × 12 يوماً تعطي إجمالي العمل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Total work = 3 × 12 = 36 worker-days. This stays constant.",
            "explanation_ar": "إجمالي العمل = 3 × 12 = 36 يوم-عامل. هذا يبقى ثابتاً."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "With 4 workers: days = 36 ÷ 4 = 9 days.",
            "explanation_ar": "مع 4 عمال: الأيام = 36 ÷ 4 = 9 أيام."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "4 workers take 9 days. Check: 4 × 9 = 36 worker-days ✓",
            "explanation_ar": "4 عمال يحتاجون 9 أيام. تحقق: 4 × 9 = 36 يوم-عامل ✓"
          }
        ],
        "hint_en": "Multiply 3 × 12 to get total worker-days, then divide by 4.",
        "hint_ar": "اضرب 3 × 12 للحصول على إجمالي أيام العمل، ثم اقسم على 4.",
        "result_en": "4 workers would take 9 days.",
        "result_ar": "يحتاج 4 عمال إلى 9 أيام."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Recognise inverse proportion: workers × days = constant. Step 1: find the constant.",
            "explanation_ar": "تعرّف على النسبة العكسية: العمال × الأيام = ثابت. الخطوة 1: أوجد الثابت."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Constant = 3 × 12 = 36. For 4 workers: days = 36 ÷ 4 = 9.",
            "explanation_ar": "الثابت = 3 × 12 = 36. لـ4 عمال: الأيام = 36 ÷ 4 = 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4 workers × 9 days = 36 worker-days = same amount of work.",
            "explanation_ar": "4 عمال × 9 أيام = 36 يوم-عامل = نفس كمية العمل."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "3 × 12 = 4 × 9 = 36. Confirmed — 4 workers need 9 days.",
            "explanation_ar": "3 × 12 = 4 × 9 = 36. تأكد — 4 عمال يحتاجون 9 أيام."
          }
        ],
        "hint_en": "In inverse proportion, multiply the two known values (3 × 12 = 36), then divide by the new number of workers.",
        "hint_ar": "في النسبة العكسية، اضرب القيمتين المعلومتين (3 × 12 = 36)، ثم اقسم على عدد العمال الجديد.",
        "result_en": "4 workers would take 9 days.",
        "result_ar": "يحتاج 4 عمال إلى 9 أيام."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture the fence as a rectangle of 36 tiles. 3 workers paint 1 tile each per day, so 3 tiles/day → 12 days.",
            "explanation_ar": "تخيّل السياج كمستطيل من 36 بلاطة. 3 عمال يدهنون بلاطة واحدة كل منهم يومياً، إذن 3 بلاطات/يوم → 12 يوماً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw the fence as a 36-tile grid. With 3 workers: 12 rows of 3. With 4 workers: 9 rows of 4.",
            "explanation_ar": "ارسم السياج كشبكة من 36 بلاطة. مع 3 عمال: 12 صفاً من 3. مع 4 عمال: 9 صفوف من 4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "4 workers cover 4 tiles per day. 36 ÷ 4 = 9 rows = 9 days.",
            "explanation_ar": "4 عمال يغطون 4 بلاطات يومياً. 36 ÷ 4 = 9 صفوف = 9 أيام."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The grid of 36 needs 9 days when shared among 4 workers. Answer: 9 days.",
            "explanation_ar": "شبكة الـ36 تحتاج إلى 9 أيام عند توزيعها على 4 عمال. الإجابة: 9 أيام."
          }
        ],
        "hint_en": "Think of the total job as 36 equal tiles. 4 workers clear 4 tiles a day — how many days to clear all 36?",
        "hint_ar": "فكّر في المهمة الكاملة كـ36 بلاطة متساوية. 4 عمال يُنهون 4 بلاطات يومياً — كم يوماً لإنهاء الـ36؟",
        "result_en": "4 workers would take 9 days.",
        "result_ar": "يحتاج 4 عمال إلى 9 أيام."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-ratio-hard-002",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Hard",
    "question_en": "A car travels 150 km in 3 hours at constant speed. How many km does it travel in 7 hours? = ?",
    "question_ar": "تسير سيارة 150 كم في 3 ساعات بسرعة ثابتة. كم كم تقطع في 7 ساعات؟ = ؟",
    "answer": 350,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Direct proportion — more hours means more km. Known: 150 km in 3 hours.",
            "explanation_ar": "نسبة طردية — ساعات أكثر تعني كيلومترات أكثر. المعلوم: 150 كم في 3 ساعات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Speed (unit rate): 150 ÷ 3 = 50 km per hour.",
            "explanation_ar": "السرعة (معدل الوحدة): 150 ÷ 3 = 50 كم في الساعة."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "In 7 hours: 7 × 50 = 350 km.",
            "explanation_ar": "في 7 ساعات: 7 × 50 = 350 كم."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The car travels 350 km in 7 hours. Check: 350 ÷ 7 = 50 km/h ✓",
            "explanation_ar": "تقطع السيارة 350 كم في 7 ساعات. تحقق: 350 ÷ 7 = 50 كم/ساعة ✓"
          }
        ],
        "hint_en": "Find km per hour first (150 ÷ 3), then multiply by 7.",
        "hint_ar": "أوجد كيلومترات الساعة أولاً (150 ÷ 3)، ثم اضرب في 7.",
        "result_en": "The car travels 350 km in 7 hours.",
        "result_ar": "تقطع السيارة 350 كم في 7 ساعات."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Direct proportion: km ÷ hours = constant speed. Find speed first.",
            "explanation_ar": "نسبة طردية: الكيلومترات ÷ الساعات = سرعة ثابتة. أوجد السرعة أولاً."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Speed = 150 ÷ 3 = 50 km/h. For 7 hours: 50 × 7 = 350 km.",
            "explanation_ar": "السرعة = 150 ÷ 3 = 50 كم/ساعة. لـ7 ساعات: 50 × 7 = 350 كم."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "7 hours at 50 km/h = 350 km total.",
            "explanation_ar": "7 ساعات بسرعة 50 كم/ساعة = 350 كم إجمالاً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "150/3 = 350/7 = 50. Confirmed — 350 km in 7 hours.",
            "explanation_ar": "150/3 = 350/7 = 50. تأكد — 350 كم في 7 ساعات."
          }
        ],
        "hint_en": "Break it into: how far in 1 hour? Then scale up to 7 hours.",
        "hint_ar": "قسّمها إلى: كم المسافة في ساعة واحدة؟ ثم قيّسها لـ7 ساعات.",
        "result_en": "The car travels 350 km in 7 hours.",
        "result_ar": "تقطع السيارة 350 كم في 7 ساعات."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a road. The car covers the same distance every hour — 3 equal segments in 3 hours = 150 km.",
            "explanation_ar": "تخيّل طريقاً. تقطع السيارة نفس المسافة كل ساعة — 3 مقاطع متساوية في 3 ساعات = 150 كم."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 7 equal road segments. The first 3 total 150 km, so each segment = 50 km.",
            "explanation_ar": "ارسم 7 مقاطع طريق متساوية. أول 3 مجموعها 150 كم، إذن كل مقطع = 50 كم."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "7 segments × 50 km = [50][50][50][50][50][50][50] = 350 km.",
            "explanation_ar": "7 مقاطع × 50 كم = [50][50][50][50][50][50][50] = 350 كم."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Extending the road to 7 segments gives 350 km total. Answer: 350 km.",
            "explanation_ar": "تمديد الطريق إلى 7 مقاطع يعطي 350 كم إجمالاً. الإجابة: 350 كم."
          }
        ],
        "hint_en": "Draw 7 equal hourly segments. Label the first 3 as '150 km total' to find each segment, then count all 7.",
        "hint_ar": "ارسم 7 مقاطع ساعية متساوية. سمّ أول 3 بـ'150 كم إجمالاً' لإيجاد كل مقطع، ثم عدّ الـ7 جميعها.",
        "result_en": "The car travels 350 km in 7 hours.",
        "result_ar": "تقطع السيارة 350 كم في 7 ساعات."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-ratio-hard-003",
    "grade": 6,
    "bank": "specific",
    "category": "Ratio & Proportion",
    "level": "Hard",
    "question_en": "Layla and Omar share prize money in the ratio 5:3. Layla receives £40 more than Omar. How much does Omar receive? = ?",
    "question_ar": "تتقاسم ليلى وعمر مكافأة بنسبة 5:3. تحصل ليلى على 40 جنيهاً أكثر من عمر. كم يحصل عمر؟ = ؟",
    "answer": 60,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Ratio 5:3. The difference in parts = 5 − 3 = 2 parts. This difference equals £40.",
            "explanation_ar": "النسبة 5:3. الفرق في الأجزاء = 5 − 3 = 2 جزء. هذا الفرق يساوي 40 جنيهاً."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "2 parts = £40, so 1 part = £40 ÷ 2 = £20.",
            "explanation_ar": "2 جزء = 40 جنيهاً، إذن 1 جزء = 40 ÷ 2 = 20 جنيهاً."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Omar has 3 parts: 3 × £20 = £60.",
            "explanation_ar": "عمر لديه 3 أجزاء: 3 × 20 = 60 جنيهاً."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Omar gets £60, Layla gets £100. Check: 100 − 60 = £40 ✓ and 100:60 = 5:3 ✓",
            "explanation_ar": "عمر يحصل على 60 جنيهاً، ليلى تحصل على 100 جنيه. تحقق: 100 − 60 = 40 جنيه ✓ و100:60 = 5:3 ✓"
          }
        ],
        "hint_en": "The difference of 2 ratio parts equals £40. Find the value of 1 part, then scale Omar's 3 parts.",
        "hint_ar": "الفرق بين 2 جزء من النسبة يساوي 40 جنيهاً. أوجد قيمة جزء واحد، ثم قيّس 3 أجزاء عمر.",
        "result_en": "Omar receives £60.",
        "result_ar": "يحصل عمر على 60 جنيهاً."
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Ratio 5:3. Layla has 5 parts, Omar has 3 parts. The extra amount Layla has = 5 − 3 = 2 parts.",
            "explanation_ar": "النسبة 5:3. ليلى لديها 5 أجزاء، عمر لديه 3 أجزاء. المبلغ الزائد لدى ليلى = 5 − 3 = 2 جزء."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "2 parts = £40 → 1 part = £20. Omar = 3 parts = 3 × £20 = £60.",
            "explanation_ar": "2 جزء = 40 جنيهاً → 1 جزء = 20 جنيهاً. عمر = 3 أجزاء = 3 × 20 = 60 جنيهاً."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Layla = 5 × £20 = £100. Omar = £60. Total = £160.",
            "explanation_ar": "ليلى = 5 × 20 = 100 جنيه. عمر = 60 جنيهاً. الإجمالي = 160 جنيهاً."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "£100 − £60 = £40 ✓ and 100:60 = 5:3 ✓. Omar gets £60.",
            "explanation_ar": "100 − 60 = 40 جنيه ✓ و100:60 = 5:3 ✓. عمر يحصل على 60 جنيهاً."
          }
        ],
        "hint_en": "The £40 difference corresponds to 5−3 = 2 ratio parts. Find what 1 part equals.",
        "hint_ar": "فرق الـ40 جنيهاً يقابل 5−3 = 2 جزء من النسبة. أوجد ما يساويه الجزء الواحد.",
        "result_en": "Omar receives £60.",
        "result_ar": "يحصل عمر على 60 جنيهاً."
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture two stacks of coins — Layla's taller stack (5 layers) and Omar's shorter stack (3 layers). The 2 extra layers in Layla's stack = £40.",
            "explanation_ar": "تخيّل كومتين من العملات — كومة ليلى الأطول (5 طبقات) وكومة عمر الأقصر (3 طبقات). الطبقتان الإضافيتان في كومة ليلى = 40 جنيهاً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw 5 boxes for Layla and 3 boxes for Omar, stacked side by side. Label the top 2 of Layla's stack as '£40 total', so each box = £20.",
            "explanation_ar": "ارسم 5 مربعات لليلى و3 مربعات لعمر، مكدّسة جنباً إلى جنب. سمّ أعلى مربعين من كومة ليلى بـ'40 جنيهاً إجمالاً'، إذن كل مربع = 20 جنيهاً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each box = £20. Omar's 3 boxes: [20][20][20] = £60.",
            "explanation_ar": "كل مربع = 20 جنيهاً. مربعات عمر الثلاثة: [20][20][20] = 60 جنيهاً."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Omar's 3 boxes of £20 each give £60. The answer is £60.",
            "explanation_ar": "مربعات عمر الثلاثة بقيمة 20 جنيهاً كل منها تعطي 60 جنيهاً. الإجابة هي 60 جنيهاً."
          }
        ],
        "hint_en": "The 2 'extra' boxes Layla has over Omar are worth £40 total. Each box = £20. Count Omar's 3 boxes.",
        "hint_ar": "المربعان 'الإضافيان' اللذان تملكهما ليلى زيادة عن عمر تساويان 40 جنيهاً إجمالاً. كل مربع = 20 جنيهاً. عدّ مربعات عمر الثلاثة.",
        "result_en": "Omar receives £60.",
        "result_ar": "يحصل عمر على 60 جنيهاً."
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "ratio_proportion"
    }
  },
  {
    "id": "g6-specific-int-easy-001",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Easy",
    "question_en": "−3 + 7 = ?",
    "question_ar": "−3 + 7 = ؟",
    "answer": 4,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have −3 + 7. The two numbers have opposite signs: −3 is negative and 7 is positive.",
            "explanation_ar": "لدينا −3 + 7. العددان لهما إشارتان متعاكستان: −3 سالب و7 موجب."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the absolute values: |−3| = 3 and |7| = 7. The larger absolute value is 7.",
            "explanation_ar": "أوجد القيم المطلقة: |−3| = 3 و|7| = 7. القيمة المطلقة الأكبر هي 7."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "When signs differ, subtract the smaller absolute value from the larger: 7 − 3 = 4. The result takes the sign of the number with the larger absolute value, which is positive 7.",
            "explanation_ar": "عندما تختلف الإشارات، اطرح القيمة المطلقة الأصغر من الأكبر: 7 − 3 = 4. تأخذ النتيجة إشارة العدد ذي القيمة المطلقة الأكبر، وهو 7 الموجب."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is positive 4. So −3 + 7 = 4.",
            "explanation_ar": "النتيجة هي 4 الموجب. إذن −3 + 7 = 4."
          }
        ],
        "hint_en": "Different signs? Subtract smaller from larger, keep the sign of the bigger number.",
        "hint_ar": "إشارات مختلفة؟ اطرح الأصغر من الأكبر، واحتفظ بإشارة العدد الأكبر.",
        "result_en": "−3 + 7 = 4",
        "result_ar": "−3 + 7 = 4"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 7 into two parts: one part cancels −3, and the rest is the answer. Write 7 = 3 + 4.",
            "explanation_ar": "قسّم 7 إلى جزأين: جزء يلغي −3، والباقي هو الجواب. اكتب 7 = 3 + 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "−3 + 3 = 0 (the negatives cancel). The leftover part is +4.",
            "explanation_ar": "−3 + 3 = 0 (السالبان يلغيان بعضهما). الجزء المتبقي هو +4."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "0 + 4 = 4.",
            "explanation_ar": "0 + 4 = 4."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: −3 + 7. Since 7 > 3 and 7 is positive, the answer is positive: 4. ✓",
            "explanation_ar": "تحقق: −3 + 7. بما أن 7 > 3 وأن 7 موجب، فالجواب موجب: 4. ✓"
          }
        ],
        "hint_en": "Break 7 into 3 + 4 so that 3 cancels the −3, leaving 4.",
        "hint_ar": "قسّم 7 إلى 3 + 4 حتى يلغي 3 العدد −3، ويبقى 4.",
        "result_en": "−3 + 7 = 4",
        "result_ar": "−3 + 7 = 4"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a number line. You start at −3 (3 steps to the left of zero).",
            "explanation_ar": "تخيّل خط أعداد. تبدأ عند −3 (3 خطوات يسار الصفر)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Adding +7 means moving 7 steps to the right on the number line from −3.",
            "explanation_ar": "إضافة +7 تعني التحرك 7 خطوات إلى اليمين على خط الأعداد من −3."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Starting at −3, move right: −3 → −2 → −1 → 0 → 1 → 2 → 3 → 4. After 7 steps you land on 4.",
            "explanation_ar": "ابدأ من −3، تحرك يميناً: −3 → −2 → −1 → 0 → 1 → 2 → 3 → 4. بعد 7 خطوات تصل إلى 4."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Landing on 4 means −3 + 7 = 4.",
            "explanation_ar": "الوقوف عند 4 يعني أن −3 + 7 = 4."
          }
        ],
        "hint_en": "Start at −3 on the number line, jump 7 steps right.",
        "hint_ar": "ابدأ من −3 على خط الأعداد، وقفز 7 خطوات يميناً.",
        "result_en": "−3 + 7 = 4",
        "result_ar": "−3 + 7 = 4"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-int-easy-002",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Easy",
    "question_en": "5 + (−8) = ?",
    "question_ar": "5 + (−8) = ؟",
    "answer": -3,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 5 + (−8). The two numbers have opposite signs: 5 is positive and −8 is negative.",
            "explanation_ar": "لدينا 5 + (−8). العددان لهما إشارتان متعاكستان: 5 موجب و−8 سالب."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the absolute values: |5| = 5 and |−8| = 8. The larger absolute value is 8.",
            "explanation_ar": "أوجد القيم المطلقة: |5| = 5 و|−8| = 8. القيمة المطلقة الأكبر هي 8."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract the smaller absolute value from the larger: 8 − 5 = 3. The result takes the sign of −8 (negative), since 8 > 5.",
            "explanation_ar": "اطرح القيمة المطلقة الأصغر من الأكبر: 8 − 5 = 3. تأخذ النتيجة إشارة −8 (سالبة)، لأن 8 > 5."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is negative 3. So 5 + (−8) = −3.",
            "explanation_ar": "النتيجة هي −3. إذن 5 + (−8) = −3."
          }
        ],
        "hint_en": "Different signs? Subtract 5 from 8, keep the sign of 8 (negative).",
        "hint_ar": "إشارات مختلفة؟ اطرح 5 من 8، واحتفظ بإشارة 8 (السالبة).",
        "result_en": "5 + (−8) = −3",
        "result_ar": "5 + (−8) = −3"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split −8 into two parts: one part cancels +5, and the rest is the answer. Write −8 = −5 + (−3).",
            "explanation_ar": "قسّم −8 إلى جزأين: جزء يلغي +5، والباقي هو الجواب. اكتب −8 = −5 + (−3)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "5 + (−5) = 0. The leftover part is −3.",
            "explanation_ar": "5 + (−5) = 0. الجزء المتبقي هو −3."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "0 + (−3) = −3.",
            "explanation_ar": "0 + (−3) = −3."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 8 > 5 and −8 is negative, so the answer is negative: −3. ✓",
            "explanation_ar": "تحقق: 8 > 5 و−8 سالب، إذن الجواب سالب: −3. ✓"
          }
        ],
        "hint_en": "Break −8 into −5 + (−3) so that −5 cancels the +5, leaving −3.",
        "hint_ar": "قسّم −8 إلى −5 + (−3) حتى يلغي −5 العدد +5، ويبقى −3.",
        "result_en": "5 + (−8) = −3",
        "result_ar": "5 + (−8) = −3"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a number line. You start at 5 (5 steps to the right of zero).",
            "explanation_ar": "تخيّل خط أعداد. تبدأ عند 5 (5 خطوات يمين الصفر)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Adding −8 means moving 8 steps to the left on the number line from 5.",
            "explanation_ar": "إضافة −8 تعني التحرك 8 خطوات إلى اليسار على خط الأعداد من 5."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Starting at 5, move left 8 steps: 5 → 4 → 3 → 2 → 1 → 0 → −1 → −2 → −3. You land on −3.",
            "explanation_ar": "ابدأ من 5، تحرك يساراً 8 خطوات: 5 → 4 → 3 → 2 → 1 → 0 → −1 → −2 → −3. تصل إلى −3."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Landing on −3 means 5 + (−8) = −3.",
            "explanation_ar": "الوقوف عند −3 يعني أن 5 + (−8) = −3."
          }
        ],
        "hint_en": "Start at 5 on the number line, jump 8 steps left — you cross zero and land at −3.",
        "hint_ar": "ابدأ من 5 على خط الأعداد، وقفز 8 خطوات يساراً — ستعبر الصفر وتصل إلى −3.",
        "result_en": "5 + (−8) = −3",
        "result_ar": "5 + (−8) = −3"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-int-easy-003",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Easy",
    "question_en": "−4 − (−6) = ?",
    "question_ar": "−4 − (−6) = ؟",
    "answer": 2,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have −4 − (−6). Subtracting a negative is the same as adding a positive: −4 − (−6) = −4 + 6.",
            "explanation_ar": "لدينا −4 − (−6). طرح سالب يساوي جمع موجب: −4 − (−6) = −4 + 6."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "After converting: −4 + 6. Absolute values are |−4| = 4 and |6| = 6. The larger is 6.",
            "explanation_ar": "بعد التحويل: −4 + 6. القيم المطلقة: |−4| = 4 و|6| = 6. الأكبر هو 6."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Different signs: subtract smaller from larger: 6 − 4 = 2. Take the sign of 6 (positive).",
            "explanation_ar": "إشارات مختلفة: اطرح الأصغر من الأكبر: 6 − 4 = 2. خذ إشارة 6 (موجبة)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The result is positive 2. So −4 − (−6) = 2.",
            "explanation_ar": "النتيجة هي 2 الموجب. إذن −4 − (−6) = 2."
          }
        ],
        "hint_en": "Subtracting a negative flips to addition: −4 − (−6) becomes −4 + 6.",
        "hint_ar": "طرح سالب يتحول إلى جمع: −4 − (−6) تصبح −4 + 6.",
        "result_en": "−4 − (−6) = 2",
        "result_ar": "−4 − (−6) = 2"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Rewrite the subtraction of a negative as addition: −4 − (−6) = −4 + 6.",
            "explanation_ar": "أعد كتابة طرح السالب كجمع: −4 − (−6) = −4 + 6."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "We now have −4 + 6. Split 6 into 4 + 2. Then −4 + 4 = 0.",
            "explanation_ar": "الآن لدينا −4 + 6. قسّم 6 إلى 4 + 2. ثم −4 + 4 = 0."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "0 + 2 = 2.",
            "explanation_ar": "0 + 2 = 2."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "6 > 4 and 6 is positive, so the result is positive 2. ✓",
            "explanation_ar": "6 > 4 و6 موجب، إذن النتيجة هي 2 الموجب. ✓"
          }
        ],
        "hint_en": "Two negatives in a subtraction become a positive. Then solve −4 + 6.",
        "hint_ar": "سالبان في الطرح يصبحان موجباً. ثم احسب −4 + 6.",
        "result_en": "−4 − (−6) = 2",
        "result_ar": "−4 − (−6) = 2"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Start at −4 on the number line. Subtracting a negative means we reverse direction — instead of going left, we go right.",
            "explanation_ar": "ابدأ من −4 على خط الأعداد. طرح سالب يعني عكس الاتجاه — بدلاً من اليسار، نتجه يميناً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "−(−6) flips to +6, so we move 6 steps to the right starting from −4.",
            "explanation_ar": "−(−6) تتحول إلى +6، إذن نتحرك 6 خطوات إلى اليمين ابتداءً من −4."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From −4, move right 6 steps: −4 → −3 → −2 → −1 → 0 → 1 → 2. You land on 2.",
            "explanation_ar": "من −4، تحرك 6 خطوات يميناً: −4 → −3 → −2 → −1 → 0 → 1 → 2. تصل إلى 2."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Landing on 2 confirms −4 − (−6) = 2.",
            "explanation_ar": "الوقوف عند 2 يؤكد أن −4 − (−6) = 2."
          }
        ],
        "hint_en": "Subtracting negative 6 is like adding 6 — jump 6 steps right from −4.",
        "hint_ar": "طرح −6 يشبه إضافة 6 — قفز 6 خطوات يميناً من −4.",
        "result_en": "−4 − (−6) = 2",
        "result_ar": "−4 − (−6) = 2"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-int-med-001",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Medium",
    "question_en": "(−4) × 5 = ?",
    "question_ar": "(−4) × 5 = ؟",
    "answer": -20,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have (−4) × 5. One factor is negative (−4) and the other is positive (5).",
            "explanation_ar": "لدينا (−4) × 5. أحد العاملين سالب (−4) والآخر موجب (5)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute the magnitude: 4 × 5 = 20.",
            "explanation_ar": "احسب القيمة المطلقة: 4 × 5 = 20."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sign rule: negative × positive = negative. So the result is −20.",
            "explanation_ar": "قاعدة الإشارة: سالب × موجب = سالب. إذن النتيجة هي −20."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Attach the negative sign to the magnitude: (−4) × 5 = −20.",
            "explanation_ar": "أضف الإشارة السالبة إلى القيمة المطلقة: (−4) × 5 = −20."
          }
        ],
        "hint_en": "neg × pos = neg. Multiply 4 × 5 = 20, then attach the minus sign.",
        "hint_ar": "سالب × موجب = سالب. اضرب 4 × 5 = 20، ثم أضف إشارة الطرح.",
        "result_en": "(−4) × 5 = −20",
        "result_ar": "(−4) × 5 = −20"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Separate the sign from the magnitude. (−4) = (−1) × 4. So the expression becomes (−1) × 4 × 5.",
            "explanation_ar": "افصل الإشارة عن القيمة المطلقة. (−4) = (−1) × 4. إذن التعبير يصبح (−1) × 4 × 5."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Compute the magnitude: 4 × 5 = 20. Then determine the sign: (−1) × positive = negative.",
            "explanation_ar": "احسب القيمة المطلقة: 4 × 5 = 20. ثم حدد الإشارة: (−1) × موجب = سالب."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "(−1) × 20 = −20.",
            "explanation_ar": "(−1) × 20 = −20."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "One negative factor → result is negative. (−4) × 5 = −20. ✓",
            "explanation_ar": "عامل سالب واحد → النتيجة سالبة. (−4) × 5 = −20. ✓"
          }
        ],
        "hint_en": "Compute magnitude 4 × 5 = 20, then apply the sign: one negative → answer is −20.",
        "hint_ar": "احسب القيمة المطلقة 4 × 5 = 20، ثم طبّق الإشارة: سالب واحد → الجواب −20.",
        "result_en": "(−4) × 5 = −20",
        "result_ar": "(−4) × 5 = −20"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Think of multiplication as repeated addition. (−4) × 5 means adding −4 five times.",
            "explanation_ar": "فكّر في الضرب كجمع متكرر. (−4) × 5 تعني إضافة −4 خمس مرات."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, start at 0 and take 5 jumps of −4 each (each jump moves 4 steps left).",
            "explanation_ar": "على خط الأعداد، ابدأ من 0 وخذ 5 قفزات بمقدار −4 كل منها (كل قفزة تتحرك 4 خطوات يساراً)."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "After 5 jumps of −4: 0 → −4 → −8 → −12 → −16 → −20. You land on −20.",
            "explanation_ar": "بعد 5 قفزات بمقدار −4: 0 → −4 → −8 → −12 → −16 → −20. تصل إلى −20."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Landing on −20 shows (−4) × 5 = −20.",
            "explanation_ar": "الوقوف عند −20 يُظهر أن (−4) × 5 = −20."
          }
        ],
        "hint_en": "Five jumps of −4 from 0 on a number line lands you at −20.",
        "hint_ar": "خمس قفزات بمقدار −4 من 0 على خط الأعداد توصلك إلى −20.",
        "result_en": "(−4) × 5 = −20",
        "result_ar": "(−4) × 5 = −20"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-int-med-002",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Medium",
    "question_en": "(−36) ÷ (−4) = ?",
    "question_ar": "(−36) ÷ (−4) = ؟",
    "answer": 9,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have (−36) ÷ (−4). Both the dividend and divisor are negative.",
            "explanation_ar": "لدينا (−36) ÷ (−4). كلٌّ من المقسوم والمقسوم عليه سالبان."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute the magnitude: 36 ÷ 4 = 9.",
            "explanation_ar": "احسب القيمة المطلقة: 36 ÷ 4 = 9."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sign rule: negative ÷ negative = positive. So the result is positive 9.",
            "explanation_ar": "قاعدة الإشارة: سالب ÷ سالب = موجب. إذن النتيجة هي 9 الموجب."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The magnitude 9 keeps a positive sign: (−36) ÷ (−4) = 9.",
            "explanation_ar": "القيمة المطلقة 9 تحتفظ بإشارة موجبة: (−36) ÷ (−4) = 9."
          }
        ],
        "hint_en": "neg ÷ neg = pos. Divide 36 ÷ 4 = 9, result stays positive.",
        "hint_ar": "سالب ÷ سالب = موجب. اقسم 36 ÷ 4 = 9، النتيجة موجبة.",
        "result_en": "(−36) ÷ (−4) = 9",
        "result_ar": "(−36) ÷ (−4) = 9"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Write each number showing sign and magnitude: (−36) = (−1) × 36 and (−4) = (−1) × 4.",
            "explanation_ar": "اكتب كل عدد مُظهِراً الإشارة والقيمة المطلقة: (−36) = (−1) × 36 و(−4) = (−1) × 4."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Signs: (−1) ÷ (−1) = +1. Magnitudes: 36 ÷ 4 = 9.",
            "explanation_ar": "الإشارات: (−1) ÷ (−1) = +1. القيم المطلقة: 36 ÷ 4 = 9."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "+1 × 9 = 9.",
            "explanation_ar": "+1 × 9 = 9."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Two negative factors → result is positive. (−36) ÷ (−4) = 9. ✓",
            "explanation_ar": "عاملان سالبان → النتيجة موجبة. (−36) ÷ (−4) = 9. ✓"
          }
        ],
        "hint_en": "Both signs are negative, so they cancel to give a positive result. 36 ÷ 4 = 9.",
        "hint_ar": "كلتا الإشارتين سالبتان، إذن تلغيان بعضهما لتعطيا نتيجة موجبة. 36 ÷ 4 = 9.",
        "result_en": "(−36) ÷ (−4) = 9",
        "result_ar": "(−36) ÷ (−4) = 9"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Think of division as asking: how many groups of (−4) fit into (−36)?",
            "explanation_ar": "فكّر في القسمة على أنها سؤال: كم مجموعة من (−4) تتسع في (−36)؟"
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, start at −36 and count how many jumps of +4 it takes to reach 0.",
            "explanation_ar": "على خط الأعداد، ابدأ من −36 وعدّ كم قفزة بمقدار +4 تحتاج للوصول إلى 0."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From −36, jumping +4 each time: −36 → −32 → −28 → −24 → −20 → −16 → −12 → −8 → −4 → 0. That is 9 jumps.",
            "explanation_ar": "من −36، قفز +4 في كل مرة: −36 → −32 → −28 → −24 → −20 → −16 → −12 → −8 → −4 → 0. هذه 9 قفزات."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "9 jumps to get from −36 to 0, so (−36) ÷ (−4) = 9.",
            "explanation_ar": "9 قفزات للوصول من −36 إلى 0، إذن (−36) ÷ (−4) = 9."
          }
        ],
        "hint_en": "Count the +4 jumps needed to go from −36 to 0 — that count is your answer.",
        "hint_ar": "عدّ قفزات +4 اللازمة للانتقال من −36 إلى 0 — هذا العدد هو جوابك.",
        "result_en": "(−36) ÷ (−4) = 9",
        "result_ar": "(−36) ÷ (−4) = 9"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-int-med-003",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Medium",
    "question_en": "3 × (−7) = ?",
    "question_ar": "3 × (−7) = ؟",
    "answer": -21,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 3 × (−7). One factor is positive (3) and the other is negative (−7).",
            "explanation_ar": "لدينا 3 × (−7). أحد العاملين موجب (3) والآخر سالب (−7)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Compute the magnitude: 3 × 7 = 21.",
            "explanation_ar": "احسب القيمة المطلقة: 3 × 7 = 21."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Sign rule: positive × negative = negative. So the result is −21.",
            "explanation_ar": "قاعدة الإشارة: موجب × سالب = سالب. إذن النتيجة هي −21."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "Attach the negative sign: 3 × (−7) = −21.",
            "explanation_ar": "أضف الإشارة السالبة: 3 × (−7) = −21."
          }
        ],
        "hint_en": "pos × neg = neg. Multiply 3 × 7 = 21, then make it negative.",
        "hint_ar": "موجب × سالب = سالب. اضرب 3 × 7 = 21، ثم اجعلها سالبة.",
        "result_en": "3 × (−7) = −21",
        "result_ar": "3 × (−7) = −21"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Separate sign from magnitude: (−7) = (−1) × 7. Expression becomes 3 × (−1) × 7.",
            "explanation_ar": "افصل الإشارة عن القيمة المطلقة: (−7) = (−1) × 7. التعبير يصبح 3 × (−1) × 7."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Magnitude: 3 × 7 = 21. Sign: positive × (−1) = negative.",
            "explanation_ar": "القيمة المطلقة: 3 × 7 = 21. الإشارة: موجب × (−1) = سالب."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "(−1) × 21 = −21.",
            "explanation_ar": "(−1) × 21 = −21."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "One negative factor → result is negative. 3 × (−7) = −21. ✓",
            "explanation_ar": "عامل سالب واحد → النتيجة سالبة. 3 × (−7) = −21. ✓"
          }
        ],
        "hint_en": "Magnitude is 3 × 7 = 21. One negative sign makes the answer −21.",
        "hint_ar": "القيمة المطلقة هي 3 × 7 = 21. إشارة سالبة واحدة تجعل الجواب −21.",
        "result_en": "3 × (−7) = −21",
        "result_ar": "3 × (−7) = −21"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "3 × (−7) means 3 groups of −7, or starting at 0 and taking 3 jumps of −7 each.",
            "explanation_ar": "3 × (−7) تعني 3 مجموعات من −7، أو البدء من 0 وأخذ 3 قفزات بمقدار −7 كل منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "On a number line, start at 0 and make 3 jumps, each moving 7 steps left.",
            "explanation_ar": "على خط الأعداد، ابدأ من 0 وخذ 3 قفزات، كل منها تتحرك 7 خطوات يساراً."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Jump 1: 0 → −7. Jump 2: −7 → −14. Jump 3: −14 → −21. Land on −21.",
            "explanation_ar": "القفزة 1: 0 → −7. القفزة 2: −7 → −14. القفزة 3: −14 → −21. تصل إلى −21."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Three jumps of −7 land on −21, so 3 × (−7) = −21.",
            "explanation_ar": "ثلاث قفزات بمقدار −7 تصل إلى −21، إذن 3 × (−7) = −21."
          }
        ],
        "hint_en": "Three jumps of −7 from 0: you pass −7, −14, and land on −21.",
        "hint_ar": "ثلاث قفزات بمقدار −7 من 0: تمرّ بـ −7 و−14 وتصل إلى −21.",
        "result_en": "3 × (−7) = −21",
        "result_ar": "3 × (−7) = −21"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-int-hard-001",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Hard",
    "question_en": "(−3) × (−4) + (−5) = ?",
    "question_ar": "(−3) × (−4) + (−5) = ؟",
    "answer": 7,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have (−3) × (−4) + (−5). By order of operations, multiply first, then add.",
            "explanation_ar": "لدينا (−3) × (−4) + (−5). بحسب ترتيب العمليات، نضرب أولاً ثم نجمع."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiplication step: sign rule neg × neg = pos. Magnitude: 3 × 4 = 12. So (−3) × (−4) = +12.",
            "explanation_ar": "خطوة الضرب: قاعدة الإشارة سالب × سالب = موجب. القيمة المطلقة: 3 × 4 = 12. إذن (−3) × (−4) = +12."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now add: 12 + (−5). Different signs: subtract 5 from 12 → 7. Sign of 12 (positive) wins.",
            "explanation_ar": "الآن اجمع: 12 + (−5). إشارات مختلفة: اطرح 5 من 12 → 7. إشارة 12 (موجبة) تغلب."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The final result is 7. So (−3) × (−4) + (−5) = 7.",
            "explanation_ar": "النتيجة النهائية هي 7. إذن (−3) × (−4) + (−5) = 7."
          }
        ],
        "hint_en": "neg × neg = pos first: (−3)(−4) = 12. Then 12 + (−5) = 7.",
        "hint_ar": "سالب × سالب = موجب أولاً: (−3)(−4) = 12. ثم 12 + (−5) = 7.",
        "result_en": "(−3) × (−4) + (−5) = 7",
        "result_ar": "(−3) × (−4) + (−5) = 7"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break the problem into two steps: Step A = (−3) × (−4), Step B = result + (−5).",
            "explanation_ar": "قسّم المسألة إلى خطوتين: الخطوة أ = (−3) × (−4)، الخطوة ب = النتيجة + (−5)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step A: magnitudes 3 × 4 = 12; signs neg × neg = pos → result = 12. Step B: 12 + (−5). Subtract magnitudes: 12 − 5 = 7; sign of larger (12) = positive.",
            "explanation_ar": "الخطوة أ: القيم المطلقة 3 × 4 = 12؛ الإشارات سالب × سالب = موجب → النتيجة = 12. الخطوة ب: 12 + (−5). اطرح القيم المطلقة: 12 − 5 = 7؛ إشارة الأكبر (12) = موجبة."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Step B result: +7. That is the final answer.",
            "explanation_ar": "نتيجة الخطوة ب: +7. هذا هو الجواب النهائي."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "(−3) × (−4) = 12, then 12 − 5 = 7. ✓",
            "explanation_ar": "(−3) × (−4) = 12، ثم 12 − 5 = 7. ✓"
          }
        ],
        "hint_en": "Do the multiplication first: neg × neg gives 12. Then subtract 5 to get 7.",
        "hint_ar": "افعل الضرب أولاً: سالب × سالب يعطي 12. ثم اطرح 5 للحصول على 7.",
        "result_en": "(−3) × (−4) + (−5) = 7",
        "result_ar": "(−3) × (−4) + (−5) = 7"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Think of this as two moves on a number line. First, the multiplication sets your starting position.",
            "explanation_ar": "فكّر في هذا كحركتين على خط الأعداد. أولاً، عملية الضرب تحدد موضع البداية."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "(−3) × (−4): two negatives make a positive. 3 × 4 = 12, so you are placed at +12 on the number line.",
            "explanation_ar": "(−3) × (−4): سالبان يصنعان موجباً. 3 × 4 = 12، إذن أنت موجود عند +12 على خط الأعداد."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Now add −5: move 5 steps left from +12. 12 → 11 → 10 → 9 → 8 → 7. Land on 7.",
            "explanation_ar": "الآن أضف −5: تحرك 5 خطوات يساراً من +12. 12 → 11 → 10 → 9 → 8 → 7. تصل إلى 7."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Starting at 12 and moving 5 left lands on 7. So (−3) × (−4) + (−5) = 7.",
            "explanation_ar": "البدء من 12 والتحرك 5 يساراً يوصلك إلى 7. إذن (−3) × (−4) + (−5) = 7."
          }
        ],
        "hint_en": "Two negatives multiplied give +12. Then jump 5 left to land on 7.",
        "hint_ar": "ضرب سالبين يعطي +12. ثم قفز 5 يساراً للوصول إلى 7.",
        "result_en": "(−3) × (−4) + (−5) = 7",
        "result_ar": "(−3) × (−4) + (−5) = 7"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-int-hard-002",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Hard",
    "question_en": "(−24) ÷ 6 + 10 = ?",
    "question_ar": "(−24) ÷ 6 + 10 = ؟",
    "answer": 6,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have (−24) ÷ 6 + 10. Order of operations: divide first, then add.",
            "explanation_ar": "لدينا (−24) ÷ 6 + 10. ترتيب العمليات: اقسم أولاً، ثم اجمع."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Division step: sign rule neg ÷ pos = neg. Magnitude: 24 ÷ 6 = 4. So (−24) ÷ 6 = −4.",
            "explanation_ar": "خطوة القسمة: قاعدة الإشارة سالب ÷ موجب = سالب. القيمة المطلقة: 24 ÷ 6 = 4. إذن (−24) ÷ 6 = −4."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Now add: −4 + 10. Different signs: subtract 4 from 10 → 6. Sign of 10 (positive) wins.",
            "explanation_ar": "الآن اجمع: −4 + 10. إشارات مختلفة: اطرح 4 من 10 → 6. إشارة 10 (موجبة) تغلب."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The final result is 6. So (−24) ÷ 6 + 10 = 6.",
            "explanation_ar": "النتيجة النهائية هي 6. إذن (−24) ÷ 6 + 10 = 6."
          }
        ],
        "hint_en": "Divide first: neg ÷ pos = −4. Then −4 + 10 = 6.",
        "hint_ar": "اقسم أولاً: سالب ÷ موجب = −4. ثم −4 + 10 = 6.",
        "result_en": "(−24) ÷ 6 + 10 = 6",
        "result_ar": "(−24) ÷ 6 + 10 = 6"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break into Step A = (−24) ÷ 6 and Step B = result + 10.",
            "explanation_ar": "قسّم إلى الخطوة أ = (−24) ÷ 6 والخطوة ب = النتيجة + 10."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step A: magnitude 24 ÷ 6 = 4; sign neg ÷ pos = neg → (−24) ÷ 6 = −4. Step B: −4 + 10; signs differ, 10 − 4 = 6, positive sign wins.",
            "explanation_ar": "الخطوة أ: القيمة المطلقة 24 ÷ 6 = 4؛ الإشارة سالب ÷ موجب = سالب → (−24) ÷ 6 = −4. الخطوة ب: −4 + 10؛ الإشارات تختلف، 10 − 4 = 6، الإشارة الموجبة تغلب."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Step B gives +6, which is the final answer.",
            "explanation_ar": "الخطوة ب تعطي +6، وهو الجواب النهائي."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "(−24) ÷ 6 = −4, then −4 + 10 = 6. ✓",
            "explanation_ar": "(−24) ÷ 6 = −4، ثم −4 + 10 = 6. ✓"
          }
        ],
        "hint_en": "First find (−24) ÷ 6 = −4. Then add 10 to get 6.",
        "hint_ar": "أوجد أولاً (−24) ÷ 6 = −4. ثم أضف 10 للحصول على 6.",
        "result_en": "(−24) ÷ 6 + 10 = 6",
        "result_ar": "(−24) ÷ 6 + 10 = 6"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture two moves on a number line. The division tells you where to start; the addition moves you from there.",
            "explanation_ar": "تخيّل حركتين على خط الأعداد. القسمة تخبرك من أين تبدأ؛ الجمع يحركك من هناك."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "(−24) ÷ 6: neg ÷ pos = neg. 24 ÷ 6 = 4, so you start at −4 on the number line.",
            "explanation_ar": "(−24) ÷ 6: سالب ÷ موجب = سالب. 24 ÷ 6 = 4، إذن تبدأ من −4 على خط الأعداد."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From −4, add +10: move 10 steps right. −4 → 0 (4 steps) → 6 (6 more steps). Land on 6.",
            "explanation_ar": "من −4، أضف +10: تحرك 10 خطوات يميناً. −4 → 0 (4 خطوات) → 6 (6 خطوات أخرى). تصل إلى 6."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Starting at −4 and jumping 10 right lands on 6. So (−24) ÷ 6 + 10 = 6.",
            "explanation_ar": "البدء من −4 والقفز 10 يميناً يوصلك إلى 6. إذن (−24) ÷ 6 + 10 = 6."
          }
        ],
        "hint_en": "Division puts you at −4. Then +10 moves you 10 right to land on 6.",
        "hint_ar": "القسمة توضعك عند −4. ثم +10 تحركك 10 يميناً للوصول إلى 6.",
        "result_en": "(−24) ÷ 6 + 10 = 6",
        "result_ar": "(−24) ÷ 6 + 10 = 6"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-int-hard-003",
    "grade": 6,
    "bank": "specific",
    "category": "Integers & Negatives",
    "level": "Hard",
    "question_en": "5 × (−3) − (−20) = ?",
    "question_ar": "5 × (−3) − (−20) = ؟",
    "answer": 5,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We have 5 × (−3) − (−20). Order of operations: multiply first, then handle the subtraction of a negative.",
            "explanation_ar": "لدينا 5 × (−3) − (−20). ترتيب العمليات: اضرب أولاً، ثم تعامل مع طرح السالب."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Multiplication: pos × neg = neg. 5 × 3 = 15, so 5 × (−3) = −15. Also, subtracting a negative: −(−20) = +20.",
            "explanation_ar": "الضرب: موجب × سالب = سالب. 5 × 3 = 15، إذن 5 × (−3) = −15. أيضاً، طرح سالب: −(−20) = +20."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Rewrite: −15 + 20. Different signs: 20 − 15 = 5. Sign of 20 (positive) wins.",
            "explanation_ar": "أعد الكتابة: −15 + 20. إشارات مختلفة: 20 − 15 = 5. إشارة 20 (موجبة) تغلب."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The final result is 5. So 5 × (−3) − (−20) = 5.",
            "explanation_ar": "النتيجة النهائية هي 5. إذن 5 × (−3) − (−20) = 5."
          }
        ],
        "hint_en": "5 × (−3) = −15, then −(−20) flips to +20: −15 + 20 = 5.",
        "hint_ar": "5 × (−3) = −15، ثم −(−20) تتحول إلى +20: −15 + 20 = 5.",
        "result_en": "5 × (−3) − (−20) = 5",
        "result_ar": "5 × (−3) − (−20) = 5"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Break into Step A = 5 × (−3) and Step B = result − (−20).",
            "explanation_ar": "قسّم إلى الخطوة أ = 5 × (−3) والخطوة ب = النتيجة − (−20)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Step A: magnitude 5 × 3 = 15; sign pos × neg = neg → −15. Step B: −15 − (−20) = −15 + 20; subtract magnitudes 20 − 15 = 5; positive sign wins.",
            "explanation_ar": "الخطوة أ: القيمة المطلقة 5 × 3 = 15؛ الإشارة موجب × سالب = سالب → −15. الخطوة ب: −15 − (−20) = −15 + 20؛ اطرح القيم المطلقة 20 − 15 = 5؛ الإشارة الموجبة تغلب."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "Step B gives +5, which is the final answer.",
            "explanation_ar": "الخطوة ب تعطي +5، وهو الجواب النهائي."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "5 × (−3) = −15; −15 + 20 = 5. ✓",
            "explanation_ar": "5 × (−3) = −15؛ −15 + 20 = 5. ✓"
          }
        ],
        "hint_en": "Multiply first to get −15. Then subtracting −20 is adding 20: −15 + 20 = 5.",
        "hint_ar": "اضرب أولاً للحصول على −15. ثم طرح −20 يساوي جمع 20: −15 + 20 = 5.",
        "result_en": "5 × (−3) − (−20) = 5",
        "result_ar": "5 × (−3) − (−20) = 5"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Two moves: first the multiplication places you at a point; then subtracting a negative pushes you right.",
            "explanation_ar": "حركتان: أولاً الضرب يضعك عند نقطة؛ ثم طرح السالب يدفعك يميناً."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "5 × (−3) = −15. You are placed at −15 on the number line. Then −(−20) = +20: you move 20 steps right from −15.",
            "explanation_ar": "5 × (−3) = −15. أنت موجود عند −15 على خط الأعداد. ثم −(−20) = +20: تتحرك 20 خطوة يميناً من −15."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "From −15, move 20 right: pass through 0 after 15 steps, then 5 more steps → land on 5.",
            "explanation_ar": "من −15، تحرك 20 يميناً: تمرّ بالصفر بعد 15 خطوة، ثم 5 خطوات أخرى → تصل إلى 5."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "Starting at −15 and jumping 20 right lands on 5. So 5 × (−3) − (−20) = 5.",
            "explanation_ar": "البدء من −15 والقفز 20 يميناً يوصلك إلى 5. إذن 5 × (−3) − (−20) = 5."
          }
        ],
        "hint_en": "Land at −15 from the multiplication, then jump +20 right to reach 5.",
        "hint_ar": "انزل عند −15 من الضرب، ثم قفز +20 يميناً للوصول إلى 5.",
        "result_en": "5 × (−3) − (−20) = 5",
        "result_ar": "5 × (−3) − (−20) = 5"
      }
    },
    "meta": {
      "lower_grade_equivalent": null,
      "upper_grade_equivalent": null,
      "fun_fact_tag": "integers"
    }
  },
  {
    "id": "g6-specific-word-easy-001",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A shipping port in Tokyo handled 483500 containers last year and 215300 containers this year. How many containers did it handle in total? 483500 + 215300 = ?",
    "question_ar": "تعامل ميناء شحن في طوكيو مع 483500 حاوية العام الماضي و215300 حاوية هذا العام. كم عدد الحاويات إجمالاً؟ 483500 + 215300 = ؟",
    "answer": 698800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We are adding 483500 and 215300. Both numbers end in hundreds, so no regrouping is needed in the tens or units.",
            "explanation_ar": "نجمع 483500 و215300. كلا الرقمين ينتهيان بمئات، لذا لا يوجد إعادة تجميع في الآحاد أو العشرات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add the hundred-thousands and ten-thousands: 400000 + 200000 = 600000. Then add the thousands: 83000 + 15000 = 98000.",
            "explanation_ar": "اجمع مئات الآلاف وعشرات الآلاف: 400000 + 200000 = 600000. ثم اجمع الآلاف: 83000 + 15000 = 98000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the hundreds: 500 + 300 = 800. The tens and units are both 0, so they contribute nothing.",
            "explanation_ar": "اجمع المئات: 500 + 300 = 800. العشرات والآحاد أصفار، فلا تضيف شيئاً."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "600000 + 98000 + 800 = 698800. The Tokyo port handled 698800 containers in total.",
            "explanation_ar": "600000 + 98000 + 800 = 698800. تعامل ميناء طوكيو مع 698800 حاوية إجمالاً."
          }
        ],
        "hint_en": "Add the large parts first: 400000 + 200000, then 83000 + 15000, then the hundreds.",
        "hint_ar": "اجمع الأجزاء الكبيرة أولاً: 400000 + 200000، ثم 83000 + 15000، ثم المئات.",
        "result_en": "698800 containers",
        "result_ar": "698800 حاوية"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 483500 into 483000 + 500, and 215300 into 215000 + 300.",
            "explanation_ar": "قسّم 483500 إلى 483000 + 500، و215300 إلى 215000 + 300."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add the thousands parts: 483000 + 215000 = 698000. Add the hundreds parts: 500 + 300 = 800.",
            "explanation_ar": "اجمع أجزاء الآلاف: 483000 + 215000 = 698000. اجمع أجزاء المئات: 500 + 300 = 800."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "698000 + 800 = 698800.",
            "explanation_ar": "698000 + 800 = 698800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 698000 + 800 = 698800. The port handled 698800 containers in total.",
            "explanation_ar": "تحقق: 698000 + 800 = 698800. تعامل الميناء مع 698800 حاوية إجمالاً."
          }
        ],
        "hint_en": "Break each number into thousands and hundreds, add separately, then combine.",
        "hint_ar": "قسّم كل رقم إلى آلاف ومئات، اجمع كل جزء على حدة، ثم اجمعها.",
        "result_en": "698800 containers",
        "result_ar": "698800 حاوية"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture the busy Tokyo port — cranes stacking containers over two years. Year 1 tower: 483500. Year 2 tower: 215300.",
            "explanation_ar": "تخيّل ميناء طوكيو المزدحم — رافعات تكدّس الحاويات على مدى عامين. برج العام الأول: 483500. برج العام الثاني: 215300."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a number line. Place 483500, then jump forward 215300. First jump 200000 to land on 683500, then jump 15300 more.",
            "explanation_ar": "ارسم خطاً عددياً. ضع 483500، ثم قفز إلى الأمام 215300. أولاً قفز 200000 للوصول إلى 683500، ثم قفز 15300 إضافية."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "683500 + 15000 = 698500, then + 300 = 698800.",
            "explanation_ar": "683500 + 15000 = 698500، ثم + 300 = 698800."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The total number of containers is 698800, matching the combined height of both towers.",
            "explanation_ar": "إجمالي الحاويات هو 698800، يتوافق مع الارتفاع المجمّع لكلا البرجين."
          }
        ],
        "hint_en": "Jump in big chunks along a number line: +200000, then +15000, then +300.",
        "hint_ar": "قفز في أجزاء كبيرة على خط الأعداد: +200000، ثم +15000، ثم +300.",
        "result_en": "698800 containers",
        "result_ar": "698800 حاوية"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g6-specific-word-easy-002",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A recycling plant in São Paulo collected 762400 kilograms of plastic one month and 318600 kilograms the next month. How much more plastic did it collect in the first month? 762400 − 318600 = ?",
    "question_ar": "جمع مصنع تدوير في ساو باولو 762400 كيلوغراماً من البلاستيك في شهر واحد و318600 كيلوغراماً في الشهر التالي. بكم تزيد كمية الشهر الأول؟ 762400 − 318600 = ؟",
    "answer": 443800,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We subtract 318600 from 762400. Both end in hundreds, so no borrowing is needed in the units or tens columns.",
            "explanation_ar": "نطرح 318600 من 762400. كلاهما ينتهي بمئات، لذا لا حاجة للاستلاف في خانتي الآحاد والعشرات."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Subtract hundred-thousands and ten-thousands: 700000 − 300000 = 400000. Then thousands: 62000 − 18000 = 44000.",
            "explanation_ar": "اطرح مئات الآلاف وعشرات الآلاف: 700000 − 300000 = 400000. ثم الآلاف: 62000 − 18000 = 44000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Subtract hundreds: 400 − 600. Since 400 < 600, borrow 1000 from 44000: 1400 − 600 = 800, and thousands become 43000.",
            "explanation_ar": "اطرح المئات: 400 − 600. بما أن 400 < 600، استلف 1000 من 44000: 1400 − 600 = 800، وتصبح الآلاف 43000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "400000 + 43000 + 800 = 443800. The first month had 443800 kg more.",
            "explanation_ar": "400000 + 43000 + 800 = 443800. كان الشهر الأول أكثر بـ 443800 كيلوغرام."
          }
        ],
        "hint_en": "Subtract in parts: hundred-thousands, then ten-thousands and thousands, then hundreds.",
        "hint_ar": "اطرح على أجزاء: مئات الآلاف، ثم عشرات وآلاف، ثم المئات.",
        "result_en": "443800 kilograms",
        "result_ar": "443800 كيلوغرام"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 762400 into 762000 + 400, and 318600 into 318000 + 600.",
            "explanation_ar": "قسّم 762400 إلى 762000 + 400، و318600 إلى 318000 + 600."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Subtract thousands: 762000 − 318000 = 444000. Subtract hundreds: 400 − 600 = −200 (need to adjust).",
            "explanation_ar": "اطرح الآلاف: 762000 − 318000 = 444000. اطرح المئات: 400 − 600 = −200 (يحتاج تعديل)."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "444000 − 200 = 443800.",
            "explanation_ar": "444000 − 200 = 443800."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 318600 + 443800 = 762400. ✓ The first month had 443800 kg more.",
            "explanation_ar": "تحقق: 318600 + 443800 = 762400. ✓ كان الشهر الأول أكثر بـ 443800 كيلوغرام."
          }
        ],
        "hint_en": "Subtract the thousands parts, subtract the hundreds parts, then combine (watch the sign).",
        "hint_ar": "اطرح أجزاء الآلاف، اطرح أجزاء المئات، ثم اجمع (انتبه للإشارة).",
        "result_en": "443800 kilograms",
        "result_ar": "443800 كيلوغرام"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture two giant piles of plastic at the São Paulo plant — a big pile (762400 kg) and a smaller pile (318600 kg). We want the gap between them.",
            "explanation_ar": "تخيّل كومتين ضخمتين من البلاستيك في مصنع ساو باولو — كومة كبيرة (762400 كغ) وكومة أصغر (318600 كغ). نريد الفرق بينهما."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar model: long bar = 762400, short bar = 318600, the gap = ?",
            "explanation_ar": "ارسم نموذج الأشرطة: الشريط الطويل = 762400، الشريط القصير = 318600، الفجوة = ؟"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Count up from 318600 to 762400: +300000 → 618600, +143800 → 762400. Gap = 443800.",
            "explanation_ar": "عدّ من 318600 إلى 762400: +300000 → 618600، +143800 → 762400. الفجوة = 443800."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The first month's collection exceeded the second by 443800 kg.",
            "explanation_ar": "تجاوزت كمية الشهر الأول الشهرَ الثاني بـ 443800 كيلوغرام."
          }
        ],
        "hint_en": "Count up from the smaller number to the larger to find the difference.",
        "hint_ar": "عدّ من الرقم الأصغر إلى الأكبر لإيجاد الفرق.",
        "result_en": "443800 kilograms",
        "result_ar": "443800 كيلوغرام"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g6-specific-word-easy-003",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Easy",
    "question_en": "A gold mine in Johannesburg produced 524700 grams of gold in January and 163900 grams in February. What is the total production for both months? 524700 + 163900 = ?",
    "question_ar": "أنتجت منجم ذهب في جوهانسبرغ 524700 غرام من الذهب في يناير و163900 غرام في فبراير. ما إجمالي الإنتاج للشهرين؟ 524700 + 163900 = ؟",
    "answer": 688600,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "We add 524700 and 163900. Both end in hundreds, so the units and tens are zero — clean addition.",
            "explanation_ar": "نجمع 524700 و163900. كلاهما ينتهي بمئات، لذا الآحاد والعشرات أصفار — جمع نظيف."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Add hundred-thousands: 500000 + 100000 = 600000. Add ten-thousands: 20000 + 60000 = 80000.",
            "explanation_ar": "اجمع مئات الآلاف: 500000 + 100000 = 600000. اجمع عشرات الآلاف: 20000 + 60000 = 80000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the thousands and hundreds: 4000 + 3000 = 7000, and 700 + 900 = 1600 (carry 1000).",
            "explanation_ar": "اجمع الآلاف والمئات: 4000 + 3000 = 7000، و700 + 900 = 1600 (احمل 1000)."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "600000 + 80000 + 7000 + 1600 = 600000 + 80000 + 8600 = 688600. Total gold: 688600 grams.",
            "explanation_ar": "600000 + 80000 + 7000 + 1600 = 600000 + 80000 + 8600 = 688600. إجمالي الذهب: 688600 غرام."
          }
        ],
        "hint_en": "Add place by place from left to right, carrying when hundreds sum to 1600.",
        "hint_ar": "اجمع خانة بخانة من اليسار إلى اليمين، واحمل عندما تبلغ المئات 1600.",
        "result_en": "688600 grams",
        "result_ar": "688600 غرام"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Split 524700 into 524000 + 700, and 163900 into 163000 + 900.",
            "explanation_ar": "قسّم 524700 إلى 524000 + 700، و163900 إلى 163000 + 900."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Add thousands: 524000 + 163000 = 687000. Add hundreds: 700 + 900 = 1600.",
            "explanation_ar": "اجمع الآلاف: 524000 + 163000 = 687000. اجمع المئات: 700 + 900 = 1600."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "687000 + 1600 = 688600.",
            "explanation_ar": "687000 + 1600 = 688600."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 688600 − 163900 = 524700. ✓ Total production: 688600 grams.",
            "explanation_ar": "تحقق: 688600 − 163900 = 524700. ✓ إجمالي الإنتاج: 688600 غرام."
          }
        ],
        "hint_en": "Split both numbers into thousands and hundreds, add each group, then combine.",
        "hint_ar": "قسّم الرقمين إلى آلاف ومئات، اجمع كل مجموعة، ثم ادمجهما.",
        "result_en": "688600 grams",
        "result_ar": "688600 غرام"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine two monthly shipments of gold bars from Johannesburg — January's big crate (524700 g) and February's smaller crate (163900 g).",
            "explanation_ar": "تخيّل شحنتين شهريتين من سبائك الذهب من جوهانسبرغ — صندوق يناير الكبير (524700 غ) وصندوق فبراير الأصغر (163900 غ)."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a part-whole bar: Part 1 = 524700, Part 2 = 163900, Whole = ?",
            "explanation_ar": "ارسم شريط الجزء والكل: الجزء 1 = 524700، الجزء 2 = 163900، الكل = ؟"
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Start at 524700. Add 163900 in two hops: +163000 → 687700, then +900 → 688600.",
            "explanation_ar": "ابدأ من 524700. أضف 163900 في قفزتين: +163000 → 687700، ثم +900 → 688600."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The whole bar represents 688600 grams of gold produced over both months.",
            "explanation_ar": "يمثّل الشريط الكامل 688600 غرام من الذهب المنتج على مدى الشهرين."
          }
        ],
        "hint_en": "Picture the two crates being merged — add in two hops: +163000 then +900.",
        "hint_ar": "تخيّل دمج الصندوقين — أضف في قفزتين: +163000 ثم +900.",
        "result_en": "688600 grams",
        "result_ar": "688600 غرام"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-easy-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g6-specific-word-medium-001",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A textile factory in Mumbai produces fabric in a ratio of cotton to synthetic of 7 : 3. If the factory produces 35000 metres of fabric in total, how many metres of cotton fabric are produced? (7 ÷ 10) × 35000 = ?",
    "question_ar": "ينتج مصنع نسيج في مومباي القماش بنسبة قطن إلى صناعي 7 : 3. إذا أنتج المصنع 35000 متراً من القماش إجمالاً، كم متراً من القطن يُنتج؟ (7 ÷ 10) × 35000 = ؟",
    "answer": 24500,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "The ratio 7 : 3 means 7 + 3 = 10 total parts. Cotton is 7 out of 10 parts.",
            "explanation_ar": "النسبة 7 : 3 تعني 7 + 3 = 10 أجزاء إجمالية. القطن هو 7 من أصل 10 أجزاء."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find the value of one part: 35000 ÷ 10 = 3500 metres per part.",
            "explanation_ar": "أوجد قيمة جزء واحد: 35000 ÷ 10 = 3500 متر لكل جزء."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Multiply by cotton's share: 3500 × 7 = 24500.",
            "explanation_ar": "اضرب في حصة القطن: 3500 × 7 = 24500."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The factory produces 24500 metres of cotton fabric.",
            "explanation_ar": "ينتج المصنع 24500 متراً من قماش القطن."
          }
        ],
        "hint_en": "Total ratio parts = 10. Divide 35000 by 10, then multiply by 7.",
        "hint_ar": "إجمالي أجزاء النسبة = 10. اقسم 35000 على 10، ثم اضرب في 7.",
        "result_en": "24500 metres of cotton",
        "result_ar": "24500 متر من القطن"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Identify: total = 35000, ratio = 7 : 3, total parts = 10. We need the cotton part (7 parts).",
            "explanation_ar": "حدّد: الإجمالي = 35000، النسبة = 7 : 3، إجمالي الأجزاء = 10. نحتاج جزء القطن (7 أجزاء)."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "One part = 35000 ÷ 10 = 3500. Seven parts = 3500 × 7.",
            "explanation_ar": "جزء واحد = 35000 ÷ 10 = 3500. سبعة أجزاء = 3500 × 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3500 × 7 = 3500 × 5 + 3500 × 2 = 17500 + 7000 = 24500.",
            "explanation_ar": "3500 × 7 = 3500 × 5 + 3500 × 2 = 17500 + 7000 = 24500."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 24500 + 10500 (synthetic) = 35000. ✓ Cotton: 24500 metres.",
            "explanation_ar": "تحقق: 24500 + 10500 (صناعي) = 35000. ✓ القطن: 24500 متر."
          }
        ],
        "hint_en": "Find one part, multiply by 7.",
        "hint_ar": "أوجد جزءاً واحداً، ثم اضرب في 7.",
        "result_en": "24500 metres of cotton",
        "result_ar": "24500 متر من القطن"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a bolt of 35000 metres of fabric being cut into 10 equal segments in the Mumbai factory.",
            "explanation_ar": "تخيّل لفافة من 35000 متر من القماش تُقطع إلى 10 أجزاء متساوية في مصنع مومباي."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar divided into 10 equal parts. Each part = 35000 ÷ 10 = 3500 m. Shade 7 parts for cotton.",
            "explanation_ar": "ارسم شريطاً مقسّماً إلى 10 أجزاء متساوية. كل جزء = 35000 ÷ 10 = 3500 م. ظلّل 7 أجزاء للقطن."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "7 shaded segments × 3500 m = 24500 m.",
            "explanation_ar": "7 أجزاء مظلّلة × 3500 م = 24500 م."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The shaded cotton region equals 24500 metres — 7 out of every 10 metres made in Mumbai.",
            "explanation_ar": "المنطقة المظلّلة للقطن تساوي 24500 متراً — 7 من كل 10 أمتار تُصنع في مومباي."
          }
        ],
        "hint_en": "Divide the bar into 10 equal parts of 3500 each, then count 7 parts.",
        "hint_ar": "قسّم الشريط إلى 10 أجزاء متساوية من 3500 لكل منها، ثم عدّ 7 أجزاء.",
        "result_en": "24500 metres of cotton",
        "result_ar": "24500 متر من القطن"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g6-specific-word-medium-002",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A bakery in Copenhagen sold 48000 pastries last month. This month, sales increased by 25%. How many pastries were sold this month? 48000 × 1.25 = ?",
    "question_ar": "باعت مخبزة في كوبنهاغن 48000 معجنة الشهر الماضي. هذا الشهر، ارتفعت المبيعات بنسبة 25%. كم عدد المعجنات المبيعة هذا الشهر؟ 48000 × 1.25 = ؟",
    "answer": 60000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "A 25% increase means we multiply by 1.25, or equivalently find 25% of 48000 and add it.",
            "explanation_ar": "زيادة بنسبة 25% تعني الضرب في 1.25، أو إيجاد 25% من 48000 وإضافتها."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Find 25% of 48000: 25% = 1/4, so 48000 ÷ 4 = 12000.",
            "explanation_ar": "أوجد 25% من 48000: 25% = 1/4، إذاً 48000 ÷ 4 = 12000."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Add the increase to the original: 48000 + 12000 = 60000.",
            "explanation_ar": "أضف الزيادة إلى الأصل: 48000 + 12000 = 60000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The bakery sold 60000 pastries this month.",
            "explanation_ar": "باعت المخبزة 60000 معجنة هذا الشهر."
          }
        ],
        "hint_en": "25% = 1/4. Divide 48000 by 4, then add the result to 48000.",
        "hint_ar": "25% = 1/4. اقسم 48000 على 4، ثم أضف الناتج إلى 48000.",
        "result_en": "60000 pastries",
        "result_ar": "60000 معجنة"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Original = 48000. Percentage increase = 25%. Increase amount = 25% × 48000.",
            "explanation_ar": "الأصل = 48000. نسبة الزيادة = 25%. مقدار الزيادة = 25% × 48000."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "25% × 48000 = (20% + 5%) × 48000 = 9600 + 2400 = 12000.",
            "explanation_ar": "25% × 48000 = (20% + 5%) × 48000 = 9600 + 2400 = 12000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "48000 + 12000 = 60000.",
            "explanation_ar": "48000 + 12000 = 60000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 60000 ÷ 48000 = 1.25 ✓. This month's sales: 60000 pastries.",
            "explanation_ar": "تحقق: 60000 ÷ 48000 = 1.25 ✓. مبيعات هذا الشهر: 60000 معجنة."
          }
        ],
        "hint_en": "Split 25% into 20% + 5%, compute each, add both to 48000.",
        "hint_ar": "قسّم 25% إلى 20% + 5%، احسب كلاً منهما، أضفهما إلى 48000.",
        "result_en": "60000 pastries",
        "result_ar": "60000 معجنة"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture the Copenhagen bakery's display case: last month had 48000 pastries. This month the case is 25% larger.",
            "explanation_ar": "تخيّل واجهة عرض المخبزة في كوبنهاغن: الشهر الماضي كان فيها 48000 معجنة. هذا الشهر الواجهة أكبر بنسبة 25%."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar for 48000, then extend it by a quarter of its length (= 12000) to show the increase.",
            "explanation_ar": "ارسم شريطاً لـ 48000، ثم مدّده بربع طوله (= 12000) لإظهار الزيادة."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Original bar: 48000. Extension: 12000. Total bar: 48000 + 12000 = 60000.",
            "explanation_ar": "الشريط الأصلي: 48000. الامتداد: 12000. الشريط الكلي: 48000 + 12000 = 60000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The extended bar shows 60000 pastries sold this month — a quarter more than last month.",
            "explanation_ar": "يُظهر الشريط الممتد 60000 معجنة مبيعة هذا الشهر — بربع أكثر من الشهر الماضي."
          }
        ],
        "hint_en": "A 25% increase is the same as adding one-quarter of the original.",
        "hint_ar": "زيادة 25% تعادل إضافة ربع الأصل.",
        "result_en": "60000 pastries",
        "result_ar": "60000 معجنة"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g6-specific-word-medium-003",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Medium",
    "question_en": "A street food vendor in Jakarta earns money in a ratio of weekday to weekend earnings of 3 : 7. If total weekly earnings are 40000 rupiah, how many rupiah does the vendor earn on weekends? (7 ÷ 10) × 40000 = ?",
    "question_ar": "يكسب بائع طعام في جاكرتا المال بنسبة أرباح أيام الأسبوع إلى أرباح عطلة نهاية الأسبوع 3 : 7. إذا كانت الأرباح الأسبوعية الإجمالية 40000 روبية، كم روبية يكسب البائع في عطلة نهاية الأسبوع؟ (7 ÷ 10) × 40000 = ؟",
    "answer": 28000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Ratio 3 : 7 has 3 + 7 = 10 total parts. Weekend earnings are 7 out of 10 parts.",
            "explanation_ar": "النسبة 3 : 7 لها 3 + 7 = 10 أجزاء إجمالية. أرباح نهاية الأسبوع هي 7 من أصل 10 أجزاء."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "One part = 40000 ÷ 10 = 4000 rupiah.",
            "explanation_ar": "جزء واحد = 40000 ÷ 10 = 4000 روبية."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Weekend share = 7 × 4000 = 28000 rupiah.",
            "explanation_ar": "حصة نهاية الأسبوع = 7 × 4000 = 28000 روبية."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "The vendor earns 28000 rupiah on weekends.",
            "explanation_ar": "يكسب البائع 28000 روبية في نهاية الأسبوع."
          }
        ],
        "hint_en": "10 total parts. One part = 4000. Weekend = 7 parts = 28000.",
        "hint_ar": "10 أجزاء إجمالية. جزء واحد = 4000. نهاية الأسبوع = 7 أجزاء = 28000.",
        "result_en": "28000 rupiah",
        "result_ar": "28000 روبية"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Total = 40000, ratio = 3 : 7, total parts = 10. Weekend portion = 7 parts.",
            "explanation_ar": "الإجمالي = 40000، النسبة = 3 : 7، إجمالي الأجزاء = 10. حصة نهاية الأسبوع = 7 أجزاء."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Value of one part = 40000 ÷ 10 = 4000. Seven parts = 4000 × 7.",
            "explanation_ar": "قيمة جزء واحد = 40000 ÷ 10 = 4000. سبعة أجزاء = 4000 × 7."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "4000 × 7 = 4000 × 5 + 4000 × 2 = 20000 + 8000 = 28000.",
            "explanation_ar": "4000 × 7 = 4000 × 5 + 4000 × 2 = 20000 + 8000 = 28000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Weekday: 3 × 4000 = 12000. 12000 + 28000 = 40000 ✓. Weekend: 28000 rupiah.",
            "explanation_ar": "أيام الأسبوع: 3 × 4000 = 12000. 12000 + 28000 = 40000 ✓. نهاية الأسبوع: 28000 روبية."
          }
        ],
        "hint_en": "Divide 40000 by 10 to get one part, then multiply by 7.",
        "hint_ar": "اقسم 40000 على 10 للحصول على جزء واحد، ثم اضرب في 7.",
        "result_en": "28000 rupiah",
        "result_ar": "28000 روبية"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture a Jakarta street market: the vendor's weekly earnings jar holds 40000 rupiah. Most of it comes on busy weekends.",
            "explanation_ar": "تخيّل سوقاً في الشوارع بجاكرتا: برطمان أرباح البائع الأسبوعية يحوي 40000 روبية. معظمها يأتي في نهايات الأسبوع المزدحمة."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar divided into 10 equal parts of 4000 each. Mark 3 parts for weekdays and 7 parts for weekends.",
            "explanation_ar": "ارسم شريطاً مقسّماً إلى 10 أجزاء متساوية من 4000 لكل منها. علّم 3 أجزاء لأيام الأسبوع و7 أجزاء لنهاية الأسبوع."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "7 weekend parts × 4000 = 28000 rupiah.",
            "explanation_ar": "7 أجزاء لنهاية الأسبوع × 4000 = 28000 روبية."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The 7 shaded weekend segments represent 28000 rupiah — the bulk of the vendor's income.",
            "explanation_ar": "تمثّل الأجزاء السبعة المظلّلة لنهاية الأسبوع 28000 روبية — الجزء الأكبر من دخل البائع."
          }
        ],
        "hint_en": "Shade 7 out of 10 equal sections, each worth 4000 rupiah.",
        "hint_ar": "ظلّل 7 من أصل 10 أجزاء متساوية، كل منها يساوي 4000 روبية.",
        "result_en": "28000 rupiah",
        "result_ar": "28000 روبية"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-medium-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g6-specific-word-hard-001",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A sports stadium in Chicago has 480000 seats. For a championship game, 75% of seats were sold. Of those sold seats, 3 out of every 8 were premium seats. How many premium seats were sold? Step 1: 480000 × 75% = 360000. Step 2: 360000 × (3 ÷ 8) = ?",
    "question_ar": "يضم ملعب رياضي في شيكاغو 480000 مقعداً. خلال مباراة البطولة، بيع 75% من المقاعد. من المقاعد المبيعة، 3 من كل 8 كانت مقاعد مميزة. كم عدد المقاعد المميزة المبيعة؟ الخطوة 1: 480000 × 75% = 360000. الخطوة 2: 360000 × (3 ÷ 8) = ؟",
    "answer": 135000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two operations: first find 75% of 480000 (total sold), then find 3/8 of that result (premium sold).",
            "explanation_ar": "عمليتان: أولاً أوجد 75% من 480000 (إجمالي المبيع)، ثم أوجد 3/8 من ذلك الناتج (المميز المبيع)."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Step 1: 75% = 3/4. So 480000 × 3/4 = 480000 ÷ 4 × 3 = 120000 × 3 = 360000 seats sold.",
            "explanation_ar": "الخطوة 1: 75% = 3/4. إذاً 480000 × 3/4 = 480000 ÷ 4 × 3 = 120000 × 3 = 360000 مقعد مبيع."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Step 2: 3/8 of 360000 = 360000 ÷ 8 × 3 = 45000 × 3 = 135000.",
            "explanation_ar": "الخطوة 2: 3/8 من 360000 = 360000 ÷ 8 × 3 = 45000 × 3 = 135000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "135000 premium seats were sold at the Chicago championship game.",
            "explanation_ar": "بيع 135000 مقعداً مميزاً في مباراة البطولة بشيكاغو."
          }
        ],
        "hint_en": "75% = 3/4. Apply fraction multiplication twice, dividing before multiplying.",
        "hint_ar": "75% = 3/4. طبّق ضرب الكسور مرتين، مع القسمة قبل الضرب.",
        "result_en": "135000 premium seats",
        "result_ar": "135000 مقعد مميز"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Two-step problem. Step 1: find 75% of 480000. Step 2: find 3/8 of the step-1 answer.",
            "explanation_ar": "مسألة من خطوتين. الخطوة 1: أوجد 75% من 480000. الخطوة 2: أوجد 3/8 من إجابة الخطوة 1."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "75% of 480000: 10% = 48000, so 70% = 336000, 5% = 24000, total = 360000.",
            "explanation_ar": "75% من 480000: 10% = 48000، إذاً 70% = 336000، 5% = 24000، الإجمالي = 360000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "3/8 of 360000: 360000 ÷ 8 = 45000; 45000 × 3 = 135000.",
            "explanation_ar": "3/8 من 360000: 360000 ÷ 8 = 45000؛ 45000 × 3 = 135000."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 135000 × 8 ÷ 3 = 360000 ✓, 360000 ÷ 480000 = 75% ✓. Premium seats sold: 135000.",
            "explanation_ar": "تحقق: 135000 × 8 ÷ 3 = 360000 ✓، 360000 ÷ 480000 = 75% ✓. المقاعد المميزة المبيعة: 135000."
          }
        ],
        "hint_en": "Break into two separate fraction calculations: 75% then 3/8.",
        "hint_ar": "قسّم إلى حسابين منفصلين للكسور: 75% ثم 3/8.",
        "result_en": "135000 premium seats",
        "result_ar": "135000 مقعد مميز"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Visualise the Chicago stadium packed with fans. The full stadium holds 480000. Three-quarters of it is filled — that's the sold section.",
            "explanation_ar": "تخيّل الملعب في شيكاغو مكتظاً بالجماهير. يتسع الملعب بالكامل لـ 480000. ثلاثة أرباعه مشغول — هذا هو الجزء المبيع."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a big bar = 480000. Shade 3 of 4 equal sections = 360000 sold seats. Now divide that shaded bar into 8 equal parts and shade 3 of them.",
            "explanation_ar": "ارسم شريطاً كبيراً = 480000. ظلّل 3 من أصل 4 أجزاء متساوية = 360000 مقعد مبيع. الآن قسّم الشريط المظلّل إلى 8 أجزاء متساوية وظلّل 3 منها."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each of the 8 parts = 360000 ÷ 8 = 45000. The 3 shaded parts = 3 × 45000 = 135000.",
            "explanation_ar": "كل جزء من الـ 8 = 360000 ÷ 8 = 45000. الأجزاء الثلاثة المظلّلة = 3 × 45000 = 135000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The double-shaded region represents 135000 premium seats sold at the Chicago game.",
            "explanation_ar": "تمثّل المنطقة المظلّلة مزدوجة 135000 مقعداً مميزاً مبيعاً في مباراة شيكاغو."
          }
        ],
        "hint_en": "First shade 3/4 of the whole bar, then shade 3/8 of that shaded part.",
        "hint_ar": "أولاً ظلّل 3/4 من الشريط الكلي، ثم ظلّل 3/8 من ذلك الجزء المظلّل.",
        "result_en": "135000 premium seats",
        "result_ar": "135000 مقعد مميز"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g6-specific-word-hard-002",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A market in Casablanca sells spices in bags. The total stock is 720000 grams. The shop gives a 30% discount sale and sells 60% of its stock. How many grams of spices were sold during the sale? Step 1: 720000 × 60% = 432000. Step 2: 432000 ÷ 1 = 432000 (note: discount affects price not quantity). How many grams remain? 720000 − 432000 = ?",
    "question_ar": "يبيع سوق في الدار البيضاء البهارات في أكياس. المخزون الكلي 720000 غرام. أجرى المتجر تخفيضاً بنسبة 30% وباع 60% من مخزونه. كم غراماً من البهارات تبقّى بعد البيع؟ الخطوة 1: 720000 × 60% = 432000 غرام مبيعة. الخطوة 2: 720000 − 432000 = ؟",
    "answer": 288000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two steps: find 60% of 720000 (grams sold), then subtract from 720000 to find the remainder.",
            "explanation_ar": "خطوتان: أوجد 60% من 720000 (الغرامات المبيعة)، ثم اطرحها من 720000 لإيجاد الباقي."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "60% of 720000: 10% = 72000, so 60% = 6 × 72000 = 432000 grams sold.",
            "explanation_ar": "60% من 720000: 10% = 72000، إذاً 60% = 6 × 72000 = 432000 غرام مبيعة."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Grams remaining = 720000 − 432000 = 288000.",
            "explanation_ar": "الغرامات المتبقية = 720000 − 432000 = 288000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "288000 grams of spices remain after the Casablanca market sale.",
            "explanation_ar": "يتبقى 288000 غرام من البهارات بعد بيع سوق الدار البيضاء."
          }
        ],
        "hint_en": "Find 10% of 720000 = 72000, then ×6 for 60%, then subtract from 720000.",
        "hint_ar": "أوجد 10% من 720000 = 72000، ثم ×6 للحصول على 60%، ثم اطرح من 720000.",
        "result_en": "288000 grams remaining",
        "result_ar": "288000 غرام متبقية"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Total = 720000 g. Sold = 60% of total. Remaining = total − sold.",
            "explanation_ar": "الإجمالي = 720000 غ. المبيع = 60% من الإجمالي. الباقي = الإجمالي − المبيع."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "Sold: 60% × 720000 = 432000 g. Alternatively, 40% remains: 40% × 720000 = 4 × 72000 = 288000.",
            "explanation_ar": "المبيع: 60% × 720000 = 432000 غ. أو بديلاً، 40% تبقّى: 40% × 720000 = 4 × 72000 = 288000."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "720000 − 432000 = 288000 grams remaining.",
            "explanation_ar": "720000 − 432000 = 288000 غرام متبقية."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 432000 + 288000 = 720000 ✓. Remaining spices: 288000 g.",
            "explanation_ar": "تحقق: 432000 + 288000 = 720000 ✓. البهارات المتبقية: 288000 غ."
          }
        ],
        "hint_en": "60% is sold, so 40% remains. 40% of 720000 = 4 × 72000.",
        "hint_ar": "60% مبيعة، إذاً 40% تبقّت. 40% من 720000 = 4 × 72000.",
        "result_en": "288000 grams remaining",
        "result_ar": "288000 غرام متبقية"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Picture the colourful spice stalls of Casablanca market: sacks totalling 720000 grams. The sale sweeps away a big portion.",
            "explanation_ar": "تخيّل أكشاك البهارات الملوّنة في سوق الدار البيضاء: أكياس تبلغ 720000 غرام. البيع يُزيل جزءاً كبيراً منها."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar = 720000. Shade 60% (6 out of 10 equal sections) = 432000 g sold. The unshaded portion = 40% = 288000 g.",
            "explanation_ar": "ارسم شريطاً = 720000. ظلّل 60% (6 من أصل 10 أجزاء متساوية) = 432000 غ مبيعة. الجزء غير المظلّل = 40% = 288000 غ."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "Each section = 72000. Unshaded 4 sections = 4 × 72000 = 288000 g.",
            "explanation_ar": "كل قسم = 72000. 4 أقسام غير مظلّلة = 4 × 72000 = 288000 غ."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The unshaded 40% of the bar is what stays on the Casablanca shelves: 288000 grams.",
            "explanation_ar": "الـ 40% غير المظلّل من الشريط هو ما يبقى على أرفف الدار البيضاء: 288000 غرام."
          }
        ],
        "hint_en": "If 60% is sold, the remaining 40% stays. 40% of 720000 = 288000.",
        "hint_ar": "إذا بيع 60%، يتبقى 40%. 40% من 720000 = 288000.",
        "result_en": "288000 grams remaining",
        "result_ar": "288000 غرام متبقية"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  },
  {
    "id": "g6-specific-word-hard-003",
    "grade": 6,
    "bank": "specific",
    "category": "Word Problem",
    "level": "Hard",
    "question_en": "A construction project in Kuala Lumpur uses cement and sand in a ratio of 2 : 5. The total material used is 560000 kg. After completing the project, 35% of the sand is left unused. How many kilograms of sand were left unused? Step 1: Sand used = (5 ÷ 7) × 560000 = 400000 kg. Step 2: 400000 × 35% = ?",
    "question_ar": "يستخدم مشروع بناء في كوالالمبور الأسمنت والرمل بنسبة 2 : 5. إجمالي المواد المستخدمة 560000 كغ. بعد إتمام المشروع، تبقّى 35% من الرمل دون استخدام. كم كيلوغراماً من الرمل بقي دون استخدام؟ الخطوة 1: الرمل = (5 ÷ 7) × 560000 = 400000 كغ. الخطوة 2: 400000 × 35% = ؟",
    "answer": 140000,
    "methods": {
      "vedic": {
        "steps": [
          {
            "step": 1,
            "title_en": "Observe",
            "title_ar": "لاحظ",
            "explanation_en": "Two steps: find the sand portion using the ratio 2 : 5 (total 7 parts), then find 35% of that sand amount.",
            "explanation_ar": "خطوتان: أوجد حصة الرمل باستخدام النسبة 2 : 5 (إجمالي 7 أجزاء)، ثم أوجد 35% من كمية الرمل."
          },
          {
            "step": 2,
            "title_en": "Compute Key Values",
            "title_ar": "احسب القيم الأساسية",
            "explanation_en": "Step 1: One part = 560000 ÷ 7 = 80000 kg. Sand = 5 parts = 5 × 80000 = 400000 kg.",
            "explanation_ar": "الخطوة 1: جزء واحد = 560000 ÷ 7 = 80000 كغ. الرمل = 5 أجزاء = 5 × 80000 = 400000 كغ."
          },
          {
            "step": 3,
            "title_en": "Apply the Rule",
            "title_ar": "طبّق القاعدة",
            "explanation_en": "Step 2: 35% of 400000. 10% = 40000, so 30% = 120000 and 5% = 20000. 35% = 140000.",
            "explanation_ar": "الخطوة 2: 35% من 400000. 10% = 40000، إذاً 30% = 120000 و5% = 20000. 35% = 140000."
          },
          {
            "step": 4,
            "title_en": "Combine & State",
            "title_ar": "اجمع وأعلن",
            "explanation_en": "140000 kg of sand were left unused in Kuala Lumpur.",
            "explanation_ar": "بقي 140000 كغ من الرمل دون استخدام في كوالالمبور."
          }
        ],
        "hint_en": "Find sand (5/7 of 560000 = 400000), then 35% of 400000 = 140000.",
        "hint_ar": "أوجد الرمل (5/7 من 560000 = 400000)، ثم 35% من 400000 = 140000.",
        "result_en": "140000 kg of sand unused",
        "result_ar": "140000 كغ من الرمل غير مستخدمة"
      },
      "decompose": {
        "steps": [
          {
            "step": 1,
            "title_en": "Identify & Split",
            "title_ar": "حدّد وقسّم",
            "explanation_en": "Total = 560000 kg, ratio cement:sand = 2:5, total parts = 7. Then find 35% of the sand.",
            "explanation_ar": "الإجمالي = 560000 كغ، النسبة أسمنت:رمل = 2:5، إجمالي الأجزاء = 7. ثم أوجد 35% من الرمل."
          },
          {
            "step": 2,
            "title_en": "Operate on Each Part",
            "title_ar": "اعمل على كل جزء",
            "explanation_en": "One part = 560000 ÷ 7 = 80000. Sand = 5 × 80000 = 400000 kg.",
            "explanation_ar": "جزء واحد = 560000 ÷ 7 = 80000. الرمل = 5 × 80000 = 400000 كغ."
          },
          {
            "step": 3,
            "title_en": "Recombine",
            "title_ar": "أعد التجميع",
            "explanation_en": "35% of 400000 = (35 × 400000) ÷ 100 = 14000000 ÷ 100 = 140000 kg.",
            "explanation_ar": "35% من 400000 = (35 × 400000) ÷ 100 = 14000000 ÷ 100 = 140000 كغ."
          },
          {
            "step": 4,
            "title_en": "Verify & State",
            "title_ar": "تحقق وأعلن",
            "explanation_en": "Check: 140000 ÷ 400000 = 0.35 = 35% ✓. Unused sand: 140000 kg.",
            "explanation_ar": "تحقق: 140000 ÷ 400000 = 0.35 = 35% ✓. الرمل غير المستخدم: 140000 كغ."
          }
        ],
        "hint_en": "Step 1: Sand = 5/7 × 560000. Step 2: 35% of that result.",
        "hint_ar": "الخطوة 1: الرمل = 5/7 × 560000. الخطوة 2: 35% من ذلك الناتج.",
        "result_en": "140000 kg of sand unused",
        "result_ar": "140000 كغ من الرمل غير مستخدمة"
      },
      "visualize": {
        "steps": [
          {
            "step": 1,
            "title_en": "Anchor to Story",
            "title_ar": "اربط بالقصة",
            "explanation_en": "Imagine a large construction site in Kuala Lumpur — trucks delivering 560000 kg of materials. Most is sand; some is cement.",
            "explanation_ar": "تخيّل موقع بناء كبير في كوالالمبور — شاحنات تُوصل 560000 كغ من المواد. معظمها رمل؛ والبعض أسمنت."
          },
          {
            "step": 2,
            "title_en": "Build the Model",
            "title_ar": "ابنِ النموذج",
            "explanation_en": "Draw a bar of 7 equal parts (each = 80000 kg). Label 2 parts cement (160000) and 5 parts sand (400000). Now shade 35% of the sand bar.",
            "explanation_ar": "ارسم شريطاً من 7 أجزاء متساوية (كل منها = 80000 كغ). سمّ جزأين أسمنتاً (160000) و5 أجزاء رملاً (400000). الآن ظلّل 35% من شريط الرمل."
          },
          {
            "step": 3,
            "title_en": "Read the Model",
            "title_ar": "اقرأ النموذج",
            "explanation_en": "35% of 400000: split the sand bar into 20 equal pieces (each = 20000), shade 7 of them. 7 × 20000 = 140000.",
            "explanation_ar": "35% من 400000: قسّم شريط الرمل إلى 20 قطعة متساوية (كل منها = 20000)، ظلّل 7 منها. 7 × 20000 = 140000."
          },
          {
            "step": 4,
            "title_en": "Solve & Connect",
            "title_ar": "احلل واربط",
            "explanation_en": "The shaded leftover sand section represents 140000 kg — the unused sand from the Kuala Lumpur project.",
            "explanation_ar": "يمثّل قسم الرمل المتبقي المظلّل 140000 كغ — الرمل غير المستخدم من مشروع كوالالمبور."
          }
        ],
        "hint_en": "Find the 5-part sand bar (400000), then shade 35% of it.",
        "hint_ar": "أوجد شريط الرمل المؤلّف من 5 أجزاء (400000)، ثم ظلّل 35% منه.",
        "result_en": "140000 kg of sand unused",
        "result_ar": "140000 كغ من الرمل غير مستخدمة"
      }
    },
    "meta": {
      "lower_grade_equivalent": "g5-specific-word-hard-003",
      "upper_grade_equivalent": "g7-specific-word-hard-001",
      "fun_fact_tag": "word_problems"
    }
  }
];

export const getByCategory = (cat: string) =>
  grade6LearnBank.filter(p => p.category === cat);

export const getByLevel = (level: 'Easy' | 'Medium' | 'Hard') =>
  grade6LearnBank.filter(p => p.level === level);

export const getById = (id: string) =>
  grade6LearnBank.find(p => p.id === id) ?? null;

export const getByTag = (tag: string) =>
  grade6LearnBank.filter(p => p.meta.fun_fact_tag === tag);
