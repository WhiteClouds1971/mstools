export default [
  // 体力卡
  {
    id: 'eb65c14a-4de3-4e19-8dde-ef80f3a28eec',
    code: 'TLK',
    cover: './MenuImage/体力卡.png',
    name: '体力卡',
    url: '/tlk',
  },
  // 游戏牌
  {
    id: '952286a4-0a69-4575-a3be-82a9cad624aa',
    code: '游戏牌',
    cover: './MenuImage/游戏牌.jpg',
    name: '游戏牌',
    url: '/yxp',
  },
  // 标记
  {
    id: 'd6a3f4f5-511a-4a78-b8cd-68b3c27f4d4c',
    code: 'BJ',
    cover: './MenuImage/标记.jpg',
    name: '标记',
    url: '/bj',
  },
  // 阴阳转化
  {
    id: '773fdd4d-335a-4738-b1ab-190f00c98838',
    code: 'YINYANGZHUANHUAN',
    cover: './MenuImage/阴阳转化.png',
    name: '阴阳转化',
    url: '/yyzh',
  },
  // 大旗
  {
    id: '4cf5873d-4223-4a47-850c-fd21ae38e30f',
    code: '大旗',
    cover: './MenuImage/大旗.jpg',
    name: '大旗',
    url: '/dq',
  },
  // 选中势力
  {
    id: '8ed689ff-c1c1-4348-9531-33134d7a28b3',
    code: 'XUANZHESHILI',
    cover: './MenuImage/势力卡.png',
    name: '势力卡',
    url: '/xlk',
  },
  // 谋奕
  {
    id: 'eb144c42-9955-4e67-bee3-4d4b48a25d1e',
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
  // 记录角色位置
  {
    id: '4e28b1e2-f91d-437f-af80-00ea56115f24',
    code: 'JSWZ',
    cover: './MenuImage/记录角色.webp',
    name: '记录角色',
    url: '/jswz',
  },
  // 记录花色
  {
    id: '4e7cf638-f846-4a93-9ef7-1ec6fdd67518',
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
    id: '5ee88300-47fe-4163-b9fa-a5c7c62c2c72',
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
  {
    id: 'aa3d99ff-0444-4f93-8f2a-2c50f39c6366',
    code: '',
    cover: './MenuImage/李傕.png',
    name: '李傕',
    getModal: data => {
      return {
        component: () => import('@/modal/RandomDisplay.vue'),
        modal: {
          title: '咩咩叫，咩咩叫',
        },
        props: {
          items: [
            {
              id: 'a18e8bbb-a4d9-47dd-b4a1-c69ff33f1aaf',
              title: '羊袭',
              des: '你造成了高达 0 点的伤害！',
            },
            {
              title: '狼袭',
              id: 'ef68aa91-9a87-4bb7-aa7e-a1c2e6582fce',
              des: '你造成了高达 1 点的伤害！',
            },
            {
              id: '25615d10-787c-43da-bbd4-0840e3982fbe',
              des: '2 狗叫！',
            },
          ],
          count: 1,
        },
      };
    },
  },
  {
    id: '410a4665-6f92-4ec3-9690-ed519a42ead4',
    code: '',
    cover: './MenuImage/徐荣.png',
    name: '徐荣',
    getModal: data => {
      return {
        component: () => import('@/modal/RandomDisplay.vue'),
        modal: {
          title: '此祸加之与你，定有所伤！',
        },
        props: {
          items: [
            {
              id: '0be6f889-6695-4e7f-a33d-4b0ca677c4d8',
              des: '1.你受到徐荣对你造成的1点火焰伤害且本回合你不能对徐荣使用【杀】；',
            },
            {
              id: 'b520f5bc-911a-4cdc-98a3-e1943fd0c0fc',
              des: '2.失去1点体力且本回合手牌上限-1；',
            },
            {
              id: '25615d10-787c-43da-bbd4-0840e3982fbe',
              des: '3.徐荣随机获得你装备区和手牌区里各一张牌。',
            },
          ],
          count: 1,
        },
      };
    },
  },
];
