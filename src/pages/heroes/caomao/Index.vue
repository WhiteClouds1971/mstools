<script setup>
  import CusStepper from '@/components/CusStepper.vue';
  import DynamicGridLayout from '@/components/DynamicGridLayout.vue';
  import SelectableButton from '@/components/SelectableButton.vue';
  import SelectableSkills from '@/components/SelectableSkills.vue';

  const data = reactive({
    dxz: 20,
    skills: [
      {
        id: '8841c02f-5205-4e29-8704-2c9e2e5154bb',
        title: '清正',
        des: '持恒技，出牌阶段开始时，你可以展示所有手牌弃置其中一种花色的所有牌，并观看一名有手牌的其他角色的手牌，弃置其中一种花色的所有牌，若其被弃置的牌数小于你弃置的牌数，你对其造成1点伤害。',
        canSelect: false,
        selected: false,
        require: 25,
      },
      {
        id: '34df2d79-cace-4a40-a1e5-375531fa9d73',
        title: '酒诗',
        des: '持恒技，当你需要使用【酒】时，若你的武将牌正面朝上，你可以翻面，视为使用一张【酒】；当你受到伤害后，若你的武将牌背面朝上且未因受到此伤害而发动过〖酒诗〗，你可以翻面；当你翻面时，你随机获得牌堆中的一张锦囊牌。',
        require: 50,
        canSelect: false,
        selected: false,
      },
      {
        id: '5c337897-79ec-4b34-b786-04ace37836cc',
        title: '放逐',
        des: '持恒技，出牌阶段限一次，你可以选择一项，令一名其他角色执行（不能选择上个出牌阶段发动选择的目标）：1.直到其下回合结束，其不能使用非锦囊手牌；2.直到其下回合结束，其武将技能失效。',
        require: 75,
        canSelect: false,
        selected: false,
      },
      {
        id: '13b7a710-545a-432c-b655-bb2e5c122fec',
        title: '决进',
        des: '持恒技，限定技，出牌阶段，你可以令所有角色依次将体力值调整至1点并获得X点“护甲”（X为其因调整减少的体力值，你改为获得X+2点）。然后令场上获得“向死存魏”光环效果，并将牌堆、弃牌堆、场上、所有角色手牌中的【闪】、【桃】、【酒】移出游戏。',
        require: 99,
        canSelect: false,
        selected: false,
      },
    ],
  });

  const update = () => {
    data.skills.forEach(it => {
      it.selected = data.dxz >= it.require;
    });
  };

  watch(
    () => data.dxz,
    newValue => {
      update();
    }
  );

  onMounted(() => {
    update();
  });

  const onClick = add => {
    data.dxz += add;
  };
</script>

<template>
  <div class="wrapper">
    <cus-stepper
      v-model:value="data.dxz"
      title="道心值"
      :min="0"
      :max="99"
      :step="20"
    ></cus-stepper>

    <dynamic-grid-layout style="margin-top: 20px" :fixed-columns="3">
      <selectable-button :can-select="false" @click="onClick(10)">
        <div>受到1点伤害</div>
      </selectable-button>
      <selectable-button :can-select="false" @click="onClick(15)">
        <div>造成1点伤害</div>
      </selectable-button>
      <selectable-button :can-select="false" @click="onClick(5)">
        <div>获得牌</div>
      </selectable-button>
    </dynamic-grid-layout>

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
