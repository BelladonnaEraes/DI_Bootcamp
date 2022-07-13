//let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
//let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets)
//console.log(yearNeptuneDiscovered)

/*1. Modify the code below, and destructure the object in the parameter
(ie. you should have 3 parameters : name, house and goodstudents)*/

function getDetails({name, house, goodstudent}) {

	console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})


let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659

function getMoreDetails({name, house, friend:{friendName,age}}) {
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', age : 20
				}
			})

const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails(objElon){
    const {
    	first:firstname,
    	last:lastname,
    	housesLocation:[locationOne, locationTwo],
    	houses: {value : valueHouses}
    } = objElon
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)

}

getElonMuskDetails(elonPerson)
  
class TV {
	constructor(brand, chanenel=1, volume=50) {
		this.brandTV = brand;
		this.channelTV = chanenel;
		this.volumeTV = volume;
	}
	increaseVolume() {
		this.volumeTV++
		console.log(LG.volumeTV)
	}
	decreaseVolume() {
		return this.volumeTV--
	}
}
let LG = new TV("LG", 3, 30)
LG.increaseVolume()

class SmartTV extends TV {
	constructor(brand, chanenel=1, volume=50, Netflix=true){
		super(brand,  chanenel=1);
		this.volumeTV=this.volumeTV+10
		this.hasNetflix = Netflix

	}
} 










