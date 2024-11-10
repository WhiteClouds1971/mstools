<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';
  import dqConfig from '@/config/DqConfig.js';
  import DynamicName from '@/components/DynamicName.vue';

  const all = reactive(dqConfig);

  const data = reactive({
    dq: {},
  });

  const add = config => {
    data.dq = config;
  };
</script>

<template>
  <div class="wrapper-1">
    <dynamic-grid-layout :fixed-columns="6">
      <selectable-button
        v-for="dq in all"
        :can-select="false"
        :key="dq.id"
        @click="add(dq)"
        :style="{ backgroundColor: dq.bgColor }"
      >
        <dynamic-name :name="dq.name"></dynamic-name>
      </selectable-button>
    </dynamic-grid-layout>
    <div style="margin-top: 10px">
      <van-image v-for="image in data.dq.images" :src="image"></van-image>
    </div>
  </div>
</template>

<style scoped lang="less">
  .wrapper-1 {
    padding: 8px;
    background-color: #f7f8fa;

    .name {
      font-family: 'YouYuan', sans-serif; /* 使用浏览器自带的更简洁字体 */
      top: 50%;
      left: 50%;
      color: white; /* 文字颜色为白色 */
      font-weight: bold;
      text-align: center;
    }
  }
</style>
