let numberOfbottle = Number(prompt("What number of bottles is on the wall?"))

for (i=numberOfbottle; i >0; i--) 
  { 
    if ([i] > 1) { 
     console.log([i] +" bottles of beer on the wall");
     console.log([i] +" bottles of beer");
     console.log("Take " + ((numberOfbottle+1)-[i]) +" down, pass it around");
     console.log([i]-1 + " bottles of beer on the wall");
    } else {
     console.log("1 bottle of beer on the wall");
     console.log("1 bottle of beer");
     console.log("Take " + numberOfbottle +" down, pass it around");
     console.log("no bottle of beer on the wall")}
}
      
