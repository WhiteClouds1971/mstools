<script setup>
  import { ref, watch, computed } from 'vue';
  import CusStepper from '@/components/CusStepper.vue';
  import BjIcon from '@/pages/bj/Comp/BjIcon.vue';

  const props = defineProps({
    value: Number,
    name: String,
    color: String,
    qtyMax: Number,
  });

  const emit = defineEmits(['update:value']);

  const data = ref({
    qty: props.value,
  });

  // 监听 data.qty 的变化，并触发自定义事件更新父组件中的值
  watch(
    () => data.value.qty,
    newValue => {
      emit('update:value', newValue);
    }
  );
</script>

<template>
  <div class="bj">
    <bj-icon
      style="width: 2.5cm; height: 2.5cm"
      :color="props.color"
      :name="props.name"
    ></bj-icon>

    <van-stepper
        v-model="data.qty"
        theme="round"
        input-width="140px"
        button-size="40px"
        disable-input
        :min="0"
        :max="props.max"
    />
<!--    <CusStepper v-model:value="data.qty" :min="0" :max="props.qtyMax" />-->
  </div>
</template>

<style scoped lang="less">
  @icon-height: 20px;
  @text-shadow: 5px;
  .bj {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Heiti SC', serif;
    background-color: #fff;
    width: 100%;
    padding: 8px;
  }

  .margin-top {
    margin-top: 20px;
  }
</style>
