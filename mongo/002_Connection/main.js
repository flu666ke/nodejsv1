var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://fluke:<atomos666>@cluster0-stz7m.mongodb.net/test", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/userCollectionDB'

MongoClient.connect(url, function (err, db) {

    // в mongoDB нет таблиц, все данные храняться в коллекциях и для того чтобы работать с БД неодходимо получать объект коллекции
    // метод collection применяется для получения объекта коллекции
    var collection = db.collection('user')
    var user = { firstName: 'Ivan', lastName: 'Ivanov', age: 30 }

    // метод inserOne позволяет добавить новый объект (документ) в коллекцию, принимает два параметра:
    // 1-й - объект который необходимо добавить
    // 2-й - функция обратного вызова которая выполнится после добавления объекта
    collection.insertOne(user, function (err, result) {

        if (err) {
            console.log(err)
            return
        }
        
        // result.ops - объект полученный обратно из базы данных, содержащий индификатор
        console.log(result.ops)
        db.close()
    })
})