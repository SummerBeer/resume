<template>
    <div id="home">
        <Nav>
            <Search slot="search"/>
        </Nav>

        <Table title="title" class="table" />
    </div>
</template>

<script>
import {Nav, Search, Table} from "../index.js"

export default {
    name: "home",
    components: {Nav, Search, Table},
    data() {
        return {

        }
    }
}
</script>


<style lang="scss" scoped>
@import "../components/style/common.scss";

#home {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.table {
    position: absolute;
    top: 6rem;
    left: 2rem;
}
</style>

