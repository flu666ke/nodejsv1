function User(name) {
    this.name = name
    this.sayHello = () => {
        console.log('Hello ', this.name)
    }
}

var John = new User('John')

John.sayHello()