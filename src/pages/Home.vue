<template>
    <div id="home">
        <div id="button" class="section">
            <Panel :text=text :height=200 title='Button' :active=true>
                <m-btn size='sm'>Button</m-btn>
                <m-btn theme='red'>Button</m-btn>
                <m-btn size='lg' theme='orange'>Button</m-btn>
                <m-btn theme='red' status='disabled'>Button</m-btn>
                <br/>
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
    @include flex(column, wrap, center, left);

    .input-text {
        color: $dark-grey;
        font-size: 14px;
    }
}
</style>
