var utils = require('util')

function Base(){
    this.name = 'Base function'
}
Base.prototype.say = function(){
    console.log('Hello, this is a %s function', this.name)
}

function Derived(){
    this.name = 'Derived'
}
// Метод utils.inherits позволяет производить наследование
utils.inherits(Derived, Base)

Derived.prototype.getData = function(){
    console.log('Some data from Derived function')
}

var derived = new Derived()

derived.getData()
derived.say()