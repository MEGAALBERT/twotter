import { createStore } from 'vuex'
import { UserModule } from "./User"

export default createStore({
  // beginning state variables
  state: { 
    // user: null
  },

  //Mutations are functions that change the state
  mutations: {
    // SET_USER(state, user){
    //   state.user = user;
    // }
  },

  //function that you call throught your applications that call mutations
  actions: {
    // setUser({ commit }, user){
    //   commit('SET_USER', user)
    // }
  },

  modules: {
    User: UserModule
  }
})
