<script setup>
  import bjConfig from '@/config/BjConfig.js';
  import _ from 'lodash';
  import BjItem from '@/pages/bj/Comp/BjItem.vue';
  import CusStepper from '@/components/CusStepper.vue';
  import TILK from '@/components/TILK.vue';

  const data = reactive({
    lunQty: 0,
    tilk: {
      tlz: 3,
      tlsx: 3,
    },
  });

  const lun = computed(() => {
    return _.cloneDeep(bjConfig.find(it => it.code === 'lun'));
  });

  watch(
    () => data.lunQty,
    newValue => {
      if (newValue <= 4) {
        data.tilk.tlsx++;
        data.tilk.tlz++;
      } else if (newValue <= 7) {
        data.tilk.tlsx--;
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
      :qty-max="7"
    ></bj-item>
    <t-i-l-k style="margin-top: 20px" :tilk="data.tilk"></t-i-l-k>
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
