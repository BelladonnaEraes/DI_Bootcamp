/*Instructions
Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
In the HTML file, add a form, containing an input and a button. This input 
is used to fetch gif depending on a specific category.
In the JS file, create a program to fetch one random gif depending on the 
search of the user (ie. If the search is “sun”, append on the page one gif with 
a category of “sun”).
The gif should be appended with a DELETE button next to it. Hint : to find the 
URL of the gif, look for the sub-object named “images” inside the data you 
receive from the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button.*/

let formUser = document.getElementById("formUser");
formUser.addEventListener("submit", xhrRequsts);

function xhrRequsts(event) {
event.preventDefault()
let inputValue = event.target.elements.username.value;
let userWant = `https://api.giphy.com/v1/gifs/search?q=${inputValue}&limit=1&rating=g&random_id=e826c9fc5c929e0d6c6d423841a282aa&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
let xhr2 = new XMLHttpRequest();
xhr2.open("GET", userWant)
xhr2.responseType = 'json';
xhr2.send();
xhr2.onload = function(){
let gifUrl = xhr2.response["data"]["0"]["images"]["preview_gif"]["url"]
console.log(xhr2.response["data"]["0"]["images"]["preview_gif"]["url"])}
let imgGif = document.createElement("img")
imgGif.setAttribute("src", gifUrl)
document.body.appendChild(imgGif)
}

