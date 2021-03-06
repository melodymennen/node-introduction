const books = [];
let id = 0;

module.exports = {
    create(req, res) {
        console.log('You sent me this data: ', req.body);
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author
        });
        id++
        console.log('books',books);
        res.json(books);
    },
    read(req, res) {
        res.json(books)
    },
    update(req, res) {
        const bookId = req.params.id;
        const bookIndex = books.findIndex(book => book.id === +bookId);
        books[bookIndex] = {
            title: req.body.title,
            author: req.body.author
        }
        res.json(books);
    },
    delete(req, res) {
        const bookId = req.params.id;
        const bookIndex = books.findIndex(book => book.id === +bookId);
        books.splice(bookIndex,1);
        res.json(books);
    }
};

