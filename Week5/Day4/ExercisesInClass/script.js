// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises


async function getNames(fnOne,fnTwo) {
    if(typeof fnOne !== "string" || typeof fnTwo !== "string") {
        throw new Error("not a string")
    } else {
        return [fnOne,fnTwo];
    }

}

async function getNoun(noun) {
    if(noun.length <= 3) {
        throw new Error("too small")
    } else {
        return noun
    }
}


async function getCity(city){
    if(city.charAt(0) === city.charAt(0).toUpperCase()){
        return city
    } else {
        throw new Error("not good city")
    }
}

async function getVerb(verb){
    if (verb.endsWith("ing")) {
        return verb
    } else {
        throw new Error("not good verb")
    }
} 

async function getSentence(){
    try {
        let names = await getNames("Beyonce", "Barack Obama");
        let noun = await getNoun("fo");
        let city = await getCity("Paris");
        let verb = await getVerb("playing");
        return `${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}`
    } catch(error) {
        console.log(error.message)
    }
}

getSentence()



// .then(result => console.log(result))

// throw new RangeError ("too low")
// error obj 

// stack : where the error happened
// type : type of the error
// message : msg of the error "too low"