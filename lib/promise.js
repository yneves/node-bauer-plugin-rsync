/*!
**  bauer-plugin-rsync -- Plugin for bauer to execute rsync command..
**  Copyright (c) 2015 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-plugin-rsync>
*/
// - -------------------------------------------------------------------- - //

"use strict";

// - -------------------------------------------------------------------- - //

module.exports = {
  
  rsync: {
    
    // .rsync() :Promise
    0: function() {
      return this.then(function(options) {
        return this.requestWorker("rsync",options);
      });
    },
    
    // .rsync(options Object) :Promise
    o: function(options) {
      return this.then(function() {
        return this.requestWorker("rsync",options);
      });
    }
    
  }
      
};

// - -------------------------------------------------------------------- - //
