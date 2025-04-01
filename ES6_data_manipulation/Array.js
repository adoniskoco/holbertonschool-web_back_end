// const myArray = [1, "message", true, 1.45, {name: "name", lastname: "lastName"},[1,2,3]];
// console.log(myArray[5][1]);

// const myArray = new Array(1, "message", true, 1.45, {name: "name", lastname: "lastName"},[1,2,3]);

// console.log(myArray[0]);


const dbUser = [
	{id: 1, name: "John", age: 25},
	{id: 2, name: "Jane", age: 30},
	{id: 6, name: "Tim", age: 20, isAdmin: true},
	{id: 3, name: "Mark", age: 35},
	{id: 4, name: "Mary", age: "28"},
	{id: 5, name: "Tom", age: 22},
	{id: 6, name: "Emma", age: 27},
	{id: 6, name: "Emma", age: 27, isAdmin: true},
];


// dbUser.map((user,index)=>{
// 	console.log("user----",user);
// 	console.log("index----",index);
// });

const result = dbUser.filter((user,index)=>{
	// return user.age === 28;
	// return user.age == 28;
	return user.age > 25;
});
console.log("result----",result);


// const getAdmin = dbUser.find((user,index)=>{
// 	return user.isAdmin === true;
// });

// console.log("getAdmin----",getAdmin);