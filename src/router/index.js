import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const home = () => import('../views/home/home');
const cart = () => import('../views/cart/cart');
const menus = ()=> import('../views/menus/menus');
const mine = () =>import('../views/mine/mine')

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/cart',
        component:cart
    },
    {
        path:'/menus',
        component:menus
    },
    {
        path:'/mine',
        component:mine
    }
]

const router = new VueRouter({
    routes
})

export default router
