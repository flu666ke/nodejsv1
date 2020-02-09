var timeout = setTimeout(function(){
    console.log('timeout example')
}, 2000)

var counter = 0
var interval = setInterval(() => {
    console.log('interval ' + counter)
    counter++

    if(counter == 10) {
        clearInterval(interval)
    }
}, 100);