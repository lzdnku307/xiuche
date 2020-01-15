const Mock = require('mockjs')
// const Random = Mock.Random
// 菜单接口
// 根据模块id，获取模块菜单数据
const testData = []
const total = 22
for (let i = 0;i < total;i++) {
  testData.push(
    Mock.mock({
      pid: `pid${i}`,
      name: `menu${i}`
    })
  )
}

module.exports = {
  getMenuData: config => {
    // 参数解释
    return {
      code: 0,
      message: 'success',
      data: testData
    }
  }
}
