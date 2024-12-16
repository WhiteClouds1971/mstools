<script setup>
  import SLK from '@/pages/xlk/Comp/SLK.vue';
  import shiLiConfig from '@/config/ShiLiConfig.js';
  import BjItem from '@/pages/bj/Comp/BjItem.vue';
  import bjConfig from '@/config/BjConfig.js';
  import SelectableSkills from '@/components/SelectableSkills.vue';

  const data = reactive({
    sl: null,
    renQty: 0,
    skills: [
      {
        id: '4fd6557a-1ca7-4ad9-9342-a49658de3d50',
        title: '鬼才',
        des: '当一名角色的判定牌生效前，你可以打出一张手牌代替之。',
        code: '鬼才',
        canSelect: true,
        selected: false,
      },
      {
        id: '97bfee1f-1072-490e-b142-83c867b894cf',
        title: '放逐',
        code: shiLiConfig.find(it => it.code === 'WEI').code,
        des: '当你受到伤害后，你可以令一名其他角色翻面，然后该角色摸X张牌（X为你已损失的体力值）。',
        canSelect: true,
        selected: false,
      },
      {
        id: 'a0eab5c9-2046-4c02-b9c3-efbde5f4f41b',
        title: '集智',
        des: '当你使用非转化的普通锦囊牌时，你可以摸一张牌。',
        code: shiLiConfig.find(it => it.code === 'SHU').code,
        canSelect: true,
        selected: false,
      },
      {
        id: '1f04f700-124d-4355-85e2-8442a4bde25a',
        title: '制衡',
        des: '出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌。',
        code: shiLiConfig.find(it => it.code === 'WU').code,
        canSelect: true,
        selected: false,
      },
      {
        id: '03f83b0b-d61d-4793-baaf-4daaa5350fe0',
        title: '完杀',
        des: '锁定技，你的回合内，若有角色处于濒死状态，只有你和处于濒死状态的角色才能使用【桃】。',
        code: shiLiConfig.find(it => it.code === 'QUN').code,
        canSelect: true,
        selected: false,
      },
    ],
  });

  const ren = computed(() => {
    return bjConfig.find(it => it.code === 'ren');
  });

  watch(
    () => data.renQty,
    newValue => {
      if (newValue >= 4) {
        data.skills.find(it => it.code === '鬼才').selected = true;
        if (data.sl)
          data.skills.find(it => it.code === data.sl).selected = true;
      }
    }
  );
</script>

<template>
  <div class="wrapper">
    <s-l-k v-model:model-value="data.sl" :fixed-columns="5"></s-l-k>
    <bj-item
      v-model:value="data.renQty"
      style="margin-top: 20px"
      :color="ren.bgColor"
      :name="ren.name"
      :qty-max="ren.qtyMax"
    ></bj-item>
    <selectable-skills
      style="margin-top: 20px"
      :skills="data.skills"
    ></selectable-skills>
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    padding: 8px;
    background-color: #f7f8fa;
  }
</style>
