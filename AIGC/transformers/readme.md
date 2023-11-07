# 大模型的社区
huggingface LLM 社区
- NLP 常规任务
    transformers来自抱抱脸

- transformer的用法
    - pipeline(task)
        分发一个任务
    - model
    - tokenizer...



 - 例子：

 - !pip install transformers  # 来自抱抱脸

 - from transformers import pipeline # pipeline 派发模块
   classifer = pipeline('sentiment-analysis') # 情感分析

 - result = classifer('I love you')
   result

 - result = classifer('thank you')
   result

 - result = classifer('shut up')
   result

 - result = classifer('遥遥领先')
   result

 - # 中文模型 大众点评的亿万条数据训练出来的
   classifer = pipeline('sentiment-analysis', model="uer/roberta-base-finetuned-dianping-chinese") # pipeline 派发一个任务

 - result = classifer('遥遥领先')
   result