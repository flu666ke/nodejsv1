console.log(Buffer.byteLength("hello world", "utf-8"));

var buff1 = Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90]);
var buff2 = Buffer.from("Hello world!!!", "utf8");

var buff3 = Buffer.from([50, 60, 70, 80, 90, 10, 20, 30, 40]);

console.log(buff1[2]);

console.log("Compare buffer:", buff1.compare(buff2));
console.log("index compare:", buff1.compare(buff3, 5, 9, 0, 4));
