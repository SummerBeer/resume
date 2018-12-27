<template>
    <div id="home">
        <div class="section">
            <Panel :text=text :height=200>
                <m-btn>Button</m-btn>
            </Panel>
        </div>
    </div>
</template>

<script>
import {Button} from '@/index.js'
import Panel from '@/components/Panel'
import {ButtonCode} from '@/data/code.js'

export default {
    name: 'home',
    components: {Button, Panel},
    data() {
        return {
            text: ButtonCode
        }
    }
}
</script>

<style lang='postcss'>
#home {
    position: relative;
    width: 80vw;
    height: 100vh;
    padding: 50px 0px;
}

.section {
    display: flex;
    justify-content: center;
}
</style>


