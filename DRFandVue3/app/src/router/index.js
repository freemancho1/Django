import { createRouter, createWebHistory } from 'vue-router';
// import { useStore } from 'vuex'
import store from '../store/index';
import Home from '../views/Home.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/read-me', 
    name: 'About', 
    component: () => import('../views/About.vue') 
  },
  { 
    path: '/vue3-syntax', 
    name: 'Vue3Syntax', 
    component: () => import('../views/Vue3Syntax.vue'),
    children: [
      {
        path: 'user-define-tag',
        name: 'UserDefineTag',
        component: () => import('../views/vue3syntax/UserDefineTag.vue')
      }
    ]
  },
  { 
    path: '/js-syntax', 
    name: 'JsSyntax', 
    component: () => import('../views/JsSyntax.vue') 
  },
  { 
    path: '/todo-list', 
    name: 'TodoList', 
    component: () => import('../views/TodoList.vue'),
    // path: '/todo-list', 
    // name: 'TodoList', 
    // component: () => import('../views/MainView.vue'),
    // props: { view_name: 'todo_list'},
    children: [
      { 
        path: 'vue3-book', 
        name: 'Vue3Book', 
        component: () => import('../views/todolist/Vue3Book.vue')
      },
      { 
        path: 'simple-rest', 
        name: 'SimpleRest', 
        component: () => import('../views/todolist/SimpleRest.vue')
      },
    ]
  },
  {
    path: '/user-manager',
    name: 'UserManager',
    component: () => import('../views/UserManager.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/usermanager/Login.vue')
      },
      {
        path: 'logout',
        name: 'Logout',
        component: () => import('../views/usermanager/Logout.vue')
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import('../views/usermanager/SignUp.vue')
      },
      {
        path: 'change-password',
        name: 'ChangePassword',
        component: () => import('../views/usermanager/ChangePassword.vue')
      },
      {
        path: 'change-info',
        name: 'ChangeInfo',
        component: () => import('../views/usermanager/ChangeInfo.vue')
      },
    ]
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const project_menus = store.state.project_menus
const getMenuId = (path) => {
  let menu_id = project_menus.non_selection_id;
  try {
    menu_id = project_menus.menus.find((menu) => menu.to == path).id;
  } catch(e) {
    menu_id = (path == project_menus.about.to) ? 
              project_menus.about.id: project_menus.non_selection_id;
  }
  return menu_id;
}

// router.beforeEach((to, from, next) => {
router.beforeEach((to) => {
  // ?????? ????????? ?????? ??? ?????? ???????????????,
  // ????????? ???????????? ????????? ??????????????? ?????? ?????????????????? ?????????.
  store.commit('changeCurrentMenu', project_menus.non_selection_id)
  // to.matched[0].path??? ?????? ?????? ????????? ?????????
  // 1..n?????? ?????? ??? ??????(1??? ????????? ?????? ??????)
  // ??? ????????? ?????? ????????? 'active' ????????? ?????????.
  store.commit('changeCurrentMenu', getMenuId(to.matched[0].path))
})

export default router
