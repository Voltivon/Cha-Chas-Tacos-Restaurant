// 'use strict';

const menuToggler = document.querySelector(".nav__button");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const menuBtn = document.querySelector('.hero-btn');
const section1 = document.querySelector('.offers--0');
const navMenu = document.querySelector('.nav-list-1');
const navHome = document.querySelector('.nav-list-2');
const navAbout = document.querySelector('.nav-list-3');
const navContact = document.querySelector('.nav-list-4');
const sectionHome = document.querySelector('.hero');
const sectionAbout = document.querySelector('.about');
const sectionContact = document.querySelector('.contact')

////////////////////////////////////////////////////////////
// Toggle Options  
menuToggler.addEventListener('click', () => {
    body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.toggle("open");
    });
})

// Menu Scroll 

menuBtn.addEventListener("click", function(e){
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    section1.scrollIntoView({behavior: 'smooth'})

});
//////////
//Nav Buttons
//////////

// Home Scoll
navHome.addEventListener('click', function(e){
    const s0coords = sectionHome.getBoundingClientRect();
    sectionHome.scrollIntoView({behavior: 'smooth'});
});


//Menu Scroll
navMenu.addEventListener('click', function(e){
    const s1coords = section1.getBoundingClientRect();
    section1.scrollIntoView({behavior: 'smooth'})
});

navAbout.addEventListener('click', function(e){
    const s2coords = sectionAbout.getBoundingClientRect();
    sectionAbout.scrollIntoView({behavior: 'smooth'});
});

navContact.addEventListener('click', function(e){
    const s2coords = sectionContact.getBoundingClientRect();
    sectionContact.scrollIntoView({behavior: 'smooth'})
})



