<script setup>
  import MenuCard from '@/pages/home/Comp/MenuCard.vue';
  import menuCardConfig from '@/config/MenuCardConfig.js';
  import { useRouter } from 'vue-router';
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';

  const router = useRouter();
  const callback = config => {
    if (config.url) {
      router.push(config.url);
      return;
    }
    config.callback(config);
  };
</script>

<template>
  <div class="wrapper">
    <dynamic-grid-layout :fixed-columns="2">
      <menu-card
        v-for="config in menuCardConfig"
        :key="config.code"
        :config="config"
        @click="callback(config)"
      />
    </dynamic-grid-layout>
  </div>
</template>

<style lang="less" scoped>
  .wrapper {
    padding: 8px;
    box-sizing: border-box; /* 添加此行 */
  }
</style>
