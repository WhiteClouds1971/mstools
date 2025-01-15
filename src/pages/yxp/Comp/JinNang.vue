<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';
  import model from '@/pages/yxp/Comp/model.js';
  import { cardName } from '@/config/GameCardConfig.js';

  const props = defineProps({
    model: String,
  });

  const all = reactive(cardName.JinNang);

  const emit = defineEmits(['select']);

  const handleClick = item => {
    emit('select', item);
  };
</script>

<template>
  <div style="width: 100%">
    <dynamic-grid-layout :fixed-columns="4">
      <selectable-button
        v-for="item in all"
        :key="item.id"
        :can-select="props.model === model.simpleMode"
        @click="handleClick(item)"
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
