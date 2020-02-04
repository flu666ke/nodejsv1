module.exports = {
    fname: 'Denys',
    lname: 'Korniienko',
    age: 32,
    sayHello: function () {
        console.log('Hello! ', 'My name is ', this.fname, ' I\'m ', this.age, ' years old!')
    }
}