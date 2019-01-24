<template>
    <div id="nav"
        color=color
        height=height
        img=img
        :class="[`nav-wrapper`]"
        :style="{height: height}">
        <div :class="[`nav-toggle`]" @click="isToggle = !isToggle">
            <span class="line span-1"></span>
            <span class="line span-2"></span>
            <span class="line span-3"></span>
        </div>
        <ul :class="[`nav`]">
            <li v-for="(item, index) in items" :key=index>
                <a :href=item.link>
                    {{item.name}}
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
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: 20%;
        left: 2rem;
        height: 60%;
        width: 2rem;
        &:hover {
            cursor: pointer;
            & .line {
                height: 2px;
            }
        }
    }

    .line {
        display: inline-block;
        height: 1px;
        width: 2.4rem;
        background-color: $dark-grey;
    }

    & ul {
        display: flex;
        @include flex(row, wrap, flex-end, center);
        margin: 0;
        padding: 0 2rem;
        height: 100%;
    }

    & li {
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
}
</style>


