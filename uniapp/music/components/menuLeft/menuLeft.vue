<template>
	<view class="menu-left" :class="isShow ? 'show' : 'hide'">
		<!-- userInfo -->
		<view class="menu-hd">
			<view class="user-info">
				<view class="avatar">
					<image class="pic" src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="username">
					<text>Mio</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view>
			<!-- 扫一扫 -->
			<view class="qricon">
				<uni-icons type="scan" size="24"></uni-icons>
			</view>
		</view>
		
		<view class="menu-bd">
			hello
		</view>
	</view>
	<view class="menu-mask" @click="hideManu" :class="isShow ? 'showMask' : 'hideMask'"></view>
</template>

<script setup>
	import { ref } from 'vue';
	const isShow = ref(false)
	
	const hideManu = () => {
		isShow.value = false
	}
</script>

<style lang="scss" scoped>
.menu-left{
	
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	width: 620rpx;
	height: 100%;
	padding: 30rpx;
	box-sizing: border-box;
	
	background-color: #fff;
	box-shadow:5px 0 10rpx #eee; 
	
	.menu-hd{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.user-info{
			display: flex;
			.avatar{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				overflow: hidden;
				.pic{
					width: 100%;
					height: 100%;
				}
			}
			.username{
				margin-left: 20rpx;
			}
		}
	}
}
.menu-mask{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgb(0,0,0,0.5);
		z-index: 1000;
	}
</style>