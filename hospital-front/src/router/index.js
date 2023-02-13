import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/login.vue"
import Index from "@/components/user/userIndex.vue"
Vue.use(VueRouter);

const routes = [{
        path: '/user',
        name: 'Index',
        component: Index
    },
    {
        path: '/',
        name: 'login',
        component: Login
    }
];

const router = new VueRouter({
    routes
});

// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//         next();
//     } else {
//         const token = window.localStorage.getItem('token');
//         if (token === 'null' || token == '') {
//             next('/login');
//         } else {
//             // console.log(token)
//             // console.log('·路由守卫');
//             next();
//         }
//     }
// })


export default router;