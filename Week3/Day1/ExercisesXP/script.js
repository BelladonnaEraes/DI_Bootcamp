/*Exercise 1 : Users

Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Change each first name of the two <ul>'s to your name.
Delete the <li> that contains the text node “Sarah”.

Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*let div1 = document.getElementsByTagName("div");
console.log(div1);

let changedName = document.body.children[1];
let changedName1 = changedName.lastElementChild;
changedName1.innerHTML = "Richard";

let changeAll = document.body.children[1];
let changeAll1 = changeAll.firstElementChild;
changeAll1.innerHTML = "Katy"

let changeAll2 = document.body.children[2];
let changeAll3 = changeAll2.firstElementChild;
changeAll3.innerHTML = "Katy"

let saRah = document.body.children[2];
let saRah1 = saRah.children[1];
saRah1.remove("li")*/

//++++++++++++++++++++++++++++++++++++++++++++++++++

/*Exercise 2 : Users And Style

Add the code above, to your HTML file

Add a “light blue” background color and some padding to the <div>.

Do not display the <li> that contains the text node “John”.

Add a border to the <li> that contains the text node “Pete”.

Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/

//+++++++++++++++++++++++++++++++++++++++++++++++

/*let backGroundDiv = document.querySelector("div");
backGroundDiv.style.backgroundColor = "Lightblue";
backGroundDiv.style.padding = "20px"
let li1 = document.querySelector("li");
li1.style.display = "None";


let li2 = document.body.children[1];
li3 = li2.children[1];
li3.style.border = "solid";

if (backGroundDiv.style.backgroundColor = "Lightblue") {
	    alert("Hello x and y");
}
let bodyOfbody = document.querySelector("body");

bodyOfbody.style.fontSize = "40px";*/



//++++++++++++++++++++++++++++++++++++++++++++++

/*Exercise 3 : Change The Navbar
Add the code above, to your HTML file

In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation,
using the setAttribute method.

We are going to add a new <li> to the <ul>.
First, create a new <li> tag (use the createElement method).
Create a new text node with “Logout” as its specified text.
Append the text node to the newly created list node (<li>).
Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

Bonus
Use the firstElementChild and the lastElementChild properties to retrieve 
the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
*/

//+++++++++++++++++++++++++++++++++++++++++++++

/*let firstChange = document.getElementById("navBar");
firstChange.id = "socialNetworkNavigation";

let newli = document.getElementsByTagName("ul");
let addedLi = document.createElement("li");
let liText = document.createTextNode("Logout");
addedLi.appendChild(liText);
newli.appendChild(addedLi);*/






