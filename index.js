const minimist = require('minimist')

module.exports = () => {
  // const args = minimist(process.argv)
  const args = minimist(process.argv.slice(2))
  const cmd = args._[0] || 'nothing'
  console.log(cmd)
  console.log(args)
  console.log('HI ....')
  switch (cmd) {
    case 123:
      require('./cmds/123')(args)
      break
    default:
      require('./cmds/nothing')(args)
      break
  }
}
