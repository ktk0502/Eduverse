// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
bar.addEventListener('click', () => { 
    nav.classList.add('active');
})
}

if (close) {
    bar.addEventListener('click', () => { 
        nav.classList.remove('active');
    })
    }
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    
    registerLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });
    
    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    });
    
     btnPopup.addEventListener('click', ()=> {
         wrapper.classList.add('active-popup');
     });
    
    iconClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
    });
    
    function redirectToDestination() {
        // Change the URL to the desired destination
        window.location.href = '/solidstate.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination2() {
        // Change the URL to the desired destination
        window.location.href = '/hydrocarbons.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination3() {
        // Change the URL to the desired destination
        window.location.href = '/organicchemistry.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination4() {
        // Change the URL to the desired destination
        window.location.href = '/atomschemistry.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination5() {
        // Change the URL to the desired destination
        window.location.href = '/Humananatomy.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination6() {
        // Change the URL to the desired destination
        window.location.href = '/Microorgans.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination7() {
        // Change the URL to the desired destination
        window.location.href = '/Animals.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination8() {
        // Change the URL to the desired destination
        window.location.href = '/Plants.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination9() {
        // Change the URL to the desired destination
        window.location.href = '/Atomsphysics.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination10() {
        // Change the URL to the desired destination
        window.location.href = '/Solarsystem.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination11() {
        // Change the URL to the desired destination
        window.location.href = '/Atomsphysics.ejs'; // Replace '/destination' with your desired route
    }
    function redirectToDestination12() {
        // Change the URL to the desired destination
        window.location.href = '/Solarsystem.ejs'; // Replace '/destination' with your desired route
    }