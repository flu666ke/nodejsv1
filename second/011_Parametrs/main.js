var evt = require("events").EventEmitter;

var emt = new evt();

emt.on("myEvent", function(a, b) {
  console.log(a, b);
});

// Генерируем событие myEvent и в функции обработчик передаем 2 параметра
emt.emit("myEvent", 10, 15);
