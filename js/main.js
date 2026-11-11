/**
 * AURA MAISON DE BEAUTÉ — MAIN JAVASCRIPT
 * Interatividades Touch-First, Mobile Sheet, Comparador, Carrossel & Concierge VIP
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initBeforeAfterSlider();
  initRitualsFilter();
  initTestimonialsCarousel();
  initBookingModal();
  initFormsAndConcierge();
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
  const comparisonCard = document.querySelector('#slider-viewport') || document.querySelector('.comparison-card');
  const sliderRange = document.querySelector('#slider-invisible-range') || document.querySelector('.comparison-slider-range');
  const afterImageWrap = document.querySelector('#slider-after-pane') || document.querySelector('.comparison-after');
  const handle = document.querySelector('#slider-divider') || document.querySelector('.comparison-handle');

  if (!comparisonCard || !sliderRange || !afterImageWrap || !handle) return;

  const setPosition = (val) => {
    const clamped = Math.max(0, Math.min(100, val));
    afterImageWrap.style.width = `${clamped}%`;
    handle.style.left = `${clamped}%`;
  };

  sliderRange.addEventListener('input', (e) => {
    setPosition(e.target.value);
  });

  let isDragging = false;

  const handlePointerMove = (clientX) => {
    const rect = comparisonCard.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, percentage));
    setPosition(clamped);
    sliderRange.value = clamped;
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

  comparisonCard.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  }, { passive: true });

  comparisonCard.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  }, { passive: true });

  setPosition(50);
}

/* ==========================================================================
   4. RITUALS CATEGORY FILTER (TOUCH & DESKTOP)
   ========================================================================== */
function initRitualsFilter() {
  const filterButtons = document.querySelectorAll('.pill-btn, .ritual-filter-btn');
  const ritualCards = document.querySelectorAll('.ritual-card');

  if (!filterButtons.length || !ritualCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

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
   5. CARROSSEL DE DEPOIMENTOS (EDITORIAL SPOTLIGHT)
   ========================================================================== */
function initTestimonialsCarousel() {
  const testimonials = [
    {
      quote: "“Fiz meu Dia da Noiva no AURA e não tenho palavras para agradecer o carinho de toda a equipe. O ambiente é calmo, refinado e o penteado permaneceu intacto a festa inteira!”",
      author: "ISABELA FONTES GUIMARÃES",
      tag: "Morena Iluminada Toffee"
    },
    {
      quote: "“O visagismo da Camila Ferraz transformou completamente a harmonia do meu rosto. Já sou cliente há 4 anos e não troco o corte por nenhum outro em São Paulo.”",
      author: "MARIANA CARDOSO LINS",
      tag: "Corte com Visagismo & Escova"
    },
    {
      quote: "“O loiro sublime da Ana Martins é uma verdadeira obra de arte. Clareamento saudável, textura macia e um brilho espelhado que impressiona a todos.”",
      author: "HELENA DE ALBUQUERQUE",
      tag: "Loiro Sublime Signature"
    },
    {
      quote: "“Atendimento impecável desde o café de boas-vindas até a finalização. O protocolo Fusio-Dose recuperou a saúde dos meus fios após anos de processos químicos.”",
      author: "CAROLINA MENDES BASTOS",
      tag: "Protocolo Fusio-Dose & Spa"
    },
    {
      quote: "“A maquiagem para o baile de gala durou a madrugada inteira com acabamento acetinado natural. A Beatriz Alencar é uma artista incomparável.”",
      author: "VALENTINA SGARBI",
      tag: "Haute Makeup"
    }
  ];

  const card = document.querySelector('.testimonial-spotlight-card');
  if (!card) return;

  const quoteEl = card.querySelector('.spotlight-quote-txt');
  const authorEl = card.querySelector('.spotlight-author-name');
  const tagEl = card.querySelector('.spotlight-author-tag');
  const dots = card.querySelectorAll('.dot');
  const prevBtn = card.querySelector('.carousel-nav-btn[aria-label="Depoimento Anterior"]');
  const nextBtn = card.querySelector('.carousel-nav-btn[aria-label="Próximo Depoimento"]');

  let currentIndex = 0;

  const updateTestimonial = (index) => {
    currentIndex = (index + testimonials.length) % testimonials.length;

    if (quoteEl) {
      quoteEl.style.opacity = '0';
      setTimeout(() => {
        quoteEl.textContent = testimonials[currentIndex].quote;
        if (authorEl) authorEl.textContent = testimonials[currentIndex].author;
        if (tagEl) tagEl.textContent = testimonials[currentIndex].tag;
        quoteEl.style.transition = 'opacity 0.3s ease';
        quoteEl.style.opacity = '1';
      }, 150);
    }

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  if (prevBtn) prevBtn.addEventListener('click', () => updateTestimonial(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateTestimonial(currentIndex + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateTestimonial(i));
  });
}

/* ==========================================================================
   6. BOOKING MODAL (BOTTOM SHEET MOBILE & DESKTOP DIALOG)
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

    if (ritualSelect && ritualName) {
      for (let option of ritualSelect.options) {
        if (option.text.toLowerCase().includes(ritualName.toLowerCase())) {
          ritualSelect.value = option.value;
          break;
        }
      }
    }

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
   7. CONCIERGE WHATSAPP & CRM AUTOMATIZADO
   ========================================================================== */
function initFormsAndConcierge() {
  const WHATSAPP_CONCIERGE_NUMBER = '551130889900';

  const generateProtocol = (prefix = 'AURA-VIP') => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${randomCode}`;
  };

  const handleBookingSubmit = async (formElement, formData) => {
    const submitBtn = formElement.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Processando com Concierge...</span>';
    submitBtn.disabled = true;

    const protocol = generateProtocol('AURA-VIP');

    try {
      await fetch('/api/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          protocol: protocol,
          name: formData.name,
          phone: formData.phone,
          ritual: formData.ritualText,
          date: formData.date,
          specialist: formData.specialist || 'Sem preferência',
          time: formData.time || '',
          notes: formData.notes || '',
          timestamp: new Date().toISOString()
        })
      });
    } catch (err) {
      console.warn('API local indisponível, prosseguindo com Concierge direto via WhatsApp:', err);
    }

    const dateFormatted = formData.date ? formData.date.split('-').reverse().join('/') : 'A combinar';
    const specText = formData.specialist && formData.specialist !== 'qualquer' ? `\n✦ Profissional: ${formData.specialist}` : '';
    const timeText = formData.time ? `\n✦ Horário: ${formData.time}` : '';
    const notesText = formData.notes ? `\n✦ Observações: ${formData.notes}` : '';

    const whatsappMessage = encodeURIComponent(
      `Olá, Concierge AURA Maison de Beauté! ✨\n\n` +
      `Gostaria de solicitar uma reserva VIP:\n` +
      `✦ Protocolo: ${protocol}\n` +
      `✦ Nome: ${formData.name}\n` +
      `✦ Ritual Desejado: ${formData.ritualText}\n` +
      `✦ Data Preferencial: ${dateFormatted}\n` +
      `✦ WhatsApp: ${formData.phone}` +
      specText +
      timeText +
      notesText +
      `\n\nAguardo as opções de horários privativos disponíveis nos Jardins. Muito obrigada!`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_CONCIERGE_NUMBER}?text=${whatsappMessage}`;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      formElement.reset();

      if (window.closeBookingModal) window.closeBookingModal();

      showToast(`Protocolo ${protocol} gerado com distinção! Conectando ao Concierge VIP...`);

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
    }, 750);
  };

  // Formulário do Modal
  const modalBookingForm = document.querySelector('#modal-booking-form');
  if (modalBookingForm) {
    modalBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const select = modalBookingForm.querySelector('#modal-ritual-select');
      const formData = {
        name: modalBookingForm.querySelector('#modal-name').value.trim(),
        phone: modalBookingForm.querySelector('#modal-phone').value.trim(),
        ritualValue: select.value,
        ritualText: select.options[select.selectedIndex]?.text || select.value,
        date: modalBookingForm.querySelector('#modal-date').value,
        notes: ''
      };
      handleBookingSubmit(modalBookingForm, formData);
    });
  }

  // Formulário da Seção de Agendamento
  const sectionBookingForm = document.querySelector('#section-booking-form');
  if (sectionBookingForm) {
    sectionBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectRitual = sectionBookingForm.querySelector('#book-ritual');
      const selectPro = sectionBookingForm.querySelector('#book-pro');
      const selectTime = sectionBookingForm.querySelector('#book-time');
      const formData = {
        name: sectionBookingForm.querySelector('#book-name').value.trim(),
        phone: sectionBookingForm.querySelector('#book-phone').value.trim(),
        email: sectionBookingForm.querySelector('#book-email')?.value.trim() || '',
        ritualValue: selectRitual.value,
        ritualText: selectRitual.options[selectRitual.selectedIndex]?.text || selectRitual.value,
        specialist: selectPro ? selectPro.options[selectPro.selectedIndex]?.text : '',
        time: selectTime ? selectTime.options[selectTime.selectedIndex]?.text : '',
        date: sectionBookingForm.querySelector('#book-date').value,
        notes: sectionBookingForm.querySelector('#book-notes')?.value.trim() || ''
      };
      handleBookingSubmit(sectionBookingForm, formData);
    });
  }

  // Formulário de Proposta de Noivas
  const bridalForm = document.querySelector('#bridal-proposal-form');
  if (bridalForm) {
    bridalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = bridalForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Processando com Concierge de Noivas...</span>';
      submitBtn.disabled = true;

      const nameInput = bridalForm.querySelector('input[type="text"]');
      const phoneInput = bridalForm.querySelector('input[type="tel"]');
      const dateInput = bridalForm.querySelector('input[type="date"]');
      const selectPpl = bridalForm.querySelector('select');
      const notesInput = bridalForm.querySelector('textarea');

      const brideName = nameInput ? nameInput.value.trim() : 'Noiva VIP';
      const bridePhone = phoneInput ? phoneInput.value.trim() : '';
      const weddingDate = dateInput ? dateInput.value : '';
      const peopleText = selectPpl ? selectPpl.options[selectPpl.selectedIndex]?.text : 'Somente a Noiva';
      const notes = notesInput ? notesInput.value.trim() : '';

      const protocol = generateProtocol('AURA-NOIVA');
      const dateFormatted = weddingDate ? weddingDate.split('-').reverse().join('/') : 'A definir';

      const whatsappMessage = encodeURIComponent(
        `Olá, Concierge de Noivas da AURA Maison de Beauté! 👰✨\n\n` +
        `Gostaria de solicitar uma proposta para o meu Dia da Noiva:\n` +
        `✦ Protocolo: ${protocol}\n` +
        `✦ Noiva: ${brideName}\n` +
        `✦ WhatsApp: ${bridePhone}\n` +
        `✦ Data do Casamento: ${dateFormatted}\n` +
        `✦ Cortejo: ${peopleText}\n` +
        (notes ? `✦ Observações: ${notes}\n\n` : `\n`) +
        `Aguardo apresentação do cardápio de experiências para Noivas VIP da Maison. Muito obrigada!`
      );

      const whatsappUrl = `https://wa.me/${WHATSAPP_CONCIERGE_NUMBER}?text=${whatsappMessage}`;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        bridalForm.reset();
        showToast(`Proposta ${protocol} registrada! Conectando ao Concierge de Noivas...`);
        setTimeout(() => {
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }, 1000);
      }, 750);
    });
  }

  // Formulário de Newsletter
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';

      if (!email) return;

      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Inscrevendo...</span>';
      submitBtn.disabled = true;

      try {
        await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ email: email, timestamp: new Date().toISOString() })
        });
      } catch (err) {
        console.warn('API newsletter offline:', err);
      }

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        newsletterForm.reset();
        showToast('Bem-vinda ao Círculo AURA Privilège. Seu convite exclusivo foi enviado ao seu e-mail.');
      }, 700);
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
  }, 4800);
}

/* ==========================================================================
   8. ACTIVE NAV ON SCROLL
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
   9. MÁSCARA DINÂMICA DE TELEFONE CELULAR (11) 99999-9999
   ========================================================================== */
function initPhoneMasks() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
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
   10. DATA MÍNIMA PARA AGENDAMENTOS (A PARTIR DE HOJE)
   ========================================================================== */
function initMinDates() {
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];

  dateInputs.forEach(input => {
    input.min = today;
  });
}

/* ==========================================================================
   11. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
