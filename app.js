// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// homet Route:
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);

//about route:
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

//work route:
app.get("/products", (request, response, next) =>
  response.sendFile(__dirname + "/views/products.html")
);

// Server Started
app.listen(3000);
