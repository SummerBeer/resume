<template>
    <div id="nav"
        color=color
        height=height
        img=img
        items=items
        pages=pages
        :class="[`nav-wrapper`]"
        :style="{height: height}">
        <div class="nav-toggle" :class="{active: isToggle}" @click="isToggle = !isToggle">
            <span class="line span-1"></span>
            <span class="line span-2"></span>
            <span class="line span-3"></span>
        </div>

        <!-- PC 导航条右方的Items -->
        <ul class="pc-nav">
            <li class="search-wrapper">
                <slot name="search"></slot>
            </li>
            <li class="item" v-for="(item, index) in items" :key=index>
                <a :href=item.link>
                    {{item.name}}
                </a>
            </li>
        </ul>

        <!-- Phone 导航条 -->
        <ul class="phone-nav">
            <li class="search-wrapper">
                <slot name="search"></slot>
            </li>
        </ul>
        <ul class="phone-nav-2">
            <li class="item" v-for="(item, index) in items" :key=index>
                <a :href=item.link>
                    {{item.name}}
                </a>
            </li>
        </ul>

        <!-- 左方弹出的导航条 -->
        <ul class="nav-panel" :class="{active: isToggle}">
            <li v-for="(page, index) in pages" :key=index @click="isToggle = !isToggle">
                <a :href=page.link>
                    {{page.name}}
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
/**
 * Nav Params Info
 * @param {String} [color=default] the color of nav background. optional value: default, black
 * @param {String} [size=md] the height of nav. optional value: sm, md, lg
 * @param {String} [img=''] the background img src. 
 * @param {Array} [items=] the items of nav. structure like: [{name: "item1", link: "/home"}, {name: "item2", link: "/products"}]
 * @param {Array} [pages=] structure like : [{name: "page1", link: "/page1"}]
 * @param {Slot} [search=]
 */
export default {
    name: "m-nav",
    props: {
        color: {
            default: "default",
            type: String
        },
        height: {
            default: "48px",
            type: String
        },
        img: {
            default: ''
        },
        items: {
            default: function(){
                return [{
                    name: "item1",
                    link: "#"
                },{
                    name: "item2",
                    link: "#"
                },{
                    name: "item2",
                    link: "#"
                },{
                    name: "item2",
                    link: "#"
                }]
            },
            type: Array
        },
        pages: {
            default: function(){
                return [{
                    name: "Home",
                    link: "#",
                },{
                    name: "Article",
                    link: "#",
                },{
                    name: "About Us",
                    link: "#"
                }]
            },
            type: Array
        }
    },
    data(){
        return {
            isToggle: false
        }
    },
    methods: {
        
    }
}
</script>


<style lang="scss" scoped>
@import "../style/common.scss";

.nav-wrapper {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: white;
    box-shadow: 0 1px 3px 0px rgba(80,80,80,0.1);
    border-bottom: 1px solid #ddd;

    .nav-toggle {
        z-index: 11;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: 20%;
        left: 2rem;
        height: 60%;
        width: 2rem;

        .line {
            display: inline-block;
            height: 1px;
            width: 2.4rem;
            background-color: $dark-grey;
        }

        &:hover {
            cursor: pointer;
            & .line {
                height: 2px;
            }
        }
    }

    .nav-toggle.active {
        & .line {
            transition: transform .5s;
            transform-origin: left;
            background-color: white;
        }
        & .span-1 {
            transform: rotate(45deg);
        }
        & .span-2 {
            visibility: hidden;
        }
        & .span-3 {
            transform: rotate(-45deg);
        }
    }

    & ul {
        display: flex;
        margin: 0;
        height: 100%;
    }

    & .item {
        height: 100%;
        @include flex-center(row);

        & a {
            color: $dark-blue;
        }

        &:hover, &:hover a {
            background-color: $dark-grey;
            color: white;
            cursor:pointer;
        }
    }

    .nav-panel {
        position: fixed;
        overflow: hidden;
        display: flex;
        @include flex(column, nowrap, flex-start, center);
        padding: 4rem 0;
        top: 0;
        left: 0;
        width: 0;
        height: 100vh;
        background-color: $black;

        & li {
            @include flex-center(row);
            height: 4rem;
            width: 20vw;

            &:hover {
                cursor: pointer;
                background-color: #222;
            }
        }

        & a {
            text-decoration: none;
            font-size: 1.2rem;
            color: white;
        }
    }
    .nav-panel.active {
        transition: .3s;
    }
}

// PC
@media screen and (min-width: 501px){
    .phone-nav {
        display: none !important;
    }
    .phone-nav-2 {
        display: none !important;
    }

    .pc-nav {
        @include flex(row, wrap, flex-end, center);
        padding: 0 2rem;
        & .item {
            padding: 0 1.4rem;
        }
    }

    .search-wrapper {
        margin-right: 1rem;
    }

    .nav-panel.active {
        width: 20vw;
    }
}

// Phone
@media screen and (max-width: 500px) {
    .pc-nav {
        display: none !important;
    }

    .phone-nav {
        @include flex(row, wrap, flex-end, center);
        padding-right: 1rem;
    }

    .phone-nav-2 {
        background-color: $dark-grey;
        padding: 0;
        @include flex(row, nowrap, flex-start, center);
        & .item {
            padding: 0 1rem;
            & a{
                color: #aaa;
            }
        }
    }
    .nav-panel.active {
        width: 100vw;
        & li {
            width: 100%;
            & a{
                text-decoration: underline;
            }
        }
    }
}
</style>


