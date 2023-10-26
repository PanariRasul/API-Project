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


/*
Route           /is
Description     Get specific book on ISBN
Access          PUBLIC
Parameter       ISBN
Methods         GET
*/

booky.get("/is/:isbn", (req, res) => {
    const getSpecificBook  = database.books.filter (
        (book) => book.ISBN === req.params.isbn
    );

    if(getSpecificBook.length === 0) {
        return res.json({error:`No Book Found for the ISBN of ${req.params.isbn}`})
    }

    return res.json({book: getSpecificBook});
})

/*
Route           /is
Description     Get specific book on category
Access          PUBLIC
Parameter       category
Methods         GET
*/

booky.get("/c/:category",(req,res) => {
    const getSpecificBook = database.books.filter (
        (book) => book.category.includes(req.params.category)
    );

    if(getSpecificBook.length === 0) {
        return res.json({error:`No Book found for the category of ${req.params.category}`})
    }

    return res.json({book: getSpecificBook});
});

/*
Route           /is
Description     Get specific book on language
Access          PUBLIC
Parameter       language
Methods         GET
*/

booky.get ("/lan/:language",(req,res) => {
    const getSpecificBook = database.books.filter (
        (book) => book.language.includes(req.params.language)
    );

    if(getSpecificBook.length === 0) {
        return res.json({error:`No Book found for the language of ${req.params.language}`})
    }

    return res.json({book: getSpecificBook})
})

/*
Route           /author
Description     Get all the Author
Access          PUBLIC
Parameter       None
Methods         GET
*/

booky.get ("/author", (req, res) => {
    return res.json({book:database.author});
});

/*
Route           /author
Description     Get all the Author
Access          PUBLIC
Parameter       Name
Methods         GET
*/
// To be continue
booky.get("/author/:name",(req,res) => {
    const getSpecificAuthor = database.author.filter (
        (author) => author.name === req.params.name
    );

    if(getSpecificAuthor.length === 0) {
        return res.json({error:`No Book found for the Author of ${req.params.name}`})
    }

    return res.json({author: getSpecificAuthor});
});






booky.listen(3000, () => {
    console.log("Server is running on port 3000");
});