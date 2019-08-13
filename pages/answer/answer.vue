<template>
	<view>
		<uni-segmented-control :current="current" :values="array" @clickItem="changeAnswer" style-type='text' active-color='#13227a'></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<answer :answer='answer.reading'></answer>
			</view>
			<view v-show="current === 1">
				<answer :answer='answer.writing'></answer>
			</view>
			<view v-show="current === 2">
				<answer :answer='answer.math1'></answer>
			</view>
			<view v-show="current === 3">
				<answer :answer='answer.math2'></answer>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control.vue';
	import answer from '@/components/answer.vue';
	export default {
		components: {
			uniSegmentedControl,
			answer
		},
		data() {
			return {
				current: 0,
				array: ['阅读', '文法', '数学1', '数学2'],
				answer: {}
			};
		},
		onLoad(options) {
			let id = options.id;
			let answer= this.$prePage().tiku.find(item => item.id == id)
			answer.reading=answer.reading.split(',')
			answer.writing=answer.writing.split(',')
			answer.math1=answer.math1.split(',')
			answer.math2=answer.math2.split(',')
			this.answer=answer
			uni.setNavigationBarTitle({
				title:this.answer.title
			})
		},
		methods: {
			changeAnswer(index) {
				if(this.current!=index){
					this.current=index
				}
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

</style>
