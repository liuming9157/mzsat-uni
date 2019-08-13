import Vue from 'vue'
import App from './App'
import util from './util.js'

Vue.config.productionTip = false
Vue.prototype.$get=util.get
Vue.prototype.$prePage=util.prePage

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
