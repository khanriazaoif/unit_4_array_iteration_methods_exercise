// const movies = [
//   ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
//   ['Finding Dory'],
//   ['Jaws', 'On the Waterfront']
// ];
//
// const flatMovies = movies.reduce((arr,  innerMovies) => [ ...arr, ...innerMovies], []);
//
// console.log(flatMovies);
//
// const users = [
//   {
//     name: 'Samir',
//     age: 27,
//     favoriteBooks:[
//       {title: 'The Iliad'},
//       {title: 'The Brothers Karamazov'}
//     ]
//   },
//   {
//     name: 'Angela',
//     age: 33,
//     favoriteBooks:[
//       {title: 'Tenth of December'},
//       {title: 'Cloud Atlas'},
//       {title: 'One Hundred Years of Solitude'}
//     ]
//   },
//   {
//     name: 'Beatrice',
//     age: 42,
//     favoriteBooks:[
//       {title: 'Candide'}
//     ]
//   }
// ];
//
// // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide']
//
// const books = users
//   .map(user => user.favoriteBooks.map(book => book.title))
//   .reduce((arr, titles) => [...arr, ...titles], []);
//
// console.log(books);

// const customerNames = [
//   [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
//   [ "Barry", "Wanda", "Jamal", "Hayden" ],
//   [ "Portia", "Pam", "Philip" ]
// ];
// let flattenedCustomerNames;
//
// // flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
// // Write your code below
// flattenedCustomerNames = customerNames
//     .reduce((arr,  names) => [...arr, ...names], []);
//
// console.log(flattenedCustomerNames);

const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// Write your code below
hobbies = customers
    .map(customer => customer.personal.hobbies.map(hobby => hobby))
    .reduce((arr, hobby) => [...arr, ...hobby], []);

console.log(hobbies);
