<template>
  <div class="container">
    <!-- 显示所有元素 -->
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="item"
      :class="{ 'item-selected': isSelected(item.id) }"
      @click="handleClick(item, index)"
      :style="getItemStyle(index)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, defineEmits, watch } from 'vue';

  // 定义props接收父组件传递的数据
  const props = defineProps({
    initialItems: Array, // 初始数据数组
    canSelect: Boolean, // 控制是否可以选中
    clearSelection: Boolean, // 控制是否清除选中状态
  });

  // 定义emit用于向父组件发送事件
  const emit = defineEmits(['itemClicked', 'clearSelection', 'addItem']);

  // 数据初始化
  const items = ref(props.initialItems);

  // 监听props.initialItems的变化，当其变化时，更新本地数据
  watch(
    () => props.initialItems,
    newItems => {
      items.value = newItems;
    },
    { immediate: true }
  );

  // 监听props.clearSelection的变化，当其变为true时，清除所有选中状态
  watch(
    () => props.clearSelection,
    newValue => {
      if (newValue) {
        selectedIndices.value.clear();
        emit('clearSelection', false); // 发送事件告诉父组件已处理清除操作
      }
    }
  );

  // 处理点击事件
  const handleClick = (item, index) => {
    if (props.canSelect) {
      if (selectedIndices.value.has(item.id)) {
        selectedIndices.value.delete(item.id); // 取消选中
      } else {
        selectedIndices.value.add(item.id); // 选中
      }
    }
    emit('itemClicked', { ...item }); // 向父组件发送点击事件
  };

  // 判断是否选中
  const selectedIndices = ref(new Set());
  const isSelected = id => {
    return selectedIndices.value.has(id);
  };

  // 动态设置样式以实现响应式布局
  const getItemStyle = index => {
    const totalItems = items.value.length;
    let columns = Math.floor(Math.sqrt(totalItems)); // 计算列数
    if (totalItems <= 8) {
      columns = 1;
    }
    if (columns > 4) {
      columns = 4;
    }
    const width = `calc(${100 / columns}% - 16px - ${((10 + 4 + 2) * (columns - 1)) / columns}px)`; // 计算宽度
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
    padding: 8px;
    justify-content: center; /* 使容器内的项目水平居中 */
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;

    &.item-selected {
      background-color: #e6f7ff; /* 当元素被选中时，改变背景颜色 */
      border: 2px solid #1890ff; /* 加粗边框 */
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2); /* 增加阴影 */
      transform: scale(1.05); /* 放大效果 */
    }
  }
</style>
