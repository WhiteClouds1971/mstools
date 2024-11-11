<script setup>
  import CusStepper from '@/components/CusStepper.vue';

  const props = defineProps({
    tilk: {
      type: Object,
      default: () => {
        return {
          tlz: 1,
          tlsx: 1,
        };
      },
    },
  });

  watch(
    () => props.tilk.tlsx,
    newValue => {
      if (newValue < props.tilk.tlz) {
        props.tilk.tlz = newValue;
      }
    }
  );

  watch(
    () => props.tilk.tlz,
    newValue => {
      if (newValue > props.tilk.tlsx) {
        props.tilk.tlsx = newValue;
      }
    }
  );
</script>

<template>
  <div>
    <div class="hjz" style="margin-top: 20px">
      <div class="number">
        <span>{{ props.tilk.tlz }}/</span>
        <span>{{ props.tilk.tlsx }}</span>
        <van-icon
          class="iconfont icon-shoushuchuxieliang icon margin-left"
          color="#FF0000"
        />
      </div>
    </div>

    <div class="qty">
      <cus-stepper
        style="margin-top: 20px"
        v-model:value="props.tilk.tlz"
        title="体力值"
        :min="1"
      />
      <cus-stepper
        style="margin-top: 20px"
        v-model:value="props.tilk.tlsx"
        title="体力上限"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
  .hjz {
    width: 100%;
    padding: 8px; /* 添加一些内边距以增加美观性 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    .number {
      font-size: 110px;
      font-weight: bold;
      position: relative; /* 设置为相对定位 */

      .icon {
        font-size: 40px;
        font-weight: bold;
        position: absolute; /* 设置为绝对定位 */
        bottom: 25px; /* 距离底部0距离 */
        right: -50px; /* 距离右侧0距离 */
      }
    }
  }

  .qty {
    padding: 8px 0;
    background-color: #fff;
    width: 100%;
  }
</style>
