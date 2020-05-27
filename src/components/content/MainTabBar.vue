<template>
    <tab-bar>
        <tab-bar-item link="/home">
            <img slot="item-icon"  src="../../assets/img/tab-bar/home.png" alt="">
            <img slot="item-icon-active" src="../../assets/img/tab-bar/homeActive.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item  link="/cart">
            <img slot="item-icon" src="../../assets/img/tab-bar/cart.png" alt="">
            <img slot="item-icon-active" src="../../assets/img/tab-bar/cartActive.png" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item link="/menus">
            <img slot="item-icon" src="../../assets/img/tab-bar/menu.png" alt="">
            <img slot="item-icon-active" src="../../assets/img/tab-bar/menuActive.png" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item link="/mine">
            <img slot="item-icon" src="../../assets/img/tab-bar/nickname.png" alt="">
            <img slot="item-icon-active" src="../../assets/img/tab-bar/nicknameActive.png" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>

</template>

<script>
    import tabBar from '../common/tab-bar/tab-bar'
    import tabBarItem from '../common/tab-bar/tab-bar-item'
    export default {
        name: "MainTabBar",

            components: {
                tabBar,
                tabBarItem
            }

    }
</script>

<style scoped>

</style>