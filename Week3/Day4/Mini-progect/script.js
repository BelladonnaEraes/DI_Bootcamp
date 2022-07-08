let sectionPallet = document.getElementById ("pallet")
let button1 = document.getElementById ("button")
let divsColors1;
let arrColor = ["white", "black", "grey", "red", "lightgrey", 
"orange", "yellow", "pink", "hotpink", "lightpink", "green", "lightgreen", 
"salmon", "blue", "lightblue", "indigo", "seagreen", "tomato", "MediumSeaGreen", "violet", "DodgerBlue"]
function palletDiv() {
     for (let color of arrColor) {
     let divsColors = document.createElement("div");
     sectionPallet.appendChild(divsColors);
     divsColors.style.backgroundColor = color;
     divsColors.className = "colorsDiv"
     divsColors.addEventListener("click", pickColor)
     }	
}
palletDiv()
function superGrid () {
	let height = 17
	let width =80
	let gridPaintSection = document.getElementById("grid")
	for (let i = 0; i<height*width; i++){
		let divsColors1 = document.createElement("div");
		gridPaintSection.appendChild(divsColors1)
		divsColors1.addEventListener("mouseover" & "mouseup", assignColor)
		divsColors1.addEventListener("mousedown", assignColor)
		divsColors1.addEventListener("mouseup", assignColor)
	}
}
let downColor;

function assignColor (evt) {
event.preventDefault();
downColor = evt.target.style.backgroundColor;
console.log(downColor)
this.style.backgroundColor = colorPicked;
}

superGrid ()

let colorPicked;
function pickColor(evt){
colorPicked = evt.target.style.backgroundColor;
console.log(colorPicked)
return colorPicked
}

let mousedown;
let mouseup;
let mouseover;

button1.addEventListener("click", clearGrid)
function clearGrid() {
divsColors1.style.backgroundColor="white";
}








