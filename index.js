import readlineSync from 'readline-sync';
import chalk from 'chalk'; 



var score = 0;

var highScore =
{
  name: ("Thanos"),
  score: 100
};

// Intro

function intro() {
  var username = readlineSync.question(chalk.bold.blue("Hii! What is your name ? \n"));
  console.log("\n");
  console.log(chalk.blue.bold("Welcome " + chalk.green.bold(username) + " Are you a true Marvel fan? Lets see!\n"));

}



// questions obj array

var questions = [
  {
    question: '1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\n\n a. 2005\n b. 2008\n c. 2010\n d. 2012\n  ',
    answer: "b"
  },

  {
    question: '2. What is the name of Thor’s hammer?\n\n a. Vanir\n b. Mjolnir\n c. Aesirn\n d. Norn\n  ',
    answer: "b"

  },

  {
    question: '3. In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?\n\n a. That he wants to study The Hulk\n b. That he knows about S.H.I.E.L.D.\n c. That they are putting a team together\n d. That Thaddeus owes him money\n  ',
    answer: "c"

  },

  {
    question: '4. What is Captain America’s shield made of?\n\n a. Adabantium\n b. Vibranium\n c. Probenium\n d. Carbantium\n  ',
    answer: "b"

  },
  {
    question: '5. The Flerkens are a race of extremely dangerous aliens that resembles what?\n\n a. Cats\n b. Ducks\n c. Reptiles\n d. Raccoons\n ',
    answer: "a"

  }
];

// Running the game

function runGame() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);

  }
}



function play(question, ans) {

  var userans = readlineSync.question(chalk.black.bold(question));
 
  if (userans.toLowerCase() === ans) {
    console.log(chalk.greenBright.bold("Right!\n"))
    score += 20;

  }
  else {
    console.log(chalk.red.bold("Wrong!\n"));
  }

 
}


// Final score

function finalScore() {


  if (score >= highScore.score) {

    console.log(chalk.greenBright.bold("Congratulations you created a high score! = " + score));
    console.log(chalk.blue.bold("\nPrevious higscore was = " + highScore.score + " \nMade by - " + highScore.name ));

   
    
  

  }

  else if (score > 0) {
    console.log(chalk.greenBright.bold("YAY! You scored " + score +" points"));
  }

  else {
    console.log(chalk.red.bold("Sadly! You scored  " + score + " points"));
  }

}

intro();
runGame();
finalScore();




