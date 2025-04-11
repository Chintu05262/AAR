var menu = document.querySelector('.menu_icon');
var mobNav = document.querySelector('.mobile_nav');
var cancelNav = document.querySelector('.cancel_icon');
if (menu && mobNav && cancelNav) {
    menu.addEventListener('click', () => {
        mobNav.classList.toggle('show');
    });
    cancelNav.addEventListener('click', () => {
        mobNav.classList.toggle('show');
    });
};

// mob dropdown
var dropdown = document.querySelectorAll('.mobile_menu__dropdown');
dropdown.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
    });
});


window.addEventListener("scroll", function () {
    var header = this.document.querySelector(".myNav");
    header.classList.toggle("sticky", this.window.scrollY > 40);
});