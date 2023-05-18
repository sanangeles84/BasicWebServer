const express = require('express');
const app = express();
require('dotenv').config();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello Express app!</h1>'
  +'<h2>Name <input id ="name" type="text" name="name" onkeyup="if(event.which === 13) document.getElementById(\'go\').click()">'
  +'<button id="go" onclick="location.href=\'\hello?name=\'+document.getElementById(\'name\').value">Go</button></h2>'  
  )
});

app.get('/hello', (req, res) => {
  var name = req.query.name || "stranger";
  res.send('<h1>Hello '+name+'!</h1><h2><button onclick="location.href=\'/\'">Back</button></h2>')
});

app.listen(port , () => {
  console.log('server started');
});