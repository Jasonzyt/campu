import { defineStore } from "pinia";

export const useMyStore = defineStore("my", {
  state: () => ({
    navBarPinned: false,
  }),
  actions: {},
});
