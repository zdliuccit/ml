exports.name = 'dev';
exports.usage = '';
exports.desc = 'start dev mode';
const build = require('../build')
exports.register = function (commander) {
  commander
    .option('-n, --nopreview ', "don't auto open preview")
    .action(function (...args) {
      ml.log.startBuilding();
      ml.media = 'dev';
      build.startExecAll('dev')
    })
  commander.on('--help', function () {
    let cmd = `
      cml dev
    `
    console.log(cmd)
  })
  
}
