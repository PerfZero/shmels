document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.products__tabs button');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    const buttons = card.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
      });
    });
  });

  const modal = document.getElementById('callback-modal');
  const callbackBtn = document.querySelector('.header__callback');
  const closeBtn = modal ? modal.querySelector('.modal__close') : null;

  console.log('modal:', modal);
  console.log('callbackBtn:', callbackBtn);
  console.log('closeBtn:', closeBtn);

  if (modal && callbackBtn && closeBtn) {
    callbackBtn.addEventListener('click', () => {
      console.log('Открытие модального окна');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
      console.log('Закрытие модального окна по крестику');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        console.log('Закрытие модального окна по фону');
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    const form = modal.querySelector('.modal__form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Отправка формы');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        alert('Заявка отправлена!');
      });
    } else {
      console.log('form не найден');
    }
  } else {
    console.log('modal, callbackBtn или closeBtn не найден');
  }

  // --- БУРГЕР-МЕНЮ ---
  const burger = document.getElementById('burger-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  console.log('burger:', burger);
  console.log('mobileMenu:', mobileMenu);

  if (burger && mobileMenu) {
    let justClickedBurger = false;
    burger.addEventListener('click', function(e) {
      e.stopPropagation();
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      justClickedBurger = true;
      console.log('Бургер клик: active=', burger.classList.contains('active'));
    });

    // Клик внутри мобильного меню не закрывает меню
    mobileMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });

    // Закрытие меню при клике вне меню и вне бургера
    document.addEventListener('click', function(event) {
      if (justClickedBurger) {
        justClickedBurger = false;
        return;
      }
      const isBurger = burger === event.target || burger.contains(event.target);
      const isMenu = mobileMenu === event.target || mobileMenu.contains(event.target);
      if (
        mobileMenu.classList.contains('active') &&
        !isMenu &&
        !isBurger
      ) {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        console.log('Закрытие меню по клику вне меню');
      }
    });

    // Закрытие меню по клику на ссылку
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        console.log('Закрытие меню по клику на ссылку');
      });
    });
  } else {
    console.log('burger или mobileMenu не найден');
  }
}); 


      // Добавляем скрипт для бургер-меню
      document.addEventListener('DOMContentLoaded', function() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.header__nav');
        
        burger.addEventListener('click', function() {
          burger.classList.toggle('active');
          nav.classList.toggle('active');
          document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Закрытие меню при клике на ссылку
        nav.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
          });
        });
      });