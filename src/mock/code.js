var table =
  `
<template>
  <Table @value="getTableValue" />
</template>

<script>
  export default {
    data(){
      return {
        value: ""
      }
    },
    methods: {
      getTableValue(r){
        this.value = r
      }
    }
  }
</script>
`

var card =
  `
<template>
  <Card width="300px" img="static/img/img1.jpeg"/>
  <Card width="300px" title="MyTitle" desc="This is a short description..." img="static/img/img2.jpeg" date="2018/01/20" :hasBorder=true />
</template>
`

var input =
  `
<template>
  <Input/>
  <Input icon="static/img/icon1.png" width="300px"/>
</template>
`

var checkbox =
  `
<template>
  <Checkbox :options=options name="checkbox" />
</template>

<script>
  export default{
    data(){
      return {
        options: ['option1','option2','option3']
      }
    }
  }
</script>
`

var selector =
  `
<template>
  <Selector :options=options name="selector" />
</template>

<script>
  export default{
    data(){
      return {
        options: ['option1','option2','option3']
      }
    }
  }
</script>
`

var cascader =
  `
<template>
  <Cascader :options=options @value="getCascaderValue" separator="|"/>
</template>

<script>
  export default{
    data(){
      return {
        options: [{
            key: "选项1",
            value: "option1",
            children: [{
                key: "选项1.1",
                value: "option1-1",
                children: [{
                    key: "选项1.1.1",
                    value: "option1-1-1"
                }]
            }]
        }]
      },
    methods: {
      getCascaderValue(r){
        this.value = r
      }
    }
    }
  }
</script>
`


module.exports = { table, card, input, checkbox, selector, cascader }