<script setup>
  import SelectableButton from '@/components/SelectableButton.vue';

  const props = defineProps({
    name: String,
    hsIcon: String,
    hsColor: String,
    number: String,
  });
</script>

<template>
  <selectable-button style="background-color: white" :can-select="false">
    <div class="card-wrapper">
      <div class="label-wrapper">
        <div class="hs" :style="{ color: hsColor }">
          {{ hsIcon }}
        </div>
        <div class="number">{{ number }}</div>
      </div>
      <div class="title-wrapper">{{ name }}</div>
    </div>
  </selectable-button>
</template>

<style scoped lang="less">
  .card-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .label-wrapper {
      width: 30px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .number {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .hs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
  }
</style>
