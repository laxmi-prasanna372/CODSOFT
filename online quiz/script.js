let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  let q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === questions[currentQuestion].answer) {
      btn.style.background = "#4CAF50";
      btn.style.color = "#fff";
    } else if (btn.innerText === answer) {
      btn.style.background = "#f44336";
      btn.style.color = "#fff";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}