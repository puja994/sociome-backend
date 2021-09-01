
import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import path from "path";



const PORT = process.env.PORT || 8000;



const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

import mongoClient from "./config/db.js";
mongoClient();



app.get("/", (req, res) => {
	res.send("Hello World");
});

//404 return

app.use((req, res, next) => {
	const error = new Error("Resources not found");
	error.status = 404;

	next(error);
});



app.listen(PORT, error => {
	if (error) console.log(error);

	console.log(`Server is running at http://localhost:${PORT}`);
});