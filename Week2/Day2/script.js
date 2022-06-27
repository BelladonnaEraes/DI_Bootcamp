/*let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,drive this c
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};

userCart["prices"]["pear"] = userCart["prices"]["pear"]*1.17;
//or
userCart["prices"]["pear"]*=1,17;

console.log(userCart["prices"]["pear"]);

let userAnswer = prompt("which fruit do you want?").toLowerCase();
console.log(userAnswer)*/


let ageUser = Number(prompt("What's your age?"));

if (ageUser < 18) {
	alert("Sorry, you are too young to drive this car. Powering off")
} else if (ageUser === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!")
} else {
alert("Powering On. Enjoy the ride!")
}

