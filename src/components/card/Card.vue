<template>
  <article class="card"
    :title=title
    :desc=desc
    :date=date
    :width=width
    :img=img
    :hasBorder=hasBorder
    >
    <div class="card-wrapper"
      :style="{width: width, height: height}"
      :class="{cardBorder: !hasBorder}">
      <a href="#">
        <img class="card-img" :src=img>
        <h1 class="card-text card-title">{{title}}</h1>
        <p class="card-text card-desc">{{desc}}</p>
        <p class="card-text card-date">{{date}}</p>
      </a>
    </div>
  </article>
</template>


<script>
/**
 * 
 * Card 
 * @param {String} title="标题"
 * @param {String} desc=""
 * @param {String} date=new Date().toLocaleString()
 * @param {String} width="300px"
 * @param {String} img=""
 * @param {Boolean} hasBorder=false
 * 
 */
export default {
  name: "card",
  props: {
    title: {
      default: "Title",
      type: String
    },
    desc: {
      default: "short article description ...",
      type: String
    },
    date: {
      default: new Date().toLocaleString(),
      type: String
    },
    width: {
      default: "300px",
      type: String
    },
    img: {
      default: "",
      type: String
    },
    hasBorder: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    height() {
      return this.width * 1.4 + "px"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.card-wrapper {
  position: relative;
  background-color: white;
  padding: 10px;
  box-shadow: 1px 2px 3px 1px rgba(80,80,80,0.1);
  & a {
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  & .card-img {
    width: 70%;
    margin-left: 15%;
  }
  & .card-title {
    text-align: center;
    font-size: 1.4rem;
    color: $dark-blue;
  }
  & .card-desc {
    font-size: 1rem;
    text-align: center;
    max-height: 3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: $dark-grey;
  }
  & .card-date {
    font-size: 0.8rem;
    text-align: right;
    color: $grey;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px 1px rgba(80,80,80,0.2);
    transition: .4s;
  }
}

.card-wrapper.cardBorder{
  & img {
    width: 100%;
    margin: 0;
  }
}
</style>


