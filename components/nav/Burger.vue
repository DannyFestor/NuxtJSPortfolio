<template>
  <div id="burger" :class="{ active: isBurgerActive }" @click="toggle">
    <div class="burger-bar burger-1"></div>
    <div class="burger-bar burger-2"></div>
    <div class="burger-bar burger-3"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { store, mutations } from '@/store/store.ts';

export default Vue.extend({
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
});
</script>
