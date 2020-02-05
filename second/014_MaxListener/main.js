var evt = require("events").EventEmitter;

var emt = new evt();

emt.setMaxListeners(20);

for (var index = 0; index < 21; index++) {
  // попробывать 11
  (function() {
    var current = index;
    emt.on("myEvent", function() {
      console.log(current);
    });
  })();
}

// функция возвращает количество зарегистрированных обработчиков указанного события
console.log("EMT has", emt.listenerCount("myEvent"), "listeners.");

emt.emit("myEvent");
