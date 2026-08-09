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
        title: "MCQ QBank",
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
            question:
              "What is considered the most reliable way to determine how well a machine learning model will generalize to new data?",
            type: "multiple",
            options: [
              "Deploying the model directly into production and observing it.",
              "Testing the model on unseen examples.",
              "Increasing the number of parameters during the training phase.",
              "Achieving a 0% error rate on the initial training dataset.",
            ],
            correctAnswer: "Testing the model on unseen examples.",
            shuffle: true,
          },
          {
            question:
              "If a machine learning model achieves low error on the training set but high error on the test set, what does this indicate?",
            type: "multiple",
            options: [
              "The model is perfectly optimized.",
              "The model is underfitting the data.",
              "The model is overfitting the training data.",
              "The dataset split ratio needs to be inverted.",
            ],
            correctAnswer: "The model is overfitting the training data.",
            shuffle: true,
          },
          {
            question:
              "What risk arises if a developer repeatedly evaluates generalization error on the same test set to tune hyperparameters?",
            type: "multiple",
            options: [
              "The model becomes too simple to learn anything.",
              "The training data size is automatically increased.",
              "The model and its hyperparameters may be tuned to perform optimally only on that specific set, reducing performance on truly unseen data.",
              "The model will fail to compute any linear regression functions.",
            ],
            correctAnswer:
              "The model and its hyperparameters may be tuned to perform optimally only on that specific set, reducing performance on truly unseen data.",
            shuffle: true,
          },
          {
            question:
              "When monitoring training and validation accuracies, at what point should training be stopped to preserve generalization?",
            type: "multiple",
            options: [
              "As soon as validation accuracy begins to improve.",
              "When training accuracy plateaus while validation accuracy continues to sharply rise.",
              "Once the model begins to overfit, which is indicated when training accuracy continues to improve while validation accuracy plateaus or declines.",
              "When the total training time has been multiplied by a factor of K.",
            ],
            correctAnswer:
              "Once the model begins to overfit, which is indicated when training accuracy continues to improve while validation accuracy plateaus or declines.",
            shuffle: true,
          },
          {
            question:
              "What is a major disadvantage of utilizing the K-fold cross-validation method?",
            type: "multiple",
            options: [
              "It severely reduces the reliability of model evaluations.",
              "It permanently shrinks the final test dataset size.",
              "It prevents the calculation of an average validation error.",
              "It increases the total training time by a factor of K.",
            ],
            correctAnswer:
              "It increases the total training time by a factor of K.",
            shuffle: true,
          },
          {
            question:
              "In the linear model for the life satisfaction regression example (life_satisfaction = theta_0 + theta_1 * GDP_per_capita), what role do theta_0 and theta_1 play?",
            type: "multiple",
            options: [
              "They are the non-overlapping data subsets.",
              "They are the model parameters that need tweaking to represent a linear function.",
              "They represent the specific life satisfaction scores for Turkey and Hungary.",
              "They are the regularization constraints forced to remain at a value of 10.",
            ],
            correctAnswer:
              "They are the model parameters that need tweaking to represent a linear function.",
            shuffle: true,
          },
          {
            question:
              "What is the objective of a cost function in a linear regression algorithm?",
            type: "multiple",
            options: [
              "To separate the validation data from the test data.",
              "To minimize the distance between the linear model's predictions and the training examples.",
              "To maximize the slope of the linear regression line.",
              "To ensure that countries with a 'w' in their name achieve higher satisfaction scores.",
            ],
            correctAnswer:
              "To minimize the distance between the linear model's predictions and the training examples.",
            shuffle: true,
          },
          {
            question:
              "Why did the high-degree polynomial model for life satisfaction fail to truly generalize, despite performing better on the training data?",
            type: "multiple",
            options: [
              "It forced theta_0 = 0, removing all degrees of freedom.",
              "It strongly overfitted the training data by detecting coincidental patterns caused by noise, such as names containing the letter 'w'.",
              "It was trained entirely on impoverished nations like Rwanda and Zimbabwe.",
              "It didn't employ any training subsets.",
            ],
            correctAnswer:
              "It strongly overfitted the training data by detecting coincidental patterns caused by noise, such as names containing the letter 'w'.",
            shuffle: true,
          },
          {
            question: "What does the No Free Lunch (NFL) theorem state?",
            type: "multiple",
            options: [
              "Training datasets must always consist of an 80/20 split.",
              "No single model performs best for all possible datasets.",
              "Models with two degrees of freedom are always superior to models with one.",
              "Linear models are guaranteed in advance to outperform neural networks.",
            ],
            correctAnswer:
              "No single model performs best for all possible datasets.",
            shuffle: true,
          },
          {
            question:
              "By applying a regularization constraint to a linear model (keeping theta_1 small), what is the practical outcome?",
            type: "multiple",
            options: [
              "The model fits the training data perfectly but fails completely on new examples.",
              "The model is forced to match a high-degree polynomial function.",
              "The model produces a simpler model that doesn't fit training data quite as well but does better with new unseen examples.",
              "The algorithm automatically switches into a neural network architecture.",
            ],
            correctAnswer:
              "The model produces a simpler model that doesn't fit training data quite as well but does better with new unseen examples.",
            shuffle: true,
          },
          {
            question:
              "In a linear regression model, what represents the input instance's feature vector in the vector equation 'ŷ = hθ(x) = θᵀx'?",
            type: "multiple",
            options: ["ŷ", "hθ", "θ", "x"],
            correctAnswer: "x",
            shuffle: true,
          },
          {
            question:
              "Why is the Mean Square Error (MSE) typically preferred over the Root Mean Square Error (RMSE) when training a Linear Regression model?",
            type: "multiple",
            options: [
              "MSE gives a completely different and more accurate optimal parameter set than RMSE.",
              "MSE is easier to minimize, and the number that minimizes a function also minimizes its square root.",
              "MSE does not require calculating the number of training instances (m).",
              "MSE is an iterative approach, whereas RMSE is only used in closed-form math equations.",
            ],
            correctAnswer:
              "MSE is easier to minimize, and the number that minimizes a function also minimizes its square root.",
            shuffle: true,
          },
          {
            question:
              "Which mathematical formula represents the 'Normal equation' used to directly compute the optimal parameter vector θ̂ in the closed-form approach?",
            type: "multiple",
            options: [
              "θ̂ = (XᵀX)⁻¹Xᵀy",
              "MSE(X,hθ) = 1/m ∑ (θᵀx⁽ⁱ⁾ - y⁽ⁱ⁾)²",
              "ŷ = θ₀ + θ₁x₁ + ... + θₙxₙ",
              "θ̂ = (Xy)⁻¹XᵀX",
            ],
            correctAnswer: "θ̂ = (XᵀX)⁻¹Xᵀy",
            shuffle: true,
          },
          {
            question:
              "What happens during Gradient Descent optimization if the learning rate hyperparameter is configured to be too high?",
            type: "multiple",
            options: [
              "The algorithm will take an excessive amount of steps and a very long time to converge.",
              "The parameters will smoothly settle exactly into a local minimum on the left side of the curve.",
              "The algorithm can jump across the valley, end up higher than before, and go off track with increasingly larger values.",
              "The algorithm automatically stops because the gradient vector immediately falls below the tolerance threshold.",
            ],
            correctAnswer:
              "The algorithm can jump across the valley, end up higher than before, and go off track with increasingly larger values.",
            shuffle: true,
          },
          {
            question:
              "Why is a Linear Regression model's Mean Square Error (MSE) cost function guaranteed to avoid poor local minima during Gradient Descent?",
            type: "multiple",
            options: [
              "Because it is an irregular function that allows random steps to jump across plateaus.",
              "Because it is a convex function, meaning there is only one global minimum and no local ones.",
              "Because it uses an adaptive learning rate schedule that automatically shrinks to zero.",
              "Because it is computed using only a single randomly selected training instance at each iteration.",
            ],
            correctAnswer:
              "Because it is a convex function, meaning there is only one global minimum and no local ones.",
            shuffle: true,
          },
          {
            question:
              "If Feature 1 has a much lower numerical scale compared to Feature 2, how does Gradient Descent behave when optimizing the cost function?",
            type: "multiple",
            options: [
              "It goes completely straight toward the minimum and quickly reaches it.",
              "It proceeds in a perfectly smooth trajectory and stops exactly at the minimum within a single epoch.",
              "It starts off moving almost perpendicular to the global minimum and finishes with a long march down a nearly flat valley.",
              "It breaks down entirely because Min-max scaling cannot be applied to features with different boundaries.",
            ],
            correctAnswer:
              "It starts off moving almost perpendicular to the global minimum and finishes with a long march down a nearly flat valley.",
            shuffle: true,
          },
          {
            question:
              "What are the characteristics of the Standardization feature scaling method as described in the lecture?",
            type: "multiple",
            options: [
              "It restricts numbers strictly to a range between 0 and 1 by dividing by the minimum value.",
              "It subtracts the mean to achieve a zero mean, divides by the standard deviation for unit variance, and is less influenced by outliers.",
              "It is much easier than normalization but performs poorly when there are extreme numerical attributes.",
              "It requires calculating partial derivatives over the whole training batch to achieve a zero variance.",
            ],
            correctAnswer:
              "It subtracts the mean to achieve a zero mean, divides by the standard deviation for unit variance, and is less influenced by outliers.",
            shuffle: true,
          },
          {
            question:
              "Which variant of Gradient Descent is characterized by selecting exactly one single training instance at random for each update step?",
            type: "multiple",
            options: [
              "Batch Gradient Descent",
              "Mini-batch Gradient Descent",
              "Closed-form Normal Equation Descent",
              "Stochastic Gradient Descent",
            ],
            correctAnswer: "Stochastic Gradient Descent",
            shuffle: true,
          },
          {
            question:
              "What is a primary technical advantage of Stochastic Gradient Descent's inherent random fluctuations when dealing with a highly irregular cost function?",
            type: "multiple",
            options: [
              "It follows a perfectly smooth path and stops exactly at the true global minimum.",
              "It helps the algorithm escape local minima, increasing the likelihood of reaching the global minimum compared to Batch Gradient Descent.",
              "It guarantees that every single training instance is picked exactly once per epoch.",
              "It eliminates the need for any learning rate hyperparameter or tolerance threshold tuning.",
            ],
            correctAnswer:
              "It helps the algorithm escape local minima, increasing the likelihood of reaching the global minimum compared to Batch Gradient Descent.",
            shuffle: true,
          },
          {
            question:
              "How do the trajectories and settling behaviors of Batch, Stochastic, and Mini-batch Gradient Descent differ at the end of training?",
            type: "multiple",
            options: [
              "Stochastic and Mini-batch follow a smooth path and settle exactly at the minimum, while Batch fluctuates.",
              "All three variants follow a smooth path and stop exactly at the global minimum.",
              "Batch follows a smooth path and stops exactly at the minimum, while both Stochastic and Mini-batch continue to fluctuate around it.",
              "Mini-batch settles exactly at the minimum, Batch oscillates wildly, and Stochastic stops progressing entirely.",
            ],
            correctAnswer:
              "Batch follows a smooth path and stops exactly at the minimum, while both Stochastic and Mini-batch continue to fluctuate around it.",
            shuffle: true,
          },
          {
            question:
              "When a dataset contains multiple features, how does Polynomial Regression capture the interactions between them?",
            type: "multiple",
            options: [
              "By automatically removing correlated features from the training set.",
              "By using separate independent linear equations for each feature.",
              "By expanding the feature set to include higher-order powers and combinations of features up to a specified degree.",
              "By applying an 'l2' norm constraint directly to the input matrices.",
            ],
            correctAnswer:
              "By expanding the feature set to include higher-order powers and combinations of features up to a specified degree.",
            shuffle: true,
          },
          {
            question:
              "What initial behavior does the training error curve exhibit in a basic Linear Regression model's learning curves, and why?",
            type: "multiple",
            options: [
              "It starts high and gradually decreases because the model struggles with small datasets.",
              "It begins at zero because the model can fit the training set perfectly when there are just one or two instances.",
              "It remains completely flat from the beginning because the data contains no Gaussian noise.",
              "It converges directly to zero as more training examples are added to the set.",
            ],
            correctAnswer:
              "It begins at zero because the model can fit the training set perfectly when there are just one or two instances.",
            shuffle: true,
          },
          {
            question:
              "If an engineering student discovers that both the training error and validation error curves have plateaued, and are rather high and close to one another, what does this indicate about the machine learning model?",
            type: "multiple",
            options: [
              "The model is overfitting the training dataset.",
              "The model has achieved an optimal fit with minimal generalization error.",
              "The model is underfitting the dataset.",
              "The model needs a much larger quantity of identical training instances to improve.",
            ],
            correctAnswer: "The model is underfitting the dataset.",
            shuffle: true,
          },
          {
            question:
              "If a model is underfitting the training set, which of the following strategies will NOT assist in improving its performance according to the lecture text?",
            type: "multiple",
            options: [
              "Increasing the number of training instances.",
              "Developing greater features.",
              "Employing a more intricate model.",
              "Using a model with higher complexity.",
            ],
            correctAnswer: "Increasing the number of training instances.",
            shuffle: true,
          },
          {
            question:
              "What are the two significant visual differences between the learning curves of an overfitting 10th-degree polynomial model compared to a basic Linear Regression model?",
            type: "multiple",
            options: [
              "The training error is significantly larger, and there is a massive overlap between the two curves.",
              "The training error is significantly smaller, and the curves are separated by a gap.",
              "The validation error is zero, and the training error curve is completely horizontal.",
              "Both curves start at a value of 3.0 and steadily decrease to zero without any gap.",
            ],
            correctAnswer:
              "The training error is significantly smaller, and the curves are separated by a gap.",
            shuffle: true,
          },
          {
            question:
              "According to statistical findings highlighted in the text, inaccurate assumptions—such as believing data is linear when it is actually quadratic—cause which component of the generalization error?",
            type: "multiple",
            options: [
              "Variance",
              "Irreducible error",
              "Bias",
              "Regularization ratio",
            ],
            correctAnswer: "Bias",
            shuffle: true,
          },
          {
            question:
              "What is the only method available to reduce the portion of generalization error known as 'irreducible error'?",
            type: "multiple",
            options: [
              "Lowering the number of polynomial degrees.",
              "Increasing the hyperparameter 'alpha' to a very large value.",
              "Adjusting the ratio 'r' in an Elastic Net model to 0.",
              "Cleaning up the data, such as repairing malfunctioning sensors or identifying and eliminating outliers.",
            ],
            correctAnswer:
              "Cleaning up the data, such as repairing malfunctioning sensors or identifying and eliminating outliers.",
            shuffle: true,
          },
          {
            question:
              "How is regularization typically achieved structurally within a standard linear regression model?",
            type: "multiple",
            options: [
              "By limiting the model's weights.",
              "By adding more interaction terms like a^2b and ab^2.",
              "By increasing the size of the validation dataset.",
              "By always setting the hyperparameter 'alpha' = 0.",
            ],
            correctAnswer: "By limiting the model's weights.",
            shuffle: true,
          },
          {
            question:
              "In Ridge Regression, what happens to the trained model's predictions if the hyperparameter 'alpha' is set to a very large value?",
            type: "multiple",
            options: [
              "The model matches the training data exactly, resulting in zero training error.",
              "The model reverts entirely into a standard Lasso Regression model.",
              "All weights end up very close to zero, and the result is a flat line going through the data's mean.",
              "The model captures all higher-order combinations up to a degree of 300.",
            ],
            correctAnswer:
              "All weights end up very close to zero, and the result is a flat line going through the data's mean.",
            shuffle: true,
          },
          {
            question:
              "An Elastic Net model is configured with an adjustable ratio parameter 'r'. According to the text, what occurs when 'r' = 0 and when 'r' = 1?",
            type: "multiple",
            options: [
              "If 'r' = 0 it is Polynomial Regression; if 'r' = 1 it is Linear Regression.",
              "If 'r' = 0 it is Ridge Regression; if 'r' = 1 it is Lasso Regression.",
              "If 'r' = 0 it has zero bias; if 'r' = 1 it has zero variance.",
              "If 'r' = 0 it is a simple model; if 'r' = 1 it is an overly complex model.",
            ],
            correctAnswer:
              "If 'r' = 0 it is Ridge Regression; if 'r' = 1 it is Lasso Regression.",
            shuffle: true,
          },
          {
            question:
              "What is the core definition of the 'Early Stopping' regularization method?",
            type: "multiple",
            options: [
              "Terminating training as soon as the training error reaches zero.",
              "Terminating training as soon as the validation error achieves a minimum.",
              "Terminating training when the learning rate drops below a specific threshold.",
              "Terminating training when the training error begins to increase.",
            ],
            correctAnswer:
              "Terminating training as soon as the validation error achieves a minimum.",
            shuffle: true,
          },
          {
            question:
              "During iterative learning (such as Batch Gradient Descent on a complex Polynomial Regression model), what behavior typically indicates that the model has started to overfit the training data?",
            type: "multiple",
            options: [
              "Both the training error and validation error stop decreasing.",
              "The training error begins to increase while the validation error decreases.",
              "The validation error begins to increase again rather than decrease.",
              "The training error drops abruptly to zero.",
            ],
            correctAnswer:
              "The validation error begins to increase again rather than decrease.",
            shuffle: true,
          },
          {
            question:
              "Why is it difficult to pinpoint when the validation error minimum is reached when using Stochastic Gradient Descent (SGD) or Mini-batch Gradient Descent compared to Batch Gradient Descent?",
            type: "multiple",
            options: [
              "The training error never drops in SGD.",
              "The error curves are not smooth, making it hard to identify the true minimum.",
              "These algorithms do not use a validation set.",
              "The validation error steadily increases from the first epoch.",
            ],
            correctAnswer:
              "The error curves are not smooth, making it hard to identify the true minimum.",
            shuffle: true,
          },
          {
            question:
              "What solution does the lecture propose to handle early stopping when dealing with the non-smooth error curves of Stochastic or Mini-batch Gradient Descent?",
            type: "multiple",
            options: [
              "Stop training immediately at the very first slight increase in validation error.",
              "Stop only after the validation error has been above the minimum for some time, then roll back the model parameters to the minimum point.",
              "Ignore the validation curve and stop only when the training error reaches its absolute minimum.",
              "Switch back to Batch Gradient Descent to smooth out the curves.",
            ],
            correctAnswer:
              "Stop only after the validation error has been above the minimum for some time, then roll back the model parameters to the minimum point.",
            shuffle: true,
          },
          {
            question:
              "Logistic Regression is classified as a binary classifier because it predicts that an instance belongs to the positive class (label '1') if its estimated probability satisfies which condition?",
            type: "multiple",
            options: [
              "P_hat > 0",
              "P_hat < 0.5",
              "P_hat >= 0.5",
              "P_hat = 1.0",
            ],
            correctAnswer: "P_hat >= 0.5",
            shuffle: true,
          },
          {
            question:
              "What mathematical function does Logistic Regression use to output a probability between 0 and 1 instead of producing a raw weighted sum directly?",
            type: "multiple",
            options: [
              "A high-degree polynomial function",
              "A cost-entropy function",
              "A softmax function",
              "A sigmoid function",
            ],
            correctAnswer: "A sigmoid function",
            shuffle: true,
          },
          {
            question:
              "In the context of the Logistic Regression cost function for a single positive instance (y=1), how does the cost change as the predicted probability approaches zero?",
            type: "multiple",
            options: [
              "The cost approaches zero.",
              "The cost becomes very large.",
              "The cost remains completely constant.",
              "The cost becomes negative.",
            ],
            correctAnswer: "The cost becomes very large.",
            shuffle: true,
          },
          {
            question:
              "Which extension allows Logistic Regression to perform multiclass classification directly without combining multiple binary classifiers?",
            type: "multiple",
            options: [
              "Polynomial Regression",
              "Softmax Regression",
              "Cross Entropy Regression",
              "Batch Gradient Regression",
            ],
            correctAnswer: "Softmax Regression",
            shuffle: true,
          },
          {
            question:
              "How are the individual parameter vectors for each class organized structurally in Softmax Regression?",
            type: "multiple",
            options: [
              "They are averaged into a single parameter vector.",
              "They are organized as columns in a target vector.",
              "They are organized as rows in a single parameter matrix.",
              "They are discarded after calculating the scores.",
            ],
            correctAnswer:
              "They are organized as rows in a single parameter matrix.",
            shuffle: true,
          },
          {
            question:
              "Why must Softmax Regression only be applied to mutually exclusive classes?",
            type: "multiple",
            options: [
              "Because it can only compute gradients for one class at a time.",
              "Because it can only predict one class at a time (it is multiclass, not multioutput).",
              "Because it uses the sigmoid function instead of the exponential function.",
              "Because it is limited strictly to a maximum of two target classes.",
            ],
            correctAnswer:
              "Because it can only predict one class at a time (it is multiclass, not multioutput).",
            shuffle: true,
          },
          {
            question:
              "In the MNIST dataset, how many total features are present in each image, and what determines this number?",
            type: "multiple",
            options: [
              "70,000 features, representing the total number of small photos in the dataset.",
              "60,000 features, representing the size of the training split.",
              "784 features, because each image consists of 28x28 pixels where each feature shows one pixel's intensity.",
              "255 features, corresponding to the maximum pixel intensity range from black to white.",
            ],
            correctAnswer:
              "784 features, because each image consists of 28x28 pixels where each feature shows one pixel's intensity.",
            shuffle: true,
          },
          {
            question:
              "Why is the Stochastic Gradient Descent (SGD) classifier considered suitable for a task like designing a '5-detector' on the MNIST dataset?",
            type: "multiple",
            options: [
              "It can naturally perform multioutput multiclass classification natively without any threshold shifting.",
              "It is highly capable of handling very large datasets efficiently.",
              "It is a perfect classifier that ensures zero values on the minor diagonal of a confusion matrix.",
              "It bypasses the precision/recall tradeoff by keeping both values at 100% simultaneously.",
            ],
            correctAnswer:
              "It is highly capable of handling very large datasets efficiently.",
            shuffle: true,
          },
          {
            question:
              "If a classifier is built to categorize every single handwritten digit in the MNIST dataset as 'not 5', what would its approximate accuracy be, and why?",
            type: "multiple",
            options: [
              "Around 50%, because it is a binary task with two outcomes: 5 and not 5.",
              "Above 93%, because K-fold cross-validation always inflates the score.",
              "About 90%, because each digit constitutes roughly 10% of the entire dataset.",
              "Exactly 0%, because it completely fails to identify any actual true positive 5s.",
            ],
            correctAnswer:
              "About 90%, because each digit constitutes roughly 10% of the entire dataset.",
            shuffle: true,
          },
          {
            question:
              "Which of the following accurately describes the alignment of rows and columns within a confusion matrix as defined in the lecture?",
            type: "multiple",
            options: [
              "Each column represents an actual class, while each row represents a predicted class.",
              "Each column represents a predicted class, while each row represents an actual class.",
              "Both rows and columns represent actual classes simultaneously.",
              "Both rows and columns represent predicted classes simultaneously.",
            ],
            correctAnswer:
              "Each column represents a predicted class, while each row represents an actual class.",
            shuffle: true,
          },
          {
            question:
              "A classifier incorrectly marks a non-5 image as a 5. According to the performance terminology, this mistake is classified as a:",
            type: "multiple",
            options: [
              "True Negative (TN)",
              "False Negative (FN)",
              "True Positive (TP)",
              "False Positive (FP)",
            ],
            correctAnswer: "False Positive (FP)",
            shuffle: true,
          },
          {
            question:
              "What metric is calculated as the harmonic mean of precision and recall, and why is this specific mean type selected?",
            type: "multiple",
            options: [
              "Accuracy, because it provides an equal weight to all classification categories.",
              "F1 score, because the harmonic mean gives more weight to low values, ensuring a high score only when both precision and recall are high.",
              "ROC Curve, because it maps the trade-off between sensitivity and specificity.",
              "True Negative Rate (TNR), because it focuses on correctly identifying the negative class.",
            ],
            correctAnswer:
              "F1 score, because the harmonic mean gives more weight to low values, ensuring a high score only when both precision and recall are high.",
            shuffle: true,
          },
          {
            question:
              "When a classification threshold is raised by moving it to the right on a decision score axis, what happens to precision and recall?",
            type: "multiple",
            options: [
              "Precision decreases and recall increases.",
              "Both precision and recall decrease concurrently.",
              "Precision increases (potentially up to 100%) while recall decreases.",
              "Both precision and recall increase concurrently.",
            ],
            correctAnswer:
              "Precision increases (potentially up to 100%) while recall decreases.",
            shuffle: true,
          },
          {
            question:
              "The Receiver Operating Characteristic (ROC) curve plots the True Positive Rate (TPR) against which specific metric?",
            type: "multiple",
            options: [
              "Precision",
              "False Negative Rate (FNR)",
              "False Positive Rate (FPR), which is equal to 1 - TNR",
              "Area Under the Curve (AUC)",
            ],
            correctAnswer:
              "False Positive Rate (FPR), which is equal to 1 - TNR",
            shuffle: true,
          },
          {
            question:
              "For a dataset containing N unique classes, how many distinct binary classifiers must be trained if an engineer utilizes the one-versus-one (OvO) strategy?",
            type: "multiple",
            options: [
              "N classifiers",
              "N * (N - 1) classifiers",
              "N * (N - 1) / 2 classifiers",
              "10 classifiers, regardless of N",
            ],
            correctAnswer: "N * (N - 1) / 2 classifiers",
            shuffle: true,
          },
          {
            question:
              "Why is the one-versus-one (OvO) strategy preferred over one-versus-all (OvA) when training algorithms like support vector machines?",
            type: "multiple",
            options: [
              "Support vector machines do not scale efficiently as the training set size increases, and OvO trains classifiers on smaller subsets of data faster.",
              "OvO is simpler to implement for most other generic classification algorithms.",
              "OvO requires far fewer total classifiers to be created than OvA.",
              "Support vector machines are naturally multiclass and do not require binary extensions unless using OvA.",
            ],
            correctAnswer:
              "Support vector machines do not scale efficiently as the training set size increases, and OvO trains classifiers on smaller subsets of data faster.",
            shuffle: true,
          },
          {
            question:
              "In a manufacturing scenario where images are captured automatically along a production line to detect defective products, what is the main bottleneck that makes training a standard binary classifier difficult?",
            type: "multiple",
            options: [
              "Automatically capturing images is too slow and technologically complex.",
              "Design modifications happen too frequently to build any initial database.",
              "Manual labeling by human experts is time-consuming, expensive, and tedious.",
              "Unsupervised learning models completely fail to process high-resolution pixel data.",
            ],
            correctAnswer:
              "Manual labeling by human experts is time-consuming, expensive, and tedious.",
            shuffle: true,
          },
          {
            question:
              "When a clustering algorithm is applied to the unlabeled Iris dataset using only petal length and petal width, which of the following best describes what is visually discernible?",
            type: "multiple",
            options: [
              "All three species clusters are perfectly separated and easily visible to our own eyes.",
              "The bottom left cluster is readily identified, but it is less obvious that the top right cluster contains two unique sub-clusters.",
              "The top right cluster is perfectly separated, but the bottom left cluster is completely hidden.",
              "No groupings can be identified unless the dataset is completely manually labeled first.",
            ],
            correctAnswer:
              "The bottom left cluster is readily identified, but it is less obvious that the top right cluster contains two unique sub-clusters.",
            shuffle: true,
          },
          {
            question:
              "How can clustering be utilized within search engines to build an image-retrieval system based on a reference picture?",
            type: "multiple",
            options: [
              "By calculating manual labels for every user text query in real time.",
              "By running a clustering algorithm on all database images, mapping the user's reference picture to its corresponding cluster, and returning all images in that cluster.",
              "By eliminating the pixel patterns entirely and sorting the database alphabetically by file size.",
              "By re-initializing the centroids of the search engine database each time a new search is performed.",
            ],
            correctAnswer:
              "By running a clustering algorithm on all database images, mapping the user's reference picture to its corresponding cluster, and returning all images in that cluster.",
            shuffle: true,
          },
          {
            question:
              "What is the fundamental difference between hard clustering and soft clustering in the K-Means algorithm?",
            type: "multiple",
            options: [
              "Hard clustering uses mean squared distance, while soft clustering avoids using any distance metrics.",
              "Hard clustering is used exclusively for labeled datasets, whereas soft clustering works only on unlabeled datasets.",
              "Hard clustering places every data point into only one cluster, while soft clustering provides each point with a value reflecting its relationship to every cluster.",
              "Hard clustering requires pre-specifying the value of 'k', while soft clustering calculates the number of clusters automatically.",
            ],
            correctAnswer:
              "Hard clustering places every data point into only one cluster, while soft clustering provides each point with a value reflecting its relationship to every cluster.",
            shuffle: true,
          },
          {
            question:
              "During the K-Means clustering process, if the cluster labels of all instances are completely known and available, how are the centroids determined?",
            type: "multiple",
            options: [
              "By initializing them randomly from 'k' arbitrary points outside the dataset boundary.",
              "By computing the mean position of the instances within each cluster.",
              "By evaluating the performance metric known as the model's inertia.",
              "By measuring the distance to the furthest outperforming outlier.",
            ],
            correctAnswer:
              "By computing the mean position of the instances within each cluster.",
            shuffle: true,
          },
          {
            question:
              "Why is the K-Means procedure guaranteed to converge after a finite number of iterations instead of oscillating indefinitely?",
            type: "multiple",
            options: [
              "Because the number of clusters 'k' decreases dynamically with each iteration.",
              "Because the centroids are initialized using values from other algorithms.",
              "Because the mean squared distance between instances and their closest centroid decreases with each iteration.",
              "Because the algorithm automatically transitions from hard clustering to soft clustering.",
            ],
            correctAnswer:
              "Because the mean squared distance between instances and their closest centroid decreases with each iteration.",
            shuffle: true,
          },
          {
            question:
              "To mitigate the risk of K-Means converging to a local optimum rather than the global correct solution, what strategy is recommended by the lecture?",
            type: "multiple",
            options: [
              "Increase the number of clusters 'k' until inertia reaches zero.",
              "Switch from color segmentation to semantic segmentation.",
              "Avoid initializing centroids randomly and instead manually label the entire dataset.",
              "Run the algorithm several times with different random initializations and store the best solutions based on inertia.",
            ],
            correctAnswer:
              "Run the algorithm several times with different random initializations and store the best solutions based on inertia.",
            shuffle: true,
          },
          {
            question:
              "Why is 'inertia' an unreliable metric if used as the sole criterion to determine the optimal absolute number of clusters ('k') for a K-Means model?",
            type: "multiple",
            options: [
              "Inertia consistently increases as the number of clusters increases, making models look worse.",
              "Inertia consistently decreases as the number of clusters increases, because data points naturally become closer to their nearest centroid.",
              "Inertia only works when clusters vary significantly in shape and density.",
              "Inertia can only be computed if the true human-annotated target labels ('y') are available.",
            ],
            correctAnswer:
              "Inertia consistently decreases as the number of clusters increases, because data points naturally become closer to their nearest centroid.",
            shuffle: true,
          },
          {
            question:
              "In the context of computer vision and image segmentation, how does semantic segmentation differ from instance segmentation?",
            type: "multiple",
            options: [
              "Semantic segmentation groups pixels by color values, while instance segmentation groups pixels by texture patterns.",
              "Semantic segmentation groups all pixels belonging to the same category of object into a single segment, while instance segmentation assigns pixels based on individual objects.",
              "Semantic segmentation relies heavily on supervised labels, while instance segmentation is entirely unsupervised.",
              "Semantic segmentation is used exclusively for medical imaging, while instance segmentation is used exclusively for autonomous driving.",
            ],
            correctAnswer:
              "Semantic segmentation groups all pixels belonging to the same category of object into a single segment, while instance segmentation assigns pixels based on individual objects.",
            shuffle: true,
          },
          {
            question:
              "When performing basic color segmentation on an image of a ladybug using K-Means, what happens if fewer than eight clusters are used, and why?",
            type: "multiple",
            options: [
              "The ladybug's bright red color receives its own dedicated cluster because K-Means favors small, vivid regions.",
              "The algorithm oscillates indefinitely because red is a highly dense and elongated cluster.",
              "The ladybug's bright red color is grouped with surrounding environmental colors because the ladybug occupies only a small portion of the image and K-Means favors clusters of relatively similar size.",
              "The algorithm switches automatically to instance segmentation to separate the ladybug from the background.",
            ],
            correctAnswer:
              "The ladybug's bright red color is grouped with surrounding environmental colors because the ladybug occupies only a small portion of the image and K-Means favors clusters of relatively similar size.",
            shuffle: true,
          },
        ],
      },
    ],
  },
  {
    id: "ds-exams-questions",
    title: "DS Exams MSQ",
    shuffleQuestions: false,
    showScore: true,
    quizModeTimer: 1800,
    questions: [
      {
        question:
          "As soon as computers are interconnected and communicating, we have distributed system. This approach of interconnectivity has been known as",
        type: "multiple",
        options: [
          "Multi-computers.",
          "Distributed computers.",
          "Parallel computers.",
          "All of them.",
        ],
        correctAnswer: "All of them.",
        shuffle: true,
      },
      {
        question:
          "In Cluster computing, there is a master node that hosts processes responsible for as",
        type: "multiple",
        options: ["2 tasks.", "3 tasks.", "4 tasks.", "5 tasks."],
        correctAnswer: "2 tasks.",
        shuffle: true,
      },
      {
        question: "Banks, Travel agencies",
        type: "multiple",
        options: [
          "Distributed Pervasive Systems.",
          "Distributed Information Systems.",
          "Distributed Computing Systems.",
          "None of the above.",
        ],
        correctAnswer: "Distributed Information Systems.",
        shuffle: true,
      },
      {
        question: "In a distributed system, each processor has its own",
        type: "multiple",
        options: [
          "Local memory.",
          "Clock.",
          "Both local memory and clock.",
          "None of the above.",
        ],
        correctAnswer: "Both local memory and clock.",
        shuffle: true,
      },
      {
        question: "The computer system of a parallel computer is capable of",
        type: "multiple",
        options: [
          "Decentralized computing.",
          "Parallel computing.",
          "Centralized computing.",
          "None of these.",
        ],
        correctAnswer: "Parallel computing.",
        shuffle: true,
      },
      {
        question:
          "is a network where nodes have the special capability of sensing some parameters.",
        type: "multiple",
        options: [
          "Pervasive Applications.",
          "Information Applications.",
          "Computing Applications.",
          "Sensor N/W.",
        ],
        correctAnswer: "Sensor N/W.",
        shuffle: true,
      },
      {
        question: "There are main types of distributed systems.",
        type: "multiple",
        options: ["2.", "3.", "4.", "5."],
        correctAnswer: "3.",
        shuffle: true,
      },
      {
        question: "Cloud is classified as",
        type: "multiple",
        options: [
          "Distributed Computing Systems.",
          "Distributed Information Systems.",
          "Distributed Pervasive Systems.",
          "None of them.",
        ],
        correctAnswer: "Distributed Computing Systems.",
        shuffle: true,
      },
      {
        question:
          "A distributed system is a collection of computers linked by a computer network that appears to its users as a single coherent system.",
        type: "multiple",
        options: ["Dependent.", "Independent.", "Same.", "Different."],
        correctAnswer: "Independent.",
        shuffle: true,
      },
      {
        question: "Computer Network is",
        type: "multiple",
        options: [
          "Collection of hardware components and computers.",
          "Interconnected by communication channels.",
          "Sharing of resources and information.",
          "All of the above.",
        ],
        correctAnswer: "All of the above.",
        shuffle: true,
      },
      {
        question:
          "Types of transmission channels or media used for LAN or WAN are",
        type: "multiple",
        options: [
          "Twisted Pair Cables.",
          "Coaxial Cables.",
          "Fibre-Optic Cables and Radio Waves.",
          "All of the above.",
        ],
        correctAnswer: "All of the above.",
        shuffle: true,
      },
      {
        question: "Grid is classified as",
        type: "multiple",
        options: [
          "Distributed Computing Systems.",
          "Distributed Information Systems.",
          "Distributed Pervasive Systems.",
          "None of them.",
        ],
        correctAnswer: "Distributed Computing Systems.",
        shuffle: true,
      },
      {
        question:
          "In pervasive Computing Systems, we are faced with distributed systems in which is the default behavior.",
        type: "multiple",
        options: [
          "Instability.",
          "Stability.",
          "Both of them.",
          "None of them.",
        ],
        correctAnswer: "Instability.",
        shuffle: true,
      },
      {
        question: "Distributed Systems are used because",
        type: "multiple",
        options: [
          "Cost reduction.",
          "Increase of availability.",
          "Decrease in performance.",
          "Both a and b.",
        ],
        correctAnswer: "Both a and b.",
        shuffle: true,
      },
      {
        question:
          "is considered one of the problems that face distributed systems.",
        type: "multiple",
        options: [
          "Parallelism converting.",
          "No. of processors.",
          "The bandwidth of interconnection.",
          "All of them.",
        ],
        correctAnswer: "All of them.",
        shuffle: true,
      },
      {
        question:
          "Load Balancing ensures that each node performs amount of work.",
        type: "multiple",
        options: ["Same.", "Different.", "Double.", "Half."],
        correctAnswer: "Same.",
        shuffle: true,
      },
      {
        question: "Cluster is classified as",
        type: "multiple",
        options: [
          "Distributed Computing Systems.",
          "Distributed Information Systems.",
          "Distributed Pervasive Systems.",
          "Distributed International Systems.",
        ],
        correctAnswer: "Distributed Computing Systems.",
        shuffle: true,
      },
      {
        question:
          "Which of the following is not an advantage of distributed systems?",
        type: "multiple",
        options: [
          "All the nodes in the distributed system are connected.",
          "It can be scaled as required.",
          "Failure of one node does not lead to the failure of the entire distributed system.",
          "Some messages and data can be lost in the network while moving from one node to another.",
        ],
        correctAnswer:
          "Some messages and data can be lost in the network while moving from one node to another.",
        shuffle: true,
      },
      {
        question:
          "If 5% of machines are down, the System should continue to work with % loss in performance.",
        type: "multiple",
        options: ["4.", "5.", "6.", "7."],
        correctAnswer: "5.",
        shuffle: true,
      },
      {
        question:
          "The technologies that helped in arising of a distributed system are",
        type: "multiple",
        options: [
          "Availability of microprocessors.",
          "Continuing advances in communication technologies.",
          "Both of them.",
          "None of them.",
        ],
        correctAnswer: "Both of them.",
        shuffle: true,
      },
      {
        question:
          "Cluster computing Systems are a group of high-end systems connected through",
        type: "multiple",
        options: ["LAN.", "WAN.", "MAN.", "None of them."],
        correctAnswer: "LAN.",
        shuffle: true,
      },
      {
        question: "WAN stands for",
        type: "multiple",
        options: [
          "World Area Network.",
          "Wide Area Network.",
          "Web Area Network.",
          "Wide Web Network.",
        ],
        correctAnswer: "Wide Area Network.",
        shuffle: true,
      },
      {
        question: "are considered the components of a distributed system.",
        type: "multiple",
        options: ["Hardware.", "Software.", "Network.", "All of them."],
        correctAnswer: "All of them.",
        shuffle: true,
      },
      {
        question:
          "is a collection of independent computers that appear to the users of the system as a single computer",
        type: "multiple",
        options: [
          "Networking.",
          "Computer network",
          "Distributed system.",
          "None of them.",
        ],
        correctAnswer: "Distributed system.",
        shuffle: true,
      },
      {
        question:
          "Which type of network supports transmitting voice, video, and data?",
        type: "multiple",
        options: ["LAN.", "MAN.", "WAN.", "All of the above."],
        correctAnswer: "All of the above.",
        shuffle: true,
      },
      {
        question: "If one site fails in the distributed system then",
        type: "multiple",
        options: [
          "The remaining sites can continue operating.",
          "All the sites will stop working.",
          "Directly connected sites will stop working.",
          "None of the mentioned.",
        ],
        correctAnswer: "The remaining sites can continue operating.",
        shuffle: true,
      },
      {
        question:
          "Which of the following are the Advantages of Distributed Systems?",
        type: "multiple",
        options: [
          "Decremental growth.",
          "Economic.",
          "Low speed.",
          "All of the above.",
        ],
        correctAnswer: "Economic.",
        shuffle: true,
      },
      {
        question: "Distributed Systems Challenges and Problems are",
        type: "multiple",
        options: [
          "Parallelism converting.",
          "No. of processors.",
          "The bandwidth of interconnection.",
          "All of the above.",
        ],
        correctAnswer: "All of the above.",
        shuffle: true,
      },
      {
        question:
          "An important consideration is to ensure that each node performs the amount of work.",
        type: "multiple",
        options: [
          "The same.",
          "Difference.",
          "Both a & b.",
          "None of the above.",
        ],
        correctAnswer: "The same.",
        shuffle: true,
      },
      {
        question: "According to Amdahl's law, speed up rule",
        type: "multiple",
        options: ["(S+P)/(S+P/N).", "(S+P/N)/(S+P).", "P/(S+P/N)", "S/(S+P/N)"],
        correctAnswer: "(S+P)/(S+P/N).",
        shuffle: true,
      },
      {
        question:
          "is the relative amount of work done between synchronization-communication.",
        type: "multiple",
        options: ["Speed up.", "Grain Size.", "Performance.", "Efficiency."],
        correctAnswer: "Grain Size.",
        shuffle: true,
      },
      {
        question:
          "According to Flynn's taxonomy multiprocessors are classified into main types.",
        type: "multiple",
        options: ["2.", "3.", "5.", "6."],
        correctAnswer: "2.",
        shuffle: true,
      },
      {
        question:
          "is considered a measure of the quality of parallel algorithms.",
        type: "multiple",
        options: ["Speed up.", "Efficiency.", "Both of them.", "None of them."],
        correctAnswer: "Both of them.",
        shuffle: true,
      },
      {
        question: "Flynn classified computer systems into classes.",
        type: "multiple",
        options: ["2.", "3.", "4.", "5."],
        correctAnswer: "4.",
        shuffle: true,
      },
      {
        question: "NVIDIA is considered as",
        type: "multiple",
        options: ["SIMD.", "SISD.", "MISD.", "MIMD."],
        correctAnswer: "SIMD.",
        shuffle: true,
      },
      {
        question:
          "The intermachine message delay in loosely coupled systems is",
        type: "multiple",
        options: ["Slow.", "Large.", "Both of them.", "None of them."],
        correctAnswer: "Large.",
        shuffle: true,
      },
      {
        question: "Distributed Systems are needed for",
        type: "multiple",
        options: [
          "Information exchange (collaborative work).",
          "Hardware resource sharing.",
          "Software resource sharing.",
          "All of the above.",
        ],
        correctAnswer: "All of the above.",
        shuffle: true,
      },
      {
        question: "Rapid Elasticity feature exists in",
        type: "multiple",
        options: ["Cluster.", "Grid.", "Cloud.", "All of them."],
        correctAnswer: "Cloud.",
        shuffle: true,
      },
      {
        question: "Communication is done in tightly coupled systems using",
        type: "multiple",
        options: ["Shared memory.", "Bus.", "Both of them.", "None of them."],
        correctAnswer: "Both of them.",
        shuffle: true,
      },
      {
        question: "According to Amdahl's law, speed up rule",
        type: "multiple",
        options: ["(S+P)/(S+P/N)", "(S+P/N)/(S+P).", "Tseq/Tpar.", "a & c."],
        correctAnswer: "a & c.",
        shuffle: true,
      },
      {
        question:
          "There are factors that limit speed up in parallel processing.",
        type: "multiple",
        options: ["2.", "3.", "4.", "5."],
        correctAnswer: "3.",
        shuffle: true,
      },
      {
        question:
          "Omega network cross point switches by adding more switching stages.",
        type: "multiple",
        options: ["Increase.", "Reduces.", "Doubles.", "Equals."],
        correctAnswer: "Reduces.",
        shuffle: true,
      },
      {
        question: "Clusters classified as",
        type: "multiple",
        options: [
          "Distributed Computing Systems.",
          "Distributed Information Systems.",
          "Distributed Pervavise Systems.",
          "Distributed International Systems.",
        ],
        correctAnswer: "Distributed Computing Systems.",
        shuffle: true,
      },
      {
        question:
          "is the relative amount of work done between synchronization- communication.",
        type: "multiple",
        options: ["Speed up.", "Grain size.", "Performance.", "Efficiency."],
        correctAnswer: "Grain size.",
        shuffle: true,
      },
      {
        question: "Traffic with the number of CPUs.",
        type: "multiple",
        options: ["Decrease.", "Increase.", "No change.", "A and B."],
        correctAnswer: "Increase.",
        shuffle: true,
      },
      {
        question: "How many types of multiprocessors?",
        type: "multiple",
        options: ["2.", "3.", "4.", "5."],
        correctAnswer: "2.",
        shuffle: true,
      },
      {
        question:
          "A collection of lines that connects several devices is called",
        type: "multiple",
        options: [
          "Bus.",
          "Peripheral connection wires.",
          "Both a and b.",
          "Internal wires.",
        ],
        correctAnswer: "Bus.",
        shuffle: true,
      },
      {
        question:
          "Motherboard into which CPU and memory cards is an example for",
        type: "multiple",
        options: [
          "Switched multi computers.",
          "Switched multiprocessors.",
          "Bus multi computers.",
          "Bus multiprocessors.",
        ],
        correctAnswer: "Bus multiprocessors.",
        shuffle: true,
      },
      {
        question: "_ is an efficient method of cache updating.",
        type: "multiple",
        options: [
          "Snoopy writes.",
          "Write through.",
          "Write within.",
          "Buffered write.",
        ],
        correctAnswer: "Snoopy writes.",
        shuffle: true,
      },
      {
        question:
          "is considered a design issue for Client-Server communication.",
        type: "multiple",
        options: [
          "Addressing.",
          "Blocking.",
          "Reliability.",
          "All of the above.",
        ],
        correctAnswer: "All of the above.",
        shuffle: true,
      },
      {
        question:
          "There are different classes of failure that occur in the RPC system.",
        type: "multiple",
        options: ["2.", "3.", "4.", "5."],
        correctAnswer: "5.",
        shuffle: true,
      },
      {
        question:
          "There are solutions for killing orphans in client crash problems.",
        type: "multiple",
        options: ["2.", "3.", "4.", "5."],
        correctAnswer: "4.",
        shuffle: true,
      },
      {
        question: "Client/Server is",
        type: "multiple",
        options: [
          "Service model.",
          "File sharing.",
          "A & B.",
          "None of the above.",
        ],
        correctAnswer: "Service model.",
        shuffle: true,
      },
      {
        question: "The client-server model consists of layers.",
        type: "multiple",
        options: ["2.", "3.", "4.", "7."],
        correctAnswer: "3.",
        shuffle: true,
      },
      {
        question:
          "A network that consists of both LANs and MANs is called a Wide area network.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "Distributed System is software that ensures that a collection of independent computers appears as a single coherent system.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "Low speed is considered one of the advantages of distributed systems.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "Multiple LANs can be connected to form a single MAN (Metropolitan Area Network).",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "Microprocessors make it cheap to add computing power.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "One of the goals of the parallel algorithm is to make grain size as small as possible.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "Tingly coupled systems use buses.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "Traffic increases as the number of CPUs increases.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "Shared memory bus-based SMP is tightly coupled.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "Efficiency is considered a measure of the quality of parallel algorithms.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "Flynn classified computer systems into 4 classes.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "Nividia is considered as SISD.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "Multiprocessors have shared memory.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "Tightly Coupled using buses.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "Coherent Memory is a disadvantage of bus-based multiprocessors",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "The single most important difference between a distributed system and a uniprocessor system is inter-process communication.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "The data rate is higher in tightly coupled systems than in loosely coupled systems.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "A TP is responsible for coordinating the execution of a transaction.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "Encouraging Adhoc composition is considered the only requirement needed in designing Pervasive System.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "Bus-based architecture doesn't scale to a large number of CPUs.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "A truly distributed system puts tightly-coupled software upon loosely coupled.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "TA is a packet from Server to Client.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "Middleware doesn't hide the heterogeneity of hardware in distributed systems.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question: "REQ is a packet from server to client.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "RPC is considered a communication module used when Clients access the Server to manipulate information.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "There are 4 different solutions for killing the orphan in a client crash problem with RPC.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "Server stubs convert parameters used in function calls and reconvert the result obtained from the server after function execution.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "If sending is non-blocking, it returns control to the caller after sending the message.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "Architectural models are classified into 3 models.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "Client/Server is a Service model.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question: "There are three different forms of RPC call semantics.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        question:
          "2 different addressing methods can be done in the Client-Server model.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "Blocking Send Primitive is sometimes called Asynchronous primitive.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "Killing the orphan is the most suitable solution to the Client crash problem with RPC.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        question:
          "One of the solutions to the drawbacks of non-blocking primitive is to interrupt the sender when the message has been sent.",
        type: "true_false",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
    ],
  },
  {
    id: "marketing-comprehensive-quiz",
    title: "Marketing Quiz",
    isSubjectGroup: true,
    chapters: [
      {
        id: "marketing-qbank",
        title: "Marketing Qbank",
        shuffleQuestions: false,
        showScore: true,
        quizModeTimer: 7200,
        questions: [
          {
            question:
              "Technical superiority of a product can best be described as:",
            type: "multiple",
            options: [
              "The sole factor determining success",
              "A sufficient condition for market leadership",
              "Often a necessary but insufficient condition",
              "Unrelated to customer acceptance",
            ],
            correctAnswer: "Often a necessary but insufficient condition",
            shuffle: true,
          },
          {
            question:
              "Which of the following best explains why advanced products may fail in the market?",
            type: "multiple",
            options: [
              "Customers avoid innovation",
              "Technical complexity always increases costs",
              "Market success requires more than technical excellence",
              "Engineering limits creativity",
            ],
            correctAnswer:
              "Market success requires more than technical excellence",
            shuffle: true,
          },
          {
            question:
              "A product designed with extreme focus on performance but little attention to customer needs is most likely to:",
            type: "multiple",
            options: [
              "Dominate its market",
              "Create sustainable demand",
              "Face adoption challenges",
              "Eliminate competitors",
            ],
            correctAnswer: "Face adoption challenges",
            shuffle: true,
          },
          {
            question:
              "In product development, technical superiority is often considered:",
            type: "multiple",
            options: [
              "An optional feature",
              "A replacement for marketing",
              "The price of entry into competition",
              "The final stage of commercialization",
            ],
            correctAnswer: "The price of entry into competition",
            shuffle: true,
          },
          {
            question:
              "Which statement best reflects a common misconception in product innovation?",
            type: "multiple",
            options: [
              "Customers value reliability",
              "Marketing guides product design",
              "Superior technology guarantees success",
              "Customer problems drive demand",
            ],
            correctAnswer: "Superior technology guarantees success",
            shuffle: true,
          },
          {
            question:
              "A key reason some technologically advanced products fail is that they:",
            type: "multiple",
            options: [
              "Enter the market too early",
              "Solve problems customers do not perceive as important",
              "Lack sufficient engineering innovation",
              "Are priced lower than competitors",
            ],
            correctAnswer:
              "Solve problems customers do not perceive as important",
            shuffle: true,
          },
          {
            question:
              "Successful products typically achieve market acceptance because they:",
            type: "multiple",
            options: [
              "Introduce the newest technology available",
              "Are developed by market leaders",
              "Address a clear and widespread customer pain point",
              "Focus on aesthetics rather than function",
            ],
            correctAnswer: "Address a clear and widespread customer pain point",
            shuffle: true,
          },
          {
            question:
              "A product that creates new problems such as privacy concerns or social discomfort is most likely to:",
            type: "multiple",
            options: [
              "Gain rapid adoption",
              "Achieve long-term loyalty",
              "Reduce perceived customer value",
              "Increase perceived benefits",
            ],
            correctAnswer: "Reduce perceived customer value",
            shuffle: true,
          },
          {
            question:
              "Which of the following best describes the role of technology in successful products?",
            type: "multiple",
            options: [
              "Technology should lead market demand",
              "Technology should replace customer research",
              "Technology should exist independently of customer needs",
              "Technology should support a well-defined market need",
            ],
            correctAnswer:
              "Technology should support a well-defined market need",
            shuffle: true,
          },
          {
            question:
              "A product does not need to be the first in the market to succeed if it:",
            type: "multiple",
            options: [
              "Is significantly cheaper than alternatives",
              "Perfectively addresses an existing customer frustration",
              "Uses cutting-edge components",
              "Targets a niche audience only",
            ],
            correctAnswer:
              "Perfectively addresses an existing customer frustration",
            shuffle: true,
          },
          {
            question:
              "Which of the following best represents a common misconception about marketing?",
            type: "multiple",
            options: [
              "Marketing involves understanding customer problems",
              "Marketing includes value communication",
              "Marketing is the same as advertising",
              "Marketing supports long-term strategy",
            ],
            correctAnswer: "Marketing is the same as advertising",
            shuffle: true,
          },
          {
            question:
              "Describing marketing as a 'non-technical' or 'soft skill' often leads to:",
            type: "multiple",
            options: [
              "Better collaboration with engineers",
              "Stronger product performance",
              "Underestimating its strategic importance",
              "Improved customer satisfaction",
            ],
            correctAnswer: "Underestimating its strategic importance",
            shuffle: true,
          },
          {
            question:
              "A narrow definition of marketing can negatively affect an organization by:",
            type: "multiple",
            options: [
              "Increasing customer engagement",
              "Limiting innovation and market fit",
              "Reducing operational efficiency",
              "Improving technical focus",
            ],
            correctAnswer: "Limiting innovation and market fit",
            shuffle: true,
          },
          {
            question:
              "Marketing can best be defined as a structured system for:",
            type: "multiple",
            options: [
              "Promoting products through media",
              "Increasing sales volume only",
              "Understanding customer problems and designing solutions",
              "Managing production efficiency",
            ],
            correctAnswer:
              "Understanding customer problems and designing solutions",
            shuffle: true,
          },
          {
            question:
              "Identifying who to build a product for primarily relates to:",
            type: "multiple",
            options: [
              "Distribution strategy",
              "Market segmentation",
              "Pricing tactics",
              "Promotional channels",
            ],
            correctAnswer: "Market segmentation",
            shuffle: true,
          },
          {
            question:
              "Communicating value in a measurable way helps organizations to:",
            type: "multiple",
            options: [
              "Eliminate customer feedback",
              "Reduce product quality",
              "Assess the effectiveness of marketing efforts",
              "Avoid market research",
            ],
            correctAnswer: "Assess the effectiveness of marketing efforts",
            shuffle: true,
          },
          {
            question: "Marketing is best described as:",
            type: "multiple",
            options: [
              "The art of selling what is already produced",
              "The science of knowing what to make in the first place",
              "A method for increasing sales volume",
              "A promotional activity",
            ],
            correctAnswer:
              "The science of knowing what to make in the first place",
            shuffle: true,
          },
          {
            question:
              "Which statement correctly reflects the role of marketing?",
            type: "multiple",
            options: [
              "Marketing replaces technical innovation",
              "Marketing focuses only on communication",
              "Marketing acts as a bridge between technical brilliance and commercial success",
              "Marketing is unrelated to engineering outcomes",
            ],
            correctAnswer:
              "Marketing acts as a bridge between technical brilliance and commercial success",
            shuffle: true,
          },
          {
            question:
              "Marketing involves understanding customer needs and then:",
            type: "multiple",
            options: [
              "Selling products aggressively",
              "Reducing production costs",
              "Designing, communicating, and delivering value",
              "Eliminating competition",
            ],
            correctAnswer: "Designing, communicating, and delivering value",
            shuffle: true,
          },
          {
            question: "The primary goal of marketing exchanges is to satisfy:",
            type: "multiple",
            options: [
              "Only organizational objectives",
              "Only individual objectives",
              "Technical requirements",
              "Individual and organizational objectives",
            ],
            correctAnswer: "Individual and organizational objectives",
            shuffle: true,
          },
          {
            question:
              "Which activity is explicitly included in the marketing process?",
            type: "multiple",
            options: [
              "Manufacturing optimization",
              "Value creation and delivery",
              "Employee training",
              "Financial auditing",
            ],
            correctAnswer: "Value creation and delivery",
            shuffle: true,
          },
          {
            question: "Needs are best described as:",
            type: "multiple",
            options: [
              "Products people desire",
              "Basic human requirements",
              "Wants supported by purchasing power",
              "Marketing-created motivations",
            ],
            correctAnswer: "Basic human requirements",
            shuffle: true,
          },
          {
            question: "Wants can be defined as:",
            type: "multiple",
            options: [
              "Artificial demands created by marketers",
              "Needs shaped by culture and individual preferences",
              "Basic survival requirements",
              "Financial ability to purchase products",
            ],
            correctAnswer: "Needs shaped by culture and individual preferences",
            shuffle: true,
          },
          {
            question: "When buying power is present, wants become:",
            type: "multiple",
            options: ["Needs", "Values", "Demands", "Benefits"],
            correctAnswer: "Demands",
            shuffle: true,
          },
          {
            question:
              "Which of the following statements about needs is correct?",
            type: "multiple",
            options: [
              "Needs are created by marketing activities",
              "Needs vary significantly across individuals",
              "Needs are a basic part of human nature",
              "Needs depend on purchasing power",
            ],
            correctAnswer: "Needs are a basic part of human nature",
            shuffle: true,
          },
          {
            question: "Customer value is defined as:",
            type: "multiple",
            options: [
              "Costs divided by benefits",
              "Benefits multiplied by costs",
              "Benefits minus costs",
              "Benefits divided by costs",
            ],
            correctAnswer: "Benefits minus costs",
            shuffle: true,
          },
          {
            question:
              "Market success depends entirely on having the most advanced technology available.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Technical excellence alone is rarely sufficient to ensure commercial success.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Overemphasizing technology while neglecting customer needs can increase the risk of failure.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Understanding market problems is less important than achieving technical breakthroughs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Technical superiority can be considered a basic requirement to compete in many markets.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Products that solve problems customers do not recognize are likely to struggle in the market.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Introducing advanced technology always increases perceived customer value.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Understanding customer pain points can be more important than being first to market.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Creating new problems for users can reduce the overall success of a product.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Market success depends only on how advanced the underlying technology is.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Marketing is often mistakenly equated only with advertising activities.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Selling and marketing are identical concepts.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Considering marketing as a 'soft skill' may cause its strategic role to be underestimated.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Marketing has no influence on product design or development decisions.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Marketing plays a role beyond promotion and sales activities.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Marketing focuses only on promoting products after they are developed.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Understanding customer problems is a core component of marketing.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Delivering value includes both efficiency and long-term sustainability.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Marketing decisions help answer questions such as what to build, for whom, and how to deliver it.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Marketing helps determine what products should be developed.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Marketing is mainly concerned with selling products after they are made.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Marketing connects technical excellence with commercial outcomes.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Designing, communicating, and delivering value are part of the marketing process.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Marketing aims to create exchanges that satisfy both individual and organizational objectives.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Needs are created by marketers to stimulate demand.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Wants are influenced by culture, technology, and individual preferences.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Demands exist even when purchasing power is absent.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Value is determined by comparing benefits to costs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Needs, wants, and demands represent the same concept in marketing.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Marketers don't create needs; they are a basic part of who we are as humans",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "The marketing process focuses on creating and capturing customer",
            type: "multiple",
            options: ["Cost", "Value", "Advertising", "Competition"],
            correctAnswer: "Value",
            shuffle: true,
          },
          {
            question: "The first step in the marketing process is to",
            type: "multiple",
            options: [
              "Engage customers",
              "Capture value from customers",
              "Understand the marketplace",
              "Construct a marketing mix",
            ],
            correctAnswer: "Understand the marketplace",
            shuffle: true,
          },
          {
            question:
              "Designing a marketing strategy comes ________ understanding the marketplace.",
            type: "multiple",
            options: ["Before", "After", "Instead of", "Without"],
            correctAnswer: "After",
            shuffle: true,
          },
          {
            question:
              "Constructing an integrated marketing mix happens ________ designing the marketing strategy.",
            type: "multiple",
            options: ["Before", "After", "During", "Instead of"],
            correctAnswer: "After",
            shuffle: true,
          },
          {
            question:
              "The first step in understanding the marketplace includes",
            type: "multiple",
            options: [
              "Marketing mix",
              "Customer loyalty",
              "Needs, wants, and demands",
              "Promotion strategies",
            ],
            correctAnswer: "Needs, wants, and demands",
            shuffle: true,
          },
          {
            question:
              "Which of the following is listed as part of understanding the marketplace?",
            type: "multiple",
            options: [
              "Market segmentation",
              "Exchanges and relationships",
              "Advertising media",
              "Pricing strategies",
            ],
            correctAnswer: "Exchanges and relationships",
            shuffle: true,
          },
          {
            question: "Value and satisfaction are part of",
            type: "multiple",
            options: [
              "Marketing mix",
              "Designing strategy",
              "Understanding the marketplace",
              "Customer equity",
            ],
            correctAnswer: "Understanding the marketplace",
            shuffle: true,
          },
          {
            question: "Markets are included under",
            type: "multiple",
            options: [
              "Capturing value",
              "Constructing marketing mix",
              "Understanding the marketplace",
              "Promotion",
            ],
            correctAnswer: "Understanding the marketplace",
            shuffle: true,
          },
          {
            question:
              "Market offerings include products, services, solutions, and",
            type: "multiple",
            options: ["Profits", "Experiences", "Competitors", "Discounts"],
            correctAnswer: "Experiences",
            shuffle: true,
          },
          {
            question:
              "If sellers focus only on their products and forget the consumer problem, this leads to",
            type: "multiple",
            options: [
              "Market segmentation",
              "Customer satisfaction",
              "Marketing myopia",
              "Value creation",
            ],
            correctAnswer: "Marketing myopia",
            shuffle: true,
          },
          {
            question: "Marketing myopia occurs when sellers focus on",
            type: "multiple",
            options: [
              "Customer needs",
              "Competitors",
              "Specific products",
              "Relationships",
            ],
            correctAnswer: "Specific products",
            shuffle: true,
          },
          {
            question: "A product is described as a tool to solve a consumer",
            type: "multiple",
            options: ["Promotion", "Problem", "Advertisement", "Market"],
            correctAnswer: "Problem",
            shuffle: true,
          },
          {
            question: "Dissatisfied customers often switch to",
            type: "multiple",
            options: ["Suppliers", "Competitors", "Intermediaries", "Partners"],
            correctAnswer: "Competitors",
            shuffle: true,
          },
          {
            question:
              "Dissatisfied customers may ________ the product to others.",
            type: "multiple",
            options: ["Recommend", "Promote", "Disparage", "Redesign"],
            correctAnswer: "Disparage",
            shuffle: true,
          },
          {
            question: "Satisfied customers are likely to ________ again.",
            type: "multiple",
            options: ["Complain", "Switch", "Buy", "Ignore"],
            correctAnswer: "Buy",
            shuffle: true,
          },
          {
            question:
              "Satisfied customers tell others about their ________ experiences.",
            type: "multiple",
            options: ["Bad", "Good", "Expensive", "Difficult"],
            correctAnswer: "Good",
            shuffle: true,
          },
          {
            question: "Which type of customers often switch to competitors?",
            type: "multiple",
            options: [
              "Loyal customers",
              "Satisfied customers",
              "Dissatisfied customers",
              "Potential buyers",
            ],
            correctAnswer: "Dissatisfied customers",
            shuffle: true,
          },
          {
            question: "Marketers must be careful to set the right level of",
            type: "multiple",
            options: ["Prices", "Expectations", "Distribution", "Promotion"],
            correctAnswer: "Expectations",
            shuffle: true,
          },
          {
            question:
              "If expectations are too low, the company may fail to ________ enough buyers.",
            type: "multiple",
            options: ["Train", "Attract", "Segment", "Reward"],
            correctAnswer: "Attract",
            shuffle: true,
          },
          {
            question: "If expectations are too high, buyers will be",
            type: "multiple",
            options: ["Loyal", "Satisfied", "Disappointed", "Engaged"],
            correctAnswer: "Disappointed",
            shuffle: true,
          },
          {
            question:
              "Customer value and customer satisfaction are key building blocks for developing and managing",
            type: "multiple",
            options: [
              "Market share",
              "Customer relationships",
              "Pricing strategies",
              "Advertising campaigns",
            ],
            correctAnswer: "Customer relationships",
            shuffle: true,
          },
          {
            question: "Exchange requires ________ parties.",
            type: "multiple",
            options: ["Three", "Two", "Four", "Many"],
            correctAnswer: "Two",
            shuffle: true,
          },
          {
            question: "One key aspect of exchange is",
            type: "multiple",
            options: [
              "Competition",
              "Segmentation",
              "Mutual Benefit",
              "Pricing",
            ],
            correctAnswer: "Mutual Benefit",
            shuffle: true,
          },
          {
            question:
              "Marketers aim to establish ________ relationships with customers.",
            type: "multiple",
            options: ["Short-term", "Temporary", "Long-term", "Seasonal"],
            correctAnswer: "Long-term",
            shuffle: true,
          },
          {
            question: "The integrated marketing mix is commonly known as the",
            type: "multiple",
            options: ["3 C's", "4 P's", "5 M's", "7 S's"],
            correctAnswer: "4 P's",
            shuffle: true,
          },
          {
            question:
              "Functionality, quality, appearance, packaging, support, and warranty are elements of",
            type: "multiple",
            options: ["Promotion", "Price", "Product", "Place"],
            correctAnswer: "Product",
            shuffle: true,
          },
          {
            question:
              "List price, discounts, financing, and leasing options belong to",
            type: "multiple",
            options: ["Product", "Promotion", "Place", "Price"],
            correctAnswer: "Price",
            shuffle: true,
          },
          {
            question:
              "Advertising, public relations, direct sales, and media are part of",
            type: "multiple",
            options: ["Promotion", "Product", "Logistics", "Warranty"],
            correctAnswer: "Promotion",
            shuffle: true,
          },
          {
            question:
              "Locations, logistics, market coverage, service levels, and internet relate to ______.",
            type: "multiple",
            options: ["Promotion", "Price", "Place (distribution)", "Product"],
            correctAnswer: "Place (distribution)",
            shuffle: true,
          },
          {
            question: "Customer Relationship Management (CRM) involves ______.",
            type: "multiple",
            options: [
              "Production planning",
              "Customer care",
              "Warehousing",
              "Manufacturing",
            ],
            correctAnswer: "Customer care",
            shuffle: true,
          },
          {
            question:
              "Customer Relationship Management (CRM) includes customer loyalty ______ programs.",
            type: "multiple",
            options: ["Advertising", "Pricing", "Rewards", "Distribution"],
            correctAnswer: "Rewards",
            shuffle: true,
          },
          {
            question:
              "Customer engagement means making the brand a meaningful part of customers' ______.",
            type: "multiple",
            options: [
              "Income",
              "Conversations and lives",
              "Expenses",
              "Complaints",
            ],
            correctAnswer: "Conversations and lives",
            shuffle: true,
          },
          {
            question:
              "Today's digital technologies allow direct and continuous customer involvement via ______.",
            type: "multiple",
            options: [
              "Factories",
              "Printed catalogs",
              "Websites and social media",
              "Warehouses",
            ],
            correctAnswer: "Websites and social media",
            shuffle: true,
          },
          {
            question:
              "Partner relationship management involves working with others ______ the company.",
            type: "multiple",
            options: [
              "Inside and outside",
              "Only inside",
              "Only outside",
              "Instead of",
            ],
            correctAnswer: "Inside and outside",
            shuffle: true,
          },
          {
            question: "True friends are customers who are ______.",
            type: "multiple",
            options: [
              "Loyal but not profitable",
              "Profitable and loyal",
              "Not loyal but profitable",
              "Neither profitable nor loyal",
            ],
            correctAnswer: "Profitable and loyal",
            shuffle: true,
          },
          {
            question: "Butterflies are customers who are ______.",
            type: "multiple",
            options: [
              "Highly loyal and profitable",
              "Not profitable and not loyal",
              "Potentially profitable but not loyal",
              "Loyal but not profitable",
            ],
            correctAnswer: "Potentially profitable but not loyal",
            shuffle: true,
          },
          {
            question: "Barnacles are customers who are ______.",
            type: "multiple",
            options: [
              "Highly loyal but not very profitable",
              "Highly profitable and loyal",
              "Not loyal but profitable",
              "Not profitable and not loyal",
            ],
            correctAnswer: "Highly loyal but not very profitable",
            shuffle: true,
          },
          {
            question: "Strangers are customers who are ______.",
            type: "multiple",
            options: [
              "High loyalty and high profitability",
              "Low profitability and little loyalty",
              "High loyalty and low profitability",
              "High profitability and little loyalty",
            ],
            correctAnswer: "Low profitability and little loyalty",
            shuffle: true,
          },
          {
            question:
              "Capturing value from customers aims to create profits and customer ______.",
            type: "multiple",
            options: ["Promotion", "Distribution", "Equity", "Advertising"],
            correctAnswer: "Equity",
            shuffle: true,
          },
          {
            question:
              "The marketing process includes building customer relationships.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Capturing value from customers creates customer equity and profits.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "The marketing process starts with constructing the marketing mix.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Needs, wants, and demands are part of understanding the marketplace.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Markets are part of understanding the marketplace.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Value and satisfaction are not related to understanding the marketplace.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Market offerings include experiences.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Marketing myopia focuses on identifying broader customer needs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Sellers should remember that a product solves a consumer problem.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Theodore Levitt stated that people want to buy a quarter-inch drill.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Marketing myopia ignores the broader needs and wants of customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Dissatisfied customers may speak negatively about the product.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Satisfied customers usually stop buying the product.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Satisfied customers tell others about their good experiences.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Dissatisfied customers always remain loyal.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Value and satisfaction influence customer behavior.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Customer value is not important in managing customer relationships.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Too low expectations may attract many buyers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Customer satisfaction is a key building block for developing relationships.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Exchange requires two parties, each with something the other wants.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Desire to trade is one of the key aspects of exchange.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Customer loyalty is part of long-term relationship building.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Exchange can occur without agreement between parties.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "The marketing mix consists of Product, Price, Promotion, and Place.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Warranty is part of the Price element in 4 P's strategy.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Logistics is related to product in 4 P's strategy.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Public relations is part of Product in 4 P's strategy.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Customer Relationship Management (CRM) includes maintaining a customer database.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Customer-generated marketing is created only by the company.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Digital media allows continuous customer involvement.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Customer engagement means reducing interaction with customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Partner relationship management focuses on bringing more value to customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Marketing management primarily facilitates:",
            type: "multiple",
            options: [
              "Product manufacturing",
              "Distribution of goods and services",
              "Financial auditing",
              "HR planning",
            ],
            correctAnswer: "Distribution of goods and services",
            shuffle: true,
          },
          {
            question: "Marketing management relies on:",
            type: "multiple",
            options: [
              "Financial strategies",
              "Marketing concepts",
              "Production systems",
              "Supply chains",
            ],
            correctAnswer: "Marketing concepts",
            shuffle: true,
          },
          {
            question: "According to Kotler, marketing management includes:",
            type: "multiple",
            options: [
              "Production and logistics",
              "Analysis, planning, implementation, and control",
              "Only selling",
              "Pricing decisions only",
            ],
            correctAnswer: "Analysis, planning, implementation, and control",
            shuffle: true,
          },
          {
            question: "Marketing concepts are mainly about:",
            type: "multiple",
            options: [
              "Reducing costs",
              "Identifying and fulfilling customer needs",
              "Increasing production",
              "Advertising only",
            ],
            correctAnswer: "Identifying and fulfilling customer needs",
            shuffle: true,
          },
          {
            question: "Which is NOT listed as a marketing philosophy?",
            type: "multiple",
            options: ["Production", "Selling", "Financial", "Societal"],
            correctAnswer: "Financial",
            shuffle: true,
          },
          {
            question: "The production concept assumes:",
            type: "multiple",
            options: [
              "Customers prefer luxury",
              "Customers prefer affordable and available products",
              "Customers prefer innovation",
              "Customers prefer brands",
            ],
            correctAnswer: "Customers prefer affordable and available products",
            shuffle: true,
          },
          {
            question: "The production concept focuses on:",
            type: "multiple",
            options: [
              "Customer satisfaction",
              "High production efficiency",
              "Product design",
              "Advertising",
            ],
            correctAnswer: "High production efficiency",
            shuffle: true,
          },
          {
            question: "Which is NOT a focus of production concept?",
            type: "multiple",
            options: [
              "Low cost",
              "Mass distribution",
              "Customer relationship",
              "Efficiency",
            ],
            correctAnswer: "Customer relationship",
            shuffle: true,
          },
          {
            question: "Production concept works best in countries where:",
            type: "multiple",
            options: [
              "Labor is expensive",
              "Labor is cheap and available",
              "Demand is low",
              "Competition is high",
            ],
            correctAnswer: "Labor is cheap and available",
            shuffle: true,
          },
          {
            question: "Outsourcing production helps:",
            type: "multiple",
            options: [
              "Increase advertising",
              "Reduce production cost",
              "Improve branding",
              "Increase price",
            ],
            correctAnswer: "Reduce production cost",
            shuffle: true,
          },
          {
            question: "A key risk of production concept is:",
            type: "multiple",
            options: [
              "High cost",
              "Losing sight of real objective",
              "Low output",
              "Weak distribution",
            ],
            correctAnswer: "Losing sight of real objective",
            shuffle: true,
          },
          {
            question: "Which firms are likely to adopt production concept?",
            type: "multiple",
            options: [
              "Small startups",
              "Monopoly firms",
              "NGOs",
              "Service firms",
            ],
            correctAnswer: "Monopoly firms",
            shuffle: true,
          },
          {
            question:
              "Government bakeries are an example because they focus on:",
            type: "multiple",
            options: [
              "Quality",
              "Brand",
              "Large quantity at low cost",
              "Innovation",
            ],
            correctAnswer: "Large quantity at low cost",
            shuffle: true,
          },
          {
            question: "Product concept assumes customers prefer:",
            type: "multiple",
            options: [
              "Cheap products",
              "High-quality products",
              "Fast delivery",
              "Discounts",
            ],
            correctAnswer: "High-quality products",
            shuffle: true,
          },
          {
            question: "Product concept managers focus on:",
            type: "multiple",
            options: [
              "Advertising",
              "Improving product quality",
              "Price reduction",
              "Distribution",
            ],
            correctAnswer: "Improving product quality",
            shuffle: true,
          },
          {
            question: "Product concept ignores:",
            type: "multiple",
            options: [
              "Quality",
              "Customer needs sometimes",
              "Innovation",
              "Branding",
            ],
            correctAnswer: "Customer needs sometimes",
            shuffle: true,
          },
          {
            question: "Marketing myopia refers to:",
            type: "multiple",
            options: [
              "Focus on customers",
              "Focus on product instead of customer needs",
              "Focus on profits",
              "Focus on advertising",
            ],
            correctAnswer: "Focus on product instead of customer needs",
            shuffle: true,
          },
          {
            question: "Which is NOT a cause of marketing myopia?",
            type: "multiple",
            options: [
              "Product orientation",
              "Long-term focus",
              "Lack of customer understanding",
              "Complacency",
            ],
            correctAnswer: "Long-term focus",
            shuffle: true,
          },
          {
            question: "Short-term focus leads to:",
            type: "multiple",
            options: [
              "Customer loyalty",
              "Marketing myopia",
              "Innovation",
              "Cost reduction",
            ],
            correctAnswer: "Marketing myopia",
            shuffle: true,
          },
          {
            question: "Marketing orientation focuses on:",
            type: "multiple",
            options: ["Product", "Customer", "Cost", "Sales"],
            correctAnswer: "Customer",
            shuffle: true,
          },
          {
            question: "The correct goal is:",
            type: "multiple",
            options: [
              "Sell what we make",
              "Make what customers need",
              "Reduce costs",
              "Increase ads",
            ],
            correctAnswer: "Make what customers need",
            shuffle: true,
          },
          {
            question: "Avoiding marketing myopia requires:",
            type: "multiple",
            options: [
              "Product focus",
              "Customer needs focus",
              "Cost reduction",
              "Mass production",
            ],
            correctAnswer: "Customer needs focus",
            shuffle: true,
          },
          {
            question: "Innovation should happen:",
            type: "multiple",
            options: [
              "After competitors",
              "Before competitors",
              "Only when needed",
              "Rarely",
            ],
            correctAnswer: "Before competitors",
            shuffle: true,
          },
          {
            question: "Selling concept assumes:",
            type: "multiple",
            options: [
              "Customers buy automatically",
              "Customers need persuasion",
              "Customers prefer quality",
              "Customers prefer value",
            ],
            correctAnswer: "Customers need persuasion",
            shuffle: true,
          },
          {
            question: "Selling concept focuses on:",
            type: "multiple",
            options: [
              "Customer needs",
              "Making every possible sale",
              "Innovation",
              "Value creation",
            ],
            correctAnswer: "Making every possible sale",
            shuffle: true,
          },
          {
            question: "Selling concept is:",
            type: "multiple",
            options: [
              "Customer-oriented",
              "Inside-out approach",
              "Market-driven",
              "Long-term",
            ],
            correctAnswer: "Inside-out approach",
            shuffle: true,
          },
          {
            question: "Marketing concept is:",
            type: "multiple",
            options: [
              "Inside-out",
              "Outside-in",
              "Cost-driven",
              "Production-driven",
            ],
            correctAnswer: "Outside-in",
            shuffle: true,
          },
          {
            question: "Marketing concept depends on:",
            type: "multiple",
            options: [
              "Production",
              "Knowing customer needs",
              "Selling effort",
              "Price strategy",
            ],
            correctAnswer: "Knowing customer needs",
            shuffle: true,
          },
          {
            question: "Societal marketing concept includes:",
            type: "multiple",
            options: [
              "Profit only",
              "Society welfare",
              "Cost reduction",
              "Distribution",
            ],
            correctAnswer: "Society welfare",
            shuffle: true,
          },
          {
            question: "Societal marketing balances:",
            type: "multiple",
            options: [
              "Cost and profit",
              "Customer, company, society",
              "Product and price",
              "Demand and supply",
            ],
            correctAnswer: "Customer, company, society",
            shuffle: true,
          },
          {
            question:
              "Marketing management focuses on distribution activities.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Marketing management ignores customer needs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Kotler defines marketing as only selling.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Production concept emphasizes affordability.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Production concept focuses on customer relationships.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "High efficiency is part of production concept.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Production concept works best with expensive labor.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Outsourcing reduces production cost.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Production concept may ignore customer needs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Monopoly firms may adopt production concept.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Product concept focuses on quality improvement.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Product concept prioritizes price over quality.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Product focus can lead to marketing myopia.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Marketing myopia focuses on customer needs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Product orientation is a cause of myopia.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Short-term focus avoids myopia.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Marketing orientation focuses on customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Selling concept is customer-oriented.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Marketing concept is outside-in.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Selling concept focuses on customer satisfaction.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Selling concept uses aggressive promotion.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Marketing concept starts with customer needs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Societal marketing ignores society welfare.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Societal concept includes social responsibility.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Environmental issues led to societal concept.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Marketing concept solves conflicts between society and customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Societal concept balances long-term welfare.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Selling concept focuses on making what customers want.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Marketing concept focuses on long-term relationships.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Societal marketing includes sustainability.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "A company aligns its internal strengths with external opportunities to achieve long-term success. This describes:",
            type: "multiple",
            options: [
              "Operational planning",
              "Strategic planning",
              "Tactical execution",
              "Financial control",
            ],
            correctAnswer: "Strategic planning",
            shuffle: true,
          },
          {
            question:
              "Which activity is performed at the corporate level of strategic planning?",
            type: "multiple",
            options: [
              "Advertising campaigns",
              "Pricing decisions",
              "Defining the company mission",
              "Sales promotions",
            ],
            correctAnswer: "Defining the company mission",
            shuffle: true,
          },
          {
            question:
              "A firm asks: 'Who is the customer?' This question is part of:",
            type: "multiple",
            options: [
              "Goal setting",
              "Portfolio analysis",
              "Mission development",
              "Budgeting",
            ],
            correctAnswer: "Mission development",
            shuffle: true,
          },
          {
            question:
              "A mission that focuses only on internal operations is considered:",
            type: "multiple",
            options: [
              "Well-defined",
              "Customer-oriented",
              "Narrow and incomplete",
              "Strategic",
            ],
            correctAnswer: "Narrow and incomplete",
            shuffle: true,
          },
          {
            question: "Which statement best represents an objective?",
            type: "multiple",
            options: [
              "Increase sales by 10% next year",
              "Improve customer satisfaction",
              "Launch product in 3 months",
              "Reach 100K followers",
            ],
            correctAnswer: "Increase sales by 10% next year",
            shuffle: true,
          },
          {
            question: "Which of the following is a properly defined goal?",
            type: "multiple",
            options: [
              "Improve brand image",
              "Increase awareness",
              "Grow Instagram followers to 75,000 by June 2026",
              "Expand business",
            ],
            correctAnswer: "Grow Instagram followers to 75,000 by June 2026",
            shuffle: true,
          },
          {
            question:
              "A goal that lacks measurability fails which SMART criterion?",
            type: "multiple",
            options: ["Specific", "Measurable", "Relevant", "Time-bound"],
            correctAnswer: "Measurable",
            shuffle: true,
          },
          {
            question:
              "A company sets a goal beyond its available resources. This violates:",
            type: "multiple",
            options: ["Specific", "Achievable", "Relevant", "Time-bound"],
            correctAnswer: "Achievable",
            shuffle: true,
          },
          {
            question:
              "A company increases its NPS significantly. This most likely indicates:",
            type: "multiple",
            options: [
              "Reduced costs",
              "Higher customer loyalty",
              "Increased production",
              "Lower competition",
            ],
            correctAnswer: "Higher customer loyalty",
            shuffle: true,
          },
          {
            question: "Which group negatively impacts NPS?",
            type: "multiple",
            options: ["Promoters", "Passives", "Detractors", "Stakeholders"],
            correctAnswer: "Detractors",
            shuffle: true,
          },
          {
            question:
              "A company manages multiple industries and product lines. This is known as:",
            type: "multiple",
            options: ["SBU", "Portfolio", "Market segmentation", "Positioning"],
            correctAnswer: "Portfolio",
            shuffle: true,
          },
          {
            question: "An SBU is best described as:",
            type: "multiple",
            options: [
              "A temporary project",
              "A customer segment",
              "A semi-independent division with its own strategy",
              "A financial unit",
            ],
            correctAnswer: "A semi-independent division with its own strategy",
            shuffle: true,
          },
          {
            question:
              "Which characteristic ensures that each SBU is accountable for performance?",
            type: "multiple",
            options: [
              "Shared objectives",
              "Centralized control",
              "Separate financial tracking",
              "Common competitors",
            ],
            correctAnswer: "Separate financial tracking",
            shuffle: true,
          },
          {
            question: "Portfolio analysis helps firms decide:",
            type: "multiple",
            options: [
              " Hiring policies",
              "Which businesses to invest in",
              "Daily operations",
              "Employee salaries",
            ],
            correctAnswer: "Which businesses to invest in",
            shuffle: true,
          },
          {
            question:
              "A product dominates a fast-growing market but requires continuous investment. It is:",
            type: "multiple",
            options: ["Dog", "Cash Cow", "Star", "Question Mark"],
            correctAnswer: "Star",
            shuffle: true,
          },
          {
            question:
              "A mature product generating steady revenue with minimal investment is:",
            type: "multiple",
            options: ["Star", "Cash Cow", "Dog", "Question Mark"],
            correctAnswer: "Cash Cow",
            shuffle: true,
          },
          {
            question:
              "A product in a high-growth market but with weak market share is:",
            type: "multiple",
            options: ["Star", "Dog", "Cash Cow", "Question Mark"],
            correctAnswer: "Question Mark",
            shuffle: true,
          },
          {
            question:
              "A product with low growth and weak position should typically be:",
            type: "multiple",
            options: [
              "Expanded",
              "Heavily invested in",
              "Divested",
              "Promoted",
            ],
            correctAnswer: "Divested",
            shuffle: true,
          },
          {
            question: "The Ansoff Matrix is primarily used to:",
            type: "multiple",
            options: [
              "Analyze costs",
              "Identify growth strategies",
              "Measure performance",
              "Manage HR",
            ],
            correctAnswer: "Identify growth strategies",
            shuffle: true,
          },
          {
            question: "Entering a new country with existing products is:",
            type: "multiple",
            options: [
              "Diversification",
              "Product Development",
              "Market Development",
              "Penetration",
            ],
            correctAnswer: "Market Development",
            shuffle: true,
          },
          {
            question: "Launch a new product for current customers reflects:",
            type: "multiple",
            options: [
              "Market Development",
              "Product Development",
              "Diversification",
              "Penetration",
            ],
            correctAnswer: "Product Development",
            shuffle: true,
          },
          {
            question: "Entering a completely new market with a new product is:",
            type: "multiple",
            options: [
              "Penetration",
              "Development",
              "Diversification",
              "Expansion",
            ],
            correctAnswer: "Diversification",
            shuffle: true,
          },
          {
            question: "Which strategy involves the lowest risk?",
            type: "multiple",
            options: [
              "Diversification",
              "Product Development",
              "Market Development",
              "Market Penetration",
            ],
            correctAnswer: "Market Penetration",
            shuffle: true,
          },
          {
            question:
              "A company increases sales through discounts and promotions. This is:",
            type: "multiple",
            options: [
              "Product Development",
              "Diversification",
              "Market Penetration",
              "Market Development",
            ],
            correctAnswer: "Market Penetration",
            shuffle: true,
          },
          {
            question:
              "Which strategy involves moderate risk due to unfamiliar markets?",
            type: "multiple",
            options: [
              "Penetration",
              "Market Development",
              "Diversification",
              "Cash Cow strategy",
            ],
            correctAnswer: "Market Development",
            shuffle: true,
          },
          {
            question: "Which strategy focuses on innovation and R&D?",
            type: "multiple",
            options: [
              "Penetration",
              "Market Development",
              "Product Development",
              "Diversification",
            ],
            correctAnswer: "Product Development",
            shuffle: true,
          },
          {
            question: "Using profits from one SBU to support another reflects:",
            type: "multiple",
            options: [
              "Portfolio analysis",
              "Market penetration",
              "Diversification",
              "Segmentation",
            ],
            correctAnswer: "Portfolio analysis",
            shuffle: true,
          },
          {
            question: "Which case reflects poor strategic planning?",
            type: "multiple",
            options: [
              "Goals derived from mission",
              "Objectives aligned with vision",
              "Goals unrelated to mission",
              "Portfolio analysis",
            ],
            correctAnswer: "Goals unrelated to mission",
            shuffle: true,
          },
          {
            question: "Which level develops marketing strategies?",
            type: "multiple",
            options: ["Corporate", "Financial", "Business/Product level", "HR"],
            correctAnswer: "Business/Product level",
            shuffle: true,
          },
          {
            question:
              "A company fails because it ignores market opportunities despite strong capabilities. This violates:",
            type: "multiple",
            options: [
              "SMART goals",
              "Portfolio analysis",
              "Strategic fit",
              "Diversification",
            ],
            correctAnswer: "Strategic fit",
            shuffle: true,
          },
          {
            question:
              "Strategic planning focuses only on internal capabilities.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Strategic planning seeks a fit between goals, capabilities, and opportunities.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Mission statement defines the organization's purpose.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Profit margin is a core mission question.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Objectives are broad and long-term.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Goals are vague and not measurable.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Goals should follow SMART criteria.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Specific means unclear and general.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Measurable goals allow tracking progress.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Achievable means impossible targets.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Relevant goals align with company mission.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Time-bound goals have no deadlines.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "NPS measures customer loyalty.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "NPS includes passives in calculation.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Business portfolio includes all company businesses and products.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "SBUs are fully independent companies.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "SBUs have distinct missions and objectives.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "All SBUs share the same competitors.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Portfolio analysis evaluates SBU performance and potential.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Stars have low growth and low market share.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Cash cows generate steady cash flow.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Question marks have high market share.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Dogs are candidates for divestiture.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Ansoff Matrix identifies growth strategies.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Market development uses new products.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Diversification involves new products and new markets.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Diversification is the least risky strategy.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Product development focuses on existing markets.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Market penetration involves entering new markets.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Market penetration focuses on increasing sales in current markets.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Which of the following best defines a business model in a company?",
            type: "multiple",
            options: [
              "A plan outlining how a company generates profit",
              "A marketing communication strategy",
              "A description of the organizational hierarchy",
              "A set of accounting procedures",
            ],
            correctAnswer: "A plan outlining how a company generates profit",
            shuffle: true,
          },
          {
            question:
              "What is the primary purpose of business model design within an organization?",
            type: "multiple",
            options: [
              "Managing employee salaries",
              "Determining legal ownership structure",
              "Providing a framework for strategic decisions and structure",
              "Controlling government regulations",
            ],
            correctAnswer:
              "Providing a framework for strategic decisions and structure",
            shuffle: true,
          },
          {
            question:
              "Which of the following is NOT considered a key importance of a business model?",
            type: "multiple",
            options: [
              "Creating value for customers",
              "Attracting potential investors",
              "Managing operational costs",
              "Eliminating market competition",
            ],
            correctAnswer: "Eliminating market competition",
            shuffle: true,
          },
          {
            question:
              "How does a business model contribute to maintaining competitiveness in a dynamic market?",
            type: "multiple",
            options: [
              "Reducing customer engagement",
              "Avoiding innovation",
              "Adapting to market changes",
              "Fixing prices permanently",
            ],
            correctAnswer: "Adapting to market changes",
            shuffle: true,
          },
          {
            question:
              "In the context of business models, scalability refers to:",
            type: "multiple",
            options: [
              "Hiring more employees only",
              "Reducing product quality",
              "Increasing operational complexity",
              "The ability to grow without proportional increases in cost",
            ],
            correctAnswer:
              "The ability to grow without proportional increases in cost",
            shuffle: true,
          },
          {
            question:
              "Which of the following elements is NOT included in the Business Model Canvas?",
            type: "multiple",
            options: [
              "Key Partners",
              "Government Policies",
              "Customer Segments",
              "Revenue Streams",
            ],
            correctAnswer: "Government Policies",
            shuffle: true,
          },
          {
            question:
              "Which of the following is an example of a Key Partner in a business model?",
            type: "multiple",
            options: [
              "Strategic alliances with other firms",
              "Marketing campaigns",
              "Customer feedback systems",
              "Internal employees",
            ],
            correctAnswer: "Strategic alliances with other firms",
            shuffle: true,
          },
          {
            question:
              "Why do companies typically form joint ventures as part of their business model?",
            type: "multiple",
            options: [
              "To eliminate suppliers",
              "To pursue specific projects or new opportunities",
              "To reduce employee workload",
              "To increase fixed operational costs",
            ],
            correctAnswer: "To pursue specific projects or new opportunities",
            shuffle: true,
          },
          {
            question:
              "What is the main role of distribution partnerships in a business model?",
            type: "multiple",
            options: [
              "Improving production efficiency",
              "Increasing intellectual property",
              "Helping the company reach its customers",
              "Reducing financial investments",
            ],
            correctAnswer: "Helping the company reach its customers",
            shuffle: true,
          },
          {
            question:
              "Which of the following activities is NOT classified as a Key Activity in a business model?",
            type: "multiple",
            options: [
              "Production processes",
              "Tax auditing",
              "Platform or network management",
              "Problem-solving and innovation",
            ],
            correctAnswer: "Tax auditing",
            shuffle: true,
          },
          {
            question:
              "In a business model, research and development (R&D) activities are categorized under:",
            type: "multiple",
            options: [
              "Financial management",
              "Distribution",
              "Production",
              "Problem-solving activities",
            ],
            correctAnswer: "Problem-solving activities",
            shuffle: true,
          },
          {
            question:
              "What is the purpose of differentiating activities in a business model?",
            type: "multiple",
            options: [
              "Eliminating customer relationships",
              "Reducing innovation",
              "Creating unique advantages over competitors",
              "Making the company identical to competitors",
            ],
            correctAnswer: "Creating unique advantages over competitors",
            shuffle: true,
          },
          {
            question:
              "Which of the following is NOT considered a type of key resource?",
            type: "multiple",
            options: [
              "Financial resources",
              "Human resources",
              "Advertising channels",
              "Intellectual resources",
            ],
            correctAnswer: "Advertising channels",
            shuffle: true,
          },
          {
            question:
              "Patents, trademarks, and proprietary knowledge are examples of:",
            type: "multiple",
            options: [
              "Financial resources",
              "Intellectual resources",
              "Human resources",
              "Physical resources",
            ],
            correctAnswer: "Intellectual resources",
            shuffle: true,
          },
          {
            question:
              "Which of the following best represents human resources in a business model?",
            type: "multiple",
            options: [
              "Machinery and equipment",
              "Distribution networks",
              "Investment capital",
              "Skilled employees and management team",
            ],
            correctAnswer: "Skilled employees and management team",
            shuffle: true,
          },
          {
            question:
              "What is the primary purpose of financial reserves in a business?",
            type: "multiple",
            options: [
              "Hiring additional staff",
              "Supporting product innovation",
              "Handling unexpected expenses and cash flow issues",
              "Increasing marketing activities",
            ],
            correctAnswer: "Handling unexpected expenses and cash flow issues",
            shuffle: true,
          },
          {
            question:
              "The value proposition of a company primarily answers which question?",
            type: "multiple",
            options: [
              "Who owns the company?",
              "What value is delivered to customers?",
              "Where the company operates?",
              "How much profit is generated?",
            ],
            correctAnswer: "What value is delivered to customers?",
            shuffle: true,
          },
          {
            question:
              "Customer relationships in a business model focus mainly on:",
            type: "multiple",
            options: [
              "Legal compliance",
              "Managing production",
              "Interacting and maintaining relationships with customers",
              "Reducing costs",
            ],
            correctAnswer:
              "Interacting and maintaining relationships with customers",
            shuffle: true,
          },
          {
            question:
              "Which of the following is NOT considered a delivery channel in a business model?",
            type: "multiple",
            options: [
              "Manufacturing processes",
              "Direct sales",
              "Online platforms",
              "Indirect sales through intermediaries",
            ],
            correctAnswer: "Manufacturing processes",
            shuffle: true,
          },
          {
            question: "What is meant by indirect sales channels?",
            type: "multiple",
            options: [
              "Selling directly to customers",
              "Internal company transactions",
              "Free product distribution",
              "Selling through intermediaries such as retailers or distributors",
            ],
            correctAnswer:
              "Selling through intermediaries such as retailers or distributors",
            shuffle: true,
          },
          {
            question: "A niche market is best described as:",
            type: "multiple",
            options: [
              "A highly specific group with unique needs",
              "Randomly selected customers",
              "Government institutions only",
              "A large, general customer base",
            ],
            correctAnswer: "A highly specific group with unique needs",
            shuffle: true,
          },
          {
            question: "A mass market strategy focuses on:",
            type: "multiple",
            options: [
              "High-income individuals only",
              "A broad group of customers with similar needs",
              "Small customer segments",
              "Specialized markets only",
            ],
            correctAnswer: "A broad group of customers with similar needs",
            shuffle: true,
          },
          {
            question: "The cost structure of a business includes:",
            type: "multiple",
            options: [
              "Only marketing costs",
              "Only fixed costs",
              "Both fixed and variable costs",
              "Only variable costs",
            ],
            correctAnswer: "Both fixed and variable costs",
            shuffle: true,
          },
          {
            question: "What does the concept of economies of scale refer to?",
            type: "multiple",
            options: [
              "Increasing costs with production",
              "Decreasing demand",
              "Decreasing costs as production increases",
              "Increasing competition",
            ],
            correctAnswer: "Decreasing costs as production increases",
            shuffle: true,
          },
          {
            question: "Which of the following is NOT a type of revenue stream?",
            type: "multiple",
            options: [
              "Subscription fees",
              "Employee wages",
              "Licensing",
              "Asset sales",
            ],
            correctAnswer: "Employee wages",
            shuffle: true,
          },
          {
            question: "A usage fee revenue model charges customers based on:",
            type: "multiple",
            options: [
              "Brand reputation",
              "Level of product or service usage",
              "Ownership",
              "Time spent working",
            ],
            correctAnswer: "Level of product or service usage",
            shuffle: true,
          },
          {
            question: "What characterizes a subscription-based revenue model?",
            type: "multiple",
            options: [
              "Free services",
              "Product exchange",
              "One-time payment",
              "Recurring payment for continuous access",
            ],
            correctAnswer: "Recurring payment for continuous access",
            shuffle: true,
          },
          {
            question: "Licensing as a revenue stream allows a company to:",
            type: "multiple",
            options: [
              "Reduce production costs",
              "Sell physical products",
              "Hire employees",
              "Allow others to use its intellectual property for a fee",
            ],
            correctAnswer:
              "Allow others to use its intellectual property for a fee",
            shuffle: true,
          },
          {
            question: "Channels in a business model are primarily used for:",
            type: "multiple",
            options: [
              "Employee management",
              "Communication, distribution, and marketing",
              "Financial auditing",
              "Production only",
            ],
            correctAnswer: "Communication, distribution, and marketing",
            shuffle: true,
          },
          {
            question: "A well-designed business model contributes to:",
            type: "multiple",
            options: [
              "Reduced efficiency",
              "Increased operational risk only",
              "Sustainable long-term success",
              "Short-term instability",
            ],
            correctAnswer: "Sustainable long-term success",
            shuffle: true,
          },
          {
            question:
              "A business model focuses on how a company generates profit.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Business model design does not influence decision-making processes.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "A business model is useful for both entrepreneurs and managers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Managing costs is one of the key functions of a business model.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "A business model eliminates the need for market competition.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Maintaining competitiveness requires adapting to market changes.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "A well-designed business model decreases profitability.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Scalability refers to the ability of a business to grow efficiently.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "The Business Model Canvas includes cost structure and revenue streams.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Strategic alliances are considered part of key partners.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Joint ventures are unrelated to business opportunities.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Distribution partners help companies reach their customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Production is considered a key activity in a business model.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "R&D is categorized under problem-solving activities.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Differentiating activities aim to make companies identical.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Key resources include human, financial, intellectual, and physical assets.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Inventory is classified as an intellectual resource.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Patents are considered intellectual resources.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Human resources include employees and management teams.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Financial resources include funding and capital investment.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Value proposition explains the value delivered to customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Customer relationships focus only on reducing costs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Channels include online and physical methods of delivery.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Indirect sales involve intermediaries.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "A niche market targets a broad audience.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Mass markets serve a large group of customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Cost structure includes both fixed and variable costs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Economies of scale reduce costs as production increases.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Subscription is a one-time payment model.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "A strong business model supports long-term success.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "What is the main difference between SWOT and TOWS analysis?",
            type: "multiple",
            options: [
              "SWOT matches internal and external factors while TOWS identifies them",
              "TOWS transforms analysis into actionable strategies",
              "SWOT is used only for marketing",
              "SWOT focuses on execution while TOWS focuses on description",
            ],
            correctAnswer:
              "TOWS transforms analysis into actionable strategies",
            shuffle: true,
          },
          {
            question: "Which of the following best describes SWOT analysis?",
            type: "multiple",
            options: [
              "A financial forecasting method",
              "A customer segmentation technique",
              "A situational analysis identifying internal and external factors",
              "A strategy implementation tool",
            ],
            correctAnswer:
              "A situational analysis identifying internal and external factors",
            shuffle: true,
          },
          {
            question:
              "In TOWS analysis, combining strengths with opportunities results in:",
            type: "multiple",
            options: [
              "Cost reduction strategies",
              "Growth strategies",
              "Defensive strategies",
              "Risk avoidance strategies",
            ],
            correctAnswer: "Growth strategies",
            shuffle: true,
          },
          {
            question: "WT strategies in TOWS aim to:",
            type: "multiple",
            options: [
              "Improve internal processes only",
              "Focus on opportunities only",
              "Minimize weaknesses and avoid threats",
              "Maximize strengths",
            ],
            correctAnswer: "Minimize weaknesses and avoid threats",
            shuffle: true,
          },
          {
            question: "The TOWS matrix primarily helps organizations to:",
            type: "multiple",
            options: [
              "Translate analysis into strategic actions",
              "Analyze financial data",
              "Improve employee performance",
              "Reduce operational costs",
            ],
            correctAnswer: "Translate analysis into strategic actions",
            shuffle: true,
          },
          {
            question: "Which question does strategic planning answer?",
            type: "multiple",
            options: [
              "What are customer needs?",
              "How do we improve processes?",
              "Where are we going?",
              "How do we reduce costs?",
            ],
            correctAnswer: "Where are we going?",
            shuffle: true,
          },
          {
            question: "Six Sigma mainly answers which question?",
            type: "multiple",
            options: [
              "Where are we going?",
              "Who are our competitors?",
              "How do we get there?",
              "What is our mission?",
            ],
            correctAnswer: "How do we get there?",
            shuffle: true,
          },
          {
            question: "What is Six Sigma primarily considered?",
            type: "multiple",
            options: [
              "A marketing strategy",
              "A data-driven process improvement methodology",
              "A financial model",
              "A strategic vision",
            ],
            correctAnswer: "A data-driven process improvement methodology",
            shuffle: true,
          },
          {
            question: "Six Sigma focuses on improving processes by:",
            type: "multiple",
            options: [
              "Increasing complexity",
              "Eliminating customers",
              "Reducing errors and variation",
              "Increasing costs",
            ],
            correctAnswer: "Reducing errors and variation",
            shuffle: true,
          },
          {
            question: "Who introduced Six Sigma?",
            type: "multiple",
            options: ["Peter Drucker", "Elon Musk", "Bill Smith", "Henry Ford"],
            correctAnswer: "Bill Smith",
            shuffle: true,
          },
          {
            question: "DMAIC is used when:",
            type: "multiple",
            options: [
              "Launching a new product",
              "Improving an existing process",
              "Designing a new process",
              "Entering a new market",
            ],
            correctAnswer: "Improving an existing process",
            shuffle: true,
          },
          {
            question: "DMADV is most appropriate when:",
            type: "multiple",
            options: [
              "Improving operational efficiency",
              "Reducing marketing costs",
              "Designing a new product or process",
              "Fixing defects in existing processes",
            ],
            correctAnswer: "Designing a new product or process",
            shuffle: true,
          },
          {
            question: "The first step in DMAIC is:",
            type: "multiple",
            options: ["Improve", "Define", "Measure", "Analyze"],
            correctAnswer: "Define",
            shuffle: true,
          },
          {
            question: "Which phase of DMAIC focuses on collecting data?",
            type: "multiple",
            options: ["Improve", "Measure", "Define", "Control"],
            correctAnswer: "Measure",
            shuffle: true,
          },
          {
            question: "Root cause identification is part of which DMAIC phase?",
            type: "multiple",
            options: ["Control", "Improve", "Analyze", "Define"],
            correctAnswer: "Analyze",
            shuffle: true,
          },
          {
            question:
              "Which DMAIC phase ensures sustainability of improvements?",
            type: "multiple",
            options: ["Analyze", "Control", "Measure", "Improve"],
            correctAnswer: "Control",
            shuffle: true,
          },
          {
            question:
              "In the marketing example, the key performance metric (Y) is:",
            type: "multiple",
            options: [
              "Bounce rate",
              "Click-through rate",
              "Conversion rate",
              "Open rate",
            ],
            correctAnswer: "Conversion rate",
            shuffle: true,
          },
          {
            question: "A major drop-off in the funnel occurred at which stage?",
            type: "multiple",
            options: [
              "Checkout completed",
              "Email received",
              "Landing page loaded",
              "Link clicked",
            ],
            correctAnswer: "Landing page loaded",
            shuffle: true,
          },
          {
            question: "What was identified as a technical root cause?",
            type: "multiple",
            options: [
              "Weak branding",
              "Poor email subject lines",
              "Slow-loading landing pages",
              "High product prices",
            ],
            correctAnswer: "Slow-loading landing pages",
            shuffle: true,
          },
          {
            question:
              "Personalization issues mainly affected which customer group?",
            type: "multiple",
            options: [
              "VIP customers",
              "New customers",
              "Returning customers",
              "All customers equally",
            ],
            correctAnswer: "New customers",
            shuffle: true,
          },
          {
            question: "What improvement method was used to test solutions?",
            type: "multiple",
            options: [
              "Forecasting",
              "Cost analysis",
              "A/B testing",
              "Benchmarking",
            ],
            correctAnswer: "A/B testing",
            shuffle: true,
          },
          {
            question: "What was the result of the improved test group?",
            type: "multiple",
            options: [
              "Conversion rate decreased",
              "Conversion rate exceeded target",
              "No change",
              "Revenue declined",
            ],
            correctAnswer: "Conversion rate exceeded target",
            shuffle: true,
          },
          {
            question: "What is the main goal of the Control phase?",
            type: "multiple",
            options: [
              "Sustain improvements",
              "Define problems",
              "Generate ideas",
              "Analyze data",
            ],
            correctAnswer: "Sustain improvements",
            shuffle: true,
          },
          {
            question: "Which of the following is part of control mechanisms?",
            type: "multiple",
            options: [
              "Product design",
              "Market segmentation",
              "Monitoring dashboards",
              "Brainstorming",
            ],
            correctAnswer: "Monitoring dashboards",
            shuffle: true,
          },
          {
            question: "In DMADV, CTQs refer to:",
            type: "multiple",
            options: [
              "Customer tracking queries",
              "Cost-to-quality ratios",
              "Critical-to-Quality requirements",
              "Customer transaction quantities",
            ],
            correctAnswer: "Critical-to-Quality requirements",
            shuffle: true,
          },
          {
            question: "Which of the following is an example of a CTQ?",
            type: "multiple",
            options: [
              "Number of employees",
              "Market share",
              "App load time < 2 seconds",
              "Company profit",
            ],
            correctAnswer: "App load time < 2 seconds",
            shuffle: true,
          },
          {
            question:
              "Which method is used to compare design alternatives in DMADV?",
            type: "multiple",
            options: [
              "Budgeting",
              "SWOT analysis",
              "Trade-off analysis",
              "Forecasting",
            ],
            correctAnswer: "Trade-off analysis",
            shuffle: true,
          },
          {
            question: "What is the purpose of the Design phase in DMADV?",
            type: "multiple",
            options: [
              "Analyze competitors",
              "Identify problems",
              "Build detailed solutions and prototypes",
              "Reduce costs",
            ],
            correctAnswer: "Build detailed solutions and prototypes",
            shuffle: true,
          },
          {
            question: "What is the purpose of the Validate phase?",
            type: "multiple",
            options: [
              "Define customer needs",
              "Test and verify before launch",
              "Generate ideas",
              "Collect data",
            ],
            correctAnswer: "Test and verify before launch",
            shuffle: true,
          },
          {
            question: "What was the final outcome of the DMADV example?",
            type: "multiple",
            options: [
              "Process redesign",
              "Approved full launch",
              "Partial implementation",
              "Project failure",
            ],
            correctAnswer: "Approved full launch",
            shuffle: true,
          },
          {
            question:
              "TOWS analysis focuses on turning SWOT findings into strategies.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "SWOT analysis directly generates strategic actions.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Strategic planning answers the question 'How do we get there?'.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Six Sigma is a methodology for executing strategy effectively.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Six Sigma is considered a strategy itself.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "DMAIC is used for improving existing processes.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "DMADV is used for improving existing processes only.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "The Define phase identifies goals and customer needs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Measure phase focuses on brainstorming solutions.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Analyze phase identifies root causes of problems.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Improve phase focuses on sustaining improvements.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Control phase ensures long-term stability of improvements.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Conversion rate was the main KPI in the marketing example.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "The major issue was identified at the checkout stage.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Landing page performance was a critical issue.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Returning customers had higher conversion rates than new customers.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "A/B testing was used to validate improvements.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "The improved version failed to meet the target.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Monitoring dashboards are part of the Control phase.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Control limits help detect performance drops.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "DMADV is used when no existing process exists.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Customer retention in the example was initially high.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "CTQs translate customer needs into measurable requirements.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Personalization is not part of CTQs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Trade-off analysis helps select the best design.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Design phase includes prototyping.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Validate phase occurs after full launch.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Pilot testing is part of validation.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "The final solution was rejected after testing.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "DMADV ensures the product meets customer expectations before launch.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Which of the following best defines a Minimum Viable Product (MVP)?",
            type: "multiple",
            options: [
              "A product with the lowest possible cost",
              "A product with all features removed except one",
              "The simplest version that delivers core value and enables feedback",
              "A prototype not intended for users",
            ],
            correctAnswer:
              "The simplest version that delivers core value and enables feedback",
            shuffle: true,
          },
          {
            question: "The 'Minimum' in MVP refers to:",
            type: "multiple",
            options: [
              "Minimum development time",
              "Minimum cost only",
              "Smallest set of features solving the core problem",
              "Minimum number of users",
            ],
            correctAnswer: "Smallest set of features solving the core problem",
            shuffle: true,
          },
          {
            question: "The 'Viable' aspect of MVP ensures that the product:",
            type: "multiple",
            options: [
              "Is fully developed",
              "Has advanced features",
              "Can deliver meaningful value to users",
              "Has no defects",
            ],
            correctAnswer: "Can deliver meaningful value to users",
            shuffle: true,
          },
          {
            question: "Which of the following best describes 'Product' in MVP?",
            type: "multiple",
            options: [
              "A concept only",
              "A complete, usable system for user interaction",
              "A marketing plan",
              "A prototype without testing",
            ],
            correctAnswer: "A complete, usable system for user interaction",
            shuffle: true,
          },
          {
            question: "Which of the following is NOT a purpose of MVP?",
            type: "multiple",
            options: [
              "Reduce financial risk",
              "Validate market viability",
              "Eliminate customer feedback",
              "Accelerate learning",
            ],
            correctAnswer: "Eliminate customer feedback",
            shuffle: true,
          },
          {
            question: "Reducing financial risk using MVP is achieved by:",
            type: "multiple",
            options: [
              "Increasing investment early",
              "Entering the market with minimal budget",
              "Avoiding testing",
              "Hiring more developers",
            ],
            correctAnswer: "Entering the market with minimal budget",
            shuffle: true,
          },
          {
            question: "MVP helps minimize waste by:",
            type: "multiple",
            options: [
              "Building full products faster",
              "Avoiding unnecessary features",
              "Increasing development complexity",
              "Ignoring user needs",
            ],
            correctAnswer: "Avoiding unnecessary features",
            shuffle: true,
          },
          {
            question: "Validated learning in MVP is based on:",
            type: "multiple",
            options: [
              "Assumptions",
              "Internal opinions",
              "Real customer actions",
              "Market predictions",
            ],
            correctAnswer: "Real customer actions",
            shuffle: true,
          },
          {
            question:
              "Which of the following best explains product-market fit?",
            type: "multiple",
            options: [
              "Matching price with competitors",
              "Aligning product with customer needs",
              "Increasing production speed",
              "Reducing marketing costs",
            ],
            correctAnswer: "Aligning product with customer needs",
            shuffle: true,
          },
          {
            question: "MVP helps identify the right audience by:",
            type: "multiple",
            options: [
              "Random selection",
              "Market guessing",
              "Real-world adoption data",
              "Internal testing",
            ],
            correctAnswer: "Real-world adoption data",
            shuffle: true,
          },
          {
            question: "Which step comes first when building an MVP?",
            type: "multiple",
            options: [
              "Build",
              "Measure",
              "Identify business need",
              "Select MVP approach",
            ],
            correctAnswer: "Identify business need",
            shuffle: true,
          },
          {
            question: "Analyzing product hypothesis includes:",
            type: "multiple",
            options: [
              "Ignoring competitors",
              "Understanding customer needs",
              "Increasing production",
              "Reducing costs",
            ],
            correctAnswer: "Understanding customer needs",
            shuffle: true,
          },
          {
            question: "Which question is NOT part of MVP idea validation?",
            type: "multiple",
            options: [
              "What benefit does the product provide?",
              "How customers access the product?",
              "What is the company profit margin?",
              "How users gain value",
            ],
            correctAnswer: "What is the company profit margin?",
            shuffle: true,
          },
          {
            question: "Which of the following is an MVP approach?",
            type: "multiple",
            options: [
              "Market expansion",
              "Product Mockup MVP",
              "Cost leadership",
              "Financial planning",
            ],
            correctAnswer: "Product Mockup MVP",
            shuffle: true,
          },
          {
            question: "No-Product MVP focuses on:",
            type: "multiple",
            options: [
              "Building a full system",
              "Testing ideas without building",
              "Selling final products",
              "Improving operations",
            ],
            correctAnswer: "Testing ideas without building",
            shuffle: true,
          },
          {
            question: "Pre-selling in MVP is used to:",
            type: "multiple",
            options: [
              "Reduce cost",
              "Test willingness to pay",
              "Improve design",
              "Increase features",
            ],
            correctAnswer: "Test willingness to pay",
            shuffle: true,
          },
          {
            question: "A landing page used to test interest is an example of:",
            type: "multiple",
            options: [
              "Product Mockup MVP",
              "No-Product MVP",
              "Single-feature MVP",
              "MLP",
            ],
            correctAnswer: "No-Product MVP",
            shuffle: true,
          },
          {
            question: "The Dropbox example demonstrates:",
            type: "multiple",
            options: [
              "Product Mockup MVP",
              "Single-feature MVP",
              "No-Product MVP",
              "MLP",
            ],
            correctAnswer: "No-Product MVP",
            shuffle: true,
          },
          {
            question: "Concierge MVP involves:",
            type: "multiple",
            options: [
              "Automation",
              "Manual service delivery",
              "No user interaction",
              "Full system development",
            ],
            correctAnswer: "Manual service delivery",
            shuffle: true,
          },
          {
            question: "Wizard of Oz MVP is characterized by:",
            type: "multiple",
            options: [
              "Full automation",
              "Hidden manual work behind automation",
              "No testing",
              "High investment",
            ],
            correctAnswer: "Hidden manual work behind automation",
            shuffle: true,
          },
          {
            question: "Airbnb's early model is an example of:",
            type: "multiple",
            options: [
              "Wizard of Oz MVP",
              "Concierge MVP",
              "Single-feature MVP",
              "MLP",
            ],
            correctAnswer: "Concierge MVP",
            shuffle: true,
          },
          {
            question: "Single-feature MVP focuses on:",
            type: "multiple",
            options: [
              "Multiple features",
              "One core feature",
              "Full system",
              "Marketing only",
            ],
            correctAnswer: "One core feature",
            shuffle: true,
          },
          {
            question: "Uber's early version is an example of:",
            type: "multiple",
            options: [
              "MLP",
              "Concierge MVP",
              "Single-feature MVP",
              "No-product MVP",
            ],
            correctAnswer: "Single-feature MVP",
            shuffle: true,
          },
          {
            question: "MLP differs from MVP because it:",
            type: "multiple",
            options: [
              "Has more features",
              "Focuses on delight and user experience",
              "Is more complex",
              "Ignores design",
            ],
            correctAnswer: "Focuses on delight and user experience",
            shuffle: true,
          },
          {
            question: "MLP aims to:",
            type: "multiple",
            options: [
              "Reduce cost only",
              "Create emotional connection with users",
              "Remove all features",
              "Avoid feedback",
            ],
            correctAnswer: "Create emotional connection with users",
            shuffle: true,
          },
          {
            question: "Instagram's early version is an example of:",
            type: "multiple",
            options: [
              "No-product MVP",
              "MLP",
              "Concierge MVP",
              "Wizard of Oz MVP",
            ],
            correctAnswer: "MLP",
            shuffle: true,
          },
          {
            question: "Prioritizing MVP features should be based on:",
            type: "multiple",
            options: [
              "Developer preference",
              "Customer needs",
              "Company size",
              "Cost only",
            ],
            correctAnswer: "Customer needs",
            shuffle: true,
          },
          {
            question: "Core features can be identified by:",
            type: "multiple",
            options: [
              "Adding more features",
              "Removing features and observing user reaction",
              "Ignoring users",
              "Increasing complexity",
            ],
            correctAnswer: "Removing features and observing user reaction",
            shuffle: true,
          },
          {
            question: "Actionable metrics include:",
            type: "multiple",
            options: [
              "Only financial data",
              "Only qualitative data",
              "Both quantitative and qualitative data",
              "Only assumptions",
            ],
            correctAnswer: "Both quantitative and qualitative data",
            shuffle: true,
          },
          {
            question: "The 'Measure and Learn' stage focuses on:",
            type: "multiple",
            options: [
              "Building features",
              "Data analysis and learning",
              "Marketing campaigns",
              "Hiring employees",
            ],
            correctAnswer: "Data analysis and learning",
            shuffle: true,
          },
          {
            question:
              "An MVP is the simplest version that delivers value and gathers feedback.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "MVP means building the product with the fewest features regardless of usability.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "'Minimum' refers to solving the core problem only.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "'Viable' means the product must be fully complete.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "MVP reduces financial risk.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "MVP increases waste during development.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Validated learning relies on real user behavior.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question:
              "Product-market fit ensures alignment between product and customer needs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "MVP ignores user feedback.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Identifying the right audience is part of MVP purpose.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Building is the first step in MVP development.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Analyzing competitors is part of MVP planning.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Feature prioritization should ignore customer needs.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "No-product MVP involves building the actual product.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Pre-selling tests willingness to pay.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Dropbox used a video to test its idea.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Concierge MVP uses automation.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Wizard of Oz MVP hides manual work behind automation.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Airbnb validated its idea before scaling.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Single-feature MVP focuses on one core function.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Uber initially launched with many features.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "MLP focuses only on functionality.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "MLP aims to delight users.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Instagram started as a full-featured platform.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question:
              "Feature prioritization includes categorization by importance.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Removing features helps identify core features.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "Actionable metrics include qualitative data only.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "MVP development ignores learning from users.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "False",
            shuffle: false,
          },
          {
            question: "Measure and Learn stage analyzes collected data.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
          {
            question: "MVP helps avoid building products nobody wants.",
            type: "true_false",
            options: ["True", "False"],
            correctAnswer: "True",
            shuffle: false,
          },
        ],
      },
      {
        id: "marketing-qbank-no-tf",
        title: "Marketing Qbank No T/F",
        shuffleQuestions: false,
        showScore: true,
        quizModeTimer: 5400,
        questions: [
          {
            question:
              "Technical superiority of a product can best be described as:",
            type: "multiple",
            options: [
              "The sole factor determining success",
              "A sufficient condition for market leadership",
              "Often a necessary but insufficient condition",
              "Unrelated to customer acceptance",
            ],
            correctAnswer: "Often a necessary but insufficient condition",
            shuffle: true,
          },
          {
            question:
              "Which of the following best explains why advanced products may fail in the market?",
            type: "multiple",
            options: [
              "Customers avoid innovation",
              "Technical complexity always increases costs",
              "Market success requires more than technical excellence",
              "Engineering limits creativity",
            ],
            correctAnswer:
              "Market success requires more than technical excellence",
            shuffle: true,
          },
          {
            question:
              "A product designed with extreme focus on performance but little attention to customer needs is most likely to:",
            type: "multiple",
            options: [
              "Dominate its market",
              "Create sustainable demand",
              "Face adoption challenges",
              "Eliminate competitors",
            ],
            correctAnswer: "Face adoption challenges",
            shuffle: true,
          },
          {
            question:
              "In product development, technical superiority is often considered:",
            type: "multiple",
            options: [
              "An optional feature",
              "A replacement for marketing",
              "The price of entry into competition",
              "The final stage of commercialization",
            ],
            correctAnswer: "The price of entry into competition",
            shuffle: true,
          },
          {
            question:
              "Which statement best reflects a common misconception in product innovation?",
            type: "multiple",
            options: [
              "Customers value reliability",
              "Marketing guides product design",
              "Superior technology guarantees success",
              "Customer problems drive demand",
            ],
            correctAnswer: "Superior technology guarantees success",
            shuffle: true,
          },
          {
            question:
              "A key reason some technologically advanced products fail is that they:",
            type: "multiple",
            options: [
              "Enter the market too early",
              "Solve problems customers do not perceive as important",
              "Lack sufficient engineering innovation",
              "Are priced lower than competitors",
            ],
            correctAnswer:
              "Solve problems customers do not perceive as important",
            shuffle: true,
          },
          {
            question:
              "Successful products typically achieve market acceptance because they:",
            type: "multiple",
            options: [
              "Introduce the newest technology available",
              "Are developed by market leaders",
              "Address a clear and widespread customer pain point",
              "Focus on aesthetics rather than function",
            ],
            correctAnswer: "Address a clear and widespread customer pain point",
            shuffle: true,
          },
          {
            question:
              "A product that creates new problems such as privacy concerns or social discomfort is most likely to:",
            type: "multiple",
            options: [
              "Gain rapid adoption",
              "Achieve long-term loyalty",
              "Reduce perceived customer value",
              "Increase perceived benefits",
            ],
            correctAnswer: "Reduce perceived customer value",
            shuffle: true,
          },
          {
            question:
              "Which of the following best describes the role of technology in successful products?",
            type: "multiple",
            options: [
              "Technology should lead market demand",
              "Technology should replace customer research",
              "Technology should exist independently of customer needs",
              "Technology should support a well-defined market need",
            ],
            correctAnswer:
              "Technology should support a well-defined market need",
            shuffle: true,
          },
          {
            question:
              "A product does not need to be the first in the market to succeed if it:",
            type: "multiple",
            options: [
              "Is significantly cheaper than alternatives",
              "Perfectively addresses an existing customer frustration",
              "Uses cutting-edge components",
              "Targets a niche audience only",
            ],
            correctAnswer:
              "Perfectively addresses an existing customer frustration",
            shuffle: true,
          },
          {
            question:
              "Which of the following best represents a common misconception about marketing?",
            type: "multiple",
            options: [
              "Marketing involves understanding customer problems",
              "Marketing includes value communication",
              "Marketing is the same as advertising",
              "Marketing supports long-term strategy",
            ],
            correctAnswer: "Marketing is the same as advertising",
            shuffle: true,
          },
          {
            question:
              "Describing marketing as a 'non-technical' or 'soft skill' often leads to:",
            type: "multiple",
            options: [
              "Better collaboration with engineers",
              "Stronger product performance",
              "Underestimating its strategic importance",
              "Improved customer satisfaction",
            ],
            correctAnswer: "Underestimating its strategic importance",
            shuffle: true,
          },
          {
            question:
              "A narrow definition of marketing can negatively affect an organization by:",
            type: "multiple",
            options: [
              "Increasing customer engagement",
              "Limiting innovation and market fit",
              "Reducing operational efficiency",
              "Improving technical focus",
            ],
            correctAnswer: "Limiting innovation and market fit",
            shuffle: true,
          },
          {
            question:
              "Marketing can best be defined as a structured system for:",
            type: "multiple",
            options: [
              "Promoting products through media",
              "Increasing sales volume only",
              "Understanding customer problems and designing solutions",
              "Managing production efficiency",
            ],
            correctAnswer:
              "Understanding customer problems and designing solutions",
            shuffle: true,
          },
          {
            question:
              "Identifying who to build a product for primarily relates to:",
            type: "multiple",
            options: [
              "Distribution strategy",
              "Market segmentation",
              "Pricing tactics",
              "Promotional channels",
            ],
            correctAnswer: "Market segmentation",
            shuffle: true,
          },
          {
            question:
              "Communicating value in a measurable way helps organizations to:",
            type: "multiple",
            options: [
              "Eliminate customer feedback",
              "Reduce product quality",
              "Assess the effectiveness of marketing efforts",
              "Avoid market research",
            ],
            correctAnswer: "Assess the effectiveness of marketing efforts",
            shuffle: true,
          },
          {
            question: "Marketing is best described as:",
            type: "multiple",
            options: [
              "The art of selling what is already produced",
              "The science of knowing what to make in the first place",
              "A method for increasing sales volume",
              "A promotional activity",
            ],
            correctAnswer:
              "The science of knowing what to make in the first place",
            shuffle: true,
          },
          {
            question:
              "Which statement correctly reflects the role of marketing?",
            type: "multiple",
            options: [
              "Marketing replaces technical innovation",
              "Marketing focuses only on communication",
              "Marketing acts as a bridge between technical brilliance and commercial success",
              "Marketing is unrelated to engineering outcomes",
            ],
            correctAnswer:
              "Marketing acts as a bridge between technical brilliance and commercial success",
            shuffle: true,
          },
          {
            question:
              "Marketing involves understanding customer needs and then:",
            type: "multiple",
            options: [
              "Selling products aggressively",
              "Reducing production costs",
              "Designing, communicating, and delivering value",
              "Eliminating competition",
            ],
            correctAnswer: "Designing, communicating, and delivering value",
            shuffle: true,
          },
          {
            question: "The primary goal of marketing exchanges is to satisfy:",
            type: "multiple",
            options: [
              "Only organizational objectives",
              "Only individual objectives",
              "Technical requirements",
              "Individual and organizational objectives",
            ],
            correctAnswer: "Individual and organizational objectives",
            shuffle: true,
          },
          {
            question:
              "Which activity is explicitly included in the marketing process?",
            type: "multiple",
            options: [
              "Manufacturing optimization",
              "Value creation and delivery",
              "Employee training",
              "Financial auditing",
            ],
            correctAnswer: "Value creation and delivery",
            shuffle: true,
          },
          {
            question: "Needs are best described as:",
            type: "multiple",
            options: [
              "Products people desire",
              "Basic human requirements",
              "Wants supported by purchasing power",
              "Marketing-created motivations",
            ],
            correctAnswer: "Basic human requirements",
            shuffle: true,
          },
          {
            question: "Wants can be defined as:",
            type: "multiple",
            options: [
              "Artificial demands created by marketers",
              "Needs shaped by culture and individual preferences",
              "Basic survival requirements",
              "Financial ability to purchase products",
            ],
            correctAnswer: "Needs shaped by culture and individual preferences",
            shuffle: true,
          },
          {
            question: "When buying power is present, wants become:",
            type: "multiple",
            options: ["Needs", "Values", "Demands", "Benefits"],
            correctAnswer: "Demands",
            shuffle: true,
          },
          {
            question:
              "Which of the following statements about needs is correct?",
            type: "multiple",
            options: [
              "Needs are created by marketing activities",
              "Needs vary significantly across individuals",
              "Needs are a basic part of human nature",
              "Needs depend on purchasing power",
            ],
            correctAnswer: "Needs are a basic part of human nature",
            shuffle: true,
          },
          {
            question: "Customer value is defined as:",
            type: "multiple",
            options: [
              "Costs divided by benefits",
              "Benefits multiplied by costs",
              "Benefits minus costs",
              "Benefits divided by costs",
            ],
            correctAnswer: "Benefits minus costs",
            shuffle: true,
          },
          {
            question:
              "The marketing process focuses on creating and capturing customer",
            type: "multiple",
            options: ["Cost", "Value", "Advertising", "Competition"],
            correctAnswer: "Value",
            shuffle: true,
          },
          {
            question: "The first step in the marketing process is to",
            type: "multiple",
            options: [
              "Engage customers",
              "Capture value from customers",
              "Understand the marketplace",
              "Construct a marketing mix",
            ],
            correctAnswer: "Understand the marketplace",
            shuffle: true,
          },
          {
            question:
              "Designing a marketing strategy comes ________ understanding the marketplace.",
            type: "multiple",
            options: ["Before", "After", "Instead of", "Without"],
            correctAnswer: "After",
            shuffle: true,
          },
          {
            question:
              "Constructing an integrated marketing mix happens ________ designing the marketing strategy.",
            type: "multiple",
            options: ["Before", "After", "During", "Instead of"],
            correctAnswer: "After",
            shuffle: true,
          },
          {
            question:
              "The first step in understanding the marketplace includes",
            type: "multiple",
            options: [
              "Marketing mix",
              "Customer loyalty",
              "Needs, wants, and demands",
              "Promotion strategies",
            ],
            correctAnswer: "Needs, wants, and demands",
            shuffle: true,
          },
          {
            question:
              "Which of the following is listed as part of understanding the marketplace?",
            type: "multiple",
            options: [
              "Market segmentation",
              "Exchanges and relationships",
              "Advertising media",
              "Pricing strategies",
            ],
            correctAnswer: "Exchanges and relationships",
            shuffle: true,
          },
          {
            question: "Value and satisfaction are part of",
            type: "multiple",
            options: [
              "Marketing mix",
              "Designing strategy",
              "Understanding the marketplace",
              "Customer equity",
            ],
            correctAnswer: "Understanding the marketplace",
            shuffle: true,
          },
          {
            question: "Markets are included under",
            type: "multiple",
            options: [
              "Capturing value",
              "Constructing marketing mix",
              "Understanding the marketplace",
              "Promotion",
            ],
            correctAnswer: "Understanding the marketplace",
            shuffle: true,
          },
          {
            question:
              "Market offerings include products, services, solutions, and",
            type: "multiple",
            options: ["Profits", "Experiences", "Competitors", "Discounts"],
            correctAnswer: "Experiences",
            shuffle: true,
          },
          {
            question:
              "If sellers focus only on their products and forget the consumer problem, this leads to",
            type: "multiple",
            options: [
              "Market segmentation",
              "Customer satisfaction",
              "Marketing myopia",
              "Value creation",
            ],
            correctAnswer: "Marketing myopia",
            shuffle: true,
          },
          {
            question: "Marketing myopia occurs when sellers focus on",
            type: "multiple",
            options: [
              "Customer needs",
              "Competitors",
              "Specific products",
              "Relationships",
            ],
            correctAnswer: "Specific products",
            shuffle: true,
          },
          {
            question: "A product is described as a tool to solve a consumer",
            type: "multiple",
            options: ["Promotion", "Problem", "Advertisement", "Market"],
            correctAnswer: "Problem",
            shuffle: true,
          },
          {
            question: "Dissatisfied customers often switch to",
            type: "multiple",
            options: ["Suppliers", "Competitors", "Intermediaries", "Partners"],
            correctAnswer: "Competitors",
            shuffle: true,
          },
          {
            question:
              "Dissatisfied customers may ________ the product to others.",
            type: "multiple",
            options: ["Recommend", "Promote", "Disparage", "Redesign"],
            correctAnswer: "Disparage",
            shuffle: true,
          },
          {
            question: "Satisfied customers are likely to ________ again.",
            type: "multiple",
            options: ["Complain", "Switch", "Buy", "Ignore"],
            correctAnswer: "Buy",
            shuffle: true,
          },
          {
            question:
              "Satisfied customers tell others about their ________ experiences.",
            type: "multiple",
            options: ["Bad", "Good", "Expensive", "Difficult"],
            correctAnswer: "Good",
            shuffle: true,
          },
          {
            question: "Which type of customers often switch to competitors?",
            type: "multiple",
            options: [
              "Loyal customers",
              "Satisfied customers",
              "Dissatisfied customers",
              "Potential buyers",
            ],
            correctAnswer: "Dissatisfied customers",
            shuffle: true,
          },
          {
            question: "Marketers must be careful to set the right level of",
            type: "multiple",
            options: ["Prices", "Expectations", "Distribution", "Promotion"],
            correctAnswer: "Expectations",
            shuffle: true,
          },
          {
            question:
              "If expectations are too low, the company may fail to ________ enough buyers.",
            type: "multiple",
            options: ["Train", "Attract", "Segment", "Reward"],
            correctAnswer: "Attract",
            shuffle: true,
          },
          {
            question: "If expectations are too high, buyers will be",
            type: "multiple",
            options: ["Loyal", "Satisfied", "Disappointed", "Engaged"],
            correctAnswer: "Disappointed",
            shuffle: true,
          },
          {
            question:
              "Customer value and customer satisfaction are key building blocks for developing and managing",
            type: "multiple",
            options: [
              "Market share",
              "Customer relationships",
              "Pricing strategies",
              "Advertising campaigns",
            ],
            correctAnswer: "Customer relationships",
            shuffle: true,
          },
          {
            question: "Exchange requires ________ parties.",
            type: "multiple",
            options: ["Three", "Two", "Four", "Many"],
            correctAnswer: "Two",
            shuffle: true,
          },
          {
            question: "One key aspect of exchange is",
            type: "multiple",
            options: [
              "Competition",
              "Segmentation",
              "Mutual Benefit",
              "Pricing",
            ],
            correctAnswer: "Mutual Benefit",
            shuffle: true,
          },
          {
            question:
              "Marketers aim to establish ________ relationships with customers.",
            type: "multiple",
            options: ["Short-term", "Temporary", "Long-term", "Seasonal"],
            correctAnswer: "Long-term",
            shuffle: true,
          },
          {
            question: "The integrated marketing mix is commonly known as the",
            type: "multiple",
            options: ["3 C's", "4 P's", "5 M's", "7 S's"],
            correctAnswer: "4 P's",
            shuffle: true,
          },
          {
            question:
              "Functionality, quality, appearance, packaging, support, and warranty are elements of",
            type: "multiple",
            options: ["Promotion", "Price", "Product", "Place"],
            correctAnswer: "Product",
            shuffle: true,
          },
          {
            question:
              "List price, discounts, financing, and leasing options belong to",
            type: "multiple",
            options: ["Product", "Promotion", "Place", "Price"],
            correctAnswer: "Price",
            shuffle: true,
          },
          {
            question:
              "Advertising, public relations, direct sales, and media are part of",
            type: "multiple",
            options: ["Promotion", "Product", "Logistics", "Warranty"],
            correctAnswer: "Promotion",
            shuffle: true,
          },
          {
            question:
              "Locations, logistics, market coverage, service levels, and internet relate to ______.",
            type: "multiple",
            options: ["Promotion", "Price", "Place (distribution)", "Product"],
            correctAnswer: "Place (distribution)",
            shuffle: true,
          },
          {
            question: "Customer Relationship Management (CRM) involves ______.",
            type: "multiple",
            options: [
              "Production planning",
              "Customer care",
              "Warehousing",
              "Manufacturing",
            ],
            correctAnswer: "Customer care",
            shuffle: true,
          },
          {
            question:
              "Customer Relationship Management (CRM) includes customer loyalty ______ programs.",
            type: "multiple",
            options: ["Advertising", "Pricing", "Rewards", "Distribution"],
            correctAnswer: "Rewards",
            shuffle: true,
          },
          {
            question:
              "Customer engagement means making the brand a meaningful part of customers' ______.",
            type: "multiple",
            options: [
              "Income",
              "Conversations and lives",
              "Expenses",
              "Complaints",
            ],
            correctAnswer: "Conversations and lives",
            shuffle: true,
          },
          {
            question:
              "Today's digital technologies allow direct and continuous customer involvement via ______.",
            type: "multiple",
            options: [
              "Factories",
              "Printed catalogs",
              "Websites and social media",
              "Warehouses",
            ],
            correctAnswer: "Websites and social media",
            shuffle: true,
          },
          {
            question:
              "Partner relationship management involves working with others ______ the company.",
            type: "multiple",
            options: [
              "Inside and outside",
              "Only inside",
              "Only outside",
              "Instead of",
            ],
            correctAnswer: "Inside and outside",
            shuffle: true,
          },
          {
            question: "True friends are customers who are ______.",
            type: "multiple",
            options: [
              "Loyal but not profitable",
              "Profitable and loyal",
              "Not loyal but profitable",
              "Neither profitable nor loyal",
            ],
            correctAnswer: "Profitable and loyal",
            shuffle: true,
          },
          {
            question: "Butterflies are customers who are ______.",
            type: "multiple",
            options: [
              "Highly loyal and profitable",
              "Not profitable and not loyal",
              "Potentially profitable but not loyal",
              "Loyal but not profitable",
            ],
            correctAnswer: "Potentially profitable but not loyal",
            shuffle: true,
          },
          {
            question: "Barnacles are customers who are ______.",
            type: "multiple",
            options: [
              "Highly loyal but not very profitable",
              "Highly profitable and loyal",
              "Not loyal but profitable",
              "Not profitable and not loyal",
            ],
            correctAnswer: "Highly loyal but not very profitable",
            shuffle: true,
          },
          {
            question: "Strangers are customers who are ______.",
            type: "multiple",
            options: [
              "High loyalty and high profitability",
              "Low profitability and little loyalty",
              "High loyalty and low profitability",
              "High profitability and little loyalty",
            ],
            correctAnswer: "Low profitability and little loyalty",
            shuffle: true,
          },
          {
            question:
              "Capturing value from customers aims to create profits and customer ______.",
            type: "multiple",
            options: ["Promotion", "Distribution", "Equity", "Advertising"],
            correctAnswer: "Equity",
            shuffle: true,
          },
          {
            question: "Marketing management primarily facilitates:",
            type: "multiple",
            options: [
              "Product manufacturing",
              "Distribution of goods and services",
              "Financial auditing",
              "HR planning",
            ],
            correctAnswer: "Distribution of goods and services",
            shuffle: true,
          },
          {
            question: "Marketing management relies on:",
            type: "multiple",
            options: [
              "Financial strategies",
              "Marketing concepts",
              "Production systems",
              "Supply chains",
            ],
            correctAnswer: "Marketing concepts",
            shuffle: true,
          },
          {
            question: "According to Kotler, marketing management includes:",
            type: "multiple",
            options: [
              "Production and logistics",
              "Analysis, planning, implementation, and control",
              "Only selling",
              "Pricing decisions only",
            ],
            correctAnswer: "Analysis, planning, implementation, and control",
            shuffle: true,
          },
          {
            question: "Marketing concepts are mainly about:",
            type: "multiple",
            options: [
              "Reducing costs",
              "Identifying and fulfilling customer needs",
              "Increasing production",
              "Advertising only",
            ],
            correctAnswer: "Identifying and fulfilling customer needs",
            shuffle: true,
          },
          {
            question: "Which is NOT listed as a marketing philosophy?",
            type: "multiple",
            options: ["Production", "Selling", "Financial", "Societal"],
            correctAnswer: "Financial",
            shuffle: true,
          },
          {
            question: "The production concept assumes:",
            type: "multiple",
            options: [
              "Customers prefer luxury",
              "Customers prefer affordable and available products",
              "Customers prefer innovation",
              "Customers prefer brands",
            ],
            correctAnswer: "Customers prefer affordable and available products",
            shuffle: true,
          },
          {
            question: "The production concept focuses on:",
            type: "multiple",
            options: [
              "Customer satisfaction",
              "High production efficiency",
              "Product design",
              "Advertising",
            ],
            correctAnswer: "High production efficiency",
            shuffle: true,
          },
          {
            question: "Which is NOT a focus of production concept?",
            type: "multiple",
            options: [
              "Low cost",
              "Mass distribution",
              "Customer relationship",
              "Efficiency",
            ],
            correctAnswer: "Customer relationship",
            shuffle: true,
          },
          {
            question: "Production concept works best in countries where:",
            type: "multiple",
            options: [
              "Labor is expensive",
              "Labor is cheap and available",
              "Demand is low",
              "Competition is high",
            ],
            correctAnswer: "Labor is cheap and available",
            shuffle: true,
          },
          {
            question: "Outsourcing production helps:",
            type: "multiple",
            options: [
              "Increase advertising",
              "Reduce production cost",
              "Improve branding",
              "Increase price",
            ],
            correctAnswer: "Reduce production cost",
            shuffle: true,
          },
          {
            question: "A key risk of production concept is:",
            type: "multiple",
            options: [
              "High cost",
              "Losing sight of real objective",
              "Low output",
              "Weak distribution",
            ],
            correctAnswer: "Losing sight of real objective",
            shuffle: true,
          },
          {
            question: "Which firms are likely to adopt production concept?",
            type: "multiple",
            options: [
              "Small startups",
              "Monopoly firms",
              "NGOs",
              "Service firms",
            ],
            correctAnswer: "Monopoly firms",
            shuffle: true,
          },
          {
            question:
              "Government bakeries are an example because they focus on:",
            type: "multiple",
            options: [
              "Quality",
              "Brand",
              "Large quantity at low cost",
              "Innovation",
            ],
            correctAnswer: "Large quantity at low cost",
            shuffle: true,
          },
          {
            question: "Product concept assumes customers prefer:",
            type: "multiple",
            options: [
              "Cheap products",
              "High-quality products",
              "Fast delivery",
              "Discounts",
            ],
            correctAnswer: "High-quality products",
            shuffle: true,
          },
          {
            question: "Product concept managers focus on:",
            type: "multiple",
            options: [
              "Advertising",
              "Improving product quality",
              "Price reduction",
              "Distribution",
            ],
            correctAnswer: "Improving product quality",
            shuffle: true,
          },
          {
            question: "Product concept ignores:",
            type: "multiple",
            options: [
              "Quality",
              "Customer needs sometimes",
              "Innovation",
              "Branding",
            ],
            correctAnswer: "Customer needs sometimes",
            shuffle: true,
          },
          {
            question: "Marketing myopia refers to:",
            type: "multiple",
            options: [
              "Focus on customers",
              "Focus on product instead of customer needs",
              "Focus on profits",
              "Focus on advertising",
            ],
            correctAnswer: "Focus on product instead of customer needs",
            shuffle: true,
          },
          {
            question: "Which is NOT a cause of marketing myopia?",
            type: "multiple",
            options: [
              "Product orientation",
              "Long-term focus",
              "Lack of customer understanding",
              "Complacency",
            ],
            correctAnswer: "Long-term focus",
            shuffle: true,
          },
          {
            question: "Short-term focus leads to:",
            type: "multiple",
            options: [
              "Customer loyalty",
              "Marketing myopia",
              "Innovation",
              "Cost reduction",
            ],
            correctAnswer: "Marketing myopia",
            shuffle: true,
          },
          {
            question: "Marketing orientation focuses on:",
            type: "multiple",
            options: ["Product", "Customer", "Cost", "Sales"],
            correctAnswer: "Customer",
            shuffle: true,
          },
          {
            question: "The correct goal is:",
            type: "multiple",
            options: [
              "Sell what we make",
              "Make what customers need",
              "Reduce costs",
              "Increase ads",
            ],
            correctAnswer: "Make what customers need",
            shuffle: true,
          },
          {
            question: "Avoiding marketing myopia requires:",
            type: "multiple",
            options: [
              "Product focus",
              "Customer needs focus",
              "Cost reduction",
              "Mass production",
            ],
            correctAnswer: "Customer needs focus",
            shuffle: true,
          },
          {
            question: "Innovation should happen:",
            type: "multiple",
            options: [
              "After competitors",
              "Before competitors",
              "Only when needed",
              "Rarely",
            ],
            correctAnswer: "Before competitors",
            shuffle: true,
          },
          {
            question: "Selling concept assumes:",
            type: "multiple",
            options: [
              "Customers buy automatically",
              "Customers need persuasion",
              "Customers prefer quality",
              "Customers prefer value",
            ],
            correctAnswer: "Customers need persuasion",
            shuffle: true,
          },
          {
            question: "Selling concept focuses on:",
            type: "multiple",
            options: [
              "Customer needs",
              "Making every possible sale",
              "Innovation",
              "Value creation",
            ],
            correctAnswer: "Making every possible sale",
            shuffle: true,
          },
          {
            question: "Selling concept is:",
            type: "multiple",
            options: [
              "Customer-oriented",
              "Inside-out approach",
              "Market-driven",
              "Long-term",
            ],
            correctAnswer: "Inside-out approach",
            shuffle: true,
          },
          {
            question: "Marketing concept is:",
            type: "multiple",
            options: [
              "Inside-out",
              "Outside-in",
              "Cost-driven",
              "Production-driven",
            ],
            correctAnswer: "Outside-in",
            shuffle: true,
          },
          {
            question: "Marketing concept depends on:",
            type: "multiple",
            options: [
              "Production",
              "Knowing customer needs",
              "Selling effort",
              "Price strategy",
            ],
            correctAnswer: "Knowing customer needs",
            shuffle: true,
          },
          {
            question: "Societal marketing concept includes:",
            type: "multiple",
            options: [
              "Profit only",
              "Society welfare",
              "Cost reduction",
              "Distribution",
            ],
            correctAnswer: "Society welfare",
            shuffle: true,
          },
          {
            question: "Societal marketing balances:",
            type: "multiple",
            options: [
              "Cost and profit",
              "Customer, company, society",
              "Product and price",
              "Demand and supply",
            ],
            correctAnswer: "Customer, company, society",
            shuffle: true,
          },
          {
            question:
              "A company aligns its internal strengths with external opportunities to achieve long-term success. This describes:",
            type: "multiple",
            options: [
              "Operational planning",
              "Strategic planning",
              "Tactical execution",
              "Financial control",
            ],
            correctAnswer: "Strategic planning",
            shuffle: true,
          },
          {
            question:
              "Which activity is performed at the corporate level of strategic planning?",
            type: "multiple",
            options: [
              "Advertising campaigns",
              "Pricing decisions",
              "Defining the company mission",
              "Sales promotions",
            ],
            correctAnswer: "Defining the company mission",
            shuffle: true,
          },
          {
            question:
              "A firm asks: 'Who is the customer?' This question is part of:",
            type: "multiple",
            options: [
              "Goal setting",
              "Portfolio analysis",
              "Mission development",
              "Budgeting",
            ],
            correctAnswer: "Mission development",
            shuffle: true,
          },
          {
            question:
              "A mission that focuses only on internal operations is considered:",
            type: "multiple",
            options: [
              "Well-defined",
              "Customer-oriented",
              "Narrow and incomplete",
              "Strategic",
            ],
            correctAnswer: "Narrow and incomplete",
            shuffle: true,
          },
          {
            question: "Which statement best represents an objective?",
            type: "multiple",
            options: [
              "Increase sales by 10% next year",
              "Improve customer satisfaction",
              "Launch product in 3 months",
              "Reach 100K followers",
            ],
            correctAnswer: "Increase sales by 10% next year",
            shuffle: true,
          },
          {
            question: "Which of the following is a properly defined goal?",
            type: "multiple",
            options: [
              "Improve brand image",
              "Increase awareness",
              "Grow Instagram followers to 75,000 by June 2026",
              "Expand business",
            ],
            correctAnswer: "Grow Instagram followers to 75,000 by June 2026",
            shuffle: true,
          },
          {
            question:
              "A goal that lacks measurability fails which SMART criterion?",
            type: "multiple",
            options: ["Specific", "Measurable", "Relevant", "Time-bound"],
            correctAnswer: "Measurable",
            shuffle: true,
          },
          {
            question:
              "A company sets a goal beyond its available resources. This violates:",
            type: "multiple",
            options: ["Specific", "Achievable", "Relevant", "Time-bound"],
            correctAnswer: "Achievable",
            shuffle: true,
          },
          {
            question:
              "A company increases its NPS significantly. This most likely indicates:",
            type: "multiple",
            options: [
              "Reduced costs",
              "Higher customer loyalty",
              "Increased production",
              "Lower competition",
            ],
            correctAnswer: "Higher customer loyalty",
            shuffle: true,
          },
          {
            question: "Which group negatively impacts NPS?",
            type: "multiple",
            options: ["Promoters", "Passives", "Detractors", "Stakeholders"],
            correctAnswer: "Detractors",
            shuffle: true,
          },
          {
            question:
              "A company manages multiple industries and product lines. This is known as:",
            type: "multiple",
            options: ["SBU", "Portfolio", "Market segmentation", "Positioning"],
            correctAnswer: "Portfolio",
            shuffle: true,
          },
          {
            question: "An SBU is best described as:",
            type: "multiple",
            options: [
              "A temporary project",
              "A customer segment",
              "A semi-independent division with its own strategy",
              "A financial unit",
            ],
            correctAnswer: "A semi-independent division with its own strategy",
            shuffle: true,
          },
          {
            question:
              "Which characteristic ensures that each SBU is accountable for performance?",
            type: "multiple",
            options: [
              "Shared objectives",
              "Centralized control",
              "Separate financial tracking",
              "Common competitors",
            ],
            correctAnswer: "Separate financial tracking",
            shuffle: true,
          },
          {
            question: "Portfolio analysis helps firms decide:",
            type: "multiple",
            options: [
              " Hiring policies",
              "Which businesses to invest in",
              "Daily operations",
              "Employee salaries",
            ],
            correctAnswer: "Which businesses to invest in",
            shuffle: true,
          },
          {
            question:
              "A product dominates a fast-growing market but requires continuous investment. It is:",
            type: "multiple",
            options: ["Dog", "Cash Cow", "Star", "Question Mark"],
            correctAnswer: "Star",
            shuffle: true,
          },
          {
            question:
              "A mature product generating steady revenue with minimal investment is:",
            type: "multiple",
            options: ["Star", "Cash Cow", "Dog", "Question Mark"],
            correctAnswer: "Cash Cow",
            shuffle: true,
          },
          {
            question:
              "A product in a high-growth market but with weak market share is:",
            type: "multiple",
            options: ["Star", "Dog", "Cash Cow", "Question Mark"],
            correctAnswer: "Question Mark",
            shuffle: true,
          },
          {
            question:
              "A product with low growth and weak position should typically be:",
            type: "multiple",
            options: [
              "Expanded",
              "Heavily invested in",
              "Divested",
              "Promoted",
            ],
            correctAnswer: "Divested",
            shuffle: true,
          },
          {
            question: "The Ansoff Matrix is primarily used to:",
            type: "multiple",
            options: [
              "Analyze costs",
              "Identify growth strategies",
              "Measure performance",
              "Manage HR",
            ],
            correctAnswer: "Identify growth strategies",
            shuffle: true,
          },
          {
            question: "Entering a new country with existing products is:",
            type: "multiple",
            options: [
              "Diversification",
              "Product Development",
              "Market Development",
              "Penetration",
            ],
            correctAnswer: "Market Development",
            shuffle: true,
          },
          {
            question: "Launch a new product for current customers reflects:",
            type: "multiple",
            options: [
              "Market Development",
              "Product Development",
              "Diversification",
              "Penetration",
            ],
            correctAnswer: "Product Development",
            shuffle: true,
          },
          {
            question: "Entering a completely new market with a new product is:",
            type: "multiple",
            options: [
              "Penetration",
              "Development",
              "Diversification",
              "Expansion",
            ],
            correctAnswer: "Diversification",
            shuffle: true,
          },
          {
            question: "Which strategy involves the lowest risk?",
            type: "multiple",
            options: [
              "Diversification",
              "Product Development",
              "Market Development",
              "Market Penetration",
            ],
            correctAnswer: "Market Penetration",
            shuffle: true,
          },
          {
            question:
              "A company increases sales through discounts and promotions. This is:",
            type: "multiple",
            options: [
              "Product Development",
              "Diversification",
              "Market Penetration",
              "Market Development",
            ],
            correctAnswer: "Market Penetration",
            shuffle: true,
          },
          {
            question:
              "Which strategy involves moderate risk due to unfamiliar markets?",
            type: "multiple",
            options: [
              "Penetration",
              "Market Development",
              "Diversification",
              "Cash Cow strategy",
            ],
            correctAnswer: "Market Development",
            shuffle: true,
          },
          {
            question: "Which strategy focuses on innovation and R&D?",
            type: "multiple",
            options: [
              "Penetration",
              "Market Development",
              "Product Development",
              "Diversification",
            ],
            correctAnswer: "Product Development",
            shuffle: true,
          },
          {
            question: "Using profits from one SBU to support another reflects:",
            type: "multiple",
            options: [
              "Portfolio analysis",
              "Market penetration",
              "Diversification",
              "Segmentation",
            ],
            correctAnswer: "Portfolio analysis",
            shuffle: true,
          },
          {
            question: "Which case reflects poor strategic planning?",
            type: "multiple",
            options: [
              "Goals derived from mission",
              "Objectives aligned with vision",
              "Goals unrelated to mission",
              "Portfolio analysis",
            ],
            correctAnswer: "Goals unrelated to mission",
            shuffle: true,
          },
          {
            question: "Which level develops marketing strategies?",
            type: "multiple",
            options: ["Corporate", "Financial", "Business/Product level", "HR"],
            correctAnswer: "Business/Product level",
            shuffle: true,
          },
          {
            question:
              "A company fails because it ignores market opportunities despite strong capabilities. This violates:",
            type: "multiple",
            options: [
              "SMART goals",
              "Portfolio analysis",
              "Strategic fit",
              "Diversification",
            ],
            correctAnswer: "Strategic fit",
            shuffle: true,
          },
          {
            question:
              "Which of the following best defines a business model in a company?",
            type: "multiple",
            options: [
              "A plan outlining how a company generates profit",
              "A marketing communication strategy",
              "A description of the organizational hierarchy",
              "A set of accounting procedures",
            ],
            correctAnswer: "A plan outlining how a company generates profit",
            shuffle: true,
          },
          {
            question:
              "What is the primary purpose of business model design within an organization?",
            type: "multiple",
            options: [
              "Managing employee salaries",
              "Determining legal ownership structure",
              "Providing a framework for strategic decisions and structure",
              "Controlling government regulations",
            ],
            correctAnswer:
              "Providing a framework for strategic decisions and structure",
            shuffle: true,
          },
          {
            question:
              "Which of the following is NOT considered a key importance of a business model?",
            type: "multiple",
            options: [
              "Creating value for customers",
              "Attracting potential investors",
              "Managing operational costs",
              "Eliminating market competition",
            ],
            correctAnswer: "Eliminating market competition",
            shuffle: true,
          },
          {
            question:
              "How does a business model contribute to maintaining competitiveness in a dynamic market?",
            type: "multiple",
            options: [
              "Reducing customer engagement",
              "Avoiding innovation",
              "Adapting to market changes",
              "Fixing prices permanently",
            ],
            correctAnswer: "Adapting to market changes",
            shuffle: true,
          },
          {
            question:
              "In the context of business models, scalability refers to:",
            type: "multiple",
            options: [
              "Hiring more employees only",
              "Reducing product quality",
              "Increasing operational complexity",
              "The ability to grow without proportional increases in cost",
            ],
            correctAnswer:
              "The ability to grow without proportional increases in cost",
            shuffle: true,
          },
          {
            question:
              "Which of the following elements is NOT included in the Business Model Canvas?",
            type: "multiple",
            options: [
              "Key Partners",
              "Government Policies",
              "Customer Segments",
              "Revenue Streams",
            ],
            correctAnswer: "Government Policies",
            shuffle: true,
          },
          {
            question:
              "Which of the following is an example of a Key Partner in a business model?",
            type: "multiple",
            options: [
              "Strategic alliances with other firms",
              "Marketing campaigns",
              "Customer feedback systems",
              "Internal employees",
            ],
            correctAnswer: "Strategic alliances with other firms",
            shuffle: true,
          },
          {
            question:
              "Why do companies typically form joint ventures as part of their business model?",
            type: "multiple",
            options: [
              "To eliminate suppliers",
              "To pursue specific projects or new opportunities",
              "To reduce employee workload",
              "To increase fixed operational costs",
            ],
            correctAnswer: "To pursue specific projects or new opportunities",
            shuffle: true,
          },
          {
            question:
              "What is the main role of distribution partnerships in a business model?",
            type: "multiple",
            options: [
              "Improving production efficiency",
              "Increasing intellectual property",
              "Helping the company reach its customers",
              "Reducing financial investments",
            ],
            correctAnswer: "Helping the company reach its customers",
            shuffle: true,
          },
          {
            question:
              "Which of the following activities is NOT classified as a Key Activity in a business model?",
            type: "multiple",
            options: [
              "Production processes",
              "Tax auditing",
              "Platform or network management",
              "Problem-solving and innovation",
            ],
            correctAnswer: "Tax auditing",
            shuffle: true,
          },
          {
            question:
              "In a business model, research and development (R&D) activities are categorized under:",
            type: "multiple",
            options: [
              "Financial management",
              "Distribution",
              "Production",
              "Problem-solving activities",
            ],
            correctAnswer: "Problem-solving activities",
            shuffle: true,
          },
          {
            question:
              "What is the purpose of differentiating activities in a business model?",
            type: "multiple",
            options: [
              "Eliminating customer relationships",
              "Reducing innovation",
              "Creating unique advantages over competitors",
              "Making the company identical to competitors",
            ],
            correctAnswer: "Creating unique advantages over competitors",
            shuffle: true,
          },
          {
            question:
              "Which of the following is NOT considered a type of key resource?",
            type: "multiple",
            options: [
              "Financial resources",
              "Human resources",
              "Advertising channels",
              "Intellectual resources",
            ],
            correctAnswer: "Advertising channels",
            shuffle: true,
          },
          {
            question:
              "Patents, trademarks, and proprietary knowledge are examples of:",
            type: "multiple",
            options: [
              "Financial resources",
              "Intellectual resources",
              "Human resources",
              "Physical resources",
            ],
            correctAnswer: "Intellectual resources",
            shuffle: true,
          },
          {
            question:
              "Which of the following best represents human resources in a business model?",
            type: "multiple",
            options: [
              "Machinery and equipment",
              "Distribution networks",
              "Investment capital",
              "Skilled employees and management team",
            ],
            correctAnswer: "Skilled employees and management team",
            shuffle: true,
          },
          {
            question:
              "What is the primary purpose of financial reserves in a business?",
            type: "multiple",
            options: [
              "Hiring additional staff",
              "Supporting product innovation",
              "Handling unexpected expenses and cash flow issues",
              "Increasing marketing activities",
            ],
            correctAnswer: "Handling unexpected expenses and cash flow issues",
            shuffle: true,
          },
          {
            question:
              "The value proposition of a company primarily answers which question?",
            type: "multiple",
            options: [
              "Who owns the company?",
              "What value is delivered to customers?",
              "Where the company operates?",
              "How much profit is generated?",
            ],
            correctAnswer: "What value is delivered to customers?",
            shuffle: true,
          },
          {
            question:
              "Customer relationships in a business model focus mainly on:",
            type: "multiple",
            options: [
              "Legal compliance",
              "Managing production",
              "Interacting and maintaining relationships with customers",
              "Reducing costs",
            ],
            correctAnswer:
              "Interacting and maintaining relationships with customers",
            shuffle: true,
          },
          {
            question:
              "Which of the following is NOT considered a delivery channel in a business model?",
            type: "multiple",
            options: [
              "Manufacturing processes",
              "Direct sales",
              "Online platforms",
              "Indirect sales through intermediaries",
            ],
            correctAnswer: "Manufacturing processes",
            shuffle: true,
          },
          {
            question: "What is meant by indirect sales channels?",
            type: "multiple",
            options: [
              "Selling directly to customers",
              "Internal company transactions",
              "Free product distribution",
              "Selling through intermediaries such as retailers or distributors",
            ],
            correctAnswer:
              "Selling through intermediaries such as retailers or distributors",
            shuffle: true,
          },
          {
            question: "A niche market is best described as:",
            type: "multiple",
            options: [
              "A highly specific group with unique needs",
              "Randomly selected customers",
              "Government institutions only",
              "A large, general customer base",
            ],
            correctAnswer: "A highly specific group with unique needs",
            shuffle: true,
          },
          {
            question: "A mass market strategy focuses on:",
            type: "multiple",
            options: [
              "High-income individuals only",
              "A broad group of customers with similar needs",
              "Small customer segments",
              "Specialized markets only",
            ],
            correctAnswer: "A broad group of customers with similar needs",
            shuffle: true,
          },
          {
            question: "The cost structure of a business includes:",
            type: "multiple",
            options: [
              "Only marketing costs",
              "Only fixed costs",
              "Both fixed and variable costs",
              "Only variable costs",
            ],
            correctAnswer: "Both fixed and variable costs",
            shuffle: true,
          },
          {
            question: "What does the concept of economies of scale refer to?",
            type: "multiple",
            options: [
              "Increasing costs with production",
              "Decreasing demand",
              "Decreasing costs as production increases",
              "Increasing competition",
            ],
            correctAnswer: "Decreasing costs as production increases",
            shuffle: true,
          },
          {
            question: "Which of the following is NOT a type of revenue stream?",
            type: "multiple",
            options: [
              "Subscription fees",
              "Employee wages",
              "Licensing",
              "Asset sales",
            ],
            correctAnswer: "Employee wages",
            shuffle: true,
          },
          {
            question: "A usage fee revenue model charges customers based on:",
            type: "multiple",
            options: [
              "Brand reputation",
              "Level of product or service usage",
              "Ownership",
              "Time spent working",
            ],
            correctAnswer: "Level of product or service usage",
            shuffle: true,
          },
          {
            question: "What characterizes a subscription-based revenue model?",
            type: "multiple",
            options: [
              "Free services",
              "Product exchange",
              "One-time payment",
              "Recurring payment for continuous access",
            ],
            correctAnswer: "Recurring payment for continuous access",
            shuffle: true,
          },
          {
            question: "Licensing as a revenue stream allows a company to:",
            type: "multiple",
            options: [
              "Reduce production costs",
              "Sell physical products",
              "Hire employees",
              "Allow others to use its intellectual property for a fee",
            ],
            correctAnswer:
              "Allow others to use its intellectual property for a fee",
            shuffle: true,
          },
          {
            question: "Channels in a business model are primarily used for:",
            type: "multiple",
            options: [
              "Employee management",
              "Communication, distribution, and marketing",
              "Financial auditing",
              "Production only",
            ],
            correctAnswer: "Communication, distribution, and marketing",
            shuffle: true,
          },
          {
            question: "A well-designed business model contributes to:",
            type: "multiple",
            options: [
              "Reduced efficiency",
              "Increased operational risk only",
              "Sustainable long-term success",
              "Short-term instability",
            ],
            correctAnswer: "Sustainable long-term success",
            shuffle: true,
          },
          {
            question:
              "What is the main difference between SWOT and TOWS analysis?",
            type: "multiple",
            options: [
              "SWOT matches internal and external factors while TOWS identifies them",
              "TOWS transforms analysis into actionable strategies",
              "SWOT is used only for marketing",
              "SWOT focuses on execution while TOWS focuses on description",
            ],
            correctAnswer:
              "TOWS transforms analysis into actionable strategies",
            shuffle: true,
          },
          {
            question: "Which of the following best describes SWOT analysis?",
            type: "multiple",
            options: [
              "A financial forecasting method",
              "A customer segmentation technique",
              "A situational analysis identifying internal and external factors",
              "A strategy implementation tool",
            ],
            correctAnswer:
              "A situational analysis identifying internal and external factors",
            shuffle: true,
          },
          {
            question:
              "In TOWS analysis, combining strengths with opportunities results in:",
            type: "multiple",
            options: [
              "Cost reduction strategies",
              "Growth strategies",
              "Defensive strategies",
              "Risk avoidance strategies",
            ],
            correctAnswer: "Growth strategies",
            shuffle: true,
          },
          {
            question: "WT strategies in TOWS aim to:",
            type: "multiple",
            options: [
              "Improve internal processes only",
              "Focus on opportunities only",
              "Minimize weaknesses and avoid threats",
              "Maximize strengths",
            ],
            correctAnswer: "Minimize weaknesses and avoid threats",
            shuffle: true,
          },
          {
            question: "The TOWS matrix primarily helps organizations to:",
            type: "multiple",
            options: [
              "Translate analysis into strategic actions",
              "Analyze financial data",
              "Improve employee performance",
              "Reduce operational costs",
            ],
            correctAnswer: "Translate analysis into strategic actions",
            shuffle: true,
          },
          {
            question: "Which question does strategic planning answer?",
            type: "multiple",
            options: [
              "What are customer needs?",
              "How do we improve processes?",
              "Where are we going?",
              "How do we reduce costs?",
            ],
            correctAnswer: "Where are we going?",
            shuffle: true,
          },
          {
            question: "Six Sigma mainly answers which question?",
            type: "multiple",
            options: [
              "Where are we going?",
              "Who are our competitors?",
              "How do we get there?",
              "What is our mission?",
            ],
            correctAnswer: "How do we get there?",
            shuffle: true,
          },
          {
            question: "What is Six Sigma primarily considered?",
            type: "multiple",
            options: [
              "A marketing strategy",
              "A data-driven process improvement methodology",
              "A financial model",
              "A strategic vision",
            ],
            correctAnswer: "A data-driven process improvement methodology",
            shuffle: true,
          },
          {
            question: "Six Sigma focuses on improving processes by:",
            type: "multiple",
            options: [
              "Increasing complexity",
              "Eliminating customers",
              "Reducing errors and variation",
              "Increasing costs",
            ],
            correctAnswer: "Reducing errors and variation",
            shuffle: true,
          },
          {
            question: "Who introduced Six Sigma?",
            type: "multiple",
            options: ["Peter Drucker", "Elon Musk", "Bill Smith", "Henry Ford"],
            correctAnswer: "Bill Smith",
            shuffle: true,
          },
          {
            question: "DMAIC is used when:",
            type: "multiple",
            options: [
              "Launching a new product",
              "Improving an existing process",
              "Designing a new process",
              "Entering a new market",
            ],
            correctAnswer: "Improving an existing process",
            shuffle: true,
          },
          {
            question: "DMADV is most appropriate when:",
            type: "multiple",
            options: [
              "Improving operational efficiency",
              "Reducing marketing costs",
              "Designing a new product or process",
              "Fixing defects in existing processes",
            ],
            correctAnswer: "Designing a new product or process",
            shuffle: true,
          },
          {
            question: "The first step in DMAIC is:",
            type: "multiple",
            options: ["Improve", "Define", "Measure", "Analyze"],
            correctAnswer: "Define",
            shuffle: true,
          },
          {
            question: "Which phase of DMAIC focuses on collecting data?",
            type: "multiple",
            options: ["Improve", "Measure", "Define", "Control"],
            correctAnswer: "Measure",
            shuffle: true,
          },
          {
            question: "Root cause identification is part of which DMAIC phase?",
            type: "multiple",
            options: ["Control", "Improve", "Analyze", "Define"],
            correctAnswer: "Analyze",
            shuffle: true,
          },
          {
            question:
              "Which DMAIC phase ensures sustainability of improvements?",
            type: "multiple",
            options: ["Analyze", "Control", "Measure", "Improve"],
            correctAnswer: "Control",
            shuffle: true,
          },
          {
            question:
              "In the marketing example, the key performance metric (Y) is:",
            type: "multiple",
            options: [
              "Bounce rate",
              "Click-through rate",
              "Conversion rate",
              "Open rate",
            ],
            correctAnswer: "Conversion rate",
            shuffle: true,
          },
          {
            question: "A major drop-off in the funnel occurred at which stage?",
            type: "multiple",
            options: [
              "Checkout completed",
              "Email received",
              "Landing page loaded",
              "Link clicked",
            ],
            correctAnswer: "Landing page loaded",
            shuffle: true,
          },
          {
            question: "What was identified as a technical root cause?",
            type: "multiple",
            options: [
              "Weak branding",
              "Poor email subject lines",
              "Slow-loading landing pages",
              "High product prices",
            ],
            correctAnswer: "Slow-loading landing pages",
            shuffle: true,
          },
          {
            question:
              "Personalization issues mainly affected which customer group?",
            type: "multiple",
            options: [
              "VIP customers",
              "New customers",
              "Returning customers",
              "All customers equally",
            ],
            correctAnswer: "New customers",
            shuffle: true,
          },
          {
            question: "What improvement method was used to test solutions?",
            type: "multiple",
            options: [
              "Forecasting",
              "Cost analysis",
              "A/B testing",
              "Benchmarking",
            ],
            correctAnswer: "A/B testing",
            shuffle: true,
          },
          {
            question: "What was the result of the improved test group?",
            type: "multiple",
            options: [
              "Conversion rate decreased",
              "Conversion rate exceeded target",
              "No change",
              "Revenue declined",
            ],
            correctAnswer: "Conversion rate exceeded target",
            shuffle: true,
          },
          {
            question: "What is the main goal of the Control phase?",
            type: "multiple",
            options: [
              "Sustain improvements",
              "Define problems",
              "Generate ideas",
              "Analyze data",
            ],
            correctAnswer: "Sustain improvements",
            shuffle: true,
          },
          {
            question: "Which of the following is part of control mechanisms?",
            type: "multiple",
            options: [
              "Product design",
              "Market segmentation",
              "Monitoring dashboards",
              "Brainstorming",
            ],
            correctAnswer: "Monitoring dashboards",
            shuffle: true,
          },
          {
            question: "In DMADV, CTQs refer to:",
            type: "multiple",
            options: [
              "Customer tracking queries",
              "Cost-to-quality ratios",
              "Critical-to-Quality requirements",
              "Customer transaction quantities",
            ],
            correctAnswer: "Critical-to-Quality requirements",
            shuffle: true,
          },
          {
            question: "Which of the following is an example of a CTQ?",
            type: "multiple",
            options: [
              "Number of employees",
              "Market share",
              "App load time < 2 seconds",
              "Company profit",
            ],
            correctAnswer: "App load time < 2 seconds",
            shuffle: true,
          },
          {
            question:
              "Which method is used to compare design alternatives in DMADV?",
            type: "multiple",
            options: [
              "Budgeting",
              "SWOT analysis",
              "Trade-off analysis",
              "Forecasting",
            ],
            correctAnswer: "Trade-off analysis",
            shuffle: true,
          },
          {
            question: "What is the purpose of the Design phase in DMADV?",
            type: "multiple",
            options: [
              "Analyze competitors",
              "Identify problems",
              "Build detailed solutions and prototypes",
              "Reduce costs",
            ],
            correctAnswer: "Build detailed solutions and prototypes",
            shuffle: true,
          },
          {
            question: "What is the purpose of the Validate phase?",
            type: "multiple",
            options: [
              "Define customer needs",
              "Test and verify before launch",
              "Generate ideas",
              "Collect data",
            ],
            correctAnswer: "Test and verify before launch",
            shuffle: true,
          },
          {
            question: "What was the final outcome of the DMADV example?",
            type: "multiple",
            options: [
              "Process redesign",
              "Approved full launch",
              "Partial implementation",
              "Project failure",
            ],
            correctAnswer: "Approved full launch",
            shuffle: true,
          },
          {
            question:
              "Which of the following best defines a Minimum Viable Product (MVP)?",
            type: "multiple",
            options: [
              "A product with the lowest possible cost",
              "A product with all features removed except one",
              "The simplest version that delivers core value and enables feedback",
              "A prototype not intended for users",
            ],
            correctAnswer:
              "The simplest version that delivers core value and enables feedback",
            shuffle: true,
          },
          {
            question: "The 'Minimum' in MVP refers to:",
            type: "multiple",
            options: [
              "Minimum development time",
              "Minimum cost only",
              "Smallest set of features solving the core problem",
              "Minimum number of users",
            ],
            correctAnswer: "Smallest set of features solving the core problem",
            shuffle: true,
          },
          {
            question: "The 'Viable' aspect of MVP ensures that the product:",
            type: "multiple",
            options: [
              "Is fully developed",
              "Has advanced features",
              "Can deliver meaningful value to users",
              "Has no defects",
            ],
            correctAnswer: "Can deliver meaningful value to users",
            shuffle: true,
          },
          {
            question: "Which of the following best describes 'Product' in MVP?",
            type: "multiple",
            options: [
              "A concept only",
              "A complete, usable system for user interaction",
              "A marketing plan",
              "A prototype without testing",
            ],
            correctAnswer: "A complete, usable system for user interaction",
            shuffle: true,
          },
          {
            question: "Which of the following is NOT a purpose of MVP?",
            type: "multiple",
            options: [
              "Reduce financial risk",
              "Validate market viability",
              "Eliminate customer feedback",
              "Accelerate learning",
            ],
            correctAnswer: "Eliminate customer feedback",
            shuffle: true,
          },
          {
            question: "Reducing financial risk using MVP is achieved by:",
            type: "multiple",
            options: [
              "Increasing investment early",
              "Entering the market with minimal budget",
              "Avoiding testing",
              "Hiring more developers",
            ],
            correctAnswer: "Entering the market with minimal budget",
            shuffle: true,
          },
          {
            question: "MVP helps minimize waste by:",
            type: "multiple",
            options: [
              "Building full products faster",
              "Avoiding unnecessary features",
              "Increasing development complexity",
              "Ignoring user needs",
            ],
            correctAnswer: "Avoiding unnecessary features",
            shuffle: true,
          },
          {
            question: "Validated learning in MVP is based on:",
            type: "multiple",
            options: [
              "Assumptions",
              "Internal opinions",
              "Real customer actions",
              "Market predictions",
            ],
            correctAnswer: "Real customer actions",
            shuffle: true,
          },
          {
            question:
              "Which of the following best explains product-market fit?",
            type: "multiple",
            options: [
              "Matching price with competitors",
              "Aligning product with customer needs",
              "Increasing production speed",
              "Reducing marketing costs",
            ],
            correctAnswer: "Aligning product with customer needs",
            shuffle: true,
          },
          {
            question: "MVP helps identify the right audience by:",
            type: "multiple",
            options: [
              "Random selection",
              "Market guessing",
              "Real-world adoption data",
              "Internal testing",
            ],
            correctAnswer: "Real-world adoption data",
            shuffle: true,
          },
          {
            question: "Which step comes first when building an MVP?",
            type: "multiple",
            options: [
              "Build",
              "Measure",
              "Identify business need",
              "Select MVP approach",
            ],
            correctAnswer: "Identify business need",
            shuffle: true,
          },
          {
            question: "Analyzing product hypothesis includes:",
            type: "multiple",
            options: [
              "Ignoring competitors",
              "Understanding customer needs",
              "Increasing production",
              "Reducing costs",
            ],
            correctAnswer: "Understanding customer needs",
            shuffle: true,
          },
          {
            question: "Which question is NOT part of MVP idea validation?",
            type: "multiple",
            options: [
              "What benefit does the product provide?",
              "How customers access the product?",
              "What is the company profit margin?",
              "How users gain value",
            ],
            correctAnswer: "What is the company profit margin?",
            shuffle: true,
          },
          {
            question: "Which of the following is an MVP approach?",
            type: "multiple",
            options: [
              "Market expansion",
              "Product Mockup MVP",
              "Cost leadership",
              "Financial planning",
            ],
            correctAnswer: "Product Mockup MVP",
            shuffle: true,
          },
          {
            question: "No-Product MVP focuses on:",
            type: "multiple",
            options: [
              "Building a full system",
              "Testing ideas without building",
              "Selling final products",
              "Improving operations",
            ],
            correctAnswer: "Testing ideas without building",
            shuffle: true,
          },
          {
            question: "Pre-selling in MVP is used to:",
            type: "multiple",
            options: [
              "Reduce cost",
              "Test willingness to pay",
              "Improve design",
              "Increase features",
            ],
            correctAnswer: "Test willingness to pay",
            shuffle: true,
          },
          {
            question: "A landing page used to test interest is an example of:",
            type: "multiple",
            options: [
              "Product Mockup MVP",
              "No-Product MVP",
              "Single-feature MVP",
              "MLP",
            ],
            correctAnswer: "No-Product MVP",
            shuffle: true,
          },
          {
            question: "The Dropbox example demonstrates:",
            type: "multiple",
            options: [
              "Product Mockup MVP",
              "Single-feature MVP",
              "No-Product MVP",
              "MLP",
            ],
            correctAnswer: "No-Product MVP",
            shuffle: true,
          },
          {
            question: "Concierge MVP involves:",
            type: "multiple",
            options: [
              "Automation",
              "Manual service delivery",
              "No user interaction",
              "Full system development",
            ],
            correctAnswer: "Manual service delivery",
            shuffle: true,
          },
          {
            question: "Wizard of Oz MVP is characterized by:",
            type: "multiple",
            options: [
              "Full automation",
              "Hidden manual work behind automation",
              "No testing",
              "High investment",
            ],
            correctAnswer: "Hidden manual work behind automation",
            shuffle: true,
          },
          {
            question: "Airbnb's early model is an example of:",
            type: "multiple",
            options: [
              "Wizard of Oz MVP",
              "Concierge MVP",
              "Single-feature MVP",
              "MLP",
            ],
            correctAnswer: "Concierge MVP",
            shuffle: true,
          },
          {
            question: "Single-feature MVP focuses on:",
            type: "multiple",
            options: [
              "Multiple features",
              "One core feature",
              "Full system",
              "Marketing only",
            ],
            correctAnswer: "One core feature",
            shuffle: true,
          },
          {
            question: "Uber's early version is an example of:",
            type: "multiple",
            options: [
              "MLP",
              "Concierge MVP",
              "Single-feature MVP",
              "No-product MVP",
            ],
            correctAnswer: "Single-feature MVP",
            shuffle: true,
          },
          {
            question: "MLP differs from MVP because it:",
            type: "multiple",
            options: [
              "Has more features",
              "Focuses on delight and user experience",
              "Is more complex",
              "Ignores design",
            ],
            correctAnswer: "Focuses on delight and user experience",
            shuffle: true,
          },
          {
            question: "MLP aims to:",
            type: "multiple",
            options: [
              "Reduce cost only",
              "Create emotional connection with users",
              "Remove all features",
              "Avoid feedback",
            ],
            correctAnswer: "Create emotional connection with users",
            shuffle: true,
          },
          {
            question: "Instagram's early version is an example of:",
            type: "multiple",
            options: [
              "No-product MVP",
              "MLP",
              "Concierge MVP",
              "Wizard of Oz MVP",
            ],
            correctAnswer: "MLP",
            shuffle: true,
          },
          {
            question: "Prioritizing MVP features should be based on:",
            type: "multiple",
            options: [
              "Developer preference",
              "Customer needs",
              "Company size",
              "Cost only",
            ],
            correctAnswer: "Customer needs",
            shuffle: true,
          },
          {
            question: "Core features can be identified by:",
            type: "multiple",
            options: [
              "Adding more features",
              "Removing features and observing user reaction",
              "Ignoring users",
              "Increasing complexity",
            ],
            correctAnswer: "Removing features and observing user reaction",
            shuffle: true,
          },
          {
            question: "Actionable metrics include:",
            type: "multiple",
            options: [
              "Only financial data",
              "Only qualitative data",
              "Both quantitative and qualitative data",
              "Only assumptions",
            ],
            correctAnswer: "Both quantitative and qualitative data",
            shuffle: true,
          },
          {
            question: "The 'Measure and Learn' stage focuses on:",
            type: "multiple",
            options: [
              "Building features",
              "Data analysis and learning",
              "Marketing campaigns",
              "Hiring employees",
            ],
            correctAnswer: "Data analysis and learning",
            shuffle: true,
          },
        ],
      },
    ],
  },
  {
id: "maths5",
title: "Maths 5",
isSubjectGroup: true,
chapters: [
{
id: "midterm-exam-2021-2022",
title: "Midterm Exam 2021-2022",
shuffleQuestions: false,
showScore: true,
quizModeTimer: 1800,
questions: [
{
question: "A = .........................................",
type: "multiple",
image: "img/Maths5-Midterm21-22.png",
options: [
"-0.042",
"0.091",
"0.023",
"None of these"
],
correctAnswer: "0.091",
shuffle: true
},
{
question: "B = .........................................",
type: "multiple",
image: "img/Maths5-Midterm21-22.png",
options: [
"0.01",
"0.05",
"-0.01",
"None of these"
],
correctAnswer: "0.01",
shuffle: true
},
{
question: "C = .........................................",
type: "multiple",
image: "img/Maths5-Midterm21-22.png",
options: [
"-0.005",
"0.001",
"-0.001",
"None of these"
],
correctAnswer: "-0.001",
shuffle: true
},
{
question: "The interpolation polynomial obtained by Lagrange interpolation for the given data (x, y) with 6 points has degree at most",
type: "multiple",
image: "img/Maths5-Midterm21-22.png",
options: [
"6",
"3",
"5",
"4"
],
correctAnswer: "5",
shuffle: true
},
{
question: "Using Newton forward difference formula, y(0.15) ≈ ......",
type: "multiple",
image: "img/Maths5-Midterm21-22.png",
options: [
"0.0406",
"1.2356",
"0",
"0.0001"
],
correctAnswer: "0.0406",
shuffle: true
},
{
question: "Using Newton Backward difference formula, y(0.9) ≈ ......",
type: "multiple",
image: "img/Maths5-Midterm21-22.png",
options: [
"-0.4589",
"0.5858",
"0.6369",
"0.9563"
],
correctAnswer: "0.5858",
shuffle: true
},
{
question: "Using Newton forward divided difference formula, y(0) ≈ ......",
type: "multiple",
image: "img/Maths5-Midterm21-22.png",
options: [
"0.002",
"-0.002",
"0",
"None of these"
],
correctAnswer: "-0.002",
shuffle: true
},
{
question: "For the given nonlinear equation f(x) = 3x - e'^-x' = 0, a root of f(x) lies in the interval",
type: "multiple",
options: [
"[0, 1]",
"[2, 3]",
"[4, 5]",
"[-1, 0]"
],
correctAnswer: "[0, 1]",
shuffle: true
},
{
question: "For the given nonlinear equation f(x) = 3x - e'^-x' = 0, using the simple iteration method, the formula x = φ(x) which achieves the convergence condition over the root interval is",
type: "multiple",
options: [
"x = (1/3)e^-x'",
"x = -ln(3x)",
"x = (1/3)e^x",
"None of these"
],
correctAnswer: "x = (1/3)e'^-x'",
shuffle: true
},
{
question: "For the given nonlinear equation f(x) = 3x - e'^-x' = 0, the root of f(x) = 0 using simple iteration method is",
type: "multiple",
options: [
"4.2576",
"2.2576",
"-0.2576",
"0.2576"
],
correctAnswer: "0.2576",
shuffle: true
},
{
question: "m =",
type: "multiple",
image: "img/Q11Maths5-Midterm21-22.png",
options: [
"ln M",
"e'^M",
"log m",
"None of these"
],
correctAnswer: "e'^M",
shuffle: true
},
{
question: "X =",
type: "multiple",
image: "img/Q11Maths5-Midterm21-22.png",
options: [
"ln x",
"e^x",
"log mx",
"None of these"
],
correctAnswer: "ln x",
shuffle: true
},
{
question: "Σ_(i=1)^7 X_i'^2 =",
type: "multiple",
image: "img/Q11Maths5-Midterm21-22.png",
options: [
"1.4589",
"11.5261",
"6.1826",
"None of these"
],
correctAnswer: "6.1826",
shuffle: true
},
{
question: "Σ_(i=1)^7 X_i Y_i =",
type: "multiple",
image: "img/Q11Maths5-Midterm21-22.png",
options: [
"17.2358",
"10.0199",
"15.8441",
"None of these"
],
correctAnswer: "10.0199",
shuffle: true
},
{
question: "m =",
type: "multiple",
image: "img/Q11Maths5-Midterm21-22.png",
options: [
"0.1211",
"-0.2811",
"1.3858",
"None of these"
],
correctAnswer: "0.1211",
shuffle: true
},
{
question: "c =",
type: "multiple",
image: "img/Q11Maths5-Midterm21-22.png",
options: [
"1.2789",
"3.5853",
"0.5658",
"None of these"
],
correctAnswer: "3.5853",
shuffle: true
},
{
question: "The L_2 norm of error √(Σ_(r=1)^7 |y(x_r) - y_r|'^2') =",
type: "multiple",
image: "img/Q11Maths5-Midterm21-22.png",
options: [
"0.0956",
"0",
"2.0358",
"None of these"
],
correctAnswer: "0.0956",
shuffle: true
},
{
question: "Given the two curves y = e^x' - 2 and y = ln(x + 2) which intersect at (x_0, y_0), using Newton Raphson method, x_0 ∈ ......",
type: "multiple",
options: [
"[0, 1]",
"[1, 2]",
"[2, 3]",
"[3, 4]"
],
correctAnswer: "[1, 2]",
shuffle: true
},
{
question: "Given the two curves y = e'^x' - 2 and y = ln(x + 2) which intersect at (x_0, y_0), using Newton Raphson method, x_0 = ......",
type: "multiple",
options: [
"1.2789",
"3.5853",
"0.5658",
"1.1462"
],
correctAnswer: "1.1462",
shuffle: true
},
{
question: "Given the two curves y = e'^x' - 2 and y = ln(x + 2) which intersect at (x_0, y_0), using Newton Raphson method, y_0 = ......",
type: "multiple",
options: [
"1.2789",
"3.5853",
"0.5658",
"1.1462"
],
correctAnswer: "1.1462",
shuffle: true
}
]
},
{
id: "midterm-exam-2024-2025",
title: "Midterm Exam 2024-2025",
shuffleQuestions: false,
showScore: true,
quizModeTimer: 1800,
questions: [
// {
// question: "In Curve fitting process to fit the data (x_t, y_t){t=1}^n to the straight line y = a + bx, we begin with the error formula e = \sum{t=1}^{n}(y_t - b - ax_t)^2 and then using the least square method. The equation \sum_{t=1}^{n}y_t = an + b\sum_{t=1}^{n}x_t is obtained by differentiating the error formula with respect to ..........",
// type: "multiple",
// image: "img/Maths5-Midterm24-25.png",
// options: [
// "x",
// "y",
// "a",
// "b"
// ],
// correctAnswer: "a",
// shuffle: true
// },
// {
// question: "The equation \sum_{t=1}^{n}x_t y_t = a\sum_{t=1}^{n}x_t + b\sum_{t=1}^{n}x_t^2 is obtained by differentiating the error formula with respect to .........",
// type: "multiple",
// image: "img/Maths5-Midterm24-25.png",
// options: [
// "x",
// "y",
// "a",
// "b"
// ],
// correctAnswer: "b",
// shuffle: true
// },
{
question: "A = .......",
type: "multiple",
image: "img/Q3Maths5-Midterm24-25.png",
options: [
"3",
"2",
"1",
"4"
],
correctAnswer: "4",
shuffle: true
},
{
question: "B = ........",
type: "multiple",
image: "img/Q3Maths5-Midterm24-25.png",
options: [
"3.19",
"1.25",
"8.28",
"1.51"
],
correctAnswer: "8.28",
shuffle: true
},
{
question: "L_2 norm of error = .......",
type: "multiple",
image: "img/Q3Maths5-Midterm24-25.png",
options: [
"0.532",
"0.236",
"0.789",
"None of these"
],
correctAnswer: "0.532",
shuffle: true
},
{
question: "Use the obtained curve to approximate y'(\pi/4)",
type: "multiple",
image: "img/Q3Maths5-Midterm24-25.png",
options: [
"0",
"0.25",
"8.28",
"1.526"
],
correctAnswer: "8.28",
shuffle: true
},
{
question: "A:",
type: "multiple",
image: "img/Q7Maths5-Midterm24-25.png",
options: [
"-0.042",
"0.134",
"0.091",
"None of these"
],
correctAnswer: "0.134",
shuffle: true
},
{
question: "B:",
type: "multiple",
image: "img/Q7Maths5-Midterm24-25.png",
options: [
"0.012",
"0.05",
"-0.01",
"None of these"
],
correctAnswer: "0.012",
shuffle: true
},
{
question: "C:",
type: "multiple",
image: "img/Q7Maths5-Midterm24-25.png",
options: [
"-0.005",
"0.001",
"-0.001",
"None of these"
],
correctAnswer: "-0.001",
shuffle: true
},
{
question: "The polynomial obtained by Lagrange formula for the data (x, y) has degree at most",
type: "multiple",
image: "img/Q7Maths5-Midterm24-25.png",
options: [
"6",
"3",
"5",
"4"
],
correctAnswer: "5",
shuffle: true
},
{
question: "y(0.15) =......",
type: "multiple",
image: "img/Q7Maths5-Midterm24-25.png",
options: [
"0.0406",
"1.2356",
"0",
"0.0001"
],
correctAnswer: "0.0406",
shuffle: true
},
{
question: "y(0.9) =.....",
type: "multiple",
image: "img/Q7Maths5-Midterm24-25.png",
options: [
"-0.4589",
"0.5858",
"0.6369",
"0.9563"
],
correctAnswer: "0.5858",
shuffle: true
},
{
question: "y(0) =......",
type: "multiple",
image: "img/Q7Maths5-Midterm24-25.png",
options: [
"0.002",
"-0.002",
"0",
"None of these"
],
correctAnswer: "-0.002",
shuffle: true
},
{
question: "The convergence condition for the successive iterations is",
type: "multiple",
image: "img/Q14Maths5-Midterm24-25.png",
options: [
"| (f(x) f''(x)) / (f'(x))^2 | > 1 no",
"| (f'(x) f''(x)) / (f'(x))^2 | < 1 yes",
"| (f(x) f''(x)) / (f'(x))^2 | < 1 no",
"| (f(x) f''(x)) / f'(x) | < 1 yes"
],
correctAnswer: "| (f(x) f''(x)) / (f'(x))^2 | < 1 no",
shuffle: true
},
{
question: "The smallest positive root of the equation lies in the interval",
type: "multiple",
image: "img/Q14Maths5-Midterm24-25.png",
options: [
"[3, 3.5]",
"[0, 1]",
"[1.5, 2.5]",
"[4, 5.5]"
],
correctAnswer: "[3, 3.5]",
shuffle: true
},
{
question: "The smallest positive root of the equation correct to 4 decimal places is x = .....",
type: "multiple",
image: "img/Q14Maths5-Midterm24-25.png",
options: [
"3.2827",
"0.5369",
"1.9586",
"5.1430"
],
correctAnswer: "3.2827",
shuffle: true
},
{
question: "A = .......",
type: "multiple",
image: "img/Q17Maths5-Midterm24-25.png",
options: [
"1/2",
"-1/2",
"1",
"2"
],
correctAnswer: "-1/2",
shuffle: true
},
{
question: "B = .......",
type: "multiple",
image: "img/Q17Maths5-Midterm24-25.png",
options: [
"9/2",
"7/2",
"-9/2",
"-7/2"
],
correctAnswer: "9/2",
shuffle: true
},
{
question: "C = .......",
type: "multiple",
image: "img/Q17Maths5-Midterm24-25.png",
options: [
"-2",
"2",
"4",
"-4"
],
correctAnswer: "-4",
shuffle: true
},
{
question: "P(0) = .......",
type: "multiple",
image: "img/Q17Maths5-Midterm24-25.png",
options: [
"-2",
"2",
"4",
"-4"
],
correctAnswer: "-4",
shuffle: true
}
]
},
{
id: "midterm-exam-2023-2024",
title: "Midterm Exam 2023-2024",
shuffleQuestions: false,
showScore: true,
quizModeTimer: 1800,
questions: [
{
question: "Y~ =",
type: "multiple",
image: "img/Q1Maths5-Midterm23-24.png",
options: [
"y",
"y²",
"√y",
"None of these"
],
correctAnswer: "y",
shuffle: true
},
{
question: "X~ =",
type: "multiple",
image: "img/Q1Maths5-Midterm23-24.png",
options: [
"x",
"x²",
"√x",
"None of these"
],
correctAnswer: "√x",
shuffle: true
},
{
question: "a =",
type: "multiple",
image: "img/Q1Maths5-Midterm23-24.png",
options: [
"A",
"A²",
"√A",
"None of these"
],
correctAnswer: "A²",
shuffle: true
},
{
question: "a = ......",
type: "multiple",
image: "img/Q1Maths5-Midterm23-24.png",
options: [
"16.1236",
"-3.2156",
"5.0256",
"20.002"
],
correctAnswer: "20.002",
shuffle: true
},
{
question: "b = ......",
type: "multiple",
image: "img/Q1Maths5-Midterm23-24.png",
options: [
"-4.9994",
"4.9994",
"0",
"2.0365"
],
correctAnswer: "-4.9994",
shuffle: true
},
{
question: "The polynomial which interpolates the above data has at most degree =",
type: "multiple",
image: "img/Q1Maths5-Midterm23-24.png",
options: [
"2",
"4",
"5",
"None of these"
],
correctAnswer: "4",
shuffle: true
},
{
question: "m = ......",
type: "multiple",
image: "img/Q7Maths5-Midterm23-24.png",
options: [
"a",
"1 / b",
"b",
"1 / a"
],
correctAnswer: "b",
shuffle: true
},
{
question: "The normal equations for finding p, q are",
type: "multiple",
image: "img/Q7Maths5-Midterm23-24.png",
options: [
"∑ Y_i = mn + q ∑ X_i, ∑ X_i Y_i = m ∑ X_i + q ∑ X_i²",
"∑ Y_i = qn + m ∑ X_i, ∑ X_i Y_i = m ∑ X_i + q ∑ X_i²",
"∑ my_i = qn + ∑ x_i, ∑ mX_i Y_i = q ∑ X_i + ∑ X_i²",
"∑ Y = m ∑ X_i + qn, ∑ X_i Y_i = m ∑ X_i² + q ∑ X_i³"
],
correctAnswer: "∑ Y_i = mn + q ∑ X_i, ∑ X_i Y_i = m ∑ X_i + q ∑ X_i²",
shuffle: true
},
{
question: "For the equation f(x) = e^x - 3x, use simple iteration to find the root in (1.5, 1.6). The used relation for convergence is .....",
type: "multiple",
options: [
"x_{n+1} = (1/3) e^{x_n}",
"x_{n+1} = ln(3x_n)",
"x_{n+1} = 1 / (3x_n)",
"x_{n+1} = 3 e^{x_n}"
],
correctAnswer: "x_{n+1} = ln(3x_n)",
shuffle: true
},
{
question: "For the equation f(x) = e^x - 3x, use simple iteration to find the root in (1.5, 1.6). Using the selected relation, the root correct to 4-decimal =",
type: "multiple",
options: [
"2.3610",
"1.4020",
"1.6780",
"1.5120"
],
correctAnswer: "1.5120",
shuffle: true
},
{
question: "The convergence condition for the successive iterations is",
type: "multiple",
image: "img/Q11Maths5-Midterm23-24.png",
options: [
"|(f(x)f''(x)) / (f'(x))²| > 1 no",
"|(f'(x)f''(x)) / (f'(x))²| < 1 yes",
"|(f(x)f''(x)) / (f'(x))²| < 1 no",
"|(f(x)f''(x)) / f'(x)| < 1 no"
],
correctAnswer: "|(f(x)f''(x)) / (f'(x))²| < 1 no",
shuffle: true
},
{
question: "The smallest positive root of the equation lies in the interval",
type: "multiple",
image: "img/Q11Maths5-Midterm23-24.png",
options: [
"[3, 3.5]",
"[0, 1]",
"[1.5, 2.5]",
"[4, 5]"
],
correctAnswer: "[3, 3.5]",
shuffle: true
},
{
question: "The smallest positive root of the equation correct to 4 decimal places is x = ....",
type: "multiple",
image: "img/Q11Maths5-Midterm23-24.png",
options: [
"3.2827",
"0.5369",
"1.9586",
"5.1430"
],
correctAnswer: "3.2827",
shuffle: true
},
{
question: "A =",
type: "multiple",
image: "img/Q14Maths5-Midterm23-24.png",
options: [
"-0.042",
"0.134",
"0.091",
"None of these"
],
correctAnswer: "0.134",
shuffle: true
},
{
question: "B =",
type: "multiple",
image: "img/Q14Maths5-Midterm23-24.png",
options: [
"0.012",
"0.05",
"-0.01",
"None of these"
],
correctAnswer: "0.012",
shuffle: true
},
{
question: "C =",
type: "multiple",
image: "img/Q14Maths5-Midterm23-24.png",
options: [
"-0.005",
"0.001",
"-0.001",
"None of these"
],
correctAnswer: "-0.001",
shuffle: true
},
{
question: "The polynomial obtained by Lagrange formula for the data (x, y) has degree at most",
type: "multiple",
image: "img/Q14Maths5-Midterm23-24.png",
options: [
"6",
"3",
"5",
"4"
],
correctAnswer: "5",
shuffle: true
},
{
question: "Using Newton forward difference formula y(0.15) ≈ ......",
type: "multiple",
image: "img/Q14Maths5-Midterm23-24.png",
options: [
"0.0406",
"1.2356",
"0",
"0.0001"
],
correctAnswer: "0.0406",
shuffle: true
},
{
question: "Using Newton Backward difference formula y(0.9) ≈ ......",
type: "multiple",
image: "img/Q14Maths5-Midterm23-24.png",
options: [
"-0.4589",
"0.5858",
"0.6369",
"0.9563"
],
correctAnswer: "0.5858",
shuffle: true
},
{
question: "Using Newton forward divided difference formula y(0) ≈ ......",
type: "multiple",
image: "img/Q14Maths5-Midterm23-24.png",
options: [
"0.002",
"-0.002",
"0",
"None of these"
],
correctAnswer: "-0.002",
shuffle: true
}
]
}
]
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