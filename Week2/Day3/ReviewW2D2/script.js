//review

// let username="John";
// let lastName="Smith";

// if (username==="John" && lastName==="Smith"){
//     console.log("he is my friend")
// } else {
//     console.log("not my friend")
// }
// VM1330:5 he is my friend

// let username="Tom";
// let lastName="Smith";

// if (username==="John" && lastName==="Smith"){
//     console.log("he is my friend")
// } else {
//     console.log("not my friend")
// }

// not my friend


// const language = prompt("what is your language").toLowerCase();

//i want to check if the language is === french, or === english
// strict comparaison

// switch(language){
// 	case "french" :
// 		console.log("Bonjour");
// 		break;
// 	case "english" :
// 		console.log("Hello");
// 		break;
// 	case "hebrew" :
// 		console.log("Shalom");
// 		break;
// 	default:
// 		console.log(":)");
// }

//here 


// if (language === "french"){
// 	console.log("Bonjour");
// } else if (language==="english"){
// 	console.log("Hello");
// } else if (language==="hebrew"){
// 	console.log("Shalom");
// } else {
// 	console.log(":)");
// }





// EXERCISEXP

// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "123"];

// if (users.length===0){
// 	console.log("no one is online")
// } else if (users.length===1){
// 	console.log(`${users[0]} is online`)
// } else if (users.length===2){
// 	console.log(`${users[0]} and ${users[1]} is online`)
// } else {
// 	console.log(`${users[0]} and ${users[1]} ARE online and ${users.length-2} also`)
// }														//5-2


// switch(users.length){
// 	case 0:
// 		console.log("no one is online")
// 		break;
// 	case 1 :
// 		console.log(`${users[0]} is online`)
// 		break;
// 	case 2 :
// 		console.log(`${users[0]} and ${users[1]} is online`)
// 		break;
// 	default: 
// 		console.log(`${users[0]} and ${users[1]} ARE online and ${users.length-2} also`)
// }

// let username = "Tom";
// let lastname="Smith";
// //The lastname of Tom is Smith
// let sentence = "The lastname of " + username + " is " + lastname;
// //the same
// let sentenceTemplate = `The lastname of ${username} is ${lastname}`;