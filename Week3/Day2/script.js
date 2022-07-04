//Explaining first day


//document.getElementsByTagName("div"); return a list/collection
//document.getElementsByClassName("className"); return a list/collection
//document.getElementById("id") //return node element

//document.querySelector("div #id h2 .") //return node element
//document.querySelectorAll("div #id h2 .") //return a list/collection


let uls = document.getElementsByTagName("ul"); 
console.log(uls[0].children[4])//
console.log(uls[0].children);
console.log(uls[0].firstChild);
console.log(uls[0].firstElementChild);


//let arr =[8];
//console.log(arr[8])

/// add new element to list

let li = document.createElement("li");
li.textContent = "7"/// innerText inner HTML

//li.className.add("my_class_name");
li.setAttribute("id", "myli");

li.style.color = "red";

uls[0].appendChild(li);

//replace element

let _old = uls[0].children[4];

let _new = uls[0].children[uls[0].children.length-1];


uls[0].replaceChild(_new,uls[0].children[4]);
uls[0].appendChild(_old)








