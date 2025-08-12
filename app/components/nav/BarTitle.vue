<template>
  <div class="title select-none font-serif font-bold text-gray-700 text-lg transition-opacity duration-300" :class="show ? 'opacity-100' : 'opacity-0'">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  show: Boolean
})
</script>

<style scoped>
</style>