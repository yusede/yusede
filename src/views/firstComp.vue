<template>
  <div class="firstComp">
    <input type="text" v-model="inputdata.item" placeholder="请输入" />
    <button @click="adddata">add</button>
    <ul class="list">
      <li v-for="({ item }, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
let arrtest=[255,654,354,]
console.log(arrtest)
let inputdata = reactive({
  item: ''
});
const items = reactive([
  {
    item: '初始化信息'
  }
]);
let adddata = () => {
  if (!inputdata.item) {
    return;
  }
  let newdata = JSON.parse(JSON.stringify(inputdata));
  items.push(newdata);
  inputdata.item = '';
};
</script>
<style lang="scss" scoped>
.firstComp {
  input {
    &:focus {
      box-shadow: 1px 1px 5px #2c3e50;
    }

    border: none;
    border-radius: 0.5vw;
    padding: 0 5px;
    outline: none;
    width: 20vw;
    height: 3vh;
    color: #2c3e50;
    margin-left: 3vw;
    box-shadow: 1px 1px 1px #2c3e50;
  }

  button {
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.3vw;
    height: 3vh;
    width: 5vw;
    margin-left: 1vw;
    color: #2c3e50;
    border: none;
    background: radial-gradient(#f0f0f0, #6ca3d6);
  }

  .list {
    li {
      text-align: left;
      text-indent: 0.5vw;
      line-height: 4vh;
      color: #2c3e50;
      height: 4vh;
      border-bottom: 1px dashed #7d9dcd;
      overflow: hidden;
    }

    list-style-position: inside;
    margin: 2vh auto 0;
    width: 90%;
    min-height: 10vh;
    max-height: 80vh;
    overflow: auto;
    border: 1px solid #9db3c9;
    border-radius: 0 5% 0 5%;
    box-sizing: border-box;
    padding: 3vh;
  }

  text-align: left;
  margin: auto;
  width: 40vw;
  height: 90vh;
  overflow: hidden;
}
</style>
