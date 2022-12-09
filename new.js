const jsonfile = require('jsonfile')
const path = './new.json'
jsonfile.readFile(path)
.then((data) =>{
    console.log(data)
    data.forEach(car =>{
        console.log(`${car.color} ${car.engine} engine with ${car.wheels} wheels`)
    })
})