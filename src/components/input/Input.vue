<template>
    <div id="input-wrap" :style="{width: width}" 
    :icon=icon
    :placeholder=placeholder 
    :width=width>
        <input class="input-text" type="text" value="" v-model="input" :placeholder=placeholder @input="inputChange" >
        <img class="input-icon" :src=icon v-if=icon>
    </div>
</template>

<script>
/**
 * 
 * Input
 * @param {String} icon="static/img/img.png"
 * @param {String} placeholder="请输入"
 * @param {String} width="150px"
 * 
 */
export default {
    name: "input-wrap",
    props: {
        icon: {
            default: "",
            type: String
        },
        placeholder: {
            default: "请输入",
            type: String
        },
        width: {
            default: "150px",
            type: String
        }
    },
    data() {
        return {
            input: ""
        }
    },
    methods: {
        inputChange(){
            this.$emit("value", this.input)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

#input-wrap {
    position: relative;
    height: 30px;
    margin: 10px 0px;
}

.input-text {
    position: relative;
    display: inline-block;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid #ccc;
    padding: 0px 0px 0px 10px;
    font-size: 12px;
}

.input-text:hover, .input-text:focus {
    border-color: $dark-blue;
    outline: 1px solid $blue;
}

.input-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
}
</style>




