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
        <div class="input" @click="isActive1 = !isActive1">
            {{placeholder}}
            <ul class="options" :class="{active: isActive1}">
                <li v-for="(item, index) in options" :key=index class="option">
                    {{item.key}}
                    <ul class="[`options-${index}`]" 
                        v-if="item.children && (item.children.length > 0) && isActive2">
                        <li v-for="(item1, index1) in item.children" :key=index1 
                            class="[`option-${index}`]"> 
                            {{item1.key}}
                            <ul class="[`options-${index}-${index1}`]" 
                                v-if="item1.children && (item1.children.length > 0) && isActive3">
                                <li v-for="(item2, index2) in item1.children" :key=index2 
                                    class="[`option-${index}-${index1}`]"> 
                                    {{item2.key}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul> 
        </div>
    </div>
</template>

<script>
export default {
    name: "cascader",
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
                                value: "option1-1"
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
            ]
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
            defaultOptions: [
                [
                    {
                        key: "选项1",
                        value: "option1",
                        children: [
                            {
                                key: "选项1.1",
                                value: "option1-1"
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
                ]
            ],
            value: "",
            isActive1: false,
            isActive2: false,
            isActive3: false
        };
    },
    methods: {
        getValue() {
            this.$emit("value", this.value)
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
    z-index: 1000;
}

.input {
    position: relative;
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
    position: relative;
    overflow: hidden;
    top: -2px;
    height: 0;
    background-color: white;
    border: 1px solid #ddd;
    z-index: -1;

    & .option {
        color: $grey;
        
        &:hover {
            cursor: pointer;
            color: $dark-grey;
        }
    }
}

.options.active {
    overflow-y: scroll;
    height: 120px;
    transition: .2s;
    padding: 10px 0px;
}
</style>


