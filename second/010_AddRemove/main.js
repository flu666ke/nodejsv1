var evt = require("events").EventEmitter;

var emt = new evt();

var count = 0;
// при добавлении нового подписчика, генерируется событие newListener
emt.on("newListener", function(event, listener) {
  if (event == "myEvent") {
    console.log("myEvent was be added to emt.");
  }
});

// когда подписчик удаляется, срабатывает событие removeListener
emt.on("removeListener", function(event, listener) {
  if (event == "myEvent") {
    console.log("myEvent was be removed from emt.");
  }
});

emt.on("myEvent", test);

console.log(emt.listenerCount("myEvent"));

emt.removeListener("myEvent", test);
console.log(emt.listenerCount("myEvent"));

function test() {
  console.log("test event!");
}
