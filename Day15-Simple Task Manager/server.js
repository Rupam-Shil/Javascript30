const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const todo = require('./routes/todo');
const Todo = require('./models/todo');

mongoose.connect('mongodb://localhost/todo', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.then(() => {
	console.log('db connected');
});
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('css'));
app.use(morgan('dev'));

app.use('/', todo);

app.listen(9000);
