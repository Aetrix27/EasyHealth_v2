const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

dotenv.config();

const viewsPath = __dirname + '/views/';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(viewsPath));

//database
/*
const db = require('./models/index');
db.mongoose
	.connect(process.env.MONGODB_CONNECTION_STRING || db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to the database!');
	})
	.catch((err) => {
		console.log('Cannot connect to the database!', err);
		process.exit();
	});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('./client/build'));
}
*/
app.get('/', function (req, res) {
	res.sendFile(viewsPath + 'index.html');
});

//require('./routes/documentRoutes')(app);

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});