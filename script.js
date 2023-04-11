const menu = document.querySelector('.hamburger');
const navList = document.querySelector('.mob-nav-list');
const close = document.querySelector('.close');
const lists = document.querySelectorAll('.mob-nav-list li');

menu.addEventListener('click', () => {
  navList.style.marginLeft = 0;
});

close.addEventListener('click', () => {
  navList.style.marginLeft = '-1000px';
});

lists.forEach((list) => {
  list.addEventListener('click', () => {
    navList.style.marginLeft = '-1000px';
  });
});
