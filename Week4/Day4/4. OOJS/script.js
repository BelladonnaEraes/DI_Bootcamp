// /-------------------
// OOJS
// -------------------

//class syntax
// PARENT CLASS
class Character {
  constructor(wizardname, wizardhouse, wizardPoint) {
    this.name = wizardname;
    this.house = wizardhouse;
    this.points = wizardPoint;
  }

  fight () {
      console.log(`${this.name} is fighting`)
      this.points -= 10
  }


  powerDrink (colorDrink) {
    if (colorDrink === "blue"){
      this.points += 1000
    } else {
      this.points += 2000
    }
    
  }

}

let harryChar = new Character("Harry", "Grinfindor", 1000)
console.log(harryChar.house)
harryChar.fight()
harryChar.powerDrink("yellow")

//-------------------
// Subclasses - Inheritance
// -------------------

// Child class
class MagicCharacter extends Character{
    constructor (wizardname, wizardhouse, wizardPoint, magic) {
      super(wizardname, wizardhouse, wizardPoint)
      this.magicPower = magic;
      this.listSpells = []
    }

    //override the fight() method from the parent class
    fight () {
      console.log(`${this.name} is magic and is fighting`)
      this.points -= 100
    }

    // new method of the class
    createSpell(newSpell) {
      console.log("I'm creating a new spell");
      this.listSpells.push(newSpell);
      console.log("The list spells contains",this.listSpells)
    }
}

let hagridChar = new MagicCharacter("Hagrid", "ABC", 10000, "read mind")
console.log(hagridChar)
hagridChar.createSpell("turning into stone")

let basicChar = new Character("Tom", "AAA", 10);
console.log(basicChar.listSpells)


let hagridCharacter = new MagicCharacter("Hagrid", "All", 20, "read mind");
console.log(hagridCharacter.house)
hagridCharacter.fight();
hagridCharacter.createSpell("turn into stone")

// SYNTAX
class First {
  constructor(){
    //create attribute
    this.username = "John"
  }
}


class Second extends First{
  constructor(){
    //create attribute
    super()
    this.age = 12
  }

}

let newObj = new Second()
// {username:"John"}
console.log(newObj.username)
console.log(newObj.age)












