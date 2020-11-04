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
  score: 0,
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
  <div id='question-page'>
      <div class="status">
        <h2>Question Number ${store.questionNumber}/${store.questions.length}</h2>
        <h2>Current Score ${store.score}/${store.questions.length}</h2>
      </div>
        <form action="">
            <h4>Question: ${store.questions[questionIdx].question}</h4>
          <div class="radio-button">  
            <input type="radio" required name="answer" id="answer-one" class="stop-answer" value="${store.questions[questionIdx].answers[0]}">
            <label for="answer-one">${store.questions[questionIdx].answers[0]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" required  name="answer" id="answer-two" class="stop-answer" value="${store.questions[questionIdx].answers[1]}">
            <label for="answer-two">${store.questions[questionIdx].answers[1]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" required  name="answer" id="answer-three" class="stop-answer" value="${store.questions[questionIdx].answers[2]}">
            <label for="answer-three">${store.questions[questionIdx].answers[2]}</label>
          </div>
          <div class="radio-button">
            <input type="radio" required  name="answer" id="answer-four" class="stop-answer" value="${store.questions[questionIdx].answers[3]}">
            <label for="answer-four">${store.questions[questionIdx].answers[3]}</label>
          </div>
            <input id="submit-button" type="submit" name="submit-button" class="stop-answer">
        </form>
  </div>`
}


function returnFinalScoreLayout() {
  // 1. layout the html for final score page
  return `
    <div id='final-container'>
      <div class="final-p-container">
          <p>${scoreMessage()}</p>
      </div>
      <h2>${store.score}/${store.questions.length}</h2>
      <div id='img-container'>
          <img src="../images/ireland-three.jpg" alt="ireland-photo">
      </div>
      <button id='retake-button'>Retake Quiz</button>
    </div>`
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
    $('main').html(returnFinalScoreLayout());
  }
  if ((store.quizStarted === true) && (store.questionNumber > 0)) {
    console.log(returnQuestionLayout());
    emptyMain();
    $('main').html(returnQuestionLayout());
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

function updateQuestionNumber() {
  return store.questionNumber++
}

function updateScore() {
  return store.score++
}

function checkAnswer(choice, correctAnswer) {
  if (choice === correctAnswer) {
    return true;
  }
  return false;
}

function scoreMessage() {
  if (store.score >= 3) {
    return 'You deserve a drink! You know your history.'
  } else {
     return 'Better start hitting the books and not the pubs!'
  }
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function startQuiz() {
  // on click of startquiz button empty main container then render 1stQuestion
  $('main').on('click', '#start-quiz-button', function(event) {
    store.quizStarted = true;
    updateQuestionNumber();
    render();

  })

}

function submitQuestion() {
  $('main').on('submit', 'form', function(event) {
    event.preventDefault();
    store.questionAnswered = true;
    let radioValue = $('input[name="answer"]:checked').val();
    if (checkAnswer(radioValue, store.questions[store.questionNumber - 1].correctAnswer)) {
      updateScore();
      render();
      $('main').append(`<p>Correct</p>
      <button id='next-button'>Next Question</button>`);
    } else {
      render();
      $('main').append(`<div>
      <p>Not Correct</p>
      <button id='next-button'>Next Question</button>
      </div>)`);
    }
    $('.stop-answer').prop('disabled', true);
  })

}

function nextQuestion() {
  // on click of next button, erase previous content, render next question
  $('main').on('click', '#next-button', function(event) {
    emptyMain();
    updateQuestionNumber();
    render();
  })
}

function retakeQuiz() {
  $('main').on('click', '#retake-button', function(event) {
    emptyMain();
    store.quizStarted = false;
    store.score = 0;
    store. questionNumber = 0;
    render();
  })
}




// use this function to run all other functions
function runFunctions() {
  $(emptyMain());
  $(startQuiz());
  $(submitQuestion());
  $(nextQuestion());
  $(retakeQuiz());
  $(render());
}

$(runFunctions)