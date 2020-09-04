const { execSync } = require('child_process')

const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
console.log(branch)
module.exports = {
  'hooks': {
    // 'pre-push': 'npm run build'
  }
}