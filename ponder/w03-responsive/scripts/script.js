const menuBtn = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("hidden");
    menuBtn.classList.toggle("change");
})