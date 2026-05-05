
let i = 0;
let db = 0;

let questions = [];
let order = [];

const qEl = document.getElementById('question');
const oEl = document.getElementById('options');
const next = document.getElementById('next');
const again = document.getElementById('again');

function initQuiz(data){
  questions = data;

  i = 0;
  db = 0;

  order = questions.map((_, idx) => idx);
  shuffle(order);

  load();
}

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function load(){
  next.disabled = true;
  oEl.innerHTML = '';

  const qIndex = order[i];
  const qData = questions[qIndex];

  qEl.textContent = qData.q;

  qData.o.forEach((text, idx) => {
    const b = document.createElement('button');
    b.textContent = text;
    b.className = 'option';

    b.onclick = () => select(b, idx, qData.a);

    oEl.appendChild(b);
  });
}

function select(btn, idx, correct){
  const buttons = [...document.querySelectorAll('.option')];

  buttons.forEach(b => b.disabled = true);

  if(idx === correct){
    btn.classList.add('correct');
    db++;
  } else {
    btn.classList.add('wrong');

    buttons[correct].classList.add('correct');
  }

  next.disabled = false;
}

next.onclick = () => {
  i++;

  if(i < questions.length){
    load();
  } else {
    qEl.textContent = '🎉 Kész!';
    oEl.innerHTML = `✅ Helyes válaszok: ${db}/${questions.length}`;

    next.style.display = 'none';
    again.style.display = 'block';
  }
};

again.onclick = () => {
  i = 0;
  db = 0;

  next.style.display = 'block';
  again.style.display = 'none';

  shuffle(order);
  load();
};

// START
load();
