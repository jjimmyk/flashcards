const questionObject = {
  question: 'What is my question?',
  answer: 'This is my answer',
  displayQuestion: function () {
 
  alert( this.question );
 
  }
}
class question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.correct = false;
  }
}
let quiz = [];

quiz.push(new question('What is 3+5?', '8'));
quiz.push(new question('What is your favorite color?', 'blue, I mean red'));
quiz.push(new question('What is optimal swallow velocity?', 'I do not know!'));

let i = 0;
while (i < quiz.length) {
  console.log(quiz[i].question + " " + quiz[i].answer);
  i++;
}
