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


//Pre Loader That displays for a while before rest of site is shown
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');
    setTimeout(function() {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);
});