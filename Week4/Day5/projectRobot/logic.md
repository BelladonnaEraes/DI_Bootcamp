## HTML

- nav bar + form
- section

## CSS
- section : grid
- each div need to flex

## JS

<!-- DOM -->
### I. Create the character
- foreach on the array
- callback function:
	* create a div per person & add an id to each person - id key from the object
	* create paragraph that will be equal to the value of the name and email key
	* create an img add src attribute that will be equal to the value of the image key
	* add classes to the elements - to style them in the CSS 
	* append to the section

### II. Filter
- retrieve the input from the html
	* use on the input and event listener of input : input eventlistener is listening for every key the user type
	* call a function everytime the user type a new letter
	* In the callback from the event listener : we want to display only the cards
	that have the letters in the name
		* filter method - filter the array of object
		* callback - condition is that value of the input is included on the name or email of a character
		* each character that have te correct name will be added in an array
		* display none to not display the incorrect character


we retrieve this from the filter - [{NICHOLAS}, {}, {}]
-> LINK BETTWEN THE ARRAY IN THE JS
-> ELEMENT ALREADY CREATED IN THE DOM


<div id=1>
	

</div>

<div id=2>
	

</div>


[{id:1, name:"nicholas"}, {id:2, name:"nick"}]