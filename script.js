let userName = "Ali";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

function greet(name) {
  return "Hello, " + name + "!";
}

function addNumbers(a, b) {
  return a + b;
}

console.log(greet(userName));
console.log("Sum: " + addNumbers(5, 7));

for (let i = 1; i <= 5; i++) {
  console.log("For loop count: " + i);
}

let count = 1;
while (count <= 3) {
  console.log("While loop count: " + count);
  count++;
}

document.getElementById("message").textContent = "Click the button to see magic!";

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Button clicked!";
});

let list = document.getElementById("list");
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);
}