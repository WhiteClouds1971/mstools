<script setup>
  import TILK from '@/components/TILK.vue';
  import bjConfig from '@/config/BjConfig.js';
  import BjItem from '@/pages/bj/Comp/BjItem.vue';
  import dqConfig from '@/config/DqConfig.js';

  const data = reactive({
    qty: 0,
    tilk: {
      tlz: 3,
      tlsx: 3,
    },
  });

  const sw = bjConfig.find(it => it.code === 'songwei');

  const dq = computed(() => dqConfig.find(it => it.code === 'moucaopi'));
</script>

<template>
  <div class="wrapper">
    <bj-item
      v-model:value="data.qty"
      :name="sw.name"
      :color="sw.bgColor"
    ></bj-item>
    <t-i-l-k style="margin-top: 20px" :tilk="data.tilk"></t-i-l-k>
    <van-image style="margin-top: 20px" :src="dq.images[0]"></van-image>
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    padding: 8px;
    background-color: #f7f8fa;
  }
</style>
