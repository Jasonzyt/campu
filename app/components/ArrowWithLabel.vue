<template>
  <div class="relative flex items-center box-content">
    <span class="absolute w-full text-2xl text-center font-medium text-toned top-3.5" v-html="label"></span>
    <Icon name="my:long-arrow" :style="{ width, height, color }" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "340px",
  },
  height: {
    type: String,
    default: "24px",
  },
  color: {
    type: String,
    default: "#000000",
  },
});
</script>
