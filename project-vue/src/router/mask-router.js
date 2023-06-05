import { createRouter, createWebHistory } from "vue-router";
import ListMask from '../components/ListMask.vue';

const routes = [
    {
        path: '/',
        component: ListMask
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;