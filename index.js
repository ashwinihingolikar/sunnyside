const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".ham-menu");


//event selectors

hamburger.addEventListener('click', () =>{
    navbar.classList.toggle('show');
});