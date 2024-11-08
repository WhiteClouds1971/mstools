import HomeLayout from '@/components/Layout/HomeLayout/HomeLayout.vue';
import index from '@/pages/index.js';

const constantRoutes = [
  {
    name: 'root',
    redirect: '/home',
    component: HomeLayout,
    children: [].concat(index),
  },
];

export default constantRoutes;
