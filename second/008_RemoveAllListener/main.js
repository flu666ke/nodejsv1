var evt = require("events").EventEmitter;

var emt = new evt();

emt.on("myEvent", () => {
  console.log("Listener 1");
});

emt.on("myEvent", () => {
  console.log("Listener 2");
});

emt.on("myEvent", () => {
  console.log("Listener 3");
});

emt.emit("myEvent");

emt.removeAllListeners("myEvent");
console.log("Listeners was deleted!");

emt.emit("myEvent");
