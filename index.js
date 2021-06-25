
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


//Declare the variables flashcards, quiz answer, and current index.
let flashcards = null;
let currentI = 0;

//Define the function pageLoad. Set the above-declared variable divQuizAnswer to the element with ID "quizAnswer".
//Set the above-declared variable divQuizAnswer to the HTML element with ID "quizAnswer".
//Set the above-declared variable flashcards to the HTML element with the ID "flashcards".
//Call the function flipCard, which is defined below.
function pageLoad() {
  flashcards = document.getElementById("flashcards");
  flipCard(0);
}

//For each index within the array 'quiz', when clicked, call the function showAnswer (defined below) on the question element of the relevant index 
//within the aray 'quiz'.
//Set the inner HTML of flashcards to the inner HTML of flashcards and the value of div.
function flipCard(i) {
	currentI = i;
	flashcards.innerHTML = quiz[i].question;
}

//remember to comment on this.
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

function flipAllCards() {
	for (let i in quiz) {
		let divId = "divQuestion"+i;
		let div = `<div id='divQuestion${i}'>${quiz[i].question}</div>`;
		flashcards.innerHTML=flashcards.innerHTML+div;
		console.log(div);
	}
	for (let i in quiz) {
		let divId = "divQuestion"+i;
		document.getElementById(divId).addEventListener("click", function (){showAnswer(i)});
	}
}
		
