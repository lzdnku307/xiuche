<template>
    <!-- 新闻详情 -->
    <div class="new-detail">
        <div class="title">{{ title }}</div>
        <div class="date">{{ date }}</div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>

    export default {
        layout: 'app',
        name: 'new-detail',
        data() {
            return {
                title: '摩根大通CEO：区块链技术是“真实”的 将用区块链“做很多事情',
                date: '2018-08-08 09:35',
                content: "<p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">摩根大通银行董事长兼CEO杰米•戴蒙（Jamie Dimon）看好区块链技术，但不愿对加密货币发表过多评论。他表示，法定货币支付应用程序是“我们业务最大的潜在破坏者”。</p><p align=\"center\" style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;; text-align: center;\"><img src=\"http://pictt.lzd.26595.com/UCGmmBrjXm09dnFXRHUVMtPONJPZ7L_PEkX1f6y_LvaG9yA9NkAwG19luqPjxrQOXO2T7rp7Ni5HJZOlMza41Q\" img_width=\"740\" img_height=\"494\" inline=\"0\" alt=\"摩根大通CEO：区块链技术是“真实”的，将用区块链“做很多事情”\" class=\"\" style=\"display: block; margin: 0px auto; padding: 0px; vertical-align: top; max-width: 80%; width: 466.2px; height: 311.4px;\"></p><p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">当被问及公司的主要竞争威胁时，戴蒙特别指出了包括PayPal，Venmo和支付宝在内的“新形式的支付方式”。戴蒙说：“这些公司将聊天、社交和购物体验融入基本银行服务，而且做得很好。”</p><p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">不过，戴蒙没有提到加密货币是银行的一个潜在破坏者。当他被问到对加密货币的看法时，戴蒙简单地回答说：“我可能不应该再谈加密货币了。”戴蒙认为，加密货币是“与黄金、法定货币不同，因为后者受法律、警方、法院保护，不可以复制，并且有限制”。同时，戴蒙认为，区块链技术是“真实”的，这从侧面暗示加密货币并非如此。他还谈及摩根大通正在“测试区块链，并将其用于很多事情中”。</p><p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">尽管摩根大通关于加密货币的官方立场和戴蒙观点并不总是一致，但两者都在过去一年中发生了变化。据报道，2017年9月13日，戴蒙在投资者会议上称比特币为“欺诈”，同时威胁要解雇任何在该公司账户上交易比特币的员工。</p><p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">不过，与戴蒙观点不同，摩根大通银行在2月27日向美国证券交易委员会提交报告的竞争部分中称，加密货币可能“对摩根大通产品、服务的价格和费用上施加下行压力，可能导致摩根大通失去市场份额”。</p><p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">今年2月，摩根大通的一份内部报告也将加密货币称为“围绕区块链技术的创新性漩涡”。</p><p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">今年1月，在达沃斯接受访问时，戴蒙的态度称“无法评价加密货币”，但也表示自己“不是怀疑论者”。</p><p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">以此同时，在过去的几个月里，摩根大通和戴蒙更明确地表示看好区块链，该银行甚至在5月3日提交了与区块链相关的专利。</p><p style=\"margin-right: auto; margin-bottom: 15px; margin-left: auto; padding: 0px; font-size: 16px; line-height: 30px; color: rgb(85, 85, 85); font-family: &quot;microsoft yahei&quot;;\">5月17日，摩根大通宣布，他们创建并任命了加密资产战略负责人的新职位</p>"
            };
        },
    }
</script>
<style lang="scss" scoped>
    @import '~assets/css/variables';
    @import '~assets/css/func';

    .new-detail {
        padding: 0 pxToRem(36px) pxToRem(20px) pxToRem(36px);
        background: #FFF;
    }

    .title {
        font-size: pxToRem(32px);
        margin: pxToRem(20px) 0;
        line-height: pxToRem(48px);
    }

    .date {
        font-size: pxToRem(28px);
        color: #7d7e80;
        margin-bottom: pxToRem(40px);
    }
</style>