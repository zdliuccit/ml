const commander = require('commander');
const cmlpackage = require('../package.json');
const argv = process.argv;

module.exports.run = function () {
  let first = argv[2];
  if (first === '-v' || first === '--version' || first === '-V') {
    ml.log.notice(`current running chameleon(${ml.root})`)
    version();
  } else {
    commander.usage('[command] [options]')
    commander.version(`${cmlpackage.name}@${cmlpackage.version}`)
    let cmdList = ['dev'];
    cmdList = cmdList.map(key => ({
      key,
      cmd: require(`./commanders/${key}/index.js`) // eslint-disable-line
    }))
    
    cmdList.forEach(item => {
      let cmd = item.cmd;
      cmd.register(
        commander
          .command(cmd.name)
          .option('-l, --log [debug]', 'logLevel')
          .usage(cmd.usage)
          .description(cmd.desc)
      );
    })
    commander.parse(argv);
  }
  
  function version() {
    console.log(`${cmlpackage.name}@${cmlpackage.version}`)
  }
}
