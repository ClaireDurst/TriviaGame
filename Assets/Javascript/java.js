$(document).ready(function(){

var count=30;

var counter=setInterval(timer, 1000);




function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
   alert("Time is UP!!");
   $("button").click()
  }

  document.getElementById("timer").innerHTML=count + " secs";

  //Do code for showing the number of seconds here
}
    $("button").click(function(){
        $(".Tally").show();
    });

    $("button").click(function(){
        $("#starter").hide();
    });

    $("button").click(function(){
    $("#results").hide();
    });


  var answeredWrong = 7;
  var answeredRight = 0;
  var questionsRemaining = 7;


$("button").click(function(){         
answeredRight = 0;          
for(var i = 1; i <= 7; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      answeredRight++;
      answeredWrong--;
      questionsRemaining--;

    }
  
  }
 } 

 if(radio.value == "wrong" && radio.checked) {
      answeredWrong++; 
    }

  $('#Incorrect').text(answeredWrong);

  $('#Correct').text(answeredRight);

  $('#QuestionsRemaining').text(questionsRemaining);


  });



  });