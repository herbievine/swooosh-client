<template>
    <Navigation />
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@/modules/Navigation.vue'

export default defineComponent({
    name: 'App',
    components: {
        Navigation
    }
})
</script>

<style lang="scss">
@import 'main.scss';
</style>
