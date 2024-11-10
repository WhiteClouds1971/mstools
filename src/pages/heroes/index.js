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
];
