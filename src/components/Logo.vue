<template>
    <p title="swooo[sh]">
        swooo[sh]
    </p>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Logo'
})
</script>

<style scoped lang="scss">
p {
    font-size: 30px;
    color: #cccccc;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.1ch;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
}
</style>
