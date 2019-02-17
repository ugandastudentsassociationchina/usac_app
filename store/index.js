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
            .then(res => res.text())
            .then(data => commit('INCREMENT', data))
            .catch(err => console.log(err));
    }
}