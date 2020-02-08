var repl = require("repl");

var server = repl.start();

// replServer.defineCommand(keyword, cmd) Добавляет новую команду в repl
// keyword - название команды
// объект со свойствами help - описание команды, action - выполнения действия
server.defineCommand("hello", {
  action: function(name) {
    console.log("Hello", name);
  }
});
