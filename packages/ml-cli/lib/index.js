const path = require('path');
const cli = require('./cli.js');
const log = require('./log.js');
const utils = require('./utils.js');
const argv = require('minimist')(process.argv.slice(2));
const EventEmitter = require('events');

const ml = {};
global.ml = ml;
ml.projectRoot = argv.root || process.cwd();
ml.root = path.join(__dirname, '../');
ml.cli = cli;
ml.log = log;
ml.utils = log;
ml.event = new EventEmitter();
ml.logLevel = argv.log || 'none'; // 日志输入等级   none  debug
ml.cli.run();
