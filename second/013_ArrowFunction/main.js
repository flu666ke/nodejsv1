var evt = require("events").EventEmitter;

var emt = new evt();

// Когда вызывается функции обработчик, ключевое слово this внутри нее указывает на объект EventEmitter,
// от этого можно избавиться используя стрелочную функцию
emt.on("myEvent", function() {
  console.log("Ordinary function: ");
  console.log(this);
});
// module.exports = exports = this

exports.x = 10;
emt.on("myEvent", () => {
  console.log("Arrow function: ");
  console.log(this);
});

emt.emit("myEvent");
