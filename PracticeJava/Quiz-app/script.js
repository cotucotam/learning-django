const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
  },
  {
    question: 'what is the most used programming languge in 2023?',
    a:'Java',
    b:'C',
    c:'Python',
    d:'JavaScript',
    correct:'d'
  },
  {
    question: 'who is the President of Us?',
    a:'Florin Pop',
    b:'Donald Trump',
    c:'Ivan Saldano',
    d:'Mihai Andrei',
    correct:'b'
  },
  {
    question: 'What does HTML stand for?',
    a:'1',
    b:'2',
    c:'3',
    d:'4',
    correct:'a'
  },
  {
    question: 'what is your name?',
    a:'tam',
    b:'tu',
    c:'tutu',
    d:'tamtam',
    correct:'a'
  },
]

let currentQuiz = 0;
let score = 0;
let answer = undefined;

const quiz = document.getElementById("quiz")
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
loadQuiz();

function loadQuiz(){
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;  
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected(){

  let answer = undefined;
  answerEls.forEach((answerEl)=>{
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl)=>{
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click",() =>{

  //check to see the answer
  const answer = getSelected();
  console.log(answer);
  if(answer)
  {
    if(answer === quizData[currentQuiz].correct){
      console.log(quizData[currentQuiz].correct);
      score ++;   
    }
    currentQuiz++;
    if (currentQuiz < quizData.length){
      loadQuiz();
    }
    else{
      quiz.innerHTML = `<h2> You answer correctly ${score}/${quizData.length} </h2>
      <button onclick="location.reload()">Reload</button>`
      alert("you finished!");
    }
 }
});

