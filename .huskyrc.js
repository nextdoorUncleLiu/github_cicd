const { spawnSync } = require('child_process')
console.log(spawnSync('git rev-parse --abbrev-ref HEAD'))
module.exports = {
  'hooks': {
    // 'pre-push': 'npm run build'
  }
}