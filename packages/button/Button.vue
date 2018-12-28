<template>
    <button :theme=theme :size=size :status=status class='btn' :class="[`btn-theme-${theme}`, `btn-size-${size}`, `btn-status-${status}`]" :disabled=status>
        <label class='btn-text'>
            <slot></slot>
        </label>
        <i class="btn-icon" v-if=icon>
        </i>
    </button>
</template>

<script>
export default {
    name: 'm-btn',
    props: {
        theme: {
            default: 'default',
            type: String
        },
        size: {
            default: 'default',
            type: String
        },
        status: {
            default: '',
            type: String
        },
        icon: {
            default: '',
            type: String
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style lang='scss'>
@import '../style/common.scss';

.btn {
    position: relative;
    border-radius: 2px;
    @include init;
    @include flex-center(row);
}
.btn *:hover {
    cursor: pointer;
}
.btn-status-disabled *:hover {
    cursor: not-allowed;
}

// size
.btn-size-default {
    padding: 5px 10px;
    font-size: 16px;
}
.btn-size-sm {
    padding: 4px 8px;
    font-size: 14px;
}
.btn-size-md {
    padding: 5px 10px;
    font-size: 16px;
}
.btn-size-lg {
    padding: 6px 12px;
    font-size: 18px;
}

// theme
.btn-theme-default {
    background-color: $blue;
    color: #ffffff;
}
.btn-theme-default:hover {
    background-color: $dark-blue;
    transition: 0.3s;
}
.btn-theme-default:active {
    background-color: $blue;
    transition: .2s;
}
.btn-theme-red {
    background-color: $red;
    color: #fff;
}  
.btn-theme-red:hover {
    background-color: $dark-red;
    transition: 0.3s;
} 
.btn-theme-red:active {
    background-color: $red;
    transition: .2s;
}
.btn-theme-orange {
    background-color: $orange;
    color: #fff;
}  
.btn-theme-orange:hover {
    background-color: $dark-orange;
    transition: 0.3s;
} 
.btn-theme-orange:active {
    background-color: $orange;
    transition: .2s;
}

// status
.btn-status-disabled {
    background-color: $grey;
}
.btn-status-disabled:hover {
    background-color: $grey;
}
</style>


