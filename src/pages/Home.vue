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
                <Radio :options=options @value="getValue" />
            </Panel>
        </div>
    </div>
</template>

<script>
import {Button, Selector, Radio} from '@/index.js'
import Panel from '@/components/Panel'
import {ButtonCode, SelectorCode, RadioCode} from '@/data/code.js'

export default {
    name: 'home',
    components: {Button, Panel, Selector, Radio},
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
            value: '',
            options: ['option1', 'option2', 'option3']
        }
    },
    methods:{
        getValue(r){
            this.value = r;
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
</style>
