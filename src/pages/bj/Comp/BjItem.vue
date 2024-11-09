<script setup>
  import { ref, watch, computed } from 'vue';
  import CusStepper from '@/components/CusStepper.vue';
  import BjIcon from '@/pages/bj/Comp/BjIcon.vue';

  const props = defineProps({
    value: Number,
    name: String,
    color: String,
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
      style="width: 3.5cm; height: 2.5cm"
      :color="props.color"
      :name="props.name"
    ></bj-icon>
    <CusStepper v-model:value="data.qty" :min="0" />
  </div>
</template>

<style scoped lang="less">
  @icon-height: 20px;
  @text-shadow: 5px;
  .bj {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
