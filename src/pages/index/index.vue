<template>
	<view class="content">
		<view class="text-area">
			<text class="title">阿东的 uniapp 项目</text>
		</view>
    
    <view class="version">{{ version }}</view>
		
	</view>
</template>

<script>
	import store from '@/store'
	import {
		login
	} from '@/api/user'
	import {
		utils
	} from '@/common/utils'
	import {
		USER_DATA_KEY,
		USER_DATA_KEY_ID,
		VERSION,
		PLATFORM_ID
	} from '@/config'
	export default {
		data() {
			return {
				title: "",
				version: VERSION
			}
		},
		onLoad() {
			this.title = utils.getUserToken()
			if (!this.title) {
				this.userLogin()
			}
		},
		onShow() {
			utils.setTabbar(0, false)
		},
		methods: {
			userLogin() {
				uni.login({
					success: res => {
						if (res.code) {
							login({
								code: res.code,
								platform_id: PLATFORM_ID
							}).then((result) => {
								console.log(result)
								utils.cache(USER_DATA_KEY, result.data.token, 'd1')
								utils.cache(USER_DATA_KEY_ID, result.data.id, 'd1')
								this.title = result.data.token
							}).catch((result) => {
								console.error(result)
								uni.showToast({
									title: '请求登录失败',
									icon: 'none',
									duration: 3000
								});
							})
						}
					}
				})
			}
		},
	}
</script>

<style>
	page {
		background: #ffffff;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.version{
		color: #cccccc;
		font-size: 10px;
	  text-align: center;
		margin-top: 25px;
	}
	
</style>