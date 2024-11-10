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
];
