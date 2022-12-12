const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'data/students.csv',
    header: [
        {id: 'name', title:'FirstName'},
        {id: 'age', title: 'Age'}
    ], append: false,
});
    const students = [
        {name: 'John Jake',
        age: 22},
        {name: 'Anna',
        age: 22}
    ];
    csvWriter.writeRecords(students)
    .then(()=>console.log('done'))
