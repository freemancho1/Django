import { createStore } from 'vuex'

export default createStore({
  state: {
    project_name: 'Vue3.js Sample',
    project_menus: {
      menus: [
        { id: 0, label: 'Vue3 Syntax', to: '/vue3-syntax' },
        { id: 1, label: 'JS Syntax', to: '/js-syntax' },
        { id: 2, label: 'Todo List', to: '/todo-list' },
        { id: 3, label: 'User Manager', to: '/user-manager' },
      ],
      about: { id: 4, label: 'Read Me', to: '/read-me' },
      current_menu: -1,
      non_selection_id: -1,
    },
    page_menus: {
      sample: {
        title: 'page-title',
        sub: [
          { 
            title: 'sub-title1', 
            menus: [
              {
                label:    '',
                to:       '',
                caption:  '',
                icon:     ''
              },
              {
                label:    '',
                to:       '', 
                caption:  '',
                icon:     ''
              }
            ]
          },
          { 
            title: 'sub-title2', 
            menus: [
              {
                label:    '',
                to:       '',
                caption:  '',
                icon:     ''
              },
              {
                label:    '',
                to:       '', 
                caption:  '',
                icon:     ''
              }
            ]
          },
        ],
      },
      vue3_syntax: {
        title: 'Vue.js 3 Syntax',
        sub: [
          { 
            title: 'Components', 
            menus: [
              {
                label:    'User Define Tag',
                to:       '/vue3-syntax/user-define-tag',
                caption:  '자식 컴포넌트에 데이터를 전달하는 다양한 방법 소개',
                icon:     'face_retouching_natural'
              },
            ]
          }
        ]
      },
      todo_list: {
        title: 'Todo List',
        sub: [
          { 
            title: 'Samples', 
            menus: [
              {
                label:    'Simple & REST',
                to:       '/todo-list/simple-rest',
                caption:  'rest, axios, filters, modal',
                icon:     'list'
              },
              {
                label:    'Vue3 Book',
                to:       '/todo-list/vue3-book', 
                caption:  'localStorage, multi layer components',
                icon:     'auto_stories'
              }
            ]
          },
        ],
      },
      user_manager: {
        title: 'User Manager',
        sub: [
          { 
            title: 'Log In/Out', 
            menus: [
              {
                label:    'Login',
                to:       '/user-manager/login',
                caption:  '..',
                icon:     'login'
              },
              {
                label:    'Logout',
                to:       '/user-manager/logout', 
                caption:  '..',
                icon:     'logout'
              },
              {
                label:    'Sign Up',
                to:       '/user-manager/sign-up', 
                caption:  '..',
                icon:     'face'
              }
            ]
          },
          { 
            title: 'Management', 
            menus: [
              {
                label:    'Change Password',
                to:       '/user-manager/change-password',
                caption:  '..',
                icon:     'password'
              },
              {
                label:    'Change Infomation',
                to:       '/user-manager/change-info', 
                caption:  '..',
                icon:     'feed'
              }
            ]
          },
        ],
      },      
    },
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
