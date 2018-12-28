<template>
  <div id="app">
    <router-view name='leftbar'/>
    <router-view name='main'/>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

export default {
  name: 'App',
  mounted() {
        hljs.highlightCode = function () { //自定义highlightCode方法，将只执行一次的逻辑去掉
            let blocks = document.querySelectorAll('pre code');
            [].forEach.call(blocks, hljs.highlightBlock);
        };
        hljs.highlightCode()
  }
}
</script>

<style lang='scss'>
body, html {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  display: flex;
  flex: row nowrap;
}
</style>
