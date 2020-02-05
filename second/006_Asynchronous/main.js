var evt = require("events").EventEmitter;

var emt = new evt();

emt.on("event", function() {
  setImmediate(() => {
    console.log("Listener # 1");
  });
});

emt.on("event", function() {
  console.log("Listener # 2");
});

emt.on("event", function() {
  setImmediate(() => {
    console.log("Listener # 3");
  });
});

emt.emit("event");
