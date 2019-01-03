<template>
    <div id="home">
        <div id="button" class="section">
            <Panel class="button-panel" :text=text :height=200 title='Button' :active=true>
                <div class="sample">
                    <m-btn size='sm'>Button</m-btn>
                    <m-btn theme='red'>Button</m-btn>
                    <m-btn size='lg' theme='orange'>Button</m-btn>
                    <m-btn theme='red' status='disabled'>Button</m-btn>
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
            <Panel title='Selector' :height=340 :text=text1>
                <Selector @value='getValue' :options=options>

                </Selector>
                <span class='selected'>选择的是: {{value}}</span>
            </Panel>
        </div>

        <div id="radio" class="section">
            <Panel title='Radio' :height=340 :text=text2>
                <Radio name="radio" :options=options />
            </Panel>
        </div>

        <div id="checkbox" class="section">
            <Panel title="Checkbox" :height=340 :text=text3>
                <Checkbox name="checkbox" :options=checkboxOptions />
            </Panel>
        </div>

        <div id="input" class="section">
            <Panel title="Input" :height=340 :text=text4>
                <div class="input-wrap">
                    <Input width="200px" @value="getInputValue" placeholder="输入日期" src="../../static/calendar.png"/>
                    <span class="input-text">输入内容: {{inputValue}}</span>
                </div>
            </Panel>
        </div>
    </div>
</template>

<script>
import {Button, Selector, Radio, Checkbox, Input} from '@/index.js'
import Panel from '@/components/Panel'
import {ButtonCode, SelectorCode, RadioCode, CheckboxCode, InputCode} from '@/data/code.js'

export default {
    name: 'home',
    components: {Button, Panel, Selector, Radio, Checkbox, Input},
    watch:{
        value: function(){
            console.log(`value: ${this.value}`)
        }
    },
    data() {
        return {
            text: ButtonCode,
            text1: SelectorCode,
            text2: RadioCode,
            text3: CheckboxCode,
            text4: InputCode,
            options: ['option1', 'option2', 'option3'],
            checkboxOptions: ['checkbox-option1', 'checkbox-option2', 'checkbox-option3'],
            value: "",
            inputValue: ""
        }
    },
    methods:{
        getValue(r){
            this.value = r
        },
        getInputValue(input){
            this.inputValue = input
        }
    }
}
</script>

<style lang='scss'>
@import '../../packages/style/common.scss';

@media screen and (max-width: 600px) {
    #home{
        left: 100px;
    }
    .section {
        width: 100%;
    }
}

@media screen and (min-width: 601px){
    #home{
        left: 20vw;
    }
    .section {
        width: 80%;
    }
}

#home {
    position: relative;
    width: 80vw;
    height: 100vh;
    padding: 50px 0px;
    @include flex(column, nowrap, flex-start, center);
}

.section {
    position: relative;
    display: block;
    margin: 30px 0px;
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
}
.api-wrap {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    & .api-tittle {
        padding: 50px 50px 10px;
        width: 100%;
    }
}
.api-content {
    & table, tr, thead, tbody {
        width: 100%;
    }
    & tr {
        height: 50px;
    }
    & th, td {
        border-bottom: 1px solid #ccc;
        text-align: center;
        font-size: 13px;
    }
}   
</style>
