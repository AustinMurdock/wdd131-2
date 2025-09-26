
const colorSelect = document.getElementById("color-select");
let subHeadings = document.querySelectorAll("h2");
let logos = document.querySelectorAll(".logo");

colorSelect.addEventListener("change", function(){
    let colorVal = colorSelect.value;
    if (colorVal === "dark") {
        document.body.classList.add("darkmode");
        subHeadings.forEach(e => {e.classList.add("darkmode")});
        logos.forEach(e => {e.setAttribute("src", "./images/byui-logo-white.png")});
        // just in case of multiple h2s or logos
    }
    else if (colorVal === "light") {
        document.body.classList.remove("darkmode");
        subHeadings.forEach(e => {e.classList.remove("darkmode")});
        logos.forEach(e => {e.setAttribute("src", "./images/byui-logo-blue.png")});
    }
});