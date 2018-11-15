const fs = require('fs');
const csv = require('csvtojson');
const path = require('path');

/* defining file folder for resources like csv and json */
const fileFolder = 'files';

/* creating a json file from json */
createJsonFile = (json, jsonFile = 'customer-data.json') => {
    fs.writeFileSync(path.join(__dirname, fileFolder, jsonFile), json);
}

/* converting csv to json from a csv file */
convertCsvToJson = (csvFile = 'customer-data.csv') => {
    let json = [];
    csv().fromFile(path.join(__dirname, fileFolder, csvFile))
        .on('error', (err) => { console.log(`Error occur ${err}`) })
        .then((json) => { createJsonFile(JSON.stringify(json, null, 2)) })
}

/* calling without an argument to use default @param */
convertCsvToJson();