const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

// клик по бургеру, остановка других событий,  открытие/закрытие листа меню(добавление/снятие active)
hamburger.addEventListener('click', function (event) {    
  event.stopPropagation();
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

// клик внутри открітого меню, остановка других собітий
navList.addEventListener("click", function (event) {     
  event.stopPropagation();
});

// клик вне поля меню- снятие active(закрытие бургер меню)
document.addEventListener("click", function () {        
  hamburger.classList.remove("active");
  navList.classList.remove("active");
});

// перебор пунктов меню, при клике закрытие бургер меню
navLinks.forEach(function(link) {                      
  link.addEventListener('click', function () {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
  });
});