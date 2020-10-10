import Vuex from 'vuex'
import modules from '@/store/modules'

export const store = Vuex.createStore({
  modules: {
    ...modules
  }
})

if (window.Cypress) {
  // Only available during E2E tests
  window.__store__ = store
}
