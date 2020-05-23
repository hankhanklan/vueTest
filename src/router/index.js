// 配置路由相关信息
import VueRouter  from 'vue-router'
import Vue from 'vue' 

import routerLeft from '../components/routerLeft'
import routerRight from '../components/routerRight'
import tableTest from '../demo/elementTest/tableTest'
 
// 1.通过vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
    {
        path: '/', // 表明是根路径  不加/也可以
        redirect: '/routerLeft' //重定向
        // component: routerLeft
    },{
        // path: '/routerLeft', 
        // component: routerLeft
        path: '/routerLeft',
        name: 'aaa',
        component: routerLeft        
    },{
        path: '/routerRight',
        component: routerRight
    },{
        path: '/tableTest',
        component: tableTest
    }

]

const router = new VueRouter({
    // 配置路由和组件之间的对应关系
    routes,
    mode: 'history',
    linkActiveClass: 'aaaa',
})

// 3.将router对象传入到Vue实例
export default router  