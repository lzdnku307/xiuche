<template>
    <div class="user-login">
        <div class="user-login-banner">
            <van-image :src="logoImage" class="logo-image"/>
        </div>
        <div class="user-login-tabs">
            <div class="user-login-tabs-wrapper">
                <div :class="tabClass.pwdClass" @click="toggle('pwd')">密码登录</div>
                <div :class="tabClass.smsClass" @click="toggle('sms')">短信登录</div>
            </div>
        </div>

        <div class="user-login-fields">
            <van-radio-group v-model="type" class="user-login-types">
                <van-radio name="1">个人客户</van-radio>
                <van-radio name="2">机构客户</van-radio>
            </van-radio-group>

            <van-cell-group>
                <van-field v-model="phone" placeholder="请输入手机号" clearable />
                <van-field v-model="pwd" placeholder="请输入密码" clearable v-if="activeTab === 'pwd'" type="password"/>
                <van-field
                        v-model="sms"
                        center
                        clearable
                        placeholder="请输入验证码"
                        v-if="activeTab === 'sms'"
                >
                    <van-button slot="button" size="small" type="danger" @click="getSms">{{ smsButtonText }}</van-button>
                </van-field>
            </van-cell-group>
            <div class="user-login-button">登录</div>
        </div>
        <div class="register-forgot">
            <div>忘记密码</div>
            <div>立即注册</div>
        </div>
    </div>
</template>
<script>
    import LogoImage from '@/assets/images/loginlogo.jpg';

    export default {
        name: 'user-login',
        data () {
            return {
                logoImage: LogoImage,
                activeTab: 'pwd', //激活的tab
                phone: '', //手机号
                pwd: '', //密码
                sms: '', //短信验证码
                type: '1', //登录类型
                smsButtonText: '获取验证码',
                timer: '', //倒计时句柄
            };
        },
        computed: {
            tabClass () {
                if (this.activeTab === 'pwd') {
                    return {
                        smsClass: 'user-login-tab-right',
                        pwdClass: 'user-login-tab-left user-login-tab-selected'
                    }
                } else {
                    return {
                        smsClass: 'user-login-tab-right user-login-tab-selected',
                        pwdClass: 'user-login-tab-left'
                    }
                }
            }
        },
        methods: {
            toggle (tab) {
                console.log('xxxx', tab);
                this.activeTab = tab;
            },
            getSms () {
                if (this.timer) {
                    return;
                }
                let me = this;
                let count = 60; //倒计时60秒
                me.smsButtonText = `${count}s`;
                this.timer = setInterval(() => {
                    if (!count) {
                        clearInterval(me.timer);
                        me.timer = null;
                        me.smsButtonText = '重新获取验证码';
                    } else {
                        count--;
                        me.smsButtonText = `${count}s`;
                    }
                }, 1000);
            }
        }
    }
</script>
<style lang="scss">
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .user-login {
        background: #FFF;
    }
    .logo-image {
        width: 100%;
        height: auto;
    }

    .user-login-tabs {
        text-align: center;
    }

    .user-login-tabs-wrapper {
        font-size: pxToRem(32px);
        display: flex;
        justify-content: center;
        line-height: pxToRem(80px);
        margin-top: pxToRem(40px);
    }
    .user-login-tab-left {
        text-align: center;
        color: $redColor;
        border: 0.02667rem solid #e1514c;
        border-radius: 1rem 0 0 1rem;
        width: pxToRem(250px);
    }
    .user-login-tab-right {
        text-align: center;
        color: $redColor;
        border: 0.02667rem solid #e1514c;
        border-radius: 0 1rem 1rem 0;
        width: pxToRem(250px);
    }
    .user-login-tab-selected {
        background: $redColor;
        color: #FFF;
    }
    .user-login-fields {
        margin: 1rem;
    }

    .user-login-types {
        font-size: pxToRem(24px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: pxToRem(80px);
        margin-top: pxToRem(20px);
        border: 1px solid #eee;
    }
    .user-login-button {
        background: $redColor;
        color: #FFF;
        font-size: pxToRem(32px);
        line-height: pxToRem(96px);
        margin-top: 1rem;
        text-align: center;
        border-radius: 1rem;
    }
    .register-forgot {
        font-size: pxToRem(28px);
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        line-height: 1rem;

        div {
            display: inline-block;
            width: pxToRem(200px);
            text-decoration: underline;
        }

        :nth-child(1) {
            border-right: 1px solid #eee;
        }
    }

</style>