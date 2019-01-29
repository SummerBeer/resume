<template>
  <div id="article">
    <h1 class="article-title">Article</h1>
    <p>Article组件用于文章的展示，它能够将文章以优美的布局显示。</p>
    <br>
    <br>
    <div>
      <Article title="MyArticle" author="huangyh" date="2019.01.01" img="static/img/img4.jpeg">
        <p>
        如果按照输出的模块形式分类，那么 Vue 有三种不同的构建输出，分别是：UMD、CommonJS 以及 ES Module，我们可以在 Vue 的 Rollup 构建配置中得知，打开 scripts/config.js 文件，如下图：
        </p>
        <h3>Vue的不同构建输出</h3>
        <p>
        上图中的三个构建配置的入口是相同的，即 web/entry-runtime.js 文件，但是输出的格式(format)是不同的，分别是 cjs、es 以及 umd。
        每种模块形式又分别输出了 运行时版 以及 完整版，如下图：
        </p>
        <img src="static/img/img5.jpeg" alt="">
        <p>
        上图中，cjs 模块分别输出了 运行时版 以及 完整版 两个版本，es 模块也做了同样的事情，我们观察运行时版本与完整版本的区别：
        运行时的入口文件名字为：entry-runtime.js
        完整版的入口文件名字为：entry-runtime-with-compiler.js
        通过名字，我们就可以猜到，完整版比运行时版本多了一个传说中的 compiler，而 compiler 在我们介绍目录结构的时候说过，它的作用是：编译器代码的存放目录，将 template 编译为 render 函数。
        上图中只介绍了 cjs 与 es 版本的输出，对于 umd 模块格式的输出，同样也分为 运行时版 与 完整版，并且还分为 生产环境 与 开发环境，如下图：
        </p>
      </Article>
    </div>

    <br><br>

    <div>
      <Article theme="black" title="MyArticle" author="huangyh" date="2019.01.01" img="static/img/img4.jpeg">
        <p>
        如果按照输出的模块形式分类，那么 Vue 有三种不同的构建输出，分别是：UMD、CommonJS 以及 ES Module，我们可以在 Vue 的 Rollup 构建配置中得知，打开 scripts/config.js 文件，如下图：
        </p>
        <h3>Vue的不同构建输出</h3>
        <p>
        上图中的三个构建配置的入口是相同的，即 web/entry-runtime.js 文件，但是输出的格式(format)是不同的，分别是 cjs、es 以及 umd。
        每种模块形式又分别输出了 运行时版 以及 完整版，如下图：
        </p>
        <p>
        上图中，cjs 模块分别输出了 运行时版 以及 完整版 两个版本，es 模块也做了同样的事情，我们观察运行时版本与完整版本的区别：
        运行时的入口文件名字为：entry-runtime.js
        完整版的入口文件名字为：entry-runtime-with-compiler.js
        通过名字，我们就可以猜到，完整版比运行时版本多了一个传说中的 compiler，而 compiler 在我们介绍目录结构的时候说过，它的作用是：编译器代码的存放目录，将 template 编译为 render 函数。
        上图中只介绍了 cjs 与 es 版本的输出，对于 umd 模块格式的输出，同样也分为 运行时版 与 完整版，并且还分为 生产环境 与 开发环境，如下图：
        </p>
      </Article>
    </div>

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
          <td>title</td>
          <td>String</td>
          <td>title</td>
          <td></td>
        </tr>
        <tr>
          <td>theme</td>
          <td>String</td>
          <td>default</td>
          <td>default / black</td>
        </tr>
        <tr>
          <td>author</td>
          <td>String</td>
          <td>author</td>
          <td></td>
        </tr>
        <tr>
          <td>date</td>
          <td>String</td>
          <td>2010/01/01</td>
          <td></td>
        </tr>
        <tr>
          <td>img</td>
          <td>String</td>
          <td>img path</td>
          <td></td>
        </tr>
        <tr>
          <td>shadow</td>
          <td>Boolean</td>
          <td>true</td>
          <td></td>
        </tr>
        <tr>
          <td>slot</td>
          <td>slot</td>
          <td></td>
          <td>p / h1 / h2/ h3/ img标签</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import {Article} from "../index.js"
export default {
  name: "m-article",
  components: {Article},
  props: {

  },
  data(){
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
@import "../components/style/common.scss";

#article {
  position: relative;
  padding-bottom: 4rem;
}
.article-title {
  padding: 2rem 0;
  border-bottom: 1px solid #ddd;
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
  #article {
    width: 60%;
    left: 20%;
  }
}
</style>
