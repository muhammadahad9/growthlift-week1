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

// ── DAY 4: DOM Manipulation & Tab Switcher ──

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active from all tabs and contents
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // Add active to clicked tab
        tab.classList.add("active");

        // Show matching content
        const target = tab.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
    });
});

// ── DAY 5: Fetch API + Quote Generator ──

function getQuote() {
    const quoteText = document.getElementById("quote-text");
    quoteText.textContent = "Loading...";

    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = `"${data.content}" — ${data.author}`;
        })
        .catch(error => {
            quoteText.textContent = "Could not load quote. Try again!";
            console.log("Error:", error);
        });
}

// Load quote on page start
getQuote();

// New quote on button click
document.getElementById("new-quote").addEventListener("click", getQuote);