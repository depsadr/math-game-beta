// Start & Reset Game

// press start button
document.querySelector('.start_res_btn').addEventListener('click', ()=> {

// check if already playing
//    if(playing == true){
//        restart game == reload page
//    }
//    if (playing == false){
//        // set score to 0
    // show countdown box
    var timer = document.querySelector('.timer');
    timer.style.display = 'block';
    // reduce time by one second

//    function countdown(){
//        var time = document.querySelector('#time');
//        var x = 60;
//        if (x <= 0){
////            clearInterval(counter,0);
//            //show game over message
//            alert('Game Over');
//        } else {
//            var counter = setInterval(
//            function(){x--;
//            time.innerHTML = x;
//            },1000);
//        }
//    }
//
//
//    console.log(countdown());

//    var countdown = document.querySelector('#minute1').value;
    var counter = 10;

		setInterval( function(){
			counter--;

			if( counter >= 0 ){
				var time = document.querySelector('#time');
				time.innerHTML = counter;
			}

			if( counter < 0 ){
                let gameOver = document.querySelector('.gameOver');
                gameOver.style.display = 'block';
//				time.innerHTML = "COMPLETE";
//                alert('Game Over');
			}
		}, 1000);

//    if(i < 0){
//        clearInterval(counter,0);
//        alert('Game Over');
//    }

//change button text to reset game
var reset = document.querySelector('.start_res_btn');
    reset.innerHTML = 'Reset';
// generate new questions - random
var question = document.querySelector('.question');

var firstNumber = Math.floor(Math.random()*10);
var secondNumber = Math.floor(Math.random()*10);

    question.innerHTML = `${firstNumber} * ${secondNumber}`;

// answer box

//    new Object answer (answer1, answer2, answer3, answer4){
//
//    }

//var solutionTrue =
    function correct() {
        var solution = firstNumber * secondNumber;
        return solution;
    }

//var solutionFalse =
    function wrong() {
        var solution = firstNumber * Math.floor(Math.random()*10);
        return solution;
    }
//var answers = {
//    solutionTrue : function Correct() {
//        firstNumber * secondNumber;
//    },
//
//    solutionFalse : function wrong() {
//        firstNumber * Math.floor(Math.random()*10);
//    }
//}
console.log(correct());

var answer1 = document.querySelector('#answer1');
//var solution1 = firstNumber * secondNumber;
    answer1.innerHTML = correct();

var answer2 = document.querySelector('#answer2');
//var solution2 = firstNumber * Math.floor(Math.random()*10);
    answer2.innerHTML = wrong();

var answer3 = document.querySelector('#answer3');
//var solution3 = firstNumber * Math.floor(Math.random()*10);
    answer3.innerHTML = wrong();

var answer4 = document.querySelector('#answer4');
//var solution4 = firstNumber * Math.floor(Math.random()*10);
    answer4.innerHTML = wrong();

//if(answer == false){
//    no action
//}
//if(plazing == true){
//    // look for answer
//    if(answer == true){
//        // increase score by one
//        alert("Correct");
//        // random new question
//    }
//    if(answer == false){
//        alert("Try again");
//    }
//}



function objectTest (name, genre, link){
    this.name = name;
    this.genre = genre;
    this.link = function link(link1){
        this.link1 = link1;
    };
}

var newTest = new objectTest('name', 'genre', '<a href="#">Test Link</a>');


console.log(newTest);
console.log(newTest.link);

    var object = {
        category1 : {
            valantine : "easter",
            reed : "book"
        },
        category2 : {
            phone : "iPhone 3",
            newPhone : "iPhone 7",
            anotherPhone : "iPhoneX"
        },
        category3 : {
            color1 : "blue",
            color2 : "red",
            color3 : "purple",
            color4 : "green"
        }
    }
console.log(object.category2.anotherPhone);

object.category2.anotherPhone = "iPhone 11";

console.log(object.category2.anotherPhone);


});


