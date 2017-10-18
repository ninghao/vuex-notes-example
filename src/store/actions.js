export const initial = ({ commit }) => {
  commit('setInitialData')
}

export const create = ({ commit }) => {
  commit('createEntity')
}

export const update = ({ commit }, entity) => {
  commit('updateEntity', entity)
}
