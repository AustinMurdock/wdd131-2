
const navBtn = document.getElementById("nav-btn");
const nav = document.querySelector("nav");
const gallery = document.getElementById("gallery-grid");
const modal = document.getElementById("modal");

navBtn.addEventListener("click", function(){
    nav.classList.toggle("hidden");
});

gallery.addEventListener("click", e => {
    // console.log(e);
    clickTarget = e.target;
    if (clickTarget.localName == "img") {
        if (modal.querySelector("img")) {
            modal.removeChild(modal.querySelector("img"));
        };
        modal.appendChild(viewerTemplate(clickTarget));
        modal.showModal();
    }
});
modal.addEventListener("click", e => {
    // console.log(e);
    if (e.target.localName != "img") {
        modal.close();
    };
});

function viewerTemplate(img) {
    let node = document.createElement("img");
    node.setAttribute("src", img.getAttribute("src").replace("-sm", "-full"));
    node.setAttribute("alt", img.getAttribute("alt"));
    return node;
};
