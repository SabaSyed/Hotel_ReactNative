const express = require('express');
const app = express();;

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());

const dbService = require('./DbService');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/insert', (request, response) => {

    const { name, description } = request.body;

    const db = dbService.getDbInstance();
    const result = db.insertNewItem(name, description);
    result
        .then(data => response.json({ success: data }))
        .catch(error => console.log(error));

});

app.get('/getAll', (request, response) => {

    const db = dbService.getDbInstance();
    const result = db.getAllData();

    result
        .then(data => response.json({ data: data }))
        .catch(error => console.log(error));

});
app.get('/getHotel', (request, response) => {

    const db = dbService.getDbInstance();
    const result = db.getHotel();

    result
        .then(data => response.json({ data: data }))
        .catch(error => console.log(error));

});

app.listen(process.env.PORT, () => {
    console.log('Listening to PORT: ' + process.env.PORT);
});