const arr = [1,2,3];

const smallerArr = arr
    .filter(number => number !== 2)
    .map(number => number + 1);

console.log(smallerArr); // => [2,4]


// const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
// let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

// displayYears = years.filter(number => number >= 2001)
//     .map(number => number);
// displayYears = `${displayYears} A.D.`;

// displayYears = years
//     .filter(number => number >= 2001)
//     .map(number => `${number} A.D.`);
//
//
// console.log(displayYears);