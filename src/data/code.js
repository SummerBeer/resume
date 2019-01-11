var button = 
`
<m-btn size='sm'>Button</m-btn>
<m-btn theme='red'>Button</m-btn>
<m-btn size='lg' theme='orange'>Button</m-btn>
<m-btn theme='red' status='disabled'>Button</m-btn>
`

var select =
`
<template>
    <Selector @value='getValue' :options=options></Selector>
</template>

<script>
export default {
    data() {
        return {
            options: ['option1', 'option2', 'option3', 'option4'],
            value: ''
        }
    },
    methods: {
        getValue(value){
            this.value = value
        }
    }
}  
`

var radio = 
`
<template>
    <Radio :options=options @value="getValue" />
</template>

<script>
export default {
    data() {
        return {
            options: ['option1', 'option2', 'option3', 'option4'],
            value: ''
        }
    },
    methods: {
        getValue(value){
            this.value = value
        }
    }
}  
`

var checkbox = 
`
<template>
    <Checkbox name="checkbox" :options=options @values="getValue" />
</template>

<script>
export default {
    data() {
        return {
            options: ['option1', 'option2', 'option3', 'option4'],
            value: ''
        }
    },
    methods: {
        getValue(value){
            this.value = value
        }
    }
}  
`

var input = 
`
<template>
    <Input width="200px" @value="getInputValue" placeholder="输入日期" src="../../static/calendar.png"/>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        getInputValue(value){
            this.value = value
        }
    }
}  
`

var cascader = 
`
<template>
    <Cascader :options=cascaderOptions @value="getCascaderValue"/>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            cascaderOptions: [
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
            ]
        }
    },
    methods: {
        getCascaderValue(value){
            this.value = value
        }
    }
}  
`

module.exports = {
    ButtonCode: button,
    SelectorCode: select,
    RadioCode: radio,
    CheckboxCode: checkbox,
    InputCode: input,
    CascaderCode: cascader
}