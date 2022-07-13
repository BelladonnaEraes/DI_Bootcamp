/*
Instructions
In this exercise, you will use object oriented programming concepts 
to define and use a custom object in JavaScript.

Create a class named Video. The class should be constructed 
with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds)
Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!”
Instantiate a new Video instance and call the watch() method.
Instantiate a second Video instance with different values.
Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array.
Bonus: Loop through the array to instantiate those instances.
*/


class Video {
	constructor(title, uploader, time){
		this.titalV = title;
		this.person = uploader;
		this.timeS = time;

	}
	watch(){
		console.log(`${this.person} watched all ${this.timeS} of ${this.titalV}`)
	}
}

let videoNew = new Video("Titanic", "Leonardo", 9)
videoNew.watch()

let videoNew2 = new Video("Brokeback Mountain", "Heath", 5)
videoNew2.watch()

let VideoArr = [
                { title:"King",
                  uploader: "Lea",
                  time: 90},
                { title:"Beast and Beauty",
                  uploader: "Koly",
                  time: 940},
                { title:"1+1",
                   uploader: "John",
                   time: 290}, 
                { title:"Persona",
                  uploader: "Masha",
                  time: 790},
                { title:"Maska",
                  uploader: "Lena",
                  time: 7390}]










