<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';
  import { cardHs } from '@/config/GameCardConfig.js';

  const props = defineProps({
    fixedColumns: {
      type: Number,
      default: 1,
    },
  });

  const data = reactive({
    clear: false,
    hs: cardHs,
  });

  const el = ref(null);

  const onClick = () => {
    data.clear = true;
  };
</script>

<template>
  <div ref="el" class="wrapper">
    <dynamic-grid-layout :fixed-columns="props.fixedColumns">
      <selectable-button
        :key="item.code"
        v-for="item in data.hs"
        :can-select="true"
        :clear-selection="data.clear"
        @clear-selection="
          () => {
            data.clear = false;
          }
        "
      >
        <span>{{ item.title }}</span>
        <span style="margin-left: 8px" :style="{ color: item.color }">
          {{ item.icon }}
        </span>
      </selectable-button>
    </dynamic-grid-layout>
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    width: 100%;
    padding: 20px;
  }
</style>
