<script setup>
  import JinBen from '@/pages/yxp/Comp/JinBen.vue';
  import model from '@/pages/yxp/Comp/model.js';
  import JinNang from '@/pages/yxp/Comp/JinNang.vue';
  import ZhuangBei from '@/pages/yxp/Comp/ZhuangBei.vue';

  const data = reactive({
    activeNames: [],
    model: model.simpleMode,
  });
</script>

<template>
  <div class="main-1">
    <jin-ben :model="data.model"></jin-ben>
    <jin-nang style="margin-top: 8px" :model="data.model"></jin-nang>
    <van-collapse style="margin-top: 8px" v-model="data.activeNames">
      <van-collapse-item title="装备牌" name="1">
        <zhuang-bei
          :model="data.model"
        ></zhuang-bei>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<style scoped lang="less">
  .main-1 {
    padding: 8px;
    background-color: #f7f8fa;
  }
</style>
