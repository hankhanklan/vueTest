<!-- 只能有一个跟标签 -->
<template>
    <div>
        <span>---{{mingzi}}---</span>
        <p>{{yuanfen}}</p>
        <button v-on:click="$emit('enlarge-text')">
            Enlarge text
        </button>
    </div>
</template>
<script>
export default {
    props:{
        mingzi:String
    },
    data:function (){
        return {
            yuanfen:'yyynnn'
        }
    }
}
</script>
<!-- scoped -- css样式只能用于当前的Vue组件，可以使组件的样式不相互污染 -->
<style scoped>

</style>