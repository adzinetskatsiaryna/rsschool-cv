window.onscroll = function showHeader() {
    let header = document.querySelector('.js-header');
    if(window.pageYOffset > 600){
        header.classList.add('js-header-fixed');
    } else{
        header.classList.remove('js-header-fixed');
    }
  }

  /*mob menu*/

let menuBtn = document.querySelector('.menu-btn');
let menuLines = document.querySelector('.menu-btn-lines');
let menuMobBox = document.querySelector('.menu-box');
let menuItem = document.querySelectorAll('.menu-item');

if(menuBtn) {
  menuBtn.addEventListener('click', function() {
    menuLines.classList.toggle("menu-btn-active");
    menuMobBox.classList.toggle("menu-show");
  });
}

menuItem.forEach(function(btn) {
  btn.addEventListener('click', function() {
    menuLines.classList.remove("menu-btn-active");
    menuMobBox.classList.remove("menu-show");
  });
});
