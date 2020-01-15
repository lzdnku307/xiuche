<template>
    <div class="news">
        <div class="title">
            <div class="title-left">
                <div class="red-line"></div>
                <div>{{ title }}</div>
            </div>
            <div class="title-right">更多>></div>
        </div>
        <div class="content">
            <div v-for="item in list" :key="item.id" class="content-item" @click="goToDetail(item)">
                <div class="content-item-left">
                    <van-image :src="item.image" class="content-item-image" />
                </div>
                <div class="content-item-right">
                    <div class="content-title">{{ item.title }}</div>
                    <div class="content-date">{{ item.date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'news',
        props: {
            list: {
                type: Array,
            },
            title: {
                type: String,
            }
        },
        components: {

        },
        data () {
            return {

            };
        },
        methods: {
            goToDetail (item) {
                this.$router.push('/news/detail?id=' + item.id);
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .news {
        background: #FFF;
        font-size: pxToRem(28px);
        padding-left: pxToRem(40px);
        margin-top: pxToRem(32px);
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #7d7e80;
        height: pxToRem(80px);
        padding-right: pxToRem(20px);
        font-weight: bolder;
    }

    .title-left {
        display: flex;
        align-items: center;
    }

    .title-right {
        font-size: pxToRem(24px);
        color: #818a99;
    }

    .red-line {
        height: pxToRem(20px);
        background: rgb(225, 81, 76);
        width: pxToRem(6px);
        margin-right: pxToRem(12px);
    }

    .content {

    }

    .content-item {
        display: flex;
        padding: pxToRem(20px) pxToRem(20px) pxToRem(24px) 0;
        border-bottom: 1px solid #7d7e80;
    }

    .content-item-image {
        width: pxToRem(150px);
        height: auto;
        margin-right: pxToRem(10px);
    }

    .content-title {
        color: #333;
        line-height: pxToRem(32px);
    }

    .content-date {
        font-size: pxToRem(24px);
        color: #b2b2b2;
        line-height: pxToRem(30px);
        margin-top: pxToRem(10px);
    }

</style>