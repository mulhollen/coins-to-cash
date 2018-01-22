
// Define an object and store it in a variable named piggyBank.

var piggyBank = {
    quarters: 5,
    nickles: 17,
    dimes: 32,
    pennies: 77
}


var dollarAmount = (
    (piggyBank.quarters * .25) + 
    (piggyBank.nickles * .05 ) +
    (piggyBank.dimes * .10) +
    (piggyBank.pennies * .01) 
);

console.log("You have: $" + dollarAmount);
