import HomeLayout from '@/components/Layout/Layout.vue';
import index from '@/pages/index.js';

const constantRoutes = [
  {
    name: 'root',
    redirect: '/home',
    component: HomeLayout,
    children: index,
  },
];

export default constantRoutes;
