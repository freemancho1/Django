<template>
<div class="component-main-menu main-menu q-mb-lg row items-center justify-center">
<div class="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 row">

  <div class="col-10 text-left">
    <img src="/favicon.ico"/>
    <span class="project-name" @click="router.push('/')">
      {{ project_name }}
    </span>

    <span v-for="menu in menus" :key="menu.id"
      :class="{ active: menus_active[menu.id] }"
      @click="goMenuPath(menu.id)">
      {{ menu.label }}
    </span>
  </div>

  <div class="col-2 text-right items-center right-menu">
    <!-- Right Menu Area -->
    <span :class="{ active: menus_active[about.id] }"
      @click="goAbout()">
      {{ about.label }}
    </span>
  </div>

</div>
</div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const project_name = store.state.project_name
const menus = store.state.project_menus.menus
const about = store.state.project_menus.about
const menus_active = ref(new Array(menus.length+1))
const current_menu_id = ref(computed(() => {  
  return store.getters.newCurrentMenu;
}))
watch(current_menu_id, (newCurrentMenuId) => {
  menus_active.value.fill(false)
  menus_active.value[newCurrentMenuId] = true
})

const goMenuPath = (menu_id) => {
  router.push(menus[menu_id].to)
}
const goAbout = () => {
  router.push(about.to)
}
</script>