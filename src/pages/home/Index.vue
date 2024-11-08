<script setup>
  import MenuCard from '@/pages/home/Comp/MenuCard.vue';
  import menuCardConfig from '@/config/MenuCardConfig.js';
</script>

<template>
  <div class="wrapper">
    <van-grid :gutter="10" :column-num="2" clickable :center="false">
      <van-grid-item
        v-for="config in menuCardConfig"
        :key="config.code"
        @click="config.callback(config)"
      >
        <menu-card :config="config" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<style lang="less" scoped>
  .wrapper {
    padding: 8px 0;
  }
</style>
