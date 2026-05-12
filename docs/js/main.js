
let i = 0;
let db = 0;
let wrong = [];

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
  wrong = [];
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

function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function load(){
  next.disabled = true;
  oEl.innerHTML = '';
  clearExplanation();

  const qIndex = order[i];
  const qData = questions[qIndex];
  const counter = `<span class="q-counter">${i + 1} / ${questions.length}</span>`;

  if(qData.type === 'fill'){
    qEl.innerHTML = counter + qData.q.replace(/___/g, '<span class="blank">___</span>');
  } else {
    qEl.innerHTML = counter + escapeHtml(qData.q);
  }

  qData.o.forEach((text, idx) => {
    const b = document.createElement('button');
    b.textContent = text;
    b.className = 'option';
    b.onclick = () => select(b, idx, qData);
    oEl.appendChild(b);
  });
}

function select(btn, idx, qData){
  const buttons = [...document.querySelectorAll('.option')];
  buttons.forEach(b => b.disabled = true);

  if(idx === qData.a){
    btn.classList.add('correct');
    db++;
  } else {
    btn.classList.add('wrong');
    buttons[qData.a].classList.add('correct');
    wrong.push(qData);
    showExplanation(qData);
  }

  next.disabled = false;
}

function showExplanation(qData){
  const div = document.createElement('div');
  div.id = 'explanation';
  let html = `<strong>Helyes válasz:</strong> ${escapeHtml(qData.o[qData.a])}`;
  if(qData.explanation){
    html += `<br><span>${escapeHtml(qData.explanation)}</span>`;
  }
  div.innerHTML = html;
  oEl.after(div);
}

function clearExplanation(){
  const existing = document.getElementById('explanation');
  if(existing) existing.remove();
}

function showResults(){
  qEl.textContent = '🎉 Kész!';
  clearExplanation();

  const pct = Math.round((db / questions.length) * 100);
  let scoreClass = 'score';
  if(db === questions.length) scoreClass += ' perfect';
  else if(db >= questions.length * 0.7) scoreClass += ' good';

  oEl.innerHTML = `<p class="${scoreClass}">✅ Helyes válaszok: ${db} / ${questions.length} (${pct}%)</p>`;

  if(wrong.length > 0){
    const list = document.createElement('div');
    list.id = 'wrong-list';
    list.innerHTML = `<p class="wrong-list-title">❌ Hibás válaszok (${wrong.length}):</p>`;

    wrong.forEach((qData, idx) => {
      const item = document.createElement('div');
      item.className = 'wrong-item';
      item.innerHTML =
        `<p class="wi-question">${idx + 1}. ${escapeHtml(qData.q)}</p>` +
        `<p class="wi-answer">✅ <strong>${escapeHtml(qData.o[qData.a])}</strong></p>` +
        (qData.explanation ? `<p class="wi-explanation">${escapeHtml(qData.explanation)}</p>` : '');
      list.appendChild(item);
    });

    oEl.appendChild(list);
  }

  next.style.display = 'none';
  again.style.display = 'block';
}

next.onclick = () => {
  i++;
  if(i < questions.length){
    load();
  } else {
    showResults();
  }
};

again.onclick = () => {
  i = 0;
  db = 0;
  wrong = [];

  next.style.display = 'block';
  again.style.display = 'none';

  shuffle(order);
  load();
};

// START
load();
