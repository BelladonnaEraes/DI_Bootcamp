let famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
    }
]

let nameActors = famousPeople.map((element) => element["name"])  
console.log(nameActors)

let nameActorsAndJob = famousPeople.map((element) => (
    {name: element["name"],job: element["job"]})
)

console.log(nameActorsAndJob)


let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positiveNum = numbers.filter((element) => element>0)
console.log(positiveNum)

const characters = [
   { name: 'James T. Kirk', series: ['Star Trek'] },
   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
]; 

const charactersNew = characters.filter((element) => element["series"].includes("Star Trek: The Next Generation"))
console.log(charactersNew)

let colors = ["blue", "red", "red", "blue", "yellow"]


const students = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];

let scoreOfstudent = students.reduce((acc, person) => {return acc+person["score"]},0 )

console.log(scoreOfstudent)


let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

let countEllect = voters.reduce((acc, person) => {
     if(person["voted"] == true){

        return ++acc
     } else {
        return acc;}
     }, 0)

console.log(countEllect)














