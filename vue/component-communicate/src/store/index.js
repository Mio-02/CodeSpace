import { createStore } from "vuex";

const store = createStore({
  state() { // 等同于data数据源，只不过state叫仓库里的数据源
    return {
      lists: ['html', 'css', 'js']
    }
  },
  mutations: { // 等同于methods
    listsAdd(state, val) {
      if(!val) return
      // 写法有一点点区别，不能用this，得用形参
      state.lists.push(val)
    }
  }
})

export default store