<template>
    <!-- 测评 -->
    <div class="user-test">
       <div class="top">
           根据测评结果，您的风险等级承受能力将属于以下五种类型之一：保守型，稳健型，平衡型，成长型，进取型，根据风险承受能力将匹配不同的产品，请认真作答。
       </div>
        <div class="middle">
            <div class="question-title">{{ questions[questionIndex].questionname }}</div>
            <div class="question-options">
                <van-radio-group v-model="questions[questionIndex].selected">
                    <van-radio
                            v-for="option in questions[questionIndex].questionOptionList"
                            :key="option.id"
                            :name="option.optionindex"
                            class="question-option"
                            checked-color="rgb(225, 81, 76)"
                            @click="change"
                    >
                        <div
                                slot="default"
                                slot-scope="props"
                                class="radio-label"
                        >{{ option.optionindex + '.    ' + option.optionname }}</div>
                    </van-radio>
                </van-radio-group>
            </div>
        </div>
        <div class="bottom">
            <van-progress :percentage="(questionIndex + 1) / questions.length * 100" stroke-width="4" color="rgb(221, 81, 76)" :show-pivot="false"/>
            <div class="question-guide">
                <div class="bottom-left" :style="preTextStyle" @click="questionIndex && questionIndex--">《 上一题</div>
                <div class="bottom-middle">{{ (questionIndex + 1) + '/' + questions.length }}</div>
                <div class="bottom-right" :style="nextTextStyle" @click="questionIndex < (questions.length - 1) && questionIndex++">下一题 》</div>
            </div>
            <van-button type="danger" :block="true" v-if="answerAll">提交</van-button>
        </div>
    </div>
</template>
<script>
    import { Progress } from 'vant';
    import { RadioGroup, Radio } from 'vant';

    export default {
        name: 'user-test',
        components: {
            [Progress.name]: Progress,
            [Radio.name]: Radio,
            [RadioGroup.name]: RadioGroup
        },
        data () {
            let questions = [{"id":1,"questionname":"您的年龄介于","orderby":1,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":1,"questionid":1,"optionindex":"A","optionname":"18-30岁","scorevalue":3.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":2,"questionid":1,"optionindex":"B","optionname":"31-50岁","scorevalue":7.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":3,"questionid":1,"optionindex":"C","optionname":"51-65岁","scorevalue":5.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":4,"questionid":1,"optionindex":"D","optionname":"高于65岁","scorevalue":1.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1}]},{"id":2,"questionname":"你的学历","orderby":2,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":5,"questionid":2,"optionindex":"A","optionname":"高中及以下","scorevalue":2.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":6,"questionid":2,"optionindex":"B","optionname":"中专或大专","scorevalue":4.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":7,"questionid":2,"optionindex":"C","optionname":"本科","scorevalue":6.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":8,"questionid":2,"optionindex":"D","optionname":"硕士及以上","scorevalue":8.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1}]},{"id":3,"questionname":"您的职业为","orderby":3,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":9,"questionid":3,"optionindex":"A","optionname":"无固定职业","scorevalue":2.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":10,"questionid":3,"optionindex":"B","optionname":"专业技术人员","scorevalue":4.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":11,"questionid":3,"optionindex":"C","optionname":"一般企事业单位员工","scorevalue":6.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":12,"questionid":3,"optionindex":"D","optionname":"金融行业一般从业人员","scorevalue":8.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1}]},{"id":4,"questionname":"您的家庭可支配年收入为","orderby":4,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":13,"questionid":4,"optionindex":"A","optionname":"50万元以下","scorevalue":1.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":14,"questionid":4,"optionindex":"B","optionname":"50—100万元","scorevalue":3.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":15,"questionid":4,"optionindex":"C","optionname":"100—500万元","scorevalue":5.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":16,"questionid":4,"optionindex":"D","optionname":"500—1000万元","scorevalue":7.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":17,"questionid":4,"optionindex":"E","optionname":"1000万元以上","scorevalue":8.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1}]},{"id":5,"questionname":"在您每年的家庭可支配收入中，可用于金融投资（储蓄存款除外）的比例为？","orderby":5,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":18,"questionid":5,"optionindex":"A","optionname":"小于10%","scorevalue":1.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":19,"questionid":5,"optionindex":"B","optionname":"10%至25%","scorevalue":3.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":20,"questionid":5,"optionindex":"C","optionname":"25%至50%","scorevalue":5.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":21,"questionid":5,"optionindex":"D","optionname":"大于50%","scorevalue":7.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1}]},{"id":6,"questionname":"您的投资知识可描述为","orderby":6,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":22,"questionid":6,"optionindex":"A","optionname":"有限：基本没有金融产品方面的知识","scorevalue":2.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":23,"questionid":6,"optionindex":"B","optionname":"一般：对金融产品及其相关风险具有基本的知识和理解","scorevalue":4.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":24,"questionid":6,"optionindex":"C","optionname":"丰富：对金融产品及其相关风险具有丰富的知识和理解","scorevalue":7.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1}]},{"id":7,"questionname":"您的投资经验可描述为","orderby":7,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":25,"questionid":7,"optionindex":"A","optionname":"除银行储蓄外，基本没有其他投资经验","scorevalue":2.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":26,"questionid":7,"optionindex":"B","optionname":"购买过债券、保险等理财产品","scorevalue":4.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":27,"questionid":7,"optionindex":"C","optionname":"参与过股票、基金等产品的交易","scorevalue":6.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":28,"questionid":7,"optionindex":"D","optionname":"参与过权证、期货、期权等产品的交易","scorevalue":8.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1}]},{"id":8,"questionname":"您有多少年投资基金、股票、信托、私募证券或金融衍生产品等风险投资品的经验？","orderby":8,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":29,"questionid":8,"optionindex":"A","optionname":"没有经验","scorevalue":1.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":30,"questionid":8,"optionindex":"B","optionname":"少于2年","scorevalue":3.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":31,"questionid":8,"optionindex":"C","optionname":"2至5年","scorevalue":5.0,"createTime":1533635729000,"updateTime":1533635729000,"createEmpid":1,"updateEmpid":1},{"id":32,"questionid":8,"optionindex":"D","optionname":"5至10年","scorevalue":7.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":33,"questionid":8,"optionindex":"E","optionname":"10年以上","scorevalue":8.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1}]},{"id":9,"questionname":"您计划的投资期限是多久？","orderby":9,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":34,"questionid":9,"optionindex":"A","optionname":"1年以下","scorevalue":2.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":35,"questionid":9,"optionindex":"B","optionname":"1至3年","scorevalue":4.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":36,"questionid":9,"optionindex":"C","optionname":"3至5年","scorevalue":6.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":37,"questionid":9,"optionindex":"D","optionname":"5年以上","scorevalue":7.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1}]},{"id":10,"questionname":"您的投资目的是？","orderby":10,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":38,"questionid":10,"optionindex":"A","optionname":"资产保值","scorevalue":2.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":39,"questionid":10,"optionindex":"B","optionname":"资产稳健增长","scorevalue":5.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":40,"questionid":10,"optionindex":"C","optionname":"资产迅速增长","scorevalue":8.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1}]},{"id":11,"questionname":"以下哪项描述最符合您的投资态度？","orderby":11,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":41,"questionid":11,"optionindex":"A","optionname":"厌恶风险，不希望本金损失，希望获得稳定回报","scorevalue":2.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":42,"questionid":11,"optionindex":"B","optionname":"保守投资，不希望本金损失，愿意承担一定幅度的收益波动","scorevalue":4.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":43,"questionid":11,"optionindex":"C","optionname":"寻求资金的较高收益和成长性，愿意为此承担有限本金损失","scorevalue":6.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":44,"questionid":11,"optionindex":"D","optionname":"希望赚取高回报，愿意为此承担较大本金损失","scorevalue":8.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1}]},{"id":12,"questionname":"假设有两种投资：投资A预期获得10%的收益，可能承担的损失非常小；投资B预期获得30%的收益，但可能承担较大亏损。您会怎么支配您的投资","orderby":12,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":45,"questionid":12,"optionindex":"A","optionname":"全部投资于收益较小且风险较小的A","scorevalue":2.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":46,"questionid":12,"optionindex":"B","optionname":"同时投资于A和B，但大部分资金投资于收益较小且风险较小的A","scorevalue":4.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":47,"questionid":12,"optionindex":"C","optionname":"同时投资于A和B，但大部分资金投资于收益较大且风险较大的B","scorevalue":6.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":48,"questionid":12,"optionindex":"D","optionname":"全部投资于收益较大且风险较大的B","scorevalue":8.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1}]},{"id":13,"questionname":"您认为自己能承受的最大投资损失是多少？","orderby":13,"doctype":2,"scoretype":1,"version":1,"createTime":1533635728000,"updateTime":1533635728000,"createEmpid":1,"updateEmpid":1,"questionOptionList":[{"id":49,"questionid":13,"optionindex":"A","optionname":"10%以内","scorevalue":2.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":50,"questionid":13,"optionindex":"B","optionname":"10%-30%","scorevalue":4.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":51,"questionid":13,"optionindex":"C","optionname":"30%-50%","scorevalue":6.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1},{"id":52,"questionid":13,"optionindex":"D","optionname":"超过50%","scorevalue":8.0,"createTime":1533635730000,"updateTime":1533635730000,"createEmpid":1,"updateEmpid":1}]}];
            questions.forEach(q => {
                q.questionOptionList.forEach(item => {
                    item.selected = ''
                });
            });
            return {
                questions,
                questionIndex: 0, //当前题目节点
            };
        },

        computed: {
            preTextStyle () {
                return (this.questionIndex > 0 ? { color: 'rgb(221, 81, 76)'} : { color: '#D3D3D3'});
            },
            nextTextStyle () {
                return (this.questions.length && this.questionIndex < (this.questions.length - 1) ? { color: 'rgb(221, 81, 76)'} : { color: '#D3D3D3'});
            },
            answerAll () {
                let answerAll = true;
                for (let i = 0; i < this.questions.length; i++) {
                    if (!this.questions[i].selected) {
                        answerAll = false;
                        break;
                    }
                }

                return answerAll;
            },
        },

        methods: {
            change () {
                //延迟一秒跳转，让用户看到选中效果
                setTimeout(() => {
                    if (this.questionIndex < (this.questions.length - 1)) {
                        this.questionIndex++;
                    }
                }, 300);
            },
        }
    }
</script>
<style lang="scss" scoped>
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .user-test {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        justify-content: space-between;
    }

    .top {
        padding: pxToRem(36px);
        font-size: pxToRem(28px);
        color: #5c6066;
        background: #EBF1FF;
        line-height: pxToRem(40px);
        font-weight: bold;
    }

    .bottom {
        width: 100%;
    }

    .question-guide {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: pxToRem(32px);
        height: pxToRem(96px);
        padding: 0 pxToRem(48px);
    }

    .bottom-middle {
        font-size: pxToRem(28px);
        color: #818a99;
    }

    .middle {
        flex: 1 1 auto;
        font-size: pxToRem(36px);
        color: #333;
        padding: 0 pxToRem(40px);
    }
    .question-title {
        font-weight: bold;
        line-height: pxToRem(64px);
        margin: pxToRem(40px) 0;
    }
    .radio-label {
        line-height: pxToRem(48px);
    }
</style>