<template>
  <div class="rounded-xl bg-elevated py-2 px-4 flex flex-col text-3xl">
    <div v-if="titleTopLeft || titleTopRight" class="flex mt-1">
      <span v-if="titleTopLeft" class="text-xl font-bold text-muted">{{ titleTopLeft }}</span>
      <div v-if="titleTopRight" class="grow" />
      <span v-if="titleTopRight" class="text-xl font-bold text-muted">{{ titleTopRight }}</span>
    </div>
    <span class="flex-1 flex" :class="`justify-${horizontalAlign} items-${verticalAlign}`"><slot /></span>
    <div v-if="titleBottomLeft || titleBottomRight" class="flex">
      <span v-if="titleBottomLeft" class="text-xl font-bold text-muted">{{ titleBottomLeft }}</span>
      <div v-if="titleBottomRight" class="grow" />
      <span v-if="titleBottomRight" class="text-xl font-bold text-muted">{{ titleBottomRight }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  titleTopLeft: {
    type: String,
  },
  titleTopRight: {
    type: String,
  },
  titleBottomLeft: {
    type: String,
  },
  titleBottomRight: {
    type: String,
  },
  verticalAlign: {
    type: String,
    default: "center",
    validator: (value: string) => ["left", "center", "right", "normal"].includes(value),
  },
  horizontalAlign: {
    type: String,
    default: "center",
    validator: (value: string) => ["left", "center", "right", "normal"].includes(value),
  },
});
</script>
