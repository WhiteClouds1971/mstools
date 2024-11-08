<template>
  <div class="wrapper">
    <div class="hjz">
      <div class="title">护甲值</div>
      <div class="margin-top number">{{ data.hjz }}</div>
    </div>
    <div class="hjz title margin-top">
      <div class="title">体力值</div>
      <div class="margin-top number">
        <span>{{ data.tlz }}</span>
        /
        <span>{{ data.tlsx }}</span>
      </div>
    </div>
    <cus-stepper class="margin-top" v-model:value="data.hjz" title="护甲值" />
    <cus-stepper class="margin-top" v-model:value="data.tlz" title="体力值" />
    <cus-stepper
      class="margin-top"
      v-model:value="data.tlsx"
      title="体力上限"
    />
  </div>
</template>

<script setup>
  import CusStepper from '@/components/CusStepper.vue';

  const data = reactive({
    hjz: 0, // 护甲值
    tlz: 0, // 体力值
    tlsx: 0, // 体力上线
  });
</script>

<style lang="less" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    font-family: 'Heiti SC', serif;

    .title {
      font-size: 25px;
    }

    .number {
      font-size: 35px;
    }

    .hjz {
      background-color: #fff;
      width: 100%;
      padding: 8px; /* 添加一些内边距以增加美观性 */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .margin-top {
    margin-top: 20px;
  }
</style>
