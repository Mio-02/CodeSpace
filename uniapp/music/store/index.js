import { createStore } from 'vuex'

export default createStore({
	state: {
		isShowMenu: false, // 控制菜单显示隐藏
		loginState: false // 是否登录
	},
	mutations: {
		changeIsShowMenu(state, flag) {
			state.isShowMenu = flag
		},
		changeLoginState(state, val) {
			state.loginState = val
		}
	}
})