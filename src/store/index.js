import Vue from 'vue'
import Vuex from 'vuex'
import HappinessSoreStore from '../domains/happiness/vuex-module'

Vue.use(Vuex)

export default new Vuex.Store(HappinessSoreStore)
