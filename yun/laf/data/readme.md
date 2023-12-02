# 后端数据逻辑

- 查询
    - 数据库.collection(name).get()
    - where 条件查询
    - count
        注册 name + password 
        所以注册之前要进行where查询，解析出total，如果名字被占用就不能注册
        {total} = await where({name}).count()
        if (total >= 0) { return }
    - limit
        如果要查询第5页：
        .offset((page-1)*size).limit(size) 