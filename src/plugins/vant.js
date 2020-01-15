import Vue from 'vue';
// import Vant from 'vant';
// Vue.use(Vant);

import { Button, Field, Icon, Image, Lazyload, PullRefresh, Loading, Toast, Dialog, List, Popup, Cell, CellGroup, Checkbox, RadioGroup, Radio } from 'vant';

Vue.use(Button)
    .use(Field)
    .use(Icon)
    .use(Image)
    .use(Lazyload)
    .use(PullRefresh)
    .use(Loading)
    .use(Toast)
    .use(Dialog)
    .use(List)
    .use(Popup)
    .use(Cell)
    .use(CellGroup)
    .use(Checkbox)
    .use(RadioGroup)
    .use(Radio)
// 注册时设置`lazyComponent`选项
Vue.use(Lazyload, {
    lazyComponent: true
});
