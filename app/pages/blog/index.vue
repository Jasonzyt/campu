<template>
  <div class="main">
    <!-- TODO: search -->
    <BlogList :columns="1" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Blogs",
});
</script>

<style scoped>
.main {
  padding: 100px 6rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .main {
    padding: 100px 2rem 2rem;
  }
}
</style>
