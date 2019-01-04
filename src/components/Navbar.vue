<template>
    <ul id="navbar" class="items">
        <li class="item" :class="item.name=='Vue组件'?'active':''" v-for="(item, index) in items" :key=index>
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
            items: items.navbar.items,
            isActive: false
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

#navbar {
    position: fixed;
    z-index: 1000;
    top: 0px;
    width: 100vw;
    height: 50px;
    background-color: $navbar-background-color;
    color: $navbar-font-color;
}

.items {
    position: relative;
    width: 100%;
    height: 100%;
    @include flex(row, nowrap, flex-start, center);
}
.item {
    margin-right: 20px;
    font-weight: bold;
    font-size: 14px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: center;

    & a {
        color: $navbar-font-color;
    }
}
.item:hover {
    background-color: $dark-grey;
    & a {
        color: #fff;
        
    }
}
.item.active {
    background-color: $dark-grey;
    & a {
        color: #fff;
    }
}
</style>


