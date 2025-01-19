export default [
  // 体力卡
  {
    id: 'eb65c14a-4de3-4e19-8dde-ef80f3a28eec',
    code: 'TLK',
    cover: '/MenuImage/体力卡.png',
    name: '体力卡',
    url: '/tlk',
  },
  // 游戏牌
  {
    id: '952286a4-0a69-4575-a3be-82a9cad624aa',
    code: '游戏牌',
    cover: '/MenuImage/游戏牌.jpg',
    name: '游戏牌',
    url: '/yxp',
  },
  // 标记
  {
    id: 'd6a3f4f5-511a-4a78-b8cd-68b3c27f4d4c',
    code: 'BJ',
    cover: '/MenuImage/标记.jpg',
    name: '标记',
    url: '/bj',
  },
  // 阴阳转化
  // {
  //   id: '773fdd4d-335a-4738-b1ab-190f00c98838',
  //   code: 'YINYANGZHUANHUAN',
  //   cover: '/MenuImage/阴阳转化.png',
  //   name: '阴阳转化',
  //   url: '/yyzh',
  // },
  // 大旗
  {
    id: '4cf5873d-4223-4a47-850c-fd21ae38e30f',
    code: '大旗',
    cover: '/MenuImage/大旗.jpg',
    name: '大旗',
    url: '/dq',
  },
  // {
  //   id: 'ea004c81-ccf6-43d7-82d9-c1a3a57b2398',
  //   code: '斗地主',
  //   cover: '/MenuImage/斗地主.png',
  //   name: '斗地主',
  //   url: '/doudizhu',
  // },
  // 选中势力
  {
    id: '8ed689ff-c1c1-4348-9531-33134d7a28b3',
    code: 'XUANZHESHILI',
    cover: '/MenuImage/势力卡.png',
    name: '势力卡',
    url: '/xlk',
  },
  // 谋奕
  // {
  //   id: 'eb144c42-9955-4e67-bee3-4d4b48a25d1e',
  //   code: 'MOUYI',
  //   cover: '/MenuImage/谋奕.jpg',
  //   name: '谋奕',
  //   getModal: data => {
  //     return {
  //       component: () => import('@/modal/My.vue'),
  //       modal: {
  //         title: '谋奕',
  //       },
  //     };
  //   },
  // },
  // 记录角色位置
  {
    id: '4e28b1e2-f91d-437f-af80-00ea56115f24',
    code: 'JSWZ',
    cover: '/MenuImage/记录角色.webp',
    name: '记录数字',
    url: '/jswz',
  },
  // 记录花色
  {
    id: '4e7cf638-f846-4a93-9ef7-1ec6fdd67518',
    code: 'JLHS',
    cover: '/MenuImage/花色.jpg',
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
    cover: '/MenuImage/类型.jpg',
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
  // 记录牌类型
  {
    id: 'f75bf209-a33e-4507-a384-3976b455a849',
    code: 'jilueshensima',
    cover: '/MenuImage/极略神司马.png',
    name: '极略神司马',
    url: '/heroes/jilueshensima',
  },
  {
    id: '8588d9ce-3f97-40cc-9262-7aa543e4a902',
    code: 'shenguojia',
    cover: '/MenuImage/神郭嘉.png',
    name: '神郭嘉',
    url: '/heroes/shenguojia',
  },
  {
    id: '40acbce6-3758-4fdb-9d5f-3b42cdfdbe18',
    code: 'shenhuatuo',
    cover: '/MenuImage/神华佗.png',
    name: '神华佗',
    url: '/heroes/lehuatuo',
  },
  {
    id: '3305d53d-8128-47b8-8472-9e42c40e1325',
    code: '',
    cover: '/MenuImage/谋诸葛亮.png',
    name: '谋诸葛亮',
    url: '/heroes/mzgl',
  },
  {
    id: 'ec2942e1-f61e-497f-9451-04466372ba46',
    code: '',
    cover: '/MenuImage/曹髦.png',
    name: '曹髦',
    url: '/heroes/caomao',
  },
  {
    id: '475e30f3-db6e-43dc-9da2-db061b555956',
    code: '',
    cover: '/MenuImage/杨彪.png',
    name: '杨彪',
    url: '/heroes/yangbiao',
  },
  {
    id: 'e60dee1d-7047-48e6-8587-bc263c6bd19f',
    code: '',
    cover: '/MenuImage/谋曹丕.png',
    name: '谋曹丕',
    url: '/heroes/moucaopi',
  },
  // {
  //   id: 'deecff94-c589-47cf-8f4e-8119198b2002',
  //   code: '',
  //   cover: '/MenuImage/族荀攸.png',
  //   name: '族荀攸',
  //   url: '/heroes/zuxunyou',
  // },
  // {
  //   id: 'aa3d99ff-0444-4f93-8f2a-2c50f39c6366',
  //   code: '',
  //   cover: '/MenuImage/李傕.png',
  //   name: '李傕',
  //   getModal: data => {
  //     return {
  //       component: () => import('@/modal/RandomDisplay.vue'),
  //       modal: {
  //         title: '咩咩叫，咩咩叫',
  //       },
  //       props: {
  //         items: [
  //           {
  //             id: 'a18e8bbb-a4d9-47dd-b4a1-c69ff33f1aaf',
  //             title: '羊袭',
  //             des: '你造成了高达 0 点的伤害！',
  //           },
  //           {
  //             title: '狼袭',
  //             id: 'ef68aa91-9a87-4bb7-aa7e-a1c2e6582fce',
  //             des: '你造成了高达 1 点的伤害！',
  //           },
  //           {
  //             id: '25615d10-787c-43da-bbd4-0840e3982fbe',
  //             des: '2 狗叫！',
  //           },
  //         ],
  //         model: 'unique',
  //         count: 1,
  //       },
  //     };
  //   },
  // },
  // {
  //   id: 'e5f11b59-6354-4bcf-804b-d9026e2ba602',
  //   code: '',
  //   cover: '/MenuImage/庞德公.png',
  //   name: '庞德公',
  //   getModal: data => {
  //     return {
  //       component: () => import('@/modal/RandomDisplay.vue'),
  //       modal: {
  //         title: '擦拭',
  //       },
  //       props: {
  //         items: [
  //           {
  //             id: '92df3722-0fad-49f5-a457-5d677731070c',
  //             title: '卧龙',
  //             des: '对一名角色造成1点火焰伤害。若场上有存活的卧龙诸葛亮，则改为对至多两名角色各造成1点火焰伤害。',
  //           },
  //           {
  //             title: '凤雏',
  //             id: '358bd350-29b4-4e42-8e06-901ffe6d3895',
  //             des: '令至多三名角色进入连环状态。若场上有存活的庞统或SP庞统，则改为令至多四名角色进入连环状态。',
  //           },
  //           {
  //             title: '水镜',
  //             id: 'b48b352d-f46a-4dc1-a642-00729d752068',
  //             des: '移动场上的一张防具牌。若场上有存活的司马徽，则改为移动场上的一张装备牌。',
  //           },
  //           {
  //             title: '玄剑',
  //             id: 'f19cc021-8ecf-43b3-9f25-7e094c5a9e33',
  //             des: '令一名角色摸一张牌并回复1点体力。若场上有存活的徐庶或SP徐庶，则改为令一名角色摸一张牌并回复1点体力，然后你摸一张牌。',
  //           },
  //         ],
  //         model: 'unique',
  //         count: 1,
  //       },
  //     };
  //   },
  // },
  // {
  //   id: '410a4665-6f92-4ec3-9690-ed519a42ead4',
  //   code: '',
  //   cover: '/MenuImage/徐荣.png',
  //   name: '徐荣',
  //   getModal: data => {
  //     return {
  //       component: () => import('@/modal/RandomDisplay.vue'),
  //       modal: {
  //         title: '此祸加之与你，定有所伤！',
  //       },
  //       props: {
  //         items: [
  //           {
  //             id: '0be6f889-6695-4e7f-a33d-4b0ca677c4d8',
  //             des: '1.你受到徐荣对你造成的1点火焰伤害且本回合你不能对徐荣使用【杀】；',
  //           },
  //           {
  //             id: 'b520f5bc-911a-4cdc-98a3-e1943fd0c0fc',
  //             des: '2.失去1点体力且本回合手牌上限-1；',
  //           },
  //           {
  //             id: '25615d10-787c-43da-bbd4-0840e3982fbe',
  //             des: '3.徐荣随机获得你装备区和手牌区里各一张牌。',
  //           },
  //         ],
  //         model: 'unique',
  //         count: 1,
  //       },
  //     };
  //   },
  // },
  {
    id: 'c122c179-eb82-414d-bf53-3fac5295669e',
    code: '',
    cover: '/MenuImage/骆统.png',
    name: '骆统',
    url: '/heroes/loutongdaf',
  },
  // {
  //   id: '2802f440-fb5a-415d-be41-6b63b75f6f52',
  //   code: '',
  //   cover: '/MenuImage/卧龙凤雏.png',
  //   name: '卧龙凤雏',
  //   url: '/heroes/wolongfengchu',
  // },
  // {
  //   id: 'b3312486-f5d9-476e-b720-44e182d44d1e',
  //   code: '',
  //   cover: '/MenuImage/神荀彧.png',
  //   name: '神荀彧',
  //   url:'/heroes/shenxunyu'
  // },
  // {
  //   id: 'c4abe401-102d-4a2e-9a24-fadcd2e17780',
  //   code: '',
  //   cover: '/MenuImage/神张角.png',
  //   name: '神张角',
  //   url:'/heroes/shenzhangjiao'
  // },
  {
    id: 'd72f062a-fd0e-4830-99c8-9e6bcd534f3a',
    code: '',
    cover: '/MenuImage/孙寒华.png',
    name: '孙寒华',
    url: '/heroes/sunhanhua',
  },
  // {
  //   id: '3856c460-c600-48f3-9086-2320ee0aad26',
  //   code: '',
  //   cover: '/MenuImage/张芝.png',
  //   name: '张芝',
  //   url: '/heroes/zhangzhi',
  // },
];
