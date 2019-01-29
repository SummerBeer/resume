<template>
  <div id="form" v-highlight>
    <!-- info -->
    <h1 class="title">Form</h1>
    <p>Form类别的组件包含，Input, Checkbox, Selector, Cascader, Radio</p>

    <!-- input -->
    <h2>Input</h2>
    <div class="row">
      <Input/>
      <Input icon="static/img/icon1.png" width="300px"/>
    </div>

    <!-- example -->
    <h3>代码</h3>
    <pre>
      <code>
        {{inputCode}}
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
          <td>icon</td>
          <td>String</td>
          <td>static/img/img1.png</td>
          <td></td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>请输入</td>
          <td></td>
        </tr>
        <tr>
          <td>width</td>
          <td>String</td>
          <td>150px</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <hr>
    <br>
    <br>

    <!-- checkbox -->
    <h2>Checkbox</h2>
    <div class="row">
      <Checkbox :options="options" name="checkbox"/>
    </div>

    <!-- example -->
    <h3>代码</h3>
    <pre>
      <code>
        {{checkboxCode}}
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
          <td>name</td>
          <td>String</td>
          <td>checkbox</td>
          <td></td>
        </tr>
        <tr>
          <td>options</td>
          <td>Array</td>
          <td>['option1', 'option2', 'option3']</td>
          <td></td>
        </tr>
        <tr>
          <td>@value</td>
          <td>event</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <hr>
    <br>
    <br>

    <!-- Selector -->
    <h2>Selector</h2>
    <div class="row">
      <Selector :options="options" name="selector"/>
    </div>

    <!-- example -->
    <h3>代码</h3>
    <pre>
      <code>
        {{selectorCode}}
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
          <td>name</td>
          <td>String</td>
          <td>checkbox</td>
          <td></td>
        </tr>
        <tr>
          <td>options</td>
          <td>Array</td>
          <td>['option1', 'option2', 'option3']</td>
          <td></td>
        </tr>
        <tr>
          <td>value</td>
          <td>String</td>
          <td>请选择</td>
          <td></td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>md</td>
          <td>sm | md | lg</td>
        </tr>
        <tr>
          <td>@value</td>
          <td>event</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <hr>
    <br>
    <br>

    <!-- Cascader -->
    <h2>Cascader</h2>
    <div class="row">
      <Cascader :options=cascaderOptions @value="getCascaderValue" separator="|"/>
      <p>选择的值: {{cascaderValue}}</p>
    </div>

    <!-- example -->
    <h3>代码</h3>
    <pre>
      <code>
        {{cascaderCode}}
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
          <td>options</td>
          <td>Array</td>
          <td>[{key: "", value: "", children: []}]</td>
          <td></td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>请选择</td>
          <td></td>
        </tr>
        <tr>
          <td>separator</td>
          <td>String</td>
          <td>/</td>
          <td></td>
        </tr>
        <tr>
          <td>@value</td>
          <td>event</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <!-- Radio -->
    <h2>Radio</h2>
    <div class="row">
      <Radio :options=radioOptions @value="getRadioValue" name="radio" />
      <p>选择的值: {{radioValue}}</p>
    </div>

    <!-- example -->
    <h3>代码</h3>
    <pre>
      <code>
        {{radioCode}}
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
          <td>options</td>
          <td>Array</td>
          <td>["option1","option2", "option3"]</td>
          <td></td>
        </tr>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>radio</td>
          <td></td>
        </tr>
        <tr>
          <td>@value</td>
          <td>event</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { Input, Selector, Cascader, Checkbox, Radio} from "../index.js";
import { form, input, checkbox, selector, cascader, radio} from "../mock/code.js";
export default {
  name: "tablePage",
  components: { Input, Selector, Cascader, Checkbox, Radio},
  data() {
    return {
      inputCode: input,
      checkboxCode: checkbox,
      selectorCode: selector,
      cascaderCode: cascader,
      radioCode: radio,
      radioValue: "",
      options: ["option1", "option2", "option3"],
      radioOptions: ["option1", "option2"],
      cascaderOptions: [
        {
          key: "选项1",
          value: "option1",
          children: [
            {
              key: "选项1.1",
              value: "option1-1",
              children: [
                {
                  key: "选项1.1.1",
                  value: "option1-1-1"
                },
                {
                  key: "选项1.1.2",
                  value: "option1-1-2"
                }
              ]
            },
            {
              key: "选项1.2",
              value: "option1-2"
            }
          ]
        },
        {
          key: "选项2",
          value: "option2",
          children: [
            {
              key: "选项2.1",
              value: "option2-1"
            }
          ]
        }
      ],
      cascaderValue: ""
    };
  },
  methods: {
    getTableValue(r) {
      this.tableValue = r;
    },
    getCascaderValue(r) {
      this.cascaderValue = r;
    },
    getRadioValue(r){
      this.radioValue = r
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../components/style/common.scss";

#form {
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
.row {
  @include flex(row, nowrap, space-around, center);
}
table {
  width: 100%;
  & td {
    border-bottom: 1px solid #eee;
    text-align: center;
    line-height: 2rem;
    font-size: 0.8rem;
  }
}

// PC
@media screen and (min-width: 768px) {
  #form {
    width: 60%;
    left: 20%;
  }
}
</style>


