export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "Who now (2022) owns Ranger Rover?",
    image:
      "https://img.search.brave.com/zkTDL0rSxJGxe6U3gG8_iFet1yiaC1sDn39-txNIF78/rs:fit:801:411:1/g:ce/aHR0cDovL2ltZzAy/LmRldmlhbnRhcnQu/bmV0LzljOTMvaS8y/MDA1LzA4My80LzYv/cmFuZ2Vfcm92ZXJf/X192ZWN0b3JfYnlf/YWRyaWFubzEwLnBu/Zw",
    answers: [
      "Volkswagen Group",
      "Tata Motors",
      "Ford Motors",
      "BMW Group",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which car brand is this logo for?",
    image: "https://img.search.brave.com/L8gS2aUXOdTsXPwlKDzSY2XWlPjZRIhjrb7yTk4zcTc/rs:fit:420:420:1/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzEyNDA1MDgucG5n",
    answers: ["Opel", "Lada", "Lotus", "Saleen"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Where in the UK is the MINI plant?",
    image:
      "https://images.unsplash.com/photo-1591439346018-9d5df732ab7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    answers: ["Oxford", "Cambridge", "London", "Edinburgh"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Which was the first James Bond film to include an Aston Martin?",
    answers: ["Dr No", "From Russia with Love", "Goldfinger", "Thunderball"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What color were all Ferraris originally?",
    answers: ["Yellow", "White", "Blue", "Red"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
