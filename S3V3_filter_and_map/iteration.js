// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
//     // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
//
// const users = userNames
//     .filter(name => name.charAt(0) === 'S')
//     .map(name => ({name: name}));
//
// console.log(users);

// const users = [
//     {name: 'Samir', age: 27},
//     {name: 'Angela', age: 33},
//     {name: 'Beatrice', age: 42},
//     {name: 'Shaniqua', age: 30},
//     {name: 'Marvin', age: 23},
//     {name: 'Sean', age: 47}
// ];
//
// // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];
//
// const nameOver30 = users
//     .filter(name => name.age >= 30)
//     .map(name => `${name.name}`);
//
// console.log(nameOver30);

const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

unfinishedTasks = todos
    .filter(task => task.done === false)
    .map(task => task.todo);

console.log(unfinishedTasks);