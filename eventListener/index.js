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
//Call the function flipCard (defined below).
function pageLoad ()
{
	flashcards=document.getElementById("flashcards");
	flashcards.addEventListener("click", function () {showAnswer()});
	document.getElementById("btnNext").addEventListener("click", function() {showNext()});
	flipCard(0);
}

//Define the function flipCard:
//For the relevant index within the array quiz, add an event listener onto the question element of the object.  The event listener calls the function showAnswer,
//defined below, on the relevant object at index i within array quiz.
function flipCard(i) {
	currentIndex=i;
	flashcards.innerHTML = quiz[i].question;
	}


function showNext() {
	document.getElementById("answer").innerHTML="";
	if (currentIndex < quiz.length -1)
		flipCard(++currentIndex);
	else
		flipCard(0);
}

//Define the function showAnswer:
//Set the inner HTML of the element with ID divQuestion+1 to the answer element of the object at index i within the array quiz.
function showAnswer()
{
	document.getElementById("answer").innerHTML=quiz[currentIndex].answer;
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
