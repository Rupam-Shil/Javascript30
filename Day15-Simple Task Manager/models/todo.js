const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
	todo: String,
});
const Todo = mongoose.model('todos', todoSchema);
module.exports = Todo;
