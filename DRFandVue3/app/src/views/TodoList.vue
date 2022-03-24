<template>
<div class="view-todo-list row">

  <div class="col-3">
    <page-menu :menus="page_menu"/>
  </div>
  <div class="col-9">
    <router-view/>
  </div>

</div>
</template>

<script setup>
import { useStore } from 'vuex'
import PageMenu from '@/components/menu/PageMenu.vue'

const store = useStore()

const page_menu = store.state.page_menus.todo_list
</script>
