const page = document.querySelector(".page");
const menuIcon = document.querySelector(".nav-icon");
const menu = document.querySelector(".menu");
menuIcon.addEventListener('click', function() {

    page.classList.toggle("active");
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
});