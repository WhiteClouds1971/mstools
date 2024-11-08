<template>
  <div class="container">
    <!-- 显示所有元素 -->
    <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :class="{ 'item-selected': isSelected(index) }"
        @click="toggleSelection(index)"
    >
      {{ item }}号位
    </div>

    <!-- 添加新成员按钮 -->
    <button class="add-button" @click="addItem">添加成员</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([1, 2, 3, 4, 5, 6, 7, 8]); // 初始值
const selectedIndices = ref(new Set()); // 存储选中的索引

const toggleSelection = (index) => {
  if (selectedIndices.value.has(index)) {
    selectedIndices.value.delete(index); // 取消选中
  } else {
    selectedIndices.value.add(index); // 选中
  }
};

const isSelected = (index) => {
  return selectedIndices.value.has(index);
};

const addItem = () => {
  const nextValue = items.value.length + 1;
  items.value.push(nextValue); // 添加新元素
};
</script>

<style lang="less">
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(25% - 10px); /* 每行4个元素，减去gap */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &.item-selected {
    background-color: #e6f7ff; /* 当元素被选中时，改变背景颜色 */
    border: 2px solid #1890ff; /* 加粗边框 */
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2); /* 增加阴影 */
    transform: scale(1.05); /* 放大效果 */
  }
}

.add-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #157bd7; /* 悬停时改变背景颜色 */
  }
}
</style>