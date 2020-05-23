<template>
    <div id="app">
        <div v-if="books.length > 0">
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>书籍名称</th>
                        <th>出版日期</th>
                        <th>价格</th>
                        <th>购买数量</th>
                        <th>操作</th>
                    </tr>
                </tbody>
                <tr v-for="(item,index) in books" :key="item.name">
                    <!-- <td v-for="value in item" :key="value">{{value}}</td> -->
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.date}}</td>
                    <!-- <td>{{getFinalPrice(item.price)}}</td> -->
                    <!-- 过滤器filters -->
                    <td>{{item.price | showPrice}}</td>
                    <td>
                        <button @click="sub(index)" :disabled="item.count<=1">-</button>
                        {{item.count}}
                        <button @click="add(index)">+</button>
                    </td>
                    <td>
                        <button @click="removeHandle(index)">移除</button>
                    </td>
                </tr>
            </table>
            <h2>总价{{totalPrice | showPrice}}</h2>
        </div>        
        <h2 v-else>
            购物车为空
        </h2>
    </div>
</template>
<style scoped>
    table{
        border: 1px solid #e9e9e9;
        border-collapse: collapse;
        border-spacing: 0;
    }
    th,td{
        padding: 8px 16px;
        border: 1px solid #e9e9e9;
        text-align: left;
    }
    th{
        background-color: #f7f7f7;
        color: #5c6b77;
        font-weight: 600;
    }
</style>
<script>
export default {
    data(){
        return {
            books:[
                {
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },
                {
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 77.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2006-11',
                    price: 39.00,
                    count: 1
                },
                {
                    id: 4,
                    name: '《代码大全》',
                    date: '2006-6',
                    price: 128.00,
                    count: 1
                },
                {
                    id: 5,
                    name: '《程序员的一生》',
                    date: '2006-12',
                    price: 199.99,
                    count: 1
                },
            ]
        }
    },
    mounted (){
        const nums = [11,22,26,88,123,456,1234];
        // 一：普通实现
        //1.需求：取出所有小于100的数字
        // let newNums = []
        // for (let item of nums) {
        //     if(item < 100){
        //         newNums.push(item)
        //     }
        // }
        // window.console.log(newNums)

        //2.需求：将所有小于100的数字进行转化：全部*2
        // let new2Num = [];
        // for (let item1 of newNums) {
        //     new2Num.push(item1 * 2)
        // }
        // window.console.log(new2Num)

        //3.需求：将所有new2Num的值相加,得到最终的记过
        // let total = 0
        // for (let item3 of new2Num) {
        //     total += item3
        // }
        // window.console.log(total)

        // 二：函数式编程
        // 高阶函数使用
        // filter/map/reduce
        // filter 中的回调函数有一个要求：必须返回一个boolean值
        // true：当返回true时,函数内部会自动将这次回调的n加入到新的数组中
        // false： 当返回false时,函数内部会过滤这次的n 

        //1.需求：取出所有小于100的数字
        // filter使用
        // let newNums = nums.filter(function(n){
        //     return n < 100
        // })
        // window.console.log(newNums)

        //2.需求：将所有小于100的数字进行转化：全部*2
        // map使用
        // let new2Nums = newNums.map(function(n){
        //     return n * 2
        // })
        // window.console.log(new2Nums);

        // 3.reduce函数的使用
        // reduce作用：对数组中所有的内容进行汇总
        // let total = new2Nums.reduce(function(preValue,n){
        //     return preValue + n
        // },0)
        // window.console.log(total);

        // 第一次：preValue 0 n 22 
        // 第二次：preValue 22 n 44
        // 第三次：preValue 66 n 52
        // 第四次：preValue 118 n 176

        // 三：链式调用 + 函数式编程 
        // let total = nums.filter(function(n){
        //     return n < 100
        // }).map(function(n){
        //     return n * 2
        // }).reduce(function(preValue,n){
        //     return preValue + n
        // },0)
        // window.console.log(total)

        // 四：链式调用 + 函数式编程 + 箭头函数
        let total = nums.filter((n) => n < 100).map((n) => n * 2).reduce((preValue,n) => preValue + n)
        window.console.log(total)

    },
    methods: {
        removeHandle(index) {
            this.books.splice(index,1);
        },
        add(index) {
            this.books[index].count++;
        },
        sub(index) {
            this.books[index].count--;
        },
        getFinalPrice(price) {
            return '￥' + price.toFixed(2);
        }
    },
    computed: {
        totalPrice (){
            // 一：普通方式实现
            // let totalPrice = 0;
            // for (const iten of this.books) {
            //     totalPrice+= iten.price * iten.count
            // }
            // return totalPrice;

            // 二：reduce实现
            return this.books.reduce(function(preValue,book){
                return preValue + book.price * book.count 
            },0)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }
}
</script>