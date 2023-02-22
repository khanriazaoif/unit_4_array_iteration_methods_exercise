// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42}
// ];

// const newUsersArray = users.filter(user => user.name !== 'Samir');

// const newUsersArray = users.map(user => `${user.name} is ${user.age} years old.`);

// const usersObject = users.reduce((usersObject, user) =>{
//   usersObject[user.name] = user.age;
// return usersObject;
// }, {});
//
// console.log(usersObject);

const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below
fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`);

console.log(fullAuthorNames);










