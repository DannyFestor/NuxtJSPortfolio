<template>
  <nav id="topbar">
    <div id="infobanner">
      <h1>festor.info</h1>
    </div>
    <Burger />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Burger from './Burger.vue';

export default Vue.extend({
  components: {
    Burger
  }
})
</script>