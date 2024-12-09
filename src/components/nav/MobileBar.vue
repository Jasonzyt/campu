<script setup lang="ts">
import $config from '@/utils/_config'

defineProps<{ items: { index: string; text: string; icon: string }[], show: boolean }>()

const $emit = defineEmits<{ select: [index: string] }>()

let realNavShow = ref(false)

const handleExpand = () => {
  realNavShow.value = !realNavShow.value
  document.body.style.overflow = realNavShow.value ? 'hidden' : 'auto'
}

const handleSelect = (index: string) => {
  $emit('select', index)
  handleExpand()
}
</script>

<template>
  <div class="hidden-sm-and-up">
    <Transition name="fade">
      <div class="logo" v-show="show">
        <NavBarTitle :show="true">Jasonzyt's Blog</NavBarTitle>
      </div>
    </Transition>
    <div class="expand" @click="handleExpand">
      <MyIcon :name="realNavShow ? 'Close' : 'Options'" size="1.5rem" color="#666" />
    </div>
    <Transition name="fade">
      <div class="real-nav" v-if="realNavShow">
        <el-avatar :size="80">
          <img :src="$config.avatar" alt="avatar" />
        </el-avatar>
        <h1>Jasonzyt</h1>
        <p class="quote">
          <el-icon>
            <MyIcon name="QuoteLeft" />
          </el-icon>
          <span>Do the right thing, wait to get fired.</span>
          <el-icon>
            <MyIcon name="QuoteRight" />
          </el-icon>
        </p>
        <NavSocialBar class="social" :size="24" />
        <el-divider />
        <el-menu mode="vertical" @select="handleSelect">
          <el-menu-item index="home">
            <el-icon>
              <MyIcon name="Home" />
            </el-icon>
            Home
          </el-menu-item>
          <el-menu-item v-for="item in items" :key="item.index" :index="item.index">
            <MyIcon :name="item.icon"></MyIcon>
            {{ item.text }}
          </el-menu-item>
        </el-menu>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.logo {
  position: fixed;
  top: 1.2rem;
  left: 2rem;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0);
  z-index: 8;
}

.expand {
  position: fixed;
  top: 1.2rem;
  right: 2rem;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
}

.el-divider {
  margin: 12px 0;
}

.real-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
  background-color: #fff;
  color: #333;
  text-align: center;
  z-index: 9;
}

.real-nav .el-avatar {
  display: inline-block;
}

.real-nav h1 {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.real-nav .el-menu {
  --el-menu-border-color: rgba(0, 0, 0, 0);
}

.real-nav .el-menu-item {
  font-size: 1rem;
  color: #666;
}

.quote {
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  width: fit-content;
  color: #666;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: calc(100vw / 26);
  font-family: Ubuntu, serif;
}

.quote .el-icon+span {
  margin-left: 0.5rem;
}

.quote span {
  user-select: none;
}

.quote span+.el-icon {
  margin-left: 0.5rem;
}
</style>