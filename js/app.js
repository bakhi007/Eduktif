"use-strict";
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = quiz.length; //quiz.length untuk semua pertanyaan, 5 atau berapa untuk batasan pertanyaan

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

// //push the question into availableQuestions Array
function setAvailableQuestions() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

//jika ingin menampilkan hanya beberapa pertanyaan (tidak semuanya), cukup ganti questionLimit dibawah menjadi questionLimit
//set questionNumber and question and options
function getNewQuestion() {
  //set question number
  questionNumber.innerHTML = "Pertanyaan " + (questionCounter + 1) + " dari " + questionLimit;
  //set question text and random question
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  //get the positio of questionIndex from the availableQuestion array
  const index1 = availableQuestions.indexOf(questionIndex);

  //remove the question index
  availableQuestions.splice(index1, 1);

  if (currentQuestion.hasOwnProperty("img")) {
    const img = document.createElement("img");
    img.src = currentQuestion.img;
    questionText.appendChild(img);
  }

  const optionlen = currentQuestion.options.length;
  for (let i = 0; i < optionlen; i++) {
    availableOptions.push(i);
  }

  optionContainer.innerHTML = "";
  let animationDelay = 0.15;

  for (let i = 0; i < optionlen; i++) {
    const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

    const index2 = availableOptions.indexOf(optionIndex);
    availableOptions.splice(index2, 1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }
  questionCounter++;
}

function checkNama(element) {
  const nama = element.value;
  document.querySelector("#namaField").innerHTML = nama;
}

function checkKelas(element) {
  const kelas = element.value;
  document.querySelector("#kelasField").innerHTML = kelas;
}

function getResult(element) {
  const id = parseInt(element.id);
  if (id === currentQuestion.answer) {
    element.classList.add("correct");
    updateAnswerIndicator("correct");
    correctAnswers++;
  } else {
    element.classList.add("wrong");
    updateAnswerIndicator("wrong");

    const optionlen = optionContainer.children.length;
    for (let i = 0; i < optionlen; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }
  attempt++;
  unclickableOptions();
}

function unclickableOptions() {
  const optionlen = optionContainer.children.length;
  for (let i = 0; i < optionlen; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
}

function answersIndicator() {
  answersIndicatorContainer.innerHTML = "";
  const totalQuestion = questionLimit;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(markType);
}

function next() {
  if (questionCounter === questionLimit) {
    quizOver();
  } else {
    getNewQuestion();
  }
}

function quizOver() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  quizResult();
}

function quizResult() {
  resultBox.querySelector(".total-question").innerHTML = questionLimit;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  const percentage = (correctAnswers / attempt) * 100;
  resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
  const scores = (correctAnswers / attempt) * 100;
  resultBox.querySelector(".total-score").innerHTML = scores.toFixed(2);
}

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  availableQuestions = [];
}

function tryAgainQuiz() {
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}

function goToHome() {
  resultBox.classList.add("hide");
  homeBox.classList.remove("hide");
  resetQuiz();
}

function startQuiz() {
  console.log(document.querySelector("#inputNamaElement"));
  if (document.querySelector("#inputNamaElement")?.value === "") return alert("Mohon masukkan nama sebelum memulai tes");
  if (document.querySelector("#inputKelasElement")?.value === "") return alert("Mohon masukkan kelas sebelum memulai tes");
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  setAvailableQuestions();
  getNewQuestion();
  answersIndicator();
}

window.onload = function () {
  homeBox.querySelector(".total-question").innerHTML = questionLimit;
};
