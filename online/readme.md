## npm run build

项目分为开发阶段、测试阶段、上线阶段

浏览器只能执行js、css，我们需要把代码编译成最终的文件，dist目录就是前端要部署的文件目录

## vite负责打包项目
- 将开发目录的index.html拷贝过来
- 首页需要的所有资源，比如vue、vue-router、pinia、app.vue、home.vue等，根据依赖顺序打包成index.js文件，首页就能运行了
- 其他路由页面使用了路由懒加载，他们需要用到的资源会打包成为另外的js文件
- 首页只需要加载index.js和index.html，能以最快的速度打开。当路由切换的时候，异步加载相应的js、css文件，这就是首屏加载特别快，懒加载的贡献
- dist目录下的文件都是静态资源，可以单独上线————这是相对于后端来说的，只要交给nginx，就能正常上线了。nginx是高性能的web服务器

## 服务器准备
1. 购买一台服务器获得公网ip，centos
2. 安装xshell连接服务器
    - 根据宝塔给的centos安装脚本在服务器上运行，获得宝塔远程操作的地址
3. 宝塔降低了Linux的使用难度，可视化地安装、调试服务器
4. 通过宝塔的文件上传功能将dist目录下的静态资源上传到www/wwwroot/http目录下
5. nginx服务器启动

## 服务器代码（后端代码）
1. 安装pm2（node的进程管理工具）
    - 本地运行node index.js太脆弱，服务器情况复杂，出了错误node进程就会挂掉（单线程，一个用户对应一个线程，整个网站都不能提供服务了）
    - pm2可以帮助我们管理node进程，pm2会自动重启node进程，当node进程挂掉的时候，pm2会自动重启
2. koa启用了cors服务器端跨域解决方案
3. nginx默认的端口号是80端口
    - http://47.243.60.20/ === http://47.243.60.20:80
    - ip地址对应我们网络上的一台主机，端口号对应一台主机上的一个服务
    - 80端口是默认的web服务端口，nginx默认指向80
4. mysql的安装（在宝塔里面选择数据库进行安装）和数据的迁移