# 小程序外包

- 当下最流行的线上线下结合程序
    外卖App最开始是移动时代的红利，因为手机的普及，有定位GPS
    Location Base Service LBS
    缺点：需要下载App
- 小程序特别适合于中小商家，扫码用小程序 --- 让线下实体店立马线上化、软件化
    O2O的概念：Offline To Online
    优点：轻量化，不用安装



# 汽车4S店小程序开发

- 商业级别的中小型外包程序需要什么样的开发能力
- 开发约定 / 架构思路
    - pages 概念
        - 由页面构成
            - wxml 相当于 html，html也是xml的一种,wxml -> weixinxml 没有div，只有view
            对象字面量 JSON 数据交换标准
            xml是早于JSON的数据交换标准
            <reviewer>
                <name>小明</name>
                <age>18</age>
            </reviewer>

            {
                name: "小明"，
                age: 18
            }
            - wxss 相当于 css
            - js 负责交互，数据管理   Ajax负责网络请求，向后端发送
            - json 配置文件
        - app.json
            app开头的都是全局的，是所有页面共享的

        - 开发时只需要切图

- 数据驱动界面思想 MVVM
    - 可以在js里配置一个data区域
        {{数据绑定 占位符 info.name}}
        wxml 静态页面 模板
        data 模板数据
        页面 = 模板 + 数据
        数据改变，模板会重新编译，显示新的页面

- 优质项目开发思路
    - wxml有着html不具备的条件，image，swiper可以快速实现幻灯片
        - 看文档（https://www.w3cschool.cn/weixinapp/）
    - css开发，将我们的样式按照原子功能，封装，有利于未来项目的复用
        - 当你发现在重复写样式的时候
            white hero section
            一行或几行css 形成了一个功能模块
            .sub-header { // 副标题
                font-size:;
                line-height:;
                font-family:;
            }
        - 慢慢积累经验