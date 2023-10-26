const books = [
    {
        ISBN:"12345Book",
        title: "Tesla!!!",
        pubDate:"2023/10/23",
        language:"en",
        numPage:250,
        author:[1,2],
        publications:[1],
        category:["tech","space","education"]
    },
    {
        ISBN:"12346Book",
        title: "R A N G E R O V E R",
        pubDate:"2023/10/23",
        language:"kan",
        numPage:250,
        author:[1,2],
        publications:[1],
        category:["tech"]
    },
    {
        ISBN:"12347Book",
        title: "R A N G E R O V E R",
        pubDate:"2023/10/23",
        language:"hindi",
        numPage:250,
        author:[1,2],
        publications:[1],
        category:["tech"]
    },
    {
        ISBN:"12348Book",
        title: "R A N G E R O V E R",
        pubDate:"2023/10/23",
        language:"tel",
        numPage:250,
        author:[1,2],
        publications:[1],
        category:["tech"]
    },
    {
        ISBN:"12349Book",
        title: "R A N G E R O V E R",
        pubDate:"2023/10/23",
        language:"hindi",
        numPage:250,
        author:[1,2],
        publications:[1],
        category:["tech"]
    }
]

const author = [
    {
        id:1,
        name:"Rasul",
        books:["12345Book","FuckYou"]
    },
    {
        id:2,
        name:"Elon musk",
        books:["12345Book"]

    }
]


const publication = [
    {
        id:1,
        name:"writexxx",
        books:["12345Book"]
    },
    {
        id: 2,
        name: "writex2",
        books: []
    }
]


module.exports = {books, author, publication}