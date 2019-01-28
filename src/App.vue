<template>
  <div id="app">
    <Nav :pages="pages" :items="items">
      <Search slot="search"/>
    </Nav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>


<script>
import { Nav, Search } from "./index.js";

export default {
  name: "App",
  components: { Nav, Search },
  data() {
    return {
      pages: [{
          name: "Home",
          link: "/"
        },{
          name: "Table",
          link: "table"
        },{
          name: "Card",
          link: "card"
        },{
          name: "Form",
          link: "form"
        }
      ],
      items: [{
        name: "Login",
        link: "#"
      },{
        name: "Help",
        link: "#"
      }]
    };
  }
};
</script>


<style lang='scss'>
@import "./components/style/common.scss";

body,
html {
  position: relative;
  width: 100vw;
  height: 100vh;
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
  background-color: white;
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 48px;
}
</style>
