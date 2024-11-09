<script setup>
  import { ref, watch } from 'vue';

  const props = defineProps({
    title: String,
    value: Number,
    min: Number,
    max: Number,
  });

  const emit = defineEmits(['update:value']);

  const localValue = ref(props.value);

  // 监听 props.value 的变化并更新本地状态
  watch(
    () => props.value,
    newValue => {
      if (localValue.value !== newValue) {
        localValue.value = newValue;
      }
    }
  );

  // 当本地状态改变时，通知父组件
  watch(localValue, newValue => {
    emit('update:value', newValue);
  });
</script>

<template>
  <div class="wrapper-1">
    <div class="title">{{ props.title }}</div>
    <div>
      <van-stepper
        v-model="localValue"
        theme="round"
        input-width="120px"
        button-size="40px"
        disable-input
        :min="props.min"
        :max="props.max"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
  .wrapper-1 {
    display: flex;
    width: 100%;
    align-items: center; /* 垂直居中 */
    justify-content: space-around; /* 水平分布，使 title 和 stepper 分开 */
  }
</style>
