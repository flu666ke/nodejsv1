var evt = require("events");

var emt = new evt.EventEmitter();

emt.on("myEvent", function() {
  console.log("test string 1");
});

// метод prependListener добавляет подписчика в начало цепочки
emt.prependListener("myEvent", function() {
  console.log("test string 2");
});

emt.once("once", function() {
  console.log("First once listener");
});

emt.prependOnceListener("once", function() {
  console.log("Second once listener");
});

emt.emit("myEvent");
emt.emit("once");
