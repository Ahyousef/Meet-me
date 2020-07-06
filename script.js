'use strict'

var name = prompt("Welcome player, what is your name?");
alert("Welcome " + name + ". Get ready to meet me");
alert("Please read info about me, then press buttons to play");
alert("Answer with a yes or no");

var correct = 0;
function ques(num) {
    if (num == 1) {
        var ans1 = prompt("Is my name Ahmad?");
        ans1 = ans1.toLowerCase();
        if (ans1 == "yes" || ans1 == "y") {
            correct ++; 
            //console.log("You are correct! You have " + correct + " ccorrect answers out of 5");
            alert("You are correct! You have " + correct + " ccorrect answers out of 5");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }
    }
    else if (num == 2) {
        var ans2 = prompt("Do I like Real Madrid?");
        ans2 = ans2.toLowerCase();
        if (ans2 == "no" || ans2 == "n") {
            correct ++; 
           // console.log("You are correct! You have " + correct + " ccorrect answers out of 5");
            alert("You are correct! You have " + correct + " ccorrect answers out of 5");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }   
    }

    else if (num == 3) {
        var ans3 = prompt("Did I spend my last two years in China?");
        ans3 = ans3.toLowerCase();
        if (ans3 == "yes" || ans3 == "y") {
            correct ++; 
          //  console.log("You are correct! You have " + correct + " ccorrect answers out of 5");
            alert("You are correct! You have " + correct + " ccorrect answers out of 5");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }    
    }
   
    else if (num ==4) {
        var ans4 = prompt("Do I want to study AI in the future?");
        ans4 = ans4.toLowerCase();
        if (ans4 == "yes" || ans4 == "y") {
            correct ++; 
          //  console.log("You are correct! You have " + correct + " ccorrect answers out of 5");
            alert("You are correct! You have " + correct + " ccorrect answers out of 5");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }
    }
    
    else if (num == 5) {
        var ans5 = prompt("Do I hate movies?");
        ans5 = ans5.toLowerCase();
        if (ans5 == "no" || ans5 == "n") {
            correct ++; 
//console.log("You are correct! You have " + correct + " ccorrect answers out of 5");
            alert("You are correct! You have " + correct + " ccorrect answers out of 5");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";

        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }    
    }
}

function result() {
    if (correct < 3) {
        alert("You have not passed, answer more questions");
        document.getElementById("prize").innerHTML = "Try again !";

    }
    else {
        alert("Congrats you have passed! Can't wait to know you now :D");
        document.getElementById("prize").innerHTML = "You passed!!";

    }
}