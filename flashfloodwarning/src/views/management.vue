<template>
  <div class="management">
    <el-table
      border
      height="100%"
      style="width:100%"
      :data="tableData"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="isDangerous" label="IsDangerous"></el-table-column>
      <el-table-column prop="high" label="High">
        <!-- <template slot-scope="scope">
          <el-popover placement="top-start" title trigger="hover">
            <img
              :src="scope.row.picture"
              alt
              style="width: 150px;height: 150px"
            />
            <img
              slot="reference"
              :src="scope.row.picture"
              style="width: 30px;height: 30px"
            />
          </el-popover>
        </template> -->
      </el-table-column>
      <el-table-column
        prop="dangerLevel"
        label="DangerLevel"
        sortable
      ></el-table-column>
      <el-table-column prop="color" label="Color"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="about" label="About" width="300"></el-table-column>
      <el-table-column prop="update" label="Update"></el-table-column>
      <el-table-column prop="latitude" label="Latitude"></el-table-column>
      <el-table-column prop="longitude" label="Longitude"></el-table-column>
    </el-table>
     <button v-on:click="handleClick()">清除缓存</button>
  </div>
</template>

<script>
import { pointsData } from "../assets/data/pointsData";
//import Parent from "./myMap.vue"
export default {
  
  data() {
    return {
      tableData: pointsData,
    };
  },
  mounted: function() {
    var i = 0;
    for (i; i < this.tableData.length; i++) {
      this.tableData[i].isDangerous = this.tableData[i].isDangerous + "";
      console.log(this.tableData[i].isDangerous);
    }
  },
  methods: {
    handleClick() {
      console.log('清除缓存'),
      localStorage.clear()
    },
    tableRowClassName({ row }) {
      if (row.dangerLevel >= 5) {
        return "warning-row";
      } else if (row.dangerLevel <= 4) {
        return "success-row";
      }
      return "";
    }

    // tableRowClassName({ row, rowIndex }) {
    //   console.log(row);
    //   if (rowIndex === 1) {
    //     return "warning-row";
    //   } else if (rowIndex === 3) {
    //     return "success-row";
    //   }
    //   return "";
    // }
  }
  
};
</script>

<style lang="less" scoped>
.el-table /deep/ .warning-row {
  background: oldlace;
}

.el-table /deep/ .success-row {
  background: #f0f9eb;
}

.management {
  box-sizing: border-box;
  padding-top: 61px !important;
  position: absolute;
  top: 0px;

  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
}
</style>
