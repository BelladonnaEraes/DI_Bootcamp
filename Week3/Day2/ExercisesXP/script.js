/*Exercise 1 : Change The Article
Using a DOM property, retrieve the h1 and console.log it.

Using DOM methods, remove the last paragraph in the <article> tag.

Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)*/

let h2 = document.querySelector("h2");
console.log(h2);

let article = document.body.children[0];
let lastP = article.children[6];
lastP.remove("p");

h2.addEventListener("click", backGround);
function backGround(){ 
h2.style.backgroundColor = "red"};

let h3 = document.querySelector("h3");
h3.addEventListener("click", hideH3);
function hideH3(){ 
h3.style.display = "none"};

let button = document.createElement("Button");
let textButton = document.createTextNode("Push on me!");
button.append(textButton);
article.append(button);


let push = document.querySelector("Button");
push.addEventListener("click", PushOnButton);
function PushOnButton(){ 
article.style.fontWeight = "bold"};

let h1 = document.querySelector("h1");
console.log(h1);

h1.addEventListener("mouseover", randomeSize);
function randomeSize(){ 
h1.style.fontSize = Math.floor((Math.random() * 100) + 10)+"px";};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*Retrieve the form and console.log it.

Retrieve the inputs by their id and console.log them.

Retrieve the inputs by their name attribute and console.log them.

When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.*/

/*let formForm = document.getElementsByTagName("form")
console.log(formForm)

let inputfname = document.getElementById("fname")
console.log(inputfname)
let inputlname = document.getElementById("lname")
console.log(inputlname)
let inputsubmit = document.getElementById("submit")
console.log(inputsubmit)

let inputfname1 = document.getElementsByName("fname")
console.log(inputfname1)
let inputlname1 = document.getElementsByName("lname")
console.log(inputlname1)

//let uls = document.getElementsByTagName("ul");

let li1 = document.createElement("li");
document.body.children[1].appendChild(li1);
let li2 = document.createElement("li");
document.body.children[1].appendChild(li2);*/


/*Exercise 3 : Transform The Sentence
In the JS file:

Declare a global variable named allBoldItems.

Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

Create a function called highlight() that changes the color of all the bold text to blue.

Create a function called return_normal() that changes the color of all the bold text back to black.

Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
*/

/*let allstrongItems;
    function getstrong_items() {
        allstrongItems = document.querySelectorAll("strong")
    }
    getstrong_items()
    function highlight() {
        this.style.color = "blue";
    }
    function return_normal() {
        this.style.color = "black";
    }

    allstrongItems.forEach(strong => {
        strong.addEventListener("mouseover", highlight)
        strong.addEventListener("mouseout", return_normal)
    });*/
