const quizzes = [
  //multiple, true_false, complete
  {
    id: "general-knowledge",
    title: "General Knowledge Quiz",
    shuffleQuestions: true,
    showScore: true,
    questions: [
      {
        type: "complete",
        question:
          "Artificial Intelligence is concerned with building systems that",
        correctAnswer: "simulate intelligent behavior",
      },
      {
        type: "complete",
        question:
          "Machine Learning is a subset of AI that learns to make decisions by",
        correctAnswer: "fitting mathematical models to observed data",
      },
      {
        type: "complete",
        question: "Deep Learning uses __________ to learn from data.",
        correctAnswer: "multilayered neural networks",
      },
      {
        type: "complete",
        question:
          "The goal of Machine Learning is to automatically detect patterns in data and use them to",
        correctAnswer: "predict future outcomes",
      },
      {
        type: "complete",
        question:
          "A computer program is said to learn from experience E with respect to task T and performance measure",
        correctAnswer:
          "P if its performance on T, as measured by P, improves with experience E",
      },
    ],
  },
  {
    id: "network-2-comprehensive-quiz",
    title: "Network 2 Questions Bank Quiz",
    shuffleQuestions: true,
    showScore: true,
    questions: [
      {
        type: "multiple",
        question: "How many hosts are available in a /24 network?",
        options: ["128", "254", "256", "255"],
        correctAnswer: "254",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "What is the subnet mask for /26?",
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
        type: "multiple",
        question: "How many sub-networks are in a /24 prefix?",
        options: ["Zero", "Two", "Four", "Six"],
        correctAnswer: "Zero",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "Which rule is used to calculate the number of hosts?",
        options: ["2^ones", "256 - last octet", "2^ones - 2", "2^zeros - 2"],
        correctAnswer: "2^zeros - 2",
        shuffle: true,
      },
      {
        type: "multiple",
        question:
          "The number of sub-networks is calculated based on which rule?",
        options: ["256 - last octet", "2^ones", "2^ones - 2", "2^zeros - 2"],
        correctAnswer: "2^ones",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "Which rule is used to calculate the Hop?",
        options: ["2^ones", "2^ones - 2", "256 - last octet", "2^zeros - 2"],
        correctAnswer: "256 - last octet",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "How many sub-networks are in a /26 prefix?",
        options: ["Zero", "Two", "Four", "Six"],
        correctAnswer: "Four",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "The last IP of a subnet is always the:",
        options: ["First host", "Last host", "Network ID", "Broadcast"],
        correctAnswer: "Broadcast",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "The first IP of a subnet is always the:",
        options: ["First host", "Last host", "Network ID", "Broadcast"],
        correctAnswer: "Network ID",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "What is the subnet mask for /28?",
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
        type: "multiple",
        question: "How many usable hosts are in a /28 subnet?",
        options: ["14", "16", "30", "62"],
        correctAnswer: "14",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "What is the broadcast address of 192.168.1.0/24?",
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
        type: "multiple",
        question: "What does VLSM allow?",
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
        type: "multiple",
        question: "What is the first step when implementing VLSM?",
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
        type: "multiple",
        question: "Which prefix is needed for a subnet with 50 hosts?",
        options: ["/26", "/27", "/25", "/28"],
        correctAnswer: "/26",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "Why is the largest subnet assigned first in VLSM?",
        options: [
          "It is easier",
          "To avoid fragmentation",
          "It is faster",
          "It is required by hardware",
        ],
        correctAnswer: "To avoid fragmentation",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "What is the default route?",
        options: ["0.0.0.0/0", "255.255.255.0", "127.0.0.1", "1.1.1.1"],
        correctAnswer: "0.0.0.0/0",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "To enable a router interface, which command is used?",
        options: ["ena", "enable", "run", "no shutdown"],
        correctAnswer: "no shutdown",
        shuffle: true,
      },
      {
        type: "multiple",
        question:
          "In the router diagram, what do the Serial Ports (1) connect?",
        options: [
          "Two geographically distant branches",
          "Router with other local devices",
          "Direct configuration file",
          "Remote configuration file",
        ],
        correctAnswer: "Two geographically distant branches",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "Which router memory is responsible for the POST process?",
        options: ["RAM", "NVRAM", "Flash memory", "ROM"],
        correctAnswer: "ROM",
        shuffle: true,
      },
      {
        type: "complete",
        question: "The memory where the IOS Image is kept is called",
        correctAnswer: "Flash memory",
      },
      {
        type: "complete",
        question: "The command to enter global configuration mode is",
        correctAnswer: "config t",
      },
      {
        type: "complete",
        question: "The command used to show the routing table is",
        correctAnswer: "show ip route",
      },
      {
        type: "true_false",
        question: "VLSM is considered a kind of switching.",
        options: ["True", "False"],
        correctAnswer: "False",
        shuffle: false,
      },
      {
        type: "true_false",
        question:
          "The 'copy run start' command is used to save configurations.",
        options: ["True", "False"],
        correctAnswer: "True",
        shuffle: false,
      },
      {
        type: "multiple",
        question: "What is the purpose of the Console Port (3)?",
        options: [
          "Connect distant branches",
          "Connect other devices",
          "Enter configuration file directly",
          "Enter configuration file remotely",
        ],
        correctAnswer: "Enter configuration file directly",
        shuffle: true,
      },
      {
        type: "complete",
        question:
          "The process that verifies device components are functioning normally is called the",
        correctAnswer: "post process",
      },
      {
        type: "multiple",
        question:
          "In the bootup sequence, what happens immediately after performing POST?",
        options: [
          "Load the configuration",
          "Find the Cisco IOS software",
          "Run the configured software",
          "Find the configuration",
        ],
        correctAnswer: "Find the Cisco IOS software",
        shuffle: true,
      },
      {
        type: "multiple",
        question: "Which router memory keeps the configuration files?",
        options: ["ROM", "RAM", "NVRAM", "Flash memory"],
        correctAnswer: "NVRAM",
        shuffle: true,
      },
      {
        type: "complete",
        question: "To rename the router, the command used is",
        correctAnswer: "hostname",
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