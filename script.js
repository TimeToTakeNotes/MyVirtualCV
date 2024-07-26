//Side Menu for Small/Mobile Screens
document.addEventListener("DOMContentLoaded", function() {
    var sidemenu = document.getElementById("sidemenu");

    window.openmenu = function() {
        sidemenu.style.right = "0";
    };

    window.closemenu = function() {
        sidemenu.style.right = "-200px";
    };
});


//Event Listeners To Show/Hide Corresponding Content
document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('.radio input');
    const contents = document.querySelectorAll('.tab-content');

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            contents.forEach(content => {
                content.classList.remove('active-tab');
            });
            document.getElementById(`${radio.id.split('-')[0]}-content`).classList.add('active-tab');
        });
    });
});


//Navbar home links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



//Pre Loader That displays for a while before rest of site is shown
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');
    setTimeout(function() {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);
});


//Typing Text Animation for Header Text
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".mult-text", {
        strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })
});