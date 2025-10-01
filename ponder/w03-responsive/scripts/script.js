const menuBtn = document.querySelector(".menu-btn");
let navAs = document.querySelector("nav").querySelectorAll("a");

menuBtn.addEventListener("click", function(){
    if (navAs[0].style.display == "block") {
        navAs.forEach(e=>{
            e.style.display = "none";
        });
    }
    else {
        navAs.forEach(e=>{
            e.style.display = "block";
        });
    }
})