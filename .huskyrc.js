module.exports = {
  'hooks': {
    'pre-commit': 'npm run build && git add build && git commit -m "提交打包文件"'
  }
}