// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
//
// const sNames = names.filter(name => {
//   if(name.charAt(0) === 'S') {
//     return true;
//   } else {
//     return false;
//   }
// });
//
//
//
// console.log(sNames);



// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
//
// const sNames = names.filter(name => name.charAt(0) === 'S');
//
//
//
// console.log(sNames);

// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
// const startsWithS = name => name.charAt(0) === 'S';
// const sNames = names.filter(startsWithS);
//
//
//
// console.log(sNames);

// const numbers = [1,2,3,4,5];
// const no3 = numbers.filter(number => number !== 3);
//
// console.log(no3);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evens = numbers.filter(number => number % 2 === 0);

console.log(evens);