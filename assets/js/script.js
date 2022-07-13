var TimerEl = document.querySelector(".Timer");
var HighEl = document.querySelector(".High-Scores");
var QuizArea = document.querySelector(".Quiz-Area");
var HeadEl = document.querySelector(".Header");
var StartBtn = document.querySelector("#start");
var timeShown = document.querySelector("#time");
var AnswerResponse = document.querySelector(".Answer-Response");


var pointTotal = 0;
var TimerCount;
var Timer;
var firstQuestion;
var secondQuestion;
var thirdQuestion;
var firstAnswers;
var secondAnswers;
var thirdAnswers;
var answer1
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;
var answer9;

function startQuiz() {
    HeadEl.remove();
    StartBtn.remove();
    TimerCount = 30;
    startTimer();
    addQuiz();
}

function startTimer() {
    Timer = setInterval(function() {
      TimerCount--;
      timeShown.textContent = TimerCount;
        if (TimerCount === 0) {
          clearInterval(Timer);
        }
    }, 1000);
     
}

function addQuiz() {
   firstQuestion = document.createElement("h2");
   firstQuestion.textContent = "What does CSS stand for?";
   QuizArea.appendChild(firstQuestion);
   firstAnswers = document.createElement("ol");
   QuizArea.appendChild(firstAnswers);
   answer1 = document.createElement("li");
   answer1.textContent = "Cascading Style Sheets";
   firstAnswers.appendChild(answer1);
   answer2 = document.createElement("li");
   answer2.textContent = "Comparing Stat Sheets";
   firstAnswers.appendChild(answer2);
   answer3 = document.createElement("li");
   answer3.textContent = "Cool Ski Slopes";
   firstAnswers.appendChild(answer3);
   answer1.setAttribute("style", "text-align: left; background-color: blue; color: white; padding: 5px; margin-top: 5px;");
   answer2.setAttribute("style", "text-align: left; background-color: blue; color: white; padding: 5px; margin-top: 5px;");
   answer3.setAttribute("style", "text-align: left; background-color: blue; color: white; padding: 5px; margin-top: 5px;");
   answer1.id ="answer1";
   var AnswerOne = document.querySelector("#answer1");
   AnswerOne.addEventListener("click", addQuiz2);
   answer2.id = "answer2";
   answer3.id = "answer3";
   var AnswerTwo = document.querySelector("#answer2");
   var AnswerThree = document.querySelector("#answer3");
   AnswerTwo.addEventListener("click", addQuiz22)
   AnswerThree.addEventListener("click", addQuiz22)
}




function addQuiz2() {
    pointTotal +10;
    var firstResponse = document.createElement("h4");
    firstResponse.textContent = "Correct";
    AnswerResponse.appendChild(firstResponse);
    firstQuestion.textContent ="What does HTML stand for?";
    answer1.textContent = "How To Make Lemonade";
    answer2.textContent = "Hyper Text Markup Language";
    answer3.textContent = "Hyper Text Model Loop"
    AnswerOne.addEventListener("click", form)
    AnswerTwo.addEventListener("click", form2)
    AnswerThree.addEventListener("click", form)

}

function addQuiz22() {
    TimerCount-5;
    var firstResponse = document.createElement("h4");
    firstResponse.textContent = "Wrong";
    AnswerResponse.appendChild(firstResponse);
    firstQuestion.textContent ="What does HTML stand for?";
    answer1.textContent = "How To Make Lemonade";
    answer2.textContent = "Hyper Text Markup Language";
    answer3.textContent = "Hyper Text Model Loop"
    answer1.id = "a1"
    answer2.id = "a2"
    answer3.id = "a3"
    AnswerOne = document.querySelector("#a1")
    AnswerTwo = document.querySelector("#a2")
    AnswerThree = document.querySelector("a3")
    AnswerOne.addEventListener("click", form)
    AnswerTwo.addEventListener("click", form2)
    AnswerThree.addEventListener("click", form)

}

function form() {
    firstResponse.remove();
    firstQuestion.remove();
    firstAnswers.remove();

}

function form2() {
    firstResponse.remove();
    firstQuestion.remove();
    firstAnswers.remove();
    pointTotal +10;

}

StartBtn.addEventListener("click", startQuiz);




