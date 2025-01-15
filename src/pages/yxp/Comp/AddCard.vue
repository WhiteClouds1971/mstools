<script setup>
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import Hs from '@/modal/Hs.vue';
  import SelectableButton from '@/components/SelectableButton.vue';
  import { cardNumber, cardHs } from '@/config/GameCardConfig.js';
  import CardItem from '@/pages/yxp/Comp/CardItem.vue';

  const props = defineProps({
    card: Object,
  });

  const onNumberClick = number => {
    props.card.number = number;
  };

  const onHsClick = hs => {
    props.card.hs = hs;
  };

  const numberSelected = number => {
    return props.card?.number?.id === number.id;
  };

  const hsSelected = hs => {
    return props.card?.hs?.id === hs.id;
  };
</script>

<template>
  <div class="wrapper-2">
    <dynamic-grid-layout class="number" :fixed-columns="7">
      <selectable-button
        v-for="number in cardNumber"
        :can-select="true"
        :key="number.id"
        :selected="numberSelected(number)"
        @click="onNumberClick(number)"
      >
        {{ number.name }}
      </selectable-button>
    </dynamic-grid-layout>
    <dynamic-grid-layout style="margin-top: 10px" :fixed-columns="4">
      <selectable-button
        :key="item.id"
        v-for="item in cardHs"
        :can-select="true"
        :selected="hsSelected(item)"
        @click="onHsClick(item)"
      >
        <span>{{ item.title }}</span>
        <span style="margin-left: 8px" :style="{ color: item.color }">
          {{ item.icon }}
        </span>
      </selectable-button>
    </dynamic-grid-layout>
    <div class="card-item-wrapper">
      <card-item
        :name="props.card.name.name"
        :number="props.card.number.name"
        :hs-icon="props.card.hs.icon"
        :hs-color="props.card.hs.color"
        style="width: 120px"
      ></card-item>
    </div>
  </div>
</template>

<style scoped lang="less">
  .wrapper-2 {
    background-color: #f7f8fa;
    padding: 8px;

    .card-item-wrapper {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
