<script setup lang="ts">
useHead({
  title: null
})

const handleMouseEnter = (a: any) => {
  if (isTouchScreen()) {
    return
  }
  a.show.value = true
}

const handleMouseLeave = (a: any) => {
  if (isTouchScreen()) {
    return
  }
  a.show.value = false
}
</script>

<template>
  <MyWelcome />
  <div class="main">
    <!-- <section class="pinned">
      <h2>
        <el-icon :size="20">
          <IconAnchor />
        </el-icon>
        Pinned
      </h2>
      <el-row :gutter="20">
        <el-col v-for="a in pinnedArticles" :key="a.slug" :span="8" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <RouterLink :to="`/articles/${a.slug}`">
            <el-card class="pinned-card" :style="{ backgroundImage: `url(${a.cover})` }"
              @mouseenter="handleMouseEnter(a)" @mouseleave="handleMouseLeave(a)">
              <Transition name="fade">
                <div class="title" v-show="a.show.value">
                  <h1>{{ a.title }}</h1>
                </div>
              </Transition>
            </el-card>
          </RouterLink>
        </el-col>
      </el-row>
    </section>
    <section class="recent">
      <h2>
        <el-icon :size="20">
          <IconNews />
        </el-icon>
        Recent
      </h2>
      <ArticleList :articles="recentArticles" :columns="2" />
    </section> -->
  </div>
</template>

<style scoped>
.main {
  padding: 75px;
  margin: 0 auto;
  max-width: 1200px;
}

section {
  margin-bottom: 30px;
}

h2 {
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
  font-size: 20px;
}

.title {
  width: 100%;
  height: 80px;
  margin-top: 55px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.title h1 {
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  width: 100%;
}

.pinned-card {
  --el-card-border-radius: 15px;
  --el-card-padding: 0;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 20px;
}

.article-card {
  --el-card-border-radius: 15px;
  --el-card-padding: 0;
  height: 150px;
}

@media screen and (max-width: 1000px) {
  .main {
    padding: 40px 40px;
  }

  .pinned-card {
    height: 150px;
  }

  .title {
    margin-top: 34px;
  }
}
</style>
