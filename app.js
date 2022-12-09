const jsonfile = require('jsonfile')
const path = './sample.json'
jsonfile.readFile(path)
.then((data) =>{
    console.log(data)
    data.forEach(employee =>{
        console.log(`${employee.first_name} ${employee.last_name} from ${employee.state}`)
    })
})