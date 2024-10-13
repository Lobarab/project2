#
<h1>Check Your Knowledge Quiz.</h1>

<h2>Description:</h2>

<p> Check Your Knowledge Quiz is a user interactive webpage that offers the user to check their knowledge on various subjects such as art, history, literature, geography etc. The user is presented with 3 options one of which is the correct answer. Also the quiz contains a timer, set for 15 seconds per question.
 </p>

 ![image](/assets/images/Screenshot%202024-10-13%20at%2021.58.47.png)

<h2>Features:</h2>
<p>The quiz webpage has following features:
<ul> <li>Background image corresponding to the nature of the quiz.</li>
<li>Header that describes the aim of the quiz.</li>
<li>A container with question and answers. </li>
<li>Topic of the question subject within the container.</li>
<li>Timer.</li>
<li>Three answer buttons with each containing an answer options</li>
</ul>
</p>

![image](/assets/images/Screenshot%202024-10-13%20at%2021.56.16.png)


<h2>Webpage Structure and Make up:</h2>
<p> The webpage structure is created using HTML, CSS for styling and Javascript for making it dynamic and interactive.</p>
<strong>HTML:</strong>
<p>HTML structure of the quiz webpage has minimal structure with h1 and body containing header container (for h1 styling), main div container and within that question, answers and timer containers. The HTML structure is kept simple as the main goal of the webpage creation is to utilise mostly javascript DOM manipulation by creating and adding elements to html.</p>

<strong>CSS:</strong>
<p><ul><li>The webpage has an abstract background corresponding to the nature of the quiz.</li> 
<li>The header containing h1 is in opaque blue colour with the black font colour</li>
<li>Main container is in lightskyblue colour.</li>
<li>The questions and topics displayed in dark grey font</li>
<li>Timer is displayed in red colour for better contrast and sits above the first answer button</li>
<li>The answer buttons are in darker blue with white font and and go dark blue when mouse hovers on them</li>
</ul>The restart button is of grey colour with white font and chnges to green when mouse hovers on.
Also media queries created in CSS to make the webpage suitable to all screen sizes. </p>

<strong>Javascript:</strong>
<p> The main goal of the webpage is to display the knowlegde of Javascript.</p>
<p>The webpage displays questions with a 15 second timer per question and switches to the next question if the user clicked on one of the answer options or time is more than 15 seconds. At the end of the quiz the page shows the user the amound of correct answers and the amount of taken to answer them. </p>
<p>Following global variables were created in order to be used in functions
<ul>
<li>quizData variable created as an array and had questions and answers as its value. Object within array and array within objects were used to create this variable</li>
<li>questionContainer with linked HTML id.</li>
<li>answerContainer with linked HTML id</li>
<li>currentQuestionIndex with value set at 0.</li>
<li>score variable with value set at 0.</li>
<li>empty timer variable</li>
<li>timeLeft with its value set to 15 as time for each question</li>
<li>quizStartTime without value</li>
<li>timerContainer with liked HTML id</li>

</ul>
</p>
<p>Following functions used in making the webpage dynamic with timer and switich to next questions:
<ul>
<li>loadQuestion for displaying the question and within it, two html elements such as paragraph for displaying the question and topic and button element for displaying the answer options are inserted. Looping through the answers arrays also takes place within this function</li>
<br>
<li>checkAnswer function responsible for checking the answers and if the answer is correct then incrementing the score and it also uses if else conditional statement to check whether the quiz is completed or not.</li>
<br>
<li>startTimer function uses  inbuilt Javascript methods: setInterval(), clearInterval(), Math.floor() to manage the timer and uses timeLeft variable. setInterval() method/arrow function is responsible for decrementing timeLeft and displaying message of remaining seconds.</li>
<br>
<li>resetTimer function</li>
<br>
<li>timeUp function that watches the quiz by checking whether it should continue displaying questions or show result of the quiz.</li>
<br>
<li>showResult function calculates the total time taken for the quiz and tells the user how many questions were answered within a specific/calculated time. New paragraph element is created within this function that displays the message of the results of the quiz. Also restart button as a button element has been appended in the function.</li>
<br>
<li>resetQuiz function </li>
<br>
<li>restartQuiz function restarts the quiz and contains loadQuestion function with currentQuestionindex as a parameter</li>
</ul>
Inbuilt javascript methods used are: new Date(), Math.floor(), setInterval(), clearInterval().
<br>
EventListeners are added to load the DOM content, on answer buttons and restart button. 
Each function is tested with console.log in the console of dev tools within browser.
</p>


<br>
<strong>Testing:</strong>
<ul>
<li>The webpage is responsive in  various screensizes: mobile, tablet, laptop, PC.</li>
<li>The webpage has been tested in different browser such as Safari, Chrome, Firefox.</li>
<li>HTML and CSS files have been checked via W3C Validator and has no errors.</li>
</ul>

<strong>Troubleshooting:</strong>
<p><ul><li>The mobile screen had h1 font leaking to the right and the main container was stuck to the bottom of the page. It was fixed by applying changes to media queries.</li>
<li>Background image was splitting in one third of the laptop screen size and it was fixed by setting "background-size: cover" in CSS</li>
<li>In Javascript, within showResult function I had timerContainer being visible and showing the seconds counting. It was fixed by setting its style.display to "none"</li>
<li> There are no unfixed bugs.</li>
</ul>
</p>


<strong>Accessibility:</strong>
<p>The result of the Dev tools Lighthouse audit for the webpage:

![image](/assets/images/Screenshot%202024-10-13%20at%2022.03.52.png)

</p>

<h2>Deployment:</h2>

<p>The webpage has been deployed on GitHub by choosing main branch /root in Pages section of Settings.
<br>
the link to the webpage:  https://lobarab.github.io/project2/
</p>

<h2>Media:</h2>
<p> Background image has been taken from Pinterest quiz related images.</p>