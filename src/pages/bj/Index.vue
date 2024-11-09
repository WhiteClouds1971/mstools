<template>
  <div class="main">
    <dynamic-grid-layout
      style="padding: 8px; background-color: #fff"
      :fixed-columns="6"
    >
      <selectable-button
        v-for="bj in all"
        :can-select="false"
        :key="bj.id"
        @click="add(bj)"
        :style="{ backgroundColor: bj.bgColor }"
      >
        <div class="name">
          {{ bj.name }}
        </div>
      </selectable-button>
    </dynamic-grid-layout>
    <bj-item
      style="margin-top: 10px"
      v-model:value="item.qty"
      :name="item.name"
      :color="item.bgColor"
      :qty-max="item.qtyMax"
      v-for="item in data"
    ></bj-item>
  </div>
</template>

<script setup>
  import BjItem from '@/pages/bj/Comp/BjItem.vue';
  import bjConfig from '@/config/BjConfig.js';
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';

  const all = reactive(bjConfig);

  const data = reactive([]);

  const add = config => {
    data.push(config);
  };
</script>

<style lang="less" scoped>
  .main {
    padding: 8px;
    background-color: #f7f8fa;

    .name {
      font-family: 'YouYuan', sans-serif; /* 使用浏览器自带的更简洁字体 */
      top: 50%;
      left: 50%;
      color: white; /* 文字颜色为白色 */
      font-weight: bold;
      text-align: center;
    }
  }
</style>
