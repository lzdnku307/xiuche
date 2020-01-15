<template>
    <!-- 修改手机号 -->
    <div class="user-modify-phone">
        <div>
            <van-cell-group class="input-area">
                <van-field  placeholder="原手机号码" v-model="phone" v-if="!isNext"/>
                <van-field  placeholder="新手机号码" v-model="newPhone" v-if="isNext"/>
                <van-field
                        v-model="sms"
                        center
                        clearable
                        placeholder="请输入验证码"
                >
                    <van-button slot="button" size="small" type="danger" @click="getSms">{{ smsButtonText }}</van-button>
                </van-field>
            </van-cell-group>
            <div class="tip">
                <p>若当前联系手机号无法正常使用</p>
                <p>请联系客服<a href="tel:400-123-123">400-123-123</a></p>
            </div>
        </div>
        <van-button type="danger" :block="true" @click="nextStep">下一步</van-button>
    </div>
</template>
<script>

    export default {
        name: 'user-modify-phone',
        data () {
            return {
                phone: '',
                sms: '',
                smsButtonText: '获取验证码',
                newPhone: '',
                timer: null,
                isNext: false,
            };
        },
        methods: {
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
                        me.timer = null;
                        me.smsButtonText = '重新获取验证码';
                    } else {
                        count--;
                        me.smsButtonText = `${count}s`;
                    }
                }, 1000);
            },

            nextStep () {
                this.smsButtonText = '获取验证码';
                this.sms = '';
                this.timer && clearInterval(this.timer);
                this.timer = null;
                this.isNext = true;
            },
        }

    }
</script>
<style lang="scss">
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .user-modify-phone {
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

        a {
            margin-left: pxToRem(10px);
        }
    }

</style>