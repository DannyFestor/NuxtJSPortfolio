<template>
  <div class="sidebar">
    <div
      v-if="isPanelOpen"
      class="sidebar-outside"
      @click="closeSidebarPanel"
    ></div>

    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        Text
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { store, mutations } from '@/store/store.ts';

export default Vue.extend({
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    }
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav
  }
});
</script>

<style>
.slide-enter-active,
.slide-enter-leave {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms eas-in 0s;
}

.sidebar-outside {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #130f40;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 20;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}
</style>
