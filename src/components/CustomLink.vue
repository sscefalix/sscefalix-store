<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>

<template>
    <router-link :to="to" class="button"><slot /></router-link>
</template>

<style scoped>
.button {
    cursor: pointer;
    width: fit-content;
    background-color: var(--primary-color);
    padding: 8px 24px;
    color: var(--default-color);
    border-radius: 4px;
}
.button:hover {
    background-color: var(--primary-color-hover);
}
</style>