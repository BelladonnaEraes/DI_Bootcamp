//Exercise 1 

  /* Store your favorite food into a variable.

  Store your favorite meal of the day into a variable (ie. breakfast, 
  lunch or dinner)

  Console.log I eat <favorite food> at every <favorite meal>*/

  let favoritFood = "a baget with batter and jam"
  let favoritMeal = "breakfast"

  let bestMeal = "I eat " + favoritFood + "in the every" + favoritMeal
  console.log(bestMeal)



//Exercise 2 Part I

  /*Create a variable named myWatchedSeriesLength that is 
  equal to the number of series in the myWatchedSeries array.*/


  let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
  console.log(myWatchedSeries.length);

  /*Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
  For example : black mirror, money heist, and the big bang theory*/

  let sentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", " + "and " + myWatchedSeries[2];
  console.log(sentence);

  /*Console.log a sentence using both of the variables created above
  For example : I watched 3 series : black mirror, money heist, and the big bang theory*/

  let sentenceTwo = "I watched " + myWatchedSeries.length + " series : " + sentence;
  console.log(sentenceTwo);

//Exercise 2 Part II


  /*1.Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
  2.Add, at the end of the array, the name of another series you watched.
  3.Add, at the beginning of the array, the name of your favorite series.
  4.Delete the series “black mirror”.
  5.Console.log the third letter of the series “money heist”.
  6.Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.*/

  let myWatchedSeriesone = ["black mirror", "money heist", "the big bang theory"];

  myWatchedSeriesone.splice(2,1,"friends");

  myWatchedSeriesone.push("White lotos");

  myWatchedSeriesone.unshift("The Office");

  myWatchedSeriesone.splice(1,1);

  console.log(myWatchedSeriesone);


//Exercise 3 : The Temperature Converter

/*Store a celsius temperature into a variable.

  Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
  Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
  Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32*/

  let temperatureC = 32;
  let convTemprature = temperatureC + "°C" + " is " + (temperatureC/5*9+32) + "°F"

  console.log(convTemprature)


//Exercise 4 : Guess The Answers #1

  /*For each expression, predict what you think the output will be in a comment (//) without first running the command.
  Of course, explain each prediction.
  Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.*/

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: I think output will be 55 because of it is just calculation.
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: I think output will be 23 because of "a" was changed
    // Actual:23

//Exercise 5 : Guess The Answers #2

  /*For each expression, predict what you think the output will be in a comment (//) without first running the command.
  Of course, explain each prediction.
  Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.*/
  typeof(15)
// Prediction: 15
// Actual: number

typeof(5.5)
// Prediction: 5.5
// Actual:number

typeof(NaN)
// Prediction: ?
// Actual: typeof(NaN)

typeof("hello")
// Prediction: hello
// Actual: string

typeof(true)
// Prediction: true
// Actual: boolean

typeof(1 != 2)
// Prediction: false
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: 'hamburgers'

"hamburgers" - "s"
// Prediction: hamburgerss
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: 13
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual:'johnny5'

"johnny" - 5
// Prediction: johnny5
// Actual: NaN

99 * "hello"
// Prediction: 99hello
// Actual: NaN

1 != 1
// Prediction: falses
// Actual: falses

1 == "1"
// Prediction: 1
// Actual: true

1 === "1"
// Prediction: 1
// Actual: false

//Exercise 5 : Guess The Answers #2
/*For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.*/

5 + "34"
// Prediction: 534
// Actual: '534'

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: -0,5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: 'JavaScript'

" " + " "
// Prediction: space
// Actual: '  '

" " + 0
// Prediction: ?
// Actual: ' 0'

true + true
// Prediction: ?
// Actual: 2

true + false
// Prediction: ?
// Actual: 1

false + true
// Prediction: ?
// Actual: 1

false - true
// Prediction: ?
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN


