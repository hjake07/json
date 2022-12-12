const fs = require('fs')
const csv = require('csv-parser')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
let language = process.argv[2]
const csvWriter = createCsvWriter({
    path: `data/${language}.csv`,
    header: [
        { title: "id", id: "id" }
        , { title: "first_name", id: "first_name" }
        , { title: "last_name", id:"last_name"}
        , { title: "email", id:"email" }
        , { title: "gender", id: "gender" }
        , { title: "language", id: "language" }
    ], append: false,
});
let count = 0;
let array = []
fs.createReadStream('data/languages.csv')
    .pipe(csv())
    .on('data', (row) => {
        if (row.language === language) {
            count++
            console.log(row)
            array.push(row)
        }
    })
    .on('end', () => {
        console.log(`${count} ${language} speakers`)
        console.log('done parsing file')
        if(count){
        csvWriter.writeRecords(array)
        }
    })
    