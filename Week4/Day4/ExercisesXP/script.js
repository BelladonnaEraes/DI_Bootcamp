/*Exercise 1 : Location
Instructions
Analyze the code below. What will be the output?*/

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I think output will be "I am John Doe from Vancouver Canada. Latitude 49.2827, Longitude -123.1207"

/*Exercise 2: Display Student Info
Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
*/
function displayStudentInfo(objUser){

    const {first, last} = objUser
    const sntense = `Your full name is ${first} ${last}`
    console.log(sntense)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

/*Exercise 3: User & Id
Instructions
Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

Using methods taught in class, turn the users object into an array:
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number.

Modify the outcome of part 1, by multipling the user’s ID by 2.
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
*/

const users = { user1: 18273, user2: 92833, user3: 90315 }
const users1 = Object.entries(users)

 console.log(users1)

//const users2

/*Exercise 4 : Person Class
Instructions
Analyze the code below. What will be the output?*/

//class Person {
//  constructor(name) {
//    this.name = name;
//  }
//}

//const member = new Person('John');
//console.log(typeof member);


// object

/*


*//*
class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};

  // 2 this, because there are constructor and super(name)
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};

  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};*/

/*
Create a class Animal with the attributes name, type and color. 
The type is the animal type, for example: dog, cat, dolphin ect …

Create a class Mamal that extends from the Animal class. 
Inside the class, add a method called sound(). 
This method takes a parameter: the sound the animal makes, 
and returns the details of the animal (name, type and color) 
as well as the sound it makes.

Create a farmerCow object that is an instance of the class Mamal. 
The object accepts a name, a type and a color and calls the sound method that 
“moos” her information.
For example: Moooo I'm a cow, named Lily and I'm brown and white
*/

class Animal {
    constructor (name, type, color) {
         this.nameAnimal = name;
        this.typeAnimal = type;
        this.colorAnimal = color;
    }
}

class Mamal extends Animal {
    constructor (name, type, color, sound) {
        super(name, type, color);
        this.soundAnimal = sound;

    }
    soundAn(){
        console.log(`${this.soundAnimal} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`)
        
    }
}

let farmerCow = new Animal("Lily", "cow", "white","Mooo")
//farmerCow.soundAn()















