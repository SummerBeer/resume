<template>
    <div id="panel" :title=title :text=text :active=active>
        <span class='panel-title'>{{title}}</span>
        <div class="panel-content">
            <slot></slot>
        </div>
        <div class="panel-reverse" :height=h :style="{height: h}" :class="[`panel-reverse-${status}`]" v-highlight>
            <pre>
                <code>
                    {{text}}
                </code>
            </pre>
        </div>
        <div class="panel-reverse-toggle" @click='toggleReverse'>
            <span>{{panelToggleTips}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'panel',
    props: {
        title: {
            default: 'title',
            type: String
        },
        text: {
            default: 'some code ...',
            type: String
        },
        height: {
            default: 0,
            type: Number
        },
        active: {
            default: false,
            type: Boolean
        }
    },
    computed: {
        h() {
            return this.isActive? ''+this.height+'px' : '0px'
        },
        panelToggleTips() {
            return this.isActive? '隐藏代码' : '显示代码'
        }
    },
    data() {
        return {
            status: '',
            isActive: this.active
        }
    },
    methods: {
        toggleReverse(){
            this.isActive = !this.isActive;
            this.status = this.isActive ? 'active': ''
        }
    }
}
</script>

<style lang='scss'>
@import '../../packages/style/common.scss';

#panel {
    width: 100%;
    position: relative;
    background-color: #fff;
    align-items: center;
}

#panel:hover {
    box-shadow: 3px 5px 8px 2px #ccc;
    transition: 1s;
}

.panel-title {
    position: relative;
    width: 50vw;
    left: 5vw;
    display: block;
    padding: 5px 20px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
}

.panel-content {
    position: relative;
    padding: 10px 30px;
    @include flex(row, wrap, flex-start, center);

    & button {
        margin: 10px 20px;
    }
}

.panel-reverse-toggle {
    height: 40px;
    width: 100%;
    border-top: 1px solid #eee;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    font-weight: lighter;
}
.panel-reverse-toggle:hover {
    background-color: #eee;
    color: $blue;
    font-weight: bold;
    transition: 1s;
    cursor: pointer;
}


.panel-reverse {
    padding: 0px 20px;
    position: relative;
    overflow: hidden;
}
.panel-reverse-active {
    border-top: 1px solid #eee;
    transition: height 0.5s;
}
</style>


