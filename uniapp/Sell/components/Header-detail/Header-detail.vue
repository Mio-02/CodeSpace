<template>
	<transition name="fade">
		<view class="header-detail">
			<view class="detail-wrapper">
				<view class="detail-main">
					<p class="name">新时代幸福食堂</p>
					<view class="star">
						<i class="iconfont icon-wuxinghaoping"></i>
					</view>
				</view>
				<view class="discount">
					<p class="name">————— 优惠信息 —————</p>
					<view class="first-floor">
						<p class="floor">一楼自助餐：</p>
						<view class="discount1">
							<Support-icon :size="1" :type="1"/>
							<span class="text"> 60岁以上老年人享8折优惠</span>
						</view>
						<view class="discount2">
							<Support-icon :size="1" :type="2"/>
							<span class="text"> 90岁以上老年人免费</span>
						</view>
						<view class="discount3">
							<Support-icon :size="1" :type="1"/>
							<span class="text"> 50年以上党龄老党员享七折优惠</span>
						</view>
						<view class="discount4">
							<Support-icon :size="1" :type="2"/>
							<span class="text"> 离休老干部免费</span>
						</view>
					</view>
					<view class="second-floor">
						<p class="floor">二楼桌餐：</p>
						<view class="discount1">
							<Support-icon :size="3" :type="1"/>
							<span class="text1"> 60岁以上老人生日当天享8折优惠</span>
						</view>
						<view class="discount2">
							<Support-icon :size="3" :type="1"/>
							<span class="text"> 老年团体就餐享8折优惠</span>
						</view>
					</view>
				</view>
				<view class="notice">
					<p class="name">————— 商家公告 —————</p>
					<view class="detail">
						<span class="text">由于春假放假等原因，新时代幸福食堂从今日起暂停供应快餐，仅提供点餐服务，谢谢理解。快餐服务将于2月19日（正月初十）恢复供应。</span>
					</view>
				</view>
			</view>
			<view class="detail-close" @click.stop="hideDetail">
				<i class="iconfont icon-guanbi"></i>
			</view>
		</view>
	</transition>
</template>

<script>
	export default {
		name:"Header-detail",
		data() {
			return {
				
			};
		},
		methods: {
			hideDetail() { // 子父组件通讯
				this.$emit('hide', false) // 创建一个hide事件
			}
		}
	}
</script>

<style lang="less" scopeds>
	@import '@/common/style/variable.less';
	
	.header-detail{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: @color-background-s;
		color: @color-white;
		backdrop-filter: blur(10px); // 底层虚化
		&.fade-enter-from, &.fade-leave-to{
			opacity: 0;
			background: @color-background;
		}
		&.fade-enter-active, &.fade-leave-active{
			transition: all 0.5s ease;
		}
		
		.detail-wrapper{
			.detail-main{
				.name{
					width: 100%;
					height: 30px;
					position: fixed;
					top: 100px;
					left: 50%;
					margin-left: -50%;
					text-align: center;
					line-height: 30px;
					font-size: 18px;
				}
				.star{
					width: 100%;
					height: 30px;
					position: fixed;
					top: 140px;
					left: 50%;
					margin-left: -50%;
					text-align: center;
					line-height: 30px;
					font-size: 16px;
					color: orange;
				}
			}
			
			.discount{
				.name{
					width: 100%;
					height: 30px;
					position: fixed;
					top: 175px;
					left: 50%;
					margin-left: -50%;
					text-align: center;
					line-height: 30px;
					font-size: 13px;
				}
				.first-floor{
					.floor{
						width: 100%;
						height: 10px;
						position: fixed;
						top: 210px;
						padding: 0 100px;
						text-align: left;
						font-size: 12px;
					}
					.discount1{
						width: 100%;
						height: 10px;
						position: fixed;
						top: 230px;
						padding: 0 100px;
						text-align: left;
						font-size: 12px;
					}
					.discount2{
						width: 100%;
						height: 10px;
						position: fixed;
						top: 250px;
						padding: 0 100px;
						text-align: left;
						font-size: 12px;
					}
					.discount3{
						width: 100%;
						height: 10px;
						position: fixed;
						top: 270px;
						padding: 0 100px;
						text-align: left;
						font-size: 12px;
					}
					.discount4{
						width: 100%;
						height: 10px;
						position: fixed;
						top: 290px;
						padding: 0 100px;
						text-align: left;
						font-size: 12px;
					}
				}
				.second-floor{
					.floor{
						width: 100%;
						height: 10px;
						position: fixed;
						top: 315px;
						padding: 0 100px;
						text-align: left;
						font-size: 12px;
					}
					.discount1{
						width: 100%;
						height: 10px;
						position: fixed;
						top: 335px;
						padding: 0 100px;
						text-align: left;
						font-size: 12px;
					}
					.discount2{
						width: 100%;
						height: 10px;
						position: fixed;
						top: 355px;
						padding: 0 100px;
						text-align: left;
						font-size: 12px;
					}
				}
			}
			
			.notice{
				.name{
					width: 100%;
					height: 30px;
					position: fixed;
					top: 375px;
					left: 50%;
					margin-left: -50%;
					text-align: center;
					line-height: 30px;
					font-size: 13px;
				}
				.detail{
					width: 50%;
					height: 10px;
					position: fixed;
					top: 410px;
					text-align: left;
					font-size: 12px;
					padding: 0 100px;
					line-height: 15px;
				}
			}
		}
		
		.detail-close{
			width: 30px;
			height: 30px;
			position: fixed;
			bottom: 30px;
			left: 50%;
			margin-left: -15px;
			text-align: center;
			line-height: 30px;
		}
	}
</style>