
$(".correct").addClass("correct");
$(".wrong").addClass("wrong");
$(".unanswered").addClass("unanswered");
$(".hidden").addClass("hiddenQuestions"); //might not need CHECK
// $("#game").getElementById("gameQuestions");
// $("#startButton").getElementById("button");

correct = 0;
wrong = 0;
unanswered = 0;



//create homepage with title and start button
function Start(){
    //onclick start the game
   document.getElementById("startButton").onclick = function Start(){

        $("#startButton").click(function(){
            $("#game").show() && $("#startMessage").hide();
            setTimeout(function(){
                $(".timer").html("");
            },40000)

        })



        }

//unhide questions
    //set timer 40 sec

   }

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
    // show the results from the "unanswered" "Wrong Answers" "Correct Answers"