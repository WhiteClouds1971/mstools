<script setup>
  import JinBen from '@/pages/yxp/Comp/JinBen.vue';
  import model from '@/pages/yxp/Comp/model.js';
  import JinNang from '@/pages/yxp/Comp/JinNang.vue';
  import AddCard from '@/pages/yxp/Comp/AddCard.vue';
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import DelCard from '@/pages/yxp/Comp/DelCard.vue';
  import { v4 } from 'uuid';
  import bjConfig from '@/config/BjConfig.js';
  import BjItem from '@/pages/bj/Comp/BjItem.vue';
  import _ from 'lodash';
  import dqConfig from "@/config/DqConfig.js";

  const data = reactive({
    model: model.complexMode,
    eye: true,
    addShow: false,
    tempCard: {
      id: '',
      name: {},
      hs: {},
      number: {},
    },
    addedCards: [],
  });

  const hj = computed(() => {
    const tem = bjConfig.find(bj => bj.code === 'MZGLHJ');
    return _.cloneDeep(tem);
  });

  const dq=computed(()=>{
    return dqConfig.find(dq=> dq.code === "MZGLDQ")
  })

  const handleAdd = item => {
    if (data.model === model.simpleMode) return;
    data.addShow = true;
    data.tempCard.name = item;
  };

  const onCancel = () => {
    data.tempCard = {
      id: '',
      name: {},
      hs: {},
      number: {},
    };
    data.addShow = false;
  };

  const onOK = () => {
    data.tempCard.id = v4();
    data.addedCards.push(data.tempCard);
    onCancel();
  };

  const handleDel = id => {
    const i = data.addedCards.findIndex(card => card.id === id);
    data.addedCards.splice(i, 1);
  };
</script>

<template>
  <div class="main-1">
    <jin-ben :model="data.model" @select="handleAdd"></jin-ben>
    <jin-nang
      style="margin-top: 8px"
      :model="data.model"
      @select="handleAdd"
    ></jin-nang>
    <div
      v-show="data.model === model.complexMode"
      class="card"
      style="margin-top: 8px"
    >
      <div class="show">
        <van-icon v-if="data.eye" name="eye-o" @click="data.eye = false" />
        <van-icon v-else @click="data.eye = true" name="closed-eye" />
      </div>
      <dynamic-grid-layout style="margin-top: 8px" fixed-columns="3">
        <del-card
          v-for="(item, index) in data.addedCards"
          :key="item.id"
          :id="item.id"
          :is-hide="!data.eye"
          :number="item.number.name"
          :hs-icon="item.hs.icon"
          :hs-color="item.hs.color"
          :name="item.name.name"
          @del="handleDel"
        ></del-card>
      </dynamic-grid-layout>
    </div>
    <bj-item
      style="margin-top: 10px"
      v-model:value="hj.qty"
      :name="hj.name"
      :qty-max="hj.qtyMax"
      :color="hj.bgColor"
    ></bj-item>

    <van-image style="margin-top: 10px; padding: 8px" :src="dq.images[0]"></van-image>
  </div>
  <van-dialog
    v-model:show="data.addShow"
    title="标记牌"
    show-cancel-button
    @cancel="onCancel"
    @confirm="onOK"
  >
    <add-card :card="data.tempCard"></add-card>
  </van-dialog>
</template>

<style scoped lang="less">
  .main-1 {
    padding: 8px;
    background-color: #f7f8fa;

    .card {
      .show {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
    }
  }
</style>
