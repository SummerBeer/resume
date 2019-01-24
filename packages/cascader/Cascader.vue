<template>
    <div
        id="cascader-wrapper"
        class="cascader-wrapper"
        :options="options"
        :placeholder="placeholder"
        :separator="separator"
        :size="size"
        @click="getValue"
    >
        <!-- options -->
        <div class="input" @click.stop="isActive1 = !isActive1; isActive2 = false; isActive3 = false">
            {{placeholder}}
            <ul class="options" :class="{active: isActive1}" >
                <li
                    v-for="(item, index) in options"
                    :key="index"
                    class="option"
                    @click.stop="toggleOptions(item)"
                >
                    {{item.key}}
                    <img
                        :class="[`option-icon`]"
                        src="../../static/next.png"
                        v-if="'children' in item"
                    >
                </li>
            </ul>

            <!-- options2 -->
            <ul class="options2" v-if="isActive2">
                <li class="option" v-for="(item, index) in options2" :key="index"
                    @click.stop="toggleOptions2(item)">
                    {{item.key}}
                    <img
                        :class="[`option-icon`]"
                        src="../../static/next.png"
                        v-if="'children' in item"
                    >
                </li>
            </ul>

            <!-- options3 -->
            <ul class="options3" v-if="isActive3">
                <li class="option" v-for="(item, index) in options3" :key="index"
                    @click.stop="toggleOptions3(item)">
                    {{item.key}}
                    <img
                        :class="[`option-icon`]"
                        src="../../static/next.png"
                        v-if="'children' in item"
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "cascader",
    mounted(){
        document.addEventListener("click", ()=>{
            if(this.isActive1){
                this.isActive1 = false
                this.isActive2 = false
                this.isActive3 = false
            }
        })
    },
    props: {
        options: {
            default: function() {
                return [
                    {
                        key: "选项1",
                        value: "option1",
                        children: [
                            {
                                key: "选项1.1",
                                value: "option1-1",
                                children: [
                                    {
                                        key: "选项1.1.1",
                                        value: "option1-1-1"
                                    },
                                    {
                                        key: "选项1.1.2",
                                        value: "option1-1-2"
                                    }
                                ]
                            },
                            {
                                key: "选项1.2",
                                value: "option1-2"
                            }
                        ]
                    },
                    {
                        key: "选项2",
                        value: "option2",
                        children: [
                            {
                                key: "选项2.1",
                                value: "option2-1"
                            }
                        ]
                    }
                ];
            },
            type: Array
        },
        placeholder: {
            default: "请选择",
            type: String
        },
        separator: {
            default: "/",
            type: String
        },
        size: {
            default: "md",
            type: String
        }
    },
    data() {
        return {
            value: [],
            isActive1: false,
            isActive2: false,
            isActive3: false,
            options2: [],
            options3: []
        };
    },
    methods: {
        getValue() {
            var value = ""
            for(let v of this.value){
                value += v + this.separator
            }
            value = value.slice(0, value.length-1)
            this.$emit("value", value);
        },
        toggleOptions(item){
            this.value[0] = item.value
            if('children' in item){
                this.isActive2 = !this.isActive2
                this.options2 = item.children
            }
            else{
                this.getValue()
                this.close()
            }
        },
        toggleOptions2(item){
            this.value[1] = item.value
            if('children' in item){
                this.isActive3 = !this.isActive3
                this.options3 = item.children
            }
            else{
                this.getValue()
                this.close()
            }
        },
        toggleOptions3(item){
            this.value[2] = item.value
            this.getValue()
            this.close()
        },
        close(){
            this.isActive1 = false
            this.isActive2 = false
            this.isActive3 = false
            this.value = []
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

* {
    @include init;
}

#cascader {
    position: relative;
    padding: 0px 20px;
    min-width: 100px;
    border-radius: 3px;
    @include flex-center(row);
}

.input {
    width: 150px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 14px;
    color: $grey;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
}

.input:hover {
    border: 1px solid #aaa;
}

.options {
    position: absolute;
    overflow: hidden;
    width: 150px;
    top: 36px;
    left: 0px;
    height: 0;
    background-color: white;
    border: none;

    & .option {
        position: relative;
        height: 36px;
        font-size: 14px;
        color: $grey;
        line-height: 36px;

        &:hover {
            cursor: pointer;
            color: $dark-grey;
        }

        & img {
            position: absolute;
            width: 20px;
            height: 20px;
            right: 10px;
            top: 6px;
        }
    }
}

.option {
    position: relative;
    height: 36px;
    font-size: 14px;
    color: $grey;
    line-height: 36px;

    &:hover {
        cursor: pointer;
        color: $dark-grey;
    }

    & img {
        position: absolute;
        width: 20px;
        height: 20px;
        right: 10px;
        top: 6px;
    }
}

.options.active {
    border: 1px solid #ddd;
    overflow-y: scroll;
    height: 120px;
    transition: 0.2s;
    padding: 10px 0px;
}

.options2, .options3 {
    position: absolute;
    top: 36px;
    height: 120px;
    width: 150px;
    padding: 10px 0px;
    background-color: white;
    border: 1px solid #ddd;
}

.options2 {
    left: 150px;
}

.options3 {
    left: 300px;
}
</style>


