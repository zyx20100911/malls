<template>
    <div class="recommend">
        <div class="recommend-view" v-for="(item,index) in recommend">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        font-size: 12px;
        margin-top: 10px;
        padding-bottom: 20px;
        border-bottom: 8px solid #eee;
    }
    .recommend-view{
        flex: 1;

    }
    .recommend img{
        width: 80%;
        margin: 5px;
    }
    
</style>