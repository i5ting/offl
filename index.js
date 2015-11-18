#!/usr/bin/env node

require('shelljs/global');
var fs = require('fs');
var current_path = process.cwd();
var child_process = require('child_process');


mkdir('-p', current_path + '/offl');
// cp('-Rf', __dirname + '/*', current_path + '/mongoose-console');

child_process.exec('cp -rf '+ __dirname + '/vendor/cgo/*' +' ' + current_path + '/offl',
  function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});