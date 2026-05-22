const quizzes = [
  //multiple, true_false, complete
  {
    //Law and Human Rights
    id: "human-rights-and-law-qbank-1",
    title: "Law and Human Rights Qbank",
    shuffleQuestions: false,
    showScore: true,
    quizModeTimer: 1800,
    questions: [
      {
        question: "الإنسان كائن اجتماعي بطبعه، ولا يمكن أن يعيش بمفرده.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القانون ليس ضرورة اجتماعية، ويمكن للمجتمع أن يوجد بدونه.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "القاعدة القانونية تتكون من عنصرين رئيسيين : الفرض والحكم.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "القاعدة القانونية يجب أن تكون عامة ومجردة لتحقيق المساواة بين الأفراد.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القاعدة القانونية تهتم بتنظيم النوايا الداخلية للإنسان.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "الجزاء القانوني يتميز بأنه مادي ودنيوي ومنصوص عليه في القانون.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "الجزاء الجنائي هو أشد أنواع الجزاءات ويهدف إلى الزجر والردع.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "مخالفة قواعد المجاملات والعادات يترتب عليها جزاء توقعه السلطة العامة.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "قواعد الأخلاق تختلف من مجتمع لآخر ومن فترة زمنية لأخرى.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "قواعد الدين مصدرها الوحي الإلهي، بينما قواعد القانون مصدرها التشريع أو العرف.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "الغاية من قواعد الدين هي المحافظة على النظام داخل المجتمع.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "جزاء مخالفة القواعد القانونية هو جزاء أخروي مؤجل إلى يوم القيامة.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "مخالفة قواعد الأخلاق يترتب عليها تأنيب الضمير، وهو جزاء توقعه السلطة العامة.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "قواعد الدين مصدرها الوحي الإلهي، بينما قواعد القانون مصدرها التشريع أو العرف. (مكرر)",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "نطاق قواعد الدين أضيق من نطاق قواعد القانون.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "القانون الدولي العام ينظم علاقات الدول في وقت السلم فقط.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "العرف هو المصدر الأساسي للقانون الدولي العام.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القانون الدستوري يعتبر من فروع القانون الخاص.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "القانون الإداري ينظم علاقة الدولة بموظفيها.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "القانون الجنائي ينقسم إلى قانون العقوبات وقانون الإجراءات الجنائية.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القانون المالي كان جزءا من القانون الإداري في الماضي.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القانون الجنائي يعتبر من فروع القانون الخاص.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "القانون المدني هو الفرع الوحيد للقانون الخاص الذي ينظم جميع العلاقات القانونية في مجال القانون الخاص.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "القانون المدني المصري ينظم مسائل الأحوال الشخصية مثل الزواج والطلاق.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "القانون التجاري ينظم العلاقات بين التجار والأعمال التجارية.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "في القانون التجاري التضامن بين المدينين مفترض.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القانون البحري كان في الماضي جزءا من القانون التجاري.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "قانون العمل ينظم العلاقة بين العامل المأجور وصاحب العمل.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "قانون المرافعات المدنية والتجارية يتضمن قواعد تنتمي إلى القانون العام والقانون الخاص.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "القانون الدولي الخاص يحدد القانون الواجب التطبيق والمحكمة المختصة في العلاقات ذات العنصر الأجنبي.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "قانون العمل يخضع بالكامل لقواعد القانون المدني.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "في القانون التجاري، يجوز إعطاء المدين نظرة ميسرة (أجل قضائي).",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "القانون البحري يهتم بتنظيم العقود الواردة على السفينة فقط.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "قانون المرافعات المدنية والتجارية ينظم السلطة القضائية وإجراءات التقاضي.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القانون الدولي الخاص يتضمن حلاً موضوعياً للنزاعات.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "قانون العمل يعتبر من فروع القانون العام.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "القواعد القانونية الآمرة هي التي يجوز للأفراد الاتفاق على مخالفتها.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "القواعد المكملة تطبق فقط إذا سكت الأفراد عن تنظيم العلاقة.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "قواعد قانون العقوبات تعتبر قواعد مكملة.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "فكرة النظام العام فكرة نسبية تختلف من بلد لآخر ومن زمن لآخر.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "قواعد القانون العام كلها متعلقة بالنظام العام.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "قواعد الأحوال الشخصية في القانون الخاص تعتبر قواعد مكملة.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "القواعد التي تضع حداً أقصى لسعر الفائدة تعتبر قواعد مكملة.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "فكرة الآداب تختلف باختلاف الزمان والمكان.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "عقد التأمين على الحياة كان يعتبر مخالفاً للآداب في الماضي.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "كل عقد مخالف للنظام العام أو الآداب يكون باطلاً.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القواعد المكملة تهدف إلى حماية المصالح الأساسية في المجتمع.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "القواعد الآمرة يمكن أن تكون في صورة الأمر أو النهي.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "القواعد المكملة لا يمكن أن تكون متعلقة بالنظام العام.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "تسري أحكام قانون العمل الجديد على العاملين بأجهزة الدولة ووحدات الإدارة المحلية والهيئات العامة.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "يحظر قانوناً تشغيل العامل سخرة أو جبراً، كما يحظر التحرش أو التنمر في مكان العمل.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "لا تعتبر المزايا المقررة للمرأة أو الطفل أو الأشخاص ذوي الإعاقة تمييزاً محظوراً وفقاً للقانون.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "يعفى العمال المتدرجون وعمال التلمذة الصناعية من الرسوم والمصاريف القضائية في جميع مراحل التقاضي.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "يستحق العامل علاوة سنوية دورية لا تقل عن 7% من أجر الاشتراك التأميني.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "يعتبر العمل 'عرضياً' إذا كان لا يدخل بطبيعته في نشاط صاحب العمل ولا يستغرق أكثر من ستة أشهر.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "يجوز لصاحب العمل تشغيل الأطفال الذين لم يبلغوا سن الرابعة عشرة كمتدرجين.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "تخفض ساعات العمل اليومية للمرأة الحامل ساعة على الأقل اعتباراً من الشهر السادس للحمل.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "يحق للعاملة الحصول على إجازة وضع مدفوعة الأجر لمدة أربعة أشهر بحد أقصى ثلاث مرات طوال مدة خدمتها.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "في حالة وفاة العامل وهو في الخدمة يلتزم صاحب العمل بصرف منحة تعادل أجر شهر الوفاة والشهرين التاليين.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "الإجازة السنوية للأشخاص ذوي الإعاقة والأقزام هي ثلاثون يوماً.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "يجوز للجهة الطبية منع العامل المخالط لمريض بمرض معد من مزاولة عمله لمدة لا تجاوز ثلاثة أشهر.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "يختص 'المجلس القومي للأجور' بوضع الحد الأدنى للأجور على المستوى القومي.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "لا يجوز للعامل الإضراب عن العمل إلا بعد استنفاد طرق التسوية الودية للمنازعات.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "تلتزم المنشآت التي تستخدم ثلاثين عاملاً فأكثر بموافاة الجهة الإدارية بإحصائية نصف سنوية عن الإصابات والحوادث.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "ما هو المعنى اللغوي للحق؟",
        type: "multiple",
        options: ["الواجب", "الغالب", "الجدارة", "جميع الإجابات صحيحة"],
        correctAnswer: "جميع الإجابات صحيحة",
        shuffle: true,
      },
      {
        question: "ما هو المعنى الاصطلاحي للحق؟",
        type: "multiple",
        options: [
          "سلطة إرادية للفرد أو مصلحة يحميها القانون",
          "انتماء أو اختصاص لشخص يحميه القانون",
          "السلطات التي يمكن لصاحبها ممارستها بالنسبة للقيمة التي تثبت له",
          "جميع الإجابات صحيحة",
        ],
        correctAnswer: "جميع الإجابات صحيحة",
        shuffle: true,
      },
      {
        question: "ما هو الفرق بين الحق والحرية؟",
        type: "multiple",
        options: [
          "الحق هو اختصاص واستئثار بموضوع الحق، بينما الحرية هي مكنة عامة",
          "الحق هو سلطة التسلط على شيء، بينما الحرية هي قدرة على التصرف",
          "الحق هو التعبير عن حرية الفرد وكرامته، بينما الحرية هي الأساس الذي يقوم عليه الحق",
          "الحق والحرية مترابطان بشكل وثيق",
        ],
        correctAnswer:
          "الحق هو اختصاص واستئثار بموضوع الحق، بينما الحرية هي مكنة عامة",
        shuffle: true,
      },
      {
        question:
          "ما هي النظرية التي ترى أن الإنسان يولد بحقوق طبيعية ثابتة لا تمس؟",
        type: "multiple",
        options: [
          "نظرية القانون الطبيعي",
          "نظرية الحقوق الفردية",
          "نظرية الحقوق الجماعية",
          "نظرية الحقوق الاجتماعية",
        ],
        correctAnswer: "نظرية القانون الطبيعي",
        shuffle: true,
      },
      {
        question: "ما هي الحضارة التي وضعت أقدم قانون مدون في تاريخ البشرية؟",
        type: "multiple",
        options: [
          "حضارة وادي الرافدين",
          "الحضارة المصرية القديمة",
          "الحضارة اليونانية القديمة",
          "الحضارة الرومانية القديمة",
        ],
        correctAnswer: "حضارة وادي الرافدين",
        shuffle: true,
      },
      {
        question:
          "ما هي النظرية التي ترى أن حقوق الإنسان تعتبر حقوقاً طبيعية أصلية؟",
        type: "multiple",
        options: [
          "نظرية الحقوق الطبيعية",
          "نظرية العقد الاجتماعي",
          "نظرية القانون الطبيعي",
          "نظرية الحقوق الفردية",
        ],
        correctAnswer: "نظرية الحقوق الطبيعية",
        shuffle: true,
      },
      {
        question: "من هو الفيلسوف الذي يعتبر مؤسس نظرية العقد الاجتماعي؟",
        type: "multiple",
        options: ["توماس هوبز", "جون لوك", "جان جاك روسو", "أفلاطون"],
        correctAnswer: "توماس هوبز",
        shuffle: true,
      },
      {
        question:
          "ما هي النظرية التي ترى أن الحياة في ظل القانون الطبيعي هي حالة سلمية نسبياً وليست فوضوية؟",
        type: "multiple",
        options: [
          "نظرية توماس هوبز",
          "نظرية جون لوك",
          "نظرية جان جاك روسو",
          "نظرية أرسطو",
        ],
        correctAnswer: "نظرية جون لوك",
        shuffle: true,
      },
      {
        question:
          "ما هي الحقوق التي تعتبر من أبرز مواد القانون الدولي لحقوق الإنسان؟",
        type: "multiple",
        options: [
          "الحقوق الاقتصادية والاجتماعية",
          "الحقوق السياسية",
          "الحقوق المدنية",
          "الحقوق الثقافية",
        ],
        correctAnswer: "الحقوق السياسية",
        shuffle: true,
      },
      {
        question:
          "ما هي الفترة التاريخية التي امتدت لأكثر من عشرة قرون وبدأت مع انهيار الإمبراطورية الرومانية الغربية؟",
        type: "multiple",
        options: [
          "العصور الوسطى",
          "العصور القديمة",
          "العصور الحديثة",
          "العصور الكلاسيكية",
        ],
        correctAnswer: "العصور الوسطى",
        shuffle: true,
      },
      {
        question:
          "ما هو النظام الذي قام على مبدأ سيطرة النبلاء وأصحاب الأراضي على المقاطعات خلال العصور الوسطى؟",
        type: "multiple",
        options: [
          "النظام الإقطاعي",
          "النظام الملكي",
          "النظام الديمقراطي",
          "النظام الجمهوري",
        ],
        correctAnswer: "النظام الإقطاعي",
        shuffle: true,
      },
      {
        question:
          "ما هي الثورة التي أدت إلى إعلان حقوق الإنسان والمواطن عام 1789؟",
        type: "multiple",
        options: [
          "الثورة الأمريكية",
          "الثورة الفرنسية",
          "الثورة الروسية",
          "الثورة الصناعية",
        ],
        correctAnswer: "الثورة الفرنسية",
        shuffle: true,
      },
      {
        question:
          "من هو عالم الاجتماع الفرنسي الذي درس الجوانب السياسية والاقتصادية الفرنسية في عصره؟",
        type: "multiple",
        options: ["مونتسكيو", "جان جاك روسو", "توماس هوبز", "جون لوك"],
        correctAnswer: "مونتسكيو",
        shuffle: true,
      },
      {
        question: "ما هي الاتفاقية التي تهدف إلى حماية حقوق العمال ورفاهيتهم؟",
        type: "multiple",
        options: [
          "اتفاقية منع الإبادة الجماعية",
          "اتفاقية القضاء على التمييز العنصري",
          "اتفاقية حقوق الطفل",
          "اتفاقية منظمة العمل الدولية",
        ],
        correctAnswer: "اتفاقية منظمة العمل الدولية",
        shuffle: true,
      },
      {
        question:
          "ما هي الاتفاقية التي تهدف إلى حماية حقوق جميع العمال المهاجرين وأفراد أسرهم؟",
        type: "multiple",
        options: [
          "الاتفاقية الدولية لحماية حقوق جميع العمال المهاجرين وأفراد أسرهم",
          "اتفاقية حقوق الطفل",
          "اتفاقية منع الإبادة الجماعية",
          "اتفاقية القضاء على التمييز العنصري",
        ],
        correctAnswer:
          "الاتفاقية الدولية لحماية حقوق جميع العمال المهاجرين وأفراد أسرهم",
        shuffle: true,
      },
      {
        question:
          "ما هي الخاصية التي تشير إلى أن حقوق الإنسان تعطى لجميع الأفراد بدون تمييز؟",
        type: "multiple",
        options: ["العالمية", "العمومية والتجريد", "النسبية", "الشمولية"],
        correctAnswer: "العمومية والتجريد",
        shuffle: true,
      },
      {
        question: "ما هو المبدأ الذي يؤكد على ترابط وتكامل جميع حقوق الإنسان؟",
        type: "multiple",
        options: [
          "مبدأ العالمية",
          "مبدأ عدم التمييز",
          "مبدأ التكامل والاعتماد المتبادل",
          "مبدأ سيادة القانون",
        ],
        correctAnswer: "مبدأ التكامل والاعتماد المتبادل",
        shuffle: true,
      },
      {
        question:
          "أي من التالي يعتبر من القواعد الآمرة في القانون الدولي لحقوق الإنسان؟",
        type: "multiple",
        options: [
          "حق التملك",
          "حق التعليم",
          "تحريم الإبادة الجماعية",
          "حق العمل",
        ],
        correctAnswer: "تحريم الإبادة الجماعية",
        shuffle: true,
      },
      {
        question:
          "ما المبدأ الذي يحظر بموجبه أي تمييز في التمتع بحقوق الإنسان؟",
        type: "multiple",
        options: [
          "مبدأ المساواة",
          "مبدأ عدم التجزئة",
          "مبدأ عدم التنازل",
          "مبدأ عدم الانتزاع",
        ],
        correctAnswer: "مبدأ المساواة",
        shuffle: true,
      },
      {
        question:
          "ما هي الوثيقة التي تعتبر اللبنة الأساسية للقانون الدولي لحقوق الإنسان والقانون الدولي الإنساني؟",
        type: "multiple",
        options: [
          "الإعلان العالمي لحقوق الإنسان",
          "ميثاق الأمم المتحدة",
          "اتفاقية جنيف",
          "العهد الدولي الخاص بالحقوق المدنية والسياسية",
        ],
        correctAnswer: "ميثاق الأمم المتحدة",
        shuffle: true,
      },
      {
        question: "أي من الحقوق التالية يندرج تحت الحقوق القانونية والقضائية؟",
        type: "multiple",
        options: [
          "الحق في المحاكمة العادلة",
          "الحق في الجنسية",
          "الحق في حرية التنقل",
          "الحق في السلامة الجسدية",
        ],
        correctAnswer: "الحق في المحاكمة العادلة",
        shuffle: true,
      },
      {
        question: "ما هي الحقوق التي يطلق عليها حقوق الجيل الثاني؟",
        type: "multiple",
        options: [
          "الحقوق الاقتصادية والاجتماعية والثقافية",
          "الحقوق المدنية والسياسية",
          "الحقوق الجماعية",
          "جميع الإجابات صحيحة",
        ],
        correctAnswer: "الحقوق الاقتصادية والاجتماعية والثقافية",
        shuffle: true,
      },
      {
        question:
          "ما هي الحقوق التي تشمل الحق في العمل والضمان الاجتماعي وحق الملكية والحق في مستوى معيشي مناسب والحق في الصحة؟",
        type: "multiple",
        options: [
          "الحقوق الاقتصادية والاجتماعية والثقافية",
          "الحقوق المدنية والسياسية",
          "الحقوق الجماعية",
          "جميع الإجابات صحيحة",
        ],
        correctAnswer: "الحقوق الاقتصادية والاجتماعية والثقافية",
        shuffle: true,
      },
      {
        question:
          "أي من الفئات التالية تستثنى صراحة من تطبيق أحكام قانون العمل رقم ١٤ لسنة ٢٠٢٥؟",
        type: "multiple",
        options: [
          "العمال الأجانب داخل مصر",
          "عمال الخدمة المنزلية ومن في حكمهم",
          "العاملون في شركات المساهمة الخاصة",
          "العمال في قطاع المقاولات والتشييد",
        ],
        correctAnswer: "عمال الخدمة المنزلية ومن في حكمهم",
        shuffle: true,
      },
      {
        question: "ما هو 'الأجر الأساسي' وفقاً لتعريفات القانون؟",
        type: "multiple",
        options: [
          "كل ما يحصل عليه العامل من عمولات ومنح ومكافآت",
          "الأجر المنصوص عليه في عقد العمل وما يطرأ عليه من علاوات",
          "الأجر الذي يتم على أساسه حساب اشتراكات التأمينات فقط",
          "الوهبة التي يحصل عليها العامل من غير صاحب العمل",
        ],
        correctAnswer:
          "الأجر المنصوص عليه في عقد العمل وما يطرأ عليه من علاوات",
        shuffle: true,
      },
      {
        question:
          "تؤول حصيلة المبالغ المحكوم بها عن مخالفة أحكام هذا القانون بنسبة الثلث لصالح :",
        type: "multiple",
        options: [
          "الخزانة العامة للدولة",
          "صندوق تمويل التدريب والتأهيل",
          "الوزارة المختصة للصرف على الخدمات الاجتماعية وتطوير التدريب",
          "المنظمات النقابية العمالية الأكثر تمثيلاً",
        ],
        correctAnswer:
          "الوزارة المختصة للصرف على الخدمات الاجتماعية وتطوير التدريب",
        shuffle: true,
      },
      {
        question:
          "يشترط في المدربين الذين يزاولون أعمال التدريب المهني الحصول على ترخيص من الوزارة المختصة برسم لا يجاوز :",
        type: "multiple",
        options: ["٥٠٠ جنيه", "١,٠٠٠ جنيه", "٥,٠٠٠ جنيه", "١٠,٠٠٠ جنيه"],
        correctAnswer: "٥,٠٠٠ جنيه",
        shuffle: true,
      },
      {
        question: "يحظر تشغيل الطفل تشغيلاً فعلياً لأكثر من :",
        type: "multiple",
        options: [
          "٤ ساعات يومياً",
          "٦ ساعات يومياً",
          "٧ ساعات يومياً",
          "٨ ساعات يومياً",
        ],
        correctAnswer: "٦ ساعات يومياً",
        shuffle: true,
      },
      {
        question: "يستحق العامل إجازة سنوية مدتها ٣٠ يوماً في حال :",
        type: "multiple",
        options: [
          "أمضى سنة كاملة في الخدمة",
          "كان من الأشخاص ذوي الإعاقة",
          "أمضى ١٠ سنوات لدى صاحب عمل أو أكثر أو تجاوز سن الخمسين",
          "كان يعمل في أعمال خطرة أو مضرة بالصحة",
        ],
        correctAnswer: "أمضى ١٠ سنوات لدى صاحب عمل أو أكثر أو تجاوز سن الخمسين",
        shuffle: true,
      },
      {
        question:
          "في حالة 'العمل عن بعد' ، يعرف هذا النمط بأنه أداء العمل في مكان :",
        type: "multiple",
        options: [
          "يختاره صاحب العمل داخل المنشأة",
          "يختلف عن المقر التقليدي للمنشأة باستخدام الوسائل التكنولوجية",
          "تجميعي يلتقي فيه العمال مرة واحدة أسبوعياً",
          "مخصص للتدريب فقط وليس للإنتاج",
        ],
        correctAnswer:
          "يختلف عن المقر التقليدي للمنشأة باستخدام الوسائل التكنولوجية",
        shuffle: true,
      },
      {
        question:
          "يلتزم صاحب العمل الذي يستخدم مائة عاملة فأكثر في مكان واحد بـ :",
        type: "multiple",
        options: [
          "توفير وسيلة مواصلات خاصة لهن",
          "إنشاء دار للحضانة أو العهد بدار للحضانة برعاية أطفالهن",
          "منحهن إجازة رعاية طفل مدفوعة الأجر لمدة ثلاث سنوات",
          "تخفيض ساعات العمل اليومية لهن ساعتين دون تقليل الأجر",
        ],
        correctAnswer: "إنشاء دار للحضانة أو العهد بدار للحضانة برعاية أطفالهن",
        shuffle: true,
      },
      {
        question:
          "ما هو الحد الأقصى لساعات العمل الفعلية في الأسبوع (دون احتساب ساعات الراحة)؟",
        type: "multiple",
        options: ["٣٥ ساعة", "٤٠ ساعة", "٤٨ ساعة", "٥٦ ساعة"],
        correctAnswer: "٤٨ ساعة",
        shuffle: true,
      },
      {
        question:
          "إذا انتهت علاقة العمل، يلتزم صاحب العمل بأداء أجر العامل وجميع مستحقاته في مدة لا تجاوز :",
        type: "multiple",
        options: [
          "٤٨ ساعة من تاريخ ترك العمل",
          "٧ أيام من تاريخ مطالبة العامل بها",
          "١٥ يوماً من تاريخ انتهاء العقد",
          "٣٠ يوماً (نهاية الشهر الميلادي)",
        ],
        correctAnswer: "٧ أيام من تاريخ مطالبة العامل بها",
        shuffle: true,
      },
      {
        question:
          "يحظر على صاحب العمل أن يقتطع من أجر العامل وفاء لما قرضه من مال أثناء سريان العقد أكثر من :",
        type: "multiple",
        options: [
          "٥٪ من الأجر",
          "١٠٪ من الأجر",
          "٢٥٪ من الأجر",
          "٥٠٪ من الأجر",
        ],
        correctAnswer: "١٠٪ من الأجر",
        shuffle: true,
      },
      {
        question:
          "أي من الجزاءات التالية لا يجوز لصاحب العمل توقيعها على العامل؟",
        type: "multiple",
        options: [
          "الإنذار الكتابي",
          "تأجيل الترقية لمدة لا تزيد على سنة",
          "تخفيض الأجر الأساسي بمقدار علاوتين",
          "الفصل من الخدمة وفقاً للقانون",
        ],
        correctAnswer: "تخفيض الأجر الأساسي بمقدار علاوتين",
        shuffle: true,
      },
      {
        question: "يختص 'مركز الوساطة والتحكيم' المنشأ بوزارة العمل بـ :",
        type: "multiple",
        options: [
          "الفصل في الدعاوى العمالية الفردية",
          "تسوية منازعات العمل الجماعية ودياً أو عبر التحكيم",
          "التفتيش على المنشآت للتأكد من شروط السلامة المهنية",
          "جباية الضرائب من أصحاب الأعمال",
        ],
        correctAnswer: "تسوية منازعات العمل الجماعية ودياً أو عبر التحكيم",
        shuffle: true,
      },
      {
        question:
          "يجب إخطار صاحب العمل والجهة الإدارية قبل الموعد المحدد للإضراب بمدة لا تقل عن :",
        type: "multiple",
        options: ["٣ أيام", "٧ أيام", "١٠ أيام", "١٥ يوماً"],
        correctAnswer: "١٠ أيام",
        shuffle: true,
      },
      {
        question: "يعتبر 'خطأ جسيماً' يجيز فصل العامل إذا ثبت :",
        type: "multiple",
        options: [
          "تأخر العامل عن المواعيد الرسمية مرتين شهرياً",
          "إفشاء أسرار المنشأة مما أدى لإحداث أضرار جسيمة بها",
          "عدم ارتداء الزي الرسمي للعمل",
          "التحدث في أمور شخصية أثناء ساعات العمل",
        ],
        correctAnswer: "إفشاء أسرار المنشأة مما أدى لإحداث أضرار جسيمة بها",
        shuffle: true,
      },
      {
        question: "مدة مهلة الإخطار لإنهاء عقد العمل غير محدد المدة هي :",
        type: "multiple",
        options: ["شهر واحد", "شهران", "ثلاثة أشهر", "ستة أشهر"],
        correctAnswer: "ثلاثة أشهر",
        shuffle: true,
      },
      {
        question:
          "تلتزم المنشأة باتخاذ الاحتياطات اللازمة للوقاية من المخاطر الفيزيائية، والتي تشمل :",
        type: "multiple",
        options: [
          "البكتيريا والفيروسات",
          "الضوضاء والاهتزازات والوطأة الحرارية",
          "الكهرباء الديناميكية والاستاتيكية",
          "الفطريات والطفيليات",
        ],
        correctAnswer: "الضوضاء والاهتزازات والوطأة الحرارية",
        shuffle: true,
      },
      {
        question:
          "تنشأ 'المحكمة العمالية' المتخصصة بنظر النزاعات الناشئة عن هذا القانون في دائرة اختصاص :",
        type: "multiple",
        options: [
          "كل محكمة جزئية",
          "كل محكمة ابتدائية",
          "كل محكمة استئناف فقط",
          "محكمة النقض بالقاهرة فقط",
        ],
        correctAnswer: "كل محكمة ابتدائية",
        shuffle: true,
      },
    ],
  },
  {
    //Biomedical Engineering
    id: "biomedical-engineering-qbank-solved",
    title: "Biomedical Engineering Qbank",
    shuffleQuestions: true,
    showScore: true,
    quizModeTimer: 1800,
    questions: [
      {
        id: "q1",
        question:
          "Which nerve cells carry impulses from the brain to the muscles is called ......",
        type: "complete",
        correctAnswer: "Motor",
      },
      {
        id: "q2",
        question: "Figure 1 represents ......",
        image: "img/Biomedical-Q2.png",
        type: "complete",
        correctAnswer: "Carbon electrode",
      },
      {
        id: "q3",
        question:
          "Electrocardiogram is obtained from bioelectrical signals from the ......",
        type: "complete",
        correctAnswer: "heart",
      },
      {
        id: "q4",
        question:
          "Electroencephalogram (EEG) is used in the diagnosis of the ......",
        type: "complete",
        correctAnswer: "brain",
      },
      {
        id: "q5",
        question: "The information is forwarded from the neuron through ......",
        type: "complete",
        correctAnswer: "Axon",
      },
      {
        id: "q6",
        question: "Depolarization is when ......",
        type: "complete",
        correctAnswer: "NA ions flow inside the neuron's membrane",
      },
      {
        id: "q7",
        question: "Most of a neuron's DNA is contained within its ......",
        type: "complete",
        correctAnswer: "nucleus",
      },
      {
        id: "q8",
        question:
          "...... is a rare type of sensory neuron that is found in special sensory structures like the retina of the eye.",
        type: "complete",
        correctAnswer: "Bipolar",
      },
      {
        id: "q9",
        question:
          "Ag-AgCl, Silver-Silver Chloride Electrodes interfaced with ......",
        type: "complete",
        correctAnswer: "AgCl",
      },
      {
        id: "q10",
        question: "Figure 2 represents ......",
        image: "img/Biomedical-Q10.jpg",
        type: "complete",
        correctAnswer: "Metal microelectrode",
      },
      {
        id: "q11",
        question: "The following neuron in figure 3 is known as ......",
        image: "img/Biomedical-Q11.jpg",
        type: "complete",
        correctAnswer: "unipolar neuron",
      },
      {
        id: "q12",
        question: "The following neuron in figure 4 considered in ......",
        image: "img/Biomedical-Q12.jpg",
        type: "complete",
        correctAnswer: "resting state",
      },
      {
        id: "q13",
        question: "In heart muscle, an action potential consumes ......",
        type: "complete",
        correctAnswer: "150 to 300 milliseconds",
      },
      {
        id: "q14",
        question:
          "In nerve and muscle, cell Action potential appears as a spike for ......",
        type: "complete",
        correctAnswer: "one millisecond",
      },
      {
        id: "q15",
        question: "Action potential is about ......",
        type: "complete",
        correctAnswer: "+20 mvolt",
      },
    ],
  },
  {
    //Network 2
    id: "network-2-questions-bank",
    title: "Network 2 Qbank",
    isSubjectGroup: true,
    chapters: [
      {
        id: "network-2-questions-bank",
        title: "Network 2 Midterm Qbank",
        shuffleQuestions: true,
        showScore: true,
        quizModeTimer: 1800,
        questions: [
          {
            question: "How many hosts in /24?",
            type: "multiple",
            options: ["128", "254", "256", "255"],
            correctAnswer: "254",
            shuffle: true,
          },
          {
            question: "What is /26 mask?",
            type: "multiple",
            options: [
              "255.255.255.0",
              "255.255.255.128",
              "255.255.255.192",
              "255.255.255.224",
            ],
            correctAnswer: "255.255.255.192",
            shuffle: true,
          },
          {
            question: "How many sub network in /24?",
            type: "multiple",
            options: ["Zero", "Two", "Four", "Six"],
            correctAnswer: "Zero",
            shuffle: true,
          },
          {
            question: "We calculate the number of hosts based on the rule",
            type: "multiple",
            options: [
              "N of hosts = 2^ones",
              "N of hosts = 256-last octet in new mask",
              "N of hosts = 2^ones - 2",
              "N of hosts = 2^zeros - 2",
            ],
            correctAnswer: "N of hosts = 2^zeros - 2",
            shuffle: true,
          },
          {
            question:
              "We calculate the number of sub networks based on the rule",
            type: "multiple",
            options: [
              "N of networks = 256-last octet in new mask",
              "N of networks = 2^ones",
              "N of networks = 2^ones - 2",
              "N of networks = 2^zeros - 2",
            ],
            correctAnswer: "N of networks = 2^ones",
            shuffle: true,
          },
          {
            question: "We calculate the Hop based on the rule.",
            type: "multiple",
            options: [
              "N of networks = 2^ones",
              "N of networks = 2^ones - 2",
              "N of networks = 256 - last octet in new mask",
              "N of networks = 2^zeros - 2",
            ],
            correctAnswer: "N of networks = 256 - last octet in new mask",
            shuffle: true,
          },
          {
            question: "How many sub network in /26?",
            type: "multiple",
            options: ["Zero", "Two", "Four", "Six"],
            correctAnswer: "Four",
            shuffle: true,
          },
          {
            question: "Last IP of subnet always?",
            type: "multiple",
            options: ["First host", "Last host", "Network ID", "Broadcast"],
            correctAnswer: "Broadcast",
            shuffle: true,
          },
          {
            question: "First IP of subnet always?",
            type: "multiple",
            options: ["First host", "Last host", "Network ID", "Broadcast"],
            correctAnswer: "Network ID",
            shuffle: true,
          },
          {
            question: "Subnet mask for /28?",
            type: "multiple",
            options: [
              "255.255.255.240",
              "255.255.255.224",
              "255.255.255.248",
              "255.255.255.192",
            ],
            correctAnswer: "255.255.255.240",
            shuffle: true,
          },
          {
            question: "Hosts in /28?",
            type: "multiple",
            options: ["14", "16", "30", "62"],
            correctAnswer: "14",
            shuffle: true,
          },
          {
            question: "Broadcast of 192.168.1.0/24?",
            type: "multiple",
            options: [
              "192.168.1.1",
              "192.168.1.255",
              "192.168.1.254",
              "192.168.0.255",
            ],
            correctAnswer: "192.168.1.255",
            shuffle: true,
          },
          {
            question: "VLSM allows?",
            type: "multiple",
            options: [
              "Same subnet size",
              "Different subnet sizes",
              "Only Classful",
              "No subnetting",
            ],
            correctAnswer: "Different subnet sizes",
            shuffle: true,
          },
          {
            question: "First step in VLSM?",
            type: "multiple",
            options: [
              "Assign IP",
              "Sort networks by size",
              "Configure router",
              "Broadcast",
            ],
            correctAnswer: "Sort networks by size",
            shuffle: true,
          },
          {
            question: "Subnet with 50 hosts needs?",
            type: "multiple",
            options: ["/26", "/27", "/25", "/28"],
            correctAnswer: "/26",
            shuffle: true,
          },
          {
            question: "Subnet with 10 hosts needs?",
            type: "multiple",
            options: ["/28", "/27", "/30", "/26"],
            correctAnswer: "/28",
            shuffle: true,
          },
          {
            question: "Largest subnet assigned first because?",
            type: "multiple",
            options: ["Easier", "Avoid fragmentation", "Faster", "Required"],
            correctAnswer: "Avoid fragmentation",
            shuffle: true,
          },
          {
            question: "VLSM is kind of?",
            type: "multiple",
            options: ["Routing", "Switching", "Broadcasting", "Subnetting"],
            correctAnswer: "Subnetting",
            shuffle: true,
          },
          {
            question: "Router uses",
            type: "multiple",
            options: ["MAC Table", "Routing Table", "ARP only", "VLAN"],
            correctAnswer: "Routing Table",
            shuffle: true,
          },
          {
            question: "Default route is.",
            type: "multiple",
            options: ["0.0.0.0/0", "255.255.255.0", "127.0.0.1", "1.1.1.1"],
            correctAnswer: "0.0.0.0/0",
            shuffle: true,
          },
          {
            question: "Interface must be.",
            type: "multiple",
            options: ["Down", "Shutdown", "No shutdown", "Reset"],
            correctAnswer: "No shutdown",
            shuffle: true,
          },
          {
            question: "Router decision based on.",
            type: "multiple",
            options: ["MAC", "IP address", "Port", "VLAN"],
            correctAnswer: "IP address",
            shuffle: true,
          },
          {
            question: "Router needs IP on.",
            type: "multiple",
            options: ["Switch", "Interface", "PC", "Cable"],
            correctAnswer: "Interface",
            shuffle: true,
          },
          {
            question: "To enter global config mode?",
            type: "multiple",
            options: ["ena", "config t", "show run", "exit"],
            correctAnswer: "config t",
            shuffle: true,
          },
          {
            question: "To enter Privileged mode?",
            type: "multiple",
            options: ["ena", "config t", "show run", "exit"],
            correctAnswer: "ena",
            shuffle: true,
          },
          {
            question: "To return to back previous mode.",
            type: "multiple",
            options: ["ena", "config t", "show run", "exit"],
            correctAnswer: "exit",
            shuffle: true,
          },
          {
            question: "To rename the Router.",
            type: "multiple",
            options: ["ena", "config t", "hostname", "exit"],
            correctAnswer: "hostname",
            shuffle: true,
          },
          {
            question: "To Know date and time for Router.",
            type: "multiple",
            options: ["show clock", "clock set", "hostname", "exit"],
            correctAnswer: "show clock",
            shuffle: true,
          },
          {
            question: "To set date and time",
            type: "multiple",
            options: ["show clock", "clock set", "hostname", "exit"],
            correctAnswer: "clock set",
            shuffle: true,
          },
          {
            question: "To Run any command in any case of mode",
            type: "multiple",
            options: ["show clock", "clock set", "do", "exit"],
            correctAnswer: "do",
            shuffle: true,
          },
          {
            question: "To save Configurations",
            type: "multiple",
            options: ["copy run start", "CTRL+S", "save", "All the above"],
            correctAnswer: "copy run start",
            shuffle: true,
          },
          {
            question: "To Enter interface",
            type: "multiple",
            options: ["view", "get", "enter", "interface"],
            correctAnswer: "interface",
            shuffle: true,
          },
          {
            question: "To Enable port",
            type: "multiple",
            options: ["ena", "enable", "run", "no shutdown"],
            correctAnswer: "no shutdown",
            shuffle: true,
          },
          {
            question: "To Disable port",
            type: "multiple",
            options: ["shutdown", "disable", "stop", "kill"],
            correctAnswer: "shutdown",
            shuffle: true,
          },
          {
            question: "To show table of routing",
            type: "multiple",
            options: [
              "show table",
              "rout table",
              "view rout table",
              "show ip route",
            ],
            correctAnswer: "show ip route",
            shuffle: true,
          },
        ],
      },
      {
        id: "network-2-questions-bank",
        title: "Network 2 Final Qbank",
        shuffleQuestions: false,
        showScore: true,
        quizModeTimer: 1800,
        questions: [
          {
            id: "q1-a-router-device-identification",
            type: "complete",
            image: "img/Network2-Final-Q1.jpg",
            question:
              "What is the device shown in figure.1 and What is it used for?",
            correctAnswer:
              "The device is Router and it's used to connect between different networks.",
          },
          {
            id: "q1-b-router-ports-symbolize",
            type: "complete",
            image: "img/Network2-Final-Q1.jpg",
            question: "In figure.1 What do the numbers from 1 to 4 symbolize?",
            orderMode: "ordered",
            correctAnswers: [
              "Serial Ports",
              "Ethernet Ports",
              "Consol Port",
              "Auxiliary Port",
            ],
          },
          {
            id: "q1-c-router-ports-usage",
            type: "complete",
            image: "img/Network2-Final-Q1.jpg",
            question: "In figure.1 What are the numbers from 1 to 4 used for?",
            orderMode: "ordered",
            correctAnswers: [
              "To connect with WAN Technology.",
              "To connect Router with other devices like another Switch or Router.",
              "To enter the Configurations to the Router directly",
              "To enter the Configurations to the Router Remotely",
            ],
          },
          {
            id: "q2-compare-router-memory",
            type: "complete",
            question:
              "Compare between ROM, RAM, NVRAM and Flash memory in Router components.",
            orderMode: "unordered",
            correctAnswers: [
              "ROM: Responsible for the post process",
              "RAM: Running IOS and Configurations file",
              "NVRAM: Configurations files are kept here",
              "Flash memory: IOS Image are kept here",
            ],
          },
          {
            id: "q3-post-process-definition",
            type: "complete",
            question: "What is meant by the post process?",
            correctAnswer:
              "A process that verifies the presence of all device components and that they are functioning normally.",
          },
          {
            id: "q4-router-bootup-sequence",
            type: "complete",
            question: "What is the Router Power on/Bootup Sequence",
            orderMode: "ordered",
            correctAnswers: [
              "Perform power-on self-test (POST).",
              "Find the Cisco IOS software.",
              "Load the Cisco IOS software.",
              "Find the configuration.",
              "Load the configuration.",
              "Run the configured Cisco IOS software",
            ],
          },
          {
            id: "q5-vlsm-definition-purpose",
            type: "complete",
            question: "Define VLSM and its purpose",
            correctAnswer: 
              "VLSM (Variable Length Subnet Mask) is a subnetting technique that allows using different subnet masks within the same network. Its main purpose is to allocate IP addresses efficiently based on the number of hosts required in each subnet, reducing IP waste.",
          },
          {
            id: "q6-allocate-largest-subnet-first",
            type: "complete",
            question: "Why do we allocate the largest subnet first in VLSM?",
            correctAnswer:
              "To avoid fragmentation and ensure efficient address allocation.",
          },
          {
            id: "q7-design-vlsm-steps",
            type: "complete",
            question:
              "Describe the steps used to design a VLSM addressing scheme.",
            orderMode: "ordered",
            correctAnswers: [
              "Determine required subnets",
              "Sort by largest number of hosts",
              "Assign subnet masks",
              "Allocate IP ranges",
              "Verify addressing",
            ],
          },
          {
            id: "q8-advantages-vlsm",
            type: "complete",
            question: "Advantages of VLSM",
            correctAnswers: 
              "VLSM improves IP address utilization by assigning different subnet sizes based on need. It reduces wastage, increases flexibility in network design, and supports better scalability in large enterprise networks.",
          },
          {
            id: "q9-why-vlsm-efficient",
            type: "complete",
            question: "Why is VLSM efficient?",
            correctAnswer:
              "Because it allocates IP addresses according to actual host needs instead of fixed sizes, which reduces unused addresses and improves overall network efficiency.",
          },
          {
            id: "q10-subnet-mask-borrowing",
            type: "complete",
            question: "Subnet mask borrowing",
            correctAnswer:
              "It is the process of taking bits from the host portion of an IP address and using them to create additional subnets, increasing the number of available networks.",
          },
          {
            id: "q11-dhcp-advantages-disadvantages",
            type: "complete",
            question: "Explain DHCP with its advantages and disadvantages?",
            orderMode: "unordered",
            correctAnswers: [
              "To automatically assign IP addresses and network settings to devices.",
              "Advantages: Automatic IP assignment, Reduced manual errors, Easier administration",
              "Disadvantages: Dependency on DHCP server, Possible security attacks",
            ],
          },
          {
            id: "q12-what-is-dhcp",
            type: "complete",
            question: "What is DHCP?",
            correctAnswer:
              "DHCP (Dynamic Host Configuration Protocol) is a protocol used to automatically assign IP addresses and network configuration parameters to devices on a network, reducing manual configuration.",
          },
          {
            id: "q13-dhcp-scope",
            type: "complete",
            question: "What is DHCP scope?",
            correctAnswer:
              "A DHCP scope is a defined range of IP addresses that a DHCP server can assign to clients, along with related configuration like gateway and DNS.",
          },
          {
            id: "q14-dhcp-lease-time",
            type: "complete",
            question: "What is the DHCP lease time?",
            correctAnswer:
              "It is the period for which a client is allowed to use an assigned IP address before it must be renewed or released back to the DHCP pool.",
          },
          {
            id: "q15-dhcp-reservation",
            type: "complete",
            question: "Describe DHCP reservation",
            correctAnswer:
              "It is a method where a specific IP address is permanently assigned to a device based on its MAC address, even though DHCP is used.",
          },
          {
            id: "q16-importance-dhcp-enterprise",
            type: "complete",
            question: "What is the Importance of DHCP in enterprise networks?",
            correctAnswer:
              "It reduces manual configuration, speeds up device deployment, and ensures consistent and centralized IP management across large networks.",
          },
          {
            id: "q17-dhcp-discover",
            type: "complete",
            question: "Describe DHCP Discover?",
            correctAnswer:
              "The client sends a broadcast message to find available DHCP servers in the network.",
          },
          {
            id: "q18-dhcp-offer",
            type: "complete",
            question: "What is DHCP Offer?",
            correctAnswer:
              "The DHCP server responds with an available IP address and configuration settings.",
          },
          {
            id: "q19-dhcp-request",
            type: "complete",
            question: "Describe DHCP Request",
            correctAnswer:
              "The client accepts the offered IP address and sends a request to the server to confirm assignment.",
          },
          {
            id: "q20-dhcp-ack",
            type: "complete",
            question: "What is DHCP ACK?",
            correctAnswer:
              "The server confirms the IP assignment and provides final configuration to the client.",
          },
          {
            id: "q21-dhcp-fails",
            type: "complete",
            question: "What happen If DHCP fails?",
            correctAnswer:
              "If no DHCP server responds, the device may assign itself an APIPA address (169.254.x.x) to maintain local communication.",
          },
          {
            id: "q22-apipa-definition",
            type: "complete",
            question: "What is APIPA?",
            correctAnswer:
              "APIPA automatically assigns a private IP address when DHCP is unavailable, allowing limited local network communication.",
          },
          {
            id: "q23-dhcp-relay-agent",
            type: "complete",
            question: "What is DHCP relay agent?",
            correctAnswer:
              "It is a network device that forwards DHCP requests between clients and servers located on different networks or VLANs.",
          },
          {
            id: "q24-dhcp-starvation-attack",
            type: "complete",
            question: "What is DHCP starvation attack?",
            correctAnswer:
              "An attacker sends many fake requests to consume all available IP addresses, preventing legitimate users from getting IPs.",
          },
          {
            id: "q28-a-topology-interface-status",
            type: "complete",
            image: "img/Network2-Final-Q28.JPG",
            question:
              "In Figure.2, What is the status of the router's interfaces?",
            correctAnswer: "disable",
          },
          {
            id: "q28-b-topology-activate-command",
            type: "complete",
            image: "img/Network2-Final-Q28.JPG",
            question: "What command is used to activate the interfaces?",
            correctAnswer: "no shutdown",
          },
          {
            id: "q28-c-topology-port-activation-time",
            type: "complete",
            image: "img/Network2-Final-Q28.JPG",
            question:
              "The port between Switch1 and PC3, how long does it take for it to become active?",
            correctAnswer: "30 seconds",
          },
          {
            id: "q28-d-topology-appropriate-ips",
            type: "complete",
            image: "img/Network2-Final-Q28.JPG",
            question:
              "What is the appropriate IP address for both the first interface and the second interface?",
            orderMode: "unordered",
            correctAnswers: [
              "ip for first interface 192.168.1.1",
              "ip for second interface 192.168.2.1",
            ],
          },
          {
            id: "q28-e-topology-dhcp-script",
            type: "complete",
            image: "img/Network2-Final-Q28.JPG",
            question:
              "List the script commands given to enable DHCP on the first interface with dns-server 8.8.8.8.",
            orderMode: "ordered",
            correctAnswers: [
              "ip dhcp pool 1",
              "network 192.168.1.0 255.255.255.0",
              "default-router 192.168.1.1",
              "dns-server 8.8.8.8",
            ],
          },
          {
            id: "q29-1-cmd-privileged-mode",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Enter Privileged mode from User Mode",
            correctAnswer: "ena",
          },
          {
            id: "q29-2-cmd-global-mode",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Enter Global mode from Privileged Mode",
            correctAnswer: "config t",
          },
          {
            id: "q29-3-cmd-return-back",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Return or Back",
            correctAnswer: "exit",
          },
          {
            id: "q29-4-cmd-rename-router",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Rename the Router to 'Mansoura University'",
            correctAnswer: "hostname MansouraUniversity",
          },
          {
            id: "q29-5-cmd-show-clock",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Know date and time for Router",
            correctAnswer: "show clock",
          },
          {
            id: "q29-6-cmd-set-clock",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To set date and time to 24/5/2026 and 12:30:00 PM",
            correctAnswer: "clock set 12:30:00 24 May 2026",
          },
          {
            id: "q29-7-cmd-do-modifier",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Run any command in any case of mode",
            correctAnswer: "do",
          },
          {
            id: "q29-8-cmd-save-config",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To save Configurations",
            correctAnswer: "copy run start",
          },
          {
            id: "q29-9-cmd-enter-interface",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Enter the GigaEthernet interface which port number is 0/0",
            correctAnswer: "interface g0/0",
          },
          {
            id: "q29-10-cmd-enable-port",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Enable port",
            correctAnswer: "no shutdown",
          },
          {
            id: "q29-11-cmd-disable-port",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To Disable port",
            correctAnswer: "shutdown",
          },
          {
            id: "q29-12-cmd-set-ip",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To set interface witch IP address is '192.168.1.0' and its Subnet mask '255.255.255.0'",
            correctAnswer: "ip address 192.168.1.0 255.255.255.0",
          },
          {
            id: "q29-13-cmd-remove-ip",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To remove interface IP address and Subnet mask",
            correctAnswer: "no ip address",
          },
          {
            id: "q29-14-cmd-show-interface-brief",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To show the content of configurations file",
            correctAnswer: "show ip interface br",
          },
          {
            id: "q29-15-cmd-show-ip-route",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To show table of routing",
            correctAnswer: "show ip route",
          },
          {
            id: "q29-16-cmd-dhcp-pool-create",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To give number '1' to the Network interface",
            correctAnswer: "ip dhcp pool 1",
          },
          {
            id: "q29-17-cmd-dhcp-pool-disable",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To disable DHCP on network interface which its number is '1'",
            correctAnswer: "no ip dhcp pool 1",
          },
          {
            id: "q29-18-cmd-default-router",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To select the router default gateway '192.168.1.1'",
            correctAnswer: "default-router 192.168.1.1",
          },
          {
            id: "q29-19-cmd-dns-server",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To select DNS server '0.0.0.0'",
            correctAnswer: "dns-server 0.0.0.0",
          },
          {
            id: "q29-20-cmd-exclude-single-ip",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To exception the IP '192.168.2.3' from distribution",
            correctAnswer: "ip dhcp excluded-address 192.168.2.3",
          },
          {
            id: "q29-21-cmd-exclude-range-ip",
            type: "complete",
            question:
              "Write the command that executes the required configuration: To exception range of Ips from 192.168.2.3 to 192.168.2.5 from distribution",
            correctAnswer: "ip dhcp excluded-address 192.168.2.3 192.168.2.5",
          },
        ],
      },
    ],
  },
  {
    id: "Artificial-Intelligence-Final-Qbank",
    title: "Artificial Intelligence Final Qbank",
    isSubjectGroup: true,
    chapters: [
      {
        id: "lecture-1-quiz",
        title: "Lecture 1 Quiz",
        shuffleQuestions: true,
        showScore: true,
        quizModeTimer: 1800,
        questions: [
          {
            id: "q1-artificial-intelligence-simulation",
            type: "complete",
            question:
              "Artificial intelligence is concerned with building systems that simulate ______.",
            correctAnswer: "intelligent behavior",
          },
          {
            id: "q2-machine-learning-mathematical-models",
            type: "complete",
            question:
              "Machine learning is a subset of AI that learns to make decisions by fitting ______ to observed data.",
            correctAnswer: "mathematical models",
          },
          {
            id: "q3-deep-neural-network-learning",
            type: "complete",
            question:
              "When a deep neural network is fitted to data, this specific type of learning is referred to as ______.",
            correctAnswer: "deep learning (DL)",
          },
          {
            id: "q4-machine-learning-primary-goal",
            type: "complete",
            question:
              "The primary goal of machine learning is to automatically detect ______ in data to predict future data or other outcomes of interest.",
            correctAnswer: "patterns",
          },
          {
            id: "q5-formal-definition-ml",
            type: "complete",
            question:
              "In the formal definition of machine learning, a computer program learns from experience E with respect to some ______ T and some performance measure P.",
            correctAnswer: "task",
          },
          {
            id: "q6-learning-examples-collection",
            type: "complete",
            question:
              "The specific examples that a machine learning system uses to learn from are collectively called the ______.",
            correctAnswer: "training set",
          },
          {
            id: "q7-learning-predictions-component",
            type: "complete",
            question:
              "The part of a machine learning system that learns and makes predictions is known as a ______.",
            correctAnswer: "model",
          },
          {
            id: "q8-ml-necessity-human-expertise",
            type: "complete",
            question:
              "One scenario where machine learning is necessary is when humans are unable to explain their own expertise, such as in speech or ______ recognition.",
            correctAnswer: "image",
          },
          {
            id: "q9-quality-control-intrusion-detection",
            type: "complete",
            question:
              "In manufacturing quality control and network intrusion detection, machine learning is applied through ______ to identify rare data points that deviate from normal patterns.",
            correctAnswer: "anomaly detection",
          },
          {
            id: "q10-medical-diagnosis-essential-criteria",
            type: "complete",
            question:
              "In medical diagnosis and medical decision support systems, both ______ and reliability are considered essential criteria for the models.",
            correctAnswer: "interpretability",
          },
        ],
      },
    ],
  },
  // {
  //     title: "Science Quiz",
  //     questions: [
  //         {
  //             type: "multiple",
  //             question: "What is the chemical formula for water?",
  //             options: ["H2O", "CO2", "NaCl", "O2"],
  //             correctAnswer: "H2O",
  //             shuffle: true,
  //             explanation: "Water is composed of two hydrogen atoms and one oxygen atom."
  //         },
  //         {
  //             type: "multiple",
  //             question: "Which organ is responsible for pumping blood in the human body?",
  //             options: ["Brain", "Heart", "Liver", "Lungs"],
  //             correctAnswer: "Heart",
  //             shuffle: true,
  //             explanation: "The heart is a muscular organ that pumps blood throughout the body."
  //         },
  //         {
  //             type: "true_false",
  //             question: "Light travels faster than sound.",
  //             options: ["True", "False"],
  //             correctAnswer: "True",
  //             shuffle: false,
  //             explanation: "Light travels at approximately 299,792 km/s while sound travels at about 343 m/s."
  //         },
  //         {
  //             type: "complete",
  //             question: "What planet is known as the Red Planet?",
  //             correctAnswer: "Mars",
  //             explanation: "Mars appears red due to iron oxide on its surface."
  //         },
  //         {
  //             type: "multiple",
  //             question: "What is the largest organ in the human body?",
  //             options: ["Heart", "Liver", "Skin", "Brain"],
  //             correctAnswer: "Skin",
  //             shuffle: true,
  //             explanation: "The skin is the largest organ, covering about 20 square feet in adults."
  //         },
  //         {
  //             type: "true_false",
  //             question: "DNA stands for Deoxyribonucleic Acid.",
  //             options: ["True", "False"],
  //             correctAnswer: "True",
  //             shuffle: false,
  //             explanation: "DNA is a molecule that carries genetic instructions for development and functioning of living organisms."
  //         }
  //     ]
  // },
  // {
  //     title: "Geography Quiz",
  //     questions: [
  //         {
  //             type: "multiple",
  //             question: "Which is the largest continent by area?",
  //             options: ["Africa", "North America", "Asia", "Europe"],
  //             correctAnswer: "Asia",
  //             shuffle: true,
  //             explanation: "Asia is the largest continent, covering about 44.58 million square kilometers."
  //         },
  //         {
  //             type: "multiple",
  //             question: "What is the longest river in the world?",
  //             options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  //             correctAnswer: "Nile",
  //             shuffle: true,
  //             explanation: "The Nile River is approximately 6,650 km long."
  //         },
  //         {
  //             type: "complete",
  //             question: "What is the capital of Japan?",
  //             correctAnswer: "Tokyo",
  //             explanation: "Tokyo has been Japan's capital since 1868."
  //         },
  //         {
  //             type: "true_false",
  //             question: "Australia is both a country and a continent.",
  //             options: ["True", "False"],
  //             correctAnswer: "True",
  //             shuffle: false,
  //             explanation: "Australia is the smallest continent and the largest country in Oceania."
  //         },
  //         {
  //             type: "multiple",
  //             question: "Which ocean is the largest?",
  //             options: ["Atlantic", "Indian", "Arctic", "Pacific"],
  //             correctAnswer: "Pacific",
  //             shuffle: true,
  //             explanation: "The Pacific Ocean covers about 165.2 million square kilometers."
  //         }
  //     ]
  // }
];