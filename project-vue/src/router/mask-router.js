import { createRouter, createWebHistory } from "vue-router";
import ListMask from '../components/ListMask.vue';
import CreateMask from '../components/CreateMask.vue';
import UpdateMask from '../components/UpdateMask.vue';

const routes = [
    {
        path: '/',
        component: ListMask
    },
    {
        path: '/create-mask',
        component: CreateMask
    },
    {
        path: '/update-mask/:id',
        component: UpdateMask
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;