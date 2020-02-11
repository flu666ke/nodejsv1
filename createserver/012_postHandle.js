var http = require('http')
var fs = require('fs')
var url = require('url')

var port = 8080
var server = http.createServer(function (req, res) {
    console.log(res)
    var body = ''

    // обработка ошибок запроса
    req.on('error', function (err) {
        console.log(err)
    })

    // получение данных POST запроса
    req.on('data', function (data) {

        body = data.toString()

        // создание ответа тела
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(body)
        res.end()

        console.log(`data from request: ${body}`)
    })
}).listen(port)