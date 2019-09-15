const root = 'https://promotion.mzsat.cn/api'
const get = (url, data = '', method = 'GET') => {
	return new Promise(resolve => {
		uni.request({
			url: root + url,
			method: method,
			data: data,
			success(res) {
				resolve(res.data)
			},
			fail(res) {
				console.log(res.data)
			}
		})
	})
}
const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
	
}
//简化uni.showtoast
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
export default {
	get,
	prePage,
	msg
}
