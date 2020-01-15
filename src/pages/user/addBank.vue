<template>
    <!-- 添加银行卡 -->
    <div class="user-add-bank">
        <div class="detail" v-if="showDetail" >
            <div class="card" v-for="card in cards">
                <div class="card-left"></div>
                <div class="card-right">
                    <div>{{card.name}}</div>
                    <div>储蓄卡</div>

                </div>
            </div>
            <div class="add-button" @click="showDetail=false">
                +
            </div>
        </div>
        <div class="add-content" v-if="!showDetail">
            <van-cell-group>
                <van-field v-model="cardNo" placeholder="请输入卡号" label="银行卡号" required clearable input-align="right" />
                <van-field v-model="bankName" placeholder="" label="银行名称" required is-link input-align="right" clickable readonly @click="showPicker=true"/>
                <van-field v-model="bankCity" placeholder="" label="开户城市" required is-link input-align="right" clickable readonly @click="showCityPicker=true"/>
                <van-field v-model="bankCityName" placeholder="请输入开户行名称" label="开户行名称" required clearable input-align="right" />
            </van-cell-group>
            <div class="buttons">
                <div class="cancel-button">取消</div>
                <div class="add-card">添加</div>
            </div>
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="bankList"
                        @cancel="showPicker=false"
                        @confirm="onPickerConfirm"
                />
            </van-popup>
            <van-popup v-model="showCityPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="bankCityList"
                        @cancel="showCityPicker=false"
                        @confirm="onCityPickerConfirm"
                        @change="onCityPickerChange"
                />
            </van-popup>
        </div>
    </div>
</template>
<script>
    import { Picker } from 'vant';

    const cities = {
        '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        '福建': ['福州', '厦门', '莆田', '三明', '泉州']
    };

    export default {
        name: 'user-add-bank',
        components: {
            [Picker.name]: Picker,
        },
        data () {
            return {
                cards: [],
                showPopup: false,
                showDetail: true,
                showPicker: false,
                cardNo: '',
                bankName: '请选择',
                bankCity: '请选择', //开户城市
                bankCityName: '', //开户行名称
                bankList: ["中国工商银行", "中国农业银行", "中国银行", "中国建设银行", "交通银行", "国家开发银行", "中国进出口银行", "中国农业发展银行", "招商银行", "中信银行", "光大银行", "华夏银行", "民生银行", "兴业银行", "广发银行", "平安银行", "上海浦东发展银行", "恒丰银行", "浙商银行", "渤海银行", "北京银行", "天津银行", "中国邮政储蓄银行"],
                bankCityList: [
                    {
                        values: Object.keys(cities),
                        className: 'column1'
                    },
                    {
                        values: cities['浙江'],
                        className: 'column2',
                        defaultIndex: 2
                    }],
                showCityPicker: false,
            };
        },
        methods: {
            onPickerConfirm (value) {
                this.bankName = value;
                this.showPicker = false;
            },
            onCityPickerChange (picker, values) {
                picker.setColumnValues(1, cities[values[0]]);
            },
            onCityPickerConfirm (values) {
                console.log('vvv', values);
                this.bankCity = values[0] + '-' + values[1];
                this.showCityPicker = false;
            }
        }

    }
</script>
<style lang="scss">
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .user-add-bank {
        height: 100vh;
        width: 100%;
        background: #FFF;
    }

    .detail {
        width: 100%;
        background: #273753;
        padding: pxToRem(20px) pxToRem(40px);
        height: 100%;
        overflow: auto;
    }

    .add-button {
        background: #384F78;
        color: #273753;
        border-radius: pxToRem(8px);
        text-align: center;
        font-size: pxToRem(64px);
        line-height: pxToRem(96px);
        height: pxToRem(96px);
    }

    .add-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .buttons {
        font-size: pxToRem(36px);
        line-height: pxToRem(96px);
        text-align: center;
        display: flex;
    }
    .cancel-button {
        border-top: 1px solid $redColor;
        color: $redColor;
        flex: 1 1 auto;
    }
    .add-card {
        background: $redColor;
        color: #FFF;
        flex: 1 1 auto;
    }
</style>