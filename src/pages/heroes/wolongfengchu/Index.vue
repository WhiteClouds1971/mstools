<script setup>
  import JinBen from '@/pages/yxp/Comp/JinBen.vue';
  import model from '@/pages/yxp/Comp/model.js';
  import JinNang from '@/pages/yxp/Comp/JinNang.vue';
  import zhuanHuanConfig from '@/config/ZhuanHuanConfig.js';
  import YyzhItem from '@/pages/yyzh/Comp/YyzhItem.vue';

  const item = zhuanHuanConfig.find(item => item.code === 'wolongfengchu');

  const data = reactive({
    model: model.simpleMode,
    yl: item,
  });
</script>

<template>
  <div class="main-1">
    <jin-ben :model="data.model"></jin-ben>
    <jin-nang style="margin-top: 8px" :model="data.model"></jin-nang>
    <yyzh-item  :item="data.yl"></yyzh-item>
  </div>
</template>

<style scoped lang="less">
  .main-1 {
    padding: 8px;
    background-color: #f7f8fa;

    .card {
      .show {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
    }
  }
</style>
