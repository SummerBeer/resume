<template>
    <div class="table-wrapper"
        :title=title
        :style="{width: width}">

        <!-- table title -->
        <div class="table-title-wrapper">
            <div class="table-title">
                {{title}}
            </div>
            <div class="table-operate">
                <span>row: {{row}}</span>
                <div class="row-add operate" @click="row+=1">+</div>
                <div class="row-minus operate" @click="row-=1">-</div>
                <span>column: {{column}}</span>
                <div class="column-add operate" @click="column+=1">+</div>
                <div class="column-minus operate" @click="column-=1">-</div>
            </div>
        </div>

        <!-- table body -->
        <ul class="column" v-for="i in column" :key=i>
            <li class="row" v-for="j in row" :key=j >
                <input type="text" v-model="value[(j-1)*column+(i-1)]">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "m-table",
    props: {
        title: {
            default: "标题",
            type: String
        }
    },
    computed: {
        width(){
            return `${this.row * 100}px`
        }
    },
    data() {
        return {
            row: 3,
            column: 3,
            value: []
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.table-wrapper {
    position: relative;
}

.table-title-wrapper {
    background-color: $dark;
    color: #aaa;
    font-size: 12px;
    @include flex(row, nowrap, space-between, center);
    width: 100%;
    height: 32px;
    padding: 0 1rem;

    & div {
        @include flex(row, nowrap, space-between, center);
    }

    & .table-operate {
        width: 50%;
        min-width: 200px;
    }

    & .operate {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #bdbdbd;
        color: $dark;
        font-size: 20px;
        @include flex-center(row);
        &:hover {
            cursor: pointer;
            font-weight: bold;
        }
    }
}

.column {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 30px;
    display: flex;
    @include flex(row, nowrap, space-between, center);
}
.row {
    border: 1px solid #ccc;
    height: 100%;
    & input {
        height: 100%;
        width: 100%;
        border: none;
        text-align: center;
    }
}
</style>


