/**
 * @file 公共方法
 * @author zdliuccit
 */
const fs = require('fs');
const path = require('path');

const utils = {}
utils.isFile = function (filePath) {
  if (fs.existsSync(filePath)) {
    var fileStat = fs.statSync(filePath);
    return fileStat.isFile();
  } else {
    return false;
  }
}

module.exports = utils
