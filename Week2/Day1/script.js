let addressNumber;
let addressStreet;
let country; 

addressNumber = 5;
addressStreet = "BenYehuda";
country = "Israel";

let sentence = "I live in " + addressStreet + addressNumber + ", " + " in " + country
console.log(sentence)


let birthYear = 1992;
let futureYear = 2042;

let futureAge = "I will be " + (futureYear-birthYear) + " in " + futureYear
console.log(futureAge)


let listPet = ['cat','dog','fish','rabbit','cow']

console.log(listPet[1]);

listPet.splice(3,1,"horse");
console.log(listPet);
console.log(listPet.length);