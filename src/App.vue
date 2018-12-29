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
  created() {
        this.$router.push('/')
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
