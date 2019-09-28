require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded middleware
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');

});
/*
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/cafe', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Base de datos ONLINE');
});
*/


app.listen(process.env.PORT, () => {
    console.log(`Escuchando en pueto 3000`);
});