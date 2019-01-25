<template>
    <div id="home">
        <Nav>
            <Search slot="search"/>
        </Nav>
    </div>
</template>

<script>
import {Nav, Search} from "../index.js"

export default {
    name: "home",
    components: {Nav, Search},
    data() {
        return {

        }
    }
}
</script>


<style lang="scss" scoped>

</style>

