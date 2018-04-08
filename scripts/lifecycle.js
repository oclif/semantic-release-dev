function run(pluginConfig, options) {
  const path = require('path')
  const pjson = require(path.join(process.cwd(), 'package.json'))
  console.dir(pjson)
  const exec = require('./exec')
  process.env.OCLIF_NEXT_VERSION = options.nextRelease.version
  const cmd = pjson.scripts[pluginConfig.script]
  if (cmd) exec(cmd)
}

exports.prepare = run
exports.publish = run
exports.verifyConditons = run
