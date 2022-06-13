export const state = () => ({
	nets: [],
	total: 0,
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
	setTotal(state, count) {
		state.total = count
	},
	pushNets(state, nets) {
		nets.forEach(item => state.nets.push(item))
	},
	setPage(state, page) {
		state.page = page
	}
}