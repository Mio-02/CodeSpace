import baseUrl from './request.js'

// 首页的接口请求

// 获取banner图的接口
export const apiGetBanner = (data) => {
	return uni.request({
		url: baseUrl + '/banner',
		method: 'GET',
		data: data
	})
}

// 获取首页发现的圆形图标
export const apiGetBall = () => {
	return uni.request({
		url: baseUrl + '/homepage/dragon/ball',
		method: 'GET'
	})
}

// 获取推荐歌单
export const apiGetRecommendList = () => {
	return uni.request({
		url: baseUrl + '/recommend/resource',
		method: 'GET'
	})
}