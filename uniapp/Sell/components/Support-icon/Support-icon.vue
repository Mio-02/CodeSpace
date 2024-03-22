<template>
	<span class="support-icon" :class="iconClass"></span>
</template>

<script>
	export default {
		name:"Support-icon",
		props: { // 接收父组件传过来的值
			size: {
				type: String,
				default: '1'
			},
			type: {
				type: Number,
				default: 0
			}
		},
		computed: {
			iconClass() {
				const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
				return `icon-${this.size} ${classMap[this.type]}`
			}
		}
	}
</script>

<style lang="less" scoped>
	.support-icon{
		display: inline-block;
		background-repeat: no-repeat;
	}
	.icon-1{
		width: 12px;
		height: 12px;
		background-size: 100% 100%;
		&.decrease{
			background-image: url(../Support-icon/picture/decrease_1@2x.png);
		}
		&.discount{
			background-image: url(../Support-icon/picture/discount_1@2x.png);
		}
		&.special{
			background-image: url(../Support-icon/picture/special_1@2x.png);
		}
		&.invoice{
			background-image: url(../Support-icon/picture/invoice_1@2x.png);
		}
		&.guarantee{
			background-image: url(../Support-icon/picture/guarantee_1@2x.png);
		}
	}
	.icon-2{
		width: 12px;
		height: 12px;
		background-size: 100% 100%;
		&.decrease{
			background-image: url(../Support-icon/picture/decrease_2@2x.png);
		}
		&.discount{
			background-image: url(../Support-icon/picture/discount_2@2x.png);
		}
		&.special{
			background-image: url(../Support-icon/picture/special_2@2x.png);
		}
		&.invoice{
			background-image: url(../Support-icon/picture/invoice_2@2x.png);
		}
		&.guarantee{
			background-image: url(../Support-icon/picture/guarantee_2@2x.png);
		}
	}
	.icon-3{
		width: 12px;
		height: 12px;
		background-size: 100% 100%;
		&.decrease{
			background-image: url(../Support-icon/picture/decrease_3@2x.png);
		}
		&.discount{
			background-image: url(../Support-icon/picture/discount_3@2x.png);
		}
		&.special{
			background-image: url(../Support-icon/picture/special_3@2x.png);
		}
		&.invoice{
			background-image: url(../Support-icon/picture/invoice_3@2x.png);
		}
		&.guarantee{
			background-image: url(../Support-icon/picture/guarantee_3@2x.png);
		}
	}
	.icon-4{
		width: 12px;
		height: 12px;
		background-size: 100% 100%;
		&.decrease{
			background-image: url(../Support-icon/picture/decrease_4@2x.png);
		}
		&.discount{
			background-image: url(../Support-icon/picture/discount_4@2x.png);
		}
		&.special{
			background-image: url(../Support-icon/picture/special_4@2x.png);
		}
		&.invoice{
			background-image: url(../Support-icon/picture/invoice_4@2x.png);
		}
		&.guarantee{
			background-image: url(../Support-icon/picture/guarantee_4@2x.png);
		}
	}
</style>