<template>
	<view class="index">
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
				<view class="search">
					<uni-search-bar @confirm="search" @input="input" placeholder="搜索歌曲 \ 歌手 \ MV"></uni-search-bar>
				</view>
			</template>
		</wyheader>
		
		<!-- menu -->
		<menuLeft />

		<!-- banner -->
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#eee" indicator-active-color="#d81e06" circular>
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item">
						<image :src="item.pic" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- balls -->
		<view class="balls">
			<view class="ball-item" v-for="item in state.balls" :key="item.id">
				<view class="icon">
					<image :src="item.iconUrl" mode="aspectFill"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		
		<!-- 推荐歌单 -->
		<songList :list="state.recommendList" title="推荐歌单" />
		
		<!-- 推荐歌曲 -->
		<recommendSong :list="state.recommendSongs" />
		
		<!-- 雷达歌单 -->
		<songList :list="state.personalizedList" title="Mio的雷达歌单" />
		
	</view>
</template>

<script setup>
	import { apiGetBall, apiGetBanner, apiGetRecommendList, apiGetRecommendSongs, apiGetPersonalizedList } from '@/api/index.js'
	import { onLoad } from '@dcloudio/uni-app'
	import { reactive } from 'vue';
	
	const state = reactive({
		banners: [],
		balls: [],
		recommendList: [],
		recommendSongs: [],
		PersonalizedList: []
	})
	
	onLoad(() => {
		getBanner()
		getBall()
		getRecommendList()
		getRecommendSongs()
		getPersonalizedList()
	})
	
	// 获取benner图
	const getBanner = () => {
		apiGetBanner({type: 2}).then(res => {
			console.log(res.data.banners);
			state.banners = res.data.banners
		})
	}
	
	// 获取圆形图标
	// const getBall = () => {
	// 	apiGetBall().then(res => {
	// 		console.log(res);
	// 	})
	// }
	// 或者这种写法：
	const getBall = async() => {
		const { data: { data: balls } } = await apiGetBall()
		console.log(balls);
		// 把数据源存起来
		state.balls = balls
	}
	
	// 获取推荐歌单
	const getRecommendList = async() => {
		const { data: { recommend: recommend } } = await apiGetRecommendList()
		console.log(recommend);
		state.recommendList = recommend
	}
	
	// 获取推荐歌曲
	const getRecommendSongs = async() => {
		const res = await apiGetRecommendSongs()
		console.log(res.data.data.dailySongs);
		state.recommendSongs = res.data.data.dailySongs
	}
	
	// 获取雷达歌单
	const getPersonalizedList = async() => {
		const res = await apiGetPersonalizedList()
		console.log(res.data.result);
		state.personalizedList = res.data.result
	}
	
</script>

<style lang="scss" scoped>
.index {
	padding: 0 15rpx;
	.search {
		width: 500rpx;
		height: 60rpx;
		:deep(.uni-searchbar){
			height: 100%;
			padding: 0;
			.uni-searchbar__box{
				padding: 0;
			}
		}
	}
	.banner{
		.swiper-item{
			height: 100%;
			border-radius: 15px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.balls{
		display: flex;
		overflow-x: scroll;
		margin: 30rpx 0;
		.ball-item{
			flex: 0 0 20%;
			font-size: 20rpx;
			text-align: center;
			.icon{
				width: 70rpx;
				height: 70rpx;
				margin: 0 auto;
				margin-bottom: 14rpx;
				background-color: $wy-color;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
}
</style>