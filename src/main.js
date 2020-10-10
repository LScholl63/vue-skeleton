import Vue, { createApp, h } from 'vue'
import '@/plugins/axios'
import vuetify from '@/plugins/vuetify'
import '@/plugins/veevalidate'
import '@/plugins/common'
import '@/plugins/googleAnalytics'
import i18n from '@/plugins/i18n'
import App from '@/App.vue'
import router from '@/router'
import { store } from '@/store'
import VuetifyConfirm from 'vuetify-confirm'

Vue.use(VuetifyConfirm, { vuetify })

const app = createApp({
  vuetify,
  i18n,
  render: () => h(App),

  created() {
    store.dispatch('setLocale', store.getters.locale)
    if (store.getters.isTokenSet) {
      store.dispatch('autoLogin')
    }
  }
})
  .use(router)
  .use(store)
  .mount('#app')

if (window.Cypress) {
  // Only available during E2E tests
  window.app = app
}
