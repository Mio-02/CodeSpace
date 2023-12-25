const fs = require('fs')

// 在原有文件上追加内容：
// fs.appendFileSync('./data.txt', '獅子の舞伶の高神の真射姫はここで奉献——オーロラの炎駒、煌華のキリンを賛美し、汝は天楽と轟雷を統率し、憤炎を纏って妖霊冥鬼を射抜く者である！')

// 重命名文件（后缀也可以修改）：
// fs.renameSync('./data.txt', './data.md')

// 移动文件：
// fs.renameSync('./data.md', './pic/data.md')

// 删除文件：
// fs.unlinkSync('./pic/data.md')

// 删库，删除目录且包含里面的全部文件：
// 建一个pic2文件夹
fs.rmSync('pic2', { recursive: true })