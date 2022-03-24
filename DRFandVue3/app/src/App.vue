<template>
<q-layout view="hHh lpR fFf" class="root-page">

  <div class="row justify-center">
    <main-menu/>
    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 view-page">
      <router-view/>
    </div>

  </div>

</q-layout>
</template>

<script setup>
import MainMenu from '@/components/menu/MainMenu.vue'
</script>

<style lang="scss">
@import '@/styles/main';
</style>
