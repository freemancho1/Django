import { createStore } from 'vuex'

export default createStore({
  state: {
    project_name: 'Vue3.js Sample',
    project_menus: {
      menus: [
        { id: 0, label: 'Vue3 Syntax', to: '/vue3-syntax' },
        { id: 1, label: 'JS Syntax', to: '/js-syntax' },
        { id: 2, label: 'Todo List', to: '/todo-list' },
      ],
      about: { id: 3, label: 'Read Me', to: '/read-me' },
      current_menu: -1,
      non_selection_id: -1,
    }
  },
  mutations: {
    changeCurrentMenu(state, menu_id) {
      state.project_menus.current_menu = menu_id
    }
  },
  getters: {
    newCurrentMenu(state) {
      return state.project_menus.current_menu
    }
  },
  actions: {
  },
  modules: {
  }
})
