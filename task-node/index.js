'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4444;
const {user} = require('./models');
var assert = require('assert');
var multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploader = multer({ dest: 'uploads/images' });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/logs',uploader.single('file'),(req,res)=>{
	if (req.body['file']) {
            let oldPath = path.resolve(req.file.path);
            let newPath = path.resolve(req.file.destination, req.file.originalname);
            fs.rename(oldPath, newPath, err => {
                err ? console.log(err) : res.send(req.file);
            })
        } else {
            res.send(req.file);
        }
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

app.post('/view',(req,res)=>{
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