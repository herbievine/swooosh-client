<template>
    <div class="nav">
        <div class="logo">
            <router-link to="/">
                <Logo />
            </router-link>
        </div>
        <div class="switch">
            <div
                v-for="(route, i) in routes"
                :key="i"
                :class="[
                    route.name.toLowerCase(),
                    $route.name === route.name ? 'selected' : ''
                ]"
                @click="$router.push({ name: route.name })"
            >
                <p>{{ route.name }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Logo from '@/components/Logo.vue'

export default {
    name: 'Navigation',
    components: {
        Logo
    },
    setup() {
        const routes = [
            {
                name: 'Create',
                path: '/'
            },
            {
                name: 'Analytics',
                path: '/analytics'
            }
        ]

        return {
            routes
        }
    }
}
</script>

<style scoped lang="scss">
.nav {
    height: 70px;
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & .switch {
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        & div {
            width: auto;
            height: 36px;
            color: #cccccc;
            background-color: #323232;
            border: none;
            font-size: 16px;
            font-weight: 500;

            &:hover {
                cursor: pointer;
            }

            & a {
                color: #cccccc;
                background-color: none !important;
                text-decoration: none;
                line-height: 22px;
                font-weight: 400;
                background: none;
            }
        }

        & .selected {
            background-color: #393939;
        }

        & .create {
            padding: 6px 10px 6px 10px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        & .analytics {
            padding: 6px 10px 6px 10px;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
}
</style>
