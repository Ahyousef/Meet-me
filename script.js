'use strict'

var name = prompt("Welcome player, what is your name?");
alert("Welcome " + name + ". Get ready to meet me");
alert("Please read info about me, then press buttons to play");
alert("Answer with a yes or no");

var questions = ["Is my name Ahmad?","Do I like Real Madrid?","Did I spend my last two years in China?","Do I want to study AI in the future?","Do I hate movies?"];
var answers = ["yes", "no"]
var correct = 0;
function ques(num) {
    if (num == 1) {
        var ans1 = prompt(questions[0]);
        ans1 = ans1.toLowerCase();
        if (ans1 == answers[0]) {
            correct ++; 
            //console.log("You are correct! You have " + correct + " ccorrect answers out of 7");
            alert("You are correct! You have " + correct + " ccorrect answers out of 7");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }
    }
    else if (num == 2) {
        var ans2 = prompt(questions[1]);
        ans2 = ans2.toLowerCase();
        if (ans2 == answers[1]) {
            correct ++; 
           // console.log("You are correct! You have " + correct + " ccorrect answers out of 7");
            alert("You are correct! You have " + correct + " ccorrect answers out of 7");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }   
    }

    else if (num == 3) {
        var ans3 = prompt(questions[2]);
        ans3 = ans3.toLowerCase();
        if (ans3 == answers[0]) {
            correct ++; 
            // console.log("You are correct! You have " + correct + " ccorrect answers out of 7");
             alert("You are correct! You have " + correct + " ccorrect answers out of 7");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }    
    }
   
    else if (num ==4) {
        var ans4 = prompt(questions[3]);
        ans4 = ans4.toLowerCase();
        if (ans4 == answers[0]) {
            correct ++; 
           // console.log("You are correct! You have " + correct + " ccorrect answers out of 7");
            alert("You are correct! You have " + correct + " ccorrect answers out of 7");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }
    }
    
    else if (num == 5) {
        var ans5 = prompt(questions[4]);
        ans5 = ans5.toLowerCase();
        if (ans5 == answers[1]) {
            correct ++; 
            // console.log("You are correct! You have " + correct + " ccorrect answers out of 7");
             alert("You are correct! You have " + correct + " ccorrect answers out of 7");
            document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";

        }
        else {
            alert("You are wrong! Try again");
            document.getElementById("prize").innerHTML = "Try again " + name + "!";

        }    
    }
    else if (num == 6) {
        var ques6status = false;
        var randomNumber = Math.floor((Math.random() * 20) + 1);
        for (let index = 0; index < 4; index++) {
            var ans6 = prompt("What is my favourite number? Guess from 1-20")
            if (ans6 == randomNumber) {
                correct ++; 
                //console.log("You are correct! You have " + correct + " ccorrect answers out of 7");
                alert("You are correct! You have " + correct + " ccorrect answers out of 7");
                document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
                ques6status = true;
                break;
            }
            else if ((randomNumber - ans6) > 5){
                alert("Too low, " + (3-index) + " tries left.");
            }
            else if ((randomNumber-ans6) < 5 && ((randomNumber-ans6) > 0)) {
                alert("Just a bit low, " + (3-index) + " tries left.")
            }
            else if ((randomNumber - ans6) < -5){
                alert("Too high, " + (3-index) + " tries left.");
            }
            else if ((randomNumber-ans6) > -5 && ((randomNumber-ans6) < 0)) {
                alert("Just a bit high, " + (3-index) + " tries left.")
            }       
        }
        if (ques6status == false) {
            alert("You have used all 4 tries.")
        }
    }
    else if (num == 7){
        var countries = ["jordan","china","saudi arabia"]
        var ques7status = false;
        for (let index = 0; index < 6; index++) {
            var ans7 = prompt("Which countries did I visit?");
            ans7 = ans7.toLocaleLowerCase();
            if (ans7 == countries[0] || ans7 == countries[1] || ans7 == countries[2]) {
                correct ++; 
                //console.log("You are correct! You have " + correct + " ccorrect answers out of 7");
                alert("You are correct! You have " + correct + " ccorrect answers out of 7");
                alert("Correct anwers are " + countries)
                document.getElementById("prize").innerHTML = name + " you have " + correct + " Correct answers";
                ques7status = true;
                break;}
            else {
                alert("Wrong country, " + (5-index) + " tries left.")
            }
        }
        if (ques7status == false) {
            alert("You have used all 6 tries.")
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
