<template>
    <div id="home">
        <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
        <HomeSwiper :banner="banners"></HomeSwiper>
        <RecommendView :recommend="recommend"></RecommendView>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import {getHomeMultidata} from "../../API/home";


    export default {
        name: "home",
        data(){
            return {
                banners:[],
                keywordsList:[],
                recommend: []

            }
        },
        components:{
            NavBar,
            HomeSwiper,
            RecommendView
        },
        created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.keywordsList = res.data;
                this.recommend = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
.home-nav{
    background-color: #ff5777;
    color: white;
}
</style>