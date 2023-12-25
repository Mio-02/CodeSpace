const fs = require('fs')

// 创建文件并写入内容：
// fs.writeFileSync('./target.md', '獅子の舞伶の高神の真射姫はここで奉献——オーロラの炎駒、煌華のキリンを賛美し、汝は天楽と轟雷を統率し、憤炎を纏って妖霊冥鬼を射抜く者である！')

// 拿到文件并写入到指定文件夹内：
// 不写读取格式默认是Buffer流类型：
// const img = fs.readFileSync('./1.jpg')
// // console.log(img);
// fs.writeFileSync('./pic/1.jpg', img)