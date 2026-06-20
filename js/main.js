// ═══════════════════════════════════════════════════════════════════════════════
//  PORTFOLIO — MAIN JS
//  Handles: cursor · particles · theme · nav · typing · scroll animations
//           page routing → renders the right content per page
// ═══════════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.id;

  // — Shared —
  initTheme();
  initNav();
  initCursor();
  initScrollReveal();

  // — Per-page —
  if (page === 'page-home')       initHome();
  if (page === 'page-about')      initAbout();
  if (page === 'page-experience') initExperience();
  if (page === 'page-projects')   initProjects();
  if (page === 'page-skills')     initSkills();
  if (page === 'page-contact')    initContact();
});

// ─── THEME ────────────────────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('rsm-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rsm-theme', next);
    updateThemeIcon(next);
  });
}
function updateThemeIcon(t) {
  document.getElementById('theme-toggle').innerHTML =
    t === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function initNav() {
  const navbar  = document.getElementById('navbar');
  const burger  = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-links');

  // Active link based on current page file
  const file = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === file) a.classList.add('active');
  });

  // Inject social links into navbar dynamically
  const navActions = document.querySelector('.nav-actions');
  if (navActions) {
    navActions.insertAdjacentHTML('afterbegin', `
      <div class="nav-socials">
        <a href="mailto:${DATA.personal.email}" class="nav-social-link" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="${DATA.personal.linkedin}" target="_blank" rel="noopener" class="nav-social-link" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="${DATA.personal.github}" target="_blank" rel="noopener" class="nav-social-link" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>
    `);
  }

  // Blur effect on scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Hamburger
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    burger.classList.toggle('open');
  });

  // Close mobile menu on link click
  navMenu.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      burger.classList.remove('open');
    });
  });
}

// ─── CUSTOM CURSOR ────────────────────────────────────────────────────────────
function initCursor() {
  // Only on devices with a real mouse
  if (window.matchMedia('(hover: none)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let rx = 0, ry = 0; // ring position (lags behind)

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    // Smooth ring follow
    rx += (e.clientX - rx) * 0.12;
    ry += (e.clientY - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
  });

  // Animate ring lag on each frame
  (function animRing() {
    requestAnimationFrame(animRing);
    // Recalculate inside RAF for smoothness
  })();

  // Expand ring on interactive elements
  document.querySelectorAll('a, button, .btn, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('expanded'));
    el.addEventListener('mouseleave', () => ring.classList.remove('expanded'));
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '0.6';
  });
}

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      // Animate language bars
      if (e.target.classList.contains('lang-item')) {
        const fill = e.target.querySelector('.lang-fill');
        if (fill) fill.style.width = fill.dataset.pct + '%';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .lang-item').forEach(el => obs.observe(el));
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function initHome() {
  const p = DATA.personal;

  // Photo fallback
  const img = document.getElementById('hero-photo');
  if (img) {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      document.getElementById('photo-fallback').style.display = 'flex';
    });
    img.src = p.photo;
  }

  // Hero text
  setEl('hero-name-first', p.firstName);
  setEl('hero-name-last',  p.lastName);
  setEl('hero-desc', p.heroDesc);

  // Typing animation
  startTyping('typed-text', p.roles, 100, 60, 1800);

  // Particles
  spawnParticles('particles', 55);

  // Magnetic buttons
  initMagnetic();

  // "What I Do" cards
  renderWhatIDo();
}

function renderWhatIDo() {
  const el = document.getElementById('what-cards');
  if (!el) return;
  el.innerHTML = DATA.whatIDo.map((c, i) => `
    <div class="what-card what-card-${c.color} reveal" style="transition-delay:${i * 0.1}s">
      <div class="what-icon ${c.color}">${c.icon}</div>
      <h3 class="what-title">${c.title}</h3>
      <p class="what-desc">${c.desc}</p>
    </div>
  `).join('');
  // Re-observe new elements
  initScrollReveal();
}

function renderHomeFeaturedProjects() {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  const featured = DATA.projects.filter(p => p.featured);
  el.innerHTML = featured.map(p => `
    <div class="proj-card accent-${p.accent} reveal">
      <div class="proj-icon">${p.icon}</div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.shortDesc}</p>
      <div class="tags">${p.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
  initScrollReveal();
}

function renderHighlights() {
  const el = document.getElementById('highlights-list');
  if (!el) return;
  el.innerHTML = DATA.experience.slice(0, 3).map(exp => `
    <div class="highlight-card reveal">
      <span class="hl-period">${exp.period}</span>
      <div>
        <h3 class="hl-title">${exp.title}</h3>
        <p class="hl-company"><i class="fas fa-building"></i> ${exp.company} &nbsp;·&nbsp; <i class="fas fa-location-dot"></i> ${exp.location}</p>
        <div class="tags">${exp.tags.slice(0, 5).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function initAbout() {
  const a = DATA.about;

  setEl('bio-intro', a.intro);
  setEl('bio-body',  a.body);

  // Values
  const vals = document.getElementById('bio-values');
  if (vals) {
    vals.innerHTML = a.values.map(v => `
      <div class="value-item reveal">
        <span class="value-icon">${v.icon}</span>
        <div><div class="value-label">${v.label}</div><div class="value-desc">${v.desc}</div></div>
      </div>
    `).join('');
  }

  // Stats
  const stats = document.getElementById('stats-row');
  if (stats) {
    stats.innerHTML = DATA.stats.map(s => `
      <div class="stat-item reveal">
        <span class="stat-num">${s.number}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }

  // Languages
  const langs = document.getElementById('languages-list');
  if (langs) {
    langs.innerHTML = DATA.languages.map(l => `
      <div class="lang-item">
        <div class="lang-header">
          <span class="lang-name">${l.lang}</span>
          <span class="lang-level">${l.level}</span>
        </div>
        <div class="lang-bar">
          <div class="lang-fill" data-pct="${l.pct}" style="width:0%"></div>
        </div>
      </div>
    `).join('');
  }

  // Education (moved from skills page)
  const edu = document.getElementById('education-list');
  if (edu) {
    edu.innerHTML = DATA.education.map(e => `
      <div class="edu-card reveal">
        <div class="edu-side">
          <span class="edu-period">${e.period}</span>
          <span class="edu-loc"><i class="fas fa-location-dot"></i> ${e.location}</span>
        </div>
        <div class="edu-body">
          <h3 class="edu-degree">${e.degree}</h3>
          ${e.specialization ? `<p class="edu-spec">${e.specialization}</p>` : ''}
          <p class="edu-inst">${e.institution}</p>
          ${e.highlight ? `<p class="edu-highlight"><i class="fas fa-star"></i> ${e.highlight}</p>` : ''}
        </div>
      </div>
    `).join('');
  }

  initScrollReveal();
}

// ─── EXPERIENCE PAGE ──────────────────────────────────────────────────────────
function initExperience() {
  // Timeline
  const tl = document.getElementById('experience-list');
  if (tl) {
    tl.innerHTML = DATA.experience.map(exp => `
      <div class="timeline-item reveal">
        <div class="tl-dot"></div>
        <div class="tl-card type-${exp.type}">
          <div class="tl-header">
            <div>
              <h3 class="tl-title">${exp.title}</h3>
              <p class="tl-meta">
                <i class="fas fa-building"></i> ${exp.company}
                &nbsp;·&nbsp;
                <i class="fas fa-location-dot"></i> ${exp.location}
              </p>
            </div>
            <span class="period-pill">${exp.period}</span>
          </div>
          <ul class="tl-points">
            ${exp.points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
          <div class="tags">${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </div>
    `).join('');
  }

  // Projects teaser (featured only) → links to projects page
  const proj = document.getElementById('projects-grid');
  if (proj) {
    const featured = DATA.projects.filter(p => p.featured);
    proj.innerHTML = featured.map(p => `
      <div class="proj-card accent-${p.accent} reveal">
        <div class="proj-icon">${p.icon}</div>
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-desc">${p.shortDesc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `).join('');
  }

  initScrollReveal();
}

// ─── SKILLS PAGE ──────────────────────────────────────────────────────────────
function initSkills() {
  // Skills — category cards with bullet list
  const grid = document.getElementById('skills-grid');
  if (grid) {
    const catCfg = {
      'Python & ML Libraries':  { icon: 'fa-brands fa-python',        accent: 'rose'     },
      'Machine Learning':       { icon: 'fa-solid fa-brain',           accent: 'lavender' },
      'Deep Learning & GenAI':  { icon: 'fa-solid fa-microchip',       accent: 'rose'     },
      'NLP & Data Analysis':    { icon: 'fa-solid fa-chart-column',    accent: 'gold'     },
      'Web Development':        { icon: 'fa-solid fa-code',            accent: 'lavender' },
      'Databases':              { icon: 'fa-solid fa-database',        accent: 'gold'     },
      'DevOps & Big Data':      { icon: 'fa-solid fa-server',          accent: 'rose'     },
      'Networks & Telecoms':    { icon: 'fa-solid fa-network-wired',   accent: 'lavender' },
    };
    grid.innerHTML = `<div class="skills-grid-cards">
      ${DATA.skills.map(cat => {
        const cfg = catCfg[cat.category] || { icon: 'fa-solid fa-star', accent: 'rose' };
        return `
          <div class="skill-cat-card accent-${cfg.accent} reveal">
            <div class="skill-cat-header">
              <div class="skill-cat-icon ${cfg.accent}">
                <i class="${cfg.icon}"></i>
              </div>
              <span class="skill-cat-title">${cat.category}</span>
            </div>
            <div class="skill-cat-body">
              <ul class="skill-list">
                ${cat.items.map(i => `<li>${i}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;
      }).join('')}
    </div>`;
  }

  // Certificates
  const certs = document.getElementById('certificates-content');
  if (certs) {
    if (!DATA.certificates || DATA.certificates.length === 0) {
      certs.innerHTML = `
        <div class="cert-empty">
          <i class="fas fa-certificate"></i>
          <p>Courses & certificates coming soon.</p>
          <p style="font-size:0.82rem;margin-top:0.5rem">Edit <code>js/data.js</code> → <code>certificates</code> array</p>
        </div>`;
    } else {
      const platformCfg = {
        '365 Data Science':         { bg: 'linear-gradient(135deg,#4a2878,#8b5cf6)', icon: 'fas fa-graduation-cap' },
        'Microsoft':                { bg: 'linear-gradient(135deg,#004f9f,#00a4ef)', icon: 'fab fa-microsoft'      },
        'Cisco Networking Academy': { bg: 'linear-gradient(135deg,#00527e,#00bceb)', icon: 'fas fa-network-wired'  },
        'HP LIFE':                  { bg: 'linear-gradient(135deg,#00568e,#0096d6)', icon: 'fas fa-laptop'         },
        'Simplilearn SkillUp':      { bg: 'linear-gradient(135deg,#c44b00,#f8931d)', icon: 'fas fa-bolt'           },
        'Udemy':                    { bg: 'linear-gradient(135deg,#6c1ba8,#a435f0)', icon: 'fas fa-play-circle'    },
      };
      const catColor = {
        'AI / LLM':    'rose',
        'AI / ML':     'lavender',
        'Data Science':'gold',
        'Dev':         'lavender',
        'Security':    'gold',
      };
      const categories = ['All', 'AI / LLM', 'AI / ML', 'Data Science', 'Dev', 'Security'];

      const renderCerts = (filter) => {
        const list = filter === 'All' ? DATA.certificates : DATA.certificates.filter(c => c.category === filter);
        return list.map(c => {
          const pcfg = platformCfg[c.platform] || { bg: 'linear-gradient(135deg,#333,#555)', icon: 'fas fa-certificate' };
          const cc = catColor[c.category] || 'rose';
          return `
            <div class="cert-card-v2 reveal">
              <div class="cert-preview-area" style="background:${pcfg.bg}">
                <span class="cert-watermark">CERTIFICATE</span>
                <i class="${pcfg.icon} cert-preview-icon"></i>
                <span class="cert-platform-stamp">${c.platform}</span>
                ${c.img ? `<img src="${c.img}" alt="${c.name}" class="cert-preview-img" onerror="this.style.display='none'">` : ''}
              </div>
              <div class="cert-info">
                <h3 class="cert-title-v2">${c.name}</h3>
                <div class="cert-meta">
                  <span class="cert-platform-v2">${c.platform}</span>
                  <span class="cert-badge-cat ${cc}">${c.category}</span>
                </div>
                <span class="cert-date-v2">${c.date}</span>
              </div>
            </div>`;
        }).join('');
      };

      certs.innerHTML = `
        <div class="cert-filters">
          ${categories.map((cat, i) => `<button type="button" class="cert-filter-btn${i === 0 ? ' active' : ''}" data-cat="${cat}">${cat}</button>`).join('')}
        </div>
        <div class="cert-grid-v2" id="cert-grid-v2">${renderCerts('All')}</div>`;

      certs.querySelectorAll('.cert-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          certs.querySelectorAll('.cert-filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          document.getElementById('cert-grid-v2').innerHTML = renderCerts(btn.dataset.cat);
          initScrollReveal();
        });
      });
    }
  }

  initScrollReveal();
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function initContact() {
  const p = DATA.personal;

  const links = [
    { icon: 'fas fa-envelope', label: 'Email', value: p.email, href: `mailto:${p.email}` },
    { icon: 'fas fa-phone',    label: 'Phone', value: p.phone, href: `tel:${p.phone}` },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'Rym Sara Messaoudi', href: p.linkedin },
    { icon: 'fab fa-github',   label: 'GitHub', value: 'MessaoudiRym', href: p.github },
    { icon: 'fas fa-location-dot', label: 'Location', value: p.location, href: null }
  ];

  const el = document.getElementById('contact-links');
  if (el) {
    el.innerHTML = links.map(l => `
      ${l.href
        ? `<a href="${l.href}" target="_blank" rel="noopener" class="contact-link reveal">`
        : `<div class="contact-link reveal">`
      }
        <div class="cl-icon"><i class="${l.icon}"></i></div>
        <div>
          <div class="cl-label">${l.label}</div>
          <div class="cl-value">${l.value}</div>
        </div>
      ${l.href ? '</a>' : '</div>'}
    `).join('');
  }

  initScrollReveal();
}

// ─── PARTICLES ────────────────────────────────────────────────────────────────
function spawnParticles(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${Math.random() * 12}s;
      animation-duration: ${Math.random() * 14 + 8}s;
    `;
    container.appendChild(p);
  }
}

// ─── TYPING ANIMATION ─────────────────────────────────────────────────────────
function startTyping(elId, phrases, typeSpeed, deleteSpeed, pause) {
  const el = document.getElementById(elId);
  if (!el) return;
  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = phrases[pi];
    if (deleting) {
      ci--;
      el.textContent = phrase.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, 400);
      } else {
        setTimeout(tick, deleteSpeed);
      }
    } else {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, pause);
      } else {
        setTimeout(tick, typeSpeed);
      }
    }
  }
  tick();
}

// ─── MAGNETIC BUTTONS ─────────────────────────────────────────────────────────
function initMagnetic() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 14;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 10;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
function initProjects() {
  const grid = document.getElementById('projects-full-grid');
  if (!grid) return;

  function renderCards(filter) {
    const list = filter === 'all'
      ? DATA.projects
      : DATA.projects.filter(p => p.category === filter);

    grid.innerHTML = list.map(p => `
      <div class="proj-full-card accent-${p.accent} reveal" data-id="${p.id}" data-cat="${p.category}">
        <div class="proj-card-header">
          <span class="proj-card-emoji">${p.icon}</span>
          <span class="proj-cat-badge ${p.accent}">${p.category}</span>
        </div>
        <h3 class="proj-card-title">${p.title}</h3>
        <p class="proj-card-short">${p.shortDesc}</p>
        <div class="tags">${p.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}${p.tags.length > 4 ? `<span class="tag">+${p.tags.length - 4}</span>` : ''}</div>
        <div class="proj-card-footer">
          <button type="button" class="proj-view-btn" data-id="${p.id}">
            View Details <i class="fas fa-arrow-right"></i>
          </button>
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="proj-github-link" aria-label="GitHub repository" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : ''}
        </div>
      </div>
    `).join('');

    // Re-observe reveals
    initScrollReveal();

    // Card click → open modal
    grid.querySelectorAll('.proj-full-card, .proj-view-btn').forEach(el => {
      el.addEventListener('click', e => {
        const id = el.closest('[data-id]')?.dataset.id || el.dataset.id;
        if (id) openModal(id);
      });
    });
  }

  // Initial render
  renderCards('all');

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
    });
  });

  // Modal logic
  const overlay = document.getElementById('proj-modal-overlay');
  const modal   = document.getElementById('proj-modal');
  const closeBtn = document.getElementById('modal-close');

  function openModal(id) {
    const p = DATA.projects.find(x => x.id === id);
    if (!p) return;

    document.getElementById('modal-emoji').textContent  = p.icon;
    document.getElementById('modal-cat').textContent    = p.category;
    document.getElementById('modal-title').textContent  = p.title;
    document.getElementById('modal-desc').textContent   = p.fullDesc;

    const ctx = document.getElementById('modal-context');
    ctx.innerHTML = `<i class="fas fa-calendar-alt"></i> ${p.context}`;

    document.getElementById('modal-highlights').innerHTML =
      p.highlights.map(h => `<li>${h}</li>`).join('');

    document.getElementById('modal-tags').innerHTML =
      p.tags.map(t => `<span class="tag">${t}</span>`).join('');

    const ghEl = document.getElementById('modal-github');
    if (ghEl) {
      ghEl.innerHTML = p.github
        ? `<a href="${p.github}" target="_blank" rel="noopener" class="modal-github-btn"><i class="fab fa-github"></i> View on GitHub</a>`
        : '';
    }

    // Remove previous accent classes
    modal.classList.remove('accent-rose', 'accent-gold', 'accent-lavender');
    modal.classList.add('accent-' + p.accent);

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function setEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
