<template>
    <div class="user-setting">
        <van-cell-group class="input-area">
            <van-field  label="修改手机号码" is-link  clickable readonly @click="toModifyPhone"/>
            <van-field  label="修改登录密码" is-link  clickable readonly @click="toModifyPwd"/>
        </van-cell-group>
        <van-button type="danger" :block="true">安全退出</van-button>
    </div>
</template>
<script>

    export default {
        name: 'user-setting',
        data () {
            return {
            };
        },
        methods: {
            toModifyPhone () {
                this.$router.push('/user/modifyPhone');
            },

            toModifyPwd () {
                this.$router.push('/user/modifyPwd');
            }
        }

    }
</script>
<style lang="scss">
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .user-setting {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        justify-content: space-between;
        background: #F4F5F7;
    }

</style>