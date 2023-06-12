<template>
  <div class="secondComp">
    <input type="text" v-model="inputvalue.item" placeholder="请输入" />
    <ul class="list">
      <li v-for="({ item }, index) in resultdat" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
let inputvalue = reactive({
  item: ''
});
const items = reactive([
  {
    item: '拉美学者：中国为脱贫攻坚所做的努力令人震撼'
  },
  {
    item: '他们没有考上大学，却成了世界冠军'
  },
  {
    item: '英媒：经济学家预测美国需至少加息两次才能平息通胀'
  },
  {
    item: '专题｜学习贯彻习近平新时代中国特色社会主义思想主题教育'
  },
  {
    item: '专题｜新时代首都发展巡礼 2023年全民数字素养与技能提升'
  },
  {
    item: '饶毅称院士增选中有行贿受贿 中科院回应'
  },
  {
    item: '中国GDP“第一区”，迎来新任一把手'
  },
  {
    item: '2023年高考成绩什么时候公布？多地高考成绩查询时间汇总'
  },
  {
    item: '多措并举促进应届高校毕业生就业 网络招聘活动忙'
  },
  {
    item: '筑牢“绿色屏障” 习近平指引科学防沙治沙之路'
  },
  {
    item: '空难后，4名儿童亚马孙雨林奇迹生存40天，秘诀是13岁姐姐'
  },
  {
    item: '泽连斯基感谢美提供21亿美元 普京称俄罗斯军工业发展迅猛'
  },
  {
    item: '英国前首相约翰逊被迫辞去议员职务：有人想“把我赶出去”'
  },
  {
    item: '阿根廷队前往奥体中心训练：途中粉丝热情欢呼'
  },
  {
    item: '上海网红街店家贴出警示偷拍告示:注意防范,保护个人肖像权'
  },
  {
    item: '网传“男生制止校园霸凌被同学围堵”，警方已介入'
  },
  {
    item: '网传山西襄垣县第三中学女生遭多人掌掴？学校：正研究处理'
  },
  {
    item: '大叔自证未偷拍仍遭曝光最新进展'
  },
  {
    item: '大写的心疼！湖北一地遭遇冰雹 成熟待摘果子被砸落'
  },
  {
    item: '699元都买不了袜子？张雨绮就争议言论道歉'
  }
]);

let resultdat = computed(() => {
  let data = items.filter((el) => {
    if (inputvalue.item == '') {
      return el;
    } else {
      return el.item.includes(inputvalue.item);
    }
  });
  return data;
});

// console.log(resultdat)
</script>
<style lang="scss" scoped>
.secondComp {
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

    &::-webkit-scrollbar {
      display: none;
    }

    list-style-position: inside;
    margin: 2vh auto 0;
    width: 90%;
    height: 80vh;
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
