<template>
  <Head>
    <meta name="description" content="ZYT's Campu-site Blog" />
    <meta name="keywords" content="zyt,jasonzyt,campu,blog,bio,personal" />
  </Head>

  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: any) => {
    return titleChunk ? `${titleChunk} | ZYT's Campu-site` : "ZYT's Campu-site";
  },
});
</script>
