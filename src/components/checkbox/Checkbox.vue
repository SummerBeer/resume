<template>
    <div id="checkbox" 
    :name=name
    :options=options
    >
        <div class="option-wrap" v-for="(option, index) in options" :key=index @click="choice(option, index)">
            <label :class="[`option-name-${status[index]?'active':''}`]" class="option-name" :for=option>{{option}}:</label>
            <input :id=option type="checkbox" :name=name :value=option v-model=status[index] />
            <span>
                <span :class="[`input-${status[index]?'active':''}`]"></span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "checkbox",
    props: {
        name: {
            default: "checkbox",
            type: String
        },
        options: {
            default: function(){
                return ['option1', 'option2', 'option3']
            },
            type: Array
        }
    },
    filters: {

    },
    data() {
        return {
            status: [],
            values: []
        }
    },
    methods: {
        choice(option, index){
            this.status[index] = !this.status[index]
            if(this.status[index]){
                this.values[index] = option
            }
            else{
                delete this.values[index]
            }
            this.$emit("values", this.values)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

#checkbox {
    position: relative;
    @include flex(row, wrap, flex-start, center);
}

.option-wrap {
    @include flex(row, nowrap, flex-start, center);
    margin: 10px 0px;
    margin-right: 20px;

    & label {
        color: $dark-grey;
    }
    & label:hover {
        color: $dark-blue;
        transition: .2s;
    }
}

.option-name-active {
    color: $dark-blue !important;
}

input[type=checkbox] {
    position: relative;
    z-index: 10;
    display: block;
    opacity: 0;
    right: -20px;
    width: 20px;
    height: 20px;
}
input[type=checkbox]+span {
    position: relative;
    z-index: 1;
    border: 1px solid $grey;
    @include flex-center(row);
    width: 14px;
    height: 14px;
    background-color: transparent;
}
.input-active {
    display: block;
    width: 10px;
    height: 10px;
    background-color: $dark-blue;
}
</style>
