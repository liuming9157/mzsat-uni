<template>
	<view>
		<view class="content">
			<view>
				题号
			</view>
			<view>
				答案
			</view>
			<view v-for="(item,index) in answer" :key='index'>
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'answer',
		props:{
			answer:{
				type:String|Array,
				default(){return []}
			}
		},
		
	}
</script>

<style lang="scss">
	.content{
		margin: 30upx;
		width:690upx ;
		display: flex;
		flex-wrap: wrap;
		view{
			width: 345upx;
			height: 50upx;
			font-size: 32upx;
			line-height: 50upx;
			text-align: center;
			border-bottom: 1upx solid #000000;
		}
	}
</style>
