<template>
  <div>
    <Burger />
    <Sidebar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Burger from '~/components/nav/Burger.vue';
import Sidebar from '~/components/nav/Sidebar.vue';

export default Vue.extend({
  components: {
    Burger,
    Sidebar
  }
});
</script>

<style>

</style>
