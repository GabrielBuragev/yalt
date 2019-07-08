require ('dotenv').config();

const TrackRoute = require('./routes/track');
const SearchRoute = require('./routes/search');

/**
 * NPM Module dependencies.
 */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use('/track', TrackRoute);
app.use('/search', SearchRoute);

var server = app.listen(process.env.PORT || 8899, err => {
    if (err) throw err
    console.log(`server listening on ${server.address().port}`)
})    