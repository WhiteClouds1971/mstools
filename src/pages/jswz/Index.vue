<template>
  <div class="main">
    <dynamic-grid-layout
      :fixed-columns="props.fixedColumns"
      :auto-layout-threshold="8"
      :max-columns="4"
    >
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

  const props = defineProps({
    fixedColumns: Number,
  });
  const clearSelection = ref(false);
  const data = reactive([
    { id: 1, code: 1, name: '1' },
    { id: 2, code: 2, name: '2' },
    { id: 3, code: 3, name: '3' },
    { id: 4, code: 4, name: '4' },
    { id: 5, code: 5, name: '5' },
    { id: 6, code: 6, name: '6' },
    { id: 7, code: 7, name: '7' },
    { id: 8, code: 8, name: '8' },
  ]);
  const onClick = () => {
    data.push({
      id: data.length + 1,
      code: data.length + 1,
      name: `${data.length + 1}`,
    });
  };
</script>

<style lang="less" scoped>
  .main {
    padding: 8px;
    box-sizing: border-box; /* 添加此行 */
  }
</style>
