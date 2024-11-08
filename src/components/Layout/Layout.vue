<script setup>
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const title = computed(() => route.meta.title || route.name);

  const onClickLeft = () => {
    router.push('/home');
  };
  const onClickRight = () => {
    router.push('/search');
  };
</script>

<template>
  <van-nav-bar
    :title="title"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    fixed
    placeholder
  >
    <template #left>
      <van-icon name="home-o" size="24" />
    </template>
    <template #right>
      <van-icon name="search" size="24" />
    </template>
  </van-nav-bar>

  <router-view></router-view>
</template>

<style lang="less" scoped></style>
