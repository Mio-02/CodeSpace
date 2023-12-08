# 路由传参

1. this.$router.push(`/home/${this.account}`)
需要在路由配置中声明该路径可以携带参数 '/home/:username'

2. this.$router.push({path: '/home', query: {username: this.account}})
它会将参数以？的形式拼接在url中（用的多）

3. this.$router.push({name: 'home', params: {username: this.account}})
需要在路由配置中声明该路径可以携带参数 '/home/:username'

4. this.$router.push({path: '/home', hash: `#${this.account}`})
参数前面会多一个#，所以可以用.slice(1)删除掉#