<template>
<div class="view-main row">

    <div class="col-3">
        <page-menu :menus="page_menu"/>
    </div>
    <div class="col-9">
        <router-view/>
    </div>

</div>
</template>

<script setup>
import { ref, useStore, defineProps } from 'vuex'
import PageMenu from '@/components/menu/PageMenu.vue'

const store = useStore();

const props = defineProps({
    view_name: {
        type: String,
        default: ':sample'
    }
});
console.log(props.view_name);
const page_menu = ref(store.state.page_menus[props.view_name]);
</script>