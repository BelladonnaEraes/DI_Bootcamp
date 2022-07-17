function divide (a, b) {
   try {
    let result

    if (b !==0){
        result = a/b 
    }else{
        throw new RangeError("Not")
    }
    console.log(result)
  } catch (error) {
    console.log(error.message)
  } finally {
    console.log("Good")
  }
}

divide(3,0)

let someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
console.log("after")








