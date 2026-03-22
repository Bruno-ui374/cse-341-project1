const express = require('express');
const app = express();
const mongodb = require('./data/database');

const PORT = process.env.PORT || 3000;

app.use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`Database is listening and node is running on port ${PORT}`);
        });
    }
});

