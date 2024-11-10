<script setup>
  import HideCard from '@/pages/yxp/Comp/HideCard.vue';
  import { defineEmits } from 'vue';

  const props = defineProps({
    id: String,
    isHide: Boolean,
    name: String,
    hsIcon: String,
    hsColor: String,
    number: String,
  });

  const emit = defineEmits(['del']);

  const onDel = () => {
    emit('del', props.id);
  };
</script>

<template>
  <van-swipe-cell>
    <hide-card
      :key="props.id"
      :is-hide="props.isHide"
      :name="props.name"
      :hs-color="props.hsColor"
      :hs-icon="props.hsIcon"
      :number="props.number"
    ></hide-card>
    <template #right>
      <van-button
        square
        text="删除"
        type="danger"
        class="delete-button"
        @click="onDel"
      />
    </template>
  </van-swipe-cell>
</template>

<style scoped lang="less">
  .delete-button {
    height: 100%;
  }
</style>
