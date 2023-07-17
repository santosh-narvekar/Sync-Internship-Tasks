let questions = document.getElementById("question");
let startbtn = document.getElementById("start-btn");
let restartbtn = document.getElementById("restart-btn");
let options = document.querySelectorAll(".options");
let finalScore = document.getElementById("final-score");
let allOptions = document.getElementById("all-options");
let chooseOptions = document.getElementById("chooseoptions");
let timer = document.getElementById("timer");
let score = document.getElementById("score");
let highScore = document.getElementById("highScore");
let highScoreContainer = document.querySelector(".highscore");
let modal = document.querySelector(".modal");
console.log(highScore);
let attempt = document.getElementById("attempt");
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");
let unattempted = document.getElementById("unattempted");
let scoremodalButton = document.getElementById("modal-btn");
let programmingbtn = document.getElementById("programming-quiz-btn");
let gkquizbtn = document.getElementById("gk-quiz-btn");
let agreebtn = document.getElementById("agree");
let rejectbtn = document.getElementById("reject");
let message = document.getElementById("text-msg");

let modalInstructions = document.getElementById("modal-instructions");

programmingbtn.addEventListener("click", function () {
  modalHome.classList.add("hidden");
  modalInstructions.classList.remove("hidden");
});

agreebtn.addEventListener("click", function () {
  modalInstructions.classList.add("hidden");
  startbtn.classList.remove("hidden");
});

rejectbtn.addEventListener("click", function () {
  modalInstructions.classList.add("hidden");
  modalHome.classList.remove("hidden");
});

let modalHome = document.getElementById("modal-home");

let basicPrgQuiz = [
  "When was C Language Introduced",
  "When was Java Language Introduced",
  "When was Python Introduced",
  `Tell the Output of Following Program: 
  i=1
  console.log(i)`,
  `Tell the OutPut of Following Program
  i = 2.0+1-1.0
  console.log(i)
  `,
  `is Java Portable?`,
  `Where is Javascript Language Used`,
  `Tell the Output of the Program: 
  i = 1
  i--
  console.log(i)
  `,
  `Output of: console.log(null)`,
  `Output of: i=1 console.log((i/1)-(2*1))`,
];

let basicoptions = [
  ["1970", "1971", "1972", "1980", "1969", "1973"],
  ["1990", "1996", "1994", "1995", "2000", "1994-5"],
  ["1990", "1991", "1994", "1998", "2000", "1994-5"],
  ["1.1", "1.0", "1.14", "1", "1.2", "0.8"],
  ["2", "2.3", "3", "1.5", "1", "1.0"],
  ["Yes", "no", "not known", "less portable", "undefined", "unknown"],
  ["android", "web", "data science", "data analysis", "AI", "ML"],
  ["1.3", "0", "3", "2", "a", "b"],
  ["null", "error", "undefined", "empty", "0", "1"],
  ["-1", "0", "2", "1", "-2", "undefined"],
];

let basicPrgAns = [
  "1972",
  "1995",
  "1991",
  "1",
  "2",
  "Yes",
  "web",
  "0",
  "null",
  "-2",
];

let a = 0;
let i = 0;

let uniqueNumbers = [];

function generateUniqueRandom(Number) {
  let random = Math.floor(Math.random() * Number);
  if (!uniqueNumbers.includes(random)) {
    uniqueNumbers.push(random);
    return random;
  } else {
    if (uniqueNumbers.length < Number) {
      return generateUniqueRandom(Number);
    } else {
      return basicoptions.length;
    }
  }
}

function timerClock() {
  let a = timer.textContent;
  timer.textContent--;
  if (timer.textContent == 0) {
    timer.textContent = 5;
  }
}

let Attempt = 0;
let Currentscore = 0;
let Corrects = 0;
let unAttempt = 0;

options.forEach((s, i) => {
  s.addEventListener("click", function () {
    Attempt++;
    allOptions.classList.add("unclickable");
    s.style.cssText = `font-weight:900`;
    attempt.textContent = Attempt;

    console.log(`ATTEMPTS :`, Attempt);

    for (t = 0; t < basicPrgAns.length; t++) {
      if (basicPrgAns[t] === s.textContent) {
        Corrects++;
        correct.textContent = Corrects;
        Currentscore++;
        console.log(`Current Score :`, Currentscore);
        score.textContent = Currentscore;
      }
    }
  });
});

function letsStart() {
  highScoreContainer.classList.remove("hidden");
  highScore.classList.remove("hidden");

  let a = generateUniqueRandom(10);
  console.log(a);

  finalScore.classList.add("hidden");
  score.classList.add("hidden");

  for (t = 0; t < options.length; t++) {
    options[t].style.cssText = "font-weight:400";
  }

  i += 1;
  startbtn.classList.add("hidden");
  questions.textContent = basicPrgQuiz[a];
  allOptions.classList.remove("unclickable");

  if (a != basicoptions.length) {
    b = [...basicoptions[a]];
    b.forEach(function (s, i) {
      options[i].textContent = s;
    });
  }

  if (i === basicoptions.length) {
    timer.classList.add("hidden");
    // startbtn.classList.remove("hidden");
    modal.classList.remove("hidden");
    questions.classList.add("hidden");
    chooseOptions.classList.add("hidden");
    finalScore.classList.remove("hidden");
    score.classList.remove("hidden");
    clearInterval(myInterval);
    clearInterval(myTime);
    timer.textContent = 5;
    wrong.textContent = attempt.textContent - correct.textContent;
    unattempted.textContent = 10 - attempt.textContent;
    highScore.classList.remove("hidden");
    if (score.textContent >= highScore.textContent) {
      highScore.textContent = score.textContent;
      message.textContent = `Congrats!You have acheived the high score🎉🎉`;
    } else {
      message.textContent = `Sorry!You have not broken the high score,Try Again`;
    }

    highScoreContainer.classList.add("hidden");
  }
}

startbtn.addEventListener("click", function () {
  Currentscore = 0;
  Attempt = 0;
  Corrects = 0;
  score.textContent = 0;
  attempt.textContent = 0;
  correct.textContent = 0;
  timer.classList.remove("hidden");
  uniqueNumbers = [];
  questions.classList.remove("hidden");
  score.classList.remove("hidden");
  i = -1;
  chooseOptions.classList.remove("hidden");
  myTimer = setTimeout(letsStart, 0);
  myInterval = setInterval(letsStart, 5000);
  myTimer1 = setTimeout(function () {
    myTime = setInterval(timerClock, 1000);
  }, 0);
});

scoremodalButton.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  modalHome.classList.toggle("hidden");
});

restartbtn.addEventListener("click", function () {
  Currentscore = 0;
  Attempt = 0;
  Corrects = 0;
  modal.classList.add("hidden");
  score.textContent = 0;
  attempt.textContent = 0;
  correct.textContent = 0;
  timer.classList.remove("hidden");
  uniqueNumbers = [];
  questions.classList.remove("hidden");
  score.classList.remove("hidden");
  i = -1;
  chooseOptions.classList.remove("hidden");
  myTimer = setTimeout(letsStart, 0);
  myInterval = setInterval(letsStart, 5000);
  myTimer1 = setTimeout(function () {
    myTime = setInterval(timerClock, 1000);
  }, 0);
});
