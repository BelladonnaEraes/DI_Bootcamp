const express = require('express');
const app = express();



app.use('/portfolio',express.static(__dirname+'/public'));


app.listen(3004, ()=>{
  console.log('Server is running on port 3004');
})
