<template>
  <div class="main">
    <dynamic-grid-layout>
      <selectable-button
        v-for="(item, index) in data"
        :key="item.id"
        :can-select="true"
        :clear-selection="false"
      >
        {{ item.name }}
      </selectable-button>
    </dynamic-grid-layout>
    <van-floating-bubble axis="xy" icon="plus" magnetic="x" @click="onClick" />
  </div>
</template>

<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';

  const clearSelection = ref(false);
  const data = reactive([
    { id: 1, code: 1, name: '1号位' },
    { id: 2, code: 2, name: '2号位' },
    { id: 3, code: 3, name: '3号位' },
    { id: 4, code: 4, name: '4号位' },
    { id: 5, code: 5, name: '5号位' },
    { id: 6, code: 6, name: '6号位' },
    { id: 7, code: 7, name: '7号位' },
    { id: 8, code: 8, name: '8号位' },
  ]);
  const onClick = () => {
    data.push({
      id: data.length + 1,
      code: data.length + 1,
      name: `${data.length + 1}号位`,
    });
  };
</script>

<style lang="less" scoped>
  .main {
    padding: 8px;
    box-sizing: border-box; /* 添加此行 */
  }
</style>
