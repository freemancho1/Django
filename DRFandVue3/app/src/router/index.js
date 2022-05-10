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
  // 값을 초기화 시킨 후 다시 변경해줘야,
  // 페이지 새로고침 등에서 정상적으로 값이 변경되었음을 인식함.
  store.commit('changeCurrentMenu', project_menus.non_selection_id)
  // to.matched[0].path를 해야 부모 주소가 추출됨
  // 1..n까지 있을 수 있음(1은 첫번째 자식 주소)
  // 이 주소로 상단 메뉴의 'active' 상태를 유지함.
  store.commit('changeCurrentMenu', getMenuId(to.matched[0].path))
})

export default router
