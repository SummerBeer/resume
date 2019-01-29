<template>
    <div class="search-wrapper"
        :placeholder=placeholder
        :class="{active: isToggle}"
        >
        <input type="text" @input="inputChange" v-model="value" :placeholder=placeholder
            @focus="isToggle = true"
            @blur="isToggle = false">
        <div class="search-btn" @click="search">
            <img src="../../assets/search.png">
        </div>
    </div>
</template>

<script>
/**
 * 
 * @param {event} [@value=]
 * @param {String} [placeholder=请输入]
 * @param {event} [@search=]
 * 
 */

export default {
    name: "search",
    props: {
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
        },
        search(){
            this.$emit("search", this.value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.search-wrapper {
    position: relative;
    width: 120px;
    transition: .5s;
    @include flex-center(row);

    & input {
        height: 100%;
        width: 100%;
        margin-right: 40px;
        transition: .5s;
        // border-radius: 0.3rem;
        box-shadow: none;
        outline: none;
        border: 1px solid #ddd;
        font-size: 12px;
        padding: 6px;
        padding-left: 4px;
    }
    
    & .search-btn {
        position: absolute;
        right: 0;
        height: 28px;
        width: 30px;
        background-color: $dark-blue;
        @include flex-center(row);
        // border-radius: 5px;
        & img {
            width: 20px;
            height: 20px;
        }
        &:hover {
          cursor: pointer;
          background-image: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(50,50,50,0.2));
        }
    }
}

// Pc
@media screen and (min-width: 500px){
    .search-wrapper.active {
        width: 250px;
    }
}

// Phone
@media screen and (max-width: 501px){
    .search-wrapper.active {
        width: 60vw;
    }
}
</style>


