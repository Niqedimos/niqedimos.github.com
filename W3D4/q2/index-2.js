const express = require("express");
const server = express();

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  let form = `
  <form action="/result" method="post" > 
    <label>Name </label><input type="text" name="name"> 
    <label> age </label> <input type="text" name="age"> 
    <button type="submit">Submit query</button> 
    </form>`;
  res.send(form);
});

server.post("/result", (req, res) => {
  res.send(
    "Welcome, " + req.body.name + ". the age you input is " + req.body.age
  );
});

server.listen(81);
