// const strings = ['1','2','3','4','5'];
// const numbers = strings.map(string => parseInt(string, 10));
//
// console.log(numbers);
// console.log(typeof numbers);


// const fruits = ['apple', 'pear', 'cherry'];
//
// let capitalizedFruits = [];
//
// fruits.forEach(fruit => {
//     let capitalizedFruit = fruit.toUpperCase();
//     capitalizedFruits.push(capitalizedFruit);
// });
//
// console.log(capitalizedFruits);

// const fruits = ['apple', 'pear', 'cherry'];
//
// let capitalizedFruits = [];
//
// const uppercase = fruits.map(fruit => fruit.toUpperCase());
// capitalizedFruits.push(uppercase);
//
// console.log(capitalizedFruits);

// const fruits = ['apple', 'pear', 'cherry'];
//
// const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());
//
// console.log(capitalizedFruits);

const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceInDollars = price => `$${price.toFixed(2)}`;
const displayPrices = prices.map(priceInDollars
);

console.log(displayPrices);