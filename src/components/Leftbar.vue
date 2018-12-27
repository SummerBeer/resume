<template>
    <div id='leftbar'>
        <ul id="items">
            <li class="item" :key='index' v-for='(item, index) in items'>
                <a href=""> {{item.name}} </a>
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
            items: DATA.leftbar.items
        }
    }
}
</script>

<style lang="postcss">
* {
    margin: 0;
    padding: 0;
}

#leftbar {
    position: relative;
    width: 20vw;
    height: 100vh;
    padding: 30px 0px;
    min-width: 100px;
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
        margin: 5px 0;

        & a {
            text-decoration: none;
            color: #000;
        }
    }
}
</style>


