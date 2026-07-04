(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  var scrollProgress = document.getElementById('scroll-progress');
  var footerYear = document.getElementById('footer-year');

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // header scrolled state + scroll progress bar
  function onScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? scrollTop / docHeight : 0;

    if (header) header.classList.toggle('is-scrolled', scrollTop > 12);
    if (scrollProgress) scrollProgress.style.transform = 'scaleX(' + progress + ')';
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile nav toggle
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.classList.toggle('is-active', isOpen);
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // WhatsApp CTA click tracking (Meta Pixel)
  // Links já abrem em nova aba (target="_blank"), então a navegação não
  // interrompe o disparo do evento — não é necessário atrasar o clique.
  // NOME DO EVENTO NÃO CONFIRMADO: "Contact" é o evento padrão mais provável
  // da Meta para este caso, mas checar no Events Manager antes de publicar.
  document.querySelectorAll('.js-whatsapp-cta').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Contact');
      }
    });
  });
})();
