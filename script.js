document.addEventListener("DOMContentLoaded", function(){
    //Side Menu for Small/Mobile Screens
    var sidemenu = document.getElementById("sidemenu");

    window.openmenu = function(){
        sidemenu.style.right = "0";
    };

    window.closemenu = function(){
        sidemenu.style.right = "-200px";
    };


    //Event Listeners To Show/Hide Corresponding Content
    const radios = document.querySelectorAll('.radio input');
    const contents = document.querySelectorAll('.tab-content');

    radios.forEach(radio =>{
        radio.addEventListener('change', function(){
            contents.forEach(content => {
                content.classList.remove('active-tab');
            });
            document.getElementById(`${radio.id.split('-')[0]}-content`).classList.add('active-tab');
        });
    });


    //Navbar home links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link =>{
        link.addEventListener('click', function() {
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
 

    //Pre Loader That displays for a while before rest of site is shown
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');
    setTimeout(function(){
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);
 

    //Typing Text Animation for Header Text
    var typed = new Typed(".mult-text",{
        strings: [
            "Frontend Developer",
            "Backend Developer",
            "Web Developer",
            "Python Enthusiast",
            "Java Programmer",
            "SQL Specialist",
            "Data Science Aficionado",
            "Cybersecurity Enthusiast",
            "AI Explorer",
            "Software Developer",
            "Problem Solver",
    ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    //Contact Form to Submit to Google Sheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbws6M4x9a-1GfTpna-soiw2vfqwx5j3SIde4ih0zit_mIzZxxjpdRfdl3lAwLjSu6ic/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    if (form) {
        form.addEventListener('submit', function(e){
            e.preventDefault();
            console.log("Form submission prevented");
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response =>{
                    msg.innerHTML = "Message sent successfully";
                    console.log("Message sent successfully");
                    setTimeout(function(){
                        msg.innerHTML = "";
                    }, 5000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        });
    }else{
        console.error('Form not found!');
    }
});
