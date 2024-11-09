export default [
  // 体力卡
  {
    code: 'TLK',
    cover: './MenuImage/体力卡.png',
    name: '体力卡',
    url: '/tlk',
  },
  // 标记
  {
    code: 'BJ',
    cover: './MenuImage/标记.jpg',
    name: '标记',
    url: '/bj',
  },
  // 记录角色位置
  {
    code: 'JSWZ',
    cover: './MenuImage/记录角色.webp',
    name: '记录角色',
    url: '/jswz',
  },
  // 记录花色
  {
    code: 'JLHS',
    cover: './MenuImage/花色.jpg',
    name: '记录花色',
    getModal: data => {
      return {
        component: () => import('@/modal/Hs.vue'),
        modal: {
          title: '花色',
        },
      };
    },
  },
  // 记录牌类型
  {
    code: 'JLLX',
    cover: './MenuImage/类型.jpg',
    name: '记录类型',
    getModal: data => {
      return {
        component: () => import('@/modal/Lx.vue'),
        modal: {
          title: '类型',
        },
      };
    },
  },
  // 谋奕
  {
    code: 'MOUYI',
    cover: './MenuImage/谋奕.jpg',
    name: '谋奕',
    getModal: data => {
      return {
        component: () => import('@/modal/My.vue'),
        modal: {
          title: '谋奕',
        },
      };
    },
  },
  // 阴阳转化
  {
    code: 'YINYANGZHUANHUAN',
    cover: './MenuImage/阴阳转化.png',
    name: '阴阳转化',
    url: '/yyzh',
  },
];
