document.addEventListener('DOMContentLoaded', ()=>{
    loadQuestion(currentQuestionIndex);
});

let quizData = [
    {topic: 'Geography',
question: 'What is the capital city of Colombia?',
answers: ['Lima', 'Bogota', 'Santiago'],
correctAnswer: 'Bogota',
    },
    {topic: 'History',
        question: 'What year was the oldest university in Europe founded?',
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
    answers: ['Leonardo da Vinci', 'Van Gogh', 'Pablo Picasso'],
    correctAnswer: 'Leonardo da Vinci',
   },

   {topic: 'Literature',
    question: 'What is the name of the famous detective series written by Agatha Christie?',
    answers: ['Poirot', 'Sherlock Holmes', 'Colombo'],
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
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15; //15 seconds per question
let quizStartTime;
let timerContainer = document.getElementById('timer-container');



function loadQuestion(index) {
if(currentQuestionIndex===0){
    quizStartTime = new Date();
}

//Set the question and topic in the question container
questionContainer.innerHTML=`<p><strong>Topic:</strong> ${quizData[index].topic}</p><br>
<p>${quizData[index].question}</p>`;

//clear previous answers
answerContainer.innerHTML="";
resetTimer();
startTimer();

//Loop through the answers array and create buttons
quizData[index].answers.forEach((answer)=> {
    let button = document.createElement('button');
    button.classList.add('answer-btn');
    button.textContent=answer;

    //Add click event to handle answer selection
      button.addEventListener('click', () =>{
      checkAnswer(answer, quizData[index].correctAnswer);
    });
    answerContainer.appendChild(button);
});
};


function checkAnswer(selectedAnswer, correctAnswer) {
    if(selectedAnswer===correctAnswer) {
        score++
    }
    //Load the next question after the answer is checked
    currentQuestionIndex++;
    if(currentQuestionIndex<quizData.length){
        loadQuestion(currentQuestionIndex);
    }else{
        showResults();
    }
};

function startTimer() {
    timerContainer.style.display ='block';
    timeLeft = 15;
    timerContainer.textContent = `Time left: ${timeLeft} seconds`;

    timer = setInterval(() =>{
        timeLeft--;
        timerContainer.textContent=`Time left: ${timeLeft} seconds!`;
        

        if(timeLeft <= 0) {
            clearInterval(timer);
            timeUp();//handle when time runs out
        }
    }, 1000);
};

function resetTimer() {
    clearInterval(timer);
};

function timeUp() {
    currentQuestionIndex++;
    if(currentQuestionIndex < quizData.length){
        loadQuestion(currentQuestionIndex);
    }else{
        showResults();
    }
};



function showResults() {
    resetQuiz()
    questionContainer.innerHTML="<h2>Quiz Completed!</h2>";
    //Calculate the total time taken
    let quizEndTime = new Date();
    let timeTaken = Math.floor((quizEndTime - quizStartTime)/1000);//Convert to seconds

    //Display user's score
    let scoreMessage = document.createElement('p');
    scoreMessage.innerHTML = `You scored ${score} out of ${quizData.length} in ${timeLeft} seconds!`;

    questionContainer.appendChild(scoreMessage);

    //Create  restart button
    let restartButton = document.createElement('button');
    restartButton.textContent="Restart Quiz";
    restartButton.classList.add('restart-btn');
    restartButton.addEventListener('click', restartQuiz);
    answerContainer.appendChild(restartButton);
    timerContainer.style.display = 'none';
    
    
};

function resetQuiz() {
    answerContainer.innerHTML = '';
};

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timerContainer.style.display = 'block';
    loadQuestion(currentQuestionIndex);
};