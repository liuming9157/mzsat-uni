<template>
	<view>
		<view class="content" v-for="(item,index) in tiku" :key='index'>
			<view>
				{{item.title}}
			</view>
			<view class="answer" @click="goAnswer(item.id)">
				答案
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tiku: []
			}
		},
		onLoad() {
			this.loadData()
		},
		methods: {
			async loadData() {
				let res = await this.$get('/sat/tiku');
				this.tiku = res.data;
			},
			goAnswer(id) {
				uni.navigateTo({
					url: `../answer/answer?id=${id}`
				})
			}
		},
		onShareAppMessage() {
			return{
				title:'明志|赛达答案助手',
				path:'/pages/index/index'
			}
			
		}
	}
</script>

<style lang="scss">
	page {
		display: flex;
		flex-direction: column;
		background-color: #13227a;
	}


	.content {
		width: 690upx;
		margin: 30upx;
		display: flex;
		justify-content: space-between;
		background-color: white;

		view {
			width: 345upx;
			height: 80upx;
			font-size: 34upx;
			line-height: 80upx;
			text-align: center;

		}
		.answer{
			color: blue;
		}

	}
</style>
