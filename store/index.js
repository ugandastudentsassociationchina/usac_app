export const state = () => ({
  name: 'usac store',
  response: undefined
})

export const mutations = {
  INCREMENT(state, payload) {
    state.response  = payload;
  }
}

export const actions = {
    async getTest({ commit }) {
        await fetch('/test')
            .then(data => {
                commit('INCREMENT', data)
                console.log(data)
            })
            .catch(err => console.log(err));
    }
}