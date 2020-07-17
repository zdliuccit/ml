const chalk = require('chalk');
let logLevel = 'none';

const log = {}

log.setLogLevel = function (level) {
  logLevel = level;
}

log.debug = function (msg) {
  if (logLevel === 'debug') {
    process.stdout.write('\n' + chalk.gray('[DEBUG]') + ' ' + msg + '\n');
  }
}

log.notice = function (msg) {
  process.stdout.write('\n' + chalk.cyan('[INFO]') + ' ' + msg + '\n');
}

log.warn = function (msg) {
  process.stdout.write('\n' + chalk.yellow('[WARNI]') + ' ' + msg + '\n');
}

log.error = function (msg) {
  process.stdout.write('\n' + chalk.red('[ERROR]') + ' ' + msg + '\n');
}

log.startBuilding = function (cmlType) {
  if (cmlType) {
    log.notice(`${cmlType} Compiling....`)
  } else {
    log.notice('start Compiling...')
  }
}

module.exports = log

