<template>
    <div id="panel" :title=title :text=text>
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
            isActive: false
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

<style lang='postcss'>
@import url('../../packages/style/color.postcss');

@media screen and (max-width: 600px) {
    #panel {
        width: 100%;
    }
}

@media screen and (min-width: 601px){
    #panel {
        width: 60vw;
    }
}

#panel {
    position: relative;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
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
    position: relative;
    overflow: hidden;
    padding: 10px 20px;
}
.panel-reverse-active {
    transition: height 0.5s;
}
</style>


