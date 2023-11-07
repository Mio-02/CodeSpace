# 客服
- 人工智能的堂客
    NLP 
- 人工客服和人工智能客服并存的 十五年
    简单的，重复的，相似的问题
    语义的理解 + 回复的生成更牛逼

- pip
    python 包管理器，
    pip install openai==0.10.2
    pip  install transformers

- AIGC + 
    前端/后端 快速拥有NLP能力，
    - 前端负责用户体验
    - 后端负责业务逻辑
    - 。。。
    - 算法工程师

- AIGC客服
    prompt + LLM（openAI）
    - python语法
        pip python3
        import openai
        python是弱类型语言 大写的就是const
    
    - 调用openai.Completion.create(
        参数dict
        https的调用davinci模块
    )
    - 前后端数据交流的格式是JSON



 -  案例：

 -  !pip install openai==0.10.2

 -  # 基于openai 的大模型来强化客服
    import openai
    # api_key
    openai.api_key="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"
    # 常量 文本生成的模型
    COMPLETION_MODEL="text-davinci-003"
    # 系统后台生成了一条记录，再调用我们这个AIGC来生成客服
    prompt="""请你使用朋友的语气回复客户，并称他为亲，他的订单已经发货在路上了，
    预计在三天之内会送达，订单号2021AEDG，我们很抱歉因为天气的原因物流时间比原来长，
    感谢他选购我们的商品。"""
    # 封装了openai回复的功能
    def get_response(prompt, temperature=1.0):
    # Completion模块
    # 生成内容 同步的
    # 调用openai库的Completion模块，创建一个新的
    # 字典 {key:value}
    completions = openai.Completion.create(
        engine=COMPLETION_MODEL,
        prompt=prompt,
        max_tokens=1024, # 最大算力
        n=1, # 返回一条结果
        # null True
        stop=None, # 内容没有执行完不要停下来
        temperature=temperature
    )
    # 返回的结果由JSON返回为text
    print(completions)
    message = completions.choices[0].text
    return message

 -  print(get_response(prompt))