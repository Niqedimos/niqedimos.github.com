const express = require("express");

const path = require("path"); // import java.util.FileIO
const server = express();

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/css", express.static(path.join(__dirname, "css"))); //alias

server.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours(); // from the system date
  const style = hour >= 6 && hour < 18 ? "day" : "night";
  res.send(
    `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Question 3</title>
    <link href="/css/${style}.css" rel="stylesheet" />
  </head>
  <body>
  <form action="/result" method="post" > 
    <label>Name </label><input type="text" name="fname"> 
    <label> age </label> <input type="text" name="age"> 
    <button type="submit">Submit query</button> 
    </form>
  </body>
</html>`
  );
});

server.post("/result", (req, res) => {
  res.send(
    "Welcome, " + req.body.fname + ". the age you input is " + req.body.age
  );
});

server.listen(81, () => {
  console.log("Server running on port 81.");
});
