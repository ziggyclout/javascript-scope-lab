// Write your solution in this file!
// Global scope
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function scope
function addBurger() {
    let newBurger = 'Flatburger';
    burgers.push(newBurger);
}

//Block scope
if (true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }
}