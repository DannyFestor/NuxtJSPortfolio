<template>
  <div>
    <hero></hero>
    <about></about>
    <projects></projects>
    <contact></contact>
  </div>
</template>

<script>
import hero from '../components/hero';
import about from '../components/about/Index';
import projects from '../components/projects/index';
import contact from '../components/contact';

export default {
  components: {
    hero,
    about,
    projects,
    contact
  }
}
</script>
