<template>
<div class="table-wrap">
  <table class="base-table">
    <slot></slot>
    <tbody>
        <tr v-for="(item,index) in list" :key="index">
            <template v-for="(td,tIndex) in item">
                <td v-if="index==addSeat-1" :key="tIndex">
                    0
                </td>
                                           <td v-else
                    :rowspan="td.row||1"
                    :key="tIndex"
                    :colspan="td.col||1">{{td.val}}</td>
            </template>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
export default {
  props: {
    list: {
      type: Array
    },
    addSeat:{
        type:Number
    },
    data: {
      type: Array
    }
  },
  methods: {}
};
</script>
<style scoped>
table {
  width: 100%;
}

table td,
table th {
  height: 48px;
  font-size: 24px;
  line-height: 36px;
  padding: 10px;
  color: #25262a;
  text-align: center;
  border: 1px solid #fff;
  vertical-align: middle;
}

table thead tr {
  background: #d1e4ef;
}

table thead tr th {
  height: 56px;
}

table tbody tr {
  background: #e4eef2;
}

table tbody tr:nth-child(2n) {
  background: #e3eef5;
}
</style>