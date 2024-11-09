<template>
  <div class="wrapper">
    <div class="hjz">
      <div class="number">
        {{ data.hjz }}
        <van-icon
          class="iconfont icon-hujia icon margin-left"
          color="#808080"
        />
      </div>
    </div>
    <div class="hjz margin-top">
      <div class="number">
        <span>{{ data.tlz }}/</span>
        <span>{{ data.tlsx }}</span>
        <van-icon
          class="iconfont icon-shoushuchuxieliang icon margin-left"
          color="#FF0000"
        />
      </div>
    </div>
    <div class="qty margin-top" >
      <cus-stepper
        v-model:value="data.hjz"
        title="护甲值"
        :min="0"
        :max="5"
      />
      <cus-stepper
        class="margin-top"
        v-model:value="data.tlz"
        title="体力值"
        :min="1"
      />
      <cus-stepper
        class="margin-top"
        v-model:value="data.tlsx"
        title="体力上限"
      />
    </div>
  </div>
</template>

<script setup>
  import CusStepper from '@/components/CusStepper.vue';

  const data = reactive({
    hjz: 0, // 护甲值
    tlz: 0, // 体力值
    tlsx: 0, // 体力上线
  });
</script>

<style lang="less" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    font-family: 'Heiti SC', serif;
    background-color: #f7f8fa;

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

  .margin-top {
    margin-top: 20px;
  }

  .margin-left {
    margin-left: 14px;
  }
</style>
