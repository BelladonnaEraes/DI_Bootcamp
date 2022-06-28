let fruits = ["apple", "banana", "pear", "melon"];

// -> result wanted
// let fruits = ["apples", "bananas", "pears", "melons"];
// fruits[0] = fruits[0]+"s";
//take the element at the index 0 and mofidy
// it to be element at the index 0"s"

for (let i = 0; i < fruits.length; i++){
	fruits[i] = fruits[i]+"s";
}
console.log(fruits)


//OTHER TYPES OF LOOPS
// for of with an array
let colors = ["blue", "red", "yellow"];

// go through the colors and console.log them
for (let i = 0; i<colors.length; i++){
	console.log(colors[i])
}

// // the same
for (let col of colors){
	console.log(col)
}

// 1st loop
// col =  "blue"

// 2nd loop
// col="red"

// Exercise with array of objects
let players = [
    {
        username : "Jane",
        age : 22,
        levelGame : 15,
        isGoodPlayer : true,
        products : ["cat", "uniform"],
    },
    {
        username : "Mark",
        age : 45,
        levelGame : 95,
        isGoodPlayer : true,
        products : ["dog", "arrow"],
    }
];
// retrieve the username of the 1st player
// console.log(players[0]["username"])

// console.log the name of all the players

for (let i = 0; i<players.length; i++){
	console.log(players[i]["username"])
}

// play takes the value of the object
//in the 1st loop, play is equal to the 1st object
// in the 2nd loop, play is equal to the 2nd object
for (let user of players){
	console.log(user["username"])
}

// FOR IN with objects
let userOne = {
    username : "Jane",
    age : 22,
    levelGame : 15,
    isGoodPlayer : true,
    products : ["cat", "uniform"],
};

//console.log the values of the object
// console.log(userOne["username"])
// console.log(userOne["age"])
// console.log(userOne["levelGame"])

for (let key in userOne){
	console.log(key)
	console.log(key, userOne[key])
}

// 1st loop
// key: "username"
// console.log(userOne[key]) -> userOne["username"]

// 2nd loop
// key: "age"
// console.log(userOne[key]) -> userOne["age"]