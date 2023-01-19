const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToogle){
  navToogle.addEventListener('click', ()=>{
    this.navMenu.classList.add('show-menu')
  }) 
}
if(navClose){
  navToogle.addEventListener('click', ()=>{
    this.navMenu.classList.remove('show-menu')
  }) 
}