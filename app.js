var express = require('express')
var app = express()
app.listen(3000, function() {
	console.log("start!! express server on port 3000")
}) // 비동기 callback 함수

app.use(express.static('public'))

//url routing
app.get('/', function(req, res) {
	console.log('test')
	res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req,res) {
	res.sendFile(__dirname + '/public/main.html')
})