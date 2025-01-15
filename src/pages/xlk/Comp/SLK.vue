<script setup>
  import shiLiConfig from '@/config/ShiLiConfig.js';
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';

  const props = defineProps({
    fixedColumns: Number,
    modelValue: String, // 添加modelValue属性
  });

  const emit = defineEmits(['update:modelValue']); // 定义emit用于更新父组件中的值

  const sl = reactive(shiLiConfig);

  const data = reactive({
    currentCode: props.modelValue, // 初始化currentCode为modelValue的值
  });

  watch(
    () => props.modelValue,
    newValue => {
      data.currentCode = newValue; // 监听modelValue的变化并更新currentCode
    }
  );

  const selected = item => {
    return item.code === data.currentCode;
  };

  const onClick = item => {
    data.currentCode = item.code;
    emit('update:modelValue', item.code); // 更新父组件中的值
  };
</script>

<template>
  <div class="main">
    <dynamic-grid-layout :fixed-columns="props.fixedColumns">
      <selectable-button
        v-for="item in sl"
        :can-select="true"
        :selected="selected(item)"
        @click="onClick(item)"
      >
        <!--        <div class="name">-->
        <!--          {{ item.name }}-->
        <!--        </div>-->
        <van-image :src="item.cover" width="50px" height="50px"></van-image>
      </selectable-button>
    </dynamic-grid-layout>
  </div>
</template>

<style scoped lang="less">
  .main {
    width: 100%;

    .name {
      font-family: 'YouYuan', sans-serif; /* 使用浏览器自带的更简洁字体 */
      top: 50%;
      left: 50%;
      color: black; /* 文字颜色为黑色 */
      font-weight: bold;
      text-align: center;
    }
  }
</style>
