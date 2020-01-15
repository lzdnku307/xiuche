<template>
    <!-- 我的 -->
    <div class="user">
        <div class="top">
            <van-image
                    lazy-load
                    round
                    class="avatar-image"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="user-info">
                <div>账号：18588888888</div>
                <div class="confirm-button">立即认证</div>
            </div>
        </div>
        <div class="func-items">
            <div v-for="(item, index) in funcItems" :key="index" class="func-item" @click="onItemClick(item)">
                <div class="func-item-left">
                    <van-icon :name="item.leftIcon" />
                    <span>{{ item.leftLabel }}</span>
                </div>
                <div class="func-item-right">
                    <span :style="item.rightLabelStyle">{{ item.rightLabel }}</span>
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        layout: 'app',
        name: 'user',
        data () {
            return {
                funcItems: [{
                    leftIcon: 'user-o',
                    leftLabel: '实名认证信息',
                    rightLabel: '未认证',
                    rightLabelStyle: {color: 'rgb(225, 81, 76)'},
                    url: '/user/realName'
                }, {
                    leftIcon: 'envelop-o',
                    leftLabel: '专业投资者认证',
                    rightLabel: '未认证',
                    rightLabelStyle: {color: 'rgb(225, 81, 76)'}
                }, {
                    leftIcon: 'balance-o',
                    leftLabel: '税收居民身份声明',
                    rightLabel: '',
                    rightLabelStyle: {}
                }, {
                    leftIcon: 'idcard',
                    leftLabel: '我的银行卡',
                    rightLabel: '',
                    rightLabelStyle: {},
                    url: '/user/addBank',
                }, {
                    leftIcon: 'records',
                    leftLabel: '风险测评',
                    rightLabel: '未测评',
                    rightLabelStyle: {color: '#6795ff'},
                    url: '/user/test'
                }, {
                    leftIcon: 'discount',
                    leftLabel: '账号设置',
                    rightLabel: '',
                    rightLabelStyle: {},
                    url: '/user/setting'
                }]
            };
        },
        methods: {
            onItemClick (item) {
                this.$router.push(item.url);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .top {
        display: flex;
        padding-left: pxToRem(40px);
        height: pxToRem(300px);
        align-items: center;
        font-size: pxToRem(32px);
        color: #333;
        background: url("~assets/images/personalbg.png") center center / cover no-repeat;
    }
    .avatar-image {
        width: pxToRem(128px);
        height: pxToRem(128px);
        margin-right: pxToRem(64px);
    }

    .confirm-button {
        width: pxToRem(180px);
        height: pxToRem(64px);
        line-height: pxToRem(64px);
        font-size: pxToRem(28px);
        border: 1px solid $redColor;
        color: $redColor;
        text-align: center;
        margin-top: pxToRem(20px);
    }

    .func-items {
        padding-left: pxToRem(60px);
        background: #FFF;
        margin-top: pxToRem(40px);
    }

    .func-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        color: #818a99;
        font-size: pxToRem(32px);
        height: pxToRem(96px);
        margin-top: 1px;
        padding-right: pxToRem(20px);
    }

    .func-item-left {
        display: flex;
        align-items: center;

        span {
            margin-left: pxToRem(20px);
        }
    }

    .func-item-right {
        display: flex;
        align-items: center;

        span {
            margin-right: pxToRem(10px);
        }
    }

</style>