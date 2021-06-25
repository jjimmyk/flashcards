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

//Declare the variable flashcards.
//Set the current index to 0.
let flashcards = null;
let currentIndex=0;

//Define the function pageLoad:
//Set the variable flashcards to the HTML element with ID flashcards.
//Add an event listener to variable flashcards that on a click calls the function showAnswer.
//Add an event listener to the HTML element with ID btnNext (the next button). When the next button is clicked, call function showNext.
//Finally, call the function flipCard, defined below, with parameter 0 to reveal the first question.
function pageLoad ()
{
	flashcards=document.getElementById("flashcards");
	flashcards.addEventListener("click", function () {showAnswer()});
	document.getElementById("btnNext").addEventListener("click", function() {showNext()});
	flipCard(0);
}

//Define the function flipCard:
//Set the current index to i.
//Set the inner HTML of variable flashcards to be the question element of the relevant index within array quiz, revealing the relevant question.
function flipCard(i) {
	currentIndex=i;
	flashcards.innerHTML = quiz[i].question;
	}



//Define the function showNext:
//Make the displayed answer disappear by setting the innerHTML of the HTML element with ID "answer" to "".
//If the current index is less than the length of the quiz array -1, call flipCard and increment the current index to reveal the next question.
//If we've reached the last item in the array, then display the first question in the array.
function showNext() {
	document.getElementById("answer").innerHTML="";
	if (currentIndex < quiz.length -1)
		flipCard(++currentIndex);
	else
		flipCard(0);
}

//Define the function showAnswer:
//Set the inner HTML of the HTML element with ID answer to the answer element of the current index. 
//Basically, this will display the answer element of object at the current index on the webpage.
function showAnswer()
{
	document.getElementById("answer").innerHTML=quiz[currentIndex].answer;
}



//Define the function flipAllCards:
//For the index in the array quiz, declare variable divId to be divQuestion + the index. 
//Declare variable div to be the question element of the relevant index in the array.
//Make flashcards add the variable div to its display.
//Log variable div to the console.
function flipAllCards() {
	for (let i in quiz) {
		let divId = "divQuestion"+i;
		let div = `<div id='divQuestion${i}'>${quiz[i].question}</div>`;
		flashcards.innerHTML=flashcards.innerHTML+div;
		console.log(div);
	}
	//Add an event listener to the element with ID divID that waits for a click. On click, call function showAnswer on the relevant index to reveal the answer.
	for (let i in quiz) {
		let divId = "divQuestion"+i;
		document.getElementById(divId).addEventListener("click", function (){showAnswer(i)});
	}
}
