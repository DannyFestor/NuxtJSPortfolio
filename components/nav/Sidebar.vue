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
