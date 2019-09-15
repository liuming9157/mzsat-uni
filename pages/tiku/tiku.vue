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
		<!-- #ifdef MP-BAIDU -->
		<view class="tieba" @click="callTieba">
			贴吧
		</view>
		<!-- #endif -->
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
			},
			// #ifdef MP-BAIDU
			callTieba() { 
			    let data = {
			        third_app_id: 'YNxzVbxluAEfVqvznTu8jLtMy9oltcjs',
			        third_app_name: '明志赛达',
			        third_app_avatar: 'http://cdn.mzyun.tech/mzyun.png', 
			        third_app_pic: 'http://cdn.mzyun.tech/sat-haibao.png',
			        third_app_link: '/pages/index/index' 
			    }
			    let dataStr = encodeURIComponent(JSON.stringify(data)); 
			    swan.navigateToSmartProgram({ 
			        appKey: 'flFqXclepWs7RdugAszy9eERL7G5dS0I', 
			        path: `/pages/frshistory/frshistory?extradata=${dataStr}`, 
			        extraData: {
			            from: 'mzsat' 
			        },
			        success(res) {
			            swan.showToast({
							title:'分享成功'
						})
			        }
			    })
			}
			// #endif
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
	.tieba{
		position: fixed;
		bottom: 20upx;
		right: 0;
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		background-color: #007AFF;
		color: white;
		font-size: 28upx;
		line-height: 120upx;
		text-align: center;
	}
</style>
