/*!
**  bauer-plugin-rsync -- Plugin for bauer to execute rsync command..
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-rsync>
*/
// - -------------------------------------------------------------------- - //

"use strict";

var RSync = require("rsync");
var factory = require("bauer-factory");

// - -------------------------------------------------------------------- - //

module.exports = function(worker,config) {
  
  worker.on("request",function(request,response) {
    
    var options = factory.merge(config.options,request);
    
    var rsync = RSync.build(options);
     
    rsync.execute(function(error,stdout,stderr) {
      if (error) {
        response.sendError(error);
      } else {
        response.sendOk({
          stdout: stdout,
          stderr: stderr
        });
      }
    });
    
  });
  
  worker.sendReady();
  
};

// - -------------------------------------------------------------------- - //
