<script setup lang="ts">
import { ref } from 'vue'
import NavBarItem from './NavBarItem.vue'
import NavBarTitle from './NavBarTitle.vue'
import MobileNavBar from './MobileNavBar.vue'
import $config from '@/_config'

const props = defineProps<{
  pinned: boolean
}>()

defineEmits<{ select: [index: string] }>()

let itemShow = ref(props.pinned)
function handleMouseOver() {
  if (!props.pinned) {
    itemShow.value = true
  }
}
const handleMouseLeave = () => {
  if (!props.pinned) {
    itemShow.value = false
  }
}

const items = [
  { index: 'articles', text: 'Articles', icon: 'IconFeather' },
  { index: 'gallery', text: 'Gallery', icon: 'IconImage' },
  { index: 'about', text: 'About', icon: 'IconUser' }
]
</script>

<template>
  <MobileNavBar :items="items" :show="pinned" @select="$emit('select', $event)" />
  <el-menu class="navbar hidden-xs-only" mode="horizontal" :ellipsis="false" @select="$emit('select', $event)"
    @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <el-menu-item class="avatar" index="logo">
      <el-avatar>
        <img :src="$config.avatar" />
      </el-avatar>
      <NavBarTitle :show="itemShow || pinned">{{ $config.title }}</NavBarTitle>
    </el-menu-item>
    <div class="flex-grow" />
    <NavBarItem v-for="item in items" :show="itemShow || pinned" :index="item.index" :key="item.index">
      <el-icon>
        <component :is="item.icon" />
      </el-icon>
      {{ item.text }}
    </NavBarItem>
  </el-menu>
</template>

<style scoped>
.el-menu {
  box-shadow: none;
}

.navbar {
  --el-menu-active-color: #666;
  --el-menu-hover-text-color: #409eff;
  --el-menu-text-color: #666;
  /* --el-menu-bg-color: #fff; */
  --el-menu-hover-bg-color: rgba(0, 0, 0, 0);
  --el-menu-border-color: rgba(0, 0, 0, 0);
  padding: 0 1rem 0 1rem;
  width: 100vw;
  position: fixed;
  border-bottom: 0;
  background-color: v-bind("itemShow || pinned ? '#fff' : 'rgba(0, 0, 0, 0)'");
  box-shadow: v-bind("pinned ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : 'none'");
  z-index: 9;
  transition:
    background-color 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;
}

.navbar:hover {
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2) !important;
}

.el-menu--horizontal>.el-menu-item,
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 0;
}
</style>
