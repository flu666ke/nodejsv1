var evt = require('events')

var emitter = new evt.EventEmitter

// Поскольку на событие не подписан не один обработчик, то программа ничего не выполнит
emitter.emit('click')