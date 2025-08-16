<template>
  <div class="grid gap-8" :class="`grid-cols-${columns}`">
    <div v-for="(blog, index) in list" :key="blog.slug">
      <BlogListItem :blog="blog" :cover-pos="index % 2 != 0 ? 'left' : 'right'" />
    </div>
  </div>
  <!-- TODO: Auto load more like gallery -->
</template>

<script lang="ts" setup>
import type { BlogCollectionItem } from "~/utils";

const props = defineProps({
  columns: {
    type: Number,
    default: 1,
  },
  query: {
    type: Object,
    default: () => queryCollection("blog").order("created", "DESC"),
  },
});

const list = ref<BlogCollectionItem[]>([]);
const loadedCount = ref(0);
const endReached = ref(false);

async function loadBlogs(count: number) {
  const blogs = await useAsyncData(() => props.query.limit(count).skip(loadedCount.value).all()).then((res) => {
    if (!res.data.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found",
        fatal: true,
      });
    }
    return res.data.value as BlogCollectionItem[];
  });
  list.value.push(...blogs);
  loadedCount.value += blogs.length;
  endReached.value = blogs.length < count;
}

loadBlogs(10);
</script>

<style scoped></style>
