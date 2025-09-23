
const PI = 3.14159265358979;

let radius;
let area;


radius = 3;
area = radius * radius * PI;

console.log("radius:", radius);
console.log("area:", area);

radius = "5"; /* weak typing test */
area = radius * radius * PI;

console.log("radius:", radius);
console.log("area:", area);


/* example code */
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
// console.log(student); //does not work, can't access a block variable outside the block

/* example code */
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    // document.getElementsByTagName(h1).style.backgroundColor = "#fff";
    if (codeValue != "") {
        document.getElementById(codeValue).style.backgroundColor = "#ffffaa";
    }
})
