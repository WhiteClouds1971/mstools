export default [
  {
    name: 'Home',
    path: '/home',
    component: () => import('./Index.vue'),
    meta: {
      title: '主页',
    },
  },
];
