<template>
  <div id="sidebar">
    {{ width }} {{ can }}
    <div
      v-if="showPanel"
      class="sidebar-outside"
      @click="closeSidebarPanel"
    ></div>

    <transition name="slide">
      <div v-if="showSideBar" class="sidebar-panel">
        {{ width }} {{ can }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { store, mutations } from '@/store/store.ts';

export default Vue.extend({
  data() {
    return {
      width: 0,
      can: false
    };
  },
  computed: {
    showSideBar() {
      if (this.width >= 768 || store.isNavOpen) {
        return true;
      }
      return false;
    },

    showPanel() {
      const body = document.getElementsByTagName('body');
      if ( this.width < 768 && store.isNavOpen) {
        body[0].style.overflow = 'hidden';
        return true;
      }
      body[0].style.overflow = 'auto';
      return false;
    },

    isPanelOpen() {
      return store.isNavOpen;
    }
  },
  mounted() {
    window.addEventListener('resize', this.windowResize);
    this.width = window.innerWidth;
  },
  destroyed() {
    window.removeEventListener('resize', this.windowResize);
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
    windowResize() {
      this.width = window.innerWidth;
    }
  },
});
</script>
