import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={//要设置的全局访问的state对象
  searchProductName:''
};

const getters = {   //实时监听state值的变化(最新状态)
  getSerachProductName(state){
    return state.searchProductName;
  }
};

const mutations = {
  setSearchProductName(state,name){
    state.searchProductName = name;
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations
});
export default store;
