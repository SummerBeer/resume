<template>
    <div id='leftbar'>
        <ul id="items">
            <li class="item" :class="[`nav-item-${item.name == cur? 'active': ''}`]" @click="cur=item.name" :key='index' v-for='(item, index) in items'>
                <a :href=item.link> {{item.name}} </a>
            </li>
        </ul>
    </div>
</template>

<script>
import DATA from '@/data/data.json' 

export default {
    name: 'leftbar',
    data() {
        return{
            items: DATA.leftbar.items,
            cur: 'Home'
        }
    }
}
</script>

<style lang="scss">
@import '../../packages/style/common.scss';

* {
    margin: 0;
    padding: 0;
}

#leftbar {
    position: fixed;
    width: 20vw;
    height: 100vh;
    padding: 30px 0px;
    min-width: 100px;
    background-color: $leftbar-background-color;
    border-right-width: 1px;
    border-right-color: #eee;
    border-right-style: solid;

    & #items {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    & .item {
        list-style: none;
        @include flex-center(row);
        width: 100%;
        height: 40px;
        margin: 5px 0;
        font-weight: bold;

        & a {
            text-decoration: none;
            color: $leftbar-font-color;
        }
    }
    & .item:hover {
        background-color: $blue;
        & a {
            color: #fff;
        }
    }
}

.nav-item-active {
    background-color: $blue;
    
    & a{
        color: #fff !important;
    }
}
</style>


