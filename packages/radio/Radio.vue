<template>

<div class="radio" :options=options :name=name>
    <div class="option-wrap" v-for="(option, index) in options" :key=index @click="choice(option)">
        <label class="option-name" :class="[`option-${option==active?'active':''}`]" :for=option> {{option}}: </label>
        <input :id=option class="option" :name=name type="radio" :value=option v-model="active">
        <span>
            <span :class="[`input-${option==active?'active':''}`]"></span>
        </span>
    </div>
</div>

</template>

<script>

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
            active: this.options[0]
        }
    },
    methods: {
        choice(option) {
            this.$emit("value", option)
        }
    }
}

</script>


<style lang="scss" scoped>
@import '../style/common.scss';

.radio {
    position: relative;
    @include flex(row, wrap, flex-start, center);
}

.option-wrap {
    @include flex(row, nowrap, flex-start, center);
    margin: 10px 0px;
    margin-right: 20px;

    & .option-name {
        color: $dark-grey;
    }
    & .option-name:hover {
        color: $dark-blue;
        transition: .2s;
    }
}

.option-active {
    font-weight: 500;
    color: $dark-blue !important;
}

input {
    position: relative;
    z-index: 10;
    opacity: 0;
    right: -14px;
}
input[type=radio]+span {
    position: relative;
    z-index: 1;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid $dark-blue;
    z-index: 1;
}
.input-active {
    position: relative;
    display: block;
    z-index: 10;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: $dark-blue;
}
</style>