
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
