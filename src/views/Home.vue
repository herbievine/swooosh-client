<template>
    <div class="home">
        <ReusableForm
            :blocks="[
                {
                    label: 'string',
                    input: {
                        name: 'string',
                        type: 'string',
                        placeholder: 'string'
                    }
                }
            ]"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReusableForm from '@/components/ReusableForm.vue'

export default defineComponent({
    name: 'Home',
    components: {
        ReusableForm
    }
})
</script>
