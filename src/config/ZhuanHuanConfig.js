import color from '@/config/Color.js';

export default [
  {
    id: '575ac111-75b5-4916-85a2-d549777d582b',
    code: '',
    name: '通用',
    bgColor: color.black,
    text: '转换技，阳：这是阳效果。阴：这是阴效果。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/阳.jpeg',
        code: '通用-阳',
        name: '',
        keywords: ['阳：这是阳效果。'],
      },
      {
        cover: '/YinYangZhuanHuan/阴.jpeg',
        code: '通用-阴',
        name: '',
        keywords: ['阴：这是阴效果。'],
      },
    ],
  },
  {
    id: '30a3d2ca-0871-417d-b263-8705e638819b',
    code: '',
    name: '奇正',
    bgColor: color.color8,
    text: '出牌阶段，对一名其他角色使用。你为其指定正兵或奇兵，然后其可以打出一张【杀】或【闪】。若奇兵目标没有打出【杀】，你对其造成1点伤害；若正兵目标没有打出【闪】，你获得其一张牌。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/奇.jpeg',
        code: '奇',
        name: '',
        keywords: ['若奇兵目标没有打出【杀】，你对其造成1点伤害；'],
      },
      {
        cover: '/YinYangZhuanHuan/正.jpeg',
        code: '正',
        name: '',
        keywords: ['若正兵目标没有打出【闪】，你获得其一张牌。'],
      },
    ],
  },
  {
    id: 'e330ba0e-7bbd-489d-bf87-39fbc976de98',
    code: '',
    name: '成略',
    bgColor: color.color5,
    text: '转换技，出牌阶段限一次，阳：你可以摸一张牌，然后弃置两张手牌。阴：你可以摸两张牌，然后弃置一张手牌。若如此做，直到本回合结束，你使用与弃置牌相同花色的牌无距离和次数限制。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/阳.jpeg',
        code: '阳',
        name: '',
        keywords: ['阳：你可以摸一张牌，然后弃置两张手牌。'],
      },
      {
        cover: '/YinYangZhuanHuan/阴.jpeg',
        code: '阴',
        name: '',
        keywords: ['阴：你可以摸两张牌，然后弃置一张手牌。'],
      },
    ],
  },
  {
    id: 'adf49667-d451-45c8-a8fb-ac9d439fae05',
    code: '',
    name: '举棋',
    bgColor: color.color1,
    text: '转换技，阳：准备阶段，你摸三张牌/其他角色的准备阶段，其可以展示并交给你一张黑色手牌；阴：准备阶段，你本回合使用牌无次数限制且伤害+1/其他角色的准备阶段，其可以展示并交给你一张红色手牌。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/阳.jpeg',
        code: '阳',
        name: '',
        keywords: [
          '阳：准备阶段，你摸三张牌/其他角色的准备阶段，其可以展示并交给你一张黑色手牌；',
        ],
      },
      {
        cover: '/YinYangZhuanHuan/阴.jpeg',
        code: '阴',
        name: '',
        keywords: [
          '阴：准备阶段，你本回合使用牌无次数限制且伤害+1/其他角色的准备阶段，其可以展示并交给你一张红色手牌。',
        ],
      },
    ],
  },
  {
    id: '5b1d1d73-84d8-4dbf-b1f2-256f74c58ce9',
    code: 'wolongfengchu',
    name: '游龙',
    bgColor: color.color6,
    text: '转换技，阳：每轮限一次，你可以废除你装备区里的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌；阴：每轮限一次，你可以废除你装备区里的一个装备栏，视为使用一张未以此法使用过的基本牌。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/阳.jpeg',
        code: '阳',
        name: '',
        keywords: [
          '阳：每轮限一次，你可以废除你装备区里的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌；',
        ],
      },
      {
        cover: '/YinYangZhuanHuan/阴.jpeg',
        code: '阴',
        name: '',
        keywords: [
          '阴：每轮限一次，你可以废除你装备区里的一个装备栏，视为使用一张未以此法使用过的基本牌。',
        ],
      },
    ],
  },
  {
    id: 'dc373cfb-6a66-4e28-8405-cedde8f36297',
    code: '',
    name: '自若',
    bgColor: color.color4,
    text: '转换技，锁定技，阳：当你使用最左侧的手牌时，你摸一张牌。阴：当你使用最右侧的手牌时，你摸一张牌。若如此做，你本回合不能整理手牌。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/阳.jpeg',
        code: '阳',
        name: '',
        keywords: ['阳：当你使用最左侧的手牌时，你摸一张牌。'],
      },
      {
        cover: '/YinYangZhuanHuan/阴.jpeg',
        code: '阴',
        name: '',
        keywords: ['阴：当你使用最右侧的手牌时，你摸一张牌。'],
      },
    ],
  },
  {
    id: '481f3688-c691-482d-b2d9-600c35e8a352',
    code: '',
    name: '东道',
    bgColor: color.color5,
    text: '转换技，农民回合结束后，阳：你可以令地主执行一个额外回合。阴：其可以执行一个额外回合。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/阳.jpeg',
        code: '阳',
        name: '',
        keywords: ['阳：你可以令地主执行一个额外回合。'],
      },
      {
        cover: '/YinYangZhuanHuan/阴.jpeg',
        code: '阴',
        name: '',
        keywords: ['阴：其可以执行一个额外回合。'],
      },
    ],
  },
  {
    id: 'd89f8ea5-d828-4b5f-b0d5-332df57be696',
    code: '',
    name: '观骨',
    bgColor: color.color1,
    text: '转换技，出牌阶段限一次，阳：你可以观看牌堆顶至多四张牌；阴：你可以观看一名角色至多四张手牌。然后你可以使用其中一张牌。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/阳.jpeg',
        code: '阳',
        name: '',
        keywords: ['阳：你可以观看牌堆顶至多四张牌；'],
      },
      {
        cover: '/YinYangZhuanHuan/阴.jpeg',
        code: '阴',
        name: '',
        keywords: ['阴：你可以观看一名角色至多四张手牌。'],
      },
    ],
  },
  {
    id: '001b8989-1a99-45d0-8335-1d69ad85b995',
    code: '',
    name: '悲笳',
    bgColor: color.color2,
    info:'<b>韵律技</b>,一种特殊的转换技，分为“平”和“仄”两种状态。游戏开始时，韵律技处于“平”状态；满足“转韵”条件后，韵律技会转换到另一个状态，且重置技能发动次数',
    text: '韵律技，每回合限一次，平：你可以将一张点数大于X的牌当任意普通锦囊牌使用；仄：你可以将一张点数小于X的牌当任意基本牌使用；转韵：出牌阶段，使用一张点数等于X的牌（X为你使用的上一张牌的点数）。',
    skills: [
      {
        cover: '/YinYangZhuanHuan/平.png',
        code: '平',
        name: '',
        keywords: ['平：你可以将一张点数大于X的牌当任意普通锦囊牌使用；'],
      },
      {
        cover: '/YinYangZhuanHuan/仄.png',
        code: '仄',
        name: '',
        keywords: ['仄：你可以将一张点数小于X的牌当任意基本牌使用；'],
      },
    ],
  },
];
