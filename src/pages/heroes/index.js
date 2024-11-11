export default [
  {
    name: 'MZGL',
    path: '/heroes/mzgl',
    component: () => import('./mzgl/Index.vue'),
    meta: {
      title: '谋诸葛亮',
    },
  },
  {
    name: 'LOUTONGDFA',
    path: '/heroes/loutongdaf',
    component: () => import('./loutongdaf/Index.vue'),
    meta: {
      title: '骆统',
    },
  },
  {
    name: 'wolongfengchu',
    path: '/heroes/wolongfengchu',
    component: () => import('./wolongfengchu/Index.vue'),
    meta: {
      title: '卧龙凤雏',
    },
  },
  {
    name: 'shenzhangjiao',
    path: '/heroes/shenzhangjiao',
    component: () => import('./shenzhangjiao/Index.vue'),
    meta: {
      title: '神张角',
    },
  },
  {
    name: 'sunhanhua',
    path: '/heroes/sunhanhua',
    component: () => import('./sunhanhua/Index.vue'),
    meta: {
      title: '孙寒华',
    },
  },
  {
    name: 'caomao',
    path: '/heroes/caomao',
    component: () => import('./caomao/Index.vue'),
    meta: {
      title: '曹髦',
    },
  },
  {
    name: 'jilueshensima',
    path: '/heroes/jilueshensima',
    component: () => import('./jilueshensima/Index.vue'),
    meta: {
      title: '极略神司马',
    },
  },
];
