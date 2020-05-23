<template>
<div>
  <base-table :list="list" :addSeat='3'>
    <thead>
      <tr>
        <th>矿种名称</th>
        <th>单位</th>
        <th>资源储量</th>
        <th>增减(%)</th>
      </tr>
    </thead>
    <input slot="custom" placeholder="123">
  </base-table>
</div>
</template>
<script>
import baseTable from "../../components/preTable";
export default {
  components: {
    baseTable
  },
  data() {
    return {
      list: [
        [{
            row: 2,
            val: "1"
          },
          {
            val: "2"
          },
          {
            val: "1"
          },
          {
            val: "2"
          }
        ],
        [{
            val: "2"
          },
          {
            val: "1"
          },
          {
            val: "2"
          }
        ],
        [{
            col: 2,
            val: "2"
          },
          {
            val: "1"
          },
          {
            val: "2"
          }
        ],
        [{
            col: 2,
            val: "2"
          },
          {
            val: "1"
          },
          {
            val: "2"
          }
        ],
        [{
            col: 2,
            val: "2"
          },
          {
            val: "1"
          },
          {
            val: "2"
          }
        ],
      ]
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>

</style>
