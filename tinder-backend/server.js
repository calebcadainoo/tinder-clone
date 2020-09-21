// import express from 'express'
// import mongoose from 'mongoose'

// App Config
const express = require("express");
const appkeys = require('./backend.json');
const app = express();
const mongoose = require("mongoose");
const Cards = require('./models/dbCards');
const Cors = require('cors');

const DB_USER = appkeys["databaseUser"];
const DB_PASS = appkeys["databasePass"];
const DB_NAME = appkeys["databaseName"];

const connectionURL = `mongodb+srv://tinder-admin:${DB_PASS}@tinder-cluster.rzgzh.gcp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const port = process.env.PORT || 8080;


// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionURL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// db user: tinder-admin
// db password: LCzolQ0jiicuqgjQ

// API Endpoints
app.get('/', (req, res) => res.status(200).send(`I'm working`));

app.post('/tinder/cards', (req, res) =>{
	const dbCard = req.body;

	Cards.create(dbCard, (err, data) => {
		if (err) {
			data = {
				"success": false,
				"statusCode": "ERROR-POSTING-DATA",
				"response": err,
				data
			}
			res.status(500).send(data)
		}else{
			data = {
				"success": true,
				"statusCode": "CARD-CREATED",
				"response": "Tinder card created successfully",
				data
			}
			res.status(201).send(data)
		}
	})
});

app.get('/tinder/cards', (req, res) => {
	Cards.find((err, data) => {
		if (err) {
			data = {
				"success": false,
				"statusCode": "ERROR-GETTING-DATA",
				"response": err,
				data
			}
			res.status(500).send(data)
		}else{
			data = {
				"success": true,
				"statusCode": "DATA-FETCHED",
				"response": "Data fetched successfully",
				data
			}
			res.status(201).send(data)
		}
	})
});

// Listener
app.listen(port, () => console.log(`listening on locahost: ${port}`));

