document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".navbar nav ul");

    menuIcon.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});
