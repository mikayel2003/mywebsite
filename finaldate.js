var readline = require('readline');
var fs=require("fs");
var request=require("request");
var forEach = require('async-foreach').forEach;
var myInterface = readline.createInterface({
  input: fs.createReadStream('userfollowers.json')
});
myInterface.on('line', function (line) {
  
  var infouser=JSON.parse(line);
  var url=infouser.repos+"?client_id=2b13a65da98f9faa066c&client_secret=4e3f6e03bf898cdd5a2ff2c6ef65b233368b3677";
  var options={
                     url:url,
                     headers:{
                        'User-Agent':'request'
                      }
              };
  request(options,function(err,response,json){
      var reqinfo=JSON.parse(json);
      console.log(reqinfo);
      forEach(reqinfo,function(link1,index1,arr1){
          console.log(1);
          
      });
  });
  
});
