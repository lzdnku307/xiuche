<template>
    <!-- 实名认证 -->
    <div class="real-name">
        <van-cell-group class="input-area">
            <van-field v-model="name" placeholder="请输入客户姓名" label="客户姓名" required clearable input-align="right" />
            <van-field v-model="sex" placeholder="" label="性别" required is-link input-align="right" clickable readonly @click="onShowPicker('sex', sexColumns)"/>
            <van-field v-model="birthday" placeholder="" label="出生日期" required is-link input-align="right" clickable readonly @click="onShowDatePicker('birthday')"/>
            <van-field v-model="nation" placeholder="" label="国籍" required is-link input-align="right" clickable readonly @click="onShowPicker('nation', nationList)"/>
            <van-field v-model="idType" placeholder="" label="证件类型" required is-link input-align="right" clickable readonly @click="onShowPicker('idType', idTypes)"/>
            <van-field v-model="idNumber" placeholder="请输入证件号码" label="证件号码" required clearable input-align="right" />
            <van-field v-model="validDate" placeholder="" label="证件有效期至" required is-link input-align="right" clickable readonly @click="onShowDatePicker('validDate')"/>
            <van-field v-model="address" placeholder="请输入通讯地址" label="通讯地址" required clearable input-align="right" />
            <van-field  placeholder="" label="上传身份证" required />
            <div class="upload-wrapper">
                <van-uploader v-model="faceFileList" :max-count="1" :after-read="afterRead">
                    <van-image :src="imgIdCardFace" class="upload-image"></van-image>
                </van-uploader>
                <van-uploader v-model="backFileList" :max-count="1" :after-read="afterRead">
                    <van-image :src="imgIdCardBack" class="upload-image"></van-image>
                </van-uploader>
            </div>
            <van-field v-model="control" placeholder="" label="是否存在实际控制关系" required is-link input-align="right" clickable readonly label-width="150px" @click="onShowPicker('control', controlList)"/>
            <van-field v-model="beneficiary" placeholder="" label="交易的实际受益人" required is-link input-align="right" clickable readonly label-width="150px" @click="onShowPicker('beneficiary', beneficiaryPerson)"/>
            <van-field v-model="badRecord" placeholder="" label="是否有不良诚信记录" required is-link input-align="right" clickable readonly label-width="150px" @click="onShowPicker('badRecord', badRecords)"/>
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="columns"
                        @cancel="showPicker=false"
                        @confirm="onPickerConfirm"
                />
            </van-popup>
            <van-popup v-model="showDatePicker" position="bottom">
                <van-datetime-picker
                        show-toolbar
                        v-model="currentDate"
                        type="date"
                        :min-date="minDate"
                        :max-date="maxDate"
                        @cancel="showDatePicker=false"
                        @confirm="onDatePickerConfirm"
                />
            </van-popup>
        </van-cell-group>
        <van-button type="danger" :block="true" class="submit-button">提交</van-button>
    </div>
</template>
<script>
    import { Picker, DatetimePicker, Uploader } from 'vant';
    import ImgIdCardFace from '@/assets/images/idcardface.png';
    import ImgIdCardBack from '@/assets/images/idcardback.png';

    export default {
        name: 'user-realName',
        components: {
            [Picker.name]: Picker,
            [DatetimePicker.name]: DatetimePicker,
            [Uploader.name]: Uploader
        },
        data () {
            return {
                imgIdCardFace: ImgIdCardFace,
                imgIdCardBack: ImgIdCardBack,
                faceFileList: [],
                backFileList: [],
                showUpload: false,
                datePickerType: '',
                showDatePicker: false,
                minDate: new Date('1900-01-01'),
                maxDate: new Date(),
                currentDate: '',
                name: '',
                sex: '请选择',
                birthday: '请选择',
                nation: '请选择',
                idType: '请选择',
                idNumber: '',
                validDate: '请选择',
                address: '',
                uploadId: '请上传',
                control: '请选择',
                beneficiary: '本人',
                badRecord: '请选择',
                showPicker: false,
                pickerType: '',
                columns: [],
                sexColumns: ['男', '女'],
                idTypes: ['身份证', '护照'],
                controlList: ['是', '否'],
                beneficiaryPerson: ['本人', '他人'],
                badRecords: ['是', '否'],
                nationList: ["中国", "美国", "日本", "德国", "英国", "印度", "法国", "巴西", "意大利", "加拿大", "韩国", "俄罗斯", "澳大利亚", "西班牙", "墨西哥", "印度尼西亚", "土耳其", "荷兰", "沙特阿拉伯", "瑞士", "阿根廷", "中国台湾", "瑞典", "波兰", "比利时", "泰国", "伊朗", "奥地利", "挪威", "阿联酋", "挪威", "尼日利亚", "以色列", "南非", "中国香港", "爱尔兰", "丹麦", "新加坡", "马来西亚", "菲律宾", "委内瑞拉", "巴基斯坦", "哥伦比亚", "智利", "芬兰", "孟加拉国", "葡萄牙", "越南", "秘鲁", "希腊", "捷克", "罗马尼亚", "新西兰", "伊拉克", "阿尔及利亚", "卡塔尔", "哈萨克斯坦", "匈牙利", "科威特", "摩洛哥", "波多黎各", "厄瓜多尔", "安哥拉", "苏丹", "乌克兰", "斯洛伐克", "斯里兰卡", "叙利亚", "埃塞俄比亚", "多米尼加", "肯尼亚", "危地马拉", "乌兹别克斯坦", "缅甸", "阿曼", "卢森堡", "哥斯达黎加", "巴拿马", "乌拉圭", "保加利亚", "黎巴嫩", "克罗地亚", "白俄罗斯", "坦桑尼亚", "中国澳门", "斯洛文尼亚", "加纳", "立陶宛", "突尼斯", "刚果", "约旦", "塞尔维亚", "阿塞拜疆", "土库曼斯坦", "科特迪瓦", "玻利维亚", "利比亚", "巴林", "喀麦隆"],

            };
        },

        methods: {
            afterRead (file) {
                console.log(file);
            },
            onPickerConfirm (value) {
                this[this.pickerType] = value;
                this.showPicker = false;
            },
            onShowPicker (pickerType, columns) {
                this.columns = columns;
                this.pickerType = pickerType;
                this.showPicker = true;
            },

            addZero (number) {
                if (number < 10) {
                    return '0' + number;
                }
                return '' + number;
            },

            formatTime (time) {
                let year = time.getFullYear();
                let month = this.addZero(time.getMonth() + 1);
                let day = this.addZero(time.getDate())

                return `${year}-${month}-${day}`;
            },

            onDatePickerConfirm (value) {
                this[this.datePickerType] = this.formatTime(value);
                this.showDatePicker = false;
            },
            onShowDatePicker (pickerType) {
                this.datePickerType = pickerType;
                if (this[pickerType] === '请选择') {
                    this.currentDate = new Date('1990-01-01');
                } else {
                    this.currentDate = new Date(this[pickerType]);
                }
                this.showDatePicker = true;
            }
        }

    }
</script>
<style lang="scss" scoped>
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .real-name {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: space-between;
    }

    .input-area {
        overflow: auto;
        padding-bottom: pxToRem(40px);
    }

    .upload-image {
        width: pxToRem(200px);
        height: pxToRem(200px);
        margin-right: pxToRem(40px);
    }

    .upload-wrapper {
        padding: pxToRem(20px) 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .submit-button {
        height: pxToRem(96px);
    }

</style>