// Объект Сonsole, является глобальным и обеспечивает простую отладку приложений в Node.js
// По умолчанию, объект console сконфигурирован на передачу информации в\из process.stdout и process.stdin

console.log("Simple message, ");
console.info("Some data"); // алиас функции console.log()

console.error(new Error("Something wrong!"));
var name = "---";
console.warn("Danger ${name}!"); // алиас функции console.error()

var obj = { name: "Ivan", age: 25 };
console.dir(obj);
