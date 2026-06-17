/* ============================================
   ERA DOS HERÓIS — interações retro
   ============================================ */

// ===== MENU ATIVO via scroll =====
const sections = document.querySelectorAll('.screen');
const menuItems = document.querySelectorAll('.menu-item');

const setActive = (id) => {
  menuItems.forEach(m => {
    m.classList.toggle('active', m.getAttribute('href') === '#' + id);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && e.intersectionRatio > 0.35) {
      setActive(e.target.id);
    }
  });
}, { threshold: [0.35, 0.6] });

sections.forEach(s => observer.observe(s));

// suave scroll
menuItems.forEach(item => {
  item.addEventListener('click', (ev) => {
    ev.preventDefault();
    const target = document.querySelector(item.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    playBlip(660);
  });
});

// ===== REGIÕES DO MAPA =====
const regionData = {
  olimpo:  { title: 'OLIMPO',  text: 'Lar dos doze deuses. Apenas semideuses cumprindo profecias podem subir até aqui. Encontros: Ninfas, Águia de Zeus, Iris (mensageira).' },
  atenas:  { title: 'ATENAS',  text: 'Cidade-estado da sabedoria. Bibliotecas, ágoras e templos. Ótimo para missões de investigação, pergaminhos e poções.' },
  creta:   { title: 'CRETA',   text: 'Ilha do rei Minos. O labirinto de Cnossos esconde o Minotauro. Dungeon nível 5-7.' },
  esparta: { title: 'ESPARTA', text: 'Cidade guerreira. Treine sua proeza marcial. Hoplitas oferecem missões de defesa contra Persas.' },
  delfos:  { title: 'DELFOS',  text: 'O umbigo do mundo. A Pítia revela profecias por vapores e dados de 20 faces. Sempre role com Vantagem.' },
  tartaro: { title: 'TÁRTARO', text: 'Abismo abaixo do Hades. Lar dos Titãs acorrentados. Boss final da campanha. Aguarde nível 15+.' },
};

document.querySelectorAll('.region').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.region').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const data = regionData[btn.dataset.region];
    const panel = document.getElementById('region-info');
    panel.innerHTML = `
      <div class="panel-title">▼ ${data.title} ▼</div>
      <p class="typewriter">${data.text}</p>
    `;
    playBlip(440);
  });
  btn.addEventListener('mouseenter', () => playBlip(880, .05));
});

// ===== HERO CARD CLIQUE =====
const heroMessages = {
  atacante: 'ATACANTE SELVAGEM aprendido! Refaça os 1s no dano.',
  duelista: 'DUELISTA DEFENSIVO aprendido! +PROF na CA por reação.',
  armadura: 'MESTRE EM ARMADURAS PESADAS! Reduza dano físico pelo PROF.',
  atirador: 'ATIRADOR DE MAGIA aprendido! Alcance dobrado.',
  belico:   'CONJURADOR BÉLICO aprendido! Magia em vez de AdO.',
  sortudo:  'SORTUDO aprendido! Que as Moiras te favoreçam.',
};
document.querySelectorAll('.hero-card').forEach(card => {
  card.addEventListener('click', () => {
    const cls = card.dataset.class;
    flashMessage(heroMessages[cls] || 'HERÓI SELECIONADO');
    playBlip(523);
  });
});

// ===== ROLAGEM DE DADOS (D4, D6, D8, D10, D12, D20, D100) =====
const rollResult = document.getElementById('roll-result');
const rollMsg = document.getElementById('roll-msg');
const diceBtns = document.querySelectorAll('.dice-btn');

function rollDice(sides) {
  diceBtns.forEach(b => b.classList.toggle('selected', +b.dataset.sides === sides));
  rollResult.classList.remove('crit', 'fumble');
  rollResult.classList.add('rolling');
  rollMsg.textContent = `rolando D${sides}...`;
  playBlip(220, .04);

  let ticks = 0;
  const interval = setInterval(() => {
    rollResult.textContent = 1 + Math.floor(Math.random() * sides);
    ticks++;
    if (ticks > 12) {
      clearInterval(interval);
      const final = 1 + Math.floor(Math.random() * sides);
      rollResult.textContent = final;
      rollResult.classList.remove('rolling');

      // crit/fumble apenas no D20
      if (sides === 20 && final === 20) {
        rollResult.classList.add('crit');
        rollMsg.textContent = '★ ACERTO CRÍTICO! Os deuses sorriem.';
        playBlip(880, .3);
        return;
      }
      if (sides === 20 && final === 1) {
        rollResult.classList.add('fumble');
        rollMsg.textContent = '✖ FALHA CRÍTICA! Cuidado com a Hidra...';
        playBlip(110, .3);
        return;
      }
      // D100 — destaque para 100 e 01
      if (sides === 100 && final === 100) {
        rollResult.classList.add('crit');
        rollMsg.textContent = '★ 100! O destino é teu!';
        playBlip(880, .3);
        return;
      }
      if (sides === 100 && final === 1) {
        rollResult.classList.add('fumble');
        rollMsg.textContent = '✖ 01! As Moiras te abandonaram.';
        playBlip(110, .3);
        return;
      }
      // máximo / mínimo dos demais dados
      if (final === sides) {
        rollResult.classList.add('crit');
        rollMsg.textContent = `★ MÁXIMO no D${sides}! ${final}.`;
        playBlip(770, .2);
      } else if (final === 1) {
        rollMsg.textContent = `> ${final} — mínimo no D${sides}.`;
        playBlip(220, .12);
      } else if (final / sides >= 0.75) {
        rollMsg.textContent = `> D${sides} = ${final} · ótimo resultado!`;
        playBlip(660, .15);
      } else if (final / sides >= 0.5) {
        rollMsg.textContent = `> D${sides} = ${final} · suficiente.`;
        playBlip(440, .12);
      } else {
        rollMsg.textContent = `> D${sides} = ${final} · talvez na próxima.`;
        playBlip(330, .12);
      }
    }
  }, 50);
}

diceBtns.forEach(btn => {
  btn.addEventListener('click', () => rollDice(+btn.dataset.sides));
});

// ===== FLASH MESSAGE TOAST =====
function flashMessage(text) {
  const t = document.createElement('div');
  t.textContent = text;
  Object.assign(t.style, {
    position: 'fixed',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#000',
    color: '#f6c026',
    border: '3px solid #f6c026',
    padding: '12px 18px',
    fontFamily: "'Press Start 2P', monospace",
    fontSize: '10px',
    zIndex: '9000',
    boxShadow: '4px 4px 0 #d62828',
    animation: 'pop 1.8s ease',
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}

// adiciona keyframe pop dinamicamente
const style = document.createElement('style');
style.textContent = `@keyframes pop{0%{opacity:0;transform:translate(-50%,16px)}15%{opacity:1;transform:translate(-50%,0)}85%{opacity:1}100%{opacity:0;transform:translate(-50%,-10px)}}`;
document.head.appendChild(style);

// ===== BLIP SOUND (WebAudio chiptune) =====
let audioCtx;
function playBlip(freq = 440, dur = 0.06) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'square';
    o.frequency.value = freq;
    g.gain.value = 0.04;
    o.connect(g); g.connect(audioCtx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
    o.stop(audioCtx.currentTime + dur);
  } catch (e) { /* silent */ }
}

// ===== KONAMI-LIKE EASTER EGG: PRESS START =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.querySelector('#regras').scrollIntoView({ behavior: 'smooth' });
    flashMessage('★ AVENTURA INICIADA ★');
    playBlip(880, .2);
  }
});
