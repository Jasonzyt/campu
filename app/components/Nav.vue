<template>
  <!-- <NavMobileBar :items="items" :show="barPinned" /> -->
  <ul
    class="bg-white dark:bg-gray-900 navbar flex px-4 max-sm:hidden"
    :style="barPinned || itemShow ? '' : 'background-color: rgba(0, 0, 0, 0)'"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <li
      class="inline-flex px-4 justify-center items-center cursor-pointer"
      index="logo"
      @click="handleClick('')"
    >
      <UAvatar
        class="inline-block mr-4"
        size="md"
        src="https://avatars.githubusercontent.com/u/66063199"
        alt="avatar"
      /><!-- replaceable -->
      <Transition name="fade">
        <NavBarTitle :show="itemShow || barPinned"
          >ZYT's Blog<!-- replaceable --></NavBarTitle
        >
      </Transition>
    </li>
    <div class="flex-grow" />
    <Transition name="fade" v-for="item in items">
      <NavBarItem
        :show="itemShow || barPinned"
        :index="item.index"
        :key="item.index"
        @click="handleClick"
      >
        <Icon class="mr-2" :name="item.icon" />
        {{ item.text }}
      </NavBarItem>
    </Transition>
  </ul>
</template>

<script setup lang="ts">
const items = [
  { index: "blog", text: "Blog", icon: "i-mdi-feather" },
  { index: "gallery", text: "Gallery", icon: "i-bxs-photo-album" },
  { index: "about", text: "About", icon: "i-material-symbols-person" },
];

const store = useMyStore();
const barPinned = ref(false);

watch(
  () => store.navBarPinned,
  (newValue) => {
    barPinned.value = newValue;
    itemShow.value = newValue;
  }
);

const itemShow = ref(barPinned.value);
const handleMouseOver = () => {
  itemShow.value = true;
};
const handleMouseLeave = () => {
  itemShow.value = false;
};

const handleClick = (index: string) => {};
</script>

<style scoped>
.navbar {
  width: 100vw;
  height: 60px;
  position: fixed;
  border-bottom: 0;
  box-shadow: v-bind("barPinned ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : 'none'");
  z-index: 9;
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
}

.navbar:hover {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
}
</style>
