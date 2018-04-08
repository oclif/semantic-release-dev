exports.prepare = (_, options) => {
  const fs = require('fs-extra')
  const path = require('path')
  const pjson = require(path.join(process.cwd(), 'package.json'))
  pjson.version = options.nextRelease.version
  console.dir(pjson)
  fs.writeJSONSync('package.json', pjson)
  console.dir(require(path.join(process.cwd(), 'package.json')))
}
