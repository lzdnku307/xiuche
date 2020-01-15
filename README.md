# CMH

> My dandy Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production 
$ npm run build

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 项目初始化

### 设置环境变量
拷贝.env.sample 重命名为.env, 修改里面的变量
在release分支和dev分支，分别用不同的变量，请注意修改

### 开发分支 - dev
开发者新建自己的开发分支，比如 dev-simona, 或者在dev分支上开发，功能完成后合并到master分支。  
发布需要把master分支合并到release上，进行发布

### 高清屏幕适配方案 - 视口不缩放使用rem  
1. 由于vant的base-font-size是37.5，所以postcss使用的就是37.5
2. 开发中，可以使用两种方式生成rem
   1. 用_func.scss中的pxToRem函数，设计稿的事750的，所以，量到多少，就写多少px。例如： pxToRem(50px);
   2. 利用postcss，直接使用px，设计稿量到多少就除以2。例如量到50px，就写 width: 25px; PS: _func.scss提供了除2函数。pxHalf(50px);

### 使用mock
1. 安装相关依赖 mock, express
2. .env文件的BASE_URL设为http://127.0.0.1:3033
3. npm run mock
4. 请求自己模拟的接口和数据


### 项目依赖库
VantUI：https://youzan.github.io/vant/#/zh-CN/intro