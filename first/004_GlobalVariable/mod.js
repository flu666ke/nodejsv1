var x = 10

function test() {
    console.log('Test function, number = ', x)
}

global.number = x
global.func = test