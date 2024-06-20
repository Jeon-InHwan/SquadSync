export const state = () => ({
  starterProject: null,
  jsonData: null,
})

export const mutations = {
  setJsonData(state, data) {
    state.jsonData = data
  },
  setStarterProject(state, data) {
    state.starterProject = data
  },
}
