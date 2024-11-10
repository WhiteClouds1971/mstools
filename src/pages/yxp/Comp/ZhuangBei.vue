<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';
  import model from '@/pages/yxp/Comp/model.js';
  import { cardName } from '@/config/GameCardConfig.js';

  const props = defineProps({
    model: String,
  });

  const all = reactive(cardName.ZhuangBei);
</script>

<template>
  <div style="width: 100%">
    <dynamic-grid-layout :fixed-columns="3">
      <selectable-button
        v-for="item in all"
        :key="item.id"
        :can-select="props.model === model.simpleMode"
      >
        <div class="name">
          {{ item.name }}
        </div>
      </selectable-button>
    </dynamic-grid-layout>
  </div>
</template>

<style scoped lang="less">
  .name {
    font-family: 'YouYuan', sans-serif; /* 使用浏览器自带的更简洁字体 */
    color: black; /* 文字颜色为白色 */
    font-weight: bold;
    text-align: center;
  }
</style>
