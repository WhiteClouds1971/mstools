import search from '@/pages/search/index.js';

export default [
  {
    name: 'JSWZ',
    path: '/jswz',
    component: () => import('./Index.vue'),
    meta: {
      title: '记录角色',
    },
  },
];
