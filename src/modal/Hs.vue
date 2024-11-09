<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';

  const data = reactive([
    {
      code: 'HT',
      title: '黑桃',
      icon: '♠️',
      color: '#000000',
    },
    {
      code: 'HT2',
      title: '红桃',
      icon: '♥️',
      color: '#FF0000',
    },
    {
      code: 'MH',
      title: '梅花',
      icon: '♣️',
      color: '#000000',
    },
    {
      code: 'FP',
      title: '方片',
      icon: '♦️',
      color: '#FF0000',
    },
  ]);
</script>

<template>
  <div class="wrapper">
    <dynamic-grid-layout :fixed-columns="1">
      <selectable-button
        :key="item.code"
        v-for="item in data"
        :can-select="true"
      >
        <span>{{ item.title }}</span>
        <span style="margin-left: 8px" :style="{ color: item.color }">
          {{ item.icon }}
        </span>
      </selectable-button>
    </dynamic-grid-layout>
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    width: 100%;
    padding: 20px;
  }
</style>
