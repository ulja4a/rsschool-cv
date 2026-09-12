const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

navLinks.forEach(function(link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
  });
});