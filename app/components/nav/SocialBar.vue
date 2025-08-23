<template>
  <div class="social">
    <NuxtLink class="mx-4" v-for="social in socials" :key="social.website" :to="social.url" target="_blank">
      <Icon :name="social.icon" mode="svg" :size="size" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
  },
});

const { variables: vars } = useAppConfig();
const socials = computed(() => {
  return vars.socials.filter((social) => vars.welcome.displaySocials.includes(social.website));
});
</script>

<style scoped>
.social {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
