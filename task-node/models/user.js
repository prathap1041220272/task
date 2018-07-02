'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailsSchema = new Schema({
	name: String,
	email: String,
	description: String,
	file:Buffer,
	mobile: Number
})

module.exports = mongoose.model('User',detailsSchema);