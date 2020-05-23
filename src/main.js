import Vue from 'vue'
import App from './App.vue'  
// import Shopping from './demo/shopping' // 测试shopping 可打开  再修改入口引用

import router from './router' //写目录不写文件名 会自动寻找该目录下的index文件
import store from './store' // VueX
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
    router: router,
    render: h => h(App),
    store // store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
}).$mount('#app')

// Vue.components('LanHaoHao',{
//   props:['mingzi'],
//   template:`<div class="blog-post">
//     <h3>{{ post.title }}</h3>
//     <button>
//       Enlarge text
//     </button>
//     <div v-html="post.content"></div>
//   </div>`
// })