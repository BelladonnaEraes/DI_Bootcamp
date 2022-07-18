/*Instructions
Create a form with two fields (name, last name) and a submit button.
When you click the Send button, send the data as JSON.
The output should be:*/
let formForm = document.getElementsByTagName("form")
let inputName = document.getElementById("fname")
let inputNameLast = document.getElementById("lname")

let button1 = document.getElementById("button")
button1.addEventListener("click", submitName)
function submitName(e) {
     e.preventDefault()
     let names = {
     	firstname : inputName.value,
     	lastname : inputNameLast.value
     }
     console.log(names)
     let nameJson = document.write(JSON.stringify(names))
}

