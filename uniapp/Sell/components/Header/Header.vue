<template>
	<view class="header" @click="showDetail">
		<view class="content-wrapper">
			<view class="avatar">
				<img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="" />
			</view>
			<view class="content">
				<view class="title">
					<span class="brand"></span>
					<span class="name">新时代幸福食堂</span>
				</view>
				<view class="description">每日新鲜快餐供应</view>
				<view class="support">
					<Support-icon :size="1" :type="1"/>
					<span class="text">多种优惠等你来</span>
				</view>
			</view>
			<view class="support-count">
				<span class="count">6个</span>
				<i class="iconfont icon-youjiantou1"></i>
			</view>
		</view>
		<view class="bulletin-wrapper">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">由于春假放假等原因，新时代幸福食堂从今日起暂停供应快餐，仅提供点餐服务，谢谢理解。快餐服务将于2月19日（正月初十）恢复供应。</span>
			<i class="iconfont icon-youjiantou1"></i>
		</view>
		<view class="bg" style="background-image: url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg);"></view>
		<Header-detail v-show="detailShow" @hide="handle"/>
	</view>
</template>

<script>
	export default {
		name:"Header",
		data() {
			return {
				detailShow: false
			};
		},
		methods: {
			showDetail() {
				this.detailShow = true
			},
			handle(val) {
				// console.log('子组件发布了一个事件hide，值为：', val);
				this.detailShow = val
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '@/common/style/variable.less';
	// @import '../../common/style/mixin.less';
	
	.header{
		background: @color-background-ss;
		position: relative;
		.content-wrapper{
			display: flex;
			padding: 24px 12px 18px 24px;
			position: relative;
			.avatar{
				width: 64px;
				height: 64px;
				img{
					width: 100%;
					border-radius: 2px;
				}
			}
			.content{
				flex: 1;
				margin-left: 16px;
				color: @color-white;
				.title{
					display: flex;
					align-items: center;
					margin-bottom: 8px;
					margin-top: 2px;
					.brand{
						width: 30px;
						height: 18px;
						background-image: url('../Header/picture/brand@2x.png');
						background-size: cover;
					}
					.name{
						margin-left: 6px;
						font-size: @fontsize-large;
						font-weight: bold;
					}
				}
				.description{
					font-size: @fontsize-small;
					margin-bottom: 8px;
				}
				.support{
					display: flex;
					align-items: center;
					.text{
						font-size: @fontsize-small-s;
						margin-left: 4px;
					}
				}
			}
			.support-count{
				position: absolute;
				right: 12px;
				bottom: 14px;
				padding: 0 8px;
				height: 24px;
				// line-height: 24px;
				text-align: center;
				background-color: @color-background-sss;
				border-radius: 14px;
				display: flex;
				align-items: center;
				color: @color-white;
				.count{
					font-size: @fontsize-small-s;
				}
				.iconfont{
					font-size: @fontsize-small-s;
					margin-left: 2px;
				}
			}
		}
		.bulletin-wrapper{
			display: flex;
			height: 28px;
			padding: 0 8px;
			background-color: @color-background-sss;
			align-items: center;
			color: @color-white;
			.bulletin-title{
				// width: 22px; // 用这个在弹性容器里会被挤，所以用下面这个
				flex: 0 0 22px;
				height: 12px;
				background-image: url(../Header/picture/bulletin@2x.png);
				background-size: 100% 100%;
			}
			.iconfont{
				flex: 0 0 10px;
				font-size: @fontsize-small-s;
			}
			.bulletin-text{
				flex: 1;
				margin-left: 4px;
				font-size: @fontsize-small-s;
				white-space: nowrap; // 强制单行显示 
				overflow: hidden; // 超出则隐藏
				text-overflow: ellipsis; // 超出则显示省略号
			}
		}
		.bg{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-size: 100% 100%;
			z-index: -1;
			filter: blur(10px);
		}
	}
</style>