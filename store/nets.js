export const state = () => ({
	nets: [],
	totalNets: false,
	page: null
})
export const getters = {
	nets(state) {
		return state.nets
	}
}
export const mutations = {
	saveNets(state, nets) {
		state.nets = nets
	},
	setTotal(state) {
		state.totalNets = true
	},
	pushNets(state, nets) {
		nets.forEach(item => state.nets.push(item))
	},
	setPage(state, page) {
		state.page = page
	}
}