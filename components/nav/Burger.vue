<template>
  <div
    id="burger"
    class="burger-button"
    :class="{ active: isBurgerActive }"
    @click="toggle"
  >
    <span class="burger-bar burger-1"></span>
    <span class="burger-bar burger-2"></span>
    <span class="burger-bar burger-3"></span>
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
