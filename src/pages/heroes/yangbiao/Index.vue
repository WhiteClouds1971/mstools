<script setup>
  import bjConfig from '@/config/BjConfig.js';
  import _ from 'lodash';
  import BjItem from '@/pages/bj/Comp/BjItem.vue';
  import CusStepper from '@/components/CusStepper.vue';

  const data = reactive({
    lunQty: 0,
    tlz: 3,
    tlsx: 3,
  });

  const lun = computed(() => {
    return _.cloneDeep(bjConfig.find(it => it.code === 'lun'));
  });

  watch(
    () => data.lunQty,
    newValue => {
      if (newValue <= 4) {
        data.tlsx++;
        data.tlz++;
      } else if (newValue <= 7) {
        data.tlsx--;
      }
    }
  );

  watch(
    () => data.tlsx,
    newValue => {
      if (newValue < data.tlz) {
        data.tlz = newValue
      }
    }
  );

  watch(
      () => data.tlz,
      newValue => {
        if (newValue > data.tlsx) {
          data.tlsx = newValue
        }
      }
  );
</script>

<template>
  <div class="wrapper">
    <bj-item
      v-model:value="data.lunQty"
      :name="lun.name"
      :color="lun.bgColor"
    ></bj-item>

    <div class="hjz" style="margin-top: 20px">
      <div class="number">
        <span>{{ data.tlz }}/</span>
        <span>{{ data.tlsx }}</span>
        <van-icon
          class="iconfont icon-shoushuchuxieliang icon margin-left"
          color="#FF0000"
        />
      </div>
    </div>

    <div class="qty">
      <cus-stepper
        style="margin-top: 20px"
        v-model:value="data.tlz"
        title="体力值"
        :min="1"
      />
      <cus-stepper
        style="margin-top: 20px"
        v-model:value="data.tlsx"
        title="体力上限"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    padding: 8px;
    background-color: #f7f8fa;
    font-family: 'Heiti SC', serif;

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
  }
</style>
