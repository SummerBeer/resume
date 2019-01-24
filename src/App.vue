<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css";

export default {
  name: "App",
  data() {
      return {
          
      }
  }
}
</script>

<style lang='scss'>
@import "./components/style/common.scss";

html {
  position: relative;
  width: 100vw;
  height: 100vh;
}
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: $app-background-color;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  display: flex;
  flex: row nowrap;
  overflow-x: hidden;
}
</style>
