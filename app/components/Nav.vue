<template>
  <!-- TODO: Mobile bar -->
  <ul
    class="bg-white dark:bg-gray-800 navbar flex px-4 max-sm:hidden"
    :style="barPinned || itemShow ? '' : 'background-color: rgba(0, 0, 0, 0)'"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <li class="inline-flex px-4 justify-center items-center cursor-pointer" index="logo" @click="$router.push('/')">
      <UAvatar class="inline-block mr-4" size="md" :src="vars.nav.avatar" alt="avatar" />
      <Transition name="fade">
        <NavBarTitle :show="itemShow || barPinned">{{ vars.nav.title }}</NavBarTitle>
      </Transition>
    </li>
    <div class="flex-grow" />
    <Transition name="fade" v-for="item in items">
      <NavBarItem :show="itemShow || barPinned" :key="item.label" :index="item.label" :to="item.to" :target="item.target ?? '_self'">
        <Icon class="mr-2" :name="item.icon" />
        {{ item.label }}
        <Icon v-if="item.target === '_blank'" class="size-3.5 mb-1.5" name="i-lucide:arrow-up-right" />
      </NavBarItem>
    </Transition>
  </ul>
</template>

<script setup lang="ts">
// TODO: auto hide bar
const { variables: vars } = useAppConfig();
const items = vars.nav.links;

const state = useStateStore();

const barPinned = ref(false);
const itemShow = ref(barPinned.value);

const handleMouseOver = () => {
  itemShow.value = true;
};

const handleMouseLeave = () => {
  itemShow.value = false;
};

watch(
  () => state.navBarPinned,
  (newValue) => {
    barPinned.value = newValue;
    itemShow.value = newValue;
  }
);
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
