const fs = require('fs');
const csvToJson = require('csvtojson');

const csvFilePath = './customer-data.csv';

csvToJson({noheader:false})
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        fs.writeFileSync("customer-data.json", JSON.stringify(jsonObj)); 
        console.log('Converting done!');
    })

    const path = require('path')
console.log(path.join(__dirname, 'data', 'customers.csv'))