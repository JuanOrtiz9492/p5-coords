const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', function (req, res) {
   res.sendFile('index.html');
})

const server = app.listen(8080, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})