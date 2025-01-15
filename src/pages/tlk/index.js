import search from '@/pages/search/index.js';

export default [
  {
    name: 'TLK',
    path: '/tlk',
    component: () => import('./Index.vue'),
    meta: {
      title: '体力卡',
    },
  },
];
