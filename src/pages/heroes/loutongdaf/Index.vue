<template>
  <div class="wrapper">
    <cus-stepper class="qty" v-model:value="data.qty" title="出牌数" :min="0" />

    <div class="card">
      <span>获得牌：{{ card }}</span>
    </div>
  </div>
</template>

<script setup>
  import CusStepper from '@/components/CusStepper.vue';
  import random from '@/util/random.js';

  const data = reactive({
    qty: 0,
  });

  const card = computed(() => {
    let str = [];
    if (data.qty !== 0 && data.qty % 3 === 0) {
      str.push(random(['【杀】', '【闪】'], 1));
    }
    if (data.qty !== 0 && data.qty % 5 === 0) {
      str.push(random(['【桃】', '【酒】'], 1));
    }
    if (data.qty !== 0 && data.qty % 8 === 0) {
      str.push(random(['【五中生有】', '【决斗】'], 1));
    }
    return str.join("、");
  });
</script>

<style lang="less" scoped>
  .wrapper {
    padding: 8px;
    background-color: #f7f8fa;

    .qty {
      width: 100%;
      background-color: white;
      padding: 8px;
    }

    .card {
      width: 100%;
      margin-top: 20px;
      background-color: white;
      padding: 8px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
