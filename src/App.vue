<template>
  <div id="app" :style="{fontSize:postFontSize+'em'}">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="欢迎来到你的Vue页面"/>
    <LanHaoHao v-on:enlarge-text="postFontSize += 0.1" mingzi="这是不是一个缘分呢？"/>
    <LanHaoHao v-on:enlarge-text="postFontSize += 0.1" mingzi="委婉的拒绝"/>
    <LanHaoHao v-on:enlarge-text="postFontSize += 0.1" mingzi="坦然的接受"/>

    <p>------------------兄弟组件传值------------------------</p>
    <firstChild></firstChild>
    <secondChild></secondChild>
    <element-test></element-test>
    <!-- 测试table组件暂时注释 -->
    <Test></Test>
    <router-link to="./tableTest" tag="button" replace>table组件</router-link>
    <router-view></router-view>

    <!-- 计算属性 -->
    <Testt></Testt>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LanHaoHao from './components/LanHaoHao.vue'
import firstChild from './components/firstChild.vue'
import secondChild from './components/secondChild.vue'
import elementTest from './demo/elementTest/elementTest.vue'
import Test from './demo/elementTest/test.vue'
import Testt from './demo/elementTest/test1.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    LanHaoHao,
    firstChild,
    secondChild,
    'element-test':elementTest,
    Test,
    Testt,
  },
  data:function(){
    return {
      postFontSize:1
    }
  },
  beforeCreate:function(){
    window.console.log('（创建前） 在数据观测和初始化事件还未开始')
  },
  created:function(){
    window.console.log('（创建后） 完成数据观测，属性和方法的运算，初始化事件，$el属性还没有显示出来')
  },
  beforeMount:function(){
    window.console.log('（载入前） 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上')
  },
  mounted:function(){
    window.console.log('（载入后） 在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互')
    window.console.log(this.$store.state.name)
    this.$store.commit('show','偏向远方')
    window.console.log(this.$store.state.name)
     this.$store.commit('show','无尽黑夜')
    window.console.log(this.$store.state.name)
  },
  beforeUpdate:function(){
    window.console.log('（更新前） 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。')
  },
  updated:function(){
    window.console.log('（更新后） 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。')
  },
  beforeDestroy:function(){
    window.console.log('（销毁前） 在实例销毁之前调用。实例仍然完全可用。')
  },
  destroyed:function(){
    window.console.log('（销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
