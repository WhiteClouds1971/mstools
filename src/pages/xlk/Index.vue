<template>
  <div class="wrapper">
    <s-l-k v-model:model-value="value" :fixed-columns="1"></s-l-k>
  </div>
</template>

<script setup>
  import SLK from '@/pages/xlk/Comp/SLK.vue';

  const value = ref(null);
</script>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    padding: 8px;
    background-color: #f7f8fa;
  }
</style>
