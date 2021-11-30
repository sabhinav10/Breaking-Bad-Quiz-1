const readline = require('readline-sync');
const loading = require('loading-indicator');


const quiz = [
  {
    ques: "What is the name of walter white alter ego",
    ans: "Heisenberg",
    options: ["Heisenberg", "\nEinstein", "\nMaxwell", "\nRobert"],
  },
  {
    ques: "Which among them survived breaking bad",
    ans: "Skyler",
    options: ["Hank", "\nSkyler", "\nMike"],
  },
  {
    ques:
      "Who is the creator of breaking bad",
    ans: "Vince Gilligan",
    options: ["Stanley Kuberic", "\nRobert frost", "\nMartin Scorcesse", "\nVince Gilligan"],
  },
  {
    ques: "How much money was buried in the desert?",
    ans: "80 million",
    options: ["80 million", "\n20 million", "\n10 million", "\n5 million"],
  },
  {
    ques: "Who killed Gus fring",
    ans: "Heisenberg",
    options: ["Heisenberg", "\nMike", "\nJack", "\nHank"],
  }
  
];

let score = 0;
function play(correctAnswer, recievedAnswer) {
  if (recievedAnswer.toLowerCase().trim() === correctAnswer.toLowerCase()) {
    console.log("Yayy!!! This is the correct answer.");
    score++;
  } else {
    console.log("Nayy...Incorrect answer");
  }
}

for (let i = 0; i < quiz.length; i++) {
  console.log("=> " + "Question " + (i + 1) + ":");
  let answer = readline.question(
    quiz[i].ques + "\n" + quiz[i].options + "\n"
  );
  play(quiz[i].ans, answer);
}

console.log(
    "Thanks for the survey!!!" + "Your score is " + score + "."
);