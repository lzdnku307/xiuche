<template>
    <van-tabbar v-model="activeIndex" active-color="rgb(225, 81, 76)" :fixed="false">
        <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/user">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vant';

    export default {
        name: 'footer-bar',
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
        },
        data () {
            return {
                activeIndex: 0,
            };
        },
        methods: {
        },
    }
</script>

<style lang="scss">
</style>