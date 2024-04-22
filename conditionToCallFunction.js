document.title = "Use condition to call function";

// account is more than $ needed

/*
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

*/

// when your account comes down

let money = 100;
let charge = 150;
let current = "$";
if (money >= charge) {
    ifFunction();
} else {
    console.log(`Your balance is insufficient! The ${current} left to add is ${charge - money}${current}`);
};

function ifFunction() {
    let left = "Your account left is: ";
    console.log(`${left} ${money - charge}${current}`)
}