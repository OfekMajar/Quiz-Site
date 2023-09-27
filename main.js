class Quiz {
  constructor(question, choice, answer) {
    this.question = question;
    this.choice = choice;
    this.answer = answer;
  }
}
const quizData = [
  new Quiz(
    "What is the capital of France?",
    ["London", "Berlin", "Madrid", "Paris"],
    "Paris"
  ),
  new Quiz(
    "Which planet is known as the Red Planet?",
    ["Mars", "Venus", "Jupiter", "Saturn"],
    "Mars"
  ),
  new Quiz(
    "Which gas do plants absorb from the atmosphere?",
    ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "Carbon Dioxide"
  ),
  new Quiz(
    "Who wrote the play 'Romeo and Juliet'?",
    ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    "William Shakespeare"
  ),
  new Quiz(
    "What is the largest mammal on Earth?",
    ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    "Blue Whale"
  ),
  new Quiz(
    "Which country is known as the Land of the Rising Sun?",
    ["South Korea", "China", "Japan", "Thailand"],
    "Japan"
  ),
  new Quiz(
    "What is the chemical symbol for gold?",
    ["Au", "Ag", "Fe", "Hg"],
    "Au"
  ),
  new Quiz(
    "In which year did Christopher Columbus first arrive in the Americas?",
    ["1492", "1507", "1520", "1535"],
    "1492"
  ),
];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(quizData[0].choice);
let questionCounter = 1;
let correctAnswers = 0;
theQuestion.innerText = quizData[0].question;
let cardsCollection = document.getElementsByClassName("card2");
let selectedCard;
for (let i = 0; i < cardsCollection.length; i++) {
  cardsCollection[i].addEventListener("click", () => {
    selectedCard = i;
    styleOnlySelectedCard(selectedCard);
  });
  cardsCollection[i].innerText = quizData[0].choice[i];
}
document.querySelector(
  "#numberOfCorrectAnswers"
).innerText = `Correct answers: ${correctAnswers}/${quizData.length}`;
function styleOnlySelectedCard(i) {
  for (let j = 0; j < cardsCollection.length; j++) {
    if (i != j) {
      cardsCollection[j].style.width = "190px";
      cardsCollection[j].style.height = "254px";
      cardsCollection[j].style.backgroundColor = "#1a1a1a";
      cardsCollection[j].style.borderRadius = "0px";
      cardsCollection[j].style.transition = "all 0.2s";
      cardsCollection[j].style.transform = ``;
    } else {
      cardsCollection[j].style.borderRadius = "20px";
      cardsCollection[j].style.transform = `scale(0.98)`;
    }
  }
}
function checkAnswer() {
  if (quizData[0].choice[selectedCard] === quizData[0].answer) {
    correctAnswers++;
    document.querySelector(
      "#numberOfCorrectAnswers"
    ).innerText = `Correct answers: ${correctAnswers}/${quizData.length}`;
    console.log("Correct");
  } else {
    console.log("Incorrect");
  }
}
function nextQuestion() {
  if (questionCounter >= quizData.length) {
    document.querySelector("#sumbitAnswer").disabled = true;
  } else {
    shuffleArray(quizData[questionCounter].choice);
    document.querySelector("#numberOfQuestion").innerText = ` question: ${
      questionCounter + 1
    }/${quizData.length}`;
    theQuestion.innerText = quizData[questionCounter].question;
    for (let i = 0; i < cardsCollection.length; i++) {
      cardsCollection[i].innerText = quizData[questionCounter].choice[i];
    }

    questionCounter++;
  }
}
sumbitAnswer.addEventListener("click", function () {
  
  checkAnswer();
  nextQuestion();
});
document.querySelector(
  "#numberOfQuestion"
).innerText = ` question: 1/${quizData.length}`;
