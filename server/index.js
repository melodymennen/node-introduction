const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const books = [];
let id = 0;

app.post('/api/books',(req, res) => {
    console.log('You sent me this data: ', req.body);
    books.push({
        id: id,
        title: req.body.title,
        author: req.body.author
    });
    id++
    console.log('books',books);
    res.json(books);
});

app.listen(3000, () => {
    console.log('Server listening on port ' + 3000);
});