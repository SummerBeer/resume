<template>
    <ul id="navbar" class="items">
        <li class="item" v-for="(item, index) in items" :key=index >
            <a :href=item.link>
                {{item.name}}
            </a>
        </li>
    </ul>
</template>

<script>
import items from "../data/data.json"

export default {
    name: "navbar",
    data() {
        return {
            items: items.navbar.items
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
@import "../../packages/style/common.scss";

* {
    @include init;
}

@media screen and (max-width: 600px) {
    #navbar{
        left: 100px;
    }
}

@media screen and (min-width: 601px){
    #navbar{
        left: 20vw;
    }
}

#navbar {
    position: fixed;
    z-index: 1000;
    top: 0px;
    width: 80vw;
    height: 50px;
    background-color: $navbar-background-color;
    border-bottom: 1px solid #eee;
    color: $navbar-font-color;
}

.items {
    position: relative;
    padding: 0px 5%;
    width: 100%;
    height: 100%;
    @include flex(row, nowrap, flex-start, center);
}
.item {
    margin-right: 20px;
    font-weight: bold;
    font-size: 13px;

    & a {
        color: $navbar-font-color;
    }
}
</style>


