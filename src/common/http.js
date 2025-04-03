import { VERSION, BASE_URL } from '@/config'
import { utils } from '@/common/utils'

export const http = {
	request: function(method, url, data){
		
		let token = utils.getUserToken()
		
		return new Promise((resolve, reject) => {
			let header = {
				'Content-Type': 'application/json',
				'VERSION': VERSION
			}
			
			if(token){
				header['Authorization'] = `Bearer ${token}`
			}
			
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			
			uni.request({
				url: BASE_URL + url,
				data: data,
				header: header,
				method: method,
				success: (res) => {
					utils.hideLoading()
					console.log('[request success]...')
					let code = res?.data?.code
					let msg = res?.data?.msg || '服务器错误'
					let res_data = res?.data || res
					if(code === 0){
						resolve(res_data)
					}else{
						uni.showToast({
							title: 'error ' + msg,
							icon: 'none',
							duration: 3000
						})
						reject(res_data)
					}
					
				},
				fail: (res) => {
					utils.hideLoading()
					console.log('[request fail]...', res)
					let msg = res?.data?.msg || '服务器错误'
					uni.showToast({
						title: 'fail ' + msg,
						icon: 'none',
						duration: 3000
					});
					
					reject(res)
				}
			});
		});
	},
	post:function(url, params) {
		return this.request('POST', url, params)
	},
	get:function(url, params) {
		return this.request('GET', url, params)
	}
}