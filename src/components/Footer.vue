<template>
    <div class="" id="footer"
    :text=text>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    name: "footer",
    props: {
        text: {
            default: "development by HuangYH. homepage:http://github.com/SummerBeer",
            type: String
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../packages/style/common.scss";

#footer {
    position: relative;
    width: 100%;
    height: 80px !important;
    @include flex-center(row);
    background-color: #4a4a4a;

    & p{
        color: #fff;
        text-weight: lighter;
    }
}
</style>
