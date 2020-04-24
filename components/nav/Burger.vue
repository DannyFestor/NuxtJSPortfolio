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

<style>
.hidden {
  visibility: hidden;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 30;
  border: 0;
  border-radius: 0;
  transition: transform 0.5s;
}

.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.5s, opacity 0.3s, background-color 0.5s;
}

.burger-1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-3 {
  -webkit-transform: translateY(6px);
  transform: translateY(6px);
}

#burger.active .burger-1 {
  transform: rotate(45deg);
}

#burger.active .burger-2 {
  opacity: 0;
}

#burger.active .burger-3 {
  transform: rotate(-45deg);
}

</style>
