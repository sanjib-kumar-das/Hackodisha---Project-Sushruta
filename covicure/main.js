let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});


var typed = new Typed('.typing-text',{
    strings : [' ','Keep Distance','Wash Hands','Wear Masks','Get Vaccinated'],
    loop : true,
    typeSpeed : 200
});