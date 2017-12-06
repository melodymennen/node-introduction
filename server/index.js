const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bc = require('./controllers/books_controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/books', bc.create);
app.get('/api/books', bc.read);
app.put('/api/books/:id', bd.update);
app.delete('/api/books/:id', bc.delete);


app.listen(3000, () => {
    console.log('Server listening on port ' + 3000);
});