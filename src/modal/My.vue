<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';

  const data = reactive({
    clear: false,
    my: [
      {
        code: '1',
        title: '直取敌营',
      },
      {
        code: '2',
        title: '擂鼓进军',
      },
      {
        code: '3',
        title: '扰阵疲敌',
      },
      {
        code: '4',
        title: '闭门守城',
      },
      {
        code: '5',
        title: '全军突击',
      },
      {
        code: '6',
        title: '围城断粮',
      },
      {
        code: '7',
        title: '供卫中军',
      },
      {
        code: '8',
        title: '出城迎战',
      },
    ],
  });
</script>

<template>
  <div ref="el" class="wrapper">
    <div class="shuoming">
      若你的选项和目标的选项不同，则你谋奕成功，否则谋奕失败。
    </div>
    <dynamic-grid-layout :fixed-columns="1">
      <selectable-button
        :key="item.code"
        v-for="item in data.my"
        :can-select="true"
        :clear-selection="data.clear"
        @clear-selection="
          () => {
            data.clear = false;
          }
        "
      >
        <span>{{ item.title }}</span>
      </selectable-button>
    </dynamic-grid-layout>
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    width: 100%;
    padding: 20px;

    .shuoming {
      padding: 0 0 10px 0;
    }
  }
</style>
