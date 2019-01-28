<template>
  <div id="table" v-highlight>

    <!-- info -->
    <h1 class="title">Table</h1>
    <p>Table组件是一个可用于PC端和移动端的表格组件，支持动态增加行列，保存后的数据将转换为JSON数据格式，并传递给父组件。</p>
    <div>
      <Table @value="getTableValue"/>
    </div>
    <p>点击save按钮，将得到表格数据</p>
    <blockquote>
      data from table: {{tableValue}}
    </blockquote>

    <!-- example -->
    <h3>代码</h3>
    <pre>
      <code>
        {{code}}
      </code>
    </pre>

    <!-- Api -->
    <h3>API</h3>
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>类型</td>
          <td>默认值</td>
          <td>可选值</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>标题</td>
          <td></td>
        </tr>
        <tr>
          <td>header</td>
          <td>Array</td>
          <td>["Id","Name","Department","Position"]</td>
          <td></td>
        </tr>
        <tr>
          <td>value</td>
          <td>Event</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import {Table} from "../index.js"
import {table} from "../mock/code.js"
export default {
  name: "tablePage",
  components: {Table},
  data() {
    return {
      tableValue: "",
      code: table
    };
  },
  methods: {
    getTableValue(r){
      this.tableValue = r
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../components/style/common.scss";

#table {
  position: relative;
  padding-bottom: 4rem;
}
.title {
  padding: 2rem 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
}
p {
  line-height: 2rem;
}
blockquote {
  background-color: #eee;
  padding: 1rem;
}
table {
  width: 100%;
  & td {
    border-bottom: 1px solid #eee;
    text-align: center;
    line-height: 2rem;
    font-size:0.8rem;
  }
}

// PC
@media screen and (min-width: 768px){
  #table {
    width: 60%;
    left: 20%;
  }
}
</style>


