const express = require("express");
const app = express();
const http = require("http").Server(app);

const path = require("path");

app.get("/download", function(req, res){
	res.sendFile( path.join(__dirname, "/public/index.html") );
});

app.get("/download/mac", function(req, res){
	res.download(__dirname + "/downloads/ERS.zip");
});

app.get("/download/linux", function(req, res){
	res.download(__dirname + "/downloads/ERS-linux.zip");
});

app.use("/", express.static("public"));

const server = app.listen(80);