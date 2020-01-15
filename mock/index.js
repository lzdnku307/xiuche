const Mock = require('mockjs')
const express = require('express')
const app = express()

// 解释post请求
const bodyParser = require('body-parser')

// mock 数据相关api
const testAPI = require('./api/test')   //测试模块
const registeredAPI = require('./api/registeredReqs')  //挂号模块


app.use(bodyParser.json())

// 设置跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  // 此处根据前端请求携带的请求头进行配置。（反正我也不知道说的是啥，后面具体情况具体分析）
  res.header('Access-Controll-Allow-Headers', 'X-Requested-With,  Content-Type')
  next()
})

// 根据模块id请求对应的菜单信息
app.get('/test/testData', (req, res) => {
  res.json(Mock.mock(testAPI.getMenuData(req)))
})
//获取科室列表
app.get('/zyy/departmentsList',(req,res)=>{
	res.json(Mock.mock(registeredAPI.getDepartmentsList(req))) ;
})

app.listen('8888', () => {
  console.log('mock服务器启动中，占用端口：8888')
})
