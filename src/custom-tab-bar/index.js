Component({
	data: {
		show: true,
		userPhone: '', // 是否已获得用户手机
		userInfo: '', // 是否已获得用户信息
		selected: -1,
		border: '',
		color: "#BCBCBC",
		selectedColor: '#FF5925',
		backgroundColor: "#fff",
		sys: wx.getSystemInfoSync(),
		list: [{
				"pagePath": "/pages/index/index",
				"text": "首页",
				"iconPath": "/static/tabbar/app0.svg",
				"selectedIconPath": "/static/tabbar/app1.svg",
				"auth": '',
				"switchTab": true,
				"bubble": 0
			},
			{
				"pagePath": "/pages/user/profile",
				"text": "我的",
				"iconPath": "/static/tabbar/user0.svg",
				"selectedIconPath": "/static/tabbar/user1.svg",
				"auth": '', // phoneNumber, userInfo
				"switchTab": true,
				"bubble": 10
			}
		]
	},

	lifetimes: {
		attached() {
			console.log('[tabbar] attached')
		}
	},

	methods: {

		// 获取用户信息
		onGetUserInfo(e) {
			console.log('[tabbar] onGetUserInfo', e)
			let data = e.detail;
			if (data.errMsg === 'getUserInfo:ok') {
				// getApp().saveUserInfo(data, json => {
				//   this.switchTab(e);
				// })
				this.switchTab(e)
			}
		},

		// 获取用户手机号
		onGetPhoneNumber(e) {
			console.log('[tabbar] onGetPhoneNumber', e)
			let data = e.detail;
			if (data.errMsg === 'getPhoneNumber:ok') {
				// getApp().saveUserPhone(data, json => {
				//   this.switchTab(e);
				// })
				this.switchTab(e)
			} else {

			}
		},

		switchTab(e) {
			wx.vibrateShort()
			let that = this;
			let index = e.currentTarget.dataset.index;
			let item = that.data.list[index];
			let url = item.pagePath
			// if ((item.auth === 'userInfo' && !this.data.userInfo) || (item.auth === 'phoneNumber' && !this.data
			// 		.userPhone)) {
			// 	return
			// }
			if (item.switchTab) {
				wx.switchTab({
					url
				})
			} else {
				wx.navigateTo({
					url
				})
			}
		}
	}
})