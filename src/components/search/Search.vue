<template>
    <div class="search-wrapper"
        :width=width
        :placeholder=placeholder
        :class="{active: isToggle}"
        >
        <input type="text" @input="inputChange" v-model="value"
            @focus="isToggle = true"
            @blur="isToggle = false">
        <div class="search-btn">
            <img src="../../assets/search.png">
        </div>
    </div>
</template>

<script>
/**
 * 
 * @param {event} [@value=]
 * @param {String} [placeholder=请输入]
 * 
 */

export default {
    name: "search",
    props: {
        width: {
            default: "140px",
            type: String
        },
        placeholder: {
            default: "请输入",
            type: String
        }
    },
    data() {
        return {
            isToggle: false,
            value: ""
        }
    },
    methods: {
        inputChange(){
            this.$emit("value", this.value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.search-wrapper {
    position: relative;
    width: 100px;
    transition: .5s;
    @include flex-center(row);

    & input {
        height: 100%;
        width: 100%;
        margin-right: 40px;
        transition: .5s;
        border-radius: 0.3rem;
        box-shadow: none;
        outline: none;
        border: 1px solid #ddd;
    }
    
    & .search-btn {
        position: absolute;
        right: 0;
        height: 1.5rem;
        width: 30px;
        background-color: $dark-blue;
        @include flex-center(row);
        border-radius: 5px;

        & img {
            width: 20px;
            height: 20px;
        }
    }
}

.search-wrapper.active {
    width: 250px;
}
</style>


