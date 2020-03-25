var restify = require('restify')
var fs = require('fs')

var port = 8080

// создание сервера
var server = restify.createServer({
    name: 'myApp'
})

// middleware функции, используемые в restify, принимают те же параметры, что и в express
server.use(function (req, res, next) {
    console.log('method: ' + req.method + '\n\r' + 'url: ' + req.url)
    next()
})

// обработка get запроса
server.get('/', function (req, res, next) {
    res.send('This is a server created with restify! GET')
})

server.get('/error', function (req, res, next) {

    // В restify имеется встроенный конструктор ошибок, с помощью которого можно
    // создать большинство ошибок, соответствующих http статус-кодам. Например:
    // BadRequestError (400 Bad Request)
    // UnauthorizedError (401 Unauthorized)
    // InvalidHeaderError (400 Bad Request)
    // ForbiddenError (403 Forbidden)
    var err = new restify.errors.InternalServerError('The server is under maintenance, try to refresh the page later!')
    next(err)
})

// события InternalServer генерируется, когда функция next() в составе любой middleware
// функции получает ошибку в качестве аргумента
server.on('InternalServer', function (req, res, err, next) {
    console.log(err.body)
    res.send(err.message)
})

server.listen(port, function () {
    console.log('server running on port ' + port)
})