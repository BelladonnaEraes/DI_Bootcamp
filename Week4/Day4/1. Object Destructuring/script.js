// //---------------------
// // Destructuring
// // -----------------------

let product = {
  name: 'Tshirt',
  color: 'blue',
  price: 10,
}

// // let name = product.name;
// // let price = product.price;

// // let name = product["name"];
// // let price = product["price"];


// // instead we use object destructuring
// // -- destructuring

// // name of the variable need to be equal to the name 
// // of the keys inside the object
let {name, price} = product;
console.log("name is : ", name, "price is :", price)
//                         // Tshirt           //10

// console.log(product); //the object is unchanged

// // // --- RENAME the variables created while destructuring
// SYNTAX : let {keyName : variableName} = obj
// goal: create clearer variable name

let {name : productName, price : productPrice} = product;
console.log("productName is : ", productName, 
  "productPrice is :", productPrice)

// -- DEFAULT value with destructuring

// let product = {
//   name: 'Tshirt',
//   color: 'blue',
//   price: 10,
//   size : "M",
// }


let {name : productN, price : productP, size="L"} = product;
console.log("productN is : ", productN, 
  "productP is :", productP, "size is :", size)


// // ---------------
// // WITH FUNCTIONS
// // -----------------

function displayUser(userObj){
  let fn = userObj["firstName"];
  let color = userObj["favoriteColor"];
  console.log(`The person name is ${fn}, his fav is ${color}`)

}

displayUser({firstName: "Alex", favoriteColor: "purple"})

// destructuring in the parameters of a function
function displayUserOne({firstName:username, favoriteColor: color}){
  console.log(`The person name is ${username}, his fav is ${color}`)
}

displayUserOne({firstName: "Alex", favoriteColor: "purple"})

// destructuring in the function
function displayUserTwo(userObj){
  let {firstName, favoriteColor} = userObj
  console.log(`The person name is ${firstName}, his fav is ${favoriteColor}`)
}

displayUserTwo({firstName: "Alex", favoriteColor: "purple"})

// //----------------
// //NESTED DESTRUCTURING
// //----------------

let otherProduct = {
  name: 'Tshirt',
  color: 'blue',
  price: 10,
  availibility : {
    store : ["Tel Aviv", "Herzelia"],
    totalNumProduct : 100
  }
}

// let {totalNumProduct} = otherProduct //not working


// SYNTAX let {nameKey : {nameSubKey}} = object

// //nested destructuring
let {availibility : {totalNumProduct}} = otherProduct;
console.log(totalNumProduct)

let {availibility : {store}} = otherProduct;
console.log(store) //["Tel Aviv", "Herzelia"]

// // nested destructuring and array destructuring
let {availibility : {store : [firstCity, secondCity]}} = otherProduct;
console.log(firstCity, secondCity) 
            //tel aviv  herzelia

// // ------------
// // Rest operator
// // ------------

const hero = {
  heroName: 'Batman',
  realName: 'Bruce Wayne',
  adress: 'Tel Aviv'
};

const {heroName, ...details} = hero
console.log("details", details)
// {realName: 'Bruce Wayne', adress: 'Tel Aviv'}


const {realName, ...otherDetails} = hero
console.log("realName", realName) //"realName" Bruce Wayne
console.log("otherDetails", otherDetails)
//"otherDetails" {heroName: 'Batman', adress: 'Tel Aviv', age: 34}


// // -----------------
// // SPREAD OPERATOR
// // ----------------

let computer = {
  type: 'Apple',
  size: 20
};

let myComputer = computer; //same adress 
//point to the same reference in the heap
console.log("myComputer : ", myComputer, ", \ncomputer", computer)
// {
//   type: 'Apple',
//   size: 20
// };

// {
//   type: 'Apple',
//   size: 20
// };

myComputer["price"] = 4000;
console.log("myComputer : ", myComputer, ", \ncomputer", computer)
// {
//   type: 'Apple',
//   size: 20,
//   price : 4000
// };

// {
//   type: 'Apple',
//   size: 20,
//   price : 4000
// };


//CLONING THE VALUES
let johnComputer = { ...computer};// they point to different adress
console.log("johnComputer : ", johnComputer, ", \ncomputer", computer)
// {
//   type: 'Apple',
//   size: 20
// };

// {
//   type: 'Apple',
//   size: 20
// };

johnComputer["price"] = 2000;
console.log("johnComputer : ", johnComputer, ", \ncomputer", computer)
console.log("johnComputer price = ", johnComputer["price"], "computer price", computer["price"]) //unchanged
// {
//   type: 'Apple',
//   size: 20,
//   price : 2000
// };

// {
//   type: 'Apple',
//   size: 20,
// };

// // EXERCISES

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// destructuring
// I create 2 variable that have the value of the key fom the obj
// the key and the variable needs to have the same name
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// ---
// // ## Exercise2
// // 1. Modify the code below, and destructure the object in the parameter
// // (ie. you should have 3 parameters : name, house and goodstudents)



function getDetails({name, house, goodstudent}) {
  console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// // same
function getDetailsOne(objHarry) {
  let {name : nameStudent, house, goodstudent} = objHarry;
  console.log(nameStudent, house, goodstudent)
}

getDetailsOne({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})