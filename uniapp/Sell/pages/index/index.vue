<template>
	<Header/>
	
	<view class="goods">
		<view class="goods-content">
			<view class="menu-wrapper">
				<ul>
					<li class="item" @click="selectMenu"><Support-icon :size="3" :type="2"/>热销榜</li>
					<li class="item">荤菜类</li>
					<li class="item">素菜类</li>
					<li class="item">汤类</li>
					<li class="item">盖浇饭</li>
					<li class="item">炒饭</li>
					<li class="item">饮品类</li>
					<li class="item">1</li>
					<li class="item">2</li>
				</ul>
			</view>
			<view class="foods-wrapper">
				右侧菜品
			</view>
		</view>
		
		<view class="cart-wrapper">购物车</view>
	</view>
	
</template>

<script>
	
</script>

<style lang="less" scoped>
	@import '../../common/style/variable.less';
	
	.goods{
		position: absolute;
		width: 100%;
		bottom: 46px;
		top: 138px;
		overflow: hidden;
		&-content{
			display: flex;
			height: 100%;
			
			.menu-wrapper{
				flex: 0 0 80px;
				background: @color-background-ssss;
				
				.item{
					padding: 0 14px;
					font-size: @fontsize-small;
					height: 54px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
			
			.foods-wrapper{
				flex: 1;
			}
		}
		
		.cart-wrapper{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 48px;
			background: #aaa;
		}
	}
</style>
