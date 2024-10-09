let quizData = [
    {topic: 'Geography',
question: 'What is the capital city of Colombia?',
answers: ['Lima', 'Bogota', 'Santiago'],
correctAnswer: 'Bogota',
    },
    {topic: 'History',
        questions: 'What year was the oldest university in Europe founded? ',
        answers:['1088', '1122', '1065'],
        correctAnswer: '1088',
    },
    {topic: 'Biology',
     question: 'Which one of the following belong to unicellular organisms?',
    answers: ['virus', 'bacteria', 'nucleus'],
correctAnswer: 'bacteria',
   },
   {topic: 'Geology',
    question: 'What is the hardest material on Earth?',
    answers: ['pyrite', 'limestone', 'diamond'],
    correctAnswer: 'diamond',
   },

   {topic: 'Art',
    question: 'Which artist painted the portrait of Mona Lisa?',
    answers: ['Loenardo da Vinci', 'Van Gogh', 'Pablo Picasso'],
    correctAnswer: 'Leonardo da Vinci',
   },

   {topic: 'Literature',
    question: 'What id the name of the famous detective series written by Agatha Christie?',
    answers: ['Poirot', 'Sherlock Holmes', 'Columbo'],
    correctAnswer: 'Poirot',
   },
   {topic: 'Math',
    question: 'What is the sum of 13x14?',
    answers: ['178', '165', '182'],
    correctAnswer:'182',
   },
   {topic: 'Physics',
    question: 'An object is weightless when:',
     answers: ['in motion', 'stationary', 'in freefall'],
     correctAnswer: 'stationary',
   }
   

];

let questionContainer = document.getElementById('question-container');
let answerContainer = document.getElementById('answer-container');
let currentQuestionIndex =0;
let score = 0;
let timer;
let timeLeft = 15; //15 seconds per question
let quizStartTime;
let timerContainer = document.getElementById('timer-container');



function loadQuestion(){

};

function checkAnswer(){};

function startTimer(){};

function resetTimer(){};

function timeUp(){};

function showResults(){};

function resetQuiz(){};

function restartQuiz(){};