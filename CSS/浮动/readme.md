# 块级
    1. 默认占据一整行
    2. 可以设置宽高

# 行内块
    1. 可以同行显示
    2. 可以设置宽高
    tips：代码换行会导致行内块之间有间距

# 行内
    1. 可以同行显示
    2. 不可以设置宽高

# 浮动
    1. 脱离文档流
    2. 文字环绕
    3. 让块级元素同行显示
    4. 让行内元素可设置宽高
    5. 可以使用margin，但是不能使用margin：0 auto；
    浮动只能左浮和右浮，但定位可以定位在父容器的任意位置

# 清除浮动（带来的负面影响）
    1. 给父容器设置高度
    2. 在最后一个浮动元素后面添加新的元素，在新元素上做 清除浮动（clear: left/ right/ both）
    3. 在父容器伪元素after上做 清除浮动（用的第二多）
    4. 在下方被浮动影响的容器上做 清除浮动
    5. BFC容器

# BFC 容器 （Block Formatting Content 块级格式化上下文）
- 哪些属性可以创建BFC：
    1. float: left || right;
    2. position: absolute || fixed;
    3. display: inline-block; 变成BFC容器，且不脱离文档流
    4. display: table-cell...; 大部分table开头属性和table本身都可以
    5. overflow: hidden || auto || overlay || scroll; 用的最多
    6. 弹性盒子（display: flex || inline-flex）


- BFC的特点：
    1. BFC容器在计算高度时，会将浮动元素的高度也计算在内
    2. BFC本身是为了解决一个bug准备的，用来解决内外margin重叠问题