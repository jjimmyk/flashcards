
//Define the class of questions.
class question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.correct = false;
  }
}
  
//Create the array of quiz flashcards. 
let quiz = [];

//Add the three objects to the array.
quiz.push(new question('What is 3+5?', '8'));
quiz.push(new question('What is your favorite color?', 'blue'));
quiz.push(new question('What is optimal swallow velocity?', 'I do not know!'));


//Wait for the user to click on the button. When user clicks button, set counter to 0. Then, while counter is less than length of the array, print the answer of the
//item in the array.

let flashcards = document.getElementById("flashcards")

function flipCard(quiz) {
  
let i = 0;
while (i < quiz.length) {
  console.log(quiz[i].answer);
  i++;
}
}

flipCard(quiz);
