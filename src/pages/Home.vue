<template>
    <div id="home">
        <div id="cube" class="section">
            <Cube size="small"></Cube>
        </div>

        <div id="button" class="section-1 section">
            <Panel class="button-panel" :text="text" :height="200" title="Button" :active="true">
                <div class="sample">
                    <m-btn size="sm">Button</m-btn>
                    <m-btn theme="red">Button</m-btn>
                    <m-btn size="lg" theme="orange">Button</m-btn>
                    <m-btn theme="red" status="disabled">Button</m-btn>
                </div>
                <div class="api-wrap">
                    <div class="api-tittle">
                        <h3>API</h3>
                    </div>
                    <div class="api-content">
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    <th>参数</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>可选值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>theme</td>
                                    <td>设置按钮的颜色</td>
                                    <td>String</td>
                                    <td>default | red | orange</td>
                                </tr>
                                <tr>
                                    <td>size</td>
                                    <td>设置按钮尺寸</td>
                                    <td>String</td>
                                    <td>sm | md | lg</td>
                                </tr>
                                <tr>
                                    <td>status</td>
                                    <td>设置按钮是否禁用</td>
                                    <td>String</td>
                                    <td>disabled</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Panel>
        </div>

        <div id="selector" class="section">
            <Panel title="Selector" :height="340" :text="text1">
                <div class="sample">
                    <Selector @value="getValue" :options="options"></Selector>
                    <span class="selected">选择的是: {{value}}</span>
                </div>
                <div class="api-wrap">
                    <div class="api-tittle">
                        <h3>API</h3>
                    </div>
                    <div class="api-content">
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    <th>参数</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>可选值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>options</td>
                                    <td>可选值</td>
                                    <td>Array</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>size</td>
                                    <td>设置选择框尺寸</td>
                                    <td>String</td>
                                    <td>sm | md | lg</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>设置默认提示</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>@value</td>
                                    <td>该事件获取选择的值</td>
                                    <td>Function</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Panel>
        </div>

        <div id="radio" class="section">
            <Panel title="Radio" :height="340" :text="text2">
                <div class="sample">
                    <Radio name="radio" :options="options"/>
                </div>
                <div class="api-wrap">
                    <div class="api-tittle">
                        <h3>API</h3>
                    </div>
                    <div class="api-content">
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    <th>参数</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>可选值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>options</td>
                                    <td>可选值</td>
                                    <td>Array</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>选择器名称</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Panel>
        </div>

        <div id="checkbox" class="section">
            <Panel title="Checkbox" :height="340" :text="text3">
                <div class="sample">
                    <Checkbox name="checkbox" :options="checkboxOptions"/>
                </div>
                <div class="api-wrap">
                    <div class="api-tittle">
                        <h3>API</h3>
                    </div>
                    <div class="api-content">
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    <th>参数</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>可选值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>options</td>
                                    <td>可选值</td>
                                    <td>Array</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>选择器名称</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Panel>
        </div>

        <div id="input" class="section">
            <Panel title="Input" :height="340" :text="text4">
                <div class="sample">
                    <div class="input-wrap">
                        <Input
                            width="200px"
                            @value="getInputValue"
                            placeholder="输入日期"
                            src="../../static/calendar.png"
                        />
                        <span class="input-text">输入内容: {{inputValue}}</span>
                    </div>
                </div>
                <div class="api-wrap">
                    <div class="api-tittle">
                        <h3>API</h3>
                    </div>
                    <div class="api-content">
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    <th>参数</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>可选值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>icon</td>
                                    <td>为输入框添加图标</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>默认占位字符串</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>width</td>
                                    <td>输入框宽度</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Panel>
        </div>

        <div id="cascader" class="section">
            <Panel title="Cascader" :height="340" :text="text4">
                <div class="sample">
                    <Cascader />
                </div>
                <div class="api-wrap">
                    <div class="api-tittle">
                        <h3>API</h3>
                    </div>
                    <div class="api-content">
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    <th>参数</th>
                                    <th>说明</th>
                                    <th>类型</th>
                                    <th>可选值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>icon</td>
                                    <td>为输入框添加图标</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>默认占位字符串</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>width</td>
                                    <td>输入框宽度</td>
                                    <td>String</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Panel>
        </div>

        <div id="footer" class="section">
            <Footer/>
        </div>
    </div>
</template>

<script>
import { Button, Selector, Radio, Checkbox, Input, Cascader } from "@/index.js";
import Panel from "@/components/Panel";
import Cube from "@/components/Cube";
import Footer from "@/components/Footer";
import {
    ButtonCode,
    SelectorCode,
    RadioCode,
    CheckboxCode,
    InputCode
} from "@/data/code.js";

export default {
    name: "home",
    components: {
        Button,
        Panel,
        Selector,
        Radio,
        Checkbox,
        Input,
        Cube,
        Footer,
        Cascader
    },
    watch: {
        value: function() {
            console.log(`value: ${this.value}`);
        }
    },
    data() {
        return {
            text: ButtonCode,
            text1: SelectorCode,
            text2: RadioCode,
            text3: CheckboxCode,
            text4: InputCode,
            options: ["option1", "option2", "option3"],
            checkboxOptions: [
                "checkbox-option1",
                "checkbox-option2",
                "checkbox-option3"
            ],
            value: "",
            inputValue: ""
        };
    },
    methods: {
        getValue(r) {
            this.value = r;
        },
        getInputValue(input) {
            this.inputValue = input;
        }
    }
};
</script>

<style lang='scss'>
@import "../../packages/style/common.scss";

// Phone
@media screen and (max-width: 500px) {
    #home {
        left: 0px;
        width: 100vw;
        padding-top: 80vh;
    }
    .section {
        width: 100%;
    }
}

// PC
@media screen and (min-width: 501px) {
    #home {
        left: 20vw;
        width: 80vw;
        padding-top: 90vh;
    }
    .section {
        width: 80%;
    }
}

#home {
    position: relative;
    @include flex(column, nowrap, flex-start, center);
}

.section-1 {
}
.section {
    position: relative;
    display: block;
    margin: 30px 0px;
}

#cube {
    position: fixed;
    top: 0;
    height: 100vh !important;
    weight: 100vw !important;
}

.selected {
    margin: 10px 10px;
    font-size: 14px;
    color: $dark-grey;
}

.input-wrap {
    position: relative;

    .input-text {
        color: $dark-grey;
        font-size: 14px;
    }
}
.sample {
    position: relative;
    width: 100%;
    @include flex(row, wrap, flex-start, center);
    z-index: 100;
}
.api-wrap {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    z-index: 10;
    & .api-tittle {
        padding: 50px 50px 10px;
        width: 100%;
    }
}
.api-content {
    & table,
    tr,
    thead,
    tbody {
        width: 100%;
    }
    & tr {
        height: 50px;
    }
    & th,
    td {
        border-bottom: 1px solid #ccc;
        text-align: center;
        font-size: 13px;
    }
}

#footer {
    width: 100%;
    margin: 30px 0px 0px;
}
</style>
