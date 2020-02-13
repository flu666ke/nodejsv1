// при получении запроса от клиента, запрос передается в конвейер обработки запросов.
// Конвейер обработки состоит из компонентов, которые в терминологии express называются Middleware

var express = require('express')
// 1. request - данные запроса
// 2. response - объект для управления ответом
// 3. next - следующая в конвейере обработки функия
var app = express()

var cookieParser = {
    getCookie: function (req, res, next) {
        var cookies = req.get('Cookie')

        var cookieCollection = cookies.split(';')

        var tempCookies = {}

        for (var i = 0; i < cookieCollection.length; i++) {
            var elem = cookieCollection[i]
            var pos = elem.indexOf('=')
            var key, value

            if (pos != -1) {
                key = elem.substring(0, pos)
                value = elem.substring(pos + 1)
            }

            tempCookies[key] = decodeURIComponent(value)
        }
        req.cookies = tempCookies
    }
}

app.use('/', cookieParser.getCookie)

app.get('/', function (req, res) {
    console.log(req.cookies)
})

app.get('/index', function (req, res) {
    console.log('Main handler')
    res.cookie('someCookie', 'this is another cookie!')
    res.cookie('anotherCookie', 'this is another cookie!')
    res.end()
})
app.listen(8080, function () {
    console.log('Server start')
})

