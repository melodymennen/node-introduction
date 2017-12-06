const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.listen(3000, () => {
    console.log('Server listening on port ' + 3000);
});