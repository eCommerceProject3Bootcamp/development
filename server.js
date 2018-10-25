const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');
const cors = require('cors');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

//Access control headers????

app.use(cors());

// Add routes

app.use(routes);

// Connect to the Sequelize DB Start the API server WITH db
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log('App listening on PORT ' + PORT);
	});
});
// server WITHOUT db

// app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))
