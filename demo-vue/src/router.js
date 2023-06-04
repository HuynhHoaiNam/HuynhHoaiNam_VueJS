import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from './components/HelloWorld.vue';
import ListProduct from './components/ListProuct.vue'
const routes = [{
    path: '/',
    component: HelloWorld
},
{
    path: '/list-product',
    component: ListProduct
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;