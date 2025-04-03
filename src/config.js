let envVersion = 'develop'
// #ifdef MP
const accountInfo = uni.getAccountInfoSync()
envVersion = accountInfo.miniProgram.envVersion
// #endif
const env = envVersion
// const env = 'release'

const ENVCFG={
	develop:{
		url:'http://192.168.1.5:8000/api',
	},
	trial:{
		url:'https://xxx.xxx.com/api'
	},
	release:{
		url:'https://xxx.xxx.com/api'
	}
}

export const BASE_URL = ENVCFG[env].url
export const USER_DATA_KEY = '_data_' + env
export const USER_DATA_KEY_ID = '_data_id_' + env
export const USER_DATA_CHECK = '_check_' + env
export const VERSION = 'v0.0.1'
export const STATIC = 'https://static.app.com'

// #ifdef MP
export const MP_WX_APPID = accountInfo.miniProgram.appId
// #endif