<template>
    <div class="form">
        <div v-for="(block, i) in blocks" :key="i">
            <p>{{ block.label }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Global } from '@/global'

export default defineComponent({
    name: 'ReusableForm',
    props: {
        blocks: {
            type: Object as () => Global.Block[],
            required: true
        }
    }
})
</script>

<style></style>
