export const state = () => ({
		nets: []
})
export const getters = {
		nets(state) {
				return state.nets
		}
}
export const mutations = {
		saveNets(state, nets) {
				state.nets = nets
		}
}