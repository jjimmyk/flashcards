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
quiz.push(new question('What is the optimal swallow velocity?', 'I do not know!'));


//Declare the variables flashcards and current index.
let flashcards = null;
let currentI = 0;

//Define the function pageLoad:
//Declare variable flashcards to be the HTML element with ID flashcards.
//Call the function flipCard with parameter 0 to reveal the first question.
function pageLoad() {
  flashcards = document.getElementById("flashcards");
  flipCard(0);
	document.getElementById("flashcards").onmouseover = function() { console.log("Please click the question to see the answer.") };

}


//Define the function flipCard:
//set the current index to i.
//Make the variable flashcards display the question element of the relevant index.
function flipCard(i) {
	currentI = i;
	flashcards.innerHTML = quiz[i].question;
}

//Define the function showNext:
//Make the answer on screen disappear by setting the inner HTML of the answer HTML element to "".
//If the current index is less than the array length -1, call flipCard and increment the current index.
//If we've reached the end of the array, display the first question.
function showNext() {
	document.getElementById("answer").innerHTML="";
	if (currentI < quiz.length -1)
		flipCard(++currentI);
	else
		flipCard(0);
}
	

//Define the function showAnswer to reveal the answer element of the relevant index within the quiz array.
function showAnswer()
{
	document.getElementById("answer").innerHTML=quiz[currentI].answer;
	
}
