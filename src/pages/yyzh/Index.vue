<template>
  <div class="main-1">
    <dynamic-grid-layout
      style="padding: 8px; background-color: #fff"
      :fixed-columns="6"
    >
      <selectable-button
        v-for="config in all"
        :can-select="false"
        :key="config.id"
        @click="add(config)"
        :style="{ backgroundColor: config.bgColor }"
      >
        <div class="name">
          {{ config.name }}
        </div>
      </selectable-button>
    </dynamic-grid-layout>
    <div style="margin-top: 10px; background-color: white" v-for="item in data">
      <yyzh-item :item="item"></yyzh-item>
    </div>
  </div>
</template>

<script setup>
  import YyzhItem from '@/pages/yyzh/Comp/YyzhItem.vue';
  import zhuanHuanConfig from '@/config/ZhuanHuanConfig.js';
  import SelectableButton from '@/components/SelectableButton.vue';
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';

  const all = reactive(zhuanHuanConfig);

  const data = reactive([]);

  const add = config => {
    data.push(config);
  };
</script>

<style lang="less" scoped>
  .main-1 {
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
