const state = {
	navIndex: 0,
	tabbar: []
}

// getters：对数据获取之前的再次编译，可以理解为state的计算属性。组件中使用 $sotre.getters.fun()
const getters = {
	
}
// mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
const mutations = {
	setNavIndex(state, navIndex) {
		state.navIndex = navIndex;
	},
	setTabBar(state, tabbar) {
		state.tabbar = tabbar;
	},
}
// actions：异步操作。在组件中使用是$store.dispath('')
const actions = {
	
}

const common = {
	state,
	mutations,
	getters,
	actions
}

export default common