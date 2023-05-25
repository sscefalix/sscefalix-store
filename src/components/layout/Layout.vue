<script setup lang="ts">

</script>

<template>
    <div class="wrapper">
      <div class="container">
        <slot />
      </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 0 12px;
}
.container {
    max-width: 1240px;
    margin: 0 auto;
}
</style>