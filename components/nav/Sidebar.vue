<template>
  <div id="sidebar" @click="closeSidebarPanel">
    <div v-if="showPanel" class="sidebar-outside"></div>
    <transition name="slide">
      <div v-if="showSideBar" class="sidebar-panel">
        <NavElement icon="home" text="about" link-to="/"> </NavElement>
        <NavElement
          icon="window-restore"
          text="projects"
          link-to="/projects"
        ></NavElement>
        <NavElement icon="book-open" text="blog" link-to="/blog"></NavElement>
        <NavElement icon="archway" text="brücke" link-to="/brucke"></NavElement>
        <NavElement icon="pen" text="contact" link-to="/contact"></NavElement>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavElement from './NavElement.vue';
import { store, mutations } from '@/store/store.ts';

export default Vue.extend({
  components: {
    NavElement
  },
  data() {
    return {
      width: 0,
      can: false,
      body: ''
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
      if (this.width < 768 && store.isNavOpen) {
        return true;
      }
      return false;
    },

    isPanelOpen() {
      return store.isNavOpen;
    }
  },
  watch: {
    showPanel() {
      document.body.style.overflow = this.showPanel ? 'hidden' : '';
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
  }
});
</script>
