<template>

<ul id="radio" 
:options=options 
:name=name>
    <li class="option-item" v-for="(option, index) in options" :key=index @click="doChoice(option)">
      <span class="option-name" :class="{active: (active==option)}">{{option}}:</span>
      <span :class="{active: (active==option)}" class="option-circle"></span>
    </li>
</ul>

</template>

<script>
/**
 * 
 * Radio
 * @param {Array} options=[]
 * @param {String} name=""
 * @param {event} @value=
 * 
 */
export default {
    name: 'radio',
    props: {
        options: {
            default: function() {
                return ['option1', 'option2', 'option3']
            },
            type: Array
        },
        name: {
            default: 'default-name',
            type: String
        }
    },
    data() {
        return {
            active: ""
        }
    },
    methods: {
       doChoice(option){
         this.active = option
         this.$emit("value", option)
       }
    }
}

</script>


<style lang="scss" scoped>
@import '../style/common.scss';

#radio {
  @include flex(row, nowrap, flex-start, center);
}
.option-item {
  @include flex(row, nowrap, space-between, center);
  margin-right: 10px;
  & span {
    margin: 0 5px;
  }
  &:hover {
    cursor: pointer;
    span {
      color: $dark-blue;
    }
  }
}
.option-circle {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.option-circle.active::before {
  display: block;
  content: " ";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $dark-blue;
}
.option-name.active {
  color: $dark-blue;
}
</style>