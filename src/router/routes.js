const constantRoutes = [
    {
        name: 'Home',
        path: '/',
        // component: AdminLayout,
        component: () => import('@/pages/Index.vue'),
        children: [],
    },
];

export default constantRoutes;
