
let elHeader = document.querySelector('.header');
let hamburgMenu = document.querySelector('.js-toggle__button'); 

if (hamburgMenu){
  hamburgMenu.addEventListener('click', function(){
    elHeader.classList.toggle('site-header__open')
  })
}