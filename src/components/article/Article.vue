<template>
  <div class="m-article"
    :title=title
    :author=author
    :date=date
    :img=img
    :shadow=shadow
    :theme=theme
    :class="{shadow: shadow, black: theme=='black'}"
    >
    <h1 class="title">{{title}}</h1>
    <div class="info">
      <span class="author">作者:{{author}}</span>
      <span class="date">日期:{{date}}</span>
    </div>
    <div v-if=img class="img">
      <img :src=img />
    </div> 
    <div class="content">
      <slot /> 
    </div>
  </div>
</template>


<script>
/**
 * Article
 * @param {String} title="title"
 * @param {author} author="author"
 * @param {date} date="2010/01/01"
 * @param {String} img="static/.../xxx.png"
 * @param {Boolean} shadow=false
 * @param {slot} <p> <h1> <h2> <h3>
 * @param {String} theme="default"
 * 
 */
export default {
  name: "m-article",
  props: {
    title: {
      default: "title",
      type: String
    },
    author: {
      default: "author",
      type: String
    },
    date: {
      default: "2010/01/01",
      type: String
    },
    img: {
      default: "",
      type: String
    },
    shadow: {
      default: true,
      type: Boolean
    },
    theme: {
      default: "default",
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
@import "../style/common.scss";

.m-article {
  border: 1px solid #f5f5f5;
  padding: 1rem 2rem 3rem;
  border-radius: 4px;
  & .title {
    padding: 2rem 0;
    width: 100%;
    text-align: center;
    color: $dark;
    font-size: 1.6rem;
    border-bottom: 1px solid #ddd;
  }
  & .info span {
    color: $dark-grey;
    font-size: 13px;
    margin-right: 2rem;
  }
  & .img {
    margin-top: 2rem;
    width: 100%;
    & img {
      width: 100%;
    }
  }
  & .content {
    color: $dark;
    font-size: 14px;
    line-height: 1.8rem;
    padding: 1rem 0;
    & h1,& h2,& h3 {
      margin-top: 2rem;
    }
    & p {
      text-indent: 2rem;
    }
    & img {
      width: 100%;
    }
  }
}
.m-article.shadow{
  border: 1px solid #eee;
  box-shadow: 4px 4px 4px 1px rgba(100,100,100,0.2);
}
.m-article.black {
  border: 1px solid $black;
  background-color: $black;
  & .title {
    color: #ddd;
  }
  & p, & span{
    color: $grey;
  }
  & h1, & h2, & h3, & span{
    color: #ccc;
  }
}
.m-article.black.shadow {
  box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.4);
}
@media screen and (max-width: 768px){
  .m-article {
    padding: 1rem;
  }
}
</style>


