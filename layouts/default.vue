<template>
  <div>
    <TopNav />
    <Sidebar />
    <div id="content">
      <nuxt />
      <FooterElement />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopNav from '~/components/nav/TopNav.vue';
import Sidebar from '~/components/nav/Sidebar.vue';
import FooterElement from '~/components/FooterElement.vue';

export default Vue.extend({
  components: {
    TopNav,
    Sidebar,
    FooterElement
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    };
  }
});
</script>

<style>

</style>
