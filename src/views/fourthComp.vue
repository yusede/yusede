<template>
  <div class="fourthComp">
    <button class="openmodal" @click="showmodal = true">open</button>

    <div @click="showmodal = false" v-if="showmodal" class="modal">
      <div @click.stop="" class="innermodal">
        <input
          @blur="titleedit = true"
          @dblclick="titleedit = false"
          type="text"
          v-model="title"
          :readonly="titleedit"
        />
        <textarea
          @blur="detailedit = true"
          @dblclick="detailedit = false"
          type="text"
          v-model="detail"
          :readonly="detailedit"
        ></textarea>
        <input
          @blur="bottomedit = true"
          @dblclick="bottomedit = false"
          type="text"
          v-model="bottom"
          :readonly="bottomedit"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let showmodal = ref(false);
let titleedit = ref(false);
let detailedit = ref(true);
let bottomedit = ref(true);
let title = ref('标题(双击可修改标题)');
let detail = ref('内容(双击可修改内容)');
let bottom = ref('底部(双击可修改底部)');

// console.log(resultdat)
</script>
<style lang="scss" scoped>
.fourthComp {
  .openmodal {
    display: block;
    margin: auto;
    cursor: pointer;
    border: none;
    font-weight: bold;
    border-radius: 0.3vw;
    height: 3vh;
    width: 5vw;
    color: #2c3e50;
    background: radial-gradient(#f0f0f0, #6ca3d6);
  }

  .modal {
    .innermodal {
      input {
        // background: ;
        outline: none;
        border: none;
        height: 6vh;
        width: 24vw;
        border-bottom: 1px solid rgb(230, 232, 236);
        color: #101a30;
      }

      textarea {
        color: #101a30;
        border: none;
        border-bottom: 1px solid rgb(230, 232, 236);
        outline: none;
        width: 24vw;
        height: 10vh;
        resize: none;
        overflow: auto;
      }

      box-shadow: 3px 3px 10px #101a30;
      margin: 30vh auto 0;
      width: 30vw;
      height: 30vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      background: white;
      box-sizing: border-box;
      padding: 0 3vw;
    }

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(27, 44, 82, 0.8);
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
