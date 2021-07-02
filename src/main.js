import Vue from 'vue'
import App from './App.vue'

import "./assets/style/icon.css"
import "./assets/style/reset.css"
import "./assets/style/border.css"

import fastClick from 'fastclick'
fastClick.attach(document.body)

import moment from 'moment'; //导入模块
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.prototype.$moment = moment;//赋值使用

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')