<script setup>
  import { watch } from 'vue';

  const props = defineProps({
    item: Object,
  });

  const data = reactive({
    currentSkillCode: props.item.skills[0].code,
    skills: props.item.skills,
  });

  const currentSkill = computed(() => {
    return props.item.skills.find(s => s.code === data.currentSkillCode);
  });

  const emit = defineEmits(['update:modelValue']); // 定义 emit 事件

  const onClick = () => {
    const index = data.skills.findIndex(s => s.code === data.currentSkillCode);
    const nextIndex = (index + 1) % data.skills.length;
    data.currentSkillCode = data.skills[nextIndex].code;
    emit('update:modelValue', data.currentSkillCode);
  };
</script>

<template>
  <div class="head">
    <div v-if="item.info">
      <van-popover placement="right">
        <div style="padding: 4px" class="info-text">
          <div v-html="item.info"></div>
        </div>
        <template #reference>
          <van-icon name="info-o" class="info" />
        </template>
      </van-popover>
    </div>
    <div class="title">{{ item.name }}</div>
  </div>
  <div class="wrapper">
    <div class="des-wrapper">
      <van-highlight
        :keywords="currentSkill.keywords"
        :source-string="props.item.text"
      />
    </div>
    <div class="cover-wrapper" @click="onClick">
      <van-image
        round
        :src="currentSkill.cover"
        width="2.5cm"
        height="2.5cm"
      ></van-image>
    </div>
  </div>
</template>

<style scoped lang="less">
  .head {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'YouYuan', sans-serif; /* 使用浏览器自带的更简洁字体 */
    height: 41px;
    font-size: 25px;
    line-height: 25px;
    text-align: center;
    padding: 8px;
  }

  .info {
    color: #3967ff;
  }

  .info-text {
    font-size: 12px;
    background-color: #93A25E;
  }

  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .des-wrapper .cover-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .des-wrapper {
      font-size: 12px;
      padding: 8px;
    }
  }
</style>
