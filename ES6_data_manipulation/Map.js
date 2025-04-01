// const myMap = new Map();
// myMap.set('name', 'John');
// myMap.set('age', 30);
// myMap.set('city', 'New York');

// myMap.set({id:1}, {name:"name",lastname:"lastName"});

// console.log(myMap);


const userSession = new Map();
const user1 = {id:1,name:"John"};
const user2 = {id:2,name:"Jane"};
userSession.set(user1, {lastLogin: new Date()});

console.log(userSession);