'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task-for-int')
.then(data => {
	console.log('connected to database')
})
.catch(error => {
	console.log(error.message)
})

module.exports = mongoose;