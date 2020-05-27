<template>
    <div>
        <Swiper>
            <SwiperItem v-for="(item,index) in banner">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </SwiperItem>
        </Swiper>
    </div>
</template>

<script>
    import {Swiper,SwiperItem} from '../../../components/common/swiper'
    export default {
        name: "HomeSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banner:Array,
        }
    }
</script>

<style scoped>

</style>