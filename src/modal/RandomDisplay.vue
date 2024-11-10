<template>
  <div class="wrapper">
    <div v-for="(item, index) in selectedItems" :key="item.id" class="item">
      <div v-if="item.title" class="title">{{ item.title }}</div>
      <div class="des">{{ item.des }}</div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import seedrandom from 'seedrandom';

  // 定义props
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    model: {
      type: String,
      required: true,
      default: 'unique',
      validator: value => ['unique', 'repeat'].includes(value),
    },
  });

  // 初始化选中项列表
  let selectedItems = ref([]);

  // 根据model值选择不同的随机算法
  const getRandomItems = () => {
    // 使用当前时间戳作为随机数生成器的种子
    const rng = seedrandom(Date.now().toString());

    const { items, count, model } = props;
    let tempItems = [...items];
    const result = [];

    for (let i = 0; i < count; i++) {
      if (model === 'unique' && tempItems.length > 0) {
        // 如果不允许重复，则从剩余项中选择
        const randomIndex = Math.floor(rng() * tempItems.length);
        result.push(tempItems[randomIndex]);
        tempItems.splice(randomIndex, 1); // 删除已选中的项以避免重复
      } else {
        // 允许重复，直接从原数组中随机选择
        const randomIndex = Math.floor(rng() * items.length);
        result.push(items[randomIndex]);
      }
    }

    return result;
  };

  // 监听props的变化，当props变化时重新选择随机项
  watch(
    [() => props.items, () => props.count, () => props.model],
    () => {
      selectedItems.value = getRandomItems();
    },
    { immediate: true }
  );
</script>

<style scoped>
  .wrapper {
    padding: 8px;
    background-color: #f7f8fa;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      padding: 8px;

      .title {
        width: 100%;
        font-family: 'Heiti SC', serif;
        font-size: 20px;
        font-weight: bold;
        line-height: 20px;
        height: 20px;
        text-align: center;
        margin-bottom: 16px;
      }

      .des {
        width: 100%;
        font-size: 16px;
        text-align: center;
      }
    }
  }
</style>
