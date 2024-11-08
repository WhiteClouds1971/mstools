<script setup>

</script>

<template>
  <van-nav-bar title="标题">
    <template #left>
      <van-icon name="home-o" size="18" />
    </template>
  </van-nav-bar>

  <router-view></router-view>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
    <van-tabbar-item replace to="/setting" icon="setting-o">
      设置
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less" scoped>
  .main {
    width: 100%;
    height: 100%;
  }
</style>
