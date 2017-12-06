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

app.get('/api/books');

app.put('/api/books/:id');

app.delete('/api/books/:id', (req, res) => {
    const bookId = req.params.id;
    const bookIndex = books.findIndex(book => book.id === +bookId);
    books.splice(bookIndex,1);
    res.json(books);
});