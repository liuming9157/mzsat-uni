<template>
	<view>
		<image class="header-image" src="http://cdn.mzyun.tech/mzsat/b1.jpg"></image>
		<view class="form-section">
			<view class="form-item">
				<text class="form-title">姓名</text>
				<input class="form-input" type="text" value="" placeholder="输入姓名" v-model="sendData.name" />
			</view>
			<view class="form-item">
				<text class="form-title">手机</text>
				<input class="form-input" type="number" value="" placeholder="输入手机号" v-model="sendData.mobile" />
			</view>
			<view class="form-btn" @click="confirm">立即免费测试</view>
		</view>
		<image class="header-image" src="http://cdn.mzyun.tech/mzsat/b2.jpg" @click="makePhoneCall()"></image>
		<image class="logo-image" src="http://cdn.mzyun.tech/sat/mingzhi.jpg"></image>
		<view class="introduction-section">
			<view class="introduction-title">关于我们</view>
			<view class="introduction-detail">明志教育，由刘明老师联合十余位考试培训专家共同创立，专注于托福/SSAT/SAT/ACT/AMC/AP/SAT2等赴美留学考试的在线培训.因在线培训拥有不受时间、地点的限制，明志教育获得了大量美高学员的青睐！</view>
			<view class="introduction-detail">明志教育坚持“随时退费”、“定期反馈”两大制度。“随时退费”保证课程不满意3个工作日内无条件退费，从制度根源保证了教师授课质量，同时解决了家长教育消费的后顾之忧；“定期反馈”保证节节课反馈到家长，解决了低龄化培训中家长对孩子学习不放心的问题。</view>
			<view class="introduction-title">联系我们</view>
			<view class="introduction-detail">咨询电话：<text class="text-blue" @click="makePhoneCall">010-86466630</text></view>
			<view class="introduction-detail" v-for='(item,index) in contactList' :key='index'>{{item.name}}{{item.value}}
				<text class="text-gray" @click="makeCopy(item.value)">(点击复制)</text></view>
		</view>
		
		<image class="introduction-image1" src="http://cdn.mzyun.tech/mzedu.jpeg"></image>
		<image class="introduction-image1" src="http://cdn.mzyun.tech/mzsat/1.jpg"></image>
		<image class="introduction-image1" src="http://cdn.mzyun.tech/mzsat/2.jpg"></image>
		<image class="introduction-image1" src="http://cdn.mzyun.tech/mzsat/3.jpg"></image>
		<image class="introduction-image2" src="http://cdn.mzyun.tech/mzsat/4.jpg"></image>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				sendData: {},
				contactList: [{
						name: 'QQ群1(2000人):',
						value: '308463095'
					},
					{
						name: 'QQ群2(2000人):',
						value: '362066974'
					}, {
						name: '官网地址：',
						value: 'www.mzsat.cn'
					}
				]
			}
		},
		onLoad() {},
		methods: {
			confirm() {
				let data = this.sendData;
				if (!data.name) {
					this.$msg('请填写测试人姓名');
					return;
				}
				if (!/(^1[0-9]{10}$)/.test(data.mobile)) {
					this.$msg('请输入正确的手机号');
					return;
				}
				this.$msg('提交成功')
				this.$get('/sat/custom', data);

			},
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '010-86466630',
				})
			},
			makeCopy(e) {
				uni.setClipboardData({
					data: e,
				})
			}

		},
		onShareAppMessage() {
			return {
				title: '明志教育|专业的SAT培训机构',
				path: '/pages/index/index'
			}

		},
		onShow() {
			// #ifdef MP-BAIDU
			 swan.setPageInfo({
			            title: '免费SAT线上测试，出具备考复习方案',
			            keywords: '明志,SAT,免费,测试,学习方案',
			            description: '明志教育推出免费线上SAT测试，免费测试限额报名，赶紧来试试吧！还有学习报告喔！',
			            articleTitle: '明志教育推出免费线上SAT测试，免费测试限额报名，赶紧来试试吧！还有学习报告喔！',
			            releaseDate: '2019-01-02 12:01:30',
			            image: [
			                'http://cdn.mzyun.tech/mzsat/b1.jpg',
			                'http://cdn.mzyun.tech/mzsat/b2.jpg'
			            ],
			           
			            visit: {
			                pv: '1000',
			                uv: '100',
			                sessionDuration: '130'
			            },
			            likes: '75',
			            comments: '13',
			            collects: '23',
			            shares: '8',
			            followers: '35',
			            success: function () {
			                console.log('setPageInfo success');
			            },
			            fail: function (err) {
			                console.log('setPageInfo fail', err);
			            }
			        })
			// #endif
		}
	}
</script>

<style lang="scss">
	page {
		display: flex;
		flex-direction: column;

	}

	.header-image {
		width: 750upx;
		height: 350upx;
	}

	.form-item {
		display: flex;
		align-items: center;
		padding: 0 30upx;
		width: 690upx;
		height: 100upx;
		background: #fff;
		border-bottom: 1upx solid #F8F8F8;

		.form-title {
			width: 200upx;
			flex-shrink: 0;
			font-size: 32upx;
			color: black;
		}

		.form-input {
			flex: 1;
			font-size: 32upx;
			color: black;
		}

	}

	.form-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: 32upx;
		color: #fff;
		background-color: $theme-color;
		border-radius: 10upx;
	}

	.logo-image {
		width: 750upx;
		height: 250upx;
	}

	.introduction-section {
		margin: 30upx;
		width: 690upx;

		.introduction-title {
			font-size: 32upx;
			border-bottom: 1upx solid black;
			margin: 15upx 0;
		}

		.introduction-detail {
			font-size: 28upx;
			margin: 15upx 0;
		}
	}

	.text-blue {
		color: blue;
	}

	.text-gray {
		color: gray;
		font-size: 24upx;
	}
	.introduction-image1{
		width: 750upx;
		height: 500upx;
	}
	.introduction-image2{
		width: 750upx;
		height: 1000upx;
	}
</style>
