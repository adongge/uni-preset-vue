import { http } from '@/common/http'

//用户
export const login = (params) => http.post('/user/login_mp', params) // 登录
export const profile = (params) => http.get('/user/profile', params) // 个人信息

export const upload = (params) => http.post('/user/upload', params) // 个人信息