// 🌀 PRELOADER
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 1500);
});

// 👁️ ANIMACIONES AL HACER SCROLL
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
});

scrollRevealElements.forEach(el => {
  observer.observe(el);
});

// 📱 MENÚ HAMBURGUESA
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('main-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}

// 📑 MENÚ TABS
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    document.querySelectorAll('.menu-tab-content').forEach(content => {
      content.classList.remove('active');
    });
    
    const tabId = button.getAttribute('data-tab') + '-content';
    document.getElementById(tabId).classList.add('active');
  });
});

// 🌊 SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// 📩 FORMULARIO
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Reserva confirmada! Pronto nos pondremos en contacto.');
    reservationForm.reset();
  });
};
// 🌀 PRELOADER
document.addEventListener('DOMContentLoaded', function () {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1200);
  }
});

// 📱 MENÚ HAMBURGUESA
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
      mainMenu.classList.toggle('active');
    });
  }
});

// 🍣 TABS DEL MENÚ
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.menu-tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover clase 'active' de todos los botones y contenidos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Agregar clase 'active' al botón y contenido seleccionado
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab') + '-content';
      document.getElementById(tabId).classList.add('active');
    });
  });
});

// 🌸 ANIMACIÓN AL HACER SCROLL (textos que aparecen)
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observar elementos clave
  document.querySelectorAll('.section-header, .about-text, .mascota-info, .reservation-info, .footer-col, .scroll-reveal').forEach(el => {
    observer.observe(el);
  });
});

// 🍃 HOJAS ROSADAS (solo en hero)
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('leavesContainer');
  if (container) {
    for (let i = 0; i < 12; i++) {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
      leaf.style.left = `${Math.random() * 100}%`;
      const size = 8 + Math.random() * 12;
      leaf.style.width = `${size}px`;
      leaf.style.height = `${size}px`;
      leaf.style.animationDuration = `${8 + Math.random() * 12}s`;
      leaf.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(leaf);
    }
  }
});