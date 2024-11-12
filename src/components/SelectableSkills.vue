<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';

  const props = defineProps({
    skills: {
      type: Array,
      default: () => [],
    },
  });

  const canSelect = canSelect => {
    return canSelect !== false;
  };
</script>

<template>
  <dynamic-grid-layout :fixed-columns="1">
    <selectable-button
      v-for="item in props.skills"
      :key="item.id"
      :can-select="canSelect(item.canSelect)"
      :selected="item.selected"
    >
      <div class="item">
        <div class="title">{{ item.title }}</div>
        <div class="des">{{ item.des }}</div>
      </div>
    </selectable-button>
  </dynamic-grid-layout>
</template>

<style scoped lang="less">
  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      width: 100%;
      font-family: 'YouYuan', sans-serif; /* 使用浏览器自带的更简洁字体 */
      font-size: 14px;
      line-height: 14px;
      text-align: center;
    }

    .des {
      width: 100%;
      font-size: 12px;
      //padding: 8px;
      padding-top: 8px;
    }
  }
</style>
