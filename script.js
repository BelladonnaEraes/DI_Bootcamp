    let computerNumber = Math.floor(Math.random() * 11);
    console.log(Math.floor(Math.random() * 11))
    userNumber = prompt("the user to enter a number between 0 and 10")

    if (userNumber = Math.floor(Math.random() * 11)) {
     	alert("WINNER!")
     } else if (userNumber > Math.floor(Math.random() * 11)) {
     	alert("Your number is bigger then the computer’s, guess again")
     } else {
     	alert("Your number is smaller then the computer’s, guess again")
     } 
  