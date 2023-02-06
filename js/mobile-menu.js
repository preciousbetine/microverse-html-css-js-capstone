

const menuBtn = document.querySelector('#show-nav-button');
const mobileMenu = document.querySelector('#mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  const closeMenuBtn = document.querySelector('#close-menu-btn');
  closeMenuBtn.addEventListener('click', () => {
    setTimeout(() => {
      mobileMenu.style.display = '';
    }, 300);
  });
})
