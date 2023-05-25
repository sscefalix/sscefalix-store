<script setup lang="ts">
defineProps<{
    marginTop: string
    title: boolean
    backgroundTitle?: string
    sectionTitle?: string
}>()
</script>

<template>
    <section :style="{marginTop: `${marginTop}px`}">
      <div class="section-title" v-if="title">
        <h1 class="background-title">{{ backgroundTitle }}</h1>
        <p class="section-title__text">{{ sectionTitle }}</p>
      </div>
      <slot></slot>
    </section>
</template>

<style scoped>
.section-title {
    position: relative;
    margin-bottom: 60px;
}
.section-title__text {
    position: absolute;
    bottom: -20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 48px;
    font-weight: 600;
}

@media (max-width: 600px) {
    .section-title__text {
        font-size: 32px;
    }
}
</style>