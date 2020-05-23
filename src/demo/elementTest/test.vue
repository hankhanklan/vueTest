<style scoped>
    span{
        background: red;
        display: inline-block;
        padding: 10px;
        color: #fff;
        margin: 10x 0;
    }
    .changeColor span{
        background: green;
    }
    .changeLength span::after{
        content: '嫌疑人';
        margin-left: 10px;
    }

    /** 默认的actvie类名 **/
    .router-link-active{
        color: red;
    }

    /** 修改后的active类名 **/
    .active{
        color: green;
    }

    /** 全部修改为这个类名 new Vue-router中设置**/
    /** 标签中设置  优先级大于  new Vue-router中设置**/
    .aaaa{
        color: blue;
    }
</style>
<template>
    <div>
        <button v-on:click="zhanli+=5">充值氪金<br></button>
        <button @click="zhanli>0?zhanli-=6:zhanli=0">客服退款</button>
        <p v-if="zhanli>0">我的战力是{{zhanli}}{{unit}}</p>
        <p v-else>玩家已退游</p>

        <!-- 双向数据帮到 -->
        <label>你的名字</label>
        <input v-model="ganmename">
        <span>{{ganmename}}</span>

        <!-- 属性绑定 动态绑定class-->
        <br><br>
        <button @click="btncolor=!btncolor">改变颜色</button>
        <button @click="btnlength=!btnlength">改变长度</button>
        <div v-bind:class="compClasses">
            <span>你好啊！</span>
        </div>
        <a v-bind:href="url">百度一下</a>

        <br><br>
        <br><br>
        <br><br>
        <!-- v-on 传值问题-->
        <!-- 1.方法不需要参数 方法后的()可以不添加，如果方法本身有一个参数,那会默认将原生的event传递进去 -->
        <!-- 2.如果需要某个参数同时需要event，可以通过$event传入event参数 -->
        <div @click="clickdiv">
            <!-- .stop  调用event.stopPropagation()// -->
            <button @click.stop="tteesstt('112233',$event)">v-on 传值问题</button>
        </div>

        <!-- vue-router -->
        <br>
        <p>这里是router-link标签切换页面</p>
        <br>
        <router-link to="./routerLeft" tag="button" replace>显示左页面</router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="./routerRight" tag="button" replace active-class="active">显示右页面</router-link>
        <router-view></router-view>
        <br>
        <br>
        <p>这里是事件回调 调用touter方法切换页面</p>
        <button v-on:click="leftClick">显示左页面</button>
        <button v-on:click="rightClick">显示显示右页面左页面</button>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return {
            zhanli:200,
            unit:'k',
            ganmename:'',
            btncolor:false,
            btnlength:false,
            url:'https://www.baidu.com'
        }
    },
    methods: {
        /* 这是增强写法 */
        tteesstt(parameter,event) {
            window.console.log(parameter,event)
        },
        clickdiv() {
            window.console.log('事件冒泡了')
        },

        /* 这是正常写法 */
        leftClick: function(){
            // this.$router.push('./routerLeft')
            this.$router.replace('./routerLeft')
        },
        rightClick: function(){
            this.$router.replace('./routerRight')
        }
    },
    computed: {
        compClasses() {
            return {
                changeColor:this.btncolor,
                changeLength:this.btnlength
            }
        }
    }
}
</script>