<script setup>
import SelectableSkills from '@/components/SelectableSkills.vue';
import CusStepper from "@/components/CusStepper.vue";

const data = reactive({
  skills: [
    {
      id: '4fd6557a-1ca7-4ad9-9342-a49658de3d50',
      title: '笔心',
      des: '每名角色的准备阶段和结束阶段， 你可以声明一种牌的类型并摸3张牌（每种类型限1次），展示所有手牌并将所有此类型手牌当你本轮未使用过的基本牌使用。',
      canSelect: true,
      selected: true,
    },
    {
      id: '91e8b21b-40f7-41a3-9ddb-ed2b0c703ce8',
      title: '笔心（第一次修改）',
      des: '准备阶段和结束阶段，你可以声明一种牌的类型并摸3张牌（每种类型限1次），展示所有手牌并将所有此类型手牌当你本轮未使用过的基本牌使用。',
      canSelect: true,
      selected: false,
    },
    {
      id: '40590d4d-6eef-4b3c-a4dc-84fb884cbc63',
      title: '笔心（第二次修改）',
      des: '结束阶段，你可以声明一种牌的类型并摸3张牌（每种类型限1次），展示所有手牌并将所有此类型手牌当你本轮未使用过的基本牌使用。',
      canSelect: true,
      selected: false,
    },
    {
      id: '243b8f30-3d77-4c6a-a7d5-7cdb1db293b5',
      title: '笔心（第三次修改）',
      des: '当你需要使用基本牌时，你可以声明一种牌的类型并摸1张牌（每种类型限3次），展示所有手牌并将所有此类型手牌当你本轮未使用过的基本牌使用。',
      canSelect: true,
      selected: false,
    },
  ],
});
</script>

<template>
  <div class="wrapper">
    <cus-stepper
        :value="0"
        title="基本牌"
        :min="0"
        :max="3"
    />
    <cus-stepper
        :value="0"
        title="锦囊牌"
        :min="0"
        :max="3"
        style="margin-top: 20px"
    />
    <cus-stepper
        :value="0"
        title="装备牌"
        :min="0"
        :max="3"
        style="margin-top: 20px"
    />
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
