<template>
  <Head>
    <meta name="description" :content="config.siteMeta.description" />
    <meta name="keywords" :content="config.siteMeta.keywords.join(',')" />
  </Head>

  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const config = useAppConfig();
useHead({
  titleTemplate: (titleChunk: any) => {
    return titleChunk ? `${titleChunk} | ${config.siteMeta.name}` : config.siteMeta.name;
  },
});
</script>
