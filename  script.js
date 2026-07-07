// ── DAY 3: JavaScript Fundamentals ──

// VARIABLES
let name = "Muhammad Ahad";
const site = "GrowthLift";
var oldWay = "avoid this"; // old style

// DATA TYPES
let greeting = "Hello World";
let price = 15000;
let isOnline = true;
let skills = ["HTML", "CSS", "JavaScript"];
let intern = { name: "Muhammad Ahad", week: 2, city: "Lahore" };

// FUNCTIONS
function greet(name) {
    return "Hello " + name;
}
const greetArrow = (name) => "Hello " + name;

// LOOPS
for (let i = 0; i < 5; i++) {
    console.log(i);
}
skills.forEach(skill => console.log(skill));

// CONDITIONALS
if (isOnline) {
    console.log("User is online");
} else {
    console.log("Offline");
}

// TEMPLATE LITERALS
console.log(`Welcome to ${site}, ${name}!`);
console.log(greet(name));
console.log(greetArrow(name));