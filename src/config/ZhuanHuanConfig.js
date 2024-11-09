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
        cover: './YinYangZhuanHuan/阳.jpeg',
        code: '通用-阳',
        name: '',
        keywords: ['阳：这是阳效果。'],
      },
      {
        cover: './YinYangZhuanHuan/阴.jpeg',
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
        cover: './YinYangZhuanHuan/奇.jpeg',
        code: '奇',
        name: '',
        keywords: ['若奇兵目标没有打出【杀】，你对其造成1点伤害；'],
      },
      {
        cover: './YinYangZhuanHuan/正.jpeg',
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
        cover: './YinYangZhuanHuan/阳.jpeg',
        code: '阳',
        name: '',
        keywords: ['阳：你可以摸一张牌，然后弃置两张手牌。'],
      },
      {
        cover: './YinYangZhuanHuan/阴.jpeg',
        code: '阴',
        name: '',
        keywords: ['阴：你可以摸两张牌，然后弃置一张手牌。'],
      },
    ],
  },
];
