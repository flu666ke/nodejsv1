// при получении запроса от клиента, запрос передается в конвейер обработки запросов.
// Конвейер обработки состоит их компонентов, которые в терминологии express называется Middleware

var express = require('express')

var app = express()
// для регистрации middleware используется функция use, all, appMETHOD()
// 1. request - данные запроса
// 2. response - объект для управления ответом
// 3. next - следующая в конвейере обработки функия
app.use('/', function (request, response, next) {
    console.log('Prehandler...')
    // передаем управление следующему обработчику
    next()
})

app.get('/', function (request, response) {
    console.log('Main handler')
    // завершаем ответ от сервера
    response.end()
})

app.get('/about', function (request, response) {
    console.log('About handler')
    // завершаем ответ от сервера
    response.end()
})

app.listen(8080, function () {
    console.log('Server start')
})