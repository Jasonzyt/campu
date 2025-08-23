import { defineStore } from "pinia";

export const useStateStore = defineStore("state", {
  state: () => ({
    navBarPinned: false,
  }),
  actions: {},
});
