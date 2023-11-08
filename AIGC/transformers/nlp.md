# 机器学习任务
transformers --- huggingface的核心库
- pipeline --- 分发任务
    pipeline(task, model)
- 数组 和 hashTable|Dict
    - 相同点
        都是数据容器 线性
    - 区别
        数组、Dict（0（1）时间复杂度） 和 栈、队列、链表 // 本质区别在于内存空间的连续和不连续
        非线性 二叉树 图
        查找线性容器
- transformers 支持哪些nlp任务
    SUPPORTED_TASKS 常量（大写）
    items值是一个Dict（在JS里叫做JSON）
    for k,v in    for 计数循环、
- 读/写 在操作系统层面属于I/O操作（Input/Output）红诺伊曼原理
    Input到内存中，Output到硬盘中。是同步代码，不像for循环一个一个执行，是ms级别的结束，可以实现多进程切换 轮循
    在从远程切换到内存|硬盘中时，这个过程中有网络传输的耗时，这时同步代码会阻塞后面的代码运行
- python
    - requsets --- 用于网络请求
    requests.get(url, stream=True).raw --- http请求的方法，get表示明文请求
    post --- 提交表单
    - PIL库 图片的读写等...
        Image --- 读（r）
        ImageDraw --- 写（w）
    - object-detextion
    





 -  !pip install transformers # 安装

 -  # transformers pipeline 哪些任务？
    from transformers.pipelines import SUPPORTED_TASKS
    SUPPORTED_TASKS

 -  print(SUPPORTED_TASKS.items()) # dick 字典 0(1)

 -  # es6 解构
    for k, v in SUPPORTED_TASKS.items(): # 相当于块级作用域
    print(k) # 查看默认支持的nlp任务
    # 返回：
    audio-classification音频分类
    automatic-speech-recognition自动语音识别
    text-to-audio文本到音频
    feature-extraction特征提取
    text-classification文本分类
    token-classification令牌分类
    question-answering问答
    table-question-answering表格问答
    visual-question-answering视觉问答
    document-question-answering文件问答
    fill-mask填充掩模
    summarization摘要
    translation翻译
    text2text-generation text2文本生成
    text-generation文本生成
    zero-shot-classification零热分类
    zero-shot-image-classification零热图像分类
    zero-shot-audio-classification零热音频分类
    conversational会话
    image-classification图像分类
    image-segmentation图像分割
    image-to-text图像到文本
    object-detection物体检测
    zero-shot-object-detection零热物体探测
    depth-estimation深度估计
    video-classification视频分类
    mask-generation掩模生成
    image-to-image图像对图像

 -  checkpoint = "google/owlvit-base-patch32" # 图片识别模型
    detector = pipeline('zero-shot-object-detection',model=checkpoint) # (选择任务，传入模型)
    # 然后就会开始下载图片识别模型

 -  import requests # 引入python的http请求库
    from PIL import Image # PIL python 图片的专业库

    url = 'https://unsplash.com/photos/oj0zeY2Ltk4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fHBpY25pY3xlbnwwfHx8fDE2Nzc0OTE1NDk&force=true&w=640'
    # requests.get---发送远程请求，这个过程会花费时间，python是一门同步语言，会同步请求，等待图片下载完成；然后再Image.open；最后打印img
    img = Image.open(requests.get(url, stream=True).raw) # http请求的方法，get表示明文请求
    img

 -  predictions = detector(
    img,
    # 候选的对象：
    candidate_labels=["hat","sunglasses","book"] # 查找想要识别的对象
    )
    predictions
    # 返回JSON数组：
    [{'score': 0.22562021017074585,                                    相似度
    'label': 'sunglasses',                                             标签
    'box': {'xmin': 349, 'ymin': 228, 'xmax': 429, 'ymax': 265}},      起始坐标
    {'score': 0.15738733112812042,
    'label': 'book',
    'box': {'xmin': 270, 'ymin': 284, 'xmax': 503, 'ymax': 427}},
    {'score': 0.10808254778385162,
    'label': 'hat',
    'box': {'xmin': 38, 'ymin': 172, 'xmax': 260, 'ymax': 363}}]

 -  from PIL import ImageDraw # 引入“写模块"
    draw = ImageDraw.Draw(img)

    for prediction in predictions: # predictions里放着刚刚的JSON数组
    box = prediction["box"]
    label = prediction["label"]
    score = prediction["score"]
    xmin, ymin, xmax, ymax = box.values() # 解构语法，这里是把一个数组里的值解构成四个变量
    draw.rectangle((xmin, ymin, xmax, ymax),outline="red",width=1) # 在识别出来标签物品的始末坐标标出红色方框，宽度为1
    draw.text((xmin, ymin), f"{label}:{round(score, 2)}", fill="red") # 在左上角写上标签名和相似值（保留两位小数），字体为红色

    img