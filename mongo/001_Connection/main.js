// для работы с mongodb необходимо подключить модуль. Для этого используйте команду -npm i mongodb
// MongoClient основной класс для работы с БД, через него происходит все взаимодействия с БД
var mongoose = require('mongoose')

mongoose.connect("paste db link", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
var MongoClient = require('mongodb').MongoClient

var format = require('util').format

// Используем метод connect для подключения к серверу, функция которая передается в метод, принимает два параметра
// err - ошибка, которая возникла при установке соединения с БД
// db - ссылка на объект БД
var url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, function (err, db) {
    if (err) throw err
    console.log('Connection established! yRrrrrrrrrrrrrrrr')
    // Закрываем подключение с БД
    db.close()
})