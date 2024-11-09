<template>
  <div class="main">
    <dynamic-grid-layout
      style="padding: 8px; background-color: #fff"
      :fixed-columns="6"
    >
      <selectable-button
        v-for="bg in all"
        :can-select="false"
        :key="bg.id"
        @click="add(bg)"
      >
        {{ bg.name }}
      </selectable-button>
    </dynamic-grid-layout>
    <bj-item
      style="margin-top: 10px"
      v-model:value="item.qty"
      :name="item.name"
      :color="item.bgColor"
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
  }
</style>
