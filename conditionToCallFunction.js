document.title = "Use condition to call function";

let money = 200;
let charge = 150;
let current = "$";
if (money >= charge) {
    ifFunction();
} else {
    console.log("Your balance is insufficient!");
};

function ifFunction() {
    let left = "Your account left is: ";
    console.log(`${left} ${money - charge}${current}`)
}