class Quiz {
  constructor(question, choice, answer) {
    this.question = question;
    this.choice = choice;
    this.answer = answer;
  }
}
const quizData = [new Quiz("how many genders are there?", [1, 5, 3, 2], 2)];
theQuestion.innerText = quizData[0].question;
let cardsCollection = document.getElementsByClassName("card2");
let selectedCard;
for (let i = 0; i < cardsCollection.length; i++) {
  cardsCollection[i].addEventListener("click", () => {
    selectedCard = i;
    console.log(selectedCard);
    styleOnlySelectedCard(i);
  });
  cardsCollection[i].innerText = quizData[0].choice[i];
}

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
sumbitAnswer.addEventListener("click", function () {
  if (quizData[0].choice[selectedCard] === quizData[0].answer)
    console.log("Correct");
  else console.log("Incorrect");
});
