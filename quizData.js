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
        image: "img/Biomedical-Q10.png",
        type: "complete",
        correctAnswer: "Metal microelectrode",
      },
      {
        id: "q11",
        question: "The following neuron in figure 3 is known as ......",
        image: "img/Biomedical-Q11.png",
        type: "complete",
        correctAnswer: "unipolar neuron",
      },
      {
        id: "q12",
        question: "The following neuron in figure 4 considered in ......",
        image: "img/Biomedical-Q12.png",
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
            image: "img/Network2-Final-Q1.png",
            question:
              "What is the device shown in figure.1 and What is it used for?",
            correctAnswer:
              "The device is Router and it's used to connect between different networks.",
          },
          {
            id: "q1-b-router-ports-symbolize",
            type: "complete",
            image: "img/Network2-Final-Q1.png",
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
            image: "img/Network2-Final-Q1.png",
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
            correctAnswer:
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
            image: "img/Network2-Final-Q28.png",
            question:
              "In Figure.2, What is the status of the router's interfaces?",
            correctAnswer: "disable",
          },
          {
            id: "q28-b-topology-activate-command",
            type: "complete",
            image: "img/Network2-Final-Q28.png",
            question: "What command is used to activate the interfaces?",
            correctAnswer: "no shutdown",
          },
          {
            id: "q28-c-topology-port-activation-time",
            type: "complete",
            image: "img/Network2-Final-Q28.png",
            question:
              "The port between Switch1 and PC3, how long does it take for it to become active?",
            correctAnswer: "30 seconds",
          },
          {
            id: "q28-d-topology-appropriate-ips",
            type: "complete",
            image: "img/Network2-Final-Q28.png",
            question:
              "What is the appropriate IP address for both the first interface and the second interface?",
            orderMode: "ordered",
            correctAnswers: [
              "ip for first interface 192.168.1.1",
              "ip for second interface 192.168.2.1",
            ],
          },
          {
            id: "q28-e-topology-dhcp-script",
            type: "complete",
            image: "img/Network2-Final-Q28.png",
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
            question: "To Enter Privileged mode from User Mode",
            correctAnswer: "ena",
          },
          {
            id: "q29-2-cmd-global-mode",
            type: "complete",
            question: "To Enter Global mode from Privileged Mode",
            correctAnswer: "config t",
          },
          {
            id: "q29-3-cmd-return-back",
            type: "complete",
            question: "To Return or Back",
            correctAnswer: "exit",
          },
          {
            id: "q29-4-cmd-rename-router",
            type: "complete",
            question: "To Rename the Router to 'Mansoura University'",
            correctAnswer: "hostname MansouraUniversity",
          },
          {
            id: "q29-5-cmd-show-clock",
            type: "complete",
            question: "To Know date and time for Router",
            correctAnswer: "show clock",
          },
          {
            id: "q29-6-cmd-set-clock",
            type: "complete",
            question: "To set date and time to 24/5/2026 and 12:30:00 PM",
            correctAnswer: "clock set 12:30:00 24 May 2026",
          },
          {
            id: "q29-7-cmd-do-modifier",
            type: "complete",
            question: "To Run any command in any case of mode",
            correctAnswer: "do",
          },
          {
            id: "q29-8-cmd-save-config",
            type: "complete",
            question: "To save Configurations",
            correctAnswer: "copy run start",
          },
          {
            id: "q29-9-cmd-enter-interface",
            type: "complete",
            question:
              "To Enter the GigaEthernet interface which port number is 0/0",
            correctAnswer: "interface g0/0",
          },
          {
            id: "q29-10-cmd-enable-port",
            type: "complete",
            question: "To Enable port",
            correctAnswer: "no shutdown",
          },
          {
            id: "q29-11-cmd-disable-port",
            type: "complete",
            question: "To Disable port",
            correctAnswer: "shutdown",
          },
          {
            id: "q29-12-cmd-set-ip",
            type: "complete",
            question:
              "To set interface witch IP address is '192.168.1.0' and its Subnet mask '255.255.255.0'",
            correctAnswer: "ip address 192.168.1.0 255.255.255.0",
          },
          {
            id: "q29-13-cmd-remove-ip",
            type: "complete",
            question: "To remove interface IP address and Subnet mask",
            correctAnswer: "no ip address",
          },
          {
            id: "q29-14-cmd-show-interface-brief",
            type: "complete",
            question: "To show the content of configurations file",
            correctAnswer: "show ip interface br",
          },
          {
            id: "q29-15-cmd-show-ip-route",
            type: "complete",
            question: "To show table of routing",
            correctAnswer: "show ip route",
          },
          {
            id: "q29-16-cmd-dhcp-pool-create",
            type: "complete",
            question: "To give number '1' to the Network interface",
            correctAnswer: "ip dhcp pool 1",
          },
          {
            id: "q29-17-cmd-dhcp-pool-disable",
            type: "complete",
            question:
              "To disable DHCP on network interface which its number is '1'",
            correctAnswer: "no ip dhcp pool 1",
          },
          {
            id: "q29-18-cmd-default-router",
            type: "complete",
            question: "To select the router default gateway '192.168.1.1'",
            correctAnswer: "default-router 192.168.1.1",
          },
          {
            id: "q29-19-cmd-dns-server",
            type: "complete",
            question: "To select DNS server '0.0.0.0'",
            correctAnswer: "dns-server 0.0.0.0",
          },
          {
            id: "q29-20-cmd-exclude-single-ip",
            type: "complete",
            question: "To exception the IP '192.168.2.3' from distribution",
            correctAnswer: "ip dhcp excluded-address 192.168.2.3",
          },
          {
            id: "q29-21-cmd-exclude-range-ip",
            type: "complete",
            question:
              "To exception range of Ips from 192.168.2.3 to 192.168.2.5 from distribution",
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
        shuffleQuestions: false,
        showScore: true,
        quizModeTimer: 1800,
        questions: [
          {
            question:
              "How are Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) related?",
            type: "multiple",
            options: [
              "DL is a subset of ML, and ML is a subset of AI.",
              "AI is a subset of ML, and ML is a subset of DL.",
              "ML is a subset of DL, and DL is a subset of AI.",
              "AI, ML, and DL are entirely distinct, non-overlapping fields.",
            ],
            correctAnswer: "DL is a subset of ML, and ML is a subset of AI.",
            shuffle: true,
          },
          {
            question:
              "A computer program downloads a complete copy of Wikipedia. Why is this operation NOT considered Machine Learning?",
            type: "multiple",
            options: [
              "The system used unstructured data instead of structured data.",
              "The computer has merely accumulated more data but has not suddenly become better at performing any task.",
              "Wikipedia lacks the mathematical models needed to build a predictor.",
              "Downloading text represents unsupervised clustering, which requires no algorithmic learning.",
            ],
            correctAnswer:
              "The computer has merely accumulated more data but has not suddenly become better at performing any task.",
            shuffle: true,
          },
          {
            question:
              "In Tom Mitchell's formal definition of Machine Learning (E,T,P), what do the past examples given to a spam filter system represent?",
            type: "multiple",
            options: [
              "The task T",
              "The performance measure P",
              "The model or predictor",
              "The experience E",
            ],
            correctAnswer: "The experience E",
            shuffle: true,
          },
          {
            question:
              "How is the performance measure P specifically calculated or defined for a spam filter application?",
            type: "multiple",
            options: [
              "The total volume of emails arriving in the inbox over a past period.",
              "The number of examples of spam emails flagged manually by the user.",
              "The ratio of correctly classified emails.",
              "The computational resource limits required to filter large sets of data.",
            ],
            correctAnswer: "The ratio of correctly classified emails.",
            shuffle: true,
          },
          {
            question:
              "What forms the inputs and outputs of a computer executing 'Traditional Programming' versus 'Machine Learning'?",
            type: "multiple",
            options: [
              "Traditional Programming takes Data and Output to produce a Program; Machine Learning takes Data and Program to produce an Output.",
              "Traditional Programming takes Data and Program to produce an Output; Machine Learning takes Data and Output to produce a Program.",
              "Traditional Programming takes Program and Output to produce Data; Machine Learning takes Data and Program to produce an Output.",
              "Both traditional programming and machine learning take Data and Program to generate an Output.",
            ],
            correctAnswer:
              "Traditional Programming takes Data and Program to produce an Output; Machine Learning takes Data and Output to produce a Program.",
            shuffle: true,
          },
          {
            question:
              "Human learning is described as a three-step sequential pipeline. What is the correct order of these stages?",
            type: "multiple",
            options: [
              "Collect Available Data (ingest) -> Use New Knowledge to Do Something (act) -> Gain Knowledge (understand data and transform it into knowledge).",
              "Gain Knowledge (understand data and transform it into knowledge) -> Collect Available Data (ingest) -> Use New Knowledge to Do Something (act).",
              "Collect Available Data (ingest) -> Gain Knowledge (understand data and transform it into knowledge) -> Use New Knowledge to Do Something (act).",
              "Try and test -> Gain Knowledge (understand data and transform it into knowledge) -> Someone tells us.",
            ],
            correctAnswer:
              "Collect Available Data (ingest) -> Gain Knowledge (understand data and transform it into knowledge) -> Use New Knowledge to Do Something (act).",
            shuffle: true,
          },
          {
            question:
              "Under which of the following circumstances is it noted that learning becomes specifically difficult for humans, thereby necessitating Machine Learning?",
            type: "multiple",
            options: [
              "When mathematical models cannot be fitted to observed data.",
              "When there are too many data, or data change too frequently.",
              "When the performance measure P cannot be calculated as a ratio.",
              "When the system is required to process structured laboratory results.",
            ],
            correctAnswer:
              "When there are too many data, or data change too frequently.",
            shuffle: true,
          },
          {
            question:
              "Which machine learning application is specifically described as focusing on identifying unusual or suspicious behavior by learning patterns of normal behavior and flagging deviations?",
            type: "multiple",
            options: [
              "Recommendation Systems",
              "Predictive Analytics and Forecasting",
              "Fraud and Risk Detection",
              "Spam Detection",
            ],
            correctAnswer: "Fraud and Risk Detection",
            shuffle: true,
          },
          {
            question:
              "Which two qualities are explicitly highlighted as 'essential' or 'crucial' for Machine Learning models applied to Medical Diagnosis and Medical Decision Support Systems?",
            type: "multiple",
            options: [
              "Scalability and low computational resource demand",
              "Speed and real-time processing capabilities",
              "High dimensionality and multi-layered structures",
              "Interpretability and reliability",
            ],
            correctAnswer: "Interpretability and reliability",
            shuffle: true,
          },
          {
            question:
              "In the context of the Gaming application, what specific features are listed as being used to score positions in a chess system?",
            type: "multiple",
            options: [
              "Material balance, piece mobility, and king safety",
              "Historical player rankings and move selection times",
              "User feedback, likes, and dislikes",
              "Deviations from normal behavior patterns over time",
            ],
            correctAnswer: "Material balance, piece mobility, and king safety",
            shuffle: true,
          },
          {
            id: "written-question-1",
            type: "complete",
            question:
              "Define Artificial Intelligence(AI), Machine Learning(ML), and Deep Learning(DL).",
            orderMode: "unordered",
            correctAnswers: [
              "Artificial Intelligence: Concerned with building systems that simulate intelligent behavior. Its core focus is to mimic human behavior.",
              "Machine Learning: A subset of AI that learns to make decisions by fitting mathematical models to observed data. It concerns the construction and study of systems that can learn from experience/data.",
              "Deep Learning: Application of deep neural network models within machine learning, where these networks learn representations directly from data. They represent different levels of intelligent computing.",
            ],
          },
          {
            id: "written-question-2",
            type: "complete",
            question: "State the primary goal of machine learning.",
            correctAnswer:
              "The goal of machine learning is to develop methods that can automatically detect patterns in data, and then to use the uncovered patterns to predict future data or other outcomes of interest. Briefly, it is about predicting the future based on the past.",
          },
          {
            id: "written-question-3",
            type: "complete",
            question:
              "Describe the timeline and flow of data when a machine learning model is utilized, explaining what happens during the 'past' phase and the 'future' phase.",
            orderMode: "unordered",
            correctAnswers: [
              "In the Past: 'Training Data' is supplied to a learning process ('learn') to construct and develop a 'model'.",
              "In the Future: New 'Testing Data' is fed directly into the developed 'model', which processes the data to generate a 'predict' outcome.",
            ],
          },
          {
            id: "written-question-4",
            type: "complete",
            question:
              "Define the terms 'Training Set', 'Training Instance or sample', and 'Model'.",
            orderMode: "unordered",
            correctAnswers: [
              "Training Set: The examples that a machine learning system uses to learn.",
              "Training Instance: Each individual training example within the training set.",
              "Model: The specific part of a machine learning system that learns and makes predictions.",
            ],
          },
          {
            id: "written-question-5",
            type: "complete",
            question:
              "Explain the two primary ways through which humans learn.",
            orderMode: "unordered",
            correctAnswers: [
              "Someone tells us: Learning via a teacher or by watching others.",
              "Try and test: Learning by doing.",
            ],
          },
          {
            id: "written-question-6",
            type: "complete",
            question:
              "Under what four conditions or scenarios is it necessary to use Machine Learning because human expertise is limited or inapplicable?",
            orderMode: "unordered",
            correctAnswers: [
              "Human expertise does not exist (navigating on Mars), or there is a danger.",
              "Humans are unable to explain their expertise (speech/image recognition).",
              "A solution changes in time (market data for market forecast).",
              "A solution needs to be adapted to particular cases (biometrics).",
            ],
          },
          {
            id: "written-question-7",
            type: "complete",
            question:
              "What is 'Predictive Analytics and Forecasting'? Detail its core mechanism, its main goal, and list three areas where it is widely applied.",
            orderMode: "unordered",
            correctAnswers: [
              "Definition: Predictive analytics uses machine learning models to estimate future values based on historical data by using algorithms to analyze trends and patterns in past observations.",
              "Main Goal: To support decision-making by providing accurate numerical predictions while keeping the model easy to understand and explain.",
              "Applications: It is widely used in sales forecasting, energy consumption estimation, and financial analysis.",
            ],
          },
          {
            id: "written-question-8",
            type: "complete",
            question:
              "Identify where Fraud and Risk Detection applications are critical, and explain how machine learning models spot potential risks.",
            orderMode: "unordered",
            correctAnswers: [
              "Critical Domains: This application is critical in banking, insurance, cybersecurity, and transaction monitoring systems.",
              "Mechanism: Machine learning models learn patterns of normal behavior and flag any deviations from that baseline that may indicate fraud or risk within large datasets.",
            ],
          },
          {
            id: "written-question-9",
            type: "complete",
            question:
              "Explain the goal of Recommendation Systems, where they are commonly applied, and describe the advantages of using classical recommendation algorithms.",
            orderMode: "unordered",
            correctAnswers: [
              "Goal: To suggest relevant items to users based on their preferences or past behavior.",
              "Common Applications: E-commerce platforms, streaming services, and online learning environments.",
              "Advantages: Despite their simplicity, classical recommendation algorithms provide strong performance and scalability without requiring large computational resources.",
            ],
          },
          {
            id: "written-question-10",
            type: "complete",
            question:
              "What is the primary function of Anomaly Detection, name three fields where it is essential, and what is its typical operational temporal requirement?",
            orderMode: "unordered",
            correctAnswers: [
              "Primary Function: It identifies rare or abnormal data points that deviate from normal patterns.",
              "Essential Fields: Manufacturing quality control, network intrusion detection, and sensor monitoring.",
              "Temporal Requirement: Anomaly detection systems often operate in real time.",
            ],
          },
          {
            id: "written-question-11",
            type: "complete",
            question:
              "What makes spam detection systems highly viable and widely used in email and messaging platforms?",
            orderMode: "unordered",
            correctAnswers: [
              "Speed",
              "Accuracy",
              "Ability to operate effectively on large volumes of data with limited computational resources.",
            ],
          },
          {
            id: "written-question-12",
            type: "complete",
            question:
              "Describe the input data types and the role of Machine Learning in 'Medical Diagnosis' and 'Medical Decision Support Systems (CDSS)'. Also, list the five surrounding components that interact with the clinical decision-makers team according to the CDSS.",
            orderMode: "unordered",
            correctAnswers: [
              "Data Types and Role: Structured clinical data-such as laboratory results, medical history, vital signs, and clinical measurements-are analyzed using classical algorithms. The models assist healthcare professionals by predicting disease risk, supporting early diagnosis, predicting treatment outcomes/patient readmission rates, and improving clinical decision-making.",
              "Diagnosis",
              "Prognosis",
              "Treatment",
              "Evolution",
              "Prevention",
            ],
          },
        ],
      },
      {
        id: "ai-lec2-quiz",
        title: "Lecture 2 Quiz",
        shuffleQuestions: false,
        showScore: true,
        quizModeTimer: 1800,
        questions: [
          {
            question:
              "In the context of supervised learning, what is an 'example'?",
            type: "multiple",
            options: [
              "A model's correct prediction output.",
              "A pair consisting of input features and its corresponding label.",
              "The mathematical function that maps inputs to outputs.",
              "The standalone unlabelled testing instance.",
            ],
            correctAnswer:
              "A pair consisting of input features and its corresponding label.",
            shuffle: true,
          },
          {
            question:
              "If a supervised learning model is designed to predict more than one continuous numerical value, what type of problem is it?",
            type: "multiple",
            options: [
              "Multiclass classification",
              "Binary classification",
              "Multivariate regression",
              "Unsupervised clustering",
            ],
            correctAnswer: "Multivariate regression",
            shuffle: true,
          },
          {
            question:
              "Which of the following is a key operational benefit of using Dimensionality Reduction?",
            type: "multiple",
            options: [
              "It automatically assigns classes based on a supervisor's direct feedback.",
              "It expands the feature space to preserve every raw detail without simplification.",
              "It reduces the used storage and enhances computational speed.",
              "It generates entirely new, highly realistic images using random sampling.",
            ],
            correctAnswer:
              "It reduces the used storage and enhances computational speed.",
            shuffle: true,
          },
          {
            question:
              "A system is trained by looking at mostly normal instances so that it can identify whether a new instance looks normal or is likely an anomaly. Which of the following is an application of this technique?",
            type: "multiple",
            options: [
              "Automatically mapping text inputs into continuous numerical house values.",
              "Evaluating a chess board state to pick an immediate action using a policy.",
              "Automatically getting rid of outliers from a dataset before giving it to another learning algorithm.",
              "Filling in the blanks of text passages by predicting randomly hidden words.",
            ],
            correctAnswer:
              "Automatically getting rid of outliers from a dataset before giving it to another learning algorithm.",
            shuffle: true,
          },
          {
            question:
              "How do Generative Adversarial Networks (GANs) differ from some other generative models?",
            type: "multiple",
            options: [
              "They define an explicit probability distribution from data to calculate specific numbers.",
              "They do not give a number for how likely an image is, but they are very good at producing realistic images.",
              "They require manual input labeling by human domain experts to operate.",
              "They are used exclusively for binary classification tasks.",
            ],
            correctAnswer:
              "They do not give a number for how likely an image is, but they are very good at producing realistic images.",
            shuffle: true,
          },
          {
            question:
              "What is the fundamental limitation of modern generative text models?",
            type: "multiple",
            options: [
              "They cannot generate the most probable completion when given a question.",
              "They operate purely based on the statistical patterns of language and do not truly understand meaning.",
              "They require a human supervisor to provide an active reward or penalty for every single word.",
              "They are incapable of working with passages or text sequences.",
            ],
            correctAnswer:
              "They operate purely based on the statistical patterns of language and do not truly understand meaning.",
            shuffle: true,
          },
          {
            question: "In self-supervised learning, how are labels obtained?",
            type: "multiple",
            options: [
              "By having an agent actively gather real-time rewards from an unpredictable environment.",
              "By asking a human annotator to evaluate pairs of attribute-value features.",
              "By automatically generating labels from the unlabeled data itself by setting up a pretext task.",
              "By computing the exact multivariate regression lines of the input features.",
            ],
            correctAnswer:
              "By automatically generating labels from the unlabeled data itself by setting up a pretext task.",
            shuffle: true,
          },
          {
            question:
              "How does a model train to process text under a self-supervised learning approach?",
            type: "multiple",
            options: [
              "By calculating the exact freezing and boiling points of continuous chemical numbers.",
              "By predicting randomly hidden words using their context words without labels.",
              "By assigning a positive or negative class category based on a supervisor's feedback loop.",
              "By clustering text into discrete groups before human verification.",
            ],
            correctAnswer:
              "By predicting randomly hidden words using their context words without labels.",
            shuffle: true,
          },
          {
            question:
              "Which machine learning approach would be most appropriate when a dataset has many unlabeled instances and relatively few labeled ones, often combining unsupervised clustering with standard supervised learning?",
            type: "multiple",
            options: [
              "Pure Reinforcement Learning",
              "Multivariate Regression",
              "Semi-Supervised Learning",
              "Binary Classification",
            ],
            correctAnswer: "Semi-Supervised Learning",
            shuffle: true,
          },
          {
            question:
              "In Reinforcement Learning, what is the optimal strategy learned by an agent called?",
            type: "multiple",
            options: ["A Pretext Task", "A Policy", "An Example", "A Cluster"],
            correctAnswer: "A Policy",
            shuffle: true,
          },
          {
            id: "written-question-1",
            type: "complete",
            question:
              "Machine learning systems can be classified based on three main criteria. List these three criteria, and state the five sub-types belonging to the first category.",
            orderMode: "unordered",
            correctAnswers: [
              "Classification criteria: ML Supervision, Data Availability, Generalization",
              "Sub-types of supervision: Supervised Learning, Unsupervised Learning, Self-supervised Learning, Semi-supervised Learning, Reinforcement Learning",
            ],
          },
          {
            id: "written-question-2",
            type: "complete",
            question:
              "Explain how a supervised learning algorithm functions during its training phase. What is the explicit objective of the algorithm during this phase?",
            correctAnswer:
              "During the training phase, the supervised learning algorithm is provided with a dataset that includes both input data (features) and their corresponding output solutions (labels). The algorithm attempts to approximate the function that maps inputs to outputs. It does this by learning a function that continuously decreases the difference between its own predictions and the actual true labels. Once this training phase is complete, the model can be used to predict outputs for novel, unseen data.",
          },
          {
            id: "written-question-3",
            type: "complete",
            question:
              "Compare and contrast the two main types of supervised learning tasks.",
            orderMode: "unordered",
            correctAnswers: [
              "Classification: The task where the model takes input features and predicts which category (class) among a discrete set of options an example belongs to. It can be binary classification (only two possible classes available) or multiclass classification (more than two classes are involved).",
              "Regression: The task where the labels are continuous numerical values. The objective is to develop a model that predicts values as close as possible to the true labels. It can also be a multivariate regression problem if the model predicts more than one number.",
            ],
          },
          {
            id: "written-question-4",
            type: "complete",
            question:
              "Define unsupervised learning and identify its two most common types.",
            orderMode: "unordered",
            correctAnswers: [
              "Unsupervised learning is a type of machine learning where a model is built entirely from input data with no existing labels, meaning there is zero supervision. Instead of learning to map inputs to outputs, the algorithm learns to understand the structural arrangements, connections, and patterns within the data.",
              "The two common unsupervised learning types mentioned are clustering and generative models.",
            ],
          },
          {
            id: "written-question-5",
            type: "complete",
            question:
              "What is the primary goal of Dimensionality Reduction, and what transformations does it perform on data?",
            correctAnswer:
              "The primary goal of dimensionality reduction is to simplify the data without losing too much information. It converts high-dimensional data into a lower-dimensional space while retaining key information and preserving important details. This reduction helps lower the amount of used storage and enhances computational speed.",
          },
          {
            id: "written-question-6",
            type: "complete",
            question:
              "Describe how a cat generative model reacts when fed an image of a dog, and explain how this specific behavior can be utilized as a tool.",
            correctAnswer:
              "If you feed a cat generative model an image of a dog, it will assign a low probability to that image, indicating that the input does not look like the training data it learned. This specific behavioral mechanism is highly useful for anomaly detection applications.",
          },
          {
            id: "written-question-7",
            type: "complete",
            question:
              "Explain how self-supervised learning operates on images, including the specific term used for the setup task.",
            correctAnswer:
              "Self-supervised learning on images operates by starting with unlabeled data and automatically generating its own labels from the data itself. It accomplishes this by setting up a 'pretext task.' For images, models are specifically trained to forecast a blocked-out or missing part of an image given the remaining visible parts of that image.",
          },
          {
            id: "written-question-8",
            type: "complete",
            question:
              "Using the photo-hosting service example (like Google Photos), provide a step-by-step breakdown of how semi-supervised learning operates in practice.",
            orderMode: "ordered",
            correctAnswers: [
              "Unsupervised Clustering Step: When a user uploads many photos, the system automatically runs a clustering step to identify face similarities. It figures out that a particular person (Person X) appears in photos 1, 3, and 5, while another person (Person Y) appears in photos 2, 4, and 6, without knowing who they actually are.",
              "Supervised Labeling Step: The user provides just one single text label per person (e.g., naming Person X and Person Y).",
              "Application/Mapping: Utilizing that single label combined with the clusters, the system automatically recognizes and names everyone across all the remaining photos, making searching and organization easier.",
            ],
          },
          {
            id: "written-question-9",
            type: "complete",
            question:
              "Detail the step-by-step loop interaction between a Reinforcement Learning agent and its environment.",
            orderMode: "ordered",
            correctAnswers: [
              "The agent observes the environment.",
              "The agent selects an action using its current policy.",
              "The agent executes the Action! into the environment.",
              "The agent gets a reward or penalty based on that action (e.g., getting -50 points and experiencing an 'Ouch!' penalty for interacting with fire).",
              "The agent performs a learning step to update its policy so it can avoid bad actions next time.",
              "The system iterates through this cycle repeatedly until an optimal policy is found.",
            ],
          },
        ],
      },
      {
        id: "ml-lec3-quiz",
        title: "Lecture 3 Quiz",
        shuffleQuestions: false,
        showScore: true,
        quizModeTimer: 1800,
        questions: [
          {
            question:
              "Machine learning systems that are classified based on whether they can learn incrementally from a stream of incoming data are divided into which categories?",
            type: "multiple",
            options: [
              "Supervised learning and Unsupervised learning",
              "Instance-based learning and Model-based learning",
              "Batch learning and Online learning",
              "Overfitting and Underfitting",
            ],
            correctAnswer: "Batch learning and Online learning",
            shuffle: true,
          },
          {
            question:
              "What is the main characteristic of a model's operation after it has been trained in a batch learning setup?",
            type: "multiple",
            options: [
              "It continuously modifies its parameters using a high learning rate.",
              "It is deployed into production and operates without further learning, applying only its acquired knowledge.",
              "It updates its rules sequentially using small groups called mini-batches.",
              "It uses similarity measures to compare new data points on the fly.",
            ],
            correctAnswer:
              "It is deployed into production and operates without further learning, applying only its acquired knowledge.",
            shuffle: true,
          },
          {
            question:
              "A financial market forecasting model trained with batch learning experiences a rapid deterioration in performance. What is this phenomenon called?",
            type: "multiple",
            options: [
              "Sampling bias",
              "Model rot or data drift",
              "Overfitting",
              "Feature extraction",
            ],
            correctAnswer: "Model rot or data drift",
            shuffle: true,
          },
          {
            question:
              "Which of the following is a key advantage of Online Learning?",
            type: "multiple",
            options: [
              "It completely eliminates the need for data cleaning or handling missing values.",
              "It requires training a new version of the system from the entirety of the original dataset.",
              "It allows models to be trained on very large datasets that exceed a single computer's main memory.",
              "It operates without using hyperparameters or performance measures.",
            ],
            correctAnswer:
              "It allows models to be trained on very large datasets that exceed a single computer's main memory.",
            shuffle: true,
          },
          {
            question:
              "In online learning, what happens if the learning rate is set to a high value?",
            type: "multiple",
            options: [
              "The system will learn more slowly but will be less affected by noise and outliers.",
              "The system will quickly learn new things, but it will also forget old things very quickly.",
              "The system will completely stop learning and revert to an offline batch learning state.",
              "The system will automatically switch to instance-based similarity comparisons.",
            ],
            correctAnswer:
              "The system will quickly learn new things, but it will also forget old things very quickly.",
            shuffle: true,
          },
          {
            question:
              "How does an instance-based learning system generalize to new input data cases?",
            type: "multiple",
            options: [
              "By creating a set of rules and establishing a strict learned decision boundary.",
              "By adjusting hyperparameters like regularization until the cost function reaches zero.",
              "By comparing new input data to the examples stored in memory using a similarity measure.",
              "By extracting features and combining them to form an completely new dataset.",
            ],
            correctAnswer:
              "By comparing new input data to the examples stored in memory using a similarity measure.",
            shuffle: true,
          },
          {
            question:
              "If a very large data sample is collected but the underlying sampling method itself is faulty, what type of problem does this introduce?",
            type: "multiple",
            options: [
              "Sampling noise",
              "Sampling bias",
              "Model underfitting",
              "Data drift",
            ],
            correctAnswer: "Sampling bias",
            shuffle: true,
          },
          {
            question:
              "Suppose a training dataset contains instances where a few features are completely missing. Which of the following is NOT listed as an option to handle this?",
            type: "multiple",
            options: [
              "Ignore the attribute.",
              "Ignore the instances.",
              "Fill in the missing values.",
              "Randomly generate new patterns from noise.",
            ],
            correctAnswer: "Randomly generate new patterns from noise.",
            shuffle: true,
          },
          {
            question:
              "What is the process of combining existing features to produce a more useful one called?",
            type: "multiple",
            options: [
              "Feature selection",
              "Feature extraction",
              "Regularization",
              "Hyperparameter tuning",
            ],
            correctAnswer: "Feature extraction",
            shuffle: true,
          },
          {
            question: "What is a hyperparameter?",
            type: "multiple",
            options: [
              "A parameter of the model that automatically updates itself using a similarity measure during training.",
              "A parameter of a learning algorithm that must be set prior to training and remains constant during training.",
              "An outlier feature that must be handled by ignoring the corresponding data instance.",
              "A performance measure that calculates how bad a model is based on training data.",
            ],
            correctAnswer:
              "A parameter of a learning algorithm that must be set prior to training and remains constant during training.",
            shuffle: true,
          },
          {
            id: "written-question-1",
            type: "complete",
            question:
              "Explain how an update is performed in a Batch Learning system when new data becomes available, and identify the primary disadvantages of this technique.",
            correctAnswer:
              "To update a batch learning system with new data, it is necessary to train a completely new version of the system from scratch using the entirety of the dataset, which incorporates both the new data and the existing data. Once trained, the old model is replaced with the newly trained one. The primary disadvantages are that training with the complete dataset requires extensive hours and demands substantial computational resources, including CPU, RAM, disk space, disk I/O, and network I/O.",
          },
          {
            id: "written-question-2",
            type: "complete",
            question:
              "Describe the concept of 'model rot' (or 'data drift'), explain why it occurs, and compare how its frequency varies between different use cases.",
            correctAnswer:
              "Model rot or data drift refers to the phenomenon where a machine learning model's efficacy gradually diminishes over time. This occurs because the real world evolves while the trained model remains static. The frequency of performance deterioration depends heavily on the specific use case: If the model's task is to categorize images of cats and dogs, its performance will diminish gradually. If the model engages with rapidly changing systems, such as forecasting in the financial market, its performance is likely to deteriorate fast.",
          },
          {
            id: "written-question-3",
            type: "complete",
            question:
              "How does Online Learning handle data during the training process, and under what constraints or scenarios is it considered an ideal choice?",
            orderMode: "unordered",
            correctAnswers: [
              "When things need to change very quickly, such as in the stock market.",
              "When there is a limited amount of computer power available, such as when a model is trained directly on a phone.",
              "When training models on very large datasets that are too massive to fit into a single computer's main memory.",
            ],
          },
          {
            id: "written-question-4",
            type: "complete",
            question:
              "Contrast low learning rates and high learning rates in the context of online learning systems. What are the trade-offs for each?",
            orderMode: "unordered",
            correctAnswers: [
              "High Learning Rate: The system will quickly learn and adapt to new incoming information, but it will also forget old information and past patterns very quickly.",
              "Low Learning Rate: The system will learn more slowly, but it has the advantage of being less affected by noise in the new data or by groups of data points that do not belong to the category (outliers).",
            ],
          },
          {
            id: "written-question-5",
            type: "complete",
            question:
              "Compare and contrast Instance-based Learning and Model-based Learning in terms of how they learn and how they make predictions on new data instances.",
            orderMode: "unordered",
            correctAnswers: [
              "Instance-based Learning: The model learns from examples and stores them directly in memory. It generalizes to new cases by comparing new input data to these stored examples using a similarity measure.",
              "Model-based Learning: The model is trained on a large dataset to create a model (which can be thought of as a set of rules) that predicts outcomes based on input data. The prediction about the class is decided based on a boundary learned from the training data, rather than comparing data points using similarity measures.",
            ],
          },
          {
            id: "written-question-6",
            type: "complete",
            question:
              "What parameters must be specified to tune a model to a training set in Model-based learning, and how are they defined?",
            orderMode: "unordered",
            correctAnswers: [
              "A fitness function, which measures how good the model is.",
              "A cost function, which measures how bad the model is.",
            ],
          },
          {
            id: "written-question-7",
            type: "complete",
            question:
              "When things go wrong in machine learning, they fall into two broad categories of challenges. Name these two categories and list the specific reasons associated with the data category.",
            orderMode: "unordered",
            correctAnswers: [
              "Insufficient Quantity of Training Data.",
              "Nonrepresentative Training Data.",
              "Poor-Quality Data.",
              "Irrelevant Features.",
            ],
          },
          {
            id: "written-question-8",
            type: "complete",
            question:
              "How much data is typically required for machine learning algorithms to function properly for simple versus complex problems?",
            orderMode: "unordered",
            correctAnswers: [
              "For very simple problems, you typically need thousands of examples.",
              "For complex problems (such as image or speech recognition), you may need millions of examples.",
            ],
          },
          {
            id: "written-question-9",
            type: "complete",
            question:
              "What is Feature Engineering, and what are the specific steps involved in this process?",
            orderMode: "unordered",
            correctAnswers: [
              "Feature selection: Selecting the most useful features to train on among existing features.",
              "Feature extraction: Combining existing features to produce a more useful one.",
              "Creating new features by gathering new data.",
            ],
          },
          {
            id: "written-question-10",
            type: "complete",
            question:
              "Define 'Overfitting,' explain why it occurs, and list the solutions proposed to mitigate it.",
            orderMode: "unordered",
            correctAnswers: [
              "Simplify the model by reducing the number of attributes in the training data, constraining the model, or selecting another model with fewer parameters.",
              "Collect more training data.",
              "Decrease the noise in the training data.",
            ],
          },
          {
            id: "written-question-11",
            type: "complete",
            question:
              "What is regularization, and how is it controlled during the learning process?",
            correctAnswer:
              "Regularization is the process of constraining a model to make it simpler and reduce the overall risk of overfitting. The amount of regularization to apply during learning can be controlled by a hyperparameter, which must be set prior to training and remains constant throughout the training process.",
          },
          {
            id: "written-question-12",
            type: "complete",
            question:
              "Define 'Underfitting' and list the solutions required to resolve it.",
            orderMode: "unordered",
            correctAnswers: [
              "Selecting a more complex model.",
              "Using advanced feature engineering to select better features.",
              "Reducing the constraints on the model.",
            ],
          },
        ],
      },
      {
        id: "chapter1-qbank",
        title: "Chapter1 QBank",
        shuffleQuestions: false,
        showScore: true,
        quizModeTimer: 1800,
        questions: [
          {
            id: "q1-define-machine-learning",
            type: "complete",
            question: "Define Machine Learning (ML).",
            correctAnswer:
              "A branch of AI that enables systems to learn patterns from data and make predictions without being explicitly programmed. Formally: a program learns from experience E for task T measured by P, if performance on T improves with E.",
          },
          {
            id: "q2-define-artificial-intelligence",
            type: "complete",
            question: "Define Artificial Intelligence (AI).",
            correctAnswer:
              "The broadest field building systems that make machine act as human (reasoning, perception, problem-solving).",
          },
          {
            id: "q3-define-deep-learning",
            type: "complete",
            question: "Define Deep Learning (DL).",
            correctAnswer:
              "A subset of ML using multi-layered neural networks that learn hierarchical representations directly from raw data (images, text).",
          },
          {
            id: "q4-define-training-set-and-training-instance",
            type: "complete",
            question: "Define Training Set and Training Instance.",
            orderMode: "ordered",
            correctAnswers: [
              "Training Set: the full collection of examples used for learning.",
              "Training Instance (sample): one individual example in the set.",
            ],
          },
          {
            id: "q5-define-a-model",
            type: "complete",
            question: "Define a Model.",
            correctAnswer:
              "The component that learns patterns from training data and generates predictions on new data.",
          },
          {
            id: "q6-define-supervised-learning",
            type: "complete",
            question: "Define Supervised Learning.",
            correctAnswer:
              "Training on labeled data (input + correct output). Learns input output mapping. Two main tasks: Classification and Regression.",
          },
          {
            id: "q7-define-unsupervised-learning",
            type: "complete",
            question: "Define Unsupervised Learning.",
            correctAnswer:
              "Training on unlabeled data to discover hidden patterns. Tasks: Clustering, Dimensionality Reduction, Anomaly Detection, Generative Modeling.",
          },
          {
            id: "q8-define-semi-supervised-learning",
            type: "complete",
            question: "Define Semi-Supervised Learning.",
            correctAnswer:
              "Combines small labeled + large unlabeled data. Cluster unlabeled instances -> assign labels from cluster majority apply supervised algorithm.",
          },
          {
            id: "q9-define-self-supervised-learning",
            type: "complete",
            question: "Define Self-Supervised Learning.",
            correctAnswer:
              "Generates its own labels via a pretext task. E.g., NLP: predict masked words; CV: predict masked image region.",
          },
          {
            id: "q10-define-reinforcement-learning",
            type: "complete",
            question: "Define Reinforcement Learning (RL).",
            correctAnswer:
              "An agent interacts with an environment, receives rewards/penalties, and learns a policy to maximize cumulative reward.",
          },
          {
            id: "q11-define-batch-learning",
            type: "complete",
            question: "Define Batch Learning.",
            correctAnswer:
              "Trained on the entire dataset at once (offline). Must fully retrain from scratch when new data arrives.",
          },
          {
            id: "q12-define-online-learning",
            type: "complete",
            question: "Define Online Learning.",
            correctAnswer:
              "Learns incrementally from sequential data (one or mini-batches at a time). Continuously adapts without full retraining.",
          },
          {
            id: "q13-define-instance-based-learning",
            type: "complete",
            question: "Define Instance-based Learning.",
            correctAnswer:
              "Stores all training examples; predicts by similarity to stored instances. Example: k-Nearest Neighbors (KNN).",
          },
          {
            id: "q14-define-model-based-learning",
            type: "complete",
            question: "Define Model-based Learning.",
            correctAnswer:
              "Builds a mathematical model (e.g., decision boundary or equation) by optimizing a cost function. Predicts using the formula, not stored instances.",
          },
          {
            id: "q15-define-overfitting",
            type: "complete",
            question: "Define Overfitting.",
            correctAnswer:
              "Model memorizes training noise low training error but poor generalization. Cause: model too complex relative to data. Training accuracy is high, test accuracy is low. Training error is low, test error is high.",
          },
          {
            id: "q16-define-underfitting",
            type: "complete",
            question: "Define Underfitting.",
            correctAnswer:
              "Model too simple to learn meaningful patterns. Training accuracy is low, test accuracy is low. Both training and test errors are high.",
          },
          {
            id: "q17-define-regularization",
            type: "complete",
            question: "Define Regularization.",
            correctAnswer:
              "Constrains model complexity (e.g., limits weight magnitudes via Ridge/Lasso) to reduce overfitting. Degree controlled by a hyperparameter.",
          },
          {
            id: "q18-define-a-hyperparameter",
            type: "complete",
            question: "Define a Hyperparameter.",
            correctAnswer:
              "Configuration set before training, stays constant throughout (e.g., learning rate, regularization strength a, k in KNN).",
          },
          {
            id: "q19-define-generalization-error",
            type: "complete",
            question: "Define Generalization Error.",
            correctAnswer:
              "Error rate on new, unseen data (out-of-sample error). Low training error + high generalization error = overfitting.",
          },
          {
            id: "q20-define-sampling-bias",
            type: "complete",
            question: "Define Sampling Bias.",
            correctAnswer:
              "Training data collected via flawed method fails to represent the real population poor generalization even with large samples.",
          },
          {
            id: "q21-define-feature-engineering",
            type: "complete",
            question: "Define Feature Engineering.",
            correctAnswer:
              "Creating, selecting, or transforming features to improve model performance: Feature Selection, Feature Extraction, adding new data sources.",
          },
          {
            id: "q22-define-the-no-free-lunch-theorem",
            type: "complete",
            question: "Define the No Free Lunch (NFL) Theorem.",
            correctAnswer:
              "No single ML model is universally best for all datasets. Model selection requires assumptions and empirical testing.",
          },
          {
            id: "q23-define-k-fold-cross-validation",
            type: "complete",
            question: "Define K-Fold Cross-Validation.",
            correctAnswer:
              "Splits data into K folds; trains/validates K times, each time using a different fold for validation. Final score = average across K runs. Training time xK.",
          },
          {
            id: "q24-define-classification-and-regression",
            type: "complete",
            question: "Define Classification and Regression.",
            orderMode: "ordered",
            correctAnswers: [
              "Classification: Discrete class label (binary <= 2 classes; multiclass > 2). Example: Spam detection, disease diagnosis.",
              "Regression: Continuous numerical value (multivariate: multiple outputs). Example: House price, GDP forecasting.",
            ],
          },
          {
            id: "q25-define-the-learning-rate-in-gradient-descent",
            type: "complete",
            question: "Define the Learning Rate in Gradient Descent.",
            correctAnswer:
              "Hyperparameter controlling step size per iteration. Too low -> slow convergence. Too high -> overshoots minimum/diverges. Must be tuned.",
          },
          {
            id: "q26-compare-ai-ml-and-deep-learning",
            type: "complete",
            question:
              "Compare AI, ML, and Deep Learning based on Scope, Data Dependency, Mechanism, Examples, and Interpretability.",
            orderMode: "ordered",
            correctAnswers: [
              "AI: Broadest scope; Rules or data dependency; Rule/learning-based mechanism; Examples include Expert systems, robotics; Interpretability varies.",
              "ML: Subset of AI scope; Requires data dependency; Learns functions mechanism; Examples include SVM, Decision Trees; Generally interpretable.",
              "DL: Subset of ML scope; Requires large data dependency; Learns hierarchical reps mechanism; Examples include CNN, RNN, Transformers; Often black box.",
            ],
          },
          {
            id: "q27-compare-traditional-programming-vs-machine-learning",
            type: "complete",
            question:
              "Compare Traditional Programming vs. Machine Learning based on Input, Output, Rule Source, Adaptability, and Best For.",
            orderMode: "ordered",
            correctAnswers: [
              "Traditional Programming: Input is Data + Rules; Output is Result; Rule Source is Written by developer; Adaptability requires manual updates; Best for stable, well-defined problems.",
              "Machine Learning: Input is Data + Labels (Output); Output is Learned Model (Rules); Rule Source is Learned from data automatically; Adapts with new data; Best for complex or changing problems.",
            ],
          },
          {
            id: "q28-compare-supervised-unsupervised-and-reinforcement-learning",
            type: "complete",
            question:
              "Compare Supervised, Unsupervised, and Reinforcement Learning based on Labels, Goal, Feedback, Main Tasks, and Example.",
            orderMode: "ordered",
            correctAnswers: [
              "Supervised: Labels required; Goal is to predict output; Direct (correct labels) feedback; Main tasks are Classification, Regression; Example is Spam filter.",
              "Unsupervised: No labels; Goal is to discover structure; No feedback; Main tasks are Clustering, DR, Anomaly; Example is Customer segmentation.",
              "Reinforcement: Reward signal only labels; Goal is to maximize reward; Indirect (reward/penalty) feedback; Main task is Policy optimization; Example is Game playing, robotics.",
            ],
          },
          {
            id: "q29-compare-batch-learning-vs-online-learning",
            type: "complete",
            question:
              "Compare Batch Learning vs. Online Learning based on Learning Mode, Adaptability, Resource Use, and Best For.",
            orderMode: "ordered",
            correctAnswers: [
              "Batch (Offline): Entire dataset at once learning mode; Low adaptability (full retrain needed); High CPU/RAM per cycle resource use; Best for stable data, large resources.",
              "Online: Incremental (one/mini-batch) learning mode; High adaptability (adapts instantly); Low resource use per update; Best for fast-changing data, IoT, streams.",
            ],
          },
          {
            id: "q30-compare-instance-based-vs-model-based-learning",
            type: "complete",
            question:
              "Compare Instance-based vs. Model-based Learning based on Prediction Method, Memory Use, Training Speed, Prediction Speed, and Example.",
            orderMode: "ordered",
            correctAnswers: [
              "Instance-based: Predicts by comparing to stored examples (similarity); Stores all instances; Fast training speed (memorize); Slow prediction speed (compare all instances); Example is KNN.",
              "Model-based: Applies learned equation/boundary for prediction; Stores only parameters; Slow training speed (optimization); Fast prediction speed (apply formula); Examples include Linear Regression, SVM.",
            ],
          },
          {
            id: "q31-compare-overfitting-vs-underfitting",
            type: "complete",
            question:
              "Compare Overfitting vs. Underfitting based on Training Error, Test/Val Error, Bias, Variance, Cause, and Solution.",
            orderMode: "ordered",
            correctAnswers: [
              "Overfitting: Low training error; High test/val error; Low bias; High variance; Cause is model too complex / noisy data; Solution is regularization, more data, simpler model.",
              "Underfitting: High training error; High test/val error; High bias; Low variance; Cause is model too simple / poor features; Solution is more complex model, better features.",
            ],
          },
          {
            id: "q32-compare-classification-vs-regression",
            type: "complete",
            question:
              "Compare Classification vs. Regression based on Output, Performance Metric, Examples, and Algorithm Examples.",
            orderMode: "ordered",
            correctAnswers: [
              "Classification: Discrete class label output; Accuracy, F1, AUC-ROC performance metrics; Examples include spam detection, disease diagnosis; Algorithm examples include Logistic Regression, SVM, Decision Tree.",
              "Regression: Continuous numerical value output; RMSE, MSE, MAE, R' performance metrics; Examples include house price, GDP prediction; Algorithm examples include Linear Regression, Ridge, Lasso.",
            ],
          },
          {
            id: "q33-compare-model-parameter-vs-hyperparameter",
            type: "complete",
            question:
              "Compare Model Parameter vs. Hyperparameter based on who sets it, timing, and examples.",
            orderMode: "ordered",
            correctAnswers: [
              "Model Parameter: Learned automatically during training; Updated each training step; Examples include weights in linear regression (theta0, theta1).",
              "Hyperparameter: Set manually before training; Fixed throughout training; Examples include learning rate, alpha, k in KNN.",
            ],
          },
          {
            id: "q34-compare-training-set-validation-set-and-test-set",
            type: "complete",
            question:
              "Compare Training Set, Validation Set, and Test Set based on Purpose, Typical Size, Reuse, and Risk if misused.",
            orderMode: "ordered",
            correctAnswers: [
              "Training Set: Purpose is to learn parameters; Typical size is ~60-80%; Reused repeatedly; Risk if misused is overfitting.",
              "Validation Set: Purpose is to tune hyperparameters and detect overfitting; Typical size is ~10-20%; Reused repeatedly; Risk if misused is hyperparameter overfitting.",
              "Test Set: Purpose is final evaluation; Typical size is ~10-20%; Used only once; Risk if misused is optimistic estimate.",
            ],
          },
          {
            id: "q35-advantages-disadvantages-of-machine-learning",
            type: "complete",
            question:
              "What are the Advantages and Disadvantages of Machine Learning?",
            orderMode: "unordered",
            correctAnswers: [
              "Advantage: Handles complex, non-linear problems",
              "Advantage: Adapts and improves with more data",
              "Advantage: Automates rule discovery",
              "Advantage: Finds hidden patterns humans miss",
              "Advantage: Applicable across diverse domains",
              "Disadvantage: Requires large, high-quality labeled data",
              "Disadvantage: Models can be opaque ('black box')",
              "Disadvantage: Computationally expensive to train",
              "Disadvantage: Sensitive to data quality (garbage in, garbage out)",
              "Disadvantage: May amplify biases in training data",
            ],
          },
          {
            id: "q36-advantages-disadvantages-of-supervised-learning",
            type: "complete",
            question:
              "What are the Advantages and Disadvantages of Supervised Learning?",
            orderMode: "unordered",
            correctAnswers: [
              "Advantage: Accurate with direct label feedback",
              "Advantage: Measurable performance metrics",
              "Advantage: Mature algorithms, strong theory",
              "Disadvantage: Labeling is expensive and time-consuming",
              "Disadvantage: Needs large labeled datasets to generalize",
              "Disadvantage: Cannot discover patterns not in labels",
            ],
          },
          {
            id: "q37-advantages-disadvantages-of-unsupervised-learning",
            type: "complete",
            question:
              "What are the Advantages and Disadvantages of Unsupervised Learning?",
            orderMode: "unordered",
            correctAnswers: [
              "Advantage: No labeling required",
              "Advantage: Discovers hidden structure",
              "Advantage: Scalable to large datasets",
              "Disadvantage: Hard to evaluate (no ground truth)",
              "Disadvantage: Cluster assignments can be ambiguous",
              "Disadvantage: Harder to tune and interpret",
            ],
          },
          {
            id: "q38-advantages-disadvantages-of-batch-learning",
            type: "complete",
            question:
              "What are the Advantages and Disadvantages of Batch Learning?",
            orderMode: "unordered",
            correctAnswers: [
              "Advantage: Stable, consistent model",
              "Advantage: Easy to validate and version",
              "Advantage: Uses full dataset for training",
              "Disadvantage: Cannot adapt without full retraining",
              "Disadvantage: Retraining is costly on large data",
              "Disadvantage: Suffers model rot over time",
            ],
          },
          {
            id: "q39-advantages-disadvantages-of-online-learning",
            type: "complete",
            question:
              "What are the Advantages and Disadvantages of Online Learning?",
            orderMode: "unordered",
            correctAnswers: [
              "Advantage: Adapts in real time",
              "Advantage: Memory efficient",
              "Advantage: Handles streaming data (stock, IoT)",
              "Disadvantage: Sensitive to noisy/adversarial data",
              "Disadvantage: Learning rate is critical and hard to tune",
              "Disadvantage: May forget old patterns if rate too high",
            ],
          },
          {
            id: "q40-main-challenges-of-machine-learning",
            type: "complete",
            question:
              "What are the main challenges of Machine Learning categorized into Bad Data Challenges and Bad Algorithm Challenges?",
            orderMode: "unordered",
            correctAnswers: [
              "Bad Data Challenge: Insufficient training data",
              "Bad Data Challenge: Nonrepresentative data / sampling bias",
              "Bad Data Challenge: Poor-quality data (noise, errors, outliers)",
              "Bad Data Challenge: Irrelevant features needs feature engineering",
              "Bad Algorithm Challenge: Overfitting memorizes noise, poor generalization",
              "Bad Algorithm Challenge: Underfitting too simple to capture patterns",
            ],
          },
          {
            id: "q41-when-to-use-ml-instead-of-traditional-programming",
            type: "complete",
            question:
              "When should you use ML instead of traditional programming?",
            orderMode: "unordered",
            correctAnswers: [
              "No human expertise or task too dangerous (e.g., Mars navigation).",
              "Humans perform it but cannot explain the rules (e.g., speech/image recognition).",
              "Rules change over time and system must adapt (e.g., financial forecasting).",
              "Needs per-user customization (e.g., biometric authentication).",
            ],
          },
          {
            id: "q42-five-applications-of-machine-learning",
            type: "complete",
            question:
              "List and describe five applications of Machine Learning.",
            orderMode: "unordered",
            correctAnswers: [
              "Predictive Analytics: Estimates future values from historical patterns (sales, energy)",
              "Fraud & Risk Detection: Identifies unusual behavior in financial/security data",
              "Recommendation Systems: Suggests relevant items based on user history (Netflix, Amazon)",
              "Medical Diagnosis: Analyzes patient data to assist disease identification",
              "Anomaly Detection: Detects rare/abnormal data points (manufacturing, intrusion detection)",
            ],
          },
          {
            id: "q43-testing-and-validation-in-ml",
            type: "complete",
            question:
              "Explain testing and validation in ML, including the standard splits, K-Fold CV, and key signals.",
            correctAnswer:
              "Goal: estimate generalization error on unseen data. Split sizes and purposes: Training Set (~80%) to learn model parameters; Validation Set (~10%) to tune hyperparameters and early stopping when val error rises; Test Set (~10%) used ONLY ONCE for final unbiased evaluation. K-Fold CV is used when data is small and rotates validation fold across K iterations. Key signal: Low train + High test error -> Overfitting. Both high indicates underfitting.",
          },
          {
            id: "q44-three-sources-of-generalization-error",
            type: "complete",
            question:
              "What are the three sources of generalization error, their causes, and remedies?",
            orderMode: "ordered",
            correctAnswers: [
              "Bias: Cause is wrong model assumptions (e.g., linear for nonlinear data) -> underfitting; Remedy is more complex model, better features.",
              "Variance: Cause is oversensitive to training data fluctuations -> overfitting; Remedy is regularization, more data, simpler model.",
              "Irreducible Error: Cause is inherent data noise (sensor errors, wrong labels); Remedy is clean data, remove outliers.",
            ],
          },
          {
            id: "q45-bias-variance-tradeoff",
            type: "complete",
            question:
              "Describe the Bias-Variance Tradeoff based on model complexity and its goal.",
            correctAnswer:
              "High complexity results in Low Bias and High Variance, leading to Overfitting. Low complexity results in High Bias and Low Variance, leading to Underfitting. Optimal complexity has balanced Bias and balanced Variance, leading to the best generalization. Goal: find the sweet spot minimizing Bias^2 + Variance + Irreducible Error.",
          },
          {
            id: "q46-validation-set-vs-test-set",
            type: "complete",
            question:
              "Compare the Validation Set vs. Test Set in terms of purpose and how often they are used.",
            orderMode: "ordered",
            correctAnswers: [
              "Validation Set: Used to monitor training, detect overfitting, and tune hyperparameters. Used repeatedly during training.",
              "Test Set: Used for final unbiased performance estimate after all training/tuning. Used only once at the end.",
            ],
          },
          {
            id: "q47-types-of-unsupervised-learning",
            type: "complete",
            question:
              "List the types of Unsupervised Learning with their description and examples.",
            orderMode: "unordered",
            correctAnswers: [
              "Clustering: Groups similar instances without labels. Example: K-Means customer segmentation.",
              "Dimensionality Reduction: Merges correlated features to simplify data. Example: PCA for image features.",
              "Anomaly Detection: Identifies rare/abnormal data points. Example: Fraudulent credit card transactions.",
              "Generative Models: Creates new data similar to training distribution. Example: GANs generating faces.",
            ],
          },
          {
            id: "q48-reinforcement-learning-components",
            type: "complete",
            question:
              "List and describe the components of Reinforcement Learning, and outline the process.",
            correctAnswer:
              "Components: Agent (The learning system making decisions); Environment (The world the agent interacts with); State (Current situation/observation); Action (Decision that affects the environment); Reward (Positive = good action, Negative/penalty = bad action); Policy (Learned strategy: best action per state to maximize long-term reward). Process: Observe state -> Select action -> Receive reward -> Update policy -> Repeat.",
          },
          {
            id: "q49-why-does-the-nfl-theorem-matter-for-practitioners",
            type: "complete",
            question: "Why does the NFL theorem matter for practitioners?",
            correctAnswer:
              "No algorithm blindly outperforms all others on every problem. Practitioners must make domain assumptions, test multiple models empirically, and select the best for their specific problem.",
          },
          {
            id: "q50-why-does-data-quality-matter-more-than-quantity",
            type: "complete",
            question: "Why does data quality matter more than quantity?",
            correctAnswer:
              "A large dataset full of errors, bias, or irrelevant features teaches wrong patterns regardless of size. Nonrepresentative data fails on the real distribution. Data cleaning and representative sampling are often more impactful than collecting more data.",
          },
          {
            id: "q51-99-percent-training-accuracy-55-percent-test-accuracy-what-is-happening",
            type: "complete",
            question:
              "If a model achieves 99% training accuracy and 55% test accuracy, what is happening and what are the fixes?",
            correctAnswer:
              "This is classic Overfitting where the model memorized training noise. Fixes: Apply regularization (Ridge, Lasso, Elastic Net); Simplify the model (reduce polynomial degree / parameters); Collect more diverse training data; Remove noisy or irrelevant features; Use Early Stopping during gradient descent.",
          },
          {
            id: "q52-why-scale-features-before-gradient-descent",
            type: "complete",
            question: "Why scale features before Gradient Descent?",
            correctAnswer:
              "Different feature scales create elongated elliptical cost contours where GD follows a near-perpendicular path, needing many more iterations. Feature scaling (normalization/standardization) makes the bowl-shaped cost function circular, leading to fast, direct convergence.",
          },
          {
            id: "q53-learning-rate-tradeoff-how-to-choose",
            type: "complete",
            question:
              "Explain the learning rate tradeoff and strategies on how to choose it.",
            correctAnswer:
              "Too low (e.g., 0.02) causes very slow convergence with many iterations needed. Too high (e.g., 0.5) overshoots minimum and may diverge completely. Appropriate (e.g., 0.1) leads to efficient convergence in reasonable iterations. Strategy: grid search or learning rate schedule; monitor loss curve. Decrease if oscillating; increase if too slow.",
          },
          {
            id: "ex-q1-define-machine-learning",
            type: "complete",
            question: "Define Machine Learning.",
            correctAnswer:
              "ML gives computers the ability to learn from data without being explicitly programmed. Formally: performance on task T improves with experience E as measured by P. Goal: detect patterns automatically and use them for predictions.",
          },
          {
            id: "ex-q2-two-most-common-supervised-tasks",
            type: "complete",
            question: "What are the two most common supervised tasks?",
            orderMode: "ordered",
            correctAnswers: [
              "Classification: Discrete class label (binary: 2 classes; multiclass: > 2). Example: Spam detection, image recognition.",
              "Regression: Continuous numerical value (multivariate: multiple outputs). Example: House price, GDP forecasting.",
            ],
          },
          {
            id: "ex-q3-model-parameter-vs-hyperparameter",
            type: "complete",
            question: "Compare model parameter vs. hyperparameter.",
            orderMode: "ordered",
            correctAnswers: [
              "Model Parameter: Learned automatically by training algorithm; Updated during training; Examples include theta0, theta1 (weights & bias in linear regression).",
              "Hyperparameter: Set manually by practitioner; Fixed before training; Examples include Learning rate eta, alpha, k in KNN.",
            ],
          },
          {
            id: "ex-q4-role-of-rewards-in-reinforcement-learning",
            type: "complete",
            question: "What is the role of rewards in Reinforcement Learning?",
            correctAnswer:
              "Rewards are the feedback guiding learning. Positive reward -> reinforces good actions. Penalty (negative reward) -> discourages bad actions. Agent learns a policy to maximize cumulative long term reward. E.g., chess: capturing a piece = reward; losing one = penalty.",
          },
          {
            id: "ex-q5-main-challenges-in-machine-learning",
            type: "complete",
            question: "What are the main challenges in Machine Learning?",
            orderMode: "unordered",
            correctAnswers: [
              "Bad Data Problem: Insufficient training data quantity",
              "Bad Data Problem: Nonrepresentative data / sampling bias",
              "Bad Data Problem: Poor-quality data (noise, errors, outliers)",
              "Bad Data Problem: Irrelevant features / poor feature engineering",
              "Bad Algorithm Problem: Overfitting: too complex, poor generalization",
              "Bad Algorithm Problem: Underfitting: too simple, misses patterns",
              "Bad Algorithm Problem: Wrong model choice for problem type",
              "Bad Algorithm Problem: Poor hyperparameter tuning",
            ],
          },
          {
            id: "ex-q6-purpose-of-a-validation-set",
            type: "complete",
            question: "What is the purpose of a Validation Set?",
            correctAnswer:
              "Monitor performance during training to detect overfitting and tune hyperparameters. Apply Early Stopping when validation error rises. Standard split: ~80% Training (Learn model parameters) / ~10% Validation (Tune hyperparameters; early stopping) / ~10% Test (Final unbiased evaluation used once). For small datasets, use K-Fold Cross-Validation which rotates which fold is used for validation across K iterations.",
          },
        ],
      },
    ],
  },
  // {
  //   id: "reproductive-disorders",
  //   title: "Reproductive Disorders",
  //   isSubjectGroup: true,
  //   chapters: [
  //     {
  //       id: "unit-1-reproductive-disorders",
  //       title: "Unit 1: Reproductive Disorders",
  //       shuffleQuestions: false,
  //       showScore: true,
  //       quizModeTimer: 1800,
  //       questions: [
  //         {
  //           question:
  //             "In the three main stages of sexual differentiation, when does gonadal sex development typically occur, and what specific factor influences the development of testes?",
  //           type: "multiple",
  //           options: [
  //             "At fertilization; determined by XX or XY chromosomes",
  //             "Around 6-8 weeks gestation; influenced by the SRY gene on the Y chromosome",
  //             "Around 12-14 weeks gestation; influenced by anti-Müllerian hormone (AMH)",
  //             "At birth; under the direct influence of testosterone and estrogen",
  //           ],
  //           correctAnswer:
  //             "Around 6-8 weeks gestation; influenced by the SRY gene on the Y chromosome",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which embryonic structures develop into the female uterus and fallopian tubes, and under what condition is this development prevented?",
  //           type: "multiple",
  //           options: [
  //             "Wolffian ducts; unless inhibited by testosterone",
  //             "Müllerian ducts; unless inhibited by anti-Müllerian hormone (AMH) from the testes",
  //             "Wolffian ducts; unless inhibited by estrogen from the ovaries",
  //             "Müllerian ducts; unless stimulated by 5-alpha reductase",
  //           ],
  //           correctAnswer:
  //             "Müllerian ducts; unless inhibited by anti-Müllerian hormone (AMH) from the testes",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the estimated incidence rate of Disorders of Sex Development (DSDs) in live births, and how are these conditions classified?",
  //           type: "multiple",
  //           options: [
  //             "~1 in 500 births; classified by physical appearance",
  //             "~1 in 2,500 births; classified by chromosomal count only",
  //             "~1 in 4,400 births; classified by the Prader scale severity",
  //             "~1 in 4,500 births; classified by etiology",
  //           ],
  //           correctAnswer: "~1 in 4,500 births; classified by etiology",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "A patient presents with a 45,X karyotype, short stature, a webbed neck, cardiac defects like coarctation of the aorta, and streak ovaries. What is the diagnosis and recommended treatment based on the text?",
  //           type: "multiple",
  //           options: [
  //             "Klinefelter Syndrome; treated with testosterone therapy",
  //             "Swyer Syndrome; treated with surgery and progesterone",
  //             "Turner Syndrome; treated with growth hormone and estrogen replacement",
  //             "Ovotesticular DSD; treated with gender reassignment surgery",
  //           ],
  //           correctAnswer:
  //             "Turner Syndrome; treated with growth hormone and estrogen replacement",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which of the following describes the chromosomal abnormality and key clinical features of Klinefelter Syndrome?",
  //           type: "multiple",
  //           options: [
  //             "45,X; short stature, webbed neck, and ovarian dysgenesis",
  //             "47,XXY; tall stature, gynecomastia, small testes, infertility, and reduced testosterone",
  //             "46,XY; female external genitalia, uterus, but no ovaries",
  //             "48,XXYY; ambiguous genitalia at birth that completely virilizes at puberty",
  //           ],
  //           correctAnswer:
  //             "47,XXY; tall stature, gynecomastia, small testes, infertility, and reduced testosterone",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "In Swyer Syndrome (46,XY DSD), a mutation in the SRY or related genes prevents testis formation. What is the resulting phenotype of these individuals?",
  //           type: "multiple",
  //           options: [
  //             "Typical male external genitalia, undescended testes, and high testosterone levels",
  //             "Ambiguous genitalia at birth (micropenis, hypospadias) with sudden virilization at puberty",
  //             "Female external genitalia, a uterus, but no ovaries (streak-like gonads)",
  //             "Presence of both distinct ovarian and testicular tissue with a normal male phenotype",
  //           ],
  //           correctAnswer:
  //             "Female external genitalia, a uterus, but no ovaries (streak-like gonads)",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which phenotypic differentiation defect is characterized by normal male chromosomes (46,XY) and testes that produce testosterone, but a body that does not respond to it due to a receptor mutation?",
  //           type: "multiple",
  //           options: [
  //             "5-Alpha Reductase Deficiency",
  //             "Congenital Adrenal Hyperplasia (CAH)",
  //             "Swyer Syndrome",
  //             "Androgen Insensitivity Syndrome (AIS)",
  //           ],
  //           correctAnswer: "Androgen Insensitivity Syndrome (AIS)",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "A child is born with ambiguous genitalia, including a micropenis and hypospadias. At puberty, the child experiences significant virilization. What is the most likely underlying defect?",
  //           type: "multiple",
  //           options: [
  //             "Androgen Insensitivity Syndrome (AIS)",
  //             "5-Alpha Reductase Deficiency",
  //             "21-Hydroxylase Deficiency (CAH)",
  //             "Turner Syndrome",
  //           ],
  //           correctAnswer: "5-Alpha Reductase Deficiency",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the specific enzymatic defect in Congenital Adrenal Hyperplasia (CAH) mentioned in the text, and what are its classic phenotypic expressions in a 46,XX individual?",
  //           type: "multiple",
  //           options: [
  //             "SRY translocation; presence of both ovarian and testicular tissues",
  //             "Androgen receptor deficiency; female external genitalia with an absent uterus",
  //             "21-Hydroxylase Deficiency; virilized female genitalia (clitoromegaly, fused labia) and a salt-wasting crisis",
  //             "5-alpha reductase deficiency; typical male external genitalia with a severe growth spurt",
  //           ],
  //           correctAnswer:
  //             "21-Hydroxylase Deficiency; virilized female genitalia (clitoromegaly, fused labia) and a salt-wasting crisis",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which scale is used to classify the severity of ambiguous genitalia based on phallus size and urethral position?",
  //           type: "multiple",
  //           options: [
  //             "Tanner scale",
  //             "Prader scale",
  //             "GnRH scale",
  //             "Müllerian scale",
  //           ],
  //           correctAnswer: "Prader scale",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "How are central and peripheral precocious puberty differentiated etiologically and diagnostically?",
  //           type: "multiple",
  //           options: [
  //             "Central is gonadotropin-independent (low LH/FSH); peripheral is gonadotropin-dependent (high LH/FSH)",
  //             "Central involves premature activation of the HPG axis with elevated LH/FSH; peripheral is gonadotropin-independent with suppressed LH/FSH",
  //             "Central is caused exclusively by McCune-Albright syndrome; peripheral is always idiopathic",
  //             "Central is diagnosed via bone age X-ray; peripheral is diagnosed strictly via pelvic laparoscopy",
  //           ],
  //           correctAnswer:
  //             "Central involves premature activation of the HPG axis with elevated LH/FSH; peripheral is gonadotropin-independent with suppressed LH/FSH",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the most common cause of central precocious puberty in girls, and what medication is typically used to halt its progression?",
  //           type: "multiple",
  //           options: [
  //             "Brain tumors (hamartoma); treated with testosterone",
  //             "Ovarian tumors; treated with transsphenoidal surgery",
  //             "Idiopathic; treated with GnRH agonists (e.g., leuprolide)",
  //             "Adrenal hyperplasia; treated with glucocorticoids",
  //           ],
  //           correctAnswer:
  //             "Idiopathic; treated with GnRH agonists (e.g., leuprolide)",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Delayed puberty is defined as the absence of pubertal signs by what age thresholds in girls and boys respectively?",
  //           type: "multiple",
  //           options: [
  //             "Age 11 in girls or age 12 in boys",
  //             "Age 13 in girls or age 14 in boys",
  //             "Age 15 in girls or age 16 in boys",
  //             "Age 12 in girls or age 15 in boys",
  //           ],
  //           correctAnswer: "Age 13 in girls or age 14 in boys",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which condition is a pathological cause of delayed puberty characterized as hypogonadotropic hypogonadism accompanied by a lack of smell (anosmia)?",
  //           type: "multiple",
  //           options: [
  //             "Turner syndrome",
  //             "Klinefelter syndrome",
  //             "Kallmann syndrome",
  //             "McCune-Albright syndrome",
  //           ],
  //           correctAnswer: "Kallmann syndrome",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the difference between primary and secondary amenorrhea based on the lecture guidelines?",
  //           type: "multiple",
  //           options: [
  //             "Primary is pain during menses; secondary is the total absence of a cycle for more than 1 year",
  //             "Primary is the absence of periods by age 15-16 (or 13 if no secondary sex characteristics); secondary is the cessation of periods for '>=3 months' in women with prior menses",
  //             "Primary is due to anovulation; secondary is caused strictly by an imperforate hymen",
  //             "Primary occurs before menopause; secondary occurs post-menopause",
  //           ],
  //           correctAnswer:
  //             "Primary is the absence of periods by age 15-16 (or 13 if no secondary sex characteristics); secondary is the cessation of periods for '>=3 months' in women with prior menses",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the most common cause of secondary amenorrhea, and what is the most common cause of oligomenorrhea?",
  //           type: "multiple",
  //           options: [
  //             "Polycystic ovary syndrome (PCOS); Thyroid disorders",
  //             "Stress; Hypothalamic dysfunction",
  //             "Pregnancy; Polycystic ovary syndrome (PCOS)",
  //             "Hyperprolactinemia; Premature ovarian failure",
  //           ],
  //           correctAnswer: "Pregnancy; Polycystic ovary syndrome (PCOS)",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Primary dysmenorrhea is defined as painful periods with no underlying pathology. What is its primary physiological cause?",
  //           type: "multiple",
  //           options: [
  //             "Endometriosis or fibroids",
  //             "Cervical stenosis compressing the nerve path",
  //             "Prostaglandin-mediated uterine contractions",
  //             "Excess production of adrenal cortisol",
  //           ],
  //           correctAnswer: "Prostaglandin-mediated uterine contractions",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "How is anovulation definitively diagnosed using hormone levels, and what is a first-line ovulation induction agent used if the cause is PCOS?",
  //           type: "multiple",
  //           options: [
  //             "Mid-cycle progesterone '<3 ng/mL'; clomiphene",
  //             "Mid-cycle progesterone '>25 ng/mL'; cabergoline",
  //             "Suppressed LH/FSH ratio; leuprolide",
  //             "Elevated cortisol levels; glucocorticoids",
  //           ],
  //           correctAnswer: "Mid-cycle progesterone '<3 ng/mL'; clomiphene",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "How is Primary Hypogonadism distinguished from Secondary Hypogonadism in blood test results?",
  //           type: "multiple",
  //           options: [
  //             "Primary has low FSH/LH; Secondary has high FSH/LH",
  //             "Primary has high FSH/LH with low testosterone/estradiol; Secondary has low/normal FSH/LH with low testosterone/estradiol",
  //             "Primary features elevated prolactin levels; Secondary features elevated cortisol levels",
  //             "Primary is diagnosed via pelvic ultrasound; Secondary can only be diagnosed using an X-ray",
  //           ],
  //           correctAnswer:
  //             "Primary has high FSH/LH with low testosterone/estradiol; Secondary has low/normal FSH/LH with low testosterone/estradiol",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the most common cause of hyperprolactinemia, and how does elevated prolactin directly impact fertility?",
  //           type: "multiple",
  //           options: [
  //             "Hypothyroidism; it destroys ovarian and testicular tissue structures directly",
  //             "Pituitary prolactinoma; it inhibits GnRH, suppressing FSH/LH and causing anovulation or oligospermia",
  //             "Adrenal hyperplasia; it elevates testosterone to block egg implantation",
  //             "Chronic kidney disease; it triggers premature epiphyseal fusion",
  //           ],
  //           correctAnswer:
  //             "Pituitary prolactinoma; it inhibits GnRH, suppressing FSH/LH and causing anovulation or oligospermia",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which class of medications is the first-line medical treatment for hyperprolactinemia to lower prolactin levels and shrink pituitary tumors?",
  //           type: "multiple",
  //           options: [
  //             "GnRH agonists (e.g., leuprolide)",
  //             "Glucocorticoids (e.g., hydrocortisone)",
  //             "Dopamine agonists (e.g., cabergoline, bromocriptine)",
  //             "Non-steroidal anti-inflammatory drugs (NSAIDs)",
  //           ],
  //           correctAnswer:
  //             "Dopamine agonists (e.g., cabergoline, bromocriptine)",
  //           shuffle: true,
  //         },
  //       ],
  //     },
  //     {
  //       id: "unit-2-reproductive-disorders",
  //       title: "Unit 2: Reproductive Disorders",
  //       shuffleQuestions: false,
  //       showScore: true,
  //       quizModeTimer: 1800,
  //       questions: [
  //         {
  //           question:
  //             "What is the definition of infertility for a woman under the age of 35?",
  //           type: "multiple",
  //           options: [
  //             "Inability to conceive after 6 months of regular unprotected intercourse",
  //             "Inability to conceive after 12 months of regular unprotected intercourse",
  //             "Inability to conceive after 18 months of regular unprotected intercourse",
  //             "Inability to conceive after 24 months of regular unprotected intercourse",
  //           ],
  //           correctAnswer:
  //             "Inability to conceive after 12 months of regular unprotected intercourse",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which of the following is categorized as a pre-testicular cause of male infertility?",
  //           type: "multiple",
  //           options: [
  //             "Cryptorchidism",
  //             "Varicocele",
  //             "Hypogonadotropic hypogonadism",
  //             "Congenital bilateral absence of vas deferens",
  //           ],
  //           correctAnswer: "Hypogonadotropic hypogonadism",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "According to WHO criteria, what is the minimum normal value for total sperm motility?",
  //           type: "multiple",
  //           options: ["≥32%", "≥40%", "≥15%", "≥4%"],
  //           correctAnswer: "≥40%",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "A semen analysis profile shows a sperm count of less than 15 million/mL. How is this condition classified?",
  //           type: "multiple",
  //           options: [
  //             "Azoospermia",
  //             "Asthenozoospermia",
  //             "Teratozoospermia",
  //             "Oligospermia",
  //           ],
  //           correctAnswer: "Oligospermia",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which of the following is the most common cause of ovulatory disorders in female infertility?",
  //           type: "multiple",
  //           options: [
  //             "Premature ovarian failure",
  //             "Polycystic Ovary Syndrome (PCOS)",
  //             "Hyperprolactinemia",
  //             "Hypothalamic amenorrhea",
  //           ],
  //           correctAnswer: "Polycystic Ovary Syndrome (PCOS)",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which imaging technique is specifically mentioned in the text for evaluating tubal patency?",
  //           type: "multiple",
  //           options: [
  //             "Transvaginal ultrasound (USG)",
  //             "Magnetic Resonance Imaging (MRI)",
  //             "Hysterosalpingography (HSG)",
  //             "Scrotal ultrasound (USG)",
  //           ],
  //           correctAnswer: "Hysterosalpingography (HSG)",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What values indicate a low ovarian reserve and diminished ovarian reserve during hormone assessments?",
  //           type: "multiple",
  //           options: [
  //             "AMH <1 ng/mL and Day 3 FSH >10 IU/L",
  //             "AMH >1 ng/mL and Day 3 FSH <10 IU/L",
  //             "Mid-luteal progesterone >10 ng/mL",
  //             "Mid-luteal progesterone <25 nmol/L",
  //           ],
  //           correctAnswer: "AMH <1 ng/mL and Day 3 FSH >10 IU/L",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Vascular causes account for what percentage of sexual dysfunction cases?",
  //           type: "multiple",
  //           options: ["10-20%", "5%", "40-50%", "15%"],
  //           correctAnswer: "40-50%",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which screening tool score indicates Erectile Dysfunction (ED) according to the text?",
  //           type: "multiple",
  //           options: [
  //             "IIEF-5 score <21",
  //             "BPP score <6/10",
  //             "IIEF-5 score >21",
  //             "FSFI score <21",
  //           ],
  //           correctAnswer: "IIEF-5 score <21",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "How is retrograde ejaculation diagnosed according to the provided lecture?",
  //           type: "multiple",
  //           options: [
  //             "Peak systolic velocity <25 cm/s on a Doppler ultrasound",
  //             "Post-orgasm urinalysis revealing spermatozoa",
  //             "Speculum exam revealing pelvic floor muscle spasms",
  //             "Elevated morning testosterone levels",
  //           ],
  //           correctAnswer: "Post-orgasm urinalysis revealing spermatozoa",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Pelvic floor physiotherapy using dilators and cognitive behavioral therapy (CBT) are standard treatments for which condition?",
  //           type: "multiple",
  //           options: [
  //             "Retrograde ejaculation",
  //             "Erectile Dysfunction",
  //             "Vaginismus",
  //             "Asymmetric IUGR",
  //           ],
  //           correctAnswer: "Vaginismus",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the most common cause of sporadic first-trimester spontaneous pregnancy loss?",
  //           type: "multiple",
  //           options: [
  //             "Anatomical defects (like a septate uterus)",
  //             "Chromosomal abnormalities (Aneuploidy)",
  //             "Paternal sperm DNA fragmentation",
  //             "Maternal infections like Listeria",
  //           ],
  //           correctAnswer: "Chromosomal abnormalities (Aneuploidy)",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "A patient presents with vaginal bleeding and cramping. Upon clinical examination, the cervix is closed and ultrasound confirms a viable fetus. Which type of miscarriage is this?",
  //           type: "multiple",
  //           options: ["Inevitable", "Incomplete", "Missed", "Threatened"],
  //           correctAnswer: "Threatened",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "According to ESHRE guidelines for Recurrent Pregnancy Loss (RPL), which test should be administered to all couples?",
  //           type: "multiple",
  //           options: [
  //             "Inherited thrombophilia screening",
  //             "Parental karyotype",
  //             "Testicular biopsy",
  //             "24h urine protein test",
  //           ],
  //           correctAnswer: "Parental karyotype",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What criteria must be met to establish a diagnosis of Pre-eclampsia?",
  //           type: "multiple",
  //           options: [
  //             "New hypertension after 20 weeks + blood glucose ≥5.1 mmol/L",
  //             "New hypertension before 20 weeks + proteinuria ≥300 mg/24h",
  //             "New hypertension after 20 weeks + proteinuria (≥300 mg/24h or protein/creatinine ≥30) or end-organ damage",
  //             "Blood pressure ≥160/110 mmHg at any gestational age with no proteinuria",
  //           ],
  //           correctAnswer:
  //             "New hypertension after 20 weeks + proteinuria (≥300 mg/24h or protein/creatinine ≥30) or end-organ damage",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "An umbilical-to-middle cerebral artery (MCA) Doppler ratio of >4 indicates what condition in a growth-restricted fetus?",
  //           type: "multiple",
  //           options: [
  //             "Normal placentation",
  //             "Brain-sparing effect",
  //             "Ejaculatory duct obstruction",
  //             "Chorioamnionitis",
  //           ],
  //           correctAnswer: "Brain-sparing effect",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which of the following blood glucose thresholds is used to diagnose Gestational Diabetes Mellitus (GDM) 1 hour after a glucose challenge?",
  //           type: "multiple",
  //           options: [
  //             "≥5.1 mmol/L",
  //             "≥8.5 mmol/L",
  //             "≥10.0 mmol/L",
  //             "≥7.2 mmol/L",
  //           ],
  //           correctAnswer: "≥10.0 mmol/L",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "According to the text, prolonged labour (dystocia) in the active phase is characterized by protracted descent/dilation. What is a primary cause of this?",
  //           type: "multiple",
  //           options: [
  //             "Inadequate contractions",
  //             "Maternal anxiety",
  //             "Cephalopelvic disproportion (CPD) or malposition",
  //             "Premature rupture of membranes",
  //           ],
  //           correctAnswer: "Cephalopelvic disproportion (CPD) or malposition",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the recommended management approach for a patient with Preterm Premature Rupture of Membranes (PPROM) at less than 34 weeks gestation without immediate infection?",
  //           type: "multiple",
  //           options: [
  //             "Induce labour immediately",
  //             "Perform an emergency D&C",
  //             "Administer antibiotics (erythromycin), steroids, MgSO4, and use expectant management till 37 weeks",
  //             "Perform a hysteroscopic metroplasty",
  //           ],
  //           correctAnswer:
  //             "Administer antibiotics (erythromycin), steroids, MgSO4, and use expectant management till 37 weeks",
  //           shuffle: true,
  //         },
  //       ],
  //     },
  //     {
  //       id: "unit-3-reproductive-disorders",
  //       title: "Unit 3: Reproductive Disorders",
  //       shuffleQuestions: false,
  //       showScore: true,
  //       quizModeTimer: 1800,
  //       questions: [
  //         {
  //           question:
  //             "Which of the following is a key reproductive mechanism of Antiphospholipid Syndrome (APS)?",
  //           type: "multiple",
  //           options: [
  //             "Complement activation and endothelial damage",
  //             "Destruction of primordial follicles by T-cells",
  //             "Hyperprolactinemia suppressing GnRH",
  //             "Granulosa cell anti-apoptosis via survivin overexpression",
  //           ],
  //           correctAnswer: "Complement activation and endothelial damage",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "According to the Sydney criteria, how far apart must persistent positivity of aPL antibodies be evaluated on two occasions for an APS diagnosis?",
  //           type: "multiple",
  //           options: [
  //             "Greater than or equal to 4 weeks apart",
  //             "Greater than or equal to 6 weeks apart",
  //             "Greater than or equal to 12 weeks apart",
  //             "Greater than or equal to 24 weeks apart",
  //           ],
  //           correctAnswer: "Greater than or equal to 12 weeks apart",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Primary ovarian insufficiency (POI) is defined as ovarian failure before what age?",
  //           type: "multiple",
  //           options: ["Age 35", "Age 40", "Age 45", "Age 50"],
  //           correctAnswer: "Age 40",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What specific hormonal threshold is used to define primary ovarian insufficiency (POI) in terms of FSH and estradiol?",
  //           type: "multiple",
  //           options: [
  //             "FSH >40 IU/L and estradiol <100 pg/mL",
  //             "FSH >25 IU/L and estradiol <50 pg/mL",
  //             "FSH >10 IU/L and estradiol <25 pg/mL",
  //             "FSH >55 IU/L and estradiol <75 pg/mL",
  //           ],
  //           correctAnswer: "FSH >25 IU/L and estradiol <50 pg/mL",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Autoimmune oophoritis is often associated with polyglandular autoimmune syndrome type 1 (APS-1), which involves mutations in which gene?",
  //           type: "multiple",
  //           options: ["SPO11 gene", "NR5A1 gene", "AIRE gene", "FMR1 gene"],
  //           correctAnswer: "AIRE gene",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What specific serum TSH range is linked with a 2-3 fold increased miscarriage risk in subclinical hypothyroidism?",
  //           type: "multiple",
  //           options: [
  //             "TSH >2.5 mIU/L",
  //             "TSH >4.5 mIU/L",
  //             "TSH 0.1-2.5 mIU/L",
  //             "TSH >10 mIU/L",
  //           ],
  //           correctAnswer: "TSH >2.5 mIU/L",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the recommended preconception titration target for Levothyroxine (L-T4) in women with Hashimoto's thyroiditis?",
  //           type: "multiple",
  //           options: [
  //             "TSH <4.5 mIU/L",
  //             "TSH <2.5 mIU/L",
  //             "TSH 0.1-2.5 mIU/L",
  //             "TSH <1.0 mIU/L",
  //           ],
  //           correctAnswer: "TSH <2.5 mIU/L",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which genetic mutation follows an autosomal recessive pattern and causes non-obstructive azoospermia (NOA) in males due to spermatocyte arrest and POI in females?",
  //           type: "multiple",
  //           options: [
  //             "SPO11 mutations",
  //             "NR5A1 mutations",
  //             "KAL1 mutations",
  //             "FGFR1 mutations",
  //           ],
  //           correctAnswer: "SPO11 mutations",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which region of Y-chromosome microdeletions involves DAZ genes, causes variable oligospermia, and holds the highest testicular sperm extraction (TESE) success rate at 50%?",
  //           type: "multiple",
  //           options: ["AZFa", "AZBb", "AZFc", "AZFd"],
  //           correctAnswer: "AZFc",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What pathogenetic mechanism describes Kallmann Syndrome and Hypogonadotropic Hypogonadism (HH)?",
  //           type: "multiple",
  //           options: [
  //             "Defective neuronal migration causing anosmia and absent GnRH neurons",
  //             "Hypermethylation of FMR1 gene leading to FMRP loss",
  //             "Triplet repeat expansions causing RNA toxic gain-of-function in Sertoli cells",
  //             "Mutation in the androgen receptor (AR) gene on Xq12 causing defective receptor signaling",
  //           ],
  //           correctAnswer:
  //             "Defective neuronal migration causing anosmia and absent GnRH neurons",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Complete Androgen Insensitivity Syndrome (CAIS) is characterized by which of the following clinical presentations?",
  //           type: "multiple",
  //           options: [
  //             "46,XX karyotype, ambiguous genitalia, and hyperandrogenism",
  //             "46,XY karyotype, phenotypic female with blind vagina, absent uterus, and intra-abdominal testes",
  //             "45,X karyotype, streak gonads, primary amenorrhea, and short stature",
  //             "47,XXY karyotype, small testes, azoospermia, and gynecomastia",
  //           ],
  //           correctAnswer:
  //             "46,XY karyotype, phenotypic female with blind vagina, absent uterus, and intra-abdominal testes",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "A female patient has an FMR1 gene triplet repeat expansion size falling into the 'premutation' category. What is the range of repeats and her associated risk?",
  //           type: "multiple",
  //           options: [
  //             "5-44 repeats; no risk of premature ovarian insufficiency",
  //             "55-200 repeats; 20-25% risk of fragile X-associated premature ovarian failure (FXPOF)",
  //             "200+ repeats; 50% shorter reproductive lifespan with hypermethylation",
  //             "150-250 repeats; 10-15% risk of primary amenorrhea",
  //           ],
  //           correctAnswer:
  //             "55-200 repeats; 20-25% risk of fragile X-associated premature ovarian failure (FXPOF)",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "In Polycystic Ovary Syndrome (PCOS), what feature is overexpressed in granulosa cells, leading to anti-apoptosis and arrested antral folliculogenesis?",
  //           type: "multiple",
  //           options: ["HOXA10", "Survivin", "VEGF", "FasL"],
  //           correctAnswer: "Survivin",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What mechanism is responsible for thin endometrium (<7mm) and implantation failure in Asherman Syndrome?",
  //           type: "multiple",
  //           options: [
  //             "Progesterone resistance via KRAS mutations",
  //             "Shallow trophoblast invasion due to sFlt-1/PIGF imbalance",
  //             "TGF-beta1 overexpression causing myofibroblast proliferation and collagen deposition",
  //             "E6/E7 oncoproteins inactivating p53/Rb proteins",
  //           ],
  //           correctAnswer:
  //             "TGF-beta1 overexpression causing myofibroblast proliferation and collagen deposition",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "How does a hydrosalpinx fluid from Pelvic Inflammatory Disease (PID) affect IVF outcomes?",
  //           type: "multiple",
  //           options: [
  //             "It causes Leydig cell hyperplasia and inefficient steroidogenesis.",
  //             "It contains embryotoxic cytokines/ROS that reduce IVF implantation by 50%.",
  //             "It increases endometrial thickness beyond 4mm, mimicking atypical hyperplasia.",
  //             "It prevents the differentiation of syncytiotrophoblasts via annexin V depletion.",
  //           ],
  //           correctAnswer:
  //             "It contains embryotoxic cytokines/ROS that reduce IVF implantation by 50%.",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What specific histological findings are expected in a rare ovarian biopsy for a patient with Autoimmune Oophoritis?",
  //           type: "multiple",
  //           options: [
  //             "Theca cell hyperplasia and cyst formation",
  //             "Lymphocytic infiltration",
  //             "Myofibroblast proliferation and dense collagen deposition",
  //             "Hyalinized tubules and Leydig cell aplasia",
  //           ],
  //           correctAnswer: "Lymphocytic infiltration",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "What is the estimated contribution of chronic prostatitis to cases of male infertility due to leukocyte influx and seminal ROS production?",
  //           type: "multiple",
  //           options: [
  //             "10-15% contribution",
  //             "20-25% contribution",
  //             "30% contribution",
  //             "50% contribution",
  //           ],
  //           correctAnswer: "30% contribution",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which of the following describes the genetic composition and mechanism behind a gestational trophoblastic hydatidiform mole?",
  //           type: "multiple",
  //           options: [
  //             "An extra maternal X-chromosome escaping inactivation via XIST dysregulation",
  //             "A 45,X chromosomal breakdown resulting in streak gonads",
  //             "An androgenic diploid sperm fertilizes an empty ovum, leading to trophoblast hyperplasia",
  //             "A de novo autosomal dominant mutation in the NR5A1 gene disrupting gonadal differentiation",
  //           ],
  //           correctAnswer:
  //             "An androgenic diploid sperm fertilizes an empty ovum, leading to trophoblast hyperplasia",
  //           shuffle: true,
  //         },
  //         {
  //           question:
  //             "Which gene mutation is associated with 46,XY gonadal dysgenesis (resulting in XY females with streak gonads) or 46,XX POI?",
  //           type: "multiple",
  //           options: ["CYP17A1", "HSD17B3", "NR5A1", "SPO11"],
  //           correctAnswer: "NR5A1",
  //           shuffle: true,
  //         },
  //       ],
  //     },
  //   ],
  // },
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