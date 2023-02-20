// const total = [0,1,2,3].reduce(
//     (acc, cur) => acc + cur,  0
// )
//
// console.log(total);

// const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97
//
// const total = prices.reduce((sum, price) => sum + price, 0)
//
// console.log(total);

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const gName = names.reduce((letter, name) => {
    if(name[0] === 'G'){
        return letter + 1;
    }
    return letter;
},0);

console.log(gName);