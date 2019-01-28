<template>
  <div id="home">
    <Cube />
  </div>
</template>

<script>
import {Cube} from "../index.js";

export default {
  name: "home",
  components: {Cube},
  data() {
    return {
   
    };
  },
  methods: {
    getTableData(r) {
      console.log("table data");
      this.tableData = r.toString().trim();
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../components/style/common.scss";

#home {
  width: 100%;
  height: 100%;
}
</style>

