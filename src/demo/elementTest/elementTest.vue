<template>
    <div>
        <h1>表格测试页</h1>
        <el-table
        :data="tableData"
        stripe
        border>
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="名字"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="180">
            </el-table-column>
        </el-table>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    name:'',
    data() {
        return {
            tableData:[{
                date:'2019-11-05',
                name:'yulu1',
                address:'江西万载'
            },{
                date:'2019-11-05',
                name:'yulu2',
                address:'江西万载'
            },{
                date:'2019-11-05',
                name:'yulu3',
                address:'江西万载'
            }]
        }
    }
}
</script>