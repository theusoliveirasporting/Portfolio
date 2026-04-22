// ===========================================
// GALERIA
// ===========================================
let galeriaImagens = [];
let galeriaIndex = 0;
let galeriaTitulo = '';

function abrirGaleria(titleKey, imagens) {
  galeriaImagens = imagens;
  galeriaIndex = 0;

  const t = translations[currentLanguage];
  // Resolve translation key if possible, otherwise use the key as literal
  const translatedTitle = getTranslationValue(t, titleKey) || titleKey.split('.').pop();
  galeriaTitulo = translatedTitle;

  const galeriaTitleElement = document.getElementById('galeriaTitle');
  if (galeriaTitleElement) {
    galeriaTitleElement.textContent = `${t.galeria.title}: ${translatedTitle}`;
  }

  const modal = document.getElementById('galeriaModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  atualizarImagemGaleria();
  gerarThumbnails();
  atualizarContador();
  document.addEventListener('keydown', handleKeyboardNavigation);
}

function fecharGaleria() {
  const modal = document.getElementById('galeriaModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleKeyboardNavigation);
}

function mudarImagem(direction) {
  galeriaIndex = (galeriaIndex + direction + galeriaImagens.length) % galeriaImagens.length;
  atualizarImagemGaleria();
  atualizarThumbnails();
  atualizarContador();
}

function irParaImagem(index) {
  galeriaIndex = index;
  atualizarImagemGaleria();
  atualizarThumbnails();
  atualizarContador();
}

function atualizarImagemGaleria() {
  const img = document.getElementById('imagemGaleria');
  if (!img || !galeriaImagens[galeriaIndex]) return;

  img.classList.remove('zoom-in');
  img.style.opacity = '0';

  setTimeout(() => {
    img.src = galeriaImagens[galeriaIndex];
    img.decoding = 'async';
    img.alt = `${galeriaTitulo} - Imagem ${galeriaIndex + 1}`;
    img.onload = () => {
      img.style.filter = 'none'; // Limpa qualquer filtro de erro anterior
      img.style.opacity = '1';
      img.classList.add('zoom-in');
    };
  }, 150);
}

function gerarThumbnails() {
  const container = document.getElementById('galeriaThumbnails');
  if (!container) return;
  container.innerHTML = '';

  galeriaImagens.forEach((imagem, index) => {
    const thumb = document.createElement('img');
    thumb.src = imagem;
    thumb.loading = 'lazy';
    thumb.decoding = 'async';
    thumb.alt = `Miniatura ${index + 1}`;
    thumb.className = 'gallery__thumbnail' + (index === galeriaIndex ? ' active' : '');
    thumb.addEventListener('click', () => irParaImagem(index));
    container.appendChild(thumb);
  });
}

function atualizarThumbnails() {
  document.querySelectorAll('.gallery__thumbnail').forEach((thumb, index) => {
    thumb.classList.toggle('active', index === galeriaIndex);
  });
}

function atualizarContador() {
  const cur = document.getElementById('currentIndex');
  const total = document.getElementById('totalImages');
  if (cur) cur.textContent = galeriaIndex + 1;
  if (total) total.textContent = galeriaImagens.length;
}

function handleKeyboardNavigation(e) {
  if (e.key === 'ArrowLeft') mudarImagem(-1);
  else if (e.key === 'ArrowRight') mudarImagem(1);
  else if (e.key === 'Escape') fecharGaleria();
}

// Swipe support for gallery
function initGallerySwipe() {
  const modal = document.getElementById('galeriaModal');
  if (!modal) return;

  let startX = 0;
  let startY = 0;

  modal.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
    startY = e.changedTouches[0].screenY;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    const diffX = e.changedTouches[0].screenX - startX;
    const diffY = e.changedTouches[0].screenY - startY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      mudarImagem(diffX > 0 ? -1 : 1);
    }
  }, { passive: true });

  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('gallery__main')) {
      fecharGaleria();
    }
  });
}

// ===========================================
// LANGUAGE SYSTEM
// ===========================================
function getTranslationValue(obj, path) {
  return path.split('.').reduce((cur, key) => (cur && cur[key] !== undefined ? cur[key] : undefined), obj);
}

function updateLanguageButton() {
  const flagIcon = document.getElementById('flagIcon');
  const languageName = document.getElementById('languageName');
  const lang = languages[currentLanguage];
  if (!flagIcon || !languageName || !lang) return;
  flagIcon.src = lang.flag;
  flagIcon.alt = lang.name;
  languageName.textContent = lang.nativeName;
}

function populateLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  if (!dropdown) return;
  dropdown.innerHTML = '';

  Object.values(languages).forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'lang-option' + (lang.code === currentLanguage ? ' active' : '');
    btn.dataset.lang = lang.code;
    btn.setAttribute('aria-label', `Mudar idioma para ${lang.name}`);
    btn.innerHTML = `<img src="${lang.flag}" alt="${lang.name}" width="22" height="16" loading="lazy"><span>${lang.name}</span>`;
    btn.addEventListener('click', () => {
      changeLanguage(lang.code);
      dropdown.classList.remove('active');
    });
    dropdown.appendChild(btn);
  });

}

function translatePage() {
  const t = window.translations[currentLanguage];
  if (!t) return;

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getTranslationValue(t, key);
    
    if (value !== undefined) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    } else {
      console.warn(`[i18n] Chave não encontrada: ${key} para o idioma: ${currentLanguage}`);
    }
  });

  // Dynamically update document title
  if (t.title) {
    document.title = t.title;
  }

  // Hero title/subtitle with HTML spans
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle && t.hero.title) heroTitle.innerHTML = t.hero.title;

  const heroSubtitle = document.querySelector('.hero__subtitle');
  if (heroSubtitle && t.hero.subtitle) heroSubtitle.innerHTML = t.hero.subtitle;

  // Mobile menu links
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu && t.nav) {
    const links = mobileMenu.querySelectorAll('a');
    const keys = ['projects', 'about', 'services', 'contact'];
    links.forEach((link, i) => { if (t.nav[keys[i]]) link.textContent = t.nav[keys[i]]; });
  }
}

function changeLanguage(langCode) {
  // Resilience: handle generic codes like 'en' or 'es'
  let targetCode = langCode;
  if (!languages[targetCode]) {
    const baseCode = langCode.split('-')[0];
    const match = Object.keys(languages).find(key => key.startsWith(baseCode));
    if (match) targetCode = match;
  }

  if (!languages[targetCode] || !translations[targetCode] || (targetCode === currentLanguage && document.documentElement.lang === targetCode)) return;
  
  currentLanguage = targetCode;
  localStorage.setItem('portfolioLanguage', targetCode);

  updateLanguageButton();

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === targetCode);
  });

  // SEO Update: Change document language attribute
  document.documentElement.lang = targetCode;

  translatePage();

  // Restart typewriter with new language
  if (window.typewriter && translations[targetCode] && translations[targetCode].hero) {
    window.typewriter.restart(translations[targetCode].hero.typingLines);
  }
}


function initLanguageSystem() {
  const languageButton = document.getElementById('languageButton');
  const languageDropdown = document.getElementById('languageDropdown');
  if (!languageButton) return;

  const savedLang = localStorage.getItem('portfolioLanguage');
  if (savedLang && languages[savedLang] && translations[savedLang]) {
    currentLanguage = savedLang;
  } else {
    currentLanguage = 'pt-PT';
    localStorage.setItem('portfolioLanguage', 'pt-PT');
  }

  updateLanguageButton();
  populateLanguageDropdown();

  languageButton.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
      languageDropdown.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') languageDropdown.classList.remove('active');
  });

  // Set initial document language
  document.documentElement.lang = currentLanguage;

  translatePage();
}

// ===========================================
// TYPEWRITER
// ===========================================
function initTypewriter() {
  const typingText = document.getElementById('typingText');
  if (!typingText) return;

  class Typewriter {
    constructor(element, lines) {
      this.element = element;
      this.lines = lines;
      this.currentLine = 0;
      this.currentChar = 0;
      this.isDeleting = false;
      this.isPaused = false;
      this.speed = 80;
      this.pauseTime = 1500;
      this.animId = null;
    }

    type() {
      if (this.isPaused) return;
      const fullText = this.lines[this.currentLine];

      if (this.isDeleting) {
        this.currentChar--;
        this.speed = 40;
      } else {
        this.currentChar++;
        this.speed = 80;
      }

      this.element.textContent = fullText.substring(0, this.currentChar);

      if (!this.isDeleting && this.currentChar === fullText.length) {
        this.isPaused = true;
        setTimeout(() => {
          this.isPaused = false;
          this.isDeleting = true;
          this.animId = setTimeout(() => this.type(), 400);
        }, this.pauseTime);
        return;
      }

      if (this.isDeleting && this.currentChar === 0) {
        this.isDeleting = false;
        this.currentLine = (this.currentLine + 1) % this.lines.length;
      }

      this.animId = setTimeout(() => this.type(), this.speed + Math.random() * 40);
    }

    restart(newLines = null) {
      if (this.animId) clearTimeout(this.animId);
      if (newLines) this.lines = newLines;
      this.currentLine = 0;
      this.currentChar = 0;
      this.isDeleting = false;
      this.isPaused = false;
      this.element.textContent = '';
      this.animId = setTimeout(() => this.type(), 500);
    }
  }

  const initialLines = translations[currentLanguage].hero.typingLines;
  window.typewriter = new Typewriter(typingText, initialLines);
  window.typewriter.type();
}

// ===========================================
// NAVBAR SCROLL STATE — "A Ilha Flutuante"
// ===========================================
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const hero = document.getElementById('hero');
  if (!navbar || !hero) return;

  const observer = new IntersectionObserver(([entry]) => {
    navbar.classList.toggle('scrolled', !entry.isIntersecting);
  }, { threshold: 0.1 });

  observer.observe(hero);
}

// ===========================================
// SCROLL REVEAL ANIMATIONS (staggered)
// ===========================================
function initScrollReveal() {
  let revealIndex = 0;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply stagger delay for cards within grids
        const parent = entry.target.parentElement;
        if (parent && (parent.classList.contains('about__grid') ||
            parent.classList.contains('services__grid') ||
            parent.classList.contains('projects__grid'))) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 120}ms`;
        }
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===========================================
// MOBILE MENU
// ===========================================
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');
  if (!menuBtn || !mobileMenu) return;

  function toggleMenu(forceClose = null) {
    const shouldOpen = forceClose === null ? !mobileMenu.classList.contains('active') : !forceClose;
    
    mobileMenu.classList.toggle('active', shouldOpen);
    if (menuBackdrop) menuBackdrop.classList.toggle('active', shouldOpen);
    menuBtn.setAttribute('aria-expanded', shouldOpen);
    
    if (shouldOpen) {
      menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    } else {
      menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    }
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', () => toggleMenu(true));
  }

  // Close menu on window resize if it's desktop size
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
      toggleMenu(true);
    }
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  });
}

// ===========================================
// SMOOTH SCROLLING
// ===========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();

      const target = document.querySelector(targetId);
      if (target) {
        // Compatibility with Lenis
        if (window.lenis) {
          window.lenis.scrollTo(target, {
            offset: -80,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }

    });
  });
}

// ===========================================
// HIGH-PERFORMANCE PARTICLE NETWORK
// ===========================================
function initParticles() {
  console.log("Particle Engine: Initializing...");
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) {
    console.error("Particle Engine: Canvas element NOT found!");
    return;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error("Particle Engine: Could not get 2D context!");
    return;
  }

  let particles = [];
  let isMobile = window.innerWidth < 768;
  let particleCount = isMobile ? 40 : 80; // Reduzido para menos poluição visual
  const connectionDist = 140; // Menor alcance de conexão
  
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    isMobile = window.innerWidth < 768;
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.init();
    }

    init() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      // Velocidade aumentada para mais dinamismo
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.size = Math.random() * 2 + 1; // Partículas maiores
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(Math.floor(this.x), Math.floor(this.y), this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 191, 166, 0.4)'; // Mais suave
      ctx.fill();
    }
  }

  function setup() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  setup();

  let isIdle = false;
  let idleTimeout;
  let scrollTimeout;
  let isScrolling = false;

  function resetIdle() {
    isIdle = false;
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => { isIdle = true; }, 3000);
  }

  window.addEventListener('mousemove', resetIdle, { passive: true });
  window.addEventListener('touchstart', resetIdle, { passive: true });
  window.addEventListener('scroll', () => {
    isScrolling = true;
    resetIdle();
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => { isScrolling = false; }, 200);
  }, { passive: true });
  
  resetIdle();

  let animationId;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      if (!animationId) animate();
    } else {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }, { threshold: 0.1 });

  observer.observe(canvas);

  let lastDrawTime = 0;

  function animate(time) {
    animationId = requestAnimationFrame(animate);

    let targetFPS = 60;
    if (isIdle) targetFPS = 30; // Poupar energia apenas quando parado

    const frameInterval = 1000 / targetFPS;
    const deltaTime = time - lastDrawTime;

    if (deltaTime < frameInterval) return;
    lastDrawTime = time - (deltaTime % frameInterval);

    ctx.clearRect(0, 0, w, h);
    
    // 1. Update and draw particles
    for (const p of particles) {
      p.update();
      p.draw();
    }

    // 2. Draw connections (separate path)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 191, 166, 0.12)'; 
    ctx.lineWidth = 0.8;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < connectionDist * connectionDist) {
          ctx.moveTo(Math.floor(p1.x), Math.floor(p1.y));
          ctx.lineTo(Math.floor(p2.x), Math.floor(p2.y));
        }
      }
    }
    ctx.stroke();
  }

  console.log("Particle Engine: Initialized with IntersectionObserver.");
}

// ===========================================
// LAMP EFFECT — Scroll-Driven Interaction
// ===========================================
function initHeroLampScroll() {
  const navbar = document.querySelector('.navbar');
  const hero = document.getElementById('hero');
  if (!navbar || !hero) return;

  let ticking = false;
  let heroHeight = hero.offsetHeight || 600;

  window.addEventListener('resize', () => {
    heroHeight = hero.offsetHeight || 600;
  });

  function updateLamp() {
    const scrollY = window.scrollY;
    
    // Calculate progress (0 to 1) based on hero height
    let progress = Math.min(scrollY / Math.max(heroHeight, 1), 1);
    progress = Math.max(progress, 0);

    // Update CSS variable on navbar
    navbar.style.setProperty('--lamp-progress', progress.toFixed(3));
    
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateLamp);
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateLamp();
}

// ===========================================
// MAIN INITIALIZATION
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSystem();
  initTypewriter();
  initNavbarScroll();
  initScrollReveal();
  initMobileMenu();
  initSmoothScroll();
  initGallerySwipe();
  initHeroLampScroll();
  initParticles();
  initImageFallback();
  initContactForm();
  initSmoothScrollSystem();


  // Initial reveal for elements already in viewport
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 100);
});
// ==========================================
// Expand Projects Logic
// ==========================================
window.toggleProjects = function() {
  const grid = document.querySelector('.projects__grid');
  const btn = document.getElementById('toggleProjectsBtn');
  if (!grid || !btn) return;
  
  const isExpanded = grid.classList.toggle('projects__grid--expanded');
  
  // Atualizar atributo e texto via translatePage ou manualmente com o idioma atual
  const langKey = isExpanded ? 'projects.less' : 'projects.more';
  btn.setAttribute('data-i18n', langKey);
  
  // Sincronizar texto imediatamente para UX suave
  const t = window.translations[currentLanguage];
  if (t && t.projects) {
    btn.textContent = isExpanded ? t.projects.less : t.projects.more;
  }

  if (!isExpanded) {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================
// IMAGE FALLBACKS
// ==========================================
function initImageFallback() {
  // Universal fallback for ANY image that fails to load
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) {
      handleImageError(img);
    }
    img.addEventListener('error', () => handleImageError(img));
  });
}

function handleImageError(img) {
  if (img.classList.contains('hero__avatar')) {
    img.style.display = 'none';
    const container = img.parentElement;
    if (container && !container.querySelector('.hero__avatar-fallback')) {
      const fallback = document.createElement('div');
      fallback.className = 'hero__avatar-fallback';
      fallback.innerHTML = 'MT';
      container.insertBefore(fallback, img);
    }
  } else if (img.classList.contains('project-card__img') || img.classList.contains('gallery__img')) {
    // Elegant placeholder for project images
    img.src = 'https://placehold.co/600x400/0a0a0a/00BFA6?text=Projeto+Digital';
    img.style.filter = 'grayscale(0.5)';
  }
}

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================
function initContactForm() {
  const form = document.querySelector('.contact__form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    let hasError = false;
    
    if (email && (!email.value.includes('@') || email.value.length < 5)) {
      email.style.borderColor = '#ef4444';
      hasError = true;
    } else if (email) {
      email.style.borderColor = '';
    }

    if (hasError) return;

    // Loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.style.opacity = '0.7';
    submitBtn.style.pointerEvents = 'none';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        submitBtn.textContent = 'Mensagem Enviada! ✓';
        submitBtn.style.backgroundColor = 'var(--accent)';
        form.reset();
      } else {
        submitBtn.textContent = 'Erro ao enviar. Tente novamente.';
        submitBtn.style.backgroundColor = '#ef4444';
      }
    } catch (error) {
      submitBtn.textContent = 'Erro ao enviar. Tente novamente.';
      submitBtn.style.backgroundColor = '#ef4444';
    }

    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = '';
      submitBtn.style.opacity = '1';
      submitBtn.style.pointerEvents = 'auto';
    }, 3000);
  });
}
// ==========================================
// SMOOTH SCROLL SYSTEM (LENIS)
// ==========================================
function initSmoothScrollSystem() {
  // Detetar se é um dispositivo tátil
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // No telemóvel, o scroll nativo é muito superior ao simulado
  if (isTouch) {
    console.log("Lenis: Mobile/Touch detected. Using native inertia scroll for better performance.");
    return;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false, // Garante que não tenta suavizar o toque se inicializado
    touchMultiplier: 2,
    infinite: false,
  });

  window.lenis = lenis;

  const scrollProgress = document.getElementById('scrollProgress');

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on('scroll', (e) => {
    // Update progress bar
    const progress = e.progress * 100;
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }
  });
}
