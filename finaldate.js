var readline = require('readline');
var fs=require("fs");
var request=require("request");
var forEach = require('async-foreach').forEach;
var myInterface = readline.createInterface({
  input: fs.createReadStream('userfollowers.json')
});
myInterface.on('line', function (line) {
  
  
  
});
