<template>
    <div id="secondChild">
        <h2>secondChild组件</h2>
        <p>从firstChild接收字符串参数：{{msg}}</p>
    </div>
</template>

<script>
    import bus from '../assets/eventBus';
    export default{
        data(){
            return {
                msg:'这是一个默认值'
            }
        },
        /*
        *   mounted:是一个Vue生命周期中的钩子函数，简单点说就类似于jquery的ready，Vue会在文档加载完毕后调用mounted函数。
        *   $on:监听当前实例上的自定义事件(此处当前实例为bus)。事件可以由$emit触发，回调函数会接收所有传入事件触发函数($emit)的额外参数。
        */
        mounted(){
            var self = this;
            bus.$on("userDefinedEvent",function(msg){
                self.msg = msg;
            })
        }
    }
</script>
<style>
    html{
        color: #333;
    }
</style>
