const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const db = require('./models');
const cors = require('cors');

let options = {
    json: { limit: '50mb', extended: true },
    urlencoded: { limit: '50mb', extended: true, parameterLimit: '1000000' },
};

// Define middleware here
app.use(bodyParser.json(options.json));
app.use(bodyParser.urlencoded(options.urlencoded));
app.use(cors());
app.use(routes);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Add routes

// Connect to the Sequelize DB Start the API server WITH db
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});
// server WITHOUT db
// app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
