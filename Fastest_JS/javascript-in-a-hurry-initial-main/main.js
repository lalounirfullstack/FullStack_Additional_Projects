//Main Menu Hide & Show
document.querySelector('#open-nav-menu').addEventListener('click', () => {
  const navWrapper = document.querySelector('header nav .wrapper');
  navWrapper.classList.add('nav-open');
});

document.querySelector('#close-nav-menu').addEventListener('click', () => {
  const navWrapper = document.querySelector('header nav .wrapper');
  navWrapper.classList.remove('nav-open');
});
