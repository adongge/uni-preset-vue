import { USER_DATA_KEY, USER_DATA_KEY_ID } from '@/config'

export const utils = {
	hideLoading(){
		// uniapp 非要报错，神经 ,而且非要在 showToast 之前 hideLoading() 不然 showToast 会提前关闭，真机体验
		try {
			uni.hideLoading()
		} catch (error) {
			//TODO handle the exception
		}
	},
	setTabbar(selected, show = true){
		let pages = getCurrentPages();
		let page = pages[pages.length - 1];
		if (typeof page.getTabBar === 'function' && page.getTabBar()) {
			page.getTabBar().setData({
				selected: selected,
				show: show
			})
		}
	},
	getUserToken(){
		let data = this.cache(USER_DATA_KEY)
		if(data){
			return data
		}
		return false
	},
	getUserId(){
		console.log(USER_DATA_KEY_ID)
		let data = this.cache(USER_DATA_KEY_ID)
		console.log(data)
		if(data){
			return data
		}
		return false
	},
	cache: function(key, value, time = 'd1') {
		let nowTime = Date.parse(new Date()) / 1000;
		if (key && value) {
			let expire = nowTime + this.getExp(time) * 1
			uni.setStorageSync(key, JSON.stringify(value) + '|' + expire)

		} else if (key && value === false) {
			let val = uni.getStorageSync(key);
			if (val) {
				uni.removeStorageSync(key)
			}
		} else if (key && value == undefined) {
			let val = uni.getStorageSync(key);
			if (val) {
				// 缓存存在，判断是否过期
				let temp = val.split('|')
				if (!temp[1] || temp[1] <= nowTime) {
					uni.removeStorageSync(key)
					return undefined;
				} else {
					return JSON.parse(temp[0]);
				}
			}
		}
	},
	getExp: function(str) {
		if (str == undefined) str = 'd1';
		var str1 = str.substring(1, str.length) * 1;
		var str2 = str.substring(0, 1);
		if (str2 == "s") {
			return str1;
		} else if (str2 == "h") {
			return str1 * 60 * 60;
		} else if (str2 == "d") {
			return str1 * 24 * 60 * 60;
		}
	},
	str2Timestamp: function(str) {
		// 格式
		// Date('2021/11/19')
		// Date('2021-11-19')
		// Date(2021,11,19)
		// Date('2021-11-19 12:12:12')
		// Date('2021/11/19 12:12:12')
		// Date(2021,11,19,12,12,12)
		return new Date(str).getTime() / 1000
	},
	timestamp2Str: function(timestamp, format='yyyy-MM-dd'){
		return this.formatDate(new Date(timestamp * 1000), format)
	},
	formatDate: function(date, fmt) {
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		let o = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'h+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds()
		};
		for (let k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				let str = o[k] + '';
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00'+str).substr(str.length));
			}
		}
		return fmt;
	}
}