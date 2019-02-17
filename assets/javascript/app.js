//select all the elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const correctDiv = document.getElementById("correct");
const wrongDiv = document.getElementById("wrong");
const unansweredDiv = document.getElementById("unanswered");



//create questions
var questions = [
    {
    question: "What colors are the clouds?",
    choiceA: "green",
     choiceB: "blue",
     choiceC: "black",
     choiceD: "white",
     correct: "D"
     
         },
 
         {
        question:  "What colors are  bananas? ",
         choiceA: "green",
         choiceB: "blue",
         choiceC: "yellow",
         choiceD: "white",
         correct: "C"
         
             },
 
             {
            question: "What colors are oranges? ",
             choiceA: "blue",
             choiceB: "orange",
             choiceC: "yellow",
             choiceD: "white",
            correct: "B"
             
         },   
         ]



const lastQuestion = questions.length-1;
var runningQuestion = 0;
var count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;
var correct = 0;
var wrong = 0;
var unanswered= 0;

//render a question
function renderQuestion(){

    var q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// runningQuestionIndex++
// renderQuestion()

//start Trivia

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display ="block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);

}


//render progress
function renderProgress(){
    for(var qIndex = 0; qIndex<= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
    }
}


//render counter
function renderCounter(){
    if( count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count  * gaugeUnit + "px";
        count++

    } else {
        count = 0;

        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }
        else{
            clearInterval(TIMER);
            scoreRender(); 
        }
    }

}

//check answer
function checkAnswer (answer){
    if(answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }
    else{
        answerIsWrong();
    }
    count= 0;
    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else{
        clearInterval(TIMER);
        scoreRender();
    }
}

//check if answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    correct++;
}


//check if answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
   
    if (count == 0){
        unanswered++;}
    else{
        wrong++;
    }


    console.log(unanswered);
    }




function scoreRender(){
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);

    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
   
    correctDiv.style.display = "inline";
    wrongDiv.style.display = "inline";
    unansweredDiv.style.display = "inline";


    // correctDiv.innerHTML +="<p>" + correct + "</p>";
    // wrongDiv.innerHTML += "<p>" + wrong + "</p>";
    // unansweredDiv.innerHTML += "</p>" + unanswered + "</p>"; 

    document.getElementById("correctScore").innerHTML = correct;
    document.getElementById("wrongScore").innerHTML = wrong;
    document.getElementById("unansweredScore").innerHTML = unanswered;


}

// var TIMER=
// setInterval(renderCounter,1000);

