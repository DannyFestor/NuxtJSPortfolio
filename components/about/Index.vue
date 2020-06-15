<template>
  <section id="about">
    <p class="subtitle">
      What I do
    </p>
    <web></web>
    <datascience></datascience>
  </section>
</template>

<script>
import web from './Web';
import datascience from './Data';
export default {
  components: {
    web,
    datascience
  }
}
</script>
