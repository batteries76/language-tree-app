console.log("language tree builder");
var fs = require('fs');

var iso6393 = require('iso-639-3');

console.log(iso6393[2]);

var langObj = JSON.parse(fs.readFileSync('tester_language-families.json', 'utf8'));

// console.log(langObj);

var addISO6393 = function(langObj) {

  flag = 0;
  if(!langObj.hasOwnProperty('iso6393')){
    for (var language of iso6393) {
      if(langObj.name === language.name){
        console.log(language.name);
        langObj.iso6393 = language.iso6393;
        flag = 1;
      }
    }
  }
  if (flag === 0) {
    langObj.iso6393 = "xxx";
  }
  console.log(langObj.iso6393);

  for (var child of langObj.children) {
    addISO6393(child);
  }
}

addISO6393(langObj);

fs.writeFile("updated-languages.json", JSON.stringify(langObj), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
