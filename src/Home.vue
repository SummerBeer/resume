<template>
    <div id="home">
        <Nav :pages=pages>
          <Search slot="search"/>
        </Nav>
        <router-view />
    </div>
</template>


<script>
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css";
import {Nav, Search} from "./index.js"

export default {
    name: "App",
    components: {Nav, Search},
    data() {
        return {
          pages: [{
            name: "Home",
            link: "/home"
          },{
            name: "Table",
            link: "/table"
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
#home {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    display: flex;
    flex: row nowrap;
    overflow-x: hidden;
    background-color: white;
    height: 100%;
}
</style>
