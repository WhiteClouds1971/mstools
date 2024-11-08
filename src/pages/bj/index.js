import search from '@/pages/search/index.js';

export default [
  {
    name: 'BJ',
    path: '/bj',
    component: () => import('./Index.vue'),
    meta: {
      title: '标记',
    },
  },
];
