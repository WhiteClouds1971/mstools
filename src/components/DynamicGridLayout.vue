<template>
  <div class="container">
    <!-- 遍历插槽内容并绑定样式 -->
    <component
      v-for="(item, index) in slotItems"
      :key="index"
      :is="item"
      :style="getItemStyle(index)"
    />
  </div>
</template>

<script setup>
  import { ref, useSlots, computed } from 'vue';

  // 获取插槽内容
  const slots = useSlots();
  const slotItems = computed(() => {
    // 返回插槽内容数组，每个元素都是 VNode
    return slots.default()[0].children || [];
  });

  // 动态设置样式以实现响应式布局
  const getItemStyle = index => {
    const totalItems = slotItems.value.length;
    let columns = Math.floor(Math.sqrt(totalItems));
    if (totalItems <= 8) {
      columns = 1;
    }
    if (columns > 4) {
      columns = 4;
    }
    const width = `calc(${100 / columns}% - ${(10 * (columns - 1)) / columns}px)`;
    return {
      width,
    };
  };
</script>

<style lang="less">
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
</style>
