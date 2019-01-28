<template>
  <div id="card" v-highlight>
    <!-- info -->
    <h1 class="title card-title">Card</h1>
    <div class="row">
      <Card width="300px" img="static/img/img1.jpeg"/>
      <Card
        width="300px"
        title="MyTitle"
        desc="This is a short description..."
        img="static/img/img2.jpeg"
        date="2018/01/20"
        :hasBorder="true"
      />
    </div>

    <!-- code -->
    <h3 class="card-title">Code</h3>
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
          <td>desc</td>
          <td>String</td>
          <td>some description about this article</td>
          <td></td>
        </tr>
        <tr>
          <td>date</td>
          <td>String</td>
          <td>new Date().toLocaleString()</td>
          <td></td>
        </tr>
        <tr>
          <td>width</td>
          <td>String</td>
          <td>300px</td>
          <td></td>
        </tr>
        <tr>
          <td>img</td>
          <td>String</td>
          <td>src/img/img.jpeg</td>
          <td></td>
        </tr>
        <tr>
          <td>hasBorder</td>
          <td>Boolean</td>
          <td>false</td>
          <td>false | true</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { Card } from "../index.js";
import { card } from "../mock/code.js";
export default {
  name: "card",
  components: { Card },
  data() {
    return {
      code: card
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../components/style/common.scss";

#card {
  position: relative;
  padding-bottom: 4rem;
}
.card-title {
  padding: 2rem 0;
  border-bottom: 1px solid #ddd;
}
.row {
  @include flex(row, nowrap, space-between, center);
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

@media screen and (min-width: 768px) {
  #card {
    width: 60%;
    left: 20%;
  }
}
</style>

