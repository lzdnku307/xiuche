import request from '../http';
/**
 * 材料信息列表
 * params:
 * token (string): 令牌 ,
*/
// eslint-disable-next-line import/prefer-default-export
export function getMaterialList(params) {
  return request({
    url: '/test/testData',
    method: 'get',
    params,
  });
}