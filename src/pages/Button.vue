<template>
  <div id="button" v-highlight>
    <h1 class="button-title">Button</h1>
    <div class="row">
      <Button theme="red" size="sm">Button</Button>
      <Button>Button</Button>
      <Button theme="orange" size="lg">Button</Button>
      <Button status="disabled" size="lg">Button</Button>
    </div>

    <!-- code -->
    <h3 class="button-title">Code</h3>
    <pre>
      <code>
        {{code}}
      </code>
    </pre>

    <!-- api -->
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
          <td>theme</td>
          <td>String</td>
          <td>default</td>
          <td>default | red | orange</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>md</td>
          <td>sm | md | lg</td>
        </tr>
        <tr>
          <td>status</td>
          <td>String</td>
          <td>""</td>
          <td>"" | "disabled"</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import {Button} from "../index.js"
import {button} from "../mock/code.js"
export default {
  name: "button-page",
  components: {Button},
  data(){
    return{
      code: button
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../components/style/common.scss";

#button {
  position: relative;
  padding-bottom: 4rem;
}
.button-title {
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
  #button {
    width: 60%;
    left: 20%;
  }
}
</style>


