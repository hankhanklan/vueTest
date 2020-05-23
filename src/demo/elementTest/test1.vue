<template>
    <div>
        <p>总价：{{totalPrice}}</p>
        <p>vue 数组中有哪些方法是响应式</p>
        <ul>
            <li v-for="(item,i) in letters" :key="item+i">{{item}}</li>
        </ul>
        <button @click="btnClick">这是一个按钮</button>
    </div>
</template>
<style scoped>
ul,li{ padding:0;margin:0;list-style:none}
</style>
<script>
import Vue from 'vue'
export default {
    name:'',
    data(){
        return {
            books: [
                {id:'1', name:'人至贱则无敌', price: 120},
                {id:'2', name:'总有一天我会让你知道我来自长江的西方', price: 99},
                {id:'3', name:'不要脸成长史', price: 199},
            ],
            letters: ['a','b','c','d','e']
        }
    },
    methods: {
        // btnClick:function(){

        // }
        btnClick(){
            // vue 数组中有哪些方法是响应式的
            // 1.push方法
            // this.letters.push('干干干','干不动');

            // 2.pop方法
            // this.letters.pop();

            // 3.shift方法
            // this.letters.shift();

            // 4.unshift方法
            // this.letters.unshift('冲冲冲','腿软了');

            // 5.splice 删除/插入/替换 元素
            // 删除元素： 第二个参数传入你要删除几个元素（如果没有传就删除后面所有的）
            // this.letters.splice(2,1)
            // splice(start) 第一个参数表示从哪里开始
            // 第三个参数是替换元素 替换元素 长度大于原来 则添加
            // this.letters.splice(2,3,'干1','干2','干3','干4')
            


            // 6.sort
            // this.letters.sort()

            // 7.reverse
            // this.letters.reverse()

            // 注意：通过索引修改数组不是响应式的
            // this.letters[0] = 'fkfk'; 
            // 1.可以改成
            // this.letters.splice(0,1,'fkfk')
            // 2.可以改成
            // vue.set方法
            // set(要修改的对象,索引值，修改后的值)
            Vue.set(this.letters,0,'set修改的')
        },
    },
    computed: {
        totalPrice:{
            set:function(newValue){
                window.console.log('给计算属性设置值的时候调用'+newValue)
            },
            get:function(){
                let result = 0
                // ES5
                // for (let index = 0; index < this.books.length; index++) {
                //     result+= this.books[index].price
                // }

                // ES6
                // for (let i in this.books) {
                //     result+=this.books[i].price
                // } 

                // ES6
                for (let iterator of this.books) {
                    result+=iterator.price
                }
                return result
            }            
        }
    }
}
</script>