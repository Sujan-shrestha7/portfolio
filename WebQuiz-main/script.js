const questions= [
    {
        question:"What is the exact speed of light ?",
        answers:[
            {text:"299720 km/s", correct:true},
            {text:"299760 km/s", correct:false},
            {text:"300000 m/s", correct:false},
            {text:"186000 m/s", correct:false},
        ]
    },
    {
        question:"What the name of our galaxy?",
        answers:[
            {text:"Earthomeda galaxy", correct:false},
            {text:"Milky way galaxy", correct:true},
            {text:"Milkomeda galaxy", correct:false},
            {text:"Scorpian galaxy", correct:false},
        ]
    },
    {
        question:"What is the rotation speed of earth around the Sun?",
        answers:[
            {text:"68000km/s", correct:false},
            {text:"28000 km/s", correct:false},
            {text:"66600 Miles/hour", correct:true},
            {text:"87000 Km/hour ", correct:false},
        ]
    },
    {
        question:"What is the closest star to Earth?",
        answers:[
            {text:"Beteleugse", correct:false},
            {text:"Ton-18", correct:false},
            {text:"Alpho Cenatauri", correct:true},
            {text:"Sirius ", correct:false},
        ]
    },
    {
        question:"What is the most common type of star in the Milky Way galaxy?",
        answers:[
            {text:"Red dwarfs", correct:false},
            {text:"White dwarfs", correct:true},
            {text:"Yellow dwarfs", correct:false},
            {text:"Blue giants", correct:false},
        ]
    },
    {
        question:"Which planet is known as the “Evening Star”",
        answers:[
            {text:"Mars", correct:false},
            {text:"Venus", correct:true},
            {text:"Saturn", correct:false},
            {text:"Jupiter", correct:false},
        ]
    },
];
const  questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("ans-buttons");
const  nextButtom = document.getElementById("next-btn");

let currentQnsIndex = 0;
let score=0;
function startQuiz(){
    currentQnsIndex=0;
    score=0;
    nextButtom.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQns = questions[currentQnsIndex];
    let questionNo = currentQnsIndex +1;
    questionElement.innerHTML = questionNo+"."+currentQns.question;
     currentQns.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
     });
}
function resetState() {
    nextButtom.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect =  selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{    // check the ans for each button and after finding correct it adds the correct class ans it will turn of the button
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nextButtom.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You've scored ${score} out of ${questions.length}`;
    nextButtom.innerHTML = "play Again?";
    nextButtom.style.display ="block";
}
function handleNextButton(){
    currentQnsIndex++;
    if(currentQnsIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButtom.addEventListener("click",()=>{
    if(currentQnsIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();