const express = require ("express");

const booky = express();

booky.listen(3000, () => {
    console.log("Server is running on port 3000");
});