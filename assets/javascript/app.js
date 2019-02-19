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
const button = document.getElementById("button");



//create questions
var questions = [
    {
    question: "Who is the oldest sister?",
    choiceA: "Kim",
     choiceB: "Khloe",
     choiceC: "Kylie",
     choiceD: "Kourtney",
     correct: "D"
     
         },
 
         {
        question:  "Who is Chicago?",
         choiceA: "Kim's son",
         choiceB: "Kylie's son",
         choiceC: "Kim's daughter",
         choiceD: "Khloe's daughter",
         correct: "C"
         
             },
 
             {
            question: "Where does most of the family live? ",
             choiceA: "Miami, FL",
             choiceB: "Calabasas, CA",
             choiceC: "Las Vegas, NV",
             choiceD: "New York City",
            correct: "B"
             
         },  

         {
            question: "Who walked on the last Victoria Secret Fashion Show? ",
             choiceA: "Khloe",
             choiceB: "Kim",
             choiceC: "Kylie",
             choiceD: "Kendall",
            correct: "D"
             
         },  
         
         {
            question: "Who owns a beauty company? ",
             choiceA: "Kylie & Kim",
             choiceB: "Kim & Kendall",
             choiceC: "Kylie & Khloe",
             choiceD: "Kylie & Kendall",
            correct: "A"
             
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

button.addEventListener("click", reStartQuiz);

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


    }


    


function scoreRender(){
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);

    scoreDiv.innerHTML += "<p>"+ "YOUR SCORE IS:" + scorePerCent +"%</p>";

    button.style.display = "block";

   
    correctDiv.style.display = "inline";
    wrongDiv.style.display = "inline";
    unansweredDiv.style.display = "inline";



    document.getElementById("correctScore").innerHTML = correct;
    document.getElementById("wrongScore").innerHTML = wrong;
    document.getElementById("unansweredScore").innerHTML = unanswered;

    // restart.addEventListener("click", startQuiz);

    // reStart();

}

function reStartQuiz(){
    scoreDiv.style.display = "none";
    scoreDiv.innerHTML = "";
    button.style.display = "none";
    correctDiv.style.display = "none";
    wrongDiv.style.display = "none";
    unansweredDiv.style.display = "none";

    progress.innerHTML = "";
    runningQuestion=0;

    startQuiz();




    // if(document.getElementById("button").clicked === true)


}


               
//         currentScore += crystal1;
//         console.log(currentScore);

//     $(".currentScore").html( currentScore);
        

//         Win();
//         Lost();
   
//     }); }



