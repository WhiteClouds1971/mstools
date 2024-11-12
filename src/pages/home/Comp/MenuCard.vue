<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    config: {
      type: Object,
      default: () => ({}),
    },
  });

  const cover = ref(props.config.cover);

  const emit = defineEmits(['click']);

  // 定义点击事件处理函数
  const handleClick = () => {
    // 发射一个自定义事件，名称为 'item-click'，并将配置对象作为参数传递
    emit('click', props.config);
  };
</script>

<template>
  <div class="wrapper-fjaf" @click="handleClick">
    <van-image class="image" fit="cover" :src="cover" />
    <van-divider vertical :style="{ borderColor: '#1989fa', height: '100%' }" />
    <div class="title">
      <van-text-ellipsis
        rows="1"
        expand-text="展开"
        collapse-text="收起"
        :content="props.config.name"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
  .wrapper-fjaf {
    display: flex;
    width: 100%;
    padding: 8px;
    box-sizing: border-box; /* 添加此行 */
    background-color: #ffffff;
  }

  .image {
    width: 40px;
    height: 40px;
  }

  .title {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
</style>
