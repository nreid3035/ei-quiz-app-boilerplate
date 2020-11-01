/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'On what holiday did the rising of 1916 happen in Dublin?',
      answers: [
        'Christmas',
        'Easter',
        'New Years',
        'Thanksgiving'
      ],
      correctAnswer: 'Easter'
    },
    {
      question: 'How many people were executed in Kilmainham Gaol the day of this rising?',
      answers: [
        '1',
        '4',
        '8',
        '16'
      ],
      correctAnswer: '16'
    },
    {
      question: 'What was the purpose of the 1981 hunger strike in Belfast?',
      answers: [
        'To protest for civil rights',
        'To protest against voter suppression',
        'To protest for political prisoners rights',
        'To gain political power'
      ],
      correctAnswer: 'To protest for political prisoners rights'
    },
    {
      question: 'How many days did Bobby Sands survive his hunger strike before passing?',
      answers: [
        '81',
        '28',
        '66',
        '53'
      ],
      correctAnswer: '66'
    },
    {
      question: 'How many counties of Ireland are still under British Rule?',
      answers: [
        '4',
        '6',
        '12',
        '20'
      ],
      correctAnswer: '6'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function returnStartPage() {
  // 1. layout html for starting page with start quiz button
  return `
  <div class="main-content-container">
    <p>This quiz contains history questions relating to the continuous war for freedom in Ireland</p>
    <button id="start-quiz-button" type="button">Start Quiz</button>  
  </div>`

}
function returnQuestionLayout() {
  // 1. layout the html for the questions with dynamic capabilities
  let questionIdx = store.questionNumber - 1;
  return `
  <div class="status">
        <h2>Question Number ${store.questionNumber}/${store.questions.length}</h2>
        <h2>Current Score ${store.score}/${store.questions.length}</h2>
      </div>
        <form action="">
            <h4>Question: ${store.questions[questionIdx].question}</h4>
          <div class="radio-button">  
            <input type="radio" name="answer">
            <label for="answer-one">${store.questions[questionIdx].answers[0]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" name="answer">
            <label for="answer-two">${store.questions[questionIdx].answers[1]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" name="answer">
            <label for="answer-three">${store.questions[questionIdx].answers[2]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" name="answer">
            <label for="answer-four">${store.questions[questionIdx].answers[3]}</label>
          </div>
            <input id="submit-button" type="submit" name="submit-button">
        </form>`
}

function returnAnsweredQuestionLayout() {
  // layout html for an answered question
  return `
  <div class="status">
        <h2>Question Number question number/5</h2>
        <h2>Current Score score</h2>
      </div>
        <form action="">
            <h4>Question: </h4>
          <div>  
            <input type="radio" name="answer-one">
            <label for="answer-one">Answer 1</label>
          </div>
          <div class="radio-button">
            <input type="radio" name="answer-two">
            <label for="answer-two">Answer 2</label>
          </div>
          <div class="radio-button">
            <input type="radio" name="answer-three">
            <label for="answer-three">Answer 3</label>
          </div>
          <div class="radio-button">
            <input type="radio" name="answer-four">
            <label for="answer-four">Answer 4</label>
          </div>
        </form>
        <button id="next-question">Next Question</button>`
        }

function returnFinalScoreLayout() {
  // 1. layout the html for final score page
  return `
  <div class="final-p-container">
          <p>Based on your score this message will tell you how well you know irish history</p>
      </div>
      <h2>Display final score here</h2>
      <div>
          <img src="" alt="ireland-photo">
      </div>
      <button>Start Quiz</button>`
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  // 1. update everytime the store is updated
  if (store.quizStarted === false) {
    console.log(returnStartPage());
    $('main').html(returnStartPage());
  }
  if (store.questionNumber > 5) {
    console.log(returnFinalScoreLayout());
  }
  if ((store.quizStarted === true) && (store.questionNumber > 0)) {
    console.log(returnQuestionLayout());
    emptyMain();
    $('main').append(returnQuestionLayout());
  }
  // 2. render start page if quizStarted is false
  // 3. render question one when quizStarted is switched to true
  // 4. render a new question based on the questionNumber variable
  // 5. if questionNum > 5 render finalscore page
}
/********** MICELLANIOUS FUNCTIONS **********/
function emptyMain() {
  // 1. empty the main section of content
  $('main').empty();
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function startQuiz() {
  // on click of startquiz button empty main container then render 1stQuestion
  $('main').on('click', '#start-quiz-button', function(event) {
    store.quizStarted = true;
    store.questionNumber = 1
    render();

  })

}

function updateQuestionNumber() {
  // on click of next Question add one to questionNumber
  $('#next-question').on('click', function(event) {
    return store.questionNumber++
  })
}

function updateScoreNumber() {
  // on click of submit button check if answer is correct, if answer is correct, add 1 to score
  $('#submit-button').on('submit', function(event) {
    // prevent default of submit button
  event.preventDefault();
  if (answer === correctAnswer) { // redo with proper variables to check
    store.score++
  }
  })
}

function submitQuestion() {
  // 1. if answer is correct display element saying correct else display element saying wrong
  // 2. change submit button to next question button
  // 3. if question 5 change submit button to see results button.
  // 4. update score number
}

function nextQuestion() {
  // on click of next button, erase previous content, render next question
  $('#next-question').on('click', function(event) {
    emptyMain();
  })
}

function seeResults() {
  // 1. remove html elements from page
  // 2. render final page html
  // 3. change button to start quiz button
}




// use this function to run all other functions
function runFunctions() {
  $(emptyMain());
  $(startQuiz());
  $(updateQuestionNumber());
  $(updateScoreNumber());
  $(submitQuestion());
  $(nextQuestion());
  $(seeResults());
  $(render());
}

$(runFunctions)