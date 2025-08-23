<template>
  <li
    class="item inline-flex justify-center items-center font-semibold ml-4"
    :class="show ? 'opacity-100' : 'opacity-0'"
    :style="{ '--border-width': borderWidth }"
    :index="index"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <NuxtLink :to="to" class="w-full h-full inline-flex items-center" :target="target">
      <slot />
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  show: Boolean,
  index: String,
  to: String,
  target: {
    type: String,
    default: "_self",
  },
});

const borderWidth = ref("0");

const handleMouseOver = () => {
  borderWidth.value = "90%";
};
const handleMouseLeave = () => {
  borderWidth.value = "0";
};
</script>

<style scoped>
.item {
  font-size: 1.05rem;
  margin-top: 1px !important;
  padding: 0 10px;
  color: rgb(var(--color-gray-600));
  position: relative;
  cursor: pointer;
  transition: border-bottom 0.4s ease-in-out, color 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.item::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  opacity: 100%;
  background-color: var(--ui-color-primary-500);
  max-width: var(--border-width, 0);
  transition: max-width 0.25s ease-in-out;
}

.item:hover {
  color: var(--ui-color-primary-500);
}
</style>
