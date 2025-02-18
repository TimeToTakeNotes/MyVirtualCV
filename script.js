document.addEventListener("DOMContentLoaded", function() {
    // -------- Side Menu for Small/Mobile Screens -------- //
    const sidemenu = document.getElementById("sidemenu");

    const openMenu = () => sidemenu.style.right = "0";
    const closeMenu = () => sidemenu.style.right = "-200px";

    window.openmenu = openMenu;
    window.closemenu = closeMenu;

    // -------- Event Listeners for Tabs -------- //
    const initTabs = () => {
        const radios = document.querySelectorAll('.radio input');
        const contents = document.querySelectorAll('.tab-content');

        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                contents.forEach(content => content.classList.remove('active-tab'));
                document.getElementById(`${radio.id.split('-')[0]}-content`).classList.add('active-tab');
            });
        });
    };

    // -------- Navbar Active Link -------- //
    const initNavbarLinks = () => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', function() {
                links.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            });
        });
    };

    // -------- Preloader -------- //
    const initPreloader = () => {
        const preloader = document.querySelector('.preloader');
        const mainContent = document.querySelector('.main-content');
        setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000);
    };

    // -------- Typing Animation -------- //
    const initTypingAnimation = () => {
        new Typed(".mult-text", {
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
                "Problem Solver"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    };

    // -------- Google Sheets Form Submission -------- //
    const initContactForm = () => {
        const scriptURL = 'https://script.google.com/macros/s/.../exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById("msg");

        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => {
                        msg.innerHTML = "Message sent successfully";
                        setTimeout(() => msg.innerHTML = "", 5000);
                        form.reset();
                    })
                    .catch(error => console.error('Error!', error.message));
            });
        } else {
            console.error('Form not found!');
        }
    };

    // -------- Work Section Slider -------- //
    const initWorkSlider = () => {
        const workList = document.querySelector('.work-list');
        const nextBtn = document.querySelector('.btn-next');
        const prevBtn = document.querySelector('.btn-prev');
        let scrollPosition = 0;
        const cardWidth = document.querySelector('.work').clientWidth + 20;

        nextBtn.addEventListener('click', () => {
            const maxScroll = workList.scrollWidth - workList.clientWidth;
            scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
            workList.style.transform = `translateX(-${scrollPosition}px)`;
        });

        prevBtn.addEventListener('click', () => {
            scrollPosition = Math.max(scrollPosition - cardWidth, 0);
            workList.style.transform = `translateX(-${scrollPosition}px)`;
        });
    };

    // -------- Navbar Scroll Spy -------- //
    const initScrollSpy = () => {
        document.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
                if (link.getAttribute('href').includes(currentSection)) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            });
        });
    };

    // -------- Initialize All Functions -------- //
    initTabs();
    initNavbarLinks();
    initPreloader();
    initTypingAnimation();
    initContactForm();
    initWorkSlider();
    initScrollSpy();
});
