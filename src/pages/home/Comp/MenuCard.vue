<script setup>
  const props = defineProps({
    config: {
      type: Object,
      default: {},
    },
  });

  const cover = ref(props.config.cover);
</script>

<template>
  <div class="wrapper">
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
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .image {
    width:50px;
    height: 50px;
  }

  .title {
    display: flex;          /* 启用 Flexbox 帺局 */
    justify-content: center; /* 水平居中 */
    align-items: center;    /* 垂直居中 */
    flex: 1;                /* 占据剩余空间 */
    text-align: center;     /* 文本水平居中（对于单行文本） */
    font-size: 20px;        /* 字体大小 */
  }
</style>
