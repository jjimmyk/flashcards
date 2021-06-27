//Define the class of questions.
class question {
  constructor(question, answer, image) {
    this.question = question;
    this.answer = answer;
    this.image = image;
    this.correct = false;
  }
}
  
//Create the array of quiz flashcards. 
let quiz = [];

//Add the three objects to the array.
quiz.push(new question('What is 3+5?', '8', "flashcards/images/Screen Shot 2021-06-25 at 10.16.40 PM.png"));
quiz.push(new question('What is your favorite color?', 'blue', "flashcards/images/Screen Shot 2021-06-25 at 10.17.05 PM.png"));
quiz.push(new question('What is the optimal swallow velocity?', 'I do not know!', "flashcards/images/Screen Shot 2021-06-25 at 10.17.29 PM.png"));

//Declare the variable flashcards.
//Set the current index to 0.
let flashcards = null;
let currentIndex=0;

//Define the function pageLoad:
//Set the variable flashcards to the HTML element with ID flashcards.
//Add an event listener to variable flashcards that on a click calls the function showAnswer.
//Add an event listener to the HTML element with ID btnNext (the next button). When the next button is clicked, call function showNext.
//Finally, call the function flipCard, defined below, with parameter 0 to reveal the first question.
function pageLoad()
{
	flashcards=document.getElementById("flashcards");
	flashcards.addEventListener("mouseover", function () {showAnswer()});
	document.getElementById("btnNext").addEventListener("click", function() {showNext()});
	message=document.getElementById("message");
	message.innerHTML = "Please hover your cursor over the question to see the answer.";
	
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
	document.getElementById("image").src="";
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
	document.getElementById("image").src=quiz[currentIndex].image;
}
