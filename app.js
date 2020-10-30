/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'On what holiday di dthe rising of 1916 happen in Dublin?',
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
    }
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
function emptyMain() {
  // 1. empty the main section of content
}
function returnStartPage() {
  // 1. layout html for starting page with start quiz button
  // 2. append this html to the main section of the page on initial upload
}
function returnQuestionLayout() {
  // 1. layout the html for the questions with dynamic capabilities
}
function returnFinalScoreLayout() {
  // 1. layout the html for final score page
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {
  // 1. update everytime the store is updated
  // 2. render start page if quizStarted is false
  // 3. render question one when quizStarted is switched to true
  // 4. render a new question based on the questionNumber variable
  // 5. if questionNum > 5 render finalscore page
}
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function startQuiz() {
  // 1. remove any added html elements
  // 2. render html for 1st question
}

function updateQuestionNumber() {
  // 1. establish a counter 
  // 2. add 1 to counter and display it to the user
}

function updateScoreNumber() {
  // 1. if answer is correct add one to counter
  // 2. display new counter to user
}

function submitQuestion() {
  // 1. if answer is correct display element saying correct else display element saying wrong
  // 2. change submit button to next question button
  // 3. if question 5 change submit button to see results button.
  // 4. update score number
}

function nextQuestion() {
  // 1. remove previous question form content
  // 2. render new html content
}

function seeResults() {
  // 1. remove html elements from page
  // 2. render final page html
  // 3. change button to start quiz button
}