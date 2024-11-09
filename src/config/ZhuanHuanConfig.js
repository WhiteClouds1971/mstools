import color from '@/config/Color.js';

export default [
  {
    id: 'e330ba0e-7bbd-489d-bf87-39fbc976de98',
    code: '成略',
    name: '成略',
    bgColor: color.color5,
    text: '转换技，出牌阶段限一次，阳：你可以摸一张牌，然后弃置两张手牌。阴：你可以摸两张牌，然后弃置一张手牌。若如此做，直到本回合结束，你使用与弃置牌相同花色的牌无距离和次数限制。',
    skills: [
      {
        cover: './YinYangZhuanHuan/阳.jpeg',
        code: '成略-阳',
        name: '阳',
        keywords: ['转换技', '阳：你可以摸一张牌，然后弃置两张手牌。'],
      },
      {
        cover: './YinYangZhuanHuan/阴.jpeg',
        code: '成略-阴',
        name: '阴',
        keywords: ['转换技', '阴：你可以摸两张牌，然后弃置一张手牌。'],
      },
    ],
  },
];
