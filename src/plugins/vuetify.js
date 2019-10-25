import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { VTreeSelect, VCascader, VDataGridSelect } from 'vuetify-toolkit/vuetify-toolkit.umd'
Vue.use(Vuetify, {
  VTreeSelect,
  VCascader,
  VDataGridSelect
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})
