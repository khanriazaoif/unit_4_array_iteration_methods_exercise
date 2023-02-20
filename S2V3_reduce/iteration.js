// const total = [0,1,2,3].reduce(
//     (acc, cur) => acc + cur,  0
// )
//
// console.log(total);

const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

const total = prices.reduce((sum, price) => sum + price, 0)

console.log(total);
