<template>
  <Welcome />
  <div class="main">
    <section class="mb-8" id="pinned">
      <h2 class="mb-4 font-bold text-xl">
        <Icon class="align-text-top" name="my:anchor" size="20px" />
        Discovery
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink v-for="(blog, index) in pinnedBlogs" :to="blog.path">
          <div
            class="flex relative items-center h-52 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave(index)"
          >
            <NuxtImg
              class="size-full object-cover transition-transform duration-500"
              :src="blog.cover"
              alt="cover"
              ref="pin-covers"
            />
            <Transition name="fade">
              <div
                class="absolute flex justify-center items-center text-center w-full h-24 p-4 bg-[rgba(0,0,0,0.6)] text-white text-xl font-medium font-sans"
                v-show="pinnedShowTitles.at(index) ?? isTouch"
              >
                {{ blog.title }}
              </div>
            </Transition>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

useHead({
  title: null,
});

const pinnedShowTitles: Ref<boolean[]> = ref([]);
const pinCovers = useTemplateRef("pin-covers");
const isTouch = ref(false);

const handleMouseEnter = (index: number) => {
  if (isTouch.value) {
    return;
  }
  if (pinCovers.value) {
    pinCovers.value[index]?.$el?.classList.add("scale-125");
  }
  pinnedShowTitles.value[index] = true;
};

const handleMouseLeave = (index: number) => {
  if (isTouch.value) {
    return;
  }
  if (pinCovers.value) {
    pinCovers.value[index]?.$el?.classList.remove("scale-125");
  }
  pinnedShowTitles.value[index] = false;
};

const pinnedBlogs = await useAsyncData(() =>
  queryCollection("blog").where("pinned", ">", 0).order("created", "DESC").all()
).then((res) => {
  pinnedShowTitles.value.fill(isTouch.value, 0, res.data.value?.length);
  return res.data.value;
});

onMounted(() => {
  isTouch.value = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouch.value) {
    pinnedShowTitles.value.fill(true);
  }
});
</script>

<style scoped>
.main {
  padding: 75px;
  margin: 0 auto;
  max-width: 1200px;
}

@media screen and (max-width: 1000px) {
  .main {
    padding: 40px 40px;
  }
}
</style>
