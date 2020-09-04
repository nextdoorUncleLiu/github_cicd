const { execSync } = require('child_process')
console.log(2)
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')
console.log(branch)
console.log(1)
module.exports = {
  'hooks': {
    // 'pre-push': 'npm run build'
  }
}