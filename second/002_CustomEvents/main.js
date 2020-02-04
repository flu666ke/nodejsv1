var fileReader = require('./readFile.js')

var reader = new fileReader.Reader()

reader.readDataFromFile('file.js', function(response){
    console.log(response)
})