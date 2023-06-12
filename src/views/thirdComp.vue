<template>
  <div class="thirdComp">
    <img :src="imgurl" alt="美景" />
    <div class="pages">
      <p :style="{
        background: n == numb ? '#A8BAE3' : ''
      }" @click="numb = n" v-for="n in 5" :key="n + 'num'">
        {{ n }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
let numb = ref(1);
let times = null;
// eslint-disable-next-line vue/return-in-computed-property
let imgurl = computed(() => {
  switch (numb.value) {
    case 1:
      return require('../assets/one.jpg');
    case 2:
      return require('../assets/two.jpg');
    case 3:
      return require('../assets/three.jpg');
    case 4:
      return require('../assets/four.jpg');
    case 5:
      return require('../assets/five.jpg');
  }
});
onMounted(() => {
  times = setInterval(() => {
    if (numb.value == 5) {
      numb.value = 0;
    }
    numb.value++;
  }, 3000);
});
onBeforeUnmount(() => {
  clearInterval(times);
});
// console.log(resultdat)
</script>
<style lang="scss" scoped>
.thirdComp {
  .pages {
    p {
      border-radius: 50%;
      text-align: center;
      line-height: 3vw;
      width: 3vw;
      height: 3vw;
      background: #4285c5;
    }

    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    display: flex;
    width: 20vw;
    height: 4vw;
    // background: red;
    position: absolute;
    right: 1vw;
    bottom: 0.3vw;
  }

  img {
    width: 100%;
    height: 100%;
  }

  position: relative;
  text-align: left;
  margin: auto;
  width: 50vw;
  height: 50vh;
  overflow: hidden;
  // background:red
}
</style>
