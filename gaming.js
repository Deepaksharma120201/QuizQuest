const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('option-text'));
const progressText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const game = document.getElementById('game');
const loader = document.getElementById('loader');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let questions = [];

fetch("https://api.allorigins.win/raw?url=https://api.jsonserve.com/Uw5CrX")
    .then((res) => res.json())
    .then((data) => {
        if (!data.questions || data.questions.length === 0) {
            console.error("No questions found in the response data.");
            return;
        }
        questions = data.questions.map((q) => {
            return {
                question: q.description || "No question text available",
                choices: q.options.map(opt => opt.description || "No option text"),
                answer: q.options.findIndex(opt => opt.is_correct) + 1
            };
        }).filter(q => q !== null);

        console.log("Parsed Questions:", questions);
        startGame();
    })
    .catch((err) => {
        console.error("Error fetching quiz data:", err);
    });

const CORRECT_BONUS = 4;
const INCORRECT_BONUS = -1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('score.html');
    }
    questionCounter++;
    progressText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    // Correctly assign choices to the HTML elements
    choices.forEach((choice, index) => {
        choice.innerHTML = currentQuestion.choices[index];
        choice.dataset['number'] = index + 1;
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            score += CORRECT_BONUS;
            scoreText.innerText = `Score: ${score}`;
        } else {
            score += INCORRECT_BONUS;
            scoreText.innerText = `Score: ${score}`;
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
