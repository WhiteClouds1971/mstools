<script setup>
  import SelectableSkills from '@/components/SelectableSkills.vue';

  const data = reactive([
    {
      id: '804ab1fe-4ec8-4549-bbb2-e15b875cb47a',
      title: '〖妙剑〗（1级）',
      des: '出牌阶段限一次，你可以将一张【杀】当做刺【杀】使用，或将一张锦囊牌当做【无中生有】使用。',
      selected: true,
    },
    {
      id: 'e0332708-6b30-4c42-a299-2212ee80a77b',
      title: '〖妙剑〗（2级）',
      des: '出牌阶段限一次，你可以将一张基本牌当做刺【杀】使用，或将一张非基本牌当做【无中生有】使用。',
    },
    {
      id: '0108037a-5c3b-4531-a328-d02e53a7f74c',
      title: '〖妙剑〗（3级）',
      des: '出牌阶段限一次，你可以视为使用一张刺【杀】或视为使用一张【无中生有】。',
    },
    {
      id: '3c155517-be98-4e4b-9deb-2ff8e9e2b90c',
      title: '〖莲华〗（1级）',
      des: '当你成为其他角色使用【杀】的目标时，你摸一张牌。',
      selected: true,
    },
    {
      id: 'c2cf79a3-9a41-4df1-8317-21dc1a2a561a',
      title: '〖莲华〗（2级）',
      des: '当你成为其他角色使用【杀】的目标时，你摸一张牌，然后进行一次判定，若判定结果为黑桃，则取消之。',
    },
    {
      id: '9f5ac8d4-ea98-40fd-901f-796c7b0a4b4e',
      title: '〖莲华〗（3级）',
      des: '当你成为其他角色使用【杀】的目标时，你摸一张牌，然后除非该角色弃置一张牌，否则取消之。',
    },
  ]);
</script>

<template>
  <div class="wrapper">
    <selectable-skills :skills="data"></selectable-skills>
  </div>
</template>

<style scoped lang="less">
  .wrapper {
    padding: 8px;
    background-color: #f7f8fa;
  }
</style>
