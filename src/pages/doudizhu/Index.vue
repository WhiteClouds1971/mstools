<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';
  import DynamicName from '@/components/DynamicName.vue';
  import config from '@/config/DouDiZhu.js';

  const data = reactive({
    ...config,
    currentWJ: {},
  });

  const add = wj => {
    data.currentWJ = wj;
  };
</script>

<template>
  <div class="container">
    <div
      style="
        width: 100%;
        background-color: white;
        padding: 8px;
        margin-top: 10px;
      "
    >
      <div class="jj" :key="item.id" v-for="item in data.jj">
        <b>{{ item.title }}:</b>
        {{ (item.values || []).join('、') }}
      </div>
    </div>

    <div class="thwj">
      <dynamic-grid-layout
        :fixed-columns="6"
        style="display: flex; flex-direction: row"
      >
        <selectable-button
          v-for="wj in data.thwj"
          :can-select="false"
          @click="add(wj)"
          :key="wj.id"
          :style="{ backgroundColor: wj.btnColor }"
        >
          <dynamic-name :name="wj.name"></dynamic-name>
        </selectable-button>
      </dynamic-grid-layout>

      <div style="margin-top: 10px">
        <van-image
          v-for="image in data.currentWJ.images"
          :src="image"
        ></van-image>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .container {
    display: flex;
    flex-direction: column;
    background-color: #f7f8fa;

    .jj {
      width: 100%;
      padding: 2px 0;
    }

    .thwj {
      width: 100%;

      .name {
        font-family: 'YouYuan', sans-serif; /* 使用浏览器自带的更简洁字体 */
        top: 50%;
        left: 50%;
        color: white; /* 文字颜色为白色 */
        font-weight: bold;
        text-align: center;
      }
    }
  }
</style>
