exports.prepare = (_, options) => {
  const fs = require('fs-extra')
  const path = require('path')
  const pjson = require(path.join(process.cwd(), 'package.json'))
  console.dir(pjson)
  pjson.version = options.nextRelease.version
  fs.outputJSONSync('package.json', pjson, {space: 2})
  console.log(fs.readFileSync('package.json', 'utf8'))
}
