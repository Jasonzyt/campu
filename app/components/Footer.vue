<script setup lang="ts">
import { updateHitokoto } from "~/utils";

// setInterval(updateHitokoto, 5 * 60 * 1000)
const hitokoto = updateHitokoto();

const documentWidth = ref(0);
onMounted(() => {
  documentWidth.value = document.documentElement.clientWidth;
});

const copyright = `&copy; ZYT &nbsp;${new Date().getFullYear()}`;
</script>

<template>
  <div class="footer">
    <div class="footer-content">
      <slot name="default">
        <UPopover
          mode="hover"
          :content="{ side: documentWidth <= 640 ? 'bottom' : 'right' }"
        >
          <span class="text-[16px]">
            {{ hitokoto.hitokoto }}
          </span>
          <template #content>
            <div class="px-3 py-2 text-sm">——{{ hitokoto.from }}</div>
          </template>
        </UPopover>
      </slot>
      <p class="h-4"></p>
      <slot name="copyright">
        <p v-html="copyright"></p>
      </slot>
      <p class="powered-by">
        Powered by
        <a href="https://github.com/Jasonzyt/campu" class="campu">
          <Icon name="my:campu-logo" size="0.8em" />
        </a>
        with
        <a href="https://vuejs.org/" class="nuxt">
          <Icon name="logos:nuxt" size="0.8em" />
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: 12rem;
  color: var(--color-gray-600);
  text-align: center;
  padding: 50px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
