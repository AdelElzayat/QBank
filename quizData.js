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
    id: "network-2-questions-bank",
    title: "Network 2 Questions Bank",
    shuffleQuestions: false,
    showScore: true,
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
          "N of hosts = 2^ones-2",
          "N of hosts = 2^zeros-2",
        ],
        correctAnswer: "N of hosts = 2^zeros-2",
        shuffle: true,
      },
      {
        question: "We calculate the number of sub networks based on the rule",
        type: "multiple",
        options: [
          "N of networks = 256-last octet in new mask",
          "N of networks = 2^ones",
          "N of networks = 2^ones-2",
          "N of networks = 2^zeros-2",
        ],
        correctAnswer: "N of networks = 2^ones",
        shuffle: true,
      },
      {
        question: "We calculate the Hop based on the rule.",
        type: "multiple",
        options: [
          "N of networks = 2^ones",
          "N of networks = 2^ones-2",
          "Hop = 256-last octet in new mask",
          "N of networks = 2^zeros-2",
        ],
        correctAnswer: "Hop = 256-last octet in new mask",
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
        question: "In figure.1 What does the number 1 symbolize?",
        type: "multiple",
        options: [
          "Serial Ports",
          "Ethernet Ports",
          "Consol Port",
          "Auxiliary Port",
        ],
        correctAnswer: "Serial Ports",
        shuffle: true,
      },
      {
        question: "In figure.1 What does the number 2 symbolize?",
        type: "multiple",
        options: [
          "Serial Ports",
          "Ethernet Ports",
          "Consol Port",
          "Auxiliary Port",
        ],
        correctAnswer: "Ethernet Ports",
        shuffle: true,
      },
      {
        question: "In figure.1 What does the number 3 symbolize?",
        type: "multiple",
        options: [
          "Serial Ports",
          "Ethernet Ports",
          "Consol Port",
          "Auxiliary Port",
        ],
        correctAnswer: "Consol Port",
        shuffle: true,
      },
      {
        question: "In figure.1 What does the number 4 symbolize?",
        type: "multiple",
        options: [
          "Serial Ports",
          "Ethernet Ports",
          "Consol Port",
          "Auxiliary Port",
        ],
        correctAnswer: "Auxiliary Port",
        shuffle: true,
      },
      {
        question: "What is the number 1 used for?",
        type: "multiple",
        options: [
          "To connect two geographically distant branches.",
          "To connect Router with other devices.",
          "To enter configurations file directly.",
          "To enter configurations file remotely.",
        ],
        correctAnswer: "To connect two geographically distant branches.",
        shuffle: true,
      },
      {
        question: "What is the number 2 used for?",
        type: "multiple",
        options: [
          "To connect two geographically distant branches.",
          "To connect Router with other devices.",
          "To enter configurations file directly.",
          "To enter configurations file remotely.",
        ],
        correctAnswer: "To connect Router with other devices.",
        shuffle: true,
      },
      {
        question: "What is the number 3 used for?",
        type: "multiple",
        options: [
          "To connect two geographically distant branches.",
          "To connect Router with other devices.",
          "To enter configurations file directly.",
          "To enter configurations file remotely.",
        ],
        correctAnswer: "To enter configurations file directly.",
        shuffle: true,
      },
      {
        question: "What is the number 4 used for?",
        type: "multiple",
        options: [
          "To connect two geographically distant branches.",
          "To connect Router with other devices.",
          "To enter configurations file directly.",
          "To enter configurations file remotely.",
        ],
        correctAnswer: "To enter configurations file remotely.",
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
      {
        question:
          "Compare between ROM, RAM, NVRAM and Flash memory in Router components.",
        type: "complete",
        correctAnswer:
          "ROM: post process; RAM: Running IOS and Configurations file; NVRAM: Configurations files; Flash: IOS Image",
      },
      {
        question: "What is meant by the post process?",
        type: "complete",
        correctAnswer:
          "A process that verifies the presence of all device components and that they are functioning normally.",
      },
      {
        question: "What is the Router Power on/Bootup Sequence?",
        type: "complete",
        correctAnswer:
          "1. POST, 2. Find IOS, 3. Load IOS, 4. Find configuration, 5. Load configuration, 6. Run configured IOS",
      },
      {
        question:
          "Divide network 192.168.1.0/24 into 4 networks. What is the New Mask in decimal and the Hop?",
        type: "complete",
        correctAnswer: "New Mask: 255.255.255.192, Hop: 64",
      },
      {
        question:
          "Divide network 192.168.1.0/24 into 5 networks for host sizes {60, 30, 30, 60, 60}. What is the Subnet Mask for the Second Network Division (for 30 hosts)?",
        type: "complete",
        correctAnswer: "255.255.255.224",
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