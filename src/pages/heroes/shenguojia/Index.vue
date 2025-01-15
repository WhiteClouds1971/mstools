<script setup>
  import TILK from '@/components/TILK.vue';
  import JSWZ from '@/pages/jswz/Index.vue';
  import SLK from '@/pages/xlk/Comp/SLK.vue';
  import dqConfig from "@/config/DqConfig.js";

  const data = reactive({
    tilk: {
      tlz: 3,
      tlsx: 3,
    },
  });

  const dq = computed(() => dqConfig.find(it => it.code === 'shenguojiazuoxin'));
</script>

<template>
  <div class="wrapper">
    <s-l-k :fixed-columns="5"></s-l-k>
    <j-s-w-z style="margin-top: 10px" :fixed-columns="4"></j-s-w-z>
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
