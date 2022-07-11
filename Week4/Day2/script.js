//SELF INVOKING FUNCTION



//(username => {
 //   let div = document.getElementById("container")
 //   let text = document.createTextNode(`Hello ${username}`)
 //   div.appendChild(text)
//})("John")



function starWars(spaceship) {
    let characters = []
    function createCharacter (firstname, lastname="Smith") {
       let fullname =`${firstname} ${lastname}`
       characters.push(fullname)
   }

    function displayCharacter() {
        characters.forEach((element) => {
        let display = document.createElement("div")
        let text = document.createTextNode(`${element} in ${spaceship}`)
        display.appendChild(text) 
        document.body.appendChild(display)
        })

    }
    createCharacter("Tom","Bax")
    createCharacter("Lop", "Hop")
    createCharacter("Lop",)
    displayCharacter()
}

starWars("The Devastator") 
starWars("Republic Attack Cruiser") 

