# openai封装
- transformers和openai
    - transformers是Hugging Face LLM社区 sdk
        底层细节把控，训练或微调模型  为法律/金融/体育训练一个专属模开导
    - openai 生成能力 哪些模块？
        Completion
        prompt 设计 设计数据表 开发工作 的一部分 重要部分
        解决问题的prompt设计者
    aigc 让新手变架构 基础+aigc
    得到了情感分析等NLP任务的prompt用法
- low code 低代码
    openai 不用怎么写代码，openai帮写了
- prompt 为什么，怎么样工作的呢？

# 分词
    LLM怎么交流？
# 标注过的数据
    模型根据这些数据进行学习和训练（机器学习）需要人工干预
    无人驾驶通过开车上路不断训练，它使用的数据是不需要人工干预的 无监督





# sentiment.ipynb

 -  # openai 情感分类更厉害 Completions
    !pip install openai==0.10.2 # 指定版本
 
 -  # 基于openai 的大模型来强化客服
    import openai
    # 常量 文本生成的模型
    COMPLETION_MODEL = 'text-davinci-003'
    # api_key
    openai.api_key="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"
    # 封装了openai回复的功能
    def get_response(prompt, temperature=1.0):
    # Completion模块
    # 生成内容 同步的
    # 调用openai库的Comletion模块，创建一个新的
    # 字典 {key:value}
    completions = openai.Completion.create(
        engine = COMPLETION_MODEL,
        prompt = prompt,
        max_tokens = 1024,
        n = 1,
        # None是关键字Null True
        stop = None,
        temperature=temperature
    )
    print(completions)
    message = completions.choices[0].text
    return message

 -  # openai 开发范式
    # NLP任务从transformers coding升级为openai prompt engineer
    # prompt 设计：精细化的需要（告诉它我们的需求是什么） 进行举例 给出数据
    prompts = """判断一下用户的评论情感上是正面的还是负面的
    评论：买的银色版真的很好看，一天就到了，晚上就开始拿起来完系统很丝滑流畅，做工扎实，手感细腻，很精致哦华为一如既往的好品质
    情感：正面

    评论：随意降价，不予价保，服务态度差
    情感：负面
    """

    good_case = prompts + """
    评论：外形外观：苹果审美一直很好，金色非常漂亮拍照效果：14pro升级的4800万像素真的是没的说，太好了，运行速度：苹果的反应速度好，用上三五年也不会卡顿的，之前的7P用到现在也不卡
    其他特色：14pro的磨砂金真的太好看了，不太高调，也不至于没有特点，非常耐看，很好的
    情感：
    """
    good_case

 -  print(get_response(good_case))



 # tokenizer.ipynb

 -  !pip install transformers

 -  # 分词 transformers第二个核心模块
    from transformers import AutoTokenizer # 不同的模型
    sens="管海军有大梦想，来旅梦，去拼多多" # 这是人类语言，需要向LLM转化
    tokenizer = AutoTokenizer.from_pretrained('uer/roberta-base-finetuned-dianping-chinese') # 引入一个分词器
    tokenizer

 -  # 第一步
    tokens = tokenizer.tokenize(sens)
    tokens

 -  # 为什么可以分词，因为AutoTokenizer会维护一份词汇表
    # 将分好的字按照词汇表切割
    tokenizer.vocab

 -  # 根据上面的“字典"快速地给出匹配的数字
    ids = tokenizer.convert_tokens_to_ids(tokens)
    ids

 -  # 标记开头和结尾，防止处理多余的东西
    ids = tokenizer.encode(sens, add_special_tokens=True)
    ids

 -  str_len = tokenizer.decode(ids, skip_special_tokens=False)
    str_len



# dataset.ipynb

 -  # openai 拥有全网数据训练
    import pandas as pd # 大数据分析库
    # I/O操作（读写/操作）
    data = pd.read_csv('./ChnSentiCorp_htl_all.csv') # 把数据读入内存(读取csv格式的文件)
    data

 -  data = data.dropna() # 调用了一个dropna方法：把数据里的空行给删掉
    data