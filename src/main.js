import Vue from 'vue'
import App from './App.vue'

import "./assets/style/icon.css"
import "./assets/style/reset.css"
import "./assets/style/border.css"

// 解决移动端点击延迟300ms问题
import fastClick from 'fastclick'
fastClick.attach(document.body)

// JavaScript 日期处理类库 文档地址 http://momentjs.cn/
import moment from 'moment'
moment.locale('zh-cn')
Vue.prototype.$moment = moment



Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')