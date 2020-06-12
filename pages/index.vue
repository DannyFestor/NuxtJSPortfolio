<template>
  <div>
    <hero></hero>
    <about></about>
    <projects></projects>
  </div>
</template>

<script>
import hero from '../components/hero';
import about from '../components/about/Index';
import projects from '../components/projects/index';

export default {
  components: {
    hero,
    about,
    projects
  }
}
</script>
