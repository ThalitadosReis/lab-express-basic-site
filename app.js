const express = require('express');
const app = express();

app.use(express.static('public'));

// this is the homepage route
app.get("/", (request, response, next) =>{
    response.sendFile(__dirname + '/views/home.html');
})

// this is the about route
app.get("/about", (request, response, next) =>{
    response.sendFile(__dirname + '/views/about.html');
})

// this is the work route
app.get("/work", (request, response, next) =>{
    response.sendFile(__dirname + '/views/work.html');
})

// this is the bonus route
app.get("/bonus", (request, response, next) =>{
    response.sendFile(__dirname + '/views/bonus.html');
})

app.listen(3000)