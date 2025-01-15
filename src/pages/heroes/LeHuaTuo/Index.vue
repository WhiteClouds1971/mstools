<script setup>
  import SLK from '@/pages/xlk/Comp/SLK.vue';
  import dqConfig from '@/config/DqConfig.js';
  import model from '@/pages/yxp/Comp/model.js';
  import SelectableButton from '@/components/SelectableButton.vue';
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import DelCard from '@/pages/yxp/Comp/DelCard.vue';
  import HideCard from '@/pages/yxp/Comp/HideCard.vue';

  const dq = computed(() => dqConfig.find(it => it.code === 'wuqinxi'));

  const data = reactive({
    wj: ['虎', '鹿', '熊', '猿', '鹤'],
    addedCards: [],
    eye: true,
  });

  const handleClick = item => {
    if (data.addedCards.length >= 5) return;
    if (data.addedCards.findIndex(card => card === item) >= 0) return;
    data.addedCards.push(item);
  };

  const handleDel = item => {
    const i = data.addedCards.findIndex(card => card === item);
    data.addedCards.splice(i, 1);
  };
</script>

<template>
  <div class="wrapper">
    <s-l-k :fixed-columns="5"></s-l-k>
    <div style="margin-top: 20px">
      <dynamic-grid-layout :fixed-columns="5">
        <selectable-button
          v-for="(item, index) in data.wj"
          :key="index"
          :can-select="false"
          @click="handleClick(item)"
        >
          <div class="name">
            {{ item }}
          </div>
        </selectable-button>
      </dynamic-grid-layout>
    </div>
<!--    <div class="show">-->
<!--      <van-icon v-if="data.eye" name="eye-o" @click="data.eye = false" />-->
<!--      <van-icon v-else @click="data.eye = true" name="closed-eye" />-->
<!--    </div>-->
    <div style="margin-top: 20px">
      <dynamic-grid-layout :fixed-columns="5">
        <div v-for="(item, index) in data.addedCards" :key="index">
          <van-swipe-cell>
            <selectable-button :key="index" :can-select="false" :selected="true">
              <template v-if="data.eye">
                {{ item }}
              </template>
              <template v-else>*</template>
            </selectable-button>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="handleDel(item)"
              />
            </template>
          </van-swipe-cell>
        </div>
      </dynamic-grid-layout>
    </div>
    <van-image style="margin-top: 20px" :src="dq.images[0]"></van-image>
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    padding: 8px;
    background-color: #f7f8fa;

    .show {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      margin-top: 20px;
    }
  }
</style>
