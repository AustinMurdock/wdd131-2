
const navBtn = document.getElementById("nav-btn");
const nav = document.querySelector("nav");

const gallery = document.getElementById("gallery-grid");
const modal = document.getElementById("modal");
const modalImg = modal.querySelector("img");

navBtn.addEventListener("click", function(){
    nav.classList.toggle("hidden");
});

gallery.addEventListener("click", e => {
    // console.log(e);
    clickTarget = e.target;
    if (clickTarget.localName == "img") {
        modalImg.setAttribute("src", clickTarget.src.replace("-sm", "-full"));
        modalImg.setAttribute("alt", clickTarget.alt);
        modal.showModal();
    }
})
modal.addEventListener("click", e => {
    // console.log(e);
    if (e.target.localName != "img") {
        modal.close();
    }
})
