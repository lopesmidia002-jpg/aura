/**
 * AURA MAISON DE BEAUTÉ — MAIN JAVASCRIPT
 * Interatividades Touch-First, Mobile Sheet, Comparador, Máscaras e Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initBeforeAfterSlider();
  initRitualsFilter();
  initBookingModal();
  initFormsAndToasts();
  initActiveNavOnScroll();
  initPhoneMasks();
  initMinDates();
  initScrollReveal();
});

/* ==========================================================================
   1. HEADER SCROLL & GLASSMORPHISM
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE DRAWER MENU (COM GESTO DE FECHAMENTO)
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('#menu-toggle-btn');
  const bottomBarMenuBtn = document.querySelector('#bottom-bar-menu-btn');
  const drawer = document.querySelector('#mobile-drawer');
  const overlay = document.querySelector('#mobile-drawer-overlay');
  const closeBtn = document.querySelector('#mobile-drawer-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!drawer || !overlay) return;

  const openDrawer = () => {
    if (toggleBtn) {
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (toggleBtn) {
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (bottomBarMenuBtn) {
    bottomBarMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Gesto swipe para a direita fecha o menu no celular
  let touchStartX = 0;
  drawer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  drawer.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX - touchStartX > 60) {
      closeDrawer();
    }
  }, { passive: true });
}

/* ==========================================================================
   3. BEFORE / AFTER COMPARISON SLIDER (TOUCH & DRAG OTIMIZADO)
   ========================================================================== */
function initBeforeAfterSlider() {
  const comparisonCard = document.querySelector('.comparison-card');
  const sliderRange = document.querySelector('.comparison-slider-range');
  const afterImageWrap = document.querySelector('.comparison-after');
  const handle = document.querySelector('.comparison-handle');

  if (!comparisonCard || !sliderRange || !afterImageWrap || !handle) return;

  const setPosition = (val) => {
    const clamped = Math.max(0, Math.min(100, val));
    afterImageWrap.style.width = `${clamped}%`;
    handle.style.left = `${clamped}%`;
  };

  sliderRange.addEventListener('input', (e) => {
    setPosition(e.target.value);
  });

  // Eventos de Toque e Mouse Diretos no Card
  let isDragging = false;

  const handlePointerMove = (clientX) => {
    const rect = comparisonCard.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(percentage);
    sliderRange.value = Math.max(0, Math.min(100, percentage));
  };

  comparisonCard.addEventListener('mousedown', (e) => {
    isDragging = true;
    handlePointerMove(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  comparisonCard.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handlePointerMove(e.clientX);
  });

  // Suporte Touch Nativo (pan-y preservando rolagem vertical suave)
  comparisonCard.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  }, { passive: true });

  comparisonCard.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length === 0) return;
    handlePointerMove(e.touches[0].clientX);
  }, { passive: true });

  // Posição inicial: 50%
  setPosition(50);
}

/* ==========================================================================
   4. RITUALS CATEGORY FILTER (TOUCH & DESKTOP)
   ========================================================================== */
function initRitualsFilter() {
  const filterButtons = document.querySelectorAll('.ritual-filter-btn');
  const ritualCards = document.querySelectorAll('.ritual-card');

  if (!filterButtons.length || !ritualCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza botão ativo
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Rola suavemente o botão selecionado para o centro da rolagem horizontal no mobile
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      const filterCategory = btn.getAttribute('data-filter');

      ritualCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. BOOKING MODAL (BOTTOM SHEET MOBILE & DESKTOP DIALOG)
   ========================================================================== */
function initBookingModal() {
  const modalBackdrop = document.querySelector('#booking-modal-backdrop');
  const modalCloseBtn = document.querySelector('#modal-close-btn');
  const modalContent = document.querySelector('.modal-content');
  const grabBar = document.querySelector('.sheet-grab-bar');
  const triggerBtns = document.querySelectorAll('[data-open-modal="booking"]');
  const ritualSelect = document.querySelector('#modal-ritual-select');

  if (!modalBackdrop) return;

  const openModal = (ritualName = '') => {
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Pré-seleção do ritual no select se informado
    if (ritualSelect && ritualName) {
      for (let option of ritualSelect.options) {
        if (option.text.toLowerCase().includes(ritualName.toLowerCase())) {
          ritualSelect.value = option.value;
          break;
        }
      }
    }

    // Foco no primeiro campo
    setTimeout(() => {
      const firstInput = modalBackdrop.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 200);
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const ritualName = btn.getAttribute('data-ritual-name') || '';
      openModal(ritualName);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Swipe para baixo na barra superior fecha o bottom sheet no mobile
  if (grabBar && modalContent) {
    let touchStartY = 0;
    grabBar.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    grabBar.addEventListener('touchend', (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchEndY - touchStartY > 50) {
        closeModal();
      }
    }, { passive: true });
  }

  window.openBookingModal = openModal;
  window.closeBookingModal = closeModal;
}

/* ==========================================================================
   6. FORMS, VALIDATION & LUXURY TOASTS
   ========================================================================== */
function initFormsAndToasts() {
  // Formulário do Modal
  const modalBookingForm = document.querySelector('#modal-booking-form');
  if (modalBookingForm) {
    modalBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalBookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Confirmando com Concierge...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        modalBookingForm.reset();
        if (window.closeBookingModal) window.closeBookingModal();
        showToast('Solicitação recebida com distinção! O Concierge AURA entrará em contato em breve via WhatsApp.');
      }, 900);
    });
  }

  // Formulário da Seção de Agendamento
  const sectionBookingForm = document.querySelector('#section-booking-form');
  if (sectionBookingForm) {
    sectionBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = sectionBookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Processando Reserva VIP...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        sectionBookingForm.reset();
        showToast('Agendamento pré-reservado. Nosso Concierge confirmará seu ritual no Jardins com prioridade.');
      }, 900);
    });
  }

  // Newsletter Form
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('Bem-vinda ao Círculo AURA Maison. Seu privilégio exclusivo foi enviado ao seu e-mail.');
        input.value = '';
      }
    });
  }
}

/**
 * Exibe Toast de Alta Joalheria com Ícone Dourado
 */
function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'luxury-toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A059" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 4200);
}

/* ==========================================================================
   7. ACTIVE NAV ON SCROLL
   ========================================================================== */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-25% 0px -55% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   8. MÁSCARA DINÂMICA DE TELEFONE CELULAR (11) 99999-9999
   ========================================================================== */
function initPhoneMasks() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, ''); // Apenas números
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length <= 2) {
        e.target.value = value.length > 0 ? `(${value}` : '';
      } else if (value.length <= 6) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length <= 10) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
      } else {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
      }
    });
  });
}

/* ==========================================================================
   9. DATA MÍNIMA PARA AGENDAMENTOS (A PARTIR DE HOJE)
   ========================================================================== */
function initMinDates() {
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];

  dateInputs.forEach(input => {
    input.min = today;
  });
}

/* ==========================================================================
   10. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Se o usuário prefere movimento reduzido, revela todos imediatamente
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));
}
