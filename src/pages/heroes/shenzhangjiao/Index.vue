<script setup>
  import { cardNumber } from '@/config/GameCardConfig.js';
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';

  const all = reactive(cardNumber);

  const data = reactive({
    huangQty: 0,
  });

  const onClick = item => {
    data.huangQty += item.value;
  };
</script>

<template>
  <div class="main-1">
    <dynamic-grid-layout :fixed-columns="7">
      <selectable-button
        :can-select="false"
        v-for="item in all"
        :key="item.id"
        @click="onClick(item)"
      >
        {{ item.name }}
      </selectable-button>
    </dynamic-grid-layout>
    <div class="qty">
      <span>黄：{{ data.huangQty }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
  .main-1 {
    padding: 8px;
    background-color: #f7f8fa;

    .qty {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
