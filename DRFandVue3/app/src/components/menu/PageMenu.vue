<template>
<div class="component-page-menu page-menu text-left">

  <q-list>
    <q-item-label header class="title text-left">
      {{ menus.title }}
    </q-item-label>

    <div v-for="sub in menus.sub" :key="sub.title">
      <q-item-label
        header class="sub-title text-left">
        {{ sub.title }}
      </q-item-label>

      <q-item v-for="menu in sub.menus" :key="menu.to"
        clickable v-ripple @click="goSubMenuPath(menu.to)">
        <q-item-section avatar>
          <q-avatar color="teal" text-color="white" :icon="menu.icon"/>
        </q-item-section>
        <q-item-section>
          <q-item-label class="menu">
            {{ menu.label }}
          </q-item-label>
          <q-item-label class="caption">
            {{ menu.caption }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </q-list>

</div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  menus: {
    type: Object,
    default: () => {},
  }
})

const goSubMenuPath = (path) => {
  router.push(path)
}

onMounted(() => {
  goSubMenuPath(props.menus.sub[0].menus[0].to)
})
</script>