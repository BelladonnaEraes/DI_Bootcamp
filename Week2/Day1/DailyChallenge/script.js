//Exercise 1
/*1.Remove Banana from the array.
  2.Sort the array in alphabetical order.
  3.Add “Kiwi” to the end of the array.
  4.Remove “Apples” from the array. Don’t use the same method as in part 1.
  5.Sort the array in reverse order. (Not alphabetical, 
  but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
  At the end you should see this outcome:*/

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
fruits.sort();
fruits.push("Kiwi");
fruits.shift();
fruits.reverse();
console.log(fruits);

//Exercise 2:
/*Access and then console.log “Oranges”.*/

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let Oranges = moreFruits[1][1][0]
console.log(Oranges)

