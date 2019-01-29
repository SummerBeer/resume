<template>
  <div class="table-wrapper" :title="title" :header="header" :style="{width: width}">
    <!-- table title -->
    <div class="table-title-wrapper">
      <div class="table-title">{{title}}</div>
      <div class="table-operate">
        <span>column: {{row}}</span>
        <div class="row-add operate" @click="addColumn">+</div>
        <div class="row-minus operate" @click="removeColumn">-</div>
        <span>row: {{column}}</span>
        <div class="column-add operate" @click="column+=1">+</div>
        <div class="column-minus operate" @click="column-=1">-</div>
        <div class="save" @click="save">Save</div>
      </div>
    </div>

    <!-- table header -->
    <ul class="column table-header">
      <li class="row table-header-row" v-for="j in row" :key="j">
        <input type="text" v-model="value[j-1]">
      </li>
    </ul>

    <!-- table body -->
    <ul class="column" v-for="i in column" :key="i">
      <li class="row" v-for="j in row" :key="j">
        <input type="text" v-model="value[i*row+(j-1)]">
      </li>
    </ul>
  </div>
</template>

<script>
/**
 *
 * @param {String} [title="title"]
 * @param {Array} [header=] Table Header. Structure: ["Id", "Name" ...]
 * @param {event} [value=] return: [{key: value}, {...}]
 *
 */
export default {
  name: "m-table",
  props: {
    title: {
      default: "标题",
      type: String
    },
    header: {
      default: function() {
        return ["Id", "Name", "Position", "Department"];
      },
      type: Array
    }
  },
  computed: {
    width() {
      return `${this.row * 120}px`;
    }
  },
  data() {
    return {
      row: this.header.length || 3,
      column: 3,
      value: this.header
    };
  },
  methods: {

    save() {
      var data = [];
      for (let i = 0; i < this.column; i++) {
        var d = {};
        for (let j = 0; j < this.row; j++) {
          d[this.value[j]] = this.value[(i + 1) * this.row + j];
        }
        data.push(d);
      }
      data = JSON.stringify(data)
      console.log(data)
      this.$emit("value", data);
    },

    removeColumn(){
      var curRow = this.row
      this.row = curRow - 1

      for(let i=1; i<=this.column; i++){
        var d = i*(curRow-1)
        this.value.splice(d, 1)
      }
    },

    addColumn(){
      var curRow = this.row
      for(var i=1; i<=this.column; i++){
        this.value.splice(curRow*i+i-1, 0, "")
      }
      this.row += 1
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/common.scss";

.table-wrapper {
  position: relative;
  transition: 0.5s;
}

.table-title-wrapper {
  background-color: $dark;
  color: #aaa;
  font-size: 12px;
  @include flex(row, nowrap, space-between, center);
  width: 100%;
  height: 32px;
  padding: 0 1rem;

  & div {
    @include flex(row, nowrap, space-between, center);
  }

  & .table-title {
    color: white;
  }

  & .table-operate {
    width: 50%;
    min-width: 240px;
    & span {
      color: white;
    }
  }

  & .operate {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ddd;
    color: $dark;
    font-size: 20px;
    @include flex-center(row);
    &:hover {
      cursor: pointer;
      font-weight: bold;
      background-color: white;
    }
  }

  & .save {
    background-color: $blue;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      background-color: $dark-blue;
    }
  }
  &:hover {
    cursor: default;
  }
}

.column {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 30px;
  display: flex;
  @include flex(row, nowrap, space-between, center);
}
.row {
  border: 1px solid #ccc;
  height: 100%;
  & input {
    height: 100%;
    width: 100%;
    border: none;
    text-align: center;
  }
}
.table-header-row {
  & input {
    background-color: #eee;
    font-weight: bold;
  }
}
input {
  font-size: 13px;
  &:hover {
    cursor: text;
  }
}
</style>


