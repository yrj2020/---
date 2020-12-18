<template>
    <div class="container">
        <headMenu></headMenu>
        <div class="MainCon" style="height:1080px">
            <router-view></router-view>
        </div>
        <footMenu></footMenu>
    </div>

</template>

<style>
.MainCon{
    background-color: #E5EAEE;
}

</style>


<script>
import headMenu from '../components/head.vue'
import footMenu from '../components/foot.vue'

export default {
    name:"index",
    data(){
        return{

        }
    },
    components:{
        headMenu,
        footMenu
    }
}
</script>