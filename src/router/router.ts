import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../screens/Index.vue";
import Order from "../screens/Order.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {name: 'index', path: '/', component: Index},
        {name: 'order', path: '/order', component: Order},
        {
            name: 'discord',
            path: '/discord',
            component: Index,
            beforeEnter: (to, from) => {
                location.href = 'https://discord.com/users/811210156884754472';
                return false;
            }
        }
    ]
})

export default router;