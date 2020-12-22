/*
Thema: Einfacher Server, welcher
a. CORS Anfragen (CORS Requests erlaubt
b. Bei einer Anfrage durch einen Client per Zufallsgenerator einen Film zurück gibt.
 */

let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//set default content type (mime-type)
app.use(function (req, res, next) {
    res.header('Content-Type','application/json');
    next();

});

//Source //Source https://www.thegamegal.com/printables/
//Array mit movies
const moviePuzzleList = ["Shrek","Alice in Wonderland",
    "Finding Nemo", "My Fair Lady", "Cinderella", "Cars", "Spiderman",
    "Peter Pan", "Toy Story", "Inception Robin Hood"];

app.get('/puzzle', (req,res) => {
    //Zufallsgenerator für movies erstellen
    const random = Math.floor(Math.random() * moviePuzzleList.length);
    res.send(JSON.stringify({puzzle: moviePuzzleList[random]}));
}
