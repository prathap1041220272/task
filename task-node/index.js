'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4444;
const {user} = require('./models');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/logs',(req,res)=>{
	// console.log(req.body)
	const User = new user(req.body);
	User.save()
	.then(data => {
		res.json(data)
		console.log(data)
	})
	.catch(error => {
		console.log(error.message)
	})
})

app.post('/',(req,res)=>{
	user.find({email: req.body.email})
	.then(data => {
		res.json(data)
		console.log(data)
	})
	.catch(error => {
		console.log(error.message)
	})
})


app.listen(port,() => {
	console.log(`server started at port ${port}`)
})