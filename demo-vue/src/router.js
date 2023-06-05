import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from './components/HelloWorld.vue';
import ListProduct from './components/ListProduct.vue';
const routes = [{
    path: '/',
    component: ListProduct
},
{
    path: '/hello-world',
    component: HelloWorld
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;