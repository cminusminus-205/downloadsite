const express = require("express");
const app = express();
const http = require("http").Server(app);

const path = require("path");

app.get("/", function(req, res){
	res.sendFile( path.join(__dirname, "index.html") );
});

app.get("/mac", function(req, res){
	res.download(__dirname + "/downloads/ERS.zip");
});

app.get("/linux", function(req, res){
	res.download(__dirname + "/downloads/ERS-linux.zip");
});

app.use("/", express.static("public"));

const server = app.listen(80);