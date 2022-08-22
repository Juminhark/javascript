const quizData = [
	{
		question: '윤석열은 누구 부하인가?',
		a: '조국',
		b: '추미애',
		c: '김종인',
		correct: 'b',
	},
	{
		question: '임기중 파면된 대통령은?',
		a: '문재인',
		b: '노무현',
		c: '박근혜',
		correct: 'c',
	},
	{
		question: '국민의 힘당의 전신이 아닌것은?',
		a: '새누리당',
		b: '민주자유당',
		c: '민주통합당',
		correct: 'c',
	},
	{
		question: 'udt에서 울면서 종을 친 사람은?',
		a: '한지협',
		b: '이한성',
		c: '정윤호',
		correct: 'b',
	},
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
};

const loadQuiz = () => {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;

	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
};

loadQuiz();

const getSelected = () => {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
};

submitBtn.addEventListener('click', () => {
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			switch (score) {
				case 0:
					quiz.innerHTML = `<h2>${score} / ${quizData.length} ドオノ、上に来て</h2><button onClick="window.location.reload()">다시하기</button>`;
					break;
				case 1:
					quiz.innerHTML = `<h2>${score} / ${quizData.length} 당신은 친일파입니다</h2><button onClick="window.location.reload()">다시하기</button>`;
					break;
				case 2:
					quiz.innerHTML = `<h2>${score} / ${quizData.length} 도우너 어서오고</h2><button onClick="window.location.reload()">다시하기</button>`;
					break;
				case 3:
					quiz.innerHTML = `<h2>${score} / ${quizData.length} 당신은 머리가 깨졌습니다</h2><button onClick="window.location.reload()">다시하기</button>`;
					break;
				case 4:
					quiz.innerHTML = `<h2>${score} / ${quizData.length} 당신은 대깨문입니다 </h2><button onClick="window.location.reload()">다시하기</button>`;
					break;
			}
		}
	}
});
