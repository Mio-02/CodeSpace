<script>
	import baseUrl from './api/request.js'
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			// 判断用户是否登录:
			// 先读取本地看是否有历史登录所存的信息
			let key = uni.getStorageSync('cookie')
			if (!key) {
				// 取到仓库里的数据
				// console.log(this.$store);
				this.$store.commit('changeLoginState', false)
				return
			}
			// 获取登录状态
			uni.request({
				url: baseUrl + '/login/status',
				data: {
					cookie: key
				},
				success: (res) => {
					// console.log(res.data.data.account.id);
					let id = res.data.data.account.id
					if (id) {
						this.$store.commit('changeLoginState', true)
						this.getUser(key)
					}
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			getUser(key) {
				if (!key) return
				uni.request({
					url: baseUrl + '/user/account',
					data: {
						cookie: key
					},
					success: (res) => {
						// console.log(res);
						let nickname = res.data.profile && res.data.profile.nickname
						let id = res.data.profile && res.data.profile.userId
						let avatar = res.data.profile && res.data.profile.avatarUrl
						console.log(res.data.profile.nickname);
						console.log(res.data.profile.userId);
						console.log(res.data.profile.avatarUrl);
						// 存到仓库里去
						this.$store.commit('getUserInfo', { nickname, userId: id, avatar })
					}
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("//at.alicdn.com/t/c/font_4417061_s29bf3awujo.css");
</style>
