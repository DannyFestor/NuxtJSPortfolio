<template>
  <nuxt-link :to="linkTo" class="navitem">
    <div class="faicon"><font-awesome-icon class="fa-lg" :icon="icon" /></div><div> {{ text }}</div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    text: String,
    icon: String,
    linkTo: String,
  }
});
</script>
