import { createRouter, createWebHistory } from 'vue-router'
// import { useStore } from 'vuex'
import store from '../store/index'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/read-me', name: 'About', component: () => import('../views/About.vue') },
  { path: '/vue3-syntax', name: 'Vue3Syntax', component: () => import('../views/Vue3Syntax.vue') },
  { path: '/js-syntax', name: 'JsSyntax', component: () => import('../views/JsSyntax.vue') },
  { path: '/todo-list', name: 'TodoList', component: () => import('../views/TodoList.vue') },
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const project_menus = store.state.project_menus
const getMenuId = (path) => {
  let menu_id = project_menus.non_selection_id
  try {
    menu_id = project_menus.menus.find((menu) => menu.to == path).id
  } catch(e) {
    menu_id = (path == project_menus.about.to) ? 
              project_menus.about.id: project_menus.non_selection_id
  }
  return menu_id
}

// router.beforeEach((to, from, next) => {
router.beforeEach((to) => {
  // 값을 초기화 시킨 후 다시 변경해줘야,
  // 페이지 새로고침 등에서 정상적으로 값이 변경되었음을 인식함.
  store.commit('changeCurrentMenu', project_menus.non_selection_id)
  store.commit('changeCurrentMenu', getMenuId(to.fullPath))
})

export default router
