var evt = require("events").EventEmitter;

var emt = new evt();

emt.on("myEvent", test);
console.log("Listener added!");

emt.emit("myEvent");

emt.removeListener("myEvent", test);
console.log("Listener removed!");

emt.emit("myEvent");

function test() {
  console.log("test function!");
}
