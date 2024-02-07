const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const nextBtn = document.querySelector('.next-btn'); // Die nächste Schaltfläche auswählen

startBtn.addEventListener= ('click', () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
});

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
}

let questionCount = 0;

nextBtn.onclick = () => {
    questionCount++;
    showQuestions(questionCount);
}

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    // Es scheint, dass du Template-Strings verwenden wolltest, aber du hast Backticks nicht verwendet
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    // Hier musst du die Optionen auswählen und den Text für jede Option setzen
    const optionList = document.querySelectorAll('.option span');
    optionList[0].textContent = questions[index].options[0];
    optionList[1].textContent = questions[index].options[1];
    optionList[2].textContent = questions[index].options[2];
}

// Hier ist ein Beispiel-Array von Fragen für dein Quiz
const questions = [
    {
        numb: 1,
        question: "Was ist ein Merkmal von Fake News?",
        options: [
            "Sie basieren immer auf Fakten.",
            "Sie sind oft gut recherchiert.",
            "Sie verbreiten falsche oder irreführende Informationen."
        ],
        answer: "Sie verbreiten falsche oder irreführende Informationen."
    },
    // Weitere Fragen hier hinzufügen...
];

