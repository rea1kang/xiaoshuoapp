import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

import 'lib-flexible/flexible.js'

//轮播图
import { Swipe, SwipeItem, Toast } from 'vant'

Vue.use(Swipe).use(SwipeItem).use(Toast)

//导入路由
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
	 router,
  render: h => h(App),
}).$mount('#app')
