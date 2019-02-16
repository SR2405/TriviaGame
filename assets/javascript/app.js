
$(".correct").addClass("correct");
$(".wrong").addClass("wrong");
$(".unanswered").addClass("unanswered");
$(".hidden").addClass("hiddenQuestions"); //might not need CHECK
$(".timer").addClass("timer");

$(".opt1").addClass("opt1");
$(".opt2").addClass("opt2");
$(".opt3").addClass("opt3");
$(".opt4").addClass("opt4");
$(".container").addClass("triviaContainer");


var questionElem = document.getElementById('question');
var currentQuestion = 0;


// $("#game").getElementById("gameQuestions");
// $("#startButton").getElementById("button");

var correct;
var wrong;
unanswered= 0;
timer = 20;

var timeLeft;
var UserAnswer;


var questions =[{
   "question": "What colors are the clouds?",
   "option1": "green",
    "option2": "blue",
    "option3": "black",
    "option4": "white",
    "answer": "4"
    
        },

        {"question":  "What colors are  bananas? ",
      
        "option1": "green",
            "option2": "blue",
            "option3": "yellow",
            "option4": "white",
            "answer": "3"
        
            },

            {"question": "What colors are oranges? ",
         
            "option1": "orange",
            "option2": "blue",
            "option3": "yellow",
            "option4": "white",
                "answer": "1"
            
        },   
        ]
        var questionsCount = questions.length;

        function loadQuestion (questionIndex){
            var q = questions[questionIndex];
            questionElem.textContent = (questionIndex + 1) +'. ' + q.question;
            opt1.textContent = q.option1;
            opt2.textContent = q.option2;
            opt3.textContent = q.option3;
            opt4.textContent = q.option4;

            console.log("hello");
        };
        
        document.getElementById("startButton").onclick = function Start(){

            $("#startButton").click(function(){
                $("#game").show() && $("#startMessage").hide();
    
                timeLeft = setInterval(decrement,1000);
                // clearInterval(timeLeft);
                    loadQuestion(currentQuestion);

                    var selectedOption = document.querySelector('input [type=radio]:checked');
    if (!selectedOption) {
        unanswered++;
        // $(".unanswered").html(unanswered);

        console.log("no answer!");
    }    
    
                // for (var i=0;i<questionsArr.length;i++) 
            })
             
        };
function loadNextQuestion (){
    var selectedOption = document.querySelector('input [type=radio]:checked');
    if (!selectedOption) {
        unanswered++;

    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        correct++;
    }
    else{
        wrong++;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == questionsCount -1){
        $(".results").show();
    }
    // loadQuestion(currentQuestion);
};

//create homepage with title and start button
function Start(){
    //onclick start the game

}
            function decrement(){
                timer--;
                $(".timer").html(timer);

                
                if (timer===0){
                    clearInterval(timeLeft);
                    $("#game").hide() && $("#results").show();

            }


        // }

        // console.log(decrement);
    }
           



            // setTimeout(function(){
            //     $("#game").hide() && $("#results")

            //     // $(".timer").value("40");
            // },40000)
        


        

       

//unhide questions
    //set timer 40 sec


   Start();
    




//when user clicks "Start" the game starts
    //hide Everything else
//set timer to 40 sec 
//show all the questions and answers
    //give the questions and 4 options
//the user can choose and click one option only

//if answer is correct 
    //save to a var "Correct Answers"

//if answer is wrong say "Wrong"
    //save to a var "Wrong Answers"

    //when the clock goes to 0 
    // alert "Time Out"
    // save all unanswered questions  a var to "unanswered"
    // show "results" page
    // show the results from the "unanswered" "Wrong Answers" "Correct Answers