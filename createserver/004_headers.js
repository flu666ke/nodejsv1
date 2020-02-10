var http = require('http')

http.createServer(function (req, res) {
    // возвращает массив с заголовками, четные элементы массива - имена заголовков, нечетные - значения заголовков
    console.log(req.rawHeaders)
    // setHeader - метод записывает в ответ указанный загловок и его значение

    res.setHeader("Content-Type", 'text/plain')
    //
    var ct = res.getHeader("Content-Type")
    console.log(ct)

    // свойство определяет будет ли сервер отправлять загловок Date. Если значение false - дата не отправляется
    res.sendDate = false
    //
    console.log(res.headersSent)

    res.end("<h1>Test Page</h1>")

    console.log(res.headersSent)

}).listen(8080)