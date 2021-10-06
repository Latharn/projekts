let questions = [
    {
        "question": "Wie viele Zähne hat ein erwachsener Mensch normalerweise?",
        "answer_1": "26",
        "answer_2": "30",
        "answer_3": "32",
        "answer_4": "36",
        "right_answer": "3",
    },
    {
        "question": "Wer wählt den Bundespräsidenten?",
        "answer_1": "Bundeskanzler",
        "answer_2": "Bundestag",
        "answer_3": "Bundesrat",
        "answer_4": "Bundesversammlung",
        "right_answer": "4",
    },
    {
        "question": "Wie hoch ist die Mehrwertsteuer in Deutschland?",
        "answer_1": "19%",
        "answer_2": "18%",
        "answer_3": "17%",
        "answer_4": "16%",
        "right_answer": "1",
    },
    {
        "question": "In welcher Einheit wird der elektrische Widerstand gemessen?",
        "answer_1": "Volt",
        "answer_2": "Ampere",
        "answer_3": "Watt",
        "answer_4": "Ohm",
        "right_answer": "4",
    },
    {
        "question": "Wie beginnt Artikel 1 des deutschen Grundgesetzes?",
        "answer_1": "Alle Menschen sind vor dem Gesetz gleich",
        "answer_2": "Jeder hat das Recht auf die freie Entfaltung seiner Persönlichkeit",
        "answer_3": "Die Würde des Menschen ist unantastbar",
        "answer_4": "Jeder hat das Recht, seine Meinung in Wort, Schrift und Bild frei zu äußern",
        "right_answer": "3",
    },
    {
        "question": "Wer gilt als Verfasser der amerikanischen Unabhängigkeitserklärung?",
        "answer_1": "Thomas Jefferson",
        "answer_2": "Benjamin Franklin",
        "answer_3": "George Washington",
        "answer_4": "John Adams",
        "right_answer": "1",
    },
    {
        "question": "Wie viele Planeten hat unser Sonnensystem?",
        "answer_1": "10",
        "answer_2": "7",
        "answer_3": "8",
        "answer_4": "9",
        "right_answer": "3",
    },
    {
        "question": "Wie lautet der Satz des Phytagoras",
        "answer_1": "a²*b²=c²",
        "answer_2": "a²+b²=c²",
        "answer_3": "c²:b²=a²",
        "answer_4": "b²-a²=c²",
        "right_answer": "2",
    },

]
let currentQuestion = 0;
let rightQuestions = 0;
let audio_sucess=new Audio('audio/success.mp3');
let audio_fail=new Audio('audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}
function showQuestion() {
    if (gameIsOver()) { //show endscreen
        showEndscreen();

    } else {//show question
        updateProgressBar();
        updateToNextQuestion();
    }
}
function gameIsOver(){
    return currentQuestion >= questions.length;
}
function updateProgressBar(){
    let percent = (currentQuestion+1)/questions.length;
    percent=percent *100;
    document.getElementById('progress-bar').style.width=`${percent}%`;
    document.getElementById('progress-bar').innerHTML=`${percent}%`;
}

function updateToNextQuestion(){
        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
}
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_sucess.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_fail.play();
    }
    document.getElementById('next-question').disabled = false;
}
function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-question').disabled = true;
    resetAnswerButtons();
    showQuestion();

}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function showEndscreen(){
    document.getElementById('endscreen').style= '';
    document.getElementById('question-body').style='display: none;';
    document.getElementById('amount-of-questions').innerHTML= questions.length
    document.getElementById('amount-of-right-questions').innerHTML= rightQuestions;
}
function restart(){
     rightQuestions=0;
    currentQuestion=0;
    document.getElementById('endscreen').style='display:none;';
    document.getElementById('question-body').style='';
     init();
   
    
}