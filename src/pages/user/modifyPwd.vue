<template>
    <!-- 修改密码 -->
    <div class="user-modify-pwd">
        <div>
            <van-cell-group class="input-area">
                <van-field  placeholder="原密码" v-model="oldPwd" />
                <van-field  placeholder="新密码(6-12位，数组和字母组合)" v-model="newPwd" />
                <van-field  placeholder="确认新密码" v-model="confirmPwd" />
            </van-cell-group>
            <div class="forgot">忘记原密码</div>
            <div class="tip">
                <p>温馨提示：短信验证快捷注册并登录的客户，</p>
                <p>请选择“忘记原密码”来设置登录密码</p>
            </div>
        </div>
        <van-button type="danger" :block="true">确定</van-button>
    </div>
</template>
<script>

    export default {
        name: 'user-modify-phone',
        data () {
            return {
                oldPwd: '',
                newPwd: '',
                confirmPwd: ''
            };
        },
        methods: {

        }

    }
</script>
<style lang="scss">
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .user-modify-pwd {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        justify-content: space-between;
        background: #F4F5F7;
    }

    .tip {
        font-size: pxToRem(24px);
        color: #b2b2b2;
        text-align: center;
        margin-top: pxToRem(200px);
        line-height: pxToRem(36px);
    }

    .forgot {
        text-align: right;
        color: blue;
        font-size: pxToRem(24px);
        line-height: pxToRem(64px);
        padding-right: pxToRem(40px);
    }

</style>