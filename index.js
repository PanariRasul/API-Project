const express = require ("express");

//DataBase
const database = require("./database");


const booky = express();
/*
Route           /
Description     Get all the books
Access          PUBLIC
Parameter       None
Methods         GET
*/

booky.get("/", (req, res) => {
    return res.json({books: database.books});
})


booky.listen(3000, () => {
    console.log("Server is running on port 3000");
});