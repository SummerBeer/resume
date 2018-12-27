<template>
    <button :theme=theme :size=size :status=status class='btn' :class="[`btn-theme-${theme}`, `btn-size-${size}`, `btn-status-${status}`]">
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
            default: 'default',
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

<style lang='postcss'>
@import url('../style/color.postcss');

.btn {
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
}
.btn:hover {
    cursor: pointer;
    
}

.btn-size-default {
    padding: 5px 10px;
    font-size: 16px;
}
.btn-size-sm {
    padding: 0.4 1.5vw;
    font-size: 1.6vw;
}

.btn-theme-default {
    background-color: $blue;
    color: #ffffff;
    border: none;
    border-radius: 2px;
}

.btn-icon {
    
}
    
</style>


