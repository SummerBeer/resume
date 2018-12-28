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

module.exports = {
    ButtonCode: button,
    SelectorCode: select
}