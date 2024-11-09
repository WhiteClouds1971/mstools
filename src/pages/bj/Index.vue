<template>
  <div class="main">
    <bj-item
      v-model:value="item.qty"
      :name="item.name"
      :color="item.bgColor"
      v-for="item in data"
    ></bj-item>
  </div>
</template>

<script setup>
  import BjItem from '@/pages/bj/Comp/BjItem.vue';

  const data = reactive([
    {
      id: '1',
      code: '',
      name: '忍',
      qty: 0,
      bgColor: '#fff',
    },
  ]);
</script>

<style lang="less" scoped>
  .main {
    padding: 8px;
    background-color: #f7f8fa;
  }
</style>
