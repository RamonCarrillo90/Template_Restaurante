/**
 * main.js — Lógica principal de Lumière
 */

/* ══════════════════════════
   RENDER DEL MENÚ
   ══════════════════════════ */

function renderDishes(filter = 'todos') {
  const grid = document.getElementById('dishesGrid');
  const filtered = filter === 'todos'
    ? dishes
    : dishes.filter(d => d.category === filter);

  grid.innerHTML = filtered.map(dish => `
    <div class="dish-card" onclick="openAR(${dish.id})">
      <div class="dish-img-wrap">
        ${dish.image
          ? `<img src="${dish.image}" alt="${dish.name}" style="width:100%;height:100%;object-fit:cover;">`
          : `<div class="dish-img-placeholder">${dish.emoji}</div>`
        }
        <div class="dish-ar-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          Ver en AR
        </div>
      </div>
      <div class="dish-body">
        <p class="dish-category">${dish.categoryLabel}</p>
        <h3 class="dish-name">${dish.name}</h3>
        <p class="dish-desc">${dish.desc}</p>
        <div class="dish-footer">
          <span class="dish-price">${dish.price}</span>
          <button class="btn-ar" onclick="event.stopPropagation(); openAR(${dish.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            Ver en AR
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderDishes(cat);
}


/* ══════════════════════════
   MODAL DE REALIDAD AUMENTADA
   ══════════════════════════ */

function openAR(id) {
  const dish = dishes.find(d => d.id === id);
  if (!dish) return;

  document.getElementById('arModalTitle').textContent = dish.name;
  document.getElementById('arFallbackEmoji').textContent = dish.emoji;
  document.getElementById('arFallbackTitle').textContent = dish.name + ' en AR';
  document.getElementById('arInfoText').textContent = dish.info;

  const mv         = document.getElementById('modelViewer');
  const viewerWrap = document.getElementById('arViewerWrap');
  const fallback   = document.getElementById('arFallback');
  const arBtnIOS   = document.getElementById('arBtnIOS');
  const arBtnImg   = document.getElementById('arBtnImg');

  if (dish.modelSrc) {
    // Cargar modelo en el visor 3D
    mv.src = dish.modelSrc;
    mv.setAttribute('scale', dish.arScale || '1 1 1');
    // ── iOS Quick Look ──
    // Safari exige: <a rel="ar" href="modelo.glb"><img ...> como PRIMER hijo</a>
    // El href del <a> Y el src del <img> deben apuntar al mismo .glb
    arBtnIOS.href = dish.modelSrc;
    document.getElementById('arBtnImg').src = dish.modelSrc;

    viewerWrap.style.display = 'block';
    fallback.style.display   = 'none';
  } else {
    mv.src = '';
    viewerWrap.style.display = 'none';
    fallback.style.display   = 'block';
  }

  document.getElementById('arOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAR(e) {
  if (e && e.target !== document.getElementById('arOverlay')) return;
  document.getElementById('arOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('arOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});


/* ══════════════════════════
   HERO — PARTÍCULAS
   ══════════════════════════ */

const canvas  = document.getElementById('heroCanvas');
const ctx     = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initParticles() {
  particles = Array.from({ length: 60 }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 1.5 + 0.3,
    vx:    (Math.random() - 0.5) * 0.3,
    vy:    (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.1
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
    ctx.fill();
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
  requestAnimationFrame(drawParticles);
}

resizeCanvas();
initParticles();
drawParticles();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });


/* ══════════════════════════
   NAV — SCROLL
   ══════════════════════════ */

window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});


/* ══════════════════════════
   RESERVACIONES
   ══════════════════════════ */

function handleReserve(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-reserve');
  const original = btn.textContent;
  btn.textContent      = '✓ Solicitud enviada — le confirmaremos pronto';
  btn.style.background = '#1a5c2a';
  btn.style.color      = '#a8e6bc';
  setTimeout(() => {
    btn.textContent      = original;
    btn.style.background = '';
    btn.style.color      = '';
    e.target.reset();
  }, 4000);
}


/* ══════════════════════════
   INIT
   ══════════════════════════ */

renderDishes();
