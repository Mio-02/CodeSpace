# AIGC 方向

- GPTs 应用商店刚刚正式发布
  有很大的商机
  找到一家有AIGC思维的公司加入，例如AI电商

- python
  - LangChain
  - 后端 API Flask

- 生成代码 开发提效
  - Copilt
  - SQL 如何生成及分析

- SQL不是查询或数据分析的必需了
  AIGC 自然语言处理

- 新的数据库查询范式
  - 提出问题（用户）
  - chatgpt 自然语言处理能力 生成SQL 新手快速上手 学习能力
  - 自动执行SQL并拿到数据查询结果，这就是 AI应用 或者叫 AI Agent
  - 根据用户的需求，生成json还是图表，都是小菜一碟
  - 得到答案，结束
可以让任何人拥有数据分析的能力。





-----
# sqlite --- 一个轻量的关系型数据库，大佬一般在测试产品想法的时候用它
# 本地数据库 python自带
import sqlite3
# 数据库连接句柄
conn = sqlite3.connect('FlowerShop.db')
# 游标
cursor = conn.cursor()
# 执行sql sqlite完全支持sql三大范式
cursor.execute('''
  CREATE TABLE FLOWERS(
    ID INTEGER PRIMARY KEY,
    Name TEXT NOT NULL,
    Type TEXT NOT NULL,
    Source TEXT NOT NULL,
    PurchasePrice REAL,
    SalePrice REAL,
    StockQuantity INTEGER,
    SoldQuantity INTEGER,
    ExpiryDate DATE,
    Description TEXT,
    EntryDate DATE DEFAULT CURRENT_DATE
  );
''')
# 给一些假数据
# 假数据指的是在开发和测试过程中使用的虚构数据，用于模拟真实数据的特征和结构。这些数据通常是为了测试软件的功能、性能和稳定性而创建的，以便在没有真实数据的情况下进行测试和开发。假数据通常包括各种类型的数据，如姓名、地址、日期、数字等，以及一些随机生成的数据，以便模拟真实环境中的数据情况。在开发和测试过程中，假数据可以帮助开发人员和测试人员快速构建测试环境，进行测试和调试，而不必依赖于真实数据。
flowers = [ ('Rose', 'Flower', 'France', 1.2, 2.5, 100, 10, '2023-12-31', 'A beautiful red rose'), ('Tulip', 'Flower', 'Netherlands', 0.8, 2.0, 150, 25, '2024-12-31', 'A colorful tulip'), ('Lily', 'Flower', 'China', 1.5, 3.0, 80, 5, '2023-12-31', 'An elegant white lily'), ('Daisy', 'Flower', 'USA', 0.7, 1.8, 120, 15, '2023-12-31', 'A cheerful daisy flower'), ('Orchid', 'Flower', 'Brazil', 2.0, 4.0, 50, 2, '2023-12-31', 'A delicate purple orchid')]
# 把假数据插入数据库
for flower in flowers:
  cursor.execute('''
    INSERT INTO Flowers(Name, Type, Source, PurchasePrice, SalePrice, StockQuantity, SoldQuantity, ExpiryDate, Description ) 
    VALUES(?,?,?,?,?,?,?,?,?);               
  ''', flower)
# 提交这次事务
conn.commit()
# 关闭数据库连接 为了并发 减少线程数
conn.close()
-----

-----
# text2SQL
# 安装openai
!pip install openai==0.28.1
# 安装AI应用开发框架
!pip install langchain
# 安装了langchain-experimental包，该包包含了一些最新的实验性功能和工具
!pip install langchain-experimental
-----

-----
# langchain 将LLM和用户间chain起来 连数据库
# langchain 有一个模块叫utilities 工具库
from langchain.utilities import SQLDatabase
# 大模型模块
from langchain.llms import OpenAI
from langchain_experimental.sql import SQLDatabaseChain
# 拿到数据库对象
db = SQLDatabase.from_uri("sqlite:///FlowerShop.db")
# 返回OpenAI实例
llm = OpenAI(temperature=0, verbose=True, api_key='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')
# 将数据库对象和OpenAI实例通过SQLDatabaseChain进行链式连接
db_chain = SQLDatabaseChain.from_llm(llm, db, verbose=True)
response = db_chain.run("有多少种不同的鲜花？")
print(response)
-----

-----
response = db_chain.run("哪种鲜花的存货数量最少？")
print(response)
-----
