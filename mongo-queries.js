console.log("mongo-queries");
var fs = require('fs');

var langObj = JSON.parse(fs.readFileSync('updated-languages.json', 'utf8'));

const MongoClient = require('mongodb').MongoClient

var db

var countryArray = [];

MongoClient.connect('mongodb://batteries76:chewugin2@ds119020.mlab.com:19020/language-tree', (err, database) => {
  if (err) return console.log(err);
  db = database;

  var addCountries = function(langObj, findString) {

    // findString = "\"languages." + langObj.iso6393 + "\": \"" + langObj.name + "\"";
    console.log("findString is " + findString);

    // db.collection('country-info').find({$concat: [ "\"languages.", langObj.iso6393, "\": \"", langObj.name, "\""]}).toArray((err, results) => {

    db.collection('country-info').find({findString}).toArray((err, results) => {

      console.log("langObj.iso6393 is " + langObj.iso6393);
      console.log("langObj.name is " + langObj.name);
      // findString = "\"languages." + langObj.iso6393 + "\": \"" + langObj.name + "\"";
      console.log("findString is " + findString);
      console.log("results are " +results);
      console.log("\n");

      // console.log(results);
      // langCountryObj = {};
      // langCountryObj.name = langObj.name;
      // langCountryObj.countryArray = []
      // langCountryObj.codeArray = []
      // for(var result in results){
      //   langCountryObj.countryArray(result.name.common);
      //   langCountryObj.codeArray(result.name.cca2);
      // }
      //
      // countryArray.push(langCountryObj);
    });
    // console.log("language: ${langObj.name}");

    if(langObj.children.length === 0) { return; }
    else {
      for (var child of langObj.children) {
        findString = "\"languages." + child.iso6393 + "\": \"" + child.name + "\"";
        addCountries(child, findString);
      }
    }
  }
  findString = "\"languages." + langObj.iso6393 + "\": \"" + langObj.name + "\"";
  addCountries(langObj, findString);
  console.log(countryArray);
})
