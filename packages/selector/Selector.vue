<template>
    <div id="selector" :value=value :options=options :size=size >
        <div class="selected" :class="[`selected-size-${size}`]" id="1" name=value @click.stop='picker'>
            {{valueText}}
            <ul class='items' :class="[`items-${status}`]">
                <li class='item' v-for="(value, index) in options" :key=index @click.stop="picked(value)">
                    {{value}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selector',
    props: {
        options: {
            default: function(){
                return  ['option1', 'option2', 'option3']},
            type: Array
        },
        size: {
            default: 'default',
            type: String
        },
        value: {
            default: '请选择',
            type: String
        }
    },
    mounted(){
        document.addEventListener('click', ()=>{
            if(this.isActive){
                this.isActive = false
                this.valueText = '请选择'
                this.$emit('value', '')
            }
        })
    },
    computed:{
        status(){
            return this.isActive ? 'active': ''
        }
    },
    data() {
        return {
            isActive: false,
            valueText: this.value,
        }
    },
    methods: {
       picker(){
           this.isActive = !this.isActive
       },
       picked(value){
           this.isActive = false
           this.valueText = value
           this.$emit('value', this.valueText)
       }
    }
}
</script>

<style lang='scss' scoped>
@import '../style/common.scss';

* {
    @include init;
}
#selector {
    position: relative;
    padding: 0px 20px;
    min-width: 100px;
    border-radius: 3px;
    @include flex-center(row);
    z-index: 0;
}
.selected:hover {
    cursor: pointer;
    border: 1px solid $grey;
}
.selected {
    display: block;
    position: relative;
    margin: 0px 10px;
    border: 1px solid #ddd;
    width: 150px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    font-size: 14px;
    color: $dark-grey;
    z-index: 1000;
}
.selected-size-sm {
    width: 100px;
    height: 30px;
}

.items {
    position: absolute;
    overflow: hidden;
    height: 0;
    left: 0;
    width: 150px;
    top: 34px;
    background-color: #fff;
}
.items-active {
    border: 1px solid #ddd;
    overflow-y: scroll;
    height: 140px;
    transition: 0.3s;
}
.item {
    width: 100%;
    padding: 5px 0px;
    text-align: center;
    color: $dark-grey;
}
.item:hover {
    background-color: #eee;
    font-weight: bold;
}
</style>

