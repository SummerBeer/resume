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

        <!-- 导航条右方的Items -->
        <ul :class="[`nav`]">
            <li class="search-wrapper">
                <slot name="search"></slot>
            </li>
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
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #f5f5f5;
    box-shadow: 0 1px 3px 1px rgba(80,80,80,0.1);

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
        @include flex(row, wrap, flex-end, center);
        margin: 0;
        padding: 0 2rem;
        height: 100%;
    }

    & .item {
        padding: 0 1.4rem;
        height: 100%;
        @include flex-center(row);

        & a {
            color: $dark-blue;
        }

        &:hover, &:hover a {
            background-color: $grey;
            color: white;
            cursor:pointer;
        }
    }

    & .search-wrapper {
        margin-right: 1rem;
    }

    @media screen and (max-width: 500px) {
        .nav-panel.active {
            width: 30vw;
        }
    }
    @media screen and (min-width: 501px) {
        .nav-panel.active {
            width: 20vw;
        }
    }

    .nav-panel {
        position: fixed;
        overflow: hidden;
        display: flex;
        @include flex(column, nowrap, flex-start, center);
        padding: 4rem 0;
        z-index: 10;
        top: 0;
        left: 0;
        width: 0;
        height: 100vh;
        background-color: $dark;

        & li {
            @include flex-center(row);
            height: 4rem;
            width: 20vw;

            &:hover {
                cursor: pointer;
                background-color: $black;
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
</style>


