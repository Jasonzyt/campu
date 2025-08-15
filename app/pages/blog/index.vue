<template>
  <div class="main">
    <BlogList :columns="1" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Blogs",
});
</script>

<style>
@media screen and (min-width: 1000px) {
  .el-input {
    width: 600px;
  }
}
</style>

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
