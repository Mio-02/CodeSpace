# LangChain

- OpenAI
  getCompletion 封装方法 调用接口
- 现在用的最多的AI框架
  标准化LLM开发流程,
  简化LLM开发
  LLM随时换模型

- 开服AI应用
  更多地聚焦于业务，让我们可以快速开发

- 聊天工具 业务

- 如何向开源项目提交代码
  - fork 大佬的项目
    自己的仓库有提交和修改权限
  - 发现大佬的bug或他要我们做的job
    把活干完，完成测试
    add commit push
  - 提交到我们自己的远程仓库
  - 点进这次提交 create pull request
    描述问题，怎么解决的 截图，提交
  - 大佬收到信息后检查没有问题，merge

- AI或Laf类的
- 翻译
- 合作



# Google Colab:
-----
# 极简AI开发框架
!pip install langchain==0.0.316
-----
!pip install openai==0.28.1
-----
# LangChain怎么优化OpenAI开发的
# 聊天模型：langchain.chat_models
from langchain.chat_models import ChatOpenAI
# 分为三种角色：system assistant user(human)

# HumanMessage：将你的问题传给他就好
from langchain.schema import HumanMessage
# 引入文件系统：
import os
# 设置环境变量，LangChain自动来拿
os.environ['OPENAI_API_KEY'] = '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'

chat = ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo")
# OpenAI接受的就是一个数组
response = chat([HumanMessage(content="Hello LangChain!")])
print(response)
-----
# 就能正常对话使用了，例：
response = chat([HumanMessage(content="我怎么给开源项目贡献代码")])
print(response)