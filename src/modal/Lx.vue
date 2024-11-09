<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';

  const data = reactive({
    clear: false,
    lx: [
      {
        code: 'JB',
        title: '基本牌',
      },
      {
        code: 'JN',
        title: '锦囊牌',
      },
      {
        code: 'ZB',
        title: '装备牌',
      },
    ],
  });
</script>

<template>
  <div ref="el" class="wrapper">
    <dynamic-grid-layout :fixed-columns="1">
      <selectable-button
        :key="item.code"
        v-for="item in data.lx"
        :can-select="true"
        :clear-selection="data.clear"
        @clear-selection="
          () => {
            data.clear = false;
          }
        "
      >
        <span>{{ item.title }}</span>
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
