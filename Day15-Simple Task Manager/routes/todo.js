const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', async (req, res) => {
	let todos = await Todo.find({});
	res.render('index', { todos: todos });
});
router.post('/', async (req, res) => {
	console.log('here');
	let todo = await new Todo(req.body);
	try {
		todo = await todo.save();
		res.redirect('/');
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
