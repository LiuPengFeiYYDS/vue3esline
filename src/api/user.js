/**
 * 登陆的封装接口
 *
 */
import request from '../utils/request'

const login = (data) => {
  return request({
    url: 'login',
    method: 'POST',
    data
  })
}

export default {
  login
}
