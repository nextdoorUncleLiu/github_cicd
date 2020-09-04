const { exec } = require('child_process')
exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
  console.log(error, stdout, stderr)
})
console.log()
module.exports = {
  'hooks': {
    'pre-push': 'npm run build'
  }
}