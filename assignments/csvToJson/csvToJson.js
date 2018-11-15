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
ConvertCsvToJson = (csvFile = 'customer-data.csv') => {
    csv({ flatKeys: true }).fromFile(path.join(__dirname, fileFolder, csvFile))
        .then((json) => {
            createJsonFile(JSON.stringify(json, null, 2));
        });
}