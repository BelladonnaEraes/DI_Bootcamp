/*//1. How to access the second element of the array `let arr = [3, 7, 10]`
//let secondElen = arr[1]
//////////////////////////////
//2. For the code below, what does `arrNums.splice(2, 0)` return?

   // let arrNums = [1, 2, 3, 4, 5];
//I think it will be  let arrNums = [1, 2, 3, 4, 5];
////////////////////////////////////////
//3. What is the result of the following code :

    ```javascript
    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all)
// I think it will be  all=[4, 5, 6, 1, 2, 3, 7, 8, 9] ```
////////////////////////////////////////////
//4. What does the following code print to the console?

   ```javascript
   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);
   ```
   //It will be callaway

/////////////////////////////////
//5. Can we define the function as follows? If yes, what 
//is it called, and explain how to invoke it.

    ```javascript
    const x = function(a, b){
       return a*b;
    }
    ```
// It is expression function, yes, like x(a, b)
////////////////////////////////////
//6. Variables created **without** any keyword, are always global, 
//even if they are created inside a function ? Yes or No and explain

    ```javascript
    function x() {
    	a = 5;
    }
    ```

//#### Functions

//7. In JavaScript can we pass functions as arguments to other functions? 
//What does this code return ?
    ```javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
    ```
//Yes, we can do it, greeting returns Hello JavaScript! 
//8. Transform this function into an arrow function
      ```javascript
      function sum(num1, num2){
          return num1 + num2
      }
      
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
      ```
//sum = (num1, num2) => { 
//          return num1 + num2
//      }
//9. What does the following code print to the console? 
//Explain the process and concept behind it

     ```javascript
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
    console.log(foo()); 
     ```
//It will be Poppin' bottles.
//function foo () {                //2
 //      function bar() {          //4
 //        return "Poppin' bottles";
 //      }
//       return bar();             //3
 //    }
 //   console.log(foo()); //1
//#### DOM

//10. Which of the following events will you add in the `addEventListener()`method? 
 //     ☐ click
 //     ☐ onclick
//Both
//11. Does the `addEventListener()` method allow you to add many events to the same element?

    ```javascript
    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);
    ```
//12. DOM exercise

      //1. Part I : Create a button in your HTML page, when the user will click 
      2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
     // the the button a paragraph will be added on the DOM with the content 
      //"New Paragraph". Use arrow functions
      let button = document.getElementById('button')
      button.addEventListener("click",  push = () =>{
        let p = document.createElement('p')
        document.body.appendChild(p)
        let text = document.createTextNode("New Paragraph")        
        p.appendChild(text)
        p.addEventListener("mouseover", over =() => {
        p.style.color= "red "
        })
      })

     

#### Array Methods

14. What is the value of `passed` in the following code?

     ```javascript
     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     ```
    // it will return false

15. What does the following code log?

   ```javascript
   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums);
   ```
it will return bignums =[50, 88]
//16. Use a javascript array method to square the value of every element in the array. 

   ```javascript
   
   //code
   console.log(input) // [ 1, 4, 9, 16, 25]
   ```
   const input = [ 1, 2, 3, 4, 5 ];
   const square = input.map((elem) => elem*elem)
   console.log(square)
16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 
     ```javascript
     
     //code
     console.log(total) //42

     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     let secondInput1 = secondInput.filter((elem)=> elem>0);
                                   .

//17. Use 3 javascript methods and chain them to abbreviate the name and return 
//the name initials.

     ```javascript
     
     //code 
     console.log(initials)//'GRRM'
     ```
const input = 'George Raymond Richard Martin';
let initials = input.split(" ").map((elem)=>elem[0]).join('')
 console.log(initials)

#### Object and Classes

18. How the objects are passed in JavaScript? By Value or By Reference ? 
Explain with an example

19. What will be printed in the console
    ```javascript
    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 
    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    ```
It will be Chocolate Cake is for $10
20. Refactor this code using Classes
#### Promises
21. What will be the output and why ? What will be the state of the promise ?

    ```javascript
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    ```

22. What log will be made by the following code, after 2 seconds?

    ```javascript
    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    ```*/
/*
23. Consider the following async function and its output. 
What will be displayed to the console when calling the `f()` 
function? Explain the process
    ```javascript
    async function f() {
      let result = 'first!';
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });
    
      result = await promise;
    
      console.log(result);
    }
    
    f();
    ```
24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
    1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
    2. Make sure to use try and catch*/

async function first() {
    let api = await fetch("https://catfact.ninja/fact")
    let data = await json()
}
first()
function second() {
    let 
}







