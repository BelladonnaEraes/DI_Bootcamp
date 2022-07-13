//------------------
// Objects
// ------------------

//We could do something like this
//BUT REPETITIVE

// let characterHermione = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   goodstudent : true,
//   point: 20,
//   power : 30,
//   greeting : function() {
//   	return `Hello everyone, my name is ${this.name}` 
//   }
// }

// let characterHarry = {
//   name: 'HarryPotter',
//   house: 'Gryfindor',
//   goodstudent : true,
//   point: 40,
//   power : 100,
//   greeting : function() {
//     return `Hello everyone, my name is ${this.name}` 
//   }
// }


// -----------------
// Constructor functions
// -----------------

function Student (bootcampName) {
  this.school = "DevelopersInstitute";
  this.bootcamp = bootcampName;
}

// tomStudent is an object
let tomStudent = new Student("Js");
// {
//   school : "DevelopersInstitute",
//   bootcamp : "Js"
// }

let leaStudent = new Student("Python");
// {
//   school : "DevelopersInstitute",
//   bootcamp : "Python"
// }
console.log(tomStudent.bootcamp) //JS
console.log(leaStudent.bootcamp) //Python

// I can modify the values of the keys
tomStudent.bootcamp = "C++"
// {
//   school : "DevelopersInstitute",
//   bootcamp : "C++"
// }

console.log(tomStudent.bootcamp) //C++





function Character (wizardname, wizardhouse, wizardPoint) {
  this.name = wizardname;
  this.house = wizardhouse;
  this.point = wizardPoint;
  this.greeting = function() {
    return `Hello everyone, my name is ${this.name}` 
  }
}

 // instances of the class Character
let harryCharacter = new Character("Harry", "Grinfindor", 1000);
console.log(harryCharacter.house) //"Grinfindor"
console.log(harryCharacter.greeting())


// // ----- more examples

function Character (wizardname, wizardhouse, wizardPoint, wizardEnemy) {
  //attribute
  this.name = wizardname;
  this.house = wizardhouse;
  this.point = wizardPoint;
  this.enemy = wizardEnemy;

  this.fight = function () {
      console.log("this.enemy", this.enemy)
      console.log(`${this.name} is fighting ${this.enemy.name}`)
      this.enemy.point -= 10
      console.log(`The enemy ${this.enemy.name} point is ${this.enemy.point}`)
  }
}

let voldemortChar = new Character("Voldemort", "Bla", 20000);
// pass voldemortChar to harryChar
let harryChar = new Character("Harry", "Grinfindor", 1000, voldemortChar);

// console.log(harryChar.enemy)
harryChar.fight()








// // let hermioneCharacter = new Character("Hermione", "Grinfindor", 34)
// // console.log(hermioneCharacter)
// // console.log(hermioneCharacter.house)

// // let harryPotterCharacter = new Character("Harry", "Grinfindor", 100, hermioneCharacter)
// // console.log(harryPotterCharacter)
// // console.log(harryPotterCharacter.house)

// // harryPotterCharacter.fight()
// // console.log(hermioneCharacter.point)