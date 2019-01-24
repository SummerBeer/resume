<template>
  <div id="cube-wrapper" :size="size" :class="[`cube-size-${size}`]">
    <div class="viewport">
      <h1 class="title-1">
        Huang
        <span class="title-2">YH</span>
      </h1>
      <div class="cube-content">
        <p>design by Huangyh. homepage:<a href="http://github.com/SummerBeer"> http://github.com/SummerBeer</a></p>
      </div>
      <div class="wrapper">
        <div class="block top"></div>
        <div class="block bottom"></div>
        <div class="block left"></div>
        <div class="block right"></div>
        <div class="block front"></div>
        <div class="block back"></div>
      </div>
    </div>
  </div>
</template>

<script>
/**
    Cube
    @param {String} size
        size: (small | default | big)
*/
export default {
  name: "cube",
  props: {
    size: {
      default: "default",
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../packages/style/common.scss";

#cube-wrapper {
  position: relative;
  height: 80vh;
  @include flex-center(row);
}
.viewport {
  position: relative;
  width: 100%;
  margin: 0px auto;
  perspective-origin: 50% 50%;
  perspective: 5000px;
}
.title-1 {
  display: block;
  position: relative;
  top: 10vw;
  height: 100%;
  text-align: center;
  color: $grey;
  font-size: 40px;
  z-index: 1;
}
.title-2 {
  color: $blue;
}
.cube-content {
  position: relative;
  top: 30vw;
  width: 80%;
  left: 10%;
  border-bottom: 1px solid $blue;
  padding-bottom: 20px;
  & p {
    text-align: center;
    color: $dark-grey;
  }
  & a {
      color: $blue;
  }
}

// PC
@media screen and (min-width: 500px) {
  $size: 10vw;
  $translate: 10vw;

  #cube-wrapper {
    top: -5vw;
  }
  .wrapper {
    position: relative;
    width: $size;
    height: $size;
    margin: 0px auto;
    transform-style: preserve-3d;
    animation: spin 10s infinite linear;
  }
  .block {
    position: absolute;
    text-align: center;
    line-height: $size;
    font-size: 4vw;
    top: 0;
    left: 0;
    width: $size;
    height: $size;
    transition: all 1s linear;
    transform-origin: center center center;
    font-weight: lighter;
    animation: color 8s infinite linear;
    // background-color: $blue;
    opacity: 0.5;
  }
  .front {
    transform: translateZ($translate);
  }
  .back {
    transform: translateZ(-$translate);
  }
  .left {
    transform: rotateY(90deg) translateZ(-$translate);
  }
  .right {
    transform: rotateY(90deg) translateZ($translate);
  }
  .top {
    transform: rotateX(90deg) translateZ($translate);
  }
  .bottom {
    transform: rotateX(90deg) translateZ(-$translate);
  }
}

// Phone
@media screen and (max-width: 500px) {
  $size: 25vw;
  $translate: 30vw;

  #cube-wrapper {
    top: -20vw;
  }

  .title-1 {
    position: relative;
    top: 30vw;
    height: 100%;
    text-align: center;
    color: $grey;
  }
  .cube-content {
    top: 40vw;
  }
  .wrapper {
    position: relative;
    width: $size;
    height: $size;
    margin: 0px auto;
    transform-style: preserve-3d;
    animation: spin 14s infinite linear;
  }
  .block {
    position: absolute;
    text-align: center;
    line-height: $size;
    font-size: 4vw;
    top: 0;
    left: 0;
    width: $size;
    height: $size;
    border: 1px solid #aaa;
    transition: all 5s linear;
    transform-origin: center center center;
    color: #444;
    font-weight: lighter;
    animation: color 5s infinite linear;
    opacity: 0.4;
  }
  .front {
    transform: translateZ($translate);
  }
  .back {
    transform: translateZ(-$translate);
  }
  .left {
    transform: rotateY(90deg) translateZ(-$translate);
  }
  .right {
    transform: rotateY(90deg) translateZ($translate);
  }
  .top {
    transform: rotateX(90deg) translateZ($translate);
  }
  .bottom {
    transform: rotateX(90deg) translateZ(-$translate);
  }
}

// Animation
@keyframes spin {
  0% {
    /* transform: rotate3d(0.5,0.5,0.5,0deg); */
    transform: rotateY(0deg) rotateX(0deg);
  }
  100% {
    /* transform: rotate3d(0.5,0.5,0.5,360deg); */
    transform: rotateY(360deg) rotateX(360deg);
  }
}
@keyframes color {
  0% {
    border-color: #ccc;
    background-color: #ccc;
  }
  25% {
    border-color: #b5ced9;
    background-color: #b5ced9;
  }
  50% {
    border-color: #e9e39a;
  }
  75% {
    border-color: #f9d355;
  }
  100% {
    border-color: #dea4a0;
    background-color: #aed9f4;
  }
}
</style>