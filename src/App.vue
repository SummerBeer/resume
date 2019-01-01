<template>
  <div id="app">
    <router-view name="navbar"/>
    <router-view name="leftbar"/>
    <router-view name="main"/>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css";
import items from "./data/data.json";

export default {
  name: "App",
  created() {
    var flag = false;
    for (var i of items.leftbar.items) {
      if (this.$route.path == "/" + i.link.split("#")[1]) {
        flag = true;
      }
    }
    if (flag) {
      this.$router.push("/");
    }
  }
};
</script>

<style lang='scss'>
html {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
body,
html {
  margin: 0;
  padding: 0;
  background-color: #fafafa;
}
body {
  overflow: scroll;
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
