import Vue from 'vue'
import App from './App.vue'
import EleForm from 'vue-ele-form/lib/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axios from 'axios'
import codemirror from './codemirror'

// options直接传递URL
Vue.prototype.$axios = axios
axios.interceptors.response.use(response => {
  return response.data
})

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(EleForm, {
  upload: {
    action: 'https://jsonplaceholder.typicode.com/posts', // 请求地址,
    data: { token: 'xxx' }, // 附带的参数,
    responseFn (response, file) {
      // 处理响应结果
      return file.url
    }
  },
  codemirror: codemirror,
  image: {
    limit: 2
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
